const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923143581887";




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
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_35_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1LFxuICAgICAgICA4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICA4MixcbiAgICAgICAgMTA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1LFxuICAgICAgICA1OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEsXG4gICAgICAgIDczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMixcbiAgICAgICAgMTA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAyLFxuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJraDJpcW9Bck8ra3JaUlJGTVptajF5SStGVGduc2ZTSjRzTVl5M2xnZ1lrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSeThkMHAwdlQ5cTRSUm1EcVVONm1BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc2YzUxNTEyLWVkMzEtNDc1NS05NTJmLTJmOTY1NjFjNmI1NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAxMzEsXG4gICAgICA4MixcbiAgICAgIDY0LFxuICAgICAgMTA1LFxuICAgICAgMCxcbiAgICAgIDEyNSxcbiAgICAgIDc0LFxuICAgICAgMTY1LFxuICAgICAgMTUsXG4gICAgICAxOTEsXG4gICAgICAxOTEsXG4gICAgICAxMjEsXG4gICAgICA1MSxcbiAgICAgIDQ3LFxuICAgICAgMzMsXG4gICAgICAyMDYsXG4gICAgICAyMyxcbiAgICAgIDQzLFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDE4MyxcbiAgICAgIDEzLFxuICAgICAgMjEzLFxuICAgICAgMTUyLFxuICAgICAgNjYsXG4gICAgICAxNzcsXG4gICAgICA4OCxcbiAgICAgIDE2LFxuICAgICAgMzQsXG4gICAgICAxNjAsXG4gICAgICAxOTUsXG4gICAgICAyMTcsXG4gICAgICA2NyxcbiAgICAgIDIxMixcbiAgICAgIDE3NSxcbiAgICAgIDU2LFxuICAgICAgMzYsXG4gICAgICAxMzAsXG4gICAgICAyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGMjJLUUNER1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTQzNTgxODg3Ojg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSk9LRVIgT0ZGSUNJQUxcIixcbiAgICBcImxpZFwiOiBcIjE2NzYxMTQwMDc0NTE2NDo4OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQS0Uzd0VRd3FLbXV3WVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJ0V0wwRWYyeG9yZndYS0pQa3g4YzVCSkJVUmpyWjNNY1BNV21GOXh0U3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia0puRTFRRm8vWCtvZmFIbGtESmRBVUlmeUl1UzBQNk8wUDhaT3hlWlNFNWxpM0psUm85R1kyU2JTMzBjNFdFMkVkUXdrNXBOdHpIYk5XcWRGdlZzQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTmVuTkNCUEtwa202MXYvekZySkxtOXBHT2s2eWdHYjY0NWxUV3BRZHRTV3hIaHQ4MkN3NEd4K2RlRHU1WTVLemlzVVdpbVphK01maU9mTi82c1ZrRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTQzNTgxODg3Ojg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDk3MTcxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURvTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRG9OLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOVFVYjZpZ3MvdmJLNUF3SnlGN3hGbXR0UVNRRmkwUmRIQlVMRmNURFh3MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNjU0MjU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ5NzE1NjU2MjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "JOKER-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
