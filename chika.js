/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const riy = require('xfarr-api')

//function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// Language
const  { ind } = require(`./language`)
lang = ind // Language
typemenu = 'image'
// Date
moment.tz.setDefault("Asia/Jakarta").locale("id");


module.exports = chika = async (chika, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await chika.decodeJid(chika.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid

        // Time & Date
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
        const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        
        // Group
        const groupMetadata = m.isGroup ? await chika.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
	
	    // Reply
        const replly = (teks) => {
            chika.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${myweb}`}}}, { quoted: m })
        }
            const reply = (teks) => {
            chika.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${myweb}`}}}, { quoted: m })
        }
        // Reply 2
        const replay = (teks) => {
            chika.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${myweb}`}}}, { quoted: m })
        }
        
        
         
              //—————「 Auto Sound + Sticker 」—————//
const araara = (hehe) => {
omkeh4 = fs.readFileSync('./janganToxic.mp3')
chika.sendMessage(from, {audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
}
const sound = (hehe) => {
const bisaa = ['sound1','sound2','sound4','sound5','sound6','sound7','sound8','sound9','sound11','sound12','sound13','sound14','sound15','sound16','sound17','sound18','sound19','sound20','sound21','sound22','sound23','sound24','sound25','sound26','sound27','sound28','sound29','sound30','sound31','sound32','sound33','sound34','sound35','sound36','sound37','sound38','sound39','sound40','sound41','sound42','sound43','sound44','sound45','sound46','sound47','sound48','sound49','sound50','sound51','sound52','sound53','sound54','sound55','sound56','sound57','sound58']
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
omkeh4 = fs.readFileSync(`./${gaa}.mp3`)
chika.sendMessage(from, {audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
}
const rohani = (hehe) => {
const bisaa = ['rohani']
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
omkeh4 = fs.readFileSync(`./${gaa}.mp3`)
chika.sendMessage(from, {audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
}
const apasih = (hehe) => {
const bisaa = ['apasih']
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
omkeh4 = fs.readFileSync(`./${gaa}.mp3`)
chika.sendMessage(from, {audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
}
const velo = (hehe) => {
const bisaa = ['velo.mp4','velo1.mp4']
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
omkeh4 = fs.readFileSync(`./${gaa}`)
chika.sendImageAsSticker(m.chat, omkeh4, m, { packname: global.packname, author: global.santuy })
}
const nangis = (hehe) => {
omkeh4 = fs.readFileSync(`./nangis.webp`)
chika.sendImageAsSticker(m.chat, omkeh4, m, { packname: global.packname, author: global.santuy })
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./admin.webp')
chika.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: `𝗞𝗮𝗺𝘂 𝗕𝘂𝗸𝗮𝗻 𝗮𝗱𝗺𝗶𝗻 🗿`})
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./group.webp')
chika.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: `𝗣𝗮𝗸𝗮𝗶 𝗜𝘁𝘂 𝗱𝗶 𝗴𝗿𝘂𝗽🗿`})
}
const sticBotAdmin = (hehe) => {
ano = fs.readFileSync('./botadmin.webp')
chika.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: `𝗕𝗼𝘁 𝗕𝘂𝗸𝗮𝗻 𝗮𝗱𝗺𝗶𝗻 🗿`})
}
const Sesat2 = (hehe) => {
ano = fs.readFileSync('./Ini.webp')
chika.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: `𝗣𝗮𝗸𝗮𝗶 𝗜𝘁𝘂 𝗱𝗶 𝗴𝗿𝘂𝗽🗿`})
}
const Sesat = (hehe) => {
ano = fs.readFileSync('./Sesat.webp')
chika.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: `𝗣𝗮𝗸𝗮𝗶 𝗜𝘁𝘂 𝗱𝗶 𝗴𝗿𝘂𝗽🗿`})
}



        // Memeg
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!chika.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            chika.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await chika.setStatus(`${chika.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply('𝗢𝗵 𝗶𝘆𝗮 𝗹𝘂𝗽𝗮 𝘁𝗲𝗿𝗻𝘆𝗮𝘁𝗮 𝗮𝗸𝘂 𝗯𝘂𝗸𝗮𝗻 𝗮𝗱𝗺𝗶𝗻 (´ . .̫ . `)')
        let gclink = (`https://chat.whatsapp.com/`+await chika.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`𝗨𝗻𝘁𝘂𝗻𝗴 𝗹𝗶𝗻𝗸 𝗴𝗿𝘂𝗽 𝗶𝗻𝗶, 𝗸𝗮𝗹𝘂 𝗯𝘂𝗸𝗮𝗻 𝘂𝗱𝗮𝗵 𝗰𝘆𝗮 𝗸𝗶𝗸 (￣▽￣)`)
        if (isAdmins) return reply('𝗨𝗽𝘀 𝗵𝗮𝗺𝗽𝗶𝗿 𝗰𝘆𝗮 𝗸𝗶𝗸, 𝘂𝗻𝘁𝘂𝗻𝗴 𝗮𝗱𝗺𝗶𝗻𝗸𝘂 ´･ᴗ･`')
        if (isCreator) return reply(`𝗨𝗽𝘀( ･_･) 𝗟𝘂𝗽𝗮, 𝗧𝗲𝗿𝗻𝘆𝗮𝘁𝗮 𝗸𝗮𝗺𝘂 𝗼𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗸𝘂 ♡＾▽＾♡`)
        m.reply('𝗗𝗮𝗱𝗮 𝗕𝗲𝗯𝗮𝗻(≧▽≦)👋. . .') 
        chika.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }


      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: chika.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, chika.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        chika.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            chika.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await chika.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await chika.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    chika.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    chika.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) chika.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) chika.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) chika.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    chika.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) chika.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) chika.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    chika.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

      switch(command) {
        case 'inventori': 
    case 'inv':
    case 'profile':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var riych = await getBuffer(picak+'Profile User')
     let teksehmazeh = `✦━━[📍𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿📍] ━━✦\n`
     teksehmazeh += `*❤️Darah kamu* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Besi kamu* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Emas Kamu* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎emerald Kamu* : ${getemerald(m.sender)}\n`
     teksehmazeh += `*⏺️Limit kamu* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Potion Kamu* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `✦━━[🐺𝐇𝐀𝐒𝐈𝐋 𝐁𝐔𝐑𝐔𝐀𝐍🐺]━━✦\n`
     teksehmazeh += `*🐟Ikan* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Ayam* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Kelinci* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Domba* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Sapi* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Gajah* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_\n`
     await chika.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${youtube}`}},{"urlButton": {"displayText": `𝐌𝐲 𝐆𝐫𝐮𝐩`,"url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}])
  }
  break
        case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `✦━━━「 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 」━━━✦\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'menambang':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besinya = [0,0,10,20,25,27,16,2,13,30,25,17,18,19,21,22,23,24,99]
  let emasnya = [0,0,10,20,25,27,16,2,13,30,25,17,18,19,21,22,23,24,99]
  let uang = [0,0,10,20,25,27,16,2,13,30,25,17,18,19,21,22,23,24,99]
  let dmnya = [0,3,5,4,7,7,5,6,4,6,3,2,2,4,1,10,0,0,0,0]
  var besi = besinya[Math.floor(Math.random() * besinya.length)]  
  var emas = emasnya[Math.floor(Math.random() * emasnya.length)]  
  var pp = uang[Math.floor(Math.random() * uang.length)]  
  var dm = dmnya[Math.floor(Math.random() * dmnya.length)]  
  try {
                    ppuser = await chika.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
  setTimeout( () => {

  let caption = `✦━━━━[ 𝗦𝗲𝗹𝗲𝘀𝗮𝗶 𝗠𝗶𝗻𝗶𝗻𝗴 ]━━━━✦\n\n𝗟𝗶𝘀𝘁 𝗛𝗮𝘀𝗶𝗹 :\n𝗘𝗺𝗮𝘀 : ${emas}🪙\n𝗨𝗮𝗻𝗴 : ${pp}💰\n𝗕𝗲𝘀𝗶 : ${besi}⛓️\n𝗕𝗲𝗿𝗹𝗶𝗮𝗻 : ${dm}💎`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: '𝗠𝗶𝗻𝗶𝗻𝗴 𝗔𝗻𝗴𝗶𝗻.'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: ppuser },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     chika.sendMessage(from, buttonMessage, { quoted: m })        
   }, 7500)  
          setTimeout( () => {
		  m.reply('🚧 𝗦𝗲𝗹𝗲𝘀𝗮𝗶 𝗠𝗲𝗻𝗴𝘂𝗹𝗶. . .🪙👷') 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  m.reply('🚧 𝗠𝗲𝗻𝘂𝗺𝘂𝗸𝗮𝗻 𝗘𝗺𝗮𝘀. . .⚒️🏔️️️') 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  m.reply('🚧 𝗠𝘂𝗹𝗮𝗶 𝗠𝗲𝗻𝗮𝗺𝗯𝗮𝗻𝗴. . .⚒️🏔️️') 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  m.reply('𝗪𝗮𝗶𝘁 𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗻𝗴𝘂𝗹𝗶') 
		  }, 0) // 1000 = 1s,
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besi)
  addEmas(m.sended, emas)
  addMonay(m.sender, pp)	     
  addemerald(m.sender, dm)	     
  }   
  break  
  
  //transaksi
 case 'beli': case 'buy':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 Monay`)
 if (isMonay < noh) return reply('Sisa Monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa Monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 Monay`)
 if (isMonay < noh) return reply('Sisa Monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa Monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 Monay`)
 if (isMonay < noh) return reply('Sisa Monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa Monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Format salah!") }
 }
 break
 case 'sel': case 'jual':{//BY LORD RIFZA
 if (!q) return  reply(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 Monay`)
 kurangIkan(m.sender, anu)
 let Monaynya = 1500 * anu
 addMonay(m.sender, Monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 Monay`)
 kurangAyam(m.sender, anu)
 let Monaynya = 2500 * anu
 addMonay(m.sender, Monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 Monay`)
 kurangKelinci(m.sender, anu)
 let Monaynya = 3000 * anu
 addMonay(m.sender, Monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 Monay`)
 kurangDomba(m.sender, anu)
 let Monaynya = 5000 * anu
 addMonay(m.sender, Monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 Monay`)
 kurangSapi(m.sender, anu)
 let Monaynya = 10000 * anu
 addMonay(m.sender, Monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 Monay`)
 kurangGajah(m.sender, anu)
 let Monaynya = 15000 * anu
 addMonay(m.sender, Monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 Monay`)
 kurangBesi(m.sender, anu)
 let Monaynya = 16000 * anu
 addMonay(m.sender, Monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 Monay`)
 kurangEmas(m.sender, anu)
 let Monaynya = 50000 * anu
 addMonay(m.sender, Monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isemerald < anu) return reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 Monay`)
 kurangemerald(m.sender, anu)
 let Monaynya = 100000 * anu
 addMonay(m.sender, Monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getemerald(m.sender)}`)
  }, 2000) 
 } else { reply("Format salah!") }


 }
 break

 case 'heal':{
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isCekDarah < 1) return m.reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return m.reply('Darah kamu sudah penuh')
 if (isPotion < 1) return m.reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{
if (q.includes('--help')) return m.reply(examkosong) 
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return m.reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `✦━━━━━[𝗟𝗶𝘀𝘁 𝗕𝘂𝗿𝘂𝗮𝗻]━━━━━✦\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `✦━━━━━━[ 𝗜𝗡𝗙𝗢 ]━━━━━━✦\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: '𝗕𝗲𝗿𝗯𝘂𝗿𝘂 𝗟𝗮𝗴𝗶🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     chika.sendMessage(from, buttonMessage, { quoted: m })      
  }, 7500)  
  setTimeout( () => {
		  m.reply('🏹 𝗦𝗲𝗹𝗲𝘀𝗮𝗶 𝗕𝗲𝗿𝗯𝘂𝗿𝘂. . .') 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  m.reply(`🏹 𝗠𝗲𝗻𝘂𝗺𝘂𝗸𝗮𝗻 𝗕𝘂𝗿𝘂𝗮𝗻. . .` ) 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  m.reply('🏹 𝗠𝘂𝗹𝗮𝗶 𝗕𝗲𝗿𝗯𝘂𝗿𝘂. . .') 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  m.reply(`𝗪𝗮𝗶𝘁 𝗦𝗲𝗱𝗮𝗻𝗴 𝗕𝗲𝗿𝗯𝘂𝗿𝘂 𝗗𝗶 ${lokasinya}`) 
		  }, 0) // 1000 = 1s,
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break    
        
        case 'mancing':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let ikan = [0,0,10,20,25,27,0,0,0,1,1,1,1,1,11,1,1,1,1,1,1,,2,2,2,2,2,2,2,2,3,3,0,0,03,3,3,3,4,4,4,4,4,4,4,4,4,,16,2,13,30,25,17,18,19,1,1,1,1,1,21,22,23,24,99]
  var ikanya = ikan[Math.floor(Math.random() * ikan.length)]  
  let gambaran = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
  var gambar = gambaran[Math.floor(Math.random() * gambaran.length)]  
 
  try {
                    ppuser = await chika.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
  setTimeout( () => {

  let caption = `✦━━━━[ 𝗦𝗲𝗹𝗲𝘀𝗮𝗶 𝗠𝗮𝗻𝗰𝗶𝗻𝗴 ]━━━━✦\n\n𝗛𝗮𝘀𝗶𝗹 𝗧𝗮𝗻𝗴𝗸𝗮𝗽𝗮𝗻: ${ikanya} 𝗜𝗸𝗮𝗻 ${gambar} \n\n`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: '🎣𝗠𝗮𝗻𝗰𝗶𝗻𝗴 𝗟𝗮𝗴𝗶🎣'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: ppuser },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     chika.sendMessage(from, buttonMessage, { quoted: m })        
   }, 7500)  
          setTimeout( () => {
		  m.reply('🎣 𝗦𝗲𝗹𝗲𝘀𝗮𝗶 𝗠𝗲𝗺𝗮𝗻𝗰𝗶𝗻𝗴. . .') 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  m.reply('🎣 𝗠𝗲𝗻𝗮𝗿𝗶𝗸 𝗞𝗮𝗶𝗹 . . .') 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  m.reply('🎣 𝗠𝘂𝗹𝗮𝗶 𝗠𝗲𝗺𝗮𝗻𝗰𝗶𝗻𝗴. . .') 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  m.reply('𝗪𝗮𝗶𝘁 𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗺𝗮𝗻𝗰𝗶𝗻𝗴') 
		  }, 0) // 1000 = 1s,
  kurangDarah(m.sender, 2)
  addIkan(m.sender, ikanya)
  }   
  break  
  
  
  case 'adventur':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let limit = [0,0,0,0,1,0,3,0,0,1,0,0,0,0,0,0,0,0,01,1,1,1,2,2,0,0,0,4,0,0,1,1,1]
  var limitnya = limit[Math.floor(Math.random() * limit.length)]  
  let suatunya = ['𝗟𝗼𝗻𝗴𝘀𝗼𝗿 𝗕𝗮𝘁𝘂','𝗟𝗼𝗻𝗴𝘀𝗼𝗿 𝗧𝗮𝗻𝗮𝗵','𝗴𝗲𝗺𝗽𝗮','𝘀𝘂𝗻𝗮𝗺𝗶','𝗺𝗲𝘁𝗲𝗼𝗿','𝗺𝗲𝘁𝗲𝗼𝗿','𝗮𝗹𝗶𝗲𝗻','𝘁𝘂𝘆𝘂𝗹','𝗪𝗶𝗯𝘂']
  var sesuatu = suatunya[Math.floor(Math.random() * suatunya.length)]  
 let tempatnya = ['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
  var tempat = tempatnya[Math.floor(Math.random() * tempatnya.length)]  
  try {
                    ppuser = await chika.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
  setTimeout( () => {

  let caption = `✦━━━━━[ 𝗗𝗘𝗔𝗧𝗛 ]━━━━━✦\n\n𝗧𝗲𝗺𝗽𝗮𝘁: ${tempat} \n𝗔𝗸𝗶𝗯𝗮𝘁: ${sesuatu} \n 𝗔𝗹𝗮𝘀𝗮𝗻: 𝗞𝗮𝗿𝗻𝗮 𝗚𝗸 𝗱𝗶𝘀𝘂𝗿𝘂𝗵 𝗮𝘆𝗴 𝗹𝗮𝗿𝗶 \n 𝗟𝗶𝗺𝗶𝘁 𝗯𝗲𝗿𝘁𝗮𝗺𝗯𝗮𝗵: ${limitnya} \n\n                          (≧▽≦)`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: '𝗔𝗱𝘃𝗲𝗻𝘁𝘂𝗿 𝗟𝗮𝗴𝗶'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: ppuser },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     chika.sendMessage(from, buttonMessage, { quoted: m })        
   }, 7500)  
   
          setTimeout( () => {
		  m.reply(`𝗔𝘄𝗮𝘀𝘀𝘀𝘀. . .`) 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  m.reply(`𝗧𝗶𝗯𝗮 𝗧𝗶𝗯𝗮 𝗮𝗱𝗮 ${sesuatu}. . .`) 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  m.reply(`𝗠𝗲𝗻𝗴𝗵𝘂𝗿𝘂𝗽 𝘂𝗱𝗮𝗿𝗮 𝘀𝗲𝗴𝗮𝗿. . .`) 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  m.reply(`${pushname} 𝗦𝗲𝗱𝗮𝗻𝗴 𝗯𝗲𝗿𝘁𝘂𝗮𝗹𝗮𝗻𝗴`) 
		  }, 0) // 1000 = 1s,
  kurangDarah(m.sender, 10)
  addLimit(m.sender, limitnya)
  }   
  break
	    case 'assalamualaikum': 
