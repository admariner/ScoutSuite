(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[102],{565:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(739)),c=n(91);t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.c,{label:"ID",valuePath:"id"}),Object(a.jsx)(r.c,{label:"ARN",valuePath:"arn"}),Object(a.jsx)(r.c,{label:"Description",valuePath:"description",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Creation Date",valuePath:"CreateDate",renderValue:c.h}),Object(a.jsx)(r.c,{label:"Status",valuePath:"key_enabled",renderValue:c.c}),Object(a.jsx)(r.c,{label:"Origin",valuePath:"origin",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Key Manager",valuePath:"key_manager",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Rotation",valuePath:"rotation_enabled",renderValue:c.c})]})}},736:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),o=r.a.createContext(""),l=r.a.createContext((function(){}))},737:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(736),i=n(91);t.a=function(e){var t=e.path,n=e.children,o=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(o,t),children:n})}},738:function(e,t,n){"use strict";var a=n(13),r=n(1),c=n(0),i=n(732),o=n(9),l=n.n(o),u=n(16),s=n.n(u),b=n(14),d=n.n(b),j=n(736),v=n(91),f=n(71),p=(n(740),n(723)),h=n(216),x=n.n(h),O=n(741),m=n.n(O),P=n(217),g=n(151),C=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(c.useContext)(g.a),l=o.exceptions,u=o.addException,b=o.removeException,d=Object(P.b)().enqueueSnackbar,j=s()(l,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:j?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(p.a,{size:"small",className:"exception-btn",onClick:j?function(){b(t,n,a),d("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,n,a),d("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:j?Object(r.jsx)(m.a,{}):Object(r.jsx)(x.a,{})})})},_=n(34),V=function(e){var t,n=e.label,o=e.separator,u=e.valuePath,b=e.errorPath,p=e.className,h=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,g=Object(_.g)(),V=Object(c.useContext)(j.a),D=Object(c.useContext)(j.b),k=Object(c.useContext)(j.c),y=Object(v.a)(P||D,u),A=m(e.value||s()(V.item,y,e.value));("boolean"===typeof A&&(A=String(A)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(v.a)(P||D,e)})):t=[y];var E=t.some((function(e){return V.path_to_issues.includes(e)})),N=V.level;if(Object(c.useEffect)((function(){E&&k(N)}),[N]),void 0===A||null===A)return null;var R=Object(r.jsx)(C,{service:g.service,finding:g.finding,path:"".concat(V.path,".").concat(t[0])}),q=Object(r.jsxs)("span",{className:l()(E&&l()("issue",N)),children:[A,E&&R]});return Object(r.jsx)(f.a,{className:l()(p,"partial-value",{inline:h}),label:n,separator:o,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:A},O),{},{children:q})):q})};V.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=V},739:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),r=(n(0),n(736)),c=(n(91),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(737),o=n(738)},740:function(e,t,n){},741:function(e,t,n){"use strict";var a=n(36),r=n(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(39)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i}}]);
//# sourceMappingURL=102.2047e08f.chunk.js.map