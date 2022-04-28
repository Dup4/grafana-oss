"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3168],{"./public/app/angular/AngularLocationWrapper.ts":(t,e,a)=>{a.d(e,{O:()=>n});var s=a("./packages/grafana-data/src/index.ts"),r=a("./packages/grafana-runtime/src/index.ts");const i={http:80,https:443,ftp:21};class n{constructor(){this.absUrl=this.wrapInDeprecationWarning(this.absUrl),this.hash=this.wrapInDeprecationWarning(this.hash),this.host=this.wrapInDeprecationWarning(this.host),this.path=this.wrapInDeprecationWarning(this.path),this.port=this.wrapInDeprecationWarning(this.port,"window.location"),this.protocol=this.wrapInDeprecationWarning(this.protocol,"window.location"),this.replace=this.wrapInDeprecationWarning(this.replace),this.search=this.wrapInDeprecationWarning(this.search),this.state=this.wrapInDeprecationWarning(this.state),this.url=this.wrapInDeprecationWarning(this.url)}wrapInDeprecationWarning(t,e){let a=this;return function(){return(0,s.deprecationWarning)("$location",t.name,e||"locationService"),t.apply(a,arguments)}}absUrl(){return`${window.location.origin}${this.url()}`}hash(t){if((0,r.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: hash"),t)throw new Error("AngularLocationWrapper method not implemented.");return r.locationService.getLocation().hash.slice(1)}host(){return new URL(window.location.href).hostname}path(t){(0,r.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: path");const e=r.locationService.getLocation();if(null!=t){let a=String(t);a=a.startsWith("/")?a:`/${a}`;const s=new URL(`${window.location.origin}${a}`);return r.locationService.push({pathname:s.pathname,search:s.search.length>0?s.search:e.search,hash:s.hash.length>0?s.hash:e.hash}),this}return null===t?(r.locationService.push("/"),this):e.pathname}port(){const t=new URL(window.location.href);return parseInt(t.port,10)||i[t.protocol]||null}protocol(){return new URL(window.location.href).protocol.slice(0,-1)}replace(){throw new Error("AngularLocationWrapper method not implemented.")}search(t,e){if((0,r.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: search"),!t)return r.locationService.getSearchObject();if(t&&arguments.length>1)return r.locationService.partial({[t]:e}),this;if(t){let e;e="object"==typeof t?Object.assign({},t):(0,r.locationSearchToObject)(t);for(const t of Object.keys(e))null!==e[t]&&void 0!==e[t]||delete e[t];const a=s.urlUtil.renderUrl(r.locationService.getLocation().pathname,e);r.locationService.push(a)}return this}state(t){throw(0,r.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: state"),new Error("AngularLocationWrapper method not implemented.")}url(t){if((0,r.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: url"),void 0!==t)return t.startsWith("#")?r.locationService.push(Object.assign({},r.locationService.getLocation(),{hash:t})):t.startsWith("?")?r.locationService.push(Object.assign({},r.locationService.getLocation(),{search:t})):0===t.trim().length?r.locationService.push("/"):r.locationService.push(t),r.locationService;const e=r.locationService.getLocation();return`${e.pathname}${e.search}${e.hash}`}}},"./public/app/angular/panel/metrics_panel_ctrl.ts":(t,e,a)=>{a.d(e,{k:()=>l});var s=a("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),r=a("./packages/grafana-data/src/index.ts"),i=a("./public/app/angular/panel/panel_ctrl.ts"),n=a("./public/app/features/dashboard/utils/panel.ts");function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class l extends i.q{constructor(t,e){super(t,e),o(this,"contextSrv",void 0),o(this,"datasourceSrv",void 0),o(this,"timeSrv",void 0),o(this,"templateSrv",void 0),o(this,"interval",void 0),o(this,"intervalMs",void 0),o(this,"resolution",void 0),o(this,"timeInfo",void 0),o(this,"skipDataOnInit",!1),o(this,"dataList",[]),o(this,"querySubscription",void 0),o(this,"useDataFrames",!1),o(this,"panelData",void 0),o(this,"panelDataObserver",{next:t=>{if(this.panelData=t,t.state===r.LoadingState.Error&&(this.loading=!1,this.processDataError(t.error)),t.state===r.LoadingState.Loading)return this.loading=!0,void this.angularDirtyCheck();if(t.request){const{timeInfo:e}=t.request;e&&(this.timeInfo=e)}if(t.timeRange&&(this.range=t.timeRange),this.useDataFrames)this.handleDataFrames(t.series);else{const e=t.series.map((t=>(0,r.toLegacyResponseData)(t)));this.handleQueryResult({data:e})}this.angularDirtyCheck()}}),this.contextSrv=e.get("contextSrv"),this.datasourceSrv=e.get("datasourceSrv"),this.timeSrv=e.get("timeSrv"),this.templateSrv=e.get("templateSrv"),this.panel.datasource=this.panel.datasource||null,this.events.on(r.PanelEvents.refresh,this.onMetricsPanelRefresh.bind(this)),this.events.on(r.PanelEvents.panelTeardown,this.onPanelTearDown.bind(this)),this.events.on(r.PanelEvents.componentDidMount,this.onMetricsPanelMounted.bind(this))}onMetricsPanelMounted(){const t=this.panel.getQueryRunner();this.querySubscription=t.getData({withTransforms:!0,withFieldConfig:!0}).subscribe(this.panelDataObserver)}onPanelTearDown(){this.querySubscription&&(this.querySubscription.unsubscribe(),this.querySubscription=null)}onMetricsPanelRefresh(){if(!this.otherPanelInFullscreenMode()){if(this.panel.snapshotData){this.updateTimeRange();let t=this.panel.snapshotData;return(0,s.isArray)(t)||(t=t.data),this.panelData={state:r.LoadingState.Done,series:t,timeRange:this.range},this.$timeout((()=>{this.events.emit(r.PanelEvents.dataSnapshotLoad,t)}))}return delete this.error,this.loading=!0,this.datasourceSrv.get(this.panel.datasource,this.panel.scopedVars).then(this.issueQueries.bind(this)).catch((t=>{this.processDataError(t)}))}}processDataError(t){t.cancelled?console.log("Panel request cancelled",t):(this.error=t.message||"Request Error",t.data&&(t.data.message?this.error=t.data.message:t.data.error&&(this.error=t.data.error)),this.angularDirtyCheck())}angularDirtyCheck(){this.$scope.$root.$$phase||this.$scope.$digest()}updateTimeRange(t){this.datasource=t||this.datasource,this.range=this.timeSrv.timeRange();const e=(0,n.W1)(this.panel,this.range);this.timeInfo=e.timeInfo,this.range=e.timeRange}issueQueries(t){this.updateTimeRange(t),this.datasource=t;const e=this.panel;return e.getQueryRunner().run({datasource:e.datasource,queries:e.targets,panelId:e.id,dashboardId:this.dashboard.id,timezone:this.dashboard.getTimezone(),timeInfo:this.timeInfo,timeRange:this.range,maxDataPoints:e.maxDataPoints||this.width,minInterval:e.interval,scopedVars:e.scopedVars,cacheTimeout:e.cacheTimeout,transformations:e.transformations})}handleDataFrames(t){this.loading=!1,this.dashboard&&this.dashboard.snapshot&&(this.panel.snapshotData=t.map((t=>(0,r.toDataFrameDTO)(t))));try{this.events.emit(r.PanelEvents.dataFramesReceived,t)}catch(t){this.processDataError(t)}}handleQueryResult(t){this.loading=!1,this.dashboard.snapshot&&(this.panel.snapshotData=t.data),t&&t.data||(console.log("Data source query result invalid, missing data field:",t),t={data:[]});try{this.events.emit(r.PanelEvents.dataReceived,t.data)}catch(t){this.processDataError(t)}}}},"./public/app/angular/panel/panel_ctrl.ts":(t,e,a)=>{a.d(e,{q:()=>h});var s=a("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),r=a("./packages/grafana-data/src/index.ts"),i=a("./public/app/angular/AngularLocationWrapper.ts"),n=a("./public/app/core/config.ts"),o=a("./public/app/core/core.ts");function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class h{constructor(t,e){var a,s;l(this,"panel",void 0),l(this,"error",void 0),l(this,"pluginName",""),l(this,"pluginId",""),l(this,"editorTabs",void 0),l(this,"$scope",void 0),l(this,"$injector",void 0),l(this,"$timeout",void 0),l(this,"editModeInitiated",!1),l(this,"containerHeight",void 0),l(this,"events",void 0),l(this,"loading",!1),l(this,"timing",void 0),l(this,"$location",void 0),l(this,"onPluginTypeChange",(t=>{})),this.panel=null!==(a=this.panel)&&void 0!==a?a:t.$parent.panel,this.dashboard=null!==(s=this.dashboard)&&void 0!==s?s:t.$parent.dashboard,this.$injector=e,this.$scope=t,this.$timeout=e.get("$timeout"),this.editorTabs=[],this.$location=new i.O,this.events=new r.EventBusSrv,this.timing={};const o=n.ZP.panels[this.panel.type];o&&(this.pluginId=o.id,this.pluginName=o.name),t.$on(r.PanelEvents.componentDidMount.name,(()=>this.panelDidMount()))}panelDidMount(){this.events.emit(r.PanelEvents.componentDidMount),this.events.emit(r.PanelEvents.initialized),this.dashboard.panelInitialized(this.panel)}renderingCompleted(){o.rv.renderingCompleted()}refresh(){this.panel.refresh()}publishAppEvent(t,e){this.$scope.$root.appEvent(t,e)}initEditMode(){this.editModeInitiated||(this.editModeInitiated=!0,this.events.emit(r.PanelEvents.editModeInitialized))}addEditorTab(t,e,a,r){const i={title:t,directiveFn:e,icon:r};(0,s.isString)(e)&&(i.directiveFn=()=>({templateUrl:e})),a?this.editorTabs.splice(a,0,i):this.editorTabs.push(i)}getExtendedMenu(){const t=[];return this.events.emit(r.PanelEvents.initPanelActions,t),t}async getAdditionalMenuItems(){return[]}otherPanelInFullscreenMode(){return this.dashboard.otherPanelInFullscreen(this.panel)}render(t){this.events.emit(r.PanelEvents.render,t)}}},"./public/app/angular/panel/query_ctrl.ts":(t,e,a)=>{a.d(e,{G:()=>i});var s=a("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class i{constructor(t,e){var a,i,n,o,l;r(this,"target",void 0),r(this,"datasource",void 0),r(this,"panelCtrl",void 0),r(this,"panel",void 0),r(this,"hasRawMode",void 0),r(this,"error",void 0),r(this,"isLastQuery",void 0),this.$scope=t,this.$injector=e,this.$scope=t,this.$injector=e,this.panelCtrl=null!==(a=this.panelCtrl)&&void 0!==a?a:t.ctrl.panelCtrl,this.target=null!==(i=this.target)&&void 0!==i?i:t.ctrl.target,this.datasource=null!==(n=this.datasource)&&void 0!==n?n:t.ctrl.datasource,this.panel=null!==(o=null===(l=this.panelCtrl)||void 0===l?void 0:l.panel)&&void 0!==o?o:t.ctrl.panelCtrl.panel,this.isLastQuery=(0,s.indexOf)(this.panel.targets,this.target)===this.panel.targets.length-1}refresh(){this.panelCtrl.refresh()}}},"./public/app/plugins/datasource/opentsdb/module.ts":(t,e,a)=>{a.r(e),a.d(e,{plugin:()=>C});var s,r=a("./packages/grafana-data/src/index.ts"),i=(a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),a("./packages/grafana-ui/src/index.ts")),n=a("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts"),o=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const{Select:l,Input:h}=i.LegacyForms,c=[{label:"<=2.1",value:1},{label:"==2.2",value:2},{label:"==2.3",value:3}],p=[{label:"second",value:1},{label:"millisecond",value:2}],u=t=>{var e,a,r;const{onChange:u,value:m}=t,v=(0,n.L)();return(0,o.jsxs)(o.Fragment,{children:[s||(s=(0,o.jsx)("h5",{children:"OpenTSDB settings"})),(0,o.jsxs)("div",{className:"gf-form",children:[(0,o.jsx)(i.InlineFormLabel,{width:7,htmlFor:`select-version-${v}`,children:"Version"}),(0,o.jsx)(l,{inputId:`select-version-${v}`,menuShouldPortal:!0,options:c,value:null!==(e=c.find((t=>t.value===m.jsonData.tsdbVersion)))&&void 0!==e?e:c[0],onChange:d("tsdbVersion",m,u)})]}),(0,o.jsxs)("div",{className:"gf-form",children:[(0,o.jsx)(i.InlineFormLabel,{width:7,htmlFor:`select-resolution-${v}`,children:"Resolution"}),(0,o.jsx)(l,{inputId:`select-resolution-${v}`,menuShouldPortal:!0,options:p,value:null!==(a=p.find((t=>t.value===m.jsonData.tsdbResolution)))&&void 0!==a?a:p[0],onChange:d("tsdbResolution",m,u)})]}),(0,o.jsxs)("div",{className:"gf-form",children:[(0,o.jsx)(i.InlineFormLabel,{width:7,htmlFor:`lookup-input-${v}`,children:"Lookup limit"}),(0,o.jsx)(h,{id:`lookup-input-${v}`,type:"number",value:null!==(r=m.jsonData.lookupLimit)&&void 0!==r?r:1e3,onChange:g("lookupLimit",m,u)})]})]})},d=(t,e,a)=>s=>{a(Object.assign({},e,{jsonData:Object.assign({},e.jsonData,{[t]:s.value})}))},g=(t,e,a)=>s=>{a(Object.assign({},e,{jsonData:Object.assign({},e.jsonData,{[t]:s.currentTarget.value})}))};var m=a("../../opt/drone/yarncache/angular-npm-1.8.2-307000482b-35ea81a23b.zip/node_modules/angular/index.js"),v=a.n(m),f=a("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),b=a("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js"),y=a("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js"),T=a("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js"),w=a("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js"),S=a("./packages/grafana-runtime/src/index.ts"),D=a("./public/app/features/templating/template_srv.ts");function j(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class x extends r.DataSourceApi{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,D.J)();super(t),j(this,"type",void 0),j(this,"url",void 0),j(this,"name",void 0),j(this,"withCredentials",void 0),j(this,"basicAuth",void 0),j(this,"tsdbVersion",void 0),j(this,"tsdbResolution",void 0),j(this,"lookupLimit",void 0),j(this,"tagKeys",void 0),j(this,"aggregatorsPromise",void 0),j(this,"filterTypesPromise",void 0),this.templateSrv=e,this.templateSrv=e,this.type="opentsdb",this.url=t.url,this.name=t.name,this.withCredentials=t.withCredentials,this.basicAuth=t.basicAuth,t.jsonData=t.jsonData||{},this.tsdbVersion=t.jsonData.tsdbVersion||1,this.tsdbResolution=t.jsonData.tsdbResolution||1,this.lookupLimit=t.jsonData.lookupLimit||1e3,this.tagKeys={},this.aggregatorsPromise=null,this.filterTypesPromise=null}query(t){const e=this.convertToTSDBTime(t.range.raw.from,!1,t.timezone),a=this.convertToTSDBTime(t.range.raw.to,!0,t.timezone),s=[];(0,f.each)(t.targets,(e=>{e.metric&&s.push(this.convertTargetToQuery(e,t,this.tsdbVersion))}));const r=(0,f.compact)(s);if((0,f.isEmpty)(r))return(0,b.of)({data:[]});const i={};return(0,f.each)(r,(t=>{t.filters&&t.filters.length>0?(0,f.each)(t.filters,(t=>{i[t.tagk]=!0})):(0,f.each)(t.tags,((t,e)=>{i[e]=!0}))})),t.targets=(0,f.filter)(t.targets,(t=>!0!==t.hide)),this.performTimeSeriesQuery(r,e,a).pipe((0,T.K)((t=>{var e,a;throw(null==t||null===(e=t.data)||void 0===e||null===(a=e.error)||void 0===a?void 0:a.message)||"Error performing time series query."})),(0,w.U)((e=>{const a=this.mapMetricsToTargets(e.data,t,this.tsdbVersion);return{data:(0,f.map)(e.data,((e,s)=>(-1===(s=a[s])&&(s=0),this._saveTagKeys(e),this.transformMetricData(e,i,t.targets[s],t,this.tsdbResolution))))}})))}annotationQuery(t){const e=this.convertToTSDBTime(t.rangeRaw.from,!1,t.timezone),a=this.convertToTSDBTime(t.rangeRaw.to,!0,t.timezone),s=[],r=[];s.push({aggregator:"sum",metric:t.annotation.target});const i=(0,f.compact)(s);return(0,y.n)(this.performTimeSeriesQuery(i,e,a).pipe((0,w.U)((e=>{if(e.data[0]){let a=e.data[0].annotations;t.annotation.isGlobal&&(a=e.data[0].globalAnnotations),a&&(0,f.each)(a,(e=>{const a={text:e.description,time:1e3*Math.floor(e.startTime),annotation:t.annotation};r.push(a)}))}return r}))))}targetContainsTemplate(t){if(t.filters&&t.filters.length>0)for(let e=0;e<t.filters.length;e++)if(this.templateSrv.containsTemplate(t.filters[e].filter))return!0;if(t.tags&&Object.keys(t.tags).length>0)for(const e in t.tags)if(this.templateSrv.containsTemplate(t.tags[e]))return!0;return!1}performTimeSeriesQuery(t,e,a){let s=!1;2===this.tsdbResolution&&(s=!0);const r={start:e,queries:t,msResolution:s,globalAnnotations:!0};3===this.tsdbVersion&&(r.showQuery=!0),a&&(r.end=a);const i={method:"POST",url:this.url+"/api/query",data:r};return this._addCredentialOptions(i),(0,S.getBackendSrv)().fetch(i)}suggestTagKeys(t){return Promise.resolve(this.tagKeys[t]||[])}_saveTagKeys(t){const e=Object.keys(t.tags);(0,f.each)(t.aggregateTags,(t=>{e.push(t)})),this.tagKeys[t.metric]=e}_performSuggestQuery(t,e){return this._get("/api/suggest",{type:e,q:t,max:this.lookupLimit}).pipe((0,w.U)((t=>t.data)))}_performMetricKeyValueLookup(t,e){if(!t||!e)return(0,b.of)([]);const a=e.split(",").map((t=>t.trim())),s=a[0];let r=s+"=*";a.length>1&&(r+=","+a.splice(1).join(","));const i=t+"{"+r+"}";return this._get("/api/search/lookup",{m:i,limit:this.lookupLimit}).pipe((0,w.U)((t=>{t=t.data.results;const e=[];return(0,f.each)(t,(t=>{-1===e.indexOf(t.tags[s])&&e.push(t.tags[s])})),e})))}_performMetricKeyLookup(t){return t?this._get("/api/search/lookup",{m:t,limit:1e3}).pipe((0,w.U)((t=>{t=t.data.results;const e=[];return(0,f.each)(t,(t=>{(0,f.each)(t.tags,((t,a)=>{-1===e.indexOf(a)&&e.push(a)}))})),e}))):(0,b.of)([])}_get(t,e){const a={method:"GET",url:this.url+t,params:e};return this._addCredentialOptions(a),(0,S.getBackendSrv)().fetch(a)}_addCredentialOptions(t){(this.basicAuth||this.withCredentials)&&(t.withCredentials=!0),this.basicAuth&&(t.headers={Authorization:this.basicAuth})}metricFindQuery(t){if(!t)return Promise.resolve([]);let e;try{e=this.templateSrv.replace(t,{},"distributed")}catch(t){return Promise.reject(t)}const a=t=>(0,f.map)(t,(t=>({text:t}))),s=e.match(/metrics\((.*)\)/);if(s)return(0,y.n)(this._performSuggestQuery(s[1],"metrics").pipe((0,w.U)(a)));const r=e.match(/tag_names\((.*)\)/);if(r)return(0,y.n)(this._performMetricKeyLookup(r[1]).pipe((0,w.U)(a)));const i=e.match(/tag_values\((.*?),\s?(.*)\)/);if(i)return(0,y.n)(this._performMetricKeyValueLookup(i[1],i[2]).pipe((0,w.U)(a)));const n=e.match(/suggest_tagk\((.*)\)/);if(n)return(0,y.n)(this._performSuggestQuery(n[1],"tagk").pipe((0,w.U)(a)));const o=e.match(/suggest_tagv\((.*)\)/);return o?(0,y.n)(this._performSuggestQuery(o[1],"tagv").pipe((0,w.U)(a))):Promise.resolve([])}testDatasource(){return(0,y.n)(this._performSuggestQuery("cpu","metrics").pipe((0,w.U)((()=>({status:"success",message:"Data source is working"})))))}getAggregators(){return this.aggregatorsPromise||(this.aggregatorsPromise=(0,y.n)(this._get("/api/aggregators").pipe((0,w.U)((t=>t.data&&(0,f.isArray)(t.data)?t.data.sort():[]))))),this.aggregatorsPromise}getFilterTypes(){return this.filterTypesPromise||(this.filterTypesPromise=(0,y.n)(this._get("/api/config/filters").pipe((0,w.U)((t=>t.data?Object.keys(t.data).sort():[]))))),this.filterTypesPromise}transformMetricData(t,e,a,s,r){const i=this.createMetricLabel(t,a,e,s),n=[];return(0,f.each)(t.dps,((t,e)=>{2===r?n.push([t,1*e]):n.push([t,1e3*e])})),{target:i,datapoints:n}}createMetricLabel(t,e,a,s){if(e.alias){const a=(0,f.clone)(s.scopedVars||{});return(0,f.each)(t.tags,((t,e)=>{a["tag_"+e]={value:t}})),this.templateSrv.replace(e.alias,a)}let r=t.metric;const i=[];return(0,f.isEmpty)(t.tags)||(0,f.each)((0,f.toPairs)(t.tags),(t=>{(0,f.has)(a,t[0])&&i.push(t[0]+"="+t[1])})),(0,f.isEmpty)(i)||(r+="{"+i.join(", ")+"}"),r}convertTargetToQuery(t,e,a){if(!t.metric||t.hide)return null;const s={metric:this.templateSrv.replace(t.metric,e.scopedVars,"pipe"),aggregator:"avg"};if(t.aggregator&&(s.aggregator=this.templateSrv.replace(t.aggregator)),t.shouldComputeRate&&(s.rate=!0,s.rateOptions={counter:!!t.isCounter},t.counterMax&&t.counterMax.length&&(s.rateOptions.counterMax=parseInt(t.counterMax,10)),t.counterResetValue&&t.counterResetValue.length&&(s.rateOptions.resetValue=parseInt(t.counterResetValue,10)),a>=2&&(s.rateOptions.dropResets=!(s.rateOptions.counterMax||s.rateOptions.ResetValue&&0!==s.rateOptions.ResetValue))),!t.disableDownsampling){let a=this.templateSrv.replace(t.downsampleInterval||e.interval);a.match(/\.[0-9]+s/)&&(a=1e3*parseFloat(a)+"ms"),s.downsample=a+"-"+t.downsampleAggregator,t.downsampleFillPolicy&&"none"!==t.downsampleFillPolicy&&(s.downsample+="-"+t.downsampleFillPolicy)}if(t.filters&&t.filters.length>0){if(s.filters=v().copy(t.filters),s.filters)for(const t in s.filters)s.filters[t].filter=this.templateSrv.replace(s.filters[t].filter,e.scopedVars,"pipe")}else if(s.tags=v().copy(t.tags),s.tags)for(const t in s.tags)s.tags[t]=this.templateSrv.replace(s.tags[t],e.scopedVars,"pipe");return t.explicitTags&&(s.explicitTags=!0),s}mapMetricsToTargets(t,e,a){let s,r;return(0,f.map)(t,(t=>3===a?t.query.index:(0,f.findIndex)(e.targets,(a=>a.filters&&a.filters.length>0?a.metric===t.metric:a.metric===t.metric&&(0,f.every)(a.tags,((a,i)=>(s=this.templateSrv.replace(a,e.scopedVars,"pipe"),r=s.split("|"),(0,f.includes)(r,t.tags[i])||"*"===s)))))))}interpolateVariablesInQueries(t,e){return t.length?t.map((t=>Object.assign({},t,{metric:this.templateSrv.replace(t.metric,e)}))):t}convertToTSDBTime(t,e,a){return"now"===t?null:(t=r.dateMath.parse(t,e,a)).valueOf()}}var P,F,_,k=a("./public/app/plugins/sdk.ts");function M(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class L extends k.QueryCtrl{constructor(t,e){super(t,e),M(this,"aggregators",void 0),M(this,"fillPolicies",void 0),M(this,"filterTypes",void 0),M(this,"tsdbVersion",void 0),M(this,"aggregator",void 0),M(this,"downsampleInterval",void 0),M(this,"downsampleAggregator",void 0),M(this,"downsampleFillPolicy",void 0),M(this,"errors",void 0),M(this,"suggestMetrics",void 0),M(this,"suggestTagKeys",void 0),M(this,"suggestTagValues",void 0),M(this,"addTagMode",!1),M(this,"addFilterMode",!1),this.errors=this.validateTarget(),this.aggregators=["avg","sum","min","max","dev","zimsum","mimmin","mimmax"],this.fillPolicies=["none","nan","null","zero"],this.filterTypes=["wildcard","iliteral_or","not_iliteral_or","not_literal_or","iwildcard","literal_or","regexp"],this.tsdbVersion=this.datasource.tsdbVersion,this.target.aggregator||(this.target.aggregator="sum"),this.target.downsampleAggregator||(this.target.downsampleAggregator="avg"),this.target.downsampleFillPolicy||(this.target.downsampleFillPolicy="none"),this.datasource.getAggregators().then((t=>{0!==t.length&&(this.aggregators=t)})),this.datasource.getFilterTypes().then((t=>{0!==t.length&&(this.filterTypes=t)})),this.suggestMetrics=(t,e)=>{this.datasource.metricFindQuery("metrics("+t+")").then(this.getTextValues).then(e)},this.suggestTagKeys=(t,e)=>{this.datasource.suggestTagKeys(this.target.metric).then(e)},this.suggestTagValues=(t,e)=>{this.datasource.metricFindQuery("suggest_tagv("+t+")").then(this.getTextValues).then(e)}}targetBlur(){this.errors=this.validateTarget(),this.refresh()}getTextValues(t){return(0,f.map)(t,(t=>r.textUtil.escapeHtml(t.text)))}addTag(){this.target.filters&&this.target.filters.length>0&&(this.errors.tags="Please remove filters to use tags, tags and filters are mutually exclusive."),this.addTagMode?(this.target.tags||(this.target.tags={}),this.errors=this.validateTarget(),this.errors.tags||(this.target.tags[this.target.currentTagKey]=this.target.currentTagValue,this.target.currentTagKey="",this.target.currentTagValue="",this.targetBlur()),this.addTagMode=!1):this.addTagMode=!0}removeTag(t){delete this.target.tags[t],this.targetBlur()}editTag(t,e){this.removeTag(t),this.target.currentTagKey=t,this.target.currentTagValue=e,this.addTag()}closeAddTagMode(){this.addTagMode=!1}addFilter(){if(this.target.tags&&(0,f.size)(this.target.tags)>0&&(this.errors.filters="Please remove tags to use filters, tags and filters are mutually exclusive."),this.addFilterMode){if(this.target.filters||(this.target.filters=[]),this.target.currentFilterType||(this.target.currentFilterType="iliteral_or"),this.target.currentFilterGroupBy||(this.target.currentFilterGroupBy=!1),this.errors=this.validateTarget(),!this.errors.filters){const t={type:this.target.currentFilterType,tagk:this.target.currentFilterKey,filter:this.target.currentFilterValue,groupBy:this.target.currentFilterGroupBy};this.target.filters.push(t),this.target.currentFilterType="literal_or",this.target.currentFilterKey="",this.target.currentFilterValue="",this.target.currentFilterGroupBy=!1,this.targetBlur()}this.addFilterMode=!1}else this.addFilterMode=!0}removeFilter(t){this.target.filters.splice(t,1),this.targetBlur()}editFilter(t,e){this.removeFilter(e),this.target.currentFilterKey=t.tagk,this.target.currentFilterValue=t.filter,this.target.currentFilterType=t.type,this.target.currentFilterGroupBy=t.groupBy,this.addFilter()}closeAddFilterMode(){this.addFilterMode=!1}validateTarget(){const t={};if(this.target.shouldDownsample)try{this.target.downsampleInterval?r.rangeUtil.describeInterval(this.target.downsampleInterval):t.downsampleInterval="You must supply a downsample interval (e.g. '1m' or '1h')."}catch(e){t.downsampleInterval=e.message}return this.target.tags&&(0,f.has)(this.target.tags,this.target.currentTagKey)&&(t.tags="Duplicate tag key '"+this.target.currentTagKey+"'."),t}}L.$inject=["$scope","$injector"],M(L,"templateUrl","partials/query.editor.html");class I{}_="partials/annotations.editor.html",(F="templateUrl")in(P=I)?Object.defineProperty(P,F,{value:_,enumerable:!0,configurable:!0,writable:!0}):P[F]=_;const C=new r.DataSourcePlugin(x).setQueryCtrl(L).setConfigEditor((t=>{const{options:e,onOptionsChange:a}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.DataSourceHttpSettings,{defaultUrl:"http://localhost:4242",dataSourceConfig:e,onChange:a}),(0,o.jsx)(u,{value:e,onChange:a})]})})).setAnnotationQueryCtrl(I)},"./public/app/plugins/sdk.ts":(t,e,a)=>{a.r(e),a.d(e,{MetricsPanelCtrl:()=>h,PanelCtrl:()=>l,QueryCtrl:()=>c,loadPluginCss:()=>r.loadPluginCss});var s=a("./packages/grafana-data/src/index.ts"),r=a("./packages/grafana-runtime/src/index.ts"),i=a("./public/app/angular/panel/metrics_panel_ctrl.ts"),n=a("./public/app/angular/panel/panel_ctrl.ts"),o=a("./public/app/angular/panel/query_ctrl.ts");const l=(0,s.makeClassES5Compatible)(n.q),h=(0,s.makeClassES5Compatible)(i.k),c=(0,s.makeClassES5Compatible)(o.G)}}]);
//# sourceMappingURL=opentsdbPlugin.326a5ae471165dde1160.js.map