case 'assalamualaikum':
reply(`*𝗪𝗮𝗮𝗹𝗮𝗶𝗸𝘂𝗺𝘀𝗮𝗹𝗮𝗺  𝗸𝗮𝗸 ${pushname}🐦*`)
break

case 'naa':
reply('*𝗡𝗲𝗹𝘀𝗼𝗻*')
break


case 'waaas':
setTimeout( () => {
  reply(`was`)     
  }, 1500),
  setTimeout( () => {
  reply(`was`)     
  }, 3000)
		  
break
case 'ara ara':
case 'Ara Ara':
case 'Ara':
araara(from)
break


case 'gropen':
reply('Tungu saja mungkin dia lagi sibuk atau data nya abis\n\n intinya pasti bakal di Jawab ko🐦')
break

case 'p':
case 'Nelson':
case 'nelson':
case 'Nel':
case 'nel':
case 'bang':
case 'woi':
case 'hi':
case 'halo':
case 'hai':
case 'hay':
case 'cok':
case 'oi':
case 'son':
case 'Son':
case 'P':
if (m.isGroup) return
let buttons = [
                        { buttonId: 'gropen', buttonText: { displayText: '𝐒𝐚𝐲𝐚 𝐌𝐞𝐧𝐜𝐚𝐫𝐢 𝐍𝐞𝐥𝐬𝐨𝐧' }, type: 1 },
                        { buttonId: 'grclose', buttonText: { displayText: '𝐆𝐚𝐤 𝐉𝐚𝐝𝐢🐦' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `𝐈𝐲𝐚 𝐀𝐝𝐚 𝐘𝐚𝐧𝐠 𝐁𝐢𝐬𝐚 𝐒𝐚𝐲𝐚 𝐁𝐚𝐧𝐭𝐮 𝐊𝐚𝐤 ${pushname} ?\n`, chika.user.name, m)
break

case "virtex":
reply('《《   ֎ ⃢🇲🇨⚠️SLAYER VIRTEX⚠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🇲🇨  ²⁰²⁰》》* \n *_*██VIRTEX██*_ \n*𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇨⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈\n**ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰ă̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̱̱̱̱̩̩̩̩̜̞̞̞̞̤̤̤̝̖̖̋̋̋̌̌̌̌̎̎̎̎̎̏̏̏̏̎̎̎̎̎̎̎̎̎̎̎̎̎̎̎̔̔̔̔̓̓̓̓̓̓̕̕˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰ă̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̱̱̱̱̩̩̩̩̜̞̞̞̞̤̤̤̝̖̖̋̋̋̌̌̌̌̎̎̎̎̎̏̏̏̏̎̎̎̎̎̎̎̎̎̎̎̎̎̎̎̔̔̔̔̓̓̓̓̓̓̕̕˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰ă̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̱̱̱̱̩̩̩̩̜̞̞̞̞̤̤̤̝̖̖̋̋̋̌̌̌̌̎̎̎̎̎̏̏̏̏̎̎̎̎̎̎̎̎̎̎̎̎̎̎̎̔̔̔̔̓̓̓̓̓̓̕̕˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*\n\n\n\n\n\n𝗔𝗽𝗮 𝗹𝗶𝗮𝘁 𝗹𝗶𝗮𝘁🐦')
break




case 'tes':
if (!m.isGroup) return
reply('Naoo?')              
break

case 'thx':
case 'thanks':
case 'makasih':
case 'mksih':
case 'tanks':
case 'mksh':
case 'mksih':
reply(`𝗦𝗮𝗺𝗮 𝗦𝗮𝗺𝗮 𝗷𝗴 𝗸𝗮𝗸 ${pushname} 🐦`)              
break
   
case 'salken':
if (!m.isGroup) return
reply(`salken jg kak ${pushname} 🐦`)              
break        
        
        
        
    
        
        
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Telah Afk ${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	 if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		   db.data.users[m.sender].limit -= 1 // -1 limit
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await chika.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await chika.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            chika.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		    db.data.users[m.sender].limit -= 1 // -1 limit
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await chika.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) chika.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) return reply(mess.owner)
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    chika.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    chika.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    chika.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    chika.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    chika.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    chika.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    chika.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await chika.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await chika.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    chika.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                chika.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break


//—————「 Auto VN dll 」—————//



case "onichan":
if (!isBotAdmins) return
	omkeh2 = fs.readFileSync('./onichan.mp3')
	chika.sendMessage(from,{audio: omkeh2, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   
 
 
 case 'ara':
 if (!isBotAdmins) return
omkeh3 = fs.readFileSync('./vn.mp3')
chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   
 
 case 'sad':
 case '🥲':
 case '😔':
 case '🙂':
 case '😭':
 case '🙃':
 case ':)':
 case ':(':
 case 'dalah':
 case 'T_T':
 const bisaa = ['sad1','sad2','sad3','sad4','segala','hanyasatu','sound10']
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
 omkeh4 = fs.readFileSync(`./${gaa}.mp3`)
chika.sendMessage(from,{audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
nangis(from)
 break   
 

 case 'kontol':
 case 'koncol':
 case 'woi ajg':
 case 'memek':
 case 'asu':
 case 'ajim':
 case 'kontl':
 case 'ajg':
 case 'anj':
 case 'babi':
 case 'anjg':
 case 'bangsat':
 case 'bangst':
 case 'bgst':
 case 'ajing':
 case 'bacot':
 case 'anjing':
 case 'bot ajg':
 case 'bot babi':
 if (!m.isGroup) return apasih(from)
 if (!isBotAdmins) return
  if (isAdmins) return araara(from)
 omkeh4 = fs.readFileSync('./apasih.mp3')
chika.sendMessage(from,{audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   
 
 
 case 'nelson':
 case 'nel':
 case 'son':
 case 'apa':
 case 'apasih':
 case 'idih':
 case 'woi':
 case 'bot':
 case '@𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃':
 if (!m.isGroup) return
 if (!isBotAdmins) return
 omkeh5 = fs.readFileSync('./apasih.mp3')
chika.sendMessage(from,{audio: omkeh5, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break


case 'sc':
case 'script':
omkeh5 = fs.readFileSync('./apasih.mp3')
chika.sendMessage(from,{audio: omkeh5, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break


    case "bodoh":
    case "lolii":
    case "kenamental":
    case "lagi_nyari_jodoh":
    case "kenabuly":
    case "jomblo":
    case "terkaya":
    case "lagingentod":
    case "babu":
    case "jadibadut":
    case "tolol":
    case "artis":
    case "bego":
    case "pakboy":
    case "terpintar":
    case "lonte":
    case "beban":
    case "nyimak":
    case "sange":
    case "lagisad": 	 
    case "lebsi": 	
    case "lagicoli":
    case "ganteng":
    case "jelek":
    case "cantik":
    case "gay":
    case "terpedo":
    case "wibu":{
 if (!m.isGroup) throw sticGroup(from)
            let member = participants.map(u => u.id)
            let oi = m.sender
            let ytm = member[Math.floor(Math.random() * member.length)]
            let mty = `𝐘𝐚𝐧𝐠  ${command} 𝐃𝐢 𝐆𝐫𝐮𝐩 𝐈𝐧𝐢 𝐀𝐝𝐚𝐥𝐚𝐡🙀 \n\n @${ytm.split('@')[0]}\n`
            let ments = [oi, ytm]
            let buttons = [
                        { buttonId: 'yati', buttonText: { displayText: '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐘𝐚 𝐊𝐚𝐤🥳' }, type: 1 },
                        { buttonId: 'awokwk', buttonText: { displayText: '𝐀𝐰𝐨𝐤𝐚𝐰𝐨𝐤 (≧▽≦)' }, type: 1 }
                    ]
                     await chika.sendButtonText(m.chat, buttons, mty, chika.user.name, m, {mentions: ments})
}
break



case 'yatim':{
 if (!m.isGroup) throw sticGroup(from)
            let member = participants.map(u => u.id)
            let oi = m.sender
            let ytm = member[Math.floor(Math.random() * member.length)]
            let mty = `𝐂𝐢𝐞𝐞 𝐀𝐝𝐚 𝐘𝐚𝐭𝐢𝐦 𝐁𝐚𝐫𝐮 (≧▽≦) \n\n@${ytm.split('@')[0]}\n`
            let ments = [oi, ytm]
            let buttons = [
                        { buttonId: 'yatim', buttonText: { displayText: 'Yatim' }, type: 1 },
                         { buttonId: 'awokwk', buttonText: { displayText: '𝐀𝐰𝐨𝐤𝐚𝐰𝐨𝐤 (≧▽≦)' }, type: 1 }
                    ]
           await chika.sendButtonText(m.chat, buttons, mty, chika.user.name, m, {mentions: ments})
}
break

            case 'jodohku': {
            if (!m.isGroup) throw sticGroup(from)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah
            
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 },
                        { buttonId: 'jodu', buttonText: { displayText: '𝐂𝐢𝐞𝐞 (≧▽≦) ' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, jawab, chika.user.name, m, {mentions: ments})
            }
            break

case 'ayang':
case 'syg':
case 'sayang': {
            if (!m.isGroup) throw sticGroup(from)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = ` 𝐒𝐢 @${me.split('@')[0]} 𝐂𝐚𝐫𝐢𝐢𝐧 𝐥𝐮😺 @${jodoh.split('@')[0]} \n\n𝐊𝐚𝐭𝐚𝐧𝐲𝐚 𝐝𝐢𝐚 𝐤𝐚𝐧𝐠𝐞𝐧 𝐤𝐚𝐦𝐮`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodu', buttonText: { displayText: '𝐍𝐠𝐠𝐚𝐤, 𝐝𝐢𝐚 𝐛𝐨𝐨𝐧𝐠' }, type: 1 },
                         { buttonId: 'jodu', buttonText: { displayText: '𝐈𝐲𝐚, 😢 𝐚𝐤𝐮 𝐤𝐚𝐧𝐠𝐞𝐧 𝐬𝐚𝐦𝐚 𝐤𝐚𝐦𝐮' }, type: 1 },
                           { buttonId: 'jodu', buttonText: { displayText: '𝐂𝐢𝐞𝐞 (≧▽≦) ' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, jawab, chika.user.name, m, {mentions: ments})
            }
            break


case 'selingkuh':
case 'ngewe': {
            if (!m.isGroup) throw sticGroup(from)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `𝐘𝐚𝐧𝐠 ${command} 𝐊𝐞𝐦𝐚𝐫𝐢𝐧 𝐃𝐢 𝐆𝐫𝐮𝐩 𝐢𝐧𝐢 𝐀𝐝𝐚𝐥𝐚𝐡🙀

@${orang.split('@')[0]} 𝐃𝐞𝐧𝐠𝐚𝐧 @${jodoh.split('@')[0]}\n`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadn', buttonText: { displayText: '𝐇𝐚𝐲𝐨 𝐋𝐨 🤨📸' }, type: 1 },
                         { buttonId: 'awokwk', buttonText: { displayText: '𝐀𝐰𝐨𝐤𝐚𝐰𝐨𝐤 (≧▽≦)' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, jawab, chika.user.name, m, {mentions: menst})
            }
            nangis(from)
            break

            case 'jadian': {
            if (!m.isGroup) throw sticGroup(from)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\n`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 },
                          { buttonId: 'jodu', buttonText: { displayText: '𝐂𝐢𝐞𝐞 (≧▽≦) ' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, jawab, chika.user.name, m, {mentions: menst})
            }
            break

            case 'apakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Mungkin','ya nda tau ko tanya saya']
					const kah = apa[Math.floor(Math.random() * apa.length)]
chika.sendMessage(from, { text: `╭─「 *Semoga Beruntung* 」\n│\n│Pertanyaan : Apakah ${q}\n│\n│Jawaban : ${kah}\n╰────\n\n 𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃` }, { quoted: m })
					break



case 'bisakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','mustahil','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
chika.sendMessage(from, { text: `╭─「 *Semoga Beruntung* 」\n│\n│Pertanyaan : ${q}\n│\n│Jawaban : ${ga}\n╰────\n\n 𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃` }, { quoted: m })

					break
case 'bagaimanakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
chika.sendMessage(from, { text: `╭─「 *Semoga Beruntung* 」\n│\n│Pertanyaan : ${q}\n│\n│Jawaban : ${ya}\n╰────\n\n 𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃` }, { quoted: m })
					break

                    case 'rate':
				    if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    chika.sendMessage(from, { text: `╭─「 *Semoga Beruntung* 」\n│\n│Rate : ${q}\n│\n│Jawaban : *${te}%*\n╰────\n\n 𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃` }, { quoted: m })
					break

case 'gantengcek':
case 'cekganteng':
				    if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Nelson`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
                    chika.sendMessage(from, { text: `╭─「 *Semoga Beruntung* 」\n│\n│Nama : ${q}\n│\n│Jawaban : *${teng}%*\n╰────\n\n 𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃` }, { quoted: m })
					break

case 'cantikcek':
case 'cekcantik': 
				    if (!q) return reply(`Yang Mau di Cek apaan Titit ?`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
                    chika.sendMessage(from, { text: `╭─「 *Semoga Beruntung* 」\n│\n│Nama : ${q}\n│\n│Jawaban : *${tik}%*\n╰────\n\n 𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃` }, { quoted: m })
					break

case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi':
					if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                    chika.sendMessage(from, { text: `╭─「 *Semoga Beruntung* 」\n│\n│Nama : ${q}\n│\n│Jawaban : *${sange}%*\n╰────\n\n 𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃` }, { quoted: m })
					break

case '.kapankah':
				    if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                    chika.sendMessage(from, { text: `╭─「 *Semoga Beruntung* 」\n│\n│Pertanyaan : ${q}\n│\n│Jawaban : *${kapankah}*\n╰────\n\n 𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃` }, { quoted: m })
					break

case 'wangy':
              if (!q) return reply (`Contoh : .𝗪𝗮𝗻𝗴𝘆 𝗡𝗲𝗹𝘀𝗼𝗻`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
case 'cekmati':
              if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break

            case 'react': {
                if (!isCreator) return reply(mess.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                chika.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return reply(mess.owner)
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await chika.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return reply(mess.owner)
                await chika.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return reply(mess.owner)
               if (!q) return reply(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) return sticGroup(from)
                if (!isBotAdmins) return sticBotAdmin(from)
                if (!isAdmins) return sticAdmin(from)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return sticGroup(from)
                if (!isBotAdmins) return sticBotAdmin(from)
                if (!isAdmins) return sticAdmin(from)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return sticGroup(from)
                if (!isBotAdmins) return sticBotAdmin(from)
                if (!isAdmins) return sticAdmin(from)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return sticGroup(from)
                if (!isBotAdmins) return sticBotAdmin(from)
                if (!isAdmins) return sticAdmin(from)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) return sticGroup(from)
                if (!isBotAdmins) return sticBotAdmin(from)
                if (!isAdmins) return sticAdmin(from)
                if (!text) throw 'Text ?'
                await chika.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return sticGroup(from)
                if (!isBotAdmins) return sticBotAdmin(from)
                if (!isAdmins) return sticAdmin(from)
                if (!text) throw 'Text ?'
                await chika.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) return reply(mess.owner)
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                await chika.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) return sticGroup(from)
                if (!isAdmins) return sticAdmin(from)
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                await chika.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw sticGroup(from)
                if (!isBotAdmins) throw sticBotAdmin(from)
                if (!isAdmins) throw sticAdmin(from)
             
let teks = `════✪〘 *👥 Tag All* 〙✪════\n ➲ *𝐏𝐞𝐬𝐚𝐧 : ${q ? q : '𝐓𝐢𝐝𝐚𝐤 ??𝐝𝐚 𝐏𝐞𝐬𝐚𝐧'}*\n\n┌───⊷ *TAG ALL* ⊶\n`
                 
                for (let mem of participants) {
                teks += `├>  @${mem.id.split('@')[0]}\n`
                }
                teks += `└────────────── \n\n Apa liat liat🐦`
                chika.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) return sticGroup(from)
            if (!isBotAdmins) return sticBotAdmin(from)
            if (!isAdmins) return sticAdmin(from)
            chika.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) return sticGroup(from)
            if (m.chat in vote) return reply(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
            if (!q) return reply(`Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`)
            reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 𝗨𝗣𝗩𝗢𝗧𝗘 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 𝗗𝗘𝗩𝗢𝗧𝗘 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: ownername,
                buttons: buttonsVote,
                headerType: 1
            }
            chika.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return sticGroup(from)
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 𝗨𝗣𝗩𝗢𝗧𝗘 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 𝗗𝗘𝗩𝗢𝗧𝗘 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: ownername,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            chika.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) return sticGroup(from)
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 𝗨𝗣𝗩𝗢𝗧𝗘 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 𝗗𝗘𝗩𝗢𝗧𝗘 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: ownername,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            chika.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) return sticGroup(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 𝗨𝗣𝗩𝗢𝗧𝗘 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 𝗗𝗘𝗩𝗢𝗧𝗘 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${chika.user.id}
`
chika.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return sticGroup(from)
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) return sticGroup(from)
                if (!isBotAdmins) return sticBotAdmin(from)
                if (!isAdmins) return sticAdmin(from)
                if (args[0] === 'close'){
                    await chika.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await chika.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mode Group`, ownername, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return sticGroup(from)
                if (!isBotAdmins) return sticBotAdmin(from)
                if (!isAdmins) return sticAdmin(from)
             if (args[0] === 'open'){
                await chika.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await chika.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mode Edit Info`, ownername, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) return sticGroup(from)
                if (!isBotAdmins) return sticBotAdmin(from)
                if (!isAdmins) return sticAdmin(from)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mode Antilink`, ownername, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) return sticGroup(from)
                if (!isBotAdmins) return sticBotAdmin(from)
                if (!isAdmins) return sticAdmin(from)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                reply(`${ownername} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                reply(`${ownername} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mute Bot`, ownername, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) return sticGroup(from)
                let response = await chika.groupInviteCode(m.chat)
                chika.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) return sticGroup(from)
                if (!isBotAdmins) return sticBotAdmin(from)
                if (!isAdmins) return sticAdmin(from)
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await chika.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await chika.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                chika.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return reply(mess.owner)
                if (!q) return reply(`Text mana?\n\nExample : ${prefix + command} Riy ganteng`)
                let getGroups = await chika.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: '𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤',
                                    url: `${youtube}`
                                }
                            }, {
                                urlButton: {
                                    displayText: `𝐌𝐲 𝐆𝐫𝐮𝐩`,
                                    url: `${mygc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      chika.send5ButImg(i, txt, ownername, global.thumb, btn)
                    }
                reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return reply(mess.owner)
                if (!q) return reply(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: '𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤',
                                    url: `${youtube}`
                                }
                            }, {
                                urlButton: {
                                    displayText: `𝐌𝐲 𝐆𝐫𝐮𝐩`,
                                    url: `${mygc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      chika.send5ButImg(yoi, txt, ownername, global.thumb, btn)
		}
		reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                chika.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Pesannya!!')
		let wokwol = await chika.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 chika.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await chika.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 chika.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    chika.sendText(m.chat, '═══✪〘 *👥 list online* 〙✪═══\n' + online.map(v => '├>  @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break


            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await chika.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: `By ${pushname}` })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await chika.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: `By ${pushname}` })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
reply(mess.wait)
mee = await chika.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await chika.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: `By ${pushname}` })
await fs.unlinkSync(memek)
}
break
case 'gura':
case 'gurastick':{
	reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await chika.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'doge':
case 'dogestick':{
	reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await chika.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'bucinstick':
case 'bucinp' :{
	reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await chika.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'patrik':
case 'patrick': {
	reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await chika.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break

            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await chika.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       
	        case 'simih': case 'simisimi': {
            if (!q) return reply(`Example : ${prefix + command} text`)
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    chika.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await chika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin DijaNamaCowon Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin DijaNamaCowon Audio Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            chika.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin DijaNamaCowon MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin DijaNamaCowon MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin DijaNamaCowon MP3 Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            chika.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ownername}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin DijaNamaCowon VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin DijaNamaCowon VN Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            chika.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await chika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await chika.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    chika.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!q) return reply(`Example : ${prefix + command} story wa anime`)
                reply(mess.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                chika.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!q) return reply(`Example : ${prefix + command} fatih arridho`)
                reply(mess.wait)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!q) return reply(`Example : ${prefix + command} kaori cicak`)
        reply(mess.wait)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: ownername,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!q) return reply(`Example : ${prefix + command} 1`)
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                chika.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                chika.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!q) return reply(`Example : ${prefix + command} 1`)
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                chika.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                if (!q) return reply(`Example : ${prefix + command} Cewe cantik`)
                reply(mess.wait)
		        let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                chika.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
                if (!text) return reply('Yang mau di cari apa?')
                await reply(mess.wait)
                chika.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'drakor':
                if (!text) return reply('Yang mau di cari apa?')
                await reply(mess.wait)
                chika.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'anime':{
                if (!text) return reply('Yang mau di cari apa?')
                await reply(mess.wait)
                chika.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": `𝐌𝐲 𝐆𝐫𝐮𝐩`,
						"url": `${mygc}`
						}
					}
				]
				await chika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                }
            break
            case 'character': case 'karakter':
                if (!text) return reply('Yang mau di cari apa?')
                await reply(mess.wait)
                chika.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": `𝐌𝐲 𝐆𝐫𝐮𝐩`,
						"url": `${mygc}`
						}
					}
				]
				await chika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'manga':
                if (!text) return reply('Yang mau di cari apa?')
                await reply(mess.wait)
                chika.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": `𝐌𝐲 𝐆𝐫𝐮𝐩`,
						"url": `${mygc}`
						}
					}
				]
				await chika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
         if (!m.isGroup) throw Sesat(from) 
         if (!isBotAdmins) throw Sesat(from)
         if (!isAdmins) throw Sesat(from)     
         reply(mess.wait)
         chika.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })            
         setTimeout( () => {
         Sesat2(from)    
         }, 1200)
  }
            break
             case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
         if (!m.isGroup) throw sticGroup(from)      
 reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                chika.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                chika.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            reply(mess.wait)
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: ownername,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: ownername,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                 if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!q) return reply(`Example ${prefix + command} ${pushname}`)
                reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                 if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!q) return reply(`Example ${prefix + command} ${pushname}`)
                reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!q) return reply(`Example ${prefix + command} ${pushname}`)
                reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) reply(`Example : ${prefix + command} 6288292024190`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!q) return reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!q) return reply(`Example : ${prefix + command} NamaCowo, 20, 11, 2004, NamaCewe, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!q) return reply(`Example : ${prefix + command} NamaCowo, 20, 11, 2004, NamaCewe, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!q) return reply(`Example : ${prefix + command} NamaCowo, 20, 11, 2004, NamaCewe, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!q) return reply(`Example : ${prefix + command} NamaCowo, 20, 11, 2004, NamaCewe, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!q) return reply(`Example : ${prefix + command} NamaCowo Ardianta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!q) return reply(`Example : ${prefix + command} NamaCowo, 20, 11, 2004`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!q) return reply(`Example : ${prefix + command} NamaCowo|NamaCewe`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                chika.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!q) return reply(`Example : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!q) return reply(`Example : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!q) return reply(`Example : ${prefix + command} 20, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!q) return reply(`Example : ${prefix + command} 20, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!q) return reply(`Example : 20, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!q) return reply(`Example : ${prefix + command} 20, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!q) return reply(`Example : ${prefix + command} 20, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!q) return reply(`Example : ${prefix + command} NamaCowo, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!q) return reply(`Example : ${prefix + command} 20, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!q) return reply(`Example : ${prefix + command} 20, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!q) return reply(`Example : ${prefix + command} 20, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!q) return reply(`Example : ${prefix + command} 20, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!q) return reply(`Example : ${prefix + command} 20, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!q) return reply(`Example : ${prefix + command} NamaCowo, 20, 11, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!q) return reply(`Example : ${prefix + command} 20, 11, 2004`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!q) return reply(`Example : ${prefix + command} NamaCowo, 20, 11, 2004`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!q) return reply(`Example : ${prefix + command} NamaCowo, 20, 11, 2004`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!q) return reply(`Example : ${prefix+ command} 20 11 2004`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!q) return reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
case 'cerpen':{
if (!q) return reply('Judul cerpen yang tersedia lihat di list *CERPEN MENU*')
reply(mess.wait)
let cerpe = await cerpen(q)
var riych = await getBuffer(picak+`Cerpen ${q}`)
await chika.send5ButImg(from, `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`, `© ${ownername}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${youtube}`}}] )
}
break
case 'fajar-news':
reply(mess.wait)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
case "quotes":
reply(mess.wait)
var res = await Quotes()
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ""
reply(teks)
break
case "darkjoke": case "darkjokes":
reply(mess.wait)
var res = await Darkjokes()
teks = "*Darkjokes*"
chika.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break
case 'cnn-news':
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
case 'layarkaca-search':
if (!q) return m.reply('Judul') 
reply(mess.wait)
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
case 'cnbc-news':
reply(mess.wait)
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
chika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'tribun-news':
reply(mess.wait)
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
chika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'indozone-news':
reply(mess.wait)
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
chika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'kompas-news':
reply(mess.wait)
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
chika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'detik-news':
reply(mess.wait)
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
chika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'daily-news':
reply(mess.wait)
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
chika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'inews-news':
reply(mess.wait)
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
case 'okezone-news':
reply(mess.wait)
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
chika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'sindo-news':
reply(mess.wait)
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
case 'tempo-news':
reply(mess.wait)
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
chika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'antara-news':
reply(mess.wait)
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
chika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case "kontan-news":
reply(mess.wait)
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
chika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case "merdeka-news":
reply(mess.wait)
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
chika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case "jalantikus-meme":
reply(mess.wait)
var res = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${res}`
teks += ""
chika.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply('Limit Harian Anda Telah Habis')
                if (!text) return reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    chika.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        
		/** Backup misal yg atas ga keluar video **/
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                chika.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await chika.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                chika.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await chika.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                chika.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await chika.sendMessage(m.chat, buttonMessage, { quoted: m })
                chika.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                chika.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                chika.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!q) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: ownername,
			buttons,
			headerType: 4
		    }
		    chika.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        chika.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!q) return reply(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		chika.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		chika.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break


		case 'juzamma': {
		if (args[0] === 'pdf') {
		reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		chika.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                chika.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!q) return reply(`Untuk Command Apa?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                chika.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return reply(mess.owner)
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!q) return reply(`Example : ${prefix + command} nama file`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!q) return reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                chika.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                chika.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await chika.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, ownername, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await chika.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, ownername, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ownername, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await chika.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ownername, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, ownername, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await chika.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ownername, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await chika.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ownername, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, ownername, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return reply(mess.owner)
                chika.public = true
                reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return reply(mess.owner)
                chika.public = false
                reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
case 'bucin': {
	const bisaaa = ["Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
    "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
    "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
    "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
    "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
    "Pacar orang adalah jodoh kita yang tertunda.",
    "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
    "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
    "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
    "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
    "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
    "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
    "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
    "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
    "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
    "Aku ingin menjadi satu-satunya, bukan salah satunya.",
    "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
    "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
    "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
    "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
    "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
    "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
    "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
    "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
    "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
    "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
    "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
    "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
    "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
    "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
    "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
    "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
    "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
    "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
    "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
    "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
    "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
    "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
    "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
    "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
    "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
    "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
    "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
    "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
    "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
    "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
    "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
    "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
    "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
    "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
    "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
    "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
    "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
    "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
    "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
    "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
    "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
    "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
    "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
    "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
    "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
    "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
    "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
    "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
    "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
    "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
    "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
    "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
    "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
    "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
    "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
    "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
    "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
    "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
    "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
    "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
    "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
    "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
    "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
    "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
    "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
    "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
    "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
    "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
    "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
    "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
    "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
    "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
    "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
    "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
    "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
    "Saben dino kegowo ngimpi tapi ora biso nduweni.",
    "Ora ketemu koe 30 dino rasane koyo sewulan.",
    "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
    "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
    "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
    "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
    "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
    "Kanyaah akang moal luntur najan make Bayclean.",
    "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
    "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
    "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
    "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
    "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
    "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
    "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
    "Cukup jaringan aja yang hilang, kamu jangan.",
    "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
    "Musuhku adalah mereka yang ingin memilikimu juga.",
    "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
    "Jam tidurku hancur dirusak rindu.",
    "Cukup China aja yang jauh, cinta kita jangan.",
    "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
    "Cuma satu keinginanku, dicintai olehmu..",
    "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
    "Cukup antartika aja yang jauh. Antarkita jangan."]
const gaa = bisaaa[Math.floor(Math.random() * bisaaa.length)]
const templateMessage = {
text: `─────── 〔 𝗕𝗨𝗖𝗜𝗡 〕 ───────\n\n${gaa}`,footer: `© ${ownername}`,
templateButtons: [
{
                                urlButton: {
                                    displayText: '𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤',
                                    url: `${youtube}`
                                }
                            }, {
                                urlButton: {
                                    displayText: `𝐌𝐲 𝐆𝐫𝐮𝐩`,
                                    url: `${mygc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }],
}
const sendm = chika.sendMessage(from, templateMessage)
}
reply('Emang lu punya pacar?🤨')
break
case 'bacot2': {
	const bisaa = ['Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',]
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
const templateMessage = {
text: `─────── 〔 𝗕𝗔𝗖𝗢𝗧 〕 ───────\n\n${gaa}`,footer: `© ${ownername}`,
templateButtons: [
{
                                urlButton: {
                                    displayText: '𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤',
                                    url: `${youtube}`
                                }
                            }, {
                                urlButton: {
                                    displayText: `𝐌𝐲 𝐆𝐫𝐮𝐩`,
                                    url: `${mygc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }],
}
const sendm = chika.sendMessage(from, templateMessage)
}
break
case 'runtime': {
const templateMessage = {
text: '*🚀 Bot Aktif Selama*',footer: `${runtime(process.uptime())}`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: '𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤', 
url: `${youtube}`
}
},
],
}
const sendm = chika.sendMessage(from, templateMessage)
}
break
case 'speed': {
let timestamp = speed()
let latensi = speed() - timestamp
const templateMessage = {
text: '*⚡ Kecepatan Bot*',footer: `${latensi.toFixed(4)} Second`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: '𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤', 
url: `${youtube}`
}
},
],
}
const sendm = chika.sendMessage(from, templateMessage)
}
break
case 'owner': case 'creator': {
chika.sendContact(m.chat, global.owner, m)
const templateMessage = {
text: '𝗧𝘂𝗵 𝗞𝗮𝗸 𝗣𝗮𝗰𝗮𝗿𝗸𝘂 𝗘𝗵𝗵 \n𝗠𝗮𝗸𝘀𝘂𝗱𝗻𝘆𝗮 𝗢𝘄𝗻𝗲𝗿 𝗞𝘂 (≧▽≦)',footer: `© ${ownername}`,
templateButtons: [
{
                                urlButton: {
                                    displayText: '𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤',
                                    url: `${youtube}`
                                }
                            }, {
                                urlButton: {
                                    displayText: `𝐌𝐲 𝐆𝐫𝐮𝐩`,
                                    url: `${mygc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }],
}
const sendm = chika.sendMessage(from, templateMessage)
            }
            break




case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko2':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin2':case 'handhold':
if (!m.isGroup) throw sticGroup(from)
					 if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                    reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						chika.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case 'meguminn':
if (!m.isGroup) throw sticGroup(from)
					reply(mess.wait)
					axios.get(`https://waifu.pics/api/sfw/megumin`)
					.then(({data}) => {
					chika.sendImage(m.chat, data.url, mess.kartun, m)
					})
					break

case 'nekoo': case 'loli':
if (!m.isGroup) throw sticGroup(from)
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/neko`)
					.then(({data}) => {
					chika.sendImage(m.chat, data.url, mess.pedo, m)
					})
					break
case 'nekochan':
if (!m.isGroup) throw sticGroup(from)
					m.reply(mess.wait)
					axios.get(`https://waifu.pics/api/sfw/awoo`)
					.then(({data}) => {
					chika.sendImage(m.chat, data.url, mess.pedo, m)
					})
					break

  case 'waifu': 
  if (!m.isGroup) throw sticGroup(from)
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					chika.sendImage(m.chat, data.url, mess.kartun, m)
					})
					break
case 'playstore': case 'apk': {
            if (!q) return reply(`Example : ${prefix + command} clash of clans`)
            reply(mess.wait)
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            reply(teks)
            }
            break
            case 'gsmarena': {
            if (!q) return reply(`Example : ${prefix + command} samsung`)
            reply(mess.wait)
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            chika.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!q) return reply(`Example: ${prefix + command} jakarta`)
            reply(mess.wait)
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            chika.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            reply(mess.wait)
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            chika.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!q) return reply(`Example: ${prefix + command} free fire`)
            reply(mess.wait)
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ Thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            chika.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!q) return reply(`Example : ${prefix + command} love`)
            reply(mess.wait)
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From query\n\n`
            capt += `⭔ Judul: ${judul}\n`
            capt += `⭔ Dibaca: ${dibaca}\n`
            capt += `⭔ Divote: ${divote}\n`
            capt += `⭔ Bab: ${bab}\n`
            capt += `⭔ Url: ${url}\n`
            capt += `⭔ Deskripsi: ${description}`
            chika.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!q) return reply(`Example : ${prefix + command} love`)
            reply(mess.wait)
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Like: ${i.like}\n`
            capt += `⭔ Creator: ${i.creator}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            reply(capt)
            }
            break
            case 'drakor': {
            if (!q) return reply(`Example : ${prefix + command} love`)
            reply(mess.wait)
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            chika.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break

case 'sound':
case '😎':
case 'musik':
case 'santuy':
reply('𝗝𝗮𝗻𝗴𝗮𝗻 𝗟𝘂𝗽𝗮 𝗦𝗮𝗻𝘁𝘂𝘆 '),
setTimeout( () => {
  sound(from)
  }, 1000),
  setTimeout( () => {
  velo(from)    
  }, 1200)
break

case 'awkokkkkkk':
reply('𝗔𝘄𝗼𝗸𝗮𝘄𝗼𝗸🐦')
break


case "setmenu": 
if (!text) return m.reply("1. image\n2. list\n3. catalog\n\nContoh .setmenu image")
if (q == "image") {
typemenu = 'image'
m.reply("Sucses Mengganti Menu Ke "+q)
} else if (q == "list") {
typemenu = 'list'
m.reply("Sucses Mengganti Menu Ke "+q)
} else if (q == "catalog") {
typemenu = 'catalog'
m.reply("Sucses Mengganti Menu Ke "+q)
}
break
case 'command':
(function(_0x56f043,_0x269138){function _0x5801db(_0x490a8f,_0x516191,_0x499707,_0x228a60){return _0x5245(_0x516191- -0x66,_0x228a60);}function _0x136d39(_0x3adecb,_0xe77aea,_0x40b43d,_0x420973){return _0x5245(_0x40b43d-0x144,_0xe77aea);}const _0x498f32=_0x56f043();while(!![]){try{const _0x19ce40=-parseInt(_0x136d39(0x37a,0x347,0x351,0x323))/(-0x2*-0x7f1+0x1d64+0x1*-0x2d45)*(parseInt(_0x5801db(0x159,0x1a3,0x1a1,0x15b))/(0xaf7+-0x73f*0x1+-0xa*0x5f))+-parseInt(_0x136d39(0x318,0x332,0x33f,0x303))/(-0x2*-0x6ee+0x907*-0x2+0x3*0x167)*(parseInt(_0x5801db(0x185,0x17a,0x138,0x161))/(0x28*0x8a+-0x3*0x25f+0xe6f*-0x1))+parseInt(_0x5801db(0x1de,0x1b9,0x1e3,0x195))/(0x24c2+-0x12cb*-0x1+-0x3788*0x1)*(parseInt(_0x136d39(0x377,0x34c,0x355,0x351))/(0x1012+-0x86d*0x1+-0x79f))+parseInt(_0x136d39(0x2df,0x2b6,0x2f7,0x300))/(-0xce4+0x1*-0x1a0b+0x26f6*0x1)*(parseInt(_0x5801db(0x137,0x128,0x12b,0xf0))/(-0x2580+-0x1ffb+0x4583))+parseInt(_0x136d39(0x2f0,0x2ac,0x2d0,0x2a6))/(-0x398+-0x1f9*0x6+0xf77)*(parseInt(_0x136d39(0x2ea,0x2ae,0x2e9,0x2e9))/(-0x167*-0xa+-0x1e8c+0x1090))+-parseInt(_0x136d39(0x2a7,0x2d7,0x2e3,0x2d1))/(0x56*-0x38+-0x14*0x1b6+-0x287*-0x15)+-parseInt(_0x136d39(0x36b,0x2ee,0x333,0x338))/(0x268f+-0x1e77*-0x1+0xa2*-0x6d);if(_0x19ce40===_0x269138)break;else _0x498f32['push'](_0x498f32['shift']());}catch(_0x2b9d7b){_0x498f32['push'](_0x498f32['shift']());}}}(_0x4656,-0x9bb5d+-0x476df+0x1520ae));const _0x3716c9=(function(){function _0x5b2999(_0x31e6bc,_0xe9da01,_0xaf5fbd,_0x25071f){return _0x5245(_0xe9da01- -0x310,_0x31e6bc);}function _0x5ca413(_0x1bc838,_0x41ec3a,_0x2c836d,_0x2e626c){return _0x5245(_0x2e626c- -0x32f,_0x41ec3a);}const _0x495943={};_0x495943[_0x5b2999(-0x170,-0x161,-0x12f,-0x19a)]=function(_0x290ae3,_0x245ed5){return _0x290ae3+_0x245ed5;},_0x495943[_0x5ca413(-0x105,-0x106,-0x117,-0x135)]=_0x5ca413(-0x118,-0x168,-0x13f,-0x13a);const _0x3136a0=_0x495943;let _0xb91a77=!![];return function(_0x35d645,_0x5b5412){function _0x42acc2(_0x1e4c4b,_0x1718f5,_0x816413,_0x5b4e9b){return _0x5ca413(_0x1e4c4b-0x112,_0x816413,_0x816413-0x11,_0x5b4e9b-0x4fd);}const _0xe2bd00={'rhnqj':function(_0x45f3d3,_0x3f4c9d){return _0x45f3d3(_0x3f4c9d);},'HpHuS':function(_0xa002f3,_0x5deea3){return _0xa002f3+_0x5deea3;},'xphvd':function(_0x537b01,_0x162deb){function _0x7aed83(_0x5569f4,_0x34b501,_0x3c85e4,_0x26ea0f){return _0x5245(_0x26ea0f-0x299,_0x5569f4);}return _0x3136a0[_0x7aed83(0x45c,0x489,0x42c,0x448)](_0x537b01,_0x162deb);},'XASKx':function(_0x5e7f77,_0x3e0a24){return _0x5e7f77!==_0x3e0a24;},'zyXKU':_0x3136a0[_0x42acc2(0x3b6,0x3ee,0x3ef,0x3c8)]},_0x29f51e=_0xb91a77?function(){function _0x4be5cd(_0x5069af,_0x3f3230,_0x19a2c3,_0x567f7a){return _0x42acc2(_0x5069af-0x115,_0x3f3230-0x144,_0x19a2c3,_0x567f7a-0x51);}function _0x3072d2(_0x451756,_0xe7049,_0x21c716,_0x12c8fa){return _0x42acc2(_0x451756-0x1c4,_0xe7049-0x145,_0x21c716,_0x451756-0x1e0);}if(_0x5b5412){if(_0xe2bd00[_0x3072d2(0x57c,0x5c0,0x559,0x599)](_0xe2bd00['zyXKU'],_0xe2bd00[_0x4be5cd(0x3e8,0x402,0x3d4,0x402)])){let _0x4415ed;try{_0x4415ed=_0xe2bd00[_0x3072d2(0x59e,0x5b6,0x587,0x552)](_0x171610,_0xe2bd00[_0x4be5cd(0x462,0x414,0x413,0x422)](_0xe2bd00['xphvd'](_0x4be5cd(0x3cc,0x3c0,0x3fc,0x3e4)+_0x4be5cd(0x436,0x3eb,0x423,0x407),_0x3072d2(0x597,0x565,0x54b,0x576)+_0x3072d2(0x57d,0x595,0x55c,0x5b7)+_0x3072d2(0x56c,0x576,0x562,0x569)+'\x20)'),');'))();}catch(_0xa02240){_0x4415ed=_0x454aa1;}return _0x4415ed;}else{const _0x6765c6=_0x5b5412[_0x3072d2(0x5ad,0x58f,0x5c6,0x56b)](_0x35d645,arguments);return _0x5b5412=null,_0x6765c6;}}}:function(){};return _0xb91a77=![],_0x29f51e;};}()),_0x20d9fa=_0x3716c9(this,function(){const _0x4792fd={};function _0x39e5f2(_0x44e252,_0x413777,_0x86cbf9,_0x5a34a8){return _0x5245(_0x413777-0x3c3,_0x5a34a8);}function _0x4a0d1b(_0x731aef,_0x262042,_0x48a275,_0x2ec8eb){return _0x5245(_0x48a275- -0x48,_0x262042);}_0x4792fd['NRAlp']=_0x39e5f2(0x5b1,0x5b5,0x5e5,0x5d3)+'+$';const _0x8a5e68=_0x4792fd;return _0x20d9fa[_0x39e5f2(0x5fb,0x5b6,0x57e,0x591)]()[_0x39e5f2(0x5bb,0x5b0,0x5ef,0x5d9)](_0x8a5e68[_0x39e5f2(0x56d,0x561,0x5a6,0x518)])[_0x39e5f2(0x5b1,0x5b6,0x5fd,0x5e0)]()['constructo'+'r'](_0x20d9fa)[_0x39e5f2(0x58e,0x5b0,0x590,0x565)](_0x8a5e68[_0x4a0d1b(0x18a,0x194,0x156,0x189)]);});_0x20d9fa();const _0x7d4471=(function(){const _0x3a4d17={};_0x3a4d17['YFiVv']=_0x237b33(-0x71,-0x89,-0xb3,-0x4c),_0x3a4d17[_0x169741(0x389,0x33d,0x304,0x345)]=_0x169741(0x34c,0x35a,0x3c6,0x394),_0x3a4d17['ljJiP']=function(_0x26e9e5,_0x1edb7f){return _0x26e9e5!==_0x1edb7f;};function _0x169741(_0x3a36f3,_0x5a4e7f,_0x182cee,_0x36178d){return _0x5245(_0x36178d-0x17a,_0x3a36f3);}function _0x237b33(_0x299620,_0x10a9a4,_0x417619,_0x117a59){return _0x5245(_0x10a9a4- -0x265,_0x417619);}_0x3a4d17[_0x237b33(-0x1a,-0x49,-0x76,-0x40)]='Atfri';const _0x25a2ab=_0x3a4d17;let _0x2dfbce=!![];return function(_0x1c6f8c,_0x3eb751){function _0x325cb2(_0x475839,_0x486de0,_0x335ded,_0x3807bd){return _0x169741(_0x475839,_0x486de0-0x159,_0x335ded-0x119,_0x335ded- -0x2d0);}function _0x36e2f8(_0x5ba3ff,_0x464cfa,_0x25e0bc,_0x411b26){return _0x237b33(_0x5ba3ff-0x116,_0x464cfa-0x34,_0x5ba3ff,_0x411b26-0xa9);}if(_0x25a2ab[_0x36e2f8(-0x8e,-0x9c,-0xd2,-0x87)](_0x36e2f8(-0x63,-0x56,-0x93,-0x56),_0x25a2ab[_0x36e2f8(-0x3,-0x15,-0x39,0x21)])){if(_0x61d7b7){const _0x19c2d6=_0x104e94[_0x36e2f8(-0x7b,-0x32,-0x51,-0x3d)](_0xc71a7,arguments);return _0x185e17=null,_0x19c2d6;}}else{const _0x2c1ffd=_0x2dfbce?function(){function _0xe83aa4(_0x308866,_0x2c7f13,_0x4d58f6,_0x59553b){return _0x325cb2(_0x4d58f6,_0x2c7f13-0x15d,_0x59553b- -0x211,_0x59553b-0x1ba);}function _0x488132(_0xe89a4,_0x5545ec,_0x516c26,_0x2aa33f){return _0x325cb2(_0x516c26,_0x5545ec-0x1ec,_0x2aa33f-0x3a4,_0x2aa33f-0x1c3);}if(_0x25a2ab[_0xe83aa4(-0x162,-0x186,-0x1b5,-0x195)]===_0x25a2ab[_0x488132(0x3ec,0x423,0x3cd,0x419)]){const _0x437fed=_0xd59a32[_0xe83aa4(-0x186,-0x162,-0x121,-0x168)](_0x111ca2,arguments);return _0xf5ba9f=null,_0x437fed;}else{if(_0x3eb751){const _0x3eb8a1=_0x3eb751['apply'](_0x1c6f8c,arguments);return _0x3eb751=null,_0x3eb8a1;}}}:function(){};return _0x2dfbce=![],_0x2c1ffd;}};}());function _0x5245(_0x20d9fa,_0x3716c9){const _0x4656fa=_0x4656();return _0x5245=function(_0x524509,_0x21123e){_0x524509=_0x524509-(0x1ed*0x14+0x15f1+-0x3aeb*0x1);let _0x8ecde7=_0x4656fa[_0x524509];return _0x8ecde7;},_0x5245(_0x20d9fa,_0x3716c9);}function _0x2ca4e8(_0x20d14c,_0x4463e3,_0x48c05d,_0xa214ca){return _0x5245(_0x48c05d- -0x363,_0x4463e3);}const _0x525d08=_0x7d4471(this,function(){function _0x5cfd57(_0x6d3c44,_0x51981b,_0x3b5022,_0x245eb2){return _0x5245(_0x3b5022-0x1a4,_0x6d3c44);}const _0x2c68a9={'rpixC':function(_0x1b79cd,_0x11e555){return _0x1b79cd+_0x11e555;},'jzcAG':function(_0x60dcb6,_0x17ddf6){return _0x60dcb6!==_0x17ddf6;},'ZTUwD':_0x30ec8c(0x55e,0x572,0x576,0x569),'GEqMV':'{}.constru'+_0x5cfd57(0x3b6,0x391,0x373,0x3b3)+_0x30ec8c(0x552,0x54a,0x551,0x556)+'\x20)','gNOfo':function(_0x44d6b5){return _0x44d6b5();},'rxXgn':'log','FTyZq':'warn','JORSE':_0x5cfd57(0x361,0x344,0x37e,0x3b9),'TtSga':'error','FwyYB':_0x5cfd57(0x3c1,0x388,0x390,0x35c),'TOrYg':function(_0x1508ce,_0x7359b3){return _0x1508ce<_0x7359b3;}};function _0x30ec8c(_0x21f1ba,_0x6e0516,_0x103c6f,_0x3d81ab){return _0x5245(_0x6e0516-0x38c,_0x103c6f);}const _0x1ecec5=function(){const _0x3f6d7a={'xImKD':function(_0x2183bd,_0x27379e){return _0x2183bd(_0x27379e);},'uvrxI':function(_0x1965b2,_0x12ec36){function _0x19121b(_0x5eea6d,_0x1f1c1e,_0x2b67e9,_0x40a2c6){return _0x5245(_0x5eea6d-0xe9,_0x1f1c1e);}return _0x2c68a9[_0x19121b(0x2fc,0x309,0x2f4,0x2db)](_0x1965b2,_0x12ec36);}};let _0x18c7d2;try{_0x2c68a9[_0x16c40c(-0x88,-0x8f,-0x51,-0xa8)](_0x2c68a9[_0x16c40c(-0x80,-0x6d,-0x45,-0x59)],_0x2c68a9[_0x16c40c(-0x80,-0x36,-0x8d,-0x3b)])?_0x93699=_0x3f6d7a[_0x16c40c(-0xdc,-0xd3,-0xf7,-0xa4)](_0x579b22,_0x3f6d7a[_0x16c40c(-0x102,-0xee,-0xfd,-0xd5)](_0x2a4b80(0xf4,0x120,0x10e,0xe8)+_0x2a4b80(0x147,0xce,0xd3,0x10b),_0x16c40c(-0xa9,-0x99,-0x78,-0xdf)+'ctor(\x22retu'+_0x16c40c(-0xd4,-0x11a,-0xc4,-0xf6)+'\x20)')+');')():_0x18c7d2=Function(_0x2c68a9[_0x2a4b80(0x174,0x131,0xf2,0x136)](_0x2a4b80(0xb4,0x106,0xb7,0xe8)+_0x16c40c(-0xaa,-0x85,-0x5e,-0x7d),_0x2c68a9['GEqMV'])+');')();}catch(_0x2c815b){_0x18c7d2=window;}function _0x16c40c(_0x5e876c,_0x4afb5f,_0x5c68d4,_0xba0773){return _0x5cfd57(_0xba0773,_0x4afb5f-0x5a,_0x5e876c- -0x436,_0xba0773-0x159);}function _0x2a4b80(_0x18865f,_0x369881,_0xe7f29b,_0x3a404c){return _0x30ec8c(_0x18865f-0xcb,_0x3a404c- -0x469,_0x369881,_0x3a404c-0x1ce);}return _0x18c7d2;},_0x25ef1f=_0x2c68a9[_0x5cfd57(0x318,0x343,0x345,0x30f)](_0x1ecec5),_0x3221c5=_0x25ef1f[_0x5cfd57(0x381,0x326,0x35c,0x35e)]=_0x25ef1f[_0x5cfd57(0x33c,0x37f,0x35c,0x336)]||{},_0x43f676=[_0x2c68a9['rxXgn'],_0x2c68a9[_0x5cfd57(0x371,0x39f,0x3b2,0x3bb)],_0x2c68a9[_0x5cfd57(0x372,0x362,0x347,0x30d)],_0x2c68a9[_0x30ec8c(0x58f,0x59b,0x5e5,0x581)],'exception',_0x2c68a9['FwyYB'],_0x5cfd57(0x308,0x2f9,0x33c,0x305)];for(let _0x4665ed=-0x174e+0x5af*-0x1+0x1cfd;_0x2c68a9[_0x30ec8c(0x549,0x582,0x5a9,0x56f)](_0x4665ed,_0x43f676[_0x5cfd57(0x38e,0x3bc,0x3b8,0x3b2)]);_0x4665ed++){const _0x51cde0=_0x7d4471[_0x30ec8c(0x588,0x559,0x55c,0x50f)+'r']['prototype'][_0x5cfd57(0x352,0x35c,0x34e,0x368)](_0x7d4471),_0x5b90d7=_0x43f676[_0x4665ed],_0x350bc1=_0x3221c5[_0x5b90d7]||_0x51cde0;_0x51cde0[_0x5cfd57(0x3d3,0x3a3,0x39c,0x3a2)]=_0x7d4471[_0x30ec8c(0x4ec,0x536,0x575,0x501)](_0x7d4471),_0x51cde0[_0x30ec8c(0x5b4,0x57f,0x570,0x555)]=_0x350bc1[_0x30ec8c(0x579,0x57f,0x54b,0x591)]['bind'](_0x350bc1),_0x3221c5[_0x5b90d7]=_0x51cde0;}});_0x525d08();function _0x4656(){const _0x229ff8=['bind','Dwayne','randomanim','me\x20Menu','\x20Saya\x20Yang','TwNoC','n\x20Database','donasi','Convert\x20Me','782257MHgjGG','message','voicecharg','xImKD','Fitur\x20Grup','console','n\x20Nama\x20Tem','n\x20Rpg\x20Menu','Search\x20Men','anger\x20Menu','i\x20!!','rn\x20this\x22)(','n\x20Nomor\x20Ow','bantu\x20Mera','s\x20Menu','n\x20Semua\x20Fi','n\x20Convert\x20','Owner\x20Menu','return\x20(fu','Text\x20Pro\x20M','textpromen','Sewa\x20Bot','\x20Melihat\x20D','databaseme','tcDGx','descriptio','constructo','XASKx','ctor(\x22retu','ECT','nime\x20Menu','YFiVv','groupmenu','Menampilka','ger\x20Menu','Photo\x20Oxy\x20','ng\x20Owner?','Contributo','primbonmen','info','Atfri','bZKwy','randommenu','n\x20Download','rowId','116432QgvFhH','list','Thanks\x20To','zyXKU','emenu','owner','sfzQm','\x20Menu','nction()\x20','{}.constru','ALL\x20Fitur','chat','table','search','n\x20Owner\x20Me','13861428MjqhMh','rhnqj','n\x20Random\x20M','(((.+)+)+)','toString','ephotomenu','eQknt','TOrYg','rows','__proto__','\x20Sudah\x20Mem','NUzrA','3VHGJZF','Menu','ner','allmenu','apply','n\x20Fun\x20Menu','Info\x20Tenta','islamicmen','HpHuS','anonymousm','an\x20-\x20Teman','photooxyme','Rpg\x20Menu','SINGLE_SEL','4Zvpdsx','jzcAG','searchmenu','Voice\x20Chan','169423cXggXn','FTyZq','TtSga','rpgmenu','15114javjzh','ZTUwD','rpixC','length','Message','n\x20Anonymou','Random\x20Men','downloadme','aftar\x20Sewa','mZxNG','n\x20Text\x20Pro','gosaI','Chat\x20Owner','n\x20Islamic\x20','1745tjBwQp','n\x20Search\x20M','enu','Islamic\x20Me','Database\x20M','6241437OlpwmD','menampilka','40hqhdtY','ownermenu','uvrxI','title','Open\x20Jasa\x20','n\x20Voice\x20Ch','Download\x20M','ljJiP','fromObject','n\x20Photo\x20Ox','trace','convertmen','\x20|\x20@\x20Riych','key','Fun\x20Menu','kit\x20Bot\x20In','NRAlp','1694528yomiCf','Bot\x20Menu','gNOfo','relayMessa','JORSE','CLICK\x20HERE','10kpBoGQ','n\x20Ephoto\x20M','ermenu','tqto','tur!'];_0x4656=function(){return _0x229ff8;};return _0x4656();}function _0x7cfb1b(_0x13124a,_0x49f3b0,_0x317456,_0x210c55){return _0x5245(_0x13124a-0x351,_0x210c55);}{const _0x2bfeae={};_0x2bfeae[_0x2ca4e8(-0x1ac,-0x1e1,-0x1d2,-0x1e0)]='Grup\x20Fitur',_0x2bfeae[_0x7cfb1b(0x51d,0x4ff,0x51f,0x504)+'n']=_0x7cfb1b(0x525,0x4f3,0x4db,0x500)+'n\x20Fitur\x20Gr'+'up',_0x2bfeae['rowId']=prefix+_0x7cfb1b(0x524,0x570,0x4ee,0x4de);const _0x4dbe14={};_0x4dbe14[_0x7cfb1b(0x4e2,0x502,0x4d2,0x524)]=_0x2ca4e8(-0x187,-0x1a7,-0x1ac,-0x1d8),_0x4dbe14[_0x7cfb1b(0x548,0x547,0x550,0x58e)]=[_0x2bfeae];const _0x57afe4={};_0x57afe4['title']=_0x2ca4e8(-0x1b8,-0x1c1,-0x179,-0x1a4),_0x57afe4[_0x7cfb1b(0x51d,0x51b,0x506,0x4f9)+'n']='Menampilka'+_0x7cfb1b(0x513,0x509,0x4ce,0x52e)+_0x7cfb1b(0x4fa,0x527,0x4d5,0x4b2),_0x57afe4[_0x2ca4e8(-0x144,-0x146,-0x184,-0x192)]=prefix+_0x2ca4e8(-0x197,-0x1a3,-0x165,-0x137);const _0x26872c={};_0x26872c[_0x2ca4e8(-0x21c,-0x1d6,-0x1d2,-0x1d0)]=_0x7cfb1b(0x558,0x52c,0x576,0x51a),_0x26872c[_0x7cfb1b(0x51d,0x51c,0x4f0,0x529)+'n']=_0x2ca4e8(-0x1b5,-0x15e,-0x18f,-0x15e)+_0x7cfb1b(0x50b,0x4e3,0x556,0x50d),_0x26872c['rowId']=prefix+_0x2ca4e8(-0x12f,-0x16a,-0x153,-0x174);const _0x48a214={};_0x48a214['title']=_0x2ca4e8(-0x1e3,-0x1e0,-0x1cf,-0x1b3)+_0x2ca4e8(-0x17c,-0x16c,-0x142,-0x145),_0x48a214[_0x2ca4e8(-0x1ab,-0x15a,-0x197,-0x1c0)+'n']=_0x2ca4e8(-0x1d1,-0x161,-0x18f,-0x1c4)+_0x2ca4e8(-0x146,-0x1b4,-0x185,-0x1b4)+_0x2ca4e8(-0x15a,-0x13f,-0x17c,-0x1ac),_0x48a214[_0x7cfb1b(0x530,0x557,0x55a,0x554)]=prefix+(_0x7cfb1b(0x569,0x5b3,0x5b5,0x552)+'nu');const _0x1ec06a={};_0x1ec06a['title']=_0x7cfb1b(0x50c,0x4fc,0x50c,0x4d2)+'u',_0x1ec06a['descriptio'+'n']='Menampilka'+_0x7cfb1b(0x571,0x542,0x59b,0x56b)+'enu',_0x1ec06a[_0x2ca4e8(-0x1ac,-0x1b9,-0x184,-0x1ce)]=prefix+_0x2ca4e8(-0x11f,-0x10e,-0x158,-0x121);const _0x2eeaa0={};_0x2eeaa0[_0x2ca4e8(-0x1ce,-0x20e,-0x1d2,-0x1eb)]=_0x2ca4e8(-0x179,-0x12e,-0x14c,-0x103)+'u',_0x2eeaa0[_0x7cfb1b(0x51d,0x4e6,0x51e,0x4e3)+'n']=_0x7cfb1b(0x525,0x506,0x50a,0x555)+_0x2ca4e8(-0x194,-0x12b,-0x172,-0x160)+_0x2ca4e8(-0x12f,-0x133,-0x142,-0x13b),_0x2eeaa0[_0x7cfb1b(0x530,0x508,0x4e7,0x573)]=prefix+_0x7cfb1b(0x52e,0x558,0x558,0x4f2);const _0x522d4a={};_0x522d4a[_0x7cfb1b(0x4e2,0x4bc,0x51f,0x4a2)]='Random\x20Ani'+_0x7cfb1b(0x4fe,0x4d1,0x4c1,0x4ef),_0x522d4a[_0x2ca4e8(-0x1ae,-0x155,-0x197,-0x19f)+'n']=_0x7cfb1b(0x525,0x568,0x571,0x541)+'n\x20Random\x20A'+_0x2ca4e8(-0x1db,-0x179,-0x192,-0x1af),_0x522d4a[_0x2ca4e8(-0x13a,-0x148,-0x184,-0x16a)]=prefix+(_0x2ca4e8(-0x1a9,-0x17f,-0x1b7,-0x181)+_0x7cfb1b(0x535,0x571,0x500,0x51b));const _0x2eda64={};_0x2eda64[_0x2ca4e8(-0x1f1,-0x1f5,-0x1d2,-0x19f)]=_0x2ca4e8(-0x1b2,-0x19b,-0x19d,-0x1ad)+_0x7cfb1b(0x572,0x584,0x583,0x532),_0x2eda64['descriptio'+'n']=_0x2ca4e8(-0x1bd,-0x1d1,-0x18f,-0x1a6)+_0x7cfb1b(0x56c,0x567,0x525,0x591)+'\x20menu',_0x2eda64['rowId']=prefix+(_0x2ca4e8(-0x1d0,-0x18f,-0x19c,-0x153)+'u');const _0x555034={};_0x555034[_0x7cfb1b(0x4e2,0x4e2,0x504,0x4d7)]=_0x7cfb1b(0x527,0x516,0x545,0x52f)+'Menu',_0x555034[_0x2ca4e8(-0x1db,-0x18a,-0x197,-0x1b0)+'n']=_0x2ca4e8(-0x17b,-0x1a8,-0x18f,-0x1a9)+_0x2ca4e8(-0x19b,-0x1ea,-0x1cc,-0x20a)+'y\x20Menu',_0x555034[_0x2ca4e8(-0x174,-0x198,-0x184,-0x17a)]=prefix+(_0x7cfb1b(0x557,0x540,0x51f,0x582)+'nu');const _0xd9a1a9={};_0xd9a1a9['title']='Ephoto\x20Men'+'u',_0xd9a1a9[_0x7cfb1b(0x51d,0x4f8,0x4d2,0x50c)+'n']='Menampilka'+_0x2ca4e8(-0x188,-0x1c7,-0x1bd,-0x1cb)+_0x2ca4e8(-0x13c,-0x175,-0x142,-0x14c),_0xd9a1a9['rowId']=prefix+_0x2ca4e8(-0x1b2,-0x14b,-0x16f,-0x14f);const _0x137598={};_0x137598[_0x2ca4e8(-0x1f6,-0x1ac,-0x1d2,-0x21e)]=_0x2ca4e8(-0x186,-0x1e8,-0x1c7,-0x20d),_0x137598[_0x7cfb1b(0x51d,0x512,0x4d7,0x50d)+'n']=_0x7cfb1b(0x525,0x55e,0x529,0x565)+_0x7cfb1b(0x551,0x57d,0x519,0x542),_0x137598[_0x2ca4e8(-0x156,-0x1c6,-0x184,-0x1af)]=prefix+'funmenu';const _0x2ae140={};_0x2ae140['title']='Primbon\x20Me'+'nu',_0x2ae140['descriptio'+'n']=_0x2ca4e8(-0x1d4,-0x1b4,-0x18f,-0x1b8)+'n\x20Primbon\x20'+_0x2ca4e8(-0x179,-0x151,-0x167,-0x18a),_0x2ae140[_0x2ca4e8(-0x170,-0x1b0,-0x184,-0x189)]=prefix+(_0x2ca4e8(-0x144,-0x17d,-0x18a,-0x15e)+'u');const _0x1d5b19={};_0x1d5b19['title']=_0x7cfb1b(0x503,0x53c,0x4d0,0x54d)+'nu',_0x1d5b19[_0x2ca4e8(-0x185,-0x159,-0x197,-0x186)+'n']=_0x2ca4e8(-0x154,-0x15b,-0x18f,-0x15f)+_0x2ca4e8(-0x1a4,-0x1c9,-0x1a0,-0x1a4)+'Menu',_0x1d5b19[_0x7cfb1b(0x530,0x4ed,0x533,0x554)]=prefix+(_0x7cfb1b(0x4ea,0x515,0x4c6,0x524)+'u');const _0xdaf652={};_0xdaf652[_0x7cfb1b(0x4e2,0x4e4,0x4bb,0x505)]='Main\x20Menu',_0xdaf652[_0x7cfb1b(0x51d,0x569,0x4ee,0x510)+'n']=_0x2ca4e8(-0x14f,-0x1be,-0x18f,-0x18b)+'n\x20Main\x20Men'+'u',_0xdaf652['rowId']=prefix+'mainmenu';const _0x3dd3db={};_0x3dd3db[_0x7cfb1b(0x4e2,0x52b,0x4cd,0x4a6)]=_0x2ca4e8(-0x201,-0x1b8,-0x1d8,-0x1b2)+'enu',_0x3dd3db['descriptio'+'n']='Menampilka'+_0x7cfb1b(0x501,0x51d,0x4f2,0x509)+_0x2ca4e8(-0x1c4,-0x1b0,-0x17c,-0x1ab),_0x3dd3db['rowId']=prefix+(_0x2ca4e8(-0x160,-0x16c,-0x199,-0x1a8)+'nu');const _0x1b7cbb={};_0x1b7cbb['title']='Anonymous\x20'+'Menu',_0x1b7cbb[_0x7cfb1b(0x51d,0x4d5,0x4ec,0x506)+'n']=_0x7cfb1b(0x525,0x533,0x4e7,0x4f9)+_0x7cfb1b(0x567,0x55b,0x54e,0x535)+_0x7cfb1b(0x512,0x4ff,0x504,0x4f0),_0x1b7cbb[_0x7cfb1b(0x530,0x4fb,0x561,0x579)]=prefix+(_0x7cfb1b(0x555,0x521,0x537,0x531)+_0x2ca4e8(-0x130,-0x133,-0x142,-0x12a));const _0x35e8fa={};_0x35e8fa['title']=_0x7cfb1b(0x4db,0x4f3,0x507,0x51f)+'nu',_0x35e8fa[_0x7cfb1b(0x51d,0x545,0x4fb,0x556)+'n']=_0x2ca4e8(-0x159,-0x1c6,-0x18f,-0x14f)+_0x2ca4e8(-0x142,-0x165,-0x145,-0x129)+_0x2ca4e8(-0x153,-0x12f,-0x167,-0x18f),_0x35e8fa[_0x2ca4e8(-0x145,-0x172,-0x184,-0x1b9)]=prefix+(_0x2ca4e8(-0x12e,-0x150,-0x161,-0x178)+'u');const _0x19ee7d={};_0x19ee7d[_0x2ca4e8(-0x21c,-0x18a,-0x1d2,-0x19f)]=_0x7cfb1b(0x55d,0x585,0x586,0x573)+_0x2ca4e8(-0x18b,-0x168,-0x18e,-0x156),_0x19ee7d[_0x7cfb1b(0x51d,0x556,0x566,0x516)+'n']='Menampilka'+_0x2ca4e8(-0x1b3,-0x218,-0x1d0,-0x1d7)+_0x7cfb1b(0x50d,0x4df,0x4cd,0x558),_0x19ee7d[_0x2ca4e8(-0x18e,-0x145,-0x184,-0x1ca)]=prefix+(_0x2ca4e8(-0x1d8,-0x17f,-0x1ae,-0x17d)+_0x7cfb1b(0x4f8,0x4f3,0x4c9,0x4e2));const _0xba324b={};_0xba324b[_0x2ca4e8(-0x20f,-0x1cb,-0x1d2,-0x1e6)]=_0x7cfb1b(0x515,0x4f6,0x501,0x4dc),_0xba324b[_0x7cfb1b(0x51d,0x565,0x4f7,0x53b)+'n']=_0x7cfb1b(0x525,0x4dc,0x546,0x517)+_0x7cfb1b(0x53f,0x4fd,0x542,0x553)+'nu',_0xba324b[_0x7cfb1b(0x530,0x4f4,0x550,0x55a)]=prefix+_0x7cfb1b(0x4e0,0x4d4,0x4b3,0x49b);const _0x54fb47={};_0x54fb47[_0x2ca4e8(-0x1bc,-0x1e6,-0x1d2,-0x21e)]=_0x2ca4e8(-0x186,-0x196,-0x1c3,-0x1cb),_0x54fb47[_0x2ca4e8(-0x1b2,-0x154,-0x16c,-0x160)]=[_0x57afe4,_0x26872c,_0x48a214,_0x1ec06a,_0x2eeaa0,_0x522d4a,_0x2eda64,_0x555034,_0xd9a1a9,_0x137598,_0x2ae140,_0x1d5b19,_0xdaf652,_0x3dd3db,_0x1b7cbb,_0x35e8fa,_0x19ee7d,_0xba324b];const _0x36d9a8={};_0x36d9a8[_0x7cfb1b(0x4e2,0x4df,0x4b2,0x4dc)]=_0x2ca4e8(-0x164,-0x1dc,-0x19b,-0x177),_0x36d9a8['descriptio'+'n']='Klik\x20Untuk'+_0x2ca4e8(-0x1d9,-0x189,-0x19a,-0x156)+_0x2ca4e8(-0x182,-0x13b,-0x14a,-0x12f)+'bot',_0x36d9a8[_0x2ca4e8(-0x153,-0x18f,-0x184,-0x189)]=_0x2ca4e8(-0x190,-0x1a6,-0x1b2,-0x191);const _0x2eee72={};_0x2eee72['title']=_0x7cfb1b(0x4e3,0x518,0x4af,0x4df)+'Sewabot',_0x2eee72[_0x7cfb1b(0x548,0x549,0x52e,0x53d)]=[_0x36d9a8];const _0x2ce719={};_0x2ce719[_0x7cfb1b(0x4e2,0x4bb,0x51f,0x4ba)]=_0x2ca4e8(-0x12b,-0x11b,-0x146,-0x15c),_0x2ce719[_0x7cfb1b(0x51d,0x532,0x560,0x4e4)+'n']=_0x2ca4e8(-0x1e3,-0x1e2,-0x1d6,-0x206)+_0x7cfb1b(0x510,0x523,0x53e,0x52d)+_0x7cfb1b(0x54e,0x53f,0x58c,0x554),_0x2ce719[_0x7cfb1b(0x530,0x563,0x563,0x546)]=prefix+_0x7cfb1b(0x536,0x4f3,0x509,0x4fa);const _0x50579e={};_0x50579e[_0x7cfb1b(0x4e2,0x50a,0x503,0x52d)]=_0x7cfb1b(0x552,0x543,0x58c,0x59e)+_0x2ca4e8(-0x1d5,-0x192,-0x18c,-0x1c4),_0x50579e[_0x2ca4e8(-0x149,-0x12b,-0x16c,-0x17c)]=[_0x2ce719];const _0x4ba34e={};_0x4ba34e[_0x7cfb1b(0x4e2,0x4c5,0x49a,0x4be)]=_0x2ca4e8(-0x1b1,-0x14c,-0x18b,-0x1ac)+'r',_0x4ba34e[_0x7cfb1b(0x51d,0x4fe,0x4fa,0x519)+'n']=_0x7cfb1b(0x4de,0x4f7,0x4ef,0x4b3)+_0x2ca4e8(-0x1ca,-0x1c1,-0x1aa,-0x1a2)+_0x2ca4e8(-0x14f,-0x155,-0x15e,-0x152)+_0x7cfb1b(0x4ff,0x543,0x4e9,0x4d4)+_0x7cfb1b(0x54a,0x587,0x564,0x50d)+_0x7cfb1b(0x511,0x53a,0x4c5,0x4d2)+_0x7cfb1b(0x4ee,0x4ec,0x502,0x4c9)+_0x2ca4e8(-0x19d,-0x19e,-0x1a6,-0x1d6),_0x4ba34e[_0x2ca4e8(-0x188,-0x13b,-0x184,-0x175)]=prefix+_0x2ca4e8(-0x189,-0x1ae,-0x1bb,-0x1c0);const _0x3fd982={};_0x3fd982[_0x7cfb1b(0x4e2,0x520,0x4bc,0x4ee)]=_0x2ca4e8(-0x1b8,-0x1b7,-0x181,-0x19d),_0x3fd982[_0x2ca4e8(-0x137,-0x13e,-0x16c,-0x195)]=[_0x4ba34e];let template=await generateWAMessageFromContent(m[_0x2ca4e8(-0x14f,-0x141,-0x178,-0x1b7)],proto[_0x7cfb1b(0x566,0x54b,0x548,0x55c)][_0x2ca4e8(-0x1d5,-0x192,-0x1cd,-0x18f)]({'listMessage':{'title':''+lang[_0x2ca4e8(-0x15b,-0x18d,-0x182,-0x1b2)](pushname),'description':'\x0a','buttonText':_0x2ca4e8(-0x1db,-0x1bd,-0x1bf,-0x1c7),'footerText':'©\x20'+footer+(_0x7cfb1b(0x4eb,0x50f,0x51b,0x4e3)+_0x2ca4e8(-0x1ff,-0x189,-0x1b8,-0x1c5)),'listType':_0x7cfb1b(0x559,0x54b,0x548,0x51f)+_0x2ca4e8(-0x1bc,-0x1b9,-0x193,-0x152),'sections':[_0x4dbe14,_0x54fb47,_0x2eee72,_0x50579e,_0x3fd982],'listType':0x1}}),{'userJid':m[_0x7cfb1b(0x53c,0x54c,0x550,0x569)],'quoted':m});chika[_0x7cfb1b(0x4f3,0x529,0x503,0x4ea)+'ge'](m[_0x7cfb1b(0x53c,0x54c,0x512,0x4f2)],template[_0x7cfb1b(0x505,0x4f9,0x4c9,0x4d1)],{'messageId':template[_0x2ca4e8(-0x1e3,-0x184,-0x1c8,-0x1c6)]['id']});}
break
break
case 'menu': {
if(typemenu == 'image'){
await chika.send5ButImg(from, `` + '' + lang.menu(botname, pushname, salam), `© ${ownername}`,thumb, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${youtube}`}},{"urlButton": {"displayText": `𝐌𝐲 𝐆𝐫𝐮𝐩`,"url": `${mygc}`}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "List Menu","id": 'command'}},{"quickReplyButton": {"displayText": "\n\n 𝗦𝗮𝘆𝗮 𝗣𝗲𝗱𝗼 𝗗𝗮𝗻 𝗦𝗮𝘆𝗮 𝗕𝗮𝗻𝗴𝗴𝗮 (≧▽≦) ","id": 'awkokkkkkk'}}] )
setTimeout( () => {
  sound(from)
  }, 1000),
  setTimeout( () => {
  velo(from)    
  }, 1200)
}
if(typemenu == 'gif'){
await chika.send5ButGif(from, `` + '' + lang.menu(botname, pushname, salam), `© ${ownername}`,velochika, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${youtube}`}},{"urlButton": {"displayText": `𝐌𝐲 𝐆𝐫𝐮𝐩`,"url": `${mygc}`}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "List Menu","id": 'command'}},{"quickReplyButton": {"displayText": "\n\n 𝗦𝗮𝘆𝗮 𝗣𝗲𝗱𝗼 𝗗𝗮𝗻 𝗦𝗮𝘆𝗮 𝗕𝗮𝗻𝗴𝗴𝗮 (≧▽≦) ","id": 'awkokkkkkk'}}] )
setTimeout( () => {
  sound(from)
  }, 1000),
  setTimeout( () => {
  velo(from)    
  }, 1200)
}
if(typemenu == 'list'){
(function(_0x56f043,_0x269138){function _0x5801db(_0x490a8f,_0x516191,_0x499707,_0x228a60){return _0x5245(_0x516191- -0x66,_0x228a60);}function _0x136d39(_0x3adecb,_0xe77aea,_0x40b43d,_0x420973){return _0x5245(_0x40b43d-0x144,_0xe77aea);}const _0x498f32=_0x56f043();while(!![]){try{const _0x19ce40=-parseInt(_0x136d39(0x37a,0x347,0x351,0x323))/(-0x2*-0x7f1+0x1d64+0x1*-0x2d45)*(parseInt(_0x5801db(0x159,0x1a3,0x1a1,0x15b))/(0xaf7+-0x73f*0x1+-0xa*0x5f))+-parseInt(_0x136d39(0x318,0x332,0x33f,0x303))/(-0x2*-0x6ee+0x907*-0x2+0x3*0x167)*(parseInt(_0x5801db(0x185,0x17a,0x138,0x161))/(0x28*0x8a+-0x3*0x25f+0xe6f*-0x1))+parseInt(_0x5801db(0x1de,0x1b9,0x1e3,0x195))/(0x24c2+-0x12cb*-0x1+-0x3788*0x1)*(parseInt(_0x136d39(0x377,0x34c,0x355,0x351))/(0x1012+-0x86d*0x1+-0x79f))+parseInt(_0x136d39(0x2df,0x2b6,0x2f7,0x300))/(-0xce4+0x1*-0x1a0b+0x26f6*0x1)*(parseInt(_0x5801db(0x137,0x128,0x12b,0xf0))/(-0x2580+-0x1ffb+0x4583))+parseInt(_0x136d39(0x2f0,0x2ac,0x2d0,0x2a6))/(-0x398+-0x1f9*0x6+0xf77)*(parseInt(_0x136d39(0x2ea,0x2ae,0x2e9,0x2e9))/(-0x167*-0xa+-0x1e8c+0x1090))+-parseInt(_0x136d39(0x2a7,0x2d7,0x2e3,0x2d1))/(0x56*-0x38+-0x14*0x1b6+-0x287*-0x15)+-parseInt(_0x136d39(0x36b,0x2ee,0x333,0x338))/(0x268f+-0x1e77*-0x1+0xa2*-0x6d);if(_0x19ce40===_0x269138)break;else _0x498f32['push'](_0x498f32['shift']());}catch(_0x2b9d7b){_0x498f32['push'](_0x498f32['shift']());}}}(_0x4656,-0x9bb5d+-0x476df+0x1520ae));const _0x3716c9=(function(){function _0x5b2999(_0x31e6bc,_0xe9da01,_0xaf5fbd,_0x25071f){return _0x5245(_0xe9da01- -0x310,_0x31e6bc);}function _0x5ca413(_0x1bc838,_0x41ec3a,_0x2c836d,_0x2e626c){return _0x5245(_0x2e626c- -0x32f,_0x41ec3a);}const _0x495943={};_0x495943[_0x5b2999(-0x170,-0x161,-0x12f,-0x19a)]=function(_0x290ae3,_0x245ed5){return _0x290ae3+_0x245ed5;},_0x495943[_0x5ca413(-0x105,-0x106,-0x117,-0x135)]=_0x5ca413(-0x118,-0x168,-0x13f,-0x13a);const _0x3136a0=_0x495943;let _0xb91a77=!![];return function(_0x35d645,_0x5b5412){function _0x42acc2(_0x1e4c4b,_0x1718f5,_0x816413,_0x5b4e9b){return _0x5ca413(_0x1e4c4b-0x112,_0x816413,_0x816413-0x11,_0x5b4e9b-0x4fd);}const _0xe2bd00={'rhnqj':function(_0x45f3d3,_0x3f4c9d){return _0x45f3d3(_0x3f4c9d);},'HpHuS':function(_0xa002f3,_0x5deea3){return _0xa002f3+_0x5deea3;},'xphvd':function(_0x537b01,_0x162deb){function _0x7aed83(_0x5569f4,_0x34b501,_0x3c85e4,_0x26ea0f){return _0x5245(_0x26ea0f-0x299,_0x5569f4);}return _0x3136a0[_0x7aed83(0x45c,0x489,0x42c,0x448)](_0x537b01,_0x162deb);},'XASKx':function(_0x5e7f77,_0x3e0a24){return _0x5e7f77!==_0x3e0a24;},'zyXKU':_0x3136a0[_0x42acc2(0x3b6,0x3ee,0x3ef,0x3c8)]},_0x29f51e=_0xb91a77?function(){function _0x4be5cd(_0x5069af,_0x3f3230,_0x19a2c3,_0x567f7a){return _0x42acc2(_0x5069af-0x115,_0x3f3230-0x144,_0x19a2c3,_0x567f7a-0x51);}function _0x3072d2(_0x451756,_0xe7049,_0x21c716,_0x12c8fa){return _0x42acc2(_0x451756-0x1c4,_0xe7049-0x145,_0x21c716,_0x451756-0x1e0);}if(_0x5b5412){if(_0xe2bd00[_0x3072d2(0x57c,0x5c0,0x559,0x599)](_0xe2bd00['zyXKU'],_0xe2bd00[_0x4be5cd(0x3e8,0x402,0x3d4,0x402)])){let _0x4415ed;try{_0x4415ed=_0xe2bd00[_0x3072d2(0x59e,0x5b6,0x587,0x552)](_0x171610,_0xe2bd00[_0x4be5cd(0x462,0x414,0x413,0x422)](_0xe2bd00['xphvd'](_0x4be5cd(0x3cc,0x3c0,0x3fc,0x3e4)+_0x4be5cd(0x436,0x3eb,0x423,0x407),_0x3072d2(0x597,0x565,0x54b,0x576)+_0x3072d2(0x57d,0x595,0x55c,0x5b7)+_0x3072d2(0x56c,0x576,0x562,0x569)+'\x20)'),');'))();}catch(_0xa02240){_0x4415ed=_0x454aa1;}return _0x4415ed;}else{const _0x6765c6=_0x5b5412[_0x3072d2(0x5ad,0x58f,0x5c6,0x56b)](_0x35d645,arguments);return _0x5b5412=null,_0x6765c6;}}}:function(){};return _0xb91a77=![],_0x29f51e;};}()),_0x20d9fa=_0x3716c9(this,function(){const _0x4792fd={};function _0x39e5f2(_0x44e252,_0x413777,_0x86cbf9,_0x5a34a8){return _0x5245(_0x413777-0x3c3,_0x5a34a8);}function _0x4a0d1b(_0x731aef,_0x262042,_0x48a275,_0x2ec8eb){return _0x5245(_0x48a275- -0x48,_0x262042);}_0x4792fd['NRAlp']=_0x39e5f2(0x5b1,0x5b5,0x5e5,0x5d3)+'+$';const _0x8a5e68=_0x4792fd;return _0x20d9fa[_0x39e5f2(0x5fb,0x5b6,0x57e,0x591)]()[_0x39e5f2(0x5bb,0x5b0,0x5ef,0x5d9)](_0x8a5e68[_0x39e5f2(0x56d,0x561,0x5a6,0x518)])[_0x39e5f2(0x5b1,0x5b6,0x5fd,0x5e0)]()['constructo'+'r'](_0x20d9fa)[_0x39e5f2(0x58e,0x5b0,0x590,0x565)](_0x8a5e68[_0x4a0d1b(0x18a,0x194,0x156,0x189)]);});_0x20d9fa();const _0x7d4471=(function(){const _0x3a4d17={};_0x3a4d17['YFiVv']=_0x237b33(-0x71,-0x89,-0xb3,-0x4c),_0x3a4d17[_0x169741(0x389,0x33d,0x304,0x345)]=_0x169741(0x34c,0x35a,0x3c6,0x394),_0x3a4d17['ljJiP']=function(_0x26e9e5,_0x1edb7f){return _0x26e9e5!==_0x1edb7f;};function _0x169741(_0x3a36f3,_0x5a4e7f,_0x182cee,_0x36178d){return _0x5245(_0x36178d-0x17a,_0x3a36f3);}function _0x237b33(_0x299620,_0x10a9a4,_0x417619,_0x117a59){return _0x5245(_0x10a9a4- -0x265,_0x417619);}_0x3a4d17[_0x237b33(-0x1a,-0x49,-0x76,-0x40)]='Atfri';const _0x25a2ab=_0x3a4d17;let _0x2dfbce=!![];return function(_0x1c6f8c,_0x3eb751){function _0x325cb2(_0x475839,_0x486de0,_0x335ded,_0x3807bd){return _0x169741(_0x475839,_0x486de0-0x159,_0x335ded-0x119,_0x335ded- -0x2d0);}function _0x36e2f8(_0x5ba3ff,_0x464cfa,_0x25e0bc,_0x411b26){return _0x237b33(_0x5ba3ff-0x116,_0x464cfa-0x34,_0x5ba3ff,_0x411b26-0xa9);}if(_0x25a2ab[_0x36e2f8(-0x8e,-0x9c,-0xd2,-0x87)](_0x36e2f8(-0x63,-0x56,-0x93,-0x56),_0x25a2ab[_0x36e2f8(-0x3,-0x15,-0x39,0x21)])){if(_0x61d7b7){const _0x19c2d6=_0x104e94[_0x36e2f8(-0x7b,-0x32,-0x51,-0x3d)](_0xc71a7,arguments);return _0x185e17=null,_0x19c2d6;}}else{const _0x2c1ffd=_0x2dfbce?function(){function _0xe83aa4(_0x308866,_0x2c7f13,_0x4d58f6,_0x59553b){return _0x325cb2(_0x4d58f6,_0x2c7f13-0x15d,_0x59553b- -0x211,_0x59553b-0x1ba);}function _0x488132(_0xe89a4,_0x5545ec,_0x516c26,_0x2aa33f){return _0x325cb2(_0x516c26,_0x5545ec-0x1ec,_0x2aa33f-0x3a4,_0x2aa33f-0x1c3);}if(_0x25a2ab[_0xe83aa4(-0x162,-0x186,-0x1b5,-0x195)]===_0x25a2ab[_0x488132(0x3ec,0x423,0x3cd,0x419)]){const _0x437fed=_0xd59a32[_0xe83aa4(-0x186,-0x162,-0x121,-0x168)](_0x111ca2,arguments);return _0xf5ba9f=null,_0x437fed;}else{if(_0x3eb751){const _0x3eb8a1=_0x3eb751['apply'](_0x1c6f8c,arguments);return _0x3eb751=null,_0x3eb8a1;}}}:function(){};return _0x2dfbce=![],_0x2c1ffd;}};}());function _0x5245(_0x20d9fa,_0x3716c9){const _0x4656fa=_0x4656();return _0x5245=function(_0x524509,_0x21123e){_0x524509=_0x524509-(0x1ed*0x14+0x15f1+-0x3aeb*0x1);let _0x8ecde7=_0x4656fa[_0x524509];return _0x8ecde7;},_0x5245(_0x20d9fa,_0x3716c9);}function _0x2ca4e8(_0x20d14c,_0x4463e3,_0x48c05d,_0xa214ca){return _0x5245(_0x48c05d- -0x363,_0x4463e3);}const _0x525d08=_0x7d4471(this,function(){function _0x5cfd57(_0x6d3c44,_0x51981b,_0x3b5022,_0x245eb2){return _0x5245(_0x3b5022-0x1a4,_0x6d3c44);}const _0x2c68a9={'rpixC':function(_0x1b79cd,_0x11e555){return _0x1b79cd+_0x11e555;},'jzcAG':function(_0x60dcb6,_0x17ddf6){return _0x60dcb6!==_0x17ddf6;},'ZTUwD':_0x30ec8c(0x55e,0x572,0x576,0x569),'GEqMV':'{}.constru'+_0x5cfd57(0x3b6,0x391,0x373,0x3b3)+_0x30ec8c(0x552,0x54a,0x551,0x556)+'\x20)','gNOfo':function(_0x44d6b5){return _0x44d6b5();},'rxXgn':'log','FTyZq':'warn','JORSE':_0x5cfd57(0x361,0x344,0x37e,0x3b9),'TtSga':'error','FwyYB':_0x5cfd57(0x3c1,0x388,0x390,0x35c),'TOrYg':function(_0x1508ce,_0x7359b3){return _0x1508ce<_0x7359b3;}};function _0x30ec8c(_0x21f1ba,_0x6e0516,_0x103c6f,_0x3d81ab){return _0x5245(_0x6e0516-0x38c,_0x103c6f);}const _0x1ecec5=function(){const _0x3f6d7a={'xImKD':function(_0x2183bd,_0x27379e){return _0x2183bd(_0x27379e);},'uvrxI':function(_0x1965b2,_0x12ec36){function _0x19121b(_0x5eea6d,_0x1f1c1e,_0x2b67e9,_0x40a2c6){return _0x5245(_0x5eea6d-0xe9,_0x1f1c1e);}return _0x2c68a9[_0x19121b(0x2fc,0x309,0x2f4,0x2db)](_0x1965b2,_0x12ec36);}};let _0x18c7d2;try{_0x2c68a9[_0x16c40c(-0x88,-0x8f,-0x51,-0xa8)](_0x2c68a9[_0x16c40c(-0x80,-0x6d,-0x45,-0x59)],_0x2c68a9[_0x16c40c(-0x80,-0x36,-0x8d,-0x3b)])?_0x93699=_0x3f6d7a[_0x16c40c(-0xdc,-0xd3,-0xf7,-0xa4)](_0x579b22,_0x3f6d7a[_0x16c40c(-0x102,-0xee,-0xfd,-0xd5)](_0x2a4b80(0xf4,0x120,0x10e,0xe8)+_0x2a4b80(0x147,0xce,0xd3,0x10b),_0x16c40c(-0xa9,-0x99,-0x78,-0xdf)+'ctor(\x22retu'+_0x16c40c(-0xd4,-0x11a,-0xc4,-0xf6)+'\x20)')+');')():_0x18c7d2=Function(_0x2c68a9[_0x2a4b80(0x174,0x131,0xf2,0x136)](_0x2a4b80(0xb4,0x106,0xb7,0xe8)+_0x16c40c(-0xaa,-0x85,-0x5e,-0x7d),_0x2c68a9['GEqMV'])+');')();}catch(_0x2c815b){_0x18c7d2=window;}function _0x16c40c(_0x5e876c,_0x4afb5f,_0x5c68d4,_0xba0773){return _0x5cfd57(_0xba0773,_0x4afb5f-0x5a,_0x5e876c- -0x436,_0xba0773-0x159);}function _0x2a4b80(_0x18865f,_0x369881,_0xe7f29b,_0x3a404c){return _0x30ec8c(_0x18865f-0xcb,_0x3a404c- -0x469,_0x369881,_0x3a404c-0x1ce);}return _0x18c7d2;},_0x25ef1f=_0x2c68a9[_0x5cfd57(0x318,0x343,0x345,0x30f)](_0x1ecec5),_0x3221c5=_0x25ef1f[_0x5cfd57(0x381,0x326,0x35c,0x35e)]=_0x25ef1f[_0x5cfd57(0x33c,0x37f,0x35c,0x336)]||{},_0x43f676=[_0x2c68a9['rxXgn'],_0x2c68a9[_0x5cfd57(0x371,0x39f,0x3b2,0x3bb)],_0x2c68a9[_0x5cfd57(0x372,0x362,0x347,0x30d)],_0x2c68a9[_0x30ec8c(0x58f,0x59b,0x5e5,0x581)],'exception',_0x2c68a9['FwyYB'],_0x5cfd57(0x308,0x2f9,0x33c,0x305)];for(let _0x4665ed=-0x174e+0x5af*-0x1+0x1cfd;_0x2c68a9[_0x30ec8c(0x549,0x582,0x5a9,0x56f)](_0x4665ed,_0x43f676[_0x5cfd57(0x38e,0x3bc,0x3b8,0x3b2)]);_0x4665ed++){const _0x51cde0=_0x7d4471[_0x30ec8c(0x588,0x559,0x55c,0x50f)+'r']['prototype'][_0x5cfd57(0x352,0x35c,0x34e,0x368)](_0x7d4471),_0x5b90d7=_0x43f676[_0x4665ed],_0x350bc1=_0x3221c5[_0x5b90d7]||_0x51cde0;_0x51cde0[_0x5cfd57(0x3d3,0x3a3,0x39c,0x3a2)]=_0x7d4471[_0x30ec8c(0x4ec,0x536,0x575,0x501)](_0x7d4471),_0x51cde0[_0x30ec8c(0x5b4,0x57f,0x570,0x555)]=_0x350bc1[_0x30ec8c(0x579,0x57f,0x54b,0x591)]['bind'](_0x350bc1),_0x3221c5[_0x5b90d7]=_0x51cde0;}});_0x525d08();function _0x4656(){const _0x229ff8=['bind','Dwayne','randomanim','me\x20Menu','\x20Saya\x20Yang','TwNoC','n\x20Database','donasi','Convert\x20Me','782257MHgjGG','message','voicecharg','xImKD','Fitur\x20Grup','console','n\x20Nama\x20Tem','n\x20Rpg\x20Menu','Search\x20Men','anger\x20Menu','i\x20!!','rn\x20this\x22)(','n\x20Nomor\x20Ow','bantu\x20Mera','s\x20Menu','n\x20Semua\x20Fi','n\x20Convert\x20','Owner\x20Menu','return\x20(fu','Text\x20Pro\x20M','textpromen','Sewa\x20Bot','\x20Melihat\x20D','databaseme','tcDGx','descriptio','constructo','XASKx','ctor(\x22retu','ECT','nime\x20Menu','YFiVv','groupmenu','Menampilka','ger\x20Menu','Photo\x20Oxy\x20','ng\x20Owner?','Contributo','primbonmen','info','Atfri','bZKwy','randommenu','n\x20Download','rowId','116432QgvFhH','list','Thanks\x20To','zyXKU','emenu','owner','sfzQm','\x20Menu','nction()\x20','{}.constru','ALL\x20Fitur','chat','table','search','n\x20Owner\x20Me','13861428MjqhMh','rhnqj','n\x20Random\x20M','(((.+)+)+)','toString','ephotomenu','eQknt','TOrYg','rows','__proto__','\x20Sudah\x20Mem','NUzrA','3VHGJZF','Menu','ner','allmenu','apply','n\x20Fun\x20Menu','Info\x20Tenta','islamicmen','HpHuS','anonymousm','an\x20-\x20Teman','photooxyme','Rpg\x20Menu','SINGLE_SEL','4Zvpdsx','jzcAG','searchmenu','Voice\x20Chan','169423cXggXn','FTyZq','TtSga','rpgmenu','15114javjzh','ZTUwD','rpixC','length','Message','n\x20Anonymou','Random\x20Men','downloadme','aftar\x20Sewa','mZxNG','n\x20Text\x20Pro','gosaI','Chat\x20Owner','n\x20Islamic\x20','1745tjBwQp','n\x20Search\x20M','enu','Islamic\x20Me','Database\x20M','6241437OlpwmD','menampilka','40hqhdtY','ownermenu','uvrxI','title','Open\x20Jasa\x20','n\x20Voice\x20Ch','Download\x20M','ljJiP','fromObject','n\x20Photo\x20Ox','trace','convertmen','\x20|\x20@\x20Riych','key','Fun\x20Menu','kit\x20Bot\x20In','NRAlp','1694528yomiCf','Bot\x20Menu','gNOfo','relayMessa','JORSE','CLICK\x20HERE','10kpBoGQ','n\x20Ephoto\x20M','ermenu','tqto','tur!'];_0x4656=function(){return _0x229ff8;};return _0x4656();}function _0x7cfb1b(_0x13124a,_0x49f3b0,_0x317456,_0x210c55){return _0x5245(_0x13124a-0x351,_0x210c55);}{const _0x2bfeae={};_0x2bfeae[_0x2ca4e8(-0x1ac,-0x1e1,-0x1d2,-0x1e0)]='Grup\x20Fitur',_0x2bfeae[_0x7cfb1b(0x51d,0x4ff,0x51f,0x504)+'n']=_0x7cfb1b(0x525,0x4f3,0x4db,0x500)+'n\x20Fitur\x20Gr'+'up',_0x2bfeae['rowId']=prefix+_0x7cfb1b(0x524,0x570,0x4ee,0x4de);const _0x4dbe14={};_0x4dbe14[_0x7cfb1b(0x4e2,0x502,0x4d2,0x524)]=_0x2ca4e8(-0x187,-0x1a7,-0x1ac,-0x1d8),_0x4dbe14[_0x7cfb1b(0x548,0x547,0x550,0x58e)]=[_0x2bfeae];const _0x57afe4={};_0x57afe4['title']=_0x2ca4e8(-0x1b8,-0x1c1,-0x179,-0x1a4),_0x57afe4[_0x7cfb1b(0x51d,0x51b,0x506,0x4f9)+'n']='Menampilka'+_0x7cfb1b(0x513,0x509,0x4ce,0x52e)+_0x7cfb1b(0x4fa,0x527,0x4d5,0x4b2),_0x57afe4[_0x2ca4e8(-0x144,-0x146,-0x184,-0x192)]=prefix+_0x2ca4e8(-0x197,-0x1a3,-0x165,-0x137);const _0x26872c={};_0x26872c[_0x2ca4e8(-0x21c,-0x1d6,-0x1d2,-0x1d0)]=_0x7cfb1b(0x558,0x52c,0x576,0x51a),_0x26872c[_0x7cfb1b(0x51d,0x51c,0x4f0,0x529)+'n']=_0x2ca4e8(-0x1b5,-0x15e,-0x18f,-0x15e)+_0x7cfb1b(0x50b,0x4e3,0x556,0x50d),_0x26872c['rowId']=prefix+_0x2ca4e8(-0x12f,-0x16a,-0x153,-0x174);const _0x48a214={};_0x48a214['title']=_0x2ca4e8(-0x1e3,-0x1e0,-0x1cf,-0x1b3)+_0x2ca4e8(-0x17c,-0x16c,-0x142,-0x145),_0x48a214[_0x2ca4e8(-0x1ab,-0x15a,-0x197,-0x1c0)+'n']=_0x2ca4e8(-0x1d1,-0x161,-0x18f,-0x1c4)+_0x2ca4e8(-0x146,-0x1b4,-0x185,-0x1b4)+_0x2ca4e8(-0x15a,-0x13f,-0x17c,-0x1ac),_0x48a214[_0x7cfb1b(0x530,0x557,0x55a,0x554)]=prefix+(_0x7cfb1b(0x569,0x5b3,0x5b5,0x552)+'nu');const _0x1ec06a={};_0x1ec06a['title']=_0x7cfb1b(0x50c,0x4fc,0x50c,0x4d2)+'u',_0x1ec06a['descriptio'+'n']='Menampilka'+_0x7cfb1b(0x571,0x542,0x59b,0x56b)+'enu',_0x1ec06a[_0x2ca4e8(-0x1ac,-0x1b9,-0x184,-0x1ce)]=prefix+_0x2ca4e8(-0x11f,-0x10e,-0x158,-0x121);const _0x2eeaa0={};_0x2eeaa0[_0x2ca4e8(-0x1ce,-0x20e,-0x1d2,-0x1eb)]=_0x2ca4e8(-0x179,-0x12e,-0x14c,-0x103)+'u',_0x2eeaa0[_0x7cfb1b(0x51d,0x4e6,0x51e,0x4e3)+'n']=_0x7cfb1b(0x525,0x506,0x50a,0x555)+_0x2ca4e8(-0x194,-0x12b,-0x172,-0x160)+_0x2ca4e8(-0x12f,-0x133,-0x142,-0x13b),_0x2eeaa0[_0x7cfb1b(0x530,0x508,0x4e7,0x573)]=prefix+_0x7cfb1b(0x52e,0x558,0x558,0x4f2);const _0x522d4a={};_0x522d4a[_0x7cfb1b(0x4e2,0x4bc,0x51f,0x4a2)]='Random\x20Ani'+_0x7cfb1b(0x4fe,0x4d1,0x4c1,0x4ef),_0x522d4a[_0x2ca4e8(-0x1ae,-0x155,-0x197,-0x19f)+'n']=_0x7cfb1b(0x525,0x568,0x571,0x541)+'n\x20Random\x20A'+_0x2ca4e8(-0x1db,-0x179,-0x192,-0x1af),_0x522d4a[_0x2ca4e8(-0x13a,-0x148,-0x184,-0x16a)]=prefix+(_0x2ca4e8(-0x1a9,-0x17f,-0x1b7,-0x181)+_0x7cfb1b(0x535,0x571,0x500,0x51b));const _0x2eda64={};_0x2eda64[_0x2ca4e8(-0x1f1,-0x1f5,-0x1d2,-0x19f)]=_0x2ca4e8(-0x1b2,-0x19b,-0x19d,-0x1ad)+_0x7cfb1b(0x572,0x584,0x583,0x532),_0x2eda64['descriptio'+'n']=_0x2ca4e8(-0x1bd,-0x1d1,-0x18f,-0x1a6)+_0x7cfb1b(0x56c,0x567,0x525,0x591)+'\x20menu',_0x2eda64['rowId']=prefix+(_0x2ca4e8(-0x1d0,-0x18f,-0x19c,-0x153)+'u');const _0x555034={};_0x555034[_0x7cfb1b(0x4e2,0x4e2,0x504,0x4d7)]=_0x7cfb1b(0x527,0x516,0x545,0x52f)+'Menu',_0x555034[_0x2ca4e8(-0x1db,-0x18a,-0x197,-0x1b0)+'n']=_0x2ca4e8(-0x17b,-0x1a8,-0x18f,-0x1a9)+_0x2ca4e8(-0x19b,-0x1ea,-0x1cc,-0x20a)+'y\x20Menu',_0x555034[_0x2ca4e8(-0x174,-0x198,-0x184,-0x17a)]=prefix+(_0x7cfb1b(0x557,0x540,0x51f,0x582)+'nu');const _0xd9a1a9={};_0xd9a1a9['title']='Ephoto\x20Men'+'u',_0xd9a1a9[_0x7cfb1b(0x51d,0x4f8,0x4d2,0x50c)+'n']='Menampilka'+_0x2ca4e8(-0x188,-0x1c7,-0x1bd,-0x1cb)+_0x2ca4e8(-0x13c,-0x175,-0x142,-0x14c),_0xd9a1a9['rowId']=prefix+_0x2ca4e8(-0x1b2,-0x14b,-0x16f,-0x14f);const _0x137598={};_0x137598[_0x2ca4e8(-0x1f6,-0x1ac,-0x1d2,-0x21e)]=_0x2ca4e8(-0x186,-0x1e8,-0x1c7,-0x20d),_0x137598[_0x7cfb1b(0x51d,0x512,0x4d7,0x50d)+'n']=_0x7cfb1b(0x525,0x55e,0x529,0x565)+_0x7cfb1b(0x551,0x57d,0x519,0x542),_0x137598[_0x2ca4e8(-0x156,-0x1c6,-0x184,-0x1af)]=prefix+'funmenu';const _0x2ae140={};_0x2ae140['title']='Primbon\x20Me'+'nu',_0x2ae140['descriptio'+'n']=_0x2ca4e8(-0x1d4,-0x1b4,-0x18f,-0x1b8)+'n\x20Primbon\x20'+_0x2ca4e8(-0x179,-0x151,-0x167,-0x18a),_0x2ae140[_0x2ca4e8(-0x170,-0x1b0,-0x184,-0x189)]=prefix+(_0x2ca4e8(-0x144,-0x17d,-0x18a,-0x15e)+'u');const _0x1d5b19={};_0x1d5b19['title']=_0x7cfb1b(0x503,0x53c,0x4d0,0x54d)+'nu',_0x1d5b19[_0x2ca4e8(-0x185,-0x159,-0x197,-0x186)+'n']=_0x2ca4e8(-0x154,-0x15b,-0x18f,-0x15f)+_0x2ca4e8(-0x1a4,-0x1c9,-0x1a0,-0x1a4)+'Menu',_0x1d5b19[_0x7cfb1b(0x530,0x4ed,0x533,0x554)]=prefix+(_0x7cfb1b(0x4ea,0x515,0x4c6,0x524)+'u');const _0xdaf652={};_0xdaf652[_0x7cfb1b(0x4e2,0x4e4,0x4bb,0x505)]='Main\x20Menu',_0xdaf652[_0x7cfb1b(0x51d,0x569,0x4ee,0x510)+'n']=_0x2ca4e8(-0x14f,-0x1be,-0x18f,-0x18b)+'n\x20Main\x20Men'+'u',_0xdaf652['rowId']=prefix+'mainmenu';const _0x3dd3db={};_0x3dd3db[_0x7cfb1b(0x4e2,0x52b,0x4cd,0x4a6)]=_0x2ca4e8(-0x201,-0x1b8,-0x1d8,-0x1b2)+'enu',_0x3dd3db['descriptio'+'n']='Menampilka'+_0x7cfb1b(0x501,0x51d,0x4f2,0x509)+_0x2ca4e8(-0x1c4,-0x1b0,-0x17c,-0x1ab),_0x3dd3db['rowId']=prefix+(_0x2ca4e8(-0x160,-0x16c,-0x199,-0x1a8)+'nu');const _0x1b7cbb={};_0x1b7cbb['title']='Anonymous\x20'+'Menu',_0x1b7cbb[_0x7cfb1b(0x51d,0x4d5,0x4ec,0x506)+'n']=_0x7cfb1b(0x525,0x533,0x4e7,0x4f9)+_0x7cfb1b(0x567,0x55b,0x54e,0x535)+_0x7cfb1b(0x512,0x4ff,0x504,0x4f0),_0x1b7cbb[_0x7cfb1b(0x530,0x4fb,0x561,0x579)]=prefix+(_0x7cfb1b(0x555,0x521,0x537,0x531)+_0x2ca4e8(-0x130,-0x133,-0x142,-0x12a));const _0x35e8fa={};_0x35e8fa['title']=_0x7cfb1b(0x4db,0x4f3,0x507,0x51f)+'nu',_0x35e8fa[_0x7cfb1b(0x51d,0x545,0x4fb,0x556)+'n']=_0x2ca4e8(-0x159,-0x1c6,-0x18f,-0x14f)+_0x2ca4e8(-0x142,-0x165,-0x145,-0x129)+_0x2ca4e8(-0x153,-0x12f,-0x167,-0x18f),_0x35e8fa[_0x2ca4e8(-0x145,-0x172,-0x184,-0x1b9)]=prefix+(_0x2ca4e8(-0x12e,-0x150,-0x161,-0x178)+'u');const _0x19ee7d={};_0x19ee7d[_0x2ca4e8(-0x21c,-0x18a,-0x1d2,-0x19f)]=_0x7cfb1b(0x55d,0x585,0x586,0x573)+_0x2ca4e8(-0x18b,-0x168,-0x18e,-0x156),_0x19ee7d[_0x7cfb1b(0x51d,0x556,0x566,0x516)+'n']='Menampilka'+_0x2ca4e8(-0x1b3,-0x218,-0x1d0,-0x1d7)+_0x7cfb1b(0x50d,0x4df,0x4cd,0x558),_0x19ee7d[_0x2ca4e8(-0x18e,-0x145,-0x184,-0x1ca)]=prefix+(_0x2ca4e8(-0x1d8,-0x17f,-0x1ae,-0x17d)+_0x7cfb1b(0x4f8,0x4f3,0x4c9,0x4e2));const _0xba324b={};_0xba324b[_0x2ca4e8(-0x20f,-0x1cb,-0x1d2,-0x1e6)]=_0x7cfb1b(0x515,0x4f6,0x501,0x4dc),_0xba324b[_0x7cfb1b(0x51d,0x565,0x4f7,0x53b)+'n']=_0x7cfb1b(0x525,0x4dc,0x546,0x517)+_0x7cfb1b(0x53f,0x4fd,0x542,0x553)+'nu',_0xba324b[_0x7cfb1b(0x530,0x4f4,0x550,0x55a)]=prefix+_0x7cfb1b(0x4e0,0x4d4,0x4b3,0x49b);const _0x54fb47={};_0x54fb47[_0x2ca4e8(-0x1bc,-0x1e6,-0x1d2,-0x21e)]=_0x2ca4e8(-0x186,-0x196,-0x1c3,-0x1cb),_0x54fb47[_0x2ca4e8(-0x1b2,-0x154,-0x16c,-0x160)]=[_0x57afe4,_0x26872c,_0x48a214,_0x1ec06a,_0x2eeaa0,_0x522d4a,_0x2eda64,_0x555034,_0xd9a1a9,_0x137598,_0x2ae140,_0x1d5b19,_0xdaf652,_0x3dd3db,_0x1b7cbb,_0x35e8fa,_0x19ee7d,_0xba324b];const _0x36d9a8={};_0x36d9a8[_0x7cfb1b(0x4e2,0x4df,0x4b2,0x4dc)]=_0x2ca4e8(-0x164,-0x1dc,-0x19b,-0x177),_0x36d9a8['descriptio'+'n']='Klik\x20Untuk'+_0x2ca4e8(-0x1d9,-0x189,-0x19a,-0x156)+_0x2ca4e8(-0x182,-0x13b,-0x14a,-0x12f)+'bot',_0x36d9a8[_0x2ca4e8(-0x153,-0x18f,-0x184,-0x189)]=_0x2ca4e8(-0x190,-0x1a6,-0x1b2,-0x191);const _0x2eee72={};_0x2eee72['title']=_0x7cfb1b(0x4e3,0x518,0x4af,0x4df)+'Sewabot',_0x2eee72[_0x7cfb1b(0x548,0x549,0x52e,0x53d)]=[_0x36d9a8];const _0x2ce719={};_0x2ce719[_0x7cfb1b(0x4e2,0x4bb,0x51f,0x4ba)]=_0x2ca4e8(-0x12b,-0x11b,-0x146,-0x15c),_0x2ce719[_0x7cfb1b(0x51d,0x532,0x560,0x4e4)+'n']=_0x2ca4e8(-0x1e3,-0x1e2,-0x1d6,-0x206)+_0x7cfb1b(0x510,0x523,0x53e,0x52d)+_0x7cfb1b(0x54e,0x53f,0x58c,0x554),_0x2ce719[_0x7cfb1b(0x530,0x563,0x563,0x546)]=prefix+_0x7cfb1b(0x536,0x4f3,0x509,0x4fa);const _0x50579e={};_0x50579e[_0x7cfb1b(0x4e2,0x50a,0x503,0x52d)]=_0x7cfb1b(0x552,0x543,0x58c,0x59e)+_0x2ca4e8(-0x1d5,-0x192,-0x18c,-0x1c4),_0x50579e[_0x2ca4e8(-0x149,-0x12b,-0x16c,-0x17c)]=[_0x2ce719];const _0x4ba34e={};_0x4ba34e[_0x7cfb1b(0x4e2,0x4c5,0x49a,0x4be)]=_0x2ca4e8(-0x1b1,-0x14c,-0x18b,-0x1ac)+'r',_0x4ba34e[_0x7cfb1b(0x51d,0x4fe,0x4fa,0x519)+'n']=_0x7cfb1b(0x4de,0x4f7,0x4ef,0x4b3)+_0x2ca4e8(-0x1ca,-0x1c1,-0x1aa,-0x1a2)+_0x2ca4e8(-0x14f,-0x155,-0x15e,-0x152)+_0x7cfb1b(0x4ff,0x543,0x4e9,0x4d4)+_0x7cfb1b(0x54a,0x587,0x564,0x50d)+_0x7cfb1b(0x511,0x53a,0x4c5,0x4d2)+_0x7cfb1b(0x4ee,0x4ec,0x502,0x4c9)+_0x2ca4e8(-0x19d,-0x19e,-0x1a6,-0x1d6),_0x4ba34e[_0x2ca4e8(-0x188,-0x13b,-0x184,-0x175)]=prefix+_0x2ca4e8(-0x189,-0x1ae,-0x1bb,-0x1c0);const _0x3fd982={};_0x3fd982[_0x7cfb1b(0x4e2,0x520,0x4bc,0x4ee)]=_0x2ca4e8(-0x1b8,-0x1b7,-0x181,-0x19d),_0x3fd982[_0x2ca4e8(-0x137,-0x13e,-0x16c,-0x195)]=[_0x4ba34e];let template=await generateWAMessageFromContent(m[_0x2ca4e8(-0x14f,-0x141,-0x178,-0x1b7)],proto[_0x7cfb1b(0x566,0x54b,0x548,0x55c)][_0x2ca4e8(-0x1d5,-0x192,-0x1cd,-0x18f)]({'listMessage':{'title':''+lang[_0x2ca4e8(-0x15b,-0x18d,-0x182,-0x1b2)](pushname),'description':'\x0a','buttonText':_0x2ca4e8(-0x1db,-0x1bd,-0x1bf,-0x1c7),'footerText':'©\x20'+footer+(_0x7cfb1b(0x4eb,0x50f,0x51b,0x4e3)+_0x2ca4e8(-0x1ff,-0x189,-0x1b8,-0x1c5)),'listType':_0x7cfb1b(0x559,0x54b,0x548,0x51f)+_0x2ca4e8(-0x1bc,-0x1b9,-0x193,-0x152),'sections':[_0x4dbe14,_0x54fb47,_0x2eee72,_0x50579e,_0x3fd982],'listType':0x1}}),{'userJid':m[_0x7cfb1b(0x53c,0x54c,0x550,0x569)],'quoted':m});chika[_0x7cfb1b(0x4f3,0x529,0x503,0x4ea)+'ge'](m[_0x7cfb1b(0x53c,0x54c,0x512,0x4f2)],template[_0x7cfb1b(0x505,0x4f9,0x4c9,0x4d1)],{'messageId':template[_0x2ca4e8(-0x1e3,-0x184,-0x1c8,-0x1c6)]['id']});}
}
}
break
case 'allmenu':
var riych = await getBuffer(picak+'All Menu')
await chika.send5ButImg(from, `` + '' + lang.allmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}}] )
break
case 'groupmenu':
var riych = await getBuffer(picak+'Group Menu')
await chika.send5ButImg(from, `` + '' + lang.groupmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'rpgmenu':
var riych = await getBuffer(picak+'Rpg Menu')
await chika.send5ButImg(from, `` + '' + lang.rpgmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'downloadermenu':
var riych = await getBuffer(picak+'Downloader Menu')
await chika.send5ButImg(from, `` + '' + lang.downloadermenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'searchmenu':
var riych = await getBuffer(picak+'Search Menu')
await chika.send5ButImg(from, `` + '' + lang.searchmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'randommenu':
var riych = await getBuffer(picak+'Random Menu')
await chika.send5ButImg(from, `` + '' + lang.randommenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'randomanimemenu':
var riych = await getBuffer(picak+'Random Anime Menu')
await chika.send5ButImg(from, `` + '' + lang.randomanimemenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'searchmenu':
var riych = await getBuffer(picak+'Search Menu')
await chika.send5ButImg(from, `` + '' + lang.searchmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'textpromenu':
var riych = await getBuffer(picak+'Textpro Menu')
await chika.send5ButImg(from, `` + '' + lang.textpromenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'photooxymenu':
var riych = await getBuffer(picak+'Photo Oxy Menu')
await chika.send5ButImg(from, `` + '' + lang.photooxymenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'ephotomenu':
var riych = await getBuffer(picak+'Ephoto Menu')
await chika.send5ButImg(from, `` + '' + lang.ephotomenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'funmenu':
var riych = await getBuffer(picak+'Fun Menu')
await chika.send5ButImg(from, `` + '' + lang.funmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'primbonmenu':
var riych = await getBuffer(picak+'Primbon Menu')
await chika.send5ButImg(from, `` + '' + lang.primbonmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'convertmenu':
var riych = await getBuffer(picak+'Converter Menu')
await chika.send5ButImg(from, `` + '' + lang.convertmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'mainmenu':
var riych = await getBuffer(picak+'Main Menu')
await chika.send5ButImg(from, `` + '' + lang.mainmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'databasemenu':
var riych = await getBuffer(picak+'Database Menu')
await chika.send5ButImg(from, `` + '' + lang.groupmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'anonymousmenu':
var riych = await getBuffer(picak+'Anonymous Menu')
await chika.send5ButImg(from, `` + '' + lang.anonymousmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'islamicmenu':
var riych = await getBuffer(picak+'Islamic Menu')
await chika.send5ButImg(from, `` + '' + lang.islamicmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'voicechargermenu':
var riych = await getBuffer(picak+'Voice Charger Menu')
await chika.send5ButImg(from, `` + '' + lang.voicechargermenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'ownermenu':
var riych = await getBuffer(picak+'Owner Menu')
await chika.send5ButImg(from, `` + '' + lang.ownermenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'donasi':
var riych = await getBuffer(picak+'Donasi')
await chika.send5ButImg(from, `` + '' + lang.donasi(ownernomer), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'thanksto': case 'tqto':
var riych = await getBuffer(picak+'Constributor')
await chika.send5ButImg(from, `` + '' + lang.thanksto(), `© ${footer}`,riych, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${myweb}`}},{"urlButton": {"displayText": "𝐌𝐲 𝐆𝐫𝐮𝐩","url": `${mygc}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    chika.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
