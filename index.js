var request = require('request');

//Extract Lists - add more data here if needed.
var LeoArray =  require('data/_LeoArray.json');
var FuckArray = require('data/_FuckArray.json');
var WorkArray = require('data/_WorkArray.json');
var chokeArray = require('data/_chokeArray.json');
var ssdArray = require('data/_ssdArray.json');
var ceoArray = require('data/_ceoArray.json');
var hentaiArray = require('data/_hentaiArray.json');

exports.handler = function (req, res, callback) {

    console.log('TestData0415-8pm');
    console.log(JSON.stringify(req));

    const ChannelAccessToken = process.env['CHANNEL_ACCESS_TOKEN'];
    var _HeaderSetting = {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": " Bearer " + ChannelAccessToken
    };

    var messages = 'Now Testing...Fuck you, Don?';
    var reply_token = req.event.replyToken;
    var options = {
        method: 'POST',
        uri: "https://api.line.me/v2/bot/message/reply",
        headers: _HeaderSetting,
        json: true,
        body: {
            replyToken: reply_token,
            messages
        }
    };

    request.post(options, function (err, response, body) {

        conosle.log('success');
        callback(null, 'AND?');
    });

    callback(null, 'What the?');
};
