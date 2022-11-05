(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2282],{68115:(Z,D,y)=>{"use strict";Z.exports=y(7446)},7446:function(Z,D,y){(function(v,B){Z.exports=B(y(67294),y(78384),y(66526))})(this,function(v,B,u){return function(s){var a={};function t(r){if(a[r])return a[r].exports;var i=a[r]={i:r,l:!1,exports:{}};return s[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=s,t.c=a,t.d=function(r,i,l){t.o(r,i)||Object.defineProperty(r,i,{enumerable:!0,get:l})},t.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,i){if(1&i&&(r=t(r)),8&i||4&i&&typeof r=="object"&&r&&r.__esModule)return r;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:r}),2&i&&typeof r!="string")for(var d in r)t.d(l,d,function(c){return r[c]}.bind(null,d));return l},t.n=function(r){var i=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(i,"a",i),i},t.o=function(r,i){return Object.prototype.hasOwnProperty.call(r,i)},t.p="",t(t.s=112)}({0:function(s,a,t){s.exports=t(19)()},1:function(s,a){s.exports=v},10:function(s,a,t){var r=t(25),i=t(26),l=t(22),d=t(27);s.exports=function(c,m){return r(c)||i(c,m)||l(c,m)||d()},s.exports.default=s.exports,s.exports.__esModule=!0},112:function(s,a,t){"use strict";t.r(a),t.d(a,"Crumb",function(){return L}),t.d(a,"Breadcrumbs",function(){return V});var r,i=t(4),l=t.n(i),d=t(3),c=t.n(d),m=t(1),O=t.n(m),S=t(0),f=t.n(S),p=t(2),T=t.n(p),M=t(48),P=t.n(M),E=t(8),n=t(6),e=t(9),o=t(18),h=["children","label"],A=T()(e.Flex)(r||(r=c()([`
  svg {
    height: `,`rem;
    width: `,`rem;
    path {
      fill: `,`;
    }
  }
  :last-of-type `,` {
    display: none;
  }
  :last-of-type `,` {
    color: `,`;
    font-weight: `,`;
  }
`])),.625,.625,function(U){return U.theme.colors.neutral500},n.Box,E.Typography,function(U){return U.theme.colors.neutral800},function(U){return U.theme.fontWeights.bold}),L=function(U){var X=U.children;return O.a.createElement(A,{inline:!0,as:"li"},O.a.createElement(E.Typography,{variant:"pi",textColor:"neutral600"},X),O.a.createElement(n.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},O.a.createElement(P.a,null)))};L.displayName="Crumb",L.propTypes={children:f.a.node.isRequired};var H=f.a.shape({type:f.a.oneOf([L])}),V=function(U){var X=U.children,J=U.label,ee=l()(U,h);return O.a.createElement(e.Flex,ee,O.a.createElement(o.VisuallyHidden,null,J),O.a.createElement("ol",{"aria-hidden":!0},X))};V.displayName="Breadcrumbs",V.propTypes={children:f.a.oneOfType([f.a.arrayOf(H),H]).isRequired,label:f.a.string.isRequired}},13:function(s,a){function t(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(s.exports=t=function(i){return typeof i},s.exports.default=s.exports,s.exports.__esModule=!0):(s.exports=t=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},s.exports.default=s.exports,s.exports.__esModule=!0),t(r)}s.exports=t,s.exports.default=s.exports,s.exports.__esModule=!0},18:function(s,a,t){"use strict";t.r(a),t.d(a,"VisuallyHidden",function(){return c});var r,i=t(3),l=t.n(i),d=t(2),c=t.n(d).a.div(r||(r=l()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(s,a,t){"use strict";var r=t(20);function i(){}function l(){}l.resetWarningCache=i,s.exports=function(){function d(O,S,f,p,T,M){if(M!==r){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}function c(){return d}d.isRequired=d;var m={array:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:c,element:d,elementType:d,instanceOf:c,node:d,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:l,resetWarningCache:i};return m.PropTypes=m,m}},2:function(s,a){s.exports=B},20:function(s,a,t){"use strict";s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(s,a){s.exports=function(t,r){(r==null||r>t.length)&&(r=t.length);for(var i=0,l=new Array(r);i<r;i++)l[i]=t[i];return l},s.exports.default=s.exports,s.exports.__esModule=!0},22:function(s,a,t){var r=t(21);s.exports=function(i,l){if(i){if(typeof i=="string")return r(i,l);var d=Object.prototype.toString.call(i).slice(8,-1);return d==="Object"&&i.constructor&&(d=i.constructor.name),d==="Map"||d==="Set"?Array.from(i):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?r(i,l):void 0}},s.exports.default=s.exports,s.exports.__esModule=!0},24:function(s,a){s.exports=function(t,r){if(t==null)return{};var i,l,d={},c=Object.keys(t);for(l=0;l<c.length;l++)i=c[l],r.indexOf(i)>=0||(d[i]=t[i]);return d},s.exports.default=s.exports,s.exports.__esModule=!0},25:function(s,a){s.exports=function(t){if(Array.isArray(t))return t},s.exports.default=s.exports,s.exports.__esModule=!0},26:function(s,a){s.exports=function(t,r){var i=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var l,d,c=[],m=!0,O=!1;try{for(i=i.call(t);!(m=(l=i.next()).done)&&(c.push(l.value),!r||c.length!==r);m=!0);}catch(S){O=!0,d=S}finally{try{m||i.return==null||i.return()}finally{if(O)throw d}}return c}},s.exports.default=s.exports,s.exports.__esModule=!0},27:function(s,a){s.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},s.exports.default=s.exports,s.exports.__esModule=!0},3:function(s,a){s.exports=function(t,r){return r||(r=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))},s.exports.default=s.exports,s.exports.__esModule=!0},4:function(s,a,t){var r=t(24);s.exports=function(i,l){if(i==null)return{};var d,c,m=r(i,l);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(i);for(c=0;c<O.length;c++)d=O[c],l.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(i,d)&&(m[d]=i[d])}return m},s.exports.default=s.exports,s.exports.__esModule=!0},48:function(s,a){s.exports=u},6:function(s,a,t){"use strict";t.r(a),t.d(a,"Box",function(){return n});var r,i=t(3),l=t.n(i),d=t(2),c=t.n(d),m=t(7),O=t(1),S=t.n(O),f=t(0),p=t.n(f),T=function(e){return S.a.createElement("div",e)},M={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},P={_hover:p.a.func,background:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.string]),borderColor:p.a.string,children:p.a.oneOfType([p.a.node,p.a.string]),color:p.a.string,flex:p.a.oneOfType([p.a.string,p.a.string]),grow:p.a.oneOfType([p.a.string,p.a.string]),hasRadius:p.a.bool,hiddenS:p.a.bool,hiddenXS:p.a.bool,padding:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingBottom:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingLeft:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingRight:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingTop:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),shadow:p.a.string,shrink:p.a.oneOfType([p.a.string,p.a.string])};T.defaultProps=M,T.propTypes=P;var E={color:!0},n=c.a.div.withConfig({shouldForwardProp:function(e,o){return!E[e]&&o(e)}})(r||(r=l()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,h=e.background;return o.colors[h]},function(e){var o=e.theme,h=e.color;return o.colors[h]},function(e){var o=e.theme,h=e.padding;return Object(m.a)("padding",h,o)},function(e){var o=e.theme,h=e.paddingTop;return Object(m.a)("padding-top",h,o)},function(e){var o=e.theme,h=e.paddingRight;return Object(m.a)("padding-right",h,o)},function(e){var o=e.theme,h=e.paddingBottom;return Object(m.a)("padding-bottom",h,o)},function(e){var o=e.theme,h=e.paddingLeft;return Object(m.a)("padding-left",h,o)},function(e){var o=e.theme,h=e.marginLeft;return Object(m.a)("margin-left",h,o)},function(e){var o=e.theme,h=e.marginRight;return Object(m.a)("margin-right",h,o)},function(e){var o=e.theme,h=e.marginTop;return Object(m.a)("margin-top",h,o)},function(e){var o=e.theme,h=e.marginBottom;return Object(m.a)("margin-bottom",h,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,h=e.hasRadius,A=e.borderRadius;return h?o.borderRadius:A},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,h=e.borderColor,A=e.borderStyle,L=e.borderWidth;if(h&&!A&&!L)return"1px solid ".concat(o.colors[h])},function(e){var o=e.theme,h=e.shadow;return o.shadows[h]},function(e){return e.pointerEvents},function(e){var o=e._hover,h=e.theme;return o?o(h):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});n.defaultProps=M,n.propTypes=P},7:function(s,a,t){"use strict";var r=t(10),i=t.n(r),l=t(13),d=t.n(l);a.a=function(c,m,O){var S=m;if(Array.isArray(m)||d()(m)!=="object"||(S=[m==null?void 0:m.desktop,m==null?void 0:m.tablet,m==null?void 0:m.mobile]),S!==void 0){if(Array.isArray(S)){var f=S,p=i()(f,3),T=p[0],M=p[1],P=p[2],E="".concat(c,": ").concat(O.spaces[T],";");return M!==void 0&&(E+="".concat(O.mediaQueries.tablet,`{
          `).concat(c,": ").concat(O.spaces[M],`;
        }`)),P!==void 0&&(E+="".concat(O.mediaQueries.mobile,`{
          `).concat(c,": ").concat(O.spaces[P],`;
        }`)),E}var n=O.spaces[S]||S;return"".concat(c,": ").concat(n,";")}}},8:function(s,a,t){"use strict";t.r(a),t.d(a,"Typography",function(){return n});var r,i=t(3),l=t.n(i),d=t(2),c=t.n(d),m=["alpha","beta","delta","epsilon","omega","pi","sigma"],O=t(1),S=t.n(O),f=t(0),p=t.n(f),T=function(e){return S.a.createElement("div",e)},M={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},P={ellipsis:p.a.bool,fontSize:p.a.oneOfType([p.a.number,p.a.string]),fontWeight:p.a.string,lineHeight:p.a.oneOfType([p.a.number,p.a.string]),textColor:p.a.string,textTransform:p.a.string,variant:p.a.oneOf(m)};T.defaultProps=M,T.propTypes=P;var E={fontSize:!0,fontWeight:!0},n=c.a.span.withConfig({shouldForwardProp:function(e,o){return!E[e]&&o(e)}})(r||(r=l()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(e){var o=e.theme,h=e.fontWeight;return o.fontWeights[h]},function(e){var o=e.theme,h=e.fontSize;return o.fontSizes[h]},function(e){var o=e.theme,h=e.lineHeight;return o.lineHeights[h]},function(e){var o=e.theme,h=e.textColor;return o.colors[h||"neutral800"]},function(e){return e.textTransform},function(e){return e.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(e){var o=e.variant,h=e.theme;switch(o){case"alpha":return`
        font-weight: `.concat(h.fontWeights.bold,`;
        font-size: `).concat(h.fontSizes[5],`;
        line-height: `).concat(h.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(h.fontWeights.bold,`;
        font-size: `).concat(h.fontSizes[4],`;
        line-height: `).concat(h.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(h.fontWeights.semiBold,`;
        font-size: `).concat(h.fontSizes[3],`;
        line-height: `).concat(h.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(h.fontSizes[3],`;
        line-height: `).concat(h.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(h.fontSizes[2],`;
        line-height: `).concat(h.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(h.fontSizes[1],`;
        line-height: `).concat(h.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(h.fontWeights.bold,`;
        font-size: `).concat(h.fontSizes[0],`;
        line-height: `).concat(h.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(h.fontSizes[2],`;
      `)}});n.defaultProps=M,n.propTypes=P},9:function(s,a,t){"use strict";t.r(a),t.d(a,"Flex",function(){return e});var r,i=t(3),l=t.n(i),d=t(2),c=t.n(d),m=t(6),O=t(7),S=t(1),f=t.n(S),p=t(0),T=t.n(p),M=function(o){return f.a.createElement("div",o)},P={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},E={alignItems:T.a.string,basis:T.a.oneOfType([T.a.string,T.a.number]),direction:T.a.string,gap:T.a.oneOfType([T.a.shape({desktop:T.a.number,mobile:T.a.number,tablet:T.a.number}),T.a.number,T.a.arrayOf(T.a.number),T.a.string]),inline:T.a.bool,justifyContent:T.a.string,reverse:T.a.bool,shrink:T.a.number,wrap:T.a.string};M.defaultProps=P,M.propTypes=E;var n={direction:!0},e=c()(m.Box).withConfig({shouldForwardProp:function(o,h){return!n[o]&&h(o)}})(r||(r=l()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(o){return o.alignItems},function(o){return o.inline?"inline-flex":"flex"},function(o){return o.direction},function(o){return o.shrink},function(o){return o.wrap},function(o){var h=o.gap,A=o.theme;return Object(O.a)("gap",h,A)},function(o){return o.justifyContent});e.defaultProps=P,e.propTypes=E}})})},62031:(Z,D,y)=>{"use strict";Z.exports=y(59525)},59525:function(Z,D,y){(function(v,B){Z.exports=B(y(67294),y(78384))})(this,function(v,B){return function(u){var s={};function a(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return u[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=u,a.c=s,a.d=function(t,r,i){a.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:i})},a.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,r){if(1&r&&(t=a(t)),8&r||4&r&&typeof t=="object"&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&r&&typeof t!="string")for(var l in t)a.d(i,l,function(d){return t[d]}.bind(null,l));return i},a.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(r,"a",r),r},a.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},a.p="",a(a.s=109)}({0:function(u,s,a){u.exports=a(19)()},1:function(u,s){u.exports=v},10:function(u,s,a){var t=a(25),r=a(26),i=a(22),l=a(27);u.exports=function(d,c){return t(d)||r(d,c)||i(d,c)||l()},u.exports.default=u.exports,u.exports.__esModule=!0},109:function(u,s,a){"use strict";a.r(s),a.d(s,"Main",function(){return n}),a.d(s,"SkipToContent",function(){return A});var t,r=a(5),i=a.n(r),l=a(4),d=a.n(l),c=a(3),m=a.n(c),O=a(1),S=a.n(O),f=a(0),p=a.n(f),T=a(2),M=a.n(T),P=["labelledBy"],E=M.a.main(t||(t=m()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),n=function(L){var H=L.labelledBy,V=d()(L,P),U=H||"main-content-title";return S.a.createElement(E,i()({"aria-labelledby":U,id:"main-content",tabIndex:-1},V))};n.defaultProps={labelledBy:void 0},n.propTypes={labelledBy:p.a.string};var e,o=a(6),h=M()(o.Box)(e||(e=m()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(L){return L.theme.spaces[3]},function(L){return L.theme.spaces[3]}),A=function(L){var H=L.children;return S.a.createElement(h,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},H)};A.propTypes={children:p.a.node.isRequired}},13:function(u,s){function a(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(u.exports=a=function(r){return typeof r},u.exports.default=u.exports,u.exports.__esModule=!0):(u.exports=a=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},u.exports.default=u.exports,u.exports.__esModule=!0),a(t)}u.exports=a,u.exports.default=u.exports,u.exports.__esModule=!0},19:function(u,s,a){"use strict";var t=a(20);function r(){}function i(){}i.resetWarningCache=r,u.exports=function(){function l(m,O,S,f,p,T){if(T!==t){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}}function d(){return l}l.isRequired=l;var c={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:d,element:l,elementType:l,instanceOf:d,node:l,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:i,resetWarningCache:r};return c.PropTypes=c,c}},2:function(u,s){u.exports=B},20:function(u,s,a){"use strict";u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(u,s){u.exports=function(a,t){(t==null||t>a.length)&&(t=a.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=a[r];return i},u.exports.default=u.exports,u.exports.__esModule=!0},22:function(u,s,a){var t=a(21);u.exports=function(r,i){if(r){if(typeof r=="string")return t(r,i);var l=Object.prototype.toString.call(r).slice(8,-1);return l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set"?Array.from(r):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?t(r,i):void 0}},u.exports.default=u.exports,u.exports.__esModule=!0},24:function(u,s){u.exports=function(a,t){if(a==null)return{};var r,i,l={},d=Object.keys(a);for(i=0;i<d.length;i++)r=d[i],t.indexOf(r)>=0||(l[r]=a[r]);return l},u.exports.default=u.exports,u.exports.__esModule=!0},25:function(u,s){u.exports=function(a){if(Array.isArray(a))return a},u.exports.default=u.exports,u.exports.__esModule=!0},26:function(u,s){u.exports=function(a,t){var r=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(r!=null){var i,l,d=[],c=!0,m=!1;try{for(r=r.call(a);!(c=(i=r.next()).done)&&(d.push(i.value),!t||d.length!==t);c=!0);}catch(O){m=!0,l=O}finally{try{c||r.return==null||r.return()}finally{if(m)throw l}}return d}},u.exports.default=u.exports,u.exports.__esModule=!0},27:function(u,s){u.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},u.exports.default=u.exports,u.exports.__esModule=!0},3:function(u,s){u.exports=function(a,t){return t||(t=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(t)}}))},u.exports.default=u.exports,u.exports.__esModule=!0},4:function(u,s,a){var t=a(24);u.exports=function(r,i){if(r==null)return{};var l,d,c=t(r,i);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(r);for(d=0;d<m.length;d++)l=m[d],i.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(r,l)&&(c[l]=r[l])}return c},u.exports.default=u.exports,u.exports.__esModule=!0},5:function(u,s){function a(){return u.exports=a=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},u.exports.default=u.exports,u.exports.__esModule=!0,a.apply(this,arguments)}u.exports=a,u.exports.default=u.exports,u.exports.__esModule=!0},6:function(u,s,a){"use strict";a.r(s),a.d(s,"Box",function(){return E});var t,r=a(3),i=a.n(r),l=a(2),d=a.n(l),c=a(7),m=a(1),O=a.n(m),S=a(0),f=a.n(S),p=function(n){return O.a.createElement("div",n)},T={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},M={_hover:f.a.func,background:f.a.string,basis:f.a.oneOfType([f.a.string,f.a.string]),borderColor:f.a.string,children:f.a.oneOfType([f.a.node,f.a.string]),color:f.a.string,flex:f.a.oneOfType([f.a.string,f.a.string]),grow:f.a.oneOfType([f.a.string,f.a.string]),hasRadius:f.a.bool,hiddenS:f.a.bool,hiddenXS:f.a.bool,padding:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingBottom:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingLeft:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingRight:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingTop:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),shadow:f.a.string,shrink:f.a.oneOfType([f.a.string,f.a.string])};p.defaultProps=T,p.propTypes=M;var P={color:!0},E=d.a.div.withConfig({shouldForwardProp:function(n,e){return!P[n]&&e(n)}})(t||(t=i()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e},function(n){var e=n.theme,o=n.background;return e.colors[o]},function(n){var e=n.theme,o=n.color;return e.colors[o]},function(n){var e=n.theme,o=n.padding;return Object(c.a)("padding",o,e)},function(n){var e=n.theme,o=n.paddingTop;return Object(c.a)("padding-top",o,e)},function(n){var e=n.theme,o=n.paddingRight;return Object(c.a)("padding-right",o,e)},function(n){var e=n.theme,o=n.paddingBottom;return Object(c.a)("padding-bottom",o,e)},function(n){var e=n.theme,o=n.paddingLeft;return Object(c.a)("padding-left",o,e)},function(n){var e=n.theme,o=n.marginLeft;return Object(c.a)("margin-left",o,e)},function(n){var e=n.theme,o=n.marginRight;return Object(c.a)("margin-right",o,e)},function(n){var e=n.theme,o=n.marginTop;return Object(c.a)("margin-top",o,e)},function(n){var e=n.theme,o=n.marginBottom;return Object(c.a)("margin-bottom",o,e)},function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(n){var e=n.theme,o=n.hasRadius,h=n.borderRadius;return o?e.borderRadius:h},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var e=n.borderColor;return n.theme.colors[e]},function(n){var e=n.theme,o=n.borderColor,h=n.borderStyle,A=n.borderWidth;if(o&&!h&&!A)return"1px solid ".concat(e.colors[o])},function(n){var e=n.theme,o=n.shadow;return e.shadows[o]},function(n){return n.pointerEvents},function(n){var e=n._hover,o=n.theme;return e?e(o):void 0},function(n){return n.display},function(n){return n.position},function(n){var e=n.left;return n.theme.spaces[e]||e},function(n){var e=n.right;return n.theme.spaces[e]||e},function(n){var e=n.top;return n.theme.spaces[e]||e},function(n){var e=n.bottom;return n.theme.spaces[e]||e},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var e=n.width;return n.theme.spaces[e]||e},function(n){var e=n.maxWidth;return n.theme.spaces[e]||e},function(n){var e=n.minWidth;return n.theme.spaces[e]||e},function(n){var e=n.height;return n.theme.spaces[e]||e},function(n){var e=n.maxHeight;return n.theme.spaces[e]||e},function(n){var e=n.minHeight;return n.theme.spaces[e]||e},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});E.defaultProps=T,E.propTypes=M},7:function(u,s,a){"use strict";var t=a(10),r=a.n(t),i=a(13),l=a.n(i);s.a=function(d,c,m){var O=c;if(Array.isArray(c)||l()(c)!=="object"||(O=[c==null?void 0:c.desktop,c==null?void 0:c.tablet,c==null?void 0:c.mobile]),O!==void 0){if(Array.isArray(O)){var S=O,f=r()(S,3),p=f[0],T=f[1],M=f[2],P="".concat(d,": ").concat(m.spaces[p],";");return T!==void 0&&(P+="".concat(m.mediaQueries.tablet,`{
          `).concat(d,": ").concat(m.spaces[T],`;
        }`)),M!==void 0&&(P+="".concat(m.mediaQueries.mobile,`{
          `).concat(d,": ").concat(m.spaces[M],`;
        }`)),P}var E=m.spaces[O]||O;return"".concat(d,": ").concat(E,";")}}}})})},8971:(Z,D,y)=>{"use strict";y.r(D),y.d(D,{ProvidersPage:()=>xe,default:()=>$e});var v=y(67294),B=y(97132),u=y(68547),s=y(18721),a=y.n(s),t=y(11700),r=y.n(t),i=y(67814),l=y(78862),d=y(62031),c=y(84686),m=y(41798),O=y(49425),S=y(26851),f=y(30741),p=y(19352),T=y.n(p),M=y(23724),P=y(53209),E=y(89031);const n={id:(0,E.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},e={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},o={id:(0,E.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},h={id:(0,E.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},A={id:(0,E.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},L={id:(0,E.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},H={id:(0,E.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},V={id:(0,E.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},X={email:{form:[[{intlLabel:h,name:"enabled",type:"bool",description:o,size:6}]],schema:P.Ry().shape({enabled:P.Xg().required(u.translatedErrors.required)})},providers:{form:[[{intlLabel:h,name:"enabled",type:"bool",description:o,size:6,validations:{required:!0}}],[{intlLabel:A,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:V,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:n,placeholder:e,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:L,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:P.Ry().shape({enabled:P.Xg().required(u.translatedErrors.required),key:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()}),secret:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()}),callback:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:h,name:"enabled",type:"bool",description:o,size:6,validations:{required:!0}}],[{intlLabel:A,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:V,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,E.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,E.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:n,placeholder:e,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:L,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:P.Ry().shape({enabled:P.Xg().required(u.translatedErrors.required),key:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()}),secret:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()}),subdomain:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()}),callback:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()})})}};var J=(g,b,x)=>new Promise((F,C)=>{var W=R=>{try{k(x.next(R))}catch(j){C(j)}},z=R=>{try{k(x.throw(R))}catch(j){C(j)}},k=R=>R.done?F(R.value):Promise.resolve(R.value).then(W,z);k((x=x.apply(g,b)).next())});const ee=g=>J(void 0,null,function*(){try{const{data:b}=yield E.be.get((0,E.Gc)("providers"));return b}catch(b){throw g({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),Te=g=>E.be.put((0,E.Gc)("providers"),g);var Ee=y(96486);const Se=g=>(0,Ee.sortBy)(Object.keys(g).reduce((b,x)=>{const{icon:F,enabled:C,subdomain:W}=g[x],z=F==="envelope"?["fas","envelope"]:["fab",F];return W!==void 0?b.push({name:x,icon:z,enabled:C,subdomain:W}):b.push({name:x,icon:z,enabled:C}),b},[]),"name");var le=y(81912),de=y(19408),we=y(9008),ce=y(68115),fe=y(34626),G=y(75146),Me=y(45697),w=y.n(Me),je=y(80831),Re=y(47857),Ce=y(55967),Be=Object.defineProperty,pe=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,me=(g,b,x)=>b in g?Be(g,b,{enumerable:!0,configurable:!0,writable:!0,value:x}):g[b]=x,te=(g,b)=>{for(var x in b||(b={}))Le.call(b,x)&&me(g,x,b[x]);if(pe)for(var x of pe(b))ze.call(b,x)&&me(g,x,b[x]);return g};const re=({description:g,disabled:b,intlLabel:x,error:F,name:C,onChange:W,placeholder:z,providerToEditName:k,type:R,value:j})=>{const{formatMessage:N}=(0,B.useIntl)(),Q=C==="noName"?`${strapi.backendURL}/api/connect/${k}/callback`:j,_=N({id:x.id,defaultMessage:x.defaultMessage},te({provider:k},x.values)),q=g?N({id:g.id,defaultMessage:g.defaultMessage},te({provider:k},g.values)):"";if(R==="bool")return v.createElement(Re.ToggleInput,{"aria-label":C,checked:j,disabled:b,hint:q,label:_,name:C,offLabel:N({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:N({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:$=>{W({target:{name:C,value:$.target.checked}})}});const ae=z?N({id:z.id,defaultMessage:z.defaultMessage},te({},z.values)):"",ie=F?N({id:F,defaultMessage:F}):"";return v.createElement(Ce.TextInput,{"aria-label":C,disabled:b,error:ie,label:_,name:C,onChange:W,placeholder:ae,type:R,value:Q})};re.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},re.propTypes={description:w().shape({id:w().string.isRequired,defaultMessage:w().string.isRequired,values:w().object}),disabled:w().bool,error:w().string,intlLabel:w().shape({id:w().string.isRequired,defaultMessage:w().string.isRequired,values:w().object}).isRequired,name:w().string.isRequired,onChange:w().func.isRequired,placeholder:w().shape({id:w().string.isRequired,defaultMessage:w().string.isRequired,values:w().object}),providerToEditName:w().string.isRequired,type:w().string.isRequired,value:w().oneOfType([w().bool,w().string])};const Ie=re;var Ae=Object.defineProperty,Fe=Object.defineProperties,ke=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,ve=(g,b,x)=>b in g?Ae(g,b,{enumerable:!0,configurable:!0,writable:!0,value:x}):g[b]=x,He=(g,b)=>{for(var x in b||(b={}))Ue.call(b,x)&&ve(g,x,b[x]);if(he)for(var x of he(b))We.call(b,x)&&ve(g,x,b[x]);return g},Ze=(g,b)=>Fe(g,ke(b));const ne=({headerBreadcrumbs:g,initialData:b,isSubmiting:x,layout:F,isOpen:C,onSubmit:W,onToggle:z,providerToEditName:k})=>{const{formatMessage:R}=(0,B.useIntl)();return C?v.createElement(G.ModalLayout,{onClose:z,labelledBy:"title"},v.createElement(G.ModalHeader,null,v.createElement(ce.Breadcrumbs,{label:g.join(", ")},g.map(j=>v.createElement(ce.Crumb,{key:j},j)))),v.createElement(je.Formik,{onSubmit:j=>W(j),initialValues:b,validationSchema:F.schema,validateOnChange:!1},({errors:j,handleChange:N,values:Q})=>v.createElement(u.Form,null,v.createElement(G.ModalBody,null,v.createElement(we.Stack,{spacing:1},v.createElement(fe.Grid,{gap:5},F.form.map(_=>_.map(q=>v.createElement(fe.GridItem,{key:q.name,col:q.size,xs:12},v.createElement(Ie,Ze(He({},q),{error:j[q.name],onChange:N,value:Q[q.name],providerToEditName:k})))))))),v.createElement(G.ModalFooter,{startActions:v.createElement(de.Button,{variant:"tertiary",onClick:z,type:"button"},R({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:v.createElement(de.Button,{type:"submit",loading:x},R({id:"global.save",defaultMessage:"Save"}))})))):null};ne.defaultProps={initialData:null,providerToEditName:null},ne.propTypes={headerBreadcrumbs:w().arrayOf(w().string).isRequired,initialData:w().object,layout:w().shape({form:w().arrayOf(w().array),schema:w().object}).isRequired,isOpen:w().bool.isRequired,isSubmiting:w().bool.isRequired,onSubmit:w().func.isRequired,onToggle:w().func.isRequired,providerToEditName:w().string};const De=ne;var Ne=Object.defineProperty,qe=Object.defineProperties,Ve=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,be=(g,b,x)=>b in g?Ne(g,b,{enumerable:!0,configurable:!0,writable:!0,value:x}):g[b]=x,oe=(g,b)=>{for(var x in b||(b={}))Xe.call(b,x)&&be(g,x,b[x]);if(ge)for(var x of ge(b))Qe.call(b,x)&&be(g,x,b[x]);return g},_e=(g,b)=>qe(g,Ve(b)),ye=(g,b,x)=>new Promise((F,C)=>{var W=R=>{try{k(x.next(R))}catch(j){C(j)}},z=R=>{try{k(x.throw(R))}catch(j){C(j)}},k=R=>R.done?F(R.value):Promise.resolve(R.value).then(W,z);k((x=x.apply(g,b)).next())});const xe=()=>{const{formatMessage:g}=(0,B.useIntl)();(0,u.useFocusWhenNavigate)();const{notifyStatus:b}=(0,c.useNotifyAT)(),x=(0,M.useQueryClient)(),{trackUsage:F}=(0,u.useTracking)(),C=(0,v.useRef)(F),[W,z]=(0,v.useState)(!1),[k,R]=(0,v.useState)(!1),[j,N]=(0,v.useState)(null),Q=(0,u.useNotification)(),{lockApp:_,unlockApp:q}=(0,u.useOverlayBlocker)(),ae=(0,v.useMemo)(()=>({update:le.Z.updateProviders}),[]),{isLoading:ie,allowedActions:{canUpdate:$}}=(0,u.useRBAC)(ae),{isLoading:Ge,data:K,isFetching:Ke}=(0,M.useQuery)("get-providers",()=>ee(Q),{onSuccess(){b(g({id:(0,E.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Ye=Ge||Ke,Je=(0,M.useMutation)(Te,{onSuccess(){return ye(this,null,function*(){yield x.invalidateQueries("get-providers"),Q({type:"info",message:{id:(0,E.OB)("notification.success.submit")}}),C.current("didEditAuthenticationProvider"),R(!1),se(),q()})},onError(){Q({type:"warning",message:{id:"notification.error"}}),q(),R(!1)},refetchActive:!1}),Y=(0,v.useMemo)(()=>Se(K),[K]),et=Y.length,Oe=(0,v.useMemo)(()=>{if(!j)return!1;const I=Y.find(ue=>ue.name===j);return a()(I,"subdomain")},[Y,j]),tt=g({id:(0,E.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),rt=(0,v.useMemo)(()=>j==="email"?X.email:Oe?X.providersWithSubdomain:X.providers,[j,Oe]),se=()=>{z(I=>!I)},Pe=I=>{$&&(N(I.name),se())},nt=I=>ye(void 0,null,function*(){R(!0),_(),C.current("willEditAuthenticationProvider");const ue=_e(oe({},K),{[j]:I});Je.mutate({providers:ue})});return v.createElement(l.Layout,null,v.createElement(u.SettingsPageTitle,{name:tt}),v.createElement(d.Main,null,v.createElement(l.HeaderLayout,{title:g({id:(0,E.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Ye||ie?v.createElement(u.LoadingIndicatorPage,null):v.createElement(l.ContentLayout,null,v.createElement(m.Table,{colCount:4,rowCount:et+1},v.createElement(m.Thead,null,v.createElement(m.Tr,null,v.createElement(m.Th,null,v.createElement(O.Typography,{variant:"sigma",textColor:"neutral600"},v.createElement(S.VisuallyHidden,null,g({id:(0,E.OB)("Providers.image"),defaultMessage:"Image"})))),v.createElement(m.Th,null,v.createElement(O.Typography,{variant:"sigma",textColor:"neutral600"},g({id:"global.name",defaultMessage:"Name"}))),v.createElement(m.Th,null,v.createElement(O.Typography,{variant:"sigma",textColor:"neutral600"},g({id:(0,E.OB)("Providers.status"),defaultMessage:"Status"}))),v.createElement(m.Th,null,v.createElement(O.Typography,{variant:"sigma"},v.createElement(S.VisuallyHidden,null,g({id:"global.settings",defaultMessage:"Settings"})))))),v.createElement(m.Tbody,null,Y.map(I=>v.createElement(m.Tr,oe({key:I.name},(0,u.onRowClick)({fn:()=>Pe(I),condition:$})),v.createElement(m.Td,{width:""},v.createElement(i.G,{icon:I.icon})),v.createElement(m.Td,{width:"45%"},v.createElement(O.Typography,{fontWeight:"semiBold",textColor:"neutral800"},I.name)),v.createElement(m.Td,{width:"65%"},v.createElement(O.Typography,{textColor:I.enabled?"success600":"danger600","data-testid":`enable-${I.name}`},I.enabled?g({id:"global.enabled",defaultMessage:"Enabled"}):g({id:"global.disabled",defaultMessage:"Disabled"}))),v.createElement(m.Td,oe({},u.stopPropagation),$&&v.createElement(f.IconButton,{onClick:()=>Pe(I),noBorder:!0,icon:v.createElement(T(),null),label:"Edit"})))))))),v.createElement(De,{initialData:K[j],isOpen:W,isSubmiting:k,layout:rt,headerBreadcrumbs:[g({id:(0,E.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),r()(j)],onToggle:se,onSubmit:nt,providerToEditName:j}))},$e=()=>v.createElement(u.CheckPagePermissions,{permissions:le.Z.readProviders},v.createElement(xe,null))},46979:(Z,D,y)=>{"use strict";y.d(D,{Z:()=>t});var v=y(51721),B=y(68547),u=y.n(B),s=(r,i,l)=>new Promise((d,c)=>{var m=f=>{try{S(l.next(f))}catch(p){c(p)}},O=f=>{try{S(l.throw(f))}catch(p){c(p)}},S=f=>f.done?d(f.value):Promise.resolve(f.value).then(m,O);S((l=l.apply(r,i)).next())});const a=v.ZP.create({baseURL:""});a.interceptors.request.use(r=>s(void 0,null,function*(){return r.headers={Authorization:`Bearer ${B.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},r}),r=>{Promise.reject(r)}),a.interceptors.response.use(r=>r,r=>{var i;throw((i=r.response)==null?void 0:i.status)===401&&(B.auth.clearAppStorage(),window.location.reload()),r});const t=a},89031:(Z,D,y)=>{"use strict";y.d(D,{be:()=>v.Z,YX:()=>s,Gc:()=>r,OB:()=>i.Z});var v=y(46979),B=y(96486);const s=l=>Object.keys(l).reduce((d,c)=>{const m=l[c].controllers,O=Object.keys(m).reduce((S,f)=>((0,B.isEmpty)(m[f])||(S[f]=m[f]),S),{});return(0,B.isEmpty)(O)||(d[c]={controllers:O}),d},{});var a=y(31498);const r=l=>`/${a.Z}/${l}`;var i=y(84757)}}]);
