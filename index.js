
var rp = require('request-promise');
var request = require('request');
var AWS = require('aws-sdk');
var fs = require('fs');

var PEPEBOT_S3_BUCKET = 'pepebot-images';
var EXPORT_PATH = 'pepebot/';

//Extract Lists - add more data here if needed.
var LeoArray =  require('data/_LeoArray.json');
var FuckArray = require('data/_FuckArray.json');
var WorkArray = require('data/_WorkArray.json');
var chokeArray = require('data/_chokeArray.json');
var ssdArray = require('data/_ssdArray.json');
var ceoArray = require('data/_ceoArray.json');
var hentaiArray = require('data/_hentaiArray.json');
var guanArray = require('data/_guanArray.json');
var smileArray = require('data/_smileArray.json');

//Loading Predefined stuff
var KuoArray =["https://i.imgur.com/X6mAbic.png"];
var CoffeeArray = ["Cama","Seven","全家","路易莎","太濃了吧,否則怎麼苦的說不出話"];
var FireArray = ["You are FIRED!","Well you can stay.","什麼爛code給我加班重寫！","XX單在那邊自己去拿"];

//Random Format
var RandomArray = ["jpg", "png", "avi", "gif", "txt"];
var issueArray = ["https://i.imgur.com/OeMtOqL.png"];
var okayArray = ["https://i.imgur.com/IyUrfuW.png"];

//Randomized a person
var personArray = ['李奧', '郭文彬', 'Jonic', 'rainLAY', 'mou'];

