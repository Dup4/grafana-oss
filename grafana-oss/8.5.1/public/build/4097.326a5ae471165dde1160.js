"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4097],{"./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx":(e,t,a)=>{a.d(t,{F:()=>u});var n,s,r,i=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=(a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),a("./.yarn/__virtual__/@grafana-experimental-virtual-920bad95a1/3/opt/drone/yarncache/@grafana-experimental-npm-0.0.2-canary.22-45d2c4f135-b9a64c0abc.zip/node_modules/@grafana/experimental/index.js")),l=a("./packages/grafana-ui/src/index.ts"),c=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const u=e=>{let{className:t,onFilterChange:a,defaultQueryString:i,queryString:u}=e;const d=(0,l.useStyles2)(p),m=n||(n=(0,c.jsx)(l.Icon,{name:"search"}));return(0,c.jsxs)("div",{className:t,children:[(0,c.jsx)(l.Label,{children:(0,c.jsxs)(o.Stack,{gap:.5,children:[s||(s=(0,c.jsx)("span",{children:"Search by label"})),(0,c.jsx)(l.Tooltip,{content:r||(r=(0,c.jsxs)("div",{children:["Filter alerts using label querying, ex:",(0,c.jsx)("pre",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]})),children:(0,c.jsx)(l.Icon,{className:d.icon,name:"info-circle",size:"sm"})})]})}),(0,c.jsx)(l.Input,{placeholder:"Search",defaultValue:i,value:u,onChange:e=>{const t=e.target;a(t.value)},"data-testid":"search-query-input",prefix:m,className:d.inputWidth})]})},p=e=>({icon:i.css`
    margin-right: ${e.spacing(.5)};
  `,inputWidth:i.css`
    width: 340px;
    flex-grow: 0;
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx":(e,t,a)=>{a.d(t,{f:()=>U});var n=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),i=a("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js"),o=a("./packages/grafana-data/src/index.ts"),l=a("./packages/grafana-runtime/src/index.ts"),c=a("./packages/grafana-ui/src/index.ts"),u=a("./public/app/core/copy/appNotification.ts"),p=a("./public/app/core/services/context_srv.ts"),d=a("./public/app/types/index.ts"),m=a("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts"),f=a("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),g=a("./public/app/features/alerting/unified/state/actions.ts"),h=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");var x,b=a("./public/app/features/alerting/unified/components/AlertLabel.tsx"),y=a("./public/app/features/alerting/unified/components/DynamicTable.tsx"),v=a("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx"),j=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const _=e=>{let{alertId:t}=e;const{loading:a,error:n,result:i=[]}=function(e){const t=(0,r.useDispatch)(),a=(0,h._)((e=>e.managedAlertStateHistory));return(0,s.useEffect)((()=>{t((0,g.Ms)(e))}),[t,e]),a}(t);if(a&&!n)return x||(x=(0,j.jsx)(c.LoadingPlaceholder,{text:"Loading history..."}));if(n&&!a)return(0,j.jsx)(c.Alert,{title:"Failed to fetch alert state history",children:n.message});const o=[{id:"state",label:"State",size:"max-content",renderCell:w},{id:"value",label:"",size:"auto",renderCell:S},{id:"timestamp",label:"Time",size:"max-content",renderCell:z}],l=i.reduce(((e,t,a)=>(e.push({id:String(t.id),state:t.newState,text:t.text,data:t.data,timestamp:t.updated}),function(e,t){const a=t[e],n=t[e+1];if(!n)return!1;return n.newState===a.prevState}(a,i)||e.push({id:(0,f.uniqueId)(),state:t.prevState}),e)),[]).map((e=>({id:e.id,data:e})));return(0,j.jsx)(y.t,{cols:o,items:l})};function S(e){var t,a;const n=null!==(t=null===(a=e.data.data)||void 0===a?void 0:a.evalMatches)&&void 0!==t?t:[];return(0,j.jsxs)(j.Fragment,{children:[e.data.text,(0,j.jsx)(k,{children:n.map((e=>(0,j.jsx)(b.i,{labelKey:e.metric,value:String(e.value)},e.metric)))})]})}function w(e){return(0,j.jsx)(v.l,{state:e.data.state})}function z(e){return(0,j.jsx)("div",{className:R,children:e.data.timestamp&&(0,j.jsx)("span",{children:(0,o.dateTimeFormat)(e.data.timestamp)})})}const k=e=>{let{children:t}=e;const{wrapper:a}=(0,c.useStyles)(C);return(0,j.jsx)("div",{className:a,children:t})},R=n.css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`,C=e=>({wrapper:n.css`
    & > * {
      margin-right: ${e.spacing.xs};
    }
  `});var N,q,D=a("./public/app/features/alerting/unified/utils/alertmanager.ts"),$=a("./public/app/features/alerting/unified/utils/constants.ts"),E=a("./public/app/features/alerting/unified/utils/datasource.ts"),F=a("./public/app/features/alerting/unified/utils/misc.ts"),M=a("./public/app/features/alerting/unified/utils/rule-id.ts"),I=a("./public/app/features/alerting/unified/utils/rules.ts");const U=e=>{var t,a;let{rule:n,rulesSource:f}=e;const h=(0,r.useDispatch)(),x=(0,i.TH)(),b=(0,u.iG)(),y=(0,c.useStyles2)(A),{namespace:v,group:S,rulerRule:w}=n,[z,k]=(0,s.useState)(),R=function(e){if(!e)return!1;return null!=e.grafana_alert}(n.rulerRule)&&null!==(t=n.rulerRule.grafana_alert.id)&&void 0!==t?t:"",{StateHistoryModal:C,showStateHistoryModal:U}=function(e){var t;const[a,n]=(0,s.useState)(!1);return{StateHistoryModal:(0,s.useMemo)((()=>(0,j.jsx)(c.Modal,{isOpen:a,onDismiss:()=>n(!1),closeOnBackdropClick:!0,closeOnEscape:!0,title:"State history",children:t||(t=(0,j.jsx)(_,{alertId:e}))})),[e,a]),showStateHistoryModal:()=>n(!0),hideStateHistoryModal:()=>n(!1)}}(R),L=(0,E.HY)(f)?f:null===(a=(0,D.Xy)(f.jsonData.alertmanagerUid))||void 0===a?void 0:a.name,B=(0,E.EG)(f),H=p.Vt.hasPermission(d.bW.DataSourcesExplore),V=[],O=[],T=(0,I.Jq)(S),{isEditable:G,isRemovable:P}=(0,m.M)(B,w),W=x.pathname+x.search,Z=x.pathname.endsWith("/view");const J=()=>{if(z&&z.rulerRule){const e=M.Zk((0,E.EG)(z.namespace.rulesSource),z.namespace.name,z.group.name,z.rulerRule);h((0,g.hS)(e,{navigateTo:Z?"/alerting/list":void 0})),k(void 0)}},Y=()=>{if((0,E.jq)(f)){const{appUrl:e,appSubUrl:t}=l.config;return`${""!==t?`${e}${t}/`:l.config.appUrl}alerting/${`${encodeURIComponent(f.name)}/${encodeURIComponent(n.name)}`}/find`}return window.location.href.split("?")[0]};if((0,E.jq)(f)&&H&&!T&&V.push((0,j.jsx)(c.LinkButton,{className:y.button,size:"xs",variant:"primary",icon:"chart-line",target:"__blank",href:(0,F.mH)(f.name,n.query),children:"See graph"},"explore")),n.annotations[$.q6.runbookURL]&&V.push((0,j.jsx)(c.LinkButton,{className:y.button,size:"xs",variant:"primary",icon:"book",target:"__blank",href:n.annotations[$.q6.runbookURL],children:"View runbook"},"runbook")),n.annotations[$.q6.dashboardUID]){const e=n.annotations[$.q6.dashboardUID];if(e){V.push((0,j.jsx)(c.LinkButton,{className:y.button,size:"xs",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(e)}`,children:"Go to dashboard"},"dashboard"));const t=n.annotations[$.q6.panelID];t&&V.push((0,j.jsx)(c.LinkButton,{className:y.button,size:"xs",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(e)}?viewPanel=${encodeURIComponent(t)}`,children:"Go to panel"},"panel"))}}if(L&&p.Vt.hasAccess(d.bW.AlertingInstanceCreate,p.Vt.isEditor)&&V.push((0,j.jsx)(c.LinkButton,{className:y.button,size:"xs",icon:"bell-slash",target:"__blank",href:(0,F.Vv)(L,n),children:"Silence"},"silence")),R&&V.push((0,j.jsxs)(s.Fragment,{children:[(0,j.jsx)(c.Button,{className:y.button,size:"xs",icon:"history",onClick:()=>U(),children:"Show state history"}),C]},"history")),Z||O.push((0,j.jsx)(c.LinkButton,{className:y.button,size:"xs",variant:"secondary",icon:"eye",href:(0,F.V2)(f,n,W),children:"View"},"view")),G&&w&&!T){const e=(0,E.EG)(f),t=M.Zk(e,v.name,S.name,w),a=o.urlUtil.renderUrl(`${l.config.appSubUrl}/alerting/${encodeURIComponent(M.$V(t))}/edit`,{returnTo:W});Z&&O.push((0,j.jsx)(c.ClipboardButton,{onClipboardCopy:()=>{b.success("URL copied!")},onClipboardError:e=>{b.error("Error while copying URL",e.text)},className:y.button,size:"sm",getText:Y,children:"Copy link to rule"},"copy")),O.push((0,j.jsx)(c.LinkButton,{className:y.button,size:"xs",variant:"secondary",icon:"pen",href:a,children:"Edit"},"edit"))}return P&&w&&!T&&O.push((0,j.jsx)(c.Button,{className:y.button,size:"xs",type:"button",variant:"secondary",icon:"trash-alt",onClick:()=>k(n),children:"Delete"},"delete")),V.length||O.length?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:y.wrapper,children:[(0,j.jsx)(c.HorizontalGroup,{width:"auto",children:V.length?V:N||(N=(0,j.jsx)("div",{}))}),(0,j.jsx)(c.HorizontalGroup,{width:"auto",children:O.length?O:q||(q=(0,j.jsx)("div",{}))})]}),!!z&&(0,j.jsx)(c.ConfirmModal,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:J,onDismiss:()=>k(void 0)})]}):null};const A=e=>({wrapper:n.css`
    padding: ${e.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${e.colors.border.medium};
  `,button:n.css`
    height: 24px;
    margin-top: ${e.spacing(1)};
    font-size: ${e.typography.size.sm};
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx":(e,t,a)=>{a.d(t,{J:()=>o});var n=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=(a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),a("./packages/grafana-ui/src/index.ts")),r=a("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx"),i=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function o(e){const{annotations:t}=e,a=(0,s.useStyles2)(l);return 0===t.length?null:(0,i.jsx)("div",{className:a.annotations,children:t.map((e=>{let[t,a]=e;return(0,i.jsx)(r.a,{annotationKey:t,value:a},t)}))})}const l=()=>({annotations:n.css`
    margin-top: 46px;
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx":(e,t,a)=>{a.d(t,{C:()=>d});var n=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=a("./packages/grafana-runtime/src/index.ts"),i=a("./packages/grafana-ui/src/index.ts"),o=a("./public/app/features/expressions/ExpressionDatasource.ts"),l=a("./public/app/features/alerting/unified/utils/datasource.ts"),c=a("./public/app/features/alerting/unified/utils/rules.ts"),u=a("./public/app/features/alerting/unified/components/DetailsField.tsx"),p=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function d(e){const{rulesSource:t,rule:a}=e,n=(0,i.useStyles2)(m),d=(0,s.useMemo)((()=>{if((0,l.jq)(t))return[{name:t.name,icon:t.meta.info.logos.small}];if((0,c.Pc)(a.rulerRule)){const{data:e}=a.rulerRule.grafana_alert,t=e.reduce(((e,t)=>{const a=(0,r.getDataSourceSrv)().getInstanceSettings(t.datasourceUid);return a&&a.uid!==o.Yq?(e[a.name]={name:a.name,icon:a.meta.info.logos.small},e):e}),{});return Object.values(t)}return[]}),[a,t]);return 0===d.length?null:(0,p.jsx)(u.C,{label:"Data source",children:d.map(((e,t)=>{let{name:a,icon:s}=e;return(0,p.jsxs)("div",{children:[s&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("img",{alt:`${a} datasource logo`,className:n.dataSourceIcon,src:s})," "]}),a]},a)}))})}function m(e){const t=e.spacing(2);return{dataSourceIcon:n.css`
      width: ${t};
      height: ${t};
    `}}},"./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx":(e,t,a)=>{a.d(t,{C:()=>x});var n=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=a("./public/app/features/alerting/unified/utils/datasource.ts"),i=a("./public/app/features/alerting/unified/components/DetailsField.tsx"),o=a("../../opt/drone/yarncache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js"),l=a("./.yarn/__virtual__/@grafana-slate-react-virtual-047372596b/3/opt/drone/yarncache/@grafana-slate-react-npm-0.22.10-grafana-510bc0576d-3417c53d9d.zip/node_modules/@grafana/slate-react/lib/slate-react.es.js"),c=a("./packages/grafana-ui/src/index.ts"),u=a("./public/app/plugins/datasource/loki/syntax.ts"),p=a("./public/app/plugins/datasource/prometheus/promql.ts"),d=a("./public/app/features/alerting/unified/components/Well.tsx"),m=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const f=e=>{let{language:t,expr:a}=e;const n=(0,s.useMemo)((()=>[(0,c.SlatePrism)({onlyIn:e=>"code_block"===e.type,getSyntax:()=>t},Object.assign({},o.languages,{[t]:"logql"===t?u.ZP:p.ZP}))]),[t]),r=(0,s.useMemo)((()=>(0,c.makeValue)(a)),[a]);return(0,m.jsx)(l.ML,{plugins:n,value:r,readOnly:!0})},g=e=>{let{expression:t,rulesSource:a}=e;const s=(0,c.useStyles)(h);return(0,m.jsx)(d.t,{className:(0,n.cx)(s.well,"slate-query-field"),children:(0,r.jq)(a)?(0,m.jsx)(f,{expr:t,language:a.type===r.ye.Loki?"logql":"promql"}):t})},h=e=>({well:n.css`
    font-family: ${e.typography.fontFamily.monospace};
  `});function x(e){const{annotations:t,rulesSource:a,rule:s}=e,o=b();return(0,r.jq)(a)?(0,m.jsx)(i.C,{label:"Expression",horizontal:!0,className:(0,n.cx)({[o.exprRow]:!!t.length}),children:(0,m.jsx)(g,{expression:s.query,rulesSource:a})}):null}const b=()=>({exprRow:n.css`
    margin-bottom: 46px;
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx":(e,t,a)=>{a.d(t,{M:()=>x});var n,s=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),i=a("./packages/grafana-ui/src/index.ts"),o=a("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx"),l=a("./public/app/types/unified-alerting-dto.ts"),c=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const u=e=>{let{className:t,onStateFilterChange:a,stateFilter:s}=e;const r=Object.values(l.bj).map((e=>({label:e,value:e})));return(0,c.jsxs)("div",{className:t,children:[n||(n=(0,c.jsx)(i.Label,{children:"State"})),(0,c.jsx)(i.RadioButtonGroup,{options:r,value:s,onChange:a,onClick:e=>{e===s&&a(void 0)}})]})};var p=a("./public/app/features/alerting/unified/utils/alertmanager.ts"),d=a("./public/app/features/alerting/unified/utils/misc.ts"),m=a("./public/app/plugins/panel/alertlist/types.ts"),f=a("./public/app/features/alerting/unified/utils/rules.ts"),g=a("./public/app/features/alerting/unified/components/DetailsField.tsx"),h=a("./public/app/features/alerting/unified/components/rules/AlertInstancesTable.tsx");function x(e){const{promRule:t}=e,[a,n]=(0,r.useState)(),[l,x]=(0,r.useState)(),[y]=(0,r.useState)(Math.floor(100*Math.random())),v=`queryString-${y}`,j=(0,i.useStyles)(b),_=(0,r.useMemo)((()=>{var e;return(0,f.x_)(t)&&null!==(e=t.alerts)&&void 0!==e&&e.length?function(e,t,a){let n=[...a];if(e){const t=(0,p.Zh)(e||"");n=n.filter((e=>{let{labels:a}=e;return(0,p.eD)(a,t)}))}t&&(n=n.filter((e=>e.state===t)));return n}(a,l,(0,d.Zl)(m.As.Importance,t.alerts)):[]}),[t,l,a]);return(0,f.x_)(t)?(0,c.jsxs)(g.C,{label:"Matching instances",horizontal:!0,children:[(0,c.jsx)("div",{className:(0,s.cx)(j.flexRow,j.spaceBetween),children:(0,c.jsxs)("div",{className:j.flexRow,children:[(0,c.jsx)(o.F,{className:j.rowChild,defaultQueryString:a,onFilterChange:e=>n(e)},v),(0,c.jsx)(u,{className:j.rowChild,stateFilter:l,onStateFilterChange:x})]})}),(0,c.jsx)(h.o,{instances:_})]}):null}const b=e=>({flexRow:s.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: ${e.spacing.sm};
    `,spaceBetween:s.css`
      justify-content: space-between;
    `,rowChild:s.css`
      margin-right: ${e.spacing.sm};
    `})},"./public/app/features/alerting/unified/components/rules/RuleHealth.tsx":(e,t,a)=>{a.d(t,{V:()=>l});var n,s,r=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=(a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),a("./packages/grafana-ui/src/index.ts")),o=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const l=e=>{let{rule:t}=e;const a=(0,i.useStyles2)(c);return"err"===t.health||"error"===t.health?(0,o.jsx)(i.Tooltip,{theme:"error",content:t.lastError||"No error message provided.",children:(0,o.jsxs)("div",{className:a.warn,children:[n||(n=(0,o.jsx)(i.Icon,{name:"exclamation-triangle"})),s||(s=(0,o.jsx)("span",{children:"error"}))]})}):(0,o.jsx)(o.Fragment,{children:t.health})},c=e=>({warn:r.css`
    display: inline-flex;
    flex-direction: row;
    color: ${e.colors.warning.text};
    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `})},"./public/app/features/alerting/unified/components/rules/RuleState.tsx":(e,t,a)=>{a.d(t,{p:()=>m});var n,s,r=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),o=a("./packages/grafana-data/src/index.ts"),l=a("./packages/grafana-ui/src/index.ts"),c=a("./public/app/types/unified-alerting-dto.ts"),u=a("./public/app/features/alerting/unified/utils/rules.ts"),p=a("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx"),d=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const m=e=>{let{rule:t,isDeleting:a,isCreating:r}=e;const m=(0,l.useStyles2)(f),{promRule:g}=t,h=(0,i.useMemo)((()=>{var e;if(g&&(0,u.x_)(g)&&null!==(e=g.alerts)&&void 0!==e&&e.length&&g.state!==c.x_.Inactive){const e=(0,u.ub)(g);if(e)return(0,d.jsxs)("span",{title:String(e),className:m.for,children:["for"," ",(0,o.intervalToAbbreviatedDurationString)({start:e,end:new Date},!1)]})}return null}),[g,m]);return a?n||(n=(0,d.jsxs)(l.HorizontalGroup,{align:"flex-start",children:[(0,d.jsx)(l.Spinner,{}),"deleting"]})):r?s||(s=(0,d.jsxs)(l.HorizontalGroup,{align:"flex-start",children:[" ",(0,d.jsx)(l.Spinner,{}),"creating"]})):g&&(0,u.x_)(g)?(0,d.jsxs)(l.HorizontalGroup,{align:"flex-start",children:[(0,d.jsx)(p.l,{state:g.state}),h]}):g&&(0,u.OP)(g)?(0,d.jsx)(d.Fragment,{children:"Recording rule"}):(0,d.jsx)(d.Fragment,{children:"n/a"})},f=e=>({for:r.css`
    font-size: ${e.typography.bodySmall.fontSize};
    color: ${e.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},"./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts":(e,t,a)=>{a.d(t,{Kd:()=>l,Zo:()=>o});var n=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=a("./public/app/features/alerting/unified/utils/datasource.ts"),r=a("./public/app/features/alerting/unified/utils/rules.ts"),i=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");function o(e){const t=(0,i._)((e=>e.promRules)),a=(0,i._)((e=>e.rulerRules)),o=(0,n.useRef)({}),l=(0,n.useMemo)((()=>{if(e){const t=(0,s.o_)(e);if(!t)throw new Error(`Unknown rules source: ${e}`);return[t]}return(0,s.h_)()}),[e]);return(0,n.useMemo)((()=>l.map((e=>{var n,i;const l=(0,s.jq)(e)?e.name:e,u=null===(n=t[l])||void 0===n?void 0:n.result,p=null===(i=a[l])||void 0===i?void 0:i.result,d=o.current[l];if(d&&d.promRules===u&&d.rulerRules===p)return d.result;const m={};Object.entries(p||{}).forEach((t=>{let[a,n]=t;const s={rulesSource:e,name:a,groups:[]};m[a]=s,function(e,t){e.groups=t.map((t=>{const a={name:t.name,interval:t.interval,source_tenants:t.source_tenants,rules:[]};return a.rules=t.rules.map((t=>function(e,t,a){return(0,r.cG)(e)?{name:e.alert,query:e.expr,labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:t,group:a}:(0,r.yF)(e)?{name:e.record,query:e.expr,labels:e.labels||{},annotations:{},rulerRule:e,namespace:t,group:a}:{name:e.grafana_alert.title,query:"",labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:t,group:a}}(t,e,a))),a}))}(s,n)})),null==u||u.forEach((t=>{let{name:a,groups:n}=t;!function(e,t){t.forEach((t=>{var a;let n=e.groups.find((e=>e.name===t.name));n||(n={name:t.name,rules:[]},e.groups.push(n)),(null!==(a=t.rules)&&void 0!==a?a:[]).forEach((t=>{const a=function(e,t,a){var n;if((0,s.HY)(a))return t.rules.find((t=>t.name===e.name));return null!==(n=t.rules.find((t=>!t.promRule&&c(t,e,!0))))&&void 0!==n?n:t.rules.find((t=>!t.promRule&&c(t,e,!1)))}(t,n,e.rulesSource);a?a.promRule=t:n.rules.push(function(e,t,a){return{name:e.name,query:e.query,labels:e.labels||{},annotations:(0,r.x_)(e)&&e.annotations||{},promRule:e,namespace:t,group:a}}(t,e,n))}))}))}(m[a]=m[a]||{rulesSource:e,name:a,groups:[]},n)}));const f=Object.values(m);return o.current[l]={promRules:u,rulerRules:p,result:f},f})).flat()),[t,a,l])}function l(e){return e.map((e=>{const t=Object.assign({},e,{groups:[]});var a;return t.groups.push({name:"default",rules:(a=e.groups.flatMap((e=>e.rules)),a.sort(((e,t)=>e.name.localeCompare(t.name))))}),t}))}function c(e,t){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.name===t.name&&JSON.stringify([a?u(e.query):"",e.labels,e.annotations])===JSON.stringify([a?u(t.query):"",t.labels||{},(0,r.x_)(t)&&t.annotations||{}])}function u(e){return e.length>1&&"("===e[0]&&")"===e[e.length-1]&&(e=e.slice(1,-1)),(e=e.replace(/\s|\n/g,"")).split("").sort().join("")}},"./public/app/features/alerting/unified/hooks/useFolder.ts":(e,t,a)=>{a.d(t,{W:()=>l});var n=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),r=a("./public/app/features/alerting/unified/state/actions.ts"),i=a("./public/app/features/alerting/unified/utils/redux.ts"),o=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");function l(e){const t=(0,s.useDispatch)(),a=(0,o._)((e=>e.folders));if((0,n.useEffect)((()=>{e&&t((0,r.sw)(e))}),[t,e]),e){const t=a[e]||i.oq;return{folder:t.result,loading:t.loading}}return{loading:!1}}},"./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts":(e,t,a)=>{a.d(t,{M:()=>l});var n=a("./public/app/core/services/context_srv.ts"),s=a("./public/app/features/alerting/unified/utils/access-control.ts"),r=a("./public/app/features/alerting/unified/utils/rules.ts"),i=a("./public/app/features/alerting/unified/hooks/useFolder.ts"),o=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");function l(e,t){var a,l,c;const u=(0,o._)((e=>e.dataSources)),p=t&&(0,r.Pc)(t)?t.grafana_alert.namespace_uid:void 0,d=(0,s.Bz)(e),m=n.Vt.hasAccess(d.update,n.Vt.isEditor),f=n.Vt.hasAccess(d.delete,n.Vt.isEditor),{folder:g,loading:h}=(0,i.W)(p);if(!t)return{isEditable:!1,isRemovable:!1,loading:!1};if((0,r.Pc)(t)){if(!p)throw new Error(`Rule ${t.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);return{isEditable:m&&(null==g?void 0:g.canSave),isRemovable:f&&(null==g?void 0:g.canSave),loading:h}}const x=Boolean(null===(a=u[e])||void 0===a||null===(l=a.result)||void 0===l?void 0:l.rulerConfig);return{isEditable:m&&x,isRemovable:f&&x,loading:null===(c=u[e])||void 0===c?void 0:c.loading}}}}]);
//# sourceMappingURL=4097.326a5ae471165dde1160.js.map