"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3082],{"./public/app/features/api-keys/ApiKeysPage.tsx":(e,n,s)=>{s.r(n),s.d(n,{ApiKeysPageUnconnected:()=>X,default:()=>ee});var t=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),i=s("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),a=s("./packages/grafana-data/src/index.ts"),o=s("./packages/grafana-ui/src/index.ts"),r=s("./public/app/core/app_events.ts"),l=s("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx"),c=s("./public/app/core/components/Page/Page.tsx"),d=s("./public/app/core/config.ts"),p=s("./public/app/core/core.ts"),u=s("./public/app/core/selectors/navModel.ts"),h=s("./public/app/features/profile/state/selectors.ts"),y=s("./public/app/types/index.ts"),x=s("./public/app/types/events.ts"),m=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const g=e=>{let{searchQuery:n,disabled:s,onAddClick:t,onSearchChange:i}=e;return(0,m.jsxs)("div",{className:"page-action-bar",children:[(0,m.jsx)("div",{className:"gf-form gf-form--grow",children:(0,m.jsx)(o.FilterInput,{placeholder:"Search keys",value:n,onChange:i})}),(0,m.jsx)(o.Button,{className:"pull-right",onClick:t,disabled:s,children:"Add API key"})]})};var b,f,j,v=s("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),A=s("./public/app/core/actions/index.ts"),k=s("./public/app/core/copy/appNotification.ts"),C=s("./public/app/store/store.ts");function K(e){let{onDismiss:n,apiKey:s,rootPath:i}=e;const a=(0,o.useStyles2)(I),r=(0,t.useCallback)((()=>s),[s]);return(0,m.jsxs)(o.Modal,{title:"API Key Created",onDismiss:n,onClickBackdrop:n,isOpen:!0,children:[(0,m.jsx)(o.Field,{label:"Key",children:(0,m.jsx)(o.Input,{id:"Key",value:s,readOnly:!0,addonAfter:(0,m.jsxs)(o.ClipboardButton,{variant:"primary",getText:r,onClipboardCopy:()=>{(0,C.WI)((0,A.$l)((0,k.AT)("Content copied to clipboard")))},children:[b||(b=(0,m.jsx)(o.Icon,{name:"copy"}))," Copy"]})})}),f||(f=(0,m.jsx)(o.Alert,{severity:"info",title:"You will only be able to view this key here once!",children:"It is not stored in this form, so be sure to copy it now."})),j||(j=(0,m.jsx)("p",{className:"text-muted",children:"You can authenticate a request using the Authorization HTTP header, example:"})),(0,m.jsxs)("pre",{className:a.small,children:['curl -H "Authorization: Bearer ',s,'" ',i,"/api/dashboards/home"]})]})}function I(e){return{label:v.css`
      padding: ${e.spacing(1)};
      background-color: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
    `,small:v.css`
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.bodySmall.fontWeight};
    `}}const w=e=>{let{children:n}=e;const[s,i]=(0,t.useState)(!1),a=(0,t.useCallback)((()=>{i(!s)}),[s]);return n({isAdding:s,toggleIsAdding:a})};var E,P,S=s("./public/app/core/components/CloseButton/CloseButton.tsx"),N=s("./public/app/core/components/Animations/SlideDown.tsx");const{Input:D}=o.LegacyForms,T=Object.keys(y.B5).map((e=>({label:e,value:e})));function _(e){if(!e)return!0;try{return a.rangeUtil.intervalToSeconds(e),!0}catch{}return!1}const B={[o.EventsWithValidation.onBlur]:[{rule:_,errorMessage:"Not a valid duration"}]},F=e=>{let{show:n,onClose:s,onKeyAdded:i,disabled:a}=e;const[r,l]=(0,t.useState)(""),[c,d]=(0,t.useState)(y.B5.Viewer),[p,u]=(0,t.useState)("");(0,t.useEffect)((()=>{l(""),d(y.B5.Viewer),u("")}),[n]);return(0,m.jsx)(N.s,{in:n,children:(0,m.jsxs)("div",{className:"gf-form-inline cta-form",children:[(0,m.jsx)(S.P,{onClick:s}),(0,m.jsxs)("form",{className:"gf-form-group",onSubmit:e=>{e.preventDefault(),_(p)&&(i({name:r,role:c,secondsToLive:p}),s())},children:[E||(E=(0,m.jsx)("h5",{children:"Add API Key"})),(0,m.jsxs)("div",{className:"gf-form-inline",children:[(0,m.jsxs)("div",{className:"gf-form max-width-21",children:[P||(P=(0,m.jsx)("span",{className:"gf-form-label",children:"Key name"})),(0,m.jsx)(D,{type:"text",className:"gf-form-input",value:r,placeholder:"Name",onChange:e=>{l(e.currentTarget.value)}})]}),(0,m.jsx)("div",{className:"gf-form",children:(0,m.jsx)(o.InlineField,{label:"Role",children:(0,m.jsx)(o.Select,{inputId:"role-select",value:c,onChange:e=>{d(e.value)},options:T,menuShouldPortal:!0})})}),(0,m.jsx)("div",{className:"gf-form max-width-21",children:(0,m.jsx)(o.InlineField,{tooltip:"The API key life duration. For example, 1d if your key is going to last for one day. Supported units are: s,m,h,d,w,M,y",label:"Time to live",children:(0,m.jsx)(D,{id:"time-to-live-input",type:"text",placeholder:"1d",validationEvents:B,value:p,onChange:e=>{u(e.currentTarget.value)}})})}),(0,m.jsx)("div",{className:"gf-form",children:(0,m.jsx)(o.Button,{disabled:a,children:"Add"})})]})]})]})})};var Z,R,Q;const z=e=>{let{apiKeys:n,timeZone:s,onDelete:t,canRead:i,canDelete:a}=e;const r=(0,o.useTheme2)(),l=$(r);return(0,m.jsxs)("table",{className:"filter-table",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[Z||(Z=(0,m.jsx)("th",{children:"Name"})),R||(R=(0,m.jsx)("th",{children:"Role"})),Q||(Q=(0,m.jsx)("th",{children:"Expires"})),(0,m.jsx)("th",{style:{width:"34px"}})]})}),i&&n.length>0?(0,m.jsx)("tbody",{children:n.map((e=>{const n=Boolean(e.expiration&&Date.now()>new Date(e.expiration).getTime());return(0,m.jsxs)("tr",{className:l.tableRow(n),children:[(0,m.jsx)("td",{children:e.name}),(0,m.jsx)("td",{children:e.role}),(0,m.jsxs)("td",{children:[M(e.expiration,s),n&&(0,m.jsx)("span",{className:l.tooltipContainer,children:(0,m.jsx)(o.Tooltip,{content:"This API key has expired.",children:(0,m.jsx)(o.Icon,{name:"exclamation-triangle"})})})]}),(0,m.jsx)("td",{children:(0,m.jsx)(o.DeleteButton,{"aria-label":"Delete API key",size:"sm",onConfirm:()=>t(e),disabled:!a})})]},e.id)}))}):null]})};function M(e,n){return e?(0,a.dateTimeFormat)(e,{timeZone:n}):"No expiration date"}const $=e=>({tableRow:n=>v.css`
    color: ${n?e.colors.text.secondary:e.colors.text.primary};
  `,tooltipContainer:v.css`
    margin-left: ${e.spacing(1)};
  `});var L=s("./public/app/core/services/backend_srv.ts"),V=s("./public/app/features/api-keys/state/reducers.ts");function O(){return async e=>{e((0,V.dF)());const[n,s]=await Promise.all([(0,L.i)().get("/api/auth/keys?includeExpired=false"),(0,L.i)().get("/api/auth/keys?includeExpired=true")]);e((0,V.iK)({keys:n,keysIncludingExpired:s}))}}const W=e=>e.includeExpired?e.keysIncludingExpired.length:e.keys.length,U=e=>{const n=RegExp(e.searchQuery,"i");return(e.includeExpired?e.keysIncludingExpired:e.keys).filter((e=>n.test(e.name)||n.test(e.role)))},q=e=>e.includeExpired,Y=e=>0===e.keys.length&&e.keysIncludingExpired.length>0;function H(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}const G={loadApiKeys:O,deleteApiKey:function(e){return async n=>{(0,L.i)().delete(`/api/auth/keys/${e}`).then((()=>n(O())))}},setSearchQuery:V.ql,toggleIncludeExpired:function(){return e=>{e((0,V.j4)())}},addApiKey:function(e,n){return async s=>{const t=await(0,L.i)().post("/api/auth/keys",e);s((0,V.ql)("")),s(O()),n(t.key)}}},J=(0,i.connect)((function(e){const n=p.Vt.hasAccess(y.bW.ActionAPIKeysRead,!0),s=p.Vt.hasAccess(y.bW.ActionAPIKeysCreate,!0),t=p.Vt.hasAccess(y.bW.ActionAPIKeysDelete,!0);return{navModel:(0,u.h)(e.navIndex,"apikeys"),apiKeys:U(e.apiKeys),searchQuery:e.apiKeys.searchQuery,apiKeysCount:W(e.apiKeys),hasFetched:e.apiKeys.hasFetched,timeZone:(0,h.Z)(e.user),includeExpired:q(e.apiKeys),includeExpiredDisabled:Y(e.apiKeys),canRead:n,canCreate:s,canDelete:t}}),G);class X extends t.PureComponent{constructor(e){super(e),H(this,"onDeleteApiKey",(e=>{this.props.deleteApiKey(e.id)})),H(this,"onSearchQueryChange",(e=>{this.props.setSearchQuery(e)})),H(this,"onIncludeExpiredChange",(e=>{this.props.toggleIncludeExpired()})),H(this,"onAddApiKey",(e=>{const n=e=>{const n=window.location.origin+d.ZP.appSubUrl;r.Z.publish(new x.Dn({props:{apiKey:e,rootPath:n},component:K}))},s=e.secondsToLive;try{const t=s?a.rangeUtil.intervalToSeconds(s):null,i=Object.assign({},e,{secondsToLive:t});this.props.addApiKey(i,n),this.setState((e=>Object.assign({},e,{isAdding:!1})))}catch(e){console.error(e)}}))}componentDidMount(){this.fetchApiKeys()}async fetchApiKeys(){await this.props.loadApiKeys()}render(){const{hasFetched:e,navModel:n,apiKeysCount:s,apiKeys:t,searchQuery:i,timeZone:a,includeExpired:r,includeExpiredDisabled:d,canRead:p,canCreate:u,canDelete:h}=this.props;return e?(0,m.jsx)(c.Z,{navModel:n,children:(0,m.jsx)(c.Z.Contents,{isLoading:!1,children:(0,m.jsx)(w,{children:e=>{let{isAdding:n,toggleIsAdding:c}=e;const y=!n&&0===s,x=s>0;return(0,m.jsxs)(m.Fragment,{children:[y?(0,m.jsx)(l.Z,{title:"You haven't added any API keys yet.",buttonIcon:"key-skeleton-alt",onClick:c,buttonTitle:"New API key",proTip:"Remember, you can provide view-only API access to other applications.",buttonDisabled:!u}):null,x?(0,m.jsx)(g,{searchQuery:i,disabled:n||!u,onAddClick:c,onSearchChange:this.onSearchQueryChange}):null,(0,m.jsx)(F,{show:n,onClose:c,onKeyAdded:this.onAddApiKey,disabled:!u}),x?(0,m.jsxs)(o.VerticalGroup,{children:[(0,m.jsx)(o.InlineField,{disabled:d,label:"Include expired keys",children:(0,m.jsx)(o.InlineSwitch,{id:"showExpired",value:r,onChange:this.onIncludeExpiredChange})}),(0,m.jsx)(z,{apiKeys:t,timeZone:a,onDelete:this.onDeleteApiKey,canRead:p,canDelete:h})]}):null]})}})})}):(0,m.jsx)(c.Z,{navModel:n,children:(0,m.jsx)(c.Z.Contents,{isLoading:!0})})}}const ee=J(X)}}]);
//# sourceMappingURL=ApiKeysPage.326a5ae471165dde1160.js.map