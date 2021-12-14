const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/6M8NfiI.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Pikachu bot created by Ameer Suhail*
*Creator number : wa.me/919567489404?text=Hi%20Shefin%20Sir.%20*

*Githublink (Setup)  :    https://github.com/Shefin-Sir/Kelly-Mwol*

*Audio commads :   https://github.com/Chunkindepadayali/media/tree/main/uploads*

*Sticker commads : https://github.com/Chunkindepadayali/media/tree/main/stickers*

*Video For Setting Bot : https://youtube.com/channel/UCwV0nRJ9IgArIGbLBOYIp3w* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
