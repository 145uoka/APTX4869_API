
/*
 * GET home page.
 */

/*
 * Sample https://garafu.blogspot.jp/2017/05/node-http-httpss-request.html
 */

exports.create = function(req, res){
    var webclient = require("request");
    var hoge;
    webclient.get({
      url: "https://api.github.com/users/145uoka",
      headers: {
          // GitHubの時に必要
          "User-Agent": "Awesome-Octocat-App"
        },
      qs: {
        hoge: "hoge"
      }
    }, function (error, response, body) {
      hoge = JSON.stringify(body);
      res.send(body);
    });

};