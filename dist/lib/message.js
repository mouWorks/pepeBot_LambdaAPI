"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexBadge = exports.flexTip = exports.flexCountDown = exports.stickerFormat = exports.imageFormat = void 0;
//圖片訊息
function imageFormat(imgUrl) {
    return {
        type: 'image',
        originalContentUrl: imgUrl,
        previewImageUrl: imgUrl,
    };
}
exports.imageFormat = imageFormat;
//貼圖訊息
function stickerFormat(packageId, stickerId) {
    return {
        type: 'sticker',
        packageId: packageId,
        stickerId: stickerId,
    };
}
exports.stickerFormat = stickerFormat;
//CountDown Badge
function flexCountDown(flexMessage, title, Highlight, messageBelow) {
    return {
        type: 'flex',
        altText: flexMessage.toString(),
        contents: {
            type: 'bubble',
            size: 'mega',
            header: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'text',
                        text: title.toString(),
                        color: '#333333',
                        align: 'start',
                        size: 'md',
                        gravity: 'center',
                    },
                    {
                        type: 'text',
                        text: Highlight.toString(),
                        color: '#333333',
                        align: 'start',
                        size: 'lg',
                        gravity: 'center',
                        margin: 'lg',
                    },
                ],
                backgroundColor: '#ff9900',
                paddingTop: '19px',
                paddingAll: '12px',
                paddingBottom: '16px',
            },
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'box',
                        layout: 'horizontal',
                        contents: [
                            {
                                type: 'text',
                                text: messageBelow.toString(),
                                color: '#333333',
                                size: 'sm',
                                wrap: true,
                            },
                        ],
                        flex: 1,
                    },
                ],
                spacing: 'md',
                paddingAll: '12px',
            },
            styles: {
                footer: {
                    separator: false,
                },
            },
        },
    };
}
exports.flexCountDown = flexCountDown;
//BlackBeltTip
function flexTip(flexMessage, title, Highlight, messageBelow) {
    return {
        type: 'flex',
        altText: flexMessage.toString(),
        contents: {
            type: 'bubble',
            size: 'mega',
            header: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'text',
                        text: title.toString(),
                        color: '#ffffff',
                        align: 'start',
                        size: 'md',
                        gravity: 'center',
                    },
                    {
                        type: 'text',
                        text: Highlight.toString(),
                        color: '#ffffff',
                        align: 'start',
                        size: 'lg',
                        gravity: 'center',
                        margin: 'lg',
                    },
                ],
                backgroundColor: '#0080cc',
                paddingTop: '19px',
                paddingAll: '12px',
                paddingBottom: '16px',
            },
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'box',
                        layout: 'horizontal',
                        contents: [
                            {
                                type: 'text',
                                text: messageBelow.toString(),
                                color: '#8C8C8C',
                                size: 'sm',
                                wrap: true,
                            },
                        ],
                        flex: 1,
                    },
                ],
                spacing: 'md',
                paddingAll: '12px',
            },
            styles: {
                footer: {
                    separator: false,
                },
            },
        },
    };
}
exports.flexTip = flexTip;
//特殊的badge訊息
function flexBadge(flexMessage, title, Highlight, messageBelow) {
    return {
        type: 'flex',
        altText: flexMessage.toString(),
        contents: {
            type: 'bubble',
            size: 'micro',
            header: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'text',
                        text: title.toString(),
                        color: '#ffffff',
                        align: 'start',
                        size: 'md',
                        gravity: 'center',
                    },
                    {
                        type: 'text',
                        text: Highlight.toString(),
                        color: '#ffffff',
                        align: 'start',
                        size: 'lg',
                        gravity: 'center',
                        margin: 'lg',
                    },
                ],
                backgroundColor: '#27ACB2',
                paddingTop: '19px',
                paddingAll: '12px',
                paddingBottom: '16px',
            },
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'box',
                        layout: 'horizontal',
                        contents: [
                            {
                                type: 'text',
                                text: messageBelow.toString(),
                                color: '#8C8C8C',
                                size: 'sm',
                                wrap: true,
                            },
                        ],
                        flex: 1,
                    },
                ],
                spacing: 'md',
                paddingAll: '12px',
            },
            styles: {
                footer: {
                    separator: false,
                },
            },
        },
    };
}
exports.flexBadge = flexBadge;
//# sourceMappingURL=message.js.map