"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[347],{894:function(n,t,e){e.d(t,{Mc:function(){return s},E3:function(){return l},uV:function(){return p},Bt:function(){return f},PY:function(){return o}});var r=e(861),u=e(757),a=e.n(u),c="88804fe82d069d316bec59240a5ee94b",i=e(44).Z,o=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c)).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US")).then((function(n){return n}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US")).then((function(n){return n}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(t)).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},511:function(n,t,e){e.d(t,{aV:function(){return s},ck:function(){return p},rU:function(){return f}});var r,u,a,c=e(168),i=e(731),o=e(444),s=o.ZP.ul(r||(r=(0,c.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),p=o.ZP.li(u||(u=(0,c.Z)(["\n  margin-bottom: 10px;\n"]))),f=(0,o.ZP)(i.OL)(a||(a=(0,c.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 24px;\n"])))},347:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,u,a,c,i,o,s,p=e(885),f=e(168),l=e(791),d=e(894),h=e(444),g=h.ZP.div(r||(r=(0,f.Z)([""]))),x=h.ZP.input(u||(u=(0,f.Z)(["\n  border: 1px solid black;\n  padding: 0;\n  height: 30px;\n  width: 300px;\n  background-color: lightyellow;\n"]))),v=h.ZP.button(a||(a=(0,f.Z)(["\n  border: 1px solid black;\n  background-color: orange;\n  height: 32px;\n  width: 100px;\n"]))),m=e(184),Z=function(n){var t=n.value,e=n.onChange;return(0,m.jsx)(g,{children:(0,m.jsx)(x,{type:"text",value:t,onChange:function(n){return e(n.target.value)}})})},b=e(731),k=e(470),w=e(511),y=h.ZP.ul(c||(c=(0,f.Z)(["\n  padding: 0;\n  list-style: none;\n"]))),j=h.ZP.li(i||(i=(0,f.Z)(["\n  margin-bottom: 10px;\n"]))),P=h.ZP.div(o||(o=(0,f.Z)(["\n  margin: 0 auto;\n  margin-top: 20px;\n  width: 500px;\n  display: flex;\n  justify-content: space-between;\n"]))),_=h.ZP.div(s||(s=(0,f.Z)(["\n  margin: 0 auto;\n  width: 500px;\n  text-align: center;\n"]))),S=function(){var n,t=(0,l.useState)(null),e=(0,p.Z)(t,2),r=e[0],u=e[1],a=(0,b.lr)(),c=(0,p.Z)(a,2),i=c[0],o=c[1],s=(0,l.useState)(""),f=(0,p.Z)(s,2),h=f[0],g=f[1],x=null!==(n=i.get("query"))&&void 0!==n?n:"",S=(0,k.TH)();(0,l.useEffect)((function(){x&&(0,d.E3)(x).then((function(n){return u(n)}))}),[x]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(P,{children:[(0,m.jsx)(Z,{value:h,onChange:function(n){g(n)}}),(0,m.jsx)(v,{type:"button",onClick:function(){o(""!==h?{query:h}:{})},children:"Search"})]}),(0,m.jsx)(_,{children:r&&(0,m.jsx)(y,{children:r.map((function(n){return(0,m.jsx)(j,{children:(0,m.jsx)(w.rU,{to:"/movies/".concat(n.id),state:{from:S},children:n.title})},n.id)}))})})]})}}}]);
//# sourceMappingURL=347.748d0c6a.chunk.js.map