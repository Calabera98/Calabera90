import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `_🥵 Pack 🥵_`, author, url, [['◀️𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴▶️', `/${command}`]], m)
}
handler.help = ['pack']
handler.tags = ['internet']
handler.command = /^(pack)$/i
export default handler

global.pack = [
  "https://imgur.com/G2e6Tew.jpg",
  "https://imgur.com/My7J7PD.jpg",
  "https://imgur.com/nDC6CcC.jpg",
  "https://imgur.com/DhPvgTq.jpg",
  "https://imgur.com/uALV4Qg.jpg",
  "https://imgur.com/Z2WyasY.jpg",
  "https://imgur.com/0qCSC5L.jpg",
  "https://imgur.com/DXZnZGi.jpg",
  "https://imgur.com/qF3Slew.jpg",
  "https://imgur.com/fG1P11s.jpg",
  "https://imgur.com/cHNX0JV.jpg",
  "https://imgur.com/oAdNTqx.jpg",
  "https://imgur.com/cYbzeOB.jpg",
  "https://imgur.com/5rtNyHY.jpg",
  "https://imgur.com/Mz8ZchC.jpg",
  "https://imgur.com/PHKeBLY.jpg",
  "https://imgur.com/LFd94JU.jpg",
  "https://imgur.com/ABLinrM.jpg",
  "https://i.imgur.com/XbW7FO2.jpg",
  "https://i.imgur.com/ciuzM98.jpg",
  "https://i.imgur.com/uHsrrrx.jpg",
  "https://i.imgur.com/PVi8YDi.jpg",
  "https://i.imgur.com/FLC3ZXE.jpg",
  "https://i.imgur.com/54m52tX.jpg",
  "https://i.imgur.com/OsxYPgQ.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/zdHVFEI.jpg",
  "https://i.imgur.com/kAplnSG.jpg",
  "https://i.imgur.com/15UiO8o.jpg",
  "https://i.imgur.com/qjjyr6G.jpg",
  "https://i.imgur.com/bQZRhBU.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/0MhmmF4.jpg",
  "https://i.imgur.com/2MX4wvq.jpg",
  "https://i.imgur.com/HYL5ggu.jpg",
  "https://i.imgur.com/7ZjOD2a.jpg",
  "https://i.imgur.com/zbEUy3m.jpg",
  "https://i.imgur.com/tZ6vlg6.jpg",
  "https://i.imgur.com/jdPns8O.jpg",
  "https://i.imgur.com/VyjBQHT.jpg",
  "https://i.imgur.com/ozAGqBD.jpg",
  "https://i.imgur.com/DsSj9S1.jpg",
  "https://i.imgur.com/KYHpjNc.jpg"
]
