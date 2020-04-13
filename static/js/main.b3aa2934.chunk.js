(this["webpackJsonpaudio-cue-player"]=this["webpackJsonpaudio-cue-player"]||[]).push([[0],{129:function(e,t,n){e.exports=n(255)},255:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(25),c=n.n(l),i=(n(134),n(32)),o=n(26),s=n(120),u=function(e,t){var n,a;switch(t.type){case"add":return{players:[].concat(Object(s.a)(e.players),[{id:e.players.length?e.players[e.players.length-1].id+1:1,selected:!e.players.length}])};case"delete":return n=e.players.findIndex((function(e){return e.id===t.id})),e.players[n].selected&&e.players.length>1&&(e.players[n+1]?e.players[n+1].selected=!0:e.players[e.players.length-2].selected=!0),Object(o.a)({},e,{players:e.players.filter((function(e){return e.id!==t.id}))});case"moveup":if(0!==(n=e.players.findIndex((function(e){return e.id===t.id})))){var r=e.players[n];e.players[n]=e.players[n-1],e.players[n-1]=r}return Object(o.a)({},e);case"movedown":if((n=e.players.findIndex((function(e){return e.id===t.id})))!==e.players.length-1){var l=e.players[n];e.players[n]=e.players[n+1],e.players[n+1]=l}return Object(o.a)({},e);case"selectnext":return(a=e.players.findIndex((function(e){return e.selected})))<e.players.length-1&&(e.players[a].selected=!1,e.players[a+1].selected=!0),Object(o.a)({},e);case"selectprevious":return(a=e.players.findIndex((function(e){return e.selected})))>0&&(e.players[a].selected=!1,e.players[a-1].selected=!0),Object(o.a)({},e);case"setplayerfile":var c=e.players.findIndex((function(e){return e.id===t.id}));return e.players[c].file=t.file,Object(o.a)({},e);default:return e}},d={players:[{id:1,selected:!0,file:null}]},p=Object(a.createContext)(d),f=function(e){var t=e.children,n=Object(a.useReducer)(u,d),l=Object(i.a)(n,2),c=l[0],o=l[1];return r.a.createElement(p.Provider,{value:{state:c,dispatch:o}},t)},y=n(265),m=n(261),E=n(264),g=n(263),b=n(33);var h=function(e){var t=Object(a.useState)(new Audio),n=Object(i.a)(t,1)[0],r=Object(a.useState)(!1),l=Object(i.a)(r,2),c=l[0],o=l[1],s=Object(a.useState)(!1),u=Object(i.a)(s,2),d=u[0],p=u[1];return n.addEventListener("ended",(function(){p(!0),o(!1)})),Object(a.useEffect)((function(){n.src=e?URL.createObjectURL(e):""}),[e,n]),Object(a.useEffect)((function(){c?(n.play(),p(!1)):n.pause()}),[c,n]),{playing:c,toggle:function(){return o(!c)},stop:function(){o(!1),n.currentTime=0},ended:d}};var v=function(e){var t=e.file,n=e.selected,l=e.playerId,c=h(t),i=c.playing,o=c.toggle,s=c.stop,u=Object(a.useRef)(),d=Object(a.useContext)(p).dispatch;return r.a.createElement(E.a,{color:n?"green":"grey"},r.a.createElement("input",{type:"file",ref:u,accept:"audio/*",hidden:!0,onChange:function(e){d({type:"setplayerfile",file:e.target.files[0],id:l})}}),r.a.createElement(g.a,{icon:!0,onClick:function(){return u.current.click()}},r.a.createElement(b.a,{name:"folder"})),r.a.createElement(g.a,{disabled:!t,icon:!0,onClick:o},r.a.createElement(b.a,{name:i?"pause":"play",color:i?"blue":"green"})),r.a.createElement(g.a,{disabled:!t,icon:!0,onClick:s},r.a.createElement(b.a,{name:"stop",color:"red"})),r.a.createElement(g.a,{icon:!0,onClick:function(){return d({type:"delete",id:l})}},r.a.createElement(b.a,{name:"delete"})),r.a.createElement("span",{style:{padding:"inherit"}},t?t.name:"No file selected"),r.a.createElement(g.a,{icon:!0,onClick:function(){return d({type:"moveup",id:l})},floated:"right"},r.a.createElement(b.a,{name:"arrow up"})),r.a.createElement(g.a,{icon:!0,onClick:function(){return d({type:"movedown",id:l})},floated:"right"},r.a.createElement(b.a,{name:"arrow down"})))};var j=function(e){var t=e.selectedFile,n=h(t),l=n.playing,c=n.toggle,i=n.ended,o=Object(a.useContext)(p).dispatch;return Object(a.useEffect)((function(){i&&o({type:"selectnext"})}),[i,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a.Group,null,r.a.createElement(g.a,{icon:!0,onClick:function(){return o({type:"selectprevious"})}},r.a.createElement(b.a,{name:"fast backward"})),r.a.createElement(g.a,{icon:!0,onClick:c},r.a.createElement(b.a,{name:l?"pause":"play",color:l?"blue":"green"})),r.a.createElement(g.a,{icon:!0,onClick:function(){return o({type:"selectnext"})}},r.a.createElement(b.a,{name:"fast forward"}))),r.a.createElement("span",{style:{padding:"1em"}},t?t.name:"No file"))},O={h1:{marginTop:"3em"}};var k=function(){var e=Object(a.useContext)(p),t=e.state,n=e.dispatch,l=t.players,c=l.length?l.find((function(e){return e.selected})).file:null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{as:"h1",content:"Cue Queue",style:O.h1,textAlign:"center"}),r.a.createElement(m.a,null,r.a.createElement(j,{selectedFile:c}),r.a.createElement(E.a.Group,null,l.map((function(e){return r.a.createElement(v,{key:e.id,selected:e.selected,file:e.file,playerId:e.id})}))),r.a.createElement(g.a,{icon:!0,onClick:function(){return n({type:"add"})}},r.a.createElement(b.a,{name:"plus"}))))};var w=function(){return r.a.createElement(f,null,r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[129,1,2]]]);
//# sourceMappingURL=main.b3aa2934.chunk.js.map