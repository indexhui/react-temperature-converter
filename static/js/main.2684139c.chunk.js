(this["webpackJsonpreact-temperature-converter"]=this["webpackJsonpreact-temperature-converter"]||[]).push([[0],{80:function(e,n,t){"use strict";t.r(n);var i=t(96),c=t(1),r=t(60),a=t.n(r),l=t(3),o=t(50),s=t(4),u=t(97),h=t(62),j=t(92),d=t(93),b=t(99),O=t(94),x=t(95),f=t(98),g=t(90),m=t(5),v=function(e){return Object(m.jsx)(f.a,{w:"12",h:"12",bg:e.unit===e.name?"white":"none",_focus:{boxShadow:"lg"},boxShadow:e.unit===e.name?"lg":"none",borderRadius:"50",onClick:function(){return e.handleClick(e.name)},children:e.showName})},p=function(e){var n=e.unit,t=e.handleClick;return Object(m.jsx)(g.a,{my:"4",children:Object(m.jsxs)(b.a,{px:"2",py:"2",bg:"gray.100",borderRadius:"50",boxShadow:"inner",spacing:"24px",children:[Object(m.jsx)(v,{handleClick:t,unit:n,showName:"\xb0C",name:"celsius"}),Object(m.jsx)(v,{handleClick:t,unit:n,showName:"\xb0F",name:"fahrenheit"}),Object(m.jsx)(v,{handleClick:t,unit:n,showName:"K",name:"kelvin"})]})})},w=t(100),y=function(e){var n=e.tem,t=e.handleChange,i=e.handleBlur,c=e.unit;return Object(m.jsx)(g.a,{children:Object(m.jsx)(w.a,{display:"inline",value:n[c],type:"number",w:"48",h:"auto",overflow:"visible",textAlign:"center",border:"none",fontSize:"5xl",onChange:t,onBlur:i})})},k=t(52);var C=function(){var e=Object(c.useState)("celsius"),n=Object(s.a)(e,2),t=n[0],i=n[1],r=Object(c.useState)("teal.300"),a=Object(s.a)(r,2),f=a[0],g=a[1],v=Object(c.useState)({celsius:0,fahrenheit:32,kelvin:273.15}),w=Object(s.a)(v,2),C=w[0],S=w[1];return Object(c.useEffect)((function(){C.celsius>28?g("red.300"):C.celsius}),[C.celsius]),Object(m.jsx)(u.a,{theme:h.theme,children:Object(m.jsxs)(j.a,{w:"100vw",h:"100vh",bg:f,align:"center",justify:"center",direction:"column",children:[Object(m.jsxs)(j.a,{w:"96",h:"80",bg:"white",borderRadius:"2xl",direction:"column",justify:"center",align:"center",children:[Object(m.jsx)(d.a,{fontSize:"2xl",children:"Temperature coventer"}),Object(m.jsx)(p,{unit:t,handleClick:function(e){i(e)}}),Object(m.jsx)(d.a,{fontSize:"xl",children:t.charAt(0).toUpperCase()+t.slice(1)}),Object(m.jsx)(y,{handleChange:function(e){var n,i=e.target.value;if("celsius"===t)S((n={},Object(l.a)(n,t,i),Object(l.a)(n,"fahrenheit",function(e){return 9*e/5+32}(i)),Object(l.a)(n,"kelvin",function(e){return(100*e+27315)/100}(i)),n));else if("fahrenheit"===t){var c;S((c={},Object(l.a)(c,t,i),Object(l.a)(c,"celsius",function(e){return Math.round(5*(e-32)/9*100)/100}(i)),Object(l.a)(c,"kelvin",function(e){return Math.round(5*(100*e+45967)/9)/100}(i)),c))}else{var r;S((r={},Object(l.a)(r,t,i),Object(l.a)(r,"celsius",function(e){return Math.round(100*e-27315)/100}(i)),Object(l.a)(r,"fahrenheit",function(e){return Math.round(9*e/5*100-45967)/100}(i)),r))}},handleBlur:function(e){e.target.value||S(Object(o.a)(Object(o.a)({},C),{},Object(l.a)({},t,0)))},unit:t,tem:C})]}),Object(m.jsx)(j.a,{w:"96",bg:"white",borderRadius:"xl",my:"2",py:"4",justify:"center",color:"gray.400",children:Object(m.jsxs)(b.a,{spacing:"24px",children:[Object(m.jsxs)(O.a,{href:"https://github.com/indexhui/react-temperature-converter",isExternal:!0,_hover:{color:"gray.700",underline:"none"},verticalAlign:"middle",display:"inlineBlock",children:[Object(m.jsx)(x.a,{verticalAlign:"middle",as:k.a}),Object(m.jsx)(d.a,{verticalAlign:"middle",display:"inline",pl:"1",children:"Github"})]}),Object(m.jsxs)(O.a,{href:"https://indexhui.github.io/vue-temperature-converter/",isExternal:!0,_hover:{color:"gray.700",underline:"none"},children:[Object(m.jsx)(x.a,{verticalAlign:"middle",as:k.b}),Object(m.jsx)(d.a,{verticalAlign:"middle",display:"inline",pl:"1",fontSize:"sm",children:"Vue"})]})]})})]})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,101)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),i(e),c(e),r(e),a(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(m.jsxs)(c.StrictMode,{children:[Object(m.jsx)(i.a,{}),Object(m.jsx)(C,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),S()}},[[80,1,2]]]);
//# sourceMappingURL=main.2684139c.chunk.js.map