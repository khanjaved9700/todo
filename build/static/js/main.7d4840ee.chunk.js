(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(6),o=n.n(i),r=(n(12),n(7)),s=n(5),j=n(0),a=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"todo_style",children:[Object(j.jsx)("i",{className:"fa fa-times-circle-o","aria-hidden":"true",onClick:function(){e.onSelect(e.id)}}),Object(j.jsx)("li",{children:e.text})]})})},l=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)([]),l=Object(s.a)(o,2),u=l[0],b=l[1],d=function(e){alert("Are You Really Want To Delete?"),b((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"out_box",children:Object(j.jsxs)("div",{className:"in_box",children:[Object(j.jsx)("br",{}),Object(j.jsx)("h1",{children:"ToDo List"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",placeholder:"Add Items",value:n,onChange:function(e){i(e.target.value)}}),Object(j.jsx)("button",{onClick:function(){b((function(e){return[].concat(Object(r.a)(e),[n])})),i("")},children:"+"}),Object(j.jsx)("ol",{children:u.map((function(e,t){return Object(j.jsx)(a,{text:e,id:t,onSelect:d},t)}))})]})})})};o.a.render(Object(j.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7d4840ee.chunk.js.map