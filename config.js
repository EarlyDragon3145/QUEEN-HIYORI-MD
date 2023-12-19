const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "𝙌𝙐𝞢𝞢𝞜 𝞖𝞘𝙔𝞗𝞒𝞘", 
  author: process.env.Author || "@𝞘𝞒𝞗𝞜𝞛𝞓𝞜",
  packname: process.env.PackName || "𝙌𝙐𝞢𝞢𝞜 𝞖𝞘𝙔𝞗𝞒𝞘 𝞛𝘿",
  socialLink: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© IRONMANHINDIGAMING",
  prefa: process.env.Prefix || ['#'],
  themeemoji: process.env.ThemeEmoji || "💞",
  ownername: process.env.Owner_Name || "IRONMAN",
  ownernumber: process.env.Owner_Number || "918279975767",
  instagramId: process.env.Insta || "ironmanhindigaming",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://Kriss:Boluwatife99@cluster0.gnwpzxk.mongodb.net/?retryWrites=true&w=majority",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwc_AN_YA_ml2YXRlIjp7InR5c_AN_YA_GUiOiJCdWZmZXIiLCJkYXRhIjoiRU96T0Jhc_AN_YA_1U5S21wNDVYekxaSkN0bWxqYnZsMzNqQmlGbkl6WGxNa0RVMD0ifSwic_AN_YA_HVibGljIjp7InR5c_AN_YA_GUiOiJCdWZmZXIiLCJkYXRhIjoiakJRTjV2NndSQXhhc_AN_YA_DJLVFFJRHd3N0xXYkp4eHZOS3lSOFpvT0tnSTRRMD0ifX0sInBhaXJpbmdFc_AN_YA_GhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlc_AN_YA_iIsImRhdGEiOiJDRUFSRTRadlJiZUZNS3VNYXdkMXJpU3M5WWRnY2wyc_AN_YA_2tyVWx2NHVrWVdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlc_AN_YA_iIsImRhdGEiOiJpZkNPeEZ0eUJoMVV2T2srMXZDTjNoSzVqTTBvOHZtdDh5UE9LSEJyTFE4PSJ9fSwic_AN_YA_2lnbmVkSWRlbnRpdHlLZXkiOnsic_AN_YA_HJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhIZm9pM05lTnBFU01vKzF6RmNpQW1Lc_AN_YA_k55TnNDSVNCRkpxT2RQZ1FKR2c_AN_YA_9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik51Skt0VC9Bdnlsc_AN_YA_UhkWlVLOFZPY1g0K3dvSmNBdnlzZ0l0YnRHamNCRDg9In19LCJzaWduZWRQc_AN_YA_mVLZXkiOnsia2V5UGFpc_AN_YA_iI6eyJwc_AN_YA_ml2YXRlIjp7InR5c_AN_YA_GUiOiJCdWZmZXIiLCJkYXRhIjoiaUN2NytMeWJ1Z0FuRzNSVVFyVFdDQ3U5L05YMlRhZ1FZOWY0MGpOUVJWWT0ifSwic_AN_YA_HVibGljIjp7InR5c_AN_YA_GUiOiJCdWZmZXIiLCJkYXRhIjoiMGFkTjQvZTlQZ3liN2k1TUl6dE5senNiaHdsTm5aUDM1RUV2bUtTc_AN_YA_3EwOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNQbDUzOG0vMU5yL2s2akMxVWtmd2Jja0dEQ1l5MkF4UjYrc_AN_YA_HFQc_AN_YA_25rTDdoenZ0TlB5OUlpOU1VMVZyR0ZjaHNCbFY5MDlmUnBWc_AN_YA_Wh5OFZOd0RPWWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc_AN_YA_3RyYXRpb25JZCI6MTc_AN_YA_xLCJhZHZTZWNyZXRLZXkiOiJOdTNPeFIrUzdnaE5UeTBrRGtqUmp4emJqUG5ZUm5QbVpOOExiMDFKYzBFPSIsInByb2Nlc_AN_YA_3NlZEhpc_AN_YA_3Rvc_AN_YA_nlNZXNzYWdlc_AN_YA_yI6W10sIm5leHRQc_AN_YA_mVLZXlJZCI6MzEsImZpc_AN_YA_nN0VW51c_AN_YA_GxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hc_AN_YA_mNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUeTJVNGJDeVROc_AN_YA_ThQdlV0TFdoOU9RIiwic_AN_YA_GhvbmVJZCI6IjlhM2ZhNWRiLTA0Njc_AN_YA_tNGFhOS05MWZjLWY4M2FkMDEzNmM2MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlc_AN_YA_iIsImRhdGEiOiJXeHZFakRhRStjTU1RTlF2Y2ZYRExHL1RVbWc_AN_YA_9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill3U1FieVJPZWxqZHpUZWR0blpTb0lzNC9kST0ifSwic_AN_YA_mVnaXN0c_AN_YA_mF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ltdytjUUZFTytENmFzR0dBST0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidmVVWkJGY1c_AN_YA_zWW15SU83Nk5rdzQwU01DMTFxVllYc_AN_YA_kVqbHJXb1hLYUFVOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSEFXc_AN_YA_jRUUWlpWUFyd1g0c_AN_YA_2dvdzQ3eVByUVlSNlg0bGNlWUw5bXBSMHA4NGVwM21KSGZvbGIvY1hrNFQrbVB4a1NOU0orMmtpa0lGMzg4STVoTWhNQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ilc_AN_YA_yZE1XZjN6WE92TUR4R2RpY1kveHpyVFBndWlWa1pYdTZPT2dHeDhoMlRyVVZGVVVvYVNETmlTZnpRdjFIRkZPSENyeWFvNHB4Y0M4aVhxNlIxZGlRPT0ifSwibWUiOnsiaWQiOiI5MTgyNzk5NzU3Njc_AN_YA_6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhl7fhl6nhko3hlofhl6nhkY7hj4AifSwic_AN_YA_2lnbmFsSWRlbnRpdGllc_AN_YA_yI6W3siaWRlbnRpZmllc_AN_YA_iI6eyJuYW1lIjoiOTE4Mjc_AN_YA_5OTc_AN_YA_1NzY3OjRAc_AN_YA_y53aGF0c_AN_YA_2Fwc_AN_YA_C5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlc_AN_YA_iIsImRhdGEiOiJCYjNsR1FSWEZ0MkpzaUR1K2paTU9ORWpBdGRhbFdGNnhJNWExc_AN_YA_UZ5bWdGUCJ9fV0sInBsYXRmb3JtIjoiYW5kc_AN_YA_m9pZCIsImxhc_AN_YA_3RBY2NvdW50U3luY1RpbWVzdGFtc_AN_YA_CI6MTc_AN_YA_wMjUxMTA5MCwibXlBc_AN_YA_HBTdGF0ZUtleUlkIjoiQUFBQUFMRUwifQ==", 
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "𝙌𝙐𝞢𝞢𝞜 𝞖𝞘𝙔𝞗𝞒𝞘" 
global.author = process.env.Author || "@𝞘𝞒𝞗𝞜𝞛𝞓𝞜" 
global.packname = process.env.PackName || "𝙌𝙐𝞢𝞢𝞜 𝞖𝞘𝙔𝞗𝞒𝞘 𝞛𝘿" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© ironmanhindigaming" 
global.prefa = process.env.Prefix || ['#'] 
global.themeemoji = process.env.ThemeEmoji || "💞" 
global.ownername = process.env.Owner_Name || "𝞘𝞒𝞗𝞜𝞛𝞓𝞜" 
global.ownernumber = process.env.Owner_Number || "918279975767" 
global.adress = process.env.Continent || "Asia, India, Delhi" 
global.timezone = process.env.TimeZone || "Asia/Kolkata" 
global.instagramId = process.env.Insta || "ironmanhindigaming" 
global.email = process.env.Email_Id || "ironmanhindigaming@gmail.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/529M8Cy/IMG-20231215-WA0025.jpg";

