/*
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
注册地址：https://shanxixincensm.com/#/register
需要实名认证后绑定支付宝
gmPhone:手机号#密码
export gmPhone='手机号#密码'
boxjs地址:https://gitee.com/gossh520/script/raw/master/byxiaopeng.boxjs.json
*/
// [task_local]
//#国迈
// 10 8,20 * * * https://gitee.com/gossh520/script/raw/master/gmapp.js, tag=国迈, enabled=true
const _0x120bde=_0x5b6d,_0x189f8f=_0xe007;(function(_0x2afd8f,_0x12f69f){const _0x463262=_0x5b6d,_0x2c6f48=_0xe007,_0x1119dc=_0x2afd8f();while(!![]){try{const _0x5ef413=-parseInt(_0x2c6f48(0x176,'uEFB'))/0x1+parseInt(_0x463262(0x12d))/0x2+parseInt(_0x463262(0x105))/0x3*(parseInt(_0x2c6f48(0x151,'uuWb'))/0x4)+-parseInt(_0x2c6f48(0xf7,'@id#'))/0x5+-parseInt(_0x463262(0x156))/0x6*(-parseInt(_0x463262(0x149))/0x7)+-parseInt(_0x2c6f48(0x192,'aQ**'))/0x8*(-parseInt(_0x463262(0x194))/0x9)+-parseInt(_0x2c6f48(0x1d6,'kJEC'))/0xa;if(_0x5ef413===_0x12f69f)break;else _0x1119dc['push'](_0x1119dc['shift']());}catch(_0x428f27){_0x1119dc['push'](_0x1119dc['shift']());}}}(_0x21f1,0xe9989));const $=new Env('国迈APP签到'),notify=$[_0x189f8f(0xef,'wrd9')]()?require('./sendNotify'):'';let status;status=(status=$['getval'](_0x189f8f(0x22b,'JUjD'))||'1')>0x1?''+status:'';let gmPhoneArr=[],gmPhone=$['isNode']()?process[_0x120bde(0x220)]['gmPhone']?process[_0x189f8f(0x197,'sw&Y')]['gmPhone']:'':$[_0x189f8f(0x11a,'uuWb')](_0x120bde(0x213))?$['getdata'](_0x189f8f(0x22f,'oN27')):'',gmPhones='',DD=RT(0x1388,0x2710),tz=$['getval']('gmtz')||'1',host=_0x189f8f(0x1fa,'oN27');$[_0x189f8f(0x249,'p!2F')]='',!(async()=>{const _0xfd0b69=_0x120bde,_0x537401=_0x189f8f;if(typeof $request!=='undefined'){}else{if(!$[_0x537401(0x115,'ZA2u')]()){gmPhoneArr[_0x537401(0x180,'SS$y')]($[_0x537401(0x14f,')puP')](_0x537401(0x114,'aN6W')));let _0x8ba822=$[_0x537401(0x221,'sw&Y')]('gmcount')||'1';for(let _0x5620c7=0x2;_0x5620c7<=qxcount;_0x5620c7++){gmPhoneArr['push']($[_0xfd0b69(0x14b)]('gmPhone'+_0x5620c7));}!gmPhoneArr[0x0]?($[_0xfd0b69(0x1ab)](_0x537401(0x1a0,'5DP#')),$[_0x537401(0x11e,'wrd9')]+='\x0a【傻吊提示】：你没有填写账户密码跑个嘚'):console['log']('-------------共'+gmPhoneArr['length']+_0x537401(0x200,'^jj%'));for(let _0x560533=0x0;_0x560533<gmPhoneArr['length'];_0x560533++){gmPhoneArr[_0x560533]&&(gmPhone=gmPhoneArr[_0x560533],$[_0xfd0b69(0x233)]=_0x560533+0x1,console[_0xfd0b69(0x1ab)](_0xfd0b69(0x18e)+$[_0xfd0b69(0x233)]+'】'),zhanghu=gmPhone[_0xfd0b69(0x23c)]('#'),user=zhanghu[0x0],mima=zhanghu[0x1],await byxiaopeng());}}else{process[_0x537401(0x17d,'ogU^')][_0xfd0b69(0x213)]&&process[_0x537401(0x197,'sw&Y')][_0xfd0b69(0x213)][_0xfd0b69(0x1d1)]('@')>-0x1?(gmPhoneArr=process['env']['gmPhone'][_0x537401(0x232,'3Ltz')]('@'),console[_0xfd0b69(0x1ab)]('您选择的是用\x22@\x22隔开\x0a')):gmPhones=[process[_0xfd0b69(0x220)][_0xfd0b69(0x213)]];;Object[_0x537401(0x208,')wyq')](gmPhones)['forEach'](_0x13c99a=>{const _0x76cd2c=_0x537401;gmPhones[_0x13c99a]&&gmPhoneArr[_0x76cd2c(0x13f,'wrd9')](gmPhones[_0x13c99a]);});!gmPhoneArr[0x0]?($['log']('\x0a【傻吊提示】：你没有填写账户密码跑个嘚'),$[_0xfd0b69(0x1fd)]+='\x0a【傻吊提示】：你没有填写账户密码跑个嘚'):console[_0x537401(0x1f7,'oN27')](_0xfd0b69(0x1bd)+gmPhoneArr[_0x537401(0x1b2,'sdtV')]+_0xfd0b69(0x1cf));for(let _0x85bb81=0x0;_0x85bb81<gmPhoneArr[_0xfd0b69(0x1db)];_0x85bb81++){gmPhone=gmPhoneArr[_0x85bb81],$[_0xfd0b69(0x233)]=_0x85bb81+0x1,console[_0xfd0b69(0x1ab)](_0xfd0b69(0x18e)+$['index']+'】'),zhanghu=gmPhone[_0x537401(0x190,'5OCb')]('#'),user=zhanghu[0x0],mima=zhanghu[0x1],await byxiaopeng();}}}message();})()['catch'](_0x599a3f=>$[_0x120bde(0x182)](_0x599a3f))['finally'](()=>$[_0x120bde(0x1c1)]());async function byxiaopeng(){await panduan();}function panduan(_0x27b315=0x0){return new Promise(_0x2933e8=>{const _0x41e772=_0xe007;let _0x4f7cd6={'url':_0x41e772(0x1aa,'tl3d'),'headers':{'Accept':_0x41e772(0x1b9,'p!2F'),'user-agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2011_0\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/604.1.38\x20(KHTML,\x20like\x20Gecko)\x20Version/11.0\x20Mobile/15A372\x20Safari/604.1'}};$['get'](_0x4f7cd6,async(_0xfcd0f5,_0x2ced45,_0x457a8f)=>{const _0x58a862=_0x5b6d,_0x5f098a=_0x41e772;try{result=JSON[_0x5f098a(0x224,'JUjD')](_0x457a8f),result['code']==0x1?($['log'](_0x5f098a(0x18d,'sw&Y')+result[_0x5f098a(0x10f,'*WtC')]),$[_0x5f098a(0x17e,'WG3]')]+='\x0a【脚本状态】：'+result[_0x58a862(0x106)],await dutang(),await $['wait'](0x3e8),await login()):($[_0x5f098a(0x205,'oAGR')](_0x5f098a(0x12f,'ia2T')+result[_0x5f098a(0x217,'5OCb')]),$[_0x58a862(0x1fd)]+=_0x58a862(0x1bb)+result[_0x5f098a(0x195,'oAGR')]);}catch(_0x25bf7a){$['logErr'](_0x25bf7a,_0x2ced45);}finally{_0x2933e8();}},_0x27b315);});}function dutang(_0x367b8e=0x0){return new Promise(_0x54d10e=>{const _0x1da365=_0x5b6d,_0x3cf60e=_0xe007;let _0x5de318={'url':_0x3cf60e(0x17a,'zojN'),'headers':{'Accept':_0x3cf60e(0x120,'z0gb'),'user-agent':_0x3cf60e(0x20a,'sdtV')}};$[_0x1da365(0x1e3)](_0x5de318,async(_0x346c37,_0x7aa75d,_0x498d0a)=>{const _0x101ef2=_0x3cf60e,_0x487f5b=_0x1da365;try{result=_0x498d0a,result[_0x487f5b(0x1db)]!=0x0&&($[_0x101ef2(0x1a2,'aN6W')](_0x487f5b(0x1ff)+result),$[_0x101ef2(0x111,'tl3d')]+=_0x487f5b(0x1ff)+result);}catch(_0x195bc3){$[_0x487f5b(0x182)](_0x195bc3,_0x7aa75d);}finally{_0x54d10e();}},_0x367b8e);});}function login(_0x4b5b6a=0x0){return new Promise(_0x45f118=>{const _0xf9b33c=_0xe007,_0x524691=_0x5b6d;let _0x5f0e73={'url':host+_0x524691(0x1ae),'headers':{'Content-Type':_0x524691(0x1c6),'user-agent':_0x524691(0x147)},'body':_0xf9b33c(0x1e7,'HaUc')+user+_0xf9b33c(0x21b,'5DP#')+mima+'\x22,\x22token\x22:null}'};$['post'](_0x5f0e73,async(_0x1cf628,_0x15fe85,_0x11b152)=>{const _0xe75c3=_0x524691,_0x2191e2=_0xf9b33c;try{result=JSON[_0x2191e2(0x21a,'SS$y')](_0x11b152),result['code']==0x1?(token=result['data'][_0xe75c3(0x18a)],$['log'](_0x2191e2(0x14e,'nD$n')),await info()):($[_0xe75c3(0x1ab)](_0x2191e2(0x24f,'sw&Y')),$[_0x2191e2(0x164,'3Ltz')]+='\x0a请填写正确的手机号和密码');}catch(_0x1a7eac){$[_0xe75c3(0x182)](_0x1a7eac,_0x15fe85);}finally{_0x45f118();}},_0x4b5b6a);});}function _0x5b6d(_0x5ca736,_0x583fee){const _0x21f117=_0x21f1();return _0x5b6d=function(_0x5b6df2,_0xacc71b){_0x5b6df2=_0x5b6df2-0xee;let _0x382589=_0x21f117[_0x5b6df2];if(_0x5b6d['thXVMY']===undefined){var _0x2f62d2=function(_0xe007a0){const _0xf33a07='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1a16a0='',_0x47bf84='';for(let _0x4a4e62=0x0,_0x1c826a,_0x2601a3,_0x8ba822=0x0;_0x2601a3=_0xe007a0['charAt'](_0x8ba822++);~_0x2601a3&&(_0x1c826a=_0x4a4e62%0x4?_0x1c826a*0x40+_0x2601a3:_0x2601a3,_0x4a4e62++%0x4)?_0x1a16a0+=String['fromCharCode'](0xff&_0x1c826a>>(-0x2*_0x4a4e62&0x6)):0x0){_0x2601a3=_0xf33a07['indexOf'](_0x2601a3);}for(let _0x5620c7=0x0,_0x560533=_0x1a16a0['length'];_0x5620c7<_0x560533;_0x5620c7++){_0x47bf84+='%'+('00'+_0x1a16a0['charCodeAt'](_0x5620c7)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x47bf84);};_0x5b6d['AIyMPk']=_0x2f62d2,_0x5ca736=arguments,_0x5b6d['thXVMY']=!![];}const _0x340f12=_0x21f117[0x0],_0x5337f1=_0x5b6df2+_0x340f12,_0x562e04=_0x5ca736[_0x5337f1];return!_0x562e04?(_0x382589=_0x5b6d['AIyMPk'](_0x382589),_0x5ca736[_0x5337f1]=_0x382589):_0x382589=_0x562e04,_0x382589;},_0x5b6d(_0x5ca736,_0x583fee);}function _0xe007(_0x5ca736,_0x583fee){const _0x21f117=_0x21f1();return _0xe007=function(_0x5b6df2,_0xacc71b){_0x5b6df2=_0x5b6df2-0xee;let _0x382589=_0x21f117[_0x5b6df2];if(_0xe007['LnUyFm']===undefined){var _0x2f62d2=function(_0xf33a07){const _0x1a16a0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x47bf84='',_0x4a4e62='';for(let _0x1c826a=0x0,_0x2601a3,_0x8ba822,_0x5620c7=0x0;_0x8ba822=_0xf33a07['charAt'](_0x5620c7++);~_0x8ba822&&(_0x2601a3=_0x1c826a%0x4?_0x2601a3*0x40+_0x8ba822:_0x8ba822,_0x1c826a++%0x4)?_0x47bf84+=String['fromCharCode'](0xff&_0x2601a3>>(-0x2*_0x1c826a&0x6)):0x0){_0x8ba822=_0x1a16a0['indexOf'](_0x8ba822);}for(let _0x560533=0x0,_0x13c99a=_0x47bf84['length'];_0x560533<_0x13c99a;_0x560533++){_0x4a4e62+='%'+('00'+_0x47bf84['charCodeAt'](_0x560533)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4a4e62);};const _0xe007a0=function(_0x85bb81,_0x599a3f){let _0x27b315=[],_0x2933e8=0x0,_0x4f7cd6,_0xfcd0f5='';_0x85bb81=_0x2f62d2(_0x85bb81);let _0x2ced45;for(_0x2ced45=0x0;_0x2ced45<0x100;_0x2ced45++){_0x27b315[_0x2ced45]=_0x2ced45;}for(_0x2ced45=0x0;_0x2ced45<0x100;_0x2ced45++){_0x2933e8=(_0x2933e8+_0x27b315[_0x2ced45]+_0x599a3f['charCodeAt'](_0x2ced45%_0x599a3f['length']))%0x100,_0x4f7cd6=_0x27b315[_0x2ced45],_0x27b315[_0x2ced45]=_0x27b315[_0x2933e8],_0x27b315[_0x2933e8]=_0x4f7cd6;}_0x2ced45=0x0,_0x2933e8=0x0;for(let _0x457a8f=0x0;_0x457a8f<_0x85bb81['length'];_0x457a8f++){_0x2ced45=(_0x2ced45+0x1)%0x100,_0x2933e8=(_0x2933e8+_0x27b315[_0x2ced45])%0x100,_0x4f7cd6=_0x27b315[_0x2ced45],_0x27b315[_0x2ced45]=_0x27b315[_0x2933e8],_0x27b315[_0x2933e8]=_0x4f7cd6,_0xfcd0f5+=String['fromCharCode'](_0x85bb81['charCodeAt'](_0x457a8f)^_0x27b315[(_0x27b315[_0x2ced45]+_0x27b315[_0x2933e8])%0x100]);}return _0xfcd0f5;};_0xe007['BDtlpt']=_0xe007a0,_0x5ca736=arguments,_0xe007['LnUyFm']=!![];}const _0x340f12=_0x21f117[0x0],_0x5337f1=_0x5b6df2+_0x340f12,_0x562e04=_0x5ca736[_0x5337f1];return!_0x562e04?(_0xe007['yusYYl']===undefined&&(_0xe007['yusYYl']=!![]),_0x382589=_0xe007['BDtlpt'](_0x382589,_0xacc71b),_0x5ca736[_0x5337f1]=_0x382589):_0x382589=_0x562e04,_0x382589;},_0xe007(_0x5ca736,_0x583fee);}function info(_0x19541a=0x0){return new Promise(_0x3c2615=>{const _0x1017d1=_0x5b6d,_0xc96641=_0xe007;let _0x1a4582={'url':host+_0xc96641(0x14c,'1XnN'),'headers':{'Content-Type':_0x1017d1(0x1c6),'user-agent':_0x1017d1(0x147)},'body':_0x1017d1(0x15e)+token+'\x22}'};$[_0xc96641(0x1d3,'wrd9')](_0x1a4582,async(_0x569b3d,_0x48ac23,_0x2d057c)=>{const _0x2d1197=_0xc96641,_0x267ca6=_0x1017d1;try{result=JSON['parse'](_0x2d057c),result[_0x267ca6(0x22a)]==0x1?($[_0x267ca6(0x1fd)]+=_0x2d1197(0x1b1,'pi7V')+result[_0x2d1197(0x1a6,'wrd9')][_0x2d1197(0x144,'60uR')],$[_0x267ca6(0x1fd)]+='\x0a【账户余额】：'+result[_0x267ca6(0x107)][_0x267ca6(0x135)],$[_0x267ca6(0x1fd)]+=_0x267ca6(0x1a7)+result[_0x267ca6(0x107)][_0x2d1197(0x171,'5DP#')],await $[_0x267ca6(0x20e)](0x7d0),await sign(),await $[_0x2d1197(0x1df,'HaUc')](0x7d0),await getAnswerKnl()):$[_0x2d1197(0x1cb,'ia2T')](_0x267ca6(0x1d5));}catch(_0x4e128c){$['logErr'](_0x4e128c,_0x48ac23);}finally{_0x3c2615();}},_0x19541a);});}function _0x21f1(){const _0x54eea4=['l3yXl3nJCMLWDgLUzY9LDMfSDwf0zq','WRaizW','AxnmB29U','WRNdH1JdJSozb8kynu/dN1pcQKXHW6hdJW','C2v0ANnVBG','cUoaKoIeMUACRoEkTUAaGEoaKE+8MG','hrJcJSkreSkH','ls0Tls0Tls0Tls0TlEwfSq','fe3cJq0','aGG7W5CKuG','lSk3WQ9F','zg9Uzq','vSoVAmk9iW','CSoClvNcUcuE','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK','W6ZcSXTQAq','yxbWBgLJyxrPB24VANnVBJTJAgfYC2v0pxv0zI04','batcS8kk','W6pcRdHQDmoy','WQ8jWOPcW6ldTCkIW7avW6q','iSoFpKDdWQTeoG','W4NcMSob','CNvUu2nYAxb0','AM9PBG','W5mQjW','5lIQ6lsM5y+3ls0Tls0Tls0Tls0TlqO','BtPMW5BcKSkzyCoEsWJdJxXgBSoychldMCkysSkcs3v0W7eFWRxcVctcKxvQWONdOrqjWQG','Aw5KzxHpzG','nmk8WR1gxaG','kWdcJHy','tCof6zAz6k+2gW','cUIoT+wpLUs4QUs6UUI1HoAwMEwKSEI0Pq','W7VcJ8oTBxZcT8kzWO/dSwOzuJldNq','W65qw3JdU8k2fSk1wgpcP2BdPrzlW58gW4BcTmkVW6mvWPRcPeBcSthdS8kzWPhcTKhdH8oaWR9+WRBdPtbGW6VdSc3dIaiMW6VcTtOVWQpdRubrrcf4y0r0WQFdSmowqCoaWPuqWOWjW71hW4TblSo3W53dKvxcTSkJy34TrSksW6dcUJCjrxNcRCobpKxdRu0GwSorvmoYWQlcHmoeWO7dGSoHW4O','WRZOVPlLM4ZPLQBORBpKVQVMGBdVViu','Ahr0Ca','WQfTxCoXlbDm','BgvUz3rO','W7OXy8oi','yxnZAwDU','D3jPDgvgAwXLu3LUyW','W7ldMgqk','pmoknKDw','s8oqWR3cNq','rSoWFCkXpCkhW6m','z2v0','WOxdQ8o0','z2v0sg91CNm','D3jPDgvKyxrH','W77cM3GndZpdHKddLg5BWPaz','W4PmCMtdPCk9eG','WQChWPPc','Aw5PDeDVDevUDG','WQGUzXdcQa','B3bLBI11CMW','s8onWORcH8oHs2C','B2jQzwn0','pmookeDmWPLFme8','WQSgAua','WQFcJCkBuKaQWPX/WQ7dL1yPcmovWOxcKeCBoSknEd3cOYZcOIBdHwWVo1xcRSkgWPhdSIaUW5m2WOqnW4xdK1dcMJRdK8ofWR9ogSo8W64sCmoNDItcGGhdJmkyghaXW5ewCbnoa8kPWQ9PlhFcJYLeAuGHWQVcOs3cTNldOSo8ruxdH3ibpSo5WPC6WOFdJ3BdHqKHkJ14WRJcNa','W67cVGbK','e2jlWRLCbty','W4pcGg7cL8kkpW7cN0q','WQWGEtZcS8obW5ylWR/cPv3dHmoNWPBdSG','z2v0u2vJB25KCW','obWx','WRtdMe/dP8ocfG','zxHWB3j0CW','paCeWOdcUJqyBmkvW5BcO8oNrSojd8klCaDPWQeoxKpdP8kPya','WQJdLLRdKCov','CMv3yxjK','BwvZC2fNzq','WR8mDfVdIHldNW','cUoaKos7IUAxPEM4OEAXPooaKE+8MG','5lQ46lE55y2aCxRcLXjgWPNcQ8kTW7RdOrNcSCo8WOa','gMzmWQS','CMvZB2X2zq','A8o557IA5P2VhetWVkweWRi','g8kiW6ldGmkXfxRcSCoRAaFcOq','eMHF','WRRdMSk6oW','WONdTSorgdpcIhC','WRHJBSkc','WQxdKmkZ','W6FcNfNcI8ksnIpdNXBcGSofWRFcRHmlodKkBmofWQZdHSooWQiie8oCWR8ju8kbzfRcKmknvaO/WQLYpmoumCoaa8oZWOZdI8oIhgzTWP7cTLVdPeNcJ3DkCq3dTSodfCoatqvRWP7dS14Cc3FcQCk4r8ogmH5XW5FcVSkEifhdTcvnWRlcJxRdHuuiAfxdO03dJSk4WP3cOtujWR3cTZ1Wwe7dRxWyW5RdPcpcM8kvW6FdK8kyumkHcqpdPb0/WO/cTMOuWRy','lcj0B2TLBIi6iG','Bg9NCW','cUoaKoETLoMIMoE7K+AENooaKE+8MG','D2fPDa','WRNdOSk3WPK','zMv0y2G','AxnnDxrL','l1eeWONcUwSvEq','z21qAg9Uzq','cUoaKoETVUwiSoEkTUAaGEoaKE+8MG','lSkGpq','qtzP','stH6W5i','W581xmoqW7GV','y2f0y2G','baRcSSkneW','WOeta2hdTSkPbmoTaJ/dS2tdT10','uCokWRRcHSo1vNZcJ8okxW','WPRcL8ksuW','y2T0B3vNAa','tmkTWOfXcmknqW','zw52','WQqdWPPvW7ddSq','WOLNW5znW6nU','xJRdObVcJa','WOxcJ8kJWOj0','WR/cSSkadSkrDG','W7RcSaDX','WPVdMeFdICozaCkZifq','h2NcQLJdNCkak3RdPwmp','WPBdT8kyjfDudCkYW6GrW7TpkCkJW7veW6NdKmop','y29Kzq','WPlcG8kIWOvWW7VdKgq','WRuuu0hdJrldKG','B3bLBLvYBa','CMvWBgfJzq','mX4GWPJcPMbs','WR5JzmkcgmoWca','Aw5MBW','gaSBW5e/','Aw5KzxG','WQtdMSkNlc3dOCol','DgLTzw91Da','W5NcH0lcKmkkdIVcNuy','pt09pt09pt09pt09pt3WN5oJ57o757UF6ycA55+L8j+tOZ09pt09pt09pt09pt09','rdDNW4pcO8kpsSo5sGy','DxjS','W4pdLCozAq','WPJcI8kIWOjWW6JdGa','C3bSAxq','WOpcKCkVxKKIWQ81W6ZcIW99rq','Dw5KzwzPBMvK','i8k4WR1r','WR9JECkwdCo/','WRLNt8oH','WQXMx8o6lqXrWRO','W7ZcVSoAoq','d35YWRFcHYZdMa','BMfTzq','zgvJB2rL','yCoOBmocuslcNSojW6e','W5nEvxK','WRxdKLVdKCora8kC','WRujAuddUbRdGWJcPmoH','CMvHzezPBgvtEw5J','jCovm0a','tGVcVZHsucBcPxuiaMNcQGq','rmoRECkYiCkdW6OfACkLWRZcGSo6WRa2exytBhT/amovWQ9DW5iOWRaiWPW','W4NORPhLOOxLHRRMR7lNO7pNMBNMI4JMNyRLJAFLKzxLRlhNO5G','k8k2WQ51tXy','WR5PvCoH','mHZcSW3dNZK','Bg9HzgrHDge','WPqqW7hdLZ3dLCow','AxnrDwfUwa','WPb2qCoZW4tdRG','y2TQyxi','AxntDxjNzq','nde2uLrusu55','uHZdNuHCjJTvW6C3WPZdGmkP','jXyEWPq','WOtdPmo2daFcHN45','FmkBWO5tW7hdOGpcHufLnCkc','Dow8H+wNS+MeH+AwJEI+SUIGN+AwOowTRoEVGEMHKq','DgLTzq','WQGKyr0','WPhcI8kYWP51W6O','lSkQWODFwqe','y3DK','W6JcSbb8','tCkrWPniW7JdUHi','eEocV+ESGUwiNoEjR+AbIUobL++9LW','Dg9tDhjPBMC','mZiXowfPshPxta','BxnN','zgf0yq','WQtOVj/LMypPL6hORy7KVitMGO7VV7S','EmoecepcRcWU','l2fWAs91C2vYl3nPz24','W7xcUSododBdJL4','BwvKAweTDxjS','WPepgcpcP8oRqmkQkGZdUdpcNs8','WPPUz8o9W5K','WOFcG8kO','C2v0vMfSDwvgB3jlzxK','WQLYgMCfd30','Bg9Nu2vWyxjHDg9Y','v8krWOfdW7hdVGq','WOPVW6vkW6HLla','s8onWPxcNCoKqa','z2v0u2nYAxb0','CgfYC2u','lSkGpHrlW7OVWPPgvW','gwjmWQ5CfJi','qb3cMdrsqcG','C2v0lwnVB2TPzq','Dg9pyMO','W4xdM8ogAeldGhfsWPZdPmo6','nGRcJHhdMJVcNq','CMvKDwnL','lSokkKjlWP1xiL9JcXupW5xdL8oa','W4NcRSoP','AwnVBNyTBgL0zq','WOtcTSkdm1eCq8oHWQ1y','qgnOyxz5x2jVEgPZx3vZzxjdzMDZlMH0DhbHCgK','zxHPC3rZu3LUyW','q29UDgvUDc1uExbL','z2v0twLUDxrLCW','ue9tva','e35GWQC','AxnoB2rL','FrzDW6m','WRDNy8kq','mJe0mtKZne9Mvxrbwa','C3rYAw5NAwz5','WQ/JG6xOHRZMNj/NI77MGPJJGi/VVPO','kbVcNbBdJI/cU8kWDmop','aGG5W5CVwq','yM94lMrHDa','WP3cI8kWWPv0W73dLG','WPxdT8oU','Bw9UzxK','WOpcG8kbW5OYiG','gwjmWO5CfJy','57oE57Me57Mi5BYh772e6kYx6ywg6k6K77Yb','W7RcVGbT','W5C2ySotW7uPFMS2ax/cU8ovCMBcUcLMWO1BWQu9cCo6hSoPvtuZyq','u8kBWOC','z2v0DMfS','Cgf0Aa','W53cRSoZWPZdR8kkWPxcImk1WPa','kXRcJGO','C2v0q29VA2LLu3LUyW','C2v0DMfS','WQtdTmkiWOlcKSoX','f25GWRS','WQpdPSkPWOG','sXFcIW','W7H1nuldO8kzW54JWQxcTxldVa','tw96AwXSys81lJaGkgLqAg9UztSGq1bvigLqAg9UzsbpuYaXnv8WigXPA2uGtwfJie9tifGPiefWCgXLv2vIs2L0lZyWns4XlJe1icHlsfrntcWGBgLRzsbhzwnRBYKGtw9IAwXLlZe1rte0oa','tCoVFCkUCSopWQq','mZu3vKnuruPV','tCo+Amk6lCksW7G','z2v0zgf0yq','dmk8WPr2CSkkxmk6W70dDmk4pCki','W5tdLCoE','W5NcQCkiimkgAUImQowpMoAlIUwiIow+O+wMGoAkQoIHKoETL+wlPW','WRScDfddNGhdLG','B3b0CW','e0/dMwjHwtNcLwuF','WO3dOmo2bs7cIW','BwvKAwfvCMW','z2v0tw9UDgG','AgvHzgvYCW','mti4mdrwv05SDNm','WQb7BCoGkaTN','WOFcI8kHWP1WW6ZdGa','WO7dQmkQWPNcMmoXWRigW74wyb4','joobI+EVHUMJSoE4UUADIUobRE+8RG','eSkrW6fTt8oM','DxrMltG','qXNcMde','EYj0B2TLBIi6iG','sSoBWRRcLSoLv0W','WRBdLKxdHW','q29VA2LL','tWZPL73ORPzl','W4PmBgtdO8k/','bH4eW4SQw8on','WQ49Abi','t8oBWQ/cMSoVqq','mWRcNaBdNI7cIW','WO/cJmkx','WQPPumo5','WQi2qXtcV8ojW6GhWRVcSLFdN8oS','WQr0FSkfha','WRBcPCkoomkxD8omD8k0W7q','y29VA2LLsMfY','nWdcMHe','r17dT8kOnCkqeCokbW','q29UDgvUDc1mzw5NDgG','W4PrvxtdSmkOfSo2','rMfH','CMf3qM9KEq','WQDPuCoW','WOjYW5bmW5j5jq','FSoVW7acdftdIK7dLWBdICow','WO7cH8kcveGJ','axD8WRZcKa','nWdcMG','t3DMWOVcVL/dNmkDW7VdS8o1W4qMvtdcLdjFW4FcKKVcKbitwCoLcSkcWRpcSmolW6jjFG','WO/cJmkcveGVWPm3','d0pcHr0oD3PW','W4VcPCoR','W5SJyComW70TEG','tmkaWPjoW7RdQX7dJMW','bb7cS8kw','W4pcNuxcJq','Bg9NrxjY','AxnozwvKuMv3CML0zq','Bg9KyxnOx3nLDa','W70IjG','WQdcUmktpCkcAa','z2v0vgLTzq','WP1KECo9','tmoOr8k7lCkeW5KuD8k4WRVdMCo1','Dg9Rzw4','WOrSW5nn','lH3cKq','W4NJGBBOH7tMNi/NIkFMGPZJG6ZVVPK','cUw8GowNI+oaKowBVEI/IoI0PUAiTYa','Bwv0Ag9K','xILIW57cKa','Dg9mB2nHBgvmB3DLCKnHC2u','uYOLWOhcTGRdOIL5','y2fSBa','mZa4mZK0zefPDuXx','gMzmWQ8','W4bus3ddPq','WQyiWPG','WQ8tCL3dKri','s2X1WOG','WOBcLCkHW5iIlW','wdDQW5lcGSkjumozqa','rSo0BCk7','W5eJzSojW70M','WQddJmkhkJ7dOCol','z290','WQNJGk/LGPRLKjVMJyFNP6dJGABVVOdKVi3MS6ZMNP7LOk3LHztOTzNMIkZLRBhNOAJOTBNKU7VLMO4','zgf0yuzPBgu','WOfTW5i','W6mIEG','bhC+W7OaFSo6fXVcV8oqW7H6WRG','p8oBlKy','pW7cIqm','cUoaKoI0PUAiT+ENR+wiHUoaKE+8MG','W4BcMSoiucNdRq','W53cGuRcLSkBpIpcHei','WQXJhwqxuJFcQSkEmwfmvCoHgxddKSogq2lcLSowW4JdPSofl8oUW4ZdUGlcPCo1W6m+W6C8W5RcLvpdSmk5WRtcNmkVW7XEaSkwWR/cJSkZfmkuW7bmrxbkWPZdI8oRW4v5W6DRdSot','Bg9N','C3rYAw5N','Cg9ZDa','l2fWAs9PBMrLEc9SB2DPBG','fh59WRC','uCo0Fmk5imonW6GEB8kHWRVdIa','nEodPoAVGUI/QEwsNUATL+EvN+AkN+oaHdW','W4BcLK3cHCkkmG','W702AmowW7y2','WQFcSSk0p8kr','W4uZCmomW6G4'];_0x21f1=function(){return _0x54eea4;};return _0x21f1();}function sign(_0x21510f=0x0){return new Promise(_0x503378=>{const _0x55d948=_0xe007,_0x3f6d73=_0x5b6d;let _0x14a16c={'url':host+_0x3f6d73(0x10a),'headers':{'Content-Type':_0x55d948(0x24e,'BG10'),'user-agent':_0x55d948(0x1f1,'!qBH')},'body':_0x3f6d73(0x15e)+token+'\x22}'};$[_0x3f6d73(0x1ad)](_0x14a16c,async(_0x7ff563,_0x4e27a9,_0x22b6e0)=>{const _0x4008b8=_0x55d948,_0x51b8d9=_0x3f6d73;try{result=JSON[_0x51b8d9(0x117)](_0x22b6e0),result[_0x51b8d9(0x22a)]==0x1?($[_0x4008b8(0x209,'kJEC')](_0x51b8d9(0x214)+result[_0x51b8d9(0x231)]+result[_0x51b8d9(0x107)][_0x51b8d9(0x1fc)]),$[_0x4008b8(0x230,')wyq')]+='\x0a【签到状态】：'+result[_0x4008b8(0x18b,'aN6W')]+result[_0x4008b8(0x12c,')wyq')]['reward']):($[_0x4008b8(0x1b7,')puP')]('\x0a【签到状态】：'+result[_0x51b8d9(0x231)]),$[_0x51b8d9(0x1fd)]+=_0x4008b8(0x103,'oQU3')+result[_0x4008b8(0x1c0,'uEFB')]);}catch(_0x353e6d){$[_0x51b8d9(0x182)](_0x353e6d,_0x4e27a9);}finally{_0x503378();}},_0x21510f);});}function getAnswerKnl(_0x3a72b5=0x0){return new Promise(_0x5d3e65=>{const _0x420a82=_0xe007;let _0x6a6231={'url':host+'/api/index/getAnswerKnl','headers':{'Content-Type':_0x420a82(0x13a,'WG3]'),'user-agent':_0x420a82(0x1d7,'5DP#')},'body':_0x420a82(0x229,'Ai5m')+token+'\x22}'};$[_0x420a82(0x1c7,'SS$y')](_0x6a6231,async(_0x35873f,_0x95837e,_0x4c6f8b)=>{const _0x28476a=_0x420a82,_0xc386c9=_0x5b6d;try{result=JSON[_0xc386c9(0x117)](_0x4c6f8b),result['code']==0x1?(await $[_0x28476a(0xee,'VbCT')](DD),await godati(0x3),await $[_0x28476a(0x1f0,')puP')](DD),await godati(0x3),await $[_0xc386c9(0x20e)](DD),await godati(0x3),await $[_0xc386c9(0x20e)](DD),await godati(0x3),await $[_0xc386c9(0x20e)](DD),await godati(0x3)):result[_0xc386c9(0x231)]==_0x28476a(0x138,'BG10')?($['log']('\x0a返回错误信息：'+result[_0xc386c9(0x231)]),$[_0xc386c9(0x1ab)](_0x28476a(0xfb,'oAGR')),await $[_0xc386c9(0x20e)](0x2710),await getAnswerKnl()):($[_0x28476a(0x179,'wrd9')](_0x28476a(0x1d8,'WG3]')+result['info']),$[_0xc386c9(0x1fd)]+=_0x28476a(0x108,'ogU^')+result[_0xc386c9(0x231)]);}catch(_0x3375dc){$[_0x28476a(0x225,'nD$n')](_0x3375dc,_0x95837e);}finally{_0x5d3e65();}},_0x3a72b5);});}function godati(_0x4d81ca){return new Promise(_0x3ef338=>{const _0x16a7a5=_0xe007,_0x514232=_0x5b6d;let _0x98284b={'url':host+'/api/index/getAnswerKnl','headers':{'Content-Type':_0x514232(0x1c6),'user-agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2015_0\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148'},'body':_0x16a7a5(0x212,'oN27')+_0x4d81ca+_0x514232(0x20b)+token+'\x22}'};$[_0x514232(0x1ad)](_0x98284b,async(_0x3dec53,_0x1eb6f9,_0x5a4eae)=>{const _0x41d990=_0x16a7a5,_0x1b38d4=_0x514232;try{result=JSON[_0x1b38d4(0x117)](_0x5a4eae),result[_0x41d990(0x19c,'BG10')]==0x1?($[_0x1b38d4(0x1ab)](_0x1b38d4(0x20d)+result[_0x41d990(0x1e1,'ZA2u')]),$[_0x41d990(0x23b,'JUjD')]+=_0x1b38d4(0x20d)+result[_0x41d990(0x181,'sdtV')]):($[_0x41d990(0x215,'sN5]')](_0x1b38d4(0x20d)+result['info']),$[_0x1b38d4(0x1fd)]+=_0x41d990(0x15a,'%0qY')+result[_0x1b38d4(0x231)]);}catch(_0x2e2d1c){$[_0x1b38d4(0x182)](_0x2e2d1c,_0x1eb6f9);}finally{_0x3ef338();}},0x0);});}function RT(_0x1aad7e,_0x1ff26d){const _0x58529b=_0x189f8f;do rt=Math[_0x58529b(0x178,'aQ**')](Math['random']()*_0x1ff26d);while(rt<_0x1aad7e);return rt;}async function message(){const _0xecb0ba=_0x120bde,_0x85491=_0x189f8f;tz==0x1&&$[_0x85491(0x10f,'*WtC')]($[_0xecb0ba(0x245)],'',$[_0x85491(0x234,'kJEC')]),$[_0xecb0ba(0x12a)]()&&await notify[_0x85491(0x13e,'ogU^')]($['name'],$[_0x85491(0x1f3,'oAGR')]);}function Env(_0x28c47c,_0x184a52){const _0x5bfcf0=_0x120bde,_0x5cf2f3=_0x189f8f;class _0x150dbd{constructor(_0x593a70){const _0x4e71af=_0xe007;this[_0x4e71af(0x168,'!qBH')]=_0x593a70;}[_0x5cf2f3(0x1af,'aQ**')](_0x4cbcc2,_0x42355c='GET'){const _0xa2ad7f=_0x5b6d,_0x4fcc57=_0x5cf2f3;_0x4cbcc2=_0x4fcc57(0x198,')puP')==typeof _0x4cbcc2?{'url':_0x4cbcc2}:_0x4cbcc2;let _0x37aa6b=this['get'];return _0xa2ad7f(0x128)===_0x42355c&&(_0x37aa6b=this[_0x4fcc57(0x226,'iOAI')]),new Promise((_0x529695,_0x347dc4)=>{const _0x504fe6=_0x4fcc57;_0x37aa6b[_0x504fe6(0x169,'VbCT')](this,_0x4cbcc2,(_0x45865e,_0x3c3345,_0xe81e35)=>{_0x45865e?_0x347dc4(_0x45865e):_0x529695(_0x3c3345);});});}[_0x5cf2f3(0x121,'ogU^')](_0x2466f7){const _0x234167=_0x5b6d,_0x5eaa0f=_0x5cf2f3;return this[_0x5eaa0f(0x206,'kJEC')][_0x234167(0x193)](this['env'],_0x2466f7);}[_0x5cf2f3(0x23a,'^^0B')](_0x55399d){const _0x387b73=_0x5cf2f3;return this[_0x387b73(0xf8,'oN27')][_0x387b73(0xfd,'&jh)')](this[_0x387b73(0x1e4,')63H')],_0x55399d,_0x387b73(0x12b,'5OCb'));}}return new class{constructor(_0x1dd50a,_0x1b3649){const _0x182118=_0x5cf2f3,_0x545cb0=_0x5b6d;this[_0x545cb0(0x245)]=_0x1dd50a,this[_0x545cb0(0x1d9)]=new _0x150dbd(this),this[_0x182118(0x1e9,'sw&Y')]=null,this[_0x182118(0xf9,')63H')]=_0x545cb0(0x132),this[_0x182118(0x199,'zojN')]=[],this[_0x545cb0(0x211)]=!0x1,this[_0x545cb0(0x183)]=!0x1,this['logSeparator']='\x0a',this['encoding']=_0x545cb0(0x15c),this['startTime']=new Date()[_0x545cb0(0x187)](),Object[_0x545cb0(0x1dd)](this,_0x1b3649),this['log']('','🔔'+this[_0x182118(0x174,'VbCT')]+',\x20开始!');}[_0x5cf2f3(0xff,'uEFB')](){const _0x16a0e0=_0x5b6d;return'undefined'!=typeof module&&!!module[_0x16a0e0(0x1f9)];}['isQuanX'](){const _0xb7717b=_0x5b6d;return _0xb7717b(0x23e)!=typeof $task;}[_0x5bfcf0(0xf5)](){const _0x20a7a2=_0x5cf2f3;return'undefined'!=typeof $httpClient&&_0x20a7a2(0x247,'q*pI')==typeof $loon;}[_0x5bfcf0(0x1b8)](){const _0x4df225=_0x5cf2f3;return _0x4df225(0x19b,'5OCb')!=typeof $loon;}[_0x5cf2f3(0x24d,'uuWb')](){return'undefined'!=typeof $rocket;}[_0x5bfcf0(0x11c)](_0x18bee8,_0x3c932c=null){const _0x127ec0=_0x5bfcf0;try{return JSON[_0x127ec0(0x117)](_0x18bee8);}catch{return _0x3c932c;}}[_0x5cf2f3(0x1b4,'nD$n')](_0x32d6fa,_0x587cba=null){const _0x3ec1b9=_0x5cf2f3;try{return JSON[_0x3ec1b9(0x1ef,'z0gb')](_0x32d6fa);}catch{return _0x587cba;}}['getjson'](_0x24b6ef,_0x43b834){const _0x39c626=_0x5cf2f3,_0x277c91=_0x5bfcf0;let _0x301651=_0x43b834;const _0x28fef3=this[_0x277c91(0x14b)](_0x24b6ef);if(_0x28fef3)try{_0x301651=JSON[_0x39c626(0x223,'%0qY')](this[_0x277c91(0x14b)](_0x24b6ef));}catch{}return _0x301651;}[_0x5bfcf0(0x1ba)](_0x46c465,_0x7a89c6){try{return this['setdata'](JSON['stringify'](_0x46c465),_0x7a89c6);}catch{return!0x1;}}[_0x5bfcf0(0x116)](_0x817334){return new Promise(_0x13df96=>{this['get']({'url':_0x817334},(_0x3ab7c1,_0x23de20,_0x297eb7)=>_0x13df96(_0x297eb7));});}[_0x5bfcf0(0x1cc)](_0x32506c,_0x48b20c){const _0x3e4b43=_0x5cf2f3,_0x245aeb=_0x5bfcf0;return new Promise(_0x56e861=>{const _0x415189=_0x5b6d,_0x2a5396=_0xe007;let _0x215b49=this[_0x2a5396(0x10b,'^jj%')](_0x415189(0x124));_0x215b49=_0x215b49?_0x215b49['replace'](/\n/g,'')[_0x2a5396(0x1dc,'Ls14')]():_0x215b49;let _0x1cee40=this[_0x2a5396(0x119,'oAGR')](_0x2a5396(0x1d0,'5OCb'));_0x1cee40=_0x1cee40?0x1*_0x1cee40:0x14,_0x1cee40=_0x48b20c&&_0x48b20c[_0x415189(0x235)]?_0x48b20c['timeout']:_0x1cee40;const [_0x77b0ae,_0x117bd4]=_0x215b49[_0x2a5396(0x1e0,'z0gb')]('@'),_0x2e526f={'url':_0x2a5396(0x148,'BG10')+_0x117bd4+_0x415189(0x1b6),'body':{'script_text':_0x32506c,'mock_type':'cron','timeout':_0x1cee40},'headers':{'X-Key':_0x77b0ae,'Accept':_0x2a5396(0x1ce,'2)3D')}};this[_0x2a5396(0x241,'VbCT')](_0x2e526f,(_0x10be4c,_0x32a11d,_0x45f9f9)=>_0x56e861(_0x45f9f9));})[_0x245aeb(0x219)](_0x248a55=>this[_0x3e4b43(0x1f8,'p!2F')](_0x248a55));}[_0x5bfcf0(0xf0)](){const _0x2c5878=_0x5bfcf0,_0x5149b1=_0x5cf2f3;if(!this[_0x5149b1(0x136,'*WtC')]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x5149b1(0x1a5,'z0gb')]=this[_0x5149b1(0x139,'iOAI')]?this['path']:require('path');const _0x36442f=this[_0x2c5878(0x13d)][_0x2c5878(0x202)](this[_0x2c5878(0x1a1)]),_0x496743=this[_0x2c5878(0x13d)][_0x2c5878(0x202)](process[_0x2c5878(0x100)](),this[_0x2c5878(0x1a1)]),_0x393f81=this['fs'][_0x5149b1(0x16c,'nD$n')](_0x36442f),_0x5758f6=!_0x393f81&&this['fs']['existsSync'](_0x496743);if(!_0x393f81&&!_0x5758f6)return{};{const _0x1b7daf=_0x393f81?_0x36442f:_0x496743;try{return JSON[_0x2c5878(0x117)](this['fs'][_0x2c5878(0x24b)](_0x1b7daf));}catch(_0x108bf5){return{};}}}}[_0x5bfcf0(0x1e6)](){const _0x542255=_0x5bfcf0,_0x21f29d=_0x5cf2f3;if(this[_0x21f29d(0x218,'WG3]')]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x542255(0x13d)]=this[_0x21f29d(0x248,'5DP#')]?this['path']:require('path');const _0x21e502=this[_0x542255(0x13d)]['resolve'](this[_0x542255(0x1a1)]),_0x1f63a9=this[_0x542255(0x13d)][_0x21f29d(0x102,'pi7V')](process[_0x542255(0x100)](),this[_0x542255(0x1a1)]),_0x324f55=this['fs'][_0x542255(0x125)](_0x21e502),_0x4820b7=!_0x324f55&&this['fs'][_0x542255(0x125)](_0x1f63a9),_0x2669d1=JSON['stringify'](this[_0x21f29d(0x12c,')wyq')]);_0x324f55?this['fs'][_0x542255(0x1de)](_0x21e502,_0x2669d1):_0x4820b7?this['fs'][_0x542255(0x1de)](_0x1f63a9,_0x2669d1):this['fs']['writeFileSync'](_0x21e502,_0x2669d1);}}['lodash_get'](_0x405ab6,_0x36f68c,_0x50c78c){const _0x171be8=_0x5cf2f3,_0x180a4b=_0x36f68c['replace'](/\[(\d+)\]/g,_0x171be8(0x185,')wyq'))['split']('.');let _0x16116f=_0x405ab6;for(const _0x3b5c15 of _0x180a4b)if(_0x16116f=Object(_0x16116f)[_0x3b5c15],void 0x0===_0x16116f)return _0x50c78c;return _0x16116f;}[_0x5cf2f3(0x1c9,'sw&Y')](_0x2db6e1,_0x2b19a5,_0x977e58){const _0x4c87fb=_0x5cf2f3,_0x32b5fd=_0x5bfcf0;return Object(_0x2db6e1)!==_0x2db6e1?_0x2db6e1:(Array['isArray'](_0x2b19a5)||(_0x2b19a5=_0x2b19a5[_0x32b5fd(0x104)]()['match'](/[^.[\]]+/g)||[]),_0x2b19a5['slice'](0x0,-0x1)[_0x32b5fd(0x11f)]((_0x30b776,_0x35ffd5,_0xeeb33e)=>Object(_0x30b776[_0x35ffd5])===_0x30b776[_0x35ffd5]?_0x30b776[_0x35ffd5]:_0x30b776[_0x35ffd5]=Math[_0x4c87fb(0x172,'zojN')](_0x2b19a5[_0xeeb33e+0x1])>>0x0==+_0x2b19a5[_0xeeb33e+0x1]?[]:{},_0x2db6e1)[_0x2b19a5[_0x2b19a5[_0x32b5fd(0x1db)]-0x1]]=_0x977e58,_0x2db6e1);}[_0x5bfcf0(0x14b)](_0x2e1443){const _0x157ed4=_0x5cf2f3,_0x199185=_0x5bfcf0;let _0x18800a=this[_0x199185(0x13c)](_0x2e1443);if(/^@/[_0x157ed4(0x20f,'60uR')](_0x2e1443)){const [,_0x12262d,_0x813abd]=/^@(.*?)\.(.*?)$/['exec'](_0x2e1443),_0x25456f=_0x12262d?this[_0x157ed4(0x19d,'WG3]')](_0x12262d):'';if(_0x25456f)try{const _0x5b60a1=JSON[_0x157ed4(0x1fb,'p!2F')](_0x25456f);_0x18800a=_0x5b60a1?this['lodash_get'](_0x5b60a1,_0x813abd,''):_0x18800a;}catch(_0x12e18f){_0x18800a='';}}return _0x18800a;}['setdata'](_0x23bf63,_0x1648b7){const _0x2999ca=_0x5bfcf0,_0x1e0a31=_0x5cf2f3;let _0x359116=!0x1;if(/^@/['test'](_0x1648b7)){const [,_0x4face5,_0x476073]=/^@(.*?)\.(.*?)$/[_0x1e0a31(0x165,'&jh)')](_0x1648b7),_0x513db6=this[_0x2999ca(0x13c)](_0x4face5),_0xca7ee7=_0x4face5?'null'===_0x513db6?null:_0x513db6||'{}':'{}';try{const _0x41bd59=JSON[_0x2999ca(0x117)](_0xca7ee7);this[_0x1e0a31(0x118,'sN5]')](_0x41bd59,_0x476073,_0x23bf63),_0x359116=this['setval'](JSON[_0x2999ca(0x12e)](_0x41bd59),_0x4face5);}catch(_0x2006fc){const _0x12cf5c={};this[_0x2999ca(0x184)](_0x12cf5c,_0x476073,_0x23bf63),_0x359116=this[_0x1e0a31(0x186,'nD$n')](JSON[_0x1e0a31(0x17f,'pi7V')](_0x12cf5c),_0x4face5);}}else _0x359116=this[_0x1e0a31(0x1d2,'uEFB')](_0x23bf63,_0x1648b7);return _0x359116;}[_0x5bfcf0(0x13c)](_0x854f3f){const _0x55f25a=_0x5bfcf0,_0x3f0a8c=_0x5cf2f3;return this['isSurge']()||this[_0x3f0a8c(0x1c8,'iOAI')]()?$persistentStore['read'](_0x854f3f):this['isQuanX']()?$prefs[_0x3f0a8c(0x11d,'^^0B')](_0x854f3f):this[_0x55f25a(0x12a)]()?(this[_0x3f0a8c(0x1f2,'iOAI')]=this[_0x55f25a(0xf0)](),this[_0x55f25a(0x107)][_0x854f3f]):this[_0x3f0a8c(0x188,'2)3D')]&&this[_0x3f0a8c(0x23f,'uEFB')][_0x854f3f]||null;}[_0x5bfcf0(0x141)](_0x567f38,_0x35c27a){const _0x2e8cfe=_0x5bfcf0,_0x929128=_0x5cf2f3;return this[_0x929128(0x1e8,'5DP#')]()||this[_0x929128(0xf3,'2)3D')]()?$persistentStore[_0x929128(0x16b,')wyq')](_0x567f38,_0x35c27a):this[_0x2e8cfe(0xf2)]()?$prefs[_0x2e8cfe(0x110)](_0x567f38,_0x35c27a):this[_0x2e8cfe(0x12a)]()?(this[_0x929128(0x201,'oAGR')]=this[_0x929128(0x17c,'@id#')](),this[_0x929128(0x15d,'uuWb')][_0x35c27a]=_0x567f38,this[_0x929128(0x1a9,'sdtV')](),!0x0):this[_0x2e8cfe(0x107)]&&this[_0x2e8cfe(0x107)][_0x35c27a]||null;}[_0x5bfcf0(0x1ea)](_0x3e0311){const _0x181df5=_0x5cf2f3,_0x2d854d=_0x5bfcf0;this[_0x2d854d(0x19f)]=this['got']?this[_0x2d854d(0x19f)]:require(_0x181df5(0x14d,'^^0B')),this[_0x2d854d(0x21e)]=this[_0x181df5(0x1e2,'BG10')]?this[_0x181df5(0x109,'oQU3')]:require(_0x181df5(0x1b0,'BG10')),this[_0x181df5(0x1eb,'&jh)')]=this['ckjar']?this[_0x181df5(0x196,'5DP#')]:new this['cktough'][(_0x181df5(0x227,'p!2F'))](),_0x3e0311&&(_0x3e0311[_0x2d854d(0x155)]=_0x3e0311[_0x2d854d(0x155)]?_0x3e0311[_0x181df5(0x14a,'BG10')]:{},void 0x0===_0x3e0311[_0x2d854d(0x155)]['Cookie']&&void 0x0===_0x3e0311[_0x2d854d(0x16d)]&&(_0x3e0311['cookieJar']=this[_0x181df5(0x10e,'2)3D')]));}[_0x5bfcf0(0x1e3)](_0x4fb198,_0x55dfd3=()=>{}){const _0x5e72f7=_0x5cf2f3,_0x2a4e54=_0x5bfcf0;if(_0x4fb198[_0x2a4e54(0x155)]&&(delete _0x4fb198[_0x2a4e54(0x155)][_0x2a4e54(0x126)],delete _0x4fb198['headers'][_0x2a4e54(0x170)]),this['isSurge']()||this[_0x5e72f7(0x1bf,'3Ltz')]())this[_0x2a4e54(0xf5)]()&&this['isNeedRewrite']&&(_0x4fb198[_0x2a4e54(0x155)]=_0x4fb198[_0x2a4e54(0x155)]||{},Object[_0x2a4e54(0x1dd)](_0x4fb198['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x2a4e54(0x1e3)](_0x4fb198,(_0x251d41,_0x5f39a7,_0x22d2eb)=>{const _0x5ce3db=_0x5e72f7;!_0x251d41&&_0x5f39a7&&(_0x5f39a7[_0x5ce3db(0x101,'iOAI')]=_0x22d2eb,_0x5f39a7[_0x5ce3db(0x21c,'ZA2u')]=_0x5f39a7[_0x5ce3db(0x15b,'xpCP')]),_0x55dfd3(_0x251d41,_0x5f39a7,_0x22d2eb);});else{if(this[_0x5e72f7(0x1c3,'oQU3')]())this[_0x5e72f7(0x16a,'&jh)')]&&(_0x4fb198[_0x2a4e54(0x150)]=_0x4fb198[_0x2a4e54(0x150)]||{},Object[_0x2a4e54(0x1dd)](_0x4fb198['opts'],{'hints':!0x1})),$task[_0x2a4e54(0x210)](_0x4fb198)['then'](_0x405385=>{const {statusCode:_0x6921e2,statusCode:_0x371909,headers:_0x143eb1,body:_0x4f714c}=_0x405385;_0x55dfd3(null,{'status':_0x6921e2,'statusCode':_0x371909,'headers':_0x143eb1,'body':_0x4f714c},_0x4f714c);},_0x4df47b=>_0x55dfd3(_0x4df47b));else{if(this[_0x5e72f7(0x1bc,'SS$y')]()){let _0x7ab717=require(_0x5e72f7(0x123,'Ai5m'));this[_0x5e72f7(0x24a,')puP')](_0x4fb198),this[_0x2a4e54(0x19f)](_0x4fb198)['on']('redirect',(_0x290788,_0xe0cc52)=>{const _0x42cca1=_0x2a4e54,_0x1098b7=_0x5e72f7;try{if(_0x290788[_0x1098b7(0x244,'aQ**')][_0x42cca1(0x11b)]){const _0x8d8aee=_0x290788[_0x1098b7(0x1da,'VbCT')][_0x42cca1(0x11b)][_0x1098b7(0x1a3,'Ls14')](this[_0x1098b7(0x1fe,')puP')][_0x42cca1(0x161)]['parse'])['toString']();_0x8d8aee&&this['ckjar'][_0x42cca1(0x140)](_0x8d8aee,null),_0xe0cc52[_0x42cca1(0x16d)]=this[_0x42cca1(0xf4)];}}catch(_0x367f12){this['logErr'](_0x367f12);}})['then'](_0x51109f=>{const _0x585be4=_0x2a4e54,{statusCode:_0x5ae366,statusCode:_0x320388,headers:_0x1cf2b8,rawBody:_0x426304}=_0x51109f;_0x55dfd3(null,{'status':_0x5ae366,'statusCode':_0x320388,'headers':_0x1cf2b8,'rawBody':_0x426304},_0x7ab717[_0x585be4(0x246)](_0x426304,this['encoding']));},_0x3bb63b=>{const _0x4af877=_0x5e72f7,{message:_0x4252c8,response:_0x1efb56}=_0x3bb63b;_0x55dfd3(_0x4252c8,_0x1efb56,_0x1efb56&&_0x7ab717[_0x4af877(0x222,'aN6W')](_0x1efb56['rawBody'],this[_0x4af877(0x242,'VbCT')]));});}}}}[_0x5bfcf0(0x1ad)](_0x5276d7,_0x5ea7cb=()=>{}){const _0x1fb2e9=_0x5bfcf0,_0x56b8f3=_0x5cf2f3,_0x5044bf=_0x5276d7[_0x56b8f3(0x166,'ZA2u')]?_0x5276d7[_0x1fb2e9(0x18f)][_0x1fb2e9(0x191)]():'post';if(_0x5276d7['body']&&_0x5276d7[_0x56b8f3(0x15f,'ZA2u')]&&!_0x5276d7[_0x56b8f3(0x113,'pi7V')][_0x56b8f3(0x159,'60uR')]&&(_0x5276d7[_0x56b8f3(0x167,'wrd9')][_0x56b8f3(0xfa,'pi7V')]=_0x1fb2e9(0x1c4)),_0x5276d7['headers']&&delete _0x5276d7[_0x56b8f3(0x133,'JUjD')][_0x56b8f3(0x1a4,'Iacm')],this[_0x56b8f3(0x19e,'kJEC')]()||this[_0x56b8f3(0x142,'60uR')]())this[_0x56b8f3(0x207,')63H')]()&&this[_0x56b8f3(0x23d,'!qBH')]&&(_0x5276d7['headers']=_0x5276d7['headers']||{},Object['assign'](_0x5276d7[_0x1fb2e9(0x155)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x5044bf](_0x5276d7,(_0x1face9,_0x15c388,_0x569933)=>{const _0x3dcc49=_0x56b8f3;!_0x1face9&&_0x15c388&&(_0x15c388['body']=_0x569933,_0x15c388[_0x3dcc49(0x130,'wrd9')]=_0x15c388['status']),_0x5ea7cb(_0x1face9,_0x15c388,_0x569933);});else{if(this[_0x56b8f3(0x157,'VbCT')]())_0x5276d7[_0x56b8f3(0x152,')63H')]=_0x5044bf,this[_0x56b8f3(0x189,'BG10')]&&(_0x5276d7['opts']=_0x5276d7[_0x1fb2e9(0x150)]||{},Object[_0x1fb2e9(0x1dd)](_0x5276d7['opts'],{'hints':!0x1})),$task['fetch'](_0x5276d7)['then'](_0x549b38=>{const {statusCode:_0x303aa3,statusCode:_0x5c3a60,headers:_0x15f399,body:_0x1639e3}=_0x549b38;_0x5ea7cb(null,{'status':_0x303aa3,'statusCode':_0x5c3a60,'headers':_0x15f399,'body':_0x1639e3},_0x1639e3);},_0x387700=>_0x5ea7cb(_0x387700));else{if(this[_0x56b8f3(0x131,'3Ltz')]()){let _0x552ded=require(_0x1fb2e9(0x122));this[_0x56b8f3(0x238,'5OCb')](_0x5276d7);const {url:_0x202a0c,..._0x5826f1}=_0x5276d7;this['got'][_0x5044bf](_0x202a0c,_0x5826f1)['then'](_0x5e57b4=>{const _0x15504c=_0x56b8f3,{statusCode:_0xa1d737,statusCode:_0x295f68,headers:_0x4d0b15,rawBody:_0xe9bd80}=_0x5e57b4;_0x5ea7cb(null,{'status':_0xa1d737,'statusCode':_0x295f68,'headers':_0x4d0b15,'rawBody':_0xe9bd80},_0x552ded[_0x15504c(0x177,'!qBH')](_0xe9bd80,this['encoding']));},_0x596dbe=>{const _0x5c4c45=_0x1fb2e9,_0x212ba8=_0x56b8f3,{message:_0x2fc66c,response:_0x5672c5}=_0x596dbe;_0x5ea7cb(_0x2fc66c,_0x5672c5,_0x5672c5&&_0x552ded[_0x212ba8(0xfe,'JUjD')](_0x5672c5[_0x5c4c45(0x173)],this[_0x212ba8(0x17b,'!qBH')]));});}}}}[_0x5bfcf0(0xfc)](_0x20567b,_0x4c2c01=null){const _0x55b41b=_0x5bfcf0,_0x308d88=_0x5cf2f3,_0x5ba0ec=_0x4c2c01?new Date(_0x4c2c01):new Date();let _0x4ca93e={'M+':_0x5ba0ec['getMonth']()+0x1,'d+':_0x5ba0ec[_0x308d88(0x137,'oAGR')](),'H+':_0x5ba0ec[_0x55b41b(0x1e5)](),'m+':_0x5ba0ec[_0x55b41b(0x127)](),'s+':_0x5ba0ec[_0x55b41b(0x1f6)](),'q+':Math[_0x308d88(0x1c5,'iOAI')]((_0x5ba0ec[_0x55b41b(0x154)]()+0x3)/0x3),'S':_0x5ba0ec[_0x308d88(0x1f5,'&jh)')]()};/(y+)/[_0x308d88(0x129,'aQ**')](_0x20567b)&&(_0x20567b=_0x20567b[_0x55b41b(0x22e)](RegExp['$1'],(_0x5ba0ec['getFullYear']()+'')[_0x308d88(0x1b3,'Ls14')](0x4-RegExp['$1'][_0x55b41b(0x1db)])));for(let _0x478d43 in _0x4ca93e)new RegExp('('+_0x478d43+')')['test'](_0x20567b)&&(_0x20567b=_0x20567b[_0x308d88(0x158,'JUjD')](RegExp['$1'],0x1==RegExp['$1'][_0x308d88(0x19a,'*WtC')]?_0x4ca93e[_0x478d43]:('00'+_0x4ca93e[_0x478d43])[_0x308d88(0x1b5,'WG3]')]((''+_0x4ca93e[_0x478d43])[_0x55b41b(0x1db)])));return _0x20567b;}['msg'](_0x4dc343=_0x28c47c,_0x19698d='',_0x483560='',_0x3a9c37){const _0x11640e=_0x5bfcf0,_0x4a65e8=_0x5cf2f3,_0x1fd630=_0x4d94d3=>{const _0x32944a=_0xe007,_0x339c1b=_0x5b6d;if(!_0x4d94d3)return _0x4d94d3;if(_0x339c1b(0x1ac)==typeof _0x4d94d3)return this[_0x339c1b(0x1b8)]()?_0x4d94d3:this[_0x339c1b(0xf2)]()?{'open-url':_0x4d94d3}:this[_0x339c1b(0xf5)]()?{'url':_0x4d94d3}:void 0x0;if(_0x339c1b(0x1ee)==typeof _0x4d94d3){if(this[_0x32944a(0x1bf,'3Ltz')]()){let _0x112677=_0x4d94d3[_0x32944a(0x175,'aN6W')]||_0x4d94d3[_0x339c1b(0x239)]||_0x4d94d3[_0x339c1b(0x1ec)],_0xea58f2=_0x4d94d3[_0x339c1b(0x153)]||_0x4d94d3[_0x339c1b(0x10c)];return{'openUrl':_0x112677,'mediaUrl':_0xea58f2};}if(this[_0x339c1b(0xf2)]()){let _0x25cd1d=_0x4d94d3[_0x339c1b(0x1ec)]||_0x4d94d3[_0x32944a(0x134,')63H')]||_0x4d94d3[_0x339c1b(0x22d)],_0x5e9d64=_0x4d94d3[_0x339c1b(0x10c)]||_0x4d94d3[_0x32944a(0x1ca,'z0gb')];return{'open-url':_0x25cd1d,'media-url':_0x5e9d64};}if(this[_0x32944a(0x22c,')puP')]()){let _0x54cc8d=_0x4d94d3[_0x32944a(0x18c,'wrd9')]||_0x4d94d3[_0x32944a(0x21f,'1XnN')]||_0x4d94d3['open-url'];return{'url':_0x54cc8d};}}};if(this[_0x4a65e8(0x163,'5DP#')]||(this[_0x4a65e8(0xf1,'zdEj')]()||this['isLoon']()?$notification['post'](_0x4dc343,_0x19698d,_0x483560,_0x1fd630(_0x3a9c37)):this[_0x11640e(0xf2)]()&&$notify(_0x4dc343,_0x19698d,_0x483560,_0x1fd630(_0x3a9c37))),!this[_0x4a65e8(0x1f4,'sdtV')]){let _0x310702=['',_0x11640e(0x237)];_0x310702[_0x4a65e8(0x21d,'!qBH')](_0x4dc343),_0x19698d&&_0x310702[_0x4a65e8(0x143,'aQ**')](_0x19698d),_0x483560&&_0x310702[_0x4a65e8(0x13f,'wrd9')](_0x483560),console[_0x11640e(0x1ab)](_0x310702[_0x4a65e8(0x24c,'z0gb')]('\x0a')),this[_0x11640e(0x20c)]=this[_0x4a65e8(0x16e,'wrd9')][_0x4a65e8(0x1a8,'ia2T')](_0x310702);}}[_0x5cf2f3(0x205,'oAGR')](..._0x35de5d){const _0x901a1a=_0x5bfcf0,_0xad8f7c=_0x5cf2f3;_0x35de5d[_0xad8f7c(0x240,')wyq')]>0x0&&(this[_0x901a1a(0x20c)]=[...this['logs'],..._0x35de5d]),console[_0xad8f7c(0x145,'uuWb')](_0x35de5d[_0x901a1a(0x1cd)](this[_0x901a1a(0x112)]));}[_0x5cf2f3(0x250,'uEFB')](_0x4501a1,_0x592d76){const _0x5ccee4=_0x5bfcf0,_0x2d65d0=_0x5cf2f3,_0x4f38aa=!this['isSurge']()&&!this[_0x2d65d0(0x1ed,'ZA2u')]()&&!this[_0x5ccee4(0x1b8)]();_0x4f38aa?this[_0x5ccee4(0x1ab)]('','❗️'+this[_0x2d65d0(0x243,'^jj%')]+_0x2d65d0(0x162,'@id#'),_0x4501a1[_0x2d65d0(0x1c2,'BG10')]):this[_0x2d65d0(0x13b,'pi7V')]('','❗️'+this[_0x5ccee4(0x245)]+_0x2d65d0(0x1d4,'xpCP'),_0x4501a1);}[_0x5cf2f3(0x1be,'@id#')](_0x47c55c){return new Promise(_0x148b3b=>setTimeout(_0x148b3b,_0x47c55c));}['done'](_0x59a184={}){const _0x52c84c=_0x5cf2f3,_0x5d82c9=_0x5bfcf0,_0x1f35df=new Date()[_0x5d82c9(0x187)](),_0x37ff64=(_0x1f35df-this[_0x52c84c(0x236,'sdtV')])/0x3e8;this[_0x5d82c9(0x1ab)]('','🔔'+this[_0x52c84c(0x160,'p!2F')]+_0x52c84c(0x203,'uEFB')+_0x37ff64+'\x20秒'),this[_0x52c84c(0x216,'5OCb')](),(this[_0x5d82c9(0xf5)]()||this[_0x5d82c9(0xf2)]()||this[_0x5d82c9(0x1b8)]())&&$done(_0x59a184);}}(_0x28c47c,_0x184a52);}