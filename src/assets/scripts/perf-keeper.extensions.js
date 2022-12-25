var perfKeeperExtensions=function(e){"use strict";var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},k="object"==typeof globalThis&&globalThis||"object"==typeof window&&window||"object"==typeof global&&global||{},w=k.document,y=k.performance,S=y&&y.now?function(){return y.now()}:Date.now;function T(e){"complete"===w.readyState?e():w.addEventListener("DOMContentLoaded",e)}var z,t,s=[];function M(o,i,c,u){var a={};return[function(e,t,n,r){var o=a;s.concat(e).forEach(function(e){var t=o.nested||(o.nested={});o=t[e]||(t[e]={name:e})}),null!=o.end?o.end+=n-t:(o.start=t,o.end=n,o.unit=r)},function(e,t,n,r){a.name=e?o+"-"+e:o,a.start=t,a.end=n,function t(e,n){var r,o=e.nested,a=o?Object.keys(o):s;a.length?((r=(n||i).group(e.name,e.start,!n))._=!0,r.unit=c||"ms",(!1===u?a:a.sort()).forEach(function(e){t(o[e],r)}),r.stop(e.end)):n&&(n.add(e.name,e.start,e.end),n.entries[n.entries.length-1].unit=e.unit||n.unit)}(a,null),r&&(a={})}]}var n,r,a,A,i=0,L=0,j=!1,x=!1,B=300;var c="0px";function u(){i=S(),n=k.mozPaintCount||0,r=0,a=-1,t.left=t.left===c?window.innerWidth/2+"px":c,f()}function f(){var e=k.getComputedStyle(z,null),t=e&&e.left?+e.left.slice(0,-2):0;a!==t&&(r++,a=t),L=requestAnimationFrame(f)}function d(){var e=S()-i,t=(k.mozPaintCount||r)-n;cancelAnimationFrame(L),j&&(A(Math.min(Math.round(1e3*t/e),60)),u())}function l(){z||((z=w.createElement("div")).id="FPSMeterHelper",(t=z.style).position="absolute",t.backgroundColor="transparent",t.width="1px",t.height="1px",t.left=c,t.bottom=c,t.transition="left "+B+"ms linear",z.addEventListener("transitionend",d,!1))}function C(){j&&(l(),x=!0,w.body.appendChild(z),setTimeout(u,0))}T(l);var P={rate:300,scrollableName:function(e){return e===document?"page":null},scrollableElement:k};function m(s,e){void 0===e&&(e=P);var f,t=e.rate,d=e.scrollableName,n=e.scrollableElement,r=!1,o=0,a=0,i=!1,l=[],c=0,m=0;function u(e){l.push(e)}function p(){i||(i=!0,a=o,setTimeout(v,t))}function v(){i=!1,a===o?(r=!1,b()):p()}function h(){var e=d?d(f):null,t=M("pk-fps"+(e?"-"+e:""),s,"fps"),n=t[0],r=t[1],o=l.length,a=Math.floor(o/2),i=0,c=60,u=0;(l=l.sort()).forEach(function(e){c=Math.min(c,e),u=Math.max(u,e),i+=e}),0<o&&(i/=o,n("latency",0,m,"ms"),n("min",0,c),n("max",0,u),n("avg",0,i),n("median",0,o%2?l[a]:(l[a-1]+l[a])/2),r(null,0,i),l.length=0)}function y(){m=S()-c}function g(){var e;c=S(),A=u,(e=t)&&(B=e),j=!0,T(C)}function b(){j&&(j=!1,cancelAnimationFrame(L),x&&w.body.removeChild(z),x=!1),h()}function E(e){var t=e.target;r?f!==t&&(h(),c=S(),requestAnimationFrame(y)):(r=!0,g(),requestAnimationFrame(y)),f=t,o++,p()}return n&&n.addEventListener("scroll",E,!0),{start:g,stop:b,handleScroll:E,destory:function(){n&&n.removeEventListener("scroll",E,!0)}}}function p(e,t){void 0===t&&(t={});var n=t.sendChanged,r=void 0===n||n,o=navigator.connection||navigator.mozConnection||navigator.webkitConnection,a=M("pk-conn",e,"none",!1),i=a[0],c=a[1],u="effectiveType",s="saveData";if(i(["supported",""+!!o],0,1),!o)return i([u,"unk"],0,1),void c(null,0,1);function f(e){var t=o[e],n=l[e];if(l[e]!==t)return l[e]=t,e===u||"type"===e||e===s?(i([e,t],0,1),r&&void 0!==n&&i(["changed",e,n,t],0,1)):i([e],0,t,"raw"),!0}var d=["downlink",u,"rtt",s,"type"],l={};d.forEach(f),null==l[u]&&i([u,"unk"],0,1),c(null,0,1,!0),r&&o.addEventListener("change",function(){var t=!1;d.forEach(function(e){t=f(e)||t}),t&&c(null,0,1,!0)})}var v={};function h(e,t){var n=M("pk-nav",e,"ms",!1),d=n[0],l=n[1];!function e(){try{var t=y.timing,n=t.navigationStart,r=t.redirectStart,o=t.redirectEnd,a=t.fetchStart,i=t.domainLookupStart,c=t.domainLookupEnd,u=t.requestStart,s=t.responseStart,f=t.responseEnd;if(!f)return void setTimeout(e,0);r?(d("init",n,r),d("redirect",r,o),d("app-cache",o,i)):a?(d("init",n,a),d("app-cache",a,i)):d("init",n,i),d("dns",i,c),d("tcp",c,u),d("request",u,s),d("response",s,f),l("net",n,f,!0)}catch(e){}}(),T(function e(){try{var t=y.timing,n=t.responseEnd,r=t.domInteractive,o=t.domContentLoadedEventEnd,a=t.domComplete;if(!a)return void setTimeout(e,250);d("interactive",n,r),d("content-loaded",r,o),d("complete",o,a),l("dom-ready",n,a,!0)}catch(e){}}),T(function e(){try{var t=y.timing,n=t.responseEnd,r=t.domComplete,o=t.loadEventEnd;if(!o)return void setTimeout(e,250);d("ready",n,r),d("load",r,o),l("dom-load",n,o,!0)}catch(e){}})}var g={filter:function(e){return e<2e3?"%-fast":e<4e3?"%-moderate":6e4<e?"%-very-slow":"%-slow"}};function b(e,t){var n=(t||g).filter,i=void 0===n?g.filter:n,r=M("pk-paint",e),c=r[0],u=r[1];T(function e(){try{var t,n,r,o,a=y.getEntriesByType("paint");1<a.length?(n=t=0,a.sort(function(e,t){return e.startTime-t.startTime}).forEach(function(e){n=e.startTime,r=e.name,o=i(n,e),0<n&&(t=Math.max(t,n),c(r,0,n),o&&c(o.replace("%",r),0,n))}),t&&u(null,0,t,!0)):setTimeout(e,250)}catch(e){}})}var O={minLatency:100,ttiDelay:2e3,prefIdProp:"data-perf-id"};function E(e,n){void 0===n&&(n={});var r,o,a={},i=!1,c=!1,t=M("pk-perf",e),u=t[0],s=t[1],f=["click","touchup","submit","abort","blur","contextmenu","deviceorientation","offline","online","paint","popstate","resize","wheel","scroll"],d=n.minLatency,l=void 0===d?O.minLatency:d,m=n.ttiDelay,p=void 0===m?O.ttiDelay:m,v=n.getPerfId,h=void 0===v?function(e,t){for(var n;e&&!n&&1===e.nodeType;)n=e.getAttribute(t),e=e.parentNode;return n}:v;function y(e){return h(e&&1===e.nodeType?e:null,n.prefIdProp||O.prefIdProp)}function g(){Object.keys(a).forEach(function(e){var t=a[e];t.values.forEach(function(e){u(e[0],e[1],e[2])}),s(e,t.start,t.end,!0)}),i=!(a={})}function b(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=S());var o=a[e]=a[e]||{start:0,end:0,values:[]};o.start=Math.min(o.start,n),o.end=Math.max(o.end,r),o.values.push([t,n,r]),i||setTimeout(g),i=!0}function E(e,t){var n=y(t.target),r="first-"+e+(c?"-ready":"");b(r,"value"),n&&b(r,n)}D(f,E),D(["beforeunload"],function(){b("tab-unload","value")}),["click","touchup","input","submit","resize","scroll"].forEach(function(o){k.addEventListener(o,function(e){var n=e.target,r=S();requestAnimationFrame(function(){var e,t=S();l<=t-r&&(e=y(n),u("value",r,t),e&&u(e,r,t),s("latency-"+o,r,t,!0))})},!0)});try{(o=new PerformanceObserver(function(e){r=e.getEntries().pop()})).observe({entryTypes:["longtask"]})}catch(e){}T(function(){var e,t;c=!0,o&&(t=function(){r?(e=r.startTime+r.duration,S()-e>=p?(b("tti","value",0,e),o.disconnect()):setTimeout(t,n.ttiDelay)):e?(b("tti","value",0,e),o.disconnect()):(e=S(),setTimeout(t,500))})(),D(f,E)})}function D(e,r,o){e.forEach(function(t){var n=function(e){k.removeEventListener(t,n,!0),r(t,e)};(o=o||k).addEventListener(t,n,!0)})}var N={};function I(e,t){void 0===t&&(t=N);var n=/^https?:\/\/(?:www\.)?(.*?)\.[a-z]+\//,r=M("pk-resource-traffic",e,"KiB"),a=r[0],i=r[1],o=M("pk-resource-traffic-cached",e,"KiB"),c=o[0],u=o[1],s=M("pk-resource-stats",e,"KiB"),f=s[0],m=s[1],p=t.onBeforeEntryAdd,v=t.resourceName||function(e){var t=n.exec(e.name);return t?[e.initiatorType,t[1]]:null},h=t.intervals||[["15sec",15e3],["1min",6e4],["5min",3e5],["15min",9e5],["30min",18e5],["1hour",36e5],["1day",864e5],["2days",1728e5]];T(function(){var d={size:0,cached:0,cachedSize:0,transfered:0,transferedSize:0,unmeasurable:0,duration:0},n=[],r="start";function l(e,t,n){t&&(e?c:a)(t,0,n)}function o(){var e=y.getEntriesByType("resource");e&&0<e.length&&(n=n.concat(e)),y.clearResourceTimings()}try{!function e(){o(),n.forEach(function(e){var t,n,r,o,a,i,c,u,s,f;p&&!1===p(e)||(t=e.duration,n=e.transferSize,r=e.entryType,o=e.nextHopProtocol,a=e.initiatorType,i=n||e.encodedBodySize||e.decodedBodySize,c=!n,"navigation"===a&&(a="html"),a&&0<i&&((u=[r,a,o]).forEach(function(e){l(c,e,i)}),"html"!==a&&(s=v(e),f=function(e,t,n){(0<t||-1!==u.indexOf(e))&&l(c,n.slice(0,t+1),i)},s&&s.length&&(Array.isArray(s[0])?s.forEach(function(e){e.forEach(f)}):s.forEach(f)))),d.size+=i,d.duration+=t,d[a]=(d[a]||0)+1,c?(d.cached++,d.cachedSize+=i):0<i?(d.transfered++,d.transferedSize+=i):d.unmeasurable++)}),Object.keys(d).forEach(function(e){f(e,0,d[e],"duration"===e?"ms":/size/i.test(e)?"KiB":"raw")}),m(r,0,d.size),0<d.transfered&&i(r,0,d.transferedSize),0<d.cachedSize&&u(r,0,d.cachedSize),n.length=0;var t=h.shift();t&&(r=t[0],setTimeout(e,t[1]))}(),y.onresourcetimingbufferfull=function(){o()}}catch(e){}})}var K=6e4,F=[["15sec",15e3],["1min",K],["5min",3e5],["15min",9e5],["30min",18e5],["1hour",36e5],["1day",864e5],["2days",1728e5]];function q(n,e,r){var o=(e||F).slice(0),a=Date.now();return function t(){return new Promise(function(e){e(r(n))}).then(function(){var e=o.shift();e&&(n=e[0],setTimeout(t,Math.max(0,e[1]-(Date.now()-a))))})}()}function H(e,t){void 0===t&&(t={});var n=M(t.groupName||"pk-memory",e,"KiB"),r=n[0],o=n[1];T(function(){q("ready",t.intervals,function(e){var t,n=y.memory;n&&(t=n.totalJSHeapSize,r("total",0,t),r("used",0,n.usedJSHeapSize),r("js",0,n.jsHeapSizeLimit),o(e,0,t,!0))})})}var _={Detached:"detached",JS:"js",Shared:"shared",Window:"window"},J=Array.isArray;function W(o,e){void 0===e&&(e={});var a=e.groupName||"pk-memory",t=M(a,o,"KiB"),f=t[0],d=t[1],l=e.resourceName||R;function n(e,t){var n,r=o.group(a+"-supported",0,!0);r._=!0,r.unit="none",t&&((n=r.group("error",0))._=!0,n.unit="none",n.add("true",0,1),t.name&&n.add(t.name,0,1),n.stop(1)),r.add(""+e,0,1),r.stop(1)}y.measureMemory?T(function(){q("ready",e.intervals,function(s){return y.measureMemory().then(function(e){if(!((t=e)&&0<=t.bytes&&J(t.breakdown)))throw G("PerformanceMeasureMemoryInformation",e);for(var t,n=e.bytes,r=e.breakdown,o=$(f),a=$(f),i=function(t){if(!((e=t)&&0<=e.bytes&&J(e.attribution)&&J(e.userAgentSpecificTypes)))return G("PerformanceMeasureMemoryBreakdown",t),"break";var e;t.userAgentSpecificTypes.forEach(function(e){o.plus(_[e],t.bytes)}),t.attribution.forEach(function(e){a.plus(l(e)||"unknown",t.bytes)})},c=0,u=r;c<u.length;c++){if("break"===i(u[c]))break}o.groupAs("type"),a.groupAs("resource"),f("bytes",0,n,"KiB"),d(s,0,n)})}).then(function(){n(!0)}).catch(function(e){n(!1,e)})}):n(!1)}function R(e){return e.replace(/(^https?:\/*|\/*$)/gi,"").replace(/[^a-z0-9-]/gi,"_")}function $(n){var r={};return{plus:function(e,t){null==r[e]&&(r[e]=0),r[e]+=t},groupAs:function(t){Object.keys(r).forEach(function(e){n([t,e],0,r[e])})}}}function G(e,t){console.warn("[@perf-tools/keeper] Interface '"+e+"' not supported, please report this.",t)}return e.set=function(r,e){function t(e,t,n){e(r,o(o({},Object(n)),Object(t)))}t(p,e.networkInformation),t(m,e.fps,P),t(h,e.navigation,v),t(b,e.paint,g),t(E,e.performance,O),t(I,e.resource,N),t(W,e.measureMemory,{groupName:"pk-measure-memory"}),t(H,e.memoryStats,{groupName:"pk-memory-stats"})},e}({});