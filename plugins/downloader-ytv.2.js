import{youtubedl,youtubedlv2}from'@bochilteam/scraper';import _0xc5508e from'node-fetch';let handler=async(_0x18982f,{conn:_0x46513f,args:_0x589480})=>{let _0x4e5ae2={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x18982f['sender']['split']('@')[0x0]+':'+_0x18982f['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};if(!_0x589480)return _0x46513f['reply'](_0x18982f['chat'],'[❗]\x20enter\x20a\x20YouTube\x20link\x20to\x20download\x20a\x20video',_0x4e5ae2,_0x18982f);await _0x46513f['reply'](_0x18982f['chat'],'⌛\x20_Cargando..._\x0a▰▰▰▱▱▱▱▱▱',_0x4e5ae2,_0x18982f);try{let _0x490f2b=_0x589480[0x1]||'360',_0x3a9cf4=_0x490f2b+'p',_0x1d6a46=_0x589480[0x0];const _0x131289=await youtubedl(_0x1d6a46)['catch'](async _0x5be79c=>await youtubedlv2(_0x1d6a46))['catch'](async _0x465274=>await youtubedlv3(_0x1d6a46)),_0x2c69ef=await _0x131289['video'][_0x3a9cf4]['download'](),_0x506a11=await _0x131289['title'],_0x3b2143=await _0x131289['video'][_0x3a9cf4]['fileSizeH'];let _0xe05360=('乂✰\x20qualification\x20'+_0x506a11+'ღ\x0a\x0a乂✰\x20weight\x20'+_0x3b2143+'ღ')['trim']();await await _0x46513f['sendMessage'](_0x18982f['chat'],{'document':{'url':_0x2c69ef},'caption':_0xe05360,'mimetype':'video/mpeg','fileName':_0x506a11+'.mp4'},{'quoted':_0x18982f});}catch{try{let _0x5ea924=await _0xc5508e('https://api.lolhuman.xyz/api/ytvideo2?apikey='+lolkeysapi+'&url='+_0x589480[0x0]),_0x4c8002=await _0x5ea924['json'](),_0x34bceb=_0x4c8002['result']['title']||'error',_0x16ddc2=_0x4c8002['result']['link'],_0x11ab9f=_0x4c8002['result']['size'],_0x5a4f65=('乂✰\x20qualification\x20'+_0x34bceb+'ღ\x0a\x0a乂✰\x20weight\x20'+_0x11ab9f+'ღ')['trim']();await _0x46513f['sendMessage'](_0x18982f['chat'],{'document':{'url':_0x16ddc2},'caption':_0x5a4f65,'mimetype':'video/mpeg','fileName':_0x34bceb+'.mp4'},{'quoted':_0x18982f});}catch{await _0x46513f['reply'](_0x18982f['chat'],'❌an\x20error\x20occurred\x20try\x20again\x20❌',_0x18982f);}}};handler['command']=/^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i,handler['register']=!![],handler['premium']=!![];export default handler;