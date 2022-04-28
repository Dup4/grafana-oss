"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6031],{"./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryField.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var r=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l={id:"promql",extensions:[".promql"],aliases:["Prometheus","prometheus","prom","Prom","promql","Promql","promQL","PromQL"],mimetypes:[],loader:function(){return Promise.all([n.e(2320),n.e(8682)]).then(n.bind(n,"../../opt/drone/yarncache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/promql/promql.js"))}},i=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");const o=function(e){var t=(0,i.useRef)(e);return t.current=e,t};var a=n("./packages/grafana-e2e-selectors/src/index.ts"),s=n("./packages/grafana-ui/src/index.ts");function u(){const e=new Map;return e.set("expandSuggestionDocs",(!0).toString()),{onDidChangeValue:e=>{},onDidChangeTarget:e=>{},onWillSaveState:e=>{},get:(t,n,r)=>{var l;return null!==(l=e.get(t))&&void 0!==l?l:r},getBoolean:(t,n,r)=>{const l=e.get(t);return void 0!==l?"true"===l:r},getNumber:(t,n,r)=>{const l=e.get(t);return void 0!==l?parseInt(l,10):r},store:(t,n,r,l)=>{null==n?e.delete(t):e.set(t,n.toString())},remove:(t,n)=>{e.delete(t)},keys:(t,n)=>Array.from(e.keys()),logStorage:()=>{console.log("logStorage: not implemented")},migrate:()=>Promise.resolve(void 0),isNew:e=>!0,flush:e=>Promise.resolve(void 0)}}let c=null;var d=n("./public/app/plugins/datasource/prometheus/language_utils.ts"),m=n("./public/app/plugins/datasource/prometheus/promql.ts");class p extends Error{constructor(e){super("should never happen")}}async function f(e){return(await e.getAllMetricNames()).map((e=>({type:"METRIC_NAME",label:e.name,insertText:e.name,detail:`${e.name} : ${e.type}`,documentation:e.help})))}const g=m.r8.map((e=>{var t;return{type:"FUNCTION",label:e.label,insertText:null!==(t=e.insertText)&&void 0!==t?t:"",detail:e.detail,documentation:e.documentation}}));async function h(e){const t=await f(e);return[...g,...t]}const L=["$__interval","$__range","$__rate_interval","1m","5m","10m","30m","1h","1d"].map((e=>({type:"DURATION",label:e,insertText:e})));function b(e,t){const n=[...t];void 0!==e&&n.push({name:"__name__",value:e,op:"="});return`{${n.map((e=>`${e.name}${e.op}"${(0,d.U9)(e.value)}"`)).join(",")}}`}async function v(e,t,n,r,l){const i=await async function(e,t,n){if(void 0===e&&0===t.length)return n.getAllLabelNames();{const r=b(e,t),l=await n.getSeries(r),i=Object.keys(l),o=new Set(t.map((e=>e.name)));return i.filter((e=>!o.has(e)))}}(e,r,l);return i.map((e=>({type:"LABEL_NAME",label:e,insertText:`${e}${t}`,triggerOnInsert:n})))}async function y(e,t,n,r,l){const i=await async function(e,t,n,r){if(void 0===e&&0===n.length)return r.getLabelValues(t);{var l;const i=b(e,n);return null!==(l=(await r.getSeries(i))[t])&&void 0!==l?l:[]}}(e,t,r,l);return i.map((e=>({type:"LABEL_VALUE",label:e,insertText:n?e:`"${e}"`})))}async function _(e,t){switch(e.type){case"IN_DURATION":return L;case"IN_FUNCTION":case"AT_ROOT":return h(t);case"EMPTY":{const e=await f(t),n=await async function(e){return(await e.getHistory()).slice(0,10).map((e=>({type:"HISTORY",label:e,insertText:e})))}(t);return[...n,...g,...e]}case"IN_LABEL_SELECTOR_NO_LABEL_NAME":return async function(e,t,n){return v(e,"=",!0,t,n)}(e.metricName,e.otherLabels,t);case"IN_GROUPING":return async function(e,t,n){return v(e,"",!1,t,n)}(e.metricName,e.otherLabels,t);case"IN_LABEL_SELECTOR_WITH_LABEL_NAME":return y(e.metricName,e.labelName,e.betweenQuotes,e.otherLabels,t);default:throw new p(e)}}var N=n("./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/3/opt/drone/yarncache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js");function C(e,t){switch(t){case"parent":return e.parent;case"firstChild":return e.firstChild;case"lastChild":return e.lastChild;case"nextSibling":return e.nextSibling;default:throw new p(t)}}function E(e,t){let n=e;for(const[e,r]of t){if(n=C(n,e),null===n)return null;if(n.type.name!==r)return null}return n}function I(e,t){return t.slice(e.from,e.to)}function M(e,t){return e.every(((e,n)=>e===t[n]))}const S="⚠",A=[{path:["LabelMatchers","VectorSelector"],fun:function(e,t,n){if(function(e){return null!==O(e,S)}(e))return null;const r=E(e,[["firstChild","LabelMatchList"]]);if(null!==r){if(!t.slice(r.to,n).includes(","))return null}const l=E(e,[["parent","VectorSelector"],["firstChild","MetricIdentifier"],["firstChild","Identifier"]]),i=x(e,t);if(null===l)return{type:"IN_LABEL_SELECTOR_NO_LABEL_NAME",otherLabels:i};return{type:"IN_LABEL_SELECTOR_NO_LABEL_NAME",metricName:I(l,t),otherLabels:i}}},{path:["PromQL"],fun:function(e,t,n){return{type:"AT_ROOT"}}},{path:["FunctionCallBody"],fun:function(e,t,n){return{type:"IN_FUNCTION"}}},{path:["StringLiteral","LabelMatcher"],fun:R},{path:[S,"LabelMatcher"],fun:R},{path:[S,"MatrixSelector"],fun:function(e,t,n){return{type:"IN_DURATION"}}},{path:["GroupingLabels"],fun:function(e,t,n){const r=E(e,[["parent","AggregateModifier"],["parent","AggregateExpr"]]);if(null===r)return null;const l=r.getChild("FunctionCallBody");if(null===l)return null;const i=O(l,"MetricIdentifier");if(null===i)return null;const o=E(i,[["firstChild","Identifier"]]);if(null===o)return null;return{type:"IN_GROUPING",metricName:I(o,t),otherLabels:[]}}}],T=new Map([["EqlSingle","="],["EqlRegex","=~"],["Neq","!="],["NeqRegex","!~"]]);function w(e,t){if("LabelMatcher"!==e.type.name)return null;const n=E(e,[["firstChild","LabelName"]]);if(null===n)return null;const r=E(n,[["nextSibling","MatchOp"]]);if(null===r)return null;const l=function(e){var t;const n=e.firstChild;return null===n?null:null!==(t=T.get(n.name))&&void 0!==t?t:null}(r);if(null===l)return null;const i=E(e,[["lastChild","StringLiteral"]]);if(null===i)return null;const o=I(n,t),a=function(e){const t=e.slice(1,e.length-1);if(e.startsWith('"')&&e.endsWith('"'))return t.replace(/\\"/,'"');if(e.startsWith("'")&&e.endsWith("'"))return t.replace(/\\'/,"'");if(e.startsWith("`")&&e.endsWith("`"))return t;throw new Error("FIXME: invalid string literal")}(I(i,t));return{name:o,value:a,op:l}}function x(e,t){if("LabelMatchers"!==e.type.name)return[];let n=E(e,[["firstChild","LabelMatchList"]]);const r=[];for(;null!==n;){const e=E(n,[["lastChild","LabelMatcher"]]);if(null===e)return[];const l=w(e,t);null!==l&&r.push(l),n=E(n,[["firstChild","LabelMatchList"]])}return r.reverse(),r}function O(e,t){if(e.type.name===t)return e;const n=function(e){let t=e.firstChild;const n=[];for(;null!==t;)n.push(t),t=t.nextSibling;return n}(e);for(const e of n){const n=O(e,t);if(null!==n)return n}return null}function R(e,t,n){const r=!e.type.isError,l=E(e,[["parent","LabelMatcher"]]);if(null===l)return null;const i=E(l,[["firstChild","LabelName"]]);if(null===i)return null;const o=I(i,t),a=E(l,[["parent","LabelMatchList"]]);if(null===a)return null;let s=a,u=null;for(;null===u;){const e=s.parent;if(null===e)return null;const{name:t}=e.type;switch(t){case"LabelMatchList":s=e;continue;case"LabelMatchers":u=e;continue;default:return null}}const c=x(u,t).filter((e=>e.name!==o)),d=E(u,[["parent","VectorSelector"],["firstChild","MetricIdentifier"],["firstChild","Identifier"]]);if(null===d)return{type:"IN_LABEL_SELECTOR_WITH_LABEL_NAME",labelName:o,betweenQuotes:r,otherLabels:c};return{type:"IN_LABEL_SELECTOR_WITH_LABEL_NAME",metricName:I(d,t),labelName:o,betweenQuotes:r,otherLabels:c}}function B(e,t){switch(e){case"DURATION":return t.languages.CompletionItemKind.Unit;case"FUNCTION":return t.languages.CompletionItemKind.Variable;case"HISTORY":return t.languages.CompletionItemKind.Snippet;case"LABEL_NAME":return t.languages.CompletionItemKind.Enum;case"LABEL_VALUE":return t.languages.CompletionItemKind.EnumMember;case"METRIC_NAME":return t.languages.CompletionItemKind.Constructor;default:throw new p(e)}}function P(e,t){return{triggerCharacters:["{",",","[","(","=","~"," ",'"'],provideCompletionItems:(n,r)=>{const l=n.getWordAtPosition(r),i=null!=l?e.Range.lift({startLineNumber:r.lineNumber,endLineNumber:r.lineNumber,startColumn:l.startColumn,endColumn:l.endColumn}):e.Range.fromPositions(r),o={column:r.column,lineNumber:r.lineNumber},a=n.getOffsetAt(o),s=function(e,t){if(""===e)return{type:"EMPTY"};const n=N.E2.parse(e),r=function(e,t){const n=e.cursor(t);for(;;){if(n.from===t&&n.to===t){const{node:e}=n;if(e.type.isError)return e}if(!n.next())break}return null}(n,t),l=null!=r?r.cursor:n.cursor(t),i=l.node,o=[l.name];for(;l.parent();)o.push(l.name);for(let n of A)if(M(n.path,o))return n.fun(i,e,t);return null}(n.getValue(),a);return(null!=s?_(s,t):Promise.resolve([])).then((t=>{const n=t.length.toString().length;return{suggestions:t.map(((t,r)=>({kind:B(t.type,e),label:t.label,insertText:t.insertText,detail:t.detail,documentation:t.documentation,sortText:r.toString().padStart(n,"0"),range:i,command:t.triggerOnInsert?{id:"editor.action.triggerSuggest",title:""}:void 0})))}}))}}}var q=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const W={codeLens:!1,contextmenu:!1,fixedOverflowWidgets:!0,folding:!1,fontSize:14,lineDecorationsWidth:8,lineNumbers:"off",minimap:{enabled:!1},overviewRulerBorder:!1,overviewRulerLanes:0,padding:{top:4,bottom:5},renderLineHighlight:"none",scrollbar:{vertical:"hidden",verticalScrollbarSize:8,horizontal:"hidden",horizontalScrollbarSize:0},scrollBeyondLastLine:!1,suggest:{showWords:!1},suggestFontSize:12,wordWrap:"on"},z=l.id;let $=!1;const U=e=>{const t=(0,i.useRef)((null===c&&(c={storageService:u()}),c)),n=(0,i.useRef)(null),{languageProvider:d,history:m,onBlur:p,onRunQuery:f,initialValue:g}=e,h=o(d),L=o(m),b=o(f),v=o(p),y=(0,i.useRef)(null),_=(e=>({container:r.css`
      border-radius: ${e.shape.borderRadius()};
      border: 1px solid ${e.components.input.borderColor};
    `}))((0,s.useTheme2)());return(0,i.useEffect)((()=>()=>{var e;null===(e=y.current)||void 0===e||e.call(y)}),[]),(0,q.jsx)("div",{"aria-label":a.wl.components.QueryField.container,className:_.container,ref:n,children:(0,q.jsx)(s.ReactMonacoEditor,{overrideServices:t.current,options:W,language:"promql",value:g,beforeMount:e=>{!function(e){if(!1===$){$=!0;const{aliases:t,extensions:n,mimetypes:r,loader:i}=l;e.languages.register({id:z,aliases:t,extensions:n,mimetypes:r}),i().then((t=>{e.languages.setMonarchTokensProvider(z,t.language),e.languages.setLanguageConfiguration(z,t.languageConfiguration)}))}}(e)},onMount:(e,t)=>{e.onDidBlurEditorWidget((()=>{v.current(e.getValue())}));const r=P(t,{getSeries:e=>h.current.getSeries(e),getHistory:()=>Promise.resolve(L.current.map((e=>e.query.expr)).filter((e=>void 0!==e))),getAllMetricNames:()=>{const{metrics:e,metricsMetadata:t}=h.current,n=e.map((e=>{var n,r;const l=null==t?void 0:t[e];return{name:e,help:null!==(n=null==l?void 0:l.help)&&void 0!==n?n:"",type:null!==(r=null==l?void 0:l.type)&&void 0!==r?r:""}}));return Promise.resolve(n)},getAllLabelNames:()=>Promise.resolve(h.current.getLabelKeys()),getLabelValues:e=>h.current.getLabelValues(e)}),l=Object.assign({},r,{provideCompletionItems:(t,n,l,i)=>{var o;return(null===(o=e.getModel())||void 0===o?void 0:o.id)!==t.id?{suggestions:[]}:r.provideCompletionItems(t,n,l,i)}}),{dispose:i}=t.languages.registerCompletionItemProvider(z,l);y.current=i;const o=()=>{const t=n.current;if(null!==t){const n=e.getContentHeight();t.style.height=`${n+2}px`,t.style.width="100%";const r=t.clientWidth;e.layout({width:r,height:n})}};e.onDidContentSizeChange(o),o(),e.addCommand(t.KeyMod.Shift|t.KeyCode.Enter,(()=>{b.current(e.getValue())}))}})})}}}]);
//# sourceMappingURL=prom-query-field.326a5ae471165dde1160.js.map