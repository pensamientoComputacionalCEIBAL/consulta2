const _0x33bc53=_0x4776;(function(_0x559b71,_0x42e01d){const _0x279b0d=_0x4776,_0x2b906f=_0x559b71();while(!![]){try{const _0x15b0fb=-parseInt(_0x279b0d(0x94))/0x1*(parseInt(_0x279b0d(0xa9))/0x2)+parseInt(_0x279b0d(0x98))/0x3*(-parseInt(_0x279b0d(0xa5))/0x4)+-parseInt(_0x279b0d(0x81))/0x5*(-parseInt(_0x279b0d(0x84))/0x6)+-parseInt(_0x279b0d(0x82))/0x7+parseInt(_0x279b0d(0x9e))/0x8+parseInt(_0x279b0d(0x96))/0x9*(-parseInt(_0x279b0d(0x83))/0xa)+parseInt(_0x279b0d(0x9f))/0xb*(parseInt(_0x279b0d(0xa1))/0xc);if(_0x15b0fb===_0x42e01d)break;else _0x2b906f['push'](_0x2b906f['shift']());}catch(_0x3403fc){_0x2b906f['push'](_0x2b906f['shift']());}}}(_0x4182,0x33bc4));const api=new XMLHttpRequest();let repechaje,documento;$(document)[_0x33bc53(0x8f)](function(){const _0x33dca3=_0x33bc53;$(_0x33dca3(0x8c))[_0x33dca3(0x9d)](function(){const _0x2ad47a=_0x33dca3;determinarBusqueda(),$(_0x2ad47a(0x9c))[_0x2ad47a(0x93)]();}),$('#tipo')[_0x33dca3(0xa8)](function(){const _0x4f2cfa=_0x33dca3;$(_0x4f2cfa(0x9c))[_0x4f2cfa(0x93)]();}),$(_0x33dca3(0x9c))[_0x33dca3(0x8b)](function(_0x313a41){const _0x506554=_0x33dca3;let _0x290258=_0x313a41[_0x506554(0x99)]?_0x313a41[_0x506554(0x99)]:_0x313a41[_0x506554(0x9a)];if(_0x290258==0xd)return determinarBusqueda(),$(_0x506554(0x9c))[_0x506554(0x93)](),![];}),$('#documento')[_0x33dca3(0x93)]();});function _0x4776(_0x3ac653,_0x425c39){const _0x4182fb=_0x4182();return _0x4776=function(_0x4776ce,_0xb6c2ac){_0x4776ce=_0x4776ce-0x7b;let _0x61317d=_0x4182fb[_0x4776ce];return _0x61317d;},_0x4776(_0x3ac653,_0x425c39);}function determinarBusqueda(){const _0x1d9ebc=_0x33bc53;$('#documento')[_0x1d9ebc(0x7e)]()!=''?buscarInfo():$(_0x1d9ebc(0x7b))[_0x1d9ebc(0xa4)](_0x1d9ebc(0x7d));}function buscarInfo(){const _0x295b68=_0x33bc53;let _0x47709f=null;_0x47709f=_0x295b68(0x97);let _0x4c108a=_0x295b68(0xa6);url='https://content-sheets.googleapis.com/v4/spreadsheets/'+_0x47709f+_0x295b68(0x87)+_0x4c108a+'&key='+_0x4c108a,api[_0x295b68(0xa7)](_0x295b68(0x95),url,!![]),api[_0x295b68(0x8e)](),validadorDeConsulta=0x0,$(_0x295b68(0x7b))[_0x295b68(0xa4)]('¡Tu\x20petición\x20está\x20siendo\x20procesada!,\x20<b>por\x20favor\x20espera…</b>'),$(_0x295b68(0x8c))[_0x295b68(0x7c)](_0x295b68(0x8a)),api[_0x295b68(0x7f)]=function(){const _0x27d210=_0x295b68;if(this['status']==0x1f4)sinResultados();else{if(this[_0x27d210(0x8d)]==0xc8&&this[_0x27d210(0x91)]==0x4){datos=JSON[_0x27d210(0x92)](this[_0x27d210(0xa3)]);if(datos[_0x27d210(0x89)][_0x27d210(0x86)]!='0'){let _0x478df6=0x0;while(_0x478df6<=datos['values'][_0x27d210(0x86)]-0x1){datos[_0x27d210(0x89)][_0x478df6][0x0]==$(_0x27d210(0x9c))['val']()&&(validadorDeConsulta=0x1,documento=datos['values'][_0x478df6][0x0],$(_0x27d210(0x7b))[_0x27d210(0xa4)](_0x27d210(0xa2)+documento+_0x27d210(0x88)),datos['values'][_0x478df6][0x1]!=null&&datos[_0x27d210(0x89)][_0x478df6][0x1]!=''&&$('#resultados')[_0x27d210(0xa4)]($(_0x27d210(0x7b))[_0x27d210(0xa4)]()+_0x27d210(0x90)+datos[_0x27d210(0x89)][_0x478df6][0x1]+_0x27d210(0x88)),datos[_0x27d210(0x89)][_0x478df6][0x2]!=null&&datos[_0x27d210(0x89)][_0x478df6][0x2]!=''&&$(_0x27d210(0x7b))[_0x27d210(0xa4)]($(_0x27d210(0x7b))[_0x27d210(0xa4)]()+_0x27d210(0xa0)+datos[_0x27d210(0x89)][_0x478df6][0x2]+_0x27d210(0x88)),datos[_0x27d210(0x89)][_0x478df6][0x3]!=null&&datos[_0x27d210(0x89)][_0x478df6][0x3]!=''&&$('#resultados')['html']($('#resultados')[_0x27d210(0xa4)]()+_0x27d210(0x85)+datos[_0x27d210(0x89)][_0x478df6][0x3]+'</b><br>'),datos['values'][_0x478df6][0x4]!=null&&datos[_0x27d210(0x89)][_0x478df6][0x4]!=''&&$('#resultados')[_0x27d210(0xa4)]($(_0x27d210(0x7b))[_0x27d210(0xa4)]()+'-\x20Módulo\x204:\x20<b>'+datos[_0x27d210(0x89)][_0x478df6][0x4]+_0x27d210(0x88)),datos[_0x27d210(0x89)][_0x478df6][0x5]!=null&&datos[_0x27d210(0x89)][_0x478df6][0x5]!=''&&$('#resultados')[_0x27d210(0xa4)]($('#resultados')[_0x27d210(0xa4)]()+'-\x20Módulo\x205:\x20<b>'+datos[_0x27d210(0x89)][_0x478df6][0x5]+'</b><br>'),datos[_0x27d210(0x89)][_0x478df6][0x6]!=null&&datos[_0x27d210(0x89)][_0x478df6][0x6]!=''&&$(_0x27d210(0x7b))['html']($(_0x27d210(0x7b))['html']()+_0x27d210(0x9b)+datos['values'][_0x478df6][0x6]+_0x27d210(0x88)),_0x478df6=datos['values'][_0x27d210(0x86)]),_0x478df6++;}}}}validadorDeConsulta==0x0&&sinResultados(),$('#vDocumento')[_0x27d210(0x80)](_0x27d210(0x8a));},$(_0x295b68(0x9c))[_0x295b68(0x93)]();}function _0x4182(){const _0x8c4a7b=['14466SogKma','-\x20Módulo\x203:\x20<b>','length','/values/A:G?access_token=','</b><br>','values','disabled','keypress','#vDocumento','status','send','ready','-\x20Módulo\x201:\x20<b>','readyState','parse','focus','1WHgOxS','GET','80298hqzkyq','15pgVfrbxGVI4cmksfg4bWGr465xrQfIL79XWh3YZNoM','159ZXHahh','keyCode','which','-\x20Módulo\x206:\x20<b>','#documento','click','2246752BDsKEi','26752iHUFPI','-\x20Módulo\x202:\x20<b>','2976ZxQcWv','Información\x20para\x20el\x20documento:\x20<b>','responseText','html','13880CfuOvj','AIzaSyAVvMA2r0J3skLgWq2g0JX6facQN9BXsXM','open','change','637596QVYXvi','#resultados','addClass','¡Ups!,\x20<b>¡no\x20has\x20ingresado\x20documento!</b>','val','onreadystatechange','removeClass','585fRKbzA','349727UQqXND','450zKNFVd'];_0x4182=function(){return _0x8c4a7b;};return _0x4182();}function sinResultados(){const _0x3ce95b=_0x33bc53;$(_0x3ce95b(0x7b))[_0x3ce95b(0xa4)]('¡Ups!,\x20<b>¡no\x20hay\x20resultados\x20para\x20el\x20documento\x20ingresado!.</b>');}