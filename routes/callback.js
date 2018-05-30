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

			var amount = event.message.text;

			switch(global.genreMap.get(userId)){

			case "1" :

				// メッセージ設定 「食費：〇〇円」
				var headers = {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
				}
				var body = {
					replyToken: event.replyToken,
					messages: [{
						type: 'text',
						text: '食費：' + amount + '円'
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

				// メッセージ設定「これで登録していい？」
				var headers = {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
					}
					var body = {
						replyToken: event.replyToken,
						messages: [{
							type: 'text',
							text: 'これで登録していい？'
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


					var http = require("http");
					var querystring = require("querystring");
					var StringDecoder = require('string_decoder').StringDecoder;
					var decoder = new StringDecoder('utf8');

					// 送信データ作成
						   var jsonData = {
					           userId:"1",
					           moneyReceptionFlag:"true",
					           amount:"190000",
					           genreId:"1"
					           }
					var qs_data = JSON.stringify(jsonData)
					console.log(qs_data);
					var options = {
					    hostname: '192.168.50.5',
					    port: 8080,
					    path: '/APTX4869/api/moneyReception/store',
					    method: 'POST',
					    headers: {
					    'Content-Type': 'application/json'
					    }
					};

				break;

			case "2":
			case "3":break;
			case "4":break;
			case "5":break;
			default:break;
			}
		}

		// リクエスト定義と応答処理設定
		var apiRes;
		var req = http.request(options, function(res) {
		    console.log("STATUS: ", res.statusCode);
		    console.log("HEADERS: ", JSON.stringify(res.headers));
		    res.setEncoding('utf8');

		    // 応答受信処理
		    res.on('data', function(chunk){
		    	apiRes = chunk;
		    console.log("BODY: ", chunk);
		    // Query String -> JSON形式へ変換
		    var rcv_text = querystring.parse(decoder.write(chunk))
		        var rcv_json_text = JSON.stringify(rcv_text);
		        var rcv_json = JSON.parse(rcv_json_text);
		        console.log("json text = ", rcv_json.message);
		        console.log("json number = ", rcv_json.sound);
		        console.log("json boolean = ", rcv_json.reply);
		    });
		    // 応答終了処理
		    res.on('end', function(){
		    console.log('これ以上データはありません。')
		    });
		});
		// 送信のエラー処理
		req.on('error', function(e){
		  console.log( "エラー発生: ", e.message);
		});
		// データ送信(GET)
		req.write(qs_data);
		req.end();

		res.send("respond create with a resource");
	}
};
