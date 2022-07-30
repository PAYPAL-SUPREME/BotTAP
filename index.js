//const { default: makeWASocket, useSingleFileAuthState, DisconnectReason } = require("@venom-md/baileys-md")
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage } = require("@Venom-Md/baileys-md")
const { Boom } = require('./node_modules/@hapi/boom')
const pino = require('pino')
//const { smsg, isUrl, generateMessageTag, getBuffer, getRandom } = require('./lib/myfunc')
const { state, saveState } = useSingleFileAuthState('./VenomBot.json')
//const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const util = require('util')
const fetch = require('node-fetch')
const FileType = require('file-type')
const { color, DashaLog } = require("./lib/color");
const figlet = require("figlet");
const PhoneNumber = require('awesome-phonenumber')
const res = JSON.parse(fs.readFileSync('./res/data.json'))
const { smsg, isUrl, generateMessageTag, getBuffer, getRandom } = require('./lib/myfunc')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')


//iniciar atividades de conexao do bot
async function startVenom() {
    const venom = makeWASocket({
       logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['StarBot','Safari','1.0.0'],
        auth: state
    }); 
  
//funcao propia da script    
 venom.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!venom.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(venom, mek)
        require("./Venom")(venom, m, chatUpdate)
        } catch (err) {
            console.log(err)
        }
    })
//    
// venom.ev.on('group-participants.update', async (anu) => {
//         console.log(anu)
//         try {
//             let metadata = await venom.groupMetadata(anu.id)
//             let participants = anu.participants
//             for (let num of participants) {
                
//                 try {
//                     ppuser = await venom.profilePictureUrl(num, 'image')
//                 } catch {
//                     ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
//                 }

                
//                 try {
//                     ppgroup = await venom.profilePictureUrl(anu.id, 'image')
//                 } catch {
//                     ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
//                 }

//                 if (anu.action == 'add') {
//                     venom.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `🗣️Bienvenido Mi Querido Lord Apestosin👊😖 ${metadata.subject} @${num.split("@")[0]}` })
//                 } else if (anu.action == 'remove') {
//                     venom.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `😝 Adios Mi querido kong color Chocolate 🍫 @${num.split("@")[0]} No encontrarás a ningún grupo mejor que él de nosotros 💁🏻‍♂️ ${metadata.subject}` })
//                 }
//             }
//         } catch (err) {
//             console.log(err)
//         }
//     })
	    

venom.public = true
//console de conexao do bot
venom.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? startVenom() : console.log('Desconectado por internet lento 🐢🐢...')
        }
        console.log('👩‍❤️‍💋‍👩Conectado al bot 🥰...', update)
    })

    venom.ev.on('creds.update', saveState)
    
    venom.sendText = (jid, text, quoted = '', options) => venom.sendMessage(jid, { text: text, ...options }, { quoted })
//enviar textos
    
    venom.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await venom.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
//emviar imagem
    
    venom.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await venom.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }
//enviar videos
    
    venom.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await venom.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }
//enviar audios
    
    venom.sendTextWithMentions = async (jid, text, quoted, options = {}) => venom.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
//enviar textos e marcações

    venom.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await venom.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
//enviar sticker e fotos
 
    venom.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await venom.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
//enviar video e sticker    
    venom.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
// e dados e arquivo podem ser salvos e baixados        
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
//tipos    
    venom.sendMedia = async (jid, path, quoted, options = {}) => {
	 let { ext, mime, data } = await venom.getFile(path)
	 messageType = mime.split("/")[0]
	 pase = messageType.replace('application', 'document') || messageType
	 return await venom.sendMessage(m.chat, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
    }
//enviar midas
    venom.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}
//força encaminhada
        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await venom.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }
//conversas e contexto
   
    venom.getFile = async (path) => {
        let res
		let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (res = await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
		if (!Buffer.isBuffer(data)) throw new TypeError('resultado')
		let type = await FileType.fromBuffer(data) || {
			mime: 'application/octet-stream',
			ext: '.bin'
		}

		return {
			res,
			...type,
			data
		}
    }

    return venom
}

   // return venom.js
// run in main file (`${dataVenom}`)
startVenom()
//fim da script