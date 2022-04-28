"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2341],{"./public/app/features/playlist/PlaylistEditPage.tsx":(e,a,t)=>{t.r(a),t.d(a,{PlaylistEditPage:()=>m,default:()=>b});t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var s=t("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),l=t("./packages/grafana-runtime/src/index.ts"),n=t("./packages/grafana-ui/src/index.ts"),i=t("./public/app/core/components/Page/Page.tsx"),r=t("./public/app/core/selectors/navModel.ts"),o=t("./public/app/features/playlist/PlaylistForm.tsx"),c=t("./public/app/features/playlist/api.ts"),d=t("./public/app/features/playlist/styles.ts"),p=t("./public/app/features/playlist/usePlaylist.tsx"),u=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const m=e=>{let{navModel:a,match:t}=e;const s=(0,n.useStyles2)(d.e),{playlist:r,loading:m}=(0,p.Z)(t.params.id);return(0,u.jsx)(i.Z,{navModel:a,children:(0,u.jsxs)(i.Z.Contents,{isLoading:m,children:[(0,u.jsx)("h3",{className:s.subHeading,children:"Edit playlist"}),(0,u.jsx)("p",{className:s.description,children:"A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."}),(0,u.jsx)(o.H,{onSubmit:async e=>{await(0,c.CE)(t.params.id,e),l.locationService.push("/playlists")},playlist:r})]})})},b=(0,s.connect)((e=>({navModel:(0,r.h)(e.navIndex,"playlists")})))(m)},"./public/app/features/playlist/PlaylistForm.tsx":(e,a,t)=>{t.d(a,{H:()=>C});var s=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),l=t("./packages/grafana-e2e-selectors/src/index.ts"),n=t("./packages/grafana-runtime/src/index.ts"),i=t("./packages/grafana-ui/src/index.ts"),r=t("../../opt/drone/yarncache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js"),o=t.n(r),c=t("./public/app/core/services/backend_srv.ts"),d=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const p=e=>{let{onChange:a,value:t,width:s,isClearable:l=!1,invalid:n,disabled:r,id:c}=e;const p=o()(u,300),m=t?{value:t,label:t.label}:void 0;return(0,d.jsx)(i.AsyncSelect,{inputId:c,menuShouldPortal:!0,width:s,isClearable:l,defaultOptions:!0,loadOptions:p,onChange:e=>{a(null==e?void 0:e.value)},placeholder:"Select dashboard",noOptionsMessage:"No dashboards found",value:m,invalid:n,disabled:r})};async function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const a=await c.ae.search({type:"dash-db",query:e,limit:100});return a.map((e=>{let{id:a,uid:t="",title:s,folderTitle:l}=e;const n={id:a,uid:t,label:`${null!=l?l:"General"}/${s}`};return{value:n,label:n.label}}))}var m=t("./public/app/core/components/TagFilter/TagFilter.tsx"),b=t("./public/app/core/services/search_srv.ts"),y=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),g=t("./public/app/core/components/TagFilter/TagBadge.tsx");const h=e=>{let{item:a,onDelete:t,onMoveDown:s,onMoveUp:n,first:r,last:o}=e;const c=(0,i.useStyles)(v);return(0,d.jsxs)("tr",{"aria-label":l.wl.pages.PlaylistForm.itemRow,children:["dashboard_by_id"===a.type?(0,d.jsxs)("td",{className:(0,y.cx)(c.td,c.item),children:[(0,d.jsx)(i.Icon,{name:"apps","aria-label":l.wl.pages.PlaylistForm.itemIdType}),(0,d.jsx)("span",{children:a.title})]}):null,"dashboard_by_tag"===a.type?(0,d.jsxs)("td",{className:(0,y.cx)(c.td,c.item),children:[(0,d.jsx)(i.Icon,{name:"tag-alt","aria-label":l.wl.pages.PlaylistForm.itemTagType}),(0,d.jsx)(g.e,{label:a.title,removeIcon:!1,count:0},a.id)]}):null,(0,d.jsxs)("td",{className:(0,y.cx)(c.td,c.settings),children:[r?null:(0,d.jsx)(i.IconButton,{name:"arrow-up",size:"md",onClick:e=>{e.preventDefault(),n(a)},"aria-label":l.wl.pages.PlaylistForm.itemMoveUp,type:"button"}),o?null:(0,d.jsx)(i.IconButton,{name:"arrow-down",size:"md",onClick:e=>{e.preventDefault(),s(a)},"aria-label":l.wl.pages.PlaylistForm.itemMoveDown,type:"button"}),(0,d.jsx)(i.IconButton,{name:"times",size:"md",onClick:e=>{e.preventDefault(),t(a)},"aria-label":l.wl.pages.PlaylistForm.itemDelete,type:"button"})]})]},a.title)};function v(e){return{td:y.css`
      label: td;
      line-height: 28px;
      max-width: 335px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `,item:y.css`
      label: item;
      span {
        margin-left: ${e.spacing.xs};
      }
    `,settings:y.css`
      label: settings;
      text-align: right;
    `}}var x;const f=e=>{let{items:a,onMoveUp:t,onMoveDown:s,onDelete:l}=e;return 0===a.length?x||(x=(0,d.jsx)("tr",{children:(0,d.jsx)("td",{children:(0,d.jsx)("em",{children:"Playlist is empty. Add dashboards below."})})})):(0,d.jsx)(d.Fragment,{children:a.map(((e,n)=>{const i=0===n,r=n===a.length-1;return(0,d.jsx)(h,{first:i,last:r,item:e,onDelete:l,onMoveDown:s,onMoveUp:t},e.title)}))})};var j;const w=e=>{let{items:a,onMoveUp:t,onMoveDown:s,onDelete:l}=e;return(0,d.jsxs)("div",{className:"gf-form-group",children:[j||(j=(0,d.jsx)("h3",{className:"page-headering",children:"Dashboards"})),(0,d.jsx)("table",{className:"filter-table",children:(0,d.jsx)("tbody",{children:(0,d.jsx)(f,{items:a,onMoveUp:t,onMoveDown:s,onDelete:l})})})]})};var _;const k=new b.i,C=e=>{var a,t;let{onSubmit:r,playlist:o}=e;const{name:c,interval:u,items:b}=o,{items:y,addById:g,addByTag:h,deleteItem:v,moveDown:x,moveUp:f}=function(e){const[a,t]=(0,s.useState)(null!=e?e:[]),l=(0,s.useCallback)((e=>{if(!e||a.find((a=>a.id===e.id)))return;const s={id:e.id,title:e.label,type:"dashboard_by_id",value:e.id.toString(10),order:a.length+1};t([...a,s])}),[a]),n=(0,s.useCallback)((e=>{const s=e[0];if(!s||a.find((e=>e.value===s)))return;const l={title:s,type:"dashboard_by_tag",value:s,order:a.length+1};t([...a,l])}),[a]),i=(0,s.useCallback)(((e,s)=>{const l=[...a],n=l.indexOf(e),i=n+s;i>=0&&i<l.length&&(l.splice(n,1),l.splice(i,0,e)),t(l)}),[a]),r=(0,s.useCallback)((e=>{i(e,-1)}),[i]),o=(0,s.useCallback)((e=>{i(e,1)}),[i]),c=(0,s.useCallback)((e=>{t(a.filter((a=>a!==e)))}),[a]);return{items:a,addById:l,addByTag:n,deleteItem:c,moveDown:o,moveUp:r}}(b);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(i.Form,{onSubmit:e=>r(Object.assign({},e,{items:y})),validateOn:"onBlur",children:e=>{var s,r;let{register:o,errors:b}=e;const j=0===y.length||Object.keys(b).length>0;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Field,{label:"Name",invalid:!!b.name,error:null==b||null===(s=b.name)||void 0===s?void 0:s.message,children:(0,d.jsx)(i.Input,Object.assign({type:"text"},o("name",{required:"Name is required"}),{placeholder:"Name",defaultValue:c,"aria-label":l.wl.pages.PlaylistForm.name}))}),(0,d.jsx)(i.Field,{label:"Interval",invalid:!!b.interval,error:null==b||null===(r=b.interval)||void 0===r?void 0:r.message,children:(0,d.jsx)(i.Input,Object.assign({type:"text"},o("interval",{required:"Interval is required"}),{placeholder:"5m",defaultValue:null!=u?u:"5m","aria-label":l.wl.pages.PlaylistForm.interval}))}),a||(a=(0,d.jsx)(w,{items:y,onMoveUp:f,onMoveDown:x,onDelete:v})),(0,d.jsxs)("div",{className:"gf-form-group",children:[_||(_=(0,d.jsx)("h3",{className:"page-headering",children:"Add dashboards"})),t||(t=(0,d.jsx)(i.Field,{label:"Add by title",children:(0,d.jsx)(p,{onChange:g,id:"dashboard-picker",isClearable:!0})})),(0,d.jsx)(i.Field,{label:"Add by tag",children:(0,d.jsx)(m.D,{isClearable:!0,tags:[],hideValues:!0,tagOptions:k.getDashboardTags,onChange:h,placeholder:""})})]}),(0,d.jsxs)(i.HorizontalGroup,{children:[(0,d.jsx)(i.Button,{variant:"primary",disabled:j,children:"Save"}),(0,d.jsx)(i.LinkButton,{variant:"secondary",href:`${n.config.appSubUrl}/playlists`,children:"Cancel"})]})]})}})})}},"./public/app/features/playlist/api.ts":(e,a,t)=>{t.d(a,{A5:()=>d,CE:()=>o,Dv:()=>p,cg:()=>r,l8:()=>c});var s=t("./packages/grafana-runtime/src/index.ts"),l=t("./public/app/core/actions/index.ts"),n=t("./public/app/core/copy/appNotification.ts"),i=t("./public/app/store/store.ts");async function r(e){await u((()=>(0,s.getBackendSrv)().post("/api/playlists",e)))}async function o(e,a){await u((()=>(0,s.getBackendSrv)().put(`/api/playlists/${e}`,a)))}async function c(e){await u((()=>(0,s.getBackendSrv)().delete(`/api/playlists/${e}`)),"Playlist deleted")}async function d(e){return await(0,s.getBackendSrv)().get(`/api/playlists/${e}`)}async function p(e){return await(0,s.getBackendSrv)().get("/api/playlists/",{query:e})}async function u(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Playlist saved";try{await e(),(0,i.WI)((0,l.$l)((0,n.AT)(a)))}catch(e){(0,i.WI)((0,l.$l)((0,n.t_)("Unable to save playlist",e)))}}},"./public/app/features/playlist/styles.ts":(e,a,t)=>{t.d(a,{e:()=>l});var s=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");function l(e){return{description:s.css`
      label: description;
      width: 555px;
      margin-bottom: 20px;
    `,subHeading:s.css`
      label: sub-heading;
      margin-bottom: ${e.spacing(2)};
    `}}},"./public/app/features/playlist/usePlaylist.tsx":(e,a,t)=>{t.d(a,{Z:()=>n});var s=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),l=t("./public/app/features/playlist/api.ts");function n(e){const[a,t]=(0,s.useState)({items:[],interval:"5m",name:""}),[n,i]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{if(!e)return void i(!1);const a=await(0,l.A5)(e);t(a),i(!1)})()}),[e]),{playlist:a,loading:n}}}}]);
//# sourceMappingURL=PlaylistEditPage.326a5ae471165dde1160.js.map