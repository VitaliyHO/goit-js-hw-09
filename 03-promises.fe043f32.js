!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire4c75;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire4c75=i);var r=i("iU1Pc"),a=document.querySelector(".form"),u="",c="",f="";function l(e,t){var n=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}a.addEventListener("input",(function(e){"delay"===e.target.name&&(u=Number(e.target.value));"step"===e.target.name&&(c=Number(e.target.value));"amount"===e.target.name&&(f=Number(e.target.value))})),a.addEventListener("submit",(function(t){t.preventDefault(),u-=c;for(var n=1;n<=f;n+=1)l(n,u+=c).then((function(t){var n=t.position,o=t.delay;setTimeout((function(){e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))}),o)})).catch((function(t){var n=t.position,o=t.delay;setTimeout((function(){e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}),o)}))}))}();
//# sourceMappingURL=03-promises.fe043f32.js.map
