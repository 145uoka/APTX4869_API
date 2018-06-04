const LINE_CHANNEL_ACCESS_TOKEN = 'ac24azfUTQFkba8MwzUxWRcy5CtznZm1Qhc1hoB7/49kMhIM/yvXEbYgAcqwn8QUA6FyW7ytpinhw+3VQUFYjmt1pKKd8XxS2rdv8k1orlh4tjFyXQlKlkCfmrF64Miuzp/nZx2it1tlPLcUYunK9gdB04t89/1O/w1cDnyilFU=';
exports.reply = function(req, res, next){

	var express = require('express');
	var bodyParser = require('body-parser');
	var request = require('request');
	var http = require("http");
	var querystring = require("querystring");
	var StringDecoder = require('string_decoder').StringDecoder;
	var decoder = new StringDecoder('utf8');
	var app = express();
	res.status(200).end();

	var headers = {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
		}

	for (var event of req.body.events){

		// LINEIDを準備
		var userId =event.source.userId;
		console.log("★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★" + userId);

		// 数値のみの正規表現を準備
		var regex = new RegExp("^\\d+$");


		var replyMessage;

		if (event.type == 'message') {

			if (!regex.test(event.message.text)){
				switch(event.message.text) {
				case "食費":
					global.genreMap.set(userId, "1");
					break;
				case "娯楽":
					global.genreMap.set(userId, "2");
					break;
				case "ショッピング":
					global.genreMap.set(userId, "3");
					break;
				case "交通費":
					global.genreMap.set(userId, "4");
					break;
				case "生活費":
					global.genreMap.set(userId, "5");
					break;
				}

				switch(event.message.text) {
				case "食費":
				case "娯楽":
				case "ショッピング":
				case "交通費":
				case "生活費":
					replyMessage = '金額を入力してね♩';
					break;
				}
			} else {
				// 数字だったら
				var amount = event.message.text;

				var genreId = global.genreMap.get(userId);
				var isRegister = false;
				switch(genreId){

				case "1" :

					// メッセージ設定 「食費：〇〇円」
					replyMessage = '食費：' + amount + '円';
					isRegister = true;
					break;

				case "2":

					// メッセージ設定 「娯楽：〇〇円」
					replyMessage = '娯楽：' + amount + '円';
					isRegister = true;
                    break;

				case "3":
					replyMessage = 'ショッピング' + amount + '円';
					isRegister = true;
                    break;
				case "4":
					replyMessage = '交通費：' + amount + '円';
					isRegister = true;
                    break;
				case "5":
					replyMessage = '生活費：' + amount + '円';
					isRegister = true;
                    break;

				default:break;
				}
			}
		}

		var body = {
				replyToken: event.replyToken,
				messages: [{
					type: 'text',
					text: replyMessage
				}]
			}

		var url = 'https://api.line.me/v2/bot/message/reply';
		request({
			url: url,
			method: 'POST',
			headers: headers,
			body: body,
			json: true
		});

		if (isRegister) {
		    var exports_function = require('./money');
	        exports_function.post(amount, genreId, userId);
		}
	}
};
