(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8418],{68115:(z,W,v)=>{"use strict";z.exports=v(7446)},7446:function(z,W,v){(function(f,w){z.exports=w(v(67294),v(78384),v(66526))})(this,function(f,w,u){return function(o){var r={};function t(n){if(r[n])return r[n].exports;var l=r[n]={i:n,l:!1,exports:{}};return o[n].call(l.exports,l,l.exports,t),l.l=!0,l.exports}return t.m=o,t.c=r,t.d=function(n,l,s){t.o(n,l)||Object.defineProperty(n,l,{enumerable:!0,get:s})},t.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,l){if(1&l&&(n=t(n)),8&l||4&l&&typeof n=="object"&&n&&n.__esModule)return n;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:n}),2&l&&typeof n!="string")for(var c in n)t.d(s,c,function(p){return n[p]}.bind(null,c));return s},t.n=function(n){var l=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(l,"a",l),l},t.o=function(n,l){return Object.prototype.hasOwnProperty.call(n,l)},t.p="",t(t.s=112)}({0:function(o,r,t){o.exports=t(19)()},1:function(o,r){o.exports=f},10:function(o,r,t){var n=t(25),l=t(26),s=t(22),c=t(27);o.exports=function(p,g){return n(p)||l(p,g)||s(p,g)||c()},o.exports.default=o.exports,o.exports.__esModule=!0},112:function(o,r,t){"use strict";t.r(r),t.d(r,"Crumb",function(){return R}),t.d(r,"Breadcrumbs",function(){return D});var n,l=t(4),s=t.n(l),c=t(3),p=t.n(c),g=t(1),y=t.n(g),b=t(0),d=t.n(b),m=t(2),O=t.n(m),P=t(48),S=t.n(P),M=t(8),a=t(6),e=t(9),i=t(18),h=["children","label"],A=O()(e.Flex)(n||(n=p()([`
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
`])),.625,.625,function(I){return I.theme.colors.neutral500},a.Box,M.Typography,function(I){return I.theme.colors.neutral800},function(I){return I.theme.fontWeights.bold}),R=function(I){var N=I.children;return y.a.createElement(A,{inline:!0,as:"li"},y.a.createElement(M.Typography,{variant:"pi",textColor:"neutral600"},N),y.a.createElement(a.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},y.a.createElement(S.a,null)))};R.displayName="Crumb",R.propTypes={children:d.a.node.isRequired};var _=d.a.shape({type:d.a.oneOf([R])}),D=function(I){var N=I.children,V=I.label,$=s()(I,h);return y.a.createElement(e.Flex,$,y.a.createElement(i.VisuallyHidden,null,V),y.a.createElement("ol",{"aria-hidden":!0},N))};D.displayName="Breadcrumbs",D.propTypes={children:d.a.oneOfType([d.a.arrayOf(_),_]).isRequired,label:d.a.string.isRequired}},13:function(o,r){function t(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(o.exports=t=function(l){return typeof l},o.exports.default=o.exports,o.exports.__esModule=!0):(o.exports=t=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},o.exports.default=o.exports,o.exports.__esModule=!0),t(n)}o.exports=t,o.exports.default=o.exports,o.exports.__esModule=!0},18:function(o,r,t){"use strict";t.r(r),t.d(r,"VisuallyHidden",function(){return p});var n,l=t(3),s=t.n(l),c=t(2),p=t.n(c).a.div(n||(n=s()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(o,r,t){"use strict";var n=t(20);function l(){}function s(){}s.resetWarningCache=l,o.exports=function(){function c(y,b,d,m,O,P){if(P!==n){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}function p(){return c}c.isRequired=c;var g={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:p,element:c,elementType:c,instanceOf:p,node:c,objectOf:p,oneOf:p,oneOfType:p,shape:p,exact:p,checkPropTypes:s,resetWarningCache:l};return g.PropTypes=g,g}},2:function(o,r){o.exports=w},20:function(o,r,t){"use strict";o.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(o,r){o.exports=function(t,n){(n==null||n>t.length)&&(n=t.length);for(var l=0,s=new Array(n);l<n;l++)s[l]=t[l];return s},o.exports.default=o.exports,o.exports.__esModule=!0},22:function(o,r,t){var n=t(21);o.exports=function(l,s){if(l){if(typeof l=="string")return n(l,s);var c=Object.prototype.toString.call(l).slice(8,-1);return c==="Object"&&l.constructor&&(c=l.constructor.name),c==="Map"||c==="Set"?Array.from(l):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?n(l,s):void 0}},o.exports.default=o.exports,o.exports.__esModule=!0},24:function(o,r){o.exports=function(t,n){if(t==null)return{};var l,s,c={},p=Object.keys(t);for(s=0;s<p.length;s++)l=p[s],n.indexOf(l)>=0||(c[l]=t[l]);return c},o.exports.default=o.exports,o.exports.__esModule=!0},25:function(o,r){o.exports=function(t){if(Array.isArray(t))return t},o.exports.default=o.exports,o.exports.__esModule=!0},26:function(o,r){o.exports=function(t,n){var l=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(l!=null){var s,c,p=[],g=!0,y=!1;try{for(l=l.call(t);!(g=(s=l.next()).done)&&(p.push(s.value),!n||p.length!==n);g=!0);}catch(b){y=!0,c=b}finally{try{g||l.return==null||l.return()}finally{if(y)throw c}}return p}},o.exports.default=o.exports,o.exports.__esModule=!0},27:function(o,r){o.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},o.exports.default=o.exports,o.exports.__esModule=!0},3:function(o,r){o.exports=function(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))},o.exports.default=o.exports,o.exports.__esModule=!0},4:function(o,r,t){var n=t(24);o.exports=function(l,s){if(l==null)return{};var c,p,g=n(l,s);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(l);for(p=0;p<y.length;p++)c=y[p],s.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(l,c)&&(g[c]=l[c])}return g},o.exports.default=o.exports,o.exports.__esModule=!0},48:function(o,r){o.exports=u},6:function(o,r,t){"use strict";t.r(r),t.d(r,"Box",function(){return a});var n,l=t(3),s=t.n(l),c=t(2),p=t.n(c),g=t(7),y=t(1),b=t.n(y),d=t(0),m=t.n(d),O=function(e){return b.a.createElement("div",e)},P={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},S={_hover:m.a.func,background:m.a.string,basis:m.a.oneOfType([m.a.string,m.a.string]),borderColor:m.a.string,children:m.a.oneOfType([m.a.node,m.a.string]),color:m.a.string,flex:m.a.oneOfType([m.a.string,m.a.string]),grow:m.a.oneOfType([m.a.string,m.a.string]),hasRadius:m.a.bool,hiddenS:m.a.bool,hiddenXS:m.a.bool,padding:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingBottom:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingLeft:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingRight:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingTop:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),shadow:m.a.string,shrink:m.a.oneOfType([m.a.string,m.a.string])};O.defaultProps=P,O.propTypes=S;var M={color:!0},a=p.a.div.withConfig({shouldForwardProp:function(e,i){return!M[e]&&i(e)}})(n||(n=s()([`
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
`])),function(e){var i=e.fontSize;return e.theme.fontSizes[i]||i},function(e){var i=e.theme,h=e.background;return i.colors[h]},function(e){var i=e.theme,h=e.color;return i.colors[h]},function(e){var i=e.theme,h=e.padding;return Object(g.a)("padding",h,i)},function(e){var i=e.theme,h=e.paddingTop;return Object(g.a)("padding-top",h,i)},function(e){var i=e.theme,h=e.paddingRight;return Object(g.a)("padding-right",h,i)},function(e){var i=e.theme,h=e.paddingBottom;return Object(g.a)("padding-bottom",h,i)},function(e){var i=e.theme,h=e.paddingLeft;return Object(g.a)("padding-left",h,i)},function(e){var i=e.theme,h=e.marginLeft;return Object(g.a)("margin-left",h,i)},function(e){var i=e.theme,h=e.marginRight;return Object(g.a)("margin-right",h,i)},function(e){var i=e.theme,h=e.marginTop;return Object(g.a)("margin-top",h,i)},function(e){var i=e.theme,h=e.marginBottom;return Object(g.a)("margin-bottom",h,i)},function(e){var i=e.theme;return e.hiddenS?"".concat(i.mediaQueries.tablet," { display: none; }"):void 0},function(e){var i=e.theme;return e.hiddenXS?"".concat(i.mediaQueries.mobile," { display: none; }"):void 0},function(e){var i=e.theme,h=e.hasRadius,A=e.borderRadius;return h?i.borderRadius:A},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var i=e.borderColor;return e.theme.colors[i]},function(e){var i=e.theme,h=e.borderColor,A=e.borderStyle,R=e.borderWidth;if(h&&!A&&!R)return"1px solid ".concat(i.colors[h])},function(e){var i=e.theme,h=e.shadow;return i.shadows[h]},function(e){return e.pointerEvents},function(e){var i=e._hover,h=e.theme;return i?i(h):void 0},function(e){return e.display},function(e){return e.position},function(e){var i=e.left;return e.theme.spaces[i]||i},function(e){var i=e.right;return e.theme.spaces[i]||i},function(e){var i=e.top;return e.theme.spaces[i]||i},function(e){var i=e.bottom;return e.theme.spaces[i]||i},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var i=e.width;return e.theme.spaces[i]||i},function(e){var i=e.maxWidth;return e.theme.spaces[i]||i},function(e){var i=e.minWidth;return e.theme.spaces[i]||i},function(e){var i=e.height;return e.theme.spaces[i]||i},function(e){var i=e.maxHeight;return e.theme.spaces[i]||i},function(e){var i=e.minHeight;return e.theme.spaces[i]||i},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});a.defaultProps=P,a.propTypes=S},7:function(o,r,t){"use strict";var n=t(10),l=t.n(n),s=t(13),c=t.n(s);r.a=function(p,g,y){var b=g;if(Array.isArray(g)||c()(g)!=="object"||(b=[g==null?void 0:g.desktop,g==null?void 0:g.tablet,g==null?void 0:g.mobile]),b!==void 0){if(Array.isArray(b)){var d=b,m=l()(d,3),O=m[0],P=m[1],S=m[2],M="".concat(p,": ").concat(y.spaces[O],";");return P!==void 0&&(M+="".concat(y.mediaQueries.tablet,`{
          `).concat(p,": ").concat(y.spaces[P],`;
        }`)),S!==void 0&&(M+="".concat(y.mediaQueries.mobile,`{
          `).concat(p,": ").concat(y.spaces[S],`;
        }`)),M}var a=y.spaces[b]||b;return"".concat(p,": ").concat(a,";")}}},8:function(o,r,t){"use strict";t.r(r),t.d(r,"Typography",function(){return a});var n,l=t(3),s=t.n(l),c=t(2),p=t.n(c),g=["alpha","beta","delta","epsilon","omega","pi","sigma"],y=t(1),b=t.n(y),d=t(0),m=t.n(d),O=function(e){return b.a.createElement("div",e)},P={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},S={ellipsis:m.a.bool,fontSize:m.a.oneOfType([m.a.number,m.a.string]),fontWeight:m.a.string,lineHeight:m.a.oneOfType([m.a.number,m.a.string]),textColor:m.a.string,textTransform:m.a.string,variant:m.a.oneOf(g)};O.defaultProps=P,O.propTypes=S;var M={fontSize:!0,fontWeight:!0},a=p.a.span.withConfig({shouldForwardProp:function(e,i){return!M[e]&&i(e)}})(n||(n=s()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(e){var i=e.theme,h=e.fontWeight;return i.fontWeights[h]},function(e){var i=e.theme,h=e.fontSize;return i.fontSizes[h]},function(e){var i=e.theme,h=e.lineHeight;return i.lineHeights[h]},function(e){var i=e.theme,h=e.textColor;return i.colors[h||"neutral800"]},function(e){return e.textTransform},function(e){return e.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(e){var i=e.variant,h=e.theme;switch(i){case"alpha":return`
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
      `)}});a.defaultProps=P,a.propTypes=S},9:function(o,r,t){"use strict";t.r(r),t.d(r,"Flex",function(){return e});var n,l=t(3),s=t.n(l),c=t(2),p=t.n(c),g=t(6),y=t(7),b=t(1),d=t.n(b),m=t(0),O=t.n(m),P=function(i){return d.a.createElement("div",i)},S={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},M={alignItems:O.a.string,basis:O.a.oneOfType([O.a.string,O.a.number]),direction:O.a.string,gap:O.a.oneOfType([O.a.shape({desktop:O.a.number,mobile:O.a.number,tablet:O.a.number}),O.a.number,O.a.arrayOf(O.a.number),O.a.string]),inline:O.a.bool,justifyContent:O.a.string,reverse:O.a.bool,shrink:O.a.number,wrap:O.a.string};P.defaultProps=S,P.propTypes=M;var a={direction:!0},e=p()(g.Box).withConfig({shouldForwardProp:function(i,h){return!a[i]&&h(i)}})(n||(n=s()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(i){return i.alignItems},function(i){return i.inline?"inline-flex":"flex"},function(i){return i.direction},function(i){return i.shrink},function(i){return i.wrap},function(i){var h=i.gap,A=i.theme;return Object(y.a)("gap",h,A)},function(i){return i.justifyContent});e.defaultProps=S,e.propTypes=M}})})},62031:(z,W,v)=>{"use strict";z.exports=v(59525)},59525:function(z,W,v){(function(f,w){z.exports=w(v(67294),v(78384))})(this,function(f,w){return function(u){var o={};function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return u[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=u,r.c=o,r.d=function(t,n,l){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:l})},r.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n||4&n&&typeof t=="object"&&t&&t.__esModule)return t;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&n&&typeof t!="string")for(var s in t)r.d(l,s,function(c){return t[c]}.bind(null,s));return l},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=109)}({0:function(u,o,r){u.exports=r(19)()},1:function(u,o){u.exports=f},10:function(u,o,r){var t=r(25),n=r(26),l=r(22),s=r(27);u.exports=function(c,p){return t(c)||n(c,p)||l(c,p)||s()},u.exports.default=u.exports,u.exports.__esModule=!0},109:function(u,o,r){"use strict";r.r(o),r.d(o,"Main",function(){return a}),r.d(o,"SkipToContent",function(){return A});var t,n=r(5),l=r.n(n),s=r(4),c=r.n(s),p=r(3),g=r.n(p),y=r(1),b=r.n(y),d=r(0),m=r.n(d),O=r(2),P=r.n(O),S=["labelledBy"],M=P.a.main(t||(t=g()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),a=function(R){var _=R.labelledBy,D=c()(R,S),I=_||"main-content-title";return b.a.createElement(M,l()({"aria-labelledby":I,id:"main-content",tabIndex:-1},D))};a.defaultProps={labelledBy:void 0},a.propTypes={labelledBy:m.a.string};var e,i=r(6),h=P()(i.Box)(e||(e=g()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(R){return R.theme.spaces[3]},function(R){return R.theme.spaces[3]}),A=function(R){var _=R.children;return b.a.createElement(h,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},_)};A.propTypes={children:m.a.node.isRequired}},13:function(u,o){function r(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(u.exports=r=function(n){return typeof n},u.exports.default=u.exports,u.exports.__esModule=!0):(u.exports=r=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},u.exports.default=u.exports,u.exports.__esModule=!0),r(t)}u.exports=r,u.exports.default=u.exports,u.exports.__esModule=!0},19:function(u,o,r){"use strict";var t=r(20);function n(){}function l(){}l.resetWarningCache=n,u.exports=function(){function s(g,y,b,d,m,O){if(O!==t){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}function c(){return s}s.isRequired=s;var p={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:l,resetWarningCache:n};return p.PropTypes=p,p}},2:function(u,o){u.exports=w},20:function(u,o,r){"use strict";u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(u,o){u.exports=function(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=r[n];return l},u.exports.default=u.exports,u.exports.__esModule=!0},22:function(u,o,r){var t=r(21);u.exports=function(n,l){if(n){if(typeof n=="string")return t(n,l);var s=Object.prototype.toString.call(n).slice(8,-1);return s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set"?Array.from(n):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?t(n,l):void 0}},u.exports.default=u.exports,u.exports.__esModule=!0},24:function(u,o){u.exports=function(r,t){if(r==null)return{};var n,l,s={},c=Object.keys(r);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(s[n]=r[n]);return s},u.exports.default=u.exports,u.exports.__esModule=!0},25:function(u,o){u.exports=function(r){if(Array.isArray(r))return r},u.exports.default=u.exports,u.exports.__esModule=!0},26:function(u,o){u.exports=function(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var l,s,c=[],p=!0,g=!1;try{for(n=n.call(r);!(p=(l=n.next()).done)&&(c.push(l.value),!t||c.length!==t);p=!0);}catch(y){g=!0,s=y}finally{try{p||n.return==null||n.return()}finally{if(g)throw s}}return c}},u.exports.default=u.exports,u.exports.__esModule=!0},27:function(u,o){u.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},u.exports.default=u.exports,u.exports.__esModule=!0},3:function(u,o){u.exports=function(r,t){return t||(t=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(t)}}))},u.exports.default=u.exports,u.exports.__esModule=!0},4:function(u,o,r){var t=r(24);u.exports=function(n,l){if(n==null)return{};var s,c,p=t(n,l);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(n);for(c=0;c<g.length;c++)s=g[c],l.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(n,s)&&(p[s]=n[s])}return p},u.exports.default=u.exports,u.exports.__esModule=!0},5:function(u,o){function r(){return u.exports=r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s])}return t},u.exports.default=u.exports,u.exports.__esModule=!0,r.apply(this,arguments)}u.exports=r,u.exports.default=u.exports,u.exports.__esModule=!0},6:function(u,o,r){"use strict";r.r(o),r.d(o,"Box",function(){return M});var t,n=r(3),l=r.n(n),s=r(2),c=r.n(s),p=r(7),g=r(1),y=r.n(g),b=r(0),d=r.n(b),m=function(a){return y.a.createElement("div",a)},O={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},P={_hover:d.a.func,background:d.a.string,basis:d.a.oneOfType([d.a.string,d.a.string]),borderColor:d.a.string,children:d.a.oneOfType([d.a.node,d.a.string]),color:d.a.string,flex:d.a.oneOfType([d.a.string,d.a.string]),grow:d.a.oneOfType([d.a.string,d.a.string]),hasRadius:d.a.bool,hiddenS:d.a.bool,hiddenXS:d.a.bool,padding:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingBottom:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingLeft:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingRight:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingTop:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),shadow:d.a.string,shrink:d.a.oneOfType([d.a.string,d.a.string])};m.defaultProps=O,m.propTypes=P;var S={color:!0},M=c.a.div.withConfig({shouldForwardProp:function(a,e){return!S[a]&&e(a)}})(t||(t=l()([`
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
`])),function(a){var e=a.fontSize;return a.theme.fontSizes[e]||e},function(a){var e=a.theme,i=a.background;return e.colors[i]},function(a){var e=a.theme,i=a.color;return e.colors[i]},function(a){var e=a.theme,i=a.padding;return Object(p.a)("padding",i,e)},function(a){var e=a.theme,i=a.paddingTop;return Object(p.a)("padding-top",i,e)},function(a){var e=a.theme,i=a.paddingRight;return Object(p.a)("padding-right",i,e)},function(a){var e=a.theme,i=a.paddingBottom;return Object(p.a)("padding-bottom",i,e)},function(a){var e=a.theme,i=a.paddingLeft;return Object(p.a)("padding-left",i,e)},function(a){var e=a.theme,i=a.marginLeft;return Object(p.a)("margin-left",i,e)},function(a){var e=a.theme,i=a.marginRight;return Object(p.a)("margin-right",i,e)},function(a){var e=a.theme,i=a.marginTop;return Object(p.a)("margin-top",i,e)},function(a){var e=a.theme,i=a.marginBottom;return Object(p.a)("margin-bottom",i,e)},function(a){var e=a.theme;return a.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(a){var e=a.theme;return a.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(a){var e=a.theme,i=a.hasRadius,h=a.borderRadius;return i?e.borderRadius:h},function(a){return a.borderStyle},function(a){return a.borderWidth},function(a){var e=a.borderColor;return a.theme.colors[e]},function(a){var e=a.theme,i=a.borderColor,h=a.borderStyle,A=a.borderWidth;if(i&&!h&&!A)return"1px solid ".concat(e.colors[i])},function(a){var e=a.theme,i=a.shadow;return e.shadows[i]},function(a){return a.pointerEvents},function(a){var e=a._hover,i=a.theme;return e?e(i):void 0},function(a){return a.display},function(a){return a.position},function(a){var e=a.left;return a.theme.spaces[e]||e},function(a){var e=a.right;return a.theme.spaces[e]||e},function(a){var e=a.top;return a.theme.spaces[e]||e},function(a){var e=a.bottom;return a.theme.spaces[e]||e},function(a){return a.zIndex},function(a){return a.overflow},function(a){return a.cursor},function(a){var e=a.width;return a.theme.spaces[e]||e},function(a){var e=a.maxWidth;return a.theme.spaces[e]||e},function(a){var e=a.minWidth;return a.theme.spaces[e]||e},function(a){var e=a.height;return a.theme.spaces[e]||e},function(a){var e=a.maxHeight;return a.theme.spaces[e]||e},function(a){var e=a.minHeight;return a.theme.spaces[e]||e},function(a){return a.transition},function(a){return a.transform},function(a){return a.animation},function(a){return a.shrink},function(a){return a.grow},function(a){return a.basis},function(a){return a.flex},function(a){return a.textAlign},function(a){return a.textTransform},function(a){return a.lineHeight},function(a){return a.cursor});M.defaultProps=O,M.propTypes=P},7:function(u,o,r){"use strict";var t=r(10),n=r.n(t),l=r(13),s=r.n(l);o.a=function(c,p,g){var y=p;if(Array.isArray(p)||s()(p)!=="object"||(y=[p==null?void 0:p.desktop,p==null?void 0:p.tablet,p==null?void 0:p.mobile]),y!==void 0){if(Array.isArray(y)){var b=y,d=n()(b,3),m=d[0],O=d[1],P=d[2],S="".concat(c,": ").concat(g.spaces[m],";");return O!==void 0&&(S+="".concat(g.mediaQueries.tablet,`{
          `).concat(c,": ").concat(g.spaces[O],`;
        }`)),P!==void 0&&(S+="".concat(g.mediaQueries.mobile,`{
          `).concat(c,": ").concat(g.spaces[P],`;
        }`)),S}var M=g.spaces[y]||y;return"".concat(c,": ").concat(M,";")}}}})})},27590:function(z,W,v){(function(f,w){z.exports=w(v(67294))})(this,function(f){return function(w){var u={};function o(r){if(u[r])return u[r].exports;var t=u[r]={i:r,l:!1,exports:{}};return w[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=w,o.c=u,o.d=function(r,t,n){o.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},o.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(r,t){if(1&t&&(r=o(r)),8&t||4&t&&typeof r=="object"&&r&&r.__esModule)return r;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&typeof r!="string")for(var l in r)o.d(n,l,function(s){return r[s]}.bind(null,l));return n},o.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(t,"a",t),t},o.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},o.p="",o(o.s=155)}({0:function(w,u){w.exports=f},155:function(w,u,o){"use strict";o.r(u);var r=o(0);function t(){return(t=Object.assign||function(n){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(n[c]=s[c])}return n}).apply(this,arguments)}u.default=function(n){return r.createElement("svg",t({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}})})},95972:(z,W,v)=>{"use strict";v.r(W),v.d(W,{default:()=>Te});var f=v(67294),w=v(23724),u=v(97132),o=v(68547),r=v(84686),t=v(62031),n=v(78862),l=v(81912),s=v(89031),c=(E,T,x)=>new Promise((C,j)=>{var L=B=>{try{U(x.next(B))}catch(F){j(F)}},H=B=>{try{U(x.throw(B))}catch(F){j(F)}},U=B=>B.done?C(B.value):Promise.resolve(B.value).then(L,H);U((x=x.apply(E,T)).next())});const p=()=>c(void 0,null,function*(){const{data:E}=yield s.be.get((0,s.Gc)("email-templates"));return E}),g=E=>s.be.put((0,s.Gc)("email-templates"),E);var y=v(45697),b=v.n(y),d=v(41798),m=v(26851),O=v(49425),P=v(30741),S=v(15804),M=v(19352),a=v.n(M),e=v(27590),i=v.n(e),h=v(84734),A=v.n(h),R=Object.defineProperty,_=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,N=(E,T,x)=>T in E?R(E,T,{enumerable:!0,configurable:!0,writable:!0,value:x}):E[T]=x,V=(E,T)=>{for(var x in T||(T={}))D.call(T,x)&&N(E,x,T[x]);if(_)for(var x of _(T))I.call(T,x)&&N(E,x,T[x]);return E};const $=({canUpdate:E,onEditClick:T})=>{const{formatMessage:x}=(0,u.useIntl)();return f.createElement(d.Table,{colCount:3,rowCount:3},f.createElement(d.Thead,null,f.createElement(d.Tr,null,f.createElement(d.Th,{width:"1%"},f.createElement(m.VisuallyHidden,null,x({id:(0,s.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),f.createElement(d.Th,null,f.createElement(O.Typography,{variant:"sigma",textColor:"neutral600"},x({id:(0,s.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),f.createElement(d.Th,{width:"1%"},f.createElement(m.VisuallyHidden,null,x({id:(0,s.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),f.createElement(d.Tbody,null,f.createElement(d.Tr,V({},(0,o.onRowClick)({fn:()=>T("reset_password")})),f.createElement(d.Td,null,f.createElement(S.Icon,null,f.createElement(i(),{"aria-label":x({id:"global.reset-password",defaultMessage:"Reset password"})}))),f.createElement(d.Td,null,f.createElement(O.Typography,null,x({id:"global.reset-password",defaultMessage:"Reset password"}))),f.createElement(d.Td,V({},o.stopPropagation),f.createElement(P.IconButton,{onClick:()=>T("reset_password"),label:x({id:(0,s.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:E&&f.createElement(a(),null)}))),f.createElement(d.Tr,V({},(0,o.onRowClick)({fn:()=>T("email_confirmation")})),f.createElement(d.Td,null,f.createElement(S.Icon,null,f.createElement(A(),{"aria-label":x({id:(0,s.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),f.createElement(d.Td,null,f.createElement(O.Typography,null,x({id:(0,s.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),f.createElement(d.Td,V({},o.stopPropagation),f.createElement(P.IconButton,{onClick:()=>T("email_confirmation"),label:x({id:(0,s.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:E&&f.createElement(a(),null)})))))};$.propTypes={canUpdate:b().bool.isRequired,onEditClick:b().func.isRequired};const le=$;var ue=v(80831),X=v(75146),Z=v(34626),ne=v(19408),ee=v(68115),ce=v(59626),k=v(53209);const de=k.Ry().shape({options:k.Ry().shape({from:k.Ry().shape({name:k.Z_().required(o.translatedErrors.required),email:k.Z_().email(o.translatedErrors.email).required(o.translatedErrors.required)}).required(),response_email:k.Z_().email(o.translatedErrors.email),object:k.Z_().required(o.translatedErrors.required),message:k.Z_().required(o.translatedErrors.required)}).required(o.translatedErrors.required)}),re=({template:E,onToggle:T,onSubmit:x})=>{const{formatMessage:C}=(0,u.useIntl)();return f.createElement(X.ModalLayout,{onClose:T,labelledBy:`${C({id:(0,s.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${C({id:(0,s.OB)(E.display),defaultMessage:E.display})}`},f.createElement(X.ModalHeader,null,f.createElement(ee.Breadcrumbs,{label:`${C({id:(0,s.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${C({id:(0,s.OB)(E.display),defaultMessage:E.display})}`},f.createElement(ee.Crumb,null,C({id:(0,s.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),f.createElement(ee.Crumb,null,C({id:(0,s.OB)(E.display),defaultMessage:E.display})))),f.createElement(ue.Formik,{onSubmit:x,initialValues:E,validateOnChange:!1,validationSchema:de,enableReinitialize:!0},({errors:j,values:L,handleChange:H,isSubmitting:U})=>{var B,F,Q,K,Y,J,q;return f.createElement(o.Form,null,f.createElement(X.ModalBody,null,f.createElement(Z.Grid,{gap:5},f.createElement(Z.GridItem,{col:6,s:12},f.createElement(o.GenericInput,{intlLabel:{id:(0,s.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:H,value:L.options.from.name,error:(F=(B=j==null?void 0:j.options)==null?void 0:B.from)==null?void 0:F.name,type:"text"})),f.createElement(Z.GridItem,{col:6,s:12},f.createElement(o.GenericInput,{intlLabel:{id:(0,s.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:H,value:L.options.from.email,error:(K=(Q=j==null?void 0:j.options)==null?void 0:Q.from)==null?void 0:K.email,type:"text"})),f.createElement(Z.GridItem,{col:6,s:12},f.createElement(o.GenericInput,{intlLabel:{id:(0,s.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:H,value:L.options.response_email,error:(Y=j==null?void 0:j.options)==null?void 0:Y.response_email,type:"text"})),f.createElement(Z.GridItem,{col:6,s:12},f.createElement(o.GenericInput,{intlLabel:{id:(0,s.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:H,value:L.options.object,error:(J=j==null?void 0:j.options)==null?void 0:J.object,type:"text"})),f.createElement(Z.GridItem,{col:12,s:12},f.createElement(ce.Textarea,{label:C({id:(0,s.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:H,value:L.options.message,error:((q=j==null?void 0:j.options)==null?void 0:q.message)&&C({id:j.options.message,defaultMessage:j.options.message})})))),f.createElement(X.ModalFooter,{startActions:f.createElement(ne.Button,{onClick:T,variant:"tertiary"},"Cancel"),endActions:f.createElement(ne.Button,{loading:U,type:"submit"},"Finish")}))}))};re.propTypes={template:b().shape({display:b().string,icon:b().string,options:b().shape({from:b().shape({name:b().string,email:b().string}),message:b().string,object:b().string,response_email:b().string})}).isRequired,onSubmit:b().func.isRequired,onToggle:b().func.isRequired};const pe=re;var fe=Object.defineProperty,me=Object.defineProperties,he=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ae=(E,T,x)=>T in E?fe(E,T,{enumerable:!0,configurable:!0,writable:!0,value:x}):E[T]=x,ye=(E,T)=>{for(var x in T||(T={}))ge.call(T,x)&&ae(E,x,T[x]);if(oe)for(var x of oe(T))ve.call(T,x)&&ae(E,x,T[x]);return E},be=(E,T)=>me(E,he(T)),xe=(E,T,x)=>new Promise((C,j)=>{var L=B=>{try{U(x.next(B))}catch(F){j(F)}},H=B=>{try{U(x.throw(B))}catch(F){j(F)}},U=B=>B.done?C(B.value):Promise.resolve(B.value).then(L,H);U((x=x.apply(E,T)).next())});const Oe=()=>f.createElement(o.CheckPagePermissions,{permissions:l.Z.readEmailTemplates},f.createElement(Ee,null)),Ee=()=>{const{formatMessage:E}=(0,u.useIntl)(),{trackUsage:T}=(0,o.useTracking)(),{notifyStatus:x}=(0,r.useNotifyAT)(),C=(0,o.useNotification)(),{lockApp:j,unlockApp:L}=(0,o.useOverlayBlocker)(),H=(0,f.useRef)(T),U=(0,w.useQueryClient)();(0,o.useFocusWhenNavigate)();const[B,F]=(0,f.useState)(!1),[Q,K]=(0,f.useState)(null),Y=(0,f.useMemo)(()=>({update:l.Z.updateEmailTemplates}),[]),{isLoading:J,allowedActions:{canUpdate:q}}=(0,o.useRBAC)(Y),{status:Pe,data:ie}=(0,w.useQuery)("email-templates",()=>p(),{onSuccess(){x(E({id:(0,s.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){C({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Se=J||Pe!=="success",te=()=>{F(G=>!G)},we=G=>{K(G),te()},se=(0,w.useMutation)(G=>g({"email-templates":G}),{onSuccess(){return xe(this,null,function*(){yield U.invalidateQueries("email-templates"),C({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),H.current("didEditEmailTemplates"),L(),te()})},onError(){C({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),L()},refetchActive:!0}),{isLoading:Me}=se,je=G=>{j(),H.current("willEditEmailTemplates");const Be=be(ye({},ie),{[Q]:G});se.mutate(Be)};return Se?f.createElement(t.Main,{"aria-busy":"true"},f.createElement(o.SettingsPageTitle,{name:E({id:(0,s.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),f.createElement(n.HeaderLayout,{title:E({id:(0,s.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),f.createElement(n.ContentLayout,null,f.createElement(o.LoadingIndicatorPage,null))):f.createElement(t.Main,{"aria-busy":Me},f.createElement(o.SettingsPageTitle,{name:E({id:(0,s.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),f.createElement(n.HeaderLayout,{title:E({id:(0,s.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),f.createElement(n.ContentLayout,null,f.createElement(le,{onEditClick:we,canUpdate:q}),B&&f.createElement(pe,{template:ie[Q],onToggle:te,onSubmit:je})))},Te=Oe},46979:(z,W,v)=>{"use strict";v.d(W,{Z:()=>t});var f=v(51721),w=v(68547),u=v.n(w),o=(n,l,s)=>new Promise((c,p)=>{var g=d=>{try{b(s.next(d))}catch(m){p(m)}},y=d=>{try{b(s.throw(d))}catch(m){p(m)}},b=d=>d.done?c(d.value):Promise.resolve(d.value).then(g,y);b((s=s.apply(n,l)).next())});const r=f.ZP.create({baseURL:""});r.interceptors.request.use(n=>o(void 0,null,function*(){return n.headers={Authorization:`Bearer ${w.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},n}),n=>{Promise.reject(n)}),r.interceptors.response.use(n=>n,n=>{var l;throw((l=n.response)==null?void 0:l.status)===401&&(w.auth.clearAppStorage(),window.location.reload()),n});const t=r},89031:(z,W,v)=>{"use strict";v.d(W,{be:()=>f.Z,YX:()=>o,Gc:()=>n,OB:()=>l.Z});var f=v(46979),w=v(96486);const o=s=>Object.keys(s).reduce((c,p)=>{const g=s[p].controllers,y=Object.keys(g).reduce((b,d)=>((0,w.isEmpty)(g[d])||(b[d]=g[d]),b),{});return(0,w.isEmpty)(y)||(c[p]={controllers:y}),c},{});var r=v(31498);const n=s=>`/${r.Z}/${s}`;var l=v(84757)}}]);
