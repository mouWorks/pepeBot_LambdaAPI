/**
 * 隨機
 */
function Message()
{
    function imageFormat(imgUrl){
        return {
            type: 'image',
            originalContentUrl: imgUrl,
            previewImageUrl: imgUrl
        };
    }

    return {
        imageFormat : imageFormat
    }
}
module.exports = new Message();