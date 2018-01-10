var rp = require('request-promise');

exports.handler = function (req, res) {

    const promises = req.events.map(event => {

        var msg = event.message.text;
        var reply_token = event.replyToken;
        const ChannelAccessToken = process.env['CHANNEL_ACCESS_TOKEN'];

        var returnMessage = msg;

        var messages = [
            {
              "type":"text",
              "text":msg
            }
          ];

        switch(msg){
            case 'Leo':
            case 'leo':
                messages[0].text = '我大李奧有大理抱送你豪華大禮包';
                break;
            case 'pepe':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://cdn.pixabay.com/photo/2016/03/22/04/08/pepe-the-frog-1272162_640.jpg';
                messages[0].previewImageUrl = 'https://cdn.pixabay.com/photo/2016/03/22/04/08/pepe-the-frog-1272162_640.jpg';
                break;
            
            default:
                messages[0].text = msg;
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
              messages
            //   messages:[
            //     {
            //       "type":"text",
            //       "text":returnMessage
            //     }
            //   ]
            // }
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
