(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={message:"Message_message__U4xz2",avatar:"Message_avatar__2oY4A",content:"Message_content__27OJ8",angle:"Message_angle__nTZrz",text:"Message_text__2WFzE",name:"Message_name__2bFui",time:"Message_time__3pyOZ"}},,,,function(e,t,a){e.exports={affair:"Affair_affair__1YH-K",name:"Affair_name__Pnjl9",priority:"Affair_priority__341bH",button:"Affair_button__2SU9j"}},function(e,t,a){e.exports={input:"SuperInputText_input__1i9UQ",superInput:"SuperInputText_superInput__nt1T0",errorInput:"SuperInputText_errorInput__IAn0X",error:"SuperInputText_error__3Jtao"}},,function(e,t,a){e.exports={default:"SuperButton_default__2alzU",red:"SuperButton_red__1GJVG",button:"SuperButton_button__6TmQT",blink:"SuperButton_blink__18twX"}},,function(e,t,a){e.exports={someClass:"Greeting_someClass__jmI_6",error:"Greeting_error__Dsh-r"}},function(e,t,a){e.exports={blue:"HW4_blue__1D1z7",column:"HW4_column__1t3WK",testSpanError:"HW4_testSpanError__3KD_C"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__Fkh83",spanClassName:"SuperCheckbox_spanClassName__3ZJYx"}},,function(e,t,a){e.exports={App:"App_App__N1NDi"}},function(e,t,a){e.exports={buttons:"Affairs_buttons__SRWjB"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(15),s=a.n(c),i=(a(23),a(16)),o=a.n(i),l=a(3),j=a.n(l),u=a(0);var b=function(e){return Object(u.jsxs)("div",{className:j.a.message,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:e.avatar,alt:"avatar",className:j.a.avatar})}),Object(u.jsx)("div",{className:j.a.angle}),Object(u.jsxs)("div",{className:j.a.content,children:[Object(u.jsx)("div",{className:j.a.name,children:e.name}),Object(u.jsx)("span",{className:j.a.message,children:e.message}),Object(u.jsxs)("span",{className:j.a.time,children:[" ",e.time]})]})]})},d="https://images.chesscomfiles.com/uploads/v1/user/75372640.5116a1ac.1200x1200o.526a857d8258.png",m="Atrem",h="npm nazhmimal \u0430 \u0435\u0441\u043b\u0438 \u043d\u0430\u0439\u0434\u0443 \u0431\u043b\u0430 \u0431\u0430\u043b \u0431\u0430\u0443\u0432\u0430\u0443\u0432\u0430\u0446\u0443\u043b\u0434\u0430\u043e\u0443\u0446\u0430\u043b \u0430\u043e\u0443\u043b\u0430\u043e\u0443\u0434\u043b\u0430\u043e\u0443 \u0430\u0443\u043e\u043b\u0430\u043e\u0443\u0434\u0448\u043b?",_="22:02";var x=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(b,{avatar:d,name:m,message:h,time:_})})},p=a(2),O=a(7),f=a.n(O);var g=function(e){return Object(u.jsxs)("div",{className:f.a.affair,children:[Object(u.jsxs)("span",{className:f.a.name,children:[" ",e.affair.name]}),Object(u.jsxs)("span",{className:f.a.priority,children:["  ",e.affair.priority]}),Object(u.jsx)("button",{className:f.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},v=a(17),C=a.n(v);var k=function(e){var t=e.data.map((function(t){return Object(u.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{className:C.a.buttons,children:[t,Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(N),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),s=Object(p.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(k,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:i}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},S=a(18),w=a(12),A=a.n(w),T=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,c=e.totalUsers,s=r?A.a.error:A.a.someClass;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:a,className:s}),Object(u.jsx)("span",{children:r}),Object(u.jsx)("button",{onClick:n,children:"addUsers"}),Object(u.jsx)("span",{children:c})]})},I=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),c=Object(p.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(p.a)(o,2),j=l[0],b=l[1],d=t.length;return Object(u.jsx)(T,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),b("")):b("need name")},addUser:function(){a(s),alert("'Hello', ".concat(s)),i("")},error:j,totalUsers:d})},U=a(27);var F=function(){var e=Object(n.useState)([{_id:Object(U.a)(),name:"Kate"},{_id:Object(U.a)(),name:"Artem"},{_id:Object(U.a)(),name:"Igor"}]),t=Object(p.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(I,{users:a,addUserCallback:function(e){var t={_id:Object(U.a)(),name:e};r([t].concat(Object(S.a)(a)))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},M=a(4),E=a(5),W=a(8),B=a.n(W),H=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(E.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(B.a.error," ").concat(i||""),j="".concat(B.a.input," ").concat(c?B.a.errorInput:B.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:j},o)),c&&Object(u.jsx)("span",{className:l,children:c})]})},K=a(13),z=a.n(K),J=a(10),D=a.n(J),G=function(e){var t=e.red,a=e.className,n=Object(E.a)(e,["red","className"]),r="".concat(D.a.button," ").concat(t?D.a.red:D.a.default," ").concat(a);return Object(u.jsx)("button",Object(M.a)({className:r},n))},P=a(14),X=a.n(P),Y=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),c=Object(E.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(n||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},c)),r&&Object(u.jsx)("span",{className:X.a.spanClassName,children:r})]})};var Z=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(p.a)(i,2),l=o[0],j=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:z.a.column,children:[Object(u.jsx)(H,{value:a,onChangeText:r,onEnter:s,error:c}),Object(u.jsx)(H,{className:z.a.blue}),Object(u.jsx)(G,{children:"default"}),Object(u.jsx)(G,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(G,{disabled:!0,children:"disabled"}),Object(u.jsx)(Y,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(Y,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var Q=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(x,{}),Object(u.jsx)("br",{}),Object(u.jsx)(y,{}),Object(u.jsx)(F,{}),Object(u.jsx)(Z,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(Q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.3013fd26.chunk.js.map