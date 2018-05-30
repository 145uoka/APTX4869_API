const LINE_CHANNEL_ACCESS_TOKEN = 'H8/A36FQTp9n8I4hYhZBBj3lpEN1+449PCHEgO2kmZjdEnQrkCaEbCKTz4C3vkMbvObpRDIj5tsZfwy1XA6bNVbkee0u6KAwdsPIzZD6891ZLWxzutbmkOsctnFEcwojBFloQnQsPZraboxudqsodgdB04t89/1O/w1cDnyilFU=';
exports.reply = function(req, res, next){
	var express = require('express');
	var bodyParser = require('body-parser');
	var request = require('request');
	var app = express();
	res.status(200).end();
	for (var event of req.body.events){

		// LINEIDを準備
		var userId =event.source.userId;

		// 数値のみの正規表現を準備
		var regex = new RegExp("^\\d+$");

		if (event.type == 'message' && event.message.text == '食費'){
			var headers = {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
			}
			var body = {
					replyToken: event.replyToken,
					messages: [{
						type: 'text',
						text: '金額を入力してね♩'
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
			global.genreMap.set(userId, "1");
		}

		if (event.type == 'message' && event.message.text == '娯楽'){
			var headers = {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
			}
			var body = {
					replyToken: event.replyToken,
					messages: [{
						type: 'text',
						text: '金額を入力してね♩'
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
			global.genreMap.set(userId, "2");
		}

		if (event.type == 'message' && event.message.text == 'ショッピング'){

			var headers = {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
			}
			var body = {
					replyToken: event.replyToken,
					messages: [{
						type: 'text',
						text: '金額を入力してね♩'
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
			global.genreMap.set(userId, "3");
		}
		if (event.type == 'message' && event.message.text == '交通費'){

			var headers = {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
			}
			var body = {
					replyToken: event.replyToken,
					messages: [{
						type: 'text',
						text: '金額を入力してね♩'
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
			global.genreMap.set(userId, "4");
		}
		if (event.type == 'message' && event.message.text == '生活費'){
			regex.test(event.message.text)

			var headers = {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
			}
			var body = {
				replyToken: event.replyToken,
				messages: [{
					type: 'text',
					text: '金額を入力してね♩'
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
			global.genreMap.set(userId, "5");
		}

		if (event.type == 'message' && regex.test(event.message.text)){

			switch(global.genreMap.get(userId)){

			case "1" :

				var headers = {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
				}
				var body = {
					replyToken: event.replyToken,
					messages: [{
						type: 'text',
						text: '食費：' + event.message.text + '円'
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

				var headers = {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
					}
					var body = {
						replyToken: event.replyToken,
						messages: [{
							type: 'text',
							text: 'これで登録していい？',
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

				break;

			case "2":

			case "1" :

				var headers = {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
			}
				var body = {
					replyToken: event.replyToken,
					messages: [{
						type: 'text',
						text: '娯楽：' + event.message.text + '円'
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

				break;
			case "3":break;
			case "4":break;
			case "5":break;
			default:break;
			}
		}
	}
};
