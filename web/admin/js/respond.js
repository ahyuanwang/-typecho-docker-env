!function(g){var d,h,f,b,c;g.matchMedia=g.matchMedia||(g=g.document,h=g.documentElement,f=h.firstElementChild||h.firstChild,b=g.createElement("body"),(c=g.createElement("div")).id="mq-test-1",c.style.cssText="position:absolute;top:-100em",b.style.background="none",b.appendChild(c),function(a){return c.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',h.insertBefore(b,f),d=42===c.offsetWidth,h.removeChild(b),{matches:d,media:a}})}(this),function(P){var R={};(P.respond=R).update=function(){};function Q(c,b){var g=F();g&&(g.open("GET",c,!0),g.onreadystatechange=function(){4!==g.readyState||200!==g.status&&304!==g.status||b(g.responseText)},4!==g.readyState&&g.send(null))}function I(b){return b.replace(R.regex.minmaxwh,"").match(R.regex.other)}var k,q,D,A,u,O,f,H,a,G,U,d,j,h,J,N,B,L=[],F=function(){var b=!1;try{b=new P.XMLHttpRequest}catch(c){b=new P.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();function K(){h(!0)}R.ajax=Q,R.queue=L,R.unsupportedmq=I,R.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},R.mediaQueriesSupported=P.matchMedia&&null!==P.matchMedia("only all")&&P.matchMedia("only all").matches,R.mediaQueriesSupported||(k=P.document,q=k.documentElement,D=[],A=[],u=[],O={},f=k.getElementsByTagName("head")[0]||q,H=k.getElementsByTagName("base")[0],a=f.getElementsByTagName("link"),j=function(){var m,g=k.createElement("div"),o=k.body,l=q.style.fontSize,b=o&&o.style.fontSize,c=!1;return g.style.cssText="position:absolute;font-size:1em;width:1em",o||((o=c=k.createElement("body")).style.background="none"),q.style.fontSize="100%",o.style.fontSize="100%",o.appendChild(g),c&&q.insertBefore(o,q.firstChild),m=g.offsetWidth,c?q.removeChild(o):o.removeChild(g),q.style.fontSize=l,b&&(o.style.fontSize=b),d=parseFloat(m)},h=function(M){var X,w,Y,V,z,b,v,y,x,S,C="clientWidth",W=q[C],T="CSS1Compat"===k.compatMode&&W||k.body[C]||W,g={},E=a[a.length-1],W=(new Date).getTime();if(M&&G&&W-G<30){return P.clearTimeout(U),void (U=P.setTimeout(h,30))}for(X in G=W,D){D.hasOwnProperty(X)&&(Y=null===(z=(w=D[X]).minw),V=null===(b=w.maxw),z=z&&parseFloat(z)*(-1<z.indexOf("em")?d||j():1),b=b&&parseFloat(b)*(-1<b.indexOf("em")?d||j():1),w.hasquery&&(Y&&V||!(Y||z<=T)||!(V||T<=b))||(g[w.media]||(g[w.media]=[]),g[w.media].push(A[w.rules])))}for(v in u){u.hasOwnProperty(v)&&u[v]&&u[v].parentNode===f&&f.removeChild(u[v])}for(y in u.length=0,g){g.hasOwnProperty(y)&&(x=k.createElement("style"),S=g[y].join("\n"),x.type="text/css",x.media=y,f.insertBefore(x,E.nextSibling),x.styleSheet?x.styleSheet.cssText=S:x.appendChild(k.createTextNode(S)),u.push(x))}},J=function(y,M,g){function S(i){return i.replace(R.regex.urls,"$1"+M+"$2$3")}var C=y.replace(R.regex.comments,"").replace(R.regex.keyframes,"").match(R.regex.media),w=C&&C.length||0,b=!w&&g;(M=M.substring(0,M.lastIndexOf("/"))).length&&(M+="/"),b&&(w=1);for(var c,v,p,z,x=0;x<w;x++){b?(c=g,A.push(S(y))):(c=C[x].match(R.regex.findStyles)&&RegExp.$1,A.push(RegExp.$2&&S(RegExp.$2))),z=(p=c.split(",")).length;for(var E=0;E<z;E++){v=p[E],I(v)||D.push({media:v.split("(")[0].match(R.regex.only)&&RegExp.$2||"all",rules:A.length-1,hasquery:-1<v.indexOf("("),minw:v.match(R.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:v.match(R.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}h()},N=function(){var b;L.length&&(b=L.shift(),Q(b.href,function(c){J(c,b.href,b.media),O[b.href]=!0,P.setTimeout(function(){N()},0)}))},(B=function(){for(var i=0;i<a.length;i++){var c=a[i],l=c.href,g=c.media,b=c.rel&&"stylesheet"===c.rel.toLowerCase();l&&b&&!O[l]&&(c.styleSheet&&c.styleSheet.rawCssText?(J(c.styleSheet.rawCssText,l,g),O[l]=!0):(/^([a-zA-Z:]*\/\/)/.test(l)||H)&&l.replace(RegExp.$1,"").split("/")[0]!==P.location.host||("//"===l.substring(0,2)&&(l=P.location.protocol+l),L.push({href:l,media:g})))}N()})(),R.update=B,R.getEmValue=j,P.addEventListener?P.addEventListener("resize",K,!1):P.attachEvent&&P.attachEvent("onresize",K))}(this);