exports.handler = function (req, res) {

    // console.log('TestData0418-6pm');
    // console.log(JSON.stringify(req));

    const promises = req.events.map(event => {

        const ChannelAccessToken = process.env['CHANNEL_ACCESS_TOKEN'];

        var gotUserMessage = true;
        msg = 'Uploading Images';
        //User pass-in images
        if(event.message.type == 'image')
        {
           gotUserMessage = false;
           var img_id = event.message.id;
           content_url = "https://api.line.me/v2/bot/message/" + img_id + "/content";

            //Make get Request
            var requestSettings  = {
                url: content_url,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": " Bearer " + ChannelAccessToken
                },
                method: 'GET',
                encoding: null
            };

            request(requestSettings, function(error, response, body) {
                // Use body as a binary Buffer
                imageName = img_id + '.jpg';

                //Here Upload to S3
                var s3Bucket = new AWS.S3({params:{Bucket:PEPEBOT_S3_BUCKET} });
                var data = {
                    Key: imageName,
                    Body: body,
                    ContentType: "image/jpeg"
                };

                s3Bucket.upload(data, function(err, data){
                    if (err)
                    { console.log('Error uploading data: ', data);}
                    else
                    {
                      console.log('Successfully uploaded the image! Yo');
                    }
                });
            });//end of request

        }//endif;

        var deadline = 'June 3 2018 13:30:00 GMT+0800'; //Leo's Wedding
        var friedGdeadline = 'May 10 2018 19:30:00 GMT+0800'; //time for FriedChicken
        var getTimeRemaining = function(endtime){
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor( (t/1000) % 60 );
            var minutes = Math.floor( (t/1000/60) % 60 );
            var hours = Math.floor( (t/(1000*60*60)) % 24 );
            var days = Math.floor( t/(1000*60*60*24) );
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        //Fetch Random Data
        var getRandomFromArray = function(ArrayNames){

            var length = ArrayNames.length;
            return ArrayNames[Math.floor(Math.random() * length)];
        }

        var getRandomValue = function(limit){
            return [Math.floor(Math.random() * limit)];
        }

        if(gotUserMessage){
            var msg = event.message.text.toUpperCase().trim();

            if(msg.indexOf('婚') !== -1){
                msg = 'GG';
            }

            if((msg.indexOf('親') !== -1) || (msg.indexOf('腎') !== -1)){
                msg = '親密度';
            }

            if((msg.indexOf('呵') !== -1) || (msg.indexOf('嘻') !== -1) || (msg.indexOf('笑') !== -1)){
                msg = 'SMILE';
            }

            // if(msg.indexOf('雞') !== -1){
            //     msg = 'G';
            // }
        }

        var reply_token = event.replyToken; //Need to get this Token to pass back.
        var messages = [{
            "type":"text",
            "text": msg
        }];

        needToReply = true;

        //Text is switch to UpperCase()
        switch(msg){

            case 'Z':
                var limit = 15;
                var randomNumber = getRandomValue(15);
                messages[0].text = "Z".repeat(randomNumber) + 'uvio起來!';
                break;

            case '6':
                var limit = 15;
                var randomNumber = getRandomValue(15);
                messages[0].text = "6".repeat(randomNumber);
                break;

            case 'U':
                var limit = 30;
                var randomNumber = getRandomValue(30);
                var randomUString = "U".repeat(randomNumber);
                messages[0].text = randomUString + '起來!';
                break;

            case '+':
            case '加':
                var limit = 30;
                var randomNumber = getRandomValue(30);
                var randomUString = "加".repeat(randomNumber);
                messages[0].text = "通通" + randomUString + '起來!';
                break;

            case 'LEO':
                messages[0].text = getRandomFromArray(LeoArray);
                break;
            case 'COFFEE':
            case '咖啡':
                messages[0].text = getRandomFromArray(CoffeeArray);
                break;

            case 'FIRE':
                messages[0].text = getRandomFromArray(FireArray);
                break;

            case 'GAMEOVER':case 'GG':case '婚':case '婚禮':case '崩':case '崩崩':case 'BON':case 'BONBON':

                //Go fetch time.
                countdownJson = getTimeRemaining(deadline);
                messages[0].text = '距離李奧大崩潰還有 ' + countdownJson.days + '天 '+ countdownJson.hours+ ' 小時 ' +countdownJson.minutes+ ' 分' + countdownJson.seconds +'秒, cc!';
                break;

            // case 'G':
            //     countdownJson = getTimeRemaining(friedGdeadline);
            //     messages[0].text = '距離G排時間還有 ' + countdownJson.days + '天 '+ countdownJson.hours+ ' 小時 ' +countdownJson.minutes+ ' 分' + countdownJson.seconds +'秒, 想ㄘ!';
            //     break;

            case 'SMILE':
                smilePhoto = getRandomFromArray(smileArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = smilePhoto;
                messages[0].previewImageUrl = smilePhoto;
                break;

            case '成龍':
            case 'JACKIECHAN':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/UAuai2P.png';
                messages[0].previewImageUrl = 'https://i.imgur.com/UAuai2P.png';
                break;
    
            case 'PEPE':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://ih1.redbubble.net/image.270666598.0736/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg';
                messages[0].previewImageUrl = 'https://ih1.redbubble.net/image.270666598.0736/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg';
                break;

            case 'WHAT':
            case 'WHAT?':
            case '你說什麼':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/BDqIWCb.png';
                messages[0].previewImageUrl = 'https://i.imgur.com/BDqIWCb.png';
                break;


            case '995':
            case '救救我':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/EY43bcx.jpg';
                messages[0].previewImageUrl = 'https://i.imgur.com/EY43bcx.jpg';
                break;

            case '看屁看':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/Dc4ztxN.png';
                messages[0].previewImageUrl = 'https://i.imgur.com/Dc4ztxN.png';
                break;

            case 'CEO':
                var imgUrl = getRandomFromArray(ceoArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;

            case 'GUAN': case '慣': case '冠':
                var imgUrl = getRandomFromArray(guanArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;

            case '郭':
                var imgUrl = getRandomFromArray(KuoArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;

            case 'ISSUE':
                var imgUrl = getRandomFromArray(issueArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;

            case 'OK':
            case 'OKAY':
                var imgUrl =  getRandomFromArray(okayArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;
                
            case 'LEO嗆':
            case '嗆':
                var imgUrl = getRandomFromArray(chokeArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;

            case 'HUMM?':
            case 'HUMM':
            case 'HUMMMM':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/9uQmv6y.jpg';
                messages[0].previewImageUrl = 'https://i.imgur.com/9uQmv6y.jpg';
                break;

            case 'R':
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
                var imgUrl = getRandomFromArray(ssdArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;

            case 'BAD':
            case '壞':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/nV3P7dt.png';
                messages[0].previewImageUrl = 'https://i.imgur.com/nV3P7dt.png';
                break;

            case '親密度':
                var limit = 50000000;
                var intimacy = Math.floor(Math.random() * Math.floor(limit));
                var who = getRandomFromArray(personArray);
                messages[0].text = who + '和腎液親密度+' + intimacy;
                break;

            case '吉戰力':
            case '戰鬥力':
                var limit = 9000;
                var intimacy = Math.floor(Math.random() * Math.floor(limit));
                messages[0].text = '今日' + msg + ':' + intimacy;
                break;
            
            case 'FUCKYOU':
                targetUrl = getRandomFromArray(FuckArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = targetUrl;
                messages[0].previewImageUrl = targetUrl;
                break;

            case 'WORK':
            case '上班':
                targetUrl = getRandomFromArray(WorkArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = targetUrl;
                messages[0].previewImageUrl = targetUrl;
                break;

            case 'HENTAI':
            case '變態':
            case '氣到':
                targetUrl = getRandomFromArray(hentaiArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = targetUrl;
                messages[0].previewImageUrl = targetUrl;
                break;

            //STICKER Part
            //STICKER Part
            case 'CC':
                messages[0].type = 'sticker';   
                messages[0].packageId = "3";
                messages[0].stickerId = "181";
                break;
        
            case '屁':  case '嗆屁嗆': case 'PU':
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

            case 'CRY':
                messages[0].text = '􀜁􀄟Crying With Laughter Girl􏿿';
                break;

            default:

                if(msg.length == 1){
                    messages[0].text = msg + '.' + getRandomFromArray(RandomArray);
                    break;
                }

                 if(msg.length == 3){
                    messages[0].text = msg + '.avi';
                    break;
                }

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
    
            return rp(options) //Making the POST call.
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
