!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],s=t.base?a[0]+t.base:a[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=c(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:b(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function b(e,t){var n,r,o;if(t.singleton){var a=h++;n=m||(m=u(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=a}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'body{background-color:#3e607a}nav{padding-top:9px;background-color:#1d2e3b;height:56px;box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)}#content{margin:10vh auto;background-color:#eee;box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)}#content span{font-size:1.2em}.attribution{position:absolute;bottom:0;right:0;color:#000;text-shadow:0 4px 5px 0 rgba(0,0,0,0.14)}.attribution a{color:#a3a3a3}.switch{position:relative;display:inline-block;width:60px;height:34px;margin-top:2px}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#6396bd;-webkit-transition:0.4s;transition:0.4s}.slider::before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#007bff;-webkit-transition:0.4s;transition:0.4s}input:checked+.slider::before{-webkit-transform:translateX(15px);-ms-transform:translateX(15px);transform:translateX(15px)}.temperatureLabel{color:white;margin-top:9px;margin-left:14px;margin-right:14px}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);n(0);const r={getCountryWeather:(e,t)=>new Promise((n,r)=>{fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=${t}`,{mode:"cors"}).catch(e=>{r(Error(e.json()))}).then(e=>{200===e.status?n(e.json()):404===e.status&&r(Error("The country was not found"))})}).then(e=>e).catch(e=>e)};const o=(()=>{const e=(e,t,n,r=null)=>{const o=document.createElement("h"+n);if(null!=r)for(let e=0;e<r.length;e+=1)o.classList.add(r[e]);return o.innerHTML=t,e.append(o),o},t=(e,t,n=null)=>{const r=document.createElement("img");if(null!=n)for(let e=0;e<n.length;e+=1)r.classList.add(n[e]);return r.src=t,e.append(r),r},n=(e,t=null)=>{const n=document.createElement("div");if(null!=t)for(let e=0;e<t.length;e+=1)n.classList.add(t[e]);return e.append(n),n},r=(e,t,n=null)=>{const r=document.createElement("span");if(null!=n)for(let e=0;e<n.length;e+=1)r.classList.add(n[e]);return r.innerHTML=t,e.append(r),r};return{drawWeather:(o,a,i)=>{o.innerHTML="",e(o,a.name,2,["text-center"]),r(o,a.weather[0].description),t(o,`../img/${a.weather[0].icon}.svg`,["w-75","h-auto"]);const c=n(o,["w-75","d-flex","flex-column"]),s=n(c,["w-100","d-flex","flex-row","justify-content-between"]);"°C"===i?(r(s,`Temperature: ${(a.main.temp-273.1).toFixed(2)} °C`),r(s,`Feels like: ${(a.main.feels_like-273.1).toFixed(2)} °C`)):(r(s,`Temperature: ${(1.8*(a.main.temp-273.1)+32).toFixed(2)} °F`),r(s,`Temperature: ${(1.8*(a.main.feels_like-273.1)+32).toFixed(2)} °F`))},drawError:(n,r)=>{n.innerHTML="",e(n,r,2,["my-3"]),t(n,"../img/sad.svg",["w-75","h-auto","my-3"])}}})();window.onload=function(){const e=document.getElementById("city-input"),t=document.getElementById("search-button"),n=document.getElementById("content"),a=document.getElementById("t-scale");t.addEventListener("click",()=>{let t;t=a.checked?"°F":"°C";r.getCountryWeather(e.value,"a50424f7c35e339cf565a9addc478655").then(e=>{e instanceof Error?o.drawError(n,"Error: "+e.message):o.drawWeather(n,e,t)})}),e.addEventListener("keyup",e=>{13===e.keyCode&&(e.preventDefault(),t.click())})}}]);