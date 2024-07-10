const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923165167688";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_54_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg3LFxuICAgICAgICA3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MixcbiAgICAgICAgMjE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQzLFxuICAgICAgICA1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxODksXG4gICAgICAgIDM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwLFxuICAgICAgICA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNixcbiAgICAgICAgOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4LFxuICAgICAgICA1LFxuICAgICAgICA2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDY0LFxuICAgICAgICA3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkowVG5VaHBtdzFLTTRjY1NHRHNFTldML3FENDNQUGx2NklQMkUvcXZ5UFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTY1MTY3Njg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMkVBMjYwNDkxMkIwM0MyNjJGNDIwQkVBN0EwODhFNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MTI0ODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNjUxNjc2ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdCMDk0RDY4QzI5RkU4Q0YwNzcxMTdEREQwMUFGRkNEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYxMjQ4MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxcmc4bEdqZlNnaUlxNzJDdUMxQ1FRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjllNWFjNjNmLWNhYjktNGQyYy1hMDlkLWYwY2IyY2Y5ZDAwOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICAxMzAsXG4gICAgICAxMzAsXG4gICAgICAxNTAsXG4gICAgICA0NyxcbiAgICAgIDExOSxcbiAgICAgIDE0NixcbiAgICAgIDE0NSxcbiAgICAgIDQ0LFxuICAgICAgODksXG4gICAgICAxNDYsXG4gICAgICA3MyxcbiAgICAgIDYwLFxuICAgICAgMjIyLFxuICAgICAgMjM3LFxuICAgICAgODIsXG4gICAgICAyMzIsXG4gICAgICA0MSxcbiAgICAgIDUyLFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTMsXG4gICAgICA1LFxuICAgICAgMjI1LFxuICAgICAgMjE4LFxuICAgICAgOTgsXG4gICAgICAxNzgsXG4gICAgICA2MixcbiAgICAgIDk5LFxuICAgICAgMTUyLFxuICAgICAgNTgsXG4gICAgICA3MixcbiAgICAgIDQxLFxuICAgICAgNTAsXG4gICAgICAzOCxcbiAgICAgIDg3LFxuICAgICAgMSxcbiAgICAgIDE5OCxcbiAgICAgIDEzNixcbiAgICAgIDE2LFxuICAgICAgODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1ZCQzQ1WlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE2NTE2NzY4ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjc2MjExNDQ4MzAwNTY6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLqp4HinaTigKLgvIZIVSRO5LmISU4g4pmhwrgu4oCiKlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QRzBwQUhFUHpzdWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMnA1VmZBWVZ6V0NPNG4vTnRYSFBoVld5elVBSlFBYVhibFNMN3NxQ3p4az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5VjhRdjJVMmlyZHRVQnczVUVWbGRuSVhtUjExL21QSFdMUEo4WVJpZUxFMVdubXZFZHdxWTcyS3kxTThTK0FOVVNSaGVqMHhHcDZtSWtVMzkxTndDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2ZCtkWnc3MXBvemw0ZFhjNTB3RUt6VzZ3bk9GVjBxelhXZ25FcGFHV1JZdE1KZkpCaFQ1cFZQbkVoSElaMFVXNDZIUUhwZWNjTHVkZUg1YTFDVlVoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNjUxNjc2ODg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MTI0ODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBOHlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUE4eS5qc29uIjogIntcImtleURhdGFcIjpcIldOOFM0RTc5cjRUSklvc1VoWWJvazIzaXpTYWNOTlFFZzRFWkhhZm9zSkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkxMzk1NTEzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjEyNDgxODY5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
