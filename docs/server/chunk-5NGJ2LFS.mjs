import './polyfills.server.mjs';
import{$a as X,Aa as a,Ab as N,Ac as bt,Ba as C,Ea as vt,Ha as A,Ka as H,L as O,La as R,Ma as r,Na as S,P as f,Pa as v,Q as ht,Qb as tt,R as dt,S as c,T as w,Va as p,Vb as et,Wa as g,X as z,Xa as j,Y as pt,Ya as Q,Za as W,_ as mt,ba as G,bb as gt,ca as q,cb as E,cc as Tt,d as m,dc as B,eb as h,ha as M,ka as J,l as U,mc as _t,nb as T,nc as Ct,oc as it,pb as b,qc as k,rb as Y,rc as F,tc as st,w as $,xa as ft,ya as K}from"./chunk-VXMNFCBK.mjs";import{a as d,b as I}from"./chunk-5XUXGTUW.mjs";var L={production:!0,apiUrl:"/auth",userUrl:"/users",stocksUrl:"/stocks"};var yt={authenticateUser(){return`${L.apiUrl}/login`},signUpUser(){return`${L.apiUrl}/signup`},getUser(){return`${L.userUrl}/me`}};var It=(()=>{class s{loaderVisibility$=new m;loaderText;constructor(){}start(t="loading..."){this.loaderText=t,this.loaderVisibility$.next(!0)}stop(){this.loaderVisibility$.next(!1)}static \u0275fac=function(e){return new(e||s)};static \u0275prov=f({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var wt=(()=>{class s{httpClient;appLoaderService;callStackCount=0;httpBackendClient;constructor(t,e,i){this.httpClient=t,this.appLoaderService=i,this.httpBackendClient=new B(e)}getClient(t){return t?this.httpClient:this.httpBackendClient}get(t,e=null,i=null,n=!0){let l=!!i;return l&&this.showLoader(i),this.getClient(n).get(t).pipe(O(u=>{}),$(u=>(l&&this.hideLoader(),U(()=>new Error(u)))))}post(t,e,i=null,n=null,l=!0){let u=n?.length>0,y={headers:i};return this.httpClient.post(t,e,y).pipe(O(_=>{console.log(_,"shivam"),u&&this.hideLoader()}),$(_=>(console.log(_),u&&this.hideLoader(),U(()=>_))))}showLoader(t){this.callStackCount===0&&this.appLoaderService.start(t),this.callStackCount++}hideLoader(){this.appLoaderService.stop(),this.callStackCount===1&&this.appLoaderService.stop(),this.callStackCount>0&&this.callStackCount--}static \u0275fac=function(e){return new(e||s)(c(B),c(Tt),c(It))};static \u0275prov=f({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var xt=["toast-component",""];function Et(s,o){if(s&1){let t=X();p(0,"button",5),E("click",function(){G(t);let i=h();return q(i.remove())}),p(1,"span",6),T(2,"\xD7"),g()()}}function Mt(s,o){if(s&1&&(Q(0),T(1),W()),s&2){let t=h(2);a(),b("[",t.duplicatesCount+1,"]")}}function Nt(s,o){if(s&1&&(p(0,"div"),T(1),H(2,Mt,2,1,"ng-container",4),g()),s&2){let t=h();v(t.options.titleClass),R("aria-label",t.title),a(),b(" ",t.title," "),a(),r("ngIf",t.duplicatesCount)}}function Bt(s,o){if(s&1&&j(0,"div",7),s&2){let t=h();v(t.options.messageClass),r("innerHTML",t.message,K)}}function kt(s,o){if(s&1&&(p(0,"div",8),T(1),g()),s&2){let t=h();v(t.options.messageClass),R("aria-label",t.message),a(),b(" ",t.message," ")}}function Ft(s,o){if(s&1&&(p(0,"div"),j(1,"div",9),g()),s&2){let t=h();a(),S("width",t.width()+"%")}}function Lt(s,o){if(s&1){let t=X();p(0,"button",5),E("click",function(){G(t);let i=h();return q(i.remove())}),p(1,"span",6),T(2,"\xD7"),g()()}}function Vt(s,o){if(s&1&&(Q(0),T(1),W()),s&2){let t=h(2);a(),b("[",t.duplicatesCount+1,"]")}}function Pt(s,o){if(s&1&&(p(0,"div"),T(1),H(2,Vt,2,1,"ng-container",4),g()),s&2){let t=h();v(t.options.titleClass),R("aria-label",t.title),a(),b(" ",t.title," "),a(),r("ngIf",t.duplicatesCount)}}function Zt(s,o){if(s&1&&j(0,"div",7),s&2){let t=h();v(t.options.messageClass),r("innerHTML",t.message,K)}}function Ut(s,o){if(s&1&&(p(0,"div",8),T(1),g()),s&2){let t=h();v(t.options.messageClass),R("aria-label",t.message),a(),b(" ",t.message," ")}}function $t(s,o){if(s&1&&(p(0,"div"),j(1,"div",9),g()),s&2){let t=h();a(),S("width",t.width()+"%")}}var nt=class{_attachedHost;component;viewContainerRef;injector;constructor(o,t){this.component=o,this.injector=t}attach(o,t){return this._attachedHost=o,o.attach(this,t)}detach(){let o=this._attachedHost;if(o)return this._attachedHost=void 0,o.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(o){this._attachedHost=o}},at=class{_attachedPortal;_disposeFn;attach(o,t){return this._attachedPortal=o,this.attachComponentPortal(o,t)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(o){this._disposeFn=o}},rt=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new m;_activate=new m;_manualClose=new m;_resetTimeout=new m;_countDuplicate=new m;constructor(o){this._overlayRef=o}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(o,t){o&&this._resetTimeout.next(),t&&this._countDuplicate.next(++this.duplicatesCount)}},x=class{toastId;config;message;title;toastType;toastRef;_onTap=new m;_onAction=new m;constructor(o,t,e,i,n,l){this.toastId=o,this.config=t,this.message=e,this.title=i,this.toastType=n,this.toastRef=l,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(o){this._onAction.next(o)}onAction(){return this._onAction.asObservable()}},Dt={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},Ot=new dt("ToastConfig"),ct=class extends at{_hostDomElement;_componentFactoryResolver;_appRef;constructor(o,t,e){super(),this._hostDomElement=o,this._componentFactoryResolver=t,this._appRef=e}attachComponentPortal(o,t){let e=this._componentFactoryResolver.resolveComponentFactory(o.component),i;return i=e.create(o.injector),this._appRef.attachView(i.hostView),this.setDisposeFn(()=>{this._appRef.detachView(i.hostView),i.destroy()}),t?this._hostDomElement.insertBefore(this._getComponentRootNode(i),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(i)),i}_getComponentRootNode(o){return o.hostView.rootNodes[0]}},zt=(()=>{class s{_document=w(tt);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=this._document.createElement("div");t.classList.add("overlay-container"),t.setAttribute("aria-live","polite"),this._document.body.appendChild(t),this._containerElement=t}static \u0275fac=function(e){return new(e||s)};static \u0275prov=f({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),lt=class{_portalHost;constructor(o){this._portalHost=o}attach(o,t=!0){return this._portalHost.attach(o,t)}detach(){return this._portalHost.detach()}},Gt=(()=>{class s{_overlayContainer=w(zt);_componentFactoryResolver=w(vt);_appRef=w(N);_document=w(tt);_paneElements=new Map;create(t,e){return this._createOverlayRef(this.getPaneElement(t,e))}getPaneElement(t="",e){return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[t]||(this._paneElements.get(e)[t]=this._createPaneElement(t,e)),this._paneElements.get(e)[t]}_createPaneElement(t,e){let i=this._document.createElement("div");return i.id="toast-container",i.classList.add(t),i.classList.add("toast-container"),e?e.getContainerElement().appendChild(i):this._overlayContainer.getContainerElement().appendChild(i),i}_createPortalHost(t){return new ct(t,this._componentFactoryResolver,this._appRef)}_createOverlayRef(t){return new lt(this._createPortalHost(t))}static \u0275fac=function(e){return new(e||s)};static \u0275prov=f({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),V=(()=>{class s{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(t,e,i,n,l){this.overlay=e,this._injector=i,this.sanitizer=n,this.ngZone=l,this.toastrConfig=d(d({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=d(d({},t.default.iconClasses),t.config.iconClasses))}show(t,e,i={},n=""){return this._preBuildNotification(n,t,e,this.applyConfig(i))}success(t,e,i={}){let n=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(n,t,e,this.applyConfig(i))}error(t,e,i={}){let n=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(n,t,e,this.applyConfig(i))}info(t,e,i={}){let n=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(n,t,e,this.applyConfig(i))}warning(t,e,i={}){let n=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(n,t,e,this.applyConfig(i))}clear(t){for(let e of this.toasts)if(t!==void 0){if(e.toastId===t){e.toastRef.manualClose();return}}else e.toastRef.manualClose()}remove(t){let e=this._findToast(t);if(!e||(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let i=this.toasts[this.currentlyActive].toastRef;i.isInactive()||(this.currentlyActive=this.currentlyActive+1,i.activate())}return!0}findDuplicate(t="",e="",i,n){let{includeTitleDuplicates:l}=this.toastrConfig;for(let u of this.toasts){let y=l&&u.title===t;if((!l||y)&&u.message===e)return u.toastRef.onDuplicate(i,n),u}return null}applyConfig(t={}){return d(d({},this.toastrConfig),t)}_findToast(t){for(let e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===t)return{index:e,activeToast:this.toasts[e]};return null}_preBuildNotification(t,e,i,n){return n.onActivateTick?this.ngZone.run(()=>this._buildNotification(t,e,i,n)):this._buildNotification(t,e,i,n)}_buildNotification(t,e,i,n){if(!n.toastComponent)throw new Error("toastComponent required");let l=this.findDuplicate(i,e,this.toastrConfig.resetTimeoutOnDuplicate&&n.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&i||e)&&this.toastrConfig.preventDuplicates&&l!==null)return l;this.previousToastMessage=e;let u=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(u=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let y=this.overlay.create(n.positionClass,this.overlayContainer);this.index=this.index+1;let _=e;e&&n.enableHtml&&(_=this.sanitizer.sanitize(ft.HTML,e));let D=new rt(y),P=new x(this.index,n,_,i,t,D),At=[{provide:x,useValue:P}],Ht=M.create({providers:At,parent:this._injector}),Rt=new nt(n.toastComponent,Ht),ut=y.attach(Rt,n.newestOnTop);D.componentInstance=ut.instance;let Z={toastId:this.index,title:i||"",message:e||"",toastRef:D,onShown:D.afterActivate(),onHidden:D.afterClosed(),onTap:P.onTap(),onAction:P.onAction(),portal:ut};return u||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{Z.toastRef.activate()})),this.toasts.push(Z),Z}static \u0275fac=function(e){return new(e||s)(c(Ot),c(Gt),c(M),c(_t),c(J))};static \u0275prov=f({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),qt=(()=>{class s{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=A(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,i){this.toastrService=t,this.toastPackage=e,this.ngZone=i,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(n=>{this.duplicatesCount=n}),this.state=A({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(t=>I(d({},t),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(i=>100-i),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(t=>I(d({},t),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(t=>I(d({},t),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(t),e)):this.timeout=setTimeout(()=>t(),e)}outsideInterval(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(t),e)):this.intervalId=setInterval(()=>t(),e)}runInsideAngular(t){this.ngZone?this.ngZone.run(()=>t()):t()}static \u0275fac=function(e){return new(e||s)(C(V),C(x),C(J))};static \u0275cmp=z({type:s,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(e,i){e&1&&E("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),e&2&&(gt("@flyInOut",i._state),v(i.toastClasses),S("display",i.displayStyle))},standalone:!0,features:[Y],attrs:xt,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,i){e&1&&H(0,Et,3,0,"button",0)(1,Nt,3,5,"div",1)(2,Bt,1,3,"div",2)(3,kt,2,4,"div",3)(4,Ft,2,2,"div",4),e&2&&(r("ngIf",i.options.closeButton),a(),r("ngIf",i.title),a(),r("ngIf",i.message&&i.options.enableHtml),a(),r("ngIf",i.message&&!i.options.enableHtml),a(),r("ngIf",i.options.progressBar))},dependencies:[et],encapsulation:2,data:{animation:[Ct("flyInOut",[F("inactive",k({opacity:0})),F("active",k({opacity:1})),F("removed",k({opacity:0})),st("inactive => active",it("{{ easeTime }}ms {{ easing }}")),st("active => removed",it("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return s})(),Jt=I(d({},Dt),{toastComponent:qt}),Kt=(s={})=>mt([{provide:Ot,useValue:{default:Jt,config:s}}]),be=(()=>{class s{static forRoot(t={}){return{ngModule:s,providers:[Kt(t)]}}static \u0275fac=function(e){return new(e||s)};static \u0275mod=pt({type:s});static \u0275inj=ht({})}return s})();var Qt=(()=>{class s{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=A(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=A("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,i){this.toastrService=t,this.toastPackage=e,this.appRef=i,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(n=>{this.duplicatesCount=n})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(i=>100-i),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(e){return new(e||s)(C(V),C(x),C(N))};static \u0275cmp=z({type:s,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(e,i){e&1&&E("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),e&2&&(v(i.toastClasses),S("display",i.displayStyle))},standalone:!0,features:[Y],attrs:xt,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,i){e&1&&H(0,Lt,3,0,"button",0)(1,Pt,3,5,"div",1)(2,Zt,1,3,"div",2)(3,Ut,2,4,"div",3)(4,$t,2,2,"div",4),e&2&&(r("ngIf",i.options.closeButton),a(),r("ngIf",i.title),a(),r("ngIf",i.message&&i.options.enableHtml),a(),r("ngIf",i.message&&!i.options.enableHtml),a(),r("ngIf",i.options.progressBar))},dependencies:[et],encapsulation:2,changeDetection:0})}return s})(),ye=I(d({},Dt),{toastComponent:Qt});var Oe=(()=>{class s{communicationService;toastr;router;loaderText="...Loading";constructor(t,e,i){this.communicationService=t,this.toastr=e,this.router=i}authenticate(t){let e={"Content-Type":"application/json"};return this.communicationService.post(yt.authenticateUser(),t,e,this.loaderText).pipe(O(i=>{i&&localStorage.setItem("token",i?.token)}))}isLoggedIn(){return localStorage.getItem("token").length>0}logout(){localStorage.clear(),this.router.navigate(["/auth/login"])}static \u0275fac=function(e){return new(e||s)(c(wt),c(V),c(bt))};static \u0275prov=f({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();export{L as a,yt as b,It as c,wt as d,V as e,be as f,Oe as g};
