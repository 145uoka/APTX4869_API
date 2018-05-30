const LINE_CHANNEL_ACCESS_TOKEN = 'H8/A36FQTp9n8I4hYhZBBj3lpEN1+449PCHEgO2kmZjdEnQrkCaEbCKTz4C3vkMbvObpRDIj5tsZfwy1XA6bNVbkee0u6KAwdsPIzZD6891ZLWxzutbmkOsctnFEcwojBFloQnQsPZraboxudqsodgdB04t89/1O/w1cDnyilFU=';
exports.reply = function(req, res, next){
    var express = require('express');
    var bodyParser = require('body-parser');
    var request = require('request');
    var app = express();
    res.status(200).end();
    for (var event of req.body.events){

    	var userId =event.source.userId;

    	// 数値のみの正規表現を準備
    	var regex = new RegExp("^\d+$");

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

        if(event.type === 'message'){

          if(event.message.type === 'text'){

          if(regex.test(event.message.text)){
            console.log(regex.test(event.message.text));

            switch(global.genreMap.get(userId)){
               case "食費":
                var headers = {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer' + LINE_CHANNEL_ACCESS_TOKEN
                }
                var body = {
                  replyToken: event.replyToken,
                  messages: [{
                    type: 'text',
                    text: global.genreMap.get(userId) + 'の項目で' + event.message.text + '円の出費だね！'
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

          case "娯楽":break;
          case "ショッピング":break;
          case "交通費":break;
          case "生活費":break;
          default:break;
          }
        }
        }
      }

    }
  };
