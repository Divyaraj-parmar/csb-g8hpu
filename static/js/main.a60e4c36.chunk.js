(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(5),r=n.n(a),s=n(4),o=n(2),i=(n(10),n(0)),u={display:"flex",justifyContent:"center",backgroundColor:"royalblue"};var j=function(){return Object(i.jsx)("header",{style:u,children:Object(i.jsx)("h1",{children:"Meme Generator"})})};var l=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),u=Object(o.a)(r,2),l=u[0],b=u[1],m=Object(c.useState)([]),p=Object(o.a)(m,2),d=p[0],O=p[1],f=Object(c.useState)(""),h=Object(o.a)(f,2),x=h[0],g=h[1],y=Object(c.useState)([]),v=Object(o.a)(y,2),S=v[0],C=v[1],k=Object(c.useState)({username:"memeBanataHaiApun",password:"memeMaker1234",boxes:[]}),w=Object(o.a)(k,2),_=w[0],M=w[1];return Object(c.useEffect)((function(){fetch(" https://api.imgflip.com/get_memes").then((function(e){return e.json().then((function(e){return a(e.data.memes)}))}))}),[]),Object(c.useEffect)((function(){C(Array(l).fill(""))}),[l]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsxs)("center",{children:[Object(i.jsx)("h1",{children:"Choose Template"}),Object(i.jsxs)("select",{style:{display:"block"},onChange:function(e){n.map((function(t){return t.name===e.target.value&&(g(t.url),b(t.box_count),O(t)),1}))},children:[Object(i.jsx)("option",{selected:!0,disabled:!0,style:{textAlign:"center"},children:"Select Meme Template"}),n.map((function(e){return Object(i.jsx)("option",{children:e.name},e.id)}))]}),Object(i.jsx)("img",{style:{width:"275px",margin:"15px"},src:x,alt:d.name}),S.map((function(e,t){return Object(i.jsx)("input",{placeholder:"text ".concat(t+1),onChange:function(e){var n=_.boxes;n[t]={text:e.target.value},M(Object(s.a)(Object(s.a)({},_),{},{template_id:d.id,boxes:n}))}},t)})),Object(i.jsx)("button",{onClick:function(){!function(){var e="https://api.imgflip.com/caption_image?template_id=".concat(_.template_id,"&username=").concat(_.username,"&password=").concat(_.password);_.boxes.map((function(t,n){e+="&boxes[".concat(n,"][text]=").concat(t.text)})),fetch(e).then((function(e){return e.json()})).then((function(e){g(e.data.url)}))}()},children:"Create Meme"})]})]})},b=document.getElementById("root");r.a.render(Object(i.jsx)(c.StrictMode,{children:Object(i.jsx)(l,{})}),b)}},[[12,1,2]]]);
//# sourceMappingURL=main.a60e4c36.chunk.js.map