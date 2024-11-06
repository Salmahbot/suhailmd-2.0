const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347084559714";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_38_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgyLFxuICAgICAgICA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICA4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NixcbiAgICAgICAgNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyOSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk0LFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUyLFxuICAgICAgICAyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI4LFxuICAgICAgICA4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS2ZsaGFoOVQ0dVFrVGdZZG9SZGxXcjhlc3JiSTVRejJtVFM1emxMdTl6ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZlBMRmxSX3ZTZUNfUlpGNThKdWw3Z1wiLFxuICBcInBob25lSWRcIjogXCJiMjg5YzU0Mi05MGMxLTQzNDYtODA1Ny1iMjM4NjIzNTBlYjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTAzLFxuICAgICAgMTMsXG4gICAgICAxNDgsXG4gICAgICAyOCxcbiAgICAgIDE2MixcbiAgICAgIDExNCxcbiAgICAgIDExOCxcbiAgICAgIDAsXG4gICAgICAxMjQsXG4gICAgICAxMDcsXG4gICAgICAxOTcsXG4gICAgICA1MyxcbiAgICAgIDQ0LFxuICAgICAgMTYxLFxuICAgICAgODQsXG4gICAgICAxNDIsXG4gICAgICAyMixcbiAgICAgIDYxLFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICAyMjUsXG4gICAgICA2LFxuICAgICAgODYsXG4gICAgICAxNjEsXG4gICAgICA0LFxuICAgICAgMTkzLFxuICAgICAgMTYzLFxuICAgICAgMjM5LFxuICAgICAgMTU2LFxuICAgICAgMTEsXG4gICAgICAxNSxcbiAgICAgIDg2LFxuICAgICAgMTMwLFxuICAgICAgNixcbiAgICAgIDIwNCxcbiAgICAgIDE5OSxcbiAgICAgIDEwLFxuICAgICAgODgsXG4gICAgICA1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLRDdDUDFIUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4NDU1OTcxNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVW1taXNhbG1hIEFkYW11IEFiZHVsXCIsXG4gICAgXCJsaWRcIjogXCIxNjgyMDQxOTAwOTM0Mjg6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUDl0Nk1HRUx6aXJia0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImw4VHl4YUw0UEQ2emNnN2hnaWNtZUk4M1Jtb1VFOWp5TnRHUTRRSnVhRHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaURmTk8rdSt0WkxIdnJLTThWY09FQ1QwY3V3NVNlWU5LSHJBcGtYdE93c0dTVXRVRkNQbmtGZGtyNGZaNlBGQ055SGN3TU1DNkFSb2JWbHQzZ05FREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWEt3VndFUDh6anEvd2NMQzN0Y0lwcWtVMm9jNEdDWVk2cTVMN25QZkEwVUxjb3VKdTR1eVVEbXN6ckFLT3lYcUZ4dXpNM2IyQ2Fpa3BHMEw0aktERFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4NDU1OTcxNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA5MDAyODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKQVRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpBVC5qc29uIjogIntcImtleURhdGFcIjpcIkJFU3pqU21FS0FZMVV0ZmF2NlhoL2xhUXFZMTliYy9FMlBUeUpPSzk5KzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY4NDkzMDI0MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwMzkzMTIxODAyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
