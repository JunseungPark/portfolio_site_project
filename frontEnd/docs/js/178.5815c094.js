(self["webpackChunkportfolio_template_master"]=self["webpackChunkportfolio_template_master"]||[]).push([[178],{6905:function(e,t,o){o(2801),o(1703),function(t,o){e.exports=o()}(0,(function(){return function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i=o(1),r=(n(i),o(6)),l=n(r),u=o(7),c=n(u),s=o(8),d=n(s),f=o(9),m=n(f),p=o(10),b=n(p),v=o(11),y=n(v),g=o(14),h=n(g),w=[],x=!1,k={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(x=!0),x)return w=(0,y.default)(w,k),(0,b.default)(w,k.once),w},M=function(){w=(0,h.default)(),_()},O=function(){w.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},j=function(e){return!0===e||"mobile"===e&&m.default.mobile()||"phone"===e&&m.default.phone()||"tablet"===e&&m.default.tablet()||"function"==typeof e&&!0===e()},S=function(e){k=a(k,e),w=(0,h.default)();var t=document.all&&!window.atob;return j(k.disable)||t?O():(k.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),k.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",k.easing),document.querySelector("body").setAttribute("data-aos-duration",k.duration),document.querySelector("body").setAttribute("data-aos-delay",k.delay),"DOMContentLoaded"===k.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?_(!0):"load"===k.startEvent?window.addEventListener(k.startEvent,(function(){_(!0)})):document.addEventListener(k.startEvent,(function(){_(!0)})),window.addEventListener("resize",(0,c.default)(_,k.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(_,k.debounceDelay,!0)),window.addEventListener("scroll",(0,l.default)((function(){(0,b.default)(w,k.once)}),k.throttleDelay)),k.disableMutationObserver||d.default.ready("[data-aos]",M),w)};e.exports={init:S,refresh:_,refreshHard:M}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e,t,o){function n(t){var o=b,n=v;return b=v=void 0,x=t,g=e.apply(n,o)}function i(e){return x=e,h=setTimeout(s,t),O?n(e):g}function r(e){var o=e-w,n=e-x,a=t-o;return j?_(a,y-n):a}function u(e){var o=e-w,n=e-x;return void 0===w||o>=t||o<0||j&&n>=y}function s(){var e=M();return u(e)?d(e):void(h=setTimeout(s,r(e)))}function d(e){return h=void 0,S&&b?n(e):(b=v=void 0,g)}function f(){void 0!==h&&clearTimeout(h),x=0,b=w=v=h=void 0}function m(){return void 0===h?g:d(M())}function p(){var e=M(),o=u(e);if(b=arguments,v=this,w=e,o){if(void 0===h)return i(w);if(j)return h=setTimeout(s,t),n(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,x=0,O=!1,j=!1,S=!0;if("function"!=typeof e)throw new TypeError(c);return t=l(t)||0,a(o)&&(O=!!o.leading,j="maxWait"in o,y=j?k(l(o.maxWait)||0,t):y,S="trailing"in o?!!o.trailing:S),p.cancel=f,p.flush=m,p}function n(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(c);return a(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),o(e,t,{leading:i,maxWait:t,trailing:r})}function a(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&x.call(e)==d}function l(e){if("number"==typeof e)return e;if(r(e))return s;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=p.test(e);return o||b.test(e)?v(e.slice(2),o?2:8):m.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,x=w.toString,k=Math.max,_=Math.min,M=function(){return h.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e,t,o){function a(t){var o=b,n=v;return b=v=void 0,M=t,g=e.apply(n,o)}function i(e){return M=e,h=setTimeout(s,t),O?a(e):g}function l(e){var o=e-w,n=e-M,a=t-o;return j?k(a,y-n):a}function c(e){var o=e-w,n=e-M;return void 0===w||o>=t||o<0||j&&n>=y}function s(){var e=_();return c(e)?d(e):void(h=setTimeout(s,l(e)))}function d(e){return h=void 0,S&&b?a(e):(b=v=void 0,g)}function f(){void 0!==h&&clearTimeout(h),M=0,b=w=v=h=void 0}function m(){return void 0===h?g:d(_())}function p(){var e=_(),o=c(e);if(b=arguments,v=this,w=e,o){if(void 0===h)return i(w);if(j)return h=setTimeout(s,t),a(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,M=0,O=!1,j=!1,S=!0;if("function"!=typeof e)throw new TypeError(u);return t=r(t)||0,n(o)&&(O=!!o.leading,j="maxWait"in o,y=j?x(r(o.maxWait)||0,t):y,S="trailing"in o?!!o.trailing:S),p.cancel=f,p.flush=m,p}function n(e){var t="undefined"==typeof e?"undefined":l(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":l(e))}function i(e){return"symbol"==("undefined"==typeof e?"undefined":l(e))||a(e)&&w.call(e)==s}function r(e){if("number"==typeof e)return e;if(i(e))return c;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var o=m.test(e);return o||p.test(e)?b(e.slice(2),o?2:8):f.test(e)?c:+e}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",c=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,p=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":l(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":l(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,x=Math.max,k=Math.min,_=function(){return g.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){"use strict";function o(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if(n=e[t],n.dataset&&n.dataset.aos)return!0;if(n.children&&o(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!n()}function i(e,t){var o=window.document,a=n(),i=new a(r);l=t,i.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),a=t.concat(n);if(o(a))return l()}))}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){};t.default={isSupported:a,ready:i}},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){o(this,e)}return a(e,[{key:"phone",value:function(){var e=n();return!(!i.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!l.test(e)&&!u.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,a=window.innerHeight;e.forEach((function(e,i){o(e,a+n,t)}))};t.default=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(12),i=n(a),r=function(e,t){return e.forEach((function(e,o){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)})),e};t.default=r},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(13),i=n(a),r=function(e,t){var o=0,n=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,i.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=a/2;break;case"bottom-center":o+=a/2+e.offsetHeight;break;case"center-center":o+=a/2+e.offsetHeight/2;break;case"top-top":o+=a;break;case"bottom-top":o+=e.offsetHeight+a;break;case"center-top":o+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),o+n};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=o}])}))},7273:function(e,t,o){"use strict";o.d(t,{Z:function(){return O}});var n=o(3396),a=o(9242);const i={class:"modal fade",ref:"modal",id:"TextEditModal",style:{"z-index":"1050 !important"},"data-bs-backdrop":"static","aria-labelledby":"TextEditModalLabel","aria-hidden":"true"},r={class:"modal-dialog modal-lg modal-dialog-centered"},l={class:"modal-content"},u={class:"modal-body"},c={class:"d-flex flex-column flex-wrap justify-content-start align-items-center"},s={class:"row align-items-center w-100 mb-3"},d=(0,n._)("div",{class:"col-3"},"글씨체: ",-1),f={class:"row w-100 mb-3"},m=(0,n._)("div",{class:"col-3"},"폰트 컬러 :",-1),p={class:"row w-100"},b=(0,n._)("div",{class:"col-3"},"백그라운드 컬러 :",-1),v={class:"modal-footer"};function y(e,t,o,y,g,h){const w=(0,n.up)("SelectVue");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",r,[(0,n._)("div",l,[(0,n._)("div",u,[(0,n._)("div",c,[(0,n._)("div",s,[d,(0,n.Wm)(w,{class:"col-6",selectedFont:y.layoutAttribute.fontFamily,onChangeFont:y.changeFont},null,8,["selectedFont","onChangeFont"])]),(0,n._)("div",f,[m,(0,n.wy)((0,n._)("input",{type:"color",class:"col-1","onUpdate:modelValue":t[0]||(t[0]=e=>y.layoutAttribute.color=e)},null,512),[[a.nr,y.layoutAttribute.color]])]),(0,n._)("div",p,[b,(0,n.wy)((0,n._)("input",{type:"color",class:"col-1","onUpdate:modelValue":t[1]||(t[1]=e=>y.layoutAttribute.backgroundColor=e)},null,512),[[a.nr,y.layoutAttribute.backgroundColor]])])])]),(0,n._)("div",v,[(0,n._)("button",{type:"button",class:"btn btn-secondary me-auto p-2",onClick:t[2]||(t[2]=(...e)=>y.hideModal&&y.hideModal(...e))},"닫기"),(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=(...e)=>y.editLayoutData&&y.editLayoutData(...e))},"데이터 변경")])])])],512)}var g=o(4870),h=o(806),w=o(2673),x=o(3313),k={name:"LayoutEditModal",components:{SelectVue:w.Z},props:{selectedLayoutAttribute:{type:Object},isShowMoadal:{type:Boolean}},emits:["hideModal","editTextData"],setup(e,t){const o="AIzaSyB98XK6TWV9Etb2TLOUvgJS0RSlT60nVVw",a=(0,g.iH)(null);let i=null;const r=(0,g.iH)({fontFamily:"",color:"",backgroundColor:""});let l=null;const u=()=>{r.value=l,t.emit("hideModal")},c=()=>{var e=(0,x.N9)(r.value.backgroundColor);t.emit("editLayoutData",e)},s=e=>{r.value.fontFamily=e};return(0,n.YP)((()=>e.isShowMoadal),(e=>{i&&(e?i.show():i.hide())})),(0,n.YP)((()=>e.selectedLayoutAttribute),(e=>{console.log(e),l||(l=JSON.parse(JSON.stringify(e))),r.value=e,console.log(r.value.font)})),(0,n.bv)((()=>{i=new h.u_(a.value)})),{googleKey:o,hideModal:u,editLayoutData:c,changeFont:s,modal:a,layoutAttribute:r}}},_=o(89);const M=(0,_.Z)(k,[["render",y]]);var O=M},9217:function(e,t,o){"use strict";o.d(t,{Z:function(){return g}});var n=o(3396),a=o(9242);const i={class:"modal fade",ref:"modal",id:"TextEditModal",style:{"z-index":"1050 !important"},"data-bs-backdrop":"static","aria-labelledby":"TextEditModalLabel","aria-hidden":"true"},r={class:"modal-dialog modal-lg"},l={class:"modal-content"},u={class:"modal-body"},c={class:"modal-footer"},s=(0,n._)("div",null,"글씨체 변경",-1);function d(e,t,o,d,f,m){const p=(0,n.up)("SelectVue");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",r,[(0,n._)("div",l,[(0,n._)("div",u,[(0,n._)("div",null,[(0,n.wy)((0,n._)("textarea",{class:"form-control form-control-lg",id:"exampleFormControlTextarea1",rows:"10","onUpdate:modelValue":t[0]||(t[0]=e=>d.text.textValue=e)},null,512),[[a.nr,d.text.textValue]])])]),(0,n._)("div",c,[(0,n._)("button",{type:"button",class:"btn btn-secondary me-auto p-2",onClick:t[1]||(t[1]=(...e)=>d.hideModal&&d.hideModal(...e))},"닫기"),s,(0,n.Wm)(p,{selectedFont:d.text.fontFamily,onChangeFont:d.changeFont},null,8,["selectedFont","onChangeFont"]),(0,n.wy)((0,n._)("input",{type:"color",class:"col-1","onUpdate:modelValue":t[2]||(t[2]=e=>d.text.color=e)},null,512),[[a.nr,d.text.color]]),(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=(...e)=>d.editTextData&&d.editTextData(...e))},"데이터 변경")])])])],512)}var f=o(4870),m=o(806),p=o(2673),b={name:"TextEditModal",components:{SelectVue:p.Z},props:{selectedText:{type:Object},isShowMoadal:{type:Boolean}},emits:["hideModal","editTextData"],setup(e,t){const o="AIzaSyB98XK6TWV9Etb2TLOUvgJS0RSlT60nVVw",a=(0,f.iH)(null);let i=null;const r=(0,f.iH)({key:"",textValue:"",fontFamily:"",color:""});let l={key:"",textValue:"",fontFamily:"",color:""};const u=()=>{r.value.textValue=l.textValue,r.value.fontFamily=l.fontFamily,r.value.color=l.color,t.emit("hideModal")},c=()=>{""===r.value.textValue&&(r.value.textValue=l.textValue,r.value.fontFamily=l.fontFamily,r.value.color=l.color),t.emit("editTextData",r.value)},s=e=>{r.value.fontFamily=e};return(0,n.YP)((()=>e.isShowMoadal),(t=>{i&&(t?(l=JSON.parse(JSON.stringify(e.selectedText)),r.value=e.selectedText,i.show()):i.hide())})),(0,n.bv)((()=>{i=new m.u_(a.value)})),{googleKey:o,hideModal:u,editTextData:c,changeFont:s,modal:a,text:r}}},v=o(89);const y=(0,v.Z)(b,[["render",d]]);var g=y},2673:function(e,t,o){"use strict";o.d(t,{Z:function(){return p}});var n=o(3396),a=o(7139),i=o(9242);const r={class:"selectBox"},l=["value"];function u(e,t,o,u,c,s){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n.wy)((0,n._)("select",{class:"select","onUpdate:modelValue":t[0]||(t[0]=e=>u.selected=e),onChange:t[1]||(t[1]=e=>u.changeFont(e))},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.googleFontsList,((e,t)=>((0,n.wg)(),(0,n.iD)("option",{style:(0,a.j5)("font-family:"+e.family),key:t,value:e.family},(0,a.zw)(e.family),13,l)))),128))],544),[[i.bM,u.selected]])])}var c=o(4870),s=o(3187),d={name:"Select",components:{},props:{selectedFont:{type:String}},emits:["hideModal","editTextData"],setup(e,{emit:t}){const o=(0,s.h)(),a=(0,c.iH)(e.selectedFont),i=o.getGoogleFontsList,r=e=>{t("changeFont",e.target.value)};return(0,n.YP)((()=>e.selectedFont),(e=>{a.value=e})),(0,n.bv)((()=>{})),{selected:a,googleFontsList:i,changeFont:r}}},f=o(89);const m=(0,f.Z)(d,[["render",u]]);var p=m}}]);
//# sourceMappingURL=178.5815c094.js.map