"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2508],{"./public/app/features/admin/UserCreatePage.tsx":(e,a,r)=>{r.r(a),r.d(a,{default:()=>m});var s,n,t=r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),d=r("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),i=r("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js"),c=r("./packages/grafana-runtime/src/index.ts"),l=r("./packages/grafana-ui/src/index.ts"),u=r("./public/app/core/components/Page/Page.tsx"),o=r("./public/app/core/selectors/navModel.ts"),p=r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const m=(0,d.connect)((e=>({navModel:(0,o.h)(e.navIndex,"global-users")})))((e=>{let{navModel:a}=e;const r=(0,i.k6)(),d=(0,t.useCallback)((async e=>{await(async e=>(0,c.getBackendSrv)().post("/api/admin/users",e))(e),r.push("/admin/users")}),[r]);return(0,p.jsx)(u.Z,{navModel:a,children:(0,p.jsxs)(u.Z.Contents,{children:[s||(s=(0,p.jsx)("h1",{children:"Add new user"})),(0,p.jsx)(l.Form,{onSubmit:d,validateOn:"onBlur",children:e=>{let{register:a,errors:r}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.Field,{label:"Name",required:!0,invalid:!!r.name,error:r.name?"Name is required":void 0,children:(0,p.jsx)(l.Input,Object.assign({id:"name-input"},a("name",{required:!0})))}),(0,p.jsx)(l.Field,{label:"Email",children:(0,p.jsx)(l.Input,Object.assign({id:"email-input"},a("email")))}),(0,p.jsx)(l.Field,{label:"Username",children:(0,p.jsx)(l.Input,Object.assign({id:"username-input"},a("login")))}),(0,p.jsx)(l.Field,{label:"Password",required:!0,invalid:!!r.password,error:r.password?"Password is required and must contain at least 4 characters":void 0,children:(0,p.jsx)(l.Input,Object.assign({id:"password-input"},a("password",{validate:e=>""!==e.trim()&&e.length>=4}),{type:"password"}))}),n||(n=(0,p.jsx)(l.Button,{type:"submit",children:"Create user"}))]})}})]})})}))}}]);
//# sourceMappingURL=UserCreatePage.326a5ae471165dde1160.js.map