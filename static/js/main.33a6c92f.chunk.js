(this.webpackJsonpsing_in=this.webpackJsonpsing_in||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),r=t.n(c),s=(t(9),t(1)),m=[{id:1,name:"Male"},{id:2,name:"Female"}],o=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),u=o[0],i=o[1],p=Object(n.useState)(""),d=Object(s.a)(p,2),E=d[0],b=d[1],f="input",g="input";return"emailandpassword"===E?(f+=" red",g+=" red"):"password"===E?f+=" red":"email"===E&&(g+=" red"),l.a.createElement("div",{className:"box"},"emailandpassword"===E?l.a.createElement("p",{className:"incorrect"},"Incorrect email and password!"):"email"===E?l.a.createElement("p",{className:"incorrect"},"Incorrect email!"):"password"===E?l.a.createElement("p",{className:"incorrect"},"Incorrect password!"):"good"===E?l.a.createElement("p",{className:"success"},"Success!"):null,l.a.createElement("p",null,"Email"),l.a.createElement("input",{className:g,type:"email",placeholder:"example: aaa@aaa.aa",value:t,onChange:function(e){!function(e){c(e.target.value)}(e)}}),l.a.createElement("br",null),l.a.createElement("p",null,"Password"),l.a.createElement("input",{className:f,type:"password",placeholder:"min 6",value:u,onChange:function(e){!function(e){i(e.target.value)}(e)}}),l.a.createElement("br",null),l.a.createElement("p",null,"Gender"),l.a.createElement("select",{className:"select_gender"},m.map((function(e){return l.a.createElement("option",{key:e.id},e.name)}))),l.a.createElement("br",null),l.a.createElement("button",{className:"button",onClick:function(){return function(e,a){b(function(e,a){return e.length<6&&null==a.match(/^...+@..+\...+$/)?"emailandpassword":null==a.match(/^...+@..+\...+$/)?"email":e.length<6?"password":"good"}(e,a))}(u,t)}},"REGISTER"))};function u(){return l.a.createElement("div",{className:"App"},l.a.createElement(o,null))}var i=document.getElementById("root");r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),i)},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.33a6c92f.chunk.js.map