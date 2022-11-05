(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[9460],{62031:(z,R,p)=>{"use strict";z.exports=p(59525)},59525:function(z,R,p){(function(g,S){z.exports=S(p(67294),p(78384))})(this,function(g,S){return function(r){var f={};function t(a){if(f[a])return f[a].exports;var n=f[a]={i:a,l:!1,exports:{}};return r[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=r,t.c=f,t.d=function(a,n,l){t.o(a,n)||Object.defineProperty(a,n,{enumerable:!0,get:l})},t.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,n){if(1&n&&(a=t(a)),8&n||4&n&&typeof a=="object"&&a&&a.__esModule)return a;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:a}),2&n&&typeof a!="string")for(var s in a)t.d(l,s,function(d){return a[d]}.bind(null,s));return l},t.n=function(a){var n=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(n,"a",n),n},t.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)},t.p="",t(t.s=109)}({0:function(r,f,t){r.exports=t(19)()},1:function(r,f){r.exports=g},10:function(r,f,t){var a=t(25),n=t(26),l=t(22),s=t(27);r.exports=function(d,u){return a(d)||n(d,u)||l(d,u)||s()},r.exports.default=r.exports,r.exports.__esModule=!0},109:function(r,f,t){"use strict";t.r(f),t.d(f,"Main",function(){return e}),t.d(f,"SkipToContent",function(){return D});var a,n=t(5),l=t.n(n),s=t(4),d=t.n(s),u=t(3),v=t.n(u),x=t(1),O=t.n(x),i=t(0),P=t.n(i),M=t(2),c=t.n(M),L=["labelledBy"],B=c.a.main(a||(a=v()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),e=function(w){var U=w.labelledBy,H=d()(w,L),Z=U||"main-content-title";return O.a.createElement(B,l()({"aria-labelledby":Z,id:"main-content",tabIndex:-1},H))};e.defaultProps={labelledBy:void 0},e.propTypes={labelledBy:P.a.string};var o,m=t(6),C=c()(m.Box)(o||(o=v()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(w){return w.theme.spaces[3]},function(w){return w.theme.spaces[3]}),D=function(w){var U=w.children;return O.a.createElement(C,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},U)};D.propTypes={children:P.a.node.isRequired}},13:function(r,f){function t(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(r.exports=t=function(n){return typeof n},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=t=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r.exports.default=r.exports,r.exports.__esModule=!0),t(a)}r.exports=t,r.exports.default=r.exports,r.exports.__esModule=!0},19:function(r,f,t){"use strict";var a=t(20);function n(){}function l(){}l.resetWarningCache=n,r.exports=function(){function s(v,x,O,i,P,M){if(M!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function d(){return s}s.isRequired=s;var u={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:d,element:s,elementType:s,instanceOf:d,node:s,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:l,resetWarningCache:n};return u.PropTypes=u,u}},2:function(r,f){r.exports=S},20:function(r,f,t){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(r,f){r.exports=function(t,a){(a==null||a>t.length)&&(a=t.length);for(var n=0,l=new Array(a);n<a;n++)l[n]=t[n];return l},r.exports.default=r.exports,r.exports.__esModule=!0},22:function(r,f,t){var a=t(21);r.exports=function(n,l){if(n){if(typeof n=="string")return a(n,l);var s=Object.prototype.toString.call(n).slice(8,-1);return s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set"?Array.from(n):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?a(n,l):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},24:function(r,f){r.exports=function(t,a){if(t==null)return{};var n,l,s={},d=Object.keys(t);for(l=0;l<d.length;l++)n=d[l],a.indexOf(n)>=0||(s[n]=t[n]);return s},r.exports.default=r.exports,r.exports.__esModule=!0},25:function(r,f){r.exports=function(t){if(Array.isArray(t))return t},r.exports.default=r.exports,r.exports.__esModule=!0},26:function(r,f){r.exports=function(t,a){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var l,s,d=[],u=!0,v=!1;try{for(n=n.call(t);!(u=(l=n.next()).done)&&(d.push(l.value),!a||d.length!==a);u=!0);}catch(x){v=!0,s=x}finally{try{u||n.return==null||n.return()}finally{if(v)throw s}}return d}},r.exports.default=r.exports,r.exports.__esModule=!0},27:function(r,f){r.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},3:function(r,f){r.exports=function(t,a){return a||(a=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))},r.exports.default=r.exports,r.exports.__esModule=!0},4:function(r,f,t){var a=t(24);r.exports=function(n,l){if(n==null)return{};var s,d,u=a(n,l);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(n);for(d=0;d<v.length;d++)s=v[d],l.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(n,s)&&(u[s]=n[s])}return u},r.exports.default=r.exports,r.exports.__esModule=!0},5:function(r,f){function t(){return r.exports=t=Object.assign||function(a){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(a[s]=l[s])}return a},r.exports.default=r.exports,r.exports.__esModule=!0,t.apply(this,arguments)}r.exports=t,r.exports.default=r.exports,r.exports.__esModule=!0},6:function(r,f,t){"use strict";t.r(f),t.d(f,"Box",function(){return B});var a,n=t(3),l=t.n(n),s=t(2),d=t.n(s),u=t(7),v=t(1),x=t.n(v),O=t(0),i=t.n(O),P=function(e){return x.a.createElement("div",e)},M={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},c={_hover:i.a.func,background:i.a.string,basis:i.a.oneOfType([i.a.string,i.a.string]),borderColor:i.a.string,children:i.a.oneOfType([i.a.node,i.a.string]),color:i.a.string,flex:i.a.oneOfType([i.a.string,i.a.string]),grow:i.a.oneOfType([i.a.string,i.a.string]),hasRadius:i.a.bool,hiddenS:i.a.bool,hiddenXS:i.a.bool,padding:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingBottom:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingLeft:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingRight:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingTop:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),shadow:i.a.string,shrink:i.a.oneOfType([i.a.string,i.a.string])};P.defaultProps=M,P.propTypes=c;var L={color:!0},B=d.a.div.withConfig({shouldForwardProp:function(e,o){return!L[e]&&o(e)}})(a||(a=l()([`
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
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,m=e.background;return o.colors[m]},function(e){var o=e.theme,m=e.color;return o.colors[m]},function(e){var o=e.theme,m=e.padding;return Object(u.a)("padding",m,o)},function(e){var o=e.theme,m=e.paddingTop;return Object(u.a)("padding-top",m,o)},function(e){var o=e.theme,m=e.paddingRight;return Object(u.a)("padding-right",m,o)},function(e){var o=e.theme,m=e.paddingBottom;return Object(u.a)("padding-bottom",m,o)},function(e){var o=e.theme,m=e.paddingLeft;return Object(u.a)("padding-left",m,o)},function(e){var o=e.theme,m=e.marginLeft;return Object(u.a)("margin-left",m,o)},function(e){var o=e.theme,m=e.marginRight;return Object(u.a)("margin-right",m,o)},function(e){var o=e.theme,m=e.marginTop;return Object(u.a)("margin-top",m,o)},function(e){var o=e.theme,m=e.marginBottom;return Object(u.a)("margin-bottom",m,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,m=e.hasRadius,C=e.borderRadius;return m?o.borderRadius:C},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,m=e.borderColor,C=e.borderStyle,D=e.borderWidth;if(m&&!C&&!D)return"1px solid ".concat(o.colors[m])},function(e){var o=e.theme,m=e.shadow;return o.shadows[m]},function(e){return e.pointerEvents},function(e){var o=e._hover,m=e.theme;return o?o(m):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});B.defaultProps=M,B.propTypes=c},7:function(r,f,t){"use strict";var a=t(10),n=t.n(a),l=t(13),s=t.n(l);f.a=function(d,u,v){var x=u;if(Array.isArray(u)||s()(u)!=="object"||(x=[u==null?void 0:u.desktop,u==null?void 0:u.tablet,u==null?void 0:u.mobile]),x!==void 0){if(Array.isArray(x)){var O=x,i=n()(O,3),P=i[0],M=i[1],c=i[2],L="".concat(d,": ").concat(v.spaces[P],";");return M!==void 0&&(L+="".concat(v.mediaQueries.tablet,`{
          `).concat(d,": ").concat(v.spaces[M],`;
        }`)),c!==void 0&&(L+="".concat(v.mediaQueries.mobile,`{
          `).concat(d,": ").concat(v.spaces[c],`;
        }`)),L}var B=v.spaces[x]||x;return"".concat(d,": ").concat(B,";")}}}})})},98352:(z,R,p)=>{"use strict";p.r(R),p.d(R,{default:()=>ae});var g=p(67294),S=p(23724),r=p(97132),f=p(80831),t=p(68547),a=p(84686),n=p(62031),l=p(78862),s=p(19408),d=p(5493),u=p(9008),v=p(43808),x=p(49425),O=p(34626),i=p(84734),P=p.n(i),M=p(81912),c=p(89031);const B=[{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,c.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,c.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,c.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,c.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,c.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,c.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,c.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var e=p(53209);const o=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),C=e.Ry().shape({email_confirmation_redirection:e.nK().when("email_confirmation",{is:!0,then:e.Z_().matches(o).required(),otherwise:e.Z_().nullable()}),email_reset_password:e.Z_(t.translatedErrors.string).matches(o,t.translatedErrors.regex).nullable()});var D=(h,b,y)=>new Promise((_,F)=>{var W=E=>{try{A(y.next(E))}catch(j){F(j)}},k=E=>{try{A(y.throw(E))}catch(j){F(j)}},A=E=>E.done?_(E.value):Promise.resolve(E.value).then(W,k);A((y=y.apply(h,b)).next())});const w=()=>D(void 0,null,function*(){const{data:h}=yield c.be.get((0,c.Gc)("advanced"));return h}),U=h=>c.be.put((0,c.Gc)("advanced"),h);var H=Object.defineProperty,Z=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,K=(h,b,y)=>b in h?H(h,b,{enumerable:!0,configurable:!0,writable:!0,value:y}):h[b]=y,G=(h,b)=>{for(var y in b||(b={}))te.call(b,y)&&K(h,y,b[y]);if(X)for(var y of X(b))ne.call(b,y)&&K(h,y,b[y]);return h},$=(h,b)=>Z(h,ee(b)),V=(h,b,y)=>new Promise((_,F)=>{var W=E=>{try{A(y.next(E))}catch(j){F(j)}},k=E=>{try{A(y.throw(E))}catch(j){F(j)}},A=E=>E.done?_(E.value):Promise.resolve(E.value).then(W,k);A((y=y.apply(h,b)).next())});const re=()=>g.createElement(t.CheckPagePermissions,{permissions:M.Z.readAdvancedSettings},g.createElement(oe,null)),oe=()=>{const{formatMessage:h}=(0,r.useIntl)(),b=(0,t.useNotification)(),{lockApp:y,unlockApp:_}=(0,t.useOverlayBlocker)(),{notifyStatus:F}=(0,a.useNotifyAT)(),W=(0,S.useQueryClient)();(0,t.useFocusWhenNavigate)();const k=(0,g.useMemo)(()=>({update:M.Z.updateAdvancedSettings}),[]),{isLoading:A,allowedActions:{canUpdate:E}}=(0,t.useRBAC)(k),{status:j,data:Y}=(0,S.useQuery)("advanced",()=>w(),{onSuccess(){F(h({id:(0,c.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){b({type:"warning",message:{id:(0,c.OB)("notification.error"),defaultMessage:"An error occured"}})}}),ie=A||j!=="success",J=(0,S.useMutation)(I=>U(I),{onSuccess(){return V(this,null,function*(){yield W.invalidateQueries("advanced"),b({type:"success",message:{id:(0,c.OB)("notification.success.saved"),defaultMessage:"Saved"}}),_()})},onError(){b({type:"warning",message:{id:(0,c.OB)("notification.error"),defaultMessage:"An error occured"}}),_()},refetchActive:!0}),{isLoading:se}=J,le=I=>V(void 0,null,function*(){y();const N=I.email_confirmation?I.email_confirmation_redirection:"";yield J.mutateAsync($(G({},I),{email_confirmation_redirection:N}))});return ie?g.createElement(n.Main,{"aria-busy":"true"},g.createElement(t.SettingsPageTitle,{name:h({id:(0,c.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),g.createElement(l.HeaderLayout,{title:h({id:(0,c.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),g.createElement(l.ContentLayout,null,g.createElement(t.LoadingIndicatorPage,null))):g.createElement(n.Main,{"aria-busy":se},g.createElement(t.SettingsPageTitle,{name:h({id:(0,c.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),g.createElement(f.Formik,{onSubmit:le,initialValues:Y.settings,validateOnChange:!1,validationSchema:C,enableReinitialize:!0},({errors:I,values:N,handleChange:q,isSubmitting:ue})=>g.createElement(t.Form,null,g.createElement(l.HeaderLayout,{title:h({id:(0,c.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:g.createElement(s.Button,{loading:ue,type:"submit",disabled:!E,startIcon:g.createElement(P(),null),size:"S"},h({id:"global.save",defaultMessage:"Save"}))}),g.createElement(l.ContentLayout,null,g.createElement(d.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},g.createElement(u.Stack,{spacing:4},g.createElement(x.Typography,{variant:"delta",as:"h2"},h({id:"global.settings",defaultMessage:"Settings"})),g.createElement(O.Grid,{gap:6},g.createElement(O.GridItem,{col:6,s:12},g.createElement(v.Select,{label:h({id:(0,c.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:N.default_role,hint:h({id:(0,c.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:T=>q({target:{name:"default_role",value:T}})},Y.roles.map(T=>g.createElement(v.Option,{key:T.type,value:T.type},T.name)))),B.map(T=>{let Q=N[T.name];return Q||(Q=T.type==="bool"?!1:""),g.createElement(O.GridItem,G({key:T.name},T.size),g.createElement(t.GenericInput,$(G({},T),{value:Q,error:I[T.name],disabled:T.name==="email_confirmation_redirection"&&N.email_confirmation===!1,onChange:q})))}))))))))},ae=re},46979:(z,R,p)=>{"use strict";p.d(R,{Z:()=>a});var g=p(51721),S=p(68547),r=p.n(S),f=(n,l,s)=>new Promise((d,u)=>{var v=i=>{try{O(s.next(i))}catch(P){u(P)}},x=i=>{try{O(s.throw(i))}catch(P){u(P)}},O=i=>i.done?d(i.value):Promise.resolve(i.value).then(v,x);O((s=s.apply(n,l)).next())});const t=g.ZP.create({baseURL:""});t.interceptors.request.use(n=>f(void 0,null,function*(){return n.headers={Authorization:`Bearer ${S.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},n}),n=>{Promise.reject(n)}),t.interceptors.response.use(n=>n,n=>{var l;throw((l=n.response)==null?void 0:l.status)===401&&(S.auth.clearAppStorage(),window.location.reload()),n});const a=t},89031:(z,R,p)=>{"use strict";p.d(R,{be:()=>g.Z,YX:()=>f,Gc:()=>n,OB:()=>l.Z});var g=p(46979),S=p(96486);const f=s=>Object.keys(s).reduce((d,u)=>{const v=s[u].controllers,x=Object.keys(v).reduce((O,i)=>((0,S.isEmpty)(v[i])||(O[i]=v[i]),O),{});return(0,S.isEmpty)(x)||(d[u]={controllers:x}),d},{});var t=p(31498);const n=s=>`/${t.Z}/${s}`;var l=p(84757)}}]);
