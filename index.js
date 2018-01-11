var rp = require('request-promise');

exports.handler = function (req, res) {

    const promises = req.events.map(event => {

        var msg = event.message.text;
        var reply_token = event.replyToken;
        const ChannelAccessToken = process.env['CHANNEL_ACCESS_TOKEN'];

        var LeoArray =[
            '我大里奧有大理報送你豪華大禮包',
            '我大里奧糞起來!',
            'Leo is GOD, Don?',
            '嚇到射出來啦',
            '我又偷刷聲望啦',
            '怕.jpg', '我大里OH!', 
            '我想寫程式',
            '這點, 我並不認同!',
            '還記得訂便當我嗎?',
            'I am 心快活 CEO',
            '心快活我大快活！',
            'CheckMarx is the best!',
            '隊友都死光啦Q_Q',
            '我大四驅車你敢嘴?'
        ];

        var CoffeeArray = [
            'Cama','Seven','全家','路易莎',
            '太濃了吧,否則怎麼苦的說不出話'
        ];

        var FuckArray = [
            'https://i.imgur.com/rK5gG4q.png',
            'https://i.imgur.com/RvNBdjc.png',
            'https://i.imgur.com/i0qN9yh.png',
            'https://i.imgur.com/t8JUwcG.png',
            'https://i.imgur.com/BVm2QR9.png'
        ];

        var messages = [
            {
              "type":"text",
              "text": msg
            }
          ];
        
        needToReply = true;

        switch(msg){
            case 'Leo':
            case 'leo':
                messages[0].text = LeoArray[Math.floor(Math.random() * LeoArray.length)];
                break;
            case 'coffee':
            case '咖啡':
                messages[0].text = CoffeeArray[Math.floor(Math.random() * CoffeeArray.length)];
                break;
            case 'LEO':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/ll06UaU.png';
                messages[0].previewImageUrl = 'https://i.imgur.com/ll06UaU.png';
                break;
            case 'pepe':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://cdn.pixabay.com/photo/2016/03/22/04/08/pepe-the-frog-1272162_640.jpg';
                messages[0].previewImageUrl = 'https://cdn.pixabay.com/photo/2016/03/22/04/08/pepe-the-frog-1272162_640.jpg';
                break;

            case '親密度':
                var limit = 50000000;
                var intimacy = Math.floor(Math.random() * Math.floor(limit));
                messages[0].text = '李奧和腎液親密度+' + intimacy;
                break;

            case '吉戰力':
            case '戰鬥力':
                var limit = 9000;
                var intimacy = Math.floor(Math.random() * Math.floor(limit));
                messages[0].text = '今日' + msg + ':' + intimacy;
                break;
            
            case 'fuckyou':
                targetUrl = FuckArray[Math.floor(Math.random() * FuckArray.length)];
                messages[0].type = 'image';
                messages[0].originalContentUrl = targetUrl;
                messages[0].previewImageUrl = targetUrl;
                break;

            default:
                needToReply = false;
                //messages[0].text = msg;
                break;
        }

        if(needToReply){

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
                }
            };
    
            return rp(options)
            .then(function (response) {
                console.log("Success : " + response);
            }).catch(function (err) {
                console.log("Error : " + err);
            });

        }//Otherwiese no need to reply
    });

    Promise
    .all(promises)
    .then(() => res.json({success: true}));

};
