(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{212:function(e,t,r){__NEXT_REGISTER_PAGE("/",function(){return e.exports=r(241),{page:e.exports.default}})},213:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.flush=function(){var e=a.cssRules();return a.flush(),e};var i,o=r(0),s=r(214);var a=new((i=s)&&i.__esModule?i:{default:i}).default,c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.prevProps={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.styleId!==e.styleId||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){a.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.styleId&&a.remove(this.prevProps),a.add(this.props),this.prevProps=this.props),null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],r=e[1];return a.computeId(t,r)}).join(" ")}}]),t}();t.default=c},214:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=s(r(215)),o=s(r(216));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,c=void 0===a?"undefined"!=typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return n(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[n]=o,this._instancesCounts[n]=1}}},{key:"remove",value:function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join("\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var n=String(r),o=t+n;return e[o]||(e[o]="jsx-"+(0,i.default)(t+"-"+n)),e[o]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var r=this.computeId(e.styleId,e.dynamic);return{styleId:r,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(r,e)}):[this.computeSelector(r,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=a},215:function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},216:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var n=e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,o=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,c=void 0===a?n:a,l=t.isBrowser,u=void 0===l?"undefined"!=typeof window:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"==typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}return r(e,[{key:"setOptimizeForSpeed",value:function(e){s("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,r){return r?t=t.concat(e.getSheetForTag(r).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,r){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n}},{key:"length",get:function(){return this._rulesCount}}]),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,r(217))},217:function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var c,l=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&f())}function f(){if(!u){var e=a(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||u||a(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},241:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),o=r(52),s=r(31),a=r.n(s),c=r(19),l=r.n(c);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,f(t).apply(this,arguments))}var r,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,n["Component"]),r=t,(o=[{key:"render",value:function(){return i.a.createElement("section",{className:"jsx-3274585195 hero"},i.a.createElement("style",{dangerouslySetInnerHTML:{__html:l.a}}),i.a.createElement("div",{className:"jsx-3274585195 hero-body"},i.a.createElement("div",{className:"jsx-3274585195 container"},i.a.createElement("figure",{className:"jsx-3274585195 image"},i.a.createElement("img",{src:"https://scontent.fgye3-1.fna.fbcdn.net/v/t1.0-9/51029392_2121719114548239_6795471245409255424_n.jpg?_nc_cat=107&_nc_ht=scontent.fgye3-1.fna&oh=837c025c808e411a7fb44412f1991b2a&oe=5CFD1159",alt:"image-portfolio",className:"jsx-3274585195 is-rounded"}))),i.a.createElement("div",{className:"jsx-3274585195 container has-text-centered"},i.a.createElement("h1",{className:"jsx-3274585195 title"},"Michael Orlando Sornoza Palma"),i.a.createElement("h2",{className:"jsx-3274585195 subtitle"},"Estudiante universitario y Frontend Developer"))),i.a.createElement(a.a,{styleId:"3274585195",css:[".image.jsx-3274585195{width:320px;margin-left:37%;}"]}))}}])&&d(r.prototype,o),s&&d(r,s),t}(),y=r(79),v=function(e){var t=e.title,r=e.imgUrl,n=e.description;return i.a.createElement("div",{className:"column is-one-quarter"},i.a.createElement("style",{dangerouslySetInnerHTML:{__html:l.a}}),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image"},i.a.createElement("img",{src:r,alt:"Placeholder image"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:r,alt:"Placeholder image"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-4"},t),i.a.createElement("p",{className:"subtitle is-6"},"@MichaelSornoza"))),i.a.createElement("div",{className:"content"},n))))},_=function(e){var t=e.certifies;return i.a.createElement("div",{className:"jsx-3599429145 container"},i.a.createElement("h1",{className:"jsx-3599429145 title"},"Certificados - Cursos"),i.a.createElement("div",{className:"jsx-3599429145 columns is-multiline"},t.map(function(e){return i.a.createElement(v,{title:e.title,imgUrl:e.imgUrl,description:e.description,key:e.id})})),i.a.createElement(a.a,{styleId:"3599429145",css:[".container.jsx-3599429145{padding:30px;box-shadow:0 2px 3px rgba(10,10,10,0.1),0 0 0 1px rgba(10,10,10,0.1);}"]}))},g=function(e){var t=e.title,r=e.imgUrl,n=e.link,o=e.repository,s=e.description;return i.a.createElement("div",{className:"column is-one-quarter"},i.a.createElement("style",{dangerouslySetInnerHTML:{__html:l.a}}),i.a.createElement("a",{href:n},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image"},i.a.createElement("img",{src:r,alt:"Placeholder image"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:r,alt:"Placeholder image"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-4"},t),i.a.createElement("a",{className:"subtitle is-4",href:o},"Repositorio"),i.a.createElement("p",{className:"subtitle is-6"},"@MichaelSornoza"))),i.a.createElement("div",{className:"content"},s)))))},b=function(e){var t=e.projects;return i.a.createElement("div",{className:"jsx-520984280 container"},i.a.createElement("h1",{className:"jsx-520984280 title"},"Proyectos"),i.a.createElement("div",{className:"jsx-520984280 columns is-multiline"},t.map(function(e){return i.a.createElement(g,{title:e.title,imgUrl:e.imgUrl,link:e.link,repository:e.repository,description:e.description,key:e.id})})),i.a.createElement(a.a,{styleId:"520984280",css:[".container.jsx-520984280{padding:30px;box-shadow:0 2px 3px rgba(10,10,10,0.1),0 0 0 1px rgba(10,10,10,0.1);margin-bottom:20px;}"]}))};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,E(t).apply(this,arguments))}var r,s,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,n["Component"]),r=t,(s=[{key:"render",value:function(){return i.a.createElement(o.a,null,i.a.createElement(m,null),i.a.createElement(b,{projects:y.projects}),i.a.createElement(_,{certifies:y.certifies}))}}])&&j(r.prototype,s),a&&j(r,a),t}();t.default=x},31:function(e,t,r){e.exports=r(213)},79:function(e){e.exports={certifies:[{title:"Curso de Desarrollo Web Online",imgUrl:"../static/certifies/web-dev.jpg",description:"Curso de Desarrollo Web realizado en Platzi.com",id:0},{title:"Curso de Fundamentos de JavaScript",imgUrl:"../static/certifies/javascript.jpg",description:"Curso de Fundamento de JavaScript realizado en Platzi.com",id:1},{title:"Curso Básico de VueJs",imgUrl:"../static/certifies/vue-basic.jpg",description:"Curso de VueJs básico realizado en Platzi.com",id:2},{title:"Curso Profesional de VueJs",imgUrl:"../static/certifies/vue-profesional.jpg",description:"Curso Profesional de VueJs realizado en Platzi.com",id:3},{title:"Curso de React",imgUrl:"../static/certifies/react-js.jpg",description:"Curso de React realizado en Platzi.com",id:4},{title:"Curso de Next.js",imgUrl:"../static/certifies/next-js.jpg",description:"Curso de Next.js realizado en Platzi.com",id:5}],projects:[{title:"Portafolio Leonidas Esteban",imgUrl:"../static/projects/portafolio-ls.jpg",link:"https://michaelsornoza.github.io/Portafolio",repository:"https://github.com/MichaelSornoza/Portafolio",description:"Practica de Html y Css aplicada en un portafolio realizado en el curso de Desarrollo Web Online de Platzi.com",id:0},{title:"Simón Dice",imgUrl:"../static/projects/simon-dice.jpg",link:"https://michaelsornoza.github.io/JavaScript-Project/",repository:"https://github.com/MichaelSornoza/JavaScript-Project",description:"Practica de JavaScript aplicado en el juego simón dice realizado en el curso de Fundamentos de JavaScript de Platzi.com",id:1},{title:"Platzi Music",imgUrl:"../static/projects/platzi-music.jpg",link:"https://platzi-music-a1xkaf1hz.now.sh/",repository:"https://github.com/MichaelSornoza/platzi-music",description:"Aplicación desarrollada en el curso Profesional de VueJs de platzi, utilizando una api enlazada a Spotify y haciendo un fetch mediante un Input, en busca de canciones.",id:2},{title:"Platzi Video",imgUrl:"../static/projects/platzi-video.jpg",link:"https://michaelsornoza.github.io/platzi-video/",repository:"https://github.com/MichaelSornoza/platzi-video",description:"Practica de React, aplicandola en una app que muestra y reproduce videos. Aplicamos un reproductos personalizado!",id:3}]}}},[[212,1,0]]]);