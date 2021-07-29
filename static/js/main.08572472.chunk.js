(this["webpackJsonpreact-temperature-converter"]=this["webpackJsonpreact-temperature-converter"]||[]).push([[0],{82:function(e,n,t){"use strict";t.r(n);var i=t(98),r=t(2),a=t(61),c=t.n(a),l=t(4),o=t(51),s=t(5),u=t(99),h=t(63),d=t(94),j=t(95),b=t(101),g=t(96),f=t(97),O=t(100),m=t(92),x=t(6),v=function(e){return Object(x.jsx)(O.a,{w:"12",h:"12",borderRadius:"50",_focus:{boxShadow:"lg"},bg:e.unit===e.name?"white":"none",boxShadow:e.unit===e.name?"lg":"none",color:e.unit===e.name?"gray.700":"gray.500",onClick:function(){return e.handleClick(e.name)},children:e.showName})},p=function(e){var n=e.unit,t=e.handleClick;return Object(x.jsx)(m.a,{my:"4",children:Object(x.jsxs)(b.a,{px:"2",py:"2",bg:"gray.100",borderRadius:"50",boxShadow:"inner",spacing:"12px",children:[Object(x.jsx)(v,{handleClick:t,unit:n,showName:"\xb0C",name:"celsius"}),Object(x.jsx)(v,{handleClick:t,unit:n,showName:"\xb0F",name:"fahrenheit"}),Object(x.jsx)(v,{handleClick:t,unit:n,showName:"K",name:"kelvin"})]})})},w=t(102),y=function(e){var n=e.tem,t=e.handleChange,i=e.handleBlur,r=e.unit;return Object(x.jsx)(m.a,{children:Object(x.jsx)(w.a,{display:"inline",type:"number",w:"48",h:"12",overflow:"visible",textAlign:"center",border:"none",fontSize:"5xl",fontWeight:"500",color:"gray.700",value:n[r],onChange:t,onBlur:i})})},k=t(53),C=t(65);var S=function(){var e=Object(r.useState)("celsius"),n=Object(s.a)(e,2),t=n[0],i=n[1],a=Object(r.useState)("teal.300"),c=Object(s.a)(a,2),O=c[0],m=c[1],v=Object(r.useState)({celsius:0,fahrenheit:32,kelvin:273.15}),w=Object(s.a)(v,2),S=w[0],A=w[1];return Object(r.useEffect)((function(){S.celsius>28?m("red.300"):S.celsius<20?m("blue.200"):m("yellow.200")}),[S.celsius]),Object(x.jsx)(u.a,{theme:h.theme,children:Object(x.jsxs)(d.a,{w:"100vw",h:"100vh",bg:O,align:"center",justify:"center",direction:"column",children:[Object(x.jsxs)(d.a,{w:"96",h:"80",bg:"white",borderRadius:"2xl",direction:"column",justify:"center",align:"center",shadow:"lg",children:[Object(x.jsx)(j.a,{fontSize:"2xl",fontWeight:"500",color:"gray.700",children:"Temperature coventer"}),Object(x.jsx)(p,{unit:t,handleClick:function(e){i(e)}}),Object(x.jsx)(j.a,{fontSize:"xl",mt:"2",children:t.charAt(0).toUpperCase()+t.slice(1)}),Object(x.jsx)(y,{handleChange:function(e){var n,i=e.target.value;if("celsius"===t)A((n={},Object(l.a)(n,t,i),Object(l.a)(n,"fahrenheit",function(e){return 9*e/5+32}(i)),Object(l.a)(n,"kelvin",function(e){return(100*e+27315)/100}(i)),n));else if("fahrenheit"===t){var r;A((r={},Object(l.a)(r,t,i),Object(l.a)(r,"celsius",function(e){return Math.round(5*(e-32)/9*100)/100}(i)),Object(l.a)(r,"kelvin",function(e){return Math.round(5*(100*e+45967)/9)/100}(i)),r))}else{var a;A((a={},Object(l.a)(a,t,i),Object(l.a)(a,"celsius",function(e){return Math.round(100*e-27315)/100}(i)),Object(l.a)(a,"fahrenheit",function(e){return Math.round(9*e/5*100-45967)/100}(i)),a))}},handleBlur:function(e){e.target.value||A(Object(o.a)(Object(o.a)({},S),{},Object(l.a)({},t,0)))},unit:t,tem:S})]}),Object(x.jsx)(d.a,{w:"96",bg:"white",borderRadius:"xl",my:"2",py:"4",justify:"center",color:"gray.400",shadow:"lg",children:Object(x.jsxs)(b.a,{spacing:"24px",children:[Object(x.jsxs)(g.a,{href:"https://github.com/indexhui/react-temperature-converter",isExternal:!0,_hover:{color:"gray.700",underline:"none"},verticalAlign:"middle",display:"inlineBlock",children:[Object(x.jsx)(f.a,{verticalAlign:"middle",as:k.a}),Object(x.jsx)(j.a,{verticalAlign:"middle",display:"inline",pl:"1",children:"Github"})]}),Object(x.jsxs)(g.a,{href:"https://www.figma.com/file/qIzf18qtQX7MlTWmcLnAxt/daily-coding?node-id=43%3A8",isExternal:!0,_hover:{color:"gray.700",underline:"none"},children:[Object(x.jsx)(f.a,{verticalAlign:"middle",as:C.a}),Object(x.jsx)(j.a,{verticalAlign:"middle",display:"inline",pl:"1",fontSize:"sm",children:"Figma"})]}),Object(x.jsxs)(g.a,{href:"https://indexhui.github.io/vue-temperature-converter/",isExternal:!0,_hover:{color:"gray.700",underline:"none"},children:[Object(x.jsx)(f.a,{verticalAlign:"middle",as:k.b}),Object(x.jsx)(j.a,{verticalAlign:"middle",display:"inline",pl:"1",fontSize:"sm",children:"Vue"})]})]})})]})})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,103)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),a(e),c(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(x.jsxs)(r.StrictMode,{children:[Object(x.jsx)(i.a,{}),Object(x.jsx)(S,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),A()}},[[82,1,2]]]);
//# sourceMappingURL=main.08572472.chunk.js.map