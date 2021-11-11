(this["webpackJsonptodo-test"]=this["webpackJsonptodo-test"]||[]).push([[0],{54:function(t,e,n){t.exports={todolistItem:"TodolistItem_todolistItem__4h7ZG"}},77:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var c,r=n(9),i=n.n(r),a=n(15),o=n(46),l=n(13),s=n(42),u=n(117),d=[],j=function(){var t=new Date;return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric"}).format(t)},O=function(t,e){return{type:"CHANGE-TODOLIST-FILTER",value:t,id:e}};!function(t){t[t.all=0]="all",t[t.active=1]="active",t[t.completed=2]="completed"}(c||(c={}));var b=[],f=Object(o.a)({todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD-TODOLIST":return[Object(l.a)(Object(l.a)({},e),{},{filter:c.all})].concat(Object(s.a)(t));case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{title:e.newTitle}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{filter:e.value}):t}));default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD-TASK":return[].concat(Object(s.a)(t),[{todolistId:e.todolistId,taskId:e.taskId,title:e.title,status:c.active}]);case"REMOVE-TASK":return t.filter((function(t){return t.taskId!==e.taskId}));case"CHANGE-TASK-STATUS":return t.map((function(t){return t.taskId===e.taskId?Object(l.a)(Object(l.a)({},t),{},{status:e.status}):t}));case"CHANGE-TASK-TITLE":return t.map((function(t){return t.taskId===e.taskId?Object(l.a)(Object(l.a)({},t),{},{title:e.newTitle}):t}));default:return t}}}),m=Object(o.b)(f),h=n(113),T=n(112),x=n(106),p=n(0),I=n.n(p),v=n(30),k=n(114),y=n(107),g=n(108),S=n(5),C=function(t){var e=t.addItem,n=t.todolistId,c=Object(p.useState)(""),r=Object(v.a)(c,2),i=r[0],o=r[1],l=Object(p.useState)(null),s=Object(v.a)(l,2),u=s[0],d=s[1],j=Object(a.c)((function(t){return t.tasks})).filter((function(t){return t.todolistId===n})),O=Array.from(new Set(j.map((function(t){return t.title})))),b=Boolean(j.length&&O.some((function(t){return t===i}))),f=function(){""!==i.trim()?(e(i.trim()),o("")):d("Title is required!")};return Object(p.useEffect)((function(){d(b?"Such title already exists!":null)}),[b]),Object(S.jsxs)("div",{children:[Object(S.jsx)(k.a,{value:i,id:"outlined-error-helper-text",variant:"outlined",label:"Type title",error:Boolean(u),onChange:function(t){d(null),o(t.currentTarget.value)},onKeyPress:function(t){"Enter"!==t.key||b||f()},className:u?"error":"",helperText:u,size:"small"}),Object(S.jsx)(y.a,{onClick:f,color:"primary",disabled:b,children:Object(S.jsx)(g.a,{style:{margin:"-4px"}})})]})},A=I.a.memo(C),E=n(116),D=n(110),L=n(111),w=n(109),F=function(t){var e=Object(p.useState)(!1),n=Object(v.a)(e,2),c=n[0],r=n[1],i=Object(p.useState)(""),a=Object(v.a)(i,2),o=a[0],l=a[1];return c?Object(S.jsx)(k.a,{value:o,onChange:function(t){return l(t.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&(r(!1),t.onChange(o))},onBlur:function(){r(!1),t.onChange(o)},autoFocus:!0}):Object(S.jsx)("span",{onDoubleClick:function(){r(!0),l(t.title)},children:t.title})},K=I.a.memo(F),N=n(118),G=function(t){var e=t.taskId,n=t.title,r=t.status,i=Object(a.b)(),o=r===c.completed;return Object(S.jsxs)(E.a,{width:"260px",children:[Object(S.jsx)(N.a,{checked:o,color:"primary",onChange:function(t){var n=t.currentTarget.checked?c.completed:c.active;i(function(t,e){return{type:"CHANGE-TASK-STATUS",taskId:t,status:e}}(e,n))}}),Object(S.jsx)(K,{title:n,onChange:function(t){i(function(t,e){return{type:"CHANGE-TASK-TITLE",taskId:t,newTitle:e}}(e,t))}}),Object(S.jsx)(y.a,{onClick:function(){i(function(t){return{type:"REMOVE-TASK",taskId:t}}(e))},children:Object(S.jsx)(w.a,{})})]})},H=I.a.memo(G),R=n(54),B=n.n(R),z=function(t){var e=t.todolistId,n=t.title,r=t.filter,i=t.date,o=Object(a.b)(),s=Object(a.c)((function(t){return t.tasks})).filter((function(t){return t.todolistId===e})),d=s.every((function(t){return t.status===c.completed}))&&s.length>0,j=s.filter((function(t){return r===c.all||t.status===r}));return Object(S.jsxs)(E.a,{className:B.a.todolistItem,children:[Object(S.jsxs)(D.a,{color:"primary",children:["Created: ",i]}),d&&Object(S.jsx)(D.a,{color:"secondary",children:"All tasks completed"}),Object(S.jsxs)(E.a,{children:[Object(S.jsx)(K,{title:n,onChange:function(t){o(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,newTitle:e}}(e,t))}}),Object(S.jsx)(y.a,{onClick:function(){o({type:"REMOVE-TODOLIST",id:e})},children:Object(S.jsx)(w.a,{})})]}),Object(S.jsx)(A,{addItem:function(t){o(function(t,e){return{type:"ADD-TASK",todolistId:t,taskId:Object(u.a)(),title:e}}(e,t))},todolistId:e}),Object(S.jsx)("div",{children:j.map((function(t){return Object(S.jsx)(H,Object(l.a)({},t),t.taskId)}))}),Object(S.jsxs)(E.a,{mt:"15px",children:[Object(S.jsx)(L.a,{variant:r===c.all?"contained":"text",onClick:function(){return o(O(c.all,e))},color:"primary",size:"small",children:"All"}),Object(S.jsx)(L.a,{variant:r===c.active?"contained":"text",onClick:function(){return o(O(c.active,e))},color:"primary",size:"small",children:"Active"}),Object(S.jsx)(L.a,{variant:r===c.completed?"contained":"text",onClick:function(){return o(O(c.completed,e))},color:"secondary",size:"small",children:"Completed"})]})]})},M=I.a.memo(z),P=function(){var t=Object(a.c)((function(t){return t.todolists})),e=Object(a.b)();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(T.a,{container:!0,style:{padding:"30px 0"},children:Object(S.jsx)(A,{addItem:function(t){e(function(t){return{type:"ADD-TODOLIST",id:Object(u.a)(),title:t,date:j()}}(t))}})}),Object(S.jsx)(T.a,{container:!0,spacing:3,children:t.map((function(t){return Object(S.jsx)(T.a,{item:!0,children:Object(S.jsx)(x.a,{elevation:3,style:{padding:"15px"},children:Object(S.jsx)(M,{todolistId:t.id,title:t.title,filter:t.filter,date:t.date})})},t.id)}))})]})},V=I.a.memo(P),U=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(h.a,{fixed:!0,children:Object(S.jsx)(V,{})})})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),i(t),a(t)}))};n(77);i.a.render(Object(S.jsx)(a.a,{store:m,children:Object(S.jsx)(U,{})}),document.getElementById("root")),_()}},[[78,1,2]]]);
//# sourceMappingURL=main.f88a0f0d.chunk.js.map