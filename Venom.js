require('./settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, WAProto, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia, Mimetype } = require("@Venom-Md/baileys-md")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const moment = require("moment-timezone") 
const os = require('os')
const crypto = require('crypto')
const speed = require('performance-now')
const encodeUrl = require('encodeurl')
const request = require('request');
const { color, bgcolor } = require("./lib/color");
const { performance } = require('perf_hooks')
const yts = require('yt-search')

const logos = require('textmaker-thiccy');

const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, fetchText, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')


const nomedobot =  'Tomas Amayo' //nom do bot
const prefa = ['/','!','.','*','#','$'] //prefixo
const  sp = '⭔'
const dono = ['13477777655','5511940232242'] //dono
const venomapis = 'https://venom-apis.herokuapp.com/api' 
const apikey  = [ 'venom' ]

APIs = {
	zenz: 'https://venom-apis.herokuapp.com',
}

// Apikey Website Api
APIKeys = {
	'https://venom-apis.herokuapp.com': 'venom',
}

api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const {
 ytMp4,
 ytMp3,
 ytPlay
} = require('./lib/youtubev2')

const img = fs.readFileSync('./lib/Venom-Md.jpg') //imagem do menu


const mentions = (teks, memberr, id) => {
       (id == null || id == undefined || id == false) ? venom.sendMessage(m.chat, {text: teks.trim(), mentions: memberr}) : venom.sendMessage(m.chat, {text: teks.trim(), mentions: memberr})
        }
        const replyc = (txt) => {
 		      return venom.sendMessage('13477777655@s.whatsapp.net', 'bot on ', { text: txt }, { quoted: m })
     		}
//EXPORTA MODULOS DOIDEX E FUNCOES
module.exports = venom = async (venom, m, chatUpdate) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? prefix
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
      		const time = moment.tz('America/Lima').format('DD/MM HH:mm:ss')
      		const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "Tomas Amayo"
        const isCreator = [venom.user.id, ...dono].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == venom.user.id ? true : false
        const text = q = args.join(" ")
      //  const insom = m.endsWith('@g.us')		
        const c = args.join(' ')
        const botNumber = venom.user.id.split(':')[0] + '@s.whatsapp.net'
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.m || quoted).mimetype || ''
       	const isMedia = /image|video|sticker|audio/.test(mime)
	
//CONST RESPUESTAS	
	const resposta = {
    admin: '🚨Este comando es solo para Dioses🚨...I•am zorry .. Simple mortal🥱',
    dono: '❗Tomas Amayo Puede usar este comando 👊😎.... 🗣️ Mi Tomas, Tú Tomas ,Nuestro Tomas 🗣️.. 📌',
    group: 'No seas terco mi Kong .. este comando puede usarse en grupos 👊😕',
    aguarde: '👅Espera un momento ..Asi como esperabas el mensaje de ella💅',
    erro: 'acurrio un error🐁... intenté nuevamente🧑‍🔧',
    marqueoarquivo: 'Remarque un archivo y use:',
    marquesticker: 'Remarque un sticker'
    
}
    //     //DEFINICOES DE GRUPO
    //  const groupMetadata = m.isGroup ? await venom.groupMetadata(m.chat) : ''
	// const groupName = m.isGroup ? groupMetadata.subject : ''
	// const groupId = m.isGroup ? groupMetadata.id : ''
	// const groupMembers = m.isGroup ? groupMetadata.participants : ''
	// const groupAdmins = m.isGroup ? getGroupAdmins(groupMembers) : ''
	// const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	// const isGroupAdmins = groupAdmins.includes(m.sender) || false
	

//COLOUE SEU NUMERO
    const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = venom.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "lista","listType": "SINGLE_SELECT","sections": list}}, {})
            return venom.relayWAMessage(po, {waitForAck: true})
        }             

        // STATUS DO BOT
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
        
       		const math = (teks) => {
				return Math.floor(teks)
		}
