(function(){function e(f,b,d){if(void 0===b)return decodeURIComponent(document.cookie.replace(RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(f).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;var c=document.domain.split(".").slice(-2).join("."),a=new Date;null===b?(a.setTime(0),b=""):a.setTime(a.getTime()+d*1E3);d=a.toGMTString();document.cookie=encodeURIComponent(f)+"="+encodeURIComponent(b)+";expires="+d+";domain="+c+";path=/"}var c=document.getElementById("page_config"),
a=c?JSON.parse(c.text||"{}"):{},c=e("_cdn"),a=a.cdn_check_var;sessionStorage.getItem("cdn")&&setTimeout(function(){var a=new Image,b="cdn"+(new Date).getTime();a.src="//trace"+b+".intsig.net/1.jpg";a.onerror=a.onload=function(){sessionStorage.removeItem("cdn");var a=document.createElement("script");a.src="//"+document.domain.split(".").slice(-2).join(".")+"/cdn/dns?trace="+b;document.getElementsByTagName("body")[0].appendChild(a)}},1E3);a&&!window[a]&&!c&&(e("_cdn",1),sessionStorage.setItem("cdn",
"1"),location.reload())})();