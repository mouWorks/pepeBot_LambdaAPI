const rp = require('request-promise');
const request = require('request');
const AWS = require('aws-sdk');
const fs = require('fs');
const nodejieba = require('nodejieba');

nodejieba.load({dict: './dict.txt'})

const PEPEBOT_S3_BUCKET = 'pepebot-images';
const EXPORT_PATH = 'pepebot/';

// load libraries
const rand = require('./libs/rand.js');
const lib = require('./libs/lib.js');

//Extract Lists - add more data here if needed.
const LeoArray = require('data/_LeoArray.json');
const FuckArray = require('data/_FuckArray.json');
const WorkArray = require('data/_WorkArray.json');
const chokeArray = require('data/_chokeArray.json');
const ssdArray = require('data/_ssdArray.json');
const ceoArray = require('data/_ceoArray.json');
const hentaiArray = require('data/_hentaiArray.json');
const guanArray = require('data/_guanArray.json');
const smileArray = require('data/_smileArray.json');
const holanArray = require('data/_HolanArray.json');
const lunchArray = require('data/_lunchArray.json');
const friendArray = require('data/_friendArray');
const manArray = require('data/_manArray.json');

//Loading Predefined stuff
const KuoArray =["https://i.imgur.com/X6mAbic.png"];
const CoffeeArray = ["Cama","Seven","全家","路易莎","太濃了吧,否則怎麼苦的說不出話"];
const FireArray = ["You are FIRED!","Well you can stay.","什麼爛code給我加班重寫！","XX單在那邊自己去拿"];

//Random Format
const RandomArray = ["jpg", "png", "avi", "gif", "txt"];
const issueArray = ["https://i.imgur.com/OeMtOqL.png"];
const okayArray = ["https://i.imgur.com/IyUrfuW.png"];

//Randomized a person
const personArray = ['李奧', '郭文彬', 'Jonic', 'rainLAY', 'mou'];
const ZuvioTeamMate = ['李奧', '阿酷', 'RainLay', 'L30', 'Mou', 'CarryMan','HackerMan'];
const Behavior = ['Carry' , '挖坑', '神救援', '狂嗆', '拯救', '衝康', '霸凌'];

//const placeArray = ['台灣', '白宮', '沖繩', '美國', '東京', '北海道', '北歐', '韓國', '新加坡'];
const placeArray = ['芝加哥豪宅', '奧勒岡鄉間屋宅', '赫里福基地', '總統專機','杜斯妥也夫斯基咖啡館', '貧民窟','巴特雷特大學'];

//Recognize People
const pepe_teamChannel = 'C104fd7b862bd7cfe31839aa4ec773558';

