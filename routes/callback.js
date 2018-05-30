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

					var exports_function = require('/routes/money');
					exports_function.create;

					var express = require('express')
					  , routes = require('./routes')
					  , user = require('./routes/user')
					  , money = require('./routes/money')

					var app = express();

					  app.set('port', process.env.PORT || 3000);
					app.set('views', __dirname + '/views');
					app.set('view engine', 'ejs');
					app.use(express.favicon());
					app.use(express.logger('dev'));
					app.use(express.bodyParser());
					app.use(express.methodOverride());
					app.use(app.router);
					app.use(express.static(path.join(__dirname, 'public')));

					app.get('/routes/create', user.create);
					app.get('/money/create', money.create);

					http.createServer(app).listen(app.get('port'), function(){
					  console.log('Express server listening on port ' + app.get('port'));
					  if (global.genreMap === undefined) {
						     global.genreMap = new Map();
						 }

				break;

			case "2":
			case "3":break;
			case "4":break;
			case "5":break;
			default:break;
			}
		}


	}
};
