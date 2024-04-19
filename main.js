(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>f});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),d=t.n(c),s=new URL(t(449),t.b),l=new URL(t(650),t.b),p=i()(r()),u=d()(s),m=d()(l);p.push([e.id,`@font-face {\n    font-family: 'Roboto';\n    src: url(${u}) format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    font-family: "Roboto";\n    background: url(${m});\n}\n\nheader {\n    position: sticky;\n    left: 0;\n    top: 0;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: gold;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n#logo {\n    position: absolute;\n}\n\n#logo>img {\n    width: 75px;\n}\n\nnav>button {\n    margin: 0 20px;\n    padding: 15px 20px;\n    font-size: 1.5rem;\n    font-weight: bold;\n    border-radius: 8px;\n    border: none;\n    color: gold;\n    background-color: #272727;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    transition:\n        color 0.2s ease-in-out,\n        background-color 0.2s ease-in-out,\n        transform 0.2s ease-in-out;\n    cursor: pointer;\n}\n\nnav>button:hover {\n    color: orange;\n    background-color: #191919;\n    transform: scale(1.1);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n}\n\n#content>h1 {\n    text-align: center;\n    margin: 40px 0 20px 0;\n    font-size: 3rem;\n    font-weight: bold;\n    text-shadow: 0 0 5px #000000;\n    color: gold;\n}\n\n.info {\n    width: 60%;\n    font-weight: bold;\n    text-align: justify;\n}\n\n.hours {\n    width: 30%;\n}\n\n.box {\n    margin: 20px;\n    padding: 20px;\n    font-size: 1.5rem;\n    border-radius: 8px;\n    color: whitesmoke;\n    border: 2px solid rgba(255, 215, 0, 0.5);\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.box>h2 {\n    margin-bottom: 20px;\n    text-shadow: 0 0 5px #000000;\n    color: gold;\n}\n\n.week-days {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.week-days>p {\n    margin: 0 15px;\n    padding: 5px 0;\n}\n\n.week-days>p:nth-child(odd) {\n    text-align: right;\n    font-weight: bold;\n}\n\n.colored {\n    color: #dcdcdc;\n}\n\n.price {\n    color: gold;\n    padding: 10px 0;\n    text-align: right;\n}\n\n.contact {\n    padding-bottom: 20px;\n    margin-bottom: 20px;\n    border-bottom: 1px solid rgba(255, 215, 0, 0.5);\n}\n\n.price:not(:last-child) {\n    margin-bottom: 30px;\n    border-bottom: 1px solid rgba(255, 215, 0, 0.5);\n}\n\nfooter {\n\n    width: 100%;\n    padding: 10px;\n    text-align: center;\n    font-size: 1.25rem;\n    font-weight: bold;\n    background-color: gold;\n}`,""]);const f=p},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},449:(e,n,t)=>{e.exports=t.p+"fc2b5060f7accec5cf74.ttf"},650:(e,n,t)=>{e.exports=t.p+"f3d2e7876c4e0b87090d.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function e(){const e=document.getElementById("content"),n=document.createElement("h1");n.innerText="Golden Taste",e.appendChild(n);const t=document.createElement("div");t.classList.add("box","info");const o=document.createElement("p");o.innerText="Welcome to Golden Taste, where culinary mastery meets elegance. Indulge in a symphony of flavors meticulously crafted by our acclaimed chefs, showcasing the finest ingredients sourced globally. Immerse yourself in a dining experience where each dish is a masterpiece, paired with exceptional service in an ambiance of luxury and sophistication. Discover the epitome of gastronomic excellence at Golden Taste.",t.appendChild(o),e.appendChild(t);const r=document.createElement("div");r.classList.add("box","hours");const a=document.createElement("h2");a.style.textAlign="center",a.innerText="Hours",r.appendChild(a);const i=document.createElement("div");i.classList.add("week-days");const c=["Monday:","Tuesday:","Wednesday:","Thursday:","Friday:","Saturday:","Sunday:"],d=["8am - 10pm","8am - 10pm","8am - 10pm","8am - 10pm","8am - 10pm","8am - 10pm","8am - 10pm"];for(let e=0;e<7;e++){const n=document.createElement("p"),t=document.createElement("p");e%2==1&&(n.classList.add("colored"),t.classList.add("colored")),n.innerText=c[e],t.innerText=d[e],i.appendChild(n),i.appendChild(t)}r.appendChild(i),e.appendChild(r)}var n=t(72),o=t.n(n),r=t(825),a=t.n(r),i=t(659),c=t.n(i),d=t(56),s=t.n(d),l=t(540),p=t.n(l),u=t(113),m=t.n(u),f=t(365),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),o()(f.A,h),f.A&&f.A.locals&&f.A.locals;const g=t.p+"b747f96c47a4f1a7823c.png",x=document.querySelector("header"),b=document.getElementById("logo"),y=document.createElement("img");y.src=g,y.alt="restauront logo",y.onload=function(){let e=(x.offsetHeight-b.offsetHeight)/2;b.style.top=`${e}px`,b.style.left=`${e}px`},b.appendChild(y);const v=document.querySelector(".home-btn"),w=document.querySelector(".menu-btn"),E=document.querySelector(".contact-btn");function C(){const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)}v.addEventListener("click",(()=>{C(),e()})),w.addEventListener("click",(()=>{C(),function(){const e=document.getElementById("content"),n=document.createElement("h1");n.innerText="Menu",e.appendChild(n);const t=document.createElement("div");t.classList.add("box"),[{name:"Martini",description:"A timeless classic made with gin or vodka, vermouth, and garnished with an olive or lemon twist.",price:"$15"},{name:"Old Fashioned",description:"Bourbon or rye whiskey muddled with sugar, bitters, and a twist of orange peel.",price:"$18"},{name:"Negroni",description:"A sophisticated blend of gin, Campari, and sweet vermouth, served with an orange slice.",price:"$16"},{name:"Margarita",description:"Tequila, triple sec, lime juice, and simple syrup, served with a salted rim.",price:"$14"}].forEach((e=>{const n=document.createElement("h2");n.innerText=e.name,t.appendChild(n);const o=document.createElement("p");o.innerText=e.description,t.appendChild(o);const r=document.createElement("p");r.classList.add("price"),r.innerText=e.price,t.appendChild(r)})),e.appendChild(t)}()})),E.addEventListener("click",(()=>{C(),function(){const e=document.getElementById("content"),n=document.createElement("h1");n.innerText="Contact",e.appendChild(n);const t=document.createElement("div");t.classList.add("box");const o=document.createElement("h2");o.innerText="E-mail",t.appendChild(o);const r=document.createElement("p");r.classList.add("contact"),r.innerText="golden@taste.com",t.appendChild(r);const a=document.createElement("h2");a.innerText="Phone Number",t.appendChild(a);const i=document.createElement("p");i.classList.add("contact"),i.innerText="+1 416-868-6937",t.appendChild(i);const c=document.createElement("h2");c.innerText="Address",t.appendChild(c);const d=document.createElement("p");d.innerText="290 Bremner Blvd, Toronto",t.appendChild(d),e.appendChild(t)}()})),e()})()})();