var rp = require('request-promise');

exports.handler = function (req, res) {

    const promises = req.events.map(event => {

        var msg = event.message.text.toUpperCase();
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

        var WorkArray = [
            'https://i.imgur.com/KDBfidU.png',
            'https://i.imgur.com/9nRAc2u.png',
            'https://i.imgur.com/O4dHfuT.png',
            'https://i.imgur.com/ONAhcWb.png',
            'https://i.imgur.com/fUJtP4S.png',
            'https://i.imgur.com/H5rW4df.png'
        ];

        var messages = [
            {
              "type":"text",
              "text": msg
            }
          ];
        
        needToReply = true;

        //Text is switch to UpperCase()
        switch(msg){

            case '6':
                var limit = 15;
                var randomNumber = [Math.floor(Math.random() * limit)];
                messages[0].text = "6".repeat(randomNumber);
                break;

            case 'U':
                var limit = 30;
                var randomNumber = [Math.floor(Math.random() * limit)];
                var randomUString = "U".repeat(randomNumber);
                messages[0].text = randomUString + '起來!';
                break;
                
            case 'LEO':
                messages[0].text = LeoArray[Math.floor(Math.random() * LeoArray.length)];
                break;
            case 'Coffee':
            case '咖啡':
                messages[0].text = CoffeeArray[Math.floor(Math.random() * CoffeeArray.length)];
                break;

            case '打':
                messages[0].type = 'video';
                messages[0].originalContentUrl = 'https://i.imgur.com/W2vrwqO.gif';
                messages[0].previewImageUrl = 'https://i.imgur.com/W2vrwqO.gif';
                break;

            case 'PEPE':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://ih1.redbubble.net/image.270666598.0736/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg';
                messages[0].previewImageUrl = 'https://ih1.redbubble.net/image.270666598.0736/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg';
                break;

            case 'LEO嗆':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/NyZi7R5.png';
                messages[0].previewImageUrl = 'https://i.imgur.com/NyZi7R5.png';
                break;

            case 'HUMM?':
            case 'HUMM':
            case 'HUMMMM':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/9uQmv6y.jpg';
                messages[0].previewImageUrl = 'https://i.imgur.com/9uQmv6y.jpg';
                break;

            case 'R!!':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/1JtJplI.jpg';
                messages[0].previewImageUrl = 'https://i.imgur.com/1JtJplI.jpg';
                break;

            case 'LEO打':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/BOZzmrA.png';
                messages[0].previewImageUrl = 'https://i.imgur.com/BOZzmrA.png';
                break;

            case 'SSD':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/yaHDmwr.png';
                messages[0].previewImageUrl = 'https://i.imgur.com/yaHDmwr.png';
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
            
            case 'FUCKYOU':
                targetUrl = FuckArray[Math.floor(Math.random() * FuckArray.length)];
                messages[0].type = 'image';
                messages[0].originalContentUrl = targetUrl;
                messages[0].previewImageUrl = targetUrl;
                break;

            case 'WORK':
            case '上班':
                targetUrl = WorkArray[Math.floor(Math.random() * WorkArray.length)];
                messages[0].type = 'image';
                messages[0].originalContentUrl = targetUrl;
                messages[0].previewImageUrl = targetUrl;
                break;

            case 'CC':
                messages[0].type = 'sticker';   
                messages[0].packageId = "3";
                messages[0].stickerId = "181";
                break;
        
            case '屁':
            case '嗆屁嗆':
            case 'PU':
                messages[0].type = 'sticker';   
                messages[0].packageId = "2";
                messages[0].stickerId = "177";
                break;

            case 'UCCU':
                messages[0].type = 'sticker';   
                messages[0].packageId = "2";
                messages[0].stickerId = "163";
                break;
            
            case '崩潰':
                messages[0].type = 'sticker';   
                messages[0].packageId = "1";
                messages[0].stickerId = "105";
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
