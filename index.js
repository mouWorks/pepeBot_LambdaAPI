var rp = require('request-promise');

exports.handler = function (req, res) {

    const promises = req.events.map(event => {

        var msg = event.message.text;
        var reply_token = event.replyToken;
        const ChannelAccessToken = process.env['CHANNEL_ACCESS_TOKEN'];

        var returnMessage = msg;


        switch(msg){
            case 'Leo':
            case 'leo':
                returnMessage = '我大李奧有大理抱送你豪華大禮包';
                break;
            default:
                returnMessage = msg;
                break;
        }

        var options = {
            method: 'POST',
            uri: "https://api.line.me/v2/bot/message/reply",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Authorization": " Bearer " + ChannelAccessToken 
            },
            json: true,
            body: {
              replyToken: reply_token,
              messages:[
                {
                  "type":"text",
                  "text":returnMessage
                }
              ]
            }
        };

        return rp(options)
        .then(function (response) {
            console.log("Success : " + response);
        }).catch(function (err) {
            console.log("Error : " + err);
        });

    });

    Promise
    .all(promises)
    .then(() => res.json({success: true}));

};