exports.handler = function (req, res) {

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

                //Turn off S3 upload first
                if(FALSE){

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
                }


            });//end of request

        }//endif;

        var deadline = 'June 1 2019 08:00:00 GMT+0800'; //Leo's great Family Day !
        var friedGdeadline = 'May 10 2018 19:30:00 GMT+0800'; //time for FriedChicken
        var mouOnboardLine = 'April 1 2019 09:30:00 GMT+0800'; //Leo's Wedding
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

        var getRandomFromArrayWithStringStyle = function(ArrayNames)
        {
            var length = ArrayNames.length;
            var getString = ArrayNames[Math.floor(Math.random() * length)];
            var style = Math.floor(Math.random() * 7);

            switch(style){
                case 0:
                    getString = "`" + getString + "`";
                    break;

                case 1:
                    getString = "_" + getString + "_";
                    break;

                case 2:
                    getString = "*" + getString + "*";
                    break;

                default:
                    getString = chokeString(getString);
                    break;
            }

            return getString;
        }

        //財哥文體使用
        var chokeString = function(textString) {

            wordChunk = nodejieba.cut(textString);
            return wordChunk.join('...');
        }

        var forceLeo = false;

        if(gotUserMessage){
            var msg = event.message.text.toUpperCase().trim();

            if(msg.indexOf('婚') !== -1){
                msg = 'GG';
            }

            if(msg.indexOf('打') !== -1){
                msg = 'HIT';
            }

            if(msg.indexOf('親 --FORCE') !== -1){
                msg = '親密度X';
                forceLeo = true;
            }

            if((msg.indexOf('親') !== -1) || (msg.indexOf('腎') !== -1)){

                if(!forceLeo){
                    msg = '親密度';
                }
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

        //console.log(event); //uncomment if you wanna see event

        // console.log('check source2');
        // console.log(event.source);
        // var speaker = '';

        var speaker = lib.recognizePeople(event.source.userId); //get the names from User ID




        needToReply = true;

        //Text is switch to UpperCase()
        switch(msg){
            case 'Z':
                var limit = 15;
                var randomNumber = rand.getValue(15);
                messages[0].text = "Z".repeat(randomNumber) + 'uvio起來!';
                break;

            case '6':
                var limit = 15;
                var randomNumber = rand.getValue(15);
                messages[0].text = "6".repeat(randomNumber);
                break;

            case '8':
                var limit = 30;
                var randomNumber = rand.getValue(30);
                var randomUString = "6".repeat(randomNumber);
                messages[0].text =  '8'+ randomUString + '起來!';
                break;

            case '+':
            case '加':
                var limit = 30;
                var randomNumber = rand.getValue(30);
                var randomUString = "加".repeat(randomNumber);
                messages[0].text = "通通" + randomUString + '起來!';
                break;

            case 'L': //because LEO is way too fking long
            case 'LL':
            case 'LEO':
                messages[0].text = getRandomFromArrayWithStringStyle(LeoArray);
                break;

            case 'HA': //哈哈哈
            case '哈':
                returnMessage = '`哈哈哈....' + rand.getFromArray(LeoArray) + '`';
                messages[0].text = returnMessage;
                break;

            case 'WA': //哇！
            case '哇':
                returnMessage = '*哇!...' + rand.getFromArray(LeoArray) + '*';
                messages[0].text = returnMessage;
                break;

            case '福利熊':
                messages[0].text = '*熊福利*';
                break;

            case '熊福利':
                messages[0].text = '_請支援收銀~_';
                break;

            case 'LUNCH':
            case '吃':
            case '午餐':
            case '吃什麼':
                messages[0].text = rand.getFromArray(lunchArray);
                break;

            case 'COFFEE':
            case '咖啡':
                messages[0].text = rand.getFromArray(CoffeeArray);
                break;

            case '我就是':
            case '594':
            case 'I AM':
            case '我是':
                messages[0].text = getRandomFromArrayWithStringStyle(manArray);
                break;

            case 'FIRE':
                messages[0].text = rand.getFromArray(FireArray);
                break;
            case '王':
                messages[0].text = "`Zuvio CDN 之父`";
                break;

            case 'CI':
                messages[0].text = "`CICC`";
                break;

            case 'CC':
                messages[0].text = "`UCCU`";
                break;

            case 'GAMEOVER':case 'GG':case '婚':case '婚禮':case '崩':case '崩崩':case 'BON':case 'BONBON':
            case '爽':
            case 'SONG': //A_A
            case 'MOU':
            case 'MAYBE':
                // if (getRandomNumber(0, 10) <= 5) {
                //     messages[0].text = '沒的崩啦 崩屁崩, 李奧已成 Husbando!';
                //     break;
                // }

            //Go fetch time.
            //     countdownJson = getTimeRemaining(deadline);
                // messages[0].text = ' *中國端子節* | 距離 `L30` の `家.庭.日!` 還有: ' + countdownJson.days + '天 '+ countdownJson.hours+ ' 小時 ' +countdownJson.minutes+ ' 分' + countdownJson.seconds +'秒, get ready!';
                // break;
            // case 'G':
            //     countdownJson = getTimeRemaining(friedGdeadline);
            //     messages[0].text = '距離G排時間還有 ' + countdownJson.days + '天 '+ countdownJson.hours+ ' 小時 ' +countdownJson.minutes+ ' 分' + countdownJson.seconds +'秒, 想ㄘ!';
            //     break;
            // messages[0].text = '還爽啊 `Mou` , 開始上班啦，懂？！';
            // break;

            case 'M':
                days = lib.getCountDownDate();
                var who = rand.getFromArray(ZuvioTeamMate);
                action = rand.getFromArray(Behavior);
                // messages[0].text = '`Mou` 已在 `Zuvio` 被 `' + who + '` ' + action + ' 了 `' + days +'` 天！';
                messages[0].text = '距離 `Mou` 在 `Zuvio` 被 Unset 還剩下 `' + days +'` 天！';
                break;

            //Skip this, tired.
            // case 'SMILE':
            //     smilePhoto = rand.getFromArray(smileArray);
            //     messages[0].type = 'image';
            //     messages[0].originalContentUrl = smilePhoto;
            //     messages[0].previewImageUrl = smilePhoto;
            //     break;

            case '成龍':
            case 'JACKIECHAN':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/UAuai2P.png';
                messages[0].previewImageUrl = 'https://i.imgur.com/UAuai2P.png';
                break;

            case 'TV': case '4K': case 'HDR': case 'SONY':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/Xl2kijL.png';
                messages[0].previewImageUrl = 'https://i.imgur.com/Xl2kijL.png';
                break;
    
            case 'PEPE':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://ih1.redbubble.net/image.270666598.0736/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg';
                messages[0].previewImageUrl = 'https://ih1.redbubble.net/image.270666598.0736/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg';
                break;

             case 'HIT':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/Z4UAjkp.png';
                messages[0].previewImageUrl = 'https://i.imgur.com/Z4UAjkp.png';
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

            case '看':
            case 'LOOK':  case 'WATCH':
            case '看屁看':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/kj6t3Rd.jpg';
                messages[0].previewImageUrl = 'https://i.imgur.com/kj6t3Rd.jpg';
                break

            case 'CEO':
                var imgUrl = rand.getFromArray(ceoArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;

            case 'GUAN': case '慣': case '冠':
                var imgUrl = rand.getFromArray(guanArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;

            case 'HOLAN': case '騙': case '冠':
                var imgUrl = rand.getFromArray(holanArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;

            case '郭':
                var imgUrl = rand.getFromArray(KuoArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;

            case 'ISSUE':
                var imgUrl = rand.getFromArray(issueArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;

            case 'OK':
            case 'OKAY':
                var imgUrl =  rand.getFromArray(okayArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = imgUrl;
                messages[0].previewImageUrl = imgUrl;
                break;
                
            case 'LEO嗆':
            case '嗆':
                var imgUrl = rand.getFromArray(chokeArray);
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
                var imgUrl = rand.getFromArray(ssdArray);
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
                var who = rand.getFromArray(personArray);

                if(speaker == 'leo'){
                    who = speaker; //Force cc
                }

                messages[0].text = who + '和腎液親密度 `+' + intimacy + '`';
                break;

            case '親密度X':
                var limit = 900000000;
                var intimacy = getRandomNumberWithHighLight(0, limit);
                var who = rand.getFromArray(personArray);
                messages[0].text = '郭文彬和腎液親密度 `+' + intimacy + '`';
                break;

            case '秋':
                messages[0].text = '這個問題怎麼會 `問我咧` ？';
                break;

            case '捧油':
            case '朋友':
            case '檳友':
            case '彬友':
                messages[0].text = getRandomFromArrayWithStringStyle(friendArray);
                break;

            case '財':
                var randString = '里奧今天是不是又崩了';
                messages[0].text = chokeString(randString);
                break;

            case '科':
                var demoText =  '郭文彬和腎液親密度為 99999999';
                randwords = nodejieba.cut(demoText);
                var returnString = randwords.join('...');

                messages[0].text = returnString;
                break;

            case '忠':
            case '忠誠':
            case '忠誠度':
                var limit = 60;
                var loyalty = rand.getNumber(0, limit);

                if(loyalty > 50){
                    loyalty = '誓死效忠 ! 我是舔狗!! ';
                }

                if(loyalty < 20){
                    loyalty = '幹 乾我屁事!';
                }

                if(loyalty < 5){
                    loyalty = '太低, 無法偵測!';
                }

                msg = '忠誠度';

                messages[0].text = '`' + speaker + '` 今日 ' + msg + ' `' + loyalty + '`';
                break;

            case '餓力': //this one by mou
            case '仇恨值':
            case '吉戰力':
            case '戰鬥力':
            case '糞力':
            case '嗆力':
            case '嘴力':
            case '雷力':
            case '崩力':
            case '騙力':
            case '慣力':
            case '奴力':
            case '秋力':
            case '發財力':
                var limit = 9999;
                var intimacy = rand.getNumber(0, limit);

                if(intimacy > 9500){ //Means you are really lucky;
                    intimacy = ' Overflow! 已達上限 ! 大家快逃啊';
                }

                if(intimacy < 500){ //Means you are really shitty;
                    intimacy = ' 太低 無法偵測 ';
                }

                messages[0].text = '`' + speaker + '` 今日 ' + msg + ' `' + intimacy + '`';
                break;

            case '神智':
                var limit = 210;
                var iq = rand.getNumber(0, limit);

                if(iq < 10){ //Means you are really shitty;
                    iq = 'IQ 200 !!';
                }

                if(iq < 10){ //Means you are really shitty;
                    iq = '神智為 0!';
                }

                messages[0].text = '`' + speaker + '` 今日 ' + msg + ' `' + iq + '`';
                break;

            case 'FUCKYOU':
                targetUrl = rand.getFromArray(FuckArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = targetUrl;
                messages[0].previewImageUrl = targetUrl;
                break;

            case 'WORK':
            case '上班':
                targetUrl = rand.getFromArray(WorkArray);
                messages[0].type = 'image';
                messages[0].originalContentUrl = targetUrl;
                messages[0].previewImageUrl = targetUrl;
                break;

            case 'HENTAI':
            case '變態':
            case '氣到':
                targetUrl = rand.getFromArray(hentaiArray);
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

            case '辣雞':
            case 'LAJI':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/yCg7UDi.png';
                messages[0].previewImageUrl = 'https://i.imgur.com/yCg7UDi.png';
                break;
            
            case '帥':
                messages[0].type = 'image';
                messages[0].originalContentUrl = 'https://i.imgur.com/oCa2Fmh.jpg';
                messages[0].previewImageUrl = 'https://i.imgur.com/oCa2Fmh.jpg';
                break;

            default:

                // Shut this up: too loud
                // if(msg.length == 1){
                //     messages[0].text = msg + '.' + rand.getFromArray(RandomArray);
                //     break;
                // }
                //  if(msg.length == 3){
                //     messages[0].text = msg + '.avi';
                //     break;
                // }

                needToReply = false;
                //messages[0].text = msg;
                break;
        }

        if (speaker == 'cloud'){
            var chance = 40; // 20% 機率 Trigger
            var hit = rand.getNumber(0, 100);

            if(hit < chance){ //Means you are really lucky;
                messages[0].text = '`雲姐什麼時候要生第二胎呀?`';
            }
        }

        if (speaker == 'mou'){
            var chance = 95; // 20% 機率 Trigger
            var hit = rand.getNumber(0, 100);

            if(hit < chance){ //Means you are really lucky;
                messages[0].text = '`那麼 要如何進行單元測試呢?`';
            }
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

        }//Otherwise no need to reply
    });

    Promise
    .all(promises)
    .then(() => res.json({success: true}));

};
