"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9671],{"./public/app/core/components/connectWithCleanUp.tsx":(e,t,s)=>{s.d(t,{$:()=>d});var a=s("../../opt/drone/yarncache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),n=s.n(a),i=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=s("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),c=s("./public/app/core/actions/cleanUp.ts"),o=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const d=(e,t,s)=>a=>{const d=(0,r.connect)(e,t)(a),l=e=>{const t=(0,r.useDispatch)();return(0,i.useEffect)((()=>function(){t((0,c.e)({stateSelector:s}))}),[t]),(0,o.jsx)(d,Object.assign({},e))};return l.displayName=`ConnectWithCleanUp(${d.displayName})`,n()(l,a),l}},"./public/app/features/admin/utils.ts":(e,t,s)=>{s.d(t,{d:()=>n});var a=s("./packages/grafana-runtime/src/index.ts");const n=()=>function(){var e;const t=null===(e=a.config.licenseInfo)||void 0===e?void 0:e.trialExpiry;return!!(t&&t>0)}()&&a.config.featureToggles.featureHighlights},"./public/app/features/teams/TeamList.tsx":(e,t,s)=>{s.r(t),s.d(t,{TeamList:()=>k,default:()=>w});var a=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),n=s("./packages/grafana-ui/src/index.ts"),i=s("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx"),r=s("./public/app/core/components/Page/Page.tsx"),c=s("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js"),o=s("./public/app/core/components/RolePicker/RolePicker.tsx"),d=s("./public/app/core/components/RolePicker/api.ts"),l=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const m=e=>{let{teamId:t,orgId:s,roleOptions:n,disabled:i,builtinRolesDisabled:r}=e;const[{loading:m,value:p=[]},u]=(0,c.Z)((async()=>{try{return await(0,d._C)(t,s)}catch(e){console.error("Error loading options")}return[]}),[s,t]);(0,a.useEffect)((()=>{u()}),[s,t,u]);return(0,l.jsx)(o.I,{onRolesChange:async e=>{await(0,d.u7)(e,t,s),await u()},roleOptions:n,appliedRoles:p,isLoading:m,disabled:i,builtinRolesDisabled:r})};var p,u,h,g,b,f=s("./public/app/core/config.ts"),x=s("./public/app/core/selectors/navModel.ts"),v=s("./public/app/core/services/context_srv.ts"),y=s("./public/app/types/index.ts"),j=s("./public/app/core/components/connectWithCleanUp.tsx"),T=s("./public/app/features/teams/state/actions.ts"),A=s("./public/app/features/teams/state/reducers.ts"),C=s("./public/app/features/teams/state/selectors.ts");function P(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class k extends a.PureComponent{constructor(e){super(e),P(this,"deleteTeam",(e=>{this.props.deleteTeam(e.id)})),P(this,"onSearchQueryChange",(e=>{this.props.setSearchQuery(e)})),P(this,"getPaginatedTeams",(e=>{const t=30*(this.props.searchPage-1);return e.slice(t,t+30)})),this.state={roleOptions:[]}}componentDidMount(){this.fetchTeams(),v.Vt.licensedAccessControlEnabled()&&v.Vt.hasPermission(y.bW.ActionRolesList)&&this.fetchRoleOptions()}async fetchTeams(){await this.props.loadTeams()}async fetchRoleOptions(){const e=await(0,d.ul)();this.setState({roleOptions:e})}renderTeam(e){var t,s;const{editorsCanAdmin:a,signedInUser:i}=this.props,r=e.permission,c=`org/teams/edit/${e.id}`,o=(0,C.kC)({permission:r,editorsCanAdmin:a,signedInUser:i}),d=v.Vt.hasAccessInMetadata(y.bW.ActionTeamsDelete,e,o),p=v.Vt.hasAccessInMetadata(y.bW.ActionTeamsRead,e,o),u=v.Vt.hasAccessInMetadata(y.bW.ActionTeamsRolesList,e,!1),h=v.Vt.hasAccess(y.bW.ActionTeamsRolesAdd,!1)||v.Vt.hasAccess(y.bW.ActionTeamsRolesRemove,!1),g=v.Vt.licensedAccessControlEnabled()&&v.Vt.hasPermission(y.bW.ActionTeamsRolesList)&&v.Vt.hasPermission(y.bW.ActionRolesList);return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"width-4 text-center link-td",children:p?(0,l.jsx)("a",{href:c,children:(0,l.jsx)("img",{className:"filter-table__avatar",src:e.avatarUrl,alt:"Team avatar"})}):(0,l.jsx)("img",{className:"filter-table__avatar",src:e.avatarUrl,alt:"Team avatar"})}),(0,l.jsx)("td",{className:"link-td",children:p?(0,l.jsx)("a",{href:c,children:e.name}):(0,l.jsx)("div",{style:{padding:"0px 8px"},children:e.name})}),(0,l.jsx)("td",{className:"link-td",children:p?(0,l.jsx)("a",{href:c,"aria-label":(null===(t=e.email)||void 0===t?void 0:t.length)>0?void 0:"Empty email cell",children:e.email}):(0,l.jsx)("div",{style:{padding:"0px 8px"},"aria-label":(null===(s=e.email)||void 0===s?void 0:s.length)>0?void 0:"Empty email cell",children:e.email})}),(0,l.jsx)("td",{className:"link-td",children:p?(0,l.jsx)("a",{href:c,children:e.memberCount}):(0,l.jsx)("div",{style:{padding:"0px 8px"},children:e.memberCount})}),g&&(0,l.jsx)("td",{children:u&&(0,l.jsx)(m,{teamId:e.id,roleOptions:this.state.roleOptions,disabled:!h})}),(0,l.jsx)("td",{className:"text-right",children:(0,l.jsx)(n.DeleteButton,{"aria-label":"Delete team",size:"sm",disabled:!d,onConfirm:()=>this.deleteTeam(e)})})]},e.id)}renderEmptyList(){return(0,l.jsx)(i.Z,{title:"You haven't created any teams yet.",buttonIcon:"users-alt",buttonLink:"org/teams/new",buttonTitle:" New team",buttonDisabled:!v.Vt.hasPermission(y.bW.ActionTeamsCreate),proTip:"Assign folder and dashboard permissions to teams instead of users to ease administration.",proTipLink:"",proTipLinkTitle:"",proTipTarget:"_blank"})}renderTeamList(){const{teams:e,searchQuery:t,editorsCanAdmin:s,searchPage:a,setTeamsSearchPage:i}=this.props,r=v.Vt.hasRole("Admin")||s&&v.Vt.hasRole("Editor"),c=v.Vt.hasAccess(y.bW.ActionTeamsCreate,r),o=v.Vt.licensedAccessControlEnabled()&&v.Vt.hasPermission(y.bW.ActionTeamsRolesList)&&v.Vt.hasPermission(y.bW.ActionRolesList),d=c?"org/teams/new":"#",m=this.getPaginatedTeams(e),f=Math.ceil(e.length/30);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"page-action-bar",children:[(0,l.jsx)("div",{className:"gf-form gf-form--grow",children:(0,l.jsx)(n.FilterInput,{placeholder:"Search teams",value:t,onChange:this.onSearchQueryChange})}),(0,l.jsx)(n.LinkButton,{href:d,disabled:!c,children:"New Team"})]}),(0,l.jsx)("div",{className:"admin-list-table",children:(0,l.jsxs)(n.VerticalGroup,{spacing:"md",children:[(0,l.jsxs)("table",{className:"filter-table filter-table--hover form-inline",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[p||(p=(0,l.jsx)("th",{})),u||(u=(0,l.jsx)("th",{children:"Name"})),h||(h=(0,l.jsx)("th",{children:"Email"})),g||(g=(0,l.jsx)("th",{children:"Members"})),o&&(b||(b=(0,l.jsx)("th",{children:"Roles"}))),(0,l.jsx)("th",{style:{width:"1%"}})]})}),(0,l.jsx)("tbody",{children:m.map((e=>this.renderTeam(e)))})]}),(0,l.jsx)(n.HorizontalGroup,{justify:"flex-end",children:(0,l.jsx)(n.Pagination,{onNavigate:i,currentPage:a,numberOfPages:f,hideWhenSinglePage:!0})})]})})]})}renderList(){const{teamsCount:e,hasFetched:t}=this.props;return t?e>0?this.renderTeamList():this.renderEmptyList():null}render(){const{hasFetched:e,navModel:t}=this.props;return(0,l.jsx)(r.Z,{navModel:t,children:(0,l.jsx)(r.Z.Contents,{isLoading:!e,children:this.renderList()})})}}const I={loadTeams:T.jI,deleteTeam:T.fC,setSearchQuery:A.ql,setTeamsSearchPage:A.ot},w=(0,j.$)((function(e){return{navModel:(0,x.h)(e.navIndex,"teams"),teams:(0,C.LK)(e.teams),searchQuery:(0,C.uP)(e.teams),searchPage:(0,C._u)(e.teams),teamsCount:(0,C.v7)(e.teams),hasFetched:e.teams.hasFetched,editorsCanAdmin:f.vc.editorsCanAdmin,signedInUser:v.Vt.user}}),I,(e=>e.teams))(k)},"./public/app/features/teams/state/actions.ts":(e,t,s)=>{s.d(t,{A_:()=>f,Lt:()=>u,P5:()=>x,QX:()=>m,ei:()=>p,fC:()=>v,fs:()=>g,jI:()=>l,j_:()=>b,zT:()=>h,zZ:()=>y});var a=s("./packages/grafana-runtime/src/index.ts"),n=s("./public/app/core/actions/index.ts"),i=s("./public/app/core/core.ts"),r=s("./public/app/core/utils/accessControl.ts"),c=s("./public/app/types/index.ts"),o=s("./public/app/features/teams/state/navModel.ts"),d=s("./public/app/features/teams/state/reducers.ts");function l(){return async e=>{if(!i.Vt.hasPermission(c.bW.ActionTeamsRead))return void e((0,d.PL)([]));const t=await(0,a.getBackendSrv)().get("/api/teams/search",(0,r.y)({perpage:1e3,page:1}));e((0,d.PL)(t.teams))}}function m(e){return async t=>{const s=await(0,a.getBackendSrv)().get(`/api/teams/${e}`,(0,r.y)());t((0,d.y$)(s)),t((0,n.RL)((0,o.B)(s)))}}function p(){return async(e,t)=>{const s=t().team.team,n=await(0,a.getBackendSrv)().get(`/api/teams/${s.id}/members`);e((0,d.n2)(n))}}function u(e){return async(t,s)=>{const n=s().team.team;await(0,a.getBackendSrv)().post(`/api/teams/${n.id}/members`,{userId:e}),t(p())}}function h(e){return async(t,s)=>{const n=s().team.team;await(0,a.getBackendSrv)().delete(`/api/teams/${n.id}/members/${e}`),t(p())}}function g(e,t){return async(s,n)=>{const i=n().team.team;await(0,a.getBackendSrv)().put(`/api/teams/${i.id}`,{name:e,email:t}),s(m(i.id))}}function b(){return async(e,t)=>{const s=t().team.team,n=await(0,a.getBackendSrv)().get(`/api/teams/${s.id}/groups`);e((0,d.iI)(n))}}function f(e){return async(t,s)=>{const n=s().team.team;await(0,a.getBackendSrv)().post(`/api/teams/${n.id}/groups`,{groupId:e}),t(b())}}function x(e){return async(t,s)=>{const n=s().team.team;await(0,a.getBackendSrv)().delete(`/api/teams/${n.id}/groups/${encodeURIComponent(e)}`),t(b())}}function v(e){return async t=>{await(0,a.getBackendSrv)().delete(`/api/teams/${e}`),await i.Vt.fetchUserPermissions(),t(l())}}function y(e){return async t=>{await(0,a.getBackendSrv)().put(`/api/teams/${e.teamId}/members/${e.userId}`,{permission:e.permission}),t(p())}}},"./public/app/features/teams/state/navModel.ts":(e,t,s)=>{s.d(t,{B:()=>l,o:()=>m});var a=s("./packages/grafana-runtime/src/index.ts"),n=s("./public/app/core/components/Upgrade/ProBadge.tsx"),i=s("./public/app/core/config.ts"),r=s("./public/app/core/services/context_srv.ts"),c=s("./public/app/features/admin/utils.ts"),o=s("./public/app/types/index.ts");const d={avatarUrl:"public/img/user_profile.png",id:1,name:"Loading",email:"loading",memberCount:0,permission:o.hw.Member};function l(e){const t={img:e.avatarUrl,id:"team-"+e.id,subTitle:"Manage members and settings",url:"",text:e.name,breadcrumbs:[{title:"Teams",url:"org/teams"}],children:[{active:!1,icon:"sliders-v-alt",id:`team-settings-${e.id}`,text:"Settings",url:`org/teams/edit/${e.id}/settings`}]};(e===d||r.Vt.hasPermissionInMetadata(o.bW.ActionTeamsPermissionsRead,e))&&t.children.unshift({active:!1,icon:"users-alt",id:`team-members-${e.id}`,text:"Members",url:`org/teams/edit/${e.id}/members`});const s={active:!1,icon:"sync",id:`team-groupsync-${e.id}`,text:"External group sync",url:`org/teams/edit/${e.id}/groupsync`},l=e===d;return(0,c.d)()&&(s.tabSuffix=()=>(0,n.Z)({experimentId:l?"":"feature-highlights-team-sync-badge",eventVariant:"trial"})),(0,a.featureEnabled)("teamsync")?(l||r.Vt.hasPermissionInMetadata(o.bW.ActionTeamsPermissionsRead,e))&&t.children.push(s):i.ZP.featureToggles.featureHighlights&&t.children.push(Object.assign({},s,{tabSuffix:()=>(0,n.Z)({experimentId:l?"":"feature-highlights-team-sync-badge"})})),t}function m(e){const t=l(d);let s;for(const a of t.children)if(a.id.indexOf(e)>0){a.active=!0,s=a;break}return{main:t,node:s}}},"./public/app/features/teams/state/selectors.ts":(e,t,s)=>{s.d(t,{JB:()=>r,LK:()=>l,VP:()=>d,YY:()=>m,_u:()=>o,kC:()=>u,uP:()=>n,v7:()=>c,vt:()=>p,xc:()=>i});var a=s("./public/app/types/index.ts");const n=e=>e.searchQuery,i=e=>e.searchMemberQuery,r=e=>e.groups,c=e=>e.teams.length,o=e=>e.searchPage,d=(e,t)=>e.team.id===parseInt(t,10)?e.team:null,l=e=>{const t=RegExp(e.searchQuery,"i");return e.teams.filter((e=>t.test(e.name)))},m=e=>{const t=RegExp(e.searchMemberQuery,"i");return e.members.filter((e=>t.test(e.login)||t.test(e.email)||t.test(e.name)))},p=e=>{const{members:t,signedInUser:s,editorsCanAdmin:n}=e,i=t.find((e=>e.userId===s.id)),r=i?i.permission:a.hw.Member;return u({permission:r,signedInUser:s,editorsCanAdmin:n})},u=e=>{const{permission:t,signedInUser:s,editorsCanAdmin:n}=e,i=s.isGrafanaAdmin||s.orgRole===a.B5.Admin,r=t===a.hw.Admin;return i||r||!n}}}]);
//# sourceMappingURL=TeamList.326a5ae471165dde1160.js.map