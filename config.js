const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU42ME9vU2QrUHhZNzFRaUFjVG5nejZoL1BxdnB5eEQyL3VEMkVOZnBHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmRJNDM3Q3J0VlRSQzFlREd0UlVJUkFYSjZCa1Q1QzNVemUxY1FzZ25nND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTm05VU8wTkJ4YWFkWGZXMEN4WTYxK3BHVEU5UHRCbVlqL09jUlRud0dVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVcFJOWm9UeEVVdGdsanlsWmhCeTI1ZngxdnpZVlVtWUxqU3QwL0lLV3lJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNQbVRkNllJSFNicFJvZXlXL1dubGZUMzBHRXNITHU1dCtwdkVHblRhMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllkaXQ5RkxNVkdrTkliRUFXMmJpVHlUYzBRYVBJWWc4a2prZzY0bHRCVTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFXVnVvRXR3L21OQXVva25NOHZjeHdxTnRGV1dhU0F2SGZLZjFHeXpsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFkzNWV5QlJYT0FxczNjYWZycUkxTlZJcTRjalQ1ZWJ5TDhkdmV3ckRrMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZzZ1hpZjBVL2J3cGlvcHJUMXRyQ01ja2NvMVFoUEFTYTJ0bEs1b0ZiREs4RlhJdlBzVEd1dGNVSEltdlJTQXB3YmVmTk83TWUzTjZOS1VnYWdXTmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6InNlSUc2dVFpNDVlanBhaEV5aitpZkdsUHhpMXdvNEFIK2VmYStUZmVlSjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6Ijg4MDE3NDI5OTc3Nzg6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGFudmlyIiwibGlkIjoiODg0NDY5ODMwMDg0MTY6MTdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJN2w1NE1DRUlEaDVzc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJlb0wxMUxRK3BMcUZoVVBkSjdYS3gwN3c2WXdjbFpyY0QyOGEzb0hZU0dVPSIsImFjY291bnRTaWduYXR1cmUiOiJ5UzlQZkRPdnVDL3VNb3FrSnhvSk1vTEJMMUVCNkpoWW10Z3pIVXVlWjA1Q0MzQUdZZDdueUxYREJZRHFyYVJzaUNTUEZGV1ZWMkUvdGMwWWdHOFVCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY3lEYUhCU3J2MGc1bDI5VDdlNUtvTjc0SFAxcG5zWGNlb25NaUZ5dFg2RWQ1dEcyQ2JOd1d5YWN6VWlMMExzMkJtb2UrS0FUTXJocWpsdS9TNzZxZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI4ODAxNzQyOTk3Nzc4OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhxQzlkUzBQcVM2aFlWRDNTZTF5c2RPOE9tTUhKV2EzQTl2R3Q2QjJFaGwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZ2dGIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2OTU4MjczNSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLMFgifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝚂𝙴𝙴𝙽 𝚈𝙾𝚄𝚁 𝚂𝚃𝙰𝚃𝚄𝚂 𝙱𝚈 𝙰𝙽𝙰𝚈𝙰𝚃-𝙰𝙸 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝙰𝙽𝙰𝚈𝙰𝚃 𝙷𝙰𝙲𝙺𝙴𝚁",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙰𝙽𝙰𝚈𝙰𝚃-𝙰𝙸 ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "𝚉𝙸𝙽𝙳𝙰 𝙷𝚄𝙽 𝚈𝙰𝚁 🤖",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
