const rp = require('request-promise');
const request = require('request');
const AWS = require('aws-sdk');
const fs = require('fs');

const PEPEBOT_S3_BUCKET = 'pepebot-images';
const EXPORT_PATH = 'pepebot/';

// load libraries
const rand = require('./libs/rand.js');
const lib = require('./libs/lib.js');
const messageBuilder = require('./libs/message.js');

//Extract Lists - add more data here if needed.
const duckArray = require('data/_duckArray.json')
const LeoArray = require('data/_LeoArray.json');
const FuckArray = require('data/_FuckArray.json');
const WorkArray = require('data/_WorkArray.json');
const chokeArray = require('data/_chokeArray.json');
const ssdArray = require('data/_ssdArray.json');
const ceoArray = require('data/_ceoArray.json');
const hentaiArray = require('data/_hentaiArray.json');
const guanArray = require('data/_guanArray.json');
const suckArray = require('data/_suckArray.json');
const smileArray = require('data/_smileArrayTomCruise.json');
const holanArray = require('data/_HolanArray.json');
const lunchArray = require('data/_lunchArray.json');
const friendArray = require('data/_friendArray');
const manArray = require('data/_manArray.json');
const tipArray = require('data/_tipArray.json');
const koLienArray = require('data/_koLienArray');
const taskArray = require('data/_taskArray.json');
const handsomeArray = require('data/_handsomeArray');
const carefulArray = require('data/_carefulArray');
const jayArray = require('data/_jayArray');
const clockArray = require('data/_clockArray');
const jkArray = require('data/_jkArray');

//怕的 EmojiCon
const scaredEmojiArray = require('data/_scaredArray');
const message = require('./libs/message.js');

//Loading Predefined stuff
const KuoArray = ["https://i.imgur.com/X6mAbic.png"];
const CoffeeArray = ["Cama", "Seven", "全家", "路易莎", "太濃了吧,否則怎麼苦的說不出話"];
const FireArray = ["You are FIRED!", "Well you can stay.", "什麼爛code給我加班重寫！", "XX單在那邊自己去拿"];

const noticeArray = ['注意身心平衡阿', "*能力不足 加班來補*, 你是趕, 還是奴!?", '失去平衡了嗎?', '愛注意捏！', '沒事不要加班啊']

const placesArray = ["男同俱樂部", "群聊", "郭先生團隊", "剛布!!"]

//Random Format
const RandomArray = ["jpg", "png", "avi", "gif", "txt"];
const issueArray = ["https://i.imgur.com/OeMtOqL.png"];
const okayArray = ["https://i.imgur.com/IyUrfuW.png"];

//Randomized a person
const personArray = ['李奧', '郭文彬', 'Jonic', 'rainLAY', 'mou'];
const ZuvioTeamMate = ['李奧', '阿酷', 'RainLay', 'L30', 'Mou', 'CarryMan', 'HackerMan'];
const Behavior = ['Carry', '挖坑', '神救援', '狂嗆', '拯救', '衝康', '霸凌'];

//Recognize People
const pepe_teamChannel = 'C104fd7b862bd7cfe31839aa4ec773558';