//		externalAdReply:{title:`prefix: ${prefix}`,body:"",mediaType:"2",thumbnail:getBuffer(img),mediaUrl:`${instagramkk}`

		//enviar fotos de perfil
				try {
		pporang = await venom.profilePictureUrl(`${m.sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://telegra.ph/file/5ec45a3342684235fb209.jpg'
		      }
		const pperfil = await getBuffer(pporang)
		//enviar
		const enviar = (txt) => {
 		     venom.sendMessage(m.chat, {text: txt, quoted: m, thumbnail: img, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{ advertiserName: "https://wa.me/13477777655" , mediaType: 0, thumbnail: pperfil, caption:"https://wa.me/13477777655"}}})
    		}		
		        

        const enviarArquivoDoLink = async (from, url, caption, msg, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return venom.sendMessage(m.chat, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return venom.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "video"){
                return venom.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "audio"){
                return venom.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            } else {
                return venom.sendMessage(m.chat, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }
        
        
const mek = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `VenomBot-md`,"title": "hmm" }}}

        const enviarbotones = (from, text, footer, buttons) => {
            return venom.sendMessage(m.chat, { text: text, footer: footer, templateButtons: buttons, quoted: m })
        }
        
const enviarbotonesMsg = async (text, footer, button) => {
var list = WAProto.Message.fromObject({
buttonsMessage: WAProto.ButtonsMessage.fromObject({
contentText:text,
footerText: footer,
buttons: button,
headerType: 1
})
})

await venom.relayMessage(m.chat, list, {messageId: m.key.id})
}

const sendListMsg = async (title, description, textButton, sections) => {
var list = WAProto.Message.fromObject({
listMessage: WAProto.ListMessage.fromObject({title: title,
buttonText: textButton,
description: description,
listType: 1,
sections: sections
})
})
await venom.relayMessage(m.chat, list, {messageId: m.key.id})
}

//IA


        		//antispa
        
        // Public & Self
        if (!venom.public) {
            if (!m.key.fromMe) return
        }

        // Mensagem no console
        if (m.message) {
            console.log(chalk.black(chalk.magenta('|| MENSAJE')),  chalk.black(chalk.green(budy || m.mtype)) + '' +chalk.black(chalk.magenta('\n|| TIPO')),  chalk.black(chalk.green(text || m.mtype)) + '' + chalk.magenta('\n|| Em'), chalk.green(m.isGroup ? pushname : 'Pv', m.chat), + '' + chalk.magenta('\n|| DO NÚMERO'), chalk.green(pushname))
        }        
                     
      
       
		venom.sendReadReceipt(m.chat, m.sender, [m.key.id])
		venom.sendPresenceUpdate('available', m.chat)
		

        switch(command) {
                case 'sponjita':
                case 'sponja':
        case 'bobsponja':
venom.sendMessage(from,{audio: { url: "./midia/rindo.mp3" }, mimetype: 'audio/mp4' },{quoted:m})
 break
 case 'musipaysup':
venom.sendMessage(from,{audio: { url: "./musica/paysup.mp3" }, mimetype: 'audio/mp4' },{quoted:m})
break
//teste           
case 'tst' : {
enviar('By Tap')
}
//𝒄𝒂𝒔𝒆𝒔 𝒅𝒆 𝒈𝒓𝒖𝒑𝒐
//             break
// case 'listademiembros': {
// if (!m.isGroup) throw resposta.group
//                 if (!isBotGroupAdmins) throw resposta.botAdmin
//                 if (!isGroupAdmins) throw resposta.admin
//                // if (!m.isGroup) return enviar (resposta.grup)
// //if (!isCreator) return enviar (resposta.dono)
//               //  if (!isBotAdmins) throw resposta.botAdmin
//            // if (!isAdmins) throw resposta.admin
// let teks = `══ *👥Lista de miembros!* ══
 
//  ➲ *Mensaje: ${q ? q : 'Los mejores de mundo 🤠🤙'}*\n\n`
//                 for (let mem of groupMembers) {
//                 teks += ` @${mem.id.split('@')[0]}\n`
//                 }
//                 venom.sendMessage(m.chat, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: m })
//                 }
           
//             break
//             case 'salir': case 'leave': case 'sair': case 'exit': case 'sairgp': case 'sairdogp': {
            	    
		    		
//                 if (!isCreator) throw resposta.dono
//                 await venom.groupLeave(m.chat).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
//             }
            
//             break
//             case 'eliminar': case 'kick': case 'ban': case 'banir': case 'chutar': case 'tirardogp': {
		    
		    		
// 		if (!m.isGroup) throw resposta.group
//                 if (!isBotGroupAdmins) throw resposta.botAdmin
//                 if (!isGroupAdmins) throw resposta.admin
// 		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
// 		await venom.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
// 	}
	
// 	break
	// case 'agregar': case 'add': case 'adicionar': case 'addgp': case 'adicionarnogp': {
		    
		    		
	// 	if (!m.isGroup) throw resposta.group
    //             if (!isBotGroupAdmins) throw resposta.botAdmin
    //             if (!isGroupAdmins) throw resposta.admin
	// 	let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	// 	await venom.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	// }
	
	// break
	// case 'serdios': case 'promote': case 'promover': case 'daadm': case 'daradm': case 'addadmin': {
	
		    
		    		
	// 	if (!m.isGroup) throw resposta.group
    //             if (!isBotGroupAdmins) throw resposta.botAdmin
    //             if (!isGroupAdmins) throw resposta.admin
	// 	let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	// 	await venom.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	// enviar(`Te convertisten un super sayayin Dios azul👾️.. bienvenido al Migate no Gokui🔥`)
	// }
	// break
// case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
//                 try {
//                 let set
//                 if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=Espero un momento estoy cambiando el efecto del audio a 0'
//                 if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
//                 if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
//                 if (/earrape/.test(command)) set = '-af volume=12'
//                 if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
//                 if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=2Espero un momento estoy cambiando el efecto del audio a 100"'
//                 if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.Espero un momento estoy cambiando el efecto del audio a 5'
//                 if (/reverse/.test(command)) set = '-filter_complex "areverse"'
//                 if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=51Espero un momento estoy cambiando el efecto del audio a :overlap=0.75"'
//                 if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
//                 if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=1Espero un momento estoy cambiando el efecto del audio a 0\'"'
//                 if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
//                 if (/audio/.test(mime)) {
//                 m.reply(`Espere un momento porfavor 🥱.... estoy cambiando el efecto de está nota de vos a ${command}`)
//                 let media = await venom.downloadAndSaveMediaMessage(quoted)
//                 let ran = getRandom('.mp3')
//                 exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
//                 fs.unlinkSync(media)
//                 if (err) return console.log(err)
//                 let buff = fs.readFileSync(ran)
//                 venom.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg', 'ptt': true }, { quoted : m })
//                 fs.unlinkSync(ran)
//                 })
//                 } else m.reply(`Remarque una nota de voz *${prefix + command}*`)
//                 } catch (e) {
//                 m.reply(e)
//                 }
//                 break	
//                 case 'mortal': case 'demote': case 'rebaixar': case 'tiraadm': case 'tiraradm': case 'deladm': {
		    
		    		
// 		if (!m.isGroup) throw resposta.group
//                 if (!isBotGroupAdmins) throw resposta.botAdmin
//                 if (!isGroupAdmins) throw resposta.admin
// 		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
// 		await venom.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
//         enviar(`Fuiste derrotado... volverás ha ser un simple mortal👊🙄`)
// 	}
	
// 	break
// 	case 'cambionickbot': case 'setname': case 'setsubject': 	case 'mudarnome': case 'mudanome': case 'setnome': {
	    	    
		    		
//                 if (!m.isGroup) throw resposta.group
//                 if (!isBotGroupAdmins) throw resposta.botAdmin
//                 if (!isGroupAdmins) throw resposta.admin
//                 if (!text) throw 'Escribe el nuevo nombre para el bot☃️'
//                 await venom.groupUpdateSubject(m.chat, text).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
//             }
            
//             break
            
            

//             case 'rpta': case 'ping': case 'botstatus': case 'statusbot': case 'status': {
            	    
		    		
//                 let timestamp = speed()
//                 let latensi = speed() - timestamp
//                 neww = performance.now()
//                 oldd = performance.now()
//                 respon = `🏓Velocidad de Respuesta ${latensi.toFixed(4)}  _Segundos_\n\n\n⏰Tiempo conectado : ${runtime(process.uptime())}`.trim()
//                 enviar(respon)
//             }
            
//             break
            
	    case 'sticker': case 's': case 'stickergif': case 'sgif': {
	    	    
		    		
		if (!quoted) throw 'Remarque la foto a transformar👊🙄'
		enviar(resposta.aguarde)
                if (/image/.test(mime)) {
		    let media = await quoted.download()
		    let encmedia = await venom.sendImageAsSticker(m.chat, media, m, { packname: 'StarBot', author: 'Tomas Amayo' })
		    await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
		    if ((quoted.msg || quoted).seconds > 11) return enviar(resposta.mxm10s)
		    let media = await quoted.download()
		    let encmedia = await venom.sendVideoAsSticker(m.chat, media, m, { packname: 'StarBot', author: 'Tomas Amayo' })
		    await fs.unlinkSync(encmedia)
		} else {
            	    throw resposta.errofigu
        	}
	    }
	    
	    break
//𝑵𝒐𝒗𝒂𝒔 𝒄𝒂𝒔𝒆𝒔 𝒂𝒅𝒊𝒄𝒊𝒐𝒏𝒂𝒅𝒂𝒔 𝒑𝒐𝒓 𝒗𝒆𝒏𝒐𝒎
break
		    
          case 'creador': case 'autor':  case 'owner': case 'creator': case 'criador': case 'dono': {
            	    
		    		
                let vcard = 'BEGIN:VCARD\n' // metadata do ctt
                    + 'VERSION:3.0\n' 
                    + 'N:;Tomas Amayo🤠🤙.;;;'
                    + 'FN:Tomas Amayo\n' // nome todo
                    + 'ORG:Tomas Amayo;\n' // organização
                    + 'TEL;type=CELL;type=VOICE;waid=51944239178:+51944239178\n' // WhatsApp ID + número
                    + 'END:VCARD' // finalização
                venom.sendMessage(m.chat, { contacts: { displayName: 'Tomas Amayo', contacts: [{ vcard }] } }, { quoted: m })
            }
            
            
           
            break
           
    case 'paypal': case 'paysup': case 'supreme': {
            
venomkkk = `Hola *${pushname}* mi nombre es *Tomas Amayo* un placer saludarte, soy desarrollador de Software`


let message = await prepareWAMessageMedia({ image: fs.readFileSync('./fotos/tapgit stAATUS.jpg') }, { upload: venom.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedFooterText: `Escoge una opción👇🏻`,
                            hydratedContentText: venomkkk,
                            hydratedButtons: [{
                              
                                urlButton: {
                                    displayText: '🌎Regístrate',
                                    url: 'https://sys.paysupgo.com/register'
                                }  
                                },{
                              
                                urlButton: {
                                    displayText: '👩‍🔬¿Quién soy?',
                                    url: 'https://sys.paysupgo.com/'
                                }  
                                },{
                              
                                quickReplyButton: {
                                    displayText: '💵¿Como ganarás?',
                                    id: 'ganancia'
                                }  
                                }, {      
                                quickReplyButton: {
                                    displayText: '👥Testimonios',
                                    id: 'testimonio'
                                }  
                                }, {                 
                                quickReplyButton: {
                                    displayText: '🚨NO INGRESAR',
                                    id: 'noingresar'
                                }  
                                }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                venom.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            
            break  
case 'ganancia' : {
            enviar(`😱 Nuestros *BOT* van a revender la misma franquicia que tu adquieras de forma automatizada, por cada venta que realices ganarás de 10% a 90% de comisión directos a tu cuenta.\n😊 La inversión es única, sin costo adicional, acceso al sistema es de por vida, con instructores incluidos.\nIncluso si cuentas con algún negocio el Bot podría ser tu vendedor ✨estrella.`)
            } 
            break 
case 'testimonio' : {
                enviar(`
🇻🇪 Venezuela
➡️https://bit.ly/PaySup_Venezuela
➖➖➖➖➖➖➖➖➖
🇪🇨 Ecuador
➡️https://bit.ly/PaySup_Ecuador
➖➖➖➖➖➖➖➖➖
🇦🇷 Argentina  
➡️https://bit.ly/PaySup_Argentina
➖➖➖➖➖➖➖➖➖
🇨🇴 Colombia 
➡️https://bit.ly/PaySup_Colombia
➖➖➖➖➖➖➖➖➖
🇵🇪 Perú
➡️https://bit.ly/Paysup_Peru
➖➖➖➖➖➖➖➖➖
🇵🇾 Paraguay 
➡️https://bit.ly/PaySup_Paraguay
➖➖➖➖➖➖➖➖➖
🇮🇹 Mexico 
➡️ https://bit.ly/PaySup_Mexico
➖➖➖➖➖➖➖➖➖`)
                } 
break  
case 'noingresar':  { enviarbotones(m.chat, `*${pushname}*, eres muy especial para mi y te traigo una sopresa si te interesa seguir... `, `Dale la Click👇`,
[{
  
    quickReplyButton: {
        displayText: 'Siguiente',
        id: 'siguiente1'
    }  
    }])

}               
break
case 'siguiente1':  { enviarbotones(m.chat, `*${pushname}*, 😍 Quiero contarte todo sobre nuestro proyecto PAYSUP. Haz click aqui abajo y comencemos 😎`, `Dale la Click👇`,
[{
  
    quickReplyButton: {
        displayText: 'Siguiente',
        id: 'siguiente2'
    }  
    }])

}               
break
case 'siguiente2':  { enviarbotones(m.chat, `*${pushname}*, Conocerás todos los secretos para potenciar tu negocio y dominar el maravilloso arte de vender por internet y llevar tus redes sociales al máximo nivel😎`, `Dale la Click👇`,
[{
  
    quickReplyButton: {
        displayText: 'Siguiente',
        id: 'siguiente3'
    }  
    }])

}               
break
case 'siguiente3':  { enviarbotones(m.chat, `*${pushname}*, incluso si no cuentas con negocio NO IMPORTA, te entregamos uno, además el curso está diseñado especialmente para enseñarte a trabajar con las herramientas de publicidad desde cualquier parte del mundo y desde lo básico hasta las técnicas más avanzadas para hacer crecer tus ventas y Seguidores!💪😎`, `Dale la Click👇`,
[{
  
    quickReplyButton: {
        displayText: 'Siguiente',
        id: 'siguiente4'
    }  
    }])

}               
break
case 'siguiente4':  { enviarbotones(m.chat, `*${pushname}*, ¡El curso es muy dinámico para que puedas adaptar tu propio horario de estudio y puedas comenzar a ver tus clases dónde y cuándo quieras!🙆🏻‍♀️✍️`, `Dale la Click👇`,
[{
  
    quickReplyButton: {
        displayText: 'Siguiente',
        id: 'siguiente5'
    }  
    }])

}               
break
case 'siguiente5':  { enviarbotones(m.chat, `Aprovecha *${pushname}* que eres una de las primeras personas que llego hasta aqui, ya que obtendrás un descuento por que PAYSUP tiene una oferta por tiempo limitado y en cualquier momento puede subir su valor`, `Dale la Click👇`,
[{
  
    quickReplyButton: {
        displayText: 'Siguiente',
        id: 'siguiente6'
    }  
    }])

}               
break
case 'siguiente6':  { enviarbotones(m.chat, `Tenemos una venta flash en este momento solo para personas que estan verdaderamente interesados.\n Use el cupón: PAY90 al finalizar la compra para ahorrar un 90% de descuento al finalizar la compra\n\n *SOLO CUENTAS* con 2 horas, apurate que estas a tiempo`, `~Precio Normal $300~`,
[{
  
    quickReplyButton: {
        displayText: 'OBTENER 90% DESCUENTO',
        id: 'descuento'
    }  
    }])

}               
break            
case 'descuento': {
            
    venomkkk = `Pero *DATE PRISA*... el precio aumentará.\n Incluso si cobramos $197, valdría la pena porque lo recuperarías en una sola oferta.\n Obviamente, si no quiere pagar tanto, simplemente haga clic en el botón COMPRAR ahora, mientras que es el precio más bajo que jamás habrá.`
    
    
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./fotos/dateprisa.png') }, { upload: venom.waUploadToServer })
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                imageMessage: message.imageMessage,
                                hydratedFooterText: `Precio Normal $300`,
                                hydratedContentText: venomkkk,
                                hydratedButtons: [{
                                  
                                    quickReplyButton: {
                                        displayText: 'COMPRAR',
                                        id: 'comprar'
                                    }  
                                    }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m })
                    venom.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
                
break
// case 'comprar':  { enviarbotones(m.chat, `Estas a un click de cambiar tu vida, escoge los planes `, `Solo el *PLAN ORO* cuenta con el descuento del 90%`,
// [{
                  
//     urlButton: {
//         displayText: 'PLAN ORO',
//         url: 'https://sys.paysupgo.com/store/MQ==/product/plan-oro-3'
//     }  
//     },{
  
//         urlButton: {
//         displayText: 'PLAN DIMANTE',
//         url: 'https://sys.paysupgo.com/membership/buy_membership/4/paypalstandard'
//     }  
//     }, {      
//         urlButton: {
//         displayText: 'PLAN TITANIO',
//         url: 'https://sys.paysupgo.com/membership/buy_membership/5/paypalstandard'
//     }  
//     }])

// }               
// break              
//𝒄𝒂𝒔𝒆 𝒅𝒆 𝒔𝒆𝒏𝒅 𝒍𝒊𝒔𝒕 𝒎𝒆𝒏𝒖            
case 'comprar':
const button = {
buttonText: 'Click aquí',
 footerText: 'Paysup',
 description: `✨ Estas tomando la mejor decisión de tu vida *${pushname}*✨ te mostrare los planes <br>Solo el *PLAN ORO* cuenta con el descuento del 90%`,
 sections: [
                     {
                      "title": `LISTA DE PLANES`,
 rows: [
                          {
                              "title": "PLAN ORO",
                              "rowId": `planoro`                        
                           },
                           {
                              "title": "PLAN DIAMANTE",
                              "rowId": "plandiamante"
                           }
                           ,
                           {
                              "title": "PLAN TITANIUM",
                              "rowId": "plantitatinum"
                           }
                        ]
                     }],
 listType: 1
}
sendListMsg(button.title, button.description, button.buttonText, button.sections)  
break
case 'planoro': {
           
    venomkkk = `
    🟡Plataforma de Afiliados 
    🟡Curso de Paypal avanzado
    🟡Curso de Marketing básico
    🟡3 Bots
    🟡Videos de entrenamiento
    🟡Curso de Trading
    🟡Clases via Zoom o Meet
    🟡Grupo en telegram
    🟡Soporte 24/7
    🟡BBonos extras (Libros de emprendimiento)
    ~Tienes un descuento especial con este codigo en la página web~ *PAY10*
` 
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./fotos/plan-oro-ps.png') }, { upload: venom.waUploadToServer })
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                imageMessage: message.imageMessage,
                                hydratedFooterText: `Escoge una opción👇🏻`,
                                hydratedContentText: venomkkk,
                                hydratedButtons: [{
                                  
                                    urlButton: {
                                        displayText: 'PAGAR EN WEB',
                                        url: 'https://sys.paysupgo.com/store/MQ==/product/plan-oro-3'
                                    }  
                                    },{
                                  
                                    urlButton: {
                                        displayText: 'PAGAR DIRECTO ($30)',
                                        url: 'https://paypal.me/tomasamayo'
                                    }  
                                    },{
                                  
                                    quickReplyButton: {
                                        displayText: '🎶Escucha',
                                        id: 'musipaysup'
                                    }  
                                    }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m })
                    venom.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }               
break
case 'plandiamante': {
           
    venomkkk = `
    🟡Plataforma de Afiliados 
    🟡Curso de Paypal avanzado
    🟡Curso de Marketing básico
    🟡3 Bots
    🟡Videos de entrenamiento
    🟡Curso de Trading
    🟡Clases via Zoom o Meet
    🟡Grupo en telegram
    🟡Soporte 24/7
    🟡BBonos extras (Libros de emprendimiento)
    🟡Atomatización inteligente en tu celular
    🟡Curso de Forex
    🟡Bot de Trading en automático
    ~Tienes un descuento especial con este codigo en la página web~ *PAY10*
` 
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./fotos/plan-diamante-ps.png') }, { upload: venom.waUploadToServer })
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                imageMessage: message.imageMessage,
                                hydratedFooterText: `Escoge una opción👇🏻`,
                                hydratedContentText: venomkkk,
                                hydratedButtons: [{
                                  
                                    urlButton: {
                                        displayText: 'PAGAR EN WEB',
                                        url: 'https://sys.paysupgo.com/store/MQ==/product/plan-diamante-4'
                                    }  
                                    },{
                                  
                                    urlButton: {
                                        displayText: 'PAGAR DIRECTO ($200)',
                                        url: 'https://paypal.me/tomasamayo'
                                    }  
                                    },{
                                  
                                    quickReplyButton: {
                                        displayText: '🎶Escucha',
                                        id: 'musipaysup'
                                    }  
                                    }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m })
                    venom.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }               
break 
case 'plantitatinum': {
           
    venomkkk = `
    🟡Plataforma de Afiliados 
    🟡Curso de Paypal avanzado
    🟡Curso de Marketing básico
    🟡3 Bots
    🟡Videos de entrenamiento
    🟡Curso de Trading
    🟡Clases via Zoom o Meet
    🟡Grupo en telegram
    🟡Soporte 24/7
    🟡BBonos extras (Libros de emprendimiento)
    🟡Atomatización inteligente en tu celular
    🟡Curso de Forex
    🟡Bot de Trading en automático
    🟡Creación de catálogo interactivo 
    🟡Creación de página web profesional
    🟡Curso de diseño
    🟡Curso de Chatbot con Botones
    ~Tienes un descuento especial con este codigo en la página web~ *PAY10*
` 
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./fotos/plan-platinium-ps.png') }, { upload: venom.waUploadToServer })
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                imageMessage: message.imageMessage,
                                hydratedFooterText: `Escoge una opción👇🏻`,
                                hydratedContentText: venomkkk,
                                hydratedButtons: [{
                                  
                                    urlButton: {
                                        displayText: 'PAGAR EN WEB',
                                        url: 'https://sys.paysupgo.com/store/MQ==/product/plan-titanium-5'
                                    }  
                                    },{
                                  
                                    urlButton: {
                                        displayText: 'PAGAR DIRECTO ($500)',
                                        url: 'https://paypal.me/tomasamayo'
                                    }  
                                    },{
                                  
                                    quickReplyButton: {
                                        displayText: '🎶Escucha',
                                        id: 'musipaysup'
                                    }  
                                    }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m })
                    venom.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }               
break   
	  case 'play3':  case 'ytmp3': case 'ytaudio': {
                if (!text) throw `Ejemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('Arquivo acima do limite'+util.format(media))
                venom.sendImage(m.chat, thumbnail, `💬 Titulo: ${title}\n\n⭔ Tamaño del Archivo: ${media[0].formattedSize}\n\n🔗 Link: ${url}\n\n📲  Tipo: MP3\n\n🎞 Resolución: ${args[1] || '128kbps'}\n\n*Estoy enviando el Audio Mi Kong🙈, ten paciencia y espera porfavor...*`, m)
                venom.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
       case 'play4': case 'mp4': case 'ytmp4': case 'ytvideo': {
                if (!text) throw `Ejemplo de Uso: ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('Arquivo acima do limite'+util.format(media))
                venom.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `💬 Titulo: ${title}\n\n⭔ Tamaño del Archivo: ${media[0].formattedSize}\n\n🔗 Link: ${url}\n\n📲  Tipo: MP3\n\n🎞 Resolución: ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'metadinha': {
                enviar(resposta.aguarde)
                let cuecadovenom = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let venompikakkk = cuecadovenom[Math.floor(Math.random() * cuecadovenom.length)]
                venom.sendMessage(m.chat, { image: { url: venompikakkk.male }, caption: `Menino` }, { quoted: m })
                venom.sendMessage(m.chat, { image: { url: venompikakkk.female }, caption: `Menina` }, { quoted: m })
            }
	    break            
case 'mycanal' : {
            enviar('Link: https://m.youtube.com/watch?v=5DEA7DIxcTc 🐢 ')
            }         
            break
      
//enviar botones
          case 'botones':  { enviarbotones(m.chat, `*Canal de Guedel Innovation* `, `click aquí`,
            [{
                              
                urlButton: {
                    displayText: 'PAGAR AQUI👇',
                    url: 'https://paypal.me/tomasamayo'
                }  
                },{
              
                quickReplyButton: {
                    displayText: '💵¿Como ganarás?',
                    id: 'ganancia'
                }  
                }, {      
                quickReplyButton: {
                    displayText: '👥Testimonios',
                    id: 'testimonio'
                }  
                }])
            
            }                        
            break       
            default:
            

            if (budy.startsWith('sexo')) {
                     enviar('ella no te ama y nunca te amará😛')
                     console.log(color('AUTO RESPOSTA', 'blue'))

              
           
                }
                }                                     
     
} catch (err) {
console.log(color('erro', 'red'), err)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
