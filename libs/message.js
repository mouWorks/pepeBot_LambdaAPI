/**
 * 隨機
 */
function Message()
{
    //圖片訊息
    function imageFormat(imgUrl){
        return {
            type: 'image',
            originalContentUrl: imgUrl,
            previewImageUrl: imgUrl
        };
    }

    //貼圖訊息
    function stickerFormat(packageId, stickerId){
        return {
            type: 'sticker',
            packageId: packageId,
            stickerId: stickerId
        };
    }


    



    return {
        image : imageFormat,
        sticker: stickerFormat
    }
}
module.exports = new Message();