exports.handler = function (req, res) {

    const promises = req.events.map(event => {

        const ChannelAccessToken = process.env['CHANNEL_ACCESS_TOKEN'];

        var gotUserMessage = true;
        msg = 'Uploading Images';
        //User pass-in images
        if (event.message.type == 'image') {
            gotUserMessage = false;
            var img_id = event.message.id;
            content_url = "https://api.line.me/v2/bot/message/" + img_id + "/content";

            //Make get Request
            var requestSettings = {
                url: content_url,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": " Bearer " + ChannelAccessToken
                },
                method: 'GET',
                encoding: null
            };

            request(requestSettings, function (error, response, body) {
                // Use body as a binary Buffer
                imageName = img_id + '.jpg';

                //Turn off S3 upload first
                if (FALSE) {

                    //Here Upload to S3
                    var s3Bucket = new AWS.S3({ params: { Bucket: PEPEBOT_S3_BUCKET } });
                    var data = {
                        Key: imageName,
                        Body: body,
                        ContentType: "image/jpeg"
                    };

                    s3Bucket.upload(data, function (err, data) {
                        if (err) { console.log('Error uploading data: ', data); }
                        else {
                            console.log('Successfully uploaded the image! Yo');
                        }
                    });
                }
            });//end of request

        }//endif;

        var deadline = 'January 6 2020 10:00:00 GMT+0800'; // Mou Wemo day!
        var friedGdeadline = 'May 10 2018 19:30:00 GMT+0800'; //time for FriedChicken
        var mouExpireTime = 'Feb 6 2023 18:00:00 GMT+0800'; //Mou's Three year
        var qnapStartTime = 'January 11 2021 09:00:00 GMT+0800' // Leo's Qnap
        var uitoxStartTime = 'January 3 2022 09:00:00 GMT+0800' // Jonic's uitox
        var esliteStartTime =  'January 9 2023 09:00:00 GMT+0800' // RainLay's Eslite

        // //財哥文體使用
        // var chokeString = function(textString) {
        //
        //     wordChunk = nodejieba.cut(textString);
        //     return wordChunk.join('...');
        // }

        var forceLeo = false;

        if (gotUserMessage) {
            var msg = event.message.text.toUpperCase().trim();

            if (msg.indexOf('婚') !== -1) {
                msg = 'GG';
            }

            if (msg.indexOf('難道') !== -1) {
                msg = '難道';
            }

            if (msg.indexOf('小心') !== -1) {
                msg = '小心';
            }

            if (msg.indexOf('色') !== -1) {
                msg = '色色';
            }

            if (msg.indexOf('剛布') !== -1) {
                msg = '剛布';
            }

            if (msg.indexOf('OR') !== -1) {
                msg = 'OR';
            }

            if (msg.indexOf('幹') !== -1) {
                msg = '大可不必';
            }

            if (msg.indexOf('鬆') !== -1) {
                msg = 'RELAX';
            }

            if (msg.indexOf('窮') !== -1) {
                msg = 'POOR';
            }

            if (msg.indexOf('注意') !== -1) {
                msg = '注意';
            }

            if (msg.indexOf('勇') !== -1) {
                msg = '勇';
            }

            if (msg.indexOf('時中') !== -1) {
                msg = 'CLOCK';
            }

            if ((msg.indexOf('杰') !== -1) || (msg.indexOf('傑') !== -1)) {
                msg = 'JAY';
            }

            if (msg.indexOf('怕') !== -1) {
                msg = 'SCARE';
            }

            if (msg.indexOf('叫') !== -1) {
                msg = '叫';
            }

            if ((msg.indexOf('誒') !== -1) || (msg.indexOf('欸') !== -1)) {
                msg = 'COME';
            }

            if ((msg.indexOf('冰') !== -1)) {
                if (!forceLeo) {
                    msg = '冰淇淋';
                }
            }
        }

        var reply_token = event.replyToken; //Need to get this Token to pass back.
        var messages = [{
            "type": "text",
            "text": msg
        }];

        var speaker = lib.recognizePeople(event.source.userId); //get the names from User ID

        needToReply = true;

        //Text is switch to UpperCase()
        var countdown = null;
        let tipMessage
        switch (msg) {

            case '笑': case 'SMILE':
                targetUrl = rand.getFromArray(smileArray);
                messages[0] = messageBuilder.image(targetUrl);
                break;

            case '小心':
                targetUrl = rand.getFromArray(carefulArray);
                messages[0] = messageBuilder.image(targetUrl);
                break;

            case '6':
                var randomNumber = rand.getValue(15);
                messages[0].text = "6".repeat(randomNumber);
                break;

            case '+':
            case '加':
                var randomNumber = rand.getValue(30);
                var randomUString = "加".repeat(randomNumber);
                messages[0].text = "通通" + randomUString + '起來!';
                break;

            case 'L': //because LEO is way too fking long
            case 'LL':
            case 'LEO':
                messages[0].text = lib.getRandomFromArrayWithStringStyle(LeoArray);
                break;

            case 'CLOCK':
                messages[0] = messageBuilder.image('https://i.imgur.com/qsORplm.png');
                // messages[0].text = lib.getRandomFromArrayWithStringStyle(clockArray); //random text
                break;

            case 'JK':
                messages[0].text = lib.getRandomFromArrayWithStringStyle(jkArray);
                break;

            case 'JAY':
                messages[0].text = lib.getRandomFromArrayWithStringStyle(jayArray);
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

            case '尊重':
                messages[0].text = '```respect, you know?```';
                break;

            case '我不講了':
                messages[0].text = '*我跟各位講*';
                break;

            case '勇':
                messages[0].text = '*你很勇嘛*';
                break;

            case '熊福利':
                messages[0].text = '_請支援收銀~_';
                break;

            case 'LUNCH':
            case '吃':
            case '午餐':
            case '吃什麼':
            case '沒飯吃啦':
                messages[0].text = rand.getFromArray(lunchArray);
                break;

            case 'COFFEE':
            case '咖啡':
                messages[0].text = rand.getFromArray(CoffeeArray);
                break;

            case '注意':
                messages[0].text = rand.getFromArray(noticeArray);
                break

            case '這裡是':
                messages[0].text = rand.getFromArray(placesArray);
                break;

            case '我就是':
            case '594':
            case 'I AM':
            case '我是':
                messages[0].text = lib.getRandomFromArrayWithStringStyle(manArray);
                break;

            case 'FIRE':
                messages[0].text = rand.getFromArray(FireArray);
                break;

            case 'KING':
                messages[0] = messageBuilder.image('https://i.imgur.com/BTHA8Wp.png');
                break;

            case 'OR':
                messages[0] = messageBuilder.image('https://i.imgur.com/RkaxqdF.jpg');
                break;

            case '叫':
                messages[0] = messageBuilder.image(rand.getFromArray(['https://i.imgur.com/khATnPE.png','https://i.imgur.com/GS9g7O6.jpg']));
                break;

            case 'WRONG':
                messages[0] = messageBuilder.image('https://i.imgur.com/mZEWfQU.jpg');
                break;

            case 'RELAX':
                messages[0] = messageBuilder.image('https://i.imgur.com/0GZFFLL.png');
                break;

            case '剛布':
                messages[0] = messageBuilder.image('https://i.imgur.com/t7sLvOd.png');
                break;

            case 'W':
                countdown = lib.getTimeRemaining(mouExpireTime);
                var timeRangeDesc = `還剩 ${countdown.days} 天 ${countdown.hours} 小時 ${countdown.minutes} 分 ${countdown.seconds} 秒`
                var text = 'WeMo CountDown | 滿三年還剩下' + timeRangeDesc
                messages[0] = messageBuilder.flexCountDown(text, 'WeMo 騰籠換鳥', timeRangeDesc, '這都得應驗噠!');
                break;

            case '橘':
                countdown = lib.getTimeRemaining(uitoxStartTime);
                var timeRangeDesc = `已經 ${countdown.days} 天 ${countdown.hours} 小時 ${countdown.minutes} 分 ${countdown.seconds} 秒`
                var text = 'uitox 借屍還魂,' + timeRangeDesc
                messages[0] = messageBuilder.flexCountDown(text, 'Uitox借屍還魂', timeRangeDesc, 'UUUUUUUUUitox起來!');
                break;    
            
            case 'Q':
                countdown = lib.getTimeRemaining(qnapStartTime);
                var note = rand.getFromArray(['緊來Save Qnap!', '丟系Save QNap', `qNapper Rises`, `qLocker 94讚`])
                var timeRangeDesc = `已經 ${countdown.days} 天 ${countdown.hours} 小時 ${countdown.minutes} 分 ${countdown.seconds} 秒`
                var text = 'Qnap 22K社畜寄生' + timeRangeDesc
                messages[0] = messageBuilder.flexCountDown(text, '22K社畜寄生', timeRangeDesc, note);
                break;    
            
            case 'E':
                    countdown = lib.getTimeRemaining(esliteStartTime);
                    var note = rand.getFromArray(['緊來Save Eslite!', '丟系Save Eslite'])
                    var timeRangeDesc = `已經 ${countdown.days} 天 ${countdown.hours} 小時 ${countdown.minutes} 分 ${countdown.seconds} 秒`
                    var text = 'Eslite 華麗起飛' + timeRangeDesc
                    messages[0] = messageBuilder.flexCountDown(text, 'ESLITE 華麗起飛', timeRangeDesc, note);
                    break;      

            case '王':
                countdown = lib.getTimeRemaining(deadline);
                var timeRangeDesc = ` 已經 ${countdown.days} 天 ${countdown.hours} 小時 ${countdown.minutes} 分 ${countdown.seconds} 秒`
                var text = '寄🤭生🫠We🤫Mo🫥 已經' + timeRangeDesc
                messages[0] = messageBuilder.flexCountDown(text, '寄🤭生🫠We🤫Mo🫥', timeRangeDesc, '我就藤壺!');
                break;

            case 'CI':
                messages[0].text = "`CICC`";
                break;

            case 'CC':
                messages[0] = messageBuilder.image('https://i.imgur.com/QxnUgrJ.png')
                break;

            case 'LEET':case 'LEETCODE':
                messages[0] = messageBuilder.image('https://i.imgur.com/QSWpS7X.png')
                break;

            case '難道':
                messages[0].text = "`只 有 你 !`";
                break;

            // case 'GAMEOVER': case 'GG': case '婚': case '婚禮': case '崩': case '崩崩': case 'BON': case 'BONBON':
            // case '爽':
            // case 'SONG': //A_A
            // case 'MOU':
            // case 'MAYBE':
            // case 'M':
            //     days = lib.getCountDownDate();
            //     var who = rand.getFromArray(ZuvioTeamMate);
            //     action = rand.getFromArray(Behavior);

            //     days -= 2; //Hardcode

            //     messages[0].text = '距離 `Mou` 在 `Zuvio` 被 KickOut 還剩下 `' + days + '` 天！';
            //     if (days <= 0) {
            //         messages[0].text = '` ♪ 與你相遇好幸運 可我已失去為你瘋狂挖坑的權利 ♬ ~ `';
            //     }
            //     break;

            case '可憐': case '可憐哪':
                messages[0] = messageBuilder.image(rand.getFromArray(koLienArray));
                break;

            case '色色':
                messages[0] = messageBuilder.image('https://i.imgur.com/u6gsSWo.png');
                // messages[0] = messageBuilder.image('https://stickershop.line-scdn.net/stickershop/v1/sticker/468533711/android/sticker.png');
                break;

            case '成龍':
            case 'JACKIECHAN':
                messages[0] = messageBuilder.image('https://i.imgur.com/UAuai2P.png');
                break;

            case 'HIGH': case '國偉': case '林國偉':
                messages[0] = messageBuilder.image('https://i.imgur.com/otxAPqa.jpg');
                break;

            case 'TV': case '4K': case 'HDR': case 'SONY':
                messages[0] = messageBuilder.image('https://i.imgur.com/Xl2kijL.png');
                break;

            case 'PEPE':
                messages[0] = messageBuilder.image('https://ih1.redbubble.net/image.270666598.0736/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg');
                break;

            case 'HIT': case '打':
                messages[0] = messageBuilder.image('https://i.imgur.com/Z4UAjkp.png');
                break;

            case 'POOR':
                messages[0].type = 'text';
                messages[0].text = "嗚嗚 好窮 " + lib.getEmoji(0x100088);
                break;

            case 'COME':

                var randomNumber = rand.getValue(20);
                var randomTask = rand.getFromArray(taskArray);
                messages[0].type = 'text';
                messages[0].text = "`誒你過來" + randomTask + "一下 " + "!".repeat(randomNumber) + "`";

                if (randomNumber > 13) {
                    messages[0].text = "`誒你過來一下 過來一下 操你媽過來一下 !!!!!` ";
                }

                if (randomNumber > 18) { //if u lucky cc
                    messages[0].text = "`不是啊 妳那個妳那個 ... 欸妳過來一下妳過來一下 操妳媽妳過來一下 !!!!!!!!` ";
                }

                break;

            case 'SCARE':
                messages[0].type = 'text';
                messages[0].text = "怕爆 " + lib.getEmoji(rand.getFromArray(scaredEmojiArray));
                break;

            case 'WHAT':
            case 'WHAT?':
            case '你說什麼':
                messages[0] = messageBuilder.image('https://i.imgur.com/BDqIWCb.png');
                break;

            case 'FAIL': case 'FAILURE': case '失敗':
                messages[0] = messageBuilder.image('https://i.imgur.com/8XQ60fW.png');
                break;

            case '打氣':
                messages[0] = messageBuilder.image('https://i.imgur.com/HYjWrJw.jpg');
                break;

            case '衝啊':
                messages[0] = messageBuilder.image('https://i.imgur.com/av4xEyt.jpg');
                break;

            case '哎': case '唉':
                messages[0] = messageBuilder.image('https://i.imgur.com/KicHgbp.jpg');
                break;

            case '995':
            case '救救我':
                messages[0] = messageBuilder.image('https://i.imgur.com/EY43bcx.jpg');
                break;

            case '看':
            case 'LOOK': case 'WATCH':
            case '看屁看':
                messages[0] = messageBuilder.image('https://i.imgur.com/kj6t3Rd.jpg');
                break;

            case 'CEO':
                messages[0] = messageBuilder.image(rand.getFromArray(ceoArray));
                break;

            case 'GUAN': case '慣': case '冠':
                messages[0] = messageBuilder.image(rand.getFromArray(guanArray));
                break;

            case 'HOLAN': case '騙': case '冠':
                messages[0] = messageBuilder.image(rand.getFromArray(holanArray));
                break;

            case 'DUCK':
            case 'DUCKYOU':
            case '大可不必':
                messages[0].text = rand.getFromArray(duckArray);
                break;

            case '郭':
                messages[0] = messageBuilder.image(rand.getFromArray(KuoArray));
                break;

            case 'ISSUE':
                messages[0] = messageBuilder.image(rand.getFromArray(issueArray));
                break;

            case 'OK':
            case 'OKAY':
                messages[0] = messageBuilder.image(rand.getFromArray(okayArray));
                break;

            case 'LEO嗆':
            case '嗆':
                messages[0] = messageBuilder.image(rand.getFromArray(chokeArray));
                break;

            case 'HUMM?':
            case 'HUMM':
            case 'HUMMMM':
                messages[0] = messageBuilder.image('https://i.imgur.com/9uQmv6y.jpg');
                break;

            case 'R':
            case 'R!!':
                messages[0] = messageBuilder.image('https://i.imgur.com/1JtJplI.jpg');
                break;

            case 'SSD':
                messages[0] = messageBuilder.image(rand.getFromArray(ssdArray));
                break;

            case 'BAD':
            case '壞':
                messages[0] = messageBuilder.image('https://i.imgur.com/nV3P7dt.png');
                break;

            case '冰淇淋':
                var limit = 50000000;
                var credit = Math.floor(Math.random() * Math.floor(limit));
                var who = rand.getFromArray(personArray);

                if (speaker == 'leo') {
                    who = speaker; //Force cc
                }

                let socialCreditsTitle = `Social Credit`
                messages[0] = messageBuilder.badge('SocialCreditMeter', socialCreditsTitle, credit, '你們就偷著樂吧');
                break;

            case '秋':
                messages[0].text = '這個問題怎麼會 `問我咧` ?';
                break;

            case '怎':
                messages[0].text = '`世界怎麼跟得上台灣拉!!`';
                break;

            case '舔':
                messages[0].text = '`又舔! 又舔!! 又!(中斷) !又舔嘴唇!!!! (破音`';
                break;

            case '職等':
                messages[0].text = '`又Review! 又Review!! 又!(中斷) !又Review職等!!!! (爆氣';
                break;

            case '7':
                messages[0].text = '`又偷 又偷 又 又偷打7!!!!!!!!(爆音`';
                break;

            case '偷':
                messages[0] = messageBuilder.image('https://i.imgur.com/yIsFGWo.png');
                break;

            case '我誰':
                messages[0].text = '我高層嘻 ^^';
                break;

            case '不要笑':
                let hand1 = rand.getRandomHand();
                let hand2 = rand.getRandomHand();
                let hand3 = rand.getRandomHand();
                messages[0].text = `不要笑${hand1}不要笑${hand2}不要笑${hand3}`;
                break;

            case '捧油':
            case '朋友':
            case '檳友':
            case '彬友':
                messages[0].text = lib.getRandomFromArrayWithStringStyle(friendArray);
                break;

            case '嘻':
                messages[0] = messageBuilder.image('https://i.imgur.com/SaWoqnh.jpg');
                break;

            case '財':
                var randString = '里奧今天是不是又崩了 !?';
                messages[0].text = randString;
                break;

            case '科':
                var demoText = '郭文彬和腎液親密度為 99999999';
                messages[0].text = demoText;
                break;

            case '忠':
            case '忠誠':
            case '忠誠度':
                var limit = 50;
                var loyalty = rand.getNumber(0, limit);

                if (loyalty > 45) {
                    loyalty = '誓死效忠 ! 我是舔狗!! ';
                }

                if (loyalty < 20) {
                    loyalty = '幹 乾我屁事!' + lib.getEmoji('0x10009E');
                }

                if (loyalty < 5) {
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
            case '韓力':
            case 'M力':
            case '恥力':
                var limit = 9999;
                var intimacy = rand.getNumber(0, limit);

                if (intimacy > 9500) { //Means you are really lucky;
                    intimacy = 'OVERFLOW!';
                }

                if (intimacy < 500) { //Means you are really shitty;
                    intimacy = ' 太低 無法偵測 ';
                }
                // messages[0].text = '`' + speaker + '` 今日 ' + msg + ' `' + intimacy + '`';

                another_title = speaker + '的' + msg + '為:';
                messages[0] = messageBuilder.badge('Pepe Algorithm', another_title, intimacy, 'OMG !');
                break;

            case 'SB':
                let fullText = '傻逼東西!';
                another_title = '你J個';
                messages[0] = messageBuilder.flexCountDown('Pepe AI', another_title, fullText, 'SBDX !!');
                break;

            case 'SB+':
                let fullTextSBPlus = '大傻逼東西！! MDFK';
                another_title = '你94一個';
                messages[0] = messageBuilder.flexCountDown('Pepe AI', another_title, fullTextSBPlus, 'SBDX !!');
                break;

            case '神智':
                var limit = 210;
                var iq = rand.getNumber(0, limit);

                if (iq < 10) { //Means you are really shitty;
                    iq = 'IQ 200 !!';
                }

                if (iq < 10) { //Means you are really shitty;
                    iq = '神智為 0!';
                }

                let small_title = speaker + '的' + msg + '為:';
                messages[0] = messageBuilder.badge('PePeAI', small_title, iq, '敢質疑？');
                break;

            case 'FUCKYOU':
                targetUrl = rand.getFromArray(FuckArray);
                messages[0] = messageBuilder.image(targetUrl);
                break;

            case 'TIP':
                tipMessage = rand.getFromArray(tipArray);
                messages[0] = messageBuilder.flexCountDown('Black Belt Tip', 'Dev Black Belt Tip:', tipMessage, '這樣你懂了嗎??');
                break;

            case 'WORK':
            case '上班':
                targetUrl = rand.getFromArray(WorkArray);
                messages[0] = messageBuilder.image(targetUrl);
                break;

            case 'SUCK':
            case '爛':
                targetUrl = rand.getFromArray(suckArray);
                messages[0] = messageBuilder.image(targetUrl);
                break;

            case 'HENTAI':
            case '變態':
            case '氣到':
                targetUrl = rand.getFromArray(hentaiArray);
                messages[0] = messageBuilder.image(targetUrl);
                break;

            //STICKER Part
            //STICKER Part
            case 'CC':
                messages[0] = messageBuilder.sticker(3, 181);
                break;

            case '屁': case '嗆屁嗆': case 'PU':
                messages[0] = messageBuilder.sticker(2, 177);
                break;

            case 'UCCU':
                messages[0] = messageBuilder.sticker(2, 163);
                break;

            case '崩潰':
                messages[0] = messageBuilder.sticker(1, 105);
                break;

            case 'CRY':
                messages[0].text = '􀜁􀄟Crying With Laughter Girl􏿿';
                break;

            case '辣雞':
            case 'LAJI':
                messages[0] = messageBuilder.image('https://i.imgur.com/yCg7UDi.png');
                break;

            case '帥':
                targetUrl = rand.getFromArray(handsomeArray);
                messages[0] = messageBuilder.image(targetUrl);
                break;

            default:

                needToReply = false; //這個表示中關鍵字 才要回
                //messages[0].text = msg;
                break;
        }

        //5% random yes
        if (msg == 'NO') {

            var chance = 40; // 40% 機率 Trigger
            var hit = rand.getNumber(0, 100);

            needToReply = true;

            if (hit < chance) { //Means you are really lucky;

                var messages = [{
                    "type": "text",
                    "text": ' `ㄟ湯喔～` ' + lib.getEmoji('0x100095')
                }];
            } else {
                var messages = [{
                    "type": "text",
                    "text": ' `母湯!` ' + lib.getEmoji('0x1000A6')
                }];
            }
        }

        if (needToReply) {

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
        .then(() => res.json({ success: true }));
};
