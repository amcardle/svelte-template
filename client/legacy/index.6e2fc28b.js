import{_ as t,a as n,b as r,c as e,i as o,d as s,S as c,s as a,f,t as u,j as i,k as l,l as h,g as v,m as p,n as g,o as d,r as m,e as R,q as y,h as E,u as b,p as j,v as x}from"./client.019709fa.js";function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,s=n(t);if(e){var c=n(this).constructor;o=Reflect.construct(s,arguments,c)}else o=s.apply(this,arguments);return r(this,o)}}function L(t,n,r){var e=t.slice();return e[1]=n[r],e}function S(t){var n,r,e,o,s=t[1].title+"";return{c:function(){n=f("li"),r=f("a"),e=u(s),this.h()},l:function(t){n=i(t,"LI",{});var o=l(n);r=i(o,"A",{rel:!0,href:!0});var c=l(r);e=h(c,s),c.forEach(v),o.forEach(v),this.h()},h:function(){p(r,"rel","prefetch"),p(r,"href",o="blog/"+t[1].slug)},m:function(t,o){g(t,n,o),d(n,r),d(r,e)},p:function(t,n){1&n&&s!==(s=t[1].title+"")&&m(e,s),1&n&&o!==(o="blog/"+t[1].slug)&&p(r,"href",o)},d:function(t){t&&v(n)}}}function $(t){for(var n,r,e,o,s,c=t[0],a=[],m=0;m<c.length;m+=1)a[m]=S(L(t,c,m));return{c:function(){n=R(),r=f("h1"),e=u("Recent posts"),o=R(),s=f("ul");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){y('[data-svelte="svelte-hfp9t8"]',document.head).forEach(v),n=E(t),r=i(t,"H1",{});var c=l(r);e=h(c,"Recent posts"),c.forEach(v),o=E(t),s=i(t,"UL",{class:!0});for(var f=l(s),u=0;u<a.length;u+=1)a[u].l(f);f.forEach(v),this.h()},h:function(){document.title="Blog",p(s,"class","svelte-1frg2tf")},m:function(t,c){g(t,n,c),g(t,r,c),d(r,e),g(t,o,c),g(t,s,c);for(var f=0;f<a.length;f+=1)a[f].m(s,null)},p:function(t,n){var r=b(n,1)[0];if(1&r){var e;for(c=t[0],e=0;e<c.length;e+=1){var o=L(t,c,e);a[e]?a[e].p(o,r):(a[e]=S(o),a[e].c(),a[e].m(s,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=c.length}},i:j,o:j,d:function(t){t&&v(n),t&&v(r),t&&v(o),t&&v(s),x(a,t)}}}function k(){return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function q(t,n,r){var e=n.posts;return t.$$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var A=function(n){t(f,c);var r=D(f);function f(t){var n;return e(this,f),n=r.call(this),o(s(n),t,q,$,a,{posts:0}),n}return f}();export default A;export{k as preload};
