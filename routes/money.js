
/*
 * GET home page.
 */

exports.create = function(req, res){

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
};


exports.post = function(req, res){
	var webclient = require("request");

	var jsonData = {
			userId:"1",
			moneyReceptionFlag:"true",
			amount:"190000",
			genreId:"1"
	}

	   webclient.post({
	     url: "https://aptx4869web.herokuapp.com//api/moneyReception/store",
	     headers: {
	       "content-type": "application/json"
	     },
	     body: JSON.stringify(jsonData)
	   }, function (error, response, body){
	     console.log(body);
	   });
}
