/* Amalser Bot
Re-edit Amalser + Shefin Sir
*/

const LizaMwol = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


let whb = Config.WORKTYPE == 'public' ? false : true

LizaMwol.addCommand({pattern: 'alive', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!credit Amal
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: Config.ALIVE_BUTTON }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: Config.ALIVEBUTTON }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '```'+Config.BOTV2+'\n\n```'+Config.ALIVEMSG+'\n',
          footerText: 'ᴋᴇʟʟʏ ᴍᴡᴏʟ™ ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
