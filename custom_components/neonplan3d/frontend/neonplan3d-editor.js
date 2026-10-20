var ui=globalThis,pi=ui.ShadowRoot&&(ui.ShadyCSS===void 0||ui.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xo=Symbol(),lr=new WeakMap,Wn=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==xo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(pi&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=lr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&lr.set(t,e))}return e}toString(){return this.cssText}},dr=r=>new Wn(typeof r=="string"?r:r+"",void 0,xo),lt=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new Wn(t,r,xo)},cr=(r,e)=>{if(pi)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=ui.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},So=pi?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return dr(t)})(r):r;var{is:Fc,defineProperty:Ic,getOwnPropertyDescriptor:Rc,getOwnPropertyNames:Tc,getOwnPropertySymbols:Dc,getPrototypeOf:Wc}=Object,fi=globalThis,hr=fi.trustedTypes,Hc=hr?hr.emptyScript:"",Lc=fi.reactiveElementPolyfillSupport,Hn=(r,e)=>r,Mo={toAttribute(r,e){switch(e){case Boolean:r=r?Hc:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},pr=(r,e)=>!Fc(r,e),ur={attribute:!0,type:String,converter:Mo,reflect:!1,useDefault:!1,hasChanged:pr};Symbol.metadata??=Symbol("metadata"),fi.litPropertyMetadata??=new WeakMap;var mt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ur){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Ic(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:o}=Rc(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);o?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ur}static _$Ei(){if(this.hasOwnProperty(Hn("elementProperties")))return;let e=Wc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Hn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Hn("properties"))){let t=this.properties,n=[...Tc(t),...Dc(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(So(i))}else e!==void 0&&t.push(So(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return cr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:Mo).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Mo;this._$Em=i;let a=s.fromAttribute(t,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,o){if(e!==void 0){let s=this.constructor;if(i===!1&&(o=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??pr)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,o]of n){let{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},mt[Hn("elementProperties")]=new Map,mt[Hn("finalized")]=new Map,Lc?.({ReactiveElement:mt}),(fi.reactiveElementVersions??=[]).push("2.1.2");var zo=globalThis,fr=r=>r,mi=zo.trustedTypes,mr=mi?mi.createPolicy("lit-html",{createHTML:r=>r}):void 0,Eo="$lit$",gt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ao="?"+gt,Oc=`<${Ao}>`,Ct=document,On=()=>Ct.createComment(""),Vn=r=>r===null||typeof r!="object"&&typeof r!="function",Fo=Array.isArray,yr=r=>Fo(r)||typeof r?.[Symbol.iterator]=="function",Po=`[ 	
\f\r]`,Ln=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gr=/-->/g,_r=/>/g,Vt=RegExp(`>|${Po}(?:([^\\s"'>=/]+)(${Po}*=${Po}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),br=/'/g,vr=/"/g,kr=/^(?:script|style|textarea|title)$/i,Io=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=Io(1),T=Io(2),dp=Io(3),_t=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),wr=new WeakMap,Bt=Ct.createTreeWalker(Ct,129);function $r(r,e){if(!Fo(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return mr!==void 0?mr.createHTML(e):e}var xr=(r,e)=>{let t=r.length-1,n=[],i,o=e===2?"<svg>":e===3?"<math>":"",s=Ln;for(let a=0;a<t;a++){let l=r[a],d,c,h=-1,u=0;for(;u<l.length&&(s.lastIndex=u,c=s.exec(l),c!==null);)u=s.lastIndex,s===Ln?c[1]==="!--"?s=gr:c[1]!==void 0?s=_r:c[2]!==void 0?(kr.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Vt):c[3]!==void 0&&(s=Vt):s===Vt?c[0]===">"?(s=i??Ln,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,d=c[1],s=c[3]===void 0?Vt:c[3]==='"'?vr:br):s===vr||s===br?s=Vt:s===gr||s===_r?s=Ln:(s=Vt,i=void 0);let p=s===Vt&&r[a+1].startsWith("/>")?" ":"";o+=s===Ln?l+Oc:h>=0?(n.push(d),l.slice(0,h)+Eo+l.slice(h)+gt+p):l+gt+(h===-2?a:p)}return[$r(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Bn=class r{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,s=0,a=e.length-1,l=this.parts,[d,c]=xr(e,t);if(this.el=r.createElement(d,n),Bt.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Bt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(Eo)){let u=c[s++],p=i.getAttribute(h).split(gt),f=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:f[2],strings:p,ctor:f[1]==="."?_i:f[1]==="?"?bi:f[1]==="@"?vi:Kt}),i.removeAttribute(h)}else h.startsWith(gt)&&(l.push({type:6,index:o}),i.removeAttribute(h));if(kr.test(i.tagName)){let h=i.textContent.split(gt),u=h.length-1;if(u>0){i.textContent=mi?mi.emptyScript:"";for(let p=0;p<u;p++)i.append(h[p],On()),Bt.nextNode(),l.push({type:2,index:++o});i.append(h[u],On())}}}else if(i.nodeType===8)if(i.data===Ao)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(gt,h+1))!==-1;)l.push({type:7,index:o}),h+=gt.length-1}o++}}static createElement(e,t){let n=Ct.createElement("template");return n.innerHTML=e,n}};function Nt(r,e,t=r,n){if(e===_t)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,o=Vn(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=Nt(r,i._$AS(r,e.values),i,n)),e}var gi=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Ct).importNode(t,!0);Bt.currentNode=i;let o=Bt.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new un(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new wi(o,this,e)),this._$AV.push(d),l=n[++a]}s!==l?.index&&(o=Bt.nextNode(),s++)}return Bt.currentNode=Ct,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},un=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Nt(this,e,t),Vn(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==_t&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&Vn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ct.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Bn.createElement($r(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new gi(i,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=wr.get(e.strings);return t===void 0&&wr.set(e.strings,t=new Bn(e)),t}k(e){Fo(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let o of e)i===t.length?t.push(n=new r(this.O(On()),this.O(On()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=fr(e).nextSibling;fr(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Kt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(e,t=this,n,i){let o=this.strings,s=!1;if(o===void 0)e=Nt(this,e,t,0),s=!Vn(e)||e!==this._$AH&&e!==_t,s&&(this._$AH=e);else{let a=e,l,d;for(e=o[0],l=0;l<o.length-1;l++)d=Nt(this,a[n+l],t,l),d===_t&&(d=this._$AH[l]),s||=!Vn(d)||d!==this._$AH[l],d===w?e=w:e!==w&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}s&&!i&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},_i=class extends Kt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},bi=class extends Kt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},vi=class extends Kt{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){if((e=Nt(this,e,t,0)??w)===_t)return;let n=this._$AH,i=e===w&&n!==w||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==w&&(n===w||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},wi=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Nt(this,e)}},Sr={M:Eo,P:gt,A:Ao,C:1,L:xr,R:gi,D:yr,V:Nt,I:un,H:Kt,N:bi,U:vi,B:_i,F:wi},Vc=zo.litHtmlPolyfillSupport;Vc?.(Bn,un),(zo.litHtmlVersions??=[]).push("3.3.3");var Mr=(r,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let o=t?.renderBefore??null;n._$litPart$=i=new un(e.insertBefore(On(),o),o,void 0,t??{})}return i._$AI(r),i};var Ro=globalThis,Ze=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Mr(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _t}};Ze._$litElement$=!0,Ze.finalized=!0,Ro.litElementHydrateSupport?.({LitElement:Ze});var Bc=Ro.litElementPolyfillSupport;Bc?.({LitElement:Ze});(Ro.litElementVersions??=[]).push("4.2.2");var yi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Cn=r=>(...e)=>({_$litDirective$:r,values:e}),pn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Nn=class extends pn{constructor(e){if(super(e),this.it=w,e.type!==yi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===w||e==null)return this._t=void 0,this.it=e;if(e===_t)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Nn.directiveName="unsafeHTML",Nn.resultType=1;var Pr=Cn(Nn);var{I:Ep}=Sr;var zr=r=>r.strings===void 0;var Kn=(r,e)=>{let t=r._$AN;if(t===void 0)return!1;for(let n of t)n._$AO?.(e,!1),Kn(n,e);return!0},ki=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},Er=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Kc(e)}};function Cc(r){this._$AN!==void 0?(ki(this),this._$AM=r,Er(this)):this._$AM=r}function Nc(r,e=!1,t=0){let n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let o=t;o<n.length;o++)Kn(n[o],!1),ki(n[o]);else n!=null&&(Kn(n,!1),ki(n));else Kn(this,r)}var Kc=r=>{r.type==yi.CHILD&&(r._$AP??=Nc,r._$AQ??=Cc)},$i=class extends pn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Er(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Kn(this,e),ki(this))}setValue(e){if(zr(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var To=new WeakMap,Ar=Cn(class extends $i{render(r){return w}update(r,[e]){let t=e!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=r.options?.host,this.rt(this.ct=r.element)),w}rt(r){if(this.G!==void 0)if(this.isConnected||(r=void 0),typeof this.G=="function"){let e=this.ht??globalThis,t=To.get(e);t===void 0&&(t=new WeakMap,To.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){return typeof this.G=="function"?To.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});async function Do(r,e){return(await r.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function xi(r,e,t){await r.callWS({type:"neonplan3d/image/set",image_id:e,data:t})}async function Fr(r){return(await r.callWS({type:"neonplan3d/history/list"})).snapshots}async function Ir(r){await r.callWS({type:"neonplan3d/history/snapshot"})}async function Rr(r,e){return(await r.callWS({type:"neonplan3d/history/restore",snapshot_id:e})).revision}async function Si(r,e){return r.callWS({type:"neonplan3d/packs/import",pack:e})}async function Tr(r,e){return r.callWS({type:"neonplan3d/packs/import_local_model",pack:e})}async function Dr(r,e){await r.callWS({type:"neonplan3d/packs/remove",pack_id:e})}function Wr(r){return r.callWS({type:"neonplan3d/backup/export"})}function Hr(r,e,t){return r.callWS({type:"neonplan3d/backup/import",building:e,packs:t})}async function Lr(r){return r.callWS({type:"neonplan3d/diagnostics/get"})}async function Or(r,e){return r.callWS({type:"neonplan3d/diagnostics/set",enabled:e})}async function Vr(r){return r.callWS({type:"neonplan3d/diagnostics/delete"})}var Kr=[],Wo=new Map,jc=0;function jr(r){Kr=r,Wo=new Map(r.flatMap(e=>e.items.map(t=>[jt(e.id,t.id),t]))),jc++}function Gr(){return Kr}function jt(r,e){return`pack:${r}:${e}`}function Gt(r){return r.startsWith("pack:")}function Ut(r){return Gt(r)?r.endsWith(":curtain_motor")?"curtain":r.endsWith(":screen_roll")?"screen":null:null}function bt(r){return r==="robot_vacuum"||Gt(r)&&r.endsWith(":robot_vacuum")}var Gc={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Br(r,e,t,n){return{packId:"neonplan.generated",item:{id:r,name:{en:e},size:t,electric:!0,mount:"surface",parts:[],symbol:[n]}}}var Ur=[{packId:"neonplan.generated",item:{id:"speaker",name:{de:"Lautsprecher",en:"Speaker"},size:[.42,.42,.96],electric:!0,mount:"floor",parts:[],symbol:[{shape:"circle",x:0,z:0,r:.28}]}},Br("soundbar","Soundbar",[.95,.14,.12],{shape:"rect",x:0,z:0,w:.94,d:.24}),Br("echo_dot","Echo Dot",[.1,.1,.045],{shape:"circle",x:0,z:0,r:.44}),{packId:"neonplan.generated",item:{id:"display",name:{de:"Display",en:"Display"},size:[1.2,.16,.76],electric:!0,mount:"floor",parts:[{shape:"box",x:0,z:.46,w:.9,d:.03,y:.08,h:.84,color:"dark",screen:!0}],symbol:[{shape:"rect",x:0,z:0,w:.9,d:.92}]}},{packId:"neonplan.generated",item:{id:"car",name:{de:"Pkw",en:"Car"},size:[1.9,4.5,1.6],vehicle:!0,mount:"floor",parts:[],symbol:[{shape:"rect",x:0,z:0,w:.82,d:.94},{shape:"circle",x:-.43,z:-.28,r:.07},{shape:"circle",x:.43,z:-.28,r:.07},{shape:"circle",x:-.43,z:.28,r:.07},{shape:"circle",x:.43,z:.28,r:.07}]}},{packId:"neonplan.generated",item:{id:"plant",name:{de:"Topfpflanze",en:"Potted plant"},size:[.5,.5,1.1],mount:"floor",parts:[{shape:"box",x:0,z:0,w:.52,d:.52,y:0,h:.34,color:"pot"},{shape:"loft",x:0,z:0,w:.46,d:.42,y:.43,h:.48,color:"plant"}],symbol:[{shape:"rect",x:0,z:.22,w:.42,d:.25,fill:!0},{shape:"line",x1:0,z1:-.22,x2:0,z2:.12},{shape:"circle",x:0,z:-.12,r:.18}]}},{packId:"neonplan.generated",item:{id:"aquarium",name:{de:"Aquarium",en:"Aquarium"},size:[.8,.35,.5],mount:"floor",parts:[],symbol:[{shape:"rect",x:0,z:0,w:.94,d:.92}]}},{packId:"neonplan.generated",item:{id:"aquarium_large",name:{de:"Gro\xDFes Aquarium",en:"Large aquarium"},size:[1.2,.45,1.4],mount:"floor",parts:[],symbol:[{shape:"rect",x:0,z:0,w:.94,d:.92}]}}];function Zr(){return Ur}var Cr,Uc=new Map;function Zc(r){return Cr??=new Map(Ur.map(({item:e})=>[e.id,e])),Cr.get(r)}function Nr(r){return Uc.get(r)??Zc(r)}function jn(r,e){return e.find(t=>r===t||r.startsWith(`${t}_`)||r.endsWith(`_${t}`)||r.includes(`_${t}_`))}function qc(r){let[,e,...t]=r.split(":"),n=t.join(":").toLowerCase();if(e==="neonplan.generated")return Nr(n);let i=[];if(e==="mastershort.vehicles"&&jn(n,["car","auto","vehicle","sedan","suv","van","truck","convertible"])&&i.push("car"),e==="mastershort.pro_sound"||e==="mastershort.cinema"){if(["soundbar","echo_dot"].filter(a=>jn(n,[a])).length>1)return;let s=jn(n,["soundbar","echo_dot","speaker","subwoofer","receiver","amplifier","stereo","turntable"]);s&&i.push(s==="soundbar"||s==="echo_dot"?s:"speaker")}if((e==="mastershort.pro_screens"||e==="mastershort.cinema")&&jn(n,["display","screen","tv","television","monitor"])&&i.push("display"),e==="mastershort.pets"&&n==="aquarium"&&i.push("aquarium"),e==="mastershort.pets"&&n==="aquarium_large"&&i.push("aquarium_large"),e.startsWith("mastershort.")&&jn(n,["plant","potted_plant","bonsai","flower","succulent"])&&i.push("plant"),i.length===1)return Nr(i[0])}function qr(r){return be(r)?.parts.find(e=>e.screen)}function Jr(r){let e=be(r);if(!e)return!1;let[t,n,i]=e.size;return e.parts.some(o=>{if(!o.screen)return!1;let[s,a]=[o.w*t,o.d*n,o.h*i].sort((l,d)=>d-l);return s>=.06&&a>=.06})}function be(r){if(!Gt(r))return;let e=Wo.get(r);if(e)return e;let[,t,...n]=r.split(":"),i=Gc[t];return(i?Wo.get(`pack:${i}:${n.join(":")}`):void 0)??qc(r)}function Ve(r){return dt[r]??be(r)?.size??[.6,.6,.8]}function fn(r){return ia.has(r)||!!be(r)?.electric||!!be(r)?.light}function We(r,e){let t=e.split("-")[0];return r.name[t]??r.name.en??Object.values(r.name)[0]??r.id}var Jc={architecture:"Architecture & Fit-out",bath:"Bathroom",bedroom:"Bedroom",cinema:"Home Cinema & Hi-Fi",exclusive:"Exclusive: Smart Fridge",fitness:"Fitness","neonplan.generated":"Generated models",garage:"Garage & Workshop",garden:"Garden & Terrace",kids:"Kids' Room",kitchen:"Kitchen",living:"Living Room",office:"Office & Gaming",pets:"Pets",smarthome:"Smart Home & Tech",stairs:"Stairs & Railings",utility:"Utility & Building Services",vehicles:"Vehicles",starter:"Starter Pack",pro_auto:"Pro: Car Pro",pro_timetravel:"Pro: Time travel",pro_pool:"Pro: Pool Pro",pro_camera:"Pro: Camera Cockpit",pro_energy:"Pro: Energy Pro",pro_screens:"Pro: Live Screens",pro_sound:"Pro: Sound & Cinema",pro_weather:"Pro: Weather Outside"};function He(r,e){if(e.split("-")[0]==="de")return r.name;let t=r.id.replace(/^mastershort\./,""),n=t.endsWith("_sample"),i=Jc[n?t.slice(0,-7):t];return i?n?`${i} \u2013 Sampler`:i:r.name}function Fe(r,e){let t=be(e.type);if(e.mount_y!=null)return e.mount_y;let n=na(e,r.height);if(n!==null)return n;if(e.type==="lamp_wall")return Yr;if(Xr.has(e.type))return Math.max(0,r.height-Qr(e.type,e.h));if(e.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return ta(r,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,r.height-e.h);default:return t?0:ea(e)}}var sa=["always","no_power","never"],ra=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Pi={field:null,size:1,right:0,up:0},aa=["navigate","more_info","service","fire_dom_event"];var Gn={cat:["orange","tabby","black","white","grey","calico","cream"],dog:["golden","cream","brown","black","white","grey"],rabbit:["white","grey","brown","black","cream"]},la=["dachshund","pug","terrier","labrador","shepherd"];function Ho(r,e,t){return r?e?!!t.lock_plan:!!r.locked:!1}var da=["rain","snow","fog","clouds","lightning","sky"],Lo=["rain","snow","clouds","lightning","sky"],Oo=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],Un={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function mn(r){return r==="hedge"||r==="fence"||r==="pergola"}function Vo(r){return(r.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!mn(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function ca(r){return[...r.rooms,...Vo(r)]}var ha=["x","-x","z","-z"];function Yc(r,e,t){let n=r.slope??0;if(!n||r.type==="pool")return 0;let i=r.slope_dir??"x",o=(d,c)=>i==="x"?d:i==="-x"?-d:i==="z"?c:-c,s=1/0,a=-1/0;for(let[d,c]of r.points){let h=o(d,c);s=Math.min(s,h),a=Math.max(a,h)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function Xc(r,e,t,n){return zi(r,e)+Un[e.type]-Qc(r,e,t,n)}var Bo=-.2,Mi={set:!1,level:Bo};function ua(r){let e=r?.settings.terrain??null;Mi={set:e?.level!=null,level:e?.level??Bo}}function pa(r,e){return Mi.level}function fa(r){return r.elevation>.3?0:Mi.set?Mi.level-r.elevation:Bo}function zi(r,e){return fa(r)+(e.offset??0)}function Qc(r,e,t,n){return e.type==="pool"?0:Yc(e,t,n)}function ma(r,e,t){let n=(r.outdoor??[]).filter(o=>!mn(o.type)&&o.type!=="pool"&&Z([e,t],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?Xc(r,i,e,t):fa(r)}var ga=["filter","backwash","rinse","waste","recirculate","closed"];function _a(r,e){return zi(r,e)+(e.above?Ei(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function Co(r){return r.depth&&r.depth>=.3?Math.min(5,r.depth):r.above?Ei(r):1.5}function No(r,e){return e.above?!1:(r.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!mn(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>Z(n,t.points)))}function ba(r,e){return!e.above&&!No(r,e)?Ko(r,e)-.05:_a(r,e)-Co(e)}function Ko(r,e){return _a(r,e)-.15}function Ei(r){return r.height&&r.height>.3?r.height:1.2}function Ai(r,e,t,n,i){let o=_=>Math.round(_*1e3)/1e3,s=n-e,a=i-t,l=(e+n)/2,d=(t+i)/2;if(r==="rect")return[[e,t],[n,t],[n,i],[e,i]];let c=40;if(r==="round"){let _=Math.min(s,a)/2;return Array.from({length:c},(y,v)=>[o(l+_*Math.cos(v/c*Math.PI*2)),o(d+_*Math.sin(v/c*Math.PI*2))])}let h=s>=a,u=(h?a:s)/2,p=Math.max(0,(h?s:a)/2-u),f=[],m=c/2;for(let _=0;_<2;_++){let y=_===0?1:-1;for(let v=0;v<=m;v++){let b=-Math.PI/2+v/m*Math.PI+(_===0?0:Math.PI),$=y*p+u*Math.cos(b),k=u*Math.sin(b);f.push(h?[o(l+$),o(d+k)]:[o(l+k),o(d+$)])}}return f}var eh={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},va=["wood","oak","tiles","carpet","stone","concrete"],wa={type:"none",pitch:35,overhang:.4},th={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...wa}};function ya(r,e,t){return{id:r,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var nh=2.75;function ka(r,e){if(e!=null&&Number.isFinite(e))return Math.round(e*nh*100)/100;let t=r.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function $a(r,e,t){let n=r.rooms.flatMap(a=>a.points.map(l=>l[0])),i=r.rooms.flatMap(a=>a.points.map(l=>l[1])),o=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return e.map((a,l)=>{let d=o+l%3*4.5,c=s+Math.floor(l/3)*3.5;return{id:t(),name:a.name,area_id:a.area_id,points:[[d,c],[d+4,c],[d+4,c+3],[d,c+3]],floor_material:"wood"}})}function xa(r,e,t,n){let i=r.rotation*Math.PI/180,o=Math.cos(i),s=Math.sin(i),[a,l]=e,d=r.x-a*(r.w/2)*o+l*(r.d/2)*s,c=r.z-a*(r.w/2)*s-l*(r.d/2)*o,h=t[0]-d,u=t[1]-c,p=y=>Math.max(.1,Math.round(y/n)*n),f=p((h*o+u*s)*a),m=p((-h*s+u*o)*l),_=y=>Math.round(y*1e3)/1e3;return{x:_(d+a*(f/2)*o-l*(m/2)*s),z:_(c+a*(f/2)*s+l*(m/2)*o),w:_(f),d:_(m)}}var Fi=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","ac_unit","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell","awning","waste_bin","mailbox","wall_switch","wall_socket","lamp_fan","wifi_ap","water_heater"],Ii={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","ac_unit","stairs","stairs_u","robot_vacuum"],vehicles:["parking"],outdoor:["awning"],household:["waste_bin","mailbox"],switches:["wall_switch","wall_socket","wifi_ap","water_heater"]},ve=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Sa=.3,vt=["meter","inverter","home_battery","wallbox","grid_point"],Ma=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Yr=1.75;function ct(r){if(["lamp_pendant","lamp_fan","stairwell","parking"].includes(r.type)||jo.has(r.type))return!1;let e=be(r.type);return!(e?.mount==="ceiling"&&e.light)}var Xr=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Qr(r,e){return r==="lamp_spot"?Math.max(.06,e)+.008:r==="lamp_ceiling"||r==="lamp_panel"?Math.max(.02,e)+.005:.02}var jo=new Set(["stairs","stairs_u"]);function Pa(r,e,t){let n=Math.max(4,Math.round(t/.18)),i=Math.floor(n/2)+1,o=i-1,s=n-i,a=Math.min(.12,r*.06),l=(r-a)/2,d=Math.min(l,e*.45),c=(e-d)/o;return{n,k:i,steps1:o,steps2:s,gap:a,fw:l,landing:d,run:c,rise:t/n}}function Be(r){return Ma.has(r)||!!be(r)?.light}var ih=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Go(r,e,t,n=0){let i=ze(r.points),o=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,a=[];for(let l=0;l<e;l++)for(let d=0;d<t;d++){let c=[Math.round((i.x0+n+o/t*(d+.5))*1e3)/1e3,Math.round((i.z0+n+s/e*(l+.5))*1e3)/1e3];Z(c,r.points)&&a.push(c)}return a}function gn(r,e,t){let n=s=>Math.round(s*1e3)/1e3,[i,o]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[n(r[0]+i*e),n(r[1]+o*e)]}function ea(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return r.variant==="bank"?.75:r.variant==="pole"||r.variant==="pillar"||r.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return r.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var oa=.04,oh=1.2;function ta(r,e,t,n=0){let i=0;for(let o of r.furniture)!(ih.has(o.type)||be(o.type)?.surface)||!Z([e,t],Ce(o))||o.type==="worktop"&&n>0&&o.h-oa>=oh&&n<=o.h-oa-.02||(i=Math.max(i,o.h));return i}function Ri(r){let e=r.split(/[,;\n]/).map(t=>t.trim()).filter(Boolean).slice(0,12);return e.length?e:void 0}var Uo=new Set(["wall_switch","wall_socket"]),Ti=4;function za(r){let e=(r.gangs??[]).slice(0,Ti);return e.length?e:[{entity:null}]}function Ea(r){return Math.round((.085+.071*(Math.max(1,Math.min(Ti,r))-1))*1e3)/1e3}var Zo=new Set(["wifi_ap","water_heater"]),Aa={"wifi_ap:":[.2,.2,.04],"wifi_ap:wall":[.16,.04,.16],"water_heater:":[.56,.56,1.5],"water_heater:wall":[.5,.27,.8]};function na(r,e){return r.type==="wifi_ap"?r.variant==="wall"?2.1:Math.max(0,e-r.h):r.type==="water_heater"?r.variant==="wall"?1.1:0:null}var ia=new Set([...Ma,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),dt={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.085,.012,.085],wall_socket:[.085,.014,.085],wifi_ap:[.2,.2,.04],water_heater:[.56,.56,1.5],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_fan:[1.3,1.3,.45],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var qo=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Jo=["standard","bars","glass_wall"];function Di(r,e){return r.type==="door"?r.style&&qo.includes(r.style)?r.style:e?"front":"interior":r.style&&Jo.includes(r.style)?r.style:"standard"}function Fa(r,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",o=r-.04,s=Math.min(1.05,Math.max(.6,o-(i?.6:.3))),a=(o-s)/(i?2:1),l=n.sidelight_width??a,d=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),d=i?Math.max(.1,d):0;let c=o-.5;if(l+d>c){let u=Math.max(0,c)/(l+d);l*=u,d*=u}return i?{panels:[[.02,.02+l],[r-.02-d,r-.02]],x0:.02+l,x1:r-.02-d}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:r-.02}:{panels:[[r-.02-l,r-.02]],x0:.02,x1:r-.02-l}}function Yo(r){return r==="front"||r==="front_glass"||r==="sidelight"||r==="sidelights"}var Wi={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function Hi(r){if(r.type==="garage")return"garage";if(r.type==="window"&&r.style==="glass_wall")return"glass_wall";let e=r.leaves===2;return r.type==="door"?!e&&r.style&&Yo(r.style)?"front":e?"door_double":"door":r.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function Li(r){r.energy={...eh,...r.energy??{}},r.presence=r.presence??[],r.settings={...th,...r.settings,roof:{...wa,...r.settings?.roof??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let o=n[i.mount??"ceiling"],[s,a,l]=dt[o];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:o,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return r}function G(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function we(r){let e=0;for(let t=0;t<r.length;t++){let[n,i]=r[t],[o,s]=r[(t+1)%r.length];e+=n*s-o*i}return e/2}function Ae(r){return Math.abs(we(r))}function Xe(r){let e=we(r);if(Math.abs(e)<1e-9){let i=r.length||1;return[r.reduce((o,s)=>o+s[0],0)/i,r.reduce((o,s)=>o+s[1],0)/i]}let t=0,n=0;for(let i=0;i<r.length;i++){let[o,s]=r[i],[a,l]=r[(i+1)%r.length],d=o*l-a*s;t+=(o+a)*d,n+=(s+l)*d}return[t/(6*e),n/(6*e)]}function _n(r){if(r.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=r[e],[i,o]=r[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function ze(r){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[o,s]of r)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),i=Math.max(i,s);return{x0:e,z0:t,x1:n,z1:i}}function Ia(r,e,t){return r.map(([n,i])=>[Math.abs(n-e.x0)<=Math.abs(n-e.x1)?t.x0:t.x1,Math.abs(i-e.z0)<=Math.abs(i-e.z1)?t.z0:t.z1])}function Ce(r){let e=r.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=r.w/2,o=r.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,a])=>[r.x+s*t-a*n,r.z+s*n+a*t])}function Z(r,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[o,s]=e[n],[a,l]=e[i];s>r[1]!=l>r[1]&&r[0]<(a-o)*(r[1]-s)/(l-s)+o&&(t=!t)}return t}var Oi={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Ra="neonplan3d";function sh(r){let e=structuredClone(r);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.placements=[],t.background=null,t.rooms=t.rooms.map(n=>({...n,area_id:null})),t.furniture=t.furniture.map(n=>({...n,entity:null,power:null})),t.openings=t.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return e}function Ta(r,e){return{format:Ra,version:1,exported_at:new Date().toISOString(),building:e?sh(r):structuredClone(r)}}function Da(r){let e;try{e=JSON.parse(r)}catch{throw new Error("not_json")}let t=e,n=t?.format===Ra?t.building:e;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return Li(n)}function Wa(r){let e=new Set;for(let t of r.floors){t.background?.image_id&&e.add(t.background.image_id);for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&e.add(i.image)}return[...e]}function Xo(r,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=t,n.download=r,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var rh={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},ah=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),lh=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),dh=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Vi=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Na=new Set(["light","switch","fan"]);function Ka(r){return r.slice(0,r.indexOf("."))}function se(r){return rh[Ka(r)]??null}function bn(r){return r!==null&&r!=="scene"&&r!=="script"}function qt(r,e){let t=r.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&r.devices?.[t.device_id]?.area_id||null:null}function Ha(r,e){let t=se(e);if(!t)return!1;let n=r.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let i=r.states[e];if(!i)return!1;let o=i.attributes.device_class;return t==="sensor"?o?ah.has(o):lh.has(String(i.attributes.unit_of_measurement??"")):t==="binary"?o?dh.has(o):!!n?.area_id:!0}var ch=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function La(r,e){if(se(e)!=="sensor")return!1;let t=r.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=r.states[e];return!n||!n.attributes.unit_of_measurement||ch.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||wt(n)}var Qo=null;function Zt(r){let e=Qo;if(e&&e.entities===r.entities&&e.devices===r.devices&&(e.states===r.states||(e.states=r.states,Object.keys(r.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],o=new Map,s=new Map;for(let l of Object.keys(r.entities??{})){let d=r.entities[l],c=d.device_id;c&&d.area_id&&(s.get(c)??s.set(c,new Set).get(c)).add(d.area_id),c&&rs(r,l)&&(n.get(c)??n.set(c,[]).get(c)).push(l),c&&!d.hidden&&!d.entity_category&&(o.get(c)??o.set(c,new Set).get(c)).add(Ka(l));let h=Ha(r,l),u=qt(r,l);if(!u){(h||La(r,l))&&bn(se(l))&&i.push(l);continue}h&&(t.get(u)??t.set(u,[]).get(u)).push(l)}if(r.entities)for(let l of Object.keys(r.states))r.entities[l]||(Ha(r,l)||La(r,l))&&bn(se(l))&&i.push(l);i.sort((l,d)=>Vi.indexOf(se(l))-Vi.indexOf(se(d))||ye(r,l).localeCompare(ye(r,d)));for(let[l,d]of t){let c=r.areas?.[l]?.name;d.sort((h,u)=>{let p=Vi.indexOf(se(h)),f=Vi.indexOf(se(u));return p-f||ye(r,h,c).localeCompare(ye(r,u,c))})}let a=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return Qo={entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,areas:t,power:n,unassigned:i,domains:o,hubs:a},Qo}function Pt(r,e){return!e||!r.entities?[]:Zt(r).areas.get(e)??[]}function ja(r,e){return r.entities?[...Zt(r).areas].filter(([t])=>t!==e).map(([t,n])=>({areaId:t,name:r.areas?.[t]?.name??t,ids:n.filter(i=>bn(se(i)))})).filter(t=>t.ids.length).sort((t,n)=>t.name.localeCompare(n.name)):[]}function Ga(r){return r.entities?Zt(r).unassigned:[]}var es={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},hh=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),uh=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function ts(r,e){let t=r.entities?.[e]?.device_id,n=t&&!Zt(r).hubs.has(t)?Zt(r).domains.get(t):void 0;return n&&[...n].some(i=>hh.has(i))?!1:!uh.test(`${e} ${r.states[e]?.attributes.friendly_name??""}`)}function ns(r,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return r.states[i]?[i]:[];let o=es[n],s=(p,f)=>Z([p,f],t.points),a=e?.placements.filter(p=>p.entity_id.startsWith("sensor."))??[],l=a.filter(p=>s(p.x,p.z)).map(p=>p.entity_id),d=new Set(a.filter(p=>!s(p.x,p.z)).map(p=>p.entity_id)),c=[...new Set([...Pt(r,t.area_id).filter(p=>!d.has(p)),...l])],h=c.filter(p=>p.startsWith("sensor.")&&r.states[p]?.attributes.device_class===o&&(t.outdoor||ts(r,p)));if(h.length)return h;let u=Bi[n];return u?c.filter(p=>p.startsWith("climate.")&&typeof r.states[p]?.attributes[u]=="number"):[]}var Bi={temperature:"current_temperature",humidity:"current_humidity"};function ph(r,e,t){let n=r.states[e];if(e.startsWith("climate.")){let o=Bi[t],s=o?Number(n?.attributes[o]):Number.NaN;return t==="temperature"?Oa(s,qn(r)):s}let i=Number(n?.state);return t==="temperature"?Oa(i,n?.attributes.unit_of_measurement):i}function qn(r){return r.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function Oa(r,e){return e==="\xB0F"?(r-32)*5/9:e==="K"?r-273.15:r}function Ua(r,e){return qn(r)==="\xB0F"?e*9/5+32:e}function Za(r,e,t,n){let i=ns(r,e,t,n).map(o=>ph(r,o,n)).filter(o=>Number.isFinite(o));return i.length?i.reduce((o,s)=>o+s,0)/i.length:null}function qa(r,e){return!!r.entities&&Zt(r).hubs.has(e)}function is(r,e){return r.entities?Zt(r).power.get(e)??[]:[]}function ye(r,e,t){let i=r.states[e]?.attributes.friendly_name??r.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let o=i.slice(t.length+1);return o.charAt(0).toUpperCase()+o.slice(1)}return i}function wt(r){return!r||r.state==="unavailable"||r.state==="unknown"}function Ja(r){return!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum"}function os(r,e){if(!r||r.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:r.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,i=t.rgb_color,o;return i&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?o=[i[0]/255,i[1]/255,i[2]/255]:typeof t.color_temp_kelvin=="number"?o=fh(t.color_temp_kelvin):o=[1,.71,.28],{color:o,level:n}}function fh(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function Ci(r,e,t=null){if(r==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(r==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(r){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function mh(r,e){let t=1/0;for(let n=0;n<e.length;n++){let i=e[n],o=e[(n+1)%e.length],s=o[0]-i[0],a=o[1]-i[1],l=s*s+a*a||1,d=Math.min(1,Math.max(0,((r[0]-i[0])*s+(r[1]-i[1])*a)/l));t=Math.min(t,Math.hypot(r[0]-i[0]-s*d,r[1]-i[1]-a*d))}return t}function Ya(r,e,t=[]){if(r.points.length<3||!e.length)return[];let n=r.points,i=n.map(v=>v[0]),o=n.map(v=>v[1]),s=Math.min(...i),a=Math.min(...o),l=Math.max(...i),d=Math.max(...o),c=Math.min(l-s,d-a),h=Math.max(.1,Math.min(.25,c/8)),u=Math.min(.35,c/5),p=Xe(n),f=[];for(let v=s+h/2;v<l;v+=h)for(let b=a+h/2;b<d;b+=h){let $=[v,b];if(!Z($,n))continue;let k=mh($,n);k<u||f.push({p:$,wall:k})}f.length||f.push({p,wall:0});let m=[...t],_=[],y=Math.min(.7,c/4);for(let v of e){let b=se(v)==="light",$=f[0].p,k=-1/0;for(let{p:S,wall:A}of f){let W=m.length?Math.min(...m.map(z=>Math.hypot(S[0]-z[0],S[1]-z[1]))):3,E=Math.hypot(S[0]-p[0],S[1]-p[1]),D=Math.min(W,3)*2;E<y&&!b&&(D-=10),D-=b?E*.35:A*1.2,D>k+1e-9&&(k=D,$=S)}let M=[Math.round($[0]*100)/100,Math.round($[1]*100)/100];m.push(M),_.push({entity_id:v,x:M[0],z:M[1],y:null,mount:null})}return _}var gh=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),_h=new Set(["garage","gate"]),bh=new Set(["window","opening"]);function Zn(r,e,t=!1){let n=new Map;return e.length&&r.forEach((i,o)=>{let s=t&&e.length===1?e[0]:e[o];s&&n.set(i.id,s)}),n}function Xa(r,e){let t=new Map,n=(o,s)=>o==="none"?null:o??s??null,i=(o,s,a)=>({cover:n(o.cover,s),contact:o.sensor==="handle"&&o.contact==null?null:n(o.contact,a),tilt:o.tilt==="none"?null:o.tilt,contact2:o.leaves===2&&o.contact2&&o.contact2!=="none"?o.contact2:null,lock:o.type==="door"&&o.lock&&o.lock!=="none"?o.lock:null,tilt2:o.leaves===2&&o.tilt2&&o.tilt2!=="none"?o.tilt2:null,position:o.position&&o.position!=="none"?o.position:null,positionInverted:!!o.position_inverted,tiltAngle:o.tilt_angle&&o.tilt_angle!=="none"?o.tilt_angle:null,tiltMax:o.tilt_max??null,tiltOffset:o.tilt_offset??null,tiltInvert:!!o.tilt_invert,shut:!!o.shut,...o.contact_invert?{contactInvert:!0}:{}});for(let o of e){for(let s of o.rooms){let a=o.openings.filter(b=>b.room_id===s.id).sort((b,$)=>b.edge-$.edge||b.offset-$.offset);if(!a.length)continue;let l=Pt(r,s.area_id),d=b=>r.states[b]?.attributes.device_class,c=l.filter(b=>se(b)==="cover"&&gh.has(d(b))),h=a.filter(b=>b.type==="window"),u=a.filter(b=>b.type==="door"),p=a.filter(b=>b.type==="garage"),f=Zn(h,c,!0),m=Zn(h,l.filter(b=>se(b)==="binary"&&bh.has(d(b)))),_=Zn(u,l.filter(b=>se(b)==="binary"&&d(b)==="door")),y=Zn(p,l.filter(b=>se(b)==="cover"&&_h.has(d(b)??""))),v=Zn(p,l.filter(b=>se(b)==="binary"&&d(b)==="garage_door"));for(let b of a){let $=b.type==="window"?f:b.type==="garage"?y:null,k=b.type==="window"?m:b.type==="garage"?v:_;t.set(b.id,i(b,$?.get(b.id),k.get(b.id)))}}for(let s of o.openings)t.has(s.id)||t.set(s.id,i(s))}return t}var vh=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function ss(r){if(!r||wt(r))return null;let e=r.attributes.window_state;for(let t of[typeof e=="string"?e:null,r.state]){if(!t)continue;let n=vh.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}function Ni(r,e){let t=new Map,n=[];for(let s of e){let a=se(s)==="camera"?`camera:${s}`:r.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let i=n.map(s=>{let a=t.get(s),l=a.find(d=>!r.entities?.[d]?.name)??a[0];return{primary:l,others:a.filter(d=>d!==l)}}),o=new Map(e.map((s,a)=>[s,a]));return i.sort((s,a)=>o.get(s.primary)-o.get(a.primary))}function wh(r,e){return Ni(r,e).map(t=>t.primary)}var Va={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Qa=new Set(["tv_board","tv_wall"]);function el(r,e){let t=r.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),o=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===o||o.length>=3&&i.includes(o)}function Ki(r){return Qa.has(r)||!!qr(r)}function ji(r){return Ki(r)||r==="desk"||r==="fridge_smart"}var Ba={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_fan:/(ventilator|fan|lüfter|luefter|decke|ceiling)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function rs(r,e){return e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power"}function yh(r,e){if(rs(r,e))return e;let t=r.entities?.[e]?.device_id;return t?is(r,t).find(n=>n!==e)??null:null}function vn(r,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power]),...n.placements.map(o=>o.entity_id)].filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let s=o.type in Ba,a=s?Ba[o.type]:Va[o.type]??(bt(o.type)?Va.robot_vacuum:void 0);if(!a&&o.entity==null&&o.power==null)continue;let l=n.rooms.find(p=>p.points.length>=3&&Z([o.x,o.z],p.points)),d=l?wh(r,Pt(r,l.area_id)):[],c=p=>`${p} ${ye(r,p)}`,h=o.entity==="none"?null:o.entity??null;if(o.entity==null){let p=d.filter(f=>!i.has(f));if(s){let f=p.filter(m=>se(m)==="light");h=f.find(m=>a.test(c(m)))??f[0]??null}else if(bt(o.type)){let f=l?.area_id??null;h=Object.keys(r.entities??{}).find(m=>m.startsWith("vacuum.")&&!i.has(m)&&qt(r,m)===f)??null}else if(o.type==="radiator"||o.type==="ac_unit"){let f=p.filter(m=>se(m)==="climate");h=f.find(m=>a.test(c(m)))??f[0]??null}else if(Ki(o.type)){let f=p.filter(m=>se(m)==="media");h=f.find(m=>r.states[m]?.attributes.device_class==="tv")??f.find(m=>a?.test(c(m)))??(Qa.has(o.type)?f[0]??null:null)}else a&&(h=p.find(f=>["switch","media","fan"].includes(se(f)??"")&&a.test(c(f)))??null);h&&i.add(h)}let u=o.power==="none"?null:o.power??null;o.power==null&&(u=h?yh(r,h):null,!u&&a&&l&&!s&&(u=Pt(r,l.area_id).find(f=>rs(r,f)&&!i.has(f)&&a.test(c(f)))??null),u&&i.add(u)),(h||u)&&t.set(o.id,{entity:h,power:u})}}return t}var Ca=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,kh={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function tl(r,e){let t=e.car??{},n=h=>h&&h!=="none"?h:null,i=n(t.device)??n(e.entity),o=i?r.entities?.[i]?.device_id:null,s=o&&r.entities?Object.values(r.entities).filter(h=>h.device_id===o).map(h=>h.entity_id):[],a=h=>`${h} ${r.states[h]?.attributes.friendly_name??""} ${r.entities?.[h]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(h,u,p)=>s.find(f=>u.includes(f.split(".")[0])&&kh[h].test(a(f))&&(!p||p(f)))??null,d=h=>String(r.states[h]?.attributes.unit_of_measurement??""),c=h=>String(r.states[h]?.attributes.device_class??"");return{soc:n(t.soc)??s.find(h=>h.startsWith("sensor.")&&c(h)==="battery")??l("soc",["sensor"],h=>d(h)==="%"),range:n(t.range)??l("range",["sensor"],h=>/km|mi/.test(d(h)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],h=>/^k?W$/.test(d(h)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(h=>h.startsWith("binary_sensor.")&&c(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??s.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(h=>h.startsWith("device_tracker."))??null}}function nl(r,e,t){if(t==="none")return null;if(t)return t;let n=e?r.entities?.[e]?.device_id:null;if(!n||!r.entities)return null;for(let i of Object.values(r.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(Ca.test(i.translation_key??"")||Ca.test(i.entity_id.split(".")[1])))return i.entity_id;return null}var ae=(r,e,t,n,i="")=>T`<rect class=${i} x=${Math.min(r,t)} y=${Math.min(e,n)} width=${Math.abs(t-r)} height=${Math.abs(n-e)} />`,X=(r,e,t,n,i="")=>T`<line class=${i} x1=${r} y1=${e} x2=${t} y2=${n} />`,pe=(r,e,t,n="")=>T`<circle class=${n} cx=${r} cy=${e} r=${t} />`,Gi=(r,e,t,n,i="")=>T`<ellipse class=${i} cx=${r} cy=${e} rx=${t} ry=${n} />`;function as(r,e,t){let n=[];for(let i=1;i<t;i++){let o=-r/2+r/t*i;n.push(X(o,e/2,o,e/2-Math.min(.12,e*.3)))}return n}function il(r,e,t,n){let i=Math.min(.24,e*.28),o=n?Math.min(.2,r*.12):0,s=[ae(-r/2,-e/2,r/2,-e/2+i,"fp3d-sym-fill")];n&&s.push(ae(-r/2,-e/2,-r/2+o,e/2,"fp3d-sym-fill"),ae(r/2-o,-e/2,r/2,e/2,"fp3d-sym-fill"));let a=r-2*o;for(let l=1;l<t;l++){let d=-r/2+o+a/t*l;s.push(X(d,-e/2+i,d,e/2-.02))}return s}function ol(r,e,t){let n=-r/2,i=r/2,o=-e/2,s=e/2,a=Math.max(.3,Math.min(.95,e*.5,r*(t?.34:.45))),l=Math.min(.24,a*.28),d=Math.min(.2,a*.24),c=[ae(n,o,i,o+l,"fp3d-sym-fill"),ae(n,o+l,n+l,s,"fp3d-sym-fill"),ae(n+l,s-d,n+a,s,"fp3d-sym-fill")];t?c.push(ae(i-l,o+l,i,s,"fp3d-sym-fill"),ae(i-a,s-d,i-l,s,"fp3d-sym-fill")):c.push(ae(i-d,o+l,i,o+a,"fp3d-sym-fill"));let h=t?i-a:i-d;c.push(X(n+a,s-d,n+a,o+a),X(n+a,o+a,h,o+a)),t&&c.push(X(i-a,o+a,i-a,s-d));let u=n+l,p=t?i-l:i-d,f=Math.max(1,Math.round((p-u)/.62));for(let v=1;v<f;v++)c.push(X(u+(p-u)/f*v,o+l,u+(p-u)/f*v,o+a));let m=o+a,_=s-d,y=_-m<.2?0:Math.max(1,Math.round((_-m)/.62));for(let v=0;v<y;v++){let b=m+(_-m)/y*v;c.push(X(n+l,b,n+a,b)),t&&c.push(X(i-a,b,i-l,b))}return c}function sl(r,e,t){switch(r){case"sofa":return il(e,t,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return il(e,t,1,!0);case"sofa_l":return ol(e,t,!1);case"sofa_u":return ol(e,t,!0);case"bench":return[ae(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,t*.4);return[ae(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill"),ae(-e/2,-t/2,-e/2+.08,t/2,"fp3d-sym-fill"),X(-e/2+n,-t/2+n,e/2,-t/2+n),X(-e/2+n,-t/2+n,-e/2+n,t/2)]}case"chair":return[ae(-e/2,-t/2,e/2,-t/2+.06,"fp3d-sym-fill")];case"office_chair":return[pe(0,.03,Math.min(e,t)*.36),ae(-e*.35,-t/2+.02,e*.35,-t/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[pe(0,0,Math.min(e,t)*.42)];case"stool":return[ae(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"coffee_table":case"desk":{let n=[ae(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return r==="desk"&&n.push(X(-.3,-t/2+.1,.3,-t/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=e>1.2?2:1,i=(e-.2)/n,o=[ae(-e/2,-t/2,e/2,-t/2+.07,"fp3d-sym-fill"),X(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let s=0;s<n;s++)o.push(ae(-e/2+.13+i*s,-t/2+.12,-e/2+.07+i*(s+1),-t/2+.12+Math.min(.4,t*.18)));return o}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return as(e,t,r==="nightstand"||r==="tall_cabinet"||r==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[ae(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),...as(e,t,Math.max(2,Math.round(e/.5)))];case"island":return[X(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[X(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(e,t)*.14;return[pe(-e*.22,-t*.2,n),pe(e*.22,-t*.2,n*.8),pe(-e*.22,t*.2,n*.8),pe(e*.22,t*.2,n)]}case"sink":{let n=Math.min(.5,e-.2);return[ae(-n/2,-t/2+.1,n/2,t/2-.08),pe(0,-t/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[X(-e/2+.08,t/2-.05,e/2-.08,t/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[pe(0,.05,Math.min(e,t)*.3),X(-e/2,-t/2+.1,e/2,-t/2+.1)];case"bathtub":return[ae(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),pe(-e/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[X(-e/2,-t/2,e/2,t/2),X(e/2,-t/2,-e/2,t/2),pe(0,0,.04)];case"wc":return[ae(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"fp3d-sym-fill"),Gi(0,t*.1,e*.36,t*.3)];case"washbasin":return[Gi(0,.03,e*.34,t*.3)];case"tv_board":return[X(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"fp3d-sym-strong"),...as(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[X(-e/2,0,e/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[pe(0,0,Math.min(e,t)*.45,"fp3d-sym-fill"),pe(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[pe(0,0,Math.min(e,t)*.5,"fp3d-sym-fill"),pe(0,0,Math.min(e,t)*1.6)];case"parking":return[ae(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),X(-e*.15,t/2-.5,0,t/2-.22,"fp3d-sym-strong"),X(0,t/2-.22,e*.15,t/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[ae(-e*.45,-t/2,e*.45,-t/2+t*.3,"fp3d-sym-fill"),pe(0,t*.14,Math.min(e,t)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(e/.1));for(let o=1;o<i;o++)n.push(X(-e/2+e/i*o,-t/2,-e/2+e/i*o,t/2));return n}case"lamp_fan":{let n=Math.min(e,t)/2,i=[pe(0,0,.12,"fp3d-sym-fill"),pe(0,0,n)];for(let o=0;o<4;o++){let s=o/4*Math.PI*2+Math.PI/4;i.push(X(Math.cos(s)*.13,Math.sin(s)*.13,Math.cos(s)*n*.95,Math.sin(s)*n*.95,"fp3d-sym-strong"))}return i}case"lamp_panel":return[ae(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(e,t)/2,i=[pe(0,0,n*.9,"fp3d-sym-fill"),pe(0,0,n*.3)];if(r==="lamp_ceiling"||r==="lamp_pendant")for(let o=0;o<8;o++){let s=o/8*Math.PI*2;i.push(X(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[ae(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),Gi(0,.01,e*.4,t*.4)];case"led_strip":return[X(-e/2,0,e/2,0,"fp3d-sym-strong")];case"wall_switch":case"wall_socket":return[ae(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),Gi(0,t/2,e/2+.06,.09)];case"plant":return[pe(0,0,Math.min(e,t)*.46),pe(0,0,Math.min(e,t)*.25)];case"rug":return[ae(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];case"stairs":{let n=Math.max(3,Math.round(t/.26)),i=[];for(let o=1;o<n;o++)i.push(X(-e/2,t/2-t/n*o,e/2,t/2-t/n*o));return i.push(X(0,t/2-.1,0,-t/2+.25,"fp3d-sym-strong"),X(-.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong"),X(.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong")),i}case"stairs_u":{let{steps1:n,steps2:i,fw:o,landing:s,run:a}=Pa(e,t,2.75),l=-t/2+s,d=-e/2+o,c=e/2-o,h=[X(-e/2,l,d,l),X(d,l,d,t/2),X(c,l,c,t/2)];for(let _=1;_<n;_++)h.push(X(-e/2,t/2-a*_,d,t/2-a*_));for(let _=1;_<=i;_++)h.push(X(c,l+a*_,e/2,l+a*_));let u=(-e/2+d)/2,p=(c+e/2)/2,f=-t/2+s/2,m=t/2-.15;return h.push(X(u,t/2-.1,u,f,"fp3d-sym-strong"),X(u,f,p,f,"fp3d-sym-strong"),X(p,f,p,m,"fp3d-sym-strong"),X(p-.15,m-.2,p,m,"fp3d-sym-strong"),X(p+.15,m-.2,p,m,"fp3d-sym-strong")),h}default:{let n=be(r);return n?$h(n,e,t):w}}}function $h(r,e,t){return r.symbol?.length?r.symbol.map(n=>n.shape==="rect"?ae((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?pe(n.x*e,n.z*t,n.r*Math.min(e,t)):X(n.x1*e,n.z1*t,n.x2*e,n.z2*t)):r.parts.filter(n=>n.w<.98||n.d<.98).map(n=>n.shape==="cyl"&&(n.axis??"y")==="y"?pe(n.x*e,n.z*t,Math.min(n.w*e,n.d*t)/2):ae((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t))}function Ne(r,e){if(r.length===0)return 0;if(e<=r[0][0])return r[0][1];let t=r[r.length-1];if(e>=t[0])return t[1];for(let n=0;n+1<r.length;n++){let i=r[n],o=r[n+1];if(e>o[0])continue;let s=(e-i[0])/(o[0]-i[0]);return i[1]+(o[1]-i[1])*s}return t[1]}function Jn(r,e){if(!r.length)return;let t=rl([0,e,...r.flatMap(o=>o.map(([s])=>s))],e),n=[];for(let o=0;o+1<t.length;o++){let s=t[o],a=t[o+1];if(a-s<1e-9)continue;let l=r.filter(d=>d[0][0]<=s+1e-7&&d[d.length-1][0]>=a-1e-7);for(let d=0;d<l.length;d++)for(let c=d+1;c<l.length;c++){let h=Ne(l[d],s)-Ne(l[c],s),u=Ne(l[d],a)-Ne(l[c],a);if(h*u>=-1e-12||Math.abs(h-u)<1e-12)continue;let p=s+(a-s)*h/(h-u);p>s+1e-8&&p<a-1e-8&&n.push(p)}}let i=rl([...t,...n],e).map(o=>{let s=r.filter(a=>o>=a[0][0]-1e-7&&o<=a[a.length-1][0]+1e-7).map(a=>Ne(a,o));return[o,Math.min(...s)]});return i.length>=2?i:void 0}function Yn(r,e){let t=r[r.length-1]?.[0]??0;return r.map(([n,i],o)=>[o===r.length-1?e:n/t*e,i])}function xh(r,e,t){if(!r)return[null,null];let n=r[r.length-1][0],i=e+t;if(n<=0||i<=1e-8||e<=1e-8||t<=1e-8)return[null,null];let o=n*e/i,s=Ne(r,o),a=[...r.filter(([u])=>u<o-1e-9),[o,s]],l=[[o,s],...r.filter(([u])=>u>o+1e-9)],d=a.map(([u,p],f)=>[f===a.length-1?e:u/o*e,p]),c=n-o,h=l.map(([u,p],f)=>[f===0?0:f===l.length-1?t:(u-o)/c*t,p]);return[d,h]}function Sh(r,e,t,n){if(!r||!e||Math.abs(r[r.length-1][1]-e[0][1])>1e-6)return null;let i=r[r.length-1][0],o=e[e.length-1][0];if(i<=0||o<=0)return null;let s=r.map(([l,d],c)=>[c===r.length-1?t:l/i*t,d]),a=e.slice(1).map(([l,d])=>[t+l/o*n,d]);return[...s,...a]}function Jt(r,e,t){if(!r)return{invalidated:!1};if(r.length!==e.length||e.length!==t.length)return{invalidated:!0};let n=!1;return{profiles:r.map((o,s)=>{if(!o)return null;let a=Ui(e[s],e[(s+1)%e.length]),l=Ui(t[s],t[(s+1)%t.length]);return a<=1e-8||l<=1e-8?(n=!0,null):Yn(o,l)}),invalidated:n}}function ll(r,e,t,n){if(!r)return{invalidated:!1};if(r.length!==e.length||t<0||t>=e.length)return{invalidated:!0};let i=e[t],o=e[(t+1)%e.length],s=xh(r[t],Ui(i,n),Ui(n,o)),a=r.slice();return a.splice(t,1,...s),{profiles:a,invalidated:!1}}function dl(r,e,t){if(!r)return{invalidated:!1};if(r.length!==e.length||e.length<4||t<0||t>=e.length)return{invalidated:!0};let n=(t+e.length-1)%e.length,i=(t+1)%e.length,o=al(e[t],e[n]),s=al(e[i],e[t]),a=Math.hypot(o[0],o[1]),l=Math.hypot(s[0],s[1]),c=a>1e-8&&l>1e-8&&o[0]*s[0]+o[1]*s[1]>0&&Math.abs(o[0]*s[1]-o[1]*s[0])<=a*l*1e-6?Sh(r[n],r[t],a,l):null,h=(r[n]!=null||r[t]!=null)&&c===null,u=r.slice();u.splice(t,1);let p=n>t?n-1:n;return u[p]=c,{profiles:u,invalidated:h}}function rl(r,e){let t=r.map(n=>Math.abs(n)<=1e-8?0:Math.abs(n-e)<=1e-8?e:Math.min(e,Math.max(0,n))).sort((n,i)=>n-i);return t.filter((n,i)=>i===0||n-t[i-1]>1e-8)}function Ui(r,e){return Math.hypot(e[0]-r[0],e[1]-r[1])}function al(r,e){return[r[0]-e[0],r[1]-e[1]]}function ds(r,e,t){let n=r.q[0]-r.p[0],i=r.q[1]-r.p[1],o=n*n+i*i,s=o>0?Math.min(1,Math.max(0,((e-r.p[0])*n+(t-r.p[1])*i)/o)):0;return r.h0+(r.h1-r.h0)*s}var fe=(r,e)=>[r[0]-e[0],r[1]-e[1]],zt=(r,e)=>[r[0]+e[0],r[1]+e[1]],ht=(r,e)=>[r[0]*e,r[1]*e],wn=(r,e)=>r[0]*e[0]+r[1]*e[1],yn=(r,e)=>r[0]*e[1]-r[1]*e[0],yt=r=>Math.hypot(r[0],r[1]),ut=r=>{let e=yt(r)||1;return[r[0]/e,r[1]/e]},cl=r=>[-r[1],r[0]],hl=r=>[r[1],-r[0]];function Ie(r,e,t=[]){let n=e.eps??.005,i=[],o=t.filter(z=>Math.hypot(z.b[0]-z.a[0],z.b[1]-z.a[1])>.05),s=[],a=z=>{for(let F=0;F<s.length;F++)if(Math.abs(s[F][0]-z[0])<=n&&Math.abs(s[F][1]-z[1])<=n)return F;return s.push([z[0],z[1]]),s.length-1},l=[];for(let z of r){let F=z.points;if(F.length<3||Math.abs(we(F))<1e-6)continue;let H=we(F)>0,R=F.map(a);for(let L=0;L<F.length;L++){let C=R[L],O=R[(L+1)%F.length];C!==O&&l.push(H?{u:C,v:O,room:z.id,edge:L,forward:!0}:{u:O,v:C,room:z.id,edge:L,forward:!1})}}let d=o.map(z=>[a(z.a),a(z.b)]),c=new Set;for(let z of r){let F=z.points;F.length<3||(z.wall_splits??[]).forEach((H,R)=>{if(!H||R>=F.length)return;let L=F[R],C=fe(F[(R+1)%F.length],L),O=yt(C);for(let J of H)J>n&&J<O-n&&c.add(a(zt(L,ht(C,J/O))))})}let h=[];for(let z of l){let F=s[z.u],H=s[z.v],R=fe(H,F),L=yt(R),C=ht(R,1/L),O=[];for(let N=0;N<s.length;N++){if(N===z.u||N===z.v)continue;let j=fe(s[N],F),Y=wn(j,C);Y<=n||Y>=L-n||Math.abs(yn(C,j))<=n&&O.push({t:Y,id:N})}O.sort((N,j)=>N.t-j.t);let J=[{t:0,id:z.u},...O,{t:L,id:z.v}];for(let N=0;N+1<J.length;N++){let j=J[N],Y=J[N+1],ee=z.forward?j.t:L-Y.t,K=z.forward?Y.t:L-j.t;h.push({u:j.id,v:Y.id,room:z.room,edge:z.edge,t0:ee,t1:K})}}let u=new Map;for(let z of h){let F=z.u<z.v?`${z.u}-${z.v}`:`${z.v}-${z.u}`,H=u.get(F);H||u.set(F,H=[]),H.push(z)}let p=z=>({room_id:z.room,edge:z.edge,t0:z.t0,t1:z.t1}),f=new Map;for(let z of h){let F=`${z.room}:${z.edge}`;f.set(F,[...f.get(F)??[],z.t0].sort((H,R)=>H-R))}let m=z=>{let F=r.find(R=>R.id===z.room)?.wall_heights?.[z.edge];if(!Array.isArray(F))return F;let H=f.get(`${z.room}:${z.edge}`)??[];return F[H.indexOf(z.t0)]??null},_=new Map(r.map(z=>[z.id,z])),y=(z,F,H)=>{let R=fe(H,F),L=yt(R);if(L<=1e-8)return;let C=ht(R,1/L),O=[],J=!1;for(let N of z){let j=_.get(N.room);if(!j)continue;let Y=j.points[N.edge],ee=j.points[(N.edge+1)%j.points.length],K=fe(ee,Y),ue=yt(K),Me=j.wall_profiles?.[N.edge];if(Me&&Math.abs(Me[Me.length-1][0]-ue)<=1e-4){J=!0;let Ee=[N.t0,N.t1,...Me.map(([q])=>q).filter(q=>q>N.t0+1e-8&&q<N.t1-1e-8)].map(q=>{let P=[Y[0]+K[0]*q/ue,Y[1]+K[1]*q/ue];return[Math.max(0,Math.min(L,wn(fe(P,F),C))),Ne(Me,q)]});Ee.sort((q,P)=>q[0]-P[0]),Ee.length>=2&&(Ee[0]=[0,Ee[0][1]],Ee[Ee.length-1]=[L,Ee[Ee.length-1][1]],O.push(Ee))}let rt=m(N);typeof rt=="number"&&rt>0&&O.push(ls(L,rt)),typeof j.ceiling_height=="number"&&j.ceiling_height>0&&O.push(ls(L,j.ceiling_height))}return J?Jn(O,L):void 0},v=z=>{let F=z.map(m).filter(R=>typeof R=="number"&&R>0);if(F.length)return Math.min(...F);let H=z.map(R=>r.find(L=>L.id===R.room)?.ceiling_height);return H.every(R=>typeof R=="number"&&R>0)?Math.max(...H):void 0},b=z=>{let F=z.map(H=>r.find(R=>R.id===H.room)?.wall_thickness?.[H.edge]).filter(H=>typeof H=="number"&&H>0);return F.length?Math.max(...F):void 0},$=z=>{for(let F of z){let H=r.find(O=>O.id===F.room),R=H?.wall_slopes?.[F.edge];if(!H||!R)continue;let L=H.points[F.edge],C=H.points[(F.edge+1)%H.points.length];return{p:[L[0],L[1]],q:[C[0],C[1]],h0:Math.max(.05,R[0]),h1:Math.max(.05,R[1])}}},k=z=>z.some(F=>m(F)===0),M=z=>{let F=$(z);return F?{height:Math.max(F.h0,F.h1),slope:F}:{height:v(z)}},S=[],A=[];for(let z of u.values()){let F=z[0],H=z.find(R=>R!==F&&R.u===F.v&&R.v===F.u&&R.room!==F.room);for(let R of z)R!==F&&R!==H&&R.room!==F.room&&i.push(`overlap:${F.room}:${R.room}`);if(k(H?[F,H]:[F])){H&&S.push([F.room,H.room]);continue}if(H){let R=b([F,H])??e.interior;A.push({a:F.u,b:F.v,left:R/2,right:R/2,exterior:!1,roomLeft:F.room,roomRight:H.room,sources:[p(F),p(H)],...M([F,H]),profile:y([F,H],s[F.u],s[F.v])})}else A.push({a:F.u,b:F.v,left:0,right:b([F])??e.exterior,exterior:!0,roomLeft:F.room,roomRight:null,sources:[p(F)],...M([F]),profile:y([F],s[F.u],s[F.v])})}let W=z=>ut(fe(s[z.b],s[z.a]));for(let z of A){if(z.exterior||z.free)continue;let F=new Set;for(let R of[z.a,z.b])for(let L of A)!L.exterior||L.free||L.a!==R&&L.b!==R||Math.abs(yn(W(z),W(L)))>1e-6||(L.roomLeft===z.roomLeft?F.add("left"):L.roomLeft===z.roomRight&&F.add("right"));if(F.size!==1)continue;let H=z.left+z.right;F.has("left")?(z.left=0,z.right=H):(z.left=H,z.right=0)}o.forEach((z,F)=>{let[H,R]=d[F];if(H===R)return;let L=[(z.a[0]+z.b[0])/2,(z.a[1]+z.b[1])/2],C=r.find(Y=>Y.points.length>=3&&Z(L,Y.points))?.id??null,O=(z.thickness??e.interior)/2,J=typeof z.height=="number"&&z.height>0?z.height:void 0,N=yt(fe(s[R],s[H])),j=z.wall_profile?Jn([Yn(z.wall_profile,N),...J!==void 0?[ls(N,J)]:[]],N):void 0;A.push({free:z.id,a:H,b:R,left:O,right:O,exterior:!1,roomLeft:C,roomRight:C,sources:[],height:J,profile:j})}),A=Ph(A,s,c);let E=Eh(A,s);return{walls:A.map((z,F)=>{let H=s[z.a],R=s[z.b],L=E.get(`${F}:a`),C=E.get(`${F}:b`),O=Ah([L.right,C.left,R,C.right,L.left,H],1e-6);return{id:Mh(H,R),a:[H[0],H[1]],b:[R[0],R[1]],left:z.left,right:z.right,exterior:z.exterior,roomLeft:z.roomLeft,roomRight:z.roomRight,sources:z.sources,footprint:O,...z.free?{free:z.free}:{},...z.height!==void 0?{height:z.height}:{},...z.profile?{profile:z.profile}:{},...z.slope?{slope:z.slope}:{}}}),warnings:[...new Set(i)],open:S}}function Mh(r,e){let t=o=>Math.round(o*100),[n,i]=r[0]<e[0]||r[0]===e[0]&&r[1]<=e[1]?[r,e]:[e,r];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function ls(r,e){return[[0,e],[r,e]]}function ul(r){let e=r.profile?.[r.profile.length-1]?.[0]??0,t=r.profile?[...r.profile].reverse().map(([n,i])=>[e-n,i]):void 0;return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft,profile:t}}function Ph(r,e,t=new Set){let n=r.slice(),i=!0;for(;i;){i=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let d=o.get(l);d||o.set(l,d=[]),d.push(a)}});for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=n[a[0]],d=n[a[1]];if(l.b!==s&&(l=ul(l)),d.a!==s&&(d=ul(d)),l.a===d.b)continue;let c=ut(fe(e[l.b],e[l.a])),h=ut(fe(e[d.b],e[d.a]));if(Math.abs(yn(c,h))>1e-6||wn(c,h)<=0||l.free||d.free||!!l.profile!=!!d.profile||l.profile&&d.profile&&Math.abs(l.profile[l.profile.length-1][1]-d.profile[0][1])>1e-6||l.height!==d.height||l.slope||d.slope||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let u=yt(fe(e[l.b],e[l.a])),p=l.profile&&d.profile?[...l.profile,...d.profile.slice(1).map(([_,y])=>[u+_,y])]:void 0,f={...l,b:d.b,sources:zh(l.sources,d.sources),profile:p},m=n.filter((_,y)=>y!==a[0]&&y!==a[1]);m.push(f),n.length=0,n.push(...m),i=!0;break}}return n}function zh(r,e){let t=r.map(n=>({...n}));for(let n of e){let i=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function Eh(r,e){let t=new Map;r.forEach((i,o)=>{let s=ut(fe(e[i.b],e[i.a])),a=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:ht(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,d]of a){let c=t.get(l);c||t.set(l,c=[]),c.push(d)}});let n=new Map;for(let[i,o]of t){let s=e[i];o.sort((d,c)=>d.angle-c.angle);let a=d=>({left:zt(s,ht(cl(d.d),d.left)),right:zt(s,ht(hl(d.d),d.right))});for(let d of o)n.set(d.key,a(d));if(o.length<2)continue;let l=4*Math.max(...o.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<o.length;d++){let c=o[d],h=o[(d+1)%o.length],u=zt(s,ht(cl(c.d),c.left)),p=zt(s,ht(hl(h.d),h.right)),f=yn(c.d,h.d);if(Math.abs(f)<1e-4)continue;let m=yn(fe(p,u),h.d)/f,_=zt(u,ht(c.d,m));yt(fe(_,s))>l||(n.get(c.key).left=_,n.get(h.key).right=_)}}return n}function Ah(r,e){let t=r.filter((i,o)=>yt(fe(i,r[(o+1)%r.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let o=t[(i+t.length-1)%t.length],s=t[i],a=t[(i+1)%t.length],l=fe(s,o),d=fe(a,s);if(Math.abs(yn(ut(l),ut(d)))<1e-7&&wn(l,d)>0){t=t.filter((c,h)=>h!==i),n=!0;break}}}return t}function Et(r,e,t){let n=r.points[e],i=r.points[(e+1)%r.points.length],o=ut(fe(i,n));return zt(n,ht(o,t))}function kn(r,e,t){if(r.wall){let i=t.find(a=>a.id===r.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=ut(fe(i.b,i.a));return{room:{id:r.room_id,name:"",area_id:null,points:[i.a,i.b,zt(i.a,[-o[1],o[0]])]},edge:0}}let n=e.find(i=>i.id===r.room_id);return n&&r.edge<n.points.length?{room:n,edge:r.edge}:null}function cs(r,e,t){if(!e.wall)return Fh(r,t.room,t.edge,e.offset);let n=r.find(o=>o.free===e.wall);if(!n)return null;let i=Et(t.room,0,e.offset);return{wall:n,s:wn(fe(i,n.a),ut(fe(n.b,n.a)))}}function Fh(r,e,t,n){for(let i of r){if(!i.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Et(e,t,n);return{wall:i,s:wn(fe(s,i.a),ut(fe(i.b,i.a)))}}return null}function hs(r,e){let t=we(e)>0?1:-1,n=[...r];for(let i=0;i<e.length&&n.length;i++){let o=e[i],s=e[(i+1)%e.length],a=d=>t*((s[0]-o[0])*(d[1]-o[1])-(s[1]-o[1])*(d[0]-o[0])),l=n;n=[];for(let d=0;d<l.length;d++){let c=l[d],h=l[(d+1)%l.length],u=a(c),p=a(h);if(u>=0&&n.push(c),u>=0!=p>=0){let f=u/(u-p);n.push([c[0]+(h[0]-c[0])*f,c[1]+(h[1]-c[1])*f])}}}return n}var pl=r=>r.length>=3?Math.abs(Ae(r)):0;function Ih(r,e){return r.exterior?0:r.roomLeft===e?r.left:r.roomRight===e?r.right:0}function fl(r,e,t){let n=pl(r.points);if(r.points.length<3)return n;let{walls:i}=Ie(e.rooms,t,e.walls??[]),o=n,s=i.filter(a=>!a.free&&(a.roomLeft===r.id||a.roomRight===r.id));for(let a of i){let l=[(a.a[0]+a.b[0])/2,(a.a[1]+a.b[1])/2];if((a.free?!Z(l,r.points):!s.includes(a))||(o-=pl(hs(r.points,a.footprint)),!a.free))continue;let d=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]);if(d<.2)continue;let c=[(a.b[0]-a.a[0])/d,(a.b[1]-a.a[1])/d],h=null;for(let u of s){let p=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1]);if(p<.2)continue;let f=[(u.b[0]-u.a[0])/p,(u.b[1]-u.a[1])/p];if(Math.abs(c[0]*f[1]-c[1]*f[0])>.05)continue;let m=Math.abs((l[0]-u.a[0])*f[1]-(l[1]-u.a[1])*f[0]),_=(a.a[0]-u.a[0])*f[0]+(a.a[1]-u.a[1])*f[1],y=(a.b[0]-u.a[0])*f[0]+(a.b[1]-u.a[1])*f[1],v=Math.min(p,Math.max(_,y))-Math.max(0,Math.min(_,y)),b=m-(a.left+a.right)/2-Ih(u,r.id);v>.1&&b>0&&m<1&&(!h||b<h.gap)&&(h={gap:b,overlap:v})}h&&(o-=h.gap*h.overlap)}return Math.max(0,o)}function us(r){let e=r.point_ids;return!!e&&e.length===r.points.length&&e.every(t=>typeof t=="string"&&t.length>0)&&new Set(e).size===e.length}function Rh(r,e,t){let n=[(e[0]+t[0])/2,(e[1]+t[1])/2],i=t[0]-e[0],o=t[1]-e[1],s=Math.hypot(i,o)||1;return r.rooms.some(a=>a.points.some((l,d)=>{let c=a.points[(d+1)%a.points.length],h=c[0]-l[0],u=c[1]-l[1],p=Math.hypot(h,u)||1;if(Math.abs((i*u-o*h)/(s*p))>.05)return!1;let f=Math.max(0,Math.min(1,((n[0]-l[0])*h+(n[1]-l[1])*u)/(p*p)));return Math.hypot(l[0]+h*f-n[0],l[1]+u*f-n[1])<.4}))}function gl(r,e){if(e.type!=="balcony"||e.points.length<3)return[];let t=us(e)?e.point_ids:void 0,n=r.elevation+zi(r,e)+Un.balcony,i=e.height&&e.height>.3?e.height:1,o=[];for(let s=0;s<e.points.length;s++){let a=(s+1)%e.points.length,l=e.points[s],d=e.points[a];Rh(r,l,d)||o.push({floorId:r.id,areaId:e.id,index:s,startIndex:s,endIndex:a,start:l,end:d,...t?{startId:t[s],endId:t[a]}:{},surfaceY:n,height:i})}return o}function $n(r,e){if(us(r))return r.point_ids;let t=[],n=new Set;for(let i=0;i<r.points.length;i++){let o=e(),s=typeof o=="string"&&o.length?o:`balcony-point-${i}`,a=s,l=1;for(;n.has(a);)a=`${s}-${l++}`;t.push(a),n.add(a)}return t}function ml(r){if(!_n(r))return null;let e=Math.min(...r.map(([s])=>s)),t=Math.max(...r.map(([s])=>s)),n=Math.min(...r.map(([,s])=>s)),i=Math.max(...r.map(([,s])=>s));if(t-e<1e-6||i-n<1e-6)return null;let o=r.map(([s,a])=>{let l=Math.abs(s-e)<1e-6,d=Math.abs(s-t)<1e-6,c=Math.abs(a-n)<1e-6,h=Math.abs(a-i)<1e-6;return l===d||c===h?null:l?c?"x0z0":"x0z1":c?"x1z0":"x1z1"});return o.some(s=>s===null)||new Set(o).size!==4?null:o}function _l(r,e){if(r.type!=="balcony"||!us(r))return null;let t=ml(r.points),n=ml(e);if(!t||!n)return null;let i=new Map;return t.forEach((o,s)=>i.set(o,r.point_ids[s])),n.map(o=>i.get(o))}function ps(r,e){return e==="metric"||e==="imperial"?e:r?.config?.unit_system?.length==="mi"?"imperial":"metric"}function bl(r,e){return String(Number(r.toFixed(e)))}function Yt(r,e=2){let t=r<0?"-":"",n=Math.round(Math.abs(r)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(n/12+1e-9),o=n-i*12,s=bl(o,e>=2?1:0);return i?o<.05?`${t}${i}'`:`${t}${i}' ${s}"`:`${t}${s}"`}function fs(r,e){let t=r.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,o=!1,s=!1,a=t;for(let l of t.matchAll(n)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];o=!0,a=a.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(i+=d*.3048,s=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?i+=d*.0254:c==="mm"?i+=d/1e3:c==="cm"?i+=d/100:c==="m"?i+=d:i+=e==="imperial"?d*(s?.0254:.3048):d}return!o||/[^\s+]/.test(a)?null:i}function vl(r,e,t){return e==="imperial"?Yt(r):`${t(r)} m`}function wl(r,e,t){return e==="imperial"?`${bl(r/(.3048*.3048),1)} ft\xB2`:`${t(r)} m\xB2`}function Xn(r,e){return e==="imperial"?r.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):r}var Th=.05,Dh=.2,Wh=.12;function Hh(r){let e=[];return r.forEach((t,n)=>{let i=t.points;if(i.length<3)return;let o=we(i)>=0;for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],d=l[0]-a[0],c=l[1]-a[1],h=Math.hypot(d,c);if(h<.05)continue;let u=[d/h,c/h],p=o?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let f=[-u[1],u[0]],m=a[0]*u[0]+a[1]*u[1],_=l[0]*u[0]+l[1]*u[1];e.push({room:n,index:s,dir:u,normal:f,offset:a[0]*f[0]+a[1]*f[1],outside:p[0]*f[0]+p[1]*f[1]>0?1:-1,t0:Math.min(m,_),t1:Math.max(m,_)})}}),e}function yl(r,e=.6){let t=Hh(r),n=t.map((h,u)=>u),i=h=>n[h]===h?h:n[h]=i(n[h]),o=[];for(let h=0;h<t.length;h++)for(let u=h+1;u<t.length;u++){let p=t[h],f=t[u];if(p.room===f.room||Math.abs(p.dir[0]*f.dir[1]-p.dir[1]*f.dir[0])>Th||p.outside===f.outside)continue;let m=(f.offset-p.offset)*p.outside;m>e||m<-Wh||Math.abs(m)<1e-4||Math.min(p.t1,f.t1)-Math.max(p.t0,f.t0)<Dh||(o.push(Math.round(m*1e3)/1e3),n[i(h)]=i(u))}if(!o.length)return{rooms:r.map(h=>({...h,points:h.points.map(u=>[u[0],u[1]])})),gaps:o};let s=new Map;t.forEach((h,u)=>{let p=i(u);if(p===u&&!t.some((m,_)=>_!==u&&i(_)===u))return;let f=s.get(p)??[];f.push(u),s.set(p,f)});let a=r.map(h=>h.points.map(()=>new Map));for(let[h,u]of s){let p=u.reduce((f,m)=>f+t[m].offset,0)/u.length;for(let f of u){let m=t[f],_=p-m.offset,y=[m.normal[0]*_,m.normal[1]*_],v=r[m.room].points.length;a[m.room][m.index].set(h,y),a[m.room][(m.index+1)%v].set(h,y)}}let l=h=>Math.round(h*1e3)/1e3,d=!1;return{rooms:r.map((h,u)=>{let p=h.points.map((m,_)=>{let y=m[0],v=m[1];for(let[b,$]of a[u][_].values())y+=b,v+=$;return[l(y),l(v)]}),f=Jt(h.wall_profiles,h.points,p);return d||=f.invalidated,{...h,points:p,...f.profiles?{wall_profiles:f.profiles}:f.invalidated?{wall_profiles:void 0}:{}}}),gaps:o,profilesInvalidated:d}}function kl(r){let e=r.filter(n=>n>.04).sort((n,i)=>n-i);if(!e.length)return null;let t=e[Math.floor(e.length/2)];return Math.min(.5,Math.max(.08,Math.round(t*100)/100))}function $l(r,e=.05,t=.5){let n=r.map(a=>({...a,points:a.points.map(l=>[l[0],l[1]])})),i=0;for(let a=0;a<4;a++){let l=(c,h)=>n.reduce((u,p)=>u+p.points.filter(f=>Math.abs(f[c]-h)<1e-6).length,0),d=!1;for(let c of n)for(let h=0;h<c.points.length;h++){let u=c.points[h],p=c.points[(h+1)%c.points.length],f=Math.abs(p[0]-u[0]),m=Math.abs(p[1]-u[1]),_=m>1e-6&&m<=e&&f>=t?1:f>1e-6&&f<=e&&m>=t?0:null;if(_===null)continue;let[y,v]=l(_,u[_])>=l(_,p[_])?[u[_],p[_]]:[p[_],u[_]];for(let b of n)for(let $ of b.points)Math.abs($[_]-v)<1e-6&&($[_]=y);i++,d=!0}if(!d)break}let o=!1;return{rooms:n.map((a,l)=>{let d=Jt(r[l].wall_profiles,r[l].points,a.points);return o||=d.invalidated,{...a,...d.profiles?{wall_profiles:d.profiles}:d.invalidated?{wall_profiles:void 0}:{}}}),fixed:i,profilesInvalidated:o}}var Lh=.25,Zi=r=>Math.round(r*1e3)/1e3;function ms(r,e,t,n,i){let o=r.rooms.find(s=>s.points.length>=3&&Z([e,t],s.points));return!o||Z([n,i],o.points)?[n,i]:Z([n,t],o.points)?[n,t]:Z([e,i],o.points)?[e,i]:[e,t]}function pt(r,e,t,n){let i=Math.hypot(n[0]-t[0],n[1]-t[1]);if(i<.01)return!1;let o=[(n[0]-t[0])/i,(n[1]-t[1])/i],s=l=>Math.abs(-(l[0]-t[0])*o[1]+(l[1]-t[1])*o[0]),a=l=>(l[0]-t[0])*o[0]+(l[1]-t[1])*o[1];return r.rooms.some(l=>l.id!==e&&l.points.some((d,c)=>{let h=l.points[(c+1)%l.points.length];return s(d)>.02||s(h)>.02?!1:Math.min(i,Math.max(a(d),a(h)))-Math.max(0,Math.min(a(d),a(h)))>.05}))}function gs(r,e,t,n,i,o=.05){let s=r.rooms.find(u=>u.points.length>=3&&Z([e.x,e.z],u.points));if(!s)return[t,n];let a=s.points,l=we(a)>=0?1:-1,d=Ce({...e}),c=t,h=n;for(let u=0;u<2;u++){let p=Ce({...e,x:c,z:h});for(let f=0;f<a.length;f++){let m=a[f],_=a[(f+1)%a.length],y=Math.hypot(_[0]-m[0],_[1]-m[1]);if(y<.05)continue;let v=[(_[0]-m[0])/y,(_[1]-m[1])/y],b=[-v[1]*l,v[0]*l],$=pt(r,s.id,m,_)?i/2:0,k=0;p.forEach((M,S)=>{let A=(M[0]-m[0])*v[0]+(M[1]-m[1])*v[1];if(A<-.01||A>y+.01)return;let W=(M[0]-m[0])*b[0]+(M[1]-m[1])*b[1]-$,E=d[S];(E[0]-m[0])*b[0]+(E[1]-m[1])*b[1]-$<-o||W<k&&(k=W)}),k<-1e-4&&(c-=b[0]*k,h-=b[1]*k)}}return[Zi(c),Zi(h)]}function Qn(r,e,t,n=Lh){let i=r.rooms.find(d=>d.points.length>=3&&Z([e.x,e.z],d.points));if(!i)return null;let o=i.points,s=we(o)>=0?1:-1,a=t/2,l=null;for(let d=0;d<o.length;d++){let c=o[d],h=o[(d+1)%o.length],u=Math.hypot(h[0]-c[0],h[1]-c[1]);if(u<.3)continue;let p=[(h[0]-c[0])/u,(h[1]-c[1])/u],f=[-p[1]*s,p[0]*s],m=(e.x-c[0])*p[0]+(e.z-c[1])*p[1];if(m<0||m>u)continue;let y=r.rooms.some(A=>A.id!==i.id&&A.points.some((W,E)=>{let D=A.points[(E+1)%A.points.length],z=Math.abs((W[0]-c[0])*f[0]+(W[1]-c[1])*f[1]),F=Math.abs((D[0]-c[0])*f[0]+(D[1]-c[1])*f[1]);return z<.02&&F<.02}))?a:0,v=(e.x-c[0])*f[0]+(e.z-c[1])*f[1]-y,b=Math.atan2(-f[0],f[1])*180/Math.PI,$=A=>Math.abs((e.rotation-A+540)%360-180),M=[{rotation:b,extent:e.d/2},{rotation:b+90,extent:e.w/2},{rotation:b-90,extent:e.w/2}].reduce((A,W)=>$(W.rotation)<$(A.rotation)?W:A);if($(M.rotation)>50)continue;let S=v-M.extent;Math.abs(S)>n||l&&Math.abs(S)>=Math.abs(l.gap)||(l={x:Zi(e.x-f[0]*S),z:Zi(e.z-f[1]*S),rotation:(Math.round(M.rotation)%360+360)%360,gap:S})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function At(r,e){let t=r.points,n=t[e],i=t[(e+1)%t.length],o=Math.hypot(i[0]-n[0],i[1]-n[1])||1,s=[(i[0]-n[0])/o,(i[1]-n[1])/o],a=[-s[1],s[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];Z([l[0]+a[0]*.02,l[1]+a[1]*.02],t)||(a=[-a[0],-a[1]]);let d=[a[1],-a[0]];return{a:n,b:i,u:s,n:a,length:o,rightward:s[0]*d[0]+s[1]*d[1]>0}}function me(r,e){let t=e[0]-r.a[0],n=e[1]-r.a[1];return{s:t*r.u[0]+n*r.u[1],d:t*r.n[0]+n*r.n[1]}}function Qe(r,e,t){return[r.a[0]+r.u[0]*e+r.n[0]*t,r.a[1]+r.u[1]*e+r.n[1]*t]}var Oh=.45;function xn(r,e){let t=[];for(let n of e.openings){if(n.wall)continue;let i=e.rooms.find(a=>a.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s:o,d:s}=me(r,Et(i,n.edge,n.offset));Math.abs(s)>.4||o<-.05||o>r.length+.05||t.push(Vh(n,o))}return t}function Vh(r,e){return{kind:"opening",id:r.id,s0:e-r.width/2,s1:e+r.width/2,y0:r.sill,y1:r.sill+r.height,d:0}}function Ft(r,e,t,n=Oh){let i=[];for(let o of e.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let s=Z([o.x,o.z],t.points),a=Ce(o).map(p=>me(r,p)),l=Math.min(...a.map(p=>p.d)),d=Math.min(...a.map(p=>p.s)),c=Math.max(...a.map(p=>p.s)),h=me(r,[o.x,o.z]);if(!s&&h.d<=0||h.d<=0||l>n||l<-.3||c<.02||d>r.length-.02)continue;let u=Fe(e,o);i.push({kind:"furniture",id:o.id,s0:d,s1:c,y0:u,y1:u+o.h,d:l})}return i}function qi(r,e,t){let n=i=>Math.round(i*1e3)/1e3;return{x:n(e.x+r.u[0]*t),z:n(e.z+r.u[1]*t)}}var _s=.3;function Ke(r,e){let t=r.from?e(r.from):null,n=r.to?e(r.to):null,i=r.height??_s,o=[];if(r.heights)t&&o.push([t.x,t.y,t.z]),r.points.forEach(([s,a],l)=>o.push([s,r.heights?.[l]??i,a])),n&&o.push([n.x,n.y,n.z]);else{if(!t||!n)return[];o.push([t.x,t.y,t.z],[t.x,i,t.z]);for(let[s,a]of r.points)o.push([s,i,a]);o.push([n.x,i,n.z],[n.x,n.y,n.z])}return o.filter((s,a)=>a===0||Ji(s,o[a-1])>.001)}function Ji(r,e){return Math.hypot(e[0]-r[0],e[1]-r[1],e[2]-r[2])}function bs(r){let e=0;for(let t=1;t<r.length;t++)e+=Ji(r[t-1],r[t]);return e}function xl(r,e){if(r.length<2)return null;let t=Math.max(0,e);for(let n=1;n<r.length;n++){let[i,o]=[r[n-1],r[n]],s=Ji(i,o);if(!(s<1e-6)){if(t<=s||n===r.length-1){let a=Math.min(1,t/s),l=[(o[0]-i[0])/s,(o[1]-i[1])/s,(o[2]-i[2])/s];return{p:[i[0]+(o[0]-i[0])*a,i[1]+(o[1]-i[1])*a,i[2]+(o[2]-i[2])*a],dir:l,seg:n-1}}t-=s}}return null}function Sn(r,e){let t=null,n=0;for(let i=1;i<r.length;i++){let[o,s]=[r[i-1],r[i]],a=[s[0]-o[0],s[1]-o[1],s[2]-o[2]],l=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],d=l>0?Math.max(0,Math.min(1,((e[0]-o[0])*a[0]+(e[1]-o[1])*a[1]+(e[2]-o[2])*a[2])/l)):0,c=[o[0]+a[0]*d,o[1]+a[1]*d,o[2]+a[2]*d],h=Ji(c,e);(!t||h<t.d)&&(t={at:n+Math.sqrt(l)*d,d:h,seg:i-1,p:c}),n+=Math.sqrt(l)}return t}function et(r,e,t,n){let[i,o]=Qe(r,e,n);return[i,t,o]}function Sl(r,e,t,n){let i=Qe(r,0,e),o=Qe(t,0,n),s=r.u[0]*-t.u[1]-r.u[1]*-t.u[0];if(Math.abs(s)<1e-6)return null;let a=o[0]-i[0],l=o[1]-i[1],d=(a*-t.u[1]-l*-t.u[0])/s;return[i[0]+r.u[0]*d,i[1]+r.u[1]*d]}var Ml=["top6","side6","four"];function tt(r){return r==="pool_pump"?["suction","pressure"]:r==="pool_filter"?["pump","return","waste"]:r==="pool_heat_pump"?["in","out"]:[]}function Mn(r){return r==="wall"||r==="floor"?["inside","outside"]:["in","out1","out2"]}function oe(r){let[e="",t="",n]=r.split(":");return{kind:e,id:t,port:n||null}}function ke(r){let{kind:e,id:t}=oe(r);return e&&t?`${e}:${t}`:r}function Bh(r,e){let{w:t,d:n,h:i}=r;if(r.type==="pool_pump")return e==="suction"?[t*.5,i*.55,0]:e==="pressure"?[t*.05,i*.9,0]:null;if(r.type==="pool_filter"){let o=Math.min(t,n)/2;if(r.variant==="side6"){let l=o+.08;return e==="pump"?[l,i*.6,0]:e==="return"?[l+.06,i*.48,0]:e==="waste"?[l,i*.36,0]:null}let s=i*.89,a=o*.45+.04;return e==="pump"?[-a,s,0]:e==="return"?[a,s,0]:e==="waste"?[0,s,-a]:null}if(r.type==="pool_heat_pump"){let o=r.variant==="left"||r.variant==="back"?r.variant:"right";if(e!=="in"&&e!=="out")return null;let s=e==="in"?i*.25:i*.45;return o==="back"?[e==="in"?-t*.15:t*.15,s,-n/2-.04]:[(o==="left"?-1:1)*(t/2+.04),s,-n*.2]}return null}function Pl(r,e){let t=Bh(r,e);if(!t)return null;let n=r.rotation*Math.PI/180,[i,o]=[Math.cos(n),Math.sin(n)];return{x:r.x+t[0]*i-t[2]*o,y:t[1],z:r.z+t[0]*o+t[2]*i}}function It(r,e){if(e==="outside"){if(r.kind==="floor")return{x:r.x,y:r.y-.3,z:r.z};if(r.kind==="wall"){let t=(r.depth??.3)+.05;return{x:r.x-(r.nx??0)*t,y:r.y,z:r.z-(r.nz??0)*t}}}return{x:r.x,y:r.y,z:r.z}}function ei(r){return r==="pressure"||r==="return"||r==="waste"||r==="out"?"source":r==="suction"||r==="pump"||r==="in"?"sink":null}function ti(r){return r==="skimmer"||r==="drain"?"source":"sink"}function Yi(r,e){let t=r[0]??e,n=1/0;for(let i=0;i<r.length;i++){let o=r[i],s=r[(i+1)%r.length],a=s[0]-o[0],l=s[1]-o[1],d=a*a+l*l,c=d>0?Math.max(0,Math.min(1,((e[0]-o[0])*a+(e[1]-o[1])*l)/d)):0,h=[o[0]+a*c,o[1]+l*c],u=Math.hypot(h[0]-e[0],h[1]-e[1]);u<n&&([t,n]=[h,u])}return t}function de(r,e,t){let n=t.pool??{},i=Ko(e,t);return o=>{let{kind:s,id:a,port:l}=oe(o);if(s==="port"){let d=n.ports?.find(h=>h.id===a);if(!d)return null;let c=d.kind==="skimmer"?i-(d.depth??0):d.kind==="drain"?ba(e,t)+.03:d.kind==="inlet"?i-(d.depth??.3):.02;return{x:d.x,z:d.z,y:c}}if(s==="joint"){let d=n.joints?.find(c=>c.id===a);return d?It(d,l):null}if(s!=="dev")return null;for(let d of r.floors){let c=d.furniture.find(f=>f.id===a);if(!c||!ve.includes(c.type))continue;let h=l?Pl(c,l):null,u=d.elevation-e.elevation;if(h)return{...h,y:h.y+Fe(d,c)+u};let p=c.type==="pool_filter"?c.h*.88:c.type==="pool_dosing"?.95:c.type==="pool_valve"?Sa:c.type==="pool_pump"?.2:.3;return{x:c.x,z:c.z,y:p+Fe(d,c)+u}}return null}}function je(r,e){if(r.heights)return r;let t=r.height??_s,n=e(r.from),i=e(r.to),o=[...n?[[n.x,n.z]]:[],...r.points,...i?[[i.x,i.z]]:[]];return{...r,points:o,heights:o.map(()=>t)}}var ge=r=>Math.round(r*1e3)/1e3;function Xi(r,e,t,n,i){let o=je(r,e),s=Ke(o,e),a=Sn(s,t);if(!a)return null;let l={id:n,x:ge(a.p[0]),z:ge(a.p[2]),y:ge(a.p[1])},d=ni(o,e),c=Math.max(0,Math.min(o.points.length,a.seg+1-d)),h=o.heights??[],u=o.fittings??[],p={...o,to:`joint:${n}:in`,points:o.points.slice(0,c),heights:h.slice(0,c),fittings:u.filter(m=>m.at<=a.at)},f={...o,id:i,from:`joint:${n}:out1`,points:o.points.slice(c),heights:h.slice(c),fittings:u.filter(m=>m.at>a.at).map(m=>({...m,at:ge(m.at-a.at)}))};return{joint:l,first:p,second:f}}function ni(r,e){return r.from&&e(r.from)?1:0}var Ch=1.6;function El(r,e,t){let n=[],i=o=>{let s=me(r,[o[0],o[2]]);return s.d>-.35&&s.d<Ch&&s.s>-.3&&s.s<r.length+.3?s:null};for(let o of e){let s=je(o,t),a=Ke(s,t);if(a.length<2)continue;let l={id:o.id,pieces:[],points:[],fittings:[],ends:[]};for(let h=1;h<a.length;h++){let u=i(a[h-1]),p=i(a[h]);u&&p&&l.pieces.push({k:h-1,s0:u.s,y0:a[h-1][1],d0:u.d,s1:p.s,y1:a[h][1],d1:p.d})}if(!l.pieces.length)continue;let d=ni(s,t);s.points.forEach((h,u)=>{let p=a[u+d],f=p&&i(p);f&&l.points.push({i:u,s:f.s,y:p[1]})});let c=bs(a);for(let h of o.fittings??[]){let u=Math.min(c,h.at),p=xl(a,u)?.p,f=p&&i(p);p&&f&&l.fittings.push({id:h.id,kind:h.kind,open:h.open!==!1,s:f.s,y:p[1]})}for(let[h,u]of[["from",a[0]],["to",a[a.length-1]]]){let p=(h==="from"?!o.from:!o.to)?i(u):null;p&&l.ends.push({end:h,s:p.s,y:u[1]})}n.push(l)}return n}var Al=-.3;function Pn(r,e,t,n,i){let o=[],s=[],a=_=>e(_),l=[],d=r.from,c=[];for(let _ of r.vias){if(_.kind!=="hole"){c.push(_.kind);continue}let y=t.find(M=>M.id===_.joint),v=a(d);if(!y||!v)continue;let b=a(`joint:${y.id}:inside`),$=a(`joint:${y.id}:outside`),k=_.dir?_.dir==="out":Math.hypot(v.x-b.x,v.z-b.z)<=Math.hypot(v.x-$.x,v.z-$.z);l.push({a:d,b:`joint:${y.id}:${k?"inside":"outside"}`,fits:c}),c=[],d=`joint:${y.id}:${k?"outside":"inside"}`}let h=r.to;if(h.length>1){let _=a(d),y=h.map(a).filter(v=>!!v);if(_&&y.length===h.length){let v=y.reduce((A,W)=>A+W.x,0)/y.length,b=y.reduce((A,W)=>A+W.z,0)/y.length,$=Math.hypot(_.x-v,_.z-b)||1,k=Math.min(1,$/2)/$,M=_.y<0||y.some(A=>A.y<0),S={id:i("joint"),kind:"tee",x:ge(v+(_.x-v)*k),z:ge(b+(_.z-b)*k),y:M?Al:ge(_.y)};s.push(S),l.push({a:d,b:`joint:${S.id}:in`,fits:c}),c=[],h.forEach((A,W)=>l.push({a:`joint:${S.id}:out${W+1}`,b:A,fits:[]})),h=[]}}h.length&&l.push({a:d,b:h[0],fits:c});let u=_=>{let{kind:y,id:v,port:b}=oe(_),$=y==="joint"?s.find(k=>k.id===v):void 0;return $?It($,b):a(_)},p=_=>n(_)==="source",f=_=>n(_)==="sink",m=r.to.some(p)&&!p(r.from)||f(r.from)&&!r.to.some(f);for(let _ of l){let y=u(_.a),v=u(_.b);if(!y||!v)continue;let b=Nh(y,v,zl(_.a,t),zl(_.b,t)),$={id:i("pipe"),from:_.a,to:_.b,floor_id:r.floorId,points:b.map(M=>[M[0],M[2]]),heights:b.map(M=>M[1])},k=bs(Ke($,u));$.fittings=_.fits.map((M,S)=>({id:i("fit"),kind:M,at:ge(Math.min(k/2,.4+S*.25)),...M==="valve"?{open:!0}:{}})),m&&($={...$,from:$.to,to:$.from,points:[...$.points].reverse(),heights:[...$.heights??[]].reverse(),fittings:$.fittings?.map(M=>({...M,at:ge(Math.max(0,k-M.at))}))}),o.push($)}return{pipes:o,joints:s}}function zl(r,e){let{kind:t,id:n,port:i}=oe(r),o=t==="joint"&&i==="outside"?e.find(s=>s.id===n):void 0;return o?.kind==="wall"?[-(o.nx??0),-(o.nz??0)]:null}function Nh(r,e,t=null,n=null){let i=r.y<0||e.y<0?Al:ge(Math.max(r.y,e.y)),o=[],[s,a]=[r.x,r.z];t&&([s,a]=[ge(s+t[0]*.5),ge(a+t[1]*.5)],o.push([s,ge(r.y),a]));let[l,d]=[e.x,e.z],c=[];return n&&([l,d]=[ge(l+n[0]*.5),ge(d+n[1]*.5)],c.push([l,ge(e.y),d])),o.push([ge(s),i,ge(a)]),Math.abs(l-s)>.01&&o.push([ge(l),i,ge(a)]),Math.abs(d-a)>.01&&o.push([ge(l),i,ge(d)]),o.push(...c),o.filter((h,u)=>u===0||Math.hypot(h[0]-o[u-1][0],h[1]-o[u-1][1],h[2]-o[u-1][2])>.001)}function Fl(r,e,t){let n=o=>{let{kind:s,id:a,port:l}=oe(o),d=s==="joint"&&(l==="inside"||l==="outside")?e.find(c=>c.id===a):void 0;return d&&(d.kind==="wall"||d.kind==="floor")?{id:a,port:l}:null},i=[];for(let o of r.filter(s=>s.from===t||s.to===t)){let s={start:t,other:"",pipes:[],holes:[],fittings:[]},a=o,l=t,d=new Set;for(;a&&!d.has(a.id);){d.add(a.id),s.pipes.push(a.id),s.fittings.push(...(a.fittings??[]).map(p=>p.kind));let c=a.from===l?a.to:a.from,h=c?n(c):null;if(!h){s.other=c;break}s.holes.push({joint:h.id,dir:h.port==="inside"?"out":"in"}),l=`joint:${h.id}:${h.port==="inside"?"outside":"inside"}`;let u=a;a=r.find(p=>p!==u&&(p.from===l||p.to===l)),a||(s.other=l)}i.push(s)}return i}function Kh(r,e,t){let n=t[0]-e[0],i=t[1]-e[1],o=n*n+i*i,s=o?Math.max(0,Math.min(1,((r[0]-e[0])*n+(r[1]-e[1])*i)/o)):0;return Math.hypot(r[0]-e[0]-n*s,r[1]-e[1]-i*s)}function Il(r,e,t=.03){return r.every(n=>Z(n,e)||e.some((i,o)=>Kh(n,i,e[(o+1)%e.length])<=t))}function Rl(r,e){return e&&r.states[e]?e:Object.keys(r.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function Tl(r,e){let t=r.states[e];if(!t)return!1;let n=String(t.attributes.device_class??"");return e.startsWith("binary_sensor.")?n==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(e):e.startsWith("sensor.")?n==="precipitation_intensity"||/\/h$/.test(String(t.attributes.unit_of_measurement??"")):!1}var vs=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household","fridge_smart"],ws=["fun_pets","fun_halloween"],jh=[];function ys(){try{let r=new URLSearchParams(location.search).get("fp3d_lab");return r==="1"?localStorage.setItem("neonplan3d.lab","1"):r==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function Rt(r){return!jh.includes(r)||ys()}function Qi(r){return vs.includes(r)||ws.includes(r)}var Gh=r=>(r??navigator.language).toLowerCase().startsWith("de");var Uh={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},pool:{de:"pro-erweiterungen/#68-pool-pro",en:"pro-add-ons/#68-pool-pro"},household:{de:"pro-erweiterungen/#68-haushalt-pro-beta",en:"pro-add-ons/#68-household-pro-beta"}};function Xt(r,e){let t=Gh(r),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=e?Uh[e]:void 0,o=i?t?i.de:i.en:"",[s,a]=o.split("#");return`${n}${s}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function Zh(r=Gr()){let e=new Set;for(let t of r)for(let n of t.features??[])Qi(n)&&e.add(n);return e}function Dl(r,e){return Zh(e).has(r)}var qh=new Set(["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household","fridge_smart","fun_pets","fun_halloween"]);function eo(r,e){return Dl(r,e)?"signed_pack":qh.has(r)?"open_edition":"locked"}function ce(r,e){return eo(r,e)!=="locked"}function Hl(r){let e=be(r);if(!e||e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var ks=["bin120","bin240","bin1100","multi","bag","caddy","underground"],Ll=["rest","bio","paper","plastic","glass","garden","recycling","other"],$s=["wall","pole","pillar","parcel","bank"],Ol={bin120:[.48,.55,.93],bin240:[.58,.73,1.07],bin1100:[1.37,1.07,1.45],multi:[.6,.75,1.07],bag:[.42,.32,.62],caddy:[.3,.26,.32],underground:[1,1,1.15]},Vl={wall:[.38,.14,.34],pole:[.24,.5,1.15],pillar:[.42,.36,1.3],parcel:[.6,.55,1.1],bank:[.95,.3,.7]};function Bl(r){return ks.includes(r.variant??"")?r.variant:"bin240"}function Cl(r){return $s.includes(r.variant??"")?r.variant:"wall"}var $e=["#3a3f47","#3a3f47"],Qt=["#23262b","#23262b"],nt=["#5a3b25","#5a3b25"],he=["#1f4fa8","#1f4fa8"],Tt=["#e3b616","#e3b616"],ne=["#2f7d3b","#2f7d3b"],Wl={default:{rest:$e,bio:nt,paper:he,plastic:Tt,glass:ne,garden:ne,recycling:Tt,other:$e},DE:{rest:Qt,bio:nt,paper:he,plastic:Tt,glass:ne,garden:ne,recycling:Tt},AT:{rest:$e,bio:nt,paper:[$e[0],"#c0262d"],plastic:Tt,glass:ne,garden:ne},CH:{rest:["#d8d8d8","#d8d8d8"],bio:ne,paper:he,plastic:$e,glass:ne,garden:ne},NL:{rest:$e,bio:ne,paper:he,plastic:["#3a3f47","#e57a1f"],glass:ne,garden:ne},BE:{rest:$e,bio:ne,paper:he,plastic:he,glass:ne,garden:ne},GB:{rest:Qt,bio:["#3a3f47","#5a3b25"],paper:he,plastic:he,glass:Qt,garden:nt,recycling:he},US:{rest:Qt,bio:ne,paper:he,plastic:he,glass:he,garden:ne,recycling:he},CA:{rest:Qt,bio:ne,paper:he,plastic:he,glass:he,garden:ne,recycling:he},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:$e,bio:nt,paper:[$e[0],"#e3b616"],plastic:[$e[0],"#e3b616"],recycling:[$e[0],"#e3b616"],glass:ne,garden:ne},IT:{rest:$e,bio:nt,paper:he,plastic:Tt,glass:ne,garden:ne},ES:{rest:$e,bio:nt,paper:he,plastic:Tt,glass:ne,garden:ne},PT:{rest:$e,bio:nt,paper:he,plastic:Tt,glass:ne,garden:ne},DK:{rest:Qt,bio:ne,paper:he,plastic:$e,glass:ne,garden:ne},SE:{rest:Qt,bio:nt,paper:he,plastic:$e,glass:ne,garden:ne},NO:{rest:$e,bio:nt,paper:he,plastic:$e,glass:ne,garden:ne},FI:{rest:$e,bio:nt,paper:he,plastic:$e,glass:ne,garden:ne}},Nl="DE";function Kl(){return Nl}function xs(r,e){return Wl[e]?.[r]??Wl.default[r]??$e}function jl(r,e=Nl){let t=xs(r.bin_kind??"rest",e),n=r.bin_color||t[0];return[n,r.bin_lid||(r.bin_color?n:t[1])]}var Gl={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",phone_hint:"Zeichnen geht am besten am PC oder Tablet \u2013 auf dem Handy kannst du ansehen und bedienen.",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",show_menu:"Anzeige",tool_menu:"Werkzeug",floor_label:"Etage:",floor_settings:"Etagen-Einstellungen",floor_settings_of:"Etage {floor}",floor_none_hint:"Lege oben mit \u201EEtage\u201C \u2192 \u201EEtage hinzuf\xFCgen\u201C deine erste Etage an.",tool_group_build:"Bauen",tool_group_outside:"Drau\xDFen",tool_room:"Raum",view_menu:"Ansicht",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Grundriss komplett",fit_hint:"Den ganzen Grundriss der Etage ins Bild holen (bei Drau\xDFen mit Garten)",room:"Raum",rooms:"R\xE4ume",room_name:"Name",room_id:"ID (Karten-Option room:)",room_openings:"T\xFCren und Fenster",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",tech_open:"Technikraum zeichnen",tech_open_hint:"Danach auf die Wand im Plan tippen, an der deine Anlage h\xE4ngt.",tech_step:"Schritt {n}",tech_step_feed:"Tippe links auf \u201E{name}\u201C und dann auf die Stelle an der Wand, wo die Leitung hereinkommt (ganz unten: aus dem Boden).",tech_step_devices:"Tippe links auf Filterpumpe und Sandfilter \u2013 sie stellen sich an die Wand. W\xE4rmepumpe und Dosieranlage, wenn du sie hast.",tech_step_line:"Zieh eine Linie: von \u201E{a}\u201C zu \u201E{b}\u201C. Einfach auf das eine dr\xFCcken und zum anderen ziehen.",tech_step_loose:"Ein Rohr endet noch lose \u2013 zieh es weiter zu einem Ger\xE4t oder einer Leitung, oder l\xF6sche es (\u270B Ausw\xE4hlen).",tech_step_drawing:"Zieh weiter oder tippe Punkt f\xFCr Punkt \u2013 auf einem Ger\xE4t, einer Leitung oder einem Rohr endet die Linie.",tech_step_fit:"Tippe auf das Rohr, in das der Hahn (das Sichtglas) soll \u2013 es leuchtet orange auf.",tech_mode:"Pooltechnik",tech_mode_hint:"Den Technikraum auf dieser Wand zeichnen: Leitungen vom Pool hereinf\xFChren, Ger\xE4te hinstellen, Rohre ziehen",tech_draw:"Zeichnen",tech_ask:"Rohr liegt \u2013 soll es weiter zum Pool? Dann kommt hier ein Loch samt Weg nach drau\xDFen:",tech_ask_loose:"Offen lassen",tech_step_tee:"Tippe auf das Rohr, wo die Abzweigung hin soll \u2013 es wird dort geteilt, und von dem T-St\xFCck ziehst du die n\xE4chste Leitung.",tech_pick:"Ausw\xE4hlen",pool_delete_confirm:"Den Pool mit allen {n} Rohren l\xF6schen?",tech_erase:"Radieren",tech_erase_hint:"Tippe auf ein Rohr, einen Kugelhahn, ein Sichtglas oder ein Loch \u2013 es wird gel\xF6scht. Verzeichnet? R\xFCckg\xE4ngig hilft auch.",tech_feeds:"Leitungen vom Pool",tech_devices:"Ger\xE4te",tech_fittings:"Armaturen",tech_hint:"Wie mit einem Stift: auf ein Ger\xE4t dr\xFCcken und die Leitung ziehen \u2013 Zacken verschwinden, die Rohre laufen waagerecht und senkrecht. Endet der Strich auf einem Ger\xE4t oder Rohr, ist er dort angeschlossen; endet er im Leeren, fragt NeonPlan, wohin die Leitung f\xFChrt (zum Skimmer, Bodenablauf, zu den Einl\xE4ssen, zum Kanal) und legt das Loch und den Weg drau\xDFen selbst.",tech_no_ports:"Setz zuerst mit dem Pool-Werkzeug Skimmer, Bodenablauf und Einl\xE4ufe an den Pool.",tech_ok:"Alles verbunden \u2013 das Wasser flie\xDFt.",tech_issue_loose:"{n} lose Rohrenden",tech_issue_port:"{name} nicht verbunden",tech_issue_feed:"{name} noch nicht hereingef\xFChrt",tech_feed_place:"Tipp auf die Stelle, wo die Leitung in den Raum kommt \u2013 ganz unten: aus dem Boden, h\xF6her: durch die Wand.",tech_start:"Auf ein Ger\xE4t oder eine Leitung tippen und eine Linie ziehen.",feed_skimmer:"Skimmer",feed_drain:"Bodenablauf",feed_inlet:"Einl\xE4ufe",feed_waste:"Kanal (R\xFCcksp\xFClen)",hp_ports:"Anschl\xFCsse",hp_side_right:"rechts",hp_side_left:"links",hp_side_back:"hinten",pool_depth:"Beckentiefe (m)",pool_rim:"Rand \xFCber dem Rasen (m)",pool_depth_hint:"Beckentiefe: vom Rand bis zum Boden. Ein 1,50 m tiefer Pool, der 20 cm aus dem Rasen schaut: Tiefe 1,50, Rand 0,20. Das Wasser steht 15 cm unter dem Rand.",pool_depth_ground:"Die Tiefe zeigt sich in 3D, sobald der Pool in einer Rasen-, Terrassen- oder anderen Fl\xE4che liegt \u2013 ohne Boden drumherum w\xE4re das Becken von au\xDFen zu sehen.",pool_port_depth:"Tiefe",pool_port_depth_hint:"Wie tief unter der Wasserlinie (m): Einl\xE4ufe meist 0,30, der Skimmer an der Wasserlinie",block_some_fixed:"\u{1F512} Ein Teil davon ist fixiert \u2013 der Block l\xE4sst sich erst verschieben, wenn alle gel\xF6st sind.",unfix_all:"Alle l\xF6sen",wv_block_all:"Ganzer Block",wv_block_one:"Nur dieses Teil",wv_gap:"L\xFCcke: {w} \u2013 das passt hinein:",wv_gap_hint:"Tipp auf eine freie Stelle an der Wand: Hier erscheint, was hineinpasst.",wv_kit_title:"An die Wand",wv_recent:"Zuletzt benutzt",wv_none_fits:"Nichts passt in diese L\xFCcke.",wv_cat_base:"Unterschr\xE4nke & Boards",wv_cat_hang:"H\xE4ngend",wv_cat_tall:"Hochschr\xE4nke",wv_cat_living:"Sitzen & Liegen",wv_cat_light:"Leuchten",wv_cat_pack:"Aus deinen Packs",wv_cat_generated:"Generierte Modelle",wv_cat_energy:"Energie",block_title:"M\xF6bel-Block",multi_title:"{n} M\xF6bel ausgew\xE4hlt",block_hint:"Ein Klick w\xE4hlt den ganzen Block, Ziehen verschiebt ihn. Ein einzelnes Teil: doppelt antippen oder unten seinen Namen w\xE4hlen.",multi_hint:"Umschalt + Klick nimmt M\xF6bel dazu oder heraus, Umschalt + Ziehen \xFCber freie Fl\xE4che zieht einen Rahmen. Zusammen verschieben, drehen, kopieren oder als Block zusammenfassen.",block_part_edit:"Nur dieses Teil bearbeiten",block_break:"Block aufl\xF6sen",block_make:"Als Block zusammenfassen",multi_mode:"Mehrere ausw\xE4hlen (Tippen nimmt dazu, Ziehen zieht einen Rahmen)",block_part:"Teil eines Blocks.",block_select:"Ganzen Block w\xE4hlen",block_delete:"{n} M\xF6bel l\xF6schen?",block_delete_fixed:"{n} M\xF6bel l\xF6schen? Einige davon sind fixiert.",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",side_resize:"Seitenleiste breiter oder schmaler ziehen",furn_extra:"Zusatzwert am Symbol (Sensor, z. B. Wassertemperatur)",settings_house:"Haus",settings_weather:"Wetter & Warnungen",settings_modules:"Module",roof_basics:"Dachform",module_no_settings:"Dieses Modul hat keine eigenen Einstellungen.",modules_none:"Noch kein Modul eingespielt.",pack_pro_module:"Pro-Erweiterung von {publisher} \xB7 wird ein Modul",pack_fun_module:"Fun-Pack von {publisher} \xB7 wird ein Modul",modules_pro_note:"Die Pro-Erweiterungen stehen schon hier: Sie werden nach und nach zu Modulen, die ihren Code aus dem Shop mitbringen \u2013 an der Bedienung \xE4ndert sich nichts.",module_import:"Modul einspielen \u2026",module_imported:"\u201E{name}\u201C von {publisher} eingespielt",module_import_hint:"Module importierst du als gepr\xFCfte .fp3dpack-Datei. Die S\xE4tze eines Sprach-Moduls findest du danach unter \u{1F399} Sprachsteuerung.",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_other_hint:"Grundriss aus Sweet Home 3D, einem iPhone-Scan, CAD (DXF), Blender/SketchUp oder einer Saugroboterkarte?",backup_other:"Zur Import-Seite (Beta)",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Signierte Packs und lokale Modell-Packs werden beim Wiederherstellen erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_busy_solar:"Solarmodule",stats_busy_sound:"Musik",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",through_full:"Vollbild",through_full_hint:"Das Kamerabild auf dem ganzen Bildschirm (Esc oder Zur\xFCck beendet es). Wo der Browser das nicht kann, \xF6ffnet sich die Kameraansicht von Home Assistant \u2013 dort auch mit Ton.",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Sichtkegel in 3D zeigen",camera_detect_pins:"Erkennungs-Symbole zeigen (Person, Auto, Tier)",camera_detect_pins_hint:"Aus: Bei einer Erkennung erscheinen keine Symbole \xFCber der Kamera, nur der Sichtkegel f\xE4rbt sich rot \u2013 dezenter auf dem Wandtablet.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m}. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",wall_view:"Wandansicht",walk_start:"Rundgang durchs Haus",walk_title:"Rundgang",walk_end:"Beenden",walk_hint:"Ziehen: umsehen \xB7 Tippen auf den Boden: hinlaufen \xB7 W A S D / Pfeiltasten oder der Kn\xFCppel: laufen \xB7 Esc: beenden",card_next:"n\xE4chster Schritt \u2026",card_step_hole:"Durch ein Loch",card_step_fit:"Einbauen",card_step_end:"Oder ans Ziel",card_lay:"Verlegen",card_hole_out:"nach au\xDFen",card_hole_in:"nach innen",card_to:"Verbinden mit",card_through:"\xDCber (in Reihenfolge, wenn n\xF6tig)",card_group_pool:"Am Pool",card_group_tech:"Technik",card_group_joints:"T- und Y-St\xFCcke",card_group_holes:"L\xF6cher",card_open:"Anschl\xFCsse",card_open_other:"Karte dieses Teils \xF6ffnen",card_port:"Anschluss",card_via:"\xFCber",card_reroute:"Neu verlegen",card_disconnect:"Trennen",card_with:"verbinden mit \u2026",card_connect:"Verbinden",card_connect_with:"Verbinden mit \u2026",card_status:"{a} von {b} verbunden",card_show_plan:"Im Grundriss zeigen",card_show_wall:"In der Wandansicht zeigen",joint_name:"Name (z. B. Loch Skimmer)",conn_hole_out:"{name}: von innen nach au\xDFen",conn_hole_in:"{name}: von au\xDFen nach innen",hint_joint_place:"T- oder Y-St\xFCck: im Grundriss tippen \u2013 auf ein Rohr getippt, wird es ins Rohr eingesetzt",port_suction:"Saugseite",port_pressure:"Druckseite",port_pump:"Von der Pumpe",port_return:"R\xFCcklauf",port_waste:"Abwasser",port_in:"Eingang",port_out:"Ausgang",port_out1:"Ausgang 1",port_out2:"Ausgang 2",port_inside:"innen",port_outside:"au\xDFen",port_used:"belegt",joint_tee:"T-St\xFCck {n}",joint_y:"Y-St\xFCck {n}",joint_wall:"Loch {n} (Wand)",joint_floor:"Loch {n} (Boden)",joint_add_tee:"T-St\xFCck",joint_add_y:"Y-St\xFCck",wall_kit_hole_wall:"Loch in der Wand",wall_kit_hole_floor:"Loch im Boden",wall_kit_tee:"T-St\xFCck",wall_kit_y:"Y-St\xFCck",wall_run_place:"Auf die Wand tippen, wo es hin soll",valve_top6:"6-Wege-Ventil oben",valve_side6:"6-Wege-Ventil seitlich",valve_four:"4-Wege-Ventil",pool_valve_type:"Mehrwegeventil",pool_loose_end:"offenes Ende",pool_holes_hint:"L\xF6cher in Wand und Boden setzt du in der Wandansicht (Leiste links).",conn_add:"Rohr hinzuf\xFCgen",conn_from:"Von",conn_via:"\xDCber (in Reihenfolge)",conn_add_via:"+ Loch, Kugelhahn, Sichtglas \u2026",conn_to:"Nach",conn_and:"Und nach (zweites Ziel, mit T-St\xFCck davor)",conn_choose:"w\xE4hlen \u2026",conn_create:"Anlegen",conn_hint:"Der Weg wird automatisch gelegt \u2013 drinnen an den Anschl\xFCssen entlang, drau\xDFen rechtwinklig unter der Erde. Feinverlegen in der Wandansicht und im Grundriss.",wall_kit_pool:"Pooltechnik",wall_kit_energy:"Energie",wall_run_add:"+ Rohr",wall_run_start:"Rohr: am Ger\xE4t, auf einem Rohr (T-St\xFCck) oder auf der Wand anfangen",wall_run_next:"Weitere Punkte setzen \u2013 am Ger\xE4t oder auf einem Rohr endet es, Doppelklick oder Enter beendet",wall_run_down:"\u2193 In den Boden",wall_run_through:"\u27C2 Durch die Wand",wall_run_done:"Fertig",wall_run_fit:"Auf das Rohr tippen, wo es hin soll",wall_run_valve:"Kugelhahn",wall_run_sight:"Sichtglas",wall_run_pipe:"Rohr",wall_run_pt:"H\xF6he des Punkts (m)",wall_run_more:"Weiterzeichnen",wall_run_tip:"Punkte ziehen \xB7 Doppelklick entfernt \xB7 Kugelhahn antippen: auf/zu",wall_view_turn:"Um 45\xB0 drehen \u2013 an der Wand r\xFCckt es in den Raum",wall_view_fixed:"Fixiert \u2013 zum Ziehen erst l\xF6sen",wall_view_3d:"3D im Raum",wall_view_lift:"Nach oben oder unten ziehen: H\xF6he \xFCber Boden",wall_zoom_hint:"Vergr\xF6\xDFern: Mausrad oder zwei Finger",wall_zoom_all:"Ganze Wand",wall_view_hint_3d:"M\xF6bel antippen und auf dem Boden ziehen \xB7 Mausrad oder zwei Finger: n\xE4her oder weiter weg \xB7 mittlere oder rechte Maustaste (am Tablet zwei Finger): umsehen \xB7 unten Abst\xE4nde und H\xF6he eintippen \xB7 Pfeile links und rechts: zur n\xE4chsten Wand",wall_view_front:"Wand von vorne",wall_view_depth:"Abstand zur Wand (m)",wall_view_room:"W\xE4nde dieses Raums von vorne ansehen",hint_wall_pick:"Wandansicht: in den Raum klicken (oder nah an eine Wand)",wall_view_open:"Die Wand von vorne ansehen: M\xF6bel daran entlang der Wand und in der H\xF6he verschieben",wall_view_hint:"Ziehen verschiebt entlang der Wand und \u2013 bei H\xE4ngendem \u2013 in der H\xF6he \xB7 Pfeiltasten 1 cm, mit Umschalt 10 cm \xB7 Kanten rasten an Wandenden, T\xFCren, Fenstern und anderen M\xF6beln ein (Alt: frei) \xB7 Doppelklick \xF6ffnet das M\xF6bel im Grundriss",wall_view_empty:"An dieser Wand steht noch nichts \u2013 M\xF6bel, die mit dem R\xFCcken an der Wand stehen oder daran h\xE4ngen, erscheinen hier.",wall_view_left:"Abstand von links (m)",wall_view_floor:"steht auf dem Boden",wall_view_form:"Im Grundriss bearbeiten",wall_prev:"Vorige Wand",wall_next:"N\xE4chste Wand",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter nutzen die im Plan verkn\xFCpften Kameras und die gew\xE4hlte Wetter-Entit\xE4t.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",director:"Live-Regie",director_hint:"Ein Bildschirm zeigt von selbst, was im Haus passiert: Es klingelt \u2013 die Ansicht fliegt zur Haust\xFCr und schaut durch die Kamera. Jedes Ereignis ist aus, bis du es einschaltest.",director_here:"Auf diesem Ger\xE4t einschalten",director_here_hint:"Gilt nur f\xFCr diesen Browser, z. B. das Wandtablet. Auf einer Dashboard-Karte schaltest du die Live-Regie in den Karten-Einstellungen ein.",director_doorbell:"Es klingelt: zur T\xFCr fliegen und durch die Kamera schauen",director_doorbell_entity:"Klingel",director_doorbell_camera:"Kamera an der T\xFCr",director_no_doorbell:"Keine Klingel gefunden. W\xE4hle die Ereignis- oder Bin\xE4rsensor-Entit\xE4t deiner Klingel.",director_motion:"Eine Kamera sieht jemanden",director_motion_off:"Aus",director_motion_person:"Nur Personen",director_motion_all:"Jede Bewegung",director_appliances:"Waschmaschine, Trockner oder Sp\xFClmaschine fertig",director_alerts:"Neue Warnung (Rauch, Wasser, Alarm, Fenster bei Regen \u2026)",director_hold:"Zur\xFCck nach (Sekunden)",director_back_hint:"Danach kehrt die Ansicht dorthin zur\xFCck, wo sie war \u2013 au\xDFer jemand hat den Bildschirm inzwischen ber\xFChrt. Wer das Tablet gerade bedient, wird nur von der Klingel und von Warnungen unterbrochen. Die Klingel bleibt doppelt so lange.",voice:"Sprachsteuerung",voice_hint:"Ein Mikrofon-Knopf unten links in der 3D-Ansicht: antippen und sprechen. \u201EZeig das Wohnzimmer\u201C, \u201EObergeschoss\u201C oder \u201Edas ganze Haus\u201C zeigt den Ort; alles andere (\u201ELicht im Flur an\u201C) geht an Assist von Home Assistant.",voice_here:"Auf diesem Ger\xE4t einschalten",aliases:"Weitere Namen f\xFCr die Sprache",aliases_hint:"Weitere Namen, mit Komma getrennt \u2013 so sprichst du den \u201ESmart TV Pro\u201C als \u201EWohnzimmerfernseher\u201C oder \u201EGlotze\u201C an. Gilt f\xFCr die Sprachsteuerung und die Suche.",aliases_placeholder:"z. B. Wohnzimmerfernseher, Glotze",voice_understands:"Das versteht NeonPlan",voice_examples:"\u201EZeig das Wohnzimmer\u201C|\u201EGeh ins Obergeschoss\u201C|\u201EZeig das ganze Haus\u201C|\u201EZeig die Waschmaschine\u201C / \u201EWo ist der Trockner?\u201C|\u201EZeig die Kamera Haust\xFCr\u201C / \u201EZeig die Auffahrtkamera\u201C|\u201EZeig die Kameras\u201C|Alles andere (\u201ELicht im Flur an\u201C) geht an Assist",voice_needs:"Braucht https, die Freigabe des Mikrofons (in Fully Kiosk: Web Content Settings \u2192 Mikrofonzugriff) und eine Assist-Pipeline mit Spracherkennung. Auf einer Dashboard-Karte schaltest du den Knopf in den Karten-Einstellungen ein.",voice_showing:"Ich zeige {name}.",screen_name:"Bildschirmname (f\xFCr Assist)",screen_name_placeholder:"z. B. K\xFCche",screen_name_hint:"Fragst du Assist (\u201EZeig das Wohnzimmer\u201C) oder ruft eine Automation den Dienst neonplan3d.ask, reagiert jede offene NeonPlan-Ansicht. Nennt der Dienst einen Bildschirm, reagiert nur die Ansicht mit diesem Namen.",voice_button:"Sprechen",voice_listen:"Ich h\xF6re zu \u2026",voice_none:"Nichts verstanden",voice_silent:"Das Mikrofon liefert nur Stille. Meist h\xE4lt eine andere App es fest \u2013 in Fully Kiosk die Bewegungserkennung per Ger\xE4usch ausschalten (Motion Detection \u2192 Acoustic Detection) und neu laden.",voice_no_pipeline:"Keine Spracherkennung in Assist eingerichtet (Einstellungen \u2192 Sprachassistenten).",voice_denied:"Mikrofon nicht freigegeben \u2013 nur \xFCber https und mit Freigabe im Browser bzw. in Fully Kiosk.",voice_error:"Sprachsteuerung: {msg}",card_voice:"Sprachsteuerung (Mikrofon-Knopf)",card_voice_hint:"\u201EZeig das Wohnzimmer\u201C zeigt den Raum, andere S\xE4tze gehen an Assist. Braucht https und ein freigegebenes Mikrofon",director_mic_test:"\u{1F399}\uFE0F Mikrofon testen",director_mic_hint:"Pr\xFCft auf diesem Ger\xE4t https, Mikrofon und die Spracherkennung von Assist und zeigt, welchen Raum ein Satz \xF6ffnen w\xFCrde. Es wird nichts geschaltet.",voice_pipeline:"Assist-Pipeline auf diesem Ger\xE4t",voice_pipeline_preferred:"Bevorzugte aus Home Assistant",voice_pipeline_no_stt:"ohne Spracherkennung",backdrop:"Hintergrund",backdrop_kind:"Hinter dem Haus",backdrop_look:"Himmel des Looks (Standard)",backdrop_color:"Eine Farbe",backdrop_gradient:"Farbverlauf",backdrop_image:"Bild",backdrop_top:"Farbe oben",backdrop_bottom:"Farbe unten",backdrop_image_url:"Bild-Adresse",backdrop_dim:"Abdunkeln",backdrop_image_bad:"Diese Adresse geht nicht: https://\u2026 oder ein Pfad wie /local/hintergrund.jpg",backdrop_hint:"Das Bild legst du in Home Assistant unter config/www ab, dann hei\xDFt es /local/dateiname.jpg. Das Abdunkeln h\xE4lt die Neonlinien lesbar. Kostet keine Leistung \u2013 auch auf alten Tablets.",director_live:"Livebild beim Durchschauen",director_live_hint:"Statt eines Standbilds alle paar Sekunden l\xE4uft das Video der Kamera (\xFCber den Player von Home Assistant). Braucht mehr Leistung \u2013 auf sehr alten Tablets lieber aus lassen.",director_triggers:"Eigene Ausl\xF6ser",director_triggers_hint:"Geht eine dieser Entit\xE4ten an oder auf \u2013 eine zweite Klingel, das Garagentor, das Gartentor \u2013, fliegt die Ansicht hin und schaut durch die gew\xE4hlte Kamera (ohne Kamera: zum Ger\xE4t).",director_trigger_entity:"Ausl\xF6ser",director_trigger_add:"+ Ausl\xF6ser hinzuf\xFCgen",card_director:"Live-Regie (Kamera-Cockpit)",card_director_hint:"Die Karte zeigt von selbst, was passiert. Welche Ereignisse, legst du im Editor unter \u201ELive-Regie\u201C fest.",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",rain_entity:"Regen von eigener Wetterstation",rain_entity_hint:"Ein Regensensor (an = Regen) oder eine Regenrate (mm/h) deiner Wetterstation sagt, ob es am Haus regnet \u2013 f\xFCr die Regenwarnung und den Regen in 3D. Ohne Auswahl entscheidet die Wetter-Entit\xE4t.",rain_ignore:"Bei Regen nicht warnen",rain_ignore_hint:"Dieses Fenster darf bei Regen offen bleiben (z. B. unter dem Vordach): keine Regenwarnung f\xFCr dieses Fenster, alle anderen warnen weiter.",outage_entity:"Stromausfall melden mit",outage_entity_hint:"Eine Entit\xE4t, die einen Stromausfall meldet: ein Netz-Sensor (binary_sensor der Klasse power \u2013 \u201Eaus\u201C hei\xDFt kein Strom), eine USV (\u201Eauf Batterie\u201C), eine Netzspannung unter 100 V oder ein eigener Helfer, der bei Ausfall \u201Ean\u201C ist. Dann erscheint eine Warnung, und der Netzanschluss wird durchgestrichen.",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_names:"Ger\xE4tenamen in Warnungen zeigen",alert_names_hint:"An: \u201EK\xFCche \xB7 Rauch: Rauchmelder K\xFCche\u201C. Aus: nur \u201EK\xFCche \xB7 Rauch\u201C \u2013 k\xFCrzer auf dem Wandtablet. Ohne Raum bleibt der Ger\xE4tename stehen.",alert_short_smoke:"Rauch",alert_short_gas:"Gas",alert_short_co:"Kohlenmonoxid",alert_short_water:"Wasser",alert_short_alarm:"Alarm ausgel\xF6st",alert_short_alarm_pending:"Alarm wird ausgel\xF6st",alert_short_window_rain:"Fenster offen bei Regen",alert_short_power_outage:"Stromausfall",power_outage:"Stromausfall",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_pets:"Haustiere zeigen",card_ghost:"Halloween-Geist zeigen",card_ghost_hint:"Fun-Pack Halloween: der Geist schwebt auch durch das Haus dieser Karte (z. B. am Wandtablet ausschalten)",card_pets_hint:"Fun-Pack Haustiere: die angelegten Tiere in dieser Karte zeigen (z. B. am Wandtablet ausschalten)",news_pets_title:"Neu: Haustiere \u2013 ein Geschenk f\xFCr euch",news_pets_text:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus, laufen durch die R\xE4ume, legen sich aufs Sofa und gehen sogar die Treppe hoch \u2013 und im Aquarium schwimmen Fische. Das Fun-Pack gibt es gratis mit jedem Kundenkonto.",news_to_shop:"Zum Shop",news_later:"Sp\xE4ter",news_never:"Nicht mehr anzeigen",gift_title:"\u{1F381} Zwei Geschenke f\xFCr dich: Halloween und Haustiere",gift_text:"Die Fun-Packs Halloween (K\xFCrbisse, Flederm\xE4use, Hexenkessel und ein Geist, der durchs Haus schwebt) und Haustiere (Katze, Hund und Kaninchen, die durch dein Haus laufen) liegen gratis in deinem Kundenkonto. Unter Erweiterungen installierst du sie mit einem Klick.",gift_install:"Zu den Erweiterungen",gift_title_free:"\u{1F381} Gratis: Halloween und Haustiere",gift_text_free:"K\xFCrbisse, Flederm\xE4use und ein Geist, der durchs Haus schwebt \u2013 dazu Katze, Hund und Kaninchen, die in deinem 3D-Haus leben. Beide Fun-Packs gibt es kostenlos mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Erweiterungen \u2192 Shop-Verbindung einf\xFCgen. Danach siehst du neue Packs direkt hier.",gift_register:"Kostenloses Konto anlegen",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof:"Dach zeigen",card_roof_hint:"Aus: Das Haus erscheint ohne Dach, als h\xE4tte es keins \u2013 die R\xE4ume liegen offen (Solarfelder auf dem Dach entfallen mit)",room_order_up:"Raum nach oben (fr\xFCher in der Raumleiste)",room_order_down:"Raum nach unten (sp\xE4ter in der Raumleiste)",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",ext_show_list:"Liste zeigen",ext_hide_list:"Liste zuklappen",ext_sum_installed:"installiert",ext_sum_updates:"Updates",ext_sum_missing:"noch nicht installiert",ext_sum_all:"Alle {n} installieren/aktualisieren",ext_sum_packs:"M\xF6bel-Packs ({items} M\xF6bel)",ext_sum_feature_packs:"Erweiterungen",ext_sum_modules:"Module",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren. Lokale JSON-Modell-Packs werden streng gepr\xFCft und d\xFCrfen keine Funktionen freischalten.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Verwende ein Pack, das f\xFCr diese Installation signiert wurde.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_import_local_model:"Eigenes M\xF6bel-Pack importieren \u2026",pack_import_local_model_hint:"JSON-Payload oder .fp3dpack-H\xFClle: \xDCbernommen wird nur \u201Epayload\u201C; die Signatur wird nicht gepr\xFCft oder \xFCbernommen. Das M\xF6belschema wird streng gepr\xFCft, Funktionen werden nicht freigeschaltet und das Pack als \u201EOpen Edition \xB7 lokal\u201C markiert.",pack_local_model_label:"Open Edition \xB7 lokal",pack_local_model_imported:"\u201E{name}\u201C lokal importiert \u2013 {n} Modelle",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 Pro-Funktionen: {n}",pack_module:"Modul von {publisher} \xB7 l\xE4uft im Haus",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"Funktion nicht verf\xFCgbar",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie",edition_name_energy_pro:"Energie",edition_feature_energy_pro:"Stromfl\xFCsse, Solarmodule und Verbrauchswerte \u2013 aus den in Home Assistant verkn\xFCpften Daten.",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun-Pack \xB7 kostenlos f\xFCr Kunden",offers_dot:"Neues im Shop",ext_badge_new:"{n} neu",ext_badge_ready:"{n} bereit",ext_badge_ready_hint:"Packs zum Installieren oder Aktualisieren \u2013 ein Klick unter Erweiterungen",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Funktionen f\xFCr NeonPlan 3D. Herausgeber-signierte Packs und eigene M\xF6belmodelle lassen sich hier importieren.",ext_shop:"Shop \xF6ffnen",ext_pro:"Funktionen",fun_title:"Fun-Extras",fun_intro:"Haustiere und Halloween-Geist sind direkt enthalten. Hier kannst du sie ein- und ausschalten.",fun_in_account:"Gratis in deinem Kundenkonto \u2013 oben bei deinen Packs installieren.",fun_register:"\u{1F381} Kostenloses Kundenkonto anlegen",fun_register_steps:"Gratis mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Shop-Verbindung einf\xFCgen.",fun_name_pets:"Haustiere",fun_feature_pets:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus: Sie laufen durch die R\xE4ume, legen sich aufs Sofa, aufs Bett oder auf den Teppich und schlafen nachts.",fun_name_halloween:"Halloween",fun_feature_halloween:"Ein Halloween-Geist, der ab und zu durchs Haus schwebt.",halloween_ghost:"Geist schweben lassen",halloween_deco_hint:"Der Geist l\xE4sst sich hier ein- und ausschalten. Zus\xE4tzliche Halloween-Deko-M\xF6bel sind in dieser Ausgabe nicht enthalten.",pets_show:"Haustiere zeigen",pet_add:"Haustier hinzuf\xFCgen",pet_name:"Name",pet_kind:"Tier",pet_kind_cat:"\u{1F431} Katze",pet_kind_dog:"\u{1F436} Hund",pet_kind_rabbit:"\u{1F430} Kaninchen",pet_fur:"Fell",pet_fur_orange:"Rot",pet_fur_tabby:"Getigert",pet_fur_black:"Schwarz",pet_fur_white:"Wei\xDF",pet_fur_grey:"Grau",pet_fur_brown:"Braun",pet_fur_calico:"Gl\xFCckskatze",pet_fur_golden:"Golden",pet_fur_cream:"Creme",pet_breed:"Rasse",pet_breed_dachshund:"Dackel",pet_breed_pug:"Mops",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Sch\xE4ferhund",pet_floor:"Etage",pet_floor_auto:"Erdgeschoss",ext_active:"aktiv",ext_source_open_edition:"Open Edition",ext_source_signed_pack:"Signiertes Pack",ext_source_locked:"Gesperrt",ext_get:"Im Shop ansehen",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Danke, dass du NeonPlan 3D unterst\xFCtzt! Mit diesem Code schaltest du auf Discord die Rolle \u{1F499} Supporter frei \u2013 damit siehst du den Kanal #beta-feedback und testest neue Erweiterungen als Erste.",supporter_open:"Discord \xF6ffnen",supporter_how:"So geht's: In Discord /supporter tippen (nicht einf\xFCgen), den Befehl in der Liste dar\xFCber anklicken, dann den Code ins Feld \u201Ecode\u201C einf\xFCgen und Enter dr\xFCcken. Den Code nie als normale Nachricht senden \u2013 die sieht jeder.",nl_title:"\u{1F381} 4 M\xF6bel-Packs geschenkt",nl_text:"Abonniere den NeonPlan-Newsletter und bekomm die Schnupper-Packs Wohnzimmer, K\xFCche, Schlafzimmer und Bad gratis \u2013 sie erscheinen nach der Best\xE4tigung automatisch hier. Im Newsletter: neue Versionen, neue M\xF6bel und Angebote. Abmelden jederzeit m\xF6glich.",nl_button:"Newsletter abonnieren",nl_hide:"Nicht mehr zeigen",nl_after:"Danke! Bitte best\xE4tige die Mail, die gleich kommt. Die Packs erscheinen danach hier \u2013 sp\xE4testens beim n\xE4chsten t\xE4glichen Abgleich, sofort mit \u201E{button}\u201C.",beta_yours:"Beta \xB7 f\xFCr dich als Supporter",beta_supporters:"Beta \xB7 zuerst f\xFCr Supporter",beta_yours_hint:"Weil du Supporter bist, darfst du diese Erweiterung schon vorab testen. Sag uns auf Discord (Kanal #beta-feedback), was gut l\xE4uft und was nicht.",beta_supporters_hint:"Diese Erweiterung ist noch in der Beta und zuerst nur mit dem Supporter-Pass erh\xE4ltlich. Sobald sie fertig ist, gibt es sie f\xFCr alle im Shop.",beta_feedback:"Feedback auf Discord",beta_become:"Supporter werden",beta_ready:"Liegt f\xFCr dich bereit \u2013 unten bei deinen Packs installieren.",beta_supporter_missing:"Als Supporter bekommst du diese Beta. Auf deinem Schl\xFCssel ist sie noch nicht freigeschaltet \u2013 schreib uns kurz im Discord, wir schalten sie frei.",beta_bar:"Beta \u2013 du testest als Supporter zuerst. Feedback gern auf Discord (#beta-feedback).",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Signierte M\xF6bel-Packs",ext_teaser_text:"Importiere vom Herausgeber signierte Packs oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te, Gas- und Wasserverbrauch von heute \u2013 W\xE4rme folgt als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto",edition_name_auto_pro:"Auto",edition_feature_auto_pro:"Ladestand, Reichweite, Laden, Verriegelung und Klima \u2013 nur, wenn die Fahrzeugintegration diese Daten bereitstellt.",edition_name_pool:"Pool",edition_feature_pool:"Poolwasser in 3D, Pumpen- und W\xE4rmepumpensteuerung, Wasserwerte, Abdeckung und Warnungen.",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",pro_name_time_travel:"Zeitreise",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (Modul): Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft; die Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe mit Solltemperatur, pH, Chlor/Redox und Salz mit Ampel; die Abdeckung f\xE4hrt \xFCber das Wasser; Warnungen bei pH, Chlor, Salz und Frost; die Pooltechnik baut sich auf Knopfdruck auf, das Wasser flie\xDFt sichtbar durch die Rohre",pool_pump:"Filterpumpe",pool_ph:"pH-Wert",pool_shape:"Form",pool_shape_rect:"Eckig",pool_shape_round:"Rund",pool_shape_oval:"Oval",pool_diameter:"Durchmesser (m)",pool_shape_free:"Frei",tool_pool:"Pool",hint_pool:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen",hint_pool_tech:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen \xB7 Anschl\xFCsse, Ger\xE4te und Rohre rechts",hint_pipe_start:"Rohr: Start antippen (Anschluss oder Ger\xE4t)",hint_pipe_pool:"Rohr: zuerst den Pool antippen, zu dem die Rohre geh\xF6ren",hint_pipe_next:"Ecken antippen, dann das Ziel (Anschluss oder Ger\xE4t) \xB7 Esc bricht ab",pool_tool_empty:"Noch kein Pool auf dieser Etage: W\xE4hle oben die Form und ziehe den Pool auf.",pool_choose:"Welchen Pool bearbeiten?",pool_ports:"Anschl\xFCsse",pool_ports_hint:"Skimmer und Einl\xE4sse sitzen am Beckenrand, der Bodenablauf im Becken; der Abwasser-Anschluss nimmt das R\xFCcksp\xFClwasser auf. Im Plan verschieben.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bodenablauf",pool_port_inlet:"Einlass",pool_port_waste:"Abwasser",pool_devices:"Technik",furn_pool_pump:"Filterpumpe",furn_pool_filter:"Sandfilter",furn_pool_heat_pump:"W\xE4rmepumpe",furn_pool_dosing:"Dosieranlage",furn_pool_valve:"Kugelhahn",pool_valve_position:"Stellung des 6-Wege-Ventils",valve_filter:"Filtern",valve_backwash:"R\xFCcksp\xFClen",valve_rinse:"Nachsp\xFClen",valve_waste:"Entleeren",valve_recirculate:"Zirkulieren",valve_closed:"Geschlossen",pool_valve_open:"offen",pool_pipes:"Rohre",pool_pipe_draw:"Rohr zeichnen",pool_pipe_draw_hint:"Rohre verbinden Anschl\xFCsse und Ger\xE4te in Flie\xDFrichtung: vom Skimmer zur Pumpe, weiter zum Filter, \xFCber W\xE4rmepumpe oder Bypass zu den Einl\xE4ssen. An einer Verteilung flie\xDFt das Wasser \xFCber die W\xE4rmepumpe, solange sie an ist, sonst \xFCber den Bypass; ein geschlossener Kugelhahn sperrt. Kugelhahn im Plan antippen: auf/zu.",pool_pipe_height:"H\xF6he \xFCber Boden (m)",pool_pipe_reverse:"Flie\xDFrichtung umdrehen",pool_above:"Aufstellpool (steht auf dem Boden)",pool_above_hint:"Ein Pool, der auf dem Boden steht, statt eingelassen zu sein: Wand rundum, das Wasser knapp unter dem Rand.",pool_height:"Beckenh\xF6he",pro_feature_time_travel:"Zeitreise: Ein Zeitregler spielt bis zu 7 Tage im Haus ab \u2013 Lichter, T\xFCren, Fenster, Rolll\xE4den, Bewegung, Heizung, Wetter und Sonne, mit Ereignis-Markern. Nur ansehen, nichts wird geschaltet",tt_chip:"Zeitreise",tt_hint:"Bis zu 7 Tage im Haus abspielen (nur ansehen, nichts wird geschaltet)",tt_badge:"ZEITREISE",tt_live:"Live",tt_live_hint:"Zur\xFCck zur Gegenwart",tt_play:"Abspielen",tt_pause:"Anhalten",tt_prev:"Voriges Ereignis",tt_next:"N\xE4chstes Ereignis",tt_speed:"Tempo: 1 Stunde in {s}",tt_now:"jetzt",tt_ago:"vor {d}",tt_since:"seit {time}",tt_loading:"Lade Verlauf \u2026",tt_error:"Verlauf nicht geladen: {error}",tt_retry:"Erneut",tt_no_recorder:"Ohne den Recorder von Home Assistant gibt es keinen Verlauf.",tt_restart:"Bitte Home Assistant neu starten \u2013 erst dann kennt es die Zeitreise.",tt_locked:"Die Zeitreise ist eine Pro-Erweiterung.",tt_readonly:"Zeitreise: nur ansehen \u2013 nichts wird geschaltet",tt_ev_door:"{name} ge\xF6ffnet",tt_ev_garage:"{name} ge\xF6ffnet",tt_ev_lock:"{name} entriegelt",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Rauch: {name}",tt_ev_outage:"Stromausfall",tt_ev_camera:"Kamera erkennt Bewegung: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Kohlenmonoxid: {name}",tt_ev_water:"Wasser: {name}",tt_ev_rain:"Fenster offen bei Regen: {name}",tt_ev_motion:"Bewegung in der Nacht: {name}",tt_ev_washer:"{name} fertig",tt_ev_robot_start:"{name} startet",tt_ev_robot_done:"{name} fertig",card_time_travel:"Knopf \u201EZeitreise\u201C",card_time_travel_hint:"Ein Knopf unten in der Karte spielt die letzten Stunden und Tage ab (Pro: Zeitreise).",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist in dieser Ausgabe nicht verf\xFCgbar.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_local_model_features:"Lokale M\xF6bel-Packs d\xFCrfen keine Funktionen freischalten.",pack_error_local_model_id_conflict:"Ein vorhandenes Pack verwendet diese ID bereits. Bitte gib dem lokalen Pack eine andere ID.",pack_error_invalid_local_model:"Das lokale M\xF6bel-Pack ist ung\xFCltig.",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",license_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie jetzt",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Weitere Verbrauchswerte kommen sp\xE4ter dazu.",pro_unlock:"Freischalten",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",help_discord:"Community auf Discord",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_mirror:"Von hinten gespiegelt (wie Glas)",holo_device_min_w:"Ger\xE4te-Karten ausblenden unter (W)",holo_device_house:"Ger\xE4te-Karten auch in der Hausansicht",holo_device_house_hint:"Aus: Die Karten \xFCber den Ger\xE4ten erscheinen nur, wenn ihre Etage ge\xF6ffnet ist.",holo_plant_floor:"Hausbilanz und Anlagen-Karten auch in Etagenansichten",room_ceiling:"Deckenh\xF6he (m)",units:"L\xE4ngen",units_auto:"Automatisch ({unit})",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:`Wie der Editor L\xE4ngen zeigt und liest. Automatisch folgt dem Einheitensystem von Home Assistant. Gespeichert wird immer in Metern \u2013 Fu\xDF und Zoll tippst du z. B. als 8' 2", 98in oder 8.2ft.`,room_area_net:"Fl\xE4che {a} \xB7 netto {n}",room_area_net_hint:"Netto: ohne die W\xE4nde, die in den Raum ragen \u2013 geteilte Innenw\xE4nde liegen zur H\xE4lfte im Raum, freie W\xE4nde und der Spalt hinter einer Vorwand z\xE4hlen nicht mit.",room_ceiling_hint:"Leer = H\xF6he der Etage. Mit eigener H\xF6he enden die W\xE4nde des Raums dort (au\xDFer ein Nachbarraum ist h\xF6her), und Deckenleuchten h\xE4ngen an dieser Decke \u2013 z. B. 2,5 m im Wohnraum neben einer 5 m hohen Garage.",holo_plant_floor_hint:"An: Die Karten bleiben auch sichtbar, wenn eine Etage ge\xF6ffnet ist \u2013 auf der Etage ihres Solarfelds (Felder auf dem Dach: oberste Etage, im Garten: unterste).",holo_device_room:"Ger\xE4te-Karten im ge\xF6ffneten Raum",holo_device_room_hint:"An: \xD6ffnest du einen Raum, erscheinen die Karten der Ger\xE4te in diesem Raum (nur dieses Raums).",holo_mirror_hint:"Schaust du von der R\xFCckseite des Solarfelds, zeigen die Karten ihre R\xFCckseite \u2013 gespiegelt wie eine Glasscheibe. Aus: Sie bleiben von \xFCberall lesbar.",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_no_field:"Noch kein Solarfeld im Plan: Das Hologramm schwebt neben dem Haus.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",hint_outdoor_free:"Ecken der Au\xDFenfl\xE4che setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",outdoor_shape_rect:"Rechteck",outdoor_shape_free:"Freie Form",outdoor_draw_type:"Zeichnen:",outdoor_draw_type_hint:"Was du als N\xE4chstes aufziehst: Rasen, Terrasse, Weg, Pool \u2026 Die Art l\xE4sst sich danach im Formular noch \xE4ndern.",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_balcony:"Balkon",balcony_rail:"Gel\xE4nderh\xF6he",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_area_hint:"Mit einem Bereich wird die Fl\xE4che wie ein Raum: Antippen in 3D \xF6ffnet sie mit den Ger\xE4ten des Bereichs, sie steht in der Raumleiste und tr\xE4gt ihren Namen.",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",straighten:"Schiefe Kanten begradigen",straighten_hint:"Findet Raumkanten, die nur um wenige Zentimeter schief laufen (eine Ecke 1 cm daneben), und richtet sie gerade aus. Bewusst schr\xE4ge W\xE4nde bleiben.",straighten_done:"{n} fast gerade Kanten begradigt.",straighten_none:"Keine schiefen Kanten gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",wall_profile_invalidated:"Ein Wandoberkanten-Profil wurde entfernt, weil die ge\xE4nderte Kante keine verl\xE4ssliche Zuordnung mehr hat.",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",angle_lock:"3D-Sperre",angle_lock_hint:"Der Blickwinkel bleibt fest: Ziehen verschiebt die Ansicht, Zoomen geht weiter \u2013 niemand dreht das Haus aus Versehen.",keep_view_hint:"Beim Wechsel von Etage zu Etage bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",terrain:"Gel\xE4nde",terrain_hint:"Wo der Boden um das Haus liegt. Was darunter liegt \u2013 ein Keller, der untere Teil eines Souterrains \u2013 steckt in 3D in der Erde; Rasen, Wege und Terrassen liegen auf dem Gel\xE4nde.",terrain_level:"Gel\xE4ndeh\xF6he (m, Erdgeschoss = 0)",terrain_earth:"Keller in der Erde zeigen",terrain_earth_hint:"Etagen unter dem Gel\xE4nde stecken in der Erde; \xF6ffnest du sie, siehst du sie wie in einer Baugrube. Aus: Sie stehen frei wie bisher.",terrain_cellar_hint:"Souterrain: die Gel\xE4ndeh\xF6he so weit senken, wie der Keller herausschauen soll \u2013 etwa \u22121,2 m. Kellerfenster unter dem Gel\xE4nde bekommen einen Lichtschacht.",terrain_no_cellar_hint:"Einen Keller legst du als Etage mit negativer H\xF6he an, zum Beispiel \u22122,6 m.",terrain_reset:"Gel\xE4nde zur\xFCcksetzen",cellar_window:"Kellerfenster",well:"Lichtschacht",well_hint:"Dieses Fenster liegt unter dem Gel\xE4nde: In 3D bekommt es einen Lichtschacht mit Gitterrost. Ohne Haken keinen \u2013 etwa wenn au\xDFen ein Weg vorbeif\xFChrt.",well_rim:"Rand \xFCber dem Gel\xE4nde (m)",cellar_window_hint:"Klein und oben in der Wand: 100 \xD7 50 cm, 25 cm unter der Decke. Liegt es unter dem Gel\xE4nde, bekommt es in 3D einen Lichtschacht mit Gitterrost.",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",contact_invert:"Kontakt umkehren",contact_invert_hint:"F\xFCr Sensoren, die offen und geschlossen andersherum melden",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_rise:"Anstieg (\xB0)",strip_rise_hint:"Der Streifen steigt entlang seiner L\xE4nge an, etwa die Treppe hinauf oder am Handlauf (~35\u201340\xB0). Die H\xF6he \xFCber Boden ist dann seine Mitte.",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_sofa_l:"Ecksofa (L-Form)",furn_sofa_u:"Wohnlandschaft (U-Form)",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_u:"U-Treppe mit Podest",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. \xDCber mehreren R\xE4umen wird sie in jedem Raum ausgeschnitten; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_slope:"Schr\xE4g",wall_slope_hint:"Schr\xE4ge Wand: eine eigene H\xF6he an jeder Ecke, die Oberkante l\xE4uft gerade dazwischen \u2013 Pultdach, Hang, Oberlichter auf der hohen Seite. Fenster und T\xFCren bleiben unter der Oberkante.",wall_slope_start:"H\xF6he an Ecke {n} (m)",wall_slope_end:"H\xF6he an Ecke {n} (m)",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",wall_pos_hint:"X und Y: die Mitte der Wand im Plan.",stairwell_outside:"Diese \xD6ffnung liegt in keinem Raum und wird deshalb nicht ausgeschnitten. Ziehe sie in einen Raum.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",theme_auto:"Auto (Tag/Neon nach Sonne)",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Einklappen",side_fold_hint:"Seitenleiste schmal machen \u2013 mehr Platz f\xFCr den Grundriss",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",markers_room:"Im Raum",pin_size:"Symbolgr\xF6\xDFe",pin_size_small:"Klein",pin_size_normal:"Normal",pin_size_large:"Gro\xDF",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_ac_unit:"Klimager\xE4t (Wand)",furn_awning:"Markise",furn_group_outdoor:"Terrasse & Balkon",bin_from:"Leuchten ab (Uhr, am Vortag)",bin_until:"bis (Uhr, am Abholtag)",bin_none:"Keine Abholung in Sicht",hh_title:"Heute im Haushalt",hh_notes:"Pinnwand (Text-Helfer)",hh_notes_hint:"Ein Text-Helfer (input_text) oder Sensor, dessen Text in \u201EHeute im Haushalt\u201C steht \u2013 mehrere Zeilen mit | trennen. Automationen schreiben hinein (\u201EPaket liegt in der Garage\u201C), die Karte zeigt es.",heat_sensor:"Heizt (Sensor)",heat_sensor_hint:"Sagt der Thermostat nicht, ob er heizt (Tuya-Ventile melden einen \u201EWork state\u201C), nimm hier den Sensor: ein/opened/heating oder eine \xD6ffnung \xFCber 0 % l\xE4sst den Heizk\xF6rper gl\xFChen.",door_lock:"Smart Lock",door_lock_hint:"Das Schloss der T\xFCr (Nuki, Aqara \u2026): ein Pin an der T\xFCr zeigt zu oder offen, ein Tipp schlie\xDFt auf oder ab.",clock:"Uhr",clock_off:"Aus",clock_tl:"\u2196 Uhr",clock_tr:"\u2197 Uhr",clock_bl:"\u2199 Uhr",clock_br:"\u2198 Uhr",editor_floor:"Start-Etage im Editor",editor_floor_auto:"Erste der Liste",editor_floor_hint:"Mit welcher Etage der Editor \xF6ffnet.",hh_left:"noch {t}",hh_done:"Fertig!",hh_finished:"{name} ist fertig",hh_thirsty:"Durst",hh_plant:"{name} braucht Wasser",hh_service:"{name}: Wartung f\xE4llig",hh_fridge_open:"{name} steht offen",alert_fridge_door:"K\xFChlschrank offen: {name}",alert_short_fridge_door:"K\xFChlschrank offen",hh_moisture:"Pflanze (plant.*) oder Feuchtesensor",hh_moisture_min:"Durst unter (%)",hh_remaining:"Restzeit (Sensor)",hh_door:"T\xFCr-Sensor",hh_fridge_door:"T\xFCr-Sensor",hh_appliance_hint:"L\xE4uft das Ger\xE4t, zeigt seine Markierung die Restzeit; danach \u201EFertig!\u201C, bis die T\xFCr aufgeht oder es wieder l\xE4uft.",hh_door_alarm:"Warnen nach (Minuten offen)",hh_service_entity:"Verbrauchsteil / Wartung (Sensor)",hh_service_min:"F\xE4llig ab (\u2264 Prozent oder Tage)",hh_service_hint:"Etwa Filter, Salz oder Klarsp\xFCler: ein Bin\xE4rsensor (an = f\xE4llig), eine Zahl (Prozent oder Tage \xFCbrig) oder ein Datum. Ist es f\xE4llig, leuchtet das Ger\xE4t gelb und steht in \u201EHeute im Haushalt\u201C.",hh_teaser_plant:"Mit Haushalt Pro zeigt die Pflanze, wann sie Wasser braucht.",hh_teaser_appliance:"Mit Haushalt Pro zeigt das Ger\xE4t seine Restzeit und \u201EFertig!\u201C, bis die T\xFCr aufgeht.",hh_teaser_fridge:"Mit Haushalt Pro warnt NeonPlan, wenn die K\xFChlschrankt\xFCr zu lange offen steht.",card_household:"Heute im Haushalt",card_household_hint:"Haushalt Pro: Glaskarte mit Tonnen, Post, fertigen Ger\xE4ten, durstigen Pflanzen und f\xE4lliger Wartung",furn_waste_bin:"M\xFClltonne",furn_mailbox:"Briefkasten",furn_wifi_ap:"WLAN-Access-Point",furn_water_heater:"Warmwasserspeicher",tech_mount:"Montage",wifi_ap_std:"An der Decke",wifi_ap_wall:"An der Wand",water_heater_std:"Standspeicher",water_heater_wall:"Flachspeicher an der Wand",ap_status:"Status (Verbindung, Zustand)",ap_clients_sensor:"Sensor: verbundene Ger\xE4te",ap_clients:"{n} Ger\xE4te",ap_offline:"Offline",ap_hint:"Der Ring leuchtet blau, solange der Access Point da ist, und rot, wenn er fehlt \u2013 dann zeigt sich auch sein Symbol. Diagnose-Entit\xE4ten (etwa von UniFi) stehen hier mit zur Wahl.",heater_entity:"Ger\xE4t (water_heater, Thermostat oder Schalter)",heater_temp:"Sensor: Wassertemperatur (optional)",heater_hint:"Der Speicher gl\xFCht warm, solange er heizt (Thermostat \u201Eheizt\u201C, Schalter an oder Leistung \xFCber der Schwelle), und zeigt die Wassertemperatur \u2013 aus dem Sensor oder vom Ger\xE4t selbst.",furn_lamp_fan:"Deckenventilator mit Licht",fan_entity:"Ventilator (fan-Entit\xE4t)",fan_hint:"Das Licht oben schaltet die Leuchte. Mit einem Ventilator drehen sich die Fl\xFCgel mit seiner Stufe, und er bekommt ein eigenes Symbol daneben: Tippen schaltet ihn, lange dr\xFCcken stellt die Stufe ein.",furn_wall_switch:"Lichtschalter",furn_wall_socket:"Steckdose",furn_group_switches:"Haustechnik",wv_cat_switches:"Schalter",gang_count_switch:"Tasten im Rahmen",gang_count_socket:"Dosen im Rahmen",socket_kind:"Bauform",socket_indoor:"Innen",socket_outdoor:"Au\xDFensteckdose mit Klappe",gang_switch:"Taste schaltet",gang_socket:"Dose schaltet",gang_switch_hint:"Jede Taste bekommt ihre eigene Entit\xE4t (Licht, Schalter, L\xFCfter) und leuchtet, solange sie an ist \u2013 ein Licht in seiner Farbe. Antippen schaltet; bei mehreren Tasten \xF6ffnet sich ein kleines Men\xFC.",gang_socket_hint:"Jede Dose bekommt ihre eigene Entit\xE4t (das Relais, der Zwischenstecker) und auf Wunsch einen Leistungssensor; sie leuchtet gr\xFCn, solange sie an ist. Dieselbe Entit\xE4t darf an mehreren Dosen h\xE4ngen \u2013 zwei Steckdosen an einem Relais.",furn_group_household:"Haushalt",bin_shape:"Bauform",bin_shape_bin120:"Rolltonne 120 l",bin_shape_bin240:"Rolltonne 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Mehrkammer-Tonne",bin_shape_bag:"Sack",bin_shape_caddy:"Eimer / Caddy",bin_shape_underground:"Unterflur-Container",bin_kind:"Abfallart",bin_kind_rest:"Restm\xFCll",bin_kind_bio:"Bio",bin_kind_paper:"Papier",bin_kind_plastic:"Verpackung (Gelbe Tonne / Sack)",bin_kind_glass:"Glas",bin_kind_garden:"Garten / Gr\xFCnschnitt",bin_kind_recycling:"Recycling / Wertstoffe",bin_kind_other:"Sonstiges",bin_color:"Farbe",bin_lid:"Deckel",bin_source:"Abfallkalender oder Sensor",bin_match:"Stichwort im Kalender (leer: nach Abfallart)",bin_hint:"Die Tonne leuchtet am Vortag ab der eingestellten Uhrzeit bis zur Uhrzeit am Abholtag (gilt f\xFCr alle Tonnen); ihre Markierung zeigt \u201EHeute\u201C oder \u201EMorgen\u201C, Antippen der Tonne zeigt die n\xE4chsten Termine. Ein Kalender (z. B. von Waste Collection Schedule) wird nach den W\xF6rtern ihrer Abfallart durchsucht, ein Sensor kann die Tage bis zur Abholung oder das Datum liefern.",bin_today:"Heute",bin_tomorrow:"Morgen",bin_in_days:"in {n} Tagen",mailbox_shape:"Bauform",mailbox_shape_wall:"Wandbriefkasten",mailbox_shape_pole:"Briefkasten auf Pfosten (mit F\xE4hnchen)",mailbox_shape_pillar:"Standbriefkasten mit Zeitungsfach",mailbox_shape_parcel:"Paketbox",mailbox_shape_bank:"Briefkastenanlage",mailbox_entity:"Sensor f\xFCr Post (Klappe oder Merker)",mailbox_door:"Sensor der Entnahmet\xFCr (optional)",mailbox_hint:"Mit einem Merker (z. B. input_boolean \u201EPost da\u201C aus einer Automation) leuchtet der Briefkasten, solange er an ist. Mit Einwurfklappe und Entnahmet\xFCr leuchtet er, wenn nach dem letzten Leeren Post eingeworfen wurde.",mailbox_post:"Post da",pro_name_household:"Haushalt Beta",edition_name_household:"Haushalt Beta",edition_feature_household:"Abfall, Kalender, Briefkasten, Pflanzen, Ger\xE4te-Restlaufzeit, Filter und K\xFChlschrankwarnungen aus verkn\xFCpften Quellen. Das Smart-K\xFChlschrankmodell ist separat verf\xFCgbar.",edition_name_fridge_smart:"Smart-K\xFChlschrank",edition_feature_fridge_smart:"M\xF6belmodell f\xFCr Side-by-Side-K\xFChlschr\xE4nke mit T\xFCrkontakten und T\xFCr-offen-Hinweisen.",pro_name_fridge_smart:"Smart-K\xFChlschrank",pro_feature_fridge_smart:"Side-by-Side-K\xFChlschrankmodell mit T\xFCrsensoren und Warnungen bei offener T\xFCr.",pro_feature_household:"Haushalt Pro: M\xFClltonnen leuchten am Vorabend der Abholung (Abfallkalender oder Sensor), der Briefkasten bei Post, Pflanzen bei Durst; Waschmaschine, Trockner und Sp\xFCler zeigen Restzeit und \u201EFertig!\u201C; f\xE4llige Filter und Verbrauchsteile leuchten gelb; offene K\xFChlschrankt\xFCren warnen; Glaskarte \u201EHeute im Haushalt\u201C; dazu der Smart-K\xFChlschrank (Side-by-Side, T\xFCren mit Sensoren)",household_teaser_bin:"Mit Haushalt Pro leuchtet die Tonne am Vorabend der Abholung \u2013 aus deinem Abfallkalender.",household_teaser_mail:"Mit Haushalt Pro leuchtet der Briefkasten, sobald Post da ist \u2013 bis er geleert wurde.",awning_cover:"Markise (Cover)",motor_cover:"Antrieb (Cover)",curtain_side:"\xD6ffnet nach",curtain_side_both:"beiden Seiten",curtain_side_left:"links (von vorn gesehen)",curtain_side_right:"rechts (von vorn gesehen)",motor_time:"Laufzeit (s)",motor_invert_hint:"F\xFCr Covers, die 100 % melden, wenn der Vorhang zu oder die Leinwand unten ist.",awning_pitch:"Neigung (\xB0)",awning_time:"Laufzeit ganz aus (s)",awning_position:"Positionssensor (optional)",awning_valance:"Volant (Stoffkante vorne)",awning_invert:"Richtung umkehren",awning_invert_hint:"F\xFCr Covers, die 100 % melden, wenn die Markise eingefahren ist.",awning_kind:"Art",awning_kind_arm:"Gelenkarm-Markise (Terrasse)",awning_kind_drop:"Fallarm-Markise (Balkon, Fenster)",awning_kind_vertical:"Senkrechtmarkise / ZIP (Fenster, Balkon)",awning_kind_pergola:"Pergola- / Wintergartenmarkise",awning_kind_side:"Seitenmarkise (Sichtschutz)",awning_kind_arm_hint:"Die Klassiker \xFCber der Terrasse: Gelenkarme schieben das Tuch mit leichtem Gef\xE4lle hinaus. Tiefe = Ausfall.",awning_kind_drop_hint:"Die Arme schwenken von der Wand nach vorn und unten, das Tuch spannt sich schr\xE4g davor. Tiefe = Arml\xE4nge, Neigung = wie weit die Arme unter die Waagerechte gehen.",awning_kind_vertical_hint:"Das Tuch f\xE4hrt senkrecht in Seitenschienen bis zum Boden herunter \u2013 vor ein Fenster, eine Balkonbr\xFCstung oder die Front einer Pergola. H\xF6he \xFCber Boden = Unterkante des Kastens.",awning_kind_pergola_hint:"Ein fester Rahmen mit Pfosten vorne; das Tuch f\xE4hrt oben auf den Schienen aus. Tiefe = bis zu den Pfosten, Neigung = Gef\xE4lle des Dachs.",awning_kind_side_hint:"Ein Pfosten mit dem aufgerollten Tuch links, das Tuch zieht sich waagerecht nach rechts bis zum Gegenpfosten. Breite = Auszug, H\xF6he \xFCber Boden = H\xF6he des Tuchs.",awning_hint:"Breite = Markise entlang der Wand, Tiefe = Ausfall ganz ausgefahren; die R\xFCckseite des Rahmens kommt an die Hauswand, H\xF6he \xFCber Boden ist die Unterkante der Kassette. Meldet das Cover seine Position auch beim Fahren, f\xE4hrt die Markise in 3D langsam mit; meldet es nur \u201Ef\xE4hrt aus/ein\u201C, f\xE4hrt sie in der Laufzeit mit.",furn_only_color:"Nur in einer Farbe leuchten",furn_only_color_pick:"Farbe",furn_only_color_hint:"Die Lampe leuchtet nur, solange das Licht ungef\xE4hr diese Farbe zeigt \u2013 z. B. gelb f\xFCr \u201EWasser\u201C am Waschbecken. Andere Farben desselben Lichts bleiben hier dunkel.",furn_run_w:"L\xE4uft ab (Watt)",furn_run_w_hint:"Ab wie viel Watt am Leistungssensor das Ger\xE4t als laufend gilt und leuchtet (leer: 10 W). F\xFCr Ger\xE4te hinter einer Steckdose, die im Standby ein paar Watt ziehen, z. B. 100.",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach, an Au\xDFenw\xE4nde oder ans Balkongel\xE4nder setzen. Im Grundriss oder in der 3D-Ansicht l\xE4sst sich ein bestehendes Feld verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_rail_missing:"Gel\xE4nderkante fehlt",solar_rail_overhang:"Module ragen seitlich \xFCber die Gel\xE4nderkante; ihre Gr\xF6\xDFe und Anzahl bleiben erhalten.",solar_rail_face:"{floor} \xB7 Balkon {balcony} \xB7 Gel\xE4nderkante {edge}",solar_rail_size:"Gel\xE4nderkante {w} m \xB7 H\xF6he {h} m",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Montagefl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_v_rail:"H\xF6he \xFCber dem Balkonboden (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_float:"Ohne Dach \xFCber dem Raum zeigen",roof_window_float_hint:"Blendet das Dach beim Heranzoomen an eine Etage oder einen Raum aus, bleibt das Fenster an seiner Stelle \xFCber dem Raum stehen \u2013 offen, gekippt, mit dem Rollladen. Das geht \xFCber R\xE4umen der Etage, auf der das Dach sitzt; reicht die Schr\xE4ge \xFCber eine tiefere Etage, bleiben die Fenster dort im Dach. Aus: Es ist nur im Dach zu sehen.",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_wall_free:"frei stehend",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_tilt_rail:"Neigung vom Gel\xE4nder (\xB0, 90 = waagerecht)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Angeschlossen an (Wechselrichter oder Speicher)",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_u_hint:"Die U-Treppe steigt von der markierten Vorderkante nach hinten, wendet am Podest und kommt auf der anderen Seite wieder nach vorn hoch. \u201ESpiegeln\u201C dreht die Laufrichtung um. Sie \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas_meter:"Gasz\xE4hler",energy_water_meter:"Wasserz\xE4hler",energy_meters_hint:"Energie Pro: Die Haus-Karte zeigt, wie viel Gas und Wasser heute verbraucht wurde \u2013 aus der Statistik der Z\xE4hler (Z\xE4hlerstand, z. B. in m\xB3). \u201EAus dem Energie-Dashboard \xFCbernehmen\u201C f\xFCllt beide mit.",holo_gas:"Gas",holo_water:"Wasser",holo_today_short:"heute",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen.",diag_title:"Hilf mit, NeonPlan besser zu machen",diag_intro:"Freiwillig und anonym: Wenn du es einschaltest, schickt NeonPlan h\xF6chstens einmal am Tag einen kleinen Bericht an den NeonPlan-Server (api.mastershort.de). Er zeigt, auf welchen Ger\xE4ten NeonPlan l\xE4uft, wo es ruckelt und welche Fehler auftreten \u2013 damit sie behoben werden k\xF6nnen.",diag_sent_head:"Was gesendet wird:",diag_sent:"eine zuf\xE4llige Kennung (nicht die von Home Assistant), die Versionen von NeonPlan, Home Assistant und Python, die Sprache, die installierten Pakete und Pro-Erweiterungen, Anzahlen aus dem Plan (Etagen, R\xE4ume, M\xF6bel, verkn\xFCpfte Ger\xE4te, Kameras), Ger\xE4teart, Browser und System der Bildschirme mit Bildrate und Grafikklasse, wie oft welche Ansicht ge\xF6ffnet wurde, und Fehlermeldungen von NeonPlan ohne Namen und Adressen.",diag_never_head:"Was nie gesendet wird:",diag_never:"Namen, Entit\xE4ten, Bereiche, die Form deines Grundrisses, IP-Adressen, die Kennung deiner Home-Assistant-Installation, Benutzernamen und dein Lizenzschl\xFCssel.",diag_voluntary:"Du kannst es jederzeit wieder ausschalten. Die Berichte werden 12 Monate aufbewahrt; mit \u201EMeine Daten l\xF6schen\u201C verschwinden sie sofort. Mehr dazu in der",diag_privacy:"Datenschutzerkl\xE4rung",diag_switch:"Anonyme Nutzungs- und Fehlerberichte senden",diag_view:"Daten ansehen",diag_view_head:"Das wird gesendet",diag_view_hint_on:"Genau dieser Bericht geht beim n\xE4chsten Mal hinaus (h\xF6chstens einmal am Tag); Fehler zus\xE4tzlich h\xF6chstens einmal pro Stunde.",diag_view_hint_off:"Ausgeschaltet: Es wird nichts gesendet. So s\xE4he der Bericht aus \u2013 die Kennung entsteht erst beim Einschalten.",diag_delete:"Meine Daten l\xF6schen",diag_delete_confirm:"Alle Berichte dieser Installation auf dem Server l\xF6schen und das Senden ausschalten?",diag_deleted:"Gel\xF6scht. Das Senden ist aus; schaltest du es wieder ein, gibt es eine neue Kennung.",diag_delete_failed:"Der NeonPlan-Server war nicht erreichbar. Bitte sp\xE4ter noch einmal versuchen.",diag_unavailable:"Diese Einstellung gibt es nach einem Neustart von Home Assistant."},Ul={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",show_menu:"Show",tool_menu:"Tool",floor_label:"Floor:",floor_settings:"Floor settings",floor_settings_of:"Floor {floor}",floor_none_hint:'Add your first floor at the top with "Floor" \u2192 "Add floor".',tool_group_build:"Build",tool_group_outside:"Outside",tool_room:"Room",view_menu:"View",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Whole plan",fit_hint:"Bring the whole floor plan of the floor into view (with the garden when outside)",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",tech_open:"Draw the technical room",tech_open_hint:"Then tap the wall in the plan your equipment hangs on.",tech_step:"Step {n}",tech_step_feed:'Tap "{name}" on the left, then the spot on the wall where the line comes in (right at the bottom: out of the floor).',tech_step_devices:"Tap the filter pump and the sand filter on the left \u2013 they stand at the wall. The heat pump and dosing unit if you have them.",tech_step_line:'Draw a line: from "{a}" to "{b}". Just press on the one and drag to the other.',tech_step_loose:"A pipe still ends loose \u2013 draw it on to a device or a line, or delete it (\u270B Select).",tech_step_drawing:"Drag on or tap point by point \u2013 the line ends on a device, a line or a pipe.",tech_step_fit:"Tap the pipe the valve (sight glass) goes into \u2013 it lights up orange.",tech_mode:"Pool equipment",tech_mode_hint:"Draw the technical room on this wall: bring the pool's lines in, put the devices up, draw the pipes",tech_draw:"Draw",tech_ask:"Pipe laid \u2013 on to the pool? Then a hole with the way outside goes here:",tech_ask_loose:"Leave it open",tech_step_tee:"Tap the pipe where the branch goes \u2013 it is cut there, and from the T-piece you draw the next line.",tech_pick:"Select",pool_delete_confirm:"Delete the pool with all {n} pipes?",tech_erase:"Erase",tech_erase_hint:"Tap a pipe, ball valve, sight glass or hole \u2013 it is removed. Drew it wrong? Undo helps too.",tech_feeds:"Lines from the pool",tech_devices:"Devices",tech_fittings:"Fittings",tech_hint:"Like a pen: press on a device and draw the line \u2013 wiggles go, the pipes run level and upright. A stroke ending on a device or pipe joins there; one ending on nothing is asked where it goes (skimmer, bottom drain, inlets, waste) and NeonPlan lays the hole and the way outside itself.",tech_no_ports:"First put the skimmer, bottom drain and inlets at the pool with the pool tool.",tech_ok:"All connected \u2013 the water flows.",tech_issue_loose:"{n} loose pipe ends",tech_issue_port:"{name} not connected",tech_issue_feed:"{name} not brought in yet",tech_feed_place:"Tap where the line comes into the room \u2013 right at the bottom: out of the floor, higher up: through the wall.",tech_start:"Tap a device or a line and draw a line.",feed_skimmer:"Skimmer",feed_drain:"Bottom drain",feed_inlet:"Inlets",feed_waste:"Waste drain (backwash)",hp_ports:"Connections",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",pool_depth:"Basin depth (m)",pool_rim:"Rim above the lawn (m)",pool_depth_hint:"Basin depth: from the rim down to the floor. A 1.50 m deep pool standing 20 cm out of the lawn: depth 1.50, rim 0.20. The water stands 15 cm below the rim.",pool_depth_ground:"The depth shows in 3D once the pool lies in a lawn, terrace or other area \u2013 without ground around it the basin would show from outside.",pool_port_depth:"Depth",pool_port_depth_hint:"How far below the water line (m): inlets usually 0.30, the skimmer at the water line",block_some_fixed:"\u{1F512} A part of it is fixed \u2013 the block moves once all parts are released.",unfix_all:"Release all",wv_block_all:"Whole block",wv_block_one:"This part only",wv_gap:"Gap: {w} \u2013 this fits in:",wv_gap_hint:"Tap a free spot on the wall: what fits there appears here.",wv_kit_title:"Onto the wall",wv_recent:"Recently used",wv_none_fits:"Nothing fits into this gap.",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_generated:"Generated models",wv_cat_energy:"Energy",block_title:"Furniture block",multi_title:"{n} items selected",block_hint:"A click selects the whole block, dragging moves it. One part on its own: double-tap it or pick its name below.",multi_hint:"Shift + click adds or removes items, Shift + drag over empty ground draws a frame. Move, turn or copy them together, or join them into a block.",block_part_edit:"Edit only this part",block_break:"Break up block",block_make:"Join into a block",multi_mode:"Select several (a tap adds, a drag draws a frame)",block_part:"Part of a block.",block_select:"Select the whole block",block_delete:"Delete {n} items?",block_delete_fixed:"Delete {n} items? Some of them are fixed.",delete:"Delete",new_room:"Room {n}",settings:"Settings",side_resize:"Drag the side bar wider or narrower",furn_extra:"Extra value at the symbol (sensor, e.g. water temperature)",settings_house:"House",settings_weather:"Weather & warnings",settings_modules:"Modules",roof_basics:"Roof shape",module_no_settings:"This module has no settings of its own.",modules_none:"No module installed yet.",pack_pro_module:"Pro add-on by {publisher} \xB7 becomes a module",pack_fun_module:"Fun pack by {publisher} \xB7 becomes a module",modules_pro_note:"",module_import:"Import a module \u2026",module_imported:"Imported \u201C{name}\u201D by {publisher}",module_import_hint:"Import modules as verified .fp3dpack files. The sentences of a voice module then show under \u{1F399} Voice control.",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_other_hint:"A floor plan from Sweet Home 3D, an iPhone scan, CAD (DXF), Blender/SketchUp or a robot vacuum map?",backup_other:"To the import page (Beta)",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. Signed packs and local models are rechecked when restored; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",through_full:"Full screen",through_full_hint:"The camera picture on the whole screen (Esc or Back ends it). Where the browser cannot do this, Home Assistant's camera view opens \u2013 with sound there too.",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Show the field of view in 3D",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the field of view turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",wall_view:"Wall view",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",joint_name:"Name (say hole skimmer)",conn_hole_out:"{name}: from inside out",conn_hole_in:"{name}: from outside in",hint_joint_place:"T- or Y-piece: tap the plan \u2013 tapped on a pipe, it is put into the pipe",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_inside:"inside",port_outside:"outside",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",joint_add_tee:"T-piece",joint_add_y:"Y-piece",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",wall_run_place:"Tap the wall where it goes",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",pool_valve_type:"Multiport valve",pool_loose_end:"open end",pool_holes_hint:"Holes in walls and the floor are set in the wall view (side bar).",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",wall_kit_pool:"Pool equipment",wall_kit_energy:"Energy",wall_run_add:"+ Pipe",wall_run_start:"Pipe: start at a device, on a pipe (T-piece) or on the wall",wall_run_next:"Set more points \u2013 it ends at a device or on a pipe; double click or Enter finishes",wall_run_down:"\u2193 Into the floor",wall_run_through:"\u27C2 Through the wall",wall_run_done:"Done",wall_run_fit:"Tap the pipe where it goes",wall_run_valve:"Ball valve",wall_run_sight:"Sight glass",wall_run_pipe:"Pipe",wall_run_pt:"Height of the point (m)",wall_run_more:"Draw on",wall_run_tip:"Drag points \xB7 double click removes \xB7 tap a ball valve: open/closed",wall_view_turn:"Turn by 45\xB0 \u2013 at the wall it moves back into the room",wall_view_fixed:"Fixed \u2013 release it to drag",wall_view_3d:"3D in the room",wall_view_lift:"Drag up or down: height above the floor",wall_zoom_hint:"Zoom: mouse wheel or two fingers",wall_zoom_all:"Whole wall",wall_view_hint_3d:"Tap a piece and drag it on the floor \xB7 mouse wheel or two fingers: closer or further away \xB7 middle or right mouse button (two fingers on a tablet): look around \xB7 type distances and height below \xB7 arrows left and right: to the next wall",wall_view_front:"Wall from the front",wall_view_depth:"Distance from the wall (m)",wall_view_room:"See this room's walls from the front",hint_wall_pick:"Wall view: click into the room (or near a wall)",wall_view_open:"See the wall from the front: move the furniture on it along the wall and up or down",wall_view_hint:"Drag to move along the wall and \u2013 for hanging pieces \u2013 up or down \xB7 arrow keys 1 cm, with Shift 10 cm \xB7 edges snap to the wall's ends, doors, windows and other furniture (Alt: free) \xB7 double-click opens the piece in the plan",wall_view_empty:"Nothing at this wall yet \u2013 furniture standing with its back to the wall or hanging on it shows here.",wall_view_left:"Distance from the left (m)",wall_view_floor:"stands on the floor",wall_view_form:"Edit in the plan",wall_prev:"Previous wall",wall_next:"Next wall",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail uses the cameras linked in the plan; weather uses the selected weather entity.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",director:"Live director",director_hint:"A screen shows by itself what happens in the house: the doorbell rings \u2013 the view flies to the front door and looks through its camera. Every event is off until you switch it on.",director_here:"Switch on on this device",director_here_hint:"Only for this browser, e.g. the wall tablet. On a dashboard card you switch the live director on in the card settings.",director_doorbell:"Doorbell rings: fly to the door and look through the camera",director_doorbell_entity:"Doorbell",director_doorbell_camera:"Camera at the door",director_no_doorbell:"No doorbell found. Choose your doorbell's event or binary sensor entity.",director_motion:"A camera sees someone",director_motion_off:"Off",director_motion_person:"People only",director_motion_all:"Any motion",director_appliances:"Washer, dryer or dishwasher finished",director_alerts:"New warning (smoke, water, alarm, window in the rain \u2026)",director_hold:"Back after (seconds)",director_back_hint:"Then the view goes back to where it was \u2013 unless someone touched the screen meanwhile. Someone using the tablet is only interrupted by the doorbell and by warnings. The doorbell stays twice as long.",voice:"Voice control",voice_hint:"A microphone button at the bottom left of the 3D view: tap it and speak. \u201CShow the living room\u201D, \u201Cupper floor\u201D or \u201Cthe whole house\u201D shows the place; anything else (\u201Cturn on the hall light\u201D) goes to Home Assistant's Assist.",voice_here:"Switch on on this device",aliases:"Further names for the voice",aliases_hint:'Further names, comma separated \u2013 so you ask for the "Smart TV Pro" as "living room TV" or "telly". Used by voice control and the search.',aliases_placeholder:"e.g. living room TV, telly",voice_understands:"What NeonPlan understands",voice_examples:"\u201CShow the living room\u201D|\u201CGo to the upper floor\u201D|\u201CShow the whole house\u201D|\u201CShow the washing machine\u201D / \u201CWhere is the dryer?\u201D|\u201CShow the front door camera\u201D / \u201CShow the driveway camera\u201D|\u201CShow the cameras\u201D|Anything else (\u201Cturn on the hall light\u201D) goes to Assist",voice_needs:"Needs https, the microphone allowed (in Fully Kiosk: Web Content Settings \u2192 microphone access) and an Assist pipeline with speech to text. On a dashboard card you switch the button on in the card settings.",voice_showing:"Showing {name}.",screen_name:"Screen name (for Assist)",screen_name_placeholder:"e.g. Kitchen",screen_name_hint:'Asking Assist ("Show the living room") or an automation calling the service neonplan3d.ask reaches every open NeonPlan view. When the service names a screen, only the view with that name reacts.',voice_button:"Speak",voice_listen:"Listening \u2026",voice_none:"Nothing understood",voice_silent:"The microphone gives only silence. Usually another app holds it \u2013 in Fully Kiosk switch off the acoustic motion detection (Motion Detection \u2192 Acoustic Detection) and reload.",voice_no_pipeline:"No speech to text set up in Assist (Settings \u2192 Voice assistants).",voice_denied:"Microphone not allowed \u2013 only over https and with the permission in the browser or in Fully Kiosk.",voice_error:"Voice control: {msg}",card_voice:"Voice control (microphone button)",card_voice_hint:"\u201CShow the living room\u201D shows the room, other sentences go to Assist. Needs https and an allowed microphone",director_mic_test:"\u{1F399}\uFE0F Test the microphone",director_mic_hint:"Checks https, the microphone and Assist's speech to text on this device and shows which room a sentence would open. Nothing is switched.",voice_pipeline:"Assist pipeline on this device",voice_pipeline_preferred:"Preferred one in Home Assistant",voice_pipeline_no_stt:"no speech to text",backdrop:"Background",backdrop_kind:"Behind the house",backdrop_look:"The look's sky (default)",backdrop_color:"One colour",backdrop_gradient:"Gradient",backdrop_image:"Picture",backdrop_top:"Colour at the top",backdrop_bottom:"Colour at the bottom",backdrop_image_url:"Picture address",backdrop_dim:"Darken",backdrop_image_bad:"This address does not work: https://\u2026 or a path like /local/background.jpg",backdrop_hint:"Put the picture into config/www in Home Assistant, then it is /local/filename.jpg. Darkening keeps the neon lines readable. Costs no performance \u2013 old tablets too.",director_live:"Live picture when looking through",director_live_hint:"Instead of a still every few seconds the camera's video runs (through Home Assistant's player). Needs more power \u2013 better leave it off on very old tablets.",director_triggers:"Own triggers",director_triggers_hint:"When one of these entities goes on or open \u2013 a second doorbell, the garage door, the garden gate \u2013 the view flies there and looks through the camera chosen (without one: to the device).",director_trigger_entity:"Trigger",director_trigger_add:"+ Add a trigger",card_director:"Live director (Camera Cockpit)",card_director_hint:"The card shows by itself what happens. Which events, you choose in the editor under \u201CLive director\u201D.",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",rain_entity:"Rain from your own weather station",rain_entity_hint:"A rain sensor (on = rain) or a rain rate (mm/h) of your weather station says whether it rains at the house \u2013 for the rain warning and the rain in 3D. Without one the weather entity decides.",rain_ignore:"No rain warning",rain_ignore_hint:"This window may stay open in the rain (under a canopy, say): no rain warning for this window, all others still warn.",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_ghost:"Show the Halloween ghost",card_ghost_hint:"Fun pack Halloween: the ghost floats through this card's house too (e.g. switch it off on the wall tablet)",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",news_pets_title:"New: pets \u2013 a present for you",news_pets_text:"A cat, a dog or a rabbit lives in your 3D house, walks through the rooms, lies down on the sofa and even takes the stairs \u2013 and fish swim in the aquarium. The fun pack is free with every customer account.",news_to_shop:"To the shop",news_later:"Later",news_never:"Don't show again",gift_title:"\u{1F381} Two presents for you: Halloween and pets",gift_text:"The fun packs Halloween (pumpkins, bats, a witch's cauldron and a ghost that floats through the house) and Pets (a cat, a dog and a rabbit walking through your house) are free in your customer account. Install them with one click under Extensions.",gift_install:"To the extensions",gift_title_free:"\u{1F381} Free: Halloween and pets",gift_text_free:"Pumpkins, bats and a ghost that floats through the house \u2013 plus a cat, a dog and a rabbit living in your 3D house. Both fun packs are free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Extensions \u2192 Shop connection. New packs then show up right here.",gift_register:"Create a free account",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof:"Show the roof",card_roof_hint:"Off: the house shows without its roof, as if it had none \u2013 the rooms lie open (solar fields on the roof go with it)",room_order_up:"Move the room up (earlier in the room bar)",room_order_down:"Move the room down (later in the room bar)",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",ext_show_list:"Show the list",ext_hide_list:"Fold the list",ext_sum_installed:"installed",ext_sum_updates:"updates",ext_sum_missing:"not installed yet",ext_sum_all:"Install/update all {n}",ext_sum_packs:"furniture packs ({items} items)",ext_sum_feature_packs:"add-ons",ext_sum_modules:"modules",packs_hint:"Only publisher-signed packs can unlock features. Local JSON model packs are strictly validated and cannot unlock features.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. Use a pack signed for this installation.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_import_local_model:"Import a local furniture pack \u2026",pack_import_local_model_hint:"JSON payload or .fp3dpack envelope: only \u201Cpayload\u201D is used; the signature is not verified or claimed. Models are strictly validated, cannot unlock features and are marked \u201COpen Edition \xB7 local\u201D.",pack_local_model_label:"Open Edition \xB7 local",pack_local_model_imported:"Imported \u201C{name}\u201D locally \u2013 {n} models",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_module:"Module by {publisher} \xB7 runs in the house",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"Feature unavailable",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy",edition_name_energy_pro:"Energy",edition_feature_energy_pro:"Power flows, solar modules and consumption values, using data linked from Home Assistant.",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun pack \xB7 free for customers",offers_dot:"New in the shop",ext_badge_new:"{n} new",ext_badge_ready:"{n} ready",ext_badge_ready_hint:"Packs to install or update \u2013 one click under Extensions",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and features for NeonPlan 3D. Import publisher-signed packs and your own furniture models here.",ext_shop:"Open the shop",ext_pro:"Features",fun_title:"Fun extras",fun_intro:"Pets and the Halloween ghost are included. Switch them on or off here.",fun_in_account:"Free in your customer account \u2013 install it among your packs above.",fun_register:"\u{1F381} Create a free customer account",fun_register_steps:"Free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Shop connection.",fun_name_pets:"Pets",fun_feature_pets:"A cat, a dog or a rabbit lives in your 3D house: it walks through the rooms, lies down on the sofa, the bed or the rug and sleeps at night.",fun_name_halloween:"Halloween",fun_feature_halloween:"A Halloween ghost that floats through the house now and then.",halloween_ghost:"Let the ghost float",halloween_deco_hint:"Switch the ghost on or off here. Additional Halloween decoration furniture is not included in this edition.",pets_show:"Show the pets",pet_add:"Add a pet",pet_name:"Name",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur:"Fur",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_breed:"Breed",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor:"Floor",pet_floor_auto:"Ground floor",ext_active:"active",ext_source_open_edition:"Open Edition",ext_source_signed_pack:"Signed pack",ext_source_locked:"Locked",ext_get:"See in the shop",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Thank you for supporting NeonPlan 3D! This code unlocks the \u{1F499} Supporter role on Discord \u2013 you then see the channel #beta-feedback and test new add-ons first.",supporter_open:"Open Discord",supporter_how:`How: in Discord, type /supporter (don't paste it), click the command in the list that pops up, paste the code into the "code" field and press Enter. Never send the code as a normal message \u2013 everyone can see it.`,nl_title:"\u{1F381} 4 furniture packs as a gift",nl_text:"Subscribe to the NeonPlan newsletter and get the taster packs living room, kitchen, bedroom and bathroom for free \u2013 they appear here by themselves once you confirm. The newsletter brings new versions, new furniture and offers. Unsubscribe at any time.",nl_button:"Subscribe to the newsletter",nl_hide:"Don't show again",nl_after:"Thank you! Please confirm the mail that is on its way. The packs then appear here \u2013 at the next daily check at the latest, at once with \u201C{button}\u201D.",beta_yours:"Beta \xB7 yours as a supporter",beta_supporters:"Beta \xB7 supporters first",beta_yours_hint:"Because you are a supporter, you can try this add-on early. Tell us on Discord (channel #beta-feedback) what works and what doesn't.",beta_supporters_hint:"This add-on is still in beta and comes with the Supporter Pass first. Once it is finished, everyone can get it in the shop.",beta_feedback:"Feedback on Discord",beta_become:"Become a supporter",beta_ready:"Ready for you \u2013 install it below with your packs.",beta_supporter_missing:"As a supporter you get this beta. It is not on your key yet \u2013 drop us a line on Discord and we'll unlock it.",beta_bar:"Beta \u2013 as a supporter you test this first. Feedback welcome on Discord (#beta-feedback).",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"Signed furniture packs",ext_teaser_text:"Import packs signed by their publisher under Extensions above.",pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car",edition_name_auto_pro:"Car",edition_feature_auto_pro:"Charge, range, charging, lock and climate, only when the vehicle integration provides that data.",edition_name_pool:"Pool",edition_feature_pool:"3D pool water, pump and heat-pump controls, water values, cover and warnings.",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (module): the water glows in the colour of the pool light and moves while the filter pump runs; the glass card shows water temperature, heat pump with target, pH, chlorine/redox and salt with a traffic light; the cover slides over the water; warnings for pH, chlorine, salt and frost; the pool plant sets itself up at a tap and the water flows visibly through the pipes",pool_pump:"Filter pump",pool_ph:"pH value",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_diameter:"Diameter (m)",pool_shape_free:"Free",tool_pool:"Pool",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",hint_pool_tech:"Choose a shape and draw the pool \xB7 tap a pool to select it \xB7 ports, devices and pipes on the right",hint_pipe_start:"Pipe: tap the start (port or device)",hint_pipe_pool:"Pipe: first tap the pool the pipes belong to",hint_pipe_next:"Tap corners, then the end (port or device) \xB7 Esc cancels",pool_tool_empty:"No pool on this floor yet: choose the shape above and draw the pool.",pool_choose:"Which pool?",pool_ports:"Ports",pool_ports_hint:"Skimmer and inlets sit on the rim, the bottom drain in the pool; the waste drain takes the backwash water. Move them in the plan.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",pool_devices:"Equipment",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",pool_valve_position:"Six-way valve position",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pool_valve_open:"open",pool_pipes:"Pipes",pool_pipe_draw:"Draw a pipe",pool_pipe_draw_hint:"Pipes connect ports and devices in the flow direction: from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops it. Tap a ball valve in the plan to open or close it.",pool_pipe_height:"Height above the floor (m)",pool_pipe_reverse:"Reverse the flow direction",pool_above:"Above-ground pool (stands on the ground)",pool_above_hint:"A pool standing on the ground instead of let into it: a wall all around, the water just below the rim.",pool_height:"Pool height",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is a Pro add-on.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is not available in this edition.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_local_model_features:"Local furniture packs cannot unlock features.",pack_error_local_model_id_conflict:"An installed pack already uses this ID. Give the local pack a different ID.",pack_error_invalid_local_model:"The local furniture pack is invalid.",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',license_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency now",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. More consumption values can be added later.",pro_unlock:"Unlock",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",help_discord:"Community on Discord",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",balcony_rail:"Railing height",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_area_hint:"With an area the surface acts like a room: a tap in 3D opens it with the area's devices, it is in the room bar and wears its name.",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",wall_profile_invalidated:"A measured wall-top profile was cleared because the edited edge no longer has a reliable mapping.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",angle_lock:"3D lock",angle_lock_hint:"The angle stays fixed: a drag moves the view, zooming still works \u2013 nobody turns the house by accident.",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",terrain:"Ground",terrain_hint:"Where the ground lies around the house. What lies below it \u2013 a cellar, the lower part of a semi-basement \u2013 sits in the earth in 3D; lawns, paths and terraces lie on the ground.",terrain_level:"Ground height (m, ground floor = 0)",terrain_earth:"Show cellars in the earth",terrain_earth_hint:"Floors below the ground sit in the earth; open one and you see it as in a building pit. Off: they stand free as before.",terrain_cellar_hint:"Semi-basement: lower the ground height as far as the cellar should show \u2013 e.g. \u22121.2 m. Cellar windows below the ground get a light well.",terrain_no_cellar_hint:"A cellar is a floor with a negative elevation, e.g. \u22122.6 m.",terrain_reset:"Reset the ground",cellar_window:"Cellar window",well:"Light well",well_hint:"This window lies below the ground: in 3D it gets a light well with a grate. Untick for none \u2013 e.g. where a path runs past outside.",well_rim:"Rim above the ground (m)",cellar_window_hint:"Small and high up in the wall: 100 \xD7 50 cm, 25 cm under the ceiling. Below the ground it gets a light well with a grate in 3D.",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_rise:"Rise (\xB0)",strip_rise_hint:"The strip rises along its length, e.g. up the stairs or along a handrail (~35\u201340\xB0). Its height above the floor is then its middle.",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_slope:"Sloping",wall_slope_hint:"Sloping wall: a height of its own at each corner, the top runs straight between them \u2013 a lean-to, a slope, clerestory windows on the tall side. Windows and doors stay under the top.",wall_slope_start:"Height at corner {n} (m)",wall_slope_end:"Height at corner {n} (m)",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",theme_auto:"Auto (Day/Neon by the sun)",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Collapse",side_fold_hint:"Make the sidebar narrow \u2013 more room for the floor plan",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",markers_room:"In the room",pin_size:"Symbol size",pin_size_small:"Small",pin_size_normal:"Normal",pin_size_large:"Large",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_awning:"Awning",furn_group_outdoor:"Terrace & balcony",bin_from:"Glow from (hour, the day before)",bin_until:"until (hour, on pickup day)",bin_none:"No pickup in sight",hh_title:"Today in the household",hh_notes:"Pinboard (text helper)",hh_notes_hint:'A text helper (input_text) or sensor whose text stands in "Today in the household" \u2013 separate several lines with |. Automations write into it ("parcel is in the garage"), the card shows it.',heat_sensor:"Heating (sensor)",heat_sensor_hint:'When the thermostat does not say whether it heats (Tuya valves report a "work state"), pick that sensor here: on/opened/heating or an opening above 0 % makes the radiator glow.',door_lock:"Smart lock",door_lock_hint:"The door's lock (Nuki, Aqara \u2026): a pin at the door shows locked or open, a tap locks or unlocks.",clock:"Clock",clock_off:"Off",clock_tl:"\u2196 clock",clock_tr:"\u2197 clock",clock_bl:"\u2199 clock",clock_br:"\u2198 clock",editor_floor:"Editor's start floor",editor_floor_auto:"First of the list",editor_floor_hint:"The floor the editor opens with.",hh_left:"{t} left",hh_done:"Done!",hh_finished:"{name} is done",hh_thirsty:"Thirsty",hh_plant:"{name} needs water",hh_service:"{name}: service due",hh_fridge_open:"{name} is open",alert_fridge_door:"Fridge open: {name}",alert_short_fridge_door:"Fridge open",hh_moisture:"Plant (plant.*) or moisture sensor",hh_moisture_min:"Thirsty below (%)",hh_remaining:"Time left (sensor)",hh_door:"Door sensor",hh_fridge_door:"Door sensor",hh_appliance_hint:'While it runs, its pin shows the time left; afterwards "Done!" until the door opens or it runs again.',hh_door_alarm:"Warn after (minutes open)",hh_service_entity:"Consumable / service (sensor)",hh_service_min:"Due at (\u2264 percent or days)",hh_service_hint:'E.g. a filter, salt or rinse aid: a binary sensor (on = due), a number (percent or days left) or a date. When it is due the item glows yellow and shows in "Today in the household".',hh_teaser_plant:"With Household Pro the plant shows when it needs water.",hh_teaser_appliance:'With Household Pro the appliance shows its time left and "Done!" until the door opens.',hh_teaser_fridge:"With Household Pro NeonPlan warns when the fridge door stands open too long.",card_household:"Today in the household",card_household_hint:"Household Pro: glass card with bins, post, finished appliances, thirsty plants and service due",furn_waste_bin:"Waste bin",furn_mailbox:"Mailbox",furn_wifi_ap:"Wi-Fi access point",furn_water_heater:"Water heater",tech_mount:"Mounting",wifi_ap_std:"On the ceiling",wifi_ap_wall:"On the wall",water_heater_std:"Standing tank",water_heater_wall:"Slim tank on the wall",ap_status:"Status (connection, state)",ap_clients_sensor:"Sensor: connected clients",ap_clients:"{n} clients",ap_offline:"Offline",ap_hint:"The ring glows blue while the access point is there and red when it is gone \u2013 its symbol then shows too. Diagnostic entities (UniFi's, for example) are offered here as well.",heater_entity:"Device (water_heater, thermostat or switch)",heater_temp:"Sensor: water temperature (optional)",heater_hint:"The tank glows warm while it heats (thermostat heating, switch on or power above the threshold) and shows the water temperature \u2013 from the sensor or from the device itself.",furn_lamp_fan:"Ceiling fan with light",fan_entity:"Fan (fan entity)",fan_hint:"The light above switches the lamp. With a fan its blades turn with its speed, and it gets a symbol of its own beside it: a tap switches it, a long press sets the speed.",furn_wall_switch:"Light switch",furn_wall_socket:"Socket",furn_group_switches:"Home technology",wv_cat_switches:"Switches",gang_count_switch:"Buttons in the frame",gang_count_socket:"Sockets in the frame",socket_kind:"Kind",socket_indoor:"Indoor",socket_outdoor:"Outdoor socket with lid",gang_switch:"Button switches",gang_socket:"Socket switches",gang_switch_hint:"Every button gets its own entity (a light, a switch, a fan) and glows while it is on \u2013 a light in its colour. A tap switches it; with several buttons a small menu opens.",gang_socket_hint:"Every socket gets its own entity (the relay, the smart plug) and, if you like, a power sensor; it glows green while it is on. The same entity may sit on several sockets \u2013 two sockets on one relay.",furn_group_household:"Household",bin_shape:"Shape",bin_shape_bin120:"Wheelie bin 120 l",bin_shape_bin240:"Wheelie bin 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Multi-compartment bin",bin_shape_bag:"Bag",bin_shape_caddy:"Caddy / pail",bin_shape_underground:"Underground container",bin_kind:"Waste",bin_kind_rest:"General waste",bin_kind_bio:"Food / organic",bin_kind_paper:"Paper",bin_kind_plastic:"Packaging / plastic",bin_kind_glass:"Glass",bin_kind_garden:"Garden waste",bin_kind_recycling:"Recycling",bin_kind_other:"Other",bin_color:"Colour",bin_lid:"Lid",bin_source:"Waste calendar or sensor",bin_match:"Word in the calendar (empty: by its waste)",bin_hint:'The bin glows from the set hour the day before until the hour on pickup day (for all bins); its pin says "Today" or "Tomorrow", a tap on the bin shows its next pickups. A calendar (e.g. from Waste Collection Schedule) is searched for the words of its waste; a sensor can give the days to the pickup or its date.',bin_today:"Today",bin_tomorrow:"Tomorrow",bin_in_days:"in {n} days",mailbox_shape:"Shape",mailbox_shape_wall:"Wall mailbox",mailbox_shape_pole:"Mailbox on a post (with flag)",mailbox_shape_pillar:"Post box with newspaper holder",mailbox_shape_parcel:"Parcel box",mailbox_shape_bank:"Mailbox bank",mailbox_entity:"Post sensor (flap or flag)",mailbox_door:"Sensor of the emptying door (optional)",mailbox_hint:'With a flag (e.g. an input_boolean "post" set by an automation) the mailbox glows while it is on. With a flap and an emptying door it glows when post came in after it was last emptied.',mailbox_post:"Post",pro_name_household:"Household Beta",edition_name_household:"Household Beta",edition_feature_household:"Waste, calendars, mailbox, plants, appliance remaining time, filters and fridge-door warnings from linked sources. The smart-fridge model is available separately.",edition_name_fridge_smart:"Smart fridge",edition_feature_fridge_smart:"A side-by-side fridge model with door sensors and open-door warnings.",pro_name_fridge_smart:"Smart fridge",pro_feature_fridge_smart:"A side-by-side fridge model with door sensors and open-door warnings.",pro_feature_household:'Household Pro: bins glow the evening before their pickup (waste calendar or sensor), the mailbox while post is in it, plants when thirsty; washer, dryer and dishwasher show their time left and "Done!"; filters and consumables due glow yellow; open fridge doors warn; glass card "Today in the household"; plus the smart fridge (side-by-side, doors with sensors)',household_teaser_bin:"With Household Pro the bin glows the evening before its pickup \u2013 from your waste calendar.",household_teaser_mail:"With Household Pro the mailbox glows as soon as post is in it \u2013 until it is emptied.",awning_cover:"Awning (cover)",motor_cover:"Motor (cover)",curtain_side:"Opens to",curtain_side_both:"both sides",curtain_side_left:"left (seen from the front)",curtain_side_right:"right (seen from the front)",motor_time:"Run time (s)",motor_invert_hint:"For covers that report 100 % while the curtain is closed or the screen is down.",awning_pitch:"Fall (\xB0)",awning_time:"Run time fully out (s)",awning_position:"Position sensor (optional)",awning_valance:"Valance (fabric edge at the front)",awning_invert:"Reverse direction",awning_invert_hint:"For covers that report 100 % while the awning is in.",awning_kind:"Kind",awning_kind_arm:"Folding-arm awning (terrace)",awning_kind_drop:"Drop-arm awning (balcony, window)",awning_kind_vertical:"Vertical screen / ZIP (window, balcony)",awning_kind_pergola:"Pergola / conservatory awning",awning_kind_side:"Side awning (privacy screen)",awning_kind_arm_hint:"The classic over a terrace: folding arms push the fabric out with a slight fall. Depth = projection.",awning_kind_drop_hint:"The arms swing out and down from the wall, the fabric stretches at a slant in front. Depth = arm length, fall = how far the arms go below the horizontal.",awning_kind_vertical_hint:"The fabric runs straight down in side rails to the floor \u2013 in front of a window, a balcony railing or the front of a pergola. Height above the floor = the box's underside.",awning_kind_pergola_hint:"A fixed frame with posts at the front; the fabric runs out on top of its rails. Depth = to the posts, fall = the roof's slope.",awning_kind_side_hint:"A post with the rolled fabric on the left, the fabric pulls out sideways to the right up to the other post. Width = how far it pulls out, height above the floor = the fabric's height.",awning_hint:"Width = the awning along the wall, depth = its projection fully out; the back of the frame goes against the house wall, height above the floor is the cassette's underside. If the cover reports its position while it runs, the awning runs out slowly in 3D; if it only says opening/closing, it moves along at the run time.",furn_only_color:"Glow in one colour only",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Place modules on the roof, an outside wall, or a balcony railing. Move an existing field in the plan or 3D view.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_rail_missing:"Balcony railing edge missing",solar_rail_overhang:"Modules extend beyond the railing; their size and count are preserved.",solar_rail_face:"{floor} \xB7 balcony {balcony} \xB7 railing edge {edge}",solar_rail_size:"Railing edge {w} m \xB7 height {h} m",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Mounting surface",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_v_rail:"Height above the balcony floor (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. This works over rooms of the floor the roof sits on; where the slope reaches down over a lower floor, the windows stay in the roof. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_tilt_rail:"Tilt away from the railing (\xB0, 90 = horizontal)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Connected to (inverter or battery)",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas_meter:"Gas meter",energy_water_meter:"Water meter",energy_meters_hint:`Energy Pro: the house card shows how much gas and water were used today \u2013 from the meters' statistics (a counter, e.g. in m\xB3). "Take over from the energy dashboard" fills both too.`,holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant.",diag_title:"Help make NeonPlan better",diag_intro:"Voluntary and anonymous: when you switch it on, NeonPlan sends a small report to the NeonPlan server (api.mastershort.de) at most once a day. It shows which devices NeonPlan runs on, where it stutters and which errors occur \u2013 so they can be fixed.",diag_sent_head:"What is sent:",diag_sent:"a random id (not Home Assistant's), the versions of NeonPlan, Home Assistant and Python, the language, the installed packs and Pro add-ons, counts from the plan (floors, rooms, furniture, linked devices, cameras), device type, browser and system of the screens with frame rate and graphics class, how often each view was opened, and NeonPlan's error messages without names and addresses.",diag_never_head:"What is never sent:",diag_never:"names, entities, areas, the shape of your floor plan, IP addresses, your Home Assistant installation's id, user names and your licence key.",diag_voluntary:'You can switch it off again at any time. Reports are kept for 12 months; "Delete my data" removes them at once. More in the',diag_privacy:"privacy notice",diag_switch:"Send anonymous usage and error reports",diag_view:"View data",diag_view_head:"This is what is sent",diag_view_hint_on:"Exactly this report goes out next time (at most once a day); errors in addition at most once an hour.",diag_view_hint_off:"Switched off: nothing is sent. This is how the report would look \u2013 the id is only created when you switch it on.",diag_delete:"Delete my data",diag_delete_confirm:"Delete all reports of this installation on the server and stop sending?",diag_deleted:"Deleted. Sending is off; if you switch it on again, you get a new id.",diag_delete_failed:"The NeonPlan server could not be reached. Please try again later.",diag_unavailable:"This setting is available after a restart of Home Assistant."},Jh=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","zh","pt"],ii=new Map,Ss=new Map;function Ms(r){let e=(r??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return Jh.includes(t)?t:null}function Zl(r){let e=Ms(r);return!e||ii.has(e)}function ql(r){let e=Ms(r);if(!e||ii.has(e))return Promise.resolve();let t=Ss.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=b3b99adf7896`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{ii.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{ii.set(e,{})}).finally(()=>Ss.delete(e)),Ss.set(e,t)}return t}function qe(r,e,t={}){let n=r?.language??navigator.language,i=n.startsWith("de")?null:Ms(n),s=(n.startsWith("de")?Gl:i&&ii.get(i)||Ul)[e]??Ul[e]??Gl[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function Ge(r,e,t=2){return e.toLocaleString(r?.language??void 0,{maximumFractionDigits:t})}var Yh={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function zn(r){return Yh[r]}function Jl(r,e){let t=`${e} ${String(r.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Yl(r,e){let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(r.states[n]?.attributes.device_class))):[]}function Xl(r){let e=(r??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function Ql(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function ed(r){try{r?localStorage.setItem("neonplan3d.voice","1"):localStorage.removeItem("neonplan3d.voice")}catch{}}function td(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function nd(r){try{r.trim()?localStorage.setItem("neonplan3d.screen",r.trim()):localStorage.removeItem("neonplan3d.screen")}catch{}}function id(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function od(r){try{r?localStorage.setItem("neonplan3d.voicePipeline",r):localStorage.removeItem("neonplan3d.voicePipeline")}catch{}}var em=3*6e4;var Ps="neonplan3d.director";function sd(){try{return localStorage.getItem(Ps)==="1"}catch{return!1}}function rd(r){try{r?localStorage.setItem(Ps,"1"):localStorage.removeItem(Ps)}catch{}}var Xh=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function ad(r,e){return e?r.states[e]?[e]:[]:Object.keys(r.states).filter(t=>{let n=r.states[t];if(t.startsWith("event."))return n.attributes.device_class==="doorbell";if(!t.startsWith("binary_sensor."))return!1;let i=`${t} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return Xh.test(i)}).sort()}function ld(r,e,t,n){if(n)return n;let i=r.entities??{},o=i[e]?.device_id,s=t.filter(c=>c.startsWith("camera.")),a=o?s.find(c=>i[c]?.device_id===o):void 0;if(a)return a;let l=c=>i[c]?.area_id??r.devices?.[i[c]?.device_id??""]?.area_id??null,d=l(e);return d&&s.find(c=>l(c)===d)||null}var kt=Math.PI/180;function it(r){let e=Math.min(r.x0,r.x1),t=Math.max(r.x0,r.x1),n=Math.min(r.z0,r.z1),i=Math.max(r.z0,r.z1);return r.axis==="x"?{u0:e,u1:t,w:i-n,at:(o,s)=>[o,r.flip?i-s:n+s]}:{u0:n,u1:i,w:t-e,at:(o,s)=>[r.flip?t-s:e+s,o]}}function Dt(r){let e=it(r).w,t=r.eave_a,n=r.eave_b,i=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*kt),o=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*kt);if(r.shape==="flat"||r.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(r.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};if(r.shape==="mansard"){let l=pd(e,t,n,i,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(i+o))):e/2,a=t+s*i;return{vr:s,rh:a,y:l=>l<=s?t+l*i:n+(e-l)*o}}var Qh=.14;function cd(r,e){return!r.open&&Math.min(r.base,r.eave_a,r.eave_b)<e-.05}function hd(r,e,t){let n=[];for(let i of r.settings.roof.sections??[]){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let o=it(i),s=Dt(i),a=e+t+Qh,l=[],d=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*kt),c=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*kt);d>1e-6&&l.push((a-i.eave_a)/d),i.shape==="gable"&&c>1e-6&&l.push(o.w-(a-i.eave_b)/c);for(let h of l)h<=.01||h>=o.w-.01||i.shape==="gable"&&Math.abs(s.y(h)-a)>1e-6||n.push([o.at(o.u0,h),o.at(o.u1,h)])}return n}function eu(r,e){let t=r.length;if(t<3||Math.abs(e)<1e-9)return r.map(o=>[o[0],o[1]]);let n=Ae(r)>=0?1:-1,i=[];for(let o=0;o<t;o++){let s=r[(o+t-1)%t],a=r[o],l=r[(o+1)%t],d=dd([a[0]-s[0],a[1]-s[1]]),c=dd([l[0]-a[0],l[1]-a[1]]),h=[d[1]*n,-d[0]*n],u=[c[1]*n,-c[0]*n],p=h[0]+u[0],f=h[1]+u[1],m=Math.hypot(p,f);if(m<1e-6){i.push([a[0]+h[0]*e,a[1]+h[1]*e]);continue}let _=(p*h[0]+f*h[1])/m,y=Math.min(4,1/Math.max(.25,_));i.push([a[0]+p/m*e*y,a[1]+f/m*e*y])}return i}function dd(r){let e=Math.hypot(r[0],r[1])||1;return[r[0]/e,r[1]/e]}function zs(r){let e=r.map(n=>n[0]),t=r.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}function ud(r,e,t,n){let i=Ie(r,{exterior:t,interior:n},e).walls.filter(h=>h.exterior&&!h.free);if(!i.length)return null;let o=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,s=new Map,a=i.map(h=>({a:h.a,b:h.b}));for(let h of a)for(let u of[h.a,h.b])s.set(o(u),[...s.get(o(u))??[],h]);let l=new Set,d=null;for(let h of a){if(l.has(h))continue;l.add(h);let u=[h.a,h.b],p=h.b;for(;;){let f=(s.get(o(p))??[]).find(m=>!l.has(m));if(!f||(l.add(f),p=o(f.a)===o(p)?f.b:f.a,o(p)===o(u[0])))break;u.push(p)}u.length>=3&&o(p)===o(u[0])&&(!d||Math.abs(Ae(u))>Math.abs(Ae(d)))&&(d=u)}if(!d)return null;let c=[];for(let h=0;h<d.length;h++){let u=d[(h+d.length-1)%d.length],p=d[h],f=d[(h+1)%d.length],m=(p[0]-u[0])*(f[1]-p[1])-(p[1]-u[1])*(f[0]-p[0]);Math.abs(m)>1e-6&&c.push(p)}return c.length>=3?eu(c,t):null}var oi=Math.tan(30*kt);function pd(r,e,t,n,i){let o=Math.min(r*.3,n>1e-6?2.4/n:r*.3),s=Math.min(r*.3,i>1e-6?2.4/i:r*.3),a=e+o*n,l=t+s*i,d=Math.min(r-s,Math.max(o,(l-a+oi*(r-s+o))/(2*oi))),c=a+(d-o)*oi;return{vla:o,vlb:s,yla:a,ylb:l,vr:d,rh:c,y:u=>u<=o?e+u*n:u<=d?a+(u-o)*oi:u<=r-s?l+(r-s-u)*oi:t+(r-u)*i}}function Es(r,e){let t=it(r),n=Dt(r),i=t.w,o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=(v,b)=>[v,b,n.y(b)],c=d(a,-o),h=d(l,-o),u=d(l,i+s),p=d(a,i+s),f=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*kt),m=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*kt);if(r.shape==="pent"){let v=[c,h,u,p];return{faces:[v],rim:v,ridges:[[u,p]],gable:[[0,n.y(0)],[i,n.y(i)]]}}if(r.shape==="hip"||r.shape==="pyramid"){let v=r.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,i-n.vr)||i/2),b=[t.u0+v,n.vr,n.rh],$=[t.u1-v,n.vr,n.rh],k=r.shape==="pyramid"?[[c,h,b],[h,u,b],[u,p,b],[p,c,b]]:[[c,h,$,b],[b,$,u,p],[p,c,b],[h,u,$]],M=r.shape==="pyramid"?[[c,b],[p,b],[h,b],[u,b]]:[[b,$],[c,b],[p,b],[h,$],[u,$]];return{faces:k,rim:[c,h,u,p],ridges:M,gable:null}}if(r.shape==="halfhip"){let v=Math.min(n.y(0),n.y(i)),b=v+(n.rh-v)*.55,$=f>1e-6?Math.min(n.vr,(b-r.eave_a)/f):n.vr,k=m>1e-6?Math.max(n.vr,i-(b-r.eave_b)/m):n.vr,M=Math.min((t.u1-t.u0)/2-.1,(n.rh-b)/Math.max(.2,f)),S=[t.u0+M,n.vr,n.rh],A=[t.u1-M,n.vr,n.rh],W=[a,$,b],E=[a,k,b],D=[l,$,b],z=[l,k,b];return{faces:[[c,h,D,A,S,W],[S,A,z,u,p,E],[E,W,S],[D,z,A]],rim:[c,h,D,z,u,p,E,W],ridges:[[S,A],[W,S],[E,S],[D,A],[z,A]],gable:[[0,n.y(0)],[$,b],[k,b],[i,n.y(i)]]}}if(r.shape==="mansard"){let v=pd(i,r.eave_a,r.eave_b,f,m),b=[a,v.vla,v.yla],$=[l,v.vla,v.yla],k=[a,i-v.vlb,v.ylb],M=[l,i-v.vlb,v.ylb],S=[a,v.vr,v.rh],A=[l,v.vr,v.rh];return{faces:[[c,h,$,b],[b,$,A,S],[S,A,M,k],[k,M,u,p]],rim:[c,h,$,A,M,u,p,k,S,b],ridges:[[S,A],[b,$],[k,M]],gable:[[0,n.y(0)],[v.vla,v.yla],[v.vr,v.rh],[i-v.vlb,v.ylb],[i,n.y(i)]]}}let _=[a,n.vr,n.rh],y=[l,n.vr,n.rh];return{faces:[[c,h,y,_],[_,y,u,p]],rim:[c,h,y,u,p,_],ridges:[[_,y]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}function tu(r,e,t){let n=null;for(let i of r.faces){if(!Z([e,t],i.map(v=>[v[0],v[1]])))continue;let[o,s]=i,a=i.slice(2).find(v=>Math.abs((s[0]-o[0])*(v[1]-o[1])-(s[1]-o[1])*(v[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],d=s[2]-o[2],c=s[1]-o[1],h=a[0]-o[0],u=a[2]-o[2],p=a[1]-o[1],f=d*p-c*u,m=c*h-l*p,_=l*u-d*h;if(Math.abs(m)<1e-9)continue;let y=o[2]-(f*(e-o[0])+_*(t-o[1]))/m;n=n===null?y:Math.min(n,y)}return n}function nu(r,e,t){let n=Math.min(r.x0,r.x1),i=Math.max(r.x0,r.x1),o=Math.min(r.z0,r.z1),s=Math.max(r.z0,r.z1);return r.axis==="x"?[e,r.flip?s-t:t-o]:[t,r.flip?i-e:e-n]}function iu(r){return{x0:Math.min(r.x0,r.x1),x1:Math.max(r.x0,r.x1),z0:Math.min(r.z0,r.z1),z1:Math.max(r.z0,r.z1)}}function fd(r,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,i=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of r){if(s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||i(s)<i(e)*1.5)continue;let a=iu(s);t<a.x0||t>a.x1||n<a.z0||n>a.z1||(!o||i(s)<i(o))&&(o=s)}return o}function md(r,e,t,n){let i=it(r),o=Dt(r),s=2,a=Math.max(i.u0+.3,Math.min(i.u1-s-.3,(n??(i.u0+i.u1)/2)-s/2)),l=e==="a"?r.eave_a:r.eave_b,d=e==="a"?r.pitch_a:r.pitch_b,c=l+1.4,h=s/2*Math.tan(35*kt),u=c+h,p=Math.max(.8,Math.min(i.w/2-.2,(u-l)/Math.max(.15,Math.tan(Math.min(80,d)*kt)))),f=e==="a"?0:i.w-p,m=e==="a"?p:i.w,_=i.at(a,f),y=i.at(a+s,m);return{id:t,x0:Math.round(Math.min(_[0],y[0])*100)/100,z0:Math.round(Math.min(_[1],y[1])*100)/100,x1:Math.round(Math.max(_[0],y[0])*100)/100,z1:Math.round(Math.max(_[1],y[1])*100)/100,shape:"gable",axis:r.axis==="x"?"z":"x",eave_a:Math.round(c*100)/100,eave_b:Math.round(c*100)/100,pitch_a:35,pitch_b:35,base:Math.round(o.y(e==="a"?0:i.w)*100)/100,overhang:.15,dormer:!0}}function gd(r,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=it(e),n=Dt(e).rh,i=Es(r,{u0:0,u1:0,a:0,b:0}),o=Dt(r),s=f=>{let[m,_]=t.at(f,t.w/2),[y,v]=nu(r,m,_);return tu(i,y,v)??o.y(v)},a=s(t.u0)<=s(t.u1),l=a?t.u0:t.u1,d=a?t.u1:t.u0,c=a?1:-1,h=Math.abs(d-l),u=d;for(let f=.5;f<h;f+=.05)if(s(l+c*f)>=n-.02){u=l+c*f;break}if(Math.abs(u-d)<.05)return e;let p={...e};return e.axis==="x"?d===t.u1?p.x1=u:p.x0=u:d===t.u1?p.z1=u:p.z0=u,p}function _d(r,e,t){let n=it(e),i=r.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>e.base+.05)),o=d=>d.some(c=>i.some(h=>Z(c,h.points))),s=.35,a=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d);return{a:o(a.map(d=>n.at(d,-s)))?0:t,b:o(a.map(d=>n.at(d,n.w+s)))?0:t,u0:o(l.map(d=>n.at(n.u0-s,d)))?0:t,u1:o(l.map(d=>n.at(n.u1+s,d)))?0:t}}function bd(r,e,t,n,i){let o=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])o.push([e+(n-e)*a,t+(i-t)*l]);let s=r.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&o.some(d=>Z(d,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function vd(r,e){let t=r.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function to(r){return Dt(r).rh}function wd(r,e=t=>`roof_${t+1}`){let t=r.settings.roof?.pitch??35,n=r.settings.wall_exterior,i=r.floors.filter(l=>l.rooms.some(d=>d.points.length>=3)).sort((l,d)=>d.elevation-l.elevation),o=[],s=[],a=l=>Math.round(l*1e3)/1e3;for(let l of i){let d=l.rooms.filter(b=>b.points.length>=3),c=[...new Set(d.flatMap(b=>b.points.map($=>a($[0]))))].sort((b,$)=>b-$),h=[...new Set(d.flatMap(b=>b.points.map($=>a($[1]))))].sort((b,$)=>b-$),u=c.length-1,p=h.length-1,f=(b,$)=>b.some(k=>Z($,k.points)),m=[];for(let b=0;b<p;b++){m.push([]);for(let $=0;$<u;$++){let k=[(c[$]+c[$+1])/2,(h[b]+h[b+1])/2];m[b].push(f(d,k)&&!f(s,k))}}let _=m.map(b=>b.map(()=>!1)),y=(b,$)=>m[$][b]&&!_[$][b],v=l.elevation+l.height;for(let b=0;b<p;b++)for(let $=0;$<u;$++){if(!y($,b))continue;let k=$;for(;k+1<u&&y(k+1,b);)k++;let M=b;for(;M+1<p&&Array.from({length:k-$+1},(D,z)=>y($+z,M+1)).every(Boolean);)M++;for(let D=b;D<=M;D++)for(let z=$;z<=k;z++)_[D][z]=!0;let S=c[$]-n,A=c[k+1]+n,W=h[b]-n,E=h[M+1]+n;Math.min(A-S,E-W)<.8||o.push({id:e(o.length),x0:a(S),z0:a(W),x1:a(A),z1:a(E),shape:"gable",axis:A-S>=E-W?"x":"z",eave_a:a(v),eave_b:a(v),pitch_a:t,pitch_b:t,base:a(v),overhang:null})}s.push(...d)}return o}var nn=Math.PI/180,yd=1.13,As=1.72,Je=.025,en=.07,kd=.25;function ot(r,e){let t=[];for(let n of r.floors){if(e&&n.id!==e)continue;let{walls:i}=Ie(n.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},n.walls??[]);for(let o of i){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let d=a/l,c=-s/l,h=o.slope?[[0,ds(o.slope,o.a[0],o.a[1])],[l,ds(o.slope,o.b[0],o.b[1])]]:void 0,u=o.profile&&h?Jn([o.profile,h],l)??o.profile:o.profile??h,p=u?.length?Math.max(...u.map(([,y])=>y)):Math.min(n.height,o.height??n.height),f=o.sources.find(y=>y.room_id===o.roomLeft)?.edge??null,m={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},_=(y,v,b,$,k)=>t.push({key:y,section:null,side:"top",flat:!1,o:v,eu:b,es:[0,1,0],n:$,lu:l,ls:p,pitch:90,span:()=>[0,l],facing:[$[0],$[2]],wall:{...m,...k?{profile:k}:{}}});_(`wall:${n.id}:${o.id}`,[o.a[0]+d*o.right,n.elevation,o.a[1]+c*o.right],[s/l,0,a/l],[d,0,c],u),o.free&&_(`wall:${n.id}:${o.id}:back`,[o.b[0]-d*o.left,n.elevation,o.b[1]-c*o.left],[-s/l,0,-a/l],[-d,0,-c],u?du(u,l):void 0)}}return t}var Ht="ground";function ou(r){let e=[...r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??r.floors[0]??null}function $d(r,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],o=ou(r),s=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:ma(o,s,a)):e.base??0;return{key:Ht,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Lt(r,e){let t=[];for(let n of r.floors)if(!(e&&n.id!==e))for(let i of n.outdoor??[])for(let o of gl(n,i)){if(!o.startId||!o.endId)continue;let s=o.end[0]-o.start[0],a=o.end[1]-o.start[1],l=Math.hypot(s,a);if(l<1e-9)continue;let d=[s/l,0,a/l],c=we(i.points)>=0?1:-1,h=[c*a/l,0,-c*s/l],u=o.startId,p=o.endId,f={floorId:n.id,balconyId:i.id,pointAId:u,pointBId:p,height:o.height};t.push({key:`balcony:${n.id}:${i.id}:${u}:${p}`,section:null,side:"top",flat:!1,o:[o.start[0],o.surfaceY,o.start[1]],eu:d,es:[0,1,0],n:h,lu:l,ls:o.height,pitch:90,span:()=>[0,l],facing:[h[0],h[2]],rail:f})}return t}function su(r,e){let t=r.rail;if(t.pointAId===e.point_a_id&&t.pointBId===e.point_b_id)return r;let n=[r.o[0]+r.eu[0]*r.lu,r.o[1]+r.eu[1]*r.lu,r.o[2]+r.eu[2]*r.lu];return{...r,key:`balcony:${t.floorId}:${t.balconyId}:${e.point_a_id}:${e.point_b_id}`,o:n,eu:[-r.eu[0],-r.eu[1],-r.eu[2]],rail:{...t,pointAId:e.point_a_id,pointBId:e.point_b_id}}}function Le(r,e,t=_e(r)){if(e.balcony_mount){let n=e.balcony_mount,i=Lt(r,n.floor_id).find(o=>{let s=o.rail;return!!s&&s.balconyId===n.balcony_id&&(s.pointAId===n.point_a_id&&s.pointBId===n.point_b_id||s.pointAId===n.point_b_id&&s.pointBId===n.point_a_id)});return i?su(i,n):null}return e.face===Ht?$d(r,e):e.face.startsWith("wall:")?ot(r,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function xd(r,e,t){let n=ot(r,t),i=r.settings.north??0,o=l=>{let d=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((d-180)*Math.PI/180))},s=[...n].sort((l,d)=>o(d)-o(l))[0];if(!s)return null;let a={...oo(s,e),portrait:!1,rows:1};return a.cols=Math.max(1,Math.floor((s.lu-.8+Je)/(As+Je))),a.u=Math.round((s.lu-(a.cols*As+(a.cols-1)*Je))/2*100)/100,a.v=Math.round(Math.max(0,s.ls-yd-.3)*100)/100,a}function Is(r,e){let t=r.floors.flatMap(o=>o.rooms.flatMap(s=>s.points)),n=t.length?Math.max(...t.map(o=>o[0]))+3:0,i=t.length?Math.min(...t.map(o=>o[1])):0;return{id:e,face:Ht,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(r.settings.north??0)||0,look:"black",entity:null}}function Rs(r){return r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function _e(r){let e=r.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(v=>ru(v,_d(r,v,v.overhang??e.overhang)));let t=Rs(r);if(!t)return[];let n=t.rooms.flatMap(v=>v.points.map(b=>b[0])),i=t.rooms.flatMap(v=>v.points.map(b=>b[1])),o=r.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...i)-o,d=Math.max(...i)+o,c=t.elevation+t.height;if(e.type==="flat")return[Sd("main",null,s,l,a,d,c+kd)];let h=a-s>=d-l,u=e.ridge==="short"?!h:h,p=(u?d-l:a-s)/2,f=p*Math.tan(e.pitch*nn),m=(v,b,$)=>u?[v,c+$,(l+d)/2+b]:[(s+a)/2+b,c+$,v],[_,y]=u?[s,a]:[l,d];return[-1,1].map(v=>no(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",m(_,v*p,0),m(y,v*p,0),m(_,0,f),e.pitch,()=>[0,y-_]))}function ru(r,e){let t=it(r),n=Dt(r),i=(m,_,y)=>{let[v,b]=t.at(m,_);return[v,y,b]},o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=l-a;if(r.shape==="flat"||r.shape==="parapet"){let m=t.at(a,-o),_=t.at(l,t.w+s);return[Sd(r.id,r.id,Math.min(m[0],_[0]),Math.min(m[1],_[1]),Math.max(m[0],_[0]),Math.max(m[1],_[1]),r.eave_a+kd)]}if(r.shape==="pent")return[no(`${r.id}:a`,r.id,"a",i(a,-o,n.y(-o)),i(l,-o,n.y(-o)),i(a,t.w+s,n.y(t.w+s)),r.pitch_a,()=>[0,d])];let c=r.shape==="hip"||r.shape==="pyramid",h=r.shape==="pyramid"?(t.u1-t.u0)/2:c?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,u=c?t.u0+h-a:0,p=c?l-(t.u1-h):0,f=[];if(n.vr>.3){let m=Math.hypot(n.vr+o,n.rh-n.y(-o));f.push(no(`${r.id}:a`,r.id,"a",i(a,-o,n.y(-o)),i(l,-o,n.y(-o)),i(a,n.vr,n.rh),r.pitch_a,_=>[u*(_/m),d-p*(_/m)]))}if(t.w-n.vr>.3){let m=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));f.push(no(`${r.id}:b`,r.id,"b",i(l,t.w+s,n.y(t.w+s)),i(a,t.w+s,n.y(t.w+s)),i(l,n.vr,n.rh),r.pitch_b,_=>[p*(_/m),d-u*(_/m)]))}if(c){let m=n.y(-o),_=n.y(t.w+s),y=[[`${r.id}:c`,"c",i(a,t.w+s,_),i(a,-o,m),i(t.u0+h,n.vr,n.rh)],[`${r.id}:d`,"d",i(l,-o,m),i(l,t.w+s,_),i(t.u1-h,n.vr,n.rh)]];for(let[v,b,$,k,M]of y){let S=au(v,r.id,b,$,k,M);S&&f.push(S)}}return f}function au(r,e,t,n,i,o){let s=si(tn(i,n));if(s<.3)return null;let a=Wt(tn(i,n)),l=tn(o,n),d=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],c=[l[0]-a[0]*d,l[1]-a[1]*d,l[2]-a[2]*d],h=si(c);if(h<.3)return null;let u=Wt(c),p=Wt(zd(a,u));p[1]<0&&(p=[-p[0],-p[1],-p[2]]);let f=Wt([-u[0],0,-u[2]]),m=Math.atan2(u[1],Math.hypot(u[0],u[2]))/nn;return{key:r,section:e,side:t,flat:!1,o:n,eu:a,es:u,n:p,lu:s,ls:h,pitch:m,span:y=>{let v=Math.min(1,Math.max(0,y/h));return[d*v,s-(s-d)*v]},facing:[f[0],f[2]]}}function no(r,e,t,n,i,o,s,a){let l=Wt(tn(i,n)),d=Wt(tn(o,n)),c=Wt(zd(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let h=Wt([-d[0],0,-d[2]]);return{key:r,section:e,side:t,flat:!1,o:n,eu:l,es:d,n:c,lu:si(tn(i,n)),ls:si(tn(o,n)),pitch:s,span:a,facing:[h[0],h[2]]}}function Sd(r,e,t,n,i,o,s){let a=i-t>=o-n,l=a?i-t:o-n,d=a?o-n:i-t;return{key:`${r}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function En(r){let e=r.module_w||yd,t=r.module_h||As;return r.portrait===!1?[t,e]:[e,t]}function ri(r){return r.layout?.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function Ts(r,e){return r.flat?Math.min(45,Math.max(0,e.tilt??15))*nn:r.wall||r.rail?Math.min(90,Math.max(0,e.tilt??0))*nn:0}function $t(r,e){let[t,n]=En(e),i=ri(e),o=Math.max(1,...i),a=(i.length-1)*Ds(r,e)+n*Math.cos(Ts(r,e));return[o*t+(o-1)*Je,a]}function Ds(r,e){let[,t]=En(e),n=Ts(r,e);return r.wall||r.rail?t*Math.cos(n)+Je:r.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Je}function xt(r,e,t=!1){let[n,i]=En(e),o=[],s=Ts(r,e),a=i*Math.cos(s),l=Ds(r,e),d=ri(e),c=Math.max(1,...d),h=new Set(e.skip??[]),u=!!r.wall&&n>r.lu+1e-6,p=(m,_,y)=>[r.o[0]+r.eu[0]*m+r.es[0]*_+r.n[0]*y,r.o[1]+r.eu[1]*m+r.es[1]*_+r.n[1]*y,r.o[2]+r.eu[2]*m+r.es[2]*_+r.n[2]*y],f=(m,_)=>{if(r.rail||r.unbounded)return!0;if(_<-1e-6||_>r.ls+1e-6||r.wall?.profile&&_>Ne(r.wall.profile,m)+1e-6)return!1;let[y,v]=r.span(_);return m>=y-1e-6&&m<=v+1e-6};return d.forEach((m,_)=>{let y=e.align==="right"?c-m:e.align==="center"?(c-m)/2:0;for(let v=0;v<m;v++){let b=`${_}:${v}`,$=h.has(b);if($&&!t)continue;let k=e.u+(v+y)*(n+Je),M=e.v+_*l,S=k+n,A=M+(r.flat||r.wall||r.rail?a:i);if(u){if(!(f((k+S)/2,M)&&f((k+S)/2,A)))continue}else if(![[k,M],[S,M],[S,A],[k,A]].every(([H,R])=>f(H,R)))continue;if(r.wall?.profile&&!cu(r.wall.profile,k,S,A))continue;if((r.wall||r.rail)&&s>.001){let H=en+i*Math.sin(s),[R,L]=e.flip?[H,en]:[en,H],C=[p(k,M,R),p(S,M,R),p(S,A,L),p(k,A,L)],O=e.flip?M:A,J=[k+.05,S-.05].map(N=>[p(N,O,0),p(N,O,H)]);o.push({corners:C,posts:J,cell:b,skipped:$});continue}if(!r.flat){o.push({corners:[p(k,M,en),p(S,M,en),p(S,A,en),p(k,A,en)],posts:[],cell:b,skipped:$});continue}let W=.15,E=W+i*Math.sin(s),[D,z]=e.flip?[A,M]:[M,A],F=[p(k,D,W),p(S,D,W),p(S,z,E),p(k,z,E)];o.push({corners:F,posts:[k+.05,S-.05].flatMap(H=>[[p(H,D,0),p(H,D,W)],[p(H,z,0),p(H,z,E)]]),cell:b,skipped:$})}}),o}function io(r,e){let t=[r.eu[0],r.eu[2]],n=[r.es[0],r.es[2]],i=[e[0]-r.o[0],e[1]-r.o[2]],o=t[0]*n[1]-t[1]*n[0];if(Math.abs(o)<1e-9)return null;let s=(i[0]*n[1]-i[1]*n[0])/o,a=(t[0]*i[1]-t[1]*i[0])/o;if(a<0||a>r.ls)return null;let[l,d]=r.span(a);return s>=l&&s<=d?{u:s,s:a}:null}function Md(r,e){let t=null;for(let n of r){if(n.rail){let s=[e[0]-n.o[0],e[1]-n.o[2]],a=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};continue}if(n.wall){let s=[e[0]-n.o[0],e[1]-n.o[2]],a=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};a>=0&&a<=n.lu&&l>.35&&l<=.8&&!t&&(t={face:n,u:a,s:Number.NaN,y:-1/0});continue}let i=io(n,e);if(!i)continue;let o=n.o[1]+n.es[1]*i.s;(!t||o>t.y)&&(t={face:n,...i,y:o})}return t?{face:t.face,u:t.u,s:t.s}:null}function An(r,e){if(r.rail)return{u:e.u,v:e.v};if(r.unbounded)return{u:e.u,v:e.v};let[t,n]=$t(r,e),i=s=>Math.floor(s*100+1e-6)/100;return{u:r.wall&&t>r.lu?Math.round((r.lu-t)/2*100)/100:i(Math.min(Math.max(0,e.u),Math.max(0,r.lu-t))),v:i(Math.min(Math.max(0,e.v),Math.max(0,r.ls-n)))}}function oo(r,e){let t={id:e,face:r.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:r.flat?15:null,flip:!1,entity:null,look:"black"},[n]=En(t),i=.4,o=Ds(r,t),[s,a]=r.span(r.ls/2);for(t.cols=Math.max(1,Math.floor((a-s-2*i+Je)/(n+Je))),t.rows=Math.max(1,Math.min(4,Math.floor((r.ls-2*i)/o)));t.cols>1&&xt(r,{...t,u:Fs(r,t),v:i}).length<t.rows*t.cols;)t.cols--;return t.u=Fs(r,t),t.v=i,t}function Ws(r,e){let t={...e,face:r.key,tilt:r.flat?e.tilt??15:null,rotation:null,flip:!1,...e.balcony_mount?{balcony_mount:null}:{}};return r.wall&&Object.assign(t,lu(r,t)),t.u=Fs(r,t),t.v=.4,{...t,...An(r,t)}}function Pd(r,e,t,n,i){return{...e,face:r.key,balcony_mount:{...t},u:n,v:i}}function lu(r,e){let t=i=>Math.floor((r.lu+Je+1e-6)/(En({...e,portrait:i})[0]+Je)),n=e.portrait===!1&&t(!1)<1?!0:e.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...ri(e)),t(n!==!1))),layout:void 0,skip:void 0}}function Fs(r,e){let[t]=En(e),n=e.cols*t+(e.cols-1)*Je;return Math.round((r.lu-n)/2*100)/100}function Hs(r,e){let t=(Math.atan2(r.facing[0],-r.facing[1])/nn-e+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(t/45)%8]}function so(r,e){let t=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/nn-e+720)%360,o=Math.cos((i-180)*nn);return n.lu*n.ls*(1.2+o)};return[...r].sort((n,i)=>t(i)-t(n))[0]??null}function tn(r,e){return[r[0]-e[0],r[1]-e[1],r[2]-e[2]]}function si(r){return Math.hypot(r[0],r[1],r[2])}function Wt(r){let e=si(r)||1;return[r[0]/e,r[1]/e,r[2]/e]}function zd(r,e){return[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]]}var Ed=.78,Ad=1.18;function Fn(r){return{id:r.id,face:r.face,u:r.u,v:r.v,rows:1,cols:1,portrait:!0,module_w:r.w||Ed,module_h:r.h||Ad}}function Fd(r,e){let t=xt(r,Fn(e))[0];if(!t)return null;let n=i=>[i[0]-r.n[0]*.05,i[1]-r.n[1]*.05,i[2]-r.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function Ls(r,e){let t=Ed,n=Ad,[i,o]=r.span(r.ls/2);return{id:e,face:r.key,u:Math.round((i+o-t)/2*100)/100,v:Math.round(Math.max(0,Math.min(r.ls-n,r.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function ai(r,e,t){let n=$d(r,e),[i,o]=$t(n,e),s=n.eu[0]*(e.u+i/2)+n.es[0]*(e.v+o/2),a=n.eu[2]*(e.u+i/2)+n.es[2]*(e.v+o/2),l=t*Math.PI/180,d=[Math.cos(l),Math.sin(l)],c=[-Math.sin(l),Math.cos(l)],h=s*d[0]+a*d[1]-i/2,u=s*c[0]+a*c[1]-o/2,p=f=>Math.round(f*100)/100;return{u:p(h),v:p(u),rotation:(Math.round(t)%360+360)%360}}function li(r,e){let[t,n]=$t(r,e);return[r.o[0]+r.eu[0]*(e.u+t/2)+r.es[0]*(e.v+n/2),r.o[2]+r.eu[2]*(e.u+t/2)+r.es[2]*(e.v+n/2)]}function Os(r,e,t){let n=t[0]*r.n[0]+t[1]*r.n[1]+t[2]*r.n[2];if(Math.abs(n)<1e-6)return null;let i=((r.o[0]-e[0])*r.n[0]+(r.o[1]-e[1])*r.n[1]+(r.o[2]-e[2])*r.n[2])/n;if(i<=0)return null;let o=[e[0]+t[0]*i-r.o[0],e[1]+t[1]*i-r.o[1],e[2]+t[2]*i-r.o[2]],s=o[0]*r.eu[0]+o[1]*r.eu[1]+o[2]*r.eu[2],a=o[0]*r.es[0]+o[1]*r.es[1]+o[2]*r.es[2];return{t:i,u:s,s:a}}function Id(r,e,t){if(r.unbounded)return!0;if(t<0||t>r.ls||r.wall?.profile&&t>Ne(r.wall.profile,e))return!1;let[n,i]=r.span(t);return e>=n&&e<=i}function du(r,e){return[...r].reverse().map(([t,n])=>[e-t,n])}function cu(r,e,t,n){let i=r[r.length-1][0],o=Math.max(0,Math.min(i,Math.min(e,t))),s=Math.max(0,Math.min(i,Math.max(e,t)));return Ne(r,o)<n-1e-6||Ne(r,s)<n-1e-6?!1:r.every(([a,l])=>a<=o+1e-6||a>=s-1e-6||l>=n-1e-6)}function Rd(r,e,t,n){for(let i of xt(r,e)){let o=i.corners.map(c=>{let h=[c[0]-r.o[0],c[1]-r.o[1],c[2]-r.o[2]];return[h[0]*r.eu[0]+h[1]*r.eu[1]+h[2]*r.eu[2],h[0]*r.es[0]+h[1]*r.es[1]+h[2]*r.es[2]]}),[s,a]=[Math.min(...o.map(c=>c[0])),Math.max(...o.map(c=>c[0]))],[l,d]=[Math.min(...o.map(c=>c[1])),Math.max(...o.map(c=>c[1]))];if(t>=s-.05&&t<=a+.05&&n>=l-.05&&n<=d+.05)return!0}return!1}var Ue=.03,ro=r=>r&&r!=="none"?r:null;function Bs(r,e=t=>ro(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors)for(let i of n.furniture){let o=e(i);if(i.type==="meter")t.grid??=o,t.gridExport??=ro(i.export);else if(i.type==="inverter"&&o&&!t.solar.includes(o))t.solar.push(o);else if(i.type==="home_battery"){o&&!t.battery.includes(o)&&t.battery.push(o);let s=ro(i.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(o||s)&&t.batteries.push({power:o,charge:s});let a=ro(i.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function Cs(r){for(let e of r.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return r.energy.meter}function Bd(r){let e=n=>r.energy_sources?.find(i=>i.type===n)?.stat_energy_from??null,t=n=>n&&n.startsWith("sensor.")?n:null;return{gas:t(e("gas")),water:t(e("water"))}}function ao(r,e,t="power"){if(!e)return null;let n=r.entities?.[e]?.device_id;if(!n)return null;let i=Object.keys(r.states).filter(a=>a.startsWith("sensor.")&&r.entities?.[a]?.device_id===n&&r.states[a]?.attributes.device_class===t);if(i.length<=1)return i[0]??null;let o=i.filter(a=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(a)),s=e.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return o.find(a=>s&&a.includes(s))??o[0]??i[0]}function Cd(r,e){let t={};for(let n of e.energy_sources??[])if(n.type==="grid"){let i=n.flow_from?.[0]?.stat_energy_from??n.flow_to?.[0]?.stat_energy_to,o=ao(r,i);o&&!t.grid&&(t.grid=o)}else if(n.type==="solar"){let i=ao(r,n.stat_energy_from);i&&!t.solar&&(t.solar=i)}else if(n.type==="battery"){let i=ao(r,n.stat_energy_from??n.stat_energy_to);i&&!t.battery&&(t.battery=i);let o=ao(r,n.stat_energy_from??n.stat_energy_to,"battery");o&&!t.battery_soc&&(t.battery_soc=o)}return t}var hu=.07;function St(r,e=!1){if(!r)return null;let t=Number(r.state);if(!Number.isFinite(t))return null;let n=String(r.attributes.unit_of_measurement??"W"),i=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-i:i}function uu(r,e){return e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power"}function Nd(r,e){if(uu(r,e))return e;let t=r.entities?.[e]?.device_id;if(!t)return null;let n=qa(r,t),i=n?qt(r,e):null;return is(r,t).find(o=>o!==e&&(!n||i!==null&&qt(r,o)===i))??null}function Kd(r,e,t,n=Bs(e)){let i=e.energy,o=i.grid??n.grid,s=o?St(r.states[o],i.grid_invert):null;if(!i.grid&&n.gridExport){let m=Math.max(0,St(r.states[n.gridExport])??0);s=Math.max(0,s??0)-m}let a=i.solar?St(r.states[i.solar]):null;if(!i.solar&&n.solar.length){let m=n.solar.map(_=>St(r.states[_])).filter(_=>_!==null);a=m.length?m.reduce((_,y)=>_+y,0):null}let l=i.battery?St(r.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let m=n.batteries.map(_=>{if(_.charge){let y=_.power?Math.max(0,St(r.states[_.power])??0):0,v=Math.max(0,St(r.states[_.charge])??0);return y-v}return _.power?St(r.states[_.power],i.battery_invert):null}).filter(_=>_!==null);l=m.length?m.reduce((_,y)=>_+y,0):null}let c=(i.battery_soc?[i.battery_soc]:n.soc).map(m=>Number(r.states[m]?.state)).filter(m=>Number.isFinite(m)),h=c.length?c.reduce((m,_)=>m+_,0)/c.length:NaN,u=i.tariff?r.states[i.tariff]:void 0,p=Number(u?.state),f=i.consumption?St(r.states[i.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||a!==null||l!==null?f=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(f=t.reduce((m,_)=>m+_.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(h)?h:null,tariff:u&&Number.isFinite(p)?{value:p,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:f}}function rn(r,e){return r.pos.push(e),r.adj.push([]),r.pos.length-1}function sn(r,e,t){let n=Math.hypot(r.pos[e][0]-r.pos[t][0],r.pos[e][1]-r.pos[t][1]);r.adj[e].push({to:t,w:n}),r.adj[t].push({to:e,w:n})}function pu(r,e){let t=r.length,n=r.map((i,o)=>{let s=r[(o+1)%t],a=s[0]-i[0],l=s[1]-i[1],d=Math.hypot(a,l)||1,c=-l/d,h=a/d;return{p:[i[0]+c*e[o],i[1]+h*e[o]],d:[a/d,l/d],n:[c,h]}});return r.map((i,o)=>{let s=n[(o-1+t)%t],a=n[o],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*e[o],i[1]+a.n[1]*e[o]];let d=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*d,s.p[1]+s.d[1]*d]})}function fu(r){return we(r.points)>=0?{pts:r.points,flipped:!1}:{pts:[...r.points].reverse(),flipped:!0}}function Ns(r,e,t){let n={pos:[],adj:[],rings:new Map},{walls:i}=Ie(r.rooms,{exterior:e,interior:t},r.walls??[]);for(let o of r.rooms){if(o.points.length<3)continue;let{pts:s,flipped:a}=fu(o),l=s.length,d=s.map((u,p)=>{let f=a?(l-2-p+l)%l:p,m=i.some(_=>!_.exterior&&_.sources.some(y=>y.room_id===o.id&&y.edge===f));return hu+(m?t/2:0)}),c=pu(s,d).map(u=>rn(n,u)),h=c.map((u,p)=>[u,c[(p+1)%l]]);for(let[u,p]of h)sn(n,u,p);n.rings.set(o.id,h)}for(let o of i){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let s=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],a=co(n,o.roomLeft,s),l=co(n,o.roomRight,s);a!==null&&l!==null&&sn(n,a,l)}return n}function co(r,e,t){let n=r.rings.get(e);if(!n)return null;let i=null;for(let s of n){let a=r.pos[s[0]],l=r.pos[s[1]],d=l[0]-a[0],c=l[1]-a[1],h=d*d+c*c||1,u=Math.min(1,Math.max(0,((t[0]-a[0])*d+(t[1]-a[1])*c)/h)),p=[a[0]+d*u,a[1]+c*u],f=Math.hypot(t[0]-p[0],t[1]-p[1]);(!i||f<i.d)&&(i={seg:s,q:p,d:f})}if(!i)return null;let o=rn(r,i.q);return sn(r,o,i.seg[0]),sn(r,o,i.seg[1]),o}function ho(r,e,t){let n=r.pos[t],i=co(r,e.id,n);if(i===null)return!1;let o=r.pos[i],s=r.pos[r.adj[i][0].to],a=r.pos[r.adj[i][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,d=[(a[0]-s[0])/l,(a[1]-s[1])/l],c=(n[0]-o[0])*d[0]+(n[1]-o[1])*d[1],h=(n[1]-o[1])*d[0]-(n[0]-o[0])*d[1];if(Math.abs(c)<.01||Math.abs(h)<.01)return sn(r,t,i),!0;let u=[o[0]+d[0]*c,o[1]+d[1]*c],p=[o[0]-d[1]*h,o[1]+d[0]*h],f=rn(r,Z(p,e.points)||!Z(u,e.points)?p:u);return sn(r,i,f),sn(r,f,t),!0}function ci(r,e){let t=r.rooms.filter(o=>o.points.length>=3),n=t.find(o=>Z(e,o.points));if(n)return n;let i=null;for(let o of t)for(let s of o.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!i||a<i.d)&&(i={room:o,d:a})}return i?.room??null}function jd(r,e){let t=r.pos.map(()=>1/0),n=r.pos.map(()=>-1),i=r.pos.map(()=>!1);for(t[e]=0;;){let o=-1;for(let s=0;s<t.length;s++)!i[s]&&t[s]<1/0&&(o<0||t[s]<t[o])&&(o=s);if(o<0)break;i[o]=!0;for(let{to:s,w:a}of r.adj[o])t[o]+a<t[s]-1e-9&&(t[s]=t[o]+a,n[s]=o)}return{dist:t,prev:n}}function Td(r,e){return r.every(t=>e[t].kind==="battery")?"battery":r.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var Dd=new WeakMap;function mu(r,e){let t=Cs(r),n=r.floors.find(c=>c.id===t.floor_id),i=[],{wall_exterior:o,wall_interior:s}=r.settings,a=new Map,l=new Map;e.forEach((c,h)=>l.set(c.floorId,[...l.get(c.floorId)??[],h]));let d=r.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===n.id)continue;let h=c.elevation>n.elevation,u=l.get(c.id),p=Td(u,e);i.push({floorId:n.id,a:[t.x,Ue,t.z],b:[t.x,h?n.height:-.2,t.z],dist:0,members:u,kind:p});let f=Math.abs(c.elevation-n.elevation);i.push({floorId:c.id,a:[t.x,h?-.2:c.height,t.z],b:[t.x,Ue,t.z],dist:f,members:u,kind:p}),a.set(c.id,f+.25)}for(let c of d){let h=Ns(c,o,s),u=ci(c,[t.x,t.z]);if(!u)continue;let p=rn(h,[t.x,t.z]);if(!ho(h,u,p))continue;let f=[];for(let b of l.get(c.id)){let $=e[b],k=ci(c,[$.x,$.z]);if(!k)continue;let M=rn(h,[$.x,$.z]);ho(h,k,M)&&f.push({node:M,member:b})}let{dist:m,prev:_}=jd(h,p),y=new Map;for(let b of f)if(Number.isFinite(m[b.node]))for(let $=b.node;_[$]>=0;$=_[$]){let k=_[$],M=`${k}>${$}`,S=y.get(M)??{a:k,b:$,members:[]};S.members.push(b.member),y.set(M,S)}let v=a.get(c.id)??0;for(let{a:b,b:$,members:k}of y.values()){let M=h.pos[b],S=h.pos[$],A=Td(k,e);i.push({floorId:c.id,a:[M[0],Ue,M[1]],b:[S[0],Ue,S[1]],dist:v+m[b],members:k,kind:A})}}return i}function Gd({building:r,consumers:e,summary:t,battery:n,fieldPower:i,devicePower:o}){let s=Cs(r);if(!s)return[];let a=r.floors.find(E=>E.id===s.floor_id);if(!a)return[];let l=E=>o?.get(E),d=Vs(r,"inverter"),c=Vs(r,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let h=E=>{let D=null;for(let z of d)z.floorId===E.floorId&&(!D||Math.hypot(z.x-E.x,z.z-E.z)<Math.hypot(D.x-E.x,D.z-E.z))&&(D=z);return D},u=E=>l(E.id)??(c.length===1?t.battery??0:0),p=new Map;for(let E of c){let D=h(E);D&&p.set(E.id,D)}let f=e.map(E=>({floorId:E.floorId,x:E.x,z:E.z,kind:E.wallbox?"wallbox":"consumer",power:E.power}));for(let E of c)!p.has(E.id)&&t.battery!==null&&f.push({floorId:E.floorId,x:E.x,z:E.z,kind:"battery",power:Math.abs(u(E))});let m=`${s.floor_id}:${s.x},${s.z}|${f.map(E=>`${E.floorId}:${E.x},${E.z}:${E.kind}`).join(";")}`,_=Dd.get(r);_||Dd.set(r,_=new Map);let y=_.get(m);y||(y=mu(r,f),_.clear(),_.set(m,y));let v=y.map(E=>({floorId:E.floorId,a:E.a,b:E.b,dist:E.dist,power:E.members.reduce((D,z)=>D+f[z].power,0),kind:E.kind})),b=t.grid!==null?Ks(r):null,$=r.settings.roof.cables??[],k=E=>$.find(D=>D.id===E),M=(E,D)=>E.map(z=>({...z,key:D}));if(b){let E=t.grid>=0,D=k("grid"),z=D?di(r,D,[b.end[0],a.elevation+Math.max(Ue,b.height),b.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...b.height>.05?[[b.end[0],b.height,b.end[1]]]:[],[b.end[0],Ue,b.end[1]],[b.wall[0],Ue,b.wall[1]],[s.x,Ue,s.z]],F=D?on(r,E?z:[...z].reverse(),Math.abs(t.grid),E?"grid":"export",a):Ud(a.id,E?z:[...z].reverse(),Math.abs(t.grid),E?"grid":"export",0);v.push(...M(F,"grid"))}if(t.battery!==null&&t.battery>0)for(let E of v)E.kind==="battery"&&([E.a,E.b]=[E.b,E.a]);let S=r.settings.roof.solar??[],A=r.settings.roof.strings??[],W=new Map;if(i&&S.length){let E=[..._e(r),...ot(r),...Lt(r)];for(let D of S){let z=i.get(D.id)??0,F=D.string?A.find(j=>j.id===D.string)?.inverter:null,H=F?c.find(j=>j.id===F)??null:null,R=F&&!H?d.find(j=>j.id===F)??null:null;if(H){let j=p.get(H.id);j&&W.set(j.id,(W.get(j.id)??0)+z);let Y=H.variant==="wall"?.5+H.h:.9,ee=k(`solar:${D.id}`),K=ee?Ld(r,D):null,ue=r.floors.find(Me=>Me.id===H.floorId);ee&&K&&ue?v.push(...M(on(r,di(r,ee,K,[H.x,ue.elevation+Y,H.z]),z,"solar",ue),`solar:${D.id}`)):v.push(...M(Vd(r,D,z,H,Y),`solar:${D.id}`));continue}if(!R&&d.length){let j=Le(r,D,E),Y=j?li(j,D):[D.u,D.v];R=d.reduce((ee,K)=>!ee||Math.hypot(K.x-Y[0],K.z-Y[1])<Math.hypot(ee.x-Y[0],ee.z-Y[1])?K:ee,null)}R&&W.set(R.id,(W.get(R.id)??0)+z);let L=R??{floorId:s.floor_id,x:s.x,z:s.z},C=R?1.1+R.h:1.5,O=k(`solar:${D.id}`),J=O?Ld(r,D):null,N=r.floors.find(j=>j.id===L.floorId);O&&J&&N?v.push(...M(on(r,di(r,O,J,[L.x,N.elevation+C,L.z]),z,"solar",N),`solar:${D.id}`)):v.push(...M(Vd(r,D,z,L,C),`solar:${D.id}`))}}else t.solar!==null&&!d.length&&v.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,Ue,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let E of d){let D=1.1+E.h,z=c.filter(R=>p.get(R.id)===E),F=l(E.id);if(F===void 0){F=W.get(E.id)??(d.length===1?t.solar??0:0);for(let R of z)F+=u(R)}let H=r.floors.find(R=>R.id===E.floorId);if(t.solar!==null||t.battery!==null){let R=k(`inv:${E.id}`),L=R&&H?on(r,di(r,R,[E.x,H.elevation+D,E.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,F),"inverter",H):Hd(r,E,D,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,F),"inverter",0);v.push(...M(L,`inv:${E.id}`))}for(let R of z){let L=u(R);if(t.battery===null&&l(R.id)===void 0)continue;let C=R.variant==="wall"?.5+R.h:.9,O=k(`bat:${R.id}`),J=O&&H?on(r,di(r,O,[E.x,H.elevation+D-.1,E.z],[R.x,H.elevation+C,R.z]),Math.abs(L),"battery",H):Hd(r,E,D-.1,R,C,Math.abs(L),"battery",0);v.push(...M(L<=0?J:J.map(N=>({...N,a:N.b,b:N.a})).reverse(),`bat:${R.id}`))}}return v}function Ks(r){let e=Cs(r),t=e?r.floors.find(p=>p.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:i}=r.settings,{walls:o}=Ie(t.rooms,{exterior:n,interior:i},t.walls??[]),s=Vs(r,"grid_point")[0],a=o.filter(p=>p.exterior);if(s){let p=null;for(let _ of a){let y=_.b[0]-_.a[0],v=_.b[1]-_.a[1],b=s.x-e.x,$=s.z-e.z,k=b*v-$*y;if(Math.abs(k)<1e-9)continue;let M=((_.a[0]-e.x)*v-(_.a[1]-e.z)*y)/k,S=((_.a[0]-e.x)*$-(_.a[1]-e.z)*b)/k;if(M<=0||M>1||S<0||S>1||p&&M>=p.t)continue;let A=Math.hypot(y,v)||1;p={q:[e.x+b*M,e.z+$*M],out:[v/A,-y/A],t:M}}let f=p?[p.q[0]+p.out[0]*(n/2+.05),p.q[1]+p.out[1]*(n/2+.05)]:[e.x,e.z],m=r.floors.flatMap(_=>_.furniture).find(_=>_.id===s.id)?.mount_y??0;return{floorId:t.id,wall:f,end:[s.x,s.z],height:Math.max(0,m)}}let l=null;for(let p of a){let f=p.b[0]-p.a[0],m=p.b[1]-p.a[1],_=f*f+m*m||1,y=Math.min(1,Math.max(0,((e.x-p.a[0])*f+(e.z-p.a[1])*m)/_)),v=[p.a[0]+f*y,p.a[1]+m*y],b=Math.hypot(e.x-v[0],e.z-v[1]),$=Math.sqrt(_);(!l||b<l.d)&&(l={q:v,out:[m/$,-f/$],d:b})}if(!l)return null;let{q:d,out:c}=l,h=0;for(let p of r.floors)for(let f of p.outdoor??[]){let m=f.points.length;for(let _=0;_<m;_++){let y=f.points[_],v=f.points[(_+1)%m],b=v[0]-y[0],$=v[1]-y[1],k=c[0]*$-c[1]*b;if(Math.abs(k)<1e-9)continue;let M=((y[0]-d[0])*$-(y[1]-d[1])*b)/k,S=((y[0]-d[0])*c[1]-(y[1]-d[1])*c[0])/k;M>0&&S>=0&&S<=1&&(h=Math.max(h,Math.min(15,M)))}}let u=h>n+1?h:n+2.5;return{floorId:t.id,wall:[d[0]+c[0]*(n/2+.05),d[1]+c[1]*(n/2+.05)],end:[d[0]+c[0]*u,d[1]+c[1]*u],height:0}}function Vs(r,e){let t=[];for(let n of r.floors)for(let i of n.furniture)i.type===e&&t.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var Wd=new WeakMap;function lo(r,e,t,n){let i=`${e.id}:${t.join(",")}>${n.join(",")}`,o=Wd.get(r);o||Wd.set(r,o=new Map);let s=o.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=r.settings,d=Ns(e,a,l),c=[t,n],h=ci(e,t),u=ci(e,n);if(h&&u){let p=rn(d,t),f=rn(d,n);if(ho(d,h,p)&&ho(d,u,f)){let{dist:m,prev:_}=jd(d,p);if(Number.isFinite(m[f])){c.length=0;for(let y=f;y>=0;y=_[y])c.unshift(d.pos[y])}}}return o.set(i,c),c}function Hd(r,e,t,n,i,o,s,a){let l=r.floors.find(h=>h.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let d=lo(r,l,[e.x,e.z],[n.x,n.z]),c=[[e.x,t,e.z],...d.map(h=>[h[0],Ue,h[1]]),[n.x,i,n.z]];return Ud(l.id,c,o,s,a)}function Ud(r,e,t,n,i){let o=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],d=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);d<1e-4||(o.push({floorId:r,a,b:l,dist:i,power:t,kind:n}),i+=d)}return o}function di(r,e,t,n){let o=(r.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(Ue,e.height);return[t,...e.points.map(s=>[s[0],o,s[1]]),n]}function Ld(r,e){let t=Le(r,e,[..._e(r),...ot(r),...Lt(r)]);if(!t)return null;let[n,i]=$t(t,e),o=e.u+n/2,s=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*o+t.es[0]*s,t.o[1]+t.eu[1]*o+t.es[1]*s,t.o[2]+t.eu[2]*o+t.es[2]*s]}function Zd(r,e,t){let{wall_exterior:n,wall_interior:i}=r.settings,o=Ns(e,n,i),s=ci(e,t),a=s?co(o,s.id,t):null;return a===null?t:o.pos[a]}function Od(r,e,t){let n=null;for(let o of e.rooms)if(!(o.points.length<3))for(let s=0;s<o.points.length;s++){let a=o.points[s],l=o.points[(s+1)%o.points.length],d=l[0]-a[0],c=l[1]-a[1],h=Math.max(0,Math.min(1,((t[0]-a[0])*d+(t[1]-a[1])*c)/(d*d+c*c||1))),u=[a[0]+d*h,a[1]+c*h],p=Math.hypot(u[0]-t[0],u[1]-t[1]),f=Math.hypot(d,c)||1,m=we(o.points)>=0?1:-1,_=[-c/f*m,d/f*m];(!n||p<n.distance)&&(n={room:o,point:u,inward:_,distance:p})}if(!n)return t;let i=[n.point[0]+n.inward[0]*.03,n.point[1]+n.inward[1]*.03];return Zd(r,e,Z(i,n.room.points)?i:n.point)}function on(r,e,t,n,i){let o=[...r.floors].sort((d,c)=>d.elevation-c.elevation),s=d=>{let c=i;for(let h of o)d>=h.elevation-.01&&(c=h);return c},a=[],l=0;for(let d=0;d+1<e.length;d++){let c=e[d],h=e[d+1];if(Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2])<1e-4)continue;let p=[];if(Math.abs(h[1]-c[1])>.01){let f=Math.min(c[1],h[1]),m=Math.max(c[1],h[1]);for(let _ of o)_.elevation>f+.01&&_.elevation<m-.01&&p.push(_.elevation);h[1]<c[1]&&p.reverse()}for(let f of[...p,h[1]]){let m=(f-c[1])/(h[1]-c[1]||1),_=Math.abs(h[1]-c[1])>.01?[c[0]+(h[0]-c[0])*m,f,c[2]+(h[2]-c[2])*m]:h,y=s((c[1]+_[1])/2),v=Math.hypot(_[0]-c[0],_[1]-c[1],_[2]-c[2]);v>1e-4&&a.push({floorId:y.id,a:[c[0],c[1]-y.elevation,c[2]],b:[_[0],_[1]-y.elevation,_[2]],dist:l,power:t,kind:n}),l+=v,c=_}}return a}function Vd(r,e,t,n,i){let o=[..._e(r),...ot(r),...Lt(r)],s=Le(r,e,o),a=r.floors.find(_=>_.id===n.floorId);if(!s||!a)return[];let[l,d]=$t(s,e),c=(_,y)=>[s.o[0]+s.eu[0]*_+s.es[0]*y,s.o[1]+s.eu[1]*_+s.es[1]*y,s.o[2]+s.eu[2]*_+s.es[2]*y],h=e.u+l/2,u=a.elevation+Ue,p=[],f;if(s.unbounded){let _=c(h,e.v+d/2);f=[_[0],u,_[2]],p.push(f)}else if(s.wall){let _=c(h,e.v);f=[_[0],u,_[2]],p.push(_,f)}else if(s.rail){let _=r.floors.find($=>$.id===s.rail.floorId);if(!_)return[];let y=c(h,e.v),v=_.elevation+Ue,b=Od(r,_,[y[0],y[2]]);if(p.push(y,[y[0],v,y[2]],[b[0],v,b[1]]),_.id!==a.id){let $=Od(r,_,[n.x,n.z]);for(let k of lo(r,_,b,$).slice(1))p.push([k[0],v,k[1]]);p.push([$[0],u,$[1]]);for(let k of lo(r,a,$,[n.x,n.z]).slice(1))p.push([k[0],u,k[1]]);return p.push([n.x,a.elevation+i,n.z]),on(r,p,t,"solar",a)}else f=[b[0],u,b[1]]}else{let _=c(h,e.v),y=Rs(r)??a,v=Math.max(a.elevation+.5,Math.min(_[1]-.25,y.elevation+y.height-.12));f=[_[0],v,_[2]],p.push(_)}let m=Zd(r,a,[f[0],f[2]]);p.push([m[0],f[1],m[1]]),Math.abs(f[1]-u)>.05&&p.push([m[0],u,m[1]]);for(let _ of lo(r,a,m,[n.x,n.z]).slice(1))p.push([_[0],u,_[1]]);return p.push([n.x,a.elevation+i,n.z]),on(r,p,t,"solar",a)}var Jd=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],gu={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},_u={back:0,right:90,front:180,left:270};function Yd(r,e,t){let n=ze(r.points),i=n.x1-n.x0,o=n.z1-n.z0,s=gu[e],a=[],l=(c,h,u,p,f)=>{let[m,_,y]=f??dt[c];a.push({id:t(),type:c,x:qd(h),z:qd(u),rotation:p,w:m,d:_,h:y,variant:null,entity:null,power:null})},d=.02;for(let c of s.rows){let h=c.items.map(_=>({type:_.type,size:_.size??dt[_.type]})),u=c.wall==="back"||c.wall==="front"?i:o,p=[],f=0;for(let _ of h){if(f+_.size[0]>u-.1)break;p.push(_),f+=_.size[0]}let m=c.align==="start"?.05:c.align==="end"?u-f-.05:(u-f)/2;for(let _ of p){let[y,v]=_.size,b=m+y/2,$=v/2+d;c.wall==="back"?l(_.type,n.x0+b,n.z0+$,0,_.size):c.wall==="front"?l(_.type,n.x1-b,n.z1-$,180,_.size):c.wall==="right"?l(_.type,n.x1-$,n.z0+b,90,_.size):l(_.type,n.x0+$,n.z1-b,_u.left,_.size),m+=y}}for(let c of s.free){let[h,u]=c.size??dt[c.type],p=Math.min(n.x1-h/2-.05,Math.max(n.x0+h/2+.05,n.x0+i*c.at[0])),f=Math.min(n.z1-u/2-.05,Math.max(n.z0+u/2+.05,n.z0+o*c.at[1]));l(c.type,p,f,c.rotation,c.size)}return a}var qd=r=>Math.round(r*1e3)/1e3;var Xd={id:"neonplan.generated",name:"Generierte Modelle"};function In(r){let e=r.flatMap(i=>i.items.map(o=>({type:jt(i.id,o.id),pack:i,item:o,generated:!1}))),t=new Set(e.map(({type:i})=>i)),n=Zr().map(({item:i})=>({type:jt(Xd.id,i.id),pack:Xd,item:i,generated:!0})).filter(({type:i})=>!t.has(i));return[...e,...n]}function Qd(r){return In(r).filter(({item:e})=>!e.light&&!e.vehicle&&!e.hole&&e.mount!=="ceiling")}function ec(r){return In(r).filter(({item:e})=>e.vehicle===!0)}var an=r=>r.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g," ").trim(),te=r=>r.language().toLowerCase().startsWith("de"),Mt=(r,e,t)=>te(r)?e:t,st=r=>Number.isInteger(r)?String(r):String(Math.round(r*10)/10),Re=r=>`${st(r)} W`,Oe=r=>typeof r=="number"&&Number.isFinite(r),uo=(r,e)=>e?r.hass().states[e]:void 0,bu=(r,e)=>{let t=uo(r,e)?.state.toLowerCase();return!t||["unknown","unavailable","none"].includes(t)?null:["on","open","opening","playing","running","heating","home","locked","unlocked","charging"].includes(t)?!0:["off","closed","idle","paused","not_home","away","not_charging"].includes(t)?!1:null};function vu(r,e){if(!Mt(e,/\b(was ist|welche|welches|sind|steht|stehen).{0,35}\b(offen|geoeffnet|gekippt)\b|\b(offen|geoeffnet|gekippt).{0,25}\b(fenster|tuer|turen|garage|rolltor)\b/,/\b(what is|which|what|are|is).{0,35}\b(open|opened|tilted)\b|\b(open|opened|tilted).{0,25}\b(window|door|garage)\b/).test(r))return null;let t=e.openings().filter(d=>d.open||d.tilted);if(!t.length)return{text:te(e)?"Alle T\xFCren und Fenster sind geschlossen.":"All doors and windows are closed."};let n=t[0],i=n.tilted&&!n.open?te(e)?"gekippt":"tilted open":te(e)?"offen":"open",o=te(e)?n.kind==="window"||n.kind==="roof_window"?"Das Fenster":n.kind==="garage"?"Das Garagentor":"Die T\xFCr":n.kind==="window"||n.kind==="roof_window"?"The window":n.kind==="garage"?"The garage door":"The door",s=an(n.room),a=n.room?te(e)?` ${/^(kuche|dusche|garage|toilette|die|stube|terrasse)$/.test(s)?"in der":"im"} ${n.room}`:` in the ${n.room}`:"",l=t.length>1?te(e)?` Au\xDFerdem sind ${t.length-1} weitere \xD6ffnungen offen.`:` ${t.length-1} more openings are open.`:"";return{text:`${o}${a} ist ${i}.${l}`.replace(" ist ",te(e)?" ist ":" is "),highlight:[n.entity],focus:n.roomId?{floorId:n.floorId,roomId:n.roomId}:{floorId:n.floorId}}}function wu(r,e){if(!Mt(e,/\b(was|wer|welches geraet).{0,40}\b(zieht|verbraucht|braucht).{0,20}\b(strom|energie|leistung)\b|\b(strom|energie).{0,20}\b(verbrauch|verbraucher)\b/,/\b(what|which|who).{0,40}\b(using|uses|consuming|draws).{0,20}\b(power|electricity|energy)\b|\b(power|energy).{0,20}\b(usage|consumer)\b/).test(r))return null;let t=e.consumers().filter(n=>Oe(n.watts)&&n.watts>0).sort((n,i)=>i.watts-n.watts)[0];return t?{text:te(e)?`Am meisten Strom zieht \u201E${t.name}\u201C mit ${Re(t.watts)}.`:`${t.name} is using the most power at ${Re(t.watts)}.`,highlight:[t.id]}:{text:te(e)?"Ich finde gerade keinen Verbraucher mit messbarer Leistung.":"I can't find a device with measurable power right now."}}function yu(r,e){if(!Mt(e,/\b(wie|was).{0,30}\b(energie|strom|energiebilanz|netzbezug|einspeisung)\b|\b(wieviel|wie viel).{0,25}\b(verbrauch|solar|netz)\b/,/\b(how|what).{0,30}\b(energy|electricity|power|energy balance|grid)\b|\b(how much).{0,25}\b(consumption|solar|grid)\b/).test(r))return null;let t=e.energy();if(!t)return{text:te(e)?"F\xFCr die Energiebilanz sind keine Sensoren verkn\xFCpft.":"No sensors are linked for the energy balance."};let n=[];return Oe(t.consumption)&&n.push(te(e)?`Das Haus verbraucht ${Re(t.consumption)}`:`The house is using ${Re(t.consumption)}`),Oe(t.solar)&&Oe(t.grid)?n.push(te(e)?`Die Solaranlage liefert ${Re(t.solar)}; ${t.grid>0?"aus dem Netz kommen":"ins Netz flie\xDFen"} ${Re(Math.abs(t.grid))}`:`Solar is producing ${Re(t.solar)}; the grid ${t.grid>0?"supplies":"exports"} ${Re(Math.abs(t.grid))}`):Oe(t.solar)?n.push(te(e)?`Die Solaranlage liefert ${Re(t.solar)}`:`Solar is producing ${Re(t.solar)}`):Oe(t.grid)&&n.push(te(e)?t.grid>0?`Der Netzbezug betr\xE4gt ${Re(t.grid)}`:`Es werden ${Re(Math.abs(t.grid))} ins Netz eingespeist`:`The grid ${t.grid>0?"supplies":"exports"} ${Re(Math.abs(t.grid))}`),Oe(t.soc)&&n.push(te(e)?`Der Speicher ist zu ${st(t.soc)} Prozent geladen`:`The battery is at ${st(t.soc)} percent`),{text:n.length?`${n.join(". ")}.`:te(e)?"Die Energiewerte sind gerade nicht verf\xFCgbar.":"Energy values are not available right now."}}function ku(r,e){if(!Mt(e,/\b(lauft|ist|sind|arbeitet|an|eingeschaltet|aktiv).{0,50}\b(waschmaschine|trockner|spulmaschine|gerat|maschine|fernseher|lautsprecher|soundbar|echo dot)\b|\b(waschmaschine|trockner|spulmaschine|gerat|maschine|fernseher|lautsprecher|soundbar|echo dot).{0,45}\b(lauft|an|aktiv|eingeschaltet|fertig|noch)\b/,/\b(is|are|does|do|running|working|on|active).{0,50}\b(washer|washing machine|dryer|dishwasher|device|machine|tv|speaker|soundbar|echo dot)\b|\b(washer|washing machine|dryer|dishwasher|device|machine|tv|speaker|soundbar|echo dot).{0,45}\b(running|working|on|active|finished|done)\b/).test(r))return null;let t=e.findDevice(r)??e.findDevice(`${te(e)?"Zeig":"Show"} ${r}`);if(!t)return null;let n=bu(e,t.entity)??(Oe(uo(e,t.power)?.state===void 0?null:Number(uo(e,t.power)?.state))?Number(uo(e,t.power)?.state)>1:null);if(n===null)return{text:te(e)?`Den Zustand von ${t.name} kann ich gerade nicht ermitteln.`:`I can't tell whether ${t.name} is running right now.`};if(!n)return{text:te(e)?`Nein, ${t.name} l\xE4uft gerade nicht.`:`No, ${t.name} isn't running right now.`,highlight:[t.id]};let i=Oe(t.remaining)?te(e)?` noch etwa ${st(t.remaining)} Minuten`:` for about ${st(t.remaining)} more minutes`:"";return{text:te(e)?`Ja, ${t.name} l\xE4uft${i}.`:`Yes, ${t.name} is running${i}.`,highlight:[t.id],focus:t.roomId?{floorId:t.floorId,roomId:t.roomId}:{floorId:t.floorId}}}function $u(r,e){if(!Mt(e,/\b(was ist los|gibt es (einen )?alarm|welche warnung|was fuer warnungen|stoerung)\b/,/\b(what is wrong|any alerts|any warnings|what alerts|any issues)\b/).test(r))return null;let t=e.alerts?.()??[];if(!t.length)return{text:te(e)?"Es gibt gerade keine aktiven Warnungen.":"There are no active warnings right now."};let n=t[0];return{text:te(e)?`${n.name}${n.room?` in ${n.room}`:""}: aktive Warnung${t.length>1?`; insgesamt ${t.length}`:""}.`:`${n.name}${n.room?` in ${n.room}`:""}: active alert${t.length>1?`; ${t.length} in total`:""}.`,highlight:[n.entity],focus:n.roomId&&n.floorId?{floorId:n.floorId,roomId:n.roomId}:n.floorId?{floorId:n.floorId}:null}}function xu(r,e){if(!Mt(e,/\b(was steht heute an|was ist heute faellig|was muss ich heute|was gibt es heute zu tun|haushalt heute)\b/,/\b(what is due today|what do i need to do today|what is on today|today in the house)\b/).test(r))return null;let t=e.household?.()??[];return t.length?{text:t.slice(0,3).map(n=>n.text).join((te(e),". ")),highlight:t.flatMap(n=>n.entity?[n.entity]:[])}:{text:te(e)?"F\xFCr heute steht nichts im Haushaltsplan.":"Nothing is due in the household today."}}function Su(r,e){if(!Mt(e,/\b(wo|welcher raum|welche raeume).{0,30}\b(kalt|kuehl|warm|heiss)\b|\b(wo ist es|wo sind).{0,25}\b(kalt|kuehl|warm|heiss)\b/,/\b(where|which room|which rooms).{0,30}\b(cold|cool|warm|hot)\b|\b(where is it|where are).{0,25}\b(cold|cool|warm|hot)\b/).test(r))return null;let t=e.building();if(!t)return null;let n=e.hass(),i=[];for(let d of t.floors)for(let c of ca(d)){let h=Za(n,d,c,"temperature");h!==null&&i.push({floorId:d.id,roomId:c.id,room:c.name,value:Ua(n,h)})}if(!i.length)return{text:te(e)?"F\xFCr die R\xE4ume sind keine Temperaturwerte verf\xFCgbar.":"No room temperature readings are available."};let o=/kalt|kuehl|cold|cool/.test(an(r));i.sort((d,c)=>o?d.value-c.value:c.value-d.value);let s=i[0],a=qn(n),l=/^(kuche|garage|diele|dusche|terrasse)$/.test(an(s.room))?`in der ${s.room}`:`im ${s.room}`;return{text:te(e)?`Am ${o?"k\xE4ltesten":"w\xE4rmsten"} ist es ${l} mit ${st(s.value)} ${a}.`:`The ${o?"coldest":"warmest"} room is ${s.room} at ${st(s.value)} ${a}.`,focus:{floorId:s.floorId,roomId:s.roomId}}}function Mu(r,e){if(!Mt(e,/\b(wo ist mein auto|ist mein auto|wie voll ist (das )?auto|wie weit komme ich|laedt mein auto)\b/,/\b(where is my car|is my car|how full is (the )?car|how far can i drive|is my car charging)\b/).test(r))return null;let t=(e.cars?.()??[]).find(i=>an(r).includes(an(i.name).split(" ")[0]))??(e.cars?.()??[])[0];if(!t)return{text:te(e)?"Im Plan ist kein verkn\xFCpftes Auto eingetragen.":"There is no linked car in the plan."};if(/laedt|charging/.test(an(r)))return{text:te(e)?t.charging?`${t.name} l\xE4dt${Oe(t.chargingW)?` mit ${Re(t.chargingW)}`:""}.`:`${t.name} l\xE4dt gerade nicht.`:t.charging?`${t.name} is charging${Oe(t.chargingW)?` at ${Re(t.chargingW)}`:""}.`:`${t.name} isn't charging right now.`,focus:{floorId:t.floorId,furnitureId:t.spot}};let n=[Oe(t.soc)?`${st(t.soc)} %`:null,Oe(t.range)?`${st(t.range)} ${t.rangeUnit}`:null].filter(Boolean).join(te(e)?" Akku, Reichweite ":" battery, range ");return{text:te(e)?`${t.name} ${t.present?"steht im Stellplatz":t.away?`ist ${t.away}`:"ist nicht im Stellplatz"}${n?`; ${n}`:""}.`:`${t.name} ${t.present?"is in its parking spot":t.away?`is ${t.away}`:"is not in its parking spot"}${n?`; ${n}`:""}.`,focus:t.present?{floorId:t.floorId,furnitureId:t.spot}:null}}function Pu(r,e){if(!Mt(e,/\b(wie warm ist der pool|pooltemperatur|laeuft die poolpumpe|poolpumpe|wie ist das wasser im pool)\b/,/\b(how warm is the pool|pool temperature|is the pool pump running|pool pump|how is the pool water)\b/).test(r))return null;let t=(e.pools?.()??[])[0];if(!t)return{text:te(e)?"Im Plan ist kein verkn\xFCpfter Pool eingetragen.":"There is no linked pool in the plan."};let n=Oe(t.temp)?te(e)?`${st(t.temp)} ${t.unit}`:`${st(t.temp)} ${t.unit}`:null,i=t.pumpOn===null?null:te(e)?t.pumpOn?"Die Pumpe l\xE4uft":"Die Pumpe ist aus":t.pumpOn?"The pump is running":"The pump is off";return{text:[n?te(e)?`Das Wasser hat ${n}`:`The water is ${n}`:null,i].filter(Boolean).join((te(e),". "))||(te(e)?"Poolwerte sind gerade nicht verf\xFCgbar.":"Pool values are not available right now."),focus:{floorId:t.floorId}}}var tc={api:1,id:"neonplan.open_edition_house_answers",help:r=>r.toLowerCase().startsWith("de")?["Was ist offen?","Wo ist es kalt?","L\xE4uft die Waschmaschine?","Was zieht Strom?","Wie ist die Energiebilanz?","Gibt es Warnungen?","Was steht heute an?"]:["What is open?","Which room is coldest?","Is the washing machine running?","What is using power?","How is the energy balance?","Are there any alerts?","What is due today?"],voice:(r,e)=>{let t=an(r);if(!t)return null;for(let n of[vu,ku,wu,yu,$u,xu,Su,Mu,Pu]){let i=n(t,e);if(i)return i}return null}};var zu=/(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;function nc(r,e){let[t,n,i,o]=r==="ph"?[7,7.4,6.8,7.8]:r==="orp"?[650,800,600,850]:[.3,1.5,.1,3];return e>=t&&e<=n?"ok":e>=i&&e<=o?"warn":"bad"}function fo(r,e){let t=e??{},n=Object.keys(r.states),i=h=>`${h} ${r.states[h]?.attributes.friendly_name??""}`.toLowerCase().replace(/[\s-]+/g,"_"),o=h=>String(r.states[h]?.attributes.device_class??""),s=h=>String(r.states[h]?.attributes.unit_of_measurement??""),a=n.filter(h=>zu.test(i(h))),l=(h,u)=>h.find(u)??null,d=(h,u)=>{let p=t[h];return p==="none"?null:p??u()},c=h=>h.split(".")[0];return{temperature:d("temperature",()=>l(a,h=>c(h)==="sensor"&&(o(h)==="temperature"||/°[CF]/.test(s(h)))&&/(wasser|water|eau|agua|acqua)/.test(i(h)))??l(a,h=>c(h)==="sensor"&&(o(h)==="temperature"||/°[CF]/.test(s(h))))),heater:d("heater",()=>l(a,h=>c(h)==="climate"||c(h)==="water_heater")??l(a,h=>/^(switch|input_boolean)$/.test(c(h))&&/(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(i(h)))),pump:d("pump",()=>l(a,h=>/^(switch|fan|input_boolean)$/.test(c(h))&&/(pump|pumpe|filter|pompe|bomba)/.test(i(h)))??l(a,h=>c(h)==="binary_sensor"&&/(pump|pumpe|filter)/.test(i(h)))),light:d("light",()=>l(a,h=>c(h)==="light")),ph:d("ph",()=>{let h=u=>c(u)==="sensor"&&(o(u)==="ph"||s(u).toLowerCase()==="ph"||/(^|[._])ph($|_)/.test(i(u)));return l(a,h)??l(n,h)}),chlorine:d("chlorine",()=>l(a,u=>c(u)==="sensor"&&(/(orp|redox|chlor|chlore|cloro)/.test(i(u))||s(u)==="mV"))??l(n,u=>c(u)==="sensor"&&/(orp|redox|chlor)/.test(i(u)))),cover:d("cover",()=>l(a,h=>c(h)==="cover"))}}function po(r){if(!r||wt(r))return null;let e=Number(r.state);return r.state!==""&&Number.isFinite(e)?e:null}function ic(r,e){let t={...r??{}},n=i=>{for(let o of e)for(let s of o.furniture)if(s.type===i&&s.entity&&s.entity!=="none")return s.entity};return t.pump||(t.pump=n("pool_pump")),t.heater||(t.heater=n("pool_heat_pump")),t}function oc(r,e){let t=fo(r,e),n=$=>$?r.states[$]:void 0,i=n(t.heater),o=n(t.temperature),s=po(o),a=String(o?.attributes.unit_of_measurement??"");s===null&&i&&typeof i.attributes.current_temperature=="number"&&(s=i.attributes.current_temperature),a||(a=String(r.config?.unit_system?.temperature??"\xB0C"));let l=null;if(i&&t.heater&&!wt(i)){let $=i.attributes,k=t.heater.startsWith("climate.")?"climate":t.heater.startsWith("water_heater.")?"water_heater":"switch",M=k==="switch"?i.state==="on":i.state!=="off",S=String($.hvac_action??""),A=typeof $.temperature=="number"?$.temperature:null,W=k==="switch"?M:S?S==="heating":M&&A!==null&&s!==null&&s<A-.2;l={id:t.heater,kind:k,on:M,heating:W,target:A,step:typeof $.target_temp_step=="number"?$.target_temp_step:.5,min:typeof $.min_temp=="number"?$.min_temp:10,max:typeof $.max_temp=="number"?$.max_temp:40}}let d=null,c=n(t.pump);if(c&&t.pump&&!wt(c)){let $=t.pump.startsWith("sensor.")?po(c):null,k=String(c.attributes.unit_of_measurement??"")==="kW",M=$===null?null:k?$*1e3:$;d={id:t.pump,on:M!==null?M>20:c.state==="on",watts:M,switchable:/^(switch|fan|input_boolean)\./.test(t.pump)}}let h=null,u=n(t.light);if(u&&t.light&&!wt(u)){let $=t.light.startsWith("light.")?os(u):u.state==="on"?{color:[.3,.75,1],level:1}:null;h={id:t.light,on:!!$,color:$?.color??[.3,.75,1],level:$?.level??0}}let p=po(n(t.ph)),f=n(t.chlorine),m=po(f),_=String(f?.attributes.unit_of_measurement??""),y=_==="mV"||m!==null&&m>50,v=null,b=n(t.cover);if(b&&t.cover&&!wt(b)){let $=b.attributes.current_position,k=typeof $=="number"?1-Math.max(0,Math.min(100,$))/100:b.state==="closed"?1:b.state==="open"?0:.5;v={id:t.cover,closed:k,moving:b.state==="opening"||b.state==="closing"}}return{entities:t,temp:s,unit:a||"\xB0C",heater:l,pump:d,light:h,ph:p===null?null:{value:p,range:nc("ph",p)},chlorine:m===null?null:{value:m,unit:y?"mV":_||"mg/l",orp:y,range:nc(y?"orp":"chlorine",m)},cover:v}}function Eu(r){return r.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}function sc(r,e){return Eu(e).flatMap(({area:t})=>Object.values(fo(r,t.pool)).filter(n=>!!n))}function rc(r){if(r.light?.on)return{color:r.light.color,level:.35+.65*r.light.level};if(r.temp===null)return{color:[.1,.45,.8],level:.18};let e=r.unit.includes("F")?(r.temp-32)*5/9:r.temp,t=Math.max(0,Math.min(1,(e-14)/16));return{color:[.08+.1*t,.35+.45*t,.85-.1*t],level:.16+.12*t}}function js(r,e,t){let n=e.pool??{},i=n.pipes??[],{kind:o,id:s,port:a}=oe(r);if(o==="port"){let c=n.ports?.find(h=>h.id===s);return c?ti(c.kind):null}if(o==="dev")return a?ei(a):null;if(o!=="joint")return null;let l=n.joints?.find(c=>c.id===s);if(!l)return null;if(l.kind==="wall"||l.kind==="floor"){let c=`joint:${s}:${a==="outside"?"inside":"outside"}`,h=i.find(p=>p.from===c||p.to===c);if(h)return h.to===c?"source":"sink";let u=Au(i,n.joints??[],c);return u?js(u,e,t):null}let d=`joint:${s}`;return Fu(d,i,t)?"sink":i.some(c=>ke(c.to)===d)?"source":null}function Au(r,e,t){let n=t,i=new Set;for(;;){let o=r.find(h=>!i.has(h.id)&&(h.from===n||h.to===n));if(!o)return"";i.add(o.id);let s=o.from===n?o.to:o.from,{kind:a,id:l,port:d}=oe(s),c=a==="joint"?e.find(h=>h.id===l):void 0;if(c&&(c.kind==="wall"||c.kind==="floor")&&(d==="inside"||d==="outside")){n=`joint:${l}:${d==="inside"?"outside":"inside"}`;continue}return s}}function Fu(r,e,t){let n=new Set(t.filter(s=>s.type==="pool_pump").map(s=>`dev:${s.id}`)),i=new Set,o=s=>n.has(s)?!0:i.has(s)?!1:(i.add(s),e.filter(a=>ke(a.from)===s).some(a=>o(ke(a.to))));return e.filter(s=>ke(s.from)===r).some(s=>o(ke(s.to)))}function ac(r,e,t,n=[]){if(!tt(r).length)return null;let o=e==="source",s=r==="pool_pump"?o?["suction","pressure"]:["pressure","suction"]:r==="pool_filter"?o?["pump","return","waste"]:t?["waste","return","pump"]:["return","waste","pump"]:o?["in","out"]:["out","in"],a=s.filter(l=>ei(l)===(o?"sink":"source"));return a.find(l=>!n.includes(l))??a[0]??s[0]}function lc(r,e,t){return(e==="sink"||t==="source")&&e!=="source"&&t!=="sink"?{...r,from:r.to,to:r.from,points:[...r.points].reverse(),heights:r.heights?[...r.heights].reverse():r.heights}:r}function dc(r,e){let t=r.pool??{},n=t.pipes??[],i=[];for(let s of n)s.from||i.push({kind:"loose",node:s.id}),s.to||i.push({kind:"loose",node:s.id});let o=new Set(n.flatMap(s=>[s.from,s.to]));for(let s of e){if(!["pool_pump","pool_filter","pool_heat_pump"].includes(s.type))continue;let a=tt(s.type).filter(d=>!(s.type==="pool_filter"&&d==="waste"&&!(t.ports??[]).some(c=>c.kind==="waste"))),l=[...o].some(d=>ke(d)===`dev:${s.id}`);if(!(s.type==="pool_heat_pump"&&!l))for(let d of a)!o.has(`dev:${s.id}:${d}`)&&!o.has(`dev:${s.id}`)&&i.push({kind:"port",node:`dev:${s.id}:${d}`})}for(let s of["skimmer","drain","inlet"])(t.ports??[]).filter(l=>l.kind===s).some(l=>!o.has(`port:${l.id}`))&&i.push({kind:"feed",node:s});return i}function cc(r,e){let t=r.pool??{},n=(t.ports??[]).filter(o=>o.kind===e),i=new Set((t.pipes??[]).flatMap(o=>[o.from,o.to]));return n.length>0&&n.every(o=>i.has(`port:${o.id}`))}var hc=new Set(["skimmer","drain"]),Gs=new Set(["backwash","rinse","waste"]),uc=r=>`port:${r}`,pc=r=>`dev:${r}`,Us=r=>!!r.fittings?.some(e=>e.kind==="valve"&&e.open===!1);function fc(r){let e=new Map(r.pipes.map(b=>[b.id,{active:!1,warm:!1,waste:!1}]));if(!r.pumpOn)return e;let t=new Map(r.pipes.map(b=>[b.id,oe(b.from).port])),n=r.pipes.map(b=>({...b,from:b.from?ke(b.from):`loose:${b.id}:a`,to:b.to?ke(b.to):`loose:${b.id}:b`})),i=new Map(r.devices.map(b=>[pc(b.id),b])),o=new Map(r.ports.map(b=>[uc(b.id),b])),s=b=>{let $=i.get(b);return!!$&&$.type==="pool_valve"&&$.open===!1},a=new Map,l=new Map;for(let b of n)a.set(b.from,[...a.get(b.from)??[],b]),l.set(b.to,[...l.get(b.to)??[],b]);let d=b=>o.get(b)?.kind==="waste",c=b=>i.get(b)?.type==="pool_heat_pump",h=new Map,u=(b,$=new Set)=>{let k=h.get(b.id);if(k)return k;if($.has(b.id))return{heat:!1,waste:!1};$.add(b.id);let M=c(b.to),S=d(b.to);if(!M||!S)for(let W of a.get(b.to)??[]){let E=u(W,$);M||=E.heat,S||=E.waste}let A={heat:M,waste:S};return h.set(b.id,A),A},p=r.devices.filter(b=>b.type==="pool_pump").map(b=>pc(b.id)),f=p.length?p:r.ports.filter(b=>hc.has(b.kind)).map(b=>uc(b.id)),m=new Set,_=(b,$,k)=>{let M=`${b}|${$}|${k}`;if(m.has(M)||(m.add(M),s(b)))return;let S=a.get(b)??[],A=i.get(b);if(A?.type==="pool_filter"){let W=A.valve??"filter";if(W==="closed")return;let E=Gs.has(W)?"waste":"return";S=S.filter(D=>{let z=t.get(D.id);return z?z===E:u(D).waste===Gs.has(W)}),Gs.has(W)&&(k=!0)}else if(S.length>1){S=S.filter(D=>!s(D.to)&&!Us(D));let W=S.filter(D=>u(D).heat),E=S.filter(D=>!u(D).heat);W.length&&E.length&&(S=r.heaterOn?W:E)}A?.type==="pool_heat_pump"&&r.heating&&($=!0);for(let W of S){if(s(W.to)||Us(W))continue;let E=e.get(W.id);E.active=!0,E.warm||=$,E.waste||=k,_(W.to,$,k)}},y=new Set,v=b=>{for(let $ of l.get(b)??[])y.has($.id)||s($.from)||Us($)||(y.add($.id),v($.from))};if(p.length){for(let $ of p)v($);let b=($,k=new Set)=>k.has($.id)?!1:(k.add($.id),hc.has(o.get($.from)?.kind??"")?!0:(l.get($.from)??[]).some(M=>y.has(M.id)&&b(M,k)));for(let $ of y){let k=n.find(M=>M.id===$);b(k)&&(e.get($).active=!0)}}for(let b of f)_(b,!1,!1);return e}var Iu=[.25,.7,1],Ru=[1,.45,.18],Tu=[.75,.6,.35];function Zs(r){return r?.waste?Tu:r?.warm?Ru:Iu}var Du={temperature:["Wassertemperatur","Water temperature"],heater:["Heizung","Heater"],pump:["Filterpumpe","Filter pump"],light:["Beleuchtung","Light"],ph:["pH-Wert","pH value"],chlorine:["Chlor / Redox","Chlorine / redox"],cover:["Abdeckung","Cover"]},Wu=["temperature","heater","pump","light","ph","chlorine","cover"],mo=r=>r.language().toLowerCase().startsWith("de"),ft=(r,e=1)=>new Intl.NumberFormat("de-DE",{maximumFractionDigits:e,minimumFractionDigits:e}).format(r),mc=r=>r==="ok"?"#4dff80":r==="warn"?"#ffcc40":"#ff4d40",Hu=r=>r.split(".")[0]??"homeassistant";function Lu(r,e){let t=r.building();return ic(e.pool,t?.floors??[])}var gc={nodeFlow:js,autoPort:(r,e,t,n)=>ac(r,e,t,n),orientPipe:lc,issues:dc,feedDone:cc,flow:r=>fc({...r,devices:r.devices}),waterColor:Zs};function go(r,e){let t=r.hass();return oc(t,Lu(r,e))}function Ou(r,e,t,n){r.updateBuilding?.(i=>{for(let o of i.floors){let s=o.outdoor.find(a=>a.id===e);if(s){s.pool={...s.pool??{},[t]:n};return}}}),r.refresh?.()}function Vu(r,e){if(e.type!=="pool")return[];let t=r.hass(),n=fo(t,{}),i=e.pool??{},o=d=>d.startsWith("sensor."),s={temperature:d=>/^(sensor|climate|water_heater)\./.test(d),heater:d=>/^(climate|water_heater|switch|input_boolean)\./.test(d),pump:d=>/^(switch|fan|input_boolean|binary_sensor|sensor)\./.test(d),light:d=>/^(light|switch)\./.test(d),ph:o,chlorine:o,cover:d=>d.startsWith("cover.")},a=!mo(r),l=[{kind:"heading",text:`${a?"\u{1F3CA} Pool":"\u{1F3CA} Pool Pro"}`},{kind:"text",text:a?"Link the sensors and controls of this pool. An empty role is detected from entity names.":"Verkn\xFCpfe Sensoren und Steuerungen dieses Pools. Leere Rollen werden anhand der Ger\xE4tenamen erkannt."}];for(let d of Wu)l.push({kind:"entity",label:Du[d][a?1:0],value:i[d]??null,auto:n[d]??null,filter:s[d],set:c=>Ou(r,e.id,d,c==="none"?"none":c)});return e.pool||l.push({kind:"button",label:a?"Set up pool controls":"Pool-Steuerung einrichten",primary:!0,onTap:()=>r.updateBuilding?.(d=>{let c=d.floors.flatMap(h=>h.outdoor).find(h=>h.id===e.id);c&&(c.pool={})})}),l}function Bu(r){let e=r.building();if(!e)return[];let t=[],n=new Map;for(let o of e.floors)for(let s of o.outdoor){if(s.type!=="pool"||!s.pool||s.points.length<3)continue;let a=go(r,s);for(let c of Object.values(a.entities))c&&n.set(s.id,a);if(s.pool.pipes?.length){let c=e.floors.flatMap(u=>u.furniture).filter(u=>ve.includes(u.type)).map(u=>({id:u.id,type:u.type,open:u.valve_open!==!1,valve:u.valve_position??"filter"})),h=gc.flow({pipes:s.pool.pipes,ports:s.pool.ports??[],devices:c,pumpOn:a.pump?.on??!1,heaterOn:a.heater?.on??!1,heating:a.heater?.heating??!1});t.push({kind:"pipeflow",floorId:o.id,areaId:s.id,flows:Object.fromEntries([...h].map(([u,p])=>[u,{active:p.active,color:Zs(p)}]))})}if(!Object.values(a.entities).some(Boolean))continue;let l=rc(a),d=r.waterLevel?.(o.id,s.id);t.push({kind:"water",id:s.id,floorId:o.id,points:s.points,y:d?.y??0,floorY:d?.floorY,color:l.color,level:r.dimmed?.()?l.level*.4:l.level,flow:!!a.pump?.on,heat:!!a.heater?.heating,cover:a.cover?.closed??0})}let i=n.values().next().value;if(i){for(let o of e.floors)for(let s of o.furniture)if(ve.includes(s.type))if(s.type==="pool_pump"&&i.pump?.on)t.push({kind:"glow",furnitureId:s.id,color:[.3,.8,1],level:.85});else if(s.type==="pool_heat_pump"&&i.heater?.heating)t.push({kind:"glow",furnitureId:s.id,color:[1,.45,.15],level:.85});else if(s.type==="pool_heat_pump"&&i.heater?.on)t.push({kind:"glow",furnitureId:s.id,color:[.3,.8,1],level:.35});else if(s.type==="pool_filter"){let a=s.valve_position??"filter",l=a==="closed"?[1,.3,.25]:a==="filter"||a==="recirculate"?[.3,1,.6]:[1,.62,.2];t.push({kind:"glow",furnitureId:s.id,color:l,level:i.pump?.on?.8:.3})}else s.type==="pool_dosing"&&i.pump?.on&&t.push({kind:"glow",furnitureId:s.id,color:[.6,.9,1],level:.5})}return t}function Rn(r,e,t,n){return()=>{r.callService?.(Hu(e),t,{entity_id:e,...n})}}function Cu(r){let e=r.building();if(!e)return[];let t=!mo(r),n=[];for(let i of e.floors)for(let o of i.outdoor){if(o.type!=="pool"||!o.pool)continue;let s=go(r,o);if(!Object.values(s.entities).some(Boolean))continue;let a=s.heater?.heating?t?"\u{1F525} Heating":"\u{1F525} Heizung l\xE4uft":s.pump?.on?t?"\u3030 Pump running":"\u3030 Pumpe l\xE4uft":void 0,l=[];s.ph&&l.push({label:"pH",value:ft(s.ph.value,2),color:mc(s.ph.range),at:Math.max(0,Math.min(100,(s.ph.value-6.6)/1.4*100))}),s.chlorine&&l.push({label:s.chlorine.orp?"Redox":t?"Chlorine":"Chlor",value:`${ft(s.chlorine.value,s.chlorine.orp?0:2)} ${s.chlorine.unit}`,color:mc(s.chlorine.range)});let d=[];s.heater&&(s.heater.target!==null&&s.heater.kind!=="switch"&&(d.push({label:"\u2212",title:t?"Lower target":"Zieltemperatur senken",onTap:Rn(r,s.heater.id,"set_temperature",{temperature:Math.max(s.heater.min,s.heater.target-s.heater.step)})}),d.push({label:"+",title:t?"Raise target":"Zieltemperatur erh\xF6hen",onTap:Rn(r,s.heater.id,"set_temperature",{temperature:Math.min(s.heater.max,s.heater.target+s.heater.step)})})),d.push({label:"\u{1F525}",title:t?"Heater":"Heizung",on:s.heater.on,onTap:Rn(r,s.heater.id,s.heater.on?"turn_off":"turn_on")})),s.pump?.switchable&&d.push({label:"\u3030",title:t?"Pump":"Pumpe",on:s.pump.on,onTap:Rn(r,s.pump.id,s.pump.on?"turn_off":"turn_on")}),s.light&&d.push({label:"\u{1F4A1}",title:t?"Pool light":"Poolbeleuchtung",on:s.light.on,onTap:Rn(r,s.light.id,"toggle")}),s.cover&&d.push({label:s.cover.moving?"\u23F9":s.cover.closed>.5?"\u25B2":"\u25BC",title:t?"Pool cover":"Poolabdeckung",onTap:Rn(r,s.cover.id,s.cover.moving?"stop_cover":s.cover.closed>.5?"open_cover":"close_cover")}),n.push({id:`pool:${o.id}`,anchor:{floorId:i.id,areaId:o.id},icon:"\u{1F3CA}",title:o.name||"Pool",live:a,main:s.temp===null?void 0:{text:`${ft(s.temp)} ${s.unit}`,color:s.heater?.heating?"#ff8c40":"#37e0ff",sub:s.heater?.target!==null&&s.heater?`${t?"target":"Ziel"} ${ft(s.heater.target)} ${s.unit}`:""},rows:l,lines:s.cover?[`${t?"Cover":"Abdeckung"}: ${s.cover.closed>.98?t?"closed":"geschlossen":s.cover.closed<.02?t?"open":"offen":`${Math.round(s.cover.closed*100)} %`}`]:[],buttons:d})}return n}function Nu(r){let e=r.building();if(!e)return[];let t=!mo(r),n=[];for(let i of e.floors)for(let o of i.outdoor){if(o.type!=="pool"||!o.pool)continue;let s=go(r,o);s.ph&&s.ph.range!=="ok"&&s.entities.ph&&n.push({kind:"pool_ph",entity:s.entities.ph,text:t?`Pool pH ${s.ph.range}: ${ft(s.ph.value,2)}`:`Pool-pH ${s.ph.range==="bad"?"kritisch":"auff\xE4llig"}: ${ft(s.ph.value,2)}`,color:s.ph.range==="bad"?[1,.28,.22]:[1,.75,.2],floorId:i.id,roomId:null}),s.chlorine&&s.chlorine.range!=="ok"&&s.entities.chlorine&&n.push({kind:"pool_chlorine",entity:s.entities.chlorine,text:t?`Pool ${s.chlorine.orp?"redox":"chlorine"} ${s.chlorine.range}: ${ft(s.chlorine.value,2)} ${s.chlorine.unit}`:`Pool-${s.chlorine.orp?"Redox":"Chlorwert"} ${s.chlorine.range==="bad"?"kritisch":"auff\xE4llig"}: ${ft(s.chlorine.value,2)} ${s.chlorine.unit}`,color:s.chlorine.range==="bad"?[1,.28,.22]:[1,.75,.2],floorId:i.id,roomId:null});let a=s.temp===null?null:s.unit.toLowerCase().includes("f")?(s.temp-32)*5/9:s.temp;s.temp!==null&&a!==null&&a<=3&&!s.pump?.on&&n.push({kind:"pool_frost",entity:s.entities.temperature??s.entities.heater??o.id,text:t?`Pool water is near freezing (${ft(s.temp)} ${s.unit}); the filter pump is off.`:`Poolwasser ist nahe dem Gefrierpunkt (${ft(s.temp)} ${s.unit}); die Filterpumpe steht.`,color:[.55,.8,1],floorId:i.id,roomId:null})}return n}function Ku(r){let e=r.building();if(!e)return[];let t=[];for(let n of e.floors)for(let i of n.outdoor){if(i.type!=="pool"||!i.pool)continue;let o=go(r,i);t.push({name:i.name||(mo(r),"Pool"),floorId:n.id,areaId:i.id,temp:o.temp,unit:o.unit,pumpOn:o.pump?.on??null,heating:o.heater?.heating??null,ph:o.ph?{value:o.ph.value,ok:o.ph.range==="ok"}:null,chlorine:o.chlorine?{value:o.chlorine.value,unit:o.chlorine.unit,ok:o.chlorine.range==="ok"}:null})}return t}var _c={api:1,id:"neonplan.open_edition_pool",pipes:gc,scene:Bu,cards:Cu,alerts:Nu,watched:r=>{let e=r.building();return e?sc(r.hass(),e.floors):[]},areaFields:Vu,pools:Ku};var Js=1,ln=new Map,qs=new Map,bc=new Map,Ys=[tc,_c];async function ju(r,e){return r.callWS({type:"neonplan3d/modules/code",pack_id:e})}async function Gu(r,e){let t=await ju(r,e.id);if(t.api!==Js)return null;let n=URL.createObjectURL(new Blob([t.code],{type:"text/javascript"}));try{let o=(await import(n)).default;if(!o||o.api!==Js||typeof o.id!="string")return null;let s=bc.get(e.id);s&&URL.revokeObjectURL(s),bc.set(e.id,n);let a={id:e.id,release:t.release,module:o};return ln.set(e.id,a),a}catch(i){throw URL.revokeObjectURL(n),i}}async function Xs(r,e){let t=new Map(e.filter(n=>n.module&&n.module.api===Js).map(n=>[n.id,n]));for(let n of[...ln.keys()])t.has(n)||ln.delete(n);await Promise.all([...t.values()].map(n=>{let i=ln.get(n.id);if(i&&i.release===(n.release??1))return Promise.resolve(i);let o=qs.get(n.id);return o||(o=Gu(r,n).catch(s=>(console.warn(`NeonPlan 3D: module ${n.id} did not load`,s),null)).finally(()=>qs.delete(n.id)),qs.set(n.id,o)),o}))}function wc(r){let e=[];for(let t of[...[...ln.values()].map(n=>n.module),...Ys])try{e.push(...t.help?.(r)??[])}catch{}return[...new Set(e)]}function yc(r,e){let t=vc([...ln.values()].map(n=>n.module),n=>n.areaFields?.(r,e));return t.length?t:vc(Ys,n=>n.areaFields?.(r,e))}function kc(){for(let r of ln.values())if(r.module.pipes)return r.module.pipes;for(let r of Ys)if(r.pipes)return r.pipes;return null}function vc(r,e,t=[]){let n=[];for(let i of[...r,...t])try{n.push(...e(i)??[])}catch(o){console.warn(`NeonPlan 3D: module ${i.id} failed`,o)}return n}function Uu(r){return{a:r.a,b:r.b,u:r.u,n:r.n,length:r.length,rightward:!0}}var Qs={walls(r,e,t){let n=r.floors.find(o=>o.id===e),i=n?.rooms.find(o=>o.id===t);return!n||!i||i.points.length<3?[]:i.points.map((o,s)=>{let a=At(i,s),l=pt(n,i.id,a.a,a.b),d=[...Ft(a,n,i).map(c=>[c.s0,c.s1]),...xn(a,n).filter(c=>c.y0<.05).map(c=>[c.s0,c.s1])];return{roomId:i.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?r.settings.wall_interior:r.settings.wall_exterior,taken:d}})},onWall(r,e,t){return Qe(Uu(r),e,t)},freeSpot(r,e,t=.1){let n=o=>o>=t&&o+e<=r.length-t&&!r.taken.some(([s,a])=>o<a+.05&&o+e>s-.05),i=r.length/2-e/2;for(let o=0;o<=r.length;o+=.05){if(n(i-o))return Math.round((i-o)*100)/100;if(n(i+o))return Math.round((i+o)*100)/100}return null},nodeAt(r,e,t){let n=r.floors.find(a=>a.id===e),i=n?.outdoor.find(a=>a.id===t);if(!n||!i)return()=>null;let o=de(r,n,i),s=i.pool??{};return a=>{let{kind:l,id:d,port:c}=oe(a),h=l==="joint"?(s.joints??[]).find(p=>p.id===d):void 0;if(h)return It(h,c);let u=l==="port"?(s.ports??[]).find(p=>p.id===d):void 0;return u?o(a)??{x:u.x,y:.02,z:u.z}:o(a)}},connect(r,e,t,n,i,o){let s=r.floors.find(l=>l.id===e),a=s?.outdoor.find(l=>l.id===t);return!s||!a?{pipes:[],joints:[]}:Pn({...n,floorId:e},Qs.nodeAt(r,e,t),a.pool?.joints??[],i,o)}};var Tn=lt`
  :host {
    --fp3d-bg: #070b14;
    --fp3d-bg2: #0d1424;
    --fp3d-chrome: rgba(14, 21, 38, 0.86);
    --fp3d-chrome-solid: #0f1729;
    --fp3d-line: rgba(120, 170, 255, 0.16);
    --fp3d-text: #e6eefc;
    --fp3d-muted: #8a9bb8;
    --fp3d-accent: #37e0ff;
    --fp3d-accent-text: #041018;
    --fp3d-soft: #5b7cff;
    --fp3d-warm: #ffb547;
    --fp3d-danger: #ff6b8b;
    --fp3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
`,_o=lt`
  .fp3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--fp3d-chrome);
    box-shadow: var(--fp3d-shadow);
  }
  .fp3d-seg button,
  .fp3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--fp3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .fp3d-seg button[aria-pressed="true"],
  .fp3d-chip[aria-pressed="true"] {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
  }
  .fp3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .fp3d-chip {
    background: var(--fp3d-chrome);
    color: var(--fp3d-text);
    box-shadow: var(--fp3d-shadow);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--fp3d-accent);
    outline-offset: 2px;
  }
  .fp3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--fp3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--fp3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .fp3d-btn:hover {
    border-color: var(--fp3d-accent);
  }
  .fp3d-btn.fp3d-danger {
    color: var(--fp3d-danger);
  }
  .fp3d-btn.fp3d-primary {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
    border-color: transparent;
  }
  .fp3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-field input,
  .fp3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .fp3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--fp3d-accent);
  }
  /* a colour picker shows its colour as a full swatch, not a line inside the text field's padding */
  .fp3d-field input[type="color"] {
    padding: 3px;
    height: 36px;
    width: 100%;
    cursor: pointer;
  }
  .fp3d-field select option,
  select option {
    /* the opened list keeps the dark look (else light text on the browser's white list) */
    background: var(--fp3d-chrome-solid);
    color: var(--fp3d-text);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var $c=40,er=class extends Ze{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return t.every(l=>a.includes(l))},i=this.fixed.filter(s=>!e||n(s)),o=e?this.options.filter(n):this.options;return[...i,...o.slice(0,$c)]}get leftOut(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=e?this.options.filter(i=>t.every(o=>`${i.label} ${i.id}`.toLowerCase().includes(o))).length:this.options.length;return Math.max(0,n-$c)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return g`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${e?e.label:this.placeholder}
        .value=${this._open?this._query:e?.label??""}
        @focus=${()=>{clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${n=>{this._query=n.target.value,this._cursor=0,this._open=!0}}
        @keydown=${this.onKey}
      />
      ${this._open?g`<ul class="list" role="listbox">
            ${t.length?w:g`<li class="empty">–</li>`}
            ${t.map((n,i)=>g`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${o=>o.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?g`<small>${n.id}</small>`:w}
              </li>`)}
            ${this.leftOut>0?g`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:w}
          </ul>`:w}
    </div>`}static styles=[Tn,lt`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--fp3d-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--fp3d-muted);
      }
      input:focus {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        box-shadow: var(--fp3d-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--fp3d-accent);
      }
      li.empty {
        color: var(--fp3d-muted);
        cursor: default;
      }
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",er);var Zu=new URL(import.meta.url),qu=new URL("./neonplan3d-3d.js?v=f6103162b7ce",Zu).href,xc;function bo(){return xc??=import(qu),xc}function Ot(r,e){if(!Gt(e))return qe(r,`furn_${e}`);let t=be(e);return t?We(t,r?.language??navigator.language):qe(r,"pack_missing_item")}var Ju={energy_pro:{name:"edition_name_energy_pro",description:"edition_feature_energy_pro"},auto_pro:{name:"edition_name_auto_pro",description:"edition_feature_auto_pro"},pool:{name:"edition_name_pool",description:"edition_feature_pool"},household:{name:"edition_name_household",description:"edition_feature_household"},fridge_smart:{name:"edition_name_fridge_smart",description:"edition_feature_fridge_smart"}},Sc=r=>r==="open_edition"?"ext_source_open_edition":r==="signed_pack"?"ext_source_signed_pack":"ext_source_locked",tr=class extends Ze{static properties={hass:{attribute:!1},packs:{attribute:!1},building:{attribute:!1},_packMsg:{state:!0},_moduleMsg:{state:!0},_open:{state:!0}};constructor(){super(),this._packMsg=null,this._moduleMsg=null;let e=[];try{e=JSON.parse(localStorage.getItem("neonplan3d.ext.open")??"[]")}catch{}this._open=new Set(e)}toggleOpen(e){let t=new Set(this._open);t.has(e)?t.delete(e):t.add(e),this._open=t;try{localStorage.setItem("neonplan3d.ext.open",JSON.stringify([...t]))}catch{}}summaryBar(e,t){let n=t.reduce((o,s)=>o+s.n,0),i=this._open.has(e);return g`<button class="fp3d-sum" aria-expanded=${i} @click=${()=>this.toggleOpen(e)}>
      <span class="fp3d-sum-bar">
        ${t.filter(o=>o.n>0).map(o=>g`<i class="fp3d-sum-${o.tone}" style="flex:${o.n}"></i>`)}
      </span>
      <span class="fp3d-sum-text">
        ${t.filter(o=>o.n>0||o.tone==="ok").map(o=>g`<b class="fp3d-sum-${o.tone}-text">${o.n}</b> ${o.label}`)}
        ${n?w:g`<span class="fp3d-sub">–</span>`}
      </span>
      <span class="fp3d-sum-caret">${i?"\u25BE":"\u25B8"} ${this.t(i?"ext_hide_list":"ext_show_list")}</span>
    </button>`}get isAdmin(){return this.hass?.user?.is_admin??!1}t(e,t){return qe(this.hass,e,t)}render(){let e=this.packs??[];return g`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
          <a class="fp3d-btn" href=${Xt(this.hass?.language)} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${vs.filter(t=>Rt(t)).map(t=>{let n=eo(t,e),i=ce(t,e),o=n==="open_edition"?Ju[t]:void 0,s=this.t(o?.name??`pro_name_${t}`),a=this.t(o?.description??`pro_feature_${t}`);return g`<div class="fp3d-ext-feature ${i?"fp3d-ext-on":""}">
              <b>${i?"\u2713":"\u{1F512}"} ${s}</b>
              <span class="fp3d-ext-source fp3d-ext-source-${n}">${this.t(Sc(n))}</span>
              <span class="fp3d-sub">${a}</span>
              <span class="fp3d-ext-links">
                ${i?g`<span class="fp3d-ext-state">${this.t("ext_active")}</span>`:w}
                <a class="fp3d-ext-link" href=${Xt(this.hass?.language)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`})}
        </div>
      </section>
      ${this.renderFun(e)} ${this.renderPacks()} ${this.renderModules()}
    </div>`}editBuilding(e){if(!this.building)return;let t=structuredClone(this.building);e(t),this.dispatchEvent(new CustomEvent("building-edit",{detail:t,bubbles:!0,composed:!0}))}renderFun(e){let t=ws.filter(d=>Rt(d)),n=this.building?.settings.pets??null,i=n?.list??[],o=n?.on!==!1,s=(this.building?.floors??[]).filter(d=>d.rooms.length).sort((d,c)=>d.elevation-c.elevation),a=d=>this.editBuilding(c=>{let h={on:c.settings.pets?.on!==!1,list:[...c.settings.pets?.list??[]]};d(h),c.settings.pets=h}),l=(d,c)=>a(h=>h.list=h.list.map(u=>u.id===d?{...u,...c}:u));return g`<section class="fp3d-ext-card">
      <h3>🎈 ${this.t("fun_title")}</h3>
      <p class="fp3d-sub">${this.t("fun_intro")}</p>
      ${t.map(d=>{let c=eo(d,e),h=ce(d,e),u=g`<span class="fp3d-ext-source fp3d-ext-source-${c}">${this.t(Sc(c))}</span>`;return d==="fun_halloween"?this.renderHalloween(h,u):g`<div class="fp3d-ext-feature ${h?"fp3d-ext-on":""}">
              <b>✓ ${this.t("fun_name_pets")}</b>
              ${u}
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              ${this.isAdmin&&this.building?g`<label class="fp3d-check"><input type="checkbox" .checked=${o} @change=${p=>a(f=>f.on=p.target.checked)} /> ${this.t("pets_show")}</label>
                    ${i.map(p=>g`<div class="fp3d-pet-row">
                        <select
                          aria-label=${this.t("pet_kind")}
                          @change=${f=>{let m=f.target.value,_=Gn[m];l(p.id,{kind:m,fur:_.includes(p.fur)?p.fur:_[0],breed:m==="dog"?p.breed??"labrador":null})}}
                        >
                          ${["cat","dog","rabbit"].map(f=>g`<option value=${f} ?selected=${p.kind===f}>${this.t(`pet_kind_${f}`)}</option>`)}
                        </select>
                        ${p.kind==="dog"?g`<select aria-label=${this.t("pet_breed")} @change=${f=>l(p.id,{breed:f.target.value})}>
                              ${la.map(f=>g`<option value=${f} ?selected=${(p.breed??"labrador")===f}>${this.t(`pet_breed_${f}`)}</option>`)}
                            </select>`:w}
                        <input type="text" maxlength="30" .value=${p.name} placeholder=${this.t("pet_name")} aria-label=${this.t("pet_name")} @change=${f=>l(p.id,{name:f.target.value.trim()})} />
                        <select aria-label=${this.t("pet_fur")} @change=${f=>l(p.id,{fur:f.target.value})}>
                          ${Gn[p.kind].map(f=>g`<option value=${f} ?selected=${p.fur===f}>${this.t(`pet_fur_${f}`)}</option>`)}
                        </select>
                        ${s.length>1?g`<select title=${this.t("pet_floor")} aria-label=${this.t("pet_floor")} @change=${f=>l(p.id,{floor_id:f.target.value||null})}>
                              ${s.map((f,m)=>g`<option value=${m===0?"":f.id} ?selected=${(p.floor_id??s[0].id)===f.id}>🏠 ${f.name}</option>`)}
                            </select>`:w}
                        <button class="fp3d-btn" title=${this.t("delete")} @click=${()=>a(f=>f.list=f.list.filter(m=>m.id!==p.id))}>✕</button>
                      </div>`)}
                    ${i.length<8?g`<button class="fp3d-btn" @click=${()=>a(p=>p.list.push({id:`pet_${Date.now().toString(36)}`,kind:"cat",name:"",fur:Gn.cat[p.list.length%Gn.cat.length]}))}>+ ${this.t("pet_add")}</button>`:w}`:w}
            </div>`})}
    </section>`}renderHalloween(e,t){let n=this.building?.settings.halloween?.ghost!==!1;return g`<div class="fp3d-ext-feature ${e?"fp3d-ext-on":""}">
      <b>✓ 🎃 ${this.t("fun_name_halloween")}</b>
      ${t}
      <span class="fp3d-sub">${this.t("fun_feature_halloween")}</span>
      ${this.isAdmin&&this.building?g`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${n}
              @change=${i=>this.editBuilding(o=>o.settings.halloween={...o.settings.halloween??{},ghost:i.target.checked})}
            />
            ${this.t("halloween_ghost")}</label
          >`:w}
      <span class="fp3d-sub">${this.t("halloween_deco_hint")}</span>
    </div>`}renderPacks(){let e=(this.packs??[]).filter(n=>!n.module&&!n.features?.length),t=e.reduce((n,i)=>n+i.items.length,0);return g`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${this.summaryBar("packs",[{n:e.length,label:this.t("ext_sum_packs",{items:t}),tone:"ok"}])}
      ${(this._open.has("packs")?e:[]).map(n=>g`<div class="fp3d-pack">
          <div>
            <b>${He(n,this.hass?.language??"de")}</b>
            <span class="fp3d-sub">${n.provenance==="local_model"?this.t("pack_local_model_label"):n.module?this.t("pack_module",{publisher:n.publisher}):n.features?.length?this.t("pack_features",{publisher:n.publisher,n:n.features.length}):this.t("pack_by",{publisher:n.publisher,n:n.items.length})}</span>
            ${n.licensee?g`<span class="fp3d-sub">${this.t("pack_licensed",{name:n.licensee})}${n.release&&n.release>1?` \xB7 v${n.release}`:""}</span>`:w}
            ${(n.features??[]).some(i=>!Qi(i))?g`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:w}
          </div>
          ${n.bundled?w:g`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(n)}>${this.t("pack_remove")}</button>`}
        </div>`)}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${n=>this.importPackFile(n)} />
      </label>
      ${this.isAdmin?g`<label class="fp3d-btn fp3d-pack-import">
            ${this.t("pack_import_local_model")}
            <input type="file" accept=".json,.fp3dpack,application/json" multiple hidden @change=${n=>this.importLocalModelFile(n)} />
          </label>
          <p class="fp3d-sub">${this.t("pack_import_local_model_hint")}</p>`:w}
      ${this._packMsg?g`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:w}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}renderModules(){let e=(this.packs??[]).filter(n=>n.module||n.features?.length),t=e.filter(n=>!n.module).length;return g`<section class="fp3d-ext-card">
      <h3>${this.t("settings_modules")}</h3>
      ${this.summaryBar("modules",[{n:e.length-t,label:this.t("ext_sum_modules"),tone:"ok"},{n:t,label:this.t("ext_sum_feature_packs"),tone:"missing"}])}
      ${e.length?this._open.has("modules")?e.map(n=>g`<div class="fp3d-pack">
              <div>
                <b>${He(n,this.hass?.language??"de")}</b>
                <span class="fp3d-sub">${n.module?this.t("pack_module",{publisher:n.publisher}):this.t((n.features??[]).every(i=>i.startsWith("fun_"))?"pack_fun_module":"pack_pro_module",{publisher:n.publisher})}${n.release&&n.release>1?` \xB7 v${n.release}`:""}</span>
                ${(n.features??[]).some(i=>!Qi(i))?g`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:w}
                ${n.licensee?g`<span class="fp3d-sub">${this.t("pack_licensed",{name:n.licensee})}</span>`:w}
              </div>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(n)}>${this.t("pack_remove")}</button>
            </div>`):w:g`<p class="fp3d-sub">${this.t("modules_none")}</p>`}
      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("module_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${n=>this.importPackFile(n,!0)} />
      </label>
      ${this._moduleMsg?g`<p class="fp3d-sub ${this._moduleMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._moduleMsg.text}</p>`:w}
      <p class="fp3d-sub">${this.t("module_import_hint")}</p>
    </section>`}async importPackFile(e,t=!1){let n=e.target,i=[...n.files??[]];if(n.value="",!i.length||!this.hass)return;let o=[],s=[];for(let d of i)try{let c=await Si(this.hass,await d.text());o.push(this.t("pack_imported",{name:c.name,publisher:c.publisher,n:c.items}))}catch(c){let{code:h,message:u}=c??{},p=`pack_error_${h}`,f=this.t(p,{detail:u??String(c)});s.push(`${d.name}: ${f===p?this.t("pack_error_other",{detail:u??String(c)}):f}`)}o.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let a=i.length>1?[this.t("packs_imported_n",{n:o.length,total:i.length})]:[],l={ok:s.length===0,text:[...a,...o,...s].join(" \xB7 ")};t?this._moduleMsg=l:this._packMsg=l}async importLocalModelFile(e){let t=e.target,n=[...t.files??[]];if(t.value="",!n.length||!this.hass||!this.isAdmin)return;let i=[],o=[];for(let a of n)try{let l=await Tr(this.hass,await a.text());i.push(this.t("pack_local_model_imported",{name:l.name,n:l.items}))}catch(l){let{code:d,message:c}=l??{},h=`pack_error_${d}`,u=this.t(h,{detail:c??String(l)});o.push(`${a.name}: ${u===h?this.t("pack_error_other",{detail:c??String(l)}):u}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:o.length===0,text:[...s,...i,...o].join(" \xB7 ")}}async deletePack(e){!this.hass||!confirm(this.t("pack_remove_confirm",{name:He(e,this.hass?.language??"de")}))||(await Dr(this.hass,e.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[Tn,_o,lt`
      .fp3d-sum {
        display: grid;
        gap: 6px;
        width: 100%;
        margin: 4px 0 8px;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        background: rgba(4, 8, 18, 0.35);
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-sum-bar {
        display: flex;
        gap: 2px;
        height: 8px;
        border-radius: 999px;
        overflow: hidden;
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-sum-bar i {
        display: block;
      }
      .fp3d-sum-ok {
        background: #34d399;
      }
      .fp3d-sum-update {
        background: #fbbf24;
      }
      .fp3d-sum-missing {
        background: #60a5fa;
      }
      .fp3d-sum-text {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 14px;
        font-size: 0.92em;
      }
      .fp3d-sum-ok-text {
        color: #34d399;
      }
      .fp3d-sum-update-text {
        color: #fbbf24;
      }
      .fp3d-sum-missing-text {
        color: #60a5fa;
      }
      .fp3d-sum-caret {
        color: var(--fp3d-muted, #8ea3c4);
        font-size: 0.85em;
      }
      :host {
        display: block;
        overflow: auto;
      }
      .fp3d-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .fp3d-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .fp3d-ext-head a {
        text-decoration: none;
      }
      .fp3d-ext-actions,
      .fp3d-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .fp3d-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .fp3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      .fp3d-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-soft);
      }
      .fp3d-ext-pro {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 10px;
      }
      .fp3d-pet-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-pet-row input[type="text"],
      .fp3d-pet-row select {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pet-row input[type="text"] {
        flex: 1;
        min-width: 110px;
      }
      .fp3d-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .fp3d-ext-on {
        border-color: var(--fp3d-accent);
      }
      .fp3d-ext-beta {
        border-style: dashed;
      }
      .fp3d-beta-tag {
        justify-self: start;
        padding: 2px 8px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
        color: var(--fp3d-accent);
        font-size: 12px;
        font-weight: 700;
      }
      .fp3d-ext-source {
        justify-self: start;
        padding: 2px 8px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        border-radius: 999px;
        color: var(--fp3d-accent);
        font-size: 12px;
        font-weight: 700;
      }
      .fp3d-ext-source-locked {
        color: var(--fp3d-soft);
      }
      .fp3d-ext-state {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-ext-link {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-sub {
        color: var(--fp3d-soft);
        font-size: 13px;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pack div {
        display: grid;
        gap: 2px;
      }
      .fp3d-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .fp3d-pack-error {
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",tr);var vo=10,Pc=new Set(["vertex","room","device","opening","furniture","furnset","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","outbox","pipept","poolport","pooldev","pooljoint","solarmove","solarturn","cablept","holopt","bgmove","bgscale","bgrotate"]),zc=100,nr={base:["kitchen","sink","stove","dishwasher","sideboard","dresser","tv_board","nightstand","washbasin","washer","dryer","worktop","desk"],hang:["kitchen_wall","tv_wall","shelf","lamp_wall","radiator","ac_unit","led_strip"],tall:["kitchen_tall","fridge","wardrobe","tall_cabinet","shelf","coat_rack"],living:["sofa","armchair","bed","bunk_bed","bench","corner_bench","plant"],light:["lamp_wall","lamp_floor","led_strip","lamp_table"],switches:["wall_switch","wall_socket","wifi_ap","water_heater"]},ep=new Set(["kitchen_wall","tv_wall","lamp_wall","shelf","led_strip","ac_unit"]),wo=new Set(["kitchen","kitchen_wall","kitchen_tall","sideboard","dresser","tv_board","worktop","wardrobe","tall_cabinet","shelf","desk"]),tp={kitchen:.15,kitchen_wall:.2,kitchen_tall:.3,sideboard:.4,dresser:.4,tv_board:.6,worktop:.1,wardrobe:.4,tall_cabinet:.3,shelf:.25,desk:.6},yo=10,x=r=>Math.round(r*1e3)/1e3,ir=.06;function rr(r,e){if(r.length<3)return r.slice(1);let t=r[0],n=r[r.length-1],i=0,o=-1,s=Math.hypot(n.s-t.s,n.y-t.y)||1;for(let a=1;a<r.length-1;a++){let l=r[a],d=Math.abs((n.s-t.s)*(t.y-l.y)-(t.s-l.s)*(n.y-t.y))/s;d>i&&([i,o]=[d,a])}return i<=e||o<0?[]:[...rr(r.slice(0,o+1),e),r[o],...rr(r.slice(o),e)]}function np(r){if(r.length<2)return r;let e=s=>Math.round(s*20)/20,t=[{s:r[0].s,y:r[0].y}];for(let s=1;s<r.length;s++){let a=t[t.length-1],l=r[s],c=Math.abs(l.s-a.s)>=Math.abs(l.y-a.y)?{s:e(l.s),y:a.y}:{s:a.s,y:e(l.y)},h=t.length>1?t[t.length-2]:null;h&&(h.y===a.y&&c.y===a.y||h.s===a.s&&c.s===a.s)&&t.pop(),!(Math.hypot(c.s-t[t.length-1].s,c.y-t[t.length-1].y)<.08&&s<r.length-1)&&t.push(c)}let n=r[r.length-1],i=t[t.length-1];t.pop();let o=t[t.length-1];return o&&Math.abs(n.s-o.s)>=.08&&Math.abs(n.y-o.y)>=.08&&t.push(o.y===i.y||t.length<2?{s:e(n.s),y:o.y}:{s:o.s,y:e(n.y)}),t.push({s:n.s,y:n.y}),t}function dn(r,e,t){let[n,,i]=et(r,e,0,t);return[x(n),x(i)]}function or(r,e){let t=Ke(r,e),n=0;for(let i=1;i<t.length;i++)n+=Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1],t[i][2]-t[i-1][2]);return n}var Ec={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},ip=new Set(["parking","stairwell","rug","grid_point","waste_bin","mailbox","wall_switch","wall_socket","wifi_ap","water_heater"]),ar=class extends Ze{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideMin:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_multi:{state:!0},_single:{state:!0},_multiMode:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_diag:{state:!0},_diagView:{state:!0},_diagBusy:{state:!0},_diagNote:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallMulti:{state:!0},_wallSingle:{state:!0},_wallGap:{state:!0},_wallCat:{state:!0},_wallQuery:{state:!0},_wallFrame:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_runMode:{state:!0},_techMode:{state:!0},_feedKind:{state:!0},_techAsk:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_toolMenu:{state:!0},_settingsMenu:{state:!0},_sideWidth:{state:!0},_moduleMsg:{state:!0},_settingsDialog:{state:!0},_toolOpen:{state:!0},_viewMenu:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;lastFurnTap=null;shiftHeld=!1;onShift=e=>this.shiftHeld=e.shiftKey;kitPics=new Map;kitPicsAsked=new Set;cableCache=null;railPointIdCache=new Map;techPress=null;techStroke=null;wvZoom=null;wvTouch=new Map;wvPinch=null;wvTap=null;wvScale=1;techPick=!1;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallResize=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;sideDrag=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;fittedView=null;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._multi=[],this._single=!1,this._multiMode=!1,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let o=localStorage.getItem("neonplan3d.library");o&&(this._libOpen=new Set(JSON.parse(o)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._diag=null,this._diagView=!1,this._diagBusy=!1,this._diagNote="",this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._techMode=!1,this._feedKind=null,this._techAsk=null,this._wallSel=null,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallCat=null,this._wallQuery="",this._wallFrame=null,this._wallPicTick=0,this._wallPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("neonplan3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("neonplan3d.phoneHint")!=="0"}catch{}let e=!1;try{e=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let o=Number(localStorage.getItem("neonplan3d.editorSplit"));o>=20&&o<=80&&(this._splitRatio=o/100)}catch{}this._backupBusy=!1,this._wall3d="cut";try{localStorage.getItem("neonplan3d.walls3d")==="auto"&&(this._wall3d="auto")}catch{}this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=t;let n=!1;try{n=localStorage.getItem("neonplan3d.sideMin")==="1"}catch{}this._sideMin=n,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._toolMenu=null,this._settingsMenu=!1;let i=320;try{i=Number(localStorage.getItem("neonplan3d.sideWidth"))||320}catch{}this._sideWidth=Math.min(640,Math.max(280,i)),this._moduleMsg=null,this._settingsDialog=null,this._toolOpen=null,this._viewMenu=!1,this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(e,t){return qe(this.hass,e,t)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onShift)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onShift),this.resizeObserver?.disconnect()}willUpdate(e){if(e.has("packs")&&jr(this.packs??[]),(e.has("packs")||e.has("hass"))&&this.hass&&this.packs?.some(t=>t.module)&&Xs(this.hass,this.packs).then(()=>this.requestUpdate()),e.has("_doc")&&ua(this._doc),e.has("hass")&&this.hass&&!Zl(this.hass.language)&&ql(this.hass.language).then(()=>this.requestUpdate()),e.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(e.has("_split")&&this._split||e.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),e.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc){this._doc=this.building,this._doc3d=this.building;let t=this._doc.settings.editor_floor;this._floorId===null&&t&&this._doc.floors.some(n=>n.id===t)&&(this._floorId=t),this._doc.floors.some(n=>n.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this._roomId)||(this._roomId=null)}}firstUpdated(){let e=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(e){let t=e.currentTarget.parentElement,n=e.currentTarget;n.setPointerCapture(e.pointerId);let i=t.getBoundingClientRect(),o=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},s=()=>{n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",o),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:n,z:i}=e.detail,o=this._doc.settings.wall_interior,s=this._wallView?this.wallSelection():this._furnitureId?this.selection():[],a=s.includes(t)&&s.length>1?s:[];if(a.length){let l=this.floor?.furniture.find(u=>u.id===t);if(!l||a.some(u=>this.isFixedItem("furniture",u)))return;let d=x(n-l.x),c=x(i-l.z),h=new Set(a);this.change((u,p)=>{for(let f of p.furniture)h.has(f.id)&&Object.assign(f,{x:x(f.x+d),z:x(f.z+c)})});return}this.change(l=>{for(let d of l.floors){let c=d.furniture.find(v=>v.id===t);if(!c)continue;let[h,u]=ms(d,c.x,c.z,n,i),[p,f]=gs(d,c,h,u,o),m=Qn(d,c,o),_=m?Math.hypot(m.x-c.x,m.z-c.z):1/0;Object.assign(c,{x:p,z:f});let y=Qn(d,c,o);y&&Math.hypot(y.x-p,y.z-f)<=_+.01&&Object.assign(c,y)}})}onDeviceMoved3d(e){let{id:t,x:n,z:i}=e.detail;this.change(o=>{for(let s of o.floors){let a=s.placements.find(c=>c.entity_id===t);if(!a)continue;let[l,d]=ms(s,a.x,a.z,n,i);Object.assign(a,{x:l,z:d})}})}render3dBar(){if(!this.isAdmin)return w;let e=this.furnitureItem,t=this.device;if(e){let n=ct(e),i=(o,s,a=.05)=>g`<label class="fp3d-3d-size" title=${this.t(`size_${o}`)}
        >${s}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${this.unit==="imperial"?Yt(e[o]):String(Math.round(e[o]*100)/100)}
          @change=${l=>{let d=this.readLen(l.target.value);d!==null&&d>=a&&this.updateFurniture({[o]:Math.round(d*1e3)/1e3})}}
        />
      </label>`;return g`<div class="fp3d-3d-bar">
        <span>${Ot(this.hass,e.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?g`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?Yt(e.mount_y??Fe(this.floor,e)):String(Math.round((e.mount_y??Fe(this.floor,e))*100)/100)}
                @change=${o=>{let s=this.readLen(o.target.value);s!==null&&s>=0&&this.updateFurniture({mount_y:Math.round(Math.min(vo,s)*1e3)/1e3})}}
              />
            </label>`:w}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let n=se(t.entity_id),i=n==="light",o=n?Ci(n,this.floor?.height??2.5,i?t.mount??"ceiling":null):1;return g`<div class="fp3d-3d-bar">
        <span>${ye(this.hass,t.entity_id)}</span>
        ${i?g`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>g`<option value=${s} ?selected=${s===(t.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:w}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((t.y??o)*100)/100)}
            @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((t.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((t.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",t.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",t.entity_id)}>${this.t("delete")}</button>
      </div>`}return w}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let t=this._doc,n=_e(t),i=null,o=(a,l,d,c,h=!1)=>{if(!d||h)return;let u=Os(d,e.o,e.d);!u||!Rd(d,c,u.u,u.s)||i&&i.t<=u.t||(i={id:a,win:l,t:u.t,du:u.u-c.u,ds:u.s-c.v})};if(this._tool==="energy")for(let a of t.settings.roof.solar??[])o(a.id,!1,Le(t,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of t.settings.roof.windows??[])o(a.id,!0,n.find(l=>l.key===a.face)??null,Fn(a),!!a.locked);if(!i)return!1;let s=i;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:t,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(e){let t=this.grab3d;if(!t)return;let n=t.base,i=t.win?n.settings.roof.windows?.find(f=>f.id===t.id):void 0,o=t.win?i?Fn(i):void 0:n.settings.roof.solar?.find(f=>f.id===t.id);if(!o)return;let s=Le(n,o),a=s?.unbounded?[s]:t.win?_e(n):[..._e(n),...ot(n),...this.railFacesForEditing(this._doc)],l=null;for(let f of a){let m=Os(f,e.o,e.d);m&&Id(f,m.u,m.s)&&(!l||m.t<l.t)&&(l={face:f,...m})}if(!l)return;let d=l.face,c=.05,h=f=>x(Math.round(f/c)*c),u=An(d,{...o,face:d.key,u:h(l.u-t.du),v:h(l.s-t.ds),tilt:d.flat?o.tilt??15:o.tilt}),p=!1;this.change(f=>{if(t.win){let _=f.settings.roof.windows?.find(y=>y.id===t.id);if(_){let y=JSON.stringify(_);Object.assign(_,{face:d.key,...u}),p=JSON.stringify(_)!==y}return}let m=f.settings.roof.solar?.find(_=>_.id===t.id);if(m)if(d.rail){let _=this.mountSolarOnRail(f,m,d,u.u,u.v);if(_){let y=JSON.stringify(m);Object.assign(m,_),p=JSON.stringify(m)!==y}}else{let _=JSON.stringify(m);Object.assign(m,{face:d.key,...u,balcony_mount:null},d.flat&&m.tilt==null?{tilt:15}:{}),p=JSON.stringify(m)!==_}},t.base,!1),p&&(t.moved=!0,d.rail&&(this._floorId=d.rail.floorId))}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return g`<div class="fp3d-editor-3d">
      ${this.houseTool?w:g`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this.setWall3d("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this.setWall3d("cut")}>${this.t("walls_cut")}</button>
          </div>`}
      ${this.render3dBar()}
      <fp3d-view3d
              .walkable=${!1}
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool?null:this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool?"auto":this._wall3d}
        .explode=${!1}
        .keepRoof=${this._tool==="roof"||this._tool==="energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${!1}
        .holograms=${this._tool==="energy"?!0:null}
        .flows=${!1}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin&&this.houseTool?this.surfaceGrabber:null}
        .furnishTypes=${this._tool==="energy"?vt:this._tool==="roof"?[]:null}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${e=>{e.detail.id?this.selectFrom3d("furniture",e.detail.id):this._furnitureId&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${e=>{e.detail.id?this.selectFrom3d("device",e.detail.id):this._deviceId&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),this._sideOpen=!1}}
        @room-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),e.detail.roomId?this.selectFrom3d("room",e.detail.roomId):this._sideOpen=!1}}
      ></fp3d-view3d>
    </div>`}setWall3d(e){this._wall3d=e;try{localStorage.setItem("neonplan3d.walls3d",e)}catch{}}updated(){if(this._settingsDialog)for(let n of this.renderRoot.querySelectorAll(".fp3d-dialog details"))n.open=!0;let e=this._preview?this.renderRoot.querySelector(".fp3d-preview"):null;if(e&&this._preview){let n=e.getBoundingClientRect(),i=n.left-this._preview.left,o=n.top-this._preview.top;(Math.abs(i)>1||Math.abs(o)>1)&&(e.style.left=`${parseFloat(e.style.left)-i}px`,e.style.top=`${parseFloat(e.style.top)-o}px`)}for(let n of this.renderRoot.querySelectorAll("select option[selected]"))n.selected||(n.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("fp3d-view3d")?.resetView(),250));let t=this.floor?.background;if(t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id),this.furnitureItem?.pictures)for(let n of this.storedPictures())!this._images[n]&&!this.loadingImages.has(n)&&this.loadImage(n)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&(this.past.push(JSON.stringify(t)),this.past.length>zc&&this.past.shift(),this.future=[]),this._doc=e,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,n=!0){let i=structuredClone(t),o=i.floors.find(s=>s.id===this._floorId);!o&&this._floorId||(e(i,o),this.setDoc(i,n?t:null))}undo(){let e=this.past.pop();e&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}redo(){let e=this.future.pop();e&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:t,ox:n,oy:i}=this._view;return[e[0]*t+n,e[1]*t+i]}toWorld(e,t){let{scale:n,ox:i,oy:o}=this._view;return[(e-i)/n,(t-o)/n]}localPoint(e){let t=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[];if(this._tool==="outdoor"||this._tool==="pool")for(let a of this.floor?.outdoor??[])e.push(...a.points);if(this._tool==="roof")for(let a of this._doc.settings.roof.sections??[])e.push([a.x0,a.z0],[a.x1,a.z1]);let t=e.length?ze(e):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=t.x1-t.x0+2*n,o=t.z1-t.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/o)));this._view={scale:s,ox:this._size.w/2-(t.x0+t.x1)/2*s,oy:this._size.h/2-(t.z0+t.z1)/2*s},this.fittedView=this._view}showPoint(e,t){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-e*n,oy:this._size.h/2-t*n}}zoomAt(e,t,n){let{scale:i,ox:o,oy:s}=this._view,a=Math.max(8,Math.min(600,i*e)),l=a/i;this._view={scale:a,ox:t-(t-o)*l,oy:n-(n-s)*l}}snap(e,t,n=!1){if(this._guides={},n)return e;let i=yo/this._view.scale,o=this.floor?.rooms??[],s=[];for(let f of o)f.points.forEach((m,_)=>{t&&f.id===t.roomId&&(t.index===void 0||t.index===_)||s.push(m)});let a=null,l=i;for(let f of s){let m=Math.hypot(f[0]-e[0],f[1]-e[1]);m<l&&(l=m,a=f)}if(a)return this._guides={point:a},[a[0],a[1]];for(let f of o)if(!(t&&f.id===t.roomId))for(let m=0;m<f.points.length;m++){let _=f.points[m],y=f.points[(m+1)%f.points.length],v=y[0]-_[0],b=y[1]-_[1],$=v*v+b*b;if($<1e-9)continue;let k=((e[0]-_[0])*v+(e[1]-_[1])*b)/$;if(k<=0||k>=1)continue;let M=[_[0]+k*v,_[1]+k*b],S=Math.hypot(M[0]-e[0],M[1]-e[1]),A=this._doc.settings.grid;Math.abs(b)<1e-9&&(M[0]=Math.min(Math.max(Math.round(M[0]/A)*A,Math.min(_[0],y[0])),Math.max(_[0],y[0]))),Math.abs(v)<1e-9&&(M[1]=Math.min(Math.max(Math.round(M[1]/A)*A,Math.min(_[1],y[1])),Math.max(_[1],y[1]))),S<l&&(l=S,a=M)}if(a)return this._guides={point:a},[x(a[0]),x(a[1])];let d=this._doc.settings.grid,c=[x(Math.round(e[0]/d)*d),x(Math.round(e[1]/d)*d)],h=i,u=i,p={};for(let f of s)Math.abs(f[0]-e[0])<h&&(h=Math.abs(f[0]-e[0]),c[0]=f[0],p.x=f[0]),Math.abs(f[1]-e[1])<u&&(u=Math.abs(f[1]-e[1]),c[1]=f[1],p.z=f[1]);return this._guides=p,c}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let t=this.localPoint(e),n=e.target;this.pressStart=t,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,t))},550)}}guardFixed(e){let t=this.drag;if(!t)return;let n=null;t.kind==="vertex"||t.kind==="room"?n=["room",t.roomId]:t.kind==="device"||t.kind==="aim"?n=["device",t.entityId]:t.kind==="opening"?n=["opening",t.id]:t.kind==="furniture"||t.kind==="rotate"||t.kind==="resize"?n=["furniture",t.id]:t.kind==="furnset"?n=["furniture",t.ids.find(i=>this.isFixedItem("furniture",i))??t.ids[0]]:t.kind==="wallmove"?n=["wall",t.id]:t.kind==="outdoor"&&(n=["outdoor",t.id]),!(!n||!this.isFixedItem(...n))&&("moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){this.drag&&Pc.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){e.button===2&&(this.rightPress={at:n,target:e.target,moved:!1}),this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),o=e.target;if(this._wallPick){this.pickWall(i);return}if(this._bgLevel&&this.isAdmin&&this.floor?.background){let k=[...this._bgLevel,i];k.length<2?this._bgLevel=k:this.applyBgLevel(k[0],k[1]);return}if(this.bgHandles()&&this.floor.background&&o.closest("[data-bg-rotate]")){let k=this.floor.background,M=this._images[k.image_id],S=k.width*(M?.aspect??1),A=[k.x+k.width/2,k.z+S/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-A[1],i[0]-A[0]),rot:k.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isAdmin&&this.floor?.background){this._bgRuler=[...this._bgRuler,i];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(o.closest("[data-bg-handle]")||o.closest("[data-bg]"))){let k=this.floor.background;this.drag=o.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:k.x,bz:k.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isAdmin&&this.floor?.background){let k=this.floor.background;if(o.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(o.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:k.x,bz:k.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let k=this.snap(i,void 0,e.altKey);this.drag={kind:"freewall",start:k,end:k};return}if(this._tool==="pool"&&this.poolDown(e,o,i,n))return;if(this._tool==="roof"||this._tool==="energy"){let k=o.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),M=o.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),S=o.closest("[data-roof]")?.getAttribute("data-roof"),A=this._tool==="energy"?o.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(A){this._solarId=null,this.selectItem("furniture",A),this.drag=this.isAdmin?{kind:"furniture",id:A,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&o.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let F=o.closest("[data-cable-pt]")?.getAttribute("data-cable-pt"),H=C=>!!this._doc.settings.roof.cables?.find(O=>O.id===C)?.locked;if(F&&this.isAdmin&&!H(F.slice(0,F.lastIndexOf(":")))){let C=F.lastIndexOf(":"),O=F.slice(0,C),J=Number(F.slice(C+1));if(this.doubleTap(e,`cable:${F}`)){this.change(N=>{let j=N.settings.roof.cables?.find(Y=>Y.id===O);j&&j.points.length>1&&j.points.splice(J,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:O,index:J,base:this._doc,moved:!1};return}let R=o.closest("[data-cable-line]")?.getAttribute("data-cable-line");if(R&&this.isAdmin&&!H(R)){let C=Number(o.closest("[data-cable-line]")?.getAttribute("data-cable-seg")??0),O=this._doc;this.change(J=>{let N=J.settings.roof.cables?.find(j=>j.id===R);N&&N.points.splice(C,0,[x(i[0]),x(i[1])])}),this.drag={kind:"cablept",id:R,index:C,base:O,moved:!0};return}let L=o.closest("[data-cable]")?.getAttribute("data-cable");if(L){if(this._cableId=L,this.isAdmin&&this._floorId&&!this._doc.settings.roof.cables?.some(C=>C.id===L)){let C=this._doc;this.layCable(L);let O=this._doc.settings.roof.cables?.find(N=>N.id===L),J=this.cableSegments().filter(N=>N.key===L);if(O&&J.length){let N=[[J[0].a[0],J[0].a[2]],...O.points,[J[J.length-1].b[0],J[J.length-1].b[2]]],j=0,Y=1/0;for(let ee=0;ee+1<N.length;ee++){let K=op(i,N[ee],N[ee+1]);K<Y&&(Y=K,j=ee)}this.change(ee=>{let K=ee.settings.roof.cables?.find(ue=>ue.id===L);K&&K.points.splice(j,0,[x(i[0]),x(i[1])])}),this.drag={kind:"cablept",id:L,index:j,base:C,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let W=this._tool==="energy"?o.closest("[data-solar]")?.getAttribute("data-solar"):null,E=this._tool==="energy"?o.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(E&&this.isAdmin){this.drag={kind:"solarturn",id:E,base:this._doc,moved:!1};return}if(W){let F=o.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&W===this._solarId&&F&&this.isAdmin){this.toggleSolarCell(F),this.drag={kind:"pan",last:n};return}W!==this._solarId&&(this._solarPick=!1),this._solarId=W,this._roofId=null;let H=this._doc.settings.roof.solar?.find(O=>O.id===W),R=H?Le(this._doc,H)??void 0:void 0,L=R?this.faceHit(R,i):null,C=H&&L?{du:L.u-H.u,ds:Number.isNaN(L.s)?0:L.s-H.v}:null;this.drag=this.isAdmin&&!H?.locked?{kind:"solarmove",id:W,start:i,startScreen:n,base:this._doc,moved:!1,grab:C}:{kind:"pan",last:n};return}let D=this._tool==="roof"?o.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(D){this._roofWinId=D,this._roofId=null;let F=this._doc.settings.roof.windows?.find(C=>C.id===D),H=F?_e(this._doc).find(C=>C.key===F.face):void 0,R=H?io(H,i):null,L=F&&R?{du:R.u-F.u,ds:R.s-F.v}:null;this.drag=this.isAdmin&&!F?.locked?{kind:"solarmove",id:D,start:i,startScreen:n,base:this._doc,moved:!1,grab:L,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let z=this._tool==="energy"?o.closest(".fp3d-energy-item")?.getAttribute("data-furniture"):null;if(z){this._solarId=null,this.selectItem("furniture",z),this.drag=this.isAdmin?{kind:"furniture",id:z,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(M&&this.isAdmin){let[F,H]=M.split(":");this.drag={kind:"roofvertex",id:F,index:Number(H),base:this._doc,moved:!1}}else if(k&&this.isAdmin){let[F,H,R]=k.split(":");this.drag={kind:"roofcorner",id:F,corner:[H==="1"?1:0,R==="1"?1:0],base:this._doc,moved:!1}}else if(S){let F=this.roofFixed(this._doc.settings.roof.sections?.find(H=>H.id===S));F&&this._roofId===S&&(this._fixedHint=!0),this._roofId=S,this.drag=this.isAdmin&&!F?{kind:"roofmove",id:S,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let F=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:F,end:F,roof:!0}}else this.drag={kind:"pan",last:n};return}let s=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||s)&&!this._outdoorFree||this._tool==="hole"){let k=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:k,end:k,outdoor:this._tool==="outdoor"||s,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||s)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this.isAdmin&&(this._tool==="select"||this._tool==="furniture")&&(e.shiftKey||this._multiMode)){let k=o.closest("[data-furniture]");k?(this.toggleMulti(k.getAttribute("data-furniture")),this.drag=null):this.drag={kind:"marquee",start:i,end:i,add:!0};return}let a=o.closest("[data-device]");if(a&&this.isAdmin){this.drag={kind:"device",entityId:a.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let l=o.closest("[data-opening]");if(l){let k=l.getAttribute("data-opening");this.selectItem("opening",k),this.drag=this.isAdmin?{kind:"opening",id:k,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let d=o.closest("[data-resize]");if(d&&this.isAdmin){let[k,M,S]=d.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:k,corner:[M==="1"?1:-1,S==="1"?1:-1],base:this._doc,moved:!1};return}let c=o.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let h=o.closest("[data-aim]");if(h&&this.isAdmin){this.drag={kind:"aim",entityId:h.getAttribute("data-aim"),base:this._doc,moved:!1};return}let u=o.closest("[data-furniture]");if(u&&!o.closest("[data-vertex], [data-mid]")){let k=u.getAttribute("data-furniture"),M=Date.now(),S=this.lastFurnTap?.id===k&&M-this.lastFurnTap.t<400;this.lastFurnTap={id:k,t:M};let A=this.floor.furniture.find(E=>E.id===k);S&&A?.group?(this.selectItem("furniture",k),this._single=!0):(!this.selection().includes(k)||this._single)&&this.selectItem("furniture",k);let W=this.selection();this.drag=this.isAdmin?W.length>1?{kind:"furnset",ids:W,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"furniture",id:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let p=o.closest("[data-vertex]"),f=o.closest("[data-mid]");if(p&&this.room&&this.isAdmin){this._vertex=Number(p.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(f&&this.room&&this.isAdmin){let k=Number(f.getAttribute("data-mid")),M=this.room.points,S=M[k],A=M[(k+1)%M.length],W=[x((S[0]+A[0])/2),x((S[1]+A[1])/2)],E=this._doc,D=this.room.id,z=!1;this.change((F,H)=>{let R=H.rooms.find(O=>O.id===D),L=ll(R.wall_profiles,R.points,k,W);z=L.invalidated,R.points.splice(k+1,0,W),L.profiles?R.wall_profiles=L.profiles:L.invalidated&&delete R.wall_profiles,R.wall_heights&&R.wall_heights.splice(k+1,0,R.wall_heights[k]??null),R.wall_thickness&&R.wall_thickness.splice(k+1,0,R.wall_thickness[k]??null);let C=Math.hypot(W[0]-S[0],W[1]-S[1]);if(R.wall_slopes){let O=R.wall_slopes[k]??null,J=Math.hypot(A[0]-S[0],A[1]-S[1])||1,N=O?Math.round((O[0]+(O[1]-O[0])*C/J)*1e3)/1e3:0;O&&(R.wall_slopes[k]=[O[0],N]),R.wall_slopes.splice(k+1,0,O?[N,O[1]]:null)}for(let O of H.openings)O.room_id!==D||O.wall||(O.edge>k?O.edge+=1:O.edge===k&&O.offset>C&&(O.edge=k+1,O.offset=x(O.offset-C)))},E,!1),z&&(this._notice=this.t("wall_profile_invalidated")),this._vertex=k+1,this.drag={kind:"vertex",roomId:D,index:k+1,base:E,moved:!0};return}let m=o.closest("[data-wall-end]");if(m&&this.isAdmin){let[k,M]=m.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:k,end:M,start:i,startScreen:n,base:this._doc,moved:!1};return}let _=o.closest("[data-free-wall]");if(_){let k=_.getAttribute("data-free-wall");this.selectItem("wall",k),this.drag=this.isAdmin?{kind:"wallmove",id:k,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let y=o.closest("[data-out-box]");if(y&&this.isAdmin){let[k,M]=y.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:k,corner:Number(M),base:this._doc,moved:!1};return}let v=o.closest("[data-out-vertex]");if(v&&this.isAdmin){let[k,M]=v.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:k,index:Number(M),base:this._doc,moved:!1};return}let b=o.closest("[data-outdoor]");if(b&&!o.closest("[data-room]")&&!this.roomAt(i)){let k=this.outdoorAt(i)??b.getAttribute("data-outdoor");this.selectItem("outdoor",k),this.drag=this.isAdmin?{kind:"outdoor",id:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let $=o.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if($){$!==this._roomId&&(this._vertex=null),this.selectItem("room",$),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:$,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(e){if(this.rightPress&&!this.rightPress.moved){let o=this.localPoint(e);Math.hypot(o[0]-this.rightPress.at[0],o[1]-this.rightPress.at[1])>5&&(this.rightPress.moved=!0)}if(this.pressStart){let o=this.localPoint(e);Math.hypot(o[0]-this.pressStart[0],o[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let o=this.pinchState();o&&(this.zoomAt(o.dist/Math.max(1,this.pinch.dist),...o.mid),this._view={...this._view,ox:this._view.ox+o.mid[0]-this.pinch.mid[0],oy:this._view.oy+o.mid[1]-this.pinch.mid[1]},this.pinch=o);return}let n=this.toWorld(...t),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,e.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]},i.last=t;break;case"tap":(i.panning||Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]}),i.last=t;break;case"rect":i.end=this.snap(n,void 0,e.altKey),this.requestUpdate();break;case"freewall":{let o=this.snap(n,void 0,e.altKey);e.shiftKey&&(o=Math.abs(o[0]-i.start[0])>Math.abs(o[1]-i.start[1])?[o[0],i.start[1]]:[i.start[0],o[1]]),i.end=o,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=(i.base.floors.find(a=>a.id===this._floorId)?.walls??[]).find(a=>a.id===i.id);if(!o)return;let s;if(i.end){let a=this.snap(n,void 0,e.altKey);s=i.end==="a"?{a,b:o.b}:{a:o.a,b:a}}else{let a=e.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/a)*a,d=Math.round((n[1]-i.start[1])/a)*a;s={a:[x(o.a[0]+l),x(o.a[1]+d)],b:[x(o.b[0]+l),x(o.b[1]+d)]}}this.change((a,l)=>{let d=(l.walls??[]).find(h=>h.id===i.id);Object.assign(d,s);let c=i.base.floors.find(h=>h.id===this._floorId)?.walls?.find(h=>h.id===i.id);if(c?.wall_profile){let h=Math.hypot(d.b[0]-d.a[0],d.b[1]-d.a[1]);d.wall_profile=Yn(c.wall_profile,h)}},i.base,!1);break}case"vertex":{let o=this.snap(n,{roomId:i.roomId,index:i.index},e.altKey);i.moved=!0;let s=!1;this.change((a,l)=>{let d=l.rooms.find(h=>h.id===i.roomId),c=i.base.floors.find(h=>h.id===this._floorId)?.rooms.find(h=>h.id===i.roomId);if(d.points[i.index]=o,c?.wall_profiles){let h=Jt(c.wall_profiles,c.points,d.points);s=h.invalidated,h.profiles?d.wall_profiles=h.profiles:delete d.wall_profiles}},i.base,!1),s&&(this._notice=this.t("wall_profile_invalidated"));break}case"room":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(d=>d.id===this._floorId)?.rooms.find(d=>d.id===i.roomId);if(!o)return;let s=this.roomDelta(o,[n[0]-i.start[0],n[1]-i.start[1]],e.altKey),a=i.base.floors.find(d=>d.id===this._floorId),l=new Set(a.placements.filter(d=>Z([d.x,d.z],o.points)).map(d=>d.entity_id));this.change((d,c)=>{let h=c.rooms.find(u=>u.id===i.roomId);h.points=o.points.map(([u,p])=>[x(u+s[0]),x(p+s[1])]),c.placements=a.placements.map(u=>l.has(u.entity_id)?{...u,x:x(u.x+s[0]),z:x(u.z+s[1])}:u)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=e.altKey?.01:this._doc.settings.grid,s=x(Math.round((n[0]-i.start[0])/o)*o),a=x(Math.round((n[1]-i.start[1])/o)*o),l=i.base.settings.roof.sections?.find(d=>d.id===i.id);if(!l)return;this.change(d=>{let c=d.settings.roof.sections?.find(h=>h.id===i.id);c&&(Object.assign(c,{x0:x(l.x0+s),x1:x(l.x1+s),z0:x(l.z0+a),z1:x(l.z1+a)}),l.points&&(c.points=l.points.map(([h,u])=>[x(h+s),x(u+a)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let o=i.base.settings.roof.solar?.find(u=>u.id===i.id),s=o?Le(i.base,o):null;if(!o||!s)return;let[a,l]=li(s,o),d=Math.atan2(n[0]-a,-(n[1]-l))*180/Math.PI,c=e.altKey?1:15;d=Math.round(d/c)*c;let h=ai(i.base,o,d);this.change(u=>{let p=u.settings.roof.solar?.find(f=>f.id===i.id);p&&Object.assign(p,h)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;let o=i.win?i.base.settings.roof.windows?.find(y=>y.id===i.id):void 0,s=i.win?o?Fn(o):void 0:i.base.settings.roof.solar?.find(y=>y.id===i.id),a=i.win?_e(i.base):[..._e(i.base),...this._floorId?ot(i.base,this._floorId):[],...this.railFacesForEditing(this._doc,this._floorId??void 0)],l=s?Le(i.base,s,a):null;if(!s||!l)return;let d=e.altKey?.01:.05,c=y=>x(Math.round(y/d)*d),h=l.unbounded?null:Md(a,n),u=l,p,f;if(h&&i.grab)u=h.face,p=c(h.u-i.grab.du),f=h.face.rail?s.balcony_mount?s.v:.03:Number.isNaN(h.s)?h.face.key===s.face?s.v:Math.max(0,h.face.ls-1.5):c(h.s-i.grab.ds);else{let y=n[0]-i.start[0],v=n[1]-i.start[1],b=[l.es[0],l.es[2]],$=b[0]*b[0]+b[1]*b[1]||1;p=c(s.u+y*l.eu[0]+v*l.eu[2]),f=c(s.v+(y*b[0]+v*b[1])/$)}let m=An(u,{...s,face:u.key,u:p,v:f,tilt:u.flat?s.tilt??15:s.tilt}),_=!1;this.change(y=>{if(i.win){let b=y.settings.roof.windows?.find($=>$.id===i.id);if(b){let $=JSON.stringify(b);Object.assign(b,{face:u.key,...m}),_=JSON.stringify(b)!==$}return}let v=y.settings.roof.solar?.find(b=>b.id===i.id);if(v)if(u.rail){let b=this.mountSolarOnRail(y,v,u,m.u,m.v);if(b){let $=JSON.stringify(v);Object.assign(v,b),_=JSON.stringify(v)!==$}}else{let b=JSON.stringify(v);Object.assign(v,{face:u.key,...m,balcony_mount:null},u.flat&&v.tilt==null?{tilt:15}:{}),_=JSON.stringify(v)!==b}},i.base,!1),i.moved||=_,_&&u.rail&&(this._floorId=u.rail.floorId);break}case"outbox":{i.moved=!0;let o=this.snap(n,void 0,e.altKey),s=i.base.floors.find(y=>y.id===this._floorId)?.outdoor.find(y=>y.id===i.id);if(!s?.pool_shape)return;let a=ze(s.points),d=[[a.x0,a.z0],[a.x1,a.z0],[a.x1,a.z1],[a.x0,a.z1]][(i.corner+2)%4],c=o[0]-d[0],h=o[1]-d[1];if(s.pool_shape==="round"){let y=Math.max(Math.abs(c),Math.abs(h),.5);c=Math.sign(c||1)*y,h=Math.sign(h||1)*y}else c=Math.sign(c||1)*Math.max(Math.abs(c),.5),h=Math.sign(h||1)*Math.max(Math.abs(h),.5);let u=Math.min(d[0],d[0]+c),p=Math.max(d[0],d[0]+c),f=Math.min(d[1],d[1]+h),m=Math.max(d[1],d[1]+h),_=s.pool_shape;this.change((y,v)=>{let b=v.outdoor.find($=>$.id===i.id);b&&(b.points=Ai(_,x(u),x(f),x(p),x(m)))},i.base,!1);break}case"pipept":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change((s,a)=>{let l=a.outdoor.find(d=>d.id===i.pool)?.pool?.pipes?.find(d=>d.id===i.pipe);l&&(l.points[i.index]=[x(o[0]),x(o[1])])},i.base,!1);break}case"poolport":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change((s,a)=>{let l=a.outdoor.find(u=>u.id===i.pool),d=l?.pool?.ports?.find(u=>u.id===i.id);if(!l||!d)return;let[c,h]=d.kind==="skimmer"||d.kind==="inlet"?Yi(l.points,o):o;d.x=x(c),d.z=x(h)},i.base,!1);break}case"pooljoint":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let o=i.base.floors.flatMap(a=>a.outdoor).find(a=>a.id===i.pool)?.pool?.joints?.find(a=>a.id===i.id);if(!o)break;let s=this.snap([o.x+n[0]-i.start[0],o.z+n[1]-i.start[1]],void 0,e.altKey);if(o.kind==="wall"){let a=[-(o.nz??0),o.nx??0],l=(s[0]-o.x)*a[0]+(s[1]-o.z)*a[1];s=[o.x+a[0]*l,o.z+a[1]*l]}this.change(a=>{let l=a.floors.flatMap(d=>d.outdoor).find(d=>d.id===i.pool)?.pool?.joints?.find(d=>d.id===i.id);l&&([l.x,l.z]=[x(s[0]),x(s[1])])},i.base,!1);break}case"pooldev":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let o=i.base.floors.flatMap(a=>a.furniture).find(a=>a.id===i.id);if(!o)break;let s=this.snap([o.x+n[0]-i.start[0],o.z+n[1]-i.start[1]],void 0,e.altKey);this.change(a=>{let l=a.floors.flatMap(d=>d.furniture).find(d=>d.id===i.id);l&&([l.x,l.z]=[x(s[0]),x(s[1])])},i.base,!1);break}case"outvertex":{i.moved=!0;let o=this.snap(n,void 0,e.altKey),s=i.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===i.id);if(!s)return;let a=_n(s.points);this.change((l,d)=>{let c=d.outdoor.find(f=>f.id===i.id);if(!c)return;let h=s.points.map(f=>[...f]),u=i.index,p=s.points[u];h[u]=[x(o[0]),x(o[1])],a&&s.points.forEach((f,m)=>{m!==u&&(Math.abs(f[0]-p[0])<1e-6&&(h[m][0]=x(o[0])),Math.abs(f[1]-p[1])<1e-6&&(h[m][1]=x(o[1])))}),c.points=h},i.base,!1);break}case"cablept":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.cables?.find(l=>l.id===i.id);a&&a.points[i.index]&&(a.points[i.index]=[x(o[0]),x(o[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>s.settings.roof.hologram={...s.settings.roof.hologram??Pi,place:"free",x:x(o[0]),z:x(o[1])},i.base,!1);break}case"bgmove":{i.moved=!0;let o=n[0]-i.start[0],s=n[1]-i.start[1];this.change((a,l)=>{l.background&&(l.background.x=x(i.bx+o),l.background.z=x(i.bz+s))},i.base,!1);break}case"bgrotate":{i.moved=!0;let o=this.floor?.background,s=o?this._images[o.image_id]:void 0;if(!o||!s)break;let a=o.width*s.aspect,l=[o.x+o.width/2,o.z+a/2],d=Math.atan2(n[1]-l[1],n[0]-l[0]),c=i.rot+(d-i.start)*180/Math.PI;c=e.shiftKey?Math.round(c/15)*15:Math.round(c*10)/10,c=((c+180)%360+360)%360-180,this.change((h,u)=>{u.background&&(u.background.rotation=c)},i.base,!1);break}case"bgscale":{i.moved=!0;let o=this.floor?.background,s=o?this._images[o.image_id]:void 0;if(!o||!s)break;let[a]=this.bgLocal(o,n,s.aspect),l=Math.max(.5,x(a));this.change((d,c)=>{c.background&&(c.background.width=l)},i.base,!1);break}case"roofvertex":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.sections?.find(l=>l.id===i.id);!a?.points||i.index>=a.points.length||(a.points[i.index]=[x(o[0]),x(o[1])],Object.assign(a,zs(a.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.sections?.find(l=>l.id===i.id);a&&(i.corner[0]?a.x1=x(o[0]):a.x0=x(o[0]),i.corner[1]?a.z1=x(o[1]):a.z0=x(o[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(d=>d.id===this._floorId),s=o?.openings.find(d=>d.id===i.id),a=s&&o?kn(s,o.rooms,o.walls??[]):null;if(!s||!a)return;let l=this.offsetOnEdge(a.room,a.edge,n,s.width,e.altKey);this.change((d,c)=>Object.assign(c.openings.find(h=>h.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(h=>h.id===this._floorId)?.furniture.find(h=>h.id===i.id);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,a=x(Math.round((o.x+n[0]-i.start[0])/s)*s),l=x(Math.round((o.z+n[1]-i.start[1])/s)*s),d=o.rotation,c=e.altKey?null:this.snapToWall({...o,x:a,z:l});c&&({x:a,z:l,rotation:d}=c),this.change((h,u)=>Object.assign(u.furniture.find(p=>p.id===i.id),{x:a,z:l,rotation:d}),i.base,!1);break}case"furnset":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=e.altKey?.01:this._doc.settings.grid,s=x(Math.round((n[0]-i.start[0])/o)*o),a=x(Math.round((n[1]-i.start[1])/o)*o),l=new Set(i.ids);this.change((d,c)=>{for(let h of c.furniture)l.has(h.id)&&Object.assign(h,{x:x(h.x+s),z:x(h.z+a)})},i.base,!1);break}case"marquee":i.end=n,this.requestUpdate();break;case"outdoor":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(d=>d.id===this._floorId)?.outdoor.find(d=>d.id===i.id);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/s)*s,l=Math.round((n[1]-i.start[1])/s)*s;this.change((d,c)=>{let h=c.outdoor.find(u=>u.id===i.id);h.points=o.points.map(([u,p])=>[x(u+a),x(p+l)]),h.pool?.ports&&o.pool?.ports&&(h.pool.ports=o.pool.ports.map(u=>({...u,x:x(u.x+a),z:x(u.z+l)})))},i.base,!1);break}case"resize":{i.moved=!0;let o=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!o)return;let s=xa(o,i.corner,n,e.altKey?.01:this._doc.settings.grid);this.change((a,l)=>Object.assign(l.furniture.find(d=>d.id===i.id),s),i.base,!1);break}case"rotate":{i.moved=!0;let o=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!o)return;let s=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,a=e.altKey?1:15;s=(Math.round(s/a)*a%360+360)%360,this.change((l,d)=>Object.assign(d.furniture.find(c=>c.id===i.id),{rotation:s}),i.base,!1);break}case"aim":{i.moved=!0;let o=i.base.floors.find(d=>d.id===this._floorId)?.placements.find(d=>d.entity_id===i.entityId);if(!o)return;let s=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,a=e.altKey?1:5;s=(Math.round(s/a)*a%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-o.x,n[1]-o.z)*10)/10));this.change((d,c)=>Object.assign(c.placements.find(h=>h.entity_id===i.entityId),{rotation:s,reach:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(d=>d.id===this._floorId)?.placements.find(d=>d.entity_id===i.entityId);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,a=x(Math.round((o.x+n[0]-i.start[0])/s)*s),l=x(Math.round((o.z+n[1]-i.start[1])/s)*s);this.change((d,c)=>Object.assign(c.placements.find(h=>h.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(e){let t=this.rightPress;if(this.rightPress=null,t&&e.button===2&&(this.rightUp=performance.now(),!t.moved&&e.type!=="pointercancel"&&(this._tool==="select"||this._tool==="furniture")&&this.openContext(t.target,t.at)),clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||e.type==="pointercancel"){n&&Pc.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let i=this.localPoint(e);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[o,s]=n.start,[a,l]=n.end;if(Math.abs(a-o)>=.2&&Math.abs(l-s)>=.2){let d=[Math.min(o,a),Math.min(s,l)],c=[Math.max(o,a),Math.max(s,l)],h=[d,[c[0],d[1]],c,[d[0],c[1]]];n.outdoor?this.addOutdoor(h):n.hole?this.addHole(d,c):n.roof?this.addRoofSection(d,c):this.addRoom(h)}this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...i),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...i),void 0,e.altKey),i);break;case"marquee":{let[o,s]=[Math.min(n.start[0],n.end[0]),Math.max(n.start[0],n.end[0])],[a,l]=[Math.min(n.start[1],n.end[1]),Math.max(n.start[1],n.end[1])],d=(this.floor?.furniture??[]).filter(c=>c.x>=o&&c.x<=s&&c.z>=a&&c.z<=l).map(c=>c.id);d.length&&this.setMulti([...new Set([...this.selection(),...this.withGroups(d)])]);break}case"opening":case"furniture":case"furnset":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"pooljoint":n.moved?this.pushHistory(n.base):(n.kind==="poolport"||n.kind==="pooljoint")&&this.openCard(n.pool,`${n.kind==="poolport"?"port":"joint"}:${n.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"pooldev":{n.moved?this.pushHistory(n.base):this._doc.floors.flatMap(o=>o.furniture).find(o=>o.id===n.id)?.type==="pool_valve"?this.togglePoolValve(n.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${n.id}`);break}case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,n]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,n)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t[0]-n[0],t[1]-n[1]),mid:[(t[0]+n[0])/2,(t[1]+n[1])/2]}}pushHistory(e){this.past.push(JSON.stringify(e)),this.past.length>zc&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,n){if(n)return t;let i=this._doc.settings.grid,o=[Math.round(t[0]/i)*i,Math.round(t[1]/i)*i],a=yo/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let d of l.points)for(let c of e.points){let h=Math.hypot(c[0]+t[0]-d[0],c[1]+t[1]-d[1]);h<a&&(a=h,o=[d[0]-c[0],d[1]-c[1]],this._guides={point:d})}return o}roomAt(e){return(this.floor?.rooms??[]).filter(i=>Z(e,i.points)).sort((i,o)=>Ae(i.points)-Ae(o.points))[0]?.id??null}outdoorAt(e){return(this.floor?.outdoor??[]).filter(i=>i.points.length>=3&&Z(e,i.points)).sort((i,o)=>Ae(i.points)-Ae(o.points))[0]?.id??null}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}addDraftPoint(e,t){let n=this._draft;if(n.length>=3){let[o,s]=this.toScreen(n[0]);if(Math.hypot(o-t[0],s-t[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-e[0],i[1]-e[1])<1e-6||(this._draft=[...n,e])}closeDraft(){this._draft.length>=3&&Math.abs(Ae(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let n=gn(t,this._measureLen,e),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let e=this._draft[0]??[0,0],[t,n]=this._rectSize;t>.1&&n>.1&&(this.addRoom([e,gn(e,t,"right"),gn(gn(e,t,"right"),n,"down"),gn(e,n,"down")]),this._draft=[])}renderMeasureForm(){let e=this._draft,t=e[0],n=e[e.length-1],i=t&&n&&e.length>1?Math.hypot(n[0]-t[0],n[1]-t[1]):0,o=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=a=>Ge(this.hass,a,2);return g`<section>
      <h3>${this.t("measure")}</h3>
      ${t?g`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(t[0]),z:this.m(t[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${Xn(this.t("measure_length"),this.unit)}
                <input
                  class="fp3d-measure-input"
                  type=${this.unit==="imperial"?"text":"number"}
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${this.lenValue(this._measureLen)}
                  @change=${a=>this._measureLen=this.readLen(a.target.value)??0}
                  @keydown=${a=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[a.key];l?(a.preventDefault(),this.measureStep(l)):a.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${o.map(([a,l])=>g`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${e.length>1?g`<ol class="fp3d-measure-list">
                  ${e.slice(1).map((a,l)=>g`<li>${this.m(Math.hypot(a[0]-e[l][0],a[1]-e[l][1]))}</li>`)}
                </ol>`:w}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${e.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${e.length<2} @click=${()=>this._draft=e.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${e.length>=3?g`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:w}`:g`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.len(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(e,t){if(!this.floor)return;let n={id:G("wall"),a:[x(e[0]),x(e[1])],b:[x(t[0]),x(t[1])],thickness:null};this.change((i,o)=>o.walls=[...o.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(e){let t=this._wallId;t&&this.change((n,i)=>Object.assign((i.walls??[]).find(o=>o.id===t),e))}deleteFreeWall(){let e=this._wallId;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((t,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==e),n.openings=n.openings.filter(i=>i.wall!==e)}),this._wallId=null)}renderFreeWalls(e){return T`<g>${(e.walls??[]).map(t=>{let[n,i]=this.toScreen(t.a),[o,s]=this.toScreen(t.b),a=t.id===this._wallId;return T`<g data-free-wall=${t.id} class=${`fp3d-free-wall${a?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${o} y2=${s} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${o} y2=${s} />
      </g>
      ${a&&this.isAdmin&&!Ho(t,!0,this._doc.settings)?T`<g class="fp3d-vertex" data-wall-end=${`${t.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${t.id}:b`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`:w}`})}</g>`}renderFreeWallForm(e){let t=this.isAdmin,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),i=a=>{let d=Math.max(.1,a)/(n||1);this.updateFreeWall({b:[x(e.a[0]+(e.b[0]-e.a[0])*d),x(e.a[1]+(e.b[1]-e.a[1])*d)]})},o=[(e.a[0]+e.b[0])/2,(e.a[1]+e.b[1])/2],s=(a,l)=>{let d=l-o[a],c=h=>a===0?[x(h[0]+d),h[1]]:[h[0],x(h[1]+d)];this.updateFreeWall({a:c(e.a),b:c(e.b)})};return g`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",e.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),o[0],a=>s(0,a))} ${this.len(this.t("z"),o[1],a=>s(1,a))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,i,.01,.1)}
        ${this.len(this.t("wall_thickness"),e.thickness??this._doc.settings.wall_interior,a=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,a))}),.01,.02)}
        ${this.len(this.t("wall_height"),e.height??this.floor?.height??2.5,a=>this.updateFreeWall({height:a>=(this.floor?.height??2.5)-.005?null:Math.max(.05,a)}),.05,.05)}
      </div>
      ${t?g`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:w}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(e,t){if(!this.floor)return;let n={id:G("hole"),type:"stairwell",x:x((e[0]+t[0])/2),z:x((e[1]+t[1])/2),w:x(t[0]-e[0]),d:x(t[1]-e[1]),h:.02,rotation:0,variant:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}addOutdoor(e){if(!this.floor)return;let t=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:G("outdoor"),type:t,points:e.map(([o,s])=>[x(o),x(s)])};t==="balcony"&&(n.point_ids=$n(n,()=>G("point")));let i=t==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(i==="round"||i==="oval"){let o=ze(n.points);n.points=Ai(i,o.x0,o.z0,o.x1,o.z1),n.pool_shape=i}t==="pool"&&this.pipeRules&&(n.pool={}),this.change((o,s)=>s.outdoor.push(n)),this.selectItem("outdoor",n.id)}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(e){let t=this._outdoorId;this.change((n,i)=>{let o=i.outdoor.find(s=>s.id===t);if(e.points&&o.type==="balcony"){let s=_l(o,e.points);s?o.point_ids=s:delete o.point_ids}Object.assign(o,e),o.type==="balcony"&&e.points&&!o.point_ids&&(o.point_ids=$n({...o,point_ids:void 0},()=>G("point"))),e.type==="balcony"&&(o.point_ids=$n(o,()=>G("point")))})}deleteOutdoor(){let e=this._outdoorId;if(!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e))return;let t=this.floor?.outdoor.find(i=>i.id===e),n=t?.pool?.pipes?.length??0;t?.type==="pool"&&n&&!confirm(this.t("pool_delete_confirm",{n}))||(this.change((i,o)=>o.outdoor=o.outdoor.filter(s=>s.id!==e)),this._outdoorId=null)}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t={...e,id:G("outdoor"),points:e.points.map(([n,i])=>[x(n+.5),x(i+.5)])};t.type==="balcony"&&(t.point_ids=$n({...t,point_ids:void 0},()=>G("point"))),this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e){if(!this.floor)return;let t=G("room"),n=this.floor.rooms.length+1;this.change((i,o)=>o.rooms.push({id:t,name:this.t("new_room",{n}),area_id:null,points:e.map(([s,a])=>[x(s),x(a)]),floor_material:"wood"})),this._roomId=t,this._vertex=null}onKey=e=>{if(this.shiftHeld=e.shiftKey,e.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=e.ctrlKey||e.metaKey;if(!(this._wallView&&!(n&&["z","y"].includes(e.key.toLowerCase())))){if(n&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(n&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(n&&e.key.toLowerCase()==="d")e.preventDefault(),this._furnitureId?this.duplicateFurniture():this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(e.key.toLowerCase()==="l"&&!n&&this._furnitureId&&this.selection().length>1)this.lockSelection(!this.selection().every(i=>this.isFixedItem("furniture",i)));else if(e.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.prototype.hasOwnProperty.call(Ec,e.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[o,s]=Ec[e.key];this.nudge(o*i,s*i)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this.drawingPoints)this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this.drawingPoints)this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}if(this._pipeDraft){this._pipeDraft=null;return}if(this._pipeMode){this._pipeMode=!1;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}}};nudge(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix,o=this._furnitureId?this.selection():[];if(i&&this.isFixedItem(i.kind,i.id)||o.some(a=>this.isFixedItem("furniture",a)))return this._fixedHint=!0,!0;let s=a=>[x(a[0]+e),x(a[1]+t)];if(o.length>1){let a=new Set(o);return this.change((l,d)=>{for(let c of d.furniture)a.has(c.id)&&([c.x,c.z]=s([c.x,c.z]))}),!0}if(this._deviceId){let a=this._deviceId;if(!n.placements.some(l=>l.entity_id===a))return!1;this.change((l,d)=>{let c=d.placements.find(h=>h.entity_id===a);[c.x,c.z]=s([c.x,c.z])})}else if(this._furnitureId){let a=this._furnitureId;this.change((l,d)=>{let c=d.furniture.find(h=>h.id===a);c&&([c.x,c.z]=s([c.x,c.z]))})}else if(this._openingId){let a=this.opening,l=a?kn(a,n.rooms,n.walls??[]):null;if(!a||!l)return!1;let d=l.room.points[l.edge],c=l.room.points[(l.edge+1)%l.room.points.length],h=Math.hypot(c[0]-d[0],c[1]-d[1])||1,u=(e*(c[0]-d[0])+t*(c[1]-d[1]))/h;if(Math.abs(u)<1e-9)return!0;let p=Math.min(a.width,h)/2;this.updateOpening({offset:x(Math.min(h-p,Math.max(p,a.offset+u)))})}else if(this._wallId){let a=this._wallId;this.change((l,d)=>{let c=(d.walls??[]).find(h=>h.id===a);c&&([c.a,c.b]=[s(c.a),s(c.b)])})}else if(this._outdoorId){let a=this._outdoorId;this.change((l,d)=>{let c=d.outdoor.find(h=>h.id===a);c&&(c.points=c.points.map(s))})}else if(this._roomId){let a=this._roomId,l=this._vertex,d=n.rooms.find(h=>h.id===a);if(!d)return!1;let c=new Set(n.placements.filter(h=>Z([h.x,h.z],d.points)).map(h=>h.entity_id));this.change((h,u)=>{let p=u.rooms.find(f=>f.id===a);if(l!==null&&l<p.points.length){p.points[l]=s(p.points[l]);return}p.points=p.points.map(s);for(let f of u.placements)c.has(f.entity_id)&&([f.x,f.z]=s([f.x,f.z]))})}else return!1;return!0}get freeHaFloors(){let e=new Set(this._doc.floors.map(t=>t.ha_floor));return Object.values(this.hass?.floors??{}).filter(t=>!e.has(t.floor_id)).sort((t,n)=>(t.level??99)-(n.level??99)||t.name.localeCompare(n.name))}unplacedAreas(e){if(!e.ha_floor)return[];let t=new Set(this._doc.floors.flatMap(n=>[...n.rooms.map(i=>i.area_id),...(n.outdoor??[]).map(i=>i.area_id??null)]));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===e.ha_floor&&!t.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(e=null){let t=this._doc.floors,n=G("floor"),i=e?.name??(t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length})),o={...ya(n,i,ka(t,e?.level)),ha_floor:e?.floor_id??null},s=structuredClone(this._doc),a=s.floors.findIndex(l=>l.elevation>o.elevation);s.floors.splice(a<0?s.floors.length:a,0,o),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(e){let t=this.unplacedAreas(e);if(!t.length)return;let n=$a(e,t,()=>G("room"));this.change((i,o)=>o.rooms.push(...n)),this.fit()}moveFloor(e){let t=this._doc.floors.findIndex(o=>o.id===this._floorId),n=t+e;if(t<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[t],i.floors[n]]=[i.floors[n],i.floors[t]],this.setDoc(i)}deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(n=>n.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this._roomId=null}deleteRoom(){let e=this._roomId;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((t,n)=>{let i=n.rooms.find(o=>o.id===e);n.rooms=n.rooms.filter(o=>o.id!==e),n.openings=n.openings.filter(o=>o.room_id!==e||o.wall),i&&(n.placements=n.placements.filter(o=>!Z([o.x,o.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=G("room");this.change((n,i)=>i.rooms.push({...structuredClone(e),id:t,points:e.points.map(([o,s])=>[x(o+.5),x(s+.5)])})),this._roomId=t}roofFixed(e){return!!e&&(!!e.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let e=[...this._doc.floors].sort((t,n)=>n.elevation-t.elevation);return e.length<2?w:g`<div class="fp3d-seg fp3d-dev-source">
      ${e.map(t=>g`<button aria-pressed=${t.id===this._floorId} @click=${()=>this._floorId=t.id}>${t.name}</button>`)}
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(e=>e.id===this._roofId):void 0}useRoofSections(e=!1){if(!this.isAdmin)return;let t=(this._doc.settings.roof.sections??[]).length>0;e&&t&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(e||!t)&&(n.settings.roof.sections=wd(n,()=>G("roof")))}),this._roofId=null)}addRoofSection(e,t){if(!this.isAdmin)return;let n=bd(this._doc,e[0],e[1],t[0],t[1]),i=Math.min(...this._doc.floors.map(d=>d.elevation)),o=n===null,s=x(n??i+2.4),a=o?6:this._doc.settings.roof.pitch||35,l={id:G("roof"),x0:x(e[0]),z0:x(e[1]),x1:x(t[0]),z1:x(t[1]),shape:o?"pent":"gable",axis:t[0]-e[0]>=t[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:o?.15:null,...o?{open:!0}:{}};this.change(d=>{d.settings.roof.type="custom",d.settings.roof.sections=[...d.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let e=this.floor,t=this._roofId;if(!e||!t||!this.isAdmin)return;let n=ud(e.rooms,e.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([o,s])=>[x(o),x(s)]);this.updateRoofSection({shape:"flat",points:i,...zs(i)})}addDormer(e){let t=this.roofSection;if(!t||!this.isAdmin)return;let n=md(t,e,G("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(e){let t=this._roofId;!t||!this.isAdmin||(e.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.sections?.find(o=>o.id===t);i&&Object.assign(i,e)}))}deleteRoofSection(){let e=this._roofId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.sections=(t.settings.roof.sections??[]).filter(n=>n.id!==e)),this._roofId=null)}duplicateRoofSection(){let e=this.roofSection;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:G("roof"),x0:x(e.x0+1),x1:x(e.x1+1),z0:x(e.z0+1),z1:x(e.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],t]),this._roofId=t.id}renderRoofSections(){let e=this._doc.settings.roof,t=e.type==="custom"?e.sections??[]:[];return T`<g class="fp3d-roof-layer">${t.map((n,i)=>{let o=n.id===this._roofId,s=it(n),a=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=fd(t,n),d=l?it(gd(l,n)):s,c=(a??[d.at(d.u0,0),d.at(d.u1,0),d.at(d.u1,d.w),d.at(d.u0,d.w)]).map(y=>this.toScreen(y)),h=(y,v)=>{let[b,$]=this.toScreen(y),[k,M]=this.toScreen(v);return T`<line x1=${b} y1=${$} x2=${k} y2=${M} />`},u=n.shape==="flat"||n.shape==="parapet"?null:Es(n,{u0:0,u1:0,a:0,b:0}),p=u?T`${u.ridges.map(([y,v])=>h(s.at(y[0],y[1]),s.at(v[0],v[1])))}`:w,[f,m]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),_=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(to(n),1)}`;return T`<g data-roof=${n.id} class=${`fp3d-roof-sec${o?" fp3d-roof-sel":""}`}>
          <polygon points=${c.map(y=>y.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${p}</g>
          <text x=${f} y=${m-14}>${_}</text>
        </g>
        ${o&&this.isAdmin&&!this.roofFixed(n)&&a?a.map((y,v)=>{let[b,$]=this.toScreen(y);return T`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${v}`}><circle cx=${b} cy=${$} r="16" class="fp3d-hit" /><circle cx=${b} cy=${$} r="6" /></g>`}):w}
        ${o&&this.isAdmin&&!this.roofFixed(n)&&!a?[[0,0],[1,0],[1,1],[0,1]].map(([y,v])=>{let[b,$]=this.toScreen([y?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),v?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return T`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${y}:${v}`}><circle cx=${b} cy=${$} r="16" class="fp3d-hit" /><circle cx=${b} cy=${$} r="6" /></g>`}):w}`})}</g>`}faceHit(e,t){return e.wall?{u:(t[0]-e.o[0])*e.eu[0]+(t[1]-e.o[2])*e.eu[2],s:Number.NaN}:io(e,t)}renderSolarFields(){let e=this._doc.settings.roof.solar??[];if(!e.length)return w;let t=_e(this._doc);return T`<g class="fp3d-solar-layer">${e.map(n=>{let i=Le(this._doc,n,t);if(!i||i.wall&&i.wall.floorId!==this._floorId||i.rail&&i.rail.floorId!==this._floorId)return w;let o=n.id===this._solarId,s=w;if(o&&i.unbounded&&this.isAdmin&&!n.locked){let[a,l]=li(i,n),d=(n.rotation??0)*Math.PI/180,c=.9+Math.max(...xt(i,n,!0).flatMap(m=>m.corners.map(_=>Math.hypot(_[0]-a,_[2]-l))))*.5,[h,u]=this.toScreen([a,l]),[p,f]=this.toScreen([a+Math.sin(d)*c,l-Math.cos(d)*c]);s=T`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${h} y1=${u} x2=${p} y2=${f} />
          <circle cx=${p} cy=${f} r="16" class="fp3d-hit" />
          <circle cx=${p} cy=${f} r="8" />
          <path d="M${p-4} ${f-1}a4 4 0 1 1 2 3.5" />
        </g>`}return T`<g data-solar=${n.id} class=${`fp3d-solar${o?" fp3d-solar-sel":""}${o&&this._solarPick?" fp3d-solar-pick":""}`}>${xt(i,n,o).map(a=>{let l=i.rail?.3:i.wall?Math.max(.3,...a.corners.map(c=>(c[0]-i.o[0])*i.n[0]+(c[2]-i.o[2])*i.n[2])):0,d=i.wall||i.rail?[a.corners[0],a.corners[1]].flatMap((c,h)=>{let u=[c[0],c[2]],p=[c[0]+i.n[0]*l,c[2]+i.n[2]*l];return h===0?[u,p]:[p,u]}):a.corners.map(c=>[c[0],c[2]]);return T`<polygon data-cell=${a.cell} class=${a.skipped?"fp3d-solar-off":""} points=${d.map(c=>this.toScreen(c).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let e=this._doc.settings.roof.windows??[];if(!e.length)return w;let t=new Map(_e(this._doc).map(n=>[n.key,n]));return T`<g class="fp3d-roofwin-layer">${e.map(n=>{let i=t.get(n.face),o=i?Fd(i,n):null;return o?T`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${o.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:w})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let e=_e(this._doc).filter(i=>!i.flat),t=so(e,this._doc.settings.north??0)??_e(this._doc)[0];if(!t)return;let n=Ls(t,G("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(e){let t=this._roofWinId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.windows?.find(s=>s.id===t);if(!i)return;Object.assign(i,e);let o=_e(n).find(s=>s.key===i.face);o&&Object.assign(i,An(o,Fn(i)))})}deleteRoofWindow(){let e=this._roofWinId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.windows=(t.settings.roof.windows??[]).filter(n=>n.id!==e)),this._roofWinId=null)}renderRoofWindowList(){let e=this._doc.settings.roof.windows??[],t=new Map(_e(this._doc).map(n=>[n.key,n]));return g`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(t.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${e.length?g`<div class="fp3d-room-list">
            ${e.map((n,i)=>{let o=t.get(n.face);return g`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${o?this.faceLabel(o):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:w}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!t.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(e){let t=this.isAdmin,n=_e(this._doc),i=l=>this.updateRoofWindow(l),o=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===e.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>sr(l)||Te(l));return g`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${o}</h3>
          ${t?g`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:w}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!t} @change=${l=>{let d=n.find(c=>c.key===l.target.value);d&&i({...Ls(d,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name,float:e.float})}}>
              ${n.map(l=>g`<option value=${l.key} ?selected=${l.key===e.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),e.w??.78,l=>i({w:Math.max(.3,Math.min(4,x(l)))}),.01,.3)}
          ${this.len(this.t("height_m"),e.h??1.18,l=>i({h:Math.max(.3,Math.min(4,x(l)))}),.01,.3)}
          ${this.len(this.t("solar_u"),e.u,l=>i({u:x(l)}),.05)}
          ${this.len(this.t("solar_v"),e.v,l=>i({v:x(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),e.cover??null,void 0,s,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),e.contact??null,void 0,a,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),e.tilt??null,void 0,a,l=>i({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),e.window??null,void 0,s,l=>i({window:l==="none"?null:l}))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${e.name??""} ?disabled=${!t} maxlength="64" @change=${l=>i({name:l.target.value.trim()||null})}
          /></label>
        </div>
        <label class="fp3d-check"
          ><input type="checkbox" ?disabled=${!t} .checked=${!!e.float} @change=${l=>i({float:l.target.checked||void 0})} />
          ${this.t("roof_window_float")}</label
        >
        <p class="fp3d-sub">${this.t("roof_window_float_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${t?g`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:w}
      </section>`}cableSegments(){if(this.cableCache?.doc===this._doc)return this.cableCache.segs;let e=this._doc,t=new Map((e.settings.roof.solar??[]).map(o=>[o.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=Gd({building:e,consumers:[],summary:n,fieldPower:t}).filter(o=>o.key)}catch{i=[]}return this.cableCache={doc:e,segs:i},i}cableKeys(){let e=[...new Set(this.cableSegments().map(n=>n.key))],t=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return e.sort((n,i)=>t(n)-t(i)||n.localeCompare(i))}cableLabel(e){let t=a=>{let l=this._doc.floors.flatMap(d=>d.furniture).find(d=>d.id===a);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.type==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(e==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[o,s]=[e.slice(0,e.indexOf(":")),e.slice(e.indexOf(":")+1)];if(o==="solar"){let a=this._doc.settings.roof.solar??[],l=a.findIndex(c=>c.id===s);return`${a[l]?.name||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return o==="inv"?`${t(s)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${t(s)}`}layCable(e){if(!this.isAdmin||!this._floorId)return;let t=[];for(let o of this.cableSegments().filter(s=>s.key===e))for(let s of[o.a,o.b]){let a=[x(s[0]),x(s[2])],l=t[t.length-1];(!l||Math.hypot(l[0]-a[0],l[1]-a[1])>.05)&&t.push(a)}let n=t.length>2?t.slice(1,-1):t,i=this._floorId;this.change(o=>{o.settings.roof.cables=[...(o.settings.roof.cables??[]).filter(s=>s.id!==e),{id:e,floor_id:i,points:n.length?n:[t[0]??[0,0]],height:.03}]}),this._cableId=e}renderCables(){if(!ce("energy_pro"))return w;let e=this.cableSegments();if(!e.length)return w;let t=e.filter(s=>s.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,o=[...new Set(e.map(s=>s.key))];return T`<g class="fp3d-cable-layer">${o.map(s=>{let a=n.find(_=>_.id===s),l=`fp3d-cable fp3d-cable-${s.split(":")[0]}${a?" fp3d-cable-laid":""}${s===i?" fp3d-cable-sel":""}`,d=e.filter(_=>_.key===s),c=t.filter(_=>_.key===s).map(_=>{let y=this.toScreen([_.a[0],_.a[2]]),v=this.toScreen([_.b[0],_.b[2]]);return T`<line x1=${y[0]} y1=${y[1]} x2=${v[0]} y2=${v[1]} />`});if(!(a&&s===i&&a.floor_id===this._floorId&&!a.locked))return c.length?T`<g class=${l} data-cable=${s}><g class="fp3d-cable-hit">${c}</g>${c}</g>`:w;let h=d[0],u=d[d.length-1],p=[this.toScreen([h.a[0],h.a[2]]),...a.points.map(_=>this.toScreen(_)),this.toScreen([u.b[0],u.b[2]])],f=p.slice(0,-1).map((_,y)=>T`<line class="fp3d-cable-piece" data-cable-line=${s} data-cable-seg=${y} x1=${_[0]} y1=${_[1]} x2=${p[y+1][0]} y2=${p[y+1][1]} />`),m=a.points.map((_,y)=>{let v=this.toScreen(_);return T`<g class="fp3d-vertex" data-cable-pt=${`${s}:${y}`}><circle cx=${v[0]} cy=${v[1]} r="16" class="fp3d-hit" /><circle cx=${v[0]} cy=${v[1]} r="6" /></g>`});return T`<g class=${l} data-cable=${s}>${c}${f}${m}</g>`})}</g>`}renderCableSettings(){let e=this.cableKeys();if(!e.length)return w;let t=this.isAdmin,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(o=>o.id===this._cableId):void 0;return g`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${e.map(o=>g`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${o===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=o===this._cableId?null:o;let s=n.find(a=>a.id===o);this._cableId&&s&&this._doc.floors.some(a=>a.id===s.floor_id)&&(this._floorId=s.floor_id)}}
            >
              <span>${this.cableLabel(o)}${n.some(s=>s.id===o)?g` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:w}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?g`<div class="fp3d-actions">
              ${i?g`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!t} @click=${()=>this.change(o=>{let s=o.settings.roof.cables?.find(a=>a.id===i.id);s&&(s.locked=!s.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(o=>o.settings.roof.cables=(o.settings.roof.cables??[]).filter(s=>s.id!==this._cableId))}>${this.t("cable_auto")}</button>`:g`<button class="fp3d-btn fp3d-primary" ?disabled=${!t||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?g`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),i.height,o=>this.change(s=>{let a=s.settings.roof.cables?.find(l=>l.id===i.id);a&&(a.height=Math.min(30,Math.max(0,x(o))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:this._doc.floors.find(o=>o.id===i.floor_id)?.name??""})}</p>`:w}`:w}
    </section>`}renderEnergyMarkers(){let e=this.floor;if(!e)return w;let t={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,i=ce("energy_pro")&&n?.place==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return T`<g class="fp3d-energy-markers">${i?T`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:w}${e.furniture.filter(o=>vt.includes(o.type)).map(o=>{let[s,a]=this.toScreen([o.x,o.z]),l=o.id===this._furnitureId;return T`<g data-energy-device=${o.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${s} cy=${a} r="17" />
          <text x=${s} y=${a+6} class="fp3d-energy-icon">${t[o.type]??"\u26A1"}</text>
          ${l?T`<text x=${s} y=${a+32} class="fp3d-energy-name">${this.t(`furn_${o.type}`)}</text>`:w}
          <title>${this.t(`furn_${o.type}`)}</title>
        </g>`})}</g>`}railPointIds(e,t){let n=$n(t,()=>G("railpt"));if(t.point_ids===n)return n;let i=`${e.id}:${t.id}`,o=JSON.stringify(t.points),s=this.railPointIdCache.get(i);return s?.points===o?s.ids:(this.railPointIdCache.set(i,{points:o,ids:n}),n)}railFacesForEditing(e,t){let n={...e,floors:e.floors.map(i=>({...i,outdoor:(i.outdoor??[]).map(o=>{if(o.type!=="balcony")return o;let s=this.railPointIds(i,o);return o.point_ids===s?o:{...o,point_ids:s}})}))};return Lt(n,t)}mountSolarOnRail(e,t,n,i,o){let s=n.rail;if(!s)return null;let a=e.floors.find(f=>f.id===s.floorId),l=a?.outdoor.find(f=>f.id===s.balconyId&&f.type==="balcony");if(!a||!l)return null;let d=this.railPointIds(a,l);if(!d.includes(s.pointAId)||!d.includes(s.pointBId))return null;let c=l.point_ids;l.point_ids=d;let h=Lt(e,s.floorId).find(f=>f.rail?.balconyId===s.balconyId&&f.rail.pointAId===s.pointAId&&f.rail.pointBId===s.pointBId),u=(f,m)=>f.length===m.length&&f.every((_,y)=>Math.abs(_-(m[y]??1/0))<1e-6),p=h&&h.lu===n.lu&&h.rail?.height===s.height&&u(h.o,n.o)&&u(h.eu,n.eu)&&u(h.n,n.n);return!h||!p?(c?l.point_ids=c:delete l.point_ids,null):Pd(h,t,{floor_id:s.floorId,balcony_id:s.balconyId,point_a_id:s.pointAId,point_b_id:s.pointBId},i,o)}missingSolarFace(e){return this.t(e.balcony_mount?"solar_rail_missing":"solar_face_gone")}faceLabel(e){if(e.key===Ht)return this.t("solar_ground");if(e.rail){let o=this._doc.floors.find(u=>u.id===e.rail.floorId),s=o?.outdoor.find(u=>u.id===e.rail.balconyId),a=o&&s?this.railPointIds(o,s):[],l=a.indexOf(e.rail.pointAId),d=a.indexOf(e.rail.pointBId),c=o?o.outdoor.filter(u=>u.type==="balcony").findIndex(u=>u.id===e.rail.balconyId)+1:1,h=l>=0&&d>=0?`${l+1}\u2013${d+1}`:`${e.rail.pointAId}\u2013${e.rail.pointBId}`;return this.t("solar_rail_face",{floor:o?.name??e.rail.floorId,balcony:c,edge:h})}if(e.wall){let{floorId:o,room:s,edge:a,free:l}=e.wall,d=this._doc.floors.find(u=>u.id===o),c=d?.rooms.find(u=>u.id===s),h=l?this.t("solar_wall_free"):c?`${c.name}${a!=null?` ${a+1}\u2013${(a+1)%c.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${d?.name??""} \xB7 ${h?`${h} \xB7 `:""}${this.t(`compass_${Hs(e,this._doc.settings.north??0)}`)} \xB7 ${this.m(e.lu,2)}`}let t=this._doc.settings.roof.sections??[],n=e.section?this.t("solar_section",{n:t.findIndex(o=>o.id===e.section)+1}):this.t("solar_main");if(e.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let i=e.side==="c"||e.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${Hs(e,this._doc.settings.north??0)}`)} \xB7 ${Math.round(e.pitch)}\xB0${i}`}addSolarField(){if(!this.isAdmin)return;let e=_e(this._doc),t=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,i=so(e.filter(s=>!t.has(s.key)),n)??so(e,n);if(!i)return;let o=oo(i,G("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],o]),this._solarId=o.id,this._roofId=null}selectSolar(e){this._solarId=e,this._roofId=null;let t=this._doc.settings.roof.solar?.find(n=>n.id===e);t?.balcony_mount?this._floorId=t.balcony_mount.floor_id:t?.face.startsWith("wall:")&&(this._floorId=t.face.split(":")[1])}addWallField(){if(!this.isAdmin)return;let e=this._floorId??this._doc.floors[0]?.id,t=e?xd(this._doc,G("pv"),e):null;t&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],t]),this._solarId=t.id)}addGroundField(){if(!this.isAdmin)return;let e=Is(this._doc,G("pv"));this.change(t=>t.settings.roof.solar=[...t.settings.roof.solar??[],e]),this._solarId=e.id}updateSolar(e){let t=this._solarId;!t||!this.isAdmin||(e.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.solar?.find(s=>s.id===t);if(!i)return;Object.assign(i,e);let o=Le(n,i);o&&Object.assign(i,An(o,i))}))}setSolarString(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof,o=i.solar?.find(a=>a.id===t);if(!o)return;if(e==="new"){let a=i.strings??[],l={id:G("str"),name:this.t("solar_string_n",{n:a.length+1}),entity:o.entity??null,inverter:null};i.strings=[...a,l],o.string=l.id}else o.string=e;let s=new Set((i.solar??[]).map(a=>a.string).filter(Boolean));i.strings=(i.strings??[]).filter(a=>s.has(a.id))})}updateSolarString(e){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isAdmin||this.change(i=>{let o=i.settings.roof.strings?.find(s=>s.id===n);o&&Object.assign(o,e)})}toggleSolarCell(e){this.updateSolarField(t=>{let n=new Set(t.skip??[]);n.has(e)?n.delete(e):n.add(e),t.skip=n.size?[...n].sort():null})}updateSolarField(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(o=>o.id===t);i&&e(i)})}deleteSolar(){let e=this._solarId;!e||!this.isAdmin||(this.change(t=>{let n=t.settings.roof;n.solar=(n.solar??[]).filter(o=>o.id!==e);let i=new Set(n.solar.map(o=>o.string).filter(Boolean));n.strings=(n.strings??[]).filter(o=>i.has(o.id))}),this._solarId=null)}renderSolarList(){let e=this._doc.settings.roof.solar??[],t=_e(this._doc),n=ot(this._doc),i=this.railFacesForEditing(this._doc),o=new Map(e.map(a=>[a.id,Le(this._doc,a,t)])),s=this.isAdmin;return g`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(t.length||n.length||i.length?"solar_hint":"solar_no_roof")}</p>
      ${e.length?g`<div class="fp3d-room-list">
            ${e.map((a,l)=>{let d=o.get(a.id),c=d?xt(d,a).length:0;return g`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(a.id)}
                >
                  <span>${a.name||`${this.t("solar_field")} ${l+1}`} · ${d?this.faceLabel(d):this.missingSolarFace(a)} · ${this.t("solar_summary",{n:c,kwp:Ge(this.hass,c*(a.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:w}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!s||!t.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!s} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!s||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?g`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(a=>{let l=e.filter(u=>u.string===a.id),d=l.map(u=>o.get(u.id)?xt(o.get(u.id),u).length:0),c=d.reduce((u,p)=>u+p,0),h=l.reduce((u,p,f)=>u+d[f]*(p.wp??400)/1e3,0);return g`<p class="fp3d-sub">🔗 <b>${a.name}</b> · ${this.t("solar_string_sum",{fields:l.length,n:c,kwp:Ge(this.hass,h,1)})}</p>`})}`:w}
    </section>`}renderSolarForm(e){let t=this.isAdmin,n=_e(this._doc),i=ot(this._doc),o=this.railFacesForEditing(this._doc),s=Le(this._doc,e,n),a=e.face===Ht,l=s?xt(s,e).length:0,d=ri(e),c=d.reduce((f,m)=>f+m,0)-(e.skip?.length??0),h=this.entityOptions(f=>this.isPowerSensor(f)),u=f=>this.updateSolar(f),p=(this._doc.settings.roof.solar??[]).findIndex(f=>f.id===e.id)+1;return g`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${e.name||`${this.t("solar_field")} ${p}`}</h3>
          ${t?g`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:w}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!t}
              .value=${e.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${f=>u({name:f.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!t}
              @change=${f=>{let m=f.target.value,_={portrait:e.portrait,look:e.look,name:e.name,string:e.string,entity:e.entity,module_w:e.module_w,module_h:e.module_h,wp:e.wp};if(m===Ht){u({...Is(this._doc,e.id),..._,rows:e.rows,cols:e.cols,balcony_mount:null});return}let y=o.find($=>$.key===m);if(y){let[$]=$t(y,e),k=e.balcony_mount?e.v:.03;this.change(M=>{let S=M.settings.roof.solar?.find(W=>W.id===e.id);if(!S)return;let A=this.mountSolarOnRail(M,S,y,(y.lu-$)/2,k);A&&Object.assign(S,A)});return}let v=n.find($=>$.key===m);v&&u(Ws(v,{...e,..._}));let b=i.find($=>$.key===m);b&&u(Ws(b,{...e,..._,rows:1}))}}
            >
              ${s?w:g`<option value=${e.balcony_mount?`missing:${e.balcony_mount.point_a_id}:${e.balcony_mount.point_b_id}`:e.face} selected>${this.missingSolarFace(e)}</option>`}
              ${n.map(f=>g`<option value=${f.key} ?selected=${f.key===e.face}>${this.faceLabel(f)}</option>`)}
              ${o.map(f=>g`<option value=${f.key} ?selected=${f.key===e.face}>${this.faceLabel(f)}</option>`)}
              <option value=${Ht} ?selected=${a}>${this.t("solar_ground")}</option>
              ${i.map(f=>g`<option value=${f.key} ?selected=${f.key===e.face}>${this.faceLabel(f)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),d.length,f=>{let m=Math.max(1,Math.min(40,Math.round(f)));u(e.layout?.length?{layout:Array.from({length:m},(_,y)=>e.layout[y]??e.layout[e.layout.length-1]),rows:m}:{rows:m})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!t}
              .value=${e.layout?.length?e.layout.join(", "):String(e.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${f=>{let m=f.target.value.split(/[,;\s]+/).map(_=>parseInt(_,10)).filter(_=>Number.isFinite(_)&&_>=0);m.length&&(m.length===1?u({cols:Math.max(1,Math.min(60,m[0])),layout:null,skip:null}):u({layout:m.slice(0,40).map(_=>Math.min(60,_)),rows:Math.min(40,m.length),cols:Math.max(1,...m),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${s&&!s.unbounded?g`${this.t(s.rail?"solar_rail_size":"solar_face_size",{w:Ge(this.hass,s.lu,1),h:Ge(this.hass,s.rail?s.rail.height:s.ls,1)})} · `:w}${this.t("solar_cols_hint")}
        </p>
        ${e.balcony_mount&&!s?g`<p class="fp3d-sub" role="status">${this.t("solar_rail_missing")}</p>`:w}
        ${s?.rail&&$t(s,e)[0]>s.lu?g`<p class="fp3d-sub" role="status">${this.t("solar_rail_overhang")}</p>`:w}
        ${e.layout?.length&&new Set(e.layout).size>1?g`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(f=>g`<button aria-pressed=${(e.align??"left")===f} ?disabled=${!t} @click=${()=>u({align:f})}>${this.t(`solar_align_${f}`)}</button>`)}
            </div>`:w}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.portrait!==!1} ?disabled=${!t} @click=${()=>u({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${e.portrait===!1} ?disabled=${!t} @click=${()=>u({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.look!=="blue"} ?disabled=${!t} @click=${()=>u({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${e.look==="blue"} ?disabled=${!t} @click=${()=>u({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.len(this.t("solar_module_w"),e.module_w??1.13,f=>u({module_w:Math.max(.3,Math.min(3,x(f)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),e.module_h??1.72,f=>u({module_h:Math.max(.3,Math.min(3,x(f)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),e.wp??400,f=>u({wp:Math.max(50,Math.min(1500,Math.round(f)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!t} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${e.skip?.length?g`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>u({skip:null})}>${this.t("solar_pick_all")}</button>`:w}
        </div>
        ${this._solarPick?g`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:w}
        <div class="fp3d-form">
          ${a?g`${this.len(this.t("solar_base"),e.base??0,f=>u({base:f>.001?Math.min(60,x(f)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),e.rotation??0,f=>u(ai(this._doc,e,f)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>u(ai(this._doc,e,(e.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>u(ai(this._doc,e,(e.rotation??0)+15))}>↻ 15°</button>
                </div>`:g`${this.len(this.t("solar_u"),e.u,f=>u({u:x(f)}),.05)} ${this.num(this.t(s?.rail?"solar_v_rail":s?.wall?"solar_v_wall":"solar_v"),e.v,f=>u({v:x(f)}),.05)}`}
          ${s?.wall?g`${this.num(this.t("solar_tilt_wall"),e.tilt??0,f=>u({tilt:Math.max(0,Math.min(90,Math.round(f)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${f=>u({flip:f.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:w}
          ${s?.rail?g`${this.num(this.t("solar_tilt_rail"),e.tilt??0,f=>u({tilt:Math.max(0,Math.min(90,Math.round(f)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${f=>u({flip:f.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:w}
          ${s?.flat?g`${this.num(this.t("solar_tilt"),e.tilt??15,f=>u({tilt:Math.max(0,Math.min(45,Math.round(f)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${f=>u({flip:f.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:w}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:l,kwp:Ge(this.hass,l*(e.wp??400)/1e3,1)})}${l<c?g` · <b>${this.t("solar_partial",{n:l,total:c})}</b>`:w}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!t} @change=${f=>{let m=f.target.value;this.setSolarString(m===""?null:m)}}>
              <option value="" ?selected=${!e.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(f=>g`<option value=${f.id} ?selected=${f.id===e.string}>${f.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let f=this._doc.settings.roof.strings?.find(v=>v.id===e.string);if(!f)return this.entitySelect(this.t("solar_entity"),e.entity??null,void 0,h,v=>u({entity:v==="none"?null:v}));let m=this.hass?vn(this.hass,this._doc.floors):null,_=v=>this._doc.floors.flatMap(b=>b.furniture.filter($=>$.type===v).map($=>({m:$,fl:b}))).map(({m:b,fl:$},k)=>{let M=m?.get(b.id)?.entity,S=b.name?.trim()||(M&&this.hass?ye(this.hass,M):"");return{id:b.id,label:`${S||`${this.t(`furn_${v}`)} ${k+1}`} \xB7 ${$.name}`}}),y=[..._("inverter"),..._("home_battery")];return g`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!t} .value=${f.name} @change=${v=>this.updateSolarString({name:v.target.value.trim()||f.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),f.entity??null,void 0,h,v=>this.updateSolarString({entity:v==="none"?null:v}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!t} @change=${v=>this.updateSolarString({inverter:v.target.value||null})}>
                  <option value="" ?selected=${!f.inverter}>${this.t(y.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${y.map(v=>g`<option value=${v.id} ?selected=${v.id===f.inverter}>${v.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${t?g`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!s} @click=${()=>s&&u({...oo(s,e.id),portrait:e.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:w}
      </section>`}renderRoofPanel(){let e=this._doc.settings.roof,t=this.isAdmin,n=e.type==="custom"?this.roofSection:void 0,i=this._roofWinId?e.windows?.find(s=>s.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let o=e.type==="custom"?e.sections??[]:[];return g`${this.renderRoofBasics()}
    <section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${e.type!=="custom"?g`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!t} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:g`<div class="fp3d-room-list">
              ${o.map((s,a)=>g`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=s.id}>
                    <span>${a+1} · ${s.dormer?this.t("roof_dormer"):this.t(`roof_shape_${s.shape}`)} · ${this.m(Math.abs(s.x1-s.x0),1)} × ${this.m(Math.abs(s.z1-s.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(to(s),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(s=>s.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){let e=this._solarId?this._doc.settings.roof.solar?.find(i=>i.id===this._solarId):void 0;if(e)return this.renderSolarForm(e);let t=this._furnitureId?this.floor?.furniture.find(i=>i.id===this._furnitureId&&vt.includes(i.type)):void 0;if(t)return g`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(t)}`;let n=ce("energy_pro");return g`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():w}${n?this.renderHologramSettings():w}${this.renderProCard()}`}renderHologramSettings(){let e=this._doc.settings.roof.solar??[],t=this.isAdmin,n=this._doc.settings.roof.hologram??Pi,i=n.place==="free",o=l=>this.change(d=>d.settings.roof.hologram={...d.settings.roof.hologram??Pi,...l}),s=(l,d)=>l.name||`${this.t("solar_field")} ${d+1}`,a=()=>{let l=-1/0,d=1/0,c=-1/0;for(let u of this._doc.floors)for(let p of u.rooms)for(let[f,m]of p.points)l=Math.max(l,f),d=Math.min(d,m),c=Math.max(c,m);let h=Number.isFinite(l);o({place:"free",x:n.x??(h?x(l+2):0),z:n.z??(h?x((d+c)/2):0),height:n.height??3})};return g`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!t} @change=${l=>l.target.value==="free"?a():o({place:"field"})}>
            <option value="field" ?selected=${!i}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${i}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${i?g`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,l=>o({x:x(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>o({z:x(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>o({height:Math.min(60,Math.max(0,x(l)))}),.25,0)}`:e.length?g`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!t} @change=${l=>o({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${e.map((l,d)=>g`<option value=${l.id} ?selected=${l.id===n.field}>${s(l,d)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>o({right:Math.min(30,Math.max(-30,x(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>o({up:Math.min(30,Math.max(-30,x(l)))}),.25)}`:g`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,l=>o({size:Math.min(3,Math.max(.3,x(l)))}),.1,.3)}
        ${this.num(this.t("holo_device_min_w"),n.device_min_w??0,l=>o({device_min_w:Math.max(0,Math.round(l))}),1,0)}
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_house_hint")}
          ><input type="checkbox" .checked=${n.device_house!==!1} ?disabled=${!t} @change=${l=>o({device_house:l.target.checked?void 0:!1})} />
          ${this.t("holo_device_house")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_room_hint")}
          ><input type="checkbox" .checked=${!!n.device_room} ?disabled=${!t} @change=${l=>o({device_room:l.target.checked||void 0})} />
          ${this.t("holo_device_room")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_plant_floor_hint")}
          ><input type="checkbox" .checked=${!!n.plant_floor} ?disabled=${!t} @change=${l=>o({plant_floor:l.target.checked||void 0})} />
          ${this.t("holo_plant_floor")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_mirror_hint")}
          ><input type="checkbox" .checked=${n.mirror!==!1} ?disabled=${!t} @change=${l=>o({mirror:l.target.checked?void 0:!1})} />
          ${this.t("holo_mirror")}</label
        >
      </div>
    </section>`}isPowerSensor(e){if(!Te(e))return!1;let t=this.hass?.states[e]?.attributes;return t?.device_class==="power"||t?.unit_of_measurement==="W"||t?.unit_of_measurement==="kW"}devicePower(e,t){return e.power&&e.power!=="none"?e.power:t.get(e.id)?.power??null}renderEnergyChecklist(){let e=this._doc,t=this.hass?vn(this.hass,e.floors):new Map,n=e.floors.flatMap(_=>_.furniture.map(y=>({m:y,fl:_}))),i=_=>n.filter(y=>y.m.type===_),o=_=>{this._floorId=_.fl.id,this._solarId=null,this.selectItem("furniture",_.m.id),this.showPoint(_.m.x,_.m.z)},s=e.settings.roof.solar??[],a=i("meter"),l=i("inverter"),d=i("home_battery"),c=i("grid_point"),h=!!e.energy.grid||a.some(_=>this.devicePower(_.m,t)),u=!!e.energy.solar||l.length>0&&l.every(_=>this.devicePower(_.m,t)),p=d.every(_=>this.devicePower(_.m,t)&&_.m.soc&&_.m.soc!=="none")||!!e.energy.battery,f=[{state:s.length?"ok":"todo",label:this.t(s.length?"chk_solar":"chk_solar_add"),action:s.length?()=>this._solarId=s[0].id:()=>this.addSolarField()},a.length?{state:h?"ok":"todo",label:this.t(h?"chk_meter":"chk_meter_sensor"),action:()=>o(a[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:u?"ok":"todo",label:this.t(u?"chk_inverter":"chk_inverter_sensor"),action:()=>o(l.find(_=>!this.devicePower(_.m,t))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},d.length?{state:p?"ok":"todo",label:this.t(p?"chk_battery":"chk_battery_sensor"),action:()=>o(d[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},c.length?{state:"ok",label:this.t("chk_grid"),action:()=>o(c[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")}],m=f.filter(_=>_.state==="ok").length;return g`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${m}/${f.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${f.map(_=>_.href?g`<a class="fp3d-chk fp3d-chk-${_.state}" href=${_.href} target="_blank" rel="noopener"><span>${_.state==="ok"?"\u2713":_.state==="todo"?"\u25CB":"\xB7"}</span>${_.label}</a>`:g`<button class="fp3d-chk fp3d-chk-${_.state}" ?disabled=${!this.isAdmin&&!!_.action&&_.state!=="ok"} @click=${_.action}><span>${_.state==="ok"?"\u2713":_.state==="todo"?"\u25CB":"\xB7"}</span>${_.label}</button>`)}
    </section>`}renderHelpLinks(){return g`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
        <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
      </div>
    </section>`}renderProCard(){let e=this.hass?.language;if(ce("energy_pro"))return g`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${Xt(e)} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return g`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${Xt(e)} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(e){let t=this.floor;if(!t||!this.isAdmin)return;if(e==="grid_point"){let v=Ks(this._doc),[b,$,k]=Ve(e),[M,S]=v?v.end:this.toWorld(this._size.w/2,this._size.h/2),A={id:G("furniture"),type:e,x:x(M),z:x(S),rotation:0,w:b,d:$,h:k,variant:null};this.change((W,E)=>E.furniture.push(A)),this.selectItem("furniture",A.id),this.showPoint(A.x,A.z);return}let n=v=>`${v.name} ${v.area_id&&this.hass?.areas?.[v.area_id]?.name||""} ${v.area_id??""}`.toLowerCase(),i=t.rooms.filter(v=>v.points.length>=3),o=v=>i.find(b=>v.test(n(b))),s=i.find(v=>t.furniture.some(b=>b.type==="parking"&&Z([b.x,b.z],v.points))),a=o(/garage|carport/)??s,l=o(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),d=o(/flur|diele|eingang|hall|entr|lobby/),c=(e==="wallbox"?a:e==="meter"?l??d??a:l??a)??this.room??i.sort((v,b)=>Math.abs(we(b.points))-Math.abs(we(v.points)))[0],[h,u,p]=Ve(e),[f,m]=c?Xe(c.points):this.toWorld(this._size.w/2,this._size.h/2);if(c){let[v,b]=Xe(c.points),$=null,k=new Set(t.openings.filter(A=>A.room_id===c.id).map(A=>A.edge)),M=c.points.some((A,W)=>!k.has(W));c.points.forEach((A,W)=>{if(M&&k.has(W))return;let E=c.points[(W+1)%c.points.length],D=Math.hypot(E[0]-A[0],E[1]-A[1]);if($&&D<=$.l)return;let z=(A[0]+E[0])/2,F=(A[1]+E[1])/2,H=-(E[1]-A[1])/D,R=(E[0]-A[0])/D;(v-z)*H+(b-F)*R<0&&([H,R]=[-H,-R]),$={mx:z,mz:F,nx:H,nz:R,l:D}});let S=$;S&&([f,m]=[S.mx+S.nx*(u/2+.25),S.mz+S.nz*(u/2+.25)])}let _={id:G("furniture"),type:e,x:x(f),z:x(m),rotation:0,w:h,d:u,h:p,variant:null},y=c?Qn({...t,furniture:[...t.furniture,_]},_,this._doc.settings.wall_interior):null;y&&Object.assign(_,{x:x(y.x),z:x(y.z),rotation:y.rotation}),this.change((v,b)=>b.furniture.push(_)),this.selectItem("furniture",_.id),this.showPoint(_.x,_.z)}renderEnergyDevices(){let e=this.isAdmin,t=this._doc.floors.flatMap(n=>n.furniture.filter(i=>vt.includes(i.type)).map(i=>({fl:n,m:i})));return g`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${t.length?g`<div class="fp3d-room-list">
            ${t.map(({fl:n,m:i})=>g`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${i.name||this.t(`furn_${i.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:w}
      <div class="fp3d-actions">
        ${vt.map(n=>g`<button
            class="fp3d-btn"
            ?disabled=${!e||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(e){let t=this.isAdmin,n=p=>this.updateRoofSection(p),i=e.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[o,s]=e.flip?[i[1],i[0]]:i,a=e.shape==="flat"||e.shape==="parapet",l=e.shape==="pent",d=p=>p.findIndex(f=>f.id===e.id)+1,c=(p,f,m,_=.05,y=0)=>this.len(p,f,v=>m(Math.max(y,x(v))),_,y),h=(p,f,m)=>this.num(p,f,_=>m(Math.max(0,x(_))),1,0),u=!!this._doc.settings.lock_plan;return g`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${e.dormer?this.t("roof_dormer"):this.t("roof_section")} ${d(this._doc.settings.roof.sections??[])}</h3>
          ${t?u?g`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:g`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!e.locked})}>
                  ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:w}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!t} @change=${p=>n({shape:p.target.value})}>
            ${ra.map(p=>g`<option value=${p} ?selected=${e.shape===p}>${this.t(`roof_shape_${p}`)}</option>`)}
          </select>
        </label>
        ${a?w:g`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${e.axis==="x"} ?disabled=${!t} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${e.axis==="z"} ?disabled=${!t} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${p=>n({open:p.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${a?c(this.t("roof_height"),e.eave_a,p=>n({eave_a:p,eave_b:p})):g`${c(`${this.t("roof_eave")} ${l?"":o}`,e.eave_a,p=>n({eave_a:p}))}
              ${l?w:c(`${this.t("roof_eave")} ${s}`,e.eave_b,p=>n({eave_b:p}))}
              ${h(`${this.t("roof_pitch_short")} ${l?"":o}`,e.pitch_a,p=>n({pitch_a:Math.min(75,p)}))}
              ${l?w:h(`${this.t("roof_pitch_short")} ${s}`,e.pitch_b,p=>n({pitch_b:Math.min(75,p)}))}`}
          ${c(this.t("roof_base"),e.base,p=>n({base:p}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!t}
              @change=${p=>{let f=this._doc.floors.find(y=>y.id===p.target.value);if(!f)return;let m=x(f.elevation+f.height),_=m-e.base;n({base:m,eave_a:x(e.eave_a+_),eave_b:x(e.eave_b+_)})}}
            >
              ${[...this._doc.floors].filter(p=>p.rooms.length).sort((p,f)=>f.elevation-p.elevation).map(p=>g`<option value=${p.id} ?selected=${vd(this._doc,e)?.id===p.id}>${p.name}</option>`)}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${c(this.t("roof_overhang"),e.overhang??this._doc.settings.roof.overhang,p=>n({overhang:Math.min(2,p)}),.05,0)}
        </div>
        ${a&&t?g`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${e.points?g`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:w}
            </div>
            <p class="fp3d-sub">${this.t(e.points?"roof_points_hint":"roof_outline_hint")}</p>`:w}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(to(e),2)} · ${this.t("roof_section_hint")}</p>
        ${t?g`<div class="fp3d-actions">
              ${a?w:g`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!e.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!a&&!e.dormer&&!e.open?g`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${o}</button>
                  ${l?w:g`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${s}</button>`}`:w}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:w}
      </section>`}fixItem(e,t,n){if(e)switch(t){case"room":return e.rooms.find(i=>i.id===n);case"opening":return e.openings.find(i=>i.id===n);case"furniture":return e.furniture.find(i=>i.id===n);case"device":return e.placements.find(i=>i.entity_id===n);case"wall":return(e.walls??[]).find(i=>i.id===n);case"outdoor":return e.outdoor.find(i=>i.id===n)}}isFixedItem(e,t){return Ho(this.fixItem(this.floor,e,t),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,t){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let n=!this.isFixedItem(e,t);n||(this._fixedHint=!1),this.change((i,o)=>{let s=this.fixItem(o,e,t);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(e=>e.settings.lock_plan=!e.settings.lock_plan))}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(e,t){return!this.isFixedItem(e,t)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this.rightPress||performance.now()-this.rightUp<600)&&(this._tool!=="select"&&this._tool!=="furniture"||(this.drag=null,this.openContext(e.target,this.localPoint(e))))}openContext(e,t){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...t),i=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,o=null,s=i("data-device"),a=i("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),d=i("data-free-wall"),c=i("data-outdoor")?this.outdoorAt(n)??i("data-outdoor"):null,h=i("data-room")??this.roomAt(n);if(s?o=["device",s]:a?o=["opening",a]:l?o=["furniture",l]:d?o=["wall",d]:c&&!h?o=["outdoor",c]:h&&(o=["room",h]),!o){this._ctx=null;return}let[u,p]=o;this.selectItem(u,p),(u==="opening"||u==="furniture")&&(this._roomId=this._roomId??h),this._ctx={x:t[0],y:t[1],kind:u,id:p}}deleteItem(e,t){if(e==="device"){if(!this.confirmFixedDelete(e,t))return;this.removeDevice(t),this._deviceId=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return w;let t=this.isFixedItem(e.kind,e.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(e.x,(n?.clientWidth??800)-190)),o=Math.max(4,Math.min(e.y,(n?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return g`<div class="fp3d-ctx" style=${`left:${i}px;top:${o}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?g`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(e.kind,e.id))}>${t?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:g`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?g`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:w}
      ${e.kind==="furniture"?g`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${s(()=>{let a=this.floor?.furniture.find(l=>l.id===e.id);a&&this.openWallViewFor(a)})}>▦ ${this.t("wall_view")}</button>`:w}
      <button class="fp3d-ctx-danger" @click=${s(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,t){if(!this.isAdmin)return w;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?g`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:w;let n=this.isFixedItem(e,t);return g`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,t)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(e,t){if(this._notice=null,t&&(this._sideOpen=!0),this._outdoorId=e==="outdoor"?t:null,this._wallId=e==="wall"?t:null,this._edgeHi=null,(e==="outdoor"||e==="wall")&&(this._roomId=null),(e!=="room"||t!==this._roomId)&&(this._vertex=null),this._roomId=e==="room"?t:this._roomId,this._openingId=e==="opening"?t:null,this._furnitureId=e==="furniture"?t:null,this._multi=[],this._single=!1,this._deviceId=e==="device"?t:null,e==="device"&&t){let n=this.floor?.placements.find(i=>i.entity_id===t);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}e==="opening"&&t&&(this._roomId=this.floor?.openings.find(n=>n.id===t)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(e,t,n,i,o){let s=e.points[t],a=e.points[(t+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,d=((n[0]-s[0])*(a[0]-s[0])+(n[1]-s[1])*(a[1]-s[1]))/l,c=o?.01:this._doc.settings.grid,h=Math.min(i,l)/2;return x(Math.min(l-h,Math.max(h,Math.round(d/c)*c)))}placeOpening(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let m of n.walls??[]){let _=kn({room_id:"",edge:0,wall:m.id},n.rooms,n.walls??[]);if(!_)continue;let[y,v]=this.toScreen(m.a),[b,$]=this.toScreen(m.b),k=(b-y)**2+($-v)**2||1,M=Math.min(1,Math.max(0,((t[0]-y)*(b-y)+(t[1]-v)*($-v))/k)),S=Math.hypot(t[0]-y-(b-y)*M,t[1]-v-($-v)*M),A=[(m.a[0]+m.b[0])/2,(m.a[1]+m.b[1])/2],W=n.rooms.find(E=>E.points.length>=3&&Z(A,E.points));S<yo*2.2&&(!i||S-1<i.d)&&(i={room:_.room,edge:0,d:S-1,wall:m.id,roomId:W?.id??m.id})}for(let m of n.rooms)for(let _=0;_<m.points.length;_++){let[y,v]=this.toScreen(m.points[_]),[b,$]=this.toScreen(m.points[(_+1)%m.points.length]),k=(b-y)**2+($-v)**2||1,M=Math.min(1,Math.max(0,((t[0]-y)*(b-y)+(t[1]-v)*($-v))/k)),S=Math.hypot(t[0]-y-(b-y)*M,t[1]-v-($-v)*M),A=S-(m.id===this._roomId?.5:0);S<yo*2.2&&(!i||A<i.d)&&(i={room:m,edge:_,d:A})}if(!i)return!1;let{room:o,edge:s,wall:a}=i,l=o.points[s],d=o.points[(s+1)%o.points.length],c=Math.hypot(d[0]-l[0],d[1]-l[1]),h=Wi[e],u=h.type,p=x(Math.min(h.width,Math.max(.3,c-.1))),f={id:G("opening"),room_id:i.roomId??o.id,edge:s,...a?{wall:a}:{},offset:this.offsetOnEdge(o,s,this.toWorld(...t),p,!1),width:p,type:u,sill:h.sill,height:h.height,hinge:"left",leaves:h.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((m,_)=>_.openings.push(f)),this.selectItem("opening",f.id),!0}setOpeningPreset(e,t){let n=Wi[t];this._openingPreset=t;let i=Hi(e)===t,o="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:o,...i?{}:{width:n.width}})}updateOpening(e){let t=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(o=>o.id===t),e))}deleteOpening(){let e=this._openingId;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((t,n)=>n.openings=n.openings.filter(i=>i.id!==e)),this._openingId=null)}glowScaleField(e,t){return g`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((e??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;t(Math.abs(i-1)<.001?null:i)}}
    /></label>`}typeChoices(e){let t=new Set(Object.values(Ii).flat());return(ce("fridge_smart")||ce("household"))&&t.add("fridge_smart"),Fi.filter(n=>t.has(n)||n===e)}furnitureFor(e){let t=se(e),n=this.hass?.language??"en",i=[...Fi.map(a=>({type:a,label:this.t(`furn_${a}`)})),...(this.packs??[]).flatMap(a=>a.items.map(l=>({type:jt(a.id,l.id),label:`${We(l,n)} \xB7 ${He(a,n)}`})))],o=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,s=a=>t==="light"?Be(a):t==="climate"?a==="radiator"||a==="ac_unit":e.startsWith("vacuum.")?bt(a):t==="media"?ji(a)||fn(a)&&o.test(a):fn(a)&&!Be(a);return i.filter(a=>s(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}vehicleToSpot(e){if(!this.isAdmin)return;let[t,n,i]=Ve("parking"),o={id:G("furniture"),type:"parking",x:e.x,z:e.z,rotation:e.rotation,w:Math.max(t,x(e.w+.5)),d:Math.max(n,x(e.d+.4)),h:i,variant:null,vehicle:e.type,...e.name?{name:e.name}:{}};this.change((s,a)=>{a.furniture=a.furniture.filter(l=>l.id!==e.id),a.furniture.push(o)}),this.selectItem("furniture",o.id)}deviceToFurniture(e,t){if(!this.isAdmin)return;let[n,i,o]=Ve(t),s={id:G("furniture"),type:t,x:e.x,z:e.z,rotation:e.rotation??0,w:n,d:i,h:o,variant:null,entity:e.entity_id,name:e.name??null,...e.locked?{locked:!0}:{}};this.change((a,l)=>{l.placements=l.placements.filter(d=>d.entity_id!==e.entity_id),l.furniture.push(s)}),this._deviceId=null,this.selectItem("furniture",s.id)}furnitureToDevice(e){let t=e.entity;if(!this.isAdmin||!t||t==="none")return;let n={entity_id:t,x:e.x,z:e.z,y:null,rotation:e.rotation,...e.name?{name:e.name}:{},...t.startsWith("light.")?{pin:!0}:{}};this.change((i,o)=>{o.furniture=o.furniture.filter(s=>s.id!==e.id),o.placements.some(s=>s.entity_id===t)||o.placements.push(n)}),this._furnitureId=null,this.selectItem("device",t)}renderAsFurniture(e){if(!this.isAdmin)return w;let t=this.furnitureFor(e.entity_id);return t.length?g`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let i=n.target.value;i&&this.deviceToFurniture(e,i)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${t.map(n=>g`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:w}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let[n,i,o]=Ve(e),s=this._doc.floors.filter(p=>p.elevation>t.elevation).sort((p,f)=>p.elevation-f.elevation)[0],a=jo.has(e)?x(s?s.elevation-t.elevation:t.height+.25):o,l=this.room,[d,c]=l?Xe(l.points):this.toWorld(this._size.w/2,this._size.h/2),h=0;if(e==="parking"&&l){let p=t.openings.find(y=>y.room_id===l.id&&y.type==="garage"),f=p?l.points[p.edge]:null,m=p?l.points[(p.edge+1)%l.points.length]:null,_=ze(l.points);h=(f&&m?Math.abs(m[1]-f[1])>Math.abs(m[0]-f[0]):_.x1-_.x0>_.z1-_.z0)?90:0}let u={id:G("furniture"),type:e,x:x(d),z:x(c),rotation:h,w:n,d:i,h:a,variant:null};this.change((p,f)=>f.furniture.push(u)),this.selectItem("furniture",u.id),this.showPoint(u.x,u.z)}snapToWall(e){return this.floor?Qn(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(o=>o.id===t),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}rotateFurniture(e){let t=this.furnitureItem;if(!t||!this.isAdmin)return;if(this.selection().length>1)return this.rotateSelection(e);this.updateFurniture({rotation:((t.rotation+e)%360+360)%360})}deleteFurniture(){let e=this._furnitureId;if(!e||!this.isAdmin)return;let t=this.selection();if(t.length>1){let n=t.some(o=>this.isFixedItem("furniture",o));if(!confirm(this.t(n?"block_delete_fixed":"block_delete",{n:t.length})))return;let i=new Set(t);this.change((o,s)=>s.furniture=s.furniture.filter(a=>!i.has(a.id))),this.selectItem("room",this._roomId);return}this.confirmFixedDelete("furniture",e)&&(this.change((n,i)=>i.furniture=i.furniture.filter(o=>o.id!==e)),this._furnitureId=null)}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t=this.selection();if(t.length>1){let i=this.floor.furniture.filter(a=>t.includes(a.id)),o=new Map,s=i.map(a=>({...structuredClone(a),id:G("furniture"),x:x(a.x+.3),z:x(a.z+.3),group:a.group?o.get(a.group)??o.set(a.group,G("block")).get(a.group):null,locked:null}));this.change((a,l)=>l.furniture.push(...s)),this.setMulti(s.map(a=>a.id));return}let n={...structuredClone(e),id:G("furniture"),x:x(e.x+.3),z:x(e.z+.3),group:this._single?e.group:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}selection(){if(this._multi.length)return this._multi;let e=this.furnitureItem;return e?e.group&&!this._single?(this.floor?.furniture??[]).filter(t=>t.group===e.group).map(t=>t.id):[e.id]:[]}withGroups(e){let t=new Set((this.floor?.furniture??[]).filter(n=>e.includes(n.id)&&n.group).map(n=>n.group));return[...new Set([...e,...(this.floor?.furniture??[]).filter(n=>n.group&&t.has(n.group)).map(n=>n.id)])]}setMulti(e){if(!e.length)return this.selectItem("room",this._roomId);this.selectItem("furniture",e[0]);let t=this.selection();e.length>1&&!(e.length===t.length&&e.every(n=>t.includes(n)))&&(this._multi=e)}toggleMulti(e){let t=this._furnitureId?this.selection():[],n=this.withGroups([e]),i=t.includes(e)?t.filter(o=>!n.includes(o)):[...new Set([...t,...n])];this.setMulti(i)}selectionCentre(e){let t=(this.floor?.furniture??[]).filter(o=>e.includes(o.id)),n=t.map(o=>o.x),i=t.map(o=>o.z);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...i)+Math.max(...i))/2]}rotateSelection(e){let t=this.selection();if(t.some(d=>this.isFixedItem("furniture",d))){this._fixedHint=!0;return}let[n,i]=this.selectionCentre(t),o=e*Math.PI/180,s=Math.round(Math.cos(o)*1e6)/1e6,a=Math.round(Math.sin(o)*1e6)/1e6,l=new Set(t);this.change((d,c)=>{for(let h of c.furniture){if(!l.has(h.id))continue;let u=h.x-n,p=h.z-i;Object.assign(h,{x:x(n+u*s-p*a),z:x(i+u*a+p*s),rotation:((h.rotation+e)%360+360)%360})}})}groupSelection(){let e=new Set(this.selection());if(e.size<2)return;let t=G("block");this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=t)}),this._multi=[],this._single=!1}ungroupSelection(){let e=this.selection(),t=new Set(e);this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.group=null)}),e.length>1&&(this._multi=e)}lockSelection(e){let t=new Set(this.selection());this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.locked=e||null)})}placeDevices(e,t){let n=t??this.room;if(!n||!e.length||!this.isAdmin)return;let i=new Set(e);this.change((o,s)=>{for(let l of o.floors)l.placements=l.placements.filter(d=>!i.has(d.entity_id)),l.furniture=l.furniture.filter(d=>!(Be(d.type)&&d.entity&&i.has(d.entity)));let a=[...s.placements.map(l=>[l.x,l.z]),...s.furniture.filter(l=>Be(l.type)).map(l=>[l.x,l.z])];for(let l of Ya(n,e,a)){if(!l.entity_id.startsWith("light.")||n.outdoor){s.placements.push(l);continue}let[d,c,h]=dt.lamp_ceiling;s.furniture.push({id:G("furniture"),type:"lamp_ceiling",x:l.x,z:l.z,rotation:0,w:d,d:c,h,variant:null,entity:l.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(e){let t=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(o=>o.entity_id===t),e))}centreDevice(){let e=this.device,t=e?this.roomAt([e.x,e.z]):null,n=this.floor?.rooms.find(s=>s.id===t);if(!e||!n)return;let[i,o]=Xe(n.points);this.updateDevice({x:x(i),z:x(o)})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let n=t.placements.filter(h=>se(h.entity_id)==="light"&&(h.mount??"ceiling")==="ceiling"&&Z([h.x,h.z],e.points));if(n.length<2)return;let i=ze(e.points),o=i.x1-i.x0,s=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,s)))),l=Math.ceil(n.length/a),d=n.map((h,u)=>{let p=Math.floor(u/a),f=p===l-1?n.length-a*(l-1):a,m=u-p*a;return[x(i.x0+o/f*(m+.5)),x(i.z0+s/l*(p+.5))]}),c=n.map(h=>h.entity_id);this.change((h,u)=>{c.forEach((p,f)=>Object.assign(u.placements.find(m=>m.entity_id===p),{x:d[f][0],z:d[f][1]}))})}straightenFloor(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,fixed:n,profilesInvalidated:i}=$l(e.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((o,s)=>s.rooms=t),this._notice=i?`${this.t("straighten_done",{n})} ${this.t("wall_profile_invalidated")}`:this.t("straighten_done",{n})}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:n,profilesInvalidated:i}=yl(e.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let o=kl(n);this.change((a,l)=>{l.rooms=t,o&&(a.settings.wall_interior=o)});let s=o?this.t("gaps_closed_wall",{n:n.length,t:Ge(this.hass,o,2)}):this.t("gaps_closed",{n:n.length});this._notice=i?`${s} ${this.t("wall_profile_invalidated")}`:s}removeDevice(e){this.change(t=>{for(let n of t.floors)n.placements=n.placements.filter(i=>i.entity_id!==e),n.furniture=n.furniture.filter(i=>!(Be(i.type)&&i.entity===e))})}deleteVertex(e){let t=this.room;if(!t||t.points.length<=3)return;let n=t.points.length,i=(e-1+n)%n,o=!1;this.change((s,a)=>{let l=a.rooms.find(c=>c.id===t.id),d=dl(l.wall_profiles,l.points,e);o=d.invalidated,l.points.splice(e,1),d.profiles?l.wall_profiles=d.profiles:d.invalidated&&delete l.wall_profiles,l.wall_heights&&l.wall_heights.splice(e,1),l.wall_thickness&&l.wall_thickness.splice(e,1),l.wall_slopes&&(l.wall_slopes.splice(e,1),l.wall_slopes[(e-1+l.points.length)%l.points.length]=null,l.wall_slopes.every(c=>!c)&&(l.wall_slopes=void 0)),a.openings=a.openings.filter(c=>c.room_id!==t.id||c.wall||c.edge!==e&&c.edge!==i).map(c=>c.room_id===t.id&&!c.wall&&c.edge>e?{...c,edge:c.edge-1}:c)}),o&&(this._notice=this.t("wall_profile_invalidated")),this._vertex=null}shiftFloor(e,t){if(!this.isAdmin||!e&&!t)return;let n=o=>[x(o[0]+e),x(o[1]+t)],i=o=>{for(let s of o.rooms)s.points=s.points.map(n);for(let s of o.furniture)s.x=x(s.x+e),s.z=x(s.z+t);for(let s of o.placements)s.x=x(s.x+e),s.z=x(s.z+t);for(let s of o.outdoor)s.points=s.points.map(n);for(let s of o.walls??[])s.a=n(s.a),s.b=n(s.b);o.background&&(o.background.x=x(o.background.x+e),o.background.z=x(o.background.z+t))};this._shiftAll?this.change(o=>{for(let s of o.floors)i(s);this.moveHouseExtras(o,n)}):this.change((o,s)=>i(s)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(e,t){for(let i of e.settings.roof.sections??[]){let o=[t([i.x0,i.z0]),t([i.x1,i.z0]),t([i.x1,i.z1]),t([i.x0,i.z1])];i.x0=Math.min(...o.map(s=>s[0])),i.x1=Math.max(...o.map(s=>s[0])),i.z0=Math.min(...o.map(s=>s[1])),i.z1=Math.max(...o.map(s=>s[1])),i.points&&(i.points=i.points.map(t))}for(let i of e.settings.roof.cables??[])i.points=i.points.map(t);e.energy.meter&&([e.energy.meter.x,e.energy.meter.z]=t([e.energy.meter.x,e.energy.meter.z]));let n=e.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=t([n.x,n.z]))}turnFloor(){let e=this.floor;if(!e||!this.isAdmin)return;let t=(this._shiftAll?this._doc.floors:[e]).flatMap(d=>d.rooms.flatMap(c=>c.points));if(!t.length)return;let n=t.map(d=>d[0]),i=t.map(d=>d[1]),o=(Math.min(...n)+Math.max(...n))/2,s=(Math.min(...i)+Math.max(...i))/2,a=d=>[x(o-(d[1]-s)),x(s+(d[0]-o))],l=d=>{for(let c of d.rooms)c.points=c.points.map(a);for(let c of d.furniture)[c.x,c.z]=a([c.x,c.z]),c.rotation=(c.rotation+90)%360;for(let c of d.placements)[c.x,c.z]=a([c.x,c.z]),c.rotation=((c.rotation??0)+90)%360;for(let c of d.outdoor)c.points=c.points.map(a);for(let c of d.walls??[])c.a=a(c.a),c.b=a(c.b);d.background&&([d.background.x,d.background.z]=a([d.background.x,d.background.z]),d.background.rotation=((d.background.rotation??0)+90)%360)};this._shiftAll?this.change(d=>{for(let c of d.floors)l(c);this.moveHouseExtras(d,a)}):this.change((d,c)=>l(c))}updateFloor(e){this.change((t,n)=>Object.assign(n,e))}updateRoom(e){let t=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(o=>o.id===t),e))}setArea(e){let t=this.room;if(!t)return;let n=e?this.hass?.areas?.[e]:void 0,i=!t.name||/^(Raum|Room) \d+$/.test(t.name)||Object.values(this.hass?.areas??{}).some(o=>o.name===t.name);this.updateRoom({area_id:e||null,...n&&i?{name:n.name}:{}})}setRect(e,t){let n=this.room;if(!n||!Number.isFinite(t))return;let i=ze(n.points),{x0:o,z0:s,x1:a,z1:l}=i;e==="x"&&([o,a]=[t,t+(a-o)]),e==="z"&&([s,l]=[t,t+(l-s)]),e==="w"&&t>.05&&(a=o+t),e==="d"&&t>.05&&(l=s+t);let d=Ia(n.points,i,{x0:x(o),z0:x(s),x1:x(a),z1:x(l)}),c=Jt(n.wall_profiles,n.points,d);c.invalidated&&(this._notice=this.t("wall_profile_invalidated")),this.updateRoom({points:d,...c.profiles?{wall_profiles:c.profiles}:c.invalidated?{wall_profiles:void 0}:{}})}setPoint(e,t,n){let i=this.room;if(!i||!Number.isFinite(n))return;let o=i.points.map(a=>[...a]);o[e][t]=x(n);let s=Jt(i.wall_profiles,i.points,o);s.invalidated&&(this._notice=this.t("wall_profile_invalidated")),this.updateRoom({points:o,...s.profiles?{wall_profiles:s.profiles}:s.invalidated?{wall_profiles:void 0}:{}})}async loadImage(e){this.loadingImages.add(e);try{let t=await Do(this.hass,e),n=new Image;n.src=t,await n.decode(),this._images={...this._images,[e]:{url:t,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(e){let t=e.target,n=t.files?.[0];if(t.value="",!n)return;let i=await createImageBitmap(n),o=Math.min(1,2048/Math.max(i.width,i.height)),s=document.createElement("canvas");s.width=Math.round(i.width*o),s.height=Math.round(i.height*o),s.getContext("2d").drawImage(i,0,0,s.width,s.height);let a=s.toDataURL("image/jpeg",.85),l=G("img");await xi(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:s.height/s.width}};let d=this.floor?.rooms.length?ze(this.floor.rooms.flatMap(c=>c.points)):null;this.updateFloor({background:{image_id:l,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,x(d.x1-d.x0)):12,opacity:.5}})}selectFloor(e){this._floorId=e,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}renderFloorMenu(){let e=this._doc.floors,t=this.floor,n=this.isAdmin,i=this._toolMenu==="floor",o=()=>(this._toolMenu=null,this._floorMenu=!1);return g`<div class="fp3d-seg fp3d-seg-menu">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${i} @click=${()=>(this._toolMenu=i?null:"floor",this._floorMenu=!1,this._viewMenu=!1)}>
          <span class="fp3d-menu-label">${this.t("floor_label")}</span> ${t?.name??this.t("floors")} <span class="fp3d-caret">▾</span>
        </button>
        ${i?g`<div class="fp3d-menu-veil" @click=${o}></div>
              <div class="fp3d-menu" role="menu">
                ${[...e].reverse().map(s=>g`<button role="menuitem" class="fp3d-menu-item ${s.id===this._floorId?"fp3d-menu-on":""}" @click=${()=>(o(),this.selectFloor(s.id))}>
                    ${s.name}<span class="fp3d-menu-more">${s.id===this._floorId?"\u2713":""}</span>
                  </button>`)}
                ${n?g`<div class="fp3d-menu-sep"></div>
                      <button
                        role="menuitem"
                        class="fp3d-menu-item"
                        aria-expanded=${this.freeHaFloors.length?this._floorMenu:w}
                        @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:(o(),this.addFloor())}
                      >
                        ${this.t("add_floor")}${this.freeHaFloors.length?g`<span class="fp3d-menu-more">${this._floorMenu?"\u25BE":"\u25B8"}</span>`:w}
                      </button>
                      ${this._floorMenu?g`<div class="fp3d-menu-sub">
                            ${this.freeHaFloors.map(s=>g`<button class="fp3d-chip" @click=${()=>(o(),this.addFloor(s))}>${s.name}</button>`)}
                            <button class="fp3d-chip" @click=${()=>(o(),this.addFloor())}>${this.t("floor_empty")}</button>
                          </div>`:w}
                      ${t?g`<button
                            role="menuitem"
                            class="fp3d-menu-item"
                            @click=${()=>{o(),this.setTool("select"),this.selectItem("room",null),this._sideOpen=!0}}
                          >
                            ${this.t("floor_settings")}
                          </button>`:w}`:w}
              </div>`:w}
      </div>
    </div>`}setTool(e){let t=this.floor;if(this._tool=e,this._draft=[],this._cursor=null,this._pipeMode=!1,this._pipeDraft=null,e==="pool"&&this.outdoorArea?.type!=="pool"){let n=t?.outdoor.find(i=>i.type==="pool");n&&this.selectItem("outdoor",n.id)}this.setSideFolded(!1)}renderToolBar(e){let t=this.isAdmin,n=!e||!t,i=Oo.filter(p=>p!=="pool"),o={tool:"rect",label:this.t("tool_room"),choices:()=>[{label:this.t("tool_rect"),on:this._tool==="rect",pick:()=>this.setTool("rect")},{label:this.t("tool_polygon"),on:this._tool==="polygon",pick:()=>this.setTool("polygon")},{label:this.t("tool_measure"),on:this._tool==="measure",pick:()=>this.setTool("measure")}]},s={tool:"outdoor",label:this.t("tool_outdoor"),choices:()=>[...i.map(p=>({label:this.t(`out_${p}`),on:this._tool==="outdoor"&&(this._outdoorType??"lawn")===p,pick:()=>{this.setTool("outdoor"),this._outdoorType=p}})),{label:this.t("outdoor_shape_rect"),on:this._tool==="outdoor"&&!this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!1)},{label:this.t("outdoor_shape_free"),on:this._tool==="outdoor"&&this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!0)}]},a={tool:"pool",label:this.t("tool_pool"),choices:()=>[...["rect","round","oval","free"].map(p=>({label:this.t(`pool_shape_${p}`),on:this._tool==="pool"&&!this._pipeMode&&(this._poolShape??"rect")===p,pick:()=>{this.setTool("pool"),this._poolShape=p,this._outdoorFree=p==="free"}})),...this.pipeRules?[{label:this.t("pool_pipe_draw"),on:this._tool==="pool"&&!!this._pipeMode,pick:()=>(this.setTool("pool"),this._pipeMode=!0)}]:[]]},l=[{id:"build",label:this.t("tool_group_build"),entries:[o,{tool:"wall",label:this.t("tool_wall")},{tool:"opening",label:this.t("tool_opening")},{tool:"hole",label:this.t("tool_hole")},{tool:"roof",label:this.t("tool_roof")}]},{id:"outside",label:this.t("tool_group_outside"),entries:[s,a]}],d=p=>p.tool===this._tool||p===o&&(this._tool==="polygon"||this._tool==="measure"),c=p=>p===a?this._pipeMode?this.t("pool_pipe_draw"):this.t(`pool_shape_${this._poolShape??"rect"}`):p===s?this.t(`out_${this._outdoorType??"lawn"}`):p===o?this.t(`tool_${this._tool}`):"",h=()=>(this._toolMenu=null,this._toolOpen=null),u=(p,f)=>g`<button aria-pressed=${this._tool===p} ?disabled=${n} @click=${()=>(h(),this.setTool(p))}>${f}</button>`;return g`<div class="fp3d-seg fp3d-seg-menu" role="group">
        <button aria-pressed=${this._tool==="select"} ?disabled=${!e} @click=${()=>(h(),this.setTool("select"))}>${this.t("tool_select")}</button>
        ${l.map(p=>{let f=p.entries.find(d),m=this._toolMenu===p.id,_=f?`${f.label}${c(f)?`: ${c(f)}`:""}`:p.label;return g`<div class="fp3d-menu-wrap">
            <button aria-pressed=${!!f} aria-haspopup="menu" aria-expanded=${m} ?disabled=${n} @click=${()=>(this._toolMenu=m?null:p.id,this._toolOpen=null,this._viewMenu=!1)}>
              ${_} <span class="fp3d-caret">▾</span>
            </button>
            ${m?g`<div class="fp3d-menu-veil" @click=${h}></div>
                  <div class="fp3d-menu" role="menu">
                    ${p.entries.map(y=>{let v=y.choices?.()??[],b=this._toolOpen===y.tool;return g`<button
                          role="menuitem"
                          class="fp3d-menu-item ${d(y)?"fp3d-menu-on":""}"
                          aria-expanded=${v.length?b:w}
                          @click=${()=>{v.length?this._toolOpen=b?null:y.tool:(this.setTool(y.tool),h())}}
                        >
                          ${y.label}${v.length?g`<span class="fp3d-menu-more">${b?"\u25BE":"\u25B8"}</span>`:w}
                        </button>
                        ${b?g`<div class="fp3d-menu-sub">
                              ${v.map($=>g`<button
                                    class="fp3d-chip ${$.on?"fp3d-menu-on":""}"
                                    @click=${()=>{$.pick(),this._draft=[],h()}}
                                  >
                                    ${$.label}
                                  </button>`)}
                            </div>`:w}`})}
                  </div>`:w}
          </div>`})}
        ${u("furniture",this.t("tool_furniture"))} ${u("energy",this.t("tool_energy"))}
      </div>
      <div class="fp3d-seg fp3d-seg-menu">
        <button class="fp3d-undo" ?disabled=${!this._canUndo} @click=${()=>this.undo()} title=${`${this.t("undo")} (Ctrl+Z)`} aria-label=${this.t("undo")}>↶</button>
        <button class="fp3d-undo" ?disabled=${!this._canRedo} @click=${()=>this.redo()} title=${`${this.t("redo")} (Ctrl+Y)`} aria-label=${this.t("redo")}>↷</button>
      </div>
      <div class="fp3d-seg fp3d-seg-menu">
        <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>(h(),this.toggleSplit())}>${this.t("split_3d")}</button>
        <button aria-pressed=${this._wallPick} title=${this.t("wall_view_open")} @click=${p=>(h(),this.toggleWallPick(p.currentTarget))}>${this.t("wall_view")}</button>
        <button title=${this.t("fit_hint")} @click=${()=>(h(),this.fit())}>${this.t("fit")}</button>
      </div>
      ${this.renderSettingsMenu(h)}`}renderSettingsMenu(e){let t=this.isAdmin,n=this._settingsMenu,o=[{key:"house",icon:"\u{1F3E0}",label:this.t("settings_house"),admin:!0},{key:"weather",icon:"\u{1F326}",label:this.t("settings_weather"),admin:!0},{key:"director",icon:"\u{1F3AC}",label:this.t("card_director"),admin:!0},{key:"voice",icon:"\u{1F399}",label:this.t("voice"),admin:!1},{key:"favorites",icon:"\u2B50",label:this.t("favorites"),admin:!0},{key:"backdrop",icon:"\u{1F5BC}",label:this.t("backdrop"),admin:!0},{key:"terrain",icon:"\u26F0",label:this.t("terrain"),admin:!0},{key:"backup",icon:"\u{1F4BE}",label:this.t("backup"),admin:!0},{key:"modules",icon:"\u{1F9E9}",label:this.t("settings_modules"),admin:!0}].filter(a=>t||!a.admin),s=()=>{e(),this._settingsMenu=!n};return g`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-settings">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${n} title=${this.t("settings")} @click=${s}>
          ⚙ <span class="fp3d-settings-word">${this.t("settings")}</span> <span class="fp3d-caret">▾</span>
        </button>
        ${n?g`<div class="fp3d-menu-veil" @click=${()=>this._settingsMenu=!1}></div>
              <div class="fp3d-menu fp3d-menu-right" role="menu">
                ${o.map(a=>g`<button
                    role="menuitem"
                    class="fp3d-menu-item"
                    @click=${()=>{this._settingsDialog=a.key,this._settingsMenu=!1,a.key==="voice"&&this.hass&&Xs(this.hass,this.packs??[]).then(()=>this.requestUpdate())}}
                  >
                    ${a.icon} ${a.label}
                  </button>`)}
              </div>`:w}
      </div>
    </div>`}renderSettingsDialog(){let e=this._settingsDialog;if(!e)return w;let t=()=>this._settingsDialog=null,n={house:this.t("settings_house"),weather:this.t("settings_weather"),director:this.t("card_director"),voice:this.t("voice"),favorites:this.t("favorites"),backdrop:this.t("backdrop"),terrain:this.t("terrain"),backup:this.t("backup"),modules:this.t("settings_modules")},i=e==="house"?this.renderHouseSettings():e==="weather"?this.renderWeatherSettings():e==="director"?this.renderDirector():e==="voice"?this.renderVoice():e==="favorites"?this.renderFavorites():e==="backdrop"?this.renderBackdrop():e==="terrain"?this.renderTerrain():e==="backup"?this.renderBackup():this.renderModuleSettings();return g`<div class="fp3d-dialog-veil" @click=${o=>o.target===o.currentTarget&&t()}>
      <div class="fp3d-dialog" role="dialog" aria-label=${n[e]} tabindex="-1" @keydown=${o=>o.key==="Escape"&&t()}>
        <div class="fp3d-dialog-head">
          <h3>${n[e]}</h3>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${t}>✕</button>
        </div>
        <div class="fp3d-dialog-body">${i}</div>
      </div>
    </div>`}renderModuleSettings(){let e=(this.packs??[]).filter(t=>t.module||t.features?.length);return g`<div class="fp3d-form">
      ${e.length?e.map(t=>g`<div class="fp3d-wide">
              <b>${He(t,this.hass?.language??"de")}</b>
              <p class="fp3d-sub">${t.module?this.t("pack_module",{publisher:t.publisher}):this.t((t.features??[]).every(n=>n.startsWith("fun_"))?"pack_fun_module":"pack_pro_module",{publisher:t.publisher})}${t.release&&t.release>1?` \xB7 v${t.release}`:""}</p>
              ${t.module?g`<p class="fp3d-sub">${this.t("module_no_settings")}</p>`:w}
            </div>`):g`<p class="fp3d-sub fp3d-wide">${this.t("modules_none")}</p>`}
      <label class="fp3d-btn fp3d-primary fp3d-wide">
        ${this.t("module_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${t=>{this.importModuleFile(t)}} />
      </label>
      ${this._moduleMsg?g`<p class="fp3d-sub fp3d-wide ${this._moduleMsg.ok?"":"fp3d-pack-error"}">${this._moduleMsg.text}</p>`:w}
      <p class="fp3d-sub fp3d-wide">${this.t("module_import_hint")}</p>
    </div>`}async importModuleFile(e){let t=e.target,n=[...t.files??[]];if(t.value="",!n.length||!this.hass)return;let i=[],o=[];for(let s of n)try{let a=await Si(this.hass,await s.text());i.push(this.t("module_imported",{name:a.name,publisher:a.publisher}))}catch(a){let{code:l,message:d}=a??{},c=`pack_error_${l}`,h=this.t(c,{detail:d??String(a)});o.push(`${s.name}: ${h===c?this.t("pack_error_other",{detail:d??String(a)}):h}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),this._moduleMsg={ok:o.length===0,text:[...i,...o].join(" \xB7 ")}}render(){let e=this.floor,t=e?Ie(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return g`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()} ${this.renderDiagnosticsView()} ${this.renderSettingsDialog()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}" style=${`--fp3d-side-w:${this._sideWidth}px`}>
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick?g`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${()=>this._wallPick=!1}>${this.t("hint_wall_pick")}</div>`:w}
            ${this.renderFloorMenu()} ${this.renderToolBar(e)}
            ${t?.warnings.length?g`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:w}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this._phoneHint?g`<div class="fp3d-phone-hint">
                  <span>${this.t("phone_hint")}</span>
                  <button
                    class="fp3d-btn"
                    aria-label=${this.t("close")}
                    @click=${()=>{this._phoneHint=!1;try{localStorage.setItem("neonplan3d.phoneHint","0")}catch{}}}
                  >
                    ✕
                  </button>
                </div>`:w}
            ${this.houseTool?g`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:w}
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null)}}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${this.renderBackground(e)} ${this.renderGrid()} ${this.renderGhost()} ${t?this.renderWalls(t.walls):w}
              ${e?this.renderOutdoor(e):w} ${e?this.renderRooms(e):w} ${e?this.renderFurniture(e):w}
              ${e?this.renderFreeWalls(e):w}
              ${e&&t?this.renderOpenings(e,t.walls):w} ${e?this.renderMeter(e):w}
              ${e&&this._tool==="select"?this.renderDevices(e):w}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):w}
              ${e?this.renderOutdoorHandles(e):w}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):w}
              ${e?this.renderHeadroom(e):w}
              ${this._tool==="roof"?T`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?T`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&e&&this.pipeRules?this.renderPoolPlan(e):w} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${e?this._wallPick?this.t("hint_wall_pick"):this._fixedHint?this.t("fixed_drag_hint"):this._tool==="outdoor"&&this._outdoorFree?this.t("hint_outdoor_free"):this._tool==="pool"&&this._jointPlace?this.t("hint_joint_place"):this._tool==="pool"&&this._pipeMode?this.t(this.poolArea?this._pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool"):this._tool==="pool"&&Rt("pool")?this.t("hint_pool_tech"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?g`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:w}
          ${this._split?this.render3d():w}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}renderBackground(e){let t=e?.background,n=t?this._images[t.image_id]:void 0;if(!t||!n)return w;let[i,o]=this.toScreen([t.x,t.z]),s=t.width*this._view.scale,a=s*n.aspect,l=t.rotation??0,d=this.bgHandles();return T`<g transform="rotate(${l} ${i+s/2} ${o+a/2})">
      <image href=${n.url} x=${i} y=${o} width=${s} height=${a} opacity=${t.opacity} preserveAspectRatio="none" pointer-events=${d?"auto":"none"} data-bg="1" style=${d?"cursor:move":""} />
      ${d?T`<rect class="fp3d-bg-frame" x=${i} y=${o} width=${s} height=${a} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${i+s} cy=${o+a} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${i+s/2} y1=${o} x2=${i+s/2} y2=${o-30} />
            <circle cx=${i+s/2} cy=${o-30} r="16" class="fp3d-hit" />
            <circle cx=${i+s/2} cy=${o-30} r="8" />
            <path d="M${i+s/2-4} ${o-31}a4 4 0 1 1 2 3.5" />
          </g>`:w}
    </g>${this.renderBgRuler()}`}bgHandles(){return!!this.floor?.background&&this.isAdmin&&this._tool==="select"&&this._bgEdit}renderBgRuler(){let e=this._bgLevel?.length?this._bgLevel:this._bgRuler;if(!e?.length)return w;let t=e.map(n=>this.toScreen(n));return T`<g class="fp3d-bg-ruler">
      ${t.length===2?T`<line x1=${t[0][0]} y1=${t[0][1]} x2=${t[1][0]} y2=${t[1][1]} />`:w}
      ${t.map(([n,i])=>T`<circle cx=${n} cy=${i} r="6" />`)}
    </g>`}applyBgLevel(e,t){let n=this.floor?.background,i=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!i||Math.hypot(t[0]-e[0],t[1]-e[1])<.05)return;let o=Math.atan2(t[1]-e[1],t[0]-e[0]),s=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(s)<1e-4)return;let a=n.width*i.aspect,l=[n.x+n.width/2,n.z+a/2],d=l[0]-e[0],c=l[1]-e[1],h=[e[0]+d*Math.cos(s)-c*Math.sin(s),e[1]+d*Math.sin(s)+c*Math.cos(s)],u=(n.rotation??0)+s*180/Math.PI;u=Math.round((((u+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:u,x:x(h[0]-n.width/2),z:x(h[1]-a/2)}})}applyBgRuler(e){let n=this.floor?.background,i=this._bgRuler,o=n?this._images[n.image_id]:void 0;if(!n||!o||!i||i.length<2||!(e>0))return;let s=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(s<1e-4)return;let a=e/s,l=n.width*o.aspect,d=[n.x+n.width/2,n.z+l/2],c=i[0],h=[c[0]+a*(d[0]-c[0]),c[1]+a*(d[1]-c[1])],u=n.width*a,p=l*a;this.updateFloor({background:{...n,width:x(u),x:x(h[0]-u/2),z:x(h[1]-p/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(e,t,n){let i=e.width*n,o=e.x+e.width/2,s=e.z+i/2,a=-(e.rotation??0)*Math.PI/180,l=t[0]-o,d=t[1]-s;return[o+l*Math.cos(a)-d*Math.sin(a)-e.x,s+l*Math.sin(a)+d*Math.cos(a)-e.z]}renderGrid(){let{scale:e}=this._view,{w:t,h:n}=this._size,i=e>=90?.1:e>=30?.5:1,o=e>=20?1:5,[s,a]=this.toWorld(0,0),[l,d]=this.toWorld(t,n),c=[],h=(f,m)=>{for(let _=Math.ceil(s/f)*f;_<=l;_+=f){let y=this.toScreen([_,0])[0];c.push(T`<line class=${m} x1=${y} y1="0" x2=${y} y2=${n} />`)}for(let _=Math.ceil(a/f)*f;_<=d;_+=f){let y=this.toScreen([0,_])[1];c.push(T`<line class=${m} x1="0" y1=${y} x2=${t} y2=${y} />`)}};i<o&&h(i,"fp3d-grid-minor"),h(o,"fp3d-grid-major");let[u,p]=this.toScreen([0,0]);return c.push(T`<circle class="fp3d-origin" cx=${u} cy=${p} r="3" />`),T`<g pointer-events="none">${c}</g>`}renderGhost(){let e=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,t=e>0?this._doc.floors[e-1]:void 0;return t?T`<g pointer-events="none">${t.rooms.map(n=>T`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:w}renderWalls(e){let t=this.floor?.height??2.5;return T`<g pointer-events="none">${e.map(n=>{let i=n.height!==void 0&&n.height<t-.01,o=`fp3d-wall${n.exterior?" fp3d-wall-ext":""}${i?" fp3d-wall-low":""}`;return T`<polygon class=${o} points=${n.footprint.map(s=>this.toScreen(s).join(",")).join(" ")} />`})}</g>`}edgeParts(e,t){let n=this.floor;if(!n)return[0];let o=Ie(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(a=>a.room_id===e.id&&a.edge===t).map(a=>a.t0));return o.length?[...new Set(o)].sort((s,a)=>s-a):[0]}setEdgeSlope(e,t,n){this.isAdmin&&this.change((i,o)=>{let s=o.rooms.find(l=>l.id===e.id);if(!s)return;let a=(s.wall_slopes??[]).slice(0,s.points.length);for(;a.length<s.points.length;)a.push(null);a[t]=n?[Math.round(Math.max(.05,n[0])*1e3)/1e3,Math.round(Math.max(.05,n[1])*1e3)/1e3]:null,s.wall_slopes=a.every(l=>!l)?void 0:a})}setEdgeHeight(e,t,n,i){let o=this.floor;if(!o||!this.isAdmin)return;if(i!==void 0){let l=this.edgeParts(e,t).length;this.change((d,c)=>{let h=c.rooms.find(m=>m.id===e.id);if(!h)return;let u=(h.wall_heights??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);let p=u[t],f=Array.isArray(p)?[...p]:new Array(l).fill(typeof p=="number"?p:null);for(;f.length<l;)f.push(null);f[i]=n,u[t]=f.every(m=>m===f[0])?f[0]:f,h.wall_heights=u.every(m=>m===null)?void 0:u});return}let a=Ie(o.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},o.walls??[]).walls.filter(l=>l.sources.some(d=>d.room_id===e.id&&d.edge===t)).flatMap(l=>l.sources);a.some(l=>l.room_id===e.id&&l.edge===t)||a.push({room_id:e.id,edge:t,t0:0,t1:0}),this.change((l,d)=>{for(let c of a){let h=d.rooms.find(p=>p.id===c.room_id);if(!h)continue;let u=(h.wall_heights??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);u[c.edge]=n,h.wall_heights=u.every(p=>p===null)?void 0:u}})}renderCameraDetections(e){if(!this.hass)return w;let t=this.hass,n=Yl(t,e),i=[...new Set(n.map(s=>Jl(t,s)))],o=ce("camera_cockpit");return g`<p class="fp3d-sub fp3d-wide">
      ${n.length?g`${o?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:i.map(s=>this.t(`detect_${s}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(e,t,n){if(!this.isAdmin)return;let i=e.points,o=Math.hypot(i[(t+1)%i.length][0]-i[t][0],i[(t+1)%i.length][1]-i[t][1]),s=this.edgeParts(e,t),a=n===void 0?0:s[n],l=n===void 0?o:s[n+1]??o;if(l-a<.4)return;let d=Math.round((a+l)/2*100)/100;this.change((c,h)=>{let u=h.rooms.find(m=>m.id===e.id);if(!u)return;let p=(u.wall_splits??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);p[t]=[...p[t]??[],d].sort((m,_)=>m-_),u.wall_splits=p;let f=u.wall_heights?.[t];if(Array.isArray(f)){let m=n??0;f.splice(m+1,0,f[m]??null)}})}moveSplit(e,t,n,i){let o=e.points,s=Math.hypot(o[(t+1)%o.length][0]-o[t][0],o[(t+1)%o.length][1]-o[t][1]),a=this.edgeParts(e,t).filter(d=>Math.abs(d-n)>.001&&d>0),l=Math.max(.1,Math.min(s-.1,Math.round(i*100)/100));a.some(d=>Math.abs(d-l)<.1)&&(l=n),this.change((d,c)=>{let u=c.rooms.find(f=>f.id===e.id)?.wall_splits?.[t];if(!u)return;let p=u.findIndex(f=>Math.abs(f-n)<.001);p>=0&&(u[p]=l),u.sort((f,m)=>f-m)})}joinSplit(e,t,n,i){this.change((o,s)=>{let a=s.rooms.find(c=>c.id===e.id);if(!a?.wall_splits?.[t])return;let l=a.wall_splits[t].filter(c=>Math.abs(c-n)>.001);a.wall_splits[t]=l.length?l:null,a.wall_splits.every(c=>!c)&&(a.wall_splits=void 0);let d=a.wall_heights?.[t];Array.isArray(d)&&(d.splice(i,1),d.every(c=>c===d[0])&&(a.wall_heights[t]=d[0]??null))})}renderSplitMarks(e){let t=e.points;return T`${(e.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=t.length)return[];let o=t[i],s=t[(i+1)%t.length],a=Math.hypot(s[0]-o[0],s[1]-o[1])||1,l=(s[0]-o[0])/a,d=(s[1]-o[1])/a;return n.map(c=>{let[h,u]=this.toScreen([o[0]+l*c,o[1]+d*c]);return T`<line class="fp3d-split-mark" x1=${h-d*7} y1=${u+l*7} x2=${h+d*7} y2=${u-l*7} />`})})}`}renderEdgeHeights(e){let t=this.floor.height,n=e.points.length,i=this._doc.settings,o=new Set;for(let a of Ie(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(a.exterior)for(let l of a.sources)l.room_id===e.id&&o.add(l.edge);let s=(a,l)=>this.change((d,c)=>{let h=c.rooms.find(p=>p.id===e.id);if(!h)return;let u=(h.wall_thickness??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);u[a]=l,h.wall_thickness=u.every(p=>p===null)?void 0:u});return g`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${e.points.flatMap((a,l)=>{let d=e.points[(l+1)%n],c=Math.hypot(d[0]-a[0],d[1]-a[1]),h=e.wall_heights?.[l]??null,u=e.wall_slopes?.[l]??null,p=()=>this._edgeHi=l,f=()=>this._edgeHi=null,m=this.edgeParts(e,l);return(m.length>1?m.map((y,v)=>v):[void 0]).map(y=>{let v=y===void 0?Array.isArray(h)?h[0]??null:h:Array.isArray(h)?h[y]??null:h,b=y===void 0?c:(m[y+1]??c)-m[y],$=k=>this.setEdgeHeight(e,l,k,y);return g`<div
            class="fp3d-edge-height${l===this._edgeHi?" fp3d-edge-on":""}${v!==null?" fp3d-edge-low":""}"
            @mouseenter=${p}
            @mouseleave=${f}
            @focusin=${p}
            @focusout=${f}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${y===void 0?"":` \xB7 ${this.t("wall_part",{n:y+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(b,2)}</span
              ></span
            >
            ${v===0?g`<span class="fp3d-muted">${this.t("wall_none")}</span>`:u&&y===void 0?g`${this.len(this.t("wall_slope_start",{n:l+1}),u[0],k=>this.setEdgeSlope(e,l,[k,u[1]]),.05,.05)}
                  ${this.len(this.t("wall_slope_end",{n:(l+1)%n+1}),u[1],k=>this.setEdgeSlope(e,l,[u[0],k]),.05,.05)}`:this.len(this.t("wall_height"),v??t,k=>$(k>=t-.005?null:Math.max(.05,k)),.05,.05)}
            ${this.isAdmin&&y===void 0&&v!==0?g`<button class="fp3d-btn" aria-pressed=${!!u} title=${this.t("wall_slope_hint")} @click=${()=>this.setEdgeSlope(e,l,u?null:[v??t,v??t])}>◢ ${this.t("wall_slope")}</button>`:w}
            ${this.isAdmin&&v!==null?g`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>$(null)}>↥</button>`:w}
            ${this.isAdmin&&v!==0?g`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>$(0)}>${this.t("wall_none")}</button>`:w}
            ${this.isAdmin&&b>=.4?g`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(e,l,y)}>✂</button>`:w}
            ${(y===void 0||y===0)&&v!==0?g`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(e.id,l)}>▦</button>`:w}
            ${(y===void 0||y===0)&&v!==0?g`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),e.wall_thickness?.[l]??(o.has(l)?i.wall_exterior:i.wall_interior),k=>{let M=o.has(l)?i.wall_exterior:i.wall_interior,S=Math.min(1.5,Math.max(.02,Math.round(k*1e3)/1e3));s(l,Math.abs(S-M)<5e-4?null:S)},.01,.02)}
                  ${this.isAdmin&&e.wall_thickness?.[l]!=null?g`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(l,null)}>↺</button>`:w}</span
                >`:w}
            ${y!==void 0&&y>0&&(e.wall_splits?.[l]??[]).some(k=>Math.abs(k-m[y])<.001)?g`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),m[y],k=>this.moveSplit(e,l,m[y],k),.05,.1)}
                  ${this.isAdmin?g`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(e,l,m[y],y)}>⨉</button>`:w}</span
                >`:w}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(e){let t=this._outdoorId?e.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!t||!this.isAdmin||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return w;if(t.pool_shape){let n=ze(t.points),i=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return T`${i.map((o,s)=>{let[a,l]=this.toScreen(o);return T`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${t.id}:${s}`}><circle cx=${a} cy=${l} r="16" class="fp3d-hit" /><rect x=${a-5} y=${l-5} width="10" height="10" /></g>`})}`}return T`${t.points.map((n,i)=>{let[o,s]=this.toScreen(n);return T`<g class="fp3d-vertex" data-out-vertex=${`${t.id}:${i}`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`})}`}renderOutdoor(e){return T`<g>${e.outdoor.map(t=>{let n=t.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,o]=this.toScreen(Xe(t.points)),s=ze(t.points),a=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return T`<g data-outdoor=${t.id} class=${`fp3d-out fp3d-out-${t.type}${t.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?T`<text x=${i} y=${o+4}>${this.t(`out_${t.type}`)}</text>`:w}
      </g>`})}</g>`}renderOutdoorZone(e){let t=this.isAdmin,n=Object.values(this.hass?.areas??{}).sort((i,o)=>i.name.localeCompare(o.name));return g`<label class="fp3d-field fp3d-wide" title=${this.t("outdoor_area_hint")}
        >${this.t("area")}
        <select
          ?disabled=${!t}
          @change=${i=>{let o=i.target.value||null,s=(e.name??"").trim()||(o?this.hass?.areas?.[o]?.name??null:null);this.updateOutdoor({area_id:o,name:o?s:e.name??null})}}
        >
          <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
          ${n.map(i=>g`<option value=${i.area_id} ?selected=${i.area_id===e.area_id}>${i.name}</option>`)}
        </select></label
      >
      ${e.area_id?g`<label class="fp3d-field fp3d-wide"
            >${this.t("room_name")}
            <input .value=${e.name??""} ?disabled=${!t} @change=${i=>this.updateOutdoor({name:i.target.value.trim()||null})}
          /></label>`:w}
      <p class="fp3d-sub fp3d-wide">${this.t("outdoor_area_hint")}</p>
      ${e.area_id?this.renderOutdoorDevices(e):w}`}renderOutdoorDevices(e){let t=this.hass,n=this.floor,i=n?Vo(n).find(p=>p.id===e.id):void 0;if(!t||!n||!i)return w;let o=i.area_id?t.areas?.[i.area_id]?.name:void 0,s=Ni(t,Pt(t,i.area_id).filter(p=>bn(se(p)))),a=new Set([...n.placements.filter(p=>Z([p.x,p.z],i.points)).map(p=>p.entity_id),...n.furniture.filter(p=>Be(p.type)&&p.entity&&Z([p.x,p.z],i.points)).map(p=>p.entity)]),l=s.map(p=>p.primary).filter(p=>!a.has(p)),d=new Set(e.panel??[]),c=new Set(e.hidden??[]),h=new Set(e.no_state??[]),u=(p,f)=>p.has(f)?[...p].filter(m=>m!==f):[...p,f];return s.length?g`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("devices")}</h4>
      ${s.map(p=>g`<div class="fp3d-row fp3d-dev-row ${c.has(p.primary)?"fp3d-dev-hidden":""}">
          <button class="fp3d-dev-name ${a.has(p.primary)?"":"fp3d-muted"}" ?disabled=${!a.has(p.primary)} @click=${()=>this.selectItem("device",p.primary)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d=${zn(se(p.primary))} />
            </svg>
            <span>${ye(t,p.primary,o)}</span>
          </button>
          ${this.isAdmin?g`<button
                  class="fp3d-pin ${c.has(p.primary)?"fp3d-pin-on":""}"
                  aria-pressed=${c.has(p.primary)}
                  title=${this.t(c.has(p.primary)?"panel_unhide":"panel_hide")}
                  @click=${()=>this.updateOutdoor({hidden:u(c,p.primary)})}
                >
                  ${c.has(p.primary)?"\u{1F648}":"\u{1F441}"}
                </button>
                ${c.has(p.primary)?w:g`<button
                      class="fp3d-pin ${h.has(p.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${h.has(p.primary)}
                      title=${this.t(h.has(p.primary)?"panel_state_show":"panel_state_hide")}
                      @click=${()=>this.updateOutdoor({no_state:u(h,p.primary)})}
                    >
                      ${h.has(p.primary)?"\u2205":"Aa"}
                    </button>`}
                ${a.has(p.primary)?w:g`<button
                      class="fp3d-pin ${d.has(p.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${d.has(p.primary)}
                      title=${this.t(d.has(p.primary)?"panel_unpin":"panel_pin")}
                      @click=${()=>this.updateOutdoor({panel:u(d,p.primary)})}
                    >
                      ${d.has(p.primary)?"\u2605":"\u2606"}
                    </button>`}`:w}
          ${this.isAdmin?a.has(p.primary)?g`<button class="fp3d-link" @click=${()=>this.removeDevice(p.primary)}>${this.t("devices_remove")}</button>`:g`<button class="fp3d-link" @click=${()=>this.placeDevices([p.primary],i)}>${this.t("devices_place")}</button>`:w}
        </div>`)}
      ${this.isAdmin&&l.length>1?g`<button class="fp3d-link fp3d-place-all" @click=${()=>this.placeDevices(l,i)}>${this.t("devices_place_all_n",{n:l.length})}</button>`:w}
    </div>`:g`<p class="fp3d-sub fp3d-wide">${this.t("devices_none")}</p>`}renderOutdoorForm(e){let t=this.isAdmin,n=_n(e.points),i=ze(e.points),o=(s,a)=>{let{x0:l,z0:d,x1:c,z1:h}=i;s==="x"&&([l,c]=[a,a+(c-l)]),s==="z"&&([d,h]=[a,a+(h-d)]),s==="w"&&(c=l+Math.max(.1,a)),s==="d"&&(h=d+Math.max(.1,a)),this.updateOutdoor({points:[[l,d],[c,d],[c,h],[l,h]].map(([u,p])=>[x(u),x(p)])})};return g`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!t} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${Oo.map(s=>g`<option value=${s} ?selected=${s===e.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${mn(e.type)?w:this.renderOutdoorZone(e)}
        ${n?g`${this.len(this.t("x"),i.x0,s=>o("x",s))} ${this.len(this.t("z"),i.z0,s=>o("z",s))}
            ${this.len(this.t("width"),i.x1-i.x0,s=>o("w",s),.01,.1)} ${this.len(this.t("depth"),i.z1-i.z0,s=>o("d",s),.01,.1)}`:w}
        ${mn(e.type)?this.len(this.t("outdoor_height"),e.height??Un[e.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,x(s)))}),.05,.1):e.type==="balcony"?this.len(this.t("balcony_rail"),e.height??1,s=>this.updateOutdoor({height:Math.min(2,Math.max(.4,x(s)))}),.05,.4):w}
        ${this.len(this.t("outdoor_offset"),e.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,x(s)))||null}),.05)}
        ${e.type!=="pool"?g`${this.len(this.t("outdoor_slope"),e.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,x(s)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!t} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${ha.map(s=>g`<option value=${s} ?selected=${s===(e.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
                </select></label
              >`:w}
        ${e.type==="pool"?this.renderPoolShape(e):w}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${e.outline!==!1} ?disabled=${!t} @change=${s=>this.updateOutdoor({outline:s.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${e.type==="fence"||e.type==="pergola"?g`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${s=>this.updateOutdoor({open:s.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:w}
        ${e.type==="pergola"?g`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.bracing} ?disabled=${!t} @change=${s=>this.updateOutdoor({bracing:s.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:w}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!e.cut} ?disabled=${!t} @change=${s=>this.updateOutdoor({cut:s.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${e.slope?g`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:w}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${this.renderModuleFields(e)}
      ${t?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:w}
    </section>`}openWallView(e,t,n=null){this._wallView={roomId:e,edge:t},this._wallSel=n,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallFrame=null,this.wallDrag=null}wallSelection(){if(this._wallMulti.length)return this._wallMulti;let e=this._wallSel?this.floor?.furniture.find(t=>t.id===this._wallSel):void 0;return e?e.group&&!this._wallSingle?(this.floor?.furniture??[]).filter(t=>t.group===e.group).map(t=>t.id):[e.id]:[]}wallToggle(e){let t=this.wallSelection(),n=this.withGroups([e]),i=t.includes(e)?t.filter(o=>!n.includes(o)):[...new Set([...t,...n])];this.wallChoose(i,e)}wallChoose(e,t=e[0]??null){this._wallSingle=!1,this._wallSel=e.length?t&&e.includes(t)?t:e[0]:null,this._wallMulti=[];let n=this.wallSelection();e.length>1&&!(e.length===n.length&&e.every(i=>n.includes(i)))&&(this._wallMulti=e),this._wallGap=null}moveSetOnWall(e,t,n,i,o=this._doc,s=!0){let a=new Set(t);this.change((l,d)=>{for(let c of d.furniture)a.has(c.id)&&(Object.assign(c,qi(e,c,n)),i!==null&&ct(c)&&(c.mount_y=Math.round(Math.min(vo,Math.max(0,Fe(d,c)+i))*1e3)/1e3))},o,s)}wallGapAt(e,t,n,i,o){let s=o<1.2,a=e.length,l=[...Ft(e,t,n).filter(h=>s?h.y0<1:h.y1>1.2).map(h=>[h.s0,h.s1]),...xn(e,t).filter(h=>s?h.y0<.9:h.y1>1.2).map(h=>[h.s0,h.s1])];if(l.some(([h,u])=>i>h&&i<u))return null;let d=Math.max(0,...l.filter(([,h])=>h<=i).map(([,h])=>h)),c=Math.min(a,...l.filter(([h])=>h>=i).map(([h])=>h));return c-d>=.1?{s0:Math.round(d*1e3)/1e3,s1:Math.round(c*1e3)/1e3,low:s}:null}openWallViewFor(e){let t=this.floor;if(!t)return;let n=t.rooms.find(s=>s.points.length>=3&&Z([e.x,e.z],s.points));if(!n)return;let i=-1,o=1/0;n.points.forEach((s,a)=>{let l=n.points[(a+1)%n.points.length],d=Math.hypot(l[0]-s[0],l[1]-s[1])||1,c=Math.max(0,Math.min(1,((e.x-s[0])*(l[0]-s[0])+(e.z-s[1])*(l[1]-s[1]))/(d*d))),h=Math.hypot(e.x-(s[0]+(l[0]-s[0])*c),e.z-(s[1]+(l[1]-s[1])*c));h<o&&(o=h,i=a)}),i>=0&&this.openWallView(n.id,i,e.id)}openRoomWalls(e){let t=this.floor;if(!t)return;let n=0,i=-1;e.points.forEach((o,s)=>{let a=Ft(At(e,s),t,e).length;a>i&&(i=a,n=s)}),this.openWallView(e.id,n)}setWallView3d(e){this._wallView3d=e,this.wall3dKey="";try{localStorage.setItem("neonplan3d.wall3d",e?"1":"0")}catch{}}setupWall3d(e,t,n){let i=`${t.id}|${n}`;if(this.wall3dKey===i&&this.wall3dEl===e)return;let o=this.wall3dEl!==e;this.wall3dKey=i,this.wall3dEl=e,o&&e.addEventListener("pointerdown",s=>this.runDown3d(s),{capture:!0}),(async()=>{let s;for(let p=0;p<120&&!(s=e.viewer);p++)await new Promise(f=>setTimeout(f,50));o&&await new Promise(p=>setTimeout(p,250));let a=this.floor;if(!s||!a||this.wall3dKey!==i)return;if(!s.__npWall){s.__npWall=!0,s.updateWalls=function(){for(let f of this.floors)f.mask.standing.value=65535,f.mask.glass.value=0},s.labels.style.display="none";let p=new CSSStyleSheet;p.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),e.shadowRoot&&(e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,p]),s.camera.fov=58,s.camera.updateProjectionMatrix(),s.controls.minRadius=.6,s.controls.leftDragTurns=!1}let l=At(t,n),d=Math.max(1.5,...t.points.map(p=>me(l,p).d)),c=Qe(l,l.length/2,0),h=a.elevation+(s.floorMap.get(a.id)?.y??0)+1.15;s.controls.maxRadius=Math.max(1.4,d-.25);let u=s.getView();u.target.set(c[0],h,c[1]),s.flyTo({...u,radius:Math.max(1.2,Math.min(d*.8,d-.35)),theta:Math.atan2(l.n[0],l.n[1]),phi:1.3},o?0:650),s.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let e=()=>{this.liftRaf=0;let t=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!t?.isConnected||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(e),!n))return;let i=this.floor,o=this._wallSel?i?.furniture.find(p=>p.id===this._wallSel):void 0,s=t.viewer;if(!o||!i||!s||!ct(o)||o.locked){n.hidden=!0;return}let a=Fe(i,o),l=i.elevation+(s.floorMap.get(i.id)?.y??0)+a+o.h,d=s.camera.position.clone().set(o.x,l+.12,o.z).project(s.camera);if(d.z>1){n.hidden=!0;return}n.hidden=!1;let c=t.getBoundingClientRect(),h=n.offsetParent?.getBoundingClientRect()??c;n.style.transform=`translate(${c.left-h.left+(d.x+1)/2*c.width}px, ${c.top-h.top+(1-d.y)/2*c.height}px)`;let u=n.querySelector("b");u&&(u.textContent=this.m(Math.round(a*100)/100,2))};this.liftRaf=requestAnimationFrame(e)}liftDown(e){let t=this.floor,n=this._wallSel?t?.furniture.find(c=>c.id===this._wallSel):void 0,o=this.wall3dEl?.viewer;if(!t||!n||!o||!this.isAdmin)return;e.preventDefault(),e.stopPropagation(),e.currentTarget.setPointerCapture(e.pointerId);let s=Math.hypot(o.camera.position.x-n.x,o.camera.position.z-n.z)||1,a=this.wall3dEl.clientHeight||1,l=t.rooms.find(c=>c.points.length>=3&&Z([n.x,n.z],c.points)),d=Math.max(t.height,l?.ceiling_height??0);this.lift={id:n.id,y:Fe(t,n),startY:e.clientY,perPx:2*s*Math.tan(o.camera.fov*Math.PI/360)/a,base:this._doc,top:Math.max(0,d-n.h),moved:!1}}liftMove(e){let t=this.lift,n=this._wallView?this.floor?.rooms.find(s=>s.id===this._wallView.roomId):void 0;if(!t||!n)return;let i=(t.startY-e.clientY)*t.perPx;if(!t.moved&&Math.abs(e.clientY-t.startY)<3)return;t.moved=!0;let o=Math.min(t.top,Math.max(0,Math.round((t.y+i)*100)/100));this.moveOnWall(At(n,this._wallView.edge),t.id,0,o,t.base,!1)}liftUp(){let e=this.lift;this.lift=null,e?.moved&&this.pushHistory(e.base)}wallPickTip=[0,0];toggleWallPick(e){let t=e.closest(".fp3d-toolbar")?.getBoundingClientRect(),n=e.getBoundingClientRect();this.wallPickTip=t?[n.left-t.left+n.width/2,n.bottom-t.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(e){let t=this.floor;if(!t)return;let n=null;for(let i of t.rooms){if(i.points.length<3)continue;let o=Z(e,i.points)?-.25:0;i.points.forEach((s,a)=>{let l=i.points[(a+1)%i.points.length],d=(l[0]-s[0])**2+(l[1]-s[1])**2||1,c=Math.max(0,Math.min(1,((e[0]-s[0])*(l[0]-s[0])+(e[1]-s[1])*(l[1]-s[1]))/d)),h=Math.hypot(e[0]-(s[0]+(l[0]-s[0])*c),e[1]-(s[1]+(l[1]-s[1])*c));h<.6&&(!n||h+o<n.d)&&(n={room:i,edge:a,d:h+o})})}if(!n){let i=t.rooms.find(o=>o.points.length>=3&&Z(e,o.points));if(!i)return;this._wallPick=!1,this.openRoomWalls(i),this.techPick&&this.enterTech();return}this._wallPick=!1,this.openWallView(n.room.id,n.edge),this.techPick&&this.enterTech()}techDoc3d(){let e=this._doc3d;if(this.techDocCache?.src===e)return this.techDocCache.doc;let t={...e,floors:e.floors.map(n=>({...n,furniture:n.furniture.filter(i=>ve.includes(i.type))}))};return this.techDocCache={src:e,doc:t},t}techDocCache=null;enterTech(){this.techPick=!1,this._techMode=!0,this._wallSel=null,this._wallMulti=[],this._runSel=null,this._runDraft=null,this._feedKind=null,this._runMode="draw"}turnOnWall(e,t){let n=this._doc.settings.wall_interior;this.change((i,o)=>{let s=o.furniture.find(d=>d.id===e);if(!s)return;s.rotation=Math.round((t%360+360)%360);let[a,l]=gs(o,s,s.x,s.z,n,.6);Object.assign(s,{x:a,z:l})})}moveFromWall(e,t,n){this.change((i,o)=>{let s=o.furniture.find(a=>a.id===t);s&&(s.x=Math.round((s.x+e.n[0]*n)*1e3)/1e3,s.z=Math.round((s.z+e.n[1]*n)*1e3)/1e3)})}moveOnWall(e,t,n,i,o=this._doc,s=!0){this.change((a,l)=>{let d=l.furniture.find(c=>c.id===t);d&&(Object.assign(d,qi(e,d,n)),i!==null&&(d.mount_y=Math.round(Math.min(vo,Math.max(0,i))*1e3)/1e3))},o,s)}alongAxis(e,t){let n=this.wallTurn(e,t)*Math.PI/180;return Math.abs(Math.sin(n))<.05?"w":Math.abs(Math.cos(n))<.05?"d":null}resizeOnWall(e,t,n,i,o,s,a=this._doc,l=!0){this.change((d,c)=>{let h=c.furniture.find(p=>p.id===t);if(!h)return;let u=this.alongAxis(e,h);if(n!==null&&i!==null&&u&&i-n>=.05){let p=Ce(h).map(m=>me(e,m).s),f=(Math.min(...p)+Math.max(...p))/2;h[u]=x(i-n),Object.assign(h,qi(e,h,(n+i)/2-f))}if(o!==null||s!==null){let p=Fe(c,h),f=o??p,m=s??p+h.h;if(m-f<.03)return;h.h=x(m-f),o!==null&&ct(h)&&(h.mount_y=x(Math.max(0,f)))}},a,l)}wallTurn(e,t){let n=Math.atan2(-e.n[0],e.n[1])*180/Math.PI;return((t.rotation-n)%360+360)%360}wallPicKey(e,t){return`${t.type}|${t.w}|${t.d}|${t.h}|${t.variant??""}|${Math.round(this.wallTurn(e,t))}`}async askWallPics(e,t){let n=t.filter(i=>!this.wallPicsAsked.has(this.wallPicKey(e,i)));if(n.length){for(let i of n)this.wallPicsAsked.add(this.wallPicKey(e,i));try{let i=await bo();for(let o of n){let s=i.furnitureFront({type:o.type,w:o.w,d:o.d,h:o.h,variant:o.variant,lamp:Oi[o.type]??null},this.wallTurn(e,o),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(e,o),s)}}catch{}this._wallPicTick++}}renderWallView(){let e=this._wallView,t=this.floor,n=e?t?.rooms.find(P=>P.id===e.roomId):void 0;if(!e||!t||!n||e.edge>=n.points.length)return w;let i=n.points.length,o=At(n,e.edge),s=o.length,a=Math.max(t.height,n.ceiling_height??0),l=this._techMode?Ft(o,t,n,1.6).filter(P=>ve.includes(t.furniture.find(I=>I.id===P.id)?.type??"")):Ft(o,t,n),d=xn(o,t),c=P=>o.rightward?P:s-P,h=(P,I)=>[Math.min(c(P),c(I)),Math.abs(I-P)],u=P=>a-P,p=this.isAdmin,f=this._wallSel?t.furniture.find(P=>P.id===this._wallSel):void 0,m=f?l.find(P=>P.id===f.id)??(()=>{let P=Ce(f).map(V=>me(o,V)),I=Fe(t,f);return{kind:"furniture",id:f.id,s0:Math.min(...P.map(V=>V.s)),s1:Math.max(...P.map(V=>V.s)),y0:I,y1:I+f.h,d:Math.min(...P.map(V=>V.d))}})():null,_=!!f&&ct(f),y=this.wallSelection(),v=y.length>1,b=l.filter(P=>y.includes(P.id)),$=b.length?{s0:Math.min(...b.map(P=>P.s0)),s1:Math.max(...b.map(P=>P.s1)),y0:Math.min(...b.map(P=>P.y0)),y1:Math.max(...b.map(P=>P.y1))}:null,k=P=>this.m(P,2),M=P=>{let I=P.currentTarget.closest("svg"),V=I.createSVGPoint();return V.x=P.clientX,V.y=P.clientY,V.matrixTransform(I.getScreenCTM().inverse())},S=P=>[0,s,...l.filter(I=>!P.includes(I.id)).flatMap(I=>[I.s0,I.s1]),...d.flatMap(I=>[I.s0,I.s1])],A=(P,I)=>{if(!p)return;if(q&&this._runMode){this.techPress=q.pt(P),this.runDown(P,q);return}if(P.stopPropagation(),this._runSel=null,P.shiftKey||this._multiMode){this.wallToggle(I);return}(!this.wallSelection().includes(I)||this._wallSingle)&&this.wallChoose([I]);let V=this.wallSelection(),B=M(P);P.currentTarget.closest("svg").setPointerCapture(P.pointerId);let U=l.filter(Q=>V.includes(Q.id));if(V.length>1&&V.some(Q=>this.isFixedItem("furniture",Q)))return;if(V.length>1&&U.length){let Q=Math.min(...U.map(re=>re.s0));this.wallDrag={id:I,ids:V,w:Math.max(...U.map(re=>re.s1))-Q,x:B.x,y:B.y,base:this._doc,s0:Q,y0:0,lift:U.every(re=>{let xe=t.furniture.find(Ye=>Ye.id===re.id);return!!xe&&ct(xe)}),moved:!1};return}let le=l.find(Q=>Q.id===I),ie=t.furniture.find(Q=>Q.id===I);this.wallDrag={id:I,x:B.x,y:B.y,base:this._doc,s0:le.s0,y0:le.y0,lift:!!ie&&ct(ie),moved:!1}},W=P=>{if(!p||this._runMode)return;let I=M(P);if(P.shiftKey||this._multiMode){P.currentTarget.closest("svg").setPointerCapture(P.pointerId),this._wallFrame={x0:I.x,y0:I.y,x1:I.x,y1:I.y};return}this._wallSel=null,this._wallMulti=[],this._wallSingle=!1;let V=o.rightward?I.x:s-I.x;this._wallGap=V>=0&&V<=s&&I.y>=0&&I.y<=a?this.wallGapAt(o,t,n,V,a-I.y):null},E=P=>{let I=this.wallResize;if(I){let Se=M(P);I.moved=!0;let cn=S([I.id]).map(De=>c(De)),hi=De=>{if(De=Math.round(De*100)/100,!P.altKey){for(let at of cn)if(Math.abs(De-at)<.04)return at}return De};if(I.side==="l"||I.side==="r"){let De=I.side==="l"?Math.min(hi(Se.x),I.x1-.1):I.x0,at=I.side==="r"?Math.max(hi(Se.x),I.x0+.1):I.x1,[hn,$o]=o.rightward?[De,at]:[s-at,s-De];this.resizeOnWall(o,I.id,hn,$o,null,null,I.base,!1)}else{let De=Math.round((a-Se.y)*100)/100;I.side==="t"?this.resizeOnWall(o,I.id,null,null,null,Math.max(I.y0+.05,Math.min(a,De)),I.base,!1):this.resizeOnWall(o,I.id,null,null,Math.max(0,Math.min(I.y1-.05,De)),null,I.base,!1)}return}let V=this._wallFrame;if(V){let Se=M(P);this._wallFrame={...V,x1:Se.x,y1:Se.y};return}let B=this.wallDrag;if(!B)return;let U=M(P),le=U.x-B.x,ie=B.y-U.y;if(!B.moved&&Math.hypot(le,ie)<.02)return;B.moved=!0;let Q=l.find(Se=>Se.id===B.id),re=B.ids?B.w??0:Q?Q.s1-Q.s0:0,xe=B.s0+(o.rightward?le:-le);if(xe=Math.round(xe*100)/100,!P.altKey)for(let Se of S(B.ids??[B.id]))Math.abs(xe-Se)<.04?xe=Se:Math.abs(xe+re-Se)<.04&&(xe=Se-re);if(B.ids){this.moveSetOnWall(o,B.ids,xe-B.s0,B.lift?Math.round(ie*100)/100:null,B.base,!1);return}let Ye=B.lift?Math.round((B.y0+ie)*100)/100:null;this.moveOnWall(o,B.id,xe-B.s0,Ye,B.base,!1)},D=()=>{let P=this.wallResize;if(P){this.wallResize=null,P.moved&&this.pushHistory(P.base);return}let I=this._wallFrame;if(I){this._wallFrame=null;let[B,U]=[Math.min(I.x0,I.x1),Math.max(I.x0,I.x1)],[le,ie]=[Math.min(I.y0,I.y1),Math.max(I.y0,I.y1)],Q=l.filter(re=>{let[xe,Ye]=h(re.s0,re.s1),Se=xe+Ye/2,cn=u((re.y0+re.y1)/2);return Se>=B&&Se<=U&&cn>=le&&cn<=ie}).map(re=>re.id);Q.length&&this.wallChoose([...new Set([...this.wallSelection(),...this.withGroups(Q)])]);return}let V=this.wallDrag;this.wallDrag=null,V?.moved&&this.pushHistory(V.base)},z=P=>{if(this._runMode&&(P.key==="Escape"||P.key==="Enter")){P.preventDefault(),P.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(P.key==="Escape"){this._wallView=null;return}if((P.key==="Delete"||P.key==="Backspace")&&p&&q&&this._runSel&&!y.length&&!P.target.closest("input, select, textarea")){P.preventDefault();let le=this._runSel.pipe;this.changePool(q.pool.id,ie=>ie.pipes=(ie.pipes??[]).filter(Q=>Q.id!==le)),this._runSel=null;return}if((P.key==="Delete"||P.key==="Backspace")&&p&&y.length&&!P.target.closest("input, select, textarea")){P.preventDefault(),this.deleteOnWall(y);return}if(!m&&(P.key==="ArrowLeft"||P.key==="ArrowRight")){P.preventDefault(),O(P.key==="ArrowLeft"?L:R);return}if(!m||!p||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(P.key)||P.target.closest("input, select, textarea"))return;P.preventDefault();let I=P.shiftKey?.1:.01,V=P.key==="ArrowRight"?I:P.key==="ArrowLeft"?-I:0,B=o.rightward?V:-V,U=P.key==="ArrowUp"?I:P.key==="ArrowDown"?-I:0;if(v)return this.moveSetOnWall(o,y,B,U||null);this.moveOnWall(o,m.id,B,_&&U?m.y0+U:null)},F=v&&$?$:m,H=F?(()=>{let P=F,[I,V]=h(P.s0,P.s1),B=u(P.y0),U=Math.min(a+.25,u(0)+.25);return T`<g class="fp3d-wv-dims">
            ${I>.03?T`<line x1="0" y1=${U} x2=${I} y2=${U} /><text x=${I/2} y=${U-.05}>${k(I)}</text>`:w}
            ${s-I-V>.03?T`<line x1=${I+V} y1=${U} x2=${s} y2=${U} /><text x=${I+V+(s-I-V)/2} y=${U-.05}>${k(s-I-V)}</text>`:w}
            ${P.y0>.03?T`<line x1=${I+V/2} y1=${B} x2=${I+V/2} y2=${a} /><text x=${I+V/2+.05} y=${(B+a)/2} class="fp3d-wv-up">${k(P.y0)}</text>`:w}
          </g>`})():w,R=(e.edge+(o.rightward?1:-1)+i)%i,L=(e.edge+(o.rightward?-1:1)+i)%i,C=P=>this.t("wall_n",{a:P+1,b:(P+1)%i+1}),O=P=>this.openWallView(n.id,P);this._wallPicTick,this.askWallPics(o,l.map(P=>t.furniture.find(I=>I.id===P.id)).filter(P=>!!P));let J=`${n.id}:${e.edge}`,N=this.wvZoom?.key===J?this.wvZoom:null,j=s+1,Y=a+.9,ee=(P,I,V)=>{let B=Math.min(8,Math.max(1,P)),U=j/B,le=Y/B;return{k:B,w:U,h:le,x0:Math.min(-.5+j-U,Math.max(-.5,I)),y0:Math.min(-.35+Y-le,Math.max(-.35,V))}},K=ee(N?.k??1,N?.x0??-.5,N?.y0??-.35),ue=(P,I,V)=>{let B=ee(P,I,V);this.wvZoom=B.k<=1.001?null:{key:J,k:B.k,x0:B.x0,y0:B.y0},this.requestUpdate()},Me=(P,I,V)=>{let B=Math.min(8,Math.max(1,V));ue(B,P-(P-K.x0)*K.k/B,I-(I-K.y0)*K.k/B)},rt=P=>{let I=this.wvPinch,[V,B]=[...this.wvTouch.values()],U=Math.hypot(V.x-B.x,V.y-B.y),le=(V.x+B.x)/2,ie=(V.y+B.y)/2,Q=P.getBoundingClientRect(),re=j/I.k,xe=Y/I.k,Ye=Math.min(Q.width/re,Q.height/xe),Se=Q.left+(Q.width-re*Ye)/2,cn=Q.top+(Q.height-xe*Ye)/2,hi=I.x0+(I.mx-Se)/Ye,De=I.y0+(I.my-cn)/Ye,at=Math.min(8,Math.max(1,I.k*U/Math.max(1,I.d))),hn=Ye*(at/I.k),$o=Q.left+(Q.width-j/at*hn)/2,Ac=Q.top+(Q.height-Y/at*hn)/2;ue(at,hi-(le-$o)/hn,De-(ie-Ac)/hn)};this.wvScale=1/Math.sqrt(K.k);let Pe=Math.max(.09,Math.min(.16,s/40))*this.wvScale,Ee=this.canLayRuns?this.runPool:void 0,q=this.runCtx3d=Ee?{frame:o,floor:t,room:n,key:`${n.id}|${e.edge}`,L:s,H:a,gap:(pt(t,n.id,o.a,o.b)?this._doc.settings.wall_interior/2:0)+ir,runs:El(o,(Ee.pool?.pipes??[]).filter(P=>P.floor_id===t.id),de(this._doc,t,Ee)),pool:Ee,pt:P=>{let I=M(P);return{s:o.rightward?I.x:s-I.x,y:a-I.y}}}:null;return g`<div class="fp3d-wv-veil" @click=${P=>P.target===P.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${z}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${C(L)}`} @click=${()=>O(L)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:e.edge+1,b:(e.edge+1)%i+1})} · ${this.m(s,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${C(R)}`} @click=${()=>O(R)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${p&&this.pipeRules&&this.runPool?g`<button class="fp3d-btn ${this._techMode?"fp3d-primary":""}" title=${this.t("tech_mode_hint")} @click=${()=>{this._techMode?(this._techMode=!1,this._runDraft=null,this._feedKind=null,this._runMode=null):this.enterTech()}}>🛠 ${this.t("tech_mode")}</button>`:w}
          ${q&&p&&!this._techMode?g`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:w}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(o,n,q)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${C(L)}`} @click=${()=>O(L)}>‹<small>${C(L)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${C(R)}`} @click=${()=>O(R)}>›<small>${C(R)}</small></button>
          ${this._wallView3d?w:g`<div class="fp3d-wv-zoom" title=${this.t("wall_zoom_hint")}>
                <button class="fp3d-btn" aria-label="+" @click=${()=>Me(K.x0+K.w/2,K.y0+K.h/2,K.k*1.6)}>＋</button>
                <button class="fp3d-btn" aria-label="−" ?disabled=${K.k<=1.001} @click=${()=>Me(K.x0+K.w/2,K.y0+K.h/2,K.k/1.6)}>−</button>
                <button class="fp3d-btn" title=${this.t("wall_zoom_all")} ?disabled=${K.k<=1.001} @click=${()=>ue(1,-.5,-.35)}>⤢</button>
                ${K.k>1.001?g`<button class="fp3d-btn" aria-label="←" @click=${()=>ue(K.k,K.x0-K.w*.3,K.y0)}>←</button>
                      <button class="fp3d-btn" aria-label="→" @click=${()=>ue(K.k,K.x0+K.w*.3,K.y0)}>→</button>
                      <button class="fp3d-btn" aria-label="↑" @click=${()=>ue(K.k,K.x0,K.y0-K.h*.3)}>↑</button>
                      <button class="fp3d-btn" aria-label="↓" @click=${()=>ue(K.k,K.x0,K.y0+K.h*.3)}>↓</button>`:w}
              </div>`}
        ${this._wallView3d?g`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${Ar(P=>P&&this.setupWall3d(P,n,e.edge))}
              .hass=${this.hass}
              .building=${this._techMode?this.techDoc3d():this._doc3d}
              .floorId=${this._floorId}
              .roomId=${null}
              .wallMode=${"auto"}
              .explode=${!1}
              .markerMode=${"none"}
              .heatMode=${"none"}
              .theme=${"neon"}
              .packs=${this.packs}
              .showEnergy=${!1}
              .holograms=${!1}
              .flows=${!1}
              ?furnish=${p}
              .furnishTypes=${null}
              .selectedFurniture=${this._wallSel}
              .selectedSet=${y}
              .quality=${"auto"}
              .floorThumbs=${!1}
              .roomLabels=${!1}
              .floorStack=${"single"}
              .panelOpen=${!1}
              .alerts=${!1}
              .scenes=${!1}
              .central=${!1}
              @furniture-select=${P=>{let I=P.detail.id;I&&(this.shiftHeld||this._multiMode)?this.wallToggle(I):I?!this.wallSelection().includes(I)||this._wallSingle?this.wallChoose([I]):this._wallSel=I:this.wallChoose([])}}
              @furniture-move=${this.onFurnitureMoved3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${P=>this.liftDown(P)} @pointermove=${P=>this.liftMove(P)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:g`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""} ${this._runMode==="valve"||this._runMode==="sight"?"fp3d-wv-fitmode":""} ${this._runMode==="erase"?"fp3d-wv-fitmode fp3d-wv-erase":""}"
          viewBox="${K.x0} ${K.y0} ${K.w} ${K.h}"
          preserveAspectRatio="xMidYMid meet"
          @wheel=${P=>{P.preventDefault();let I=P.currentTarget,V=I.createSVGPoint();V.x=P.clientX,V.y=P.clientY;let B=V.matrixTransform(I.getScreenCTM().inverse());Me(B.x,B.y,K.k*Math.exp(-P.deltaY*.0015))}}
          @pointerdown=${P=>{if(P.pointerType==="touch"){if(this.wvTouch.set(P.pointerId,{x:P.clientX,y:P.clientY}),this.wvTouch.size===2){let[I,V]=[...this.wvTouch.values()];this.wvPinch={d:Math.hypot(I.x-V.x,I.y-V.y),mx:(I.x+V.x)/2,my:(I.y+V.y)/2,k:K.k,x0:K.x0,y0:K.y0},this.wvTap=null,this.techPress=null,D(),this.runPointUp(),this.fitDrag=null,this.jointDrag=null;return}if(this.wvPinch)return;if(q&&this._runMode&&this.isAdmin){P.stopPropagation();let I=q.pt(P);this.wvTap=I,this.techPress=I;return}}q&&this._runMode?(this.techPress=q.pt(P),this.runDown(P,q)):this._runSel?this._runSel=null:W(P)}}
          @pointermove=${P=>{if(this.wvTouch.has(P.pointerId)&&this.wvTouch.set(P.pointerId,{x:P.clientX,y:P.clientY}),this.wvPinch){this.wvTouch.size===2&&rt(P.currentTarget);return}if(E(P),q&&this.jointDrag)this.jointMove(P,q);else if(q&&this.fitDrag)this.fittingMove(P,q);else if(q&&this.runDrag)this.runPointMove(P,q);else if(q&&this._runMode==="draw"&&this.techPress&&this.isAdmin&&(P.buttons&1||P.pointerType==="touch")){let I=q.pt(P),V=this.techPress;if(!this._runDraft&&!this.techStroke&&Math.hypot(I.s-V.s,I.y-V.y)>.02&&(this.wvTap=null,this.runAt(q,V.s,V.y,!1,1,null)),this._runDraft&&!this.wvTap){let B=this.techStroke??=[this.techPress],U=B[B.length-1];Math.hypot(I.s-U.s,I.y-U.y)>.02&&B.push(I),this.runHover=[I.s,I.y],this.requestUpdate()}}else if(q&&this._runMode==="draw"&&this._runDraft){let I=q.pt(P);this.runHover=[I.s,I.y],this.requestUpdate()}}}
          @pointerup=${P=>{if(this.wvTouch.delete(P.pointerId),this.wvPinch){this.wvTouch.size||(this.wvPinch=null);return}let I=this.wvTap;this.wvTap=null;let V=this.techStroke;this.techStroke=null;let B=V?V.reduce((ie,Q,re)=>re?ie+Math.hypot(Q.s-V[re-1].s,Q.y-V[re-1].y):0,0):0,U=q&&this._techMode&&this._runMode==="draw";if(V&&B>.12&&q&&this._runMode==="draw"&&this._runDraft)this.techPress=null,this.runHover=null,this.endStroke(q,V,q.pt(P));else if(U){let ie=this.techPress;if(this.techPress=null,this._runDraft=null,this.runHover=null,ie){let Q=this.runPick(q,ie.s,ie.y,!0);this._runSel=Q.pipe?{pipe:Q.pipe.id,pt:null}:null}}else I&&q&&this._runMode&&this.runAt(q,I.s,I.y,!1,1,null),this.techPress=null;D(),this.runPointUp(),this.fittingUp(q);let le=this.jointDrag;this.jointDrag=null,le?.moved?this.pushHistory(le.base):le&&q&&this.openCard(q.pool.id,`joint:${le.id}`)}}
          @pointercancel=${P=>{this.wvTouch.delete(P.pointerId),this.wvTouch.size||(this.wvPinch=null),this.wvTap=null,this.techPress=null,this.techStroke=null,D(),this.runPointUp(),this.fitDrag=null}}
          style="--fs:${Pe}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${s} height=${a} />
          ${Array.from({length:Math.floor(a/.5)},(P,I)=>T`<line class="fp3d-wv-grid" x1="0" x2=${s} y1=${u((I+1)*.5)} y2=${u((I+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${u((I+1)*.5)+.03}>${((I+1)*.5).toFixed(1)}</text>`)}
          ${d.map(P=>{let[I,V]=h(P.s0,P.s1),B=t.openings.find(le=>le.id===P.id),U=B?.type==="window"?this.t("opening_window"):B?.type==="garage"?this.t("opening_garage"):this.t("opening_door");return T`<rect class="fp3d-wv-hole ${B?.type==="window"?"fp3d-wv-window":""}" x=${I} y=${u(P.y1)} width=${V} height=${P.y1-P.y0} />
              ${V>Pe*3.5?T`<text class="fp3d-wv-hole-label" x=${I+V/2} y=${u(P.y1)+Pe*1.3} style="font-size:${Pe*.85}px">${U}</text>`:w}`})}
          ${l.map(P=>{let[I,V]=h(P.s0,P.s1),B=t.furniture.find(re=>re.id===P.id),U=B.name||Ot(this.hass,B.type),le=P.y1-P.y0,ie=this.wallPics.get(this.wallPicKey(o,B)),Q=c(me(o,[B.x,B.z]).s);return T`<g class="fp3d-wv-item ${ie?"fp3d-wv-pic":""} ${P.id===this._wallSel||y.includes(P.id)?"fp3d-wv-sel":""}" @pointerdown=${re=>A(re,P.id)} @dblclick=${()=>{if(t.furniture.find(xe=>xe.id===P.id)?.group&&!this._wallSingle){this.wallChoose([P.id]),this._wallSingle=!0;return}this._wallView=null,this.selectItem("furniture",P.id)}}>
              ${ie?T`<image href=${ie.url} x=${Q+ie.x0} y=${u(P.y0+ie.y1)} width=${ie.x1-ie.x0} height=${ie.y1-ie.y0} preserveAspectRatio="none" />`:w}
              <rect x=${I} y=${u(P.y1)} width=${V} height=${Math.max(.02,le)}><title>${U}</title></rect>
              ${!ie&&V>Pe*3&&le>Pe*1.4?T`<text x=${I+V/2} y=${u(P.y1)+Math.min(le/2,Pe*1.6)+Pe*.35} style="font-size:${Pe}px">${U}</text>`:w}
            </g>`})}
          ${H}
          ${m&&f&&!v&&p&&!f.locked&&l.some(P=>P.id===m.id)?(()=>{let[P,I]=h(m.s0,m.s1),V=u(m.y1),B=u(m.y0),U=Pe*.75,le=this.alongAxis(o,f),ie=Q=>re=>{re.stopPropagation(),re.currentTarget.closest("svg").setPointerCapture(re.pointerId),this.wallResize={id:m.id,side:Q,x0:P,x1:P+I,y0:m.y0,y1:m.y1,base:this._doc,moved:!1}};return T`<g class="fp3d-wv-handles">
                  ${le?T`<rect class="fp3d-wv-handle fp3d-wv-ew" x=${P-U/2} y=${(V+B)/2-U} width=${U} height=${U*2} rx=${U/3} @pointerdown=${ie("l")} />
                        <rect class="fp3d-wv-handle fp3d-wv-ew" x=${P+I-U/2} y=${(V+B)/2-U} width=${U} height=${U*2} rx=${U/3} @pointerdown=${ie("r")} />`:w}
                  <rect class="fp3d-wv-handle fp3d-wv-ns" x=${P+I/2-U} y=${V-U/2} width=${U*2} height=${U} rx=${U/3} @pointerdown=${ie("t")} />
                  ${m.y0>.05&&ct(f)?T`<rect class="fp3d-wv-handle fp3d-wv-ns" x=${P+I/2-U} y=${B-U/2} width=${U*2} height=${U} rx=${U/3} @pointerdown=${ie("b")} />`:w}
                  <text class="fp3d-wv-size" x=${P+I/2} y=${V-U*.9} style="font-size:${Pe*.85}px">${k(m.s1-m.s0)} × ${k(m.y1-m.y0)}</text>
                </g>`})():w}
          ${v&&$?(()=>{let[P,I]=h($.s0,$.s1),V=!this._wallMulti.length;return T`<g class=${`fp3d-wv-setframe${V?" fp3d-wv-setblock":""}`}><rect x=${P-.03} y=${u($.y1)-.03} width=${I+.06} height=${$.y1-$.y0+.06} /><text x=${P} y=${u($.y1)-.07} style="font-size:${Pe*.85}px">${V?`\u25A3 ${this.t("block_title")} \xB7 ${y.length}`:this.t("multi_title",{n:y.length})}</text></g>`})():w}
          ${this._wallGap?(()=>{let P=this._wallGap,[I,V]=h(P.s0,P.s1),B=P.low?Math.min(a,.9):Math.min(a,2.2),U=P.low?0:1.3;return T`<g class="fp3d-wv-gap"><rect x=${I} y=${u(B)} width=${V} height=${B-U} /><text x=${I+V/2} y=${u((B+U)/2)} style="font-size:${Pe}px">${k(V)}</text></g>`})():w}
          ${this._wallFrame?T`<rect class="fp3d-wv-marquee" x=${Math.min(this._wallFrame.x0,this._wallFrame.x1)} y=${Math.min(this._wallFrame.y0,this._wallFrame.y1)} width=${Math.abs(this._wallFrame.x1-this._wallFrame.x0)} height=${Math.abs(this._wallFrame.y1-this._wallFrame.y0)} />`:w}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${s+.3} y1=${a} y2=${a} />
          ${q?this.renderRuns(q,c,u):w}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${q&&this._techMode&&!this._runDraft&&!this._runSel&&!m&&(this._runMode==="draw"||this._runMode==="feed")?g`<span class="fp3d-muted">${this.t(this._runMode==="feed"?"tech_feed_place":"tech_start")}</span> ${this.renderTechIssues(q)}`:q&&(this._runMode||this._runSel&&!m)?this.renderRunFoot(q):v&&p?this.renderWallSetFoot(o,y,$,h):m&&f?g`<b>${f.name||Ot(this.hass,f.type)}</b>
                ${this.fixButton("furniture",m.id)}
                ${f.group&&p?g`<button class="fp3d-btn" title=${this.t("block_select")} @click=${()=>{this._wallSingle=!1,this.requestUpdate()}}>▣ ${this.t("wv_block_all")}</button>`:w}
                ${q&&ve.includes(f.type)?g`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(q.pool.id,`dev:${f.id}`)}>${this.t("card_open")}</button>`:w}
                ${f.locked&&p?g`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:w}
                ${this.len(this.t("wall_view_left"),Math.round(h(m.s0,m.s1)[0]*1e3)/1e3,P=>{let I=P-h(m.s0,m.s1)[0];this.moveOnWall(o,m.id,o.rightward?I:-I,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,m.d)*1e3)/1e3,P=>this.moveFromWall(o,m.id,P-m.d),.01,0)}
                ${p&&!f.locked&&this.alongAxis(o,f)?this.len(this.t("width"),Math.round((m.s1-m.s0)*1e3)/1e3,P=>{let I=Math.max(.05,P);o.rightward?this.resizeOnWall(o,m.id,m.s0,m.s0+I,null,null):this.resizeOnWall(o,m.id,m.s1-I,m.s1,null,null)},.01,.05):w}
                ${p&&!f.locked?this.len(this.t("height_m"),Math.round((m.y1-m.y0)*1e3)/1e3,P=>this.resizeOnWall(o,m.id,null,null,null,m.y0+Math.max(.03,P)),.01,.03):w}
                ${_?this.len(this.t("mount_height"),Math.round(m.y0*1e3)/1e3,P=>this.moveOnWall(o,m.id,0,P),.01,0):g`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${p&&!f.locked?g`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),f.rotation,P=>this.turnOnWall(f.id,P),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation+45)}>↻ 45°</button>
                    </span>`:w}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",m.id)}}>${this.t("wall_view_form")}</button>
                ${p?g`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall([m.id])}>${this.t("delete")}</button>`:w}`:g`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):l.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
          ${p&&!this._techMode?this.renderMultiToggle():w}
        </div>
      </div>
    </div>`}renderWallSetFoot(e,t,n,i){let o=!this._wallMulti.length,s=t.every(l=>this.isFixedItem("furniture",l)),a=!s&&t.some(l=>this.isFixedItem("furniture",l));return g`<b>${o?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:t.length})}</b>
      ${a?g`<span class="fp3d-wv-fixnote">${this.t("block_some_fixed")}</span>`:w}
      ${o?g`<div class="fp3d-seg" role="group">
              <button aria-pressed="true">${this.t("wv_block_all")}</button>
              <button aria-pressed="false" @click=${()=>this._wallSingle=!0}>${this.t("wv_block_one")}</button>
            </div>
            <button class="fp3d-btn" @click=${()=>{let l=this._wallSel;this._wallMulti=t,this.ungroupSelectionOf(t),this._wallSel=l}}>${this.t("block_break")}</button>`:g`<button class="fp3d-btn fp3d-primary" @click=${()=>{this.groupIds(t),this._wallMulti=[]}}>▣ ${this.t("block_make")}</button>`}
      ${n?this.len(this.t("wall_view_left"),Math.round(i(n.s0,n.s1)[0]*1e3)/1e3,l=>{let d=l-i(n.s0,n.s1)[0];this.moveSetOnWall(e,t,e.rightward?d:-d,null)},.01,0):w}
      <button class="fp3d-btn ${a?"fp3d-primary":""}" @click=${()=>{let l=new Set(t),d=!s&&!a;this.change((c,h)=>{for(let u of h.furniture)l.has(u.id)&&(u.locked=d||null)})}}>${s?`\u{1F513} ${this.t("unfix")}`:a?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
      <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall(t)}>${this.t("delete")}</button>`}deleteOnWall(e){if(!e.length||!this.isAdmin)return;if(e.length>1){if(!confirm(this.t(e.some(n=>this.isFixedItem("furniture",n))?"block_delete_fixed":"block_delete",{n:e.length})))return}else if(!this.confirmFixedDelete("furniture",e[0]))return;let t=new Set(e);this.change((n,i)=>i.furniture=i.furniture.filter(o=>!t.has(o.id))),this._wallSel=null,this._wallMulti=[],this._wallSingle=!1}groupIds(e){let t=new Set(e),n=G("block");this.change((i,o)=>{for(let s of o.furniture)t.has(s.id)&&(s.group=n)})}ungroupSelectionOf(e){let t=new Set(e);this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.group=null)})}addOnWall(e,t,n){let i=this.floor;if(!i||!this.isAdmin)return;this.rememberWallType(e);let o=this._wallGap;if(o)return this.addIntoGap(e,t,n,o);let[s,a,l]=Ve(e),d=[...Ft(t,i,n).map(_=>[_.s0,_.s1]),...xn(t,i).filter(_=>_.y0<.05).map(_=>[_.s0,_.s1])],c=Math.max(0,t.length/2-s/2);for(let _=.1;_+s<=t.length-.05;_+=.05)if(!d.some(([y,v])=>_<v+.05&&_+s>y-.05)){c=_;break}let h=pt(i,n.id,t.a,t.b)?this._doc.settings.wall_interior/2:0,[u,p]=Qe(t,c+s/2,h+a/2+.01),f=Math.round((Math.atan2(-t.n[0],t.n[1])*180/Math.PI%360+360)%360),m={id:G("furniture"),type:e,x:x(u),z:x(p),rotation:f,w:s,d:a,h:l,variant:null};this.change((_,y)=>y.furniture.push(m)),this._runSel=null,this._runMode=null,this._wallSel=m.id}addIntoGap(e,t,n,i){let o=this.floor,s=i.s1-i.s0,[a,l,d]=Ve(e);wo.has(e)&&(a>s+.005||s-a<.1)&&(a=Math.round(s*1e3)/1e3);let c=pt(o,n.id,t.a,t.b)?this._doc.settings.wall_interior/2:0,h=i.s0+Math.min(a,s)/2,[u,p]=Qe(t,h,c+l/2+.01),f=Math.round((Math.atan2(-t.n[0],t.n[1])*180/Math.PI%360+360)%360),m={id:G("furniture"),type:e,x:x(u),z:x(p),rotation:f,w:a,d:l,h:d,variant:null};this.change((_,y)=>y.furniture.push(m)),this._wallGap=null,this._wallSel=m.id,this._wallMulti=[]}rememberWallType(e){try{let t=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");localStorage.setItem("neonplan3d.wallRecent",JSON.stringify([e,...t.filter(n=>n!==e)].slice(0,6)))}catch{}}wallRecent(){try{let e=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");return Array.isArray(e)?e.filter(t=>typeof t=="string"&&(Fi.includes(t)||!!be(t))):[]}catch{return[]}}renderWallFurniture(e,t){let n=this.hass?.language??"en",i=this._wallGap,o=i?i.s1-i.s0:0,s=Dn(this._wallQuery.trim()),a=this._wallCat,l=Qd(this.packs??[]),d=l.filter(b=>!b.generated).map(({type:b,item:$,pack:k})=>({type:b,label:We($,n),search:`${Object.values($.name).join(" ")} ${k.name}`,wall:$.mount==="wall"})),c=l.filter(b=>b.generated).map(({type:b,item:$,pack:k})=>({type:b,label:We($,n),search:`${Object.values($.name).join(" ")} ${k.name}`,wall:$.mount==="wall"})),h=b=>this.t(`furn_${b}`),u=[];a==="pack"?u=d:a==="generated"?u=c:a==="energy"?u=["meter","inverter","home_battery","wallbox"].map(b=>({type:b,label:h(b),search:""})):a?u=(nr[a]??[]).map(b=>({type:b,label:h(b),search:qe(ko,`furn_${b}`)})):s||i?u=[...Object.values(nr).flat().filter((b,$,k)=>k.indexOf(b)===$).map(b=>({type:b,label:h(b),search:qe(ko,`furn_${b}`)})),...d,...c]:this.wallRecent().length||(u=nr.base.map(b=>({type:b,label:h(b),search:""})));let p=s.split(/\s+/).filter(Boolean),f=p.length?u.filter(b=>p.every($=>Dn(`${b.label} ${b.search} ${b.type.replace(/[_:.]/g," ")}`).includes($))):u;if(i){let b=($,k)=>k||ep.has($);f=f.filter($=>b($.type,$.wall)===!i.low).filter($=>Ve($.type)[0]<=o+.01||wo.has($.type)&&o>=(tp[$.type]??.2)).sort(($,k)=>{let M=S=>wo.has(S)?1:Math.min(1,Ve(S)[0]/o);return M(k.type)-M($.type)||Number($.type.startsWith("pack:"))-Number(k.type.startsWith("pack:"))})}let m=!a&&!s&&!i?this.wallRecent():[],_=[["base","\u25AD"],["hang","\u2594"],["tall","\u25AF"],["living","\u{1F6CB}"],["light","\u{1F4A1}"],["switches","\u{1F50C}"],...d.length?[["pack","\u{1F9E9}"]]:[],...c.length?[["generated","\u2728"]]:[],...ce("energy_pro")?[["energy","\u26A1"]]:[]],y=[...m,...f.slice(0,40).map(b=>b.type)];this.askKitPics(y),this._wallPicTick;let v=(b,$)=>{let k=Ve(b)[0],M=i&&wo.has(b)&&(k>o+.005||o-k<.1),S=this.kitPics.get(b);return g`<button class="fp3d-wv-tile" title=${$} @click=${()=>this.addOnWall(b,e,t)}>
        <span class="fp3d-wv-tile-pic">${S?g`<img src=${S} alt="" />`:g`<i></i>`}</span>
        <span class="fp3d-wv-tile-name">${$}</span>
        <small class=${M?"fp3d-wv-fit":""}>${M?`\u2194 ${this.m(o,2)}`:this.m(k,2)}</small>
      </button>`};return g`<aside class="fp3d-wv-kit">
      <h4>${this.t("wv_kit_title")}</h4>
      <div class="fp3d-wv-cats">
        ${_.map(([b,$])=>g`<button class="fp3d-wv-cat ${a===b?"fp3d-on":""}" title=${this.t(`wv_cat_${b}`)} @click=${()=>this._wallCat=a===b?null:b}><span>${$}</span>${this.t(`wv_cat_${b}`)}</button>`)}
      </div>
      <input class="fp3d-search" type="search" placeholder=${this.t("furniture_search")} .value=${this._wallQuery} @input=${b=>this._wallQuery=b.target.value} />
      ${i?g`<p class="fp3d-sub fp3d-wv-gapnote">${this.t("wv_gap",{w:this.m(o,2)})} <button class="fp3d-link" @click=${()=>this._wallGap=null}>✕</button></p>`:!a&&!s?g`<p class="fp3d-sub">${this.t("wv_gap_hint")}</p>`:w}
      ${a?g`<h4>${this.t(`wv_cat_${a}`)}</h4>`:w}
      ${m.length?g`<h4>${this.t("wv_recent")}</h4><div class="fp3d-wv-tiles">${m.map(b=>v(b,be(b)?We(be(b),n):h(b)))}</div>`:w}
      ${(a||s||i)&&!f.length?g`<p class="fp3d-sub">${this.t(i?"wv_none_fits":"furniture_search_none")}</p>`:w}
      <div class="fp3d-wv-tiles">${f.slice(0,40).map(b=>v(b.type,b.label))}</div>
    </aside>`}async askKitPics(e){let t=e.filter(n=>!this.kitPicsAsked.has(n));if(t.length){for(let n of t)this.kitPicsAsked.add(n);try{let n=await bo();for(let i of t){let[o,s,a]=Ve(i);this.kitPics.set(i,n.furniturePreview({type:i,w:o,d:s,h:a,variant:null,lamp:Oi[i]??null},120,this.packs??[]))}}catch{}this._wallPicTick++}}renderWallKit(e,t,n){let i=!!n,o=ce("energy_pro");if(!i)return this.isAdmin?this.renderWallFurniture(e,t):w;if(this._techMode&&n)return this.renderTechKit(e,t,n);if(!this.isAdmin||!i&&!o)return w;let s=l=>g`<button class="fp3d-btn" @click=${()=>this.addOnWall(l,e,t)}>+ ${this.t(`furn_${l}`)}</button>`,a=(l,d)=>g`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,l)}>+ ${this.t(d)}</button>`;return g`<aside class="fp3d-wv-kit">
      ${i?g`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)} ${a("valve","wall_run_valve")} ${a("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(l=>g`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===l?null:l}}>+ ${this.t(`wall_kit_${l}`)}</button>`)}`:w}
      ${o?g`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(s)}`:w}
    </aside>`}get runPool(){return this.poolArea??this.floor?.outdoor.find(e=>e.type==="pool"&&e.points.length>=3)}get canLayRuns(){return(ys()||this._techMode)&&!!this.runPool}runFrame(e){let[t,n]=e.split("|"),i=this.floor?.rooms.find(o=>o.id===t);return i&&Number(n)<i.points.length?At(i,Number(n)):null}docWithDraft(){let e=this._runDraft;if(!e||!this._wallView)return this._doc;let t=[...e.from||!e.anchor?[]:[e.anchor],...e.pts];if(!t.length)return this._doc;let n=structuredClone(this._doc),i=n.floors.find(a=>a.outdoor.some(l=>l.id===e.pool)),o=i?.outdoor.find(a=>a.id===e.pool);if(!i||!o)return this._doc;o.pool??={};let s={id:"__draft",from:e.from,to:"",floor_id:i.id,points:t.map(a=>[a[0],a[2]]),heights:t.map(a=>a[1])};return o.pool.pipes=[...o.pool.pipes??[],s],n}runLast(e,t){if(e.pts.length)return e.pts[e.pts.length-1];if(e.fromT)return e.fromT;let n=de(this._doc,t.floor,t.pool);if(e.extend){let o=t.pool.pool?.pipes?.find(a=>a.id===e.extend.pipe),s=o?Ke(o,n):[];return(e.extend.end==="to"?s[s.length-1]:s[0])??null}let i=n(e.from);return i?[i.x,i.y,i.z]:null}runPick(e,t,n,i=!1){if(!i){for(let l of e.runs)for(let d of l.ends)if(Math.hypot(d.s-t,d.y-n)<.12)return{end:{pipe:l.id,end:d.end}}}let o=de(this._doc,e.floor,e.pool),s=null,a=[...e.floor.furniture.filter(l=>ve.includes(l.type)).flatMap(l=>tt(l.type).length?tt(l.type).map(d=>`dev:${l.id}:${d}`):[`dev:${l.id}`]),...(e.pool.pool?.joints??[]).map(l=>l.kind==="wall"||l.kind==="floor"?`joint:${l.id}:inside`:`joint:${l.id}`)];for(let l of i?[]:a){let d=o(l);if(!d)continue;let c=me(e.frame,[d.x,d.z]);if(c.d<-.3||c.d>1.6)continue;let h=Math.hypot(c.s-t,d.y-n);h<.12&&(!s||h<s.d)&&(s={node:l,d:h})}if(s)return{node:s.node};if(this._techMode&&!i){let l=e.floor.furniture.find(d=>{if(!ve.includes(d.type)||d.type==="pool_valve")return!1;let c=Ce(d).map(u=>me(e.frame,u));if(Math.min(...c.map(u=>u.d))>1.6||Math.max(...c.map(u=>u.d))<-.3)return!1;let h=Fe(e.floor,d);return Math.min(...c.map(u=>u.s))-.03<=t&&t<=Math.max(...c.map(u=>u.s))+.03&&h-.03<=n&&n<=h+d.h+.03});if(l)return{node:`dev:${l.id}`}}for(let l of e.runs)for(let d of l.pieces){let[c,h]=[d.s1-d.s0,d.y1-d.y0],u=c*c+h*h,p=u>0?Math.max(0,Math.min(1,((t-d.s0)*c+(n-d.y0)*h)/u)):0,[f,m]=[d.s0+c*p,d.y0+h*p];if(Math.hypot(f-t,m-n)<(i?.24:.07))return{pipe:{id:l.id,p:et(e.frame,f,m,d.d0+(d.d1-d.d0)*p)}}}return{}}eraseAt(e,t,n){let i=(l,d,c)=>Math.hypot(l-t,d-n)<c;for(let l of e.runs)for(let d of l.fittings)if(i(d.s,d.y,.1*Math.max(1,this.wvScale))){this.changePool(e.pool.id,c=>{let h=c.pipes?.find(u=>u.id===l.id);h&&(h.fittings=(h.fittings??[]).filter(u=>u.id!==d.id))});return}let o=de(this._doc,e.floor,e.pool),s=(e.pool.pool?.joints??[]).find(l=>{let d=l.kind==="wall"||l.kind==="floor"?`joint:${l.id}:inside`:`joint:${l.id}`,c=o(d);if(!c)return!1;let h=me(e.frame,[c.x,c.z]);return h.d>-.3&&h.d<1.6&&i(h.s,c.y,.1)});if(s){let l=`joint:${s.id}`;this.changePool(e.pool.id,d=>{d.joints=(d.joints??[]).filter(c=>c.id!==s.id),d.pipes=(d.pipes??[]).filter(c=>ke(c.from)!==l&&ke(c.to)!==l)}),this._runSel=null;return}let a=this.runPick(e,t,n,!0);if(a.pipe){let l=a.pipe.id;this.changePool(e.pool.id,d=>d.pipes=(d.pipes??[]).filter(c=>c.id!==l)),this._runSel=null}}runDown(e,t){if(!this._runMode||!this.isAdmin||(e.stopPropagation(),this._techAsk=null,this._techMode&&this._runMode==="draw"))return;let{s:n,y:i}=t.pt(e);this.runAt(t,n,i,e.altKey,e.detail,null)}runDown3d(e){let t=this.runCtx3d;if(!this._runMode||!t||e.button!==0||!this.isAdmin||!this._wallView3d)return;let n=this.wall3dEl?.viewer;if(!n)return;e.stopPropagation(),e.preventDefault();let i=n.renderer.domElement.getBoundingClientRect(),[o,s]=[e.clientX-i.left,e.clientY-i.top],a=n.furnitureIdAt(o,s),l=a?t.floor.furniture.find(v=>v.id===a&&ve.includes(v.type)):void 0,d=n.pointerRay(o,s),c=Qe(t.frame,0,t.gap),h=t.frame.n,u=d.d[0]*h[0]+d.d[2]*h[1];if(Math.abs(u)<1e-6)return;let p=((c[0]-d.o[0])*h[0]+(c[1]-d.o[2])*h[1])/u;if(p<=0&&!l)return;let f=[d.o[0]+d.d[0]*p,d.o[1]+d.d[1]*p,d.o[2]+d.d[2]*p],m=t.floor.elevation+(n.floorMap.get(t.floor.id)?.y??0),_=de(this._doc,t.floor,t.pool),y=()=>{let v=tt(l.type);if(!v.length)return`dev:${l.id}`;let b=$=>{let k=_($),M=[k.x-d.o[0],k.y+m-d.o[1],k.z-d.o[2]],S=M[0]*d.d[0]+M[1]*d.d[1]+M[2]*d.d[2];return Math.hypot(M[0]-d.d[0]*S,M[1]-d.d[1]*S,M[2]-d.d[2]*S)};return v.map($=>`dev:${l.id}:${$}`).sort(($,k)=>b($)-b(k))[0]};this.runAt(t,me(t.frame,[f[0],f[2]]).s,f[1]-m,e.altKey,e.detail,l&&this._runMode==="draw"?y():null)}runAt(e,t,n,i,o,s){let a=this._runMode;if(!a)return;if(a==="tee"&&this._techMode){let c=this.runPick(e,t,n,!0);c.pipe&&this.teeOnPipe(e,c.pipe.id,c.pipe.p);return}if(a==="hole_wall"||a==="hole_floor"||a==="tee"||a==="y")return this.placeJoint(e,a,t,n);if(a==="feed")return this.placeFeed(e,t,n);if(a==="erase")return this.eraseAt(e,t,n);let l=s?{node:s}:this.runPick(e,t,n,a!=="draw");if(a!=="draw"){if(!l.pipe&&this._techMode)return;l.pipe&&this.addFitting(e,l.pipe.id,l.pipe.p,a),this._runMode=this._techMode?"draw":null,this._techMode&&(this._runSel=null);return}let d=this._runDraft;if(d&&this._techMode&&!this.techStroke&&((d.pts.length>=2||(d.extend||d.fromT||d.from)&&d.pts.length)&&this.finishRun("",null),this._runDraft=null,d=null),!d){let c={pool:e.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:e.key,d:e.gap},h;l.end?h={...c,extend:l.end}:l.node?h={...c,from:l.node}:l.pipe?h={...c,fromT:l.pipe.p}:h={...c,pts:[et(e.frame,Math.round(t*20)/20,Math.round(n*20)/20,e.gap)]},this._runDraft={...h,anchor:this.runLast({...h,pts:[]},e)};return}if(o>=2)return void this.finishRun("",null);if(l.node&&l.node!==d.from)return void this.finishRun(l.node,null);if(l.pipe)return void this.finishRun("",l.pipe.p);this._runDraft={...d,pts:[...d.pts,...this.runStep(d,e,t,n,i)],wall:e.key,d:e.gap}}runStep(e,t,n,i,o){let s=Math.round(n*20)/20,a=Math.round(i*20)/20,l=[],d=this.runLast(e,t);if(d&&e.wall!==t.key){let c=this.runFrame(e.wall),h=c&&Sl(c,e.d,t.frame,t.gap);h&&(d=[x(h[0]),d[1],x(h[1])],l.push(d))}if(d&&!o){let c=me(t.frame,[d[0],d[2]]);c.d>-.35&&c.d<.6&&(Math.abs(s-c.s)<Math.abs(a-d[1])?s=c.s:a=d[1])}return l.push(et(t.frame,s,a,t.gap)),l.map(c=>[x(c[0]),x(c[1]),x(c[2])])}finishRun(e,t,n=[],i){let o=this._runDraft,s=this.floor,a=this.pipeRules;if(this._runDraft=null,!o||!s||!a)return null;let l=[...o.pts,...n],d=this._techMode?this.runFrame(o.wall):null,c=this._techMode?this.floor?.outdoor.find(u=>u.id===o.pool):void 0;if(d&&c&&!n.length&&(e||t)){let u=l.length?l[l.length-1]:(()=>{let f=o.from?de(this._doc,s,c)(o.from):null;return f?[f.x,f.y,f.z]:o.fromT})(),p=t?{x:t[0],y:t[1],z:t[2]}:de(this._doc,s,c)(e);if(u&&p){let f=me(d,[u[0],u[2]]),m=me(d,[p.x,p.z]);Math.abs(f.s-m.s)>.03&&Math.abs(u[1]-p.y)>.03&&l.push(et(d,m.s,u[1],o.d))}}if(!l.length&&!t&&(!e||e===o.from)&&!o.fromT)return null;let h=null;return this.changePool(o.pool,(u,p)=>{let f=u.joints??=[],m=u.pipes??=[],_=de(this._doc,s,p),y=R=>{let L=R.startsWith("joint:")?f.find(C=>`joint:${C.id}`===R):void 0;return L?{x:L.x,z:L.z,y:L.y}:_(R)},v=R=>{let L=null;for(let O of m){let J=Sn(Ke(O,y),R);J&&J.d<.12&&(!L||J.d<L.d)&&(L={pipe:O,d:J.d})}let C=L&&Xi(L.pipe,y,R,G("joint"),G("pipe"));return!L||!C?"":(f.push(C.joint),m.splice(m.indexOf(L.pipe),1,C.first,C.second),`joint:${C.joint.id}:out2`)},b=(R,L=[])=>{let{kind:C,id:O,port:J}=oe(R),N=C==="joint"&&!J?f.find(ee=>ee.id===O):void 0;if(!N||!N.kind)return R;if(N.kind==="wall"||N.kind==="floor")return`joint:${O}:inside`;let j=new Set([...m.flatMap(ee=>[ee.from,ee.to]),...L]),Y=Mn(N.kind).find(ee=>!j.has(`joint:${O}:${ee}`));return Y?`joint:${O}:${Y}`:R},$=o.fromT?v(o.fromT):b(o.from),k=t?v(t):b(e,[$]),M=s.furniture.filter(R=>ve.includes(R.type)).map(R=>({id:R.id,type:R.type})),S=R=>m.flatMap(L=>[L.from,L.to]).filter(L=>ke(L)===R).map(L=>oe(L).port).filter(L=>!!L),A=R=>{let{kind:L,id:C}=oe(R);return L==="port"?p.pool?.ports?.find(O=>O.id===C)?.kind==="waste":L==="joint"&&/kanal|waste|abwasser|backwash/i.test(f.find(O=>O.id===C)?.name??"")},W=(R,L)=>{let{kind:C,id:O,port:J}=oe(R);if(C!=="dev"||J)return R;let N=s.furniture.find(Y=>Y.id===O)?.type??"",j=a.autoPort(N,L?a.nodeFlow(L,p,M):null,A(L),S(`dev:${O}`));return j?`dev:${O}:${j}`:R};$=W($,k),k=W(k,$);let E=l.map(R=>[x(R[0]),x(R[2])]),D=l.map(R=>x(R[1])),z=o.extend,F=z&&m.find(R=>R.id===z.pipe);if(z&&F){Object.assign(F,je(F,y)),z.end==="to"?(F.points=[...F.points,...E],F.heights=[...F.heights??[],...D],F.to=k):(F.points=[...E.reverse(),...F.points],F.heights=[...D.reverse(),...F.heights??[]],F.from=k),i!==void 0&&(F.height=i),h=F.id;return}let H={id:G("pipe"),from:$,to:k,floor_id:s.id,points:E,heights:D,height:i??D[D.length-1]??null};H=a.orientPipe(H,$?a.nodeFlow($,p,M):null,k?a.nodeFlow(k,p,M):null),m.push(H),h=H.id}),h&&!this._techMode&&(this._runSel={pipe:h,pt:null}),this._runMode=this._techMode?"draw":null,h}teeOnPipe(e,t,n){let i=de(this._doc,e.floor,e.pool);this.changePool(e.pool.id,o=>{let s=[...o.pipes??[]],a=s.findIndex(d=>d.id===t);if(a<0)return;let l=Xi(s[a],i,n,G("joint"),G("pipe"));l&&(o.joints=[...o.joints??[],l.joint],s.splice(a,1,l.first,l.second),o.pipes=s)}),this._runMode="draw"}placeFeed(e,t,n){let i=this._feedKind;this._feedKind=null,this._runMode="draw",i&&this.feedAt(e,i,t,n)}feedAt(e,t,n,i){let o=this.floor;if(!o)return null;let s=Math.round(n*20)/20,a=i<.25,l=e.gap-ir,d=pt(e.floor,e.room.id,e.frame.a,e.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c=this.t(`feed_${t}`),[h,u]=dn(e.frame,s,a?e.gap:l),p=a?{id:G("joint"),kind:"floor",x:h,z:u,y:0,name:c}:{id:G("joint"),kind:"wall",x:h,z:u,y:Math.round(i*20)/20,nx:x(e.frame.n[0]),nz:x(e.frame.n[1]),depth:x(d),name:c};return this.changePool(e.pool.id,(f,m)=>{f.joints=[...f.joints??[],p];let _=(f.ports??[]).filter(k=>k.kind===t);if(t==="waste"&&!_.length){let k=It(p,"outside"),M={id:G("port"),kind:"waste",x:x(k.x-e.frame.n[0]*1),z:x(k.z-e.frame.n[1]*1)};f.ports=[...f.ports??[],M],_=[M]}if(!_.length)return;let y=de(this._doc,o,m),v=k=>{let{kind:M,id:S,port:A}=oe(k),W=M==="joint"?(f.joints??[]).find(D=>D.id===S):void 0;if(W)return It(W,A);let E=M==="port"?(f.ports??[]).find(D=>D.id===S):void 0;return E?y(k)??{x:E.x,y:.02,z:E.z}:y(k)},b=k=>{let{kind:M,id:S}=oe(k);if(M==="port"){let A=(f.ports??[]).find(W=>W.id===S);return A?ti(A.kind):null}return null},$=Pn({from:`joint:${p.id}:outside`,vias:[],to:_.map(k=>`port:${k.id}`),floorId:o.id},v,f.joints??[],b,k=>G(k));f.joints=[...f.joints??[],...$.joints],f.pipes=[...f.pipes??[],...$.pipes]}),p}endStroke(e,t,n){let i=this._runDraft;if(!i)return;let o=this.runLast(i,e),s=o?me(e.frame,[o[0],o[2]]):null,a=s&&s.d>-.35&&s.d<.6?{s:s.s,y:o[1]}:t[0],l=np([a,...rr(t,.08),n]),d=l.slice(1,-1).map(f=>{let m=et(e.frame,f.s,f.y,e.gap);return[x(m[0]),x(m[1]),x(m[2])]}),c=this.runPick(e,n.s,n.y);if(this._techAsk=null,c.node&&c.node!==i.from){this.finishRun(c.node,null,d);return}if(c.pipe){this.finishRun("",c.pipe.p,d);return}let h=l[l.length-1],u=et(e.frame,Math.round(h.s*20)/20,Math.round(h.y*20)/20,e.gap),p=this.finishRun("",null,[...d,[x(u[0]),x(u[1]),x(u[2])]]);p&&(this._techAsk={s:h.s,y:h.y,pipe:p})}answerAsk(e,t){let n=this._techAsk;if(this._techAsk=null,!n)return;if(t==="cancel"){this.changePool(e.pool.id,o=>o.pipes=(o.pipes??[]).filter(s=>s.id!==n.pipe));return}if(!t)return;let i=this.feedAt(e,t,n.s,n.y);i&&this.changePool(e.pool.id,o=>{let s=o.pipes?.find(a=>a.id===n.pipe);s&&(s.to?s.from||(s.from=`joint:${i.id}:inside`):s.to=`joint:${i.id}:inside`)})}renderTechKit(e,t,n){let i=n.pool,o=this.pipeRules;if(!o)return w;let s=c=>g`<button class="fp3d-wv-tile" @click=${()=>this.addOnWall(c,e,t)}>
      <span class="fp3d-wv-tile-pic">${this.kitPics.get(c)?g`<img src=${this.kitPics.get(c)} alt="" />`:g`<i></i>`}</span>
      <span class="fp3d-wv-tile-name">${this.t(`furn_${c}`)}</span>
    </button>`;this.askKitPics(["pool_pump","pool_filter","pool_heat_pump","pool_dosing"]);let a=["skimmer","drain","inlet","waste"].filter(c=>c==="waste"||(i.pool?.ports??[]).some(h=>h.kind===c)),l=(c,h)=>g`<button class="fp3d-btn ${this._runMode===c?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===c?"draw":c}}>+ ${this.t(h)}</button>`,d=this._techAsk;return g`<aside class="fp3d-wv-kit fp3d-tech-kit">
      ${d?g`<div class="fp3d-tech-ask">
            <b>${this.t("tech_ask")}</b>
            ${["skimmer","drain","inlet","waste"].map(c=>g`<button class="fp3d-btn fp3d-tech-feed" @click=${()=>this.answerAsk(n,c)}><i>${c==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${c}`)}</button>`)}
            <button class="fp3d-btn" @click=${()=>this.answerAsk(n,null)}>${this.t("tech_ask_loose")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.answerAsk(n,"cancel")}>${this.t("delete")}</button>
          </div>`:this.renderTechStep(n)}
      <div class="fp3d-seg fp3d-tech-pen" role="group">
        <button aria-pressed=${this._runMode==="draw"} @click=${()=>{this._runMode="draw",this._runSel=null}}><span>✏</span>${this.t("tech_draw")}</button>
        <button aria-pressed=${this._runMode!=="draw"&&this._runMode!=="feed"&&this._runMode!=="erase"} @click=${()=>{this._runDraft=null,this._runMode=null}}><span>✋</span>${this.t("tech_pick")}</button>
        <button aria-pressed=${this._runMode==="erase"} title=${this.t("tech_erase_hint")} @click=${()=>{this._runDraft=null,this._runSel=null,this._feedKind=null,this._runMode=this._runMode==="erase"?"draw":"erase"}}><span>🧽</span>${this.t("tech_erase")}</button>
      </div>
      <button class="fp3d-btn fp3d-tech-undo" ?disabled=${!this._canUndo} title="Ctrl+Z" @click=${()=>{this._runDraft=null,this.undo()}}>↶ ${this.t("undo")}</button>
      <h4>${this.t("tech_feeds")}</h4>
      ${a.map(c=>{let h=o.feedDone(i,c);return g`<button class="fp3d-btn fp3d-tech-feed ${this._feedKind===c?"fp3d-primary":""} ${h?"fp3d-on":""}" ?disabled=${h} @click=${()=>{this._runDraft=null,this._feedKind=this._feedKind===c?null:c,this._runMode=this._feedKind?"feed":"draw"}}><i>${c==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${c}`)}${h?g`<small>✓</small>`:w}</button>`})}
      ${(i.pool?.ports??[]).some(c=>c.kind!=="waste")?w:g`<p class="fp3d-sub">${this.t("tech_no_ports")}</p>`}
      <h4>${this.t("tech_devices")}</h4>
      <div class="fp3d-wv-tiles">${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)}</div>
      <h4>${this.t("tech_fittings")}</h4>
      ${l("valve","wall_run_valve")} ${l("sight","wall_run_sight")}
      <button class="fp3d-btn ${this._runMode==="tee"?"fp3d-primary":""}" title=${this.t("tech_step_tee")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode==="tee"?"draw":"tee"}}>+ ${this.t("joint_add_tee")}</button>
      <p class="fp3d-sub">${this.t("tech_hint")}</p>
    </aside>`}renderTechStep(e){let t=e.pool,n=this.pipeRules;if(!n)return w;let i=t.pool?.ports??[],o=e.floor.furniture.filter(p=>ve.includes(p.type)),s=(p,f)=>g`<div class="fp3d-tech-step ${p===null?"fp3d-done":""}"><b>${p===null?"\u2713":this.t("tech_step",{n:p})}</b>${f}</div>`;if(this._runMode==="feed")return s(1,this.t("tech_feed_place"));if(this._runMode==="erase")return g`<div class="fp3d-tech-step fp3d-tech-erasing"><b>🧽 ${this.t("tech_erase")}</b>${this.t("tech_erase_hint")}</div>`;if(this._runMode==="valve"||this._runMode==="sight")return s(4,this.t("tech_step_fit"));if(this._runMode==="tee")return s(4,this.t("tech_step_tee"));if(this._runDraft)return s(3,this.t("tech_step_drawing"));if(!i.some(p=>p.kind!=="waste"))return s(1,this.t("tech_no_ports"));let a=["skimmer","drain","inlet"].find(p=>i.some(f=>f.kind===p)&&!n.feedDone(t,p));if(a)return s(1,this.t("tech_step_feed",{name:this.t(`feed_${a}`)}));let l=o.find(p=>p.type==="pool_pump"),d=o.find(p=>p.type==="pool_filter");if(!l||!d)return s(2,this.t("tech_step_devices"));let c=n.issues(t,o.map(p=>({id:p.id,type:p.type}))),h=p=>this.poolNodeLabel(t,p),u=c.find(p=>p.kind==="port");if(u){let{port:p}=oe(u.node),f={suction:this.t("feed_skimmer"),pressure:h(`dev:${d.id}:pump`),pump:h(`dev:${l.id}:pressure`),return:o.some(m=>m.type==="pool_heat_pump")?this.t("furn_pool_heat_pump"):this.t("feed_inlet"),waste:this.t("feed_waste"),in:h(`dev:${d.id}:return`),out:this.t("feed_inlet")};return s(3,this.t("tech_step_line",{a:p?f[p]??"\u2026":"\u2026",b:h(u.node)}))}return c.some(p=>p.kind==="loose")?s(3,this.t("tech_step_loose")):s(null,this.t("tech_ok"))}renderTechIssues(e){let t=e.floor.furniture.filter(a=>ve.includes(a.type)).map(a=>({id:a.id,type:a.type})),n=this.pipeRules;if(!n)return w;let i=n.issues(e.pool,t);if(!i.length)return g`<span class="fp3d-tech-ok">✓ ${this.t("tech_ok")}</span>`;let o=i.filter(a=>a.kind==="loose").length,s=[...o?[this.t("tech_issue_loose",{n:o})]:[],...i.filter(a=>a.kind==="port").map(a=>this.t("tech_issue_port",{name:this.poolNodeLabel(e.pool,a.node)})),...i.filter(a=>a.kind==="feed").map(a=>this.t("tech_issue_feed",{name:this.t(`feed_${a.node}`)}))];return g`<span class="fp3d-tech-issues">⚠ ${s.slice(0,4).join(" \xB7 ")}${s.length>4?" \u2026":""}</span>`}placeJoint(e,t,n,i){let o=e.gap-ir,s=Math.round(n*100)/100,a=Math.round(i*100)/100,l=pt(e.floor,e.room.id,e.frame.a,e.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,d;if(t==="hole_wall"){let[c,h]=dn(e.frame,s,o);d={id:G("joint"),kind:"wall",x:c,z:h,y:Math.max(.05,a),nx:x(e.frame.n[0]),nz:x(e.frame.n[1]),depth:x(l)}}else if(t==="hole_floor"){let[c,h]=dn(e.frame,s,e.gap);d={id:G("joint"),kind:"floor",x:c,z:h,y:0}}else{let[c,h]=dn(e.frame,s,e.gap);d={id:G("joint"),kind:t,x:c,z:h,y:a}}this.changePool(e.pool.id,c=>c.joints=[...c.joints??[],d]),this._runMode=null}runOut(e,t){let n=this._runDraft,i=n&&this.runLast(n,e);if(!n||!i)return;if(t==="down")return void this.finishRun("",null,[[i[0],-.3,i[2]]],-.3);let o=me(e.frame,[i[0],i[2]]),s=pt(e.floor,e.room.id,e.frame.a,e.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,a=et(e.frame,o.s,i[1],-(s+.15));this.finishRun("",null,[[x(a[0]),i[1],x(a[2])]],i[1])}addFitting(e,t,n,i){let o=de(this._doc,e.floor,e.pool);this.changePool(e.pool.id,s=>{let a=s.pipes?.find(d=>d.id===t),l=a&&Sn(Ke(a,o),n);!a||!l||(a.fittings=[...a.fittings??[],{id:G("fit"),kind:i,at:x(l.at),...i==="valve"?{open:!0}:{}}])}),this._runSel={pipe:t,pt:null}}runPieceDown(e,t,n,i){if(this._runMode)return;if(e.stopPropagation(),this._wallSel=null,this._runSel?.pipe!==n.id||!this.isAdmin){this._runSel={pipe:n.id,pt:null};return}let{s:o,y:s}=t.pt(e),a=n.pieces.find(p=>p.k===i),l=Math.hypot(a.s1-a.s0,a.y1-a.y0)>0?Math.hypot(o-a.s0,s-a.y0)/Math.hypot(a.s1-a.s0,a.y1-a.y0):0,d=a.d0+(a.d1-a.d0)*Math.min(1,l),c=this._doc,h=de(c,t.floor,t.pool),u=-1;this.changePool(t.pool.id,p=>{let f=p.pipes?.find(m=>m.id===n.id);f&&(Object.assign(f,je(f,h)),u=Math.max(0,Math.min(f.points.length,i+1-ni(f,h))),f.points.splice(u,0,dn(t.frame,o,d)),f.heights.splice(u,0,x(s)))}),!(u<0)&&(this._runSel={pipe:n.id,pt:u},this.runDrag={pipe:n.id,i:u,d,base:c,moved:!0},e.currentTarget.closest("svg")?.setPointerCapture(e.pointerId))}runPointDown(e,t,n,i){if(this._runMode||!this.isAdmin)return;e.stopPropagation();let o=de(this._doc,t.floor,t.pool);if(this.doubleTap(e,`runpt:${n}:${i}`)){this.changePool(t.pool.id,d=>{let c=d.pipes?.find(h=>h.id===n);c&&(Object.assign(c,je(c,o)),c.points.splice(i,1),c.heights.splice(i,1))}),this._runSel={pipe:n,pt:null};return}let s=t.pool.pool?.pipes?.find(d=>d.id===n),l=(s&&je(s,o))?.points[i];l&&(this._runSel={pipe:n,pt:i},this.runDrag={pipe:n,i,d:me(t.frame,l).d,base:this._doc,moved:!1},e.currentTarget.closest("svg")?.setPointerCapture(e.pointerId))}runPointMove(e,t){let n=this.runDrag;if(!n)return;let{s:i,y:o}=t.pt(e);i=Math.round(i*100)/100,o=Math.round(o*100)/100;let s=de(n.base,t.floor,t.pool),l=n.base.floors.flatMap(c=>c.outdoor).find(c=>c.id===t.pool.id)?.pool?.pipes?.find(c=>c.id===n.pipe);if(!l)return;let d=je(l,s);if(!e.altKey){let c=Ke(d,s),h=ni(d,s);for(let u of[c[n.i+h-1],c[n.i+h+1]]){if(!u)continue;let p=me(t.frame,[u[0],u[2]]);Math.abs(p.s-i)<.04&&(i=x(p.s)),Math.abs(u[1]-o)<.04&&(o=x(u[1]))}}n.moved=!0,this.change((c,h)=>{let u=h.outdoor.find(p=>p.id===t.pool.id)?.pool?.pipes?.find(p=>p.id===n.pipe);u&&(Object.assign(u,je(u,s)),u.points[n.i]=dn(t.frame,i,n.d),u.heights[n.i]=o)},n.base,!1)}runPointUp(){let e=this.runDrag;this.runDrag=null,e?.moved&&this.pushHistory(e.base)}fittingDown(e,t,n,i){if(!(this._runMode||!this.isAdmin)){if(e.stopPropagation(),this._runSel={pipe:n,pt:null},this.doubleTap(e,`fitting:${i}`)){this.changePool(t.pool.id,o=>{let s=o.pipes?.find(a=>a.id===n);s?.fittings&&(s.fittings=s.fittings.filter(a=>a.id!==i))});return}this.fitDrag={pipe:n,id:i,base:this._doc,moved:!1,x:e.clientX,y:e.clientY},e.currentTarget.closest("svg")?.setPointerCapture(e.pointerId)}}jointDown(e,t,n){this._runMode||!this.isAdmin||(e.stopPropagation(),this.jointDrag={id:t,d:n,base:this._doc,moved:!1},e.currentTarget.closest("svg")?.setPointerCapture(e.pointerId))}jointMove(e,t){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:i,y:o}=t.pt(e),s=e.altKey?i:Math.round(i*100)/100,a=e.altKey?o:Math.round(o*100)/100;this.change((l,d)=>{let c=d.outdoor.find(h=>h.id===t.pool.id)?.pool?.joints?.find(h=>h.id===n.id);c&&([c.x,c.z]=dn(t.frame,s,n.d),c.kind!=="floor"&&(c.y=Math.max(c.kind==="wall"?.05:-1,x(a))))},n.base,!1)}fittingMove(e,t){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(e.clientX-n.x,e.clientY-n.y)<4)return;n.moved=!0;let{s:i,y:o}=t.pt(e),s=t.runs.find(c=>c.id===n.pipe);if(!s)return;let a=null;for(let c of s.pieces){let[h,u]=[c.s1-c.s0,c.y1-c.y0],p=h*h+u*u,f=p>0?Math.max(0,Math.min(1,((i-c.s0)*h+(o-c.y0)*u)/p)):0,[m,_]=[c.s0+h*f,c.y0+u*f],y=Math.hypot(m-i,_-o);(!a||y<a.d)&&(a={p:et(t.frame,m,_,c.d0+(c.d1-c.d0)*f),d:y})}if(!a)return;let l=de(n.base,t.floor,t.pool),d=a.p;this.change((c,h)=>{let u=h.outdoor.find(m=>m.id===t.pool.id)?.pool?.pipes?.find(m=>m.id===n.pipe),p=u?.fittings?.find(m=>m.id===n.id),f=u&&Sn(Ke(u,l),d);p&&f&&(p.at=x(f.at))},n.base,!1)}fittingUp(e){let t=this.fitDrag;if(this.fitDrag=null,!!t){if(t.moved)return this.pushHistory(t.base);e&&this.changePool(e.pool.id,n=>{let i=n.pipes?.find(o=>o.id===t.pipe)?.fittings?.find(o=>o.id===t.id);i?.kind==="valve"&&(i.open=i.open===!1)})}}kitFitting(e,t){this._runDraft=null;let n=e&&this._runSel?e.runs.find(o=>o.id===this._runSel.pipe):void 0;if(!e||!n||!n.pieces.length){this._runMode=this._runMode===t?null:t;return}let i=[...n.pieces].sort((o,s)=>Math.hypot(s.s1-s.s0,s.y1-s.y0)-Math.hypot(o.s1-o.s0,o.y1-o.y0))[0];this.addFitting(e,n.id,et(e.frame,(i.s0+i.s1)/2,(i.y0+i.y1)/2,(i.d0+i.d1)/2),t),this._runMode=null}renderRuns(e,t,n){let i=this._runSel?.pipe,o=v=>{let b=me(e.frame,[v[0],v[2]]);return`${t(b.s)},${n(v[1])}`},s=this._runDraft,a=s&&this.runLast(s,e),l=s?[...s.fromT||s.extend||s.from?[this.runLast({...s,pts:[]},e)]:[],...s.pts].filter(v=>!!v):[],d=this.runHover,c=de(this._doc,e.floor,e.pool),h={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},u=[],p=(v,b,$="",k)=>{let M=c(v),S=M&&me(e.frame,[M.x,M.z]);if(!(M&&S&&S.d>-.6&&S.d<1.6&&S.s>-.2&&S.s<e.L+.2))return[];let A=u.filter(E=>Math.hypot(E.s-S.s,E.y-M.y)<.3*this.wvScale).length;u.push({s:S.s,y:M.y});let W=A&&this.wvScale>.5?"":b;return[T`<g class="fp3d-wv-node ${$} ${k?"fp3d-wv-joint":""}" transform="translate(${t(S.s)} ${n(M.y)}) scale(${this.wvScale})" @pointerdown=${E=>k&&this.jointDown(E,k,S.d)}>
            <circle r="0.05" /><text y=${.11+A*.07}>${W}</text><title>${this.poolNodeLabel(e.pool,v)}</title>
          </g>`]},f=[...e.floor.furniture.flatMap(v=>{if(h[v.type]===void 0)return[];let b=tt(v.type);return b.length?b.flatMap($=>p(`dev:${v.id}:${$}`,this.t(`port_${$}`))):p(`dev:${v.id}`,h[v.type])}),...(e.pool.pool?.joints??[]).flatMap(v=>v.kind==="wall"||v.kind==="floor"?p(`joint:${v.id}:inside`,this.jointLabel(e.pool,v.id),"fp3d-wv-hole-mark",v.id):p(`joint:${v.id}`,this.jointLabel(e.pool,v.id),"",v.id))],m=this.pipeRules,_=this._techMode&&m?m.flow({pipes:e.pool.pool?.pipes??[],ports:e.pool.pool?.ports??[],devices:this._doc.floors.flatMap(v=>v.furniture).filter(v=>ve.includes(v.type)).map(v=>({id:v.id,type:v.type,open:v.valve_open!==!1,valve:v.valve_position??null})),pumpOn:!0,heaterOn:!1,heating:!1}):null,y=v=>{let b=_?.get(v);if(!b?.active||!m)return"";let[$,k,M]=m.waterColor(b).map(S=>Math.round(S*255));return`stroke: rgb(${$}, ${k}, ${M}); stroke-opacity: 0.95`};return T`<g class="fp3d-wv-runs">
      ${f}
      ${e.runs.map(v=>T`<g class="fp3d-wv-run ${v.id===i?"fp3d-wv-run-sel":""} ${_&&!_.get(v.id)?.active?"fp3d-wv-dry":""}">
          ${v.pieces.map(b=>T`<line class=${b.y0<-.01&&b.y1<-.01?"fp3d-wv-under":""} style=${y(v.id)} x1=${t(b.s0)} y1=${n(b.y0)} x2=${t(b.s1)} y2=${n(b.y1)} @pointerdown=${$=>this.runPieceDown($,e,v,b.k)} />`)}
          ${v.ends.map(b=>T`<circle class="fp3d-wv-end" cx=${t(b.s)} cy=${n(b.y)} r="0.035" />`)}
          ${v.fittings.map(b=>b.kind==="valve"?T`<g class="fp3d-wv-valve ${b.open?"":"fp3d-wv-shut"}" transform="translate(${t(b.s)} ${n(b.y)}) scale(${this.wvScale})" @pointerdown=${$=>this.fittingDown($,e,v.id,b.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${b.open?.11:0} y2=${b.open?0:-.11} />
                </g>`:T`<rect class="fp3d-wv-sight" x=${t(b.s)-.06} y=${n(b.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${$=>this.fittingDown($,e,v.id,b.id)} />`)}
          ${v.id===i?v.points.map(b=>T`<circle class="fp3d-wv-runpt ${this._runSel?.pt===b.i?"fp3d-on":""}" cx=${t(b.s)} cy=${n(b.y)} r="0.04" @pointerdown=${$=>this.runPointDown($,e,v.id,b.i)} />`):w}
        </g>`)}
      ${l.length?T`<polyline class="fp3d-wv-draft" points=${l.map(o).join(" ")} />`:w}
      ${this.techStroke&&this.techStroke.length>1?T`<polyline class="fp3d-wv-draft fp3d-wv-stroke" points=${this.techStroke.map(v=>`${t(v.s)},${n(v.y)}`).join(" ")} />`:w}
      ${a&&d?T`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${o(a).split(",")[0]} y1=${o(a).split(",")[1]} x2=${t(d[0])} y2=${n(d[1])} />`:w}
    </g>`}renderRunFoot(e){let t=this._runMode,n=this._runDraft;if(t==="hole_wall"||t==="hole_floor"||t==="tee"||t==="y")return g`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(t==="valve"||t==="sight")return g`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(t==="draw")return g`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?g`<button class="fp3d-btn" @click=${()=>this.runOut(e,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(e,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:w}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let i=this._runSel,o=i&&e.pool.pool?.pipes?.find(h=>h.id===i.pipe);if(!i||!o)return w;let s=de(this._doc,e.floor,e.pool),a=je(o,s),l=i.pt,d=this.isAdmin,c=o.to?o.from?null:"from":"to";return g`<b>${this.t("wall_run_pipe")}</b>
      ${l!==null&&a.heights?.[l]!==void 0?this.len(this.t("wall_run_pt"),a.heights[l]??0,h=>this.changePool(e.pool.id,u=>{let p=u.pipes?.find(f=>f.id===o.id);p&&(Object.assign(p,je(p,s)),p.heights[l]=Math.min(10,Math.max(-5,x(h))))}),.01):w}
      ${d?g`<button class="fp3d-btn" @click=${()=>this.kitFitting(e,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(e,"sight")}>${this.t("wall_run_sight")}</button>
            ${c?g`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let h={pool:e.pool.id,from:"",fromT:null,extend:{pipe:o.id,end:c},pts:[],anchor:null,wall:e.key,d:e.gap};this._runDraft={...h,anchor:this.runLast(h,e)}}}>${this.t("wall_run_more")}</button>`:w}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(e.pool.id,h=>{let u=h.pipes?.find(p=>p.id===o.id);u&&(Object.assign(u,je(u,s)),[u.from,u.to,u.points,u.heights]=[u.to,u.from,[...u.points].reverse(),[...u.heights??[]].reverse()],u.fittings=u.fittings?.map(p=>({...p,at:x(Math.max(0,or(u,s)-p.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(e.pool.id,h=>h.pipes=(h.pipes??[]).filter(u=>u.id!==o.id)),this._runSel=null}}>${this.t("delete")}</button>`:w}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}get poolArea(){let e=this.outdoorArea;if(e?.type==="pool")return e;let t=this.floor?.outdoor.filter(n=>n.type==="pool")??[];return t.length===1?t[0]:void 0}poolDown(e,t,n,i){let o=this.floor;if(!o)return!1;let s=this.poolArea,a=t.closest("[data-pool-node]")?.getAttribute("data-pool-node")??null;if(this._jointPlace&&s)return this.isAdmin&&this.placeJointPlan(s,this._jointPlace,n,t.closest("[data-pipe]")?.getAttribute("data-pipe")??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isAdmin)return!0;if(!s){let u=o.outdoor.find(p=>p.type==="pool"&&p.points.length>=3&&Z(n,p.points));return u&&(this.selectItem("outdoor",u.id),this._tool="pool",this._pipeMode=!0),!0}let h=t.closest("[data-pipe-end]")?.getAttribute("data-pipe-end");if(h&&!this._pipeDraft){let[u,p]=h.split("|"),f=s.pool?.pipes?.find(_=>_.id===u),m=f&&(p==="to"?f.points[f.points.length-1]:f.points[0]);m&&(this._pipeDraft={from:"",points:[],extend:{pipe:u,end:p,at:m}})}else if(a){let u=this._pipeDraft;u?u.extend?(this.extendPipe(s,u.extend,a,u.points),this._pipeDraft=null):a!==u.from&&(this.addPipe(s.id,u.from,a,u.points),this._pipeDraft=null):this._pipeDraft={from:a,points:[]}}else if(this._pipeDraft){let u=this.snap(n,void 0,e.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[x(u[0]),x(u[1])]]}}return!0}let l=h=>[h.slice(0,h.lastIndexOf(":")),Number(h.slice(h.lastIndexOf(":")+1))];if(s&&this.isAdmin){let h=t.closest("[data-pipe-pt]")?.getAttribute("data-pipe-pt");if(h){let[p,f]=l(h);return this.doubleTap(e,`pipept:${h}`)?this.change((m,_)=>{let y=_.outdoor.find(v=>v.id===s.id)?.pool?.pipes?.find(v=>v.id===p);y?.points.splice(f,1),y?.heights?.splice(f,1)}):this.drag={kind:"pipept",pool:s.id,pipe:p,index:f,base:this._doc,moved:!1},!0}let u=t.closest("[data-pipe-seg]")?.getAttribute("data-pipe-seg");if(u){let[p,f]=l(u),m=this.snap(n,void 0,e.altKey);return this.change((_,y)=>{let v=y.outdoor.find(b=>b.id===s.id)?.pool?.pipes?.find(b=>b.id===p);v?.points.splice(f,0,[x(m[0]),x(m[1])]),v?.heights?.splice(f,0,v.heights[f-1]??v.heights[f]??null)}),this._pipeId=p,this.drag={kind:"pipept",pool:s.id,pipe:p,index:f,base:this._doc,moved:!1},!0}}let d=t.closest("[data-pipe]")?.getAttribute("data-pipe");if(d)return this._pipeId=d,!0;if(a&&s&&this.isAdmin)return a.startsWith("port:")?this.drag={kind:"poolport",pool:s.id,id:a.slice(5),base:this._doc,moved:!1}:a.startsWith("joint:")?this.drag={kind:"pooljoint",pool:s.id,id:oe(a).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:a.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isAdmin){let h=t.closest("[data-out-box]")?.getAttribute("data-out-box");if(h){let[p,f]=l(h);return this.drag={kind:"outbox",id:p,corner:f,base:this._doc,moved:!1},!0}let u=t.closest("[data-out-vertex]")?.getAttribute("data-out-vertex");if(u){let[p,f]=l(u);return this.drag={kind:"outvertex",id:p,index:f,base:this._doc,moved:!1},!0}}let c=t.closest("[data-outdoor]")?this.outdoorAt(n)??t.closest("[data-outdoor]").getAttribute("data-outdoor"):null;return c&&o.outdoor.some(h=>h.id===c&&h.type==="pool")?(this.selectItem("outdoor",c),this._pipeId=null,this.isAdmin&&(this.drag={kind:"outdoor",id:c,start:n,startScreen:i,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(e,t){this.change((n,i)=>{let o=i.outdoor.find(s=>s.id===e);o&&(o.pool??={},t(o.pool,o))})}extendPipe(e,t,n,i){let o=this.floor;if(!o)return;let s=de(this._doc,o,e);n=this.jointEnd(e,n,i[i.length-1]),this.changePool(e.id,a=>{let l=a.pipes?.find(c=>c.id===t.pipe);if(!l)return;Object.assign(l,je(l,s));let d=l.heights??[];if(t.end==="to"){let c=d[d.length-1]??l.height??null;l.points=[...l.points,...i],l.heights=[...d,...i.map(()=>c)],l.to=n}else{let c=or(l,s),h=d[0]??l.height??null;l.points=[...[...i].reverse(),...l.points],l.heights=[...i.map(()=>h),...d],l.from=n;let u=or(l,s)-c;l.fittings=l.fittings?.map(p=>({...p,at:x(p.at+u)}))}}),this._pipeId=t.pipe}jointEnd(e,t,n,i=[]){let{kind:o,id:s,port:a}=oe(t),l=o==="joint"&&!a?e.pool?.joints?.find(h=>h.id===s):void 0;if(!l)return t;if(l.kind==="wall"||l.kind==="floor"){let h=this._doc.floors.find(m=>m.outdoor.some(_=>_.id===e.id)),u=h&&de(this._doc,h,e),[p,f]=[u?.(`joint:${s}:inside`),u?.(`joint:${s}:outside`)];return!n||!p||!f?`joint:${s}:inside`:`joint:${s}:${Math.hypot(n[0]-p.x,n[1]-p.z)<=Math.hypot(n[0]-f.x,n[1]-f.z)?"inside":"outside"}`}let d=new Set([...(e.pool?.pipes??[]).flatMap(h=>[h.from,h.to]),...i]),c=Mn(l.kind).find(h=>!d.has(`joint:${s}:${h}`));return c?`joint:${s}:${c}`:t}addPipe(e,t,n,i){let o=this.floor;if(!o)return;let s=o.outdoor.find(l=>l.id===e);s&&(t=this.jointEnd(s,t,i[0]),n=this.jointEnd(s,n,i[i.length-1],[t]));let a={id:G("pipe"),from:t,to:n,floor_id:o.id,points:i};this.changePool(e,l=>l.pipes=[...l.pipes??[],a]),this._pipeId=a.id}addPoolPort(e){let t=this.poolArea;if(!t||!this.isAdmin)return;let n=t.pool?.ports??[],i=t.points.length,o=u=>{let p=t.points[u%i],f=t.points[(u+1)%i];return[(p[0]+f[0])/2,(p[1]+f[1])/2]},[s,a]=Xe(t.points),l=this._doc.floors.flatMap(u=>u.furniture).find(u=>u.type==="pool_filter"||u.type==="pool_pump"),d=n.filter(u=>u.kind==="inlet").length,c=e==="skimmer"?Yi(t.points,o(0)):e==="inlet"?Yi(t.points,o(Math.floor(i/2)+d*Math.max(1,Math.floor(i/8)))):e==="drain"?[s,a]:l?[l.x+.8,l.z]:[s,a+3],h={id:G("port"),kind:e,x:x(c[0]),z:x(c[1])};this.changePool(t.id,u=>u.ports=[...n,h])}addPoolDevice(e){let t=this.poolArea;this.addEnergyDevice(e),t&&this.selectItem("outdoor",t.id),this._tool="pool"}deletePoolDevice(e){this.change(t=>{for(let n of t.floors){n.furniture=n.furniture.filter(i=>i.id!==e);for(let i of n.outdoor)i.pool?.pipes&&(i.pool.pipes=i.pool.pipes.filter(o=>o.from!==`dev:${e}`&&o.to!==`dev:${e}`))}})}deletePoolPort(e,t){this.changePool(e,n=>{n.ports=(n.ports??[]).filter(i=>i.id!==t),n.pipes=(n.pipes??[]).filter(i=>i.from!==`port:${t}`&&i.to!==`port:${t}`)})}togglePoolValve(e){let t=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===e);!t||t.type!=="pool_valve"||!this.isAdmin||this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===e);i&&(i.valve_open=i.valve_open===!1?null:!1)})}setPoolDevice(e,t){this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===e);i&&Object.assign(i,t)})}portText(e){let{kind:t,port:n}=oe(e),i={in:"A",out1:"B",out2:"C"};return t==="joint"&&n&&i[n]?`${this.t("card_port")} ${i[n]}`:n?this.t(`port_${n}`):""}openCard(e,t){this._card={pool:e,part:t},this._cardJoin=null}partPorts(e,t){let{kind:n,id:i}=oe(t);if(n==="joint"){let o=e.pool?.joints?.find(s=>s.id===i);return o?Mn(o.kind).map(s=>`${t}:${s}`):[]}if(n==="dev"){let o=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.id===i),s=o?tt(o.type):[];return s.length?s.map(a=>`${t}:${a}`):[t]}return[t]}partStatus(e,t){let n=e.pool?.pipes??[],i=this.partPorts(e,t);return[i.filter(o=>n.some(s=>s.from===o||s.to===o)).length,i.length]}cardConnect(e,t,n,i){let o=this._doc.floors.find(h=>h.outdoor.some(u=>u.id===e.id));if(!o||!n)return;let s=de(this._doc,o,e),a=e.pool?.ports??[],l=h=>{let{kind:u,id:p,port:f}=oe(h);return u==="port"?ti(a.find(m=>m.id===p)?.kind??"inlet"):u==="dev"?ei(f):null},d=this.jointEnd(e,n,void 0,[t]),c=Pn({from:t,vias:i,to:[d],floorId:o.id},s,e.pool?.joints??[],l,h=>G(h));this.changePool(e.id,h=>{h.joints=[...h.joints??[],...c.joints],h.pipes=[...h.pipes??[],...c.pipes]}),this._cardJoin=null}cardDisconnect(e,t){this.changePool(e.id,n=>n.pipes=(n.pipes??[]).filter(i=>!t.pipes.includes(i.id)))}cardReroute(e,t){let n=e.pool?.pipes??[],i=n.find(f=>f.id===t.pipes[0]);if(!i||!t.other)return;let o=i.from===t.start,s=[...t.holes.map(f=>({kind:"hole",joint:f.joint,dir:f.dir})),...t.fittings.map(f=>({kind:f}))],a=this._doc.floors.find(f=>f.outdoor.some(m=>m.id===e.id));if(!a)return;let l={...e,pool:{...e.pool,pipes:n.filter(f=>!t.pipes.includes(f.id))}},d=de(this._doc,a,l),c=o?t.start:t.other,h=o?t.other:t.start,u=o?s:[...t.holes].reverse().map(f=>({kind:"hole",joint:f.joint,dir:f.dir==="in"?"out":"in"})).concat(t.fittings.map(f=>({kind:f}))),p=Pn({from:c,vias:u,to:[h],floorId:a.id},d,e.pool?.joints??[],()=>null,f=>G(f));this.changePool(e.id,f=>{f.pipes=[...(f.pipes??[]).filter(m=>!t.pipes.includes(m.id)),...p.pipes]})}renderPartCard(){let e=this._card,t=e?this._doc.floors.flatMap(S=>S.outdoor).find(S=>S.id===e.pool):void 0;if(!e||!t)return w;let n=this.isAdmin,{kind:i,id:o}=oe(e.part),s=i==="joint"?t.pool?.joints?.find(S=>S.id===o):void 0,a=i==="dev"?this._doc.floors.flatMap(S=>S.furniture).find(S=>S.id===o):void 0,l=i==="port"?t.pool?.ports?.find(S=>S.id===o):void 0;if(!s&&!a&&!l)return w;let d=t.pool?.pipes??[],c=t.pool?.joints??[],h=this.partPorts(t,e.part),u=this.poolEnds(t).filter(S=>ke(S.node)!==e.part&&!S.used),p=c.filter(S=>S.kind==="wall"||S.kind==="floor"),f=S=>this.poolNodeLabel(t,S),m=S=>oe(S).port?this.portText(S):this.t("card_port"),_=S=>S.kind==="hole"?this.t(S.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(t,S.joint)}):this.t(S.kind==="valve"?"wall_run_valve":"wall_run_sight"),y=()=>{this._card=null,this._cardJoin=null},v=()=>s?[s.x,s.z]:a?[a.x,a.z]:l?[l.x,l.z]:null,b=h.map(S=>{let A=Fl(d,c,S),W=this._cardJoin?.port===S?this._cardJoin:null;return g`<div class="fp3d-pc-row ${A.length?"fp3d-on":""}">
        <b>${m(S)}</b>
        <div class="fp3d-pc-conns">
          ${A.map(E=>g`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...E.holes.map(D=>_({kind:"hole",joint:D.joint,dir:D.dir})),...E.fittings.map(D=>_({kind:D}))].map(D=>g`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${D}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${E.other?g`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(t.id,ke(E.other))}>${f(E.other)}</button>`:g`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?g`<span class="fp3d-pc-tools">
                    ${E.other?g`<button class="fp3d-btn" @click=${()=>this.cardReroute(t,E)}>${this.t("card_reroute")}</button>`:w}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(t,E)}>${this.t("card_disconnect")}</button>
                  </span>`:w}
            </div>`)}
          ${n&&(!A.length||h.length===1)?W?this.renderJoinPicker(t,S,W,u,p,_):g`<button class="fp3d-btn ${A.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:S,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:w}
        </div>
      </div>`}),[$,k]=this.partStatus(t,e.part),M=v();return g`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${S=>S.target===S.currentTarget&&y()}>
      <div class="fp3d-pc" role="dialog" tabindex="0" @keydown=${S=>S.key==="Escape"&&y()}>
        <div class="fp3d-wv-head">
          ${s&&n?g`<input
                class="fp3d-pc-name"
                .value=${s.name??""}
                placeholder=${this.jointLabel(t,s.id)}
                title=${this.t("joint_name")}
                @change=${S=>{let A=S.target.value.trim().slice(0,60);this.changePool(t.id,W=>{let E=W.joints?.find(D=>D.id===s.id);E&&(E.name=A||null)})}}
              />`:g`<b class="fp3d-pc-title">${f(e.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:$,b:k})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${y}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(t,e.part,h)}
          <div class="fp3d-pc-rows">${b}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${M?g`<button class="fp3d-btn" @click=${()=>{y(),this._wallView=null,this._tool="pool",this.showPoint(M[0],M[1])}}>${this.t("card_show_plan")}</button>`:w}
          ${M&&!l?g`<button class="fp3d-btn" @click=${()=>{y(),this.pickWall(M)}}>▦ ${this.t("card_show_wall")}</button>`:w}
          <span class="fp3d-wv-grow"></span>
          ${n?g`<button class="fp3d-btn fp3d-danger" @click=${()=>{y(),a?this.deletePoolDevice(a.id):l?this.deletePoolPort(t.id,l.id):s&&this.changePool(t.id,S=>{S.joints=(S.joints??[]).filter(A=>A.id!==s.id),S.pipes=(S.pipes??[]).filter(A=>ke(A.from)!==e.part&&ke(A.to)!==e.part)})}}>${this.t("delete")}</button>`:w}
        </div>
      </div>
    </div>`}renderJoinPicker(e,t,n,i,o,s){let a=u=>{let{kind:p,id:f}=oe(u);if(p==="port")return"pool";if(p==="dev")return"tech";let m=e.pool?.joints?.find(_=>_.id===f);return m?.kind==="wall"||m?.kind==="floor"?"holes":"joints"},l=["pool","tech","joints"].map(u=>({g:u,items:i.filter(p=>a(p.node)===u)})).filter(u=>u.items.length),d=u=>this._cardJoin={...n,...u},c=u=>d({vias:[...n.vias,u]}),h=new Set(n.vias.flatMap(u=>u.kind==="hole"?[u.joint]:[]));return g`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(e,t)}</span>
        ${n.vias.map((u,p)=>g`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>d({vias:n.vias.filter((f,m)=>m!==p)})}>${s(u)} <i>✕</i></button>`)}
        <span class="fp3d-pc-arrow">→</span>
        ${n.to?g`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${()=>d({to:""})}>${this.poolNodeLabel(e,n.to)} <i>✕</i></button>`:g`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${n.to?w:g`<div class="fp3d-pc-steps">
            ${o.some(u=>!h.has(u.id))?g`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${o.filter(u=>!h.has(u.id)).map(u=>g`<div class="fp3d-pc-hole">
                        <span>${this.jointLabel(e,u.id)}</span>
                        <button class="fp3d-pc-pick" @click=${()=>c({kind:"hole",joint:u.id,dir:"in"})}>${this.t("card_hole_in")}</button>
                        <button class="fp3d-pc-pick" @click=${()=>c({kind:"hole",joint:u.id,dir:"out"})}>${this.t("card_hole_out")}</button>
                      </div>`)}`:w}
            <div class="fp3d-pc-step">${this.t("card_step_fit")}</div>
            <div class="fp3d-pc-picks">
              <button class="fp3d-pc-pick" @click=${()=>c({kind:"valve"})}>${this.t("wall_run_valve")}</button>
              <button class="fp3d-pc-pick" @click=${()=>c({kind:"sight"})}>${this.t("wall_run_sight")}</button>
            </div>
            <div class="fp3d-pc-step">${this.t("card_step_end")}</div>
            ${l.map(({g:u,items:p})=>g`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${u}`)}</span>
                <div class="fp3d-pc-picks">${p.map(f=>g`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>d({to:f.node})}>${f.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(e,t,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(e,t,n){let i=e.pool?.pipes??[],o=f=>i.some(m=>m.from===f||m.to===f),{kind:s,id:a}=oe(t),l=s==="joint"?e.pool?.joints?.find(f=>f.id===a):void 0,d=s==="dev"?this._doc.floors.flatMap(f=>f.furniture).find(f=>f.id===a):void 0,c={},h=w,u=l?.kind??(d?d.type:"port");u==="tee"?(Object.assign(c,{in:[20,60],out1:[180,60],out2:[100,130]}),h=T`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):u==="y"?(Object.assign(c,{in:[20,70],out1:[180,25],out2:[180,115]}),h=T`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):u==="wall"||u==="floor"?(Object.assign(c,{outside:[20,70],inside:[180,70]}),h=T`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):u==="pool_pump"?(Object.assign(c,{suction:[20,95],pressure:[110,10]}),h=T`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):u==="pool_filter"?(Object.assign(c,{pump:[20,40],return:[180,40],waste:[100,4]}),h=T`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):u==="pool_heat_pump"?(Object.assign(c,{in:[180,95],out:[180,45]}),h=T`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(c[""]=[180,70],h=T`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let p=u==="pool_filter"?[100,41]:u==="pool_pump"?[100,85]:[100,70];return g`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(f=>{let m=oe(f).port??"",_=c[m]??c[""]??[180,70],y=o(f);return T`<g class="fp3d-pc-stub ${y?"fp3d-on":""}" @click=${()=>this.isAdmin&&!y&&(this._cardJoin={port:f,to:"",vias:[]})}>
          <line x1=${p[0]} y1=${p[1]} x2=${_[0]} y2=${_[1]} />
          <circle cx=${_[0]} cy=${_[1]} r="7" />
          <title>${m?this.portText(f):""}</title>
        </g>`})}
      ${h}
      ${n.map(f=>{let m=oe(f).port,_=c[m??""]??[180,70];return m?T`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,_[0]))} y=${_[1]<70?_[1]+20:_[1]-12}>${this.portText(f)}</text>`:w})}
    </svg>`}jointLabel(e,t){let n=e.pool?.joints??[],i=n.find(a=>a.id===t);if(!i)return this.t("pool_loose_end");let o=a=>a==="wall"||a==="floor"?"hole":a??"tee";if(i.name?.trim())return i.name.trim();let s=n.filter(a=>o(a.kind)===o(i.kind));return`${this.t(`joint_${i.kind??"tee"}`,{n:s.indexOf(i)+1})}`}poolEnds(e){let t=e.pool?.pipes??[],n=o=>t.some(s=>s.from===o||s.to===o),i=[];for(let o of e.pool?.ports??[])i.push({node:`port:${o.id}`,label:this.poolNodeLabel(e,`port:${o.id}`),used:!1});for(let o of this._doc.floors.flatMap(s=>s.furniture).filter(s=>ve.includes(s.type)&&s.type!=="pool_valve")){let s=tt(o.type);for(let a of s.length?s.map(l=>`dev:${o.id}:${l}`):[`dev:${o.id}`])i.push({node:a,label:this.poolNodeLabel(e,a),used:s.length>0&&n(a)})}for(let o of e.pool?.joints??[])for(let s of Mn(o.kind)){let a=`joint:${o.id}:${s}`;i.push({node:a,label:this.poolNodeLabel(e,a),used:n(a)})}return i}placeJointPlan(e,t,n,i){let o=this.floor;if(!o)return;let s=de(this._doc,o,e),a=i?e.pool?.pipes?.find(c=>c.id===i):void 0;if(a){let c=Ke(a,s),h=null;for(let p=1;p<c.length;p++){let[f,m]=[c[p-1],c[p]],[_,y]=[m[0]-f[0],m[2]-f[2]],v=_*_+y*y,b=v>0?Math.max(0,Math.min(1,((n[0]-f[0])*_+(n[1]-f[2])*y)/v)):0,$=[f[0]+_*b,f[1]+(m[1]-f[1])*b,f[2]+y*b],k=Math.hypot($[0]-n[0],$[2]-n[1]);(!h||k<h.d)&&(h={p:$,d:k})}let u=h&&Xi(a,s,h.p,G("joint"),G("pipe"));if(u){this.changePool(e.id,p=>{p.joints=[...p.joints??[],{...u.joint,kind:t}],p.pipes=(p.pipes??[]).flatMap(f=>f.id===a.id?[{...u.first,to:`joint:${u.joint.id}:in`},{...u.second,from:`joint:${u.joint.id}:out1`}]:[f])});return}}let l=o.rooms.some(c=>c.points.length>=3&&Z(n,c.points)),d=this.snap(n);this.changePool(e.id,c=>c.joints=[...c.joints??[],{id:G("joint"),kind:t,x:x(d[0]),z:x(d[1]),y:l?.5:-.3}])}poolNodePos(e,t){if(!t)return null;let n=this._doc.floors.find(o=>o.outdoor.some(s=>s.id===e.id));if(t.startsWith("joint:")||t.split(":").length>2){let o=n&&de(this._doc,n,e)(t);return o?[o.x,o.z]:null}if(t.startsWith("port:")){let o=e.pool?.ports?.find(s=>s.id===t.slice(5));return o?[o.x,o.z]:null}let i=this._doc.floors.flatMap(o=>o.furniture).find(o=>o.id===t.slice(4));return i?[i.x,i.z]:null}poolNodeLabel(e,t){let{kind:n,id:i,port:o}=oe(t);if(!t)return this.t("pool_loose_end");if(o||n==="joint"){let d=n==="joint"?this.jointLabel(e,i):this.poolNodeLabel(e,`${n}:${i}`);return o?`${d} \xB7 ${this.portText(t)}`:d}if(t.startsWith("port:")){let d=e.pool?.ports??[],c=d.find(u=>u.id===t.slice(5));if(!c)return"?";let h=d.filter(u=>u.kind===c.kind);return`${this.t(`pool_port_${c.kind}`)}${h.length>1?` ${h.indexOf(c)+1}`:""}`}let s=this._doc.floors.flatMap(d=>d.furniture).filter(d=>ve.includes(d.type)),a=s.find(d=>d.id===t.slice(4));if(!a)return"?";let l=s.filter(d=>d.type===a.type);return`${a.name||this.t(`furn_${a.type}`)}${l.length>1&&!a.name?` ${l.indexOf(a)+1}`:""}`}renderPoolPlan(e){let t=this.poolArea,n=e.furniture.filter(p=>ve.includes(p.type)),i={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},o=t?(t.pool?.pipes??[]).filter(p=>p.floor_id===e.id):[],s=o.map(p=>{let f=this.poolNodePos(t,p.from),m=this.poolNodePos(t,p.to);if((!f||!m)&&!p.heights)return w;let _=f?1:0,y=[...f?[f]:[],...p.points,...m?[m]:[]].map(E=>this.toScreen(E));if(y.length<2)return w;let v=p.id===this._pipeId,b=0;for(let E=1;E<y.length-1;E++)Math.hypot(y[E+1][0]-y[E][0],y[E+1][1]-y[E][1])>Math.hypot(y[b+1][0]-y[b][0],y[b+1][1]-y[b][1])&&(b=E);let[$,k]=y[b],[M,S]=y[b+1],A=Math.atan2(S-k,M-$)*180/Math.PI,W=y.map(E=>E.join(",")).join(" ");return T`<g data-pipe=${p.id}>
        <polyline class="fp3d-pipe-hit" points=${W} />
        <polyline class="fp3d-pipe ${v?"fp3d-pipe-sel":""}" points=${W} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${($+M)/2} ${(k+S)/2}) rotate(${A})`} />
        ${v&&this.isAdmin?T`${y.slice(0,-1).map((E,D)=>T`<line class="fp3d-pipe-seg" data-pipe-seg=${`${p.id}:${D+1-_}`} x1=${E[0]} y1=${E[1]} x2=${y[D+1][0]} y2=${y[D+1][1]} />`)}
              ${p.points.map((E,D)=>{let[z,F]=this.toScreen(E);return T`<g class="fp3d-vertex" data-pipe-pt=${`${p.id}:${D}`}><circle cx=${z} cy=${F} r="14" class="fp3d-hit" /><circle cx=${z} cy=${F} r="5" /></g>`})}`:w}
      </g>`}),a=(p,f,m,_,y)=>{let[v,b]=this.toScreen(f);return T`<g class="fp3d-pool-node ${_}" data-pool-node=${p}><title>${y}</title><circle cx=${v} cy=${b} r="16" class="fp3d-hit" /><circle cx=${v} cy=${b} r="10" /><text x=${v} y=${b}>${m}</text></g>`},l=t?(t.pool?.ports??[]).map(p=>a(`port:${p.id}`,[p.x,p.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[p.kind],`fp3d-pool-port-${p.kind}`,this.poolNodeLabel(t,`port:${p.id}`))):[],d=n.map(p=>a(`dev:${p.id}`,[p.x,p.z],p.type==="pool_valve"?p.valve_open===!1?"\u2715":"":i[p.type],`fp3d-pool-dev ${p.type==="pool_valve"&&p.valve_open===!1?"fp3d-pool-closed":""}`,t?this.poolNodeLabel(t,`dev:${p.id}`):p.type)),c=w;if(t&&this._pipeDraft){let p=this._pipeDraft.extend?.at??this.poolNodePos(t,this._pipeDraft.from);if(p){let f=[p,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map(m=>this.toScreen(m).join(",")).join(" ");c=T`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${f} />`}}let h=t?(t.pool?.joints??[]).map(p=>a(`joint:${p.id}`,[p.x,p.z],p.kind==="wall"||p.kind==="floor"?"\u25CE":p.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(t,p.id))):[],u=o.flatMap(p=>p.heights&&p.points.length?["from","to"].filter(f=>!p[f]).map(f=>{let[m,_]=this.toScreen(f==="to"?p.points[p.points.length-1]:p.points[0]);return T`<g class="fp3d-pipe-end" data-pipe-end=${`${p.id}|${f}`}><circle cx=${m} cy=${_} r="14" class="fp3d-hit" /><circle cx=${m} cy=${_} r="6" /></g>`}):[]);return T`<g class="fp3d-pool-plan">${s}${c}${h}${u}${l}${d}</g>`}renderPoolPanel(e){let t=e?.outdoor.filter(i=>i.type==="pool")??[],n=this.poolArea;return n?g`${t.length>1?g`<section>
            <div class="fp3d-seg">${t.map((i,o)=>g`<button aria-pressed=${i.id===n.id} @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${o+1}</button>`)}</div>
          </section>`:w}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:g`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(t.length?"pool_choose":"pool_tool_empty")}</p>
        ${t.length?g`<div class="fp3d-actions">${t.map((i,o)=>g`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${this.t("out_pool")} ${t.length>1?o+1:""}</button>`)}</div>`:w}
      </section>`}renderPoolTech(e){if(!this.pipeRules)return w;let t=this.isAdmin,n=e.pool?.ports??[],i=e.pool?.pipes??[],o=this._doc.floors.flatMap(a=>a.furniture).filter(a=>ve.includes(a.type)),s=i.find(a=>a.id===this._pipeId);return g`<section>
        <button class="fp3d-btn fp3d-primary fp3d-wide" ?disabled=${!t} title=${this.t("tech_open_hint")} @click=${()=>{this.techPick=!0,this._wallPick=!0}}>🛠 ${this.t("tech_open")}</button>
        <p class="fp3d-sub">${this.t("tech_open_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(a=>g`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.addPoolPort(a)}>+ ${this.t(`pool_port_${a}`)}</button>`)}
        </div>
        ${n.map(a=>g`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(e.id,`port:${a.id}`)}>${this.poolNodeLabel(e,`port:${a.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(e,`port:${a.id}`)[0]?"\u2713":"\u25CB"}</span>
            ${a.kind==="inlet"||a.kind==="skimmer"?g`<label class="fp3d-pool-depth" title=${this.t("pool_port_depth_hint")}
                  >${this.t("pool_port_depth")}
                  <input type="number" step="0.05" min="0" max="3" .value=${String(a.depth??(a.kind==="inlet"?.3:0))} ?disabled=${!t} @change=${l=>{let d=Number(l.target.value.replace(",","."));Number.isFinite(d)&&this.change((c,h)=>{let u=h.outdoor.find(p=>p.id===e.id)?.pool?.ports?.find(p=>p.id===a.id);u&&(u.depth=Math.min(3,Math.max(0,x(d))))})}} />m</label
                >`:w}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.deletePoolPort(e.id,a.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${ve.filter(a=>a!=="pool_valve").map(a=>g`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.addPoolDevice(a)}>+ ${this.t(`furn_${a}`)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace==="tee"?"fp3d-primary":""}" ?disabled=${!t} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="tee"?null:"tee"}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace==="y"?"fp3d-primary":""}" ?disabled=${!t} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="y"?null:"y"}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${o.map(a=>g`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(e.id,`dev:${a.id}`)}>${this.poolNodeLabel(e,`dev:${a.id}`)}</button>
            <span class="fp3d-ports">${tt(a.type).map(l=>g`<i class=${i.some(d=>d.from===`dev:${a.id}:${l}`||d.to===`dev:${a.id}:${l}`)?"fp3d-on":""}>${this.t(`port_${l}`)}</i>`)}</span>
            ${a.type==="pool_filter"?g`<select ?disabled=${!t} title=${this.t("pool_valve_type")} @change=${l=>this.setPoolDevice(a.id,{variant:l.target.value==="top6"?null:l.target.value})}>
                    ${Ml.map(l=>g`<option value=${l} ?selected=${(a.variant??"top6")===l}>${this.t(`valve_${l}`)}</option>`)}
                  </select>
                  <select ?disabled=${!t} title=${this.t("pool_valve_position")} @change=${l=>this.setPoolDevice(a.id,{valve_position:l.target.value})}>
                  ${ga.map(l=>g`<option value=${l} ?selected=${(a.valve_position??"filter")===l}>${this.t(`valve_${l}`)}</option>`)}
                </select>`:a.type==="pool_heat_pump"?g`<select ?disabled=${!t} title=${this.t("hp_ports")} @change=${l=>this.setPoolDevice(a.id,{variant:l.target.value==="right"?null:l.target.value})}>
                    ${["right","left","back"].map(l=>g`<option value=${l} ?selected=${(a.variant??"right")===l}>${this.t("hp_ports")}: ${this.t(`hp_side_${l}`)}</option>`)}
                  </select>`:a.type==="pool_valve"?g`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${a.valve_open!==!1} ?disabled=${!t} @change=${l=>this.setPoolDevice(a.id,{valve_open:l.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:w}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(a.id)}>✕</button>
          </div>`)}
        ${(e.pool?.joints??[]).map(a=>g`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(e.id,`joint:${a.id}`)}>${this.jointLabel(e,a.id)}</button>
            <span class="fp3d-ports">${Mn(a.kind).map(l=>{let d=`joint:${a.id}:${l}`,c=i.some(h=>h.from===d||h.to===d||(a.kind??"tee")!=="wall"&&(a.kind??"tee")!=="floor"&&ke(h.from)===`joint:${a.id}`&&!oe(h.from).port&&l==="in");return g`<i class=${c?"fp3d-on":""} title=${this.portText(d)}>${this.portText(d)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.changePool(e.id,l=>{l.joints=(l.joints??[]).filter(d=>d.id!==a.id),l.pipes=(l.pipes??[]).filter(d=>ke(d.from)!==`joint:${a.id}`&&ke(d.to)!==`joint:${a.id}`)})}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!t} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${i.map(a=>g`<div class="fp3d-pool-row ${a.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=a.id}>${this.poolNodeLabel(e,a.from)} → ${this.poolNodeLabel(e,a.to)}</button>
            <button class="fp3d-btn" ?disabled=${!t} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(e.id,l=>{let d=l.pipes?.find(c=>c.id===a.id);d&&([d.from,d.to,d.points]=[d.to,d.from,[...d.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.changePool(e.id,l=>l.pipes=(l.pipes??[]).filter(d=>d.id!==a.id))}>✕</button>
          </div>`)}
        ${s?g`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),s.height??.3,a=>this.changePool(e.id,l=>{let d=l.pipes?.find(c=>c.id===s.id);d&&(d.height=Math.min(10,Math.max(-5,x(a))))}),.05)}
            </div>`:w}
      </section>`}renderPoolShape(e){let t=this.isAdmin,n=ze(e.points),i=e.pool_shape,o=(l,d,c,h)=>i&&this.updateOutdoor({points:Ai(i,l,d,c,h)}),s=(n.x0+n.x1)/2,a=(n.z0+n.z1)/2;return g`${i==="round"?g`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let d=Math.max(.5,l)/2;o(s-d,a-d,s+d,a+d)},.01,1)}`:i==="oval"?g`${this.len(this.t("width"),n.x1-n.x0,l=>o(s-Math.max(1,l)/2,n.z0,s+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>o(n.x0,a-Math.max(1,l)/2,n.x1,a+Math.max(1,l)/2),.01,1)}`:w}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!e.above} ?disabled=${!t} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${e.above?this.len(this.t("pool_height"),Ei(e),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,x(l)))}),.05,.4):w}
      ${this.len(this.t("pool_depth"),Co(e),l=>this.updateOutdoor({depth:Math.min(5,Math.max(.3,x(l)))}),.05,.3)}
      ${e.above?w:this.len(this.t("pool_rim"),e.rim??.06,l=>this.updateOutdoor({rim:Math.min(2,Math.max(-.3,x(l)))}),.01,-.3)}
      <p class="fp3d-sub fp3d-wide">${this.t("pool_depth_hint")}</p>
      ${!e.above&&this.floor&&!No(this.floor,e)?g`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("pool_depth_ground")}</p>`:w}`}get pipeRules(){return kc()}editorHost(){let e=this.hass;return{api:1,hass:()=>e,building:()=>this._doc,language:()=>e.language||"en",devices:()=>[],findDevice:()=>null,openings:()=>[],energy:()=>null,consumers:()=>[],canEdit:()=>this.isAdmin,updateBuilding:t=>this.change(n=>t(n)),callService:(t,n,i)=>e.callService(t,n,i),newId:t=>G(t),refresh:()=>this.requestUpdate(),plan:Qs}}renderModuleFields(e){if(!this.hass)return w;let t=yc(this.editorHost(),e);if(!t.length)return w;let n=this.isAdmin,i=o=>{switch(o.kind){case"heading":return g`<h3>${o.text}</h3>`;case"text":return g`<p class="fp3d-sub fp3d-wide">${o.text}</p>`;case"entity":return this.entitySelect(o.label,o.value,o.auto,this.entityOptions(o.filter),s=>o.set(s));case"select":return g`<label class="fp3d-field fp3d-wide"
            >${o.label}
            <select ?disabled=${!n} @change=${s=>o.set(s.target.value)}>
              ${o.options.map(s=>g`<option value=${s.id} ?selected=${s.id===o.value}>${s.label}</option>`)}
            </select></label
          >`;case"check":return g`<label class="fp3d-check fp3d-wide"><input type="checkbox" .checked=${o.value} ?disabled=${!n} @change=${s=>o.set(s.target.checked)} /> ${o.label}</label>`;case"button":return g`<button class="fp3d-btn ${o.primary?"fp3d-primary":""} fp3d-wide" ?disabled=${!n} title=${o.title??""} @click=${()=>o.onTap()}>${o.label}</button>`}};return g`<section>
      <div class="fp3d-form fp3d-links">${t.map(i)}</div>
    </section>`}renderRooms(e){return T`
      <g>${e.rooms.map(t=>{let n=t.points.map(i=>this.toScreen(i).join(",")).join(" ");return T`<polygon data-room=${t.id} class=${t.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${e.rooms.map(t=>{let[n,i]=this.toScreen(Xe(t.points));return T`<text class="fp3d-room-name" x=${n} y=${i-2}>${t.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.area(Ae(t.points))}</text>`})}</g>
    `}renderEdgeHighlight(){let e=this.room,t=this._edgeHi;if(!e||t===null||t>=e.points.length)return w;let[n,i]=this.toScreen(e.points[t]),[o,s]=this.toScreen(e.points[(t+1)%e.points.length]);return T`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${o} y2=${s} />`}renderMeter(e){let t=this._doc.energy?.meter;if(!t||t.floor_id!==e.id)return w;let[n,i]=this.toScreen([t.x,t.z]);return T`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(e){let t=this._view.scale,n=this._furnitureId?this.selection():[],i=n.length>1;return T`<g>${this.renderSelectionFrame(e,n)}${e.furniture.map(o=>{let s=n.includes(o.id),a=o.id===this._furnitureId&&!i,[l,d]=this.toScreen([o.x,o.z]),c=Math.min(o.w,o.d)*t>44,h=o.rotation*Math.PI/180,u=o.d/2+Math.max(.3,26/t),[p,f]=this.toScreen([o.x-Math.sin(h)*u,o.z+Math.cos(h)*u]),[m,_]=this.toScreen([o.x-Math.sin(h)*(o.d/2),o.z+Math.cos(h)*(o.d/2)]),y=Be(o.type)&&!!o.entity&&o.entity!=="none"&&this.hass?.states[o.entity]?.state==="on";return T`<g data-furniture=${o.id} class=${`fp3d-furn${a||s?" fp3d-furn-sel":""}${y?" fp3d-furn-lit":""}${vt.includes(o.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${l} ${d}) rotate(${o.rotation}) scale(${o.mirror?-t:t} ${t})">
          <rect class="fp3d-furn-body" x=${-o.w/2} y=${-o.d/2} width=${o.w} height=${o.d} />
          <g class="fp3d-furn-sym">${sl(o.type,o.w,o.d)}</g>
          <line class="fp3d-furn-front" x1=${-o.w/2} y1=${o.d/2} x2=${o.w/2} y2=${o.d/2} />
        </g>
        ${c?T`<text x=${l} y=${d+4}>${Ot(this.hass,o.type)}</text>`:w}
      </g>
      ${a&&this.isAdmin&&!o.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([v,b])=>{let[$,k]=this.toScreen([o.x+v*o.w*Math.cos(h)/2-b*o.d*Math.sin(h)/2,o.z+v*o.w*Math.sin(h)/2+b*o.d*Math.cos(h)/2]);return T`<g class="fp3d-resize" data-resize=${`${o.id}:${v}:${b}`}>
              <circle cx=${$} cy=${k} r="14" class="fp3d-hit" />
              <rect x=${$-5} y=${k-5} width="10" height="10" rx="2" />
            </g>`}):w}
      ${a?(()=>{let[v,b]=this.toScreen([o.x+Math.sin(h)*(o.d/2+18/t),o.z-Math.cos(h)*(o.d/2+18/t)]);return T`<text class="fp3d-dim" x=${v} y=${b+4}>${this.m(o.w,2)} × ${this.m(o.d,2)}</text>`})():w}
      ${a&&o.locked?T`<text class="fp3d-lock" x=${p} y=${f+5}>🔒</text>`:w}
      ${a&&this.isAdmin&&!o.locked?T`<g class="fp3d-rotate" data-rotate=${o.id}>
            <line x1=${m} y1=${_} x2=${p} y2=${f} />
            <circle cx=${p} cy=${f} r="16" class="fp3d-hit" />
            <circle cx=${p} cy=${f} r="8" />
            <path d="M${p-4} ${f-1}a4 4 0 1 1 2 3.5" />
          </g>`:w}`})}</g>`}renderSelectionFrame(e,t){let n=this.drag,i=n?.kind==="marquee"?T`<rect class="fp3d-marquee" x=${Math.min(...[n.start,n.end].map(h=>this.toScreen(h)[0]))} y=${Math.min(...[n.start,n.end].map(h=>this.toScreen(h)[1]))} width=${Math.abs(this.toScreen(n.end)[0]-this.toScreen(n.start)[0])} height=${Math.abs(this.toScreen(n.end)[1]-this.toScreen(n.start)[1])} />`:w;if(t.length<2)return i;let o=e.furniture.filter(h=>t.includes(h.id)).flatMap(h=>Ce(h));if(!o.length)return i;let[s,a]=this.toScreen([Math.min(...o.map(h=>h[0])),Math.min(...o.map(h=>h[1]))]),[l,d]=this.toScreen([Math.max(...o.map(h=>h[0])),Math.max(...o.map(h=>h[1]))]),c=!this._multi.length;return T`${i}<g class=${`fp3d-selframe${c?" fp3d-selframe-block":""}`}>
      <rect x=${s-6} y=${a-6} width=${l-s+12} height=${d-a+12} rx="6" />
      <text x=${s-4} y=${a-12}>${c?`\u25A3 ${this.t("block_title")} \xB7 ${t.length}`:this.t("multi_title",{n:t.length})}</text>
    </g>`}renderBlockForm(){let e=this.selection(),t=(this.floor?.furniture??[]).filter(s=>e.includes(s.id)),n=!this._multi.length&&!!t[0]?.group,i=t.every(s=>this.isFixedItem("furniture",s.id)),o=!i&&t.some(s=>this.isFixedItem("furniture",s.id));return g`<section>
      <div class="fp3d-h3row"><h3>${n?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:t.length})}</h3></div>
      <p class="fp3d-sub">${this.t(n?"block_hint":"multi_hint")}</p>
      ${o?g`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>`:w}
      <div class="fp3d-block-parts">
        ${t.map(s=>g`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${()=>{this.selectItem("furniture",s.id),this._single=!!s.group}}>${s.name||Ot(this.hass,s.type)}</button>`)}
      </div>
      <div class="fp3d-actions">
        ${n?g`<button class="fp3d-btn" @click=${()=>this.ungroupSelection()}>${this.t("block_break")}</button>`:g`<button class="fp3d-btn fp3d-primary" @click=${()=>this.groupSelection()}>▣ ${this.t("block_make")}</button>`}
        <button class="fp3d-btn" @click=${()=>this.rotateSelection(-90)}>${this.t("rotate_left")}</button>
        <button class="fp3d-btn" @click=${()=>this.rotateSelection(90)}>${this.t("rotate_right")}</button>
        <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
        <button class="fp3d-btn ${o?"fp3d-primary":""}" @click=${()=>this.lockSelection(!i&&!o)}>${i?`\u{1F513} ${this.t("unfix")}`:o?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
        <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>
      ${this.renderMultiToggle()}
    </section>`}renderMultiToggle(){return g`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${e=>this._multiMode=e.target.checked} /> ${this.t("multi_mode")}</label>`}renderOpenings(e,t){return T`<g>${e.openings.map(n=>{let i=kn(n,e.rooms,e.walls??[]);if(!i)return w;let{room:o,edge:s}=i,a=cs(t,n,i),l=Et(o,s,n.offset-n.width/2),d=Et(o,s,n.offset+n.width/2),c=(d[0]-l[0])/(n.width||1),h=(d[1]-l[1])/(n.width||1),u=we(o.points)>=0?1:-1,p=[-h*u,c*u],f=[.06,.06];a&&(f=a.wall.free||a.wall.roomLeft===o.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let m=(A,W)=>this.toScreen([A[0]+p[0]*W,A[1]+p[1]*W]),_=[m(l,f[0]+.01),m(d,f[0]+.01),m(d,-f[1]-.01),m(l,-f[1]-.01)],y=n.id===this._openingId,v=Di(n,a?.wall.exterior??!1),b=n.type==="door"&&Yo(v),$=`fp3d-open fp3d-open-${n.type}${b?" fp3d-open-front":""}${y?" fp3d-open-sel":""}`,k;if(n.type==="garage"){let A=m(l,f[0]-.04),W=m(d,f[0]-.04),E=m(l,f[0]+Math.min(2,n.height)),D=m(d,f[0]+Math.min(2,n.height));k=T`<line x1=${A[0]} y1=${A[1]} x2=${W[0]} y2=${W[1]} />
          <path class="fp3d-open-track" d="M${A[0]} ${A[1]}L${E[0]} ${E[1]}M${W[0]} ${W[1]}L${D[0]} ${D[1]}" />`}else if(n.type==="door"){let A=n.swing==="out",W=A?-f[1]:f[0],E=n.hinge==="left"==u>0,D=n.leaves===2,z=l,F=d,H=[],R=Fa(n.width,v,E,n);if(R){let j=Y=>Y<=.02?l:Y>=n.width-.02?d:Et(o,s,n.offset-n.width/2+Y);z=j(R.x0),F=j(R.x1),H=R.panels.map(([Y,ee])=>[j(Y),j(ee)])}let L=[(z[0]+F[0])/2,(z[1]+F[1])/2],C=(D?.5:1)*Math.hypot(F[0]-z[0],F[1]-z[1]),O=(f[0]-f[1])/2,J=H.map(([j,Y])=>{let ee=m(j,O+.035),K=m(Y,O+.035),ue=m(j,O-.035),Me=m(Y,O-.035);return T`<line class="fp3d-open-pane" x1=${ee[0]} y1=${ee[1]} x2=${K[0]} y2=${K[1]} /><line class="fp3d-open-pane" x1=${ue[0]} y1=${ue[1]} x2=${Me[0]} y2=${Me[1]} />`}),N=(j,Y)=>{let[ee,K]=m(j,W),[ue,Me]=m(Y,W),rt=m(j,W+(A?-C:C)),Pe=C*this._view.scale,Ee=(rt[0]-ee)*(Me-K)-(rt[1]-K)*(ue-ee);return T`<path d="M${ee} ${K}L${rt[0]} ${rt[1]}A${Pe} ${Pe} 0 0 ${Ee>0?1:0} ${ue} ${Me}" />`};k=T`${J}${v==="passage"?T`<line class="fp3d-open-passage" x1=${m(l,O)[0]} y1=${m(l,O)[1]} x2=${m(d,O)[0]} y2=${m(d,O)[1]} />`:v==="sliding"?T`<line x1=${m(z,W)[0]} y1=${m(z,W)[1]} x2=${m(F,W)[0]} y2=${m(F,W)[1]} />`:D?T`${N(z,L)}${N(F,L)}`:N(E?z:F,E?F:z)}`}else{let A=(f[0]-f[1])/2,W=m(l,A+.035),E=m(d,A+.035),D=m(l,A-.035),z=m(d,A-.035),F=[(l[0]+d[0])/2,(l[1]+d[1])/2],H=m(F,f[0]),R=m(F,-f[1]);k=T`<line x1=${W[0]} y1=${W[1]} x2=${E[0]} y2=${E[1]} /><line x1=${D[0]} y1=${D[1]} x2=${z[0]} y2=${z[1]} />${n.leaves===2?T`<line x1=${H[0]} y1=${H[1]} x2=${R[0]} y2=${R[1]} />`:w}`}let M=m(l,(f[0]-f[1])/2),S=m(d,(f[0]-f[1])/2);return T`<g data-opening=${n.id} class=${$}>
        <line class="fp3d-open-hit" x1=${M[0]} y1=${M[1]} x2=${S[0]} y2=${S[1]} />
        <polygon class="fp3d-open-gap" points=${_.map(A=>A.join(",")).join(" ")} />
        ${k}
      </g>`})}</g>`}renderDevices(e){return T`<g>${e.placements.map(t=>{let n=se(t.entity_id);if(!n)return w;let[i,o]=this.toScreen([t.x,t.z]),s=this.hass?.states[t.entity_id]?.state==="on",a=t.entity_id===this._deviceId,l=`fp3d-device${s?" fp3d-device-on":""}${a?" fp3d-device-sel":""}`;return T`${n==="camera"?this.renderCameraWedge(t,a):w}<g data-device=${t.entity_id} class=${l} transform="translate(${i} ${o})">
        <title>${ye(this.hass,t.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${zn(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&t.locked?T`<text class="fp3d-lock" x=${i+16} y=${o-12}>🔒</text>`:w}`})}</g>`}renderCameraWedge(e,t){let n=e.mount==="ceiling",i=e.fov??(n?360:90),o=e.reach??(n?3:4.5),s=(e.rotation??0)*Math.PI/180,a=(b,$)=>this.toScreen([e.x-Math.sin(s+b)*$,e.z+Math.cos(s+b)*$]),[l,d]=this.toScreen([e.x,e.z]),c=Math.min(i,359.9)*Math.PI/180/2,[h,u]=a(-c,o),[p,f]=a(c,o),m=o*this._view.scale,_=i>=360?"":`M${l} ${d}L${h} ${u}A${m} ${m} 0 ${c>Math.PI/2?1:0} 1 ${p} ${f}Z`,[y,v]=a(0,o);return T`<g class="fp3d-wedge ${t?"fp3d-wedge-sel":""}">
      ${i>=360?T`<circle cx=${l} cy=${d} r=${m} />`:T`<path d=${_} />`}
      ${t&&this.isAdmin&&!e.locked?T`<g class="fp3d-rotate" data-aim=${e.entity_id}>
            <line x1=${l} y1=${d} x2=${y} y2=${v} />
            <circle cx=${y} cy=${v} r="16" class="fp3d-hit" />
            <circle cx=${y} cy=${v} r="8" />
            <path d="M${y-4} ${v-1}a4 4 0 1 1 2 3.5" />
          </g>`:w}
    </g>`}renderHandles(e){let t=e.points,n=t.length,i=t.map((s,a)=>{let l=t[(a+1)%n],[d,c]=this.toScreen(s),[h,u]=this.toScreen(l),p=Math.hypot(l[0]-s[0],l[1]-s[1]),f=(d+h)/2,m=(c+u)/2,[_,y]=this.toScreen(Xe(t)),v=-(u-c),b=h-d,$=Math.hypot(v,b)||1;v/=$,b/=$,v*(f-_)+b*(m-y)<0&&(v=-v,b=-b);let k=Math.hypot(h-d,u-c);return T`
        ${k>50?Math.abs(v)>Math.abs(b)?T`<text class="fp3d-dim" style="text-anchor:${v>0?"start":"end"}" x=${f+v*13} y=${m+b*13+4}>${this.m(p,2)}</text>`:T`<text class="fp3d-dim" x=${f+v*16} y=${m+b*16+4}>${this.m(p,2)}</text>`:w}
        ${k>36?T`<g data-mid=${a} class="fp3d-mid"><circle cx=${f} cy=${m} r="14" class="fp3d-hit" /><circle cx=${f} cy=${m} r="6" /><path d="M${f-3} ${m}h6M${f} ${m-3}v6" /></g>`:w}
      `}),o=t.map((s,a)=>{let[l,d]=this.toScreen(s);return T`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${d} r="16" class="fp3d-hit" /><circle cx=${l} cy=${d} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${d-9}>${a+1}</text>`});return T`<g>${i}${o}</g>`}renderDraft(){let e=this.drag;if(e?.kind==="freewall"){let[i,o]=this.toScreen(e.start),[s,a]=this.toScreen(e.end),l=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return T`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${i} y1=${o} x2=${s} y2=${a} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${(o+a)/2-10}>${this.m(l,2)}</text>
      </g>`}if(e?.kind==="rect"){let[i,o]=this.toScreen(e.start),[s,a]=this.toScreen(e.end),l=Math.abs(e.end[0]-e.start[0]),d=Math.abs(e.end[1]-e.start[1]);return T`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(i,s)} y=${Math.min(o,a)} width=${Math.abs(s-i)} height=${Math.abs(a-o)} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${Math.min(o,a)-8}>${this.m(l,2)} × ${this.m(d,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return w;let t=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=t.map(i=>this.toScreen(i));return T`<g pointer-events="none">
      ${n.length>1?T`<polyline class="fp3d-draft" points=${n.map(i=>i.join(",")).join(" ")} />`:w}
      ${n.slice(1).map((i,o)=>{let s=n[o];return Math.hypot(i[0]-s[0],i[1]-s[1])<30?w:T`<text class="fp3d-dim" x=${(s[0]+i[0])/2} y=${(s[1]+i[1])/2-6}>${this.m(Math.hypot(t[o+1][0]-t[o][0],t[o+1][1]-t[o][1]),2)}</text>`})}
      ${this._draft.map((i,o)=>{let[s,a]=this.toScreen(i);return T`<circle class=${o===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${a} r=${o===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?T`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:w}
    </g>`}renderGuides(){let e=this._guides,{w:t,h:n}=this._size;return T`<g pointer-events="none">
      ${e.x!==void 0?T`<line class="fp3d-guide" x1=${this.toScreen([e.x,0])[0]} y1="0" x2=${this.toScreen([e.x,0])[0]} y2=${n} />`:w}
      ${e.z!==void 0?T`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,e.z])[1]} x2=${t} y2=${this.toScreen([0,e.z])[1]} />`:w}
      ${e.point?T`<circle class="fp3d-snap" cx=${this.toScreen(e.point)[0]} cy=${this.toScreen(e.point)[1]} r="9" />`:w}
    </g>`}get unit(){return ps(this.hass,this._doc.settings.units)}m(e,t=2){return vl(e,this.unit,n=>Ge(this.hass,n,t))}area(e){return wl(Math.abs(e),this.unit,t=>Ge(this.hass,t,1))}lenValue(e){return this.unit==="imperial"?Yt(e):String(x(e))}readLen(e){if(this.unit==="imperial")return fs(e,"imperial");let t=parseFloat(e.replace(",","."));return Number.isFinite(t)?t:null}len(e,t,n,i=.01,o){return this.unit!=="imperial"?this.num(e,t,n,i,o):g`<label class="fp3d-field"
      >${Xn(e,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${Yt(t)}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=s.target,l=fs(a.value,"imperial");l!==null?n(o!==void 0?Math.max(o,l):l):a.value=Yt(t)}}
    /></label>`}num(e,t,n,i=.01,o){return g`<label class="fp3d-field"
      >${e}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${o??w}
        .value=${String(x(t))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}rightPress=null;rightUp=-1e9;lastTap=null;doubleTap(e,t){let n=performance.now(),i=e.detail>=2||this.lastTap?.key===t&&n-this.lastTap.at<450;return this.lastTap=i?null:{key:t,at:n},i}selectFrom3d(e,t){this.selectItem(e,t),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",e?"1":"0")}catch{}}setSideFolded(e){if(this._split&&!this._sidePinned){this._sideOpen=!e;return}this._sideMin=e;try{localStorage.setItem("neonplan3d.sideMin",e?"1":"0")}catch{}}renderSideGrip(){if(this.narrow)return w;let e=n=>{this.sideDrag&&(this._sideWidth=Math.min(640,Math.max(280,Math.round(this.sideDrag.width+(this.sideDrag.x-n.clientX)))))},t=n=>{if(this.sideDrag){this.sideDrag=null,n.currentTarget.releasePointerCapture(n.pointerId);try{localStorage.setItem("neonplan3d.sideWidth",String(this._sideWidth))}catch{}}};return g`<div
      class="fp3d-side-grip"
      title=${this.t("side_resize")}
      @pointerdown=${n=>{this.sideDrag={x:n.clientX,width:this._sideWidth},n.currentTarget.setPointerCapture(n.pointerId),n.preventDefault()}}
      @pointermove=${e}
      @pointerup=${t}
      @pointercancel=${t}
    ></div>`}renderAside(e){let t=this._split&&!this._sidePinned&&!this.narrow;return!this.narrow&&(t?!this._sideOpen:this._sideMin)?g`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this.setSideFolded(!1)}>‹</button>
        ${this._furnitureId||this._deviceId||this._openingId||this._roomId?g`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this.setSideFolded(!1)}>⚙</button>`:w}
      </aside>`:t?g`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(e)}
      </aside>`:g`<aside class="fp3d-side">${this.renderSideGrip()}${this.renderPinRow()}${this.renderSide(e)}</aside>`}renderPinRow(e=!1){if(this.narrow)return w;let t=g`<button class="fp3d-btn" title=${this.t("side_fold_hint")} @click=${()=>this.setSideFolded(!0)}>${this.t("side_close")} ›</button>`;return this._split?g`<div class="fp3d-pin-row">
      ${t}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`:g`<div class="fp3d-pin-row">${t}</div>`}renderSide(e){let t=this._doc?.floors??[],n=this.room,i=this.isAdmin,o=Object.values(this.hass?.areas??{}).sort((a,l)=>a.name.localeCompare(l.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(e);if(this._tool==="furniture"&&e&&i)return g`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):w} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?g`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${s}`:n&&this._tool!=="measure"?g`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:g`
      ${i?w:g`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${e?this.t("floor_settings_of",{floor:e.name}):this.t("floors")}</h3>
        ${t.length?w:g`<p class="fp3d-sub">${this.t("floor_none_hint")}</p>`}
        ${i&&e?g`<button class="fp3d-btn" aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
              ${this.t(this._doc.settings.lock_plan?"plan_unlock":"plan_lock")}
            </button>`:w}
        ${e?g`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${e.name} ?disabled=${!i} @change=${a=>this.updateFloor({name:a.target.value})}
              /></label>
              ${this.len(this.t("elevation"),e.elevation,a=>this.updateFloor({elevation:a}))}
              ${i?g`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${a=>this._shiftX=Number(a.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${a=>this._shiftZ=Number(a.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${e.start_view?g`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:w}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${a=>this._shiftAll=a.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:w}
              ${this.len(this.t("height"),e.height,a=>this.updateFloor({height:Math.max(1,a)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?g`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${a=>this.updateFloor({ha_floor:a.target.value||null})}>
                      <option value="" ?selected=${!e.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(a=>a.floor_id===e.ha_floor||!t.some(l=>l.ha_floor===a.floor_id)).map(a=>g`<option value=${a.floor_id} ?selected=${a.floor_id===e.ha_floor}>${a.name}</option>`)}
                    </select></label
                  >`:w}
              ${i&&this.unplacedAreas(e).length?g`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(e)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(e).length})}
                    </button>
                  </div>`:w}
              ${i?g`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${e.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                    <button class="fp3d-btn" title=${this.t("straighten_hint")} ?disabled=${!e.rooms.length} @click=${()=>this.straightenFloor()}>
                      ${this.t("straighten")}
                    </button>
                  </div>
                  ${this._notice?g`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:w}`:w}
            </div>`:w}
      </section>
      ${this._tool==="measure"&&e?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?g`${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:e?this.renderRoomList(e):w}
      ${this.renderHelpLinks()}
      ${i&&!1?this.renderPresenceSettings():w}
      ${e&&i?this.renderBackgroundForm(e):w}
      ${i&&Rt("diagnostics")?this.renderDiagnostics():w}
    `}moveRoom(e,t){this.change((n,i)=>{let o=i.rooms.findIndex(l=>l.id===e),s=o+t;if(o<0||s<0||s>=i.rooms.length)return;let[a]=i.rooms.splice(o,1);i.rooms.splice(s,0,a)})}renderRoomList(e){return e.rooms.length?g`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${e.rooms.map((t,n)=>g`<div class="fp3d-row fp3d-dev-row">
            <button class="fp3d-row fp3d-room-btn" @click=${()=>this.selectItem("room",t.id)}>
              <span>${t.name}</span><span class="fp3d-muted">${this.area(Ae(t.points))}</span>
            </button>
            ${this.isAdmin&&e.rooms.length>1?g`<button class="fp3d-pin" title=${this.t("room_order_up")} ?disabled=${n===0} @click=${()=>this.moveRoom(t.id,-1)}>↑</button>
                  <button class="fp3d-pin" title=${this.t("room_order_down")} ?disabled=${n===e.rooms.length-1} @click=${()=>this.moveRoom(t.id,1)}>↓</button>`:w}
          </div>`)}
      </div>
    </section>`:w}renderRoomOpenings(e){let t=(this.floor?.openings??[]).filter(n=>n.room_id===e.id);return t.length?g`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${t.length})</summary>
      <div class="fp3d-room-list">
        ${t.map(n=>g`<button class="fp3d-row" @click=${()=>(this.selectItem("opening",n.id),this.renderRoot.querySelector(".fp3d-side")?.scrollTo(0,0))}>
            <span>${this.t(`preset_${Hi(n)}`)}</span><span class="fp3d-muted">${this.m(n.width,2)}</span>
          </button>`)}
      </div>
    </details>`:w}renderRoomForm(e,t){let n=this.isAdmin,i=_n(e.points),o=ze(e.points);return g`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",e.id)}</div>
      <button class="fp3d-btn fp3d-wv-open" title=${this.t("wall_view_open")} @click=${()=>this.openRoomWalls(e)}>▦ ${this.t("wall_view_room")}</button>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${e.name} ?disabled=${!n} @change=${s=>this.updateRoom({name:s.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(e.aliases??[]).join(", ")} ?disabled=${!n} placeholder=${this.t("aliases_placeholder")} @change=${s=>this.updateRoom({aliases:Ri(s.target.value)})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${s=>this.setArea(s.target.value)}>
            <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
            ${t.map(s=>g`<option value=${s.area_id} ?selected=${s.area_id===e.area_id}>${s.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${s=>this.updateRoom({floor_material:s.target.value})}>
            ${va.map(s=>g`<option value=${s} ?selected=${s===e.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${i?g`${this.len(this.t("x"),o.x0,s=>this.setRect("x",s))} ${this.len(this.t("z"),o.z0,s=>this.setRect("z",s))}
            ${this.len(this.t("width"),o.x1-o.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.len(this.t("depth"),o.z1-o.z0,s=>this.setRect("d",s),.01,.05)}`:w}
      </div>
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${Xn(this.t("room_ceiling"),this.unit)}
          <input
            type=${this.unit==="imperial"?"text":"number"}
            step="0.05"
            min="1"
            placeholder=${this.floor?this.lenValue(this.floor.height):""}
            .value=${e.ceiling_height!=null?this.lenValue(e.ceiling_height):""}
            ?disabled=${!n}
            @change=${s=>{let a=s.target.value.trim(),l=a===""?null:this.readLen(a);this.updateRoom({ceiling_height:l===null||l<=0?null:Math.min(30,Math.max(1,l))})}}
        /></label>
        <p class="fp3d-sub fp3d-wide">${this.t("room_ceiling_hint")}</p>
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" title=${this.t("room_start_view_hint")} ?disabled=${!n} @click=${()=>this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${e.start_view?g`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:w}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(Ae(e.points)),n:this.area(fl(e,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{navigator.clipboard?.writeText(e.id).catch(()=>{})}}>${e.id}</code></p>
      ${this.renderEdgeHeights(e)} ${this.renderRoomClimate(e)} ${this.renderRoomOpenings(e)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((s,a)=>g`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.len(this.t("x"),s[0],l=>this.setPoint(a,0,l))} ${this.len(this.t("z"),s[1],l=>this.setPoint(a,1,l))}
            ${n?g`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:w}
          </div>`)}
      </details>
      ${n?g`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(e)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:w}
      ${this._spots?this.renderSpotForm(e):w}
      ${this._packages?g`<div class="fp3d-packages">
            ${Jd.map(s=>g`<button class="fp3d-btn" @click=${()=>this.applyPackage(e,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:w}
    </section>`}applyPackage(e,t){if(!this.isAdmin)return;let n=Yd(e,t,()=>G("furniture"));this.change((i,o)=>o.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(e){let t=ze(e.points),n=this.hass?Pt(this.hass,e.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:n[0]??null}}placeSpots(e){let t=this._spots;if(!t||!this.isAdmin)return;let[n,i,o]=dt[t.type],s=Go(e,t.rows,t.cols).map(([a,l])=>({id:G("furniture"),type:t.type,x:a,z:l,rotation:0,w:n,d:i,h:o,variant:null,entity:t.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(e){let t=this._spots,n=Go(e,t.rows,t.cols).length,i=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),o=s=>this._spots={...t,...s};return g`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>o({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>g`<option value=${s} ?selected=${s===t.type}>${this.t(`furn_${s}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),t.cols,s=>o({cols:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.num(this.t("spots_rows"),t.rows,s=>o({rows:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),t.entity,void 0,i,s=>o({entity:s==="none"?null:s}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(e)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}iconInput(e,t){let n=e?e.startsWith("mdi:")?e:`mdi:${e}`:"";return g`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!this.isAdmin} @change=${i=>t(i.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?Pr(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):w}
      </span></label
    >`}markerSelect(e,t){return g`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>t(n.target.value||null)}>
        <option value="" ?selected=${!e}>${this.t("marker_show_auto")}</option>
        ${sa.map(n=>g`<option value=${n} ?selected=${n===e}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(e){let t=n=>{let i=this.hass?.entities?.[n],o=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return o?this.hass?.areas?.[o]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(e).map(n=>({id:n,label:`${ye(this.hass,n)}${t(n)?` \xB7 ${t(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(e,t,n,i,o){let s=n===void 0?null:n?this.t("entity_auto",{name:ye(this.hass,n)}):this.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return g`<label class="fp3d-field fp3d-wide"
      >${e}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${a}
        .value=${t===null?s!==null?"__auto":"none":t}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${d=>{d.stopPropagation(),o(d.detail.value==="__auto"?null:d.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(e){let t=this.floor,n=t?kn(e,t.rooms,t.walls??[]):null;if(!t||!n)return!1;let i=Ie(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]);return cs(i.walls,e,n)?.wall.exterior??!1}renderSidelightFields(e){if(e.type!=="door")return w;let t=Di(e,this.openingIsExterior(e));if(t!=="sidelight"&&t!=="sidelights")return w;let n=this.isAdmin,i=(o,s)=>g`<label class="fp3d-field"
      >${this.t(s)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${e[o]==null?"":String(e[o])}
        ?disabled=${!n}
        @change=${a=>{let l=Number(a.target.value);this.updateOpening({[o]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return t==="sidelight"?g`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!e.sidelight_hinge} ?disabled=${!n} @change=${o=>this.updateOpening({sidelight_hinge:o.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${i("sidelight_width","sidelight_width")}`:g`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(e){let t=e.type==="door"?qo:Jo,n=Di({type:e.type,style:null},this.openingIsExterior(e)),i=e.style&&t.includes(e.style)?e.style:"";return g`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${o=>this.updateOpening({style:o.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${t.map(o=>g`<option value=${o} ?selected=${o===i}>${this.t(`style_${o}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(e){let t=this.isAdmin,n=e.type==="window",i=e.type==="garage",o=m=>{if(!this.hass)return null;let _=structuredClone(this._doc.floors);for(let y of _)for(let v of y.openings)v.id===e.id&&(v[m]=null);return Xa(this.hass,_).get(e.id)?.[m]??null},s=m=>this.hass?.states[m]?.attributes.device_class,a=this.entityOptions(m=>m.startsWith("cover.")),l=this.entityOptions(m=>/^(sensor|number|input_number)\./.test(m)&&Number.isFinite(Number(this.hass?.states[m]?.state))),d=this.entityOptions(m=>m.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(m)??"")||Te(m)&&ss(this.hass?.states[m])!==null||i&&/^(switch|input_boolean)\./.test(m)),c=this.entityOptions(m=>{let _=this.hass?.states[m];return m.startsWith("binary_sensor.")?typeof _?.attributes.window_state=="string":Te(m)&&(ss(_)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${m} ${ye(this.hass,m)}`))}),h=this.entityOptions(m=>m.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(m)??"")),u=m=>{let _=m===1,y=_?e.tilt:e.tilt2??null,v=_?e.contact:e.contact2,b=(_?e.sensor:e.sensor2)??(y&&y!=="none"?"contact_tilt":"contact"),$=k=>this.updateOpening(_?{contact:k}:{contact2:k==="none"?null:k});return g`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!t}
            @change=${k=>{let M=k.target.value,S=M==="contact_tilt"?{}:_?{tilt:null}:{tilt2:null};this.updateOpening({..._?{sensor:M}:{sensor2:M},...S})}}
          >
            ${["contact","handle","contact_tilt"].map(k=>g`<option value=${k} ?selected=${k===b}>${this.t(`sensor_kind_${k}`)}</option>`)}
          </select></label
        >
        ${b==="handle"?this.entitySelect(this.t("handle_entity"),v,void 0,c,k=>$(k==="none"?_?"none":null:k)):this.entitySelect(this.t("contact_entity"),v,_?o("contact"):void 0,h,$)}
        ${b==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),y,void 0,d,k=>this.updateOpening(_?{tilt:k==="none"?null:k}:{tilt2:k==="none"?null:k})):w}
        ${_?g`${this.entitySelect(this.t("tilt_angle_entity"),e.tilt_angle??null,void 0,this.entityOptions(k=>Te(k)),k=>this.updateOpening({tilt_angle:k==="none"?null:k}))}
            ${e.tilt_angle&&e.tilt_angle!=="none"?g`${this.num(this.t("tilt_angle_max"),e.tilt_max??15,k=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,k))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),e.tilt_offset??0,k=>this.updateOpening({tilt_offset:k}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!e.tilt_invert} ?disabled=${!t} @change=${k=>this.updateOpening({tilt_invert:k.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:w}`:w}`},p=Hi(e),f=e.type==="door";return g`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${p}`)}</h3>${this.fixButton("opening",e.id)}</div>
      ${t?g`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Wi).map(m=>g`<button class="fp3d-chip" aria-pressed=${m===p} @click=${()=>this.setOpeningPreset(e,m)}>${this.t(`preset_${m}`)}</button>`)}
          </div>`:w}
      ${t&&!i?g`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:e.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(e.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${f||n&&e.sill<.1?g`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:e.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:w}
          </div>`:w}
      <div class="fp3d-form">
        ${this.len(this.t("width"),e.width,m=>this.updateOpening({width:Math.max(.3,m)}),.01,.3)}
        ${this.len(this.t("opening_position"),e.offset,m=>this.updateOpening({offset:Math.max(0,m)}),.01,0)}
        ${n?this.len(this.t("sill"),e.sill,m=>this.updateOpening({sill:Math.max(0,m)}),.01,0):w}
        ${this.len(this.t("opening_height"),e.height,m=>this.updateOpening({height:Math.max(.3,m)}),.01,.3)}
        ${n&&this.isAdmin?g`<div class="fp3d-actions fp3d-wide">
              <button
                class="fp3d-btn"
                title=${this.t("cellar_window_hint")}
                @click=${()=>{let m=this.floor?.height??2.5;this.updateOpening({width:1,height:.5,sill:Math.max(0,Math.round((m-.75)*100)/100)})}}
              >
                ▭ ${this.t("cellar_window")}
              </button>
            </div>`:w}
        ${i?w:this.renderStyleSelect(e)}
        ${this.renderSidelightFields(e)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${m=>this.updateOpening({mark:m.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${e.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${e.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?w:g`<label class="fp3d-field fp3d-wide"
          >${this.t(e.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!t} @change=${m=>this.updateOpening({hinge:m.target.value})}>
            <option value="left" ?selected=${e.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${e.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||f?this.entitySelect(this.t(n?"cover_entity":"door_cover"),e.cover,o("cover"),a,m=>this.updateOpening({cover:m})):w}
        ${(n||i||f)&&e.cover!=="none"&&(e.cover||o("cover"))?g`${this.entitySelect(this.t("cover_position_entity"),e.position??null,void 0,l,m=>this.updateOpening({position:m==="none"?null:m}))}
              ${e.position?g`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!t}
                      .checked=${!!e.position_inverted}
                      @change=${m=>this.updateOpening({position_inverted:m.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:w}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!t} .checked=${!!e.confirm} @change=${m=>this.updateOpening({confirm:m.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:w}
        ${n?g`${e.leaves===2?g`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:w}
              ${u(1)} ${e.leaves===2?g`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${u(2)}`:w}`:g`${this.entitySelect(this.t(e.leaves===2?"contact_main":"contact_entity"),e.contact,o("contact"),d,m=>this.updateOpening({contact:m}))}
              ${e.leaves===2&&!i?this.entitySelect(this.t("contact_second"),e.contact2,void 0,d,m=>this.updateOpening({contact2:m==="none"?null:m})):w}
              ${f?g`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!e.shut} ?disabled=${!t} @change=${m=>this.updateOpening({shut:m.target.checked})} />
                    ${this.t("door_shut")}</label
                  >
                  ${this.entitySelect(this.t("door_lock"),e.lock??null,void 0,this.entityOptions(m=>m.startsWith("lock.")),m=>this.updateOpening({lock:m==="none"?null:m}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:w}`}
        ${e.contact!=="none"&&(e.contact||e.contact2||o("contact"))?g`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!e.contact_invert} ?disabled=${!t} @change=${m=>this.updateOpening({contact_invert:m.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:w}
        ${e.type==="window"&&this.floor&&e.sill<pa()-this.floor.elevation-.05?g`<label class="fp3d-check fp3d-wide" title=${this.t("well_hint")}
                ><input type="checkbox" .checked=${e.well!==!1} ?disabled=${!t} @change=${m=>this.updateOpening({well:m.target.checked?void 0:!1})} />
                ${this.t("well")}</label
              >
              ${e.well!==!1?this.len(this.t("well_rim"),e.well_rim??0,m=>this.updateOpening({well_rim:Math.max(-.3,Math.min(1,m))||null}),.01,-.3):w}`:w}
        ${e.type==="window"?g`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!e.rain_ignore} ?disabled=${!t} @change=${m=>this.updateOpening({rain_ignore:m.target.checked||void 0})} />
              ${this.t("rain_ignore")}</label
            >`:w}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${t?g`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:w}
    </section>`}renderFurnitureForm(e){if(this.selection().length>1)return this.renderBlockForm();let t=this.isAdmin,n=In(this.packs??[]),i=n.filter(o=>o.generated);return g`<section>
      <div class="fp3d-h3row"><h3>${e.name||this.t("furniture")}</h3>${this.fixButton("furniture",e.id)}</div>
      ${e.group?g`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${()=>{this._single=!1,this.requestUpdate()}}>${this.t("block_select")}</button></p>`:w}
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t} placeholder=${this.t(`furn_${e.type}`)===`furn_${e.type}`?"":this.t(`furn_${e.type}`)} @change=${o=>this.updateFurniture({name:o.target.value.trim()||null})} />
        </label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(e.aliases??[]).join(", ")} ?disabled=${!t} placeholder=${this.t("aliases_placeholder")} @change=${o=>this.updateFurniture({aliases:Ri(o.target.value)})}
        /></label>
        ${e.name?g`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${o=>this.updateFurniture({show_name:o.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:w}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!t} @change=${o=>this.updateFurniture({type:o.target.value})}>
            ${this.typeChoices(e.type).map(o=>g`<option value=${o} ?selected=${o===e.type}>${this.t(`furn_${o}`)}</option>`)}
            ${(this.packs??[]).filter(o=>o.items.length).map(o=>g`<optgroup label=${He(o,this.hass?.language??"de")}>
                ${n.filter(s=>!s.generated&&s.pack.id===o.id).map(({type:s,item:a})=>g`<option value=${s} ?selected=${s===e.type}>${We(a,this.hass?.language??"en")}</option>`)}
              </optgroup>`)}
            ${i.length?g`<optgroup label=${He(i[0].pack,this.hass?.language??"de")}>
                  ${i.map(({type:o,item:s})=>g`<option value=${o} ?selected=${o===e.type}>${We(s,this.hass?.language??"en")}</option>`)}
                </optgroup>`:w}
            ${e.type.startsWith("pack:")&&!n.some(o=>o.type===e.type)?g`<option value=${e.type} selected>${Ot(this.hass,e.type)}</option>`:w}
          </select></label
        >
        ${this.len(this.t("x"),e.x,o=>this.updateFurniture({x:o}))} ${this.len(this.t("z"),e.z,o=>this.updateFurniture({z:o}))}
        ${this.len(this.t("width"),e.w,o=>this.updateFurniture({w:Math.max(.01,o)}),.01,.01)}
        ${this.len(this.t("depth"),e.d,o=>this.updateFurniture({d:Math.max(.01,o)}),.01,.01)}
        ${this.len(this.t("height_m"),e.h,o=>this.updateFurniture({h:Math.max(.005,o)}),.01,0)}
        ${this.num(this.t("rotation"),e.rotation,o=>this.updateFurniture({rotation:(o%360+360)%360}),1)}
        ${Be(e.type)?w:g`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!e.mirror} ?disabled=${!t} @change=${o=>this.updateFurniture({mirror:o.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${e.type==="led_strip"?g`${this.num(this.t("strip_tilt"),e.tilt??0,o=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(o)))}),5)}
              ${e.upright?w:g`<span title=${this.t("strip_rise_hint")}>${this.num(this.t("strip_rise"),e.rise??0,o=>this.updateFurniture({rise:Math.max(-80,Math.min(80,Math.round(o)))||void 0}),5)}</span>`}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!e.upright} ?disabled=${!t} @change=${o=>this.updateFurniture({upright:o.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:w}
        ${ct(e)&&this.floor?g`${this.len(this.t("mount_height"),e.mount_y??Fe(this.floor,e),o=>this.updateFurniture({mount_y:Math.min(vo,Math.max(0,o))}),.01,0)}
              ${e.mount_y!=null?g`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:w}`:w}
      </div>
      ${e.type==="stairs"?g`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:w}
      ${e.type==="stairs_u"?g`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:w}
      ${e.type==="stairwell"?g`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(o=>o.points.length>=3&&(Il(Ce(e),o.points)||Ae(hs(o.points,Ce(e)))>.01))?g`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:w}`:w}
      ${e.type==="inverter"||e.type==="home_battery"?g`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!t} @change=${o=>this.updateFurniture({variant:o.target.value||null})}>
                ${(e.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(o=>g`<option value=${o} ?selected=${(e.variant??"")===o}>${this.t(`${e.type==="inverter"?"inverter":"battery"}_${o||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:w}
      ${e.type==="lamp_pendant"?g`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!t} @change=${o=>this.updateFurniture({variant:o.target.value||null})}>
                ${["","globe","cone","drum"].map(o=>g`<option value=${o} ?selected=${(e.variant??"")===o}>${this.t(`pendant_${o||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:w}
      ${fn(e.type)?this.renderFurnitureLinks(e):ip.has(e.type)?w:g`<div class="fp3d-form fp3d-links">${this.renderStateLinks(e)}</div>`} ${Uo.has(e.type)?this.renderGangsForm(e):w} ${Zo.has(e.type)?this.renderTechForm(e):w} ${e.type==="parking"?this.renderParkingForm(e):w} ${e.type==="waste_bin"||e.type==="mailbox"?this.renderHouseholdForm(e):this.renderHouseholdExtras(e)}
      ${e.type.startsWith("pack:mastershort.vehicles:")&&this.isAdmin?g`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(e)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:w}
      ${t?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallViewFor(e)}>▦ ${this.t("wall_view")}</button>
            ${e.entity&&e.entity!=="none"&&e.type!=="parking"?g`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(e)}>${this.t("as_device")}</button>`:w}
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>
          ${this.renderMultiToggle()}`:w}
    </section>`}setEnergy(e){let t=structuredClone(this._doc);t.energy={...t.energy,...e},this.setDoc(t)}async importEnergyPrefs(){if(!this.hass)return;let e;try{e=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let t=Cd(this.hass,e),n=0,i=a=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===a),o=(a,l,d)=>{if(!d)return;let c=i(a);if(!c&&this.floor&&(this.addEnergyDevice(a),c=i(a)),!c||c[l]&&c[l]!=="none")return;let h=c.id;this.change(u=>{let p=u.floors.flatMap(f=>f.furniture).find(f=>f.id===h);p&&(p[l]=d)}),n++};o("meter","power",t.grid),o("inverter","power",t.solar),o("home_battery","power",t.battery),o("home_battery","soc",t.battery_soc);let s=Bd(e);for(let a of["gas","water"])s[a]&&!this._doc.energy[a]&&(this.setEnergy({[a]:s[a]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let e=this._doc.energy,t=this.isAdmin,n=(m,_)=>this.hass?.states[m]?.attributes[_],i=this.entityOptions(m=>this.isPowerSensor(m)),o=this.entityOptions(m=>Te(m)&&n(m,"device_class")==="battery"),s=this.entityOptions(m=>Te(m)&&(n(m,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(m,"unit_of_measurement")??""))),a=m=>_=>this.setEnergy({[m]:_==="none"?null:_}),l=m=>this.entityOptions(_=>Te(_)&&(n(_,"device_class")===m||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(_,"unit_of_measurement")??""))),d=this.hass?vn(this.hass,this._doc.floors):new Map,c=Bs(this._doc,m=>this.devicePower(m,d)),h=this.hass?Kd(this.hass,this._doc,[],c):null,u=!!h&&(h.solar??0)<20,p=u&&h.grid!==null&&h.grid<-50,f=u&&h.battery!==null&&h.battery<-50&&(h.grid??0)<=0;return g`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${p?g`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({grid_invert:!e.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:w}
      ${f?g`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({battery_invert:!e.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:w}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),e.grid,c.grid,i,a("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.grid_invert} ?disabled=${!t} @change=${m=>this.setEnergy({grid_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),e.solar,c.solar[0]??null,i,a("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),e.battery,c.battery[0]??null,i,a("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.battery_invert} ?disabled=${!t} @change=${m=>this.setEnergy({battery_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),e.battery_soc,c.soc[0]??null,o,a("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),e.consumption,null,i,a("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),e.tariff,void 0,s,a("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"),e.gas??null,void 0,l("gas"),m=>this.setEnergy({gas:m==="none"?null:m}))}
        ${this.entitySelect(this.t("energy_water_meter"),e.water??null,void 0,l("water"),m=>this.setEnergy({water:m==="none"?null:m}))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!t||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?g`<p class="fp3d-sub">${this._energyNote}</p>`:w}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(e){let t=e.elevation+e.height;if(!(this._doc.settings.roof.sections??[]).some(o=>cd(o,t)))return w;let i={settings:this._doc.settings};return T`${[1.5,2].map(o=>hd(i,e.elevation,o).map(([s,a])=>{let[l,d]=this.toScreen(s),[c,h]=this.toScreen(a);return T`<line class="fp3d-headroom" x1=${l} y1=${d} x2=${c} y2=${h} />
          <text class="fp3d-headroom-label" x=${(l+c)/2} y=${(d+h)/2-4}>${this.m(o,1)}</text>`}))}`}renderFavorites(){let e=this._doc.settings.favorites??[],t=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(s=>t.includes(s.split(".")[0])&&!e.includes(s)),i=s=>this.change(a=>a.settings.favorites=s.length?s:void 0),o=(s,a)=>{let l=[...e],[d]=l.splice(s,1);l.splice(Math.max(0,Math.min(l.length,s+a)),0,d),i(l)};return g`<details class="fp3d-section">
      <summary>${this.t("favorites")}${e.length?g` <span class="fp3d-lib-count">${e.length}</span>`:w}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${e.map((s,a)=>g`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${ye(this.hass,s)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${a===0} @click=${()=>o(a,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${a===e.length-1} @click=${()=>o(a,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>i(e.filter(l=>l!==s))}>✕</button>
        </div>`)}
      ${e.length<40?g`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,s=>{s&&s!=="none"&&!e.includes(s)&&i([...e,s])})}
          </div>`:w}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let e=this._doc.settings.media_presets??[],t=i=>this.change(o=>o.settings.media_presets=i.length?i:void 0),n=(i,o)=>t(e.map((s,a)=>a===i?{...s,...o}:s));return g`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(i=>g`<option value=${i}></option>`)}
      </datalist>
      ${e.map((i,o)=>g`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${i.label} @change=${s=>n(o,{label:s.target.value.trim()||"Radio"})}
          /></label>
          <label class="fp3d-field" title=${this.t("preset_type_hint")}
            >${this.t("preset_type")}
            <input type="text" list="fp3d-preset-types" .value=${i.type} @change=${s=>n(o,{type:s.target.value.trim()||"music"})}
          /></label>
          <label class="fp3d-field fp3d-wide" title=${this.t("preset_content_hint")}
            >${this.t("preset_content")}
            <input type="text" .value=${i.content} placeholder="https://… · spotify:playlist:… · Rock Antenne" @change=${s=>n(o,{content:s.target.value.trim()})}
          /></label>
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn fp3d-danger" @click=${()=>t(e.filter((s,a)=>a!==o))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${e.length<30?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>t([...e,{id:G("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:w}`}renderOwnButtons(){let e=this._doc.settings.buttons??[],t=o=>this.change(s=>s.settings.buttons=o.length?o:void 0),n=(o,s)=>t(e.map((a,l)=>l===o?{...a,...s}:a)),i={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return g`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${e.map((o,s)=>g`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${o.label} @change=${a=>n(s,{label:a.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${a=>n(s,{action:a.target.value})}>
              ${aa.map(a=>g`<option value=${a} ?selected=${a===o.action}>${this.t(`own_action_${a}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(o.icon??null,a=>n(s,{icon:a}))}
          ${o.action!=="fire_dom_event"?g`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${o.action}`)}
                <input type="text" .value=${o.target??""} placeholder=${i[o.action]} @change=${a=>n(s,{target:a.target.value.trim()||null})}
              /></label>`:w}
          ${o.action==="service"||o.action==="fire_dom_event"?g`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${o.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${o.data?JSON.stringify(o.data,null,1):""}
                  @change=${a=>{a.target.setCustomValidity("");let l=a.target.value.trim();if(!l)return n(s,{data:null});try{let d=JSON.parse(l);d&&typeof d=="object"&&!Array.isArray(d)&&n(s,{data:d})}catch{a.target.setCustomValidity(this.t("own_data_bad")),a.target.reportValidity()}}}
                ></textarea></label
              >`:w}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${s===0} @click=${()=>t([...e.slice(0,s-1),o,e[s-1],...e.slice(s+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>t(e.filter((a,l)=>l!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${e.length<20?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>t([...e,{id:G("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:w}`}paneView(){let t=this.renderRoot.querySelector("fp3d-view3d")?.currentView();if(!t)return null;let n=t.target;return{theta:x(t.theta),phi:x(t.phi),radius:x(t.radius),...n?{target:{x:x(n.x),y:x(n.y),z:x(n.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}renderDirectorTriggers(e,t){if(!this.hass)return w;let i=e.triggers??[],o=a=>this.change(l=>l.settings.director={...l.settings.director??{},triggers:a.length?a:null}),s=ce("camera_cockpit");return g`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("director_triggers")}</h4>
      <p class="fp3d-sub">${this.t("director_triggers_hint")}</p>
      ${i.map((a,l)=>g`<div class="fp3d-form">
          ${this.entitySelect(this.t("director_trigger_entity"),a.entity||null,void 0,this.entityOptions(d=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(d)),d=>o(i.map((c,h)=>h===l?{...c,entity:d&&d!=="none"?d:""}:c).filter(c=>c.entity)))}
          ${this.entitySelect(this.t("director_doorbell_camera"),a.camera,void 0,this.entityOptions(d=>d.startsWith("camera.")&&t.includes(d)),d=>o(i.map((c,h)=>h===l?{...c,camera:d&&d!=="none"?d:null}:c)))}
          <button class="fp3d-btn" ?disabled=${!s} @click=${()=>o(i.filter((d,c)=>c!==l))}>✕ ${this.t("delete")}</button>
        </div>`)}
      ${i.length<20&&s?g`<div class="fp3d-form">
            ${this.entitySelect(this.t("director_trigger_add"),null,void 0,this.entityOptions(a=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(a)),a=>{a&&a!=="none"&&o([...i,{entity:a,camera:null}])})}
          </div>`:w}
    </div>`}renderDirector(){let e=this.hass,t=this._doc.settings.director??{},n=h=>this.change(u=>u.settings.director={...u.settings.director??{},...h}),i=ce("camera_cockpit"),o=sd(),s=[...new Set(this._doc.floors.flatMap(h=>h.placements.map(u=>u.entity_id)))],a=e?ad(e):[],l=e?t.doorbell_entity??a[0]??null:null,d=e&&l?ld(e,l,s):null,c=(h,u,p,f=!i)=>g`<label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${u} ?disabled=${f} @change=${m=>p(m.target.checked)} /> ${this.t(h)}</label
      >`;return g`<details class="fp3d-section">
      <summary>🎬 ${this.t("director")}</summary>
      <p class="fp3d-sub">${this.t("director_hint")}</p>
      ${i?w:g`<p class="fp3d-sub">🔒 ${this.t("pro_feature_camera_cockpit")}</p>`}
      <div class="fp3d-form">
        ${c("director_here",o,h=>{rd(h),this.dispatchEvent(new CustomEvent("director-here",{bubbles:!0,composed:!0})),this.requestUpdate()})}
        <p class="fp3d-sub fp3d-wide">${this.t("director_here_hint")}</p>
        ${c("director_doorbell",!!t.doorbell,h=>n({doorbell:h}))}
        ${t.doorbell&&e?g`${this.entitySelect(this.t("director_doorbell_entity"),t.doorbell_entity??null,a[0]??null,this.entityOptions(h=>h.startsWith("event.")||h.startsWith("binary_sensor.")),h=>n({doorbell_entity:h==="none"?null:h}))}
            ${this.entitySelect(this.t("director_doorbell_camera"),t.doorbell_camera??null,d,this.entityOptions(h=>h.startsWith("camera.")&&s.includes(h)),h=>n({doorbell_camera:h==="none"?null:h}))}
            ${!a.length&&!t.doorbell_entity?g`<p class="fp3d-sub fp3d-wide">${this.t("director_no_doorbell")}</p>`:w}`:w}
        <label class="fp3d-field fp3d-wide"
          >${this.t("director_motion")}
          <select ?disabled=${!i} @change=${h=>n({motion:h.target.value})}>
            ${["off","person","all"].map(h=>g`<option value=${h} ?selected=${(t.motion??"off")===h}>${this.t(`director_motion_${h}`)}</option>`)}
          </select></label
        >
        ${c("director_appliances",!!t.appliances,h=>n({appliances:h}))}
        ${c("director_alerts",!!t.alerts,h=>n({alerts:h}))}
        ${this.renderDirectorTriggers(t,s)}
        ${c("director_live",!!t.live,h=>n({live:h}))}
        <p class="fp3d-sub fp3d-wide">${this.t("director_live_hint")}</p>
        ${this.num(this.t("director_hold"),t.hold??30,h=>n({hold:Math.min(600,Math.max(10,Math.round(h)))}),5,10)}
      </div>
      <p class="fp3d-sub">${this.t("director_back_hint")}</p>
    </details>`}voicePipes=null;voicePipesAsked=!1;renderVoicePipeline(){let e=this.hass;if(!e)return w;this.voicePipesAsked||(this.voicePipesAsked=!0,e.callWS({type:"assist_pipeline/pipeline/list"}).then(n=>{this.voicePipes=n.pipelines.map(i=>({id:i.id,name:i.name,stt:!!i.stt_engine})),this.requestUpdate()}).catch(()=>{}));let t=id();return g`<div class="fp3d-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("voice_pipeline")}
        <select
          @change=${n=>{od(n.target.value||null),this.requestUpdate()}}
        >
          <option value="" ?selected=${!t}>${this.t("voice_pipeline_preferred")}</option>
          ${(this.voicePipes??[]).map(n=>g`<option value=${n.id} ?selected=${t===n.id} ?disabled=${!n.stt}>${n.name}${n.stt?"":` (${this.t("voice_pipeline_no_stt")})`}</option>`)}
        </select></label
      >
    </div>`}renderVoice(){let e=Ql(),t=[...this.t("voice_examples").split("|"),...wc(this.hass?.language??"en")];return g`<details class="fp3d-section">
      <summary>🎙️ ${this.t("voice")}</summary>
      <p class="fp3d-sub">${this.t("voice_hint")}</p>
      <p class="fp3d-sub"><b>${this.t("voice_understands")}</b></p>
      <ul class="fp3d-voice-list">
        ${t.map(n=>g`<li>${n}</li>`)}
      </ul>
      <div class="fp3d-form">
        <label class="fp3d-check fp3d-wide"
          ><input
            type="checkbox"
            .checked=${e}
            @change=${n=>{ed(n.target.checked),this.dispatchEvent(new CustomEvent("voice-here",{bubbles:!0,composed:!0})),this.requestUpdate()}}
          />
          ${this.t("voice_here")}</label
        >
        <label class="fp3d-wide"
          >${this.t("screen_name")}
          <input
            type="text"
            .value=${td()}
            placeholder=${this.t("screen_name_placeholder")}
            @change=${n=>{nd(n.target.value),this.dispatchEvent(new CustomEvent("voice-here",{bubbles:!0,composed:!0}))}}
          />
        </label>
      </div>
      <p class="fp3d-sub">${this.t("screen_name_hint")}</p>
      ${this.renderVoicePipeline()}
      <p class="fp3d-sub">${this.t("voice_needs")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.dispatchEvent(new CustomEvent("mic-probe",{bubbles:!0,composed:!0}))}>${this.t("director_mic_test")}</button>
      </div>
      <p class="fp3d-sub">${this.t("director_mic_hint")}</p>
    </details>`}renderPresenceSettings(){let e=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),t=i=>{let o=i.slice(7),s=this.entityOptions(l=>Te(l)),a=l=>l.includes(o)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...s.filter(l=>a(l.id)),...s.filter(l=>!a(l.id))]},n=(i,o)=>{let s=structuredClone(this._doc);s.presence=s.presence.filter(a=>a.person!==i),o&&o!=="none"&&s.presence.push({person:i,sensor:o}),this.setDoc(s)};return g`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${e.length?e.map(i=>this.entitySelect(`${ye(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(o=>o.person===i)?.sensor??null,void 0,t(i),o=>n(i,o))):g`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderStateLinks(e){return g`${this.entitySelect(this.t("furn_state_entity"),e.state_entity??null,void 0,this.entityOptions(t=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(t)),t=>this.updateFurniture({state_entity:t==="none"?null:t}))}
              ${e.state_entity&&e.state_entity!=="none"?g`${this.entitySelect(this.t("furn_state_entity2"),e.state_entity2??null,void 0,this.entityOptions(t=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(t)),t=>this.updateFurniture({state_entity2:t==="none"?null:t}))}
                    ${e.state_entity2&&e.state_entity2!=="none"?g`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${t=>this.updateFurniture({state_split:t.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${e.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${e.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:w}`:w}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}setHousehold(e){let t=structuredClone(this._doc);t.settings.household={...t.settings.household??{},...e},this.setDoc(t)}renderHouseholdForm(e){let t=this.isAdmin,n=ce("household"),i=!n&&Rt("household")?g`<section class="fp3d-teaser fp3d-wide">
          <div class="fp3d-teaser-head">
            <b>🏠 ${this.t("pro_name_household")}</b>
          </div>
          <p class="fp3d-sub">${this.t(e.type==="waste_bin"?"household_teaser_bin":"household_teaser_mail")}</p>
        </section>`:w,o=(d,c,h,u,p)=>g`<label class="fp3d-field fp3d-wide"
        >${d}
        <select ?disabled=${!t} @change=${f=>p(f.target.value)}>
          ${h.map(f=>g`<option value=${f} ?selected=${f===c}>${this.t(u(f))}</option>`)}
        </select></label
      >`;if(e.type==="waste_bin"){let d=Bl(e),c=e.bin_kind??"rest",[h,u]=jl(e),p=this.entityOptions(f=>f.startsWith("calendar.")||f.startsWith("sensor."));return g`<div class="fp3d-form fp3d-links">
        ${o(this.t("bin_shape"),d,ks,f=>`bin_shape_${f}`,f=>{let[m,_,y]=Ol[f];this.updateFurniture({variant:f==="bin240"?null:f,w:m,d:_,h:y})})}
        ${o(this.t("bin_kind"),c,Ll,f=>`bin_kind_${f}`,f=>{let[m,_]=xs(f,Kl());this.updateFurniture({bin_kind:f,bin_color:m,bin_lid:_===m?null:_})})}
        <label class="fp3d-field"
          >${this.t("bin_color")}
          <input type="color" .value=${h} ?disabled=${!t} @change=${f=>this.updateFurniture({bin_color:f.target.value})}
        /></label>
        <label class="fp3d-field"
          >${this.t("bin_lid")}
          <input type="color" .value=${u} ?disabled=${!t} @change=${f=>this.updateFurniture({bin_lid:f.target.value})}
        /></label>
        ${n?g`${this.entitySelect(this.t("bin_source"),e.bin_source??null,void 0,p,f=>this.updateFurniture({bin_source:f==="none"?null:f}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("bin_match")}
                <input type="text" .value=${e.bin_match??""} placeholder=${this.t(`bin_kind_${c}`)} ?disabled=${!t}
                  @change=${f=>this.updateFurniture({bin_match:f.target.value.trim()||null})} /></label>
              ${this.num(this.t("bin_from"),this._doc.settings.household?.bin_from??14,f=>this.setHousehold({bin_from:Math.max(0,Math.min(24,f))}),.5)}
              ${this.num(this.t("bin_until"),this._doc.settings.household?.bin_until??12,f=>this.setHousehold({bin_until:Math.max(0,Math.min(24,f))}),.5)}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_hint")}</p>`:i}
      </div>`}let s=Cl(e),a=this.entityOptions(d=>["binary_sensor.","input_boolean.","sensor.","counter.","input_number."].some(c=>d.startsWith(c))),l=this.entityOptions(d=>d.startsWith("binary_sensor."));return g`<div class="fp3d-form fp3d-links">
      ${o(this.t("mailbox_shape"),s,$s,d=>`mailbox_shape_${d}`,d=>{let[c,h,u]=Vl[d];this.updateFurniture({variant:d==="wall"?null:d,w:c,d:h,h:u})})}
      ${n?g`${this.entitySelect(this.t("mailbox_entity"),typeof e.entity=="string"&&e.entity!=="none"?e.entity:null,void 0,a,d=>this.updateFurniture({entity:d??"none"}))}
            ${this.entitySelect(this.t("mailbox_door"),e.mailbox_door??null,void 0,l,d=>this.updateFurniture({mailbox_door:d==="none"?null:d}))}
            <p class="fp3d-sub fp3d-wide">${this.t("mailbox_hint")}</p>`:i}
    </div>`}renderHouseholdExtras(e){let t=e.type==="plant"||Hl(e.type),n=e.type==="washer"||e.type==="dryer"||e.type==="dishwasher",i=e.type==="fridge"||e.type==="fridge_smart",o=fn(e.type);if(!t&&!o)return w;if(!ce("household"))return!Rt("household")||!(t||n||i)?w:g`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head">
          <b>🏠 ${this.t("pro_name_household")}</b>
        </div>
        <p class="fp3d-sub">${this.t(t?"hh_teaser_plant":i?"hh_teaser_fridge":"hh_teaser_appliance")}</p>
      </section>`;let s=this.entityOptions(c=>c.startsWith("sensor.")),a=this.entityOptions(c=>c.startsWith("binary_sensor.")),l=this.entityOptions(c=>["sensor.","binary_sensor.","input_boolean.","input_datetime.","input_number."].some(h=>c.startsWith(h))),d=c=>c==="none"?null:c;return g`<div class="fp3d-form fp3d-links">
      <p class="fp3d-sub fp3d-wide"><b>🏠 ${this.t("pro_name_household")}</b></p>
      ${t?g`${this.entitySelect(this.t("hh_moisture"),e.moisture??null,void 0,this.entityOptions(c=>c.startsWith("plant.")||c.startsWith("sensor.")),c=>this.updateFurniture({moisture:d(c)}))}
            ${this.num(this.t("hh_moisture_min"),e.moisture_min??20,c=>this.updateFurniture({moisture_min:Math.max(0,Math.min(100,Math.round(c)))}),1)}`:w}
      ${n?g`${this.entitySelect(this.t("hh_remaining"),e.remaining??null,void 0,s,c=>this.updateFurniture({remaining:d(c)}))}
            ${this.entitySelect(this.t("hh_door"),e.door_left??null,void 0,a,c=>this.updateFurniture({door_left:d(c)}))}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_appliance_hint")}</p>`:w}
      ${i?g`${e.type==="fridge"?this.entitySelect(this.t("hh_fridge_door"),e.door_left??null,void 0,a,c=>this.updateFurniture({door_left:d(c)})):w}
            ${this.num(this.t("hh_door_alarm"),e.door_alarm??2,c=>this.updateFurniture({door_alarm:Math.max(.5,Math.min(120,c))}),.5)}`:w}
      ${o?g`${this.entitySelect(this.t("hh_service_entity"),e.service??null,void 0,l,c=>this.updateFurniture({service:d(c)}))}
            ${e.service&&e.service!=="none"?this.num(this.t("hh_service_min"),e.service_min??10,c=>this.updateFurniture({service_min:Math.max(0,c)}),1):w}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_service_hint")}</p>`:w}
    </div>`}renderAwningFields(e){let t=this.isAdmin,n=this.entityOptions(s=>s.startsWith("sensor.")||s.startsWith("input_number.")||s.startsWith("number.")),i={arm:{w:3,d:2.5,y:2.3,pitch:null},drop:{w:2.4,d:1.2,y:2.3,pitch:20},vertical:{w:2,d:.2,y:2.3,pitch:null},pergola:{w:4,d:3.5,y:2.6,pitch:6},side:{w:3,d:.2,y:1.8,pitch:null}},o=e.variant??"arm";return g`<label class="fp3d-field fp3d-wide"
        >${this.t("awning_kind")}
        <select
          ?disabled=${!t}
          @change=${s=>{let a=s.target.value,l=i[a];this.updateFurniture({variant:a==="arm"?null:a,w:l.w,d:l.d,mount_y:l.y,awning_pitch:l.pitch})}}
        >
          ${Object.keys(i).map(s=>g`<option value=${s} ?selected=${o===s}>${this.t(`awning_kind_${s}`)}</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${this.t(`awning_kind_${o}_hint`)}</p>
      ${o==="vertical"||o==="side"?w:this.num(this.t("awning_pitch"),e.awning_pitch??12,s=>this.updateFurniture({awning_pitch:Math.max(0,Math.min(80,Math.round(s)))}),1)}
      ${this.num(this.t("awning_time"),e.awning_time??20,s=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(s)))}),1)}
      ${this.entitySelect(this.t("awning_position"),e.awning_position??null,void 0,n,s=>this.updateFurniture({awning_position:s==="none"?null:s}))}
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${e.awning_valance!==!1} ?disabled=${!t} @change=${s=>this.updateFurniture({awning_valance:s.target.checked})} />
        ${this.t("awning_valance")}</label
      >
      <label class="fp3d-check fp3d-wide" title=${this.t("awning_invert_hint")}
        ><input type="checkbox" .checked=${!!e.awning_invert} ?disabled=${!t} @change=${s=>this.updateFurniture({awning_invert:s.target.checked})} />
        ${this.t("awning_invert")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("awning_hint")}</p>`}renderMotionFields(e){let t=this.isAdmin,n=this.entityOptions(o=>o.startsWith("sensor.")||o.startsWith("input_number.")||o.startsWith("number.")),i=e.variant==="left"||e.variant==="right"?e.variant:"both";return g`${Ut(e.type)==="curtain"?g`<label class="fp3d-field fp3d-wide"
            >${this.t("curtain_side")}
            <select ?disabled=${!t} @change=${o=>{let s=o.target.value;this.updateFurniture({variant:s==="both"?null:s})}}>
              ${["both","left","right"].map(o=>g`<option value=${o} ?selected=${i===o}>${this.t(`curtain_side_${o}`)}</option>`)}
            </select></label
          >`:w}
      ${this.num(this.t("motor_time"),e.awning_time??20,o=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(o)))}),1)}
      ${this.entitySelect(this.t("awning_position"),e.awning_position??null,void 0,n,o=>this.updateFurniture({awning_position:o==="none"?null:o}))}
      <label class="fp3d-check fp3d-wide" title=${this.t("motor_invert_hint")}
        ><input type="checkbox" .checked=${!!e.awning_invert} ?disabled=${!t} @change=${o=>this.updateFurniture({awning_invert:o.target.checked})} />
        ${this.t("awning_invert")}</label
      >`}renderTechForm(e){if(!this.hass)return w;let t=this.isAdmin,n=e.type==="wifi_ap",i=["","wall"],o=l=>{let[d,c,h]=Aa[`${e.type}:${l}`];this.updateFurniture({variant:l||null,w:d,d:c,h,mount_y:null})},s=this.entityOptions(l=>l.startsWith("sensor.")),a=this.entityOptions(l=>(n?/^(binary_sensor|sensor|device_tracker|switch|button|update)\./:/^(water_heater|climate|switch|input_boolean|sensor)\./).test(l));return g`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t("tech_mount")}
        <select ?disabled=${!t} @change=${l=>o(l.target.value)}>
          ${i.map(l=>g`<option value=${l} ?selected=${(e.variant??"")===l}>${this.t(`${e.type}_${l||"std"}`)}</option>`)}
        </select></label
      >
      ${this.entitySelect(this.t(n?"ap_status":"heater_entity"),typeof e.entity=="string"&&e.entity!=="none"?e.entity:null,void 0,a,l=>this.updateFurniture({entity:l&&l!=="none"?l:"none"}))}
      ${n?this.entitySelect(this.t("ap_clients_sensor"),e.clients??null,void 0,s,l=>this.updateFurniture({clients:l&&l!=="none"?l:null})):g`${this.entitySelect(this.t("heater_temp"),e.water_temp??null,void 0,s,l=>this.updateFurniture({water_temp:l&&l!=="none"?l:null}))}
            ${this.entitySelect(this.t("furn_power"),typeof e.power=="string"&&e.power!=="none"?e.power:null,void 0,this.entityOptions(l=>this.isPowerSensor(l)),l=>this.updateFurniture({power:l&&l!=="none"?l:"none"}))}`}
      <p class="fp3d-sub fp3d-wide">${this.t(n?"ap_hint":"heater_hint")}</p>
      <div class="fp3d-form">${this.markerSelect(e.marker??null,l=>this.updateFurniture({marker:l}))}${this.iconInput(e.icon,l=>this.updateFurniture({icon:l}))}</div>
    </div>`}renderGangsForm(e){if(!this.hass)return w;let t=this.isAdmin,n=za(e),i=e.type==="wall_socket",o=this.entityOptions(c=>/^(light|switch|input_boolean|fan)\./.test(c)),s=this.entityOptions(c=>this.isPowerSensor(c)),a=c=>this.updateFurniture({gangs:c.length>1||c[0]?.entity||c[0]?.power?c:null}),l=(c,h)=>a(n.map((u,p)=>p===c?{...u,...h}:u)),d=c=>{let h=Array.from({length:c},(u,p)=>n[p]??{entity:null});this.updateFurniture({gangs:c>1||h[0].entity||h[0].power?h:null,w:Ea(c)})};return g`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t(i?"gang_count_socket":"gang_count_switch")}
        <select ?disabled=${!t} @change=${c=>d(Number(c.target.value))}>
          ${Array.from({length:Ti},(c,h)=>h+1).map(c=>g`<option value=${c} ?selected=${n.length===c}>${c}</option>`)}
        </select></label
      >
      ${i?g`<label class="fp3d-field"
            >${this.t("socket_kind")}
            <select ?disabled=${!t} @change=${c=>this.updateFurniture({variant:c.target.value||null})}>
              ${["","outdoor"].map(c=>g`<option value=${c} ?selected=${(e.variant??"")===c}>${this.t(c?"socket_outdoor":"socket_indoor")}</option>`)}
            </select></label
          >`:w}
      ${n.map((c,h)=>g`${this.entitySelect(`${this.t(i?"gang_socket":"gang_switch")}${n.length>1?` ${h+1}`:""}`,c.entity,void 0,o,u=>l(h,{entity:u&&u!=="none"?u:null}))}
        ${i?this.entitySelect(`${this.t("furn_power")}${n.length>1?` ${h+1}`:""}`,c.power??null,void 0,s,u=>l(h,{power:u&&u!=="none"?u:null})):w}`)}
      <p class="fp3d-sub fp3d-wide">${this.t(i?"gang_socket_hint":"gang_switch_hint")}</p>
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${c=>this.updateFurniture({confirm:c.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <div class="fp3d-form">${this.markerSelect(e.marker??null,c=>this.updateFurniture({marker:c}))}${this.iconInput(e.icon,c=>this.updateFurniture({icon:c}))}</div>
    </div>`}renderFurnitureLinks(e){let t=new Set(["smoke","gas","carbon_monoxide","heat","moisture","safety","sound","problem"]);if(!this.hass)return w;let n=this.hass,i=h=>{let u=structuredClone(this._doc.floors);for(let p of u)for(let f of p.furniture)f.id===e.id&&(f[h]=null);return vn(n,u).get(e.id)?.[h]??null},o=Ki(e.type),s=o&&(!Gt(e.type)||Jr(e.type)),a=Be(e.type),l=this.entityOptions(h=>a?/^(light|switch|input_boolean)\./.test(h):s?/^(media_player|switch|input_boolean|light)\./.test(h)||Ut(e.type)==="screen"&&h.startsWith("cover."):e.type==="awning"?h.startsWith("cover."):Ut(e.type)==="curtain"?/^(cover|switch|input_boolean)\./.test(h):e.type==="radiator"||e.type==="ac_unit"?h.startsWith("climate."):bt(e.type)?h.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(h)||Ja(n.states[h])||h.startsWith("binary_sensor.")&&(e.type.endsWith("smoke_detector")||t.has(String(n.states[h]?.attributes.device_class??"")))),d=this.entityOptions(h=>this.isPowerSensor(h)),c=e.type==="fridge_smart"?this.entityOptions(h=>h.startsWith("binary_sensor.")):[];return g`<div class="fp3d-form fp3d-links">
        ${e.type==="grid_point"?g`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(a?"furn_entity_light":Ut(e.type)?"motor_cover":s?"furn_entity_tv":e.type==="awning"?"awning_cover":e.type==="radiator"||e.type==="ac_unit"?"furn_entity_climate":bt(e.type)?"furn_entity_vacuum":"furn_entity"),e.entity??null,i("entity"),l,h=>this.updateFurniture({entity:h}))}
        ${e.type==="lamp_fan"?g`${this.entitySelect(this.t("fan_entity"),e.fan??null,void 0,this.entityOptions(h=>h.startsWith("fan.")),h=>this.updateFurniture({fan:h&&h!=="none"?h:null}))}
              <p class="fp3d-sub fp3d-wide">${this.t("fan_hint")}</p>`:w}
        ${e.type==="radiator"?g`${this.entitySelect(this.t("heat_sensor"),e.heat_sensor??null,void 0,this.entityOptions(h=>/^(binary_sensor|sensor|switch|input_boolean|number)\./.test(h)),h=>this.updateFurniture({heat_sensor:h&&h!=="none"?h:null}))}
              <p class="fp3d-sub fp3d-wide">${this.t("heat_sensor_hint")}</p>`:w}
        ${e.type==="awning"?this.renderAwningFields(e):Ut(e.type)?this.renderMotionFields(e):w}
        ${!a&&!vt.includes(e.type)&&!ji(e.type)?this.renderStateLinks(e):w}
        ${a&&e.entity&&e.entity!=="none"?g`${this.entitySelect(this.t("furn_color_entity"),e.color_entity??null,void 0,this.entityOptions(h=>h.startsWith("light.")&&h!==e.entity),h=>this.updateFurniture({color_entity:h==="none"?null:h}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:w}
        ${a?this.glowScaleField(e.glow_scale,h=>this.updateFurniture({glow_scale:h})):w}
        ${a&&e.entity&&e.entity!=="none"?g`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!e.only_color} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({only_color:h.target.checked?"#ffd400":null})} />
                ${this.t("furn_only_color")}</label
              >
              ${e.only_color?g`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <input type="color" .value=${e.only_color} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({only_color:h.target.value})} /></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`:w}`:w}
        ${a||e.type==="grid_point"?w:this.entitySelect(this.t(e.type==="meter"?"energy_grid":e.type==="inverter"?"energy_solar_sensor":e.type==="home_battery"?"energy_battery_sensor":"furn_power"),e.power??null,i("power"),d,h=>this.updateFurniture({power:h}))}
        ${!a&&e.power&&e.power!=="none"&&!vt.includes(e.type)?g`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
              >${this.t("furn_run_w")}
              <input
                type="number"
                min="1"
                max="5000"
                step="5"
                placeholder="10"
                .value=${e.run_w?String(e.run_w):""}
                ?disabled=${!this.isAdmin}
                @change=${h=>{let u=Number(h.target.value);this.updateFurniture({run_w:u>0?Math.min(5e3,Math.round(u)):null})}}
            /></label>`:w}
        ${ce("energy_pro")&&!a&&!["grid_point","meter","inverter","home_battery"].includes(e.type)?g`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!e.holo} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({holo:h.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:ce("energy_pro")&&e.type==="inverter"?g`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${e.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({plant_card:h.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${e.plant_card!==!1?g`${this.len(this.t("holo_right"),e.plant_right??0,h=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,x(h)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),e.plant_up??0,h=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,x(h)))||void 0}),.25)}`:w}`:w}
      </div>
      ${e.type==="meter"?g`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),e.export??null,void 0,d,h=>this.updateFurniture({export:h==="none"?null:h}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:w}
      ${e.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let h=(this._doc.settings.roof.strings??[]).filter(u=>u.inverter===e.id).map(u=>u.name);return g`<p class="fp3d-sub fp3d-wide">${h.length?this.t("inverter_strings",{names:h.join(", ")}):this.t("inverter_strings_none")}</p>`})():w}
      ${e.type==="home_battery"?g`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),e.soc??null,void 0,this.entityOptions(h=>Te(h)&&(n.states[h]?.attributes.device_class==="battery"||n.states[h]?.attributes.unit_of_measurement==="%")),h=>this.updateFurniture({soc:h==="none"?null:h}))}
            ${this.entitySelect(this.t("furn_charge"),e.charge??null,void 0,d,h=>this.updateFurniture({charge:h==="none"?null:h}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:w}
      ${e.type==="wallbox"?g`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),e.status??null,void 0,this.entityOptions(h=>sr(h)||Te(h)),h=>this.updateFurniture({status:h==="none"?null:h}))}
          </div>`:w}
      ${a?w:this.entitySelect(this.t("furn_extra"),e.extra??null,void 0,this.entityOptions(h=>h.startsWith("sensor.")),h=>this.updateFurniture({extra:h==="none"?null:h}))}
      ${!a||e.entity?g`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({confirm:h.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(e.marker??null,h=>this.updateFurniture({marker:h}))}${this.iconInput(e.icon,h=>this.updateFurniture({icon:h}))}</div>`:w}
      ${bt(e.type)?g`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),e.room_sensor??null,nl(n,vn(n,this._doc.floors).get(e.id)?.entity??null,null),this.entityOptions(h=>Te(h)),h=>this.updateFurniture({room_sensor:h}))}
          </div>`:w}
      ${e.type==="fridge_smart"?g`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),e.door_left??null,void 0,c,h=>this.updateFurniture({door_left:h}))}
              ${this.entitySelect(this.t("furn_door_right"),e.door_right??null,void 0,c,h=>this.updateFurniture({door_right:h}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:w}
      ${ji(e.type)?this.renderPictureRules(e):w}
      <p class="fp3d-sub">${this.t(a?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":o?"furn_links_hint_tv":bt(e.type)?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(e){let t=this.isAdmin,n=this.hass?.language??"en",i=ec(this.packs??[]).map(({type:v,item:b,pack:$,generated:k})=>({id:v,label:k?We(b,n):`${We(b,n)} \xB7 ${He($,n)}`,pack:$,generated:k})),o=v=>v.startsWith("device_tracker.")?this.hass?.states[v]?.attributes.source_type==="router"?2:0:1,s=this.entityOptions(v=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(v)).sort((v,b)=>o(v.id)-o(b.id)),a=this.entityOptions(v=>/^(sensor|input_select|select|input_text)\./.test(v)),l=e.type_entity?this.hass?.states[e.type_entity]:void 0,d=Array.isArray(l?.attributes.options)?l.attributes.options:[],c=e.types??[],h=v=>this.updateFurniture({types:v}),u=(v,b)=>g`<select ?disabled=${!t} @change=${$=>b($.target.value||null)}>
        <option value="" ?selected=${!v}>${this.t("parking_vehicle_none")}</option>
        ${i.filter($=>!$.generated).map($=>g`<option value=${$.id} ?selected=${$.id===v}>${$.label}</option>`)}
        ${i.some($=>$.generated)?g`<optgroup label=${He(i.find($=>$.generated).pack,n)}>
              ${i.filter($=>$.generated).map($=>g`<option value=${$.id} ?selected=${$.id===v}>${$.label}</option>`)}
            </optgroup>`:w}
      </select>`,p=this.floor,f=p?.rooms.find(v=>v.points.length>=3&&Z([e.x,e.z],v.points)),m=e.vehicle?be(e.vehicle):void 0,_=m?m.size[2]*(e.scale??1):0,y=!!f&&!!p&&_>p.height+1e-6;return g`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),e.entity??null,void 0,s,v=>this.updateFurniture({entity:v==="none"?null:v}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${u(e.vehicle??null,v=>this.updateFurniture({vehicle:v}))}</label>
        ${i.length?w:g`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((e.scale??1)*100),v=>this.updateFurniture({scale:Math.min(150,Math.max(30,v))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),e.type_entity??null,void 0,a,v=>this.updateFurniture({type_entity:v==="none"?null:v}))}
        ${e.type_entity?g`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${c.map((v,b)=>g`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${v.state}
                    ?disabled=${!t}
                    @change=${$=>h(c.map((k,M)=>M===b?{...k,state:$.target.value}:k))}
                  />
                  ${u(v.vehicle,$=>h(c.map((k,M)=>M===b?{...k,vehicle:$??""}:k)))}
                  <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>h(c.filter(($,k)=>k!==b))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${d.map(v=>g`<option value=${v}></option>`)}</datalist>
              ${t?g`<button class="fp3d-btn" @click=${()=>h([...c,{state:d[c.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:w}
            </div>`:w}
      </div>
      ${y?g`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:Ge(this.hass,_,2),room:Ge(this.hass,p.height,2)})}</p>`:w}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(e)}`}renderCarForm(e){if(!ce("auto_pro"))return g`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return w;let t=this.hass,n=e.car??{},i=tl(t,{entity:e.entity,car:{device:n.device}}),o=l=>this.updateFurniture({car:{...n,...l}}),s=this.entityOptions(l=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(l)),a=(l,d,c)=>this.entitySelect(this.t(d),n[l]??null,i[l],c,h=>o({[l]:h==="none"?"none":h}));return g`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),n.device??null,void 0,s,l=>o({device:l==="none"?null:l}))}
        ${a("soc","car_soc",this.entityOptions(l=>Te(l)))}
        ${a("range","car_range",this.entityOptions(l=>Te(l)))}
        ${a("charging","car_charging",this.entityOptions(l=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(l)))}
        ${a("plugged","car_plugged",this.entityOptions(l=>sr(l)))}
        ${a("lock","car_lock",this.entityOptions(l=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(l)))}
        ${a("climate","car_climate",this.entityOptions(l=>/^(climate|switch|binary_sensor|input_boolean)\./.test(l)))}
        ${a("tracker","car_tracker",this.entityOptions(l=>l.startsWith("device_tracker.")))}
      </div>
    </section>`}toggleLibrary(e){let t=new Set(this._libOpen);t.has(e)?t.delete(e):t.add(e),this._libOpen=t;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...t]))}catch{}}librarySection(e,t,n,i){let o=Dn(i).split(/\s+/).filter(Boolean),s=o.length?n.filter(l=>{let d=Dn(`${l.label} ${l.search??""} ${l.type.replace(/[_:.]/g," ")} ${t}`);return o.every(c=>d.includes(c))}):n;if(i&&!s.length)return w;let a=i?!0:this._libOpen.has(e);return g`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${a} @click=${()=>this.toggleLibrary(e)}>
        <span class="fp3d-lib-caret">${a?"\u25BE":"\u25B8"}</span>${t} <span class="fp3d-lib-count">${s.length}</span>
      </button>
      ${a?g`<div class="fp3d-library">${s.map(l=>this.libraryButton(l.type,l.label))}</div>`:w}`}libraryHasHits(e){let t=Dn(e).split(/\s+/).filter(Boolean),n=this.hass?.language??"en",i=In(this.packs??[]);return[...Object.entries(Ii).flatMap(([s,a])=>a.map(l=>`${this.t(`furn_${l}`)} ${qe(ko,`furn_${l}`)} ${l.replace(/_/g," ")} ${this.t(`furn_group_${s}`)}`)),...i.map(({pack:s,item:a})=>`${We(a,n)} ${Object.values(a.name).join(" ")} ${a.id.replace(/_/g," ")} ${s.name} ${He(s,"en")}`)].some(s=>{let a=Dn(s);return t.every(l=>a.includes(l))})}storedPictures(){let e=[];for(let t of this._doc.floors)for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!e.includes(i.image)&&e.push(i.image);return e}renderPictureRules(e){let t=this.isAdmin,n=e.pictures??[];if(!ce("screens"))return g`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} · <a href=${Xt(this.hass?.language)} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=y=>this.updateFurniture({pictures:y}),o=this.entityOptions(()=>!0),s=y=>["string","number","boolean"].includes(typeof y),a=y=>Object.entries(this.hass?.states[y]?.attributes??{}).filter(([v,b])=>s(b)&&v!=="friendly_name"&&v!=="icon").map(([v])=>v),l=(y,v)=>{let b=this.hass?.states[y];return b?String((v?b.attributes[v]:b.state)??""):""},d=(y,v)=>{let b=this.hass?.states[y],$=!v&&Array.isArray(b?.attributes.options)?b.attributes.options:[];return $.length?$:[l(y,v)]},c=y=>`${y.entity}\0${y.attribute??""}`,h=[];n.forEach((y,v)=>{let b=h.find($=>c($)===c(y));b?b.rows.push(v):h.push({entity:y.entity,attribute:y.attribute??null,rows:[v]})});let u=(y,v)=>i(n.map((b,$)=>y.rows.includes($)?{...b,...v}:b)),p=(y,v)=>i(n.map((b,$)=>$===y?{...b,...v}:b)),f=this.storedPictures(),m=this.entityOptions(y=>y.startsWith("camera.")),_=y=>y.image.startsWith("camera:")?y.image.slice(7):null;return g`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?g`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!t} @change=${y=>this.updateFurniture({screen_bg:y.target.value})}>
              <option value="black" ?selected=${(e.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${e.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:w}
      ${h.map(y=>g`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${o}
            .value=${y.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!t}
            @change=${v=>{v.stopPropagation(),u(y,{entity:v.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!t}
            title=${this.t("picture_attribute")}
            @change=${v=>{let b=v.target.value||null,$=l(y.entity,b);i(n.map((k,M)=>y.rows.includes(M)?{...k,attribute:b,state:y.rows[0]===M?$:k.state}:k))}}
          >
            <option value="" ?selected=${!y.attribute}>${this.t("picture_state_of")}</option>
            ${a(y.entity).map(v=>g`<option value=${v} ?selected=${v===y.attribute}>${v}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(y.entity,y.attribute)||"\u2013"})}</span>
          ${y.rows.map(v=>{let b=n[v],$=!!this.hass&&el(this.hass,b);return g`<div class="fp3d-picture-row ${$?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${v}"
                placeholder=${this.t("picture_state")}
                .value=${b.state}
                ?disabled=${!t}
                @change=${k=>p(v,{state:k.target.value})}
              />
              <datalist id="fp3d-picture-states-${v}"><option value="*"></option>${d(y.entity,y.attribute).map(k=>g`<option value=${k}></option>`)}</datalist>
              ${this._images[b.image]?g`<img class="fp3d-picture-thumb" src=${this._images[b.image].url} alt="" /> `:w}
              ${_(b)&&this.hass?.states[_(b)]?.attributes.entity_picture?g`<img class="fp3d-picture-thumb" src=${String(this.hass.states[_(b)].attributes.entity_picture)} alt="" />`:w}
              <label class="fp3d-btn fp3d-picture-pick">
                ${b.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!t} @change=${k=>{this.uploadPicture(k,e,v)}} />
              </label>
              ${f.filter(k=>k!==b.image).length?g`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(k=>k!==b.image&&this._images[k]).map(k=>g`<button class="fp3d-picture-reuse-btn" ?disabled=${!t} @click=${()=>p(v,{image:k})}><img src=${this._images[k].url} alt="" /></button>`)}
                  </div>`:w}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(b.image)?b.image:""}
                ?disabled=${!t}
                @change=${k=>{let M=k.target.value.trim();M&&p(v,{image:M})}}
              />
              ${m.length?g`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${m}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${_(b)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!t}
                    @change=${k=>{k.stopPropagation(),k.detail.value!=="none"?p(v,{image:`camera:${k.detail.value}`}):_(b)&&p(v,{image:""})}}
                  ></fp3d-entity-picker>`:w}
              <span class="fp3d-sub">${$?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>i(n.filter((k,M)=>M!==v))}>✕</button>
            </div>`})}
          ${t?g`<button class="fp3d-btn" @click=${()=>i([...n,{entity:y.entity,attribute:y.attribute,state:l(y.entity,y.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:w}
        </div>`)}
      ${t?g`<button class="fp3d-btn" @click=${()=>i([...n,{entity:o[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:w}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(e,t,n){let i=e.target,o=i.files?.[0];if(i.value="",!o)return;let s=await createImageBitmap(o),a=Math.min(1,512/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.round(s.width*a),l.height=Math.round(s.height*a),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let d=l.toDataURL(o.type==="image/png"?"image/png":"image/jpeg",.85),c=G("pic");await xi(this.hass,c,d),this._images={...this._images,[c]:{url:d,aspect:l.height/l.width}};let h=this.furnitureItem?.id===t.id?this.furnitureItem.pictures??[]:t.pictures??[];this.updateFurniture({pictures:h.map((u,p)=>p===n?{...u,image:c}:u)})}renderFurnitureLibrary(){let e=this.room,t=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en",i=In(this.packs??[]).filter(o=>o.generated);return g`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${e?this.t("furniture_into",{room:e.name}):this.t("furniture_pick_room")}</p>
      <input
        class="fp3d-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${o=>this._furnQuery=o.target.value}
        @keydown=${o=>{o.key==="Escape"&&(this._furnQuery="")}}
      />
      ${t&&!this.libraryHasHits(t)?g`<p class="fp3d-sub">${this.t("furniture_search_none")}</p>`:w}
      ${Object.entries(Ii).map(([o,s])=>this.librarySection(`group:${o}`,this.t(`furn_group_${o}`),[...s,...o==="kitchen"&&(ce("fridge_smart")||ce("household"))?["fridge_smart"]:[]].map(a=>({type:a,label:this.t(`furn_${a}`),search:qe(ko,`furn_${a}`)})),t))}
      ${(this.packs??[]).filter(o=>o.items.length).map(o=>this.librarySection(`pack:${o.id}`,He(o,n),o.items.map(s=>({type:jt(o.id,s.id),label:We(s,n),search:Object.values(s.name).join(" ")})),t))}
      ${i.length?this.librarySection(`pack:${i[0].pack.id}`,He(i[0].pack,n),i.map(({type:o,item:s})=>({type:o,label:We(s,n),search:Object.values(s.name).join(" ")})),t):w}
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(e,t){let n=o=>{this.showPreview(e,o.currentTarget)},i=Be(e)?"light":fn(e)||Uo.has(e)||Zo.has(e)?"switch":null;return g`<button
      class="fp3d-btn ${i?"fp3d-lib-electric":""}"
      title=${i?this.t(i==="light"?"lib_badge_light":"lib_badge_electric"):t}
      @click=${()=>this.addFurniture(e)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${t}
      ${i?g`<svg class="fp3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${zn(i)} />
          </svg>`:w}
    </button>`}async showPreview(e,t){let n=t.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:e,url:null,...i};try{let o=await bo(),[s,a,l]=Ve(e),d=o.furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:Oi[e]??null},180,this.packs??[]);this._preview?.type===e&&(this._preview={type:e,url:d,...i})}catch{this._preview=null}}renderPreview(){let e=this._preview;return e?g`<div class="fp3d-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
      ${e.url?g`<img src=${e.url} alt="" />`:g`<span class="fp3d-preview-wait"></span>`}
      <b>${Ot(this.hass,e.type)}</b>
    </div>`:w}renderDeviceForm(e){let t=this.isAdmin,n=se(e.entity_id),i=n==="light",o=e.mount??"ceiling",s=n?Ci(n,this.floor?.height??2.5,i?o:null):1;return g`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",e.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?zn(n):""} />
        </svg>
        ${ye(this.hass,e.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?g`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>g`<option value=${a} ?selected=${a===o}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(e.glow_scale,a=>this.updateDevice({glow_scale:a}))}`:n==="camera"?g`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                  <option value="wall" ?selected=${(e.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${e.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:w}
        ${this.len(this.t("x"),e.x,a=>this.updateDevice({x:a}))} ${this.len(this.t("z"),e.z,a=>this.updateDevice({z:a}))}
        ${this.len(this.t("marker_height"),e.y??s,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
        ${this.num(this.t("rotation"),e.rotation??0,a=>this.updateDevice({rotation:(a%360+360)%360}),1)}
        ${n==="camera"?g`${this.num(this.t("camera_fov"),e.fov??(e.mount==="ceiling"?360:90),a=>this.updateDevice({fov:Math.min(360,Math.max(10,a))}),5,10)}
            ${this.len(this.t("camera_reach"),e.reach??(e.mount==="ceiling"?3:4.5),a=>this.updateDevice({reach:Math.min(50,Math.max(.5,a))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),e.tilt??(e.mount==="ceiling"?65:20),a=>this.updateDevice({tilt:Math.min(90,Math.max(0,a))}),5,0)}
            <label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${e.cone!==!1} ?disabled=${!t} @change=${a=>this.updateDevice({cone:a.target.checked?null:!1})} />
              ${this.t("camera_cone")}</label
            >
            <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_pins_hint")}
              ><input type="checkbox" .checked=${e.detect_pins!==!1} ?disabled=${!t} @change=${a=>this.updateDevice({detect_pins:a.target.checked?null:!1})} />
              ${this.t("camera_detect_pins")}</label
            >
            <p class="fp3d-sub fp3d-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(e.entity_id)}`:w}
        ${n&&Na.has(n)?g`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${a=>this.updateDevice({confirm:a.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:w}
        ${ce("energy_pro")&&Nd(this.hass,e.entity_id)?g`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!e.holo} ?disabled=${!t} @change=${a=>this.updateDevice({holo:a.target.checked||void 0})} />
              ${this.t("furn_holo")}</label
            >`:w}
        ${this.markerSelect(e.marker??null,a=>this.updateDevice({marker:a}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${e.name??""} ?disabled=${!t} maxlength="60" placeholder=${ye(this.hass,e.entity_id)} @change=${a=>this.updateDevice({name:a.target.value.trim()||null})}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(e.aliases??[]).join(", ")} ?disabled=${!t} placeholder=${this.t("aliases_placeholder")} @change=${a=>this.updateDevice({aliases:Ri(a.target.value)})}
        /></label>
        ${e.name?g`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${a=>this.updateDevice({show_name:a.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:w}
        ${this.iconInput(e.icon,a=>this.updateDevice({icon:a}))}
      </div>
      ${t?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${e.y!==null?g`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:w}
            ${this.renderAsFurniture(e)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(e.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:w}
    </section>`}renderDeviceList(e){let t=this.isAdmin,n=this.hass,i=e.area_id?n?.areas?.[e.area_id]?.name:void 0,o=n?Pt(n,e.area_id).filter(k=>bn(se(k))):[],s=new Set([...this.floor?.placements.filter(k=>Z([k.x,k.z],e.points)).map(k=>k.entity_id)??[],...this.floor?.furniture.filter(k=>Be(k.type)&&k.entity&&Z([k.x,k.z],e.points)).map(k=>k.entity)??[]]),a=n?Ni(n,o):[],l=a.map(k=>k.primary).filter(k=>!s.has(k)),d=this._deviceQuery.trim().toLowerCase(),c=k=>!d||ye(n,k,i).toLowerCase().includes(d)||k.includes(d),h=this.floor?.placements.filter(k=>se(k.entity_id)==="light"&&(k.mount??"ceiling")==="ceiling"&&Z([k.x,k.z],e.points)).length,u=new Set(e.panel??[]),p=new Set(e.hidden??[]),f=new Set(e.no_state??[]),m=new Map;for(let k of this._doc.floors)for(let M of[...k.placements.map(S=>[S.entity_id,S.x,S.z]),...k.furniture.filter(S=>Be(S.type)&&S.entity).map(S=>[S.entity,S.x,S.z])]){let S=k.rooms.find(A=>Z([M[1],M[2]],A.points));S&&S.id!==e.id&&m.set(M[0],S.name)}let _=(k,M=!1,S=i,A=!1)=>{let W=s.has(k),E=W?void 0:m.get(k);return g`<div class="fp3d-row fp3d-dev-row ${M||A?"fp3d-dev-extra":""} ${p.has(k)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${W?"":"fp3d-muted"}" ?disabled=${!W} @click=${()=>this.selectItem("device",k)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${zn(se(k))} />
          </svg>
          <span>${ye(n,k,S)}${E?g`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:E})}</small>`:w}</span>
        </button>
        ${t&&!M?g`<button
              class="fp3d-pin ${p.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${p.has(k)}
              title=${this.t(p.has(k)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:p.has(k)?[...p].filter(D=>D!==k):[...p,k]})}
            >
              ${p.has(k)?"\u{1F648}":"\u{1F441}"}
            </button>`:w}
        ${t&&!M&&!p.has(k)?g`<button
              class="fp3d-pin ${f.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(k)}
              title=${this.t(f.has(k)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:f.has(k)?[...f].filter(D=>D!==k):[...f,k]})}
            >
              ${f.has(k)?"\u2205":"Aa"}
            </button>`:w}
        ${t&&!W?g`<button
              class="fp3d-pin ${u.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${u.has(k)}
              title=${this.t(u.has(k)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:u.has(k)?[...u].filter(D=>D!==k):[...u,k]})}
            >
              ${u.has(k)?"\u2605":"\u2606"}
            </button>`:w}
        ${t?W?g`<button class="fp3d-link" @click=${()=>this.removeDevice(k)}>${this.t("devices_remove")}</button>`:g`<button class="fp3d-link" @click=${()=>this.placeDevices([k])}>${this.t("devices_place")}</button>`:w}
      </div>`},y=t?this._devSource:"area",v=k=>{this._devSource=k,this._deviceQuery=""},b=g`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${k=>this._deviceQuery=k.target.value}
    />`,$=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return g`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${t?g`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${y==="area"} @click=${()=>v("area")}>${this.t("devices_src_area")}${o.length?` (${a.length})`:""}</button>
            <button aria-pressed=${y==="other"} @click=${()=>v("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${y==="none"} @click=${()=>v("none")}>${this.t("devices_src_none")}</button>
          </div>`:w}
      ${y!=="area"?g`${b}${this.renderDeviceExtras(e,_,y)}`:e.area_id?o.length?g`${t&&(h??0)>=2?g`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(e)}>${this.t("lights_spread")}</button>`:w}
              ${o.length>8?b:w}
              <div class="fp3d-room-list">
                ${a.map(k=>{let M=k.others.filter(c),S=this._expanded.has(k.primary)||!!d&&M.length>0;return!c(k.primary)&&!M.length?w:g`${_(k.primary)}
                  ${k.others.length?g`<button
                        class="fp3d-more"
                        @click=${()=>{let A=new Set(this._expanded);A.has(k.primary)?A.delete(k.primary):A.add(k.primary),this._expanded=A}}
                      >
                        ${S?this.t("devices_less"):this.t("devices_more",{n:k.others.length})}
                      </button>`:w}
                  ${S?(d?M:k.others).map(A=>_(A,!1,i,!0)):w}`})}
              </div>
              ${t&&l.length>1?g`<button class="fp3d-link fp3d-place-all" @click=${$}>${this.t("devices_place_all_n",{n:l.length})}</button>`:w}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:g`<p class="fp3d-sub">${this.t("devices_none")}</p>`:g`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(e,t,n){let i=this.hass;if(!i)return w;let o=50,s=this._deviceQuery.trim().toLowerCase(),a=(c,h)=>!s||`${ye(i,c,h)} ${c} ${h??""}`.toLowerCase().includes(s),l=c=>c>0?g`<p class="fp3d-sub">${this.t("devices_narrow",{n:c})}</p>`:w;if(n==="other"){let c=0,h=0,u=ja(i,e.area_id).map(p=>{let f=p.ids.filter(_=>a(_,p.name)),m=f.slice(0,Math.max(0,o-c));return c+=m.length,h+=f.length-m.length,m.length?g`<div class="fp3d-dev-area">${p.name}</div>${m.map(_=>t(_,!1,p.name))}`:w});return c?g`<div class="fp3d-room-list">${u}</div>${l(h)}`:g`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let d=Ga(i).filter(c=>a(c));return d.length?g`<div class="fp3d-room-list">${d.slice(0,o).map(c=>t(c))}</div>${l(d.length-Math.min(d.length,o))}`:g`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(e){let t=this.hass;if(!t)return w;let n=(s,a)=>{let l={...e.climate??{},[s]:a},d=Object.values(l).every(c=>c==null);this.updateRoom({climate:d?null:l})},i=!!e.climate&&Object.values(e.climate).some(s=>s!=null),o=(s,a)=>{let l=es[s],d=ns(t,this.floor??null,{...e,climate:null},s),c=Bi[s],h=this.entityOptions(u=>Te(u)&&t.states[u]?.attributes.device_class===l||!!c&&u.startsWith("climate.")&&typeof t.states[u]?.attributes[c]=="number").map(u=>({...u,rank:(qt(t,u.id)===e.area_id?0:1)+(ts(t,u.id)?0:2)})).sort((u,p)=>u.rank-p.rank).map(({id:u,label:p})=>({id:u,label:p}));return this.entitySelect(a,e.climate?.[s]??null,d[0]??null,h,u=>n(s,u))};return g`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${o("temperature",this.t("climate_temperature"))} ${o("humidity",this.t("climate_humidity"))} ${o("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(e){let t=e.background;return g`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${n=>this._bgOpen=n.target.open}>
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${t?g`${this.len(this.t("x"),t.x,n=>this.updateFloor({background:{...t,x:n}}))}
              ${this.len(this.t("z"),t.z,n=>this.updateFloor({background:{...t,z:n}}))}
              ${this.len(this.t("background_width"),t.width,n=>this.updateFloor({background:{...t,width:Math.max(.1,n)}}),.01,.1)}
              ${this.num(this.t("background_rotation"),t.rotation??0,n=>this.updateFloor({background:{...t,rotation:Math.round(n*10)/10}}),.5)}
              ${this.isAdmin?g`<button
                      class="fp3d-btn fp3d-wide ${this._bgEdit?"fp3d-primary":""}"
                      aria-pressed=${this._bgEdit}
                      @click=${()=>{this._bgEdit=!this._bgEdit,this._bgEdit&&(this._tool="select")}}
                    >
                      ${this.t(this._bgEdit?"background_edit_done":"background_edit")}
                    </button>
                    <p class="fp3d-sub fp3d-wide">${this.t(this._bgEdit?"background_handles_hint":"background_fixed_hint")}</p>
                  <button class="fp3d-btn fp3d-wide ${this._bgLevel?"fp3d-primary":""}" aria-pressed=${!!this._bgLevel} @click=${()=>{this._bgLevel=this._bgLevel?null:[],this._bgRuler=null,this._bgEdit=!1}}>📐 ${this.t(this._bgLevel?"bg_level_cancel":"bg_level")}</button>
                  ${this._bgLevel?g`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:w}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?g`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:g`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${Xn(this.t("bg_ruler_length"),this.unit)}
                            <input type=${this.unit==="imperial"?"text":"number"} min="0.01" step="0.01" .value=${this._bgRulerLen?this.lenValue(this._bgRulerLen):""} @input=${n=>this._bgRulerLen=this.readLen(n.target.value)??0} @keydown=${n=>n.key==="Enter"&&this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="fp3d-btn fp3d-primary" ?disabled=${!(this._bgRulerLen>0)} @click=${()=>this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`:w}`:w}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(t.opacity)}
                  @change=${n=>this.updateFloor({background:{...t,opacity:parseFloat(n.target.value)}})}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:w}
      </div>
    </details>`}async loadDiagnostics(){if(this.hass)try{this._diag=await Lr(this.hass)}catch{this._diag="error"}}async changeDiagnostics(e){if(!(!this.hass||this._diagBusy)&&!(e==="delete"&&!confirm(this.t("diag_delete_confirm")))){this._diagBusy=!0,this._diagNote="";try{this._diag=e==="delete"?await Vr(this.hass):await Or(this.hass,e==="on"),e==="delete"&&(this._diagNote=this.t("diag_deleted")),window.dispatchEvent(new CustomEvent("neonplan3d-diagnostics",{detail:{enabled:this._diag.enabled}}))}catch{this._diagNote=this.t(e==="delete"?"diag_delete_failed":"save_error")}this._diagBusy=!1}}renderDiagnostics(){let e=this._diag,t=e!==null&&e!=="error"&&e.enabled;return g`<details
      class="fp3d-section"
      @toggle=${n=>{n.target.open&&this.loadDiagnostics()}}
    >
      <summary>${this.t("diag_title")}</summary>
      <p class="fp3d-sub">${this.t("diag_intro")}</p>
      <p class="fp3d-sub"><b>${this.t("diag_sent_head")}</b> ${this.t("diag_sent")}</p>
      <p class="fp3d-sub"><b>${this.t("diag_never_head")}</b> ${this.t("diag_never")}</p>
      <p class="fp3d-sub">
        ${this.t("diag_voluntary")}
        <a href="https://mastershort.de/datenschutz/" target="_blank" rel="noopener noreferrer">${this.t("diag_privacy")}</a>
      </p>
      ${e===null?g`<p class="fp3d-sub">${this.t("loading")}</p>`:e==="error"?g`<p class="fp3d-sub">${this.t("diag_unavailable")}</p>`:g`<label class="fp3d-check fp3d-wide"
                ><input type="checkbox" .checked=${t} ?disabled=${this._diagBusy} @change=${n=>{this.changeDiagnostics(n.target.checked?"on":"off")}} />
                ${this.t("diag_switch")}</label
              >
              <div class="fp3d-actions">
                <button class="fp3d-btn" @click=${()=>this._diagView=!0}>${this.t("diag_view")}</button>
                <button class="fp3d-btn" ?disabled=${this._diagBusy||!t&&!e.can_delete} @click=${()=>{this.changeDiagnostics("delete")}}>${this.t("diag_delete")}</button>
              </div>`}
      ${this._diagNote?g`<p class="fp3d-sub">${this._diagNote}</p>`:w}
    </details>`}renderDiagnosticsView(){let e=this._diag;if(!this._diagView||!e||e==="error")return w;let t=e.enabled;return g`<div class="fp3d-wv-veil" @click=${n=>n.target===n.currentTarget&&(this._diagView=!1)}>
      <div class="fp3d-wv fp3d-diag" role="dialog" aria-label=${this.t("diag_view")}>
        <h4 class="fp3d-lib-head">${this.t("diag_view_head")}</h4>
        <pre class="fp3d-diag-json">${JSON.stringify(e.preview,null,2)}</pre>
        <p class="fp3d-sub">${this.t(t?"diag_view_hint_on":"diag_view_hint_off")}</p>
        <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this._diagView=!1}>${this.t("close")}</button></div>
      </div>
    </div>`}async loadHistory(){if(this.hass)try{this._history=await Fr(this.hass)}catch{this._history=[]}}async restoreFromHistory(e){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(e)}))||(await Rr(this.hass,e.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let e=await Wr(this.hass),t={};for(let i of Wa(e.building))try{t[i]=await Do(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);Xo(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...e,exported_at:new Date().toISOString(),images:t}))}catch(e){alert(this.t("backup_import_error",{error:String(e?.message??e)}))}finally{this._backupBusy=!1}}}async importBackup(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if(i?.format!=="neonplan3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let o=await Hr(this.hass,i.building,i.packs??[]),s=0;for(let[l,d]of Object.entries(i.images??{}))try{await xi(this.hass,l,d),s++}catch{}this.setDoc(Li(o.building)),this._floorId=o.building.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let a=o.skipped.length?` ${this.t("backup_full_skipped",{packs:o.skipped.map(l=>l.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:o.packs,pictures:s})+a}catch(o){let{code:s,message:a}=o??{};alert(this.t("backup_import_error",{error:a??s??String(o)}))}finally{this._backupBusy=!1}}}exportPlan(e){let t=new Date().toISOString().slice(0,10);Xo(`neonplan3d-${this.t(e?"export_name_template":"export_name_backup")}-${t}.json`,JSON.stringify(Ta(this._doc,e),null,2))}async importPlan(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=Da(await n.text())}catch(o){let s=o.message;alert(s==="not_json"?this.t("import_error_not_json"):s==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:s}));return}confirm(this.t("backup_import_confirm"))&&(await Ir(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(e){return new Date(e.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return g`<details
      class="fp3d-section"
      @toggle=${e=>{e.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?g`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?g`<div class="fp3d-room-list">
              ${this._history.map(e=>g`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(e)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:e.rooms,furniture:e.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(e)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:g`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.exportPlan(!1)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${()=>this.exportPlan(!0)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
      <p class="fp3d-sub">
        ${this.t("backup_other_hint")}
        <a href=${`https://neonplan3d.mastershort.de/import/?lang=${(this.hass?.language??"en").startsWith("de")?"de":"en"}`} target="_blank" rel="noopener">${this.t("backup_other")}</a>
      </p>
      <h4 class="fp3d-lib-head">${this.t("backup_full")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${this._backupBusy} @click=${()=>this.exportBackup()}>${this._backupBusy?"\u2026":this.t("backup_full_export")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_full_import")}<input type="file" accept="application/json,.json" @change=${this.importBackup}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_full_hint")}</p>
    </details>`}renderBackdrop(){let e=this._doc.settings.backdrop??{},t=o=>this.change(s=>s.settings.backdrop={...s.settings.backdrop??{},...o}),n=e.kind??"",i=(o,s,a,l)=>g`<label class="fp3d-field"
        >${this.t(o)}
        <input type="color" .value=${s??a} @change=${d=>t({[l]:d.target.value})} />
      </label>`;return g`<details class="fp3d-section">
      <summary>🖼 ${this.t("backdrop")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("backdrop_kind")}
          <select @change=${o=>t({kind:o.target.value||null})}>
            ${["","color","gradient","image"].map(o=>g`<option value=${o} ?selected=${n===o}>${this.t(`backdrop_${o||"look"}`)}</option>`)}
          </select></label
        >
        ${n==="color"||n==="gradient"?i(n==="gradient"?"backdrop_top":"backdrop_color",e.color,"#0b1426","color"):w}
        ${n==="gradient"?i("backdrop_bottom",e.color2,"#03060c","color2"):w}
        ${n==="image"?g`<label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_image_url")}
                <input type="text" placeholder="/local/hintergrund.jpg" .value=${e.image??""} @change=${o=>t({image:o.target.value.trim()||null})}
              /></label>
              <label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_dim")} (${Math.round((e.dim??.45)*100)} %)
                <input type="range" min="0" max="90" .value=${String(Math.round((e.dim??.45)*100))} @change=${o=>t({dim:Number(o.target.value)/100})}
              /></label>
              ${e.image&&!Xl(e.image)?g`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.t("backdrop_image_bad")}</p>`:w}`:w}
      </div>
      <p class="fp3d-sub">${this.t("backdrop_hint")}</p>
    </details>`}renderTerrain(){let e=this._doc.settings.terrain??{},t=i=>{let o=structuredClone(this._doc);o.settings.terrain={...o.settings.terrain??{},...i},this.setDoc(o)},n=this._doc.floors.some(i=>i.elevation<-.3);return g`<details class="fp3d-section">
      <summary>⛰ ${this.t("terrain")}</summary>
      <p class="fp3d-sub">${this.t("terrain_hint")}</p>
      <div class="fp3d-form">
        ${this.len(this.t("terrain_level"),e.level??-.2,i=>t({level:Math.max(-20,Math.min(20,i))}),.05)}
        <label class="fp3d-check fp3d-wide" title=${this.t("terrain_earth_hint")}
          ><input type="checkbox" .checked=${e.earth!==!1} @change=${i=>t({earth:i.target.checked})} />
          ${this.t("terrain_earth")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t(n?"terrain_cellar_hint":"terrain_no_cellar_hint")}</p>
      ${e.level!=null?g`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>t({level:null})}>${this.t("terrain_reset")}</button></div>`:w}
    </details>`}setSettings(e){let t=structuredClone(this._doc);Object.assign(t.settings,e),this.setDoc(t)}renderHouseSettings(){let e=this._doc.settings,t=n=>this.setSettings(n);return g`<details class="fp3d-section">
      <summary>${this.t("settings_house")}</summary>
      <div class="fp3d-form">
        ${this.len(this.t("wall_exterior"),e.wall_exterior,n=>t({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("wall_interior"),e.wall_interior,n=>t({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("grid"),e.grid,n=>t({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        <label class="fp3d-field" title=${this.t("units_hint")}
          >${this.t("units")}
          <select @change=${n=>{let i=n.target.value;t({units:i==="metric"||i==="imperial"?i:null})}}>
            <option value="auto" ?selected=${!e.units}>${this.t("units_auto",{unit:this.t(ps(this.hass,null)==="imperial"?"units_imperial":"units_metric")})}</option>
            <option value="metric" ?selected=${e.units==="metric"}>${this.t("units_metric")}</option>
            <option value="imperial" ?selected=${e.units==="imperial"}>${this.t("units_imperial")}</option>
          </select></label
        >
        ${this.num(this.t("north"),e.north,n=>t({north:(Math.round(n)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide" title=${this.t("editor_floor_hint")}
          >${this.t("editor_floor")}
          <select @change=${n=>t({editor_floor:n.target.value||null})}>
            <option value="" ?selected=${!e.editor_floor}>${this.t("editor_floor_auto")}</option>
            ${this._doc.floors.map(n=>g`<option value=${n.id} ?selected=${e.editor_floor===n.id}>${n.name}</option>`)}
          </select></label
        >
        ${this.entitySelect(this.t("hh_notes"),e.household?.notes??null,void 0,this.entityOptions(n=>/^(input_text|text|sensor)\./.test(n)),n=>this.setHousehold({notes:n==="none"?null:n}))}
        <p class="fp3d-sub fp3d-wide">${this.t("hh_notes_hint")}</p>
      </div>
      <p class="fp3d-sub">${this.t("north_hint")}</p>
    </details>`}renderRoofBasics(){let e=this._doc.settings,t=n=>this.setSettings(n);return g`<section>
      <h3>${this.t("roof_basics")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select
            @change=${n=>{let i=n.target.value;i==="custom"?(this.useRoofSections(),this._tool="roof"):t({roof:{...e.roof,type:i}})}}
          >
            ${["none","flat","gable","custom"].map(n=>g`<option value=${n} ?selected=${n===e.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${e.roof.type==="gable"?g`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>t({roof:{...e.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${e.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${e.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:w}
        ${e.roof.type==="gable"?this.num(this.t("roof_pitch"),e.roof.pitch,n=>t({roof:{...e.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):w}
        ${e.roof.type!=="none"?this.len(this.t("roof_overhang"),e.roof.overhang,n=>t({roof:{...e.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):w}
      </div>
    </section>`}renderWeatherSettings(){let e=this._doc.settings,t=n=>this.setSettings(n);return g`<details class="fp3d-section">
      <summary>${this.t("settings_weather")}</summary>
      <div class="fp3d-form">
        ${this.hass?this.entitySelect(this.t("weather_entity"),e.weather_entity??null,Rl(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>t({weather_entity:n})):w}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${da.map(n=>{let i=e.weather_effects??Lo;return g`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${i.includes(n)}
              @change=${o=>{let s=o.target.checked;t({weather_effects:s?[...new Set([...i,n])]:i.filter(a=>a!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.rain_warning!==!1} @change=${n=>t({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
        ${this.hass?g`${this.entitySelect(this.t("rain_entity"),e.rain_entity??null,void 0,this.entityOptions(n=>Tl(this.hass,n)),n=>t({rain_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("rain_entity_hint")}</p>`:w}
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_names_hint")}
          ><input type="checkbox" .checked=${e.alert_names!==!1} @change=${n=>t({alert_names:n.target.checked})} />
          ${this.t("alert_names")}</label
        >
        ${this.hass?g`${this.entitySelect(this.t("outage_entity"),e.outage_entity??null,void 0,this.entityOptions(n=>/^(binary_sensor|sensor|input_boolean|switch)\./.test(n)),n=>t({outage_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("outage_entity_hint")}</p>`:w}
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_patches_hint")}
          ><input type="checkbox" .checked=${e.sun_patches!==!1} @change=${n=>t({sun_patches:n.target.checked})} />
          ${this.t("sun_patches")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[Tn,_o,lt`
      :host {
        display: block;
        height: 100%;
      }
      .fp3d-editor {
        position: relative;
        display: grid;
        grid-template-columns: 1fr var(--fp3d-side-w, 320px);
        height: 100%;
        min-height: 0;
      }
      .fp3d-editor:has(> .fp3d-side-strip) {
        grid-template-columns: 1fr 52px;
      }
      .fp3d-side-strip {
        padding: 10px 6px;
        gap: 8px;
        align-items: center;
      }
      .fp3d-strip-btn {
        width: 40px;
        height: 40px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 18px;
        cursor: pointer;
      }
      .fp3d-strip-hot {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-side-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(340px, 60%);
        /* open over the 3D pane: above the toolbar too, so its buttons never sit on the sidebar's */
        z-index: 30;
        box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
      }
      .fp3d-pin-row {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }
      .fp3d-3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-3d-size input {
        width: 58px;
        padding: 4px 6px;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-3d-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-editor.fp3d-narrow {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(360px, 62vh) auto;
        height: auto;
      }
      .fp3d-main {
        /* nothing of the plan column reaches over the sidebar (its menus still hang down) */
        overflow-x: clip;
        display: grid;
        grid-template-rows: auto 1fr;
        /* the column never grows with a wide toolbar (that would push the plan under the sidebar) */
        grid-template-columns: minmax(0, 1fr);
        min-height: 0;
        min-width: 0;
      }
      .fp3d-toolbar {
        position: relative;
        /* its menus open over the plan below */
        z-index: 20;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 10px 12px;
      }
      .fp3d-pick-tip {
        position: absolute;
        z-index: 5;
        transform: translateX(-50%);
        white-space: nowrap;
        padding: 8px 12px;
        border-radius: 10px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
        font-size: 13px;
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.45), 0 0 16px rgba(55, 224, 255, 0.45);
        cursor: pointer;
        animation: fp3d-tip-in 0.18s ease-out;
      }
      .fp3d-pick-tip::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -6px;
        margin-left: -6px;
        border: 6px solid transparent;
        border-top: 0;
        border-bottom-color: var(--fp3d-accent);
      }
      @keyframes fp3d-tip-in {
        from {
          opacity: 0;
          transform: translate(-50%, -4px);
        }
      }
      /* the tool row scrolls sideways when it is wider than the plan (it must never push into the sidebar) */
      .fp3d-toolbar > .fp3d-seg {
        max-width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .fp3d-toolbar > .fp3d-seg::-webkit-scrollbar {
        display: none;
      }
      .fp3d-toolbar > .fp3d-seg > button {
        flex: none;
      }
      .fp3d-warn {
        color: var(--fp3d-warm);
        font-size: 12.5px;
      }
      .fp3d-picture-group {
        display: grid;
        gap: 6px;
        margin: 6px 0 10px;
        padding: 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
      }
      .fp3d-picture-group > select {
        min-width: 0;
      }
      .fp3d-picture-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
        padding: 6px;
        border-radius: 8px;
        background: color-mix(in srgb, var(--fp3d-line) 40%, transparent);
      }
      .fp3d-picture-row input[type="url"] {
        grid-column: 1 / -1;
        min-width: 0;
      }
      .fp3d-picture-row > .fp3d-sub,
      .fp3d-picture-row > .fp3d-picture-camera {
        grid-column: 1 / -1;
      }
      .fp3d-picture-row.fp3d-rule-hit {
        outline: 1px solid var(--fp3d-accent);
      }
      .fp3d-rule-now {
        grid-column: 1 / -1;
      }
      .fp3d-rule-hit {
        color: var(--fp3d-accent);
      }
      .fp3d-picture-reuse {
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-picture-reuse-btn {
        padding: 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        cursor: pointer;
      }
      .fp3d-picture-reuse-btn img {
        display: block;
        height: 28px;
        max-width: 60px;
        object-fit: contain;
      }
      .fp3d-picture-reuse-btn:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-picture-thumb {
        max-height: 60px;
        max-width: 100%;
        border-radius: 6px;
        justify-self: start;
      }
      .fp3d-picture-pick {
        justify-self: start;
      }
      .fp3d-parking-row {
        display: flex;
        gap: 6px;
        align-items: center;
        margin: 4px 0;
      }
      .fp3d-parking-row input,
      .fp3d-parking-row select {
        flex: 1;
        min-width: 0;
      }
      .fp3d-stage-pair {
        display: flex;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-stage-pair > .fp3d-canvas-wrap {
        flex: 1 1 var(--fp3d-split, 55%);
        min-width: 0;
      }
      .fp3d-split > .fp3d-canvas-wrap {
        flex: 0 0 var(--fp3d-split, 55%);
      }
      .fp3d-split-handle {
        flex: 0 0 8px;
        cursor: col-resize;
        background: var(--fp3d-line);
        touch-action: none;
      }
      .fp3d-split-handle:hover {
        background: var(--fp3d-accent);
      }
      .fp3d-editor-3d {
        position: relative;
        overflow: hidden;
        flex: 1 1 0;
        min-width: 240px;
        min-height: 0;
        border-left: 1px solid var(--fp3d-line);
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-editor-3d fp3d-view3d {
        display: block;
        height: 100%;
      }
      .fp3d-3d-walls {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 3;
      }
      .fp3d-3d-bar {
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 6px 8px 6px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger, #ff6b7a);
      }
      .fp3d-narrow .fp3d-stage-pair.fp3d-split {
        flex-direction: column;
      }
      .fp3d-narrow .fp3d-split > .fp3d-canvas-wrap {
        flex: 1 1 auto;
      }
      .fp3d-narrow .fp3d-editor-3d {
        flex: 0 0 42%;
        min-width: 0;
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-canvas-wrap {
        position: relative;
        min-height: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-bg2), var(--fp3d-bg) 75%);
      }
      svg.fp3d-plan {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
      }
      svg.fp3d-tool-rect,
      svg.fp3d-tool-polygon {
        cursor: crosshair;
      }
      .fp3d-grid-minor {
        stroke: rgba(55, 224, 255, 0.05);
        stroke-width: 1;
      }
      .fp3d-grid-major {
        stroke: rgba(91, 124, 255, 0.16);
        stroke-width: 1;
      }
      .fp3d-origin {
        fill: rgba(91, 124, 255, 0.5);
      }
      .fp3d-ghost {
        fill: none;
        stroke: rgba(138, 155, 184, 0.35);
        stroke-dasharray: 4 4;
      }
      .fp3d-wall {
        fill: #1b2a47;
      }
      .fp3d-wall-ext {
        fill: #22345a;
      }
      .fp3d-room {
        fill: rgba(55, 224, 255, 0.05);
        stroke: rgba(55, 224, 255, 0.75);
        stroke-width: 1.5;
        stroke-linejoin: round;
        cursor: pointer;
      }
      .fp3d-room:hover {
        fill: rgba(55, 224, 255, 0.09);
      }
      .fp3d-room-sel {
        fill: rgba(55, 224, 255, 0.14);
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
      }
      .fp3d-room-name {
        fill: var(--fp3d-text);
        font: 600 13px var(--fp3d-title-font);
        text-anchor: middle;
      }
      .fp3d-room-area {
        fill: var(--fp3d-muted);
        font: 500 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-dim {
        fill: var(--fp3d-accent);
        font: 600 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
        paint-order: stroke;
        stroke: var(--fp3d-bg);
        stroke-width: 3px;
      }
      .fp3d-vertex circle:not(.fp3d-hit) {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-vertex-sel circle:not(.fp3d-hit) {
        fill: var(--fp3d-accent);
      }
      .fp3d-vertex,
      .fp3d-mid {
        cursor: grab;
      }
      .fp3d-hit {
        fill: transparent;
      }
      .fp3d-mid circle:not(.fp3d-hit) {
        fill: rgba(91, 124, 255, 0.35);
        stroke: var(--fp3d-soft);
      }
      .fp3d-mid path {
        stroke: var(--fp3d-text);
        stroke-width: 1.5;
      }
      .fp3d-draft {
        fill: rgba(255, 181, 71, 0.08);
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      polyline.fp3d-draft {
        fill: none;
      }
      .fp3d-draft-pt {
        fill: var(--fp3d-warm);
      }
      .fp3d-draft-first {
        fill: transparent;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
      }
      .fp3d-cursor {
        fill: var(--fp3d-warm);
      }
      .fp3d-guide {
        stroke: rgba(255, 95, 210, 0.55);
        stroke-dasharray: 3 5;
      }
      .fp3d-snap {
        fill: none;
        stroke: #ff5fd2;
        stroke-width: 2;
      }
      .fp3d-hint {
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 8px;
        margin: 0;
        font-size: 12px;
        color: var(--fp3d-muted);
        pointer-events: none;
      }
      .fp3d-side-grip {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 8px;
        cursor: col-resize;
        touch-action: none;
        z-index: 2;
      }
      .fp3d-side-grip:hover {
        background: linear-gradient(90deg, rgba(55, 224, 255, 0.35), transparent);
      }
      .fp3d-side {
        position: relative;
        border-left: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        overflow-y: auto;
        padding: 12px 14px 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 0;
      }
      .fp3d-side:not(.fp3d-side-overlay) {
        position: relative;
        z-index: 7;
      }
      .fp3d-narrow .fp3d-side {
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      h3,
      summary {
        margin: 0 0 8px;
        font-size: 11.5px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-muted);
        font-weight: 600;
      }
      summary {
        cursor: pointer;
        margin: 0;
      }
      details[open] > summary {
        margin-bottom: 8px;
      }
      .fp3d-floor-list,
      .fp3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-floor-list .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
      }
      .fp3d-wide {
        grid-column: 1 / -1;
      }
      .fp3d-room-list {
        display: grid;
        gap: 2px;
      }
      .fp3d-row {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: none;
        border-bottom: 1px solid var(--fp3d-line);
        padding: 9px 2px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-row:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-check input {
        accent-color: var(--fp3d-accent);
      }
      .fp3d-meter rect {
        fill: #2a2a10;
        stroke: #ffc633;
        stroke-width: 1.5;
      }
      .fp3d-meter path {
        fill: #ffc633;
      }
      .fp3d-packages {
        display: grid;
        gap: 6px;
        margin-top: 10px;
      }
      .fp3d-packages .fp3d-btn {
        display: grid;
        text-align: left;
        gap: 2px;
      }
      .fp3d-packages .fp3d-btn span {
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-arrows {
        display: grid;
        grid-template-columns: repeat(3, 52px);
        grid-template-areas: ". up ." "left . right" ". down .";
        gap: 6px;
        justify-content: center;
      }
      .fp3d-arrows .fp3d-btn {
        font-size: 20px;
        padding: 6px 0;
      }
      .fp3d-arrow-up {
        grid-area: up;
      }
      .fp3d-arrow-left {
        grid-area: left;
      }
      .fp3d-arrow-right {
        grid-area: right;
      }
      .fp3d-arrow-down {
        grid-area: down;
      }
      .fp3d-measure-list {
        margin: 8px 0;
        padding-left: 22px;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-library {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-library .fp3d-btn {
        font-weight: 500;
        font-size: 13px;
      }
      /* the background picture while it is edited: a dashed frame and a corner handle */
      .fp3d-bg-frame {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-bg-handle {
        fill: var(--fp3d-accent);
        stroke: #041018;
        stroke-width: 2;
        cursor: nwse-resize;
      }
      .fp3d-furn-body {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        cursor: grab;
      }
      .fp3d-furn-sym * {
        fill: none;
        stroke: rgba(150, 175, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
      }
      .fp3d-furn-sym .fp3d-sym-fill {
        fill: rgba(91, 124, 255, 0.28);
      }
      .fp3d-furn-sym .fp3d-sym-strong {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-out polygon {
        fill: rgba(91, 124, 255, 0.06);
        stroke: rgba(91, 124, 255, 0.4);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        cursor: grab;
      }
      .fp3d-out-lawn polygon,
      .fp3d-out-bed polygon,
      .fp3d-out-wild polygon,
      .fp3d-out-hedge polygon {
        fill: rgba(61, 224, 160, 0.1);
        stroke: rgba(61, 224, 160, 0.5);
      }
      .fp3d-out-pool polygon {
        fill: rgba(55, 224, 255, 0.18);
        stroke: var(--fp3d-accent);
      }
      .fp3d-out-terrace polygon {
        fill: rgba(150, 130, 255, 0.12);
      }
      .fp3d-free-wall {
        cursor: grab;
      }
      .fp3d-vertex-no {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 700;
        pointer-events: none;
      }
      /* the opt-in reports: the exact JSON they send */
      .fp3d-wv.fp3d-diag {
        width: min(640px, 100%);
        grid-template-rows: auto minmax(0, 1fr) auto auto;
      }
      .fp3d-diag-json {
        margin: 0;
        overflow: auto;
        padding: 10px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.3);
        font-size: 12px;
        line-height: 1.4;
        white-space: pre;
      }
      /* the wall view: a room's wall from the front, furniture on it to slide along and up */
      .fp3d-wv-veil {
        position: fixed;
        inset: 0;
        z-index: 60;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(3, 6, 12, 0.6);
      }
      .fp3d-wv {
        width: min(1100px, 100%);
        max-height: calc(100vh - 32px);
        display: grid;
        grid-template-rows: auto minmax(0, 1fr) auto;
        gap: 10px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-wv-head,
      .fp3d-wv-foot {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .fp3d-wv-foot .fp3d-field {
        width: 170px;
      }
      .fp3d-wv-grow {
        flex: 1;
      }
      .fp3d-pipe-end circle:not(.fp3d-hit) {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pipe-end {
        cursor: pointer;
      }
      .fp3d-pool-joint {
        fill: #8a929c;
        stroke: var(--fp3d-bg, #0b1220);
        stroke-width: 1.5;
        pointer-events: none;
      }
      .fp3d-wv-node circle {
        fill: rgba(55, 224, 255, 0.12);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-node text {
        fill: var(--fp3d-accent);
        font-size: 0.055px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-wv-hole-mark circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-dasharray: none;
        stroke-width: 0.02;
      }
      .fp3d-wv-hole-mark text {
        fill: var(--fp3d-warm);
      }
      .fp3d-pc-veil {
        z-index: 70;
      }
      .fp3d-pc {
        width: min(760px, 100%);
        max-height: calc(100vh - 32px);
        overflow: auto;
        display: grid;
        gap: 12px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-pc-title {
        font-size: 17px;
      }
      .fp3d-pc-name {
        font: inherit;
        font-size: 17px;
        font-weight: 700;
        padding: 4px 8px;
        border-radius: 8px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
        min-width: 0;
        flex: 1;
        max-width: 320px;
      }
      .fp3d-pc-body {
        display: grid;
        grid-template-columns: 220px minmax(0, 1fr);
        gap: 14px;
        align-items: start;
      }
      @media (max-width: 640px) {
        .fp3d-pc-body {
          grid-template-columns: 1fr;
        }
      }
      .fp3d-pc-draw {
        width: 100%;
        border-radius: 12px;
        background: rgba(120, 170, 255, 0.05);
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-body-shape {
        fill: #2a313a;
        stroke: #8a929c;
        stroke-width: 2;
      }
      .fp3d-pc-fan {
        fill: none;
        stroke: #8a929c;
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-wall {
        fill: rgba(120, 170, 255, 0.18);
        stroke: var(--fp3d-line);
      }
      .fp3d-pc-side {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
      }
      .fp3d-pc-stub line {
        stroke: #8a929c;
        stroke-width: 10;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-stub circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pc-stub {
        cursor: pointer;
      }
      .fp3d-pc-stub.fp3d-on line {
        stroke: #8a929c;
        stroke-dasharray: none;
      }
      .fp3d-pc-stub.fp3d-on circle {
        fill: var(--fp3d-accent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      .fp3d-pc-label {
        fill: var(--fp3d-text, #dfe7f5);
        font-size: 11px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-pc-rows {
        display: grid;
        gap: 8px;
      }
      .fp3d-pc-row {
        display: grid;
        grid-template-columns: 110px minmax(0, 1fr);
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px dashed var(--fp3d-line);
      }
      .fp3d-pc-row.fp3d-on {
        border-style: solid;
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-conns,
      .fp3d-pc-join {
        display: grid;
        gap: 6px;
      }
      .fp3d-pc-conn {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-tools {
        display: inline-flex;
        gap: 6px;
        margin-left: auto;
      }
      .fp3d-pc-chain {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-arrow {
        color: var(--fp3d-accent);
        font-weight: 800;
      }
      .fp3d-pc-tile {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.05);
        color: var(--fp3d-text);
      }
      button.fp3d-pc-tile {
        cursor: pointer;
      }
      .fp3d-pc-tile i {
        font-style: normal;
        opacity: 0.6;
        margin-left: 4px;
      }
      .fp3d-pc-start {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-pc-stop {
        border-color: #2f8cff;
      }
      .fp3d-pc-end {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-next {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-steps {
        display: grid;
        gap: 6px;
        padding-top: 4px;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-target {
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-join {
        padding: 10px;
        border-radius: 10px;
        background: rgba(120, 170, 255, 0.05);
      }
      .fp3d-pc-step {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-top: 4px;
      }
      .fp3d-pc-group {
        display: grid;
        gap: 4px;
      }
      .fp3d-pc-glabel {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-picks {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-pc-pick {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-pc-pick:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-pc-pick.fp3d-on {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-hole {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        font-size: 13px;
      }
      .fp3d-pc-hole > span {
        min-width: 120px;
      }
      .fp3d-pc-via {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-open {
        border-style: dashed;
      }
      .fp3d-joint-name {
        flex: 1;
        min-width: 90px;
        font: inherit;
        font-size: 13px;
        padding: 3px 6px;
        border-radius: 6px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
      }
      .fp3d-ports {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 3px;
      }
      .fp3d-ports i {
        font-style: normal;
        font-size: 10px;
        padding: 1px 5px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-line);
        color: var(--fp3d-muted);
      }
      .fp3d-ports i.fp3d-on {
        border-style: solid;
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 4px;
      }
      .fp3d-chip {
        font: inherit;
        font-size: 12px;
        padding: 3px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-accent);
        background: transparent;
        color: var(--fp3d-accent);
        cursor: pointer;
      }
      .fp3d-wv-node {
        pointer-events: none;
      }
      .fp3d-wv-joint {
        pointer-events: auto;
        cursor: move;
      }
      .fp3d-wv-run line {
        stroke: #8a929c;
        stroke-width: 0.05;
        stroke-linecap: round;
        cursor: pointer;
      }
      .fp3d-wv-run line.fp3d-wv-under {
        stroke: #5a616b;
        stroke-dasharray: 0.06 0.05;
      }
      .fp3d-wv-run-sel line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-runpt {
        fill: var(--fp3d-bg, #0b1220);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        cursor: move;
      }
      .fp3d-wv-runpt.fp3d-on {
        fill: var(--fp3d-accent);
      }
      .fp3d-wv-fitmode .fp3d-wv-run line {
        cursor: copy;
        stroke-width: 0.05 !important;
      }
      .fp3d-wv-fitmode .fp3d-wv-run line:hover {
        stroke: #ffb547 !important;
      }
      .fp3d-tech-step {
        border: 1px solid #ffb547;
        background: rgba(255, 181, 71, 0.1);
        border-radius: 10px;
        padding: 8px 10px;
        font-size: 12.5px;
        line-height: 1.35;
      }
      .fp3d-tech-step b {
        display: block;
        color: #ffb547;
        font-size: 11px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 2px;
      }
      .fp3d-tech-step.fp3d-done {
        border-color: #4dff9a;
        background: rgba(77, 255, 154, 0.08);
      }
      .fp3d-tech-step.fp3d-done b {
        color: #4dff9a;
      }
      .fp3d-wv-dry line {
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-erase {
        cursor: not-allowed;
      }
      .fp3d-wv-erase .fp3d-wv-run:hover line,
      .fp3d-wv-erase .fp3d-wv-valve:hover circle,
      .fp3d-wv-erase .fp3d-wv-sight:hover,
      .fp3d-wv-erase .fp3d-wv-joint:hover circle {
        stroke: #ff4d6d;
      }
      .fp3d-tech-step.fp3d-tech-erasing {
        border-color: #ff4d6d;
        background: rgba(255, 77, 109, 0.12);
      }
      .fp3d-tech-undo {
        justify-self: start;
      }
      .fp3d-tech-kit .fp3d-tech-pen {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .fp3d-tech-kit .fp3d-tech-pen button {
        display: grid;
        justify-items: center;
        gap: 2px;
        padding: 6px 2px;
        font-size: 0.82em;
        white-space: nowrap;
      }
      .fp3d-tech-feed {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .fp3d-tech-feed i {
        font-style: normal;
      }
      .fp3d-tech-feed small {
        margin-left: auto;
        color: #4dff9a;
      }
      .fp3d-tech-feed.fp3d-on {
        opacity: 0.75;
      }
      .fp3d-tech-ok {
        color: #4dff9a;
        font-weight: 600;
      }
      .fp3d-tech-issues {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-wv-end {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.02 0.015;
      }
      .fp3d-wv-valve circle {
        fill: #3c4148;
        stroke: #2f8cff;
        stroke-width: 0.012;
        cursor: grab;
      }
      .fp3d-wv-valve line {
        stroke: #2f8cff;
        stroke-width: 0.025;
        stroke-linecap: round;
        pointer-events: none;
      }
      .fp3d-wv-shut circle {
        stroke: #ff5a6e;
      }
      .fp3d-wv-sight {
        fill: rgba(140, 220, 255, 0.55);
        stroke: #4a4f56;
        stroke-width: 0.012;
        cursor: pointer;
      }
      .fp3d-wv-stroke {
        stroke-dasharray: 0.08 0.05;
        opacity: 0.55;
      }
      .fp3d-tech-ask {
        display: grid;
        gap: 4px;
        padding: 8px;
        margin-bottom: 6px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 8px;
        background: rgba(91, 124, 255, 0.08);
      }
      .fp3d-tech-ask b {
        font-size: 12.5px;
      }
      .fp3d-wv-draft {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.05;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-wv-rubber {
        stroke-dasharray: 0.05 0.04;
        opacity: 0.5;
      }
      .fp3d-wv-drawing {
        cursor: crosshair;
      }
      .fp3d-wv-drawing .fp3d-wv-item {
        pointer-events: none;
      }
      .fp3d-wv-svg {
        width: 100%;
        height: min(62vh, 560px);
        touch-action: none;
        user-select: none;
        font-family: var(--fp3d-font);
      }
      .fp3d-wv-wall {
        fill: rgba(120, 170, 255, 0.06);
        stroke: var(--fp3d-soft);
        stroke-width: 0.015;
      }
      .fp3d-wv-grid {
        stroke: var(--fp3d-line);
        stroke-width: 0.006;
      }
      .fp3d-wv-scale {
        fill: var(--fp3d-muted);
        font-size: 0.09px;
        text-anchor: end;
      }
      .fp3d-wv-floor {
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-hole {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-muted);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-window {
        fill: rgba(55, 224, 255, 0.12);
      }
      .fp3d-wv-item {
        cursor: grab;
      }
      .fp3d-wv-item rect {
        fill: rgba(91, 124, 255, 0.28);
        stroke: var(--fp3d-soft);
        stroke-width: 0.012;
      }
      .fp3d-wv-item text {
        fill: var(--fp3d-text);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-open {
        width: 100%;
        justify-content: center;
        margin: 2px 0 10px;
      }
      .fp3d-wv-turn {
        display: inline-flex;
        align-items: end;
        gap: 6px;
      }
      .fp3d-wv-turn .fp3d-field {
        width: 76px;
      }
      .fp3d-wv-lift {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        margin: -46px 0 0 -22px;
        display: grid;
        justify-items: center;
        gap: 2px;
        cursor: ns-resize;
        touch-action: none;
        user-select: none;
      }
      .fp3d-wv-lift[hidden] {
        display: none;
      }
      .fp3d-wv-lift span {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 24px;
        font-weight: 800;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.55);
      }
      .fp3d-wv-lift b {
        font-size: 12px;
        color: var(--fp3d-warm);
        background: rgba(7, 11, 20, 0.85);
        padding: 1px 6px;
        border-radius: 8px;
      }
      .fp3d-wv-3d {
        display: block;
        width: 100%;
        height: min(62vh, 560px);
        border-radius: 12px;
        overflow: hidden;
      }
      .fp3d-wv-pic rect {
        fill: transparent;
        stroke: transparent;
      }
      .fp3d-wv-pic:hover rect {
        stroke: var(--fp3d-soft);
      }
      .fp3d-wv-body {
        display: flex;
        gap: 8px;
        min-height: 0;
      }
      .fp3d-wv-kit {
        flex: none;
        width: 236px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        overflow-y: auto;
        max-height: min(62vh, 560px);
      }
      .fp3d-wv-kit h4 {
        margin: 4px 0 0;
        font-size: 11px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-kit .fp3d-btn {
        justify-content: flex-start;
        text-align: left;
      }
      .fp3d-wv-cats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
      }
      .fp3d-wv-cat {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        font-size: 12px;
        text-align: left;
        cursor: pointer;
        line-height: 1.15;
      }
      .fp3d-wv-cat span {
        font-size: 15px;
        width: 18px;
        text-align: center;
        flex: none;
      }
      .fp3d-wv-cat.fp3d-on {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.14);
        color: #fff;
      }
      .fp3d-wv-tiles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-wv-tile {
        display: grid;
        grid-template-rows: auto auto auto;
        justify-items: center;
        gap: 2px;
        padding: 6px 4px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        cursor: pointer;
        text-align: center;
      }
      .fp3d-wv-tile:hover {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.08);
      }
      .fp3d-wv-tile-pic {
        width: 72px;
        height: 60px;
        display: grid;
        place-items: center;
      }
      .fp3d-wv-tile-pic img {
        max-width: 72px;
        max-height: 60px;
      }
      .fp3d-wv-tile-pic i {
        width: 36px;
        height: 28px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-muted);
        opacity: 0.4;
      }
      .fp3d-wv-tile-name {
        font-size: 11.5px;
        font-weight: 600;
        line-height: 1.15;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .fp3d-wv-tile small {
        font-size: 10.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-tile small.fp3d-wv-fit {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-kit .fp3d-search {
        width: 100%;
        box-sizing: border-box;
      }
      .fp3d-wv-kit .fp3d-wv-pick {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
        height: auto;
        min-height: 32px;
        line-height: 1.2;
        font-size: 12.5px;
      }
      .fp3d-wv-pick small {
        color: var(--fp3d-muted);
        white-space: nowrap;
      }
      .fp3d-wv-gapnote {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-setframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.05 0.03;
        pointer-events: none;
      }
      .fp3d-wv-setblock rect {
        stroke: #ffb547;
      }
      .fp3d-wv-setframe text {
        fill: var(--fp3d-accent);
        pointer-events: none;
      }
      .fp3d-wv-setblock text {
        fill: #ffb547;
      }
      .fp3d-wv-gap rect {
        fill: rgba(55, 224, 255, 0.1);
        stroke: var(--fp3d-accent);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
        pointer-events: none;
      }
      .fp3d-wv-gap text {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-handle {
        fill: var(--fp3d-accent);
        stroke: #06101c;
        stroke-width: 0.006;
        cursor: ew-resize;
      }
      .fp3d-wv-handle.fp3d-wv-ns {
        cursor: ns-resize;
      }
      .fp3d-wv-size {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-wv-fixnote {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-pool-depth {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pool-depth input {
        width: 58px;
        padding: 3px 5px;
      }
      .fp3d-wv-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 0.008;
        stroke-dasharray: 0.03 0.02;
        pointer-events: none;
      }
      @media (max-width: 700px) {
        .fp3d-wv-body {
          flex-direction: column;
        }
        .fp3d-wv-kit {
          width: auto;
          flex-direction: row;
          flex-wrap: wrap;
          max-height: none;
        }
      }
      .fp3d-wv-stage {
        flex: 1;
        min-width: 0;
        position: relative;
        min-height: 0;
        padding: 0 60px;
      }
      /* a group with a menu lets it hang out below (the others scroll sideways on a narrow screen) */
      .fp3d-seg.fp3d-seg-menu {
        overflow: visible;
        /* too narrow for a group: its buttons wrap (they never reach over the sidebar) */
        flex-wrap: wrap;
        max-width: 100%;
      }
      .fp3d-seg > button.fp3d-undo {
        font-size: 20px;
        line-height: 1;
        padding-inline: 12px;
      }
      .fp3d-menu-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-voice-list {
        margin: 0 0 8px;
        padding-left: 18px;
        font-size: 13px;
        color: var(--fp3d-muted);
        columns: 2;
        column-gap: 18px;
      }
      .fp3d-voice-list li {
        break-inside: avoid;
        margin: 2px 0;
      }
      .fp3d-seg-settings {
        margin-left: auto;
      }
      .fp3d-menu-right {
        right: 0;
        left: auto;
      }
      .fp3d-narrow .fp3d-settings-word {
        display: none;
      }
      .fp3d-dialog-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.55);
      }
      .fp3d-dialog {
        width: min(640px, 100%);
        max-height: calc(100% - 16px);
        overflow: auto;
        padding: 14px 18px 18px;
        border-radius: 18px;
        border: 1px solid var(--fp3d-accent, #22d3ee);
        background: var(--fp3d-panel, #0d1628);
        box-shadow: 0 0 40px rgba(34, 211, 238, 0.2);
        outline: none;
      }
      .fp3d-dialog-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 6px;
      }
      .fp3d-dialog-head h3 {
        margin: 0;
      }
      .fp3d-dialog details.fp3d-section > summary {
        display: none;
      }
      .fp3d-dialog details.fp3d-section {
        border: 0;
        padding: 0;
        margin: 0;
      }
      .fp3d-narrow .fp3d-dialog-veil {
        padding: 0;
      }
      .fp3d-narrow .fp3d-dialog {
        width: 100%;
        max-height: 100%;
        border-radius: 0;
      }
      .fp3d-menu-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-menu {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        z-index: 30;
        min-width: 230px;
        max-height: 70vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid, #0d1628);
        box-shadow: var(--fp3d-shadow);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
      }
      .fp3d-menu-right {
        left: auto;
        right: 0;
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-item {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        padding: 9px 12px;
        border-radius: 10px;
        color: var(--fp3d-text);
        background: none;
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-item:hover {
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-on {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-menu-icon {
        width: 22px;
        text-align: center;
      }
      .fp3d-menu-more {
        margin-left: auto;
        color: var(--fp3d-muted);
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-menu-label {
        color: var(--fp3d-muted);
        font-weight: 500;
      }
      .fp3d-menu-sep {
        height: 1px;
        margin: 4px 6px;
        background: var(--fp3d-line, rgba(120, 190, 255, 0.22));
      }
      .fp3d-menu-sub {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 2px 8px 8px 16px;
      }
      .fp3d-seg .fp3d-menu-sub .fp3d-chip {
        min-height: 30px;
        padding: 5px 11px;
        font-size: 0.92em;
      }
      .fp3d-seg .fp3d-menu-sub .fp3d-menu-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-news-veil {
        position: fixed;
        inset: 0;
        z-index: 40;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.55);
      }
      .fp3d-news {
        max-width: 420px;
        padding: 22px 22px 18px;
        border-radius: 18px;
        border: 1px solid var(--fp3d-accent, #22d3ee);
        background: var(--fp3d-panel, #0d1628);
        box-shadow: 0 0 40px rgba(34, 211, 238, 0.25);
        text-align: center;
      }
      .fp3d-news-pic {
        font-size: 34px;
        letter-spacing: 6px;
      }
      .fp3d-news h3 {
        margin: 10px 0 6px;
      }
      .fp3d-news p {
        margin: 0 0 14px;
        color: var(--fp3d-muted, #a9b8d4);
      }
      .fp3d-news-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;
      }
      .fp3d-wv-zoom {
        position: absolute;
        right: 64px;
        bottom: 6px;
        z-index: 1;
        display: flex;
        gap: 4px;
      }
      .fp3d-wv-zoom .fp3d-btn {
        min-width: 34px;
        padding: 4px 8px;
      }
      .fp3d-wv-side {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        display: grid;
        justify-items: center;
        gap: 2px;
        width: 54px;
        padding: 10px 0;
        border-radius: 14px;
        border: 1px solid var(--fp3d-line);
        background: rgba(14, 21, 38, 0.82);
        color: var(--fp3d-accent);
        font-size: 30px;
        line-height: 1;
        cursor: pointer;
      }
      .fp3d-wv-side small {
        font-size: 10px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-side:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-wv-left {
        left: 0;
      }
      .fp3d-wv-right {
        right: 0;
      }
      .fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.3);
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-pic.fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-dims line {
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-dims text {
        fill: var(--fp3d-warm);
        font-size: 0.11px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.035px;
      }
      .fp3d-wv-item text,
      .fp3d-wv-hole-label {
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.025px;
      }
      .fp3d-wv-hole-label {
        fill: var(--fp3d-muted);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-dims text.fp3d-wv-up {
        text-anchor: start;
      }
      .fp3d-edge-box {
        margin: 12px 0;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 45%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, var(--fp3d-accent) 6%, transparent);
      }
      .fp3d-edge-box h4 {
        margin: 0 0 4px;
        color: var(--fp3d-accent);
        font-size: 13px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      /* a wall row: name and length, the height, then the buttons (full height, no wall, cut) in one line;
         a split point gets a line of its own below */
      .fp3d-edge-height {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: end;
        padding: 4px 6px;
        margin: 0 -6px;
        border-radius: 8px;
      }
      .fp3d-edge-height > span:first-child {
        flex: 1 1 84px;
        min-width: 84px;
      }
      .fp3d-edge-height > .fp3d-field {
        flex: 1 1 90px;
        min-width: 0;
      }
      .fp3d-edge-height > .fp3d-muted {
        flex: 1 1 90px;
        align-self: center;
      }
      .fp3d-edge-height > .fp3d-btn {
        flex: 0 0 auto;
        white-space: nowrap;
        padding-left: 10px;
        padding-right: 10px;
      }
      .fp3d-edge-height > .fp3d-split-row {
        flex: 1 1 100%;
        display: flex;
        gap: 6px;
        align-items: end;
      }
      .fp3d-edge-height > .fp3d-split-row > .fp3d-field {
        flex: 1;
      }
      .fp3d-edge-on {
        background: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
      }
      .fp3d-edge-low b {
        color: var(--fp3d-accent);
      }
      .fp3d-wall-low {
        opacity: 0.55;
      }
      .fp3d-dev-source {
        display: flex;
        margin: 8px 0;
      }
      .fp3d-dev-source button {
        flex: 1 1 0;
        min-width: 0;
        padding: 6px 4px;
        font-size: 12px;
        line-height: 1.2;
        white-space: normal;
        text-align: center;
        border-radius: 10px;
      }
      .fp3d-place-all {
        margin: 10px 0 0;
      }
      .fp3d-roof-sec polygon {
        fill: color-mix(in srgb, #ffb547 10%, transparent);
        stroke: #ffb547;
        stroke-width: 2;
        stroke-dasharray: 8 6;
        cursor: move;
      }
      .fp3d-roof-sel polygon {
        fill: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
      .fp3d-roofwin polygon {
        fill: color-mix(in srgb, #2b6b8f 70%, transparent);
        stroke: #e3e9f5;
        stroke-width: 2;
        cursor: move;
      }
      .fp3d-roofwin-sel polygon {
        stroke: #ffd75a;
      }
      .fp3d-tool-energy .fp3d-roof-layer {
        opacity: 0.45;
      }
      .fp3d-tool-energy .fp3d-energy-item {
        pointer-events: auto;
      }
      /* the cables in the energy tool: faint automatic ways, solid laid ones */
      .fp3d-cable line {
        stroke: #ffd75a;
        stroke-width: 2;
        stroke-dasharray: 5 4;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-cable-bat line {
        stroke: #5dffb0;
      }
      .fp3d-cable-grid line {
        stroke: #4ff6ff;
      }
      .fp3d-cable-hit line {
        stroke-width: 12;
        opacity: 0;
        pointer-events: stroke;
        cursor: pointer;
      }
      .fp3d-cable-laid line {
        stroke-dasharray: none;
        opacity: 0.9;
      }
      .fp3d-cable-sel line {
        stroke-width: 2.5;
        opacity: 1;
        filter: drop-shadow(0 0 4px currentColor);
      }
      .fp3d-cable-sel .fp3d-cable-piece {
        stroke-width: 14;
        opacity: 0;
        pointer-events: stroke;
        cursor: copy;
      }
      .fp3d-cable .fp3d-vertex circle {
        pointer-events: auto;
      }
      .fp3d-energy-marker {
        cursor: move;
      }
      .fp3d-checklist .fp3d-chk {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        margin: 2px 0;
        padding: 6px 8px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
      }
      .fp3d-checklist .fp3d-chk:hover {
        background: rgba(127, 127, 127, 0.12);
      }
      .fp3d-checklist .fp3d-chk span {
        width: 18px;
        text-align: center;
        font-weight: 700;
      }
      .fp3d-chk-ok span {
        color: #59ff8c;
      }
      .fp3d-chk-todo span {
        color: #ffc633;
      }
      .fp3d-chk-opt {
        opacity: 0.75;
      }
      .fp3d-teaser-on {
        border-color: rgba(89, 255, 140, 0.5);
      }
      .fp3d-teaser {
        margin-top: 12px;
        padding: 12px;
        border-radius: 14px;
        border: 1px solid color-mix(in srgb, #ffd75a 45%, transparent);
        background: linear-gradient(160deg, color-mix(in srgb, #ffd75a 10%, transparent), transparent 60%);
      }
      .fp3d-teaser-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      .fp3d-teaser-soon {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #0b1426;
        background: #ffd75a;
        border-radius: 999px;
        padding: 2px 8px;
        white-space: nowrap;
      }
      .fp3d-teaser img {
        display: block;
        width: 100%;
        border-radius: 10px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 40%, transparent);
      }
      .fp3d-teaser ul {
        margin: 8px 0 4px;
        padding-left: 18px;
        font-size: 13px;
      }
      /* the roof and energy tools say what can be moved there (everything else is locked) */
      .fp3d-phone-hint {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-hint {
          position: absolute;
          top: 8px;
          left: 8px;
          /* the plan may be wider than the phone: stay on the screen */
          width: calc(min(100%, 100vw) - 16px);
          box-sizing: border-box;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 6px 6px 12px;
          border-radius: 12px;
          background: var(--fp3d-chrome-solid);
          border: 1px solid var(--fp3d-accent);
          font-size: 13px;
        }
      }
      .fp3d-tool-note {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        max-width: calc(100% - 24px);
        padding: 5px 12px;
        border-radius: 999px;
        background: color-mix(in srgb, #0b1426 85%, transparent);
        border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
        color: #ffe7a3;
        font-size: 12px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-energy-marker circle {
        fill: color-mix(in srgb, #0b1426 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-holo-pt circle {
        stroke: #c9a4ff;
        cursor: grab;
      }
      .fp3d-holo-pt .fp3d-energy-name {
        fill: #c9a4ff;
      }
      .fp3d-energy-marker-sel circle {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
        fill: color-mix(in srgb, var(--fp3d-accent) 25%, #0b1426);
      }
      .fp3d-energy-marker text {
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-energy-icon {
        font-size: 17px;
      }
      .fp3d-energy-name {
        font-size: 11px;
        font-weight: 700;
        fill: #ffd75a;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.65);
        stroke-width: 3px;
      }
      .fp3d-solar polygon {
        fill: color-mix(in srgb, #1b3a8f 75%, transparent);
        stroke: #9fb8ff;
        stroke-width: 1.5;
        cursor: move;
      }
      .fp3d-solar-sel polygon {
        fill: color-mix(in srgb, #1b3a8f 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-solar polygon.fp3d-solar-off {
        fill: transparent;
        stroke-dasharray: 4 4;
        stroke-width: 1.5;
      }
      .fp3d-solar-pick polygon {
        cursor: pointer;
      }
      .fp3d-roof-ridge line {
        stroke: #ffb547;
        stroke-width: 2.5;
        pointer-events: none;
      }
      .fp3d-roof-sel .fp3d-roof-ridge line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-roof-sec text {
        fill: #ffd28a;
        font-size: 12px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.6);
        stroke-width: 3px;
        pointer-events: none;
      }
      .fp3d-tool-energy .fp3d-room,
      .fp3d-tool-energy [data-furniture],
      .fp3d-tool-energy [data-device],
      .fp3d-tool-energy [data-opening],
      .fp3d-tool-energy [data-free-wall],
      .fp3d-tool-energy [data-outdoor],
      .fp3d-tool-energy .fp3d-roof-layer,
      .fp3d-tool-roof .fp3d-room,
      .fp3d-tool-roof [data-furniture],
      .fp3d-tool-roof [data-device],
      .fp3d-tool-roof [data-opening],
      .fp3d-tool-roof [data-free-wall],
      .fp3d-tool-roof [data-outdoor] {
        pointer-events: none;
      }
      .fp3d-dev-area {
        margin: 10px 0 2px;
        color: var(--fp3d-muted);
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .fp3d-h3row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-h3row h3 {
        margin-bottom: 0;
      }
      .fp3d-fix {
        min-height: 30px;
        padding: 4px 10px;
        font-size: 13px;
      }
      .fp3d-pipe,
      .fp3d-pipe-hit {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-pipe {
        stroke: #37a8ff;
        stroke-width: 3;
        opacity: 0.85;
        pointer-events: none;
      }
      .fp3d-pipe-sel {
        stroke-width: 5;
        opacity: 1;
        filter: drop-shadow(0 0 4px #37a8ff);
      }
      .fp3d-pipe-draft {
        stroke-dasharray: 6 5;
      }
      .fp3d-pipe-hit {
        stroke: transparent;
        stroke-width: 16;
        cursor: pointer;
      }
      .fp3d-pipe-seg {
        stroke: transparent;
        stroke-width: 14;
        cursor: copy;
      }
      .fp3d-pipe-arrow {
        fill: #37a8ff;
        pointer-events: none;
      }
      .fp3d-pool-node {
        cursor: grab;
      }
      .fp3d-pool-node circle:not(.fp3d-hit) {
        fill: #0b1a2e;
        stroke: #37e0ff;
        stroke-width: 2;
      }
      .fp3d-pool-node.fp3d-pool-dev circle:not(.fp3d-hit) {
        stroke: #5b7cff;
      }
      .fp3d-pool-node.fp3d-pool-closed circle:not(.fp3d-hit) {
        stroke: #ff4d40;
      }
      .fp3d-pool-node text {
        fill: #e6f6ff;
        font-size: 10px;
        font-weight: 700;
        text-anchor: middle;
        dominant-baseline: central;
        pointer-events: none;
      }
      .fp3d-conn {
        grid-template-columns: 1fr;
      }
      .fp3d-conn select {
        width: 100%;
      }
      .fp3d-pool-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        margin: 4px 0;
        font-size: 13px;
      }
      .fp3d-pool-row > span,
      .fp3d-pool-row > .fp3d-link {
        flex: 1;
        text-align: left;
      }
      .fp3d-pool-row-sel {
        background: rgba(55, 224, 255, 0.1);
        border-radius: 8px;
        box-shadow: inset 3px 0 0 var(--fp3d-accent);
        padding-left: 6px;
      }
      .fp3d-outdoor-type {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-outdoor-type select {
        min-height: 34px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line, rgba(160, 200, 255, 0.25));
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-weight: 600;
      }
      .fp3d-fix[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lock {
        font-size: 13px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-hint-fixed {
        color: var(--fp3d-accent);
      }
      .fp3d-ctx {
        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: column;
        min-width: 170px;
        padding: 4px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: var(--fp3d-panel, #111a2e);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
      }
      .fp3d-ctx button {
        padding: 8px 12px;
        border: none;
        border-radius: 7px;
        background: none;
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-ctx button:hover:not(:disabled) {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-ctx button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-ctx-danger {
        color: var(--fp3d-danger, #ff6b7a) !important;
      }
      .fp3d-edge-hi {
        stroke: var(--fp3d-accent);
        stroke-width: 6;
        stroke-linecap: round;
        filter: drop-shadow(0 0 6px var(--fp3d-accent));
      }
      .fp3d-room-id code {
        user-select: all;
        cursor: copy;
      }
      .fp3d-open .fp3d-open-hit {
        stroke: transparent;
        stroke-width: 26;
      }
      .fp3d-free-wall .fp3d-hit {
        stroke: transparent;
        stroke-width: 18;
      }
      .fp3d-free-wall-line {
        stroke: transparent;
        stroke-width: 1;
      }
      .fp3d-free-wall-sel .fp3d-free-wall-line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-draft-wall {
        stroke-width: 4;
      }
      .fp3d-open-passage {
        stroke-dasharray: 4 4;
      }
      .fp3d-out-sel polygon {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: none;
      }
      .fp3d-out text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-lit .fp3d-furn-body {
        fill: rgba(255, 181, 71, 0.35);
        stroke: var(--fp3d-warm);
      }
      .fp3d-rotate {
        cursor: grab;
      }
      .fp3d-preview {
        position: fixed;
        z-index: 20;
        width: 180px;
        padding: 8px 8px 10px;
        border-radius: 16px;
        background: radial-gradient(circle at 50% 40%, #1d2c4d, #0b1222 75%);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        text-align: center;
        pointer-events: none;
        animation: fp3d-pop 120ms ease-out;
      }
      @keyframes fp3d-pop {
        from {
          opacity: 0;
          transform: translateX(8px);
        }
      }
      .fp3d-preview img,
      .fp3d-preview-wait {
        display: block;
        width: 164px;
        height: 164px;
      }
      .fp3d-preview-wait {
        margin: 0 auto;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .fp3d-preview b {
        display: block;
        margin-top: 2px;
        font-size: 13px;
        color: #e8eeff;
      }
      .fp3d-lib-badge {
        margin-left: 4px;
        color: #37e0ff;
        vertical-align: -2px;
      }
      .fp3d-ext-teaser {
        display: grid;
        gap: 6px;
        margin: 12px 0;
        padding: 12px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(55, 224, 255, 0.08), rgba(91, 124, 255, 0.08));
      }
      .fp3d-pin {
        border: 0;
        background: none;
        padding: 2px 6px;
        font-size: 17px;
        line-height: 1;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-pin-on {
        color: var(--fp3d-warm);
      }
      .fp3d-back {
        margin-bottom: 12px;
      }
      .fp3d-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
      }
      .fp3d-resize {
        cursor: nwse-resize;
      }
      .fp3d-resize rect {
        fill: var(--fp3d-accent);
        stroke: #0b1222;
        stroke-width: 1.5;
      }
      .fp3d-code {
        display: block;
        font: 12px/1.4 ui-monospace, Menlo, Consolas, monospace;
        padding: 6px 8px;
        border-radius: 8px;
        background: rgba(127, 127, 127, 0.12);
        user-select: all;
        word-break: break-all;
      }
      .fp3d-shift {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .fp3d-shift input {
        width: 5.5em;
      }
      .fp3d-headroom {
        stroke: rgba(255, 214, 90, 0.55);
        stroke-width: 1;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-headroom-label {
        font-size: 10px;
        fill: rgba(255, 214, 90, 0.75);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-split-mark {
        stroke: rgba(55, 224, 255, 0.9);
        stroke-width: 2;
        pointer-events: none;
      }
      .fp3d-floor-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 8px 0;
        padding: 10px;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
        max-width: 100%;
        box-sizing: border-box;
      }
      .fp3d-icon-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .fp3d-icon-row input {
        flex: 1;
        min-width: 0;
      }
      .fp3d-icon-row ha-icon {
        --mdc-icon-size: 22px;
        color: var(--fp3d-accent);
      }
      .fp3d-floor-menu .fp3d-btn {
        text-align: left;
        width: 100%;
        min-width: 0;
        white-space: normal;
        overflow-wrap: anywhere;
      }
      .fp3d-rotate line {
        stroke: var(--fp3d-accent);
        stroke-dasharray: 3 3;
      }
      .fp3d-rotate circle:not(.fp3d-hit) {
        fill: #0b1222;
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-rotate path {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-linecap: round;
      }
      .fp3d-lib-toggle {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 0;
        border: 0;
        background: none;
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-lib-toggle:hover {
        color: var(--fp3d-text);
      }
      .fp3d-lib-caret {
        width: 12px;
        color: var(--fp3d-accent);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 500;
        letter-spacing: 0;
        text-transform: none;
        opacity: 0.7;
      }
      .fp3d-lib-head {
        margin: 10px 0 0;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-furn-front {
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
        vector-effect: non-scaling-stroke;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-furn text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-sel .fp3d-furn-body {
        fill: rgba(55, 224, 255, 0.16);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      /* furniture blocks and multi selections: a dashed frame with its name, the frame being drawn */
      .fp3d-selframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-selframe-block rect {
        stroke: #ffb547;
      }
      .fp3d-selframe text {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-selframe-block text {
        fill: #ffb547;
      }
      .fp3d-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        pointer-events: none;
      }
      .fp3d-block-parts {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 6px 0 10px;
      }
      .fp3d-block-note {
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
      }
      .fp3d-multi-toggle {
        margin-top: 8px;
      }
      .fp3d-open {
        cursor: grab;
      }
      .fp3d-open-gap {
        fill: #0b1222;
        stroke: none;
      }
      .fp3d-open path,
      .fp3d-open line {
        fill: none;
        stroke-width: 1.6;
        stroke-linecap: round;
      }
      .fp3d-open-door path {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 3 3;
      }
      .fp3d-open-front path,
      .fp3d-open-door line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
        stroke-dasharray: none;
      }
      .fp3d-open-door line.fp3d-open-pane {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-garage line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
      }
      .fp3d-open-track {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 4 4;
        opacity: 0.6;
      }
      .fp3d-open-window line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-sel .fp3d-open-gap {
        fill: rgba(55, 224, 255, 0.25);
      }
      .fp3d-open-sel path,
      .fp3d-open-sel line {
        stroke-width: 2.4;
      }
      .fp3d-bg-rotate {
        cursor: grab;
      }
      .fp3d-bg-ruler line {
        stroke: #ffb020;
        stroke-width: 2.5;
        stroke-dasharray: 6 4;
      }
      .fp3d-bg-ruler circle {
        fill: #ffb020;
        stroke: #1a1000;
        stroke-width: 1.5;
      }
      .fp3d-own-button {
        padding: 10px 0;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-own-button textarea {
        font: 12px/1.4 ui-monospace, monospace;
        width: 100%;
        box-sizing: border-box;
        padding: 6px 8px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        background-color: var(--fp3d-panel, #0d1424);
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        margin: 2px 0 6px;
      }
      .fp3d-more {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-muted);
        background: none;
        border: none;
        text-align: left;
        padding: 2px 26px 8px;
        cursor: pointer;
      }
      .fp3d-more:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-dev-hidden .fp3d-dev-name {
        opacity: 0.45;
        text-decoration: line-through;
      }
      .fp3d-dev-extra {
        padding-left: 18px;
        font-size: 13px;
      }
      .fp3d-dev-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 8px;
        font-weight: 600;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-device-sel circle:not(.fp3d-hit) {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
      }
      .fp3d-dev-row {
        align-items: center;
        cursor: default;
      }
      .fp3d-room-btn {
        flex: 1;
        min-width: 0;
        border-bottom: none;
        padding: 0;
      }
      .fp3d-dev-row:hover {
        color: var(--fp3d-text);
      }
      .fp3d-dev-name {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-dev-name:disabled {
        cursor: default;
      }
      .fp3d-dev-name span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-name svg {
        flex: none;
      }
      .fp3d-link {
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: none;
        padding: 4px 2px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-wide-btn {
        width: 100%;
        margin-bottom: 6px;
      }
      .fp3d-device {
        cursor: grab;
      }
      .fp3d-wedge path,
      .fp3d-wedge circle:not(.fp3d-hit) {
        fill: rgba(55, 224, 255, 0.12);
        stroke: rgba(55, 224, 255, 0.45);
        stroke-width: 1;
        pointer-events: none;
      }
      .fp3d-wedge-sel path,
      .fp3d-wedge-sel > circle {
        fill: rgba(55, 224, 255, 0.2);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wedge .fp3d-rotate circle {
        pointer-events: auto;
      }
      .fp3d-device circle:not(.fp3d-hit) {
        fill: #111a2e;
        stroke: var(--fp3d-soft);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .fp3d-device path {
        fill: none;
        stroke: var(--fp3d-text);
        stroke-width: 2.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-device-on circle:not(.fp3d-hit) {
        fill: var(--fp3d-warm);
        stroke: var(--fp3d-warm);
      }
      .fp3d-device-on path {
        stroke: #2a1a00;
      }
      .fp3d-muted {
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-points {
        margin: 12px 0;
      }
      .fp3d-point {
        display: grid;
        grid-template-columns: 18px 1fr 1fr auto;
        gap: 6px;
        align-items: end;
        padding: 4px 0;
      }
      .fp3d-point-sel .fp3d-muted {
        color: var(--fp3d-accent);
      }
      .fp3d-point .fp3d-btn {
        min-height: 34px;
        padding: 4px 10px;
      }
      .fp3d-upload {
        position: relative;
        text-align: center;
        overflow: hidden;
      }
      .fp3d-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }
      .fp3d-sub {
        margin: 8px 0 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-note {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-warm);
      }
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",ar);function op(r,e,t){let n=t[0]-e[0],i=t[1]-e[1],o=n*n+i*i||1,s=Math.min(1,Math.max(0,((r[0]-e[0])*n+(r[1]-e[1])*i)/o));return Math.hypot(r[0]-e[0]-n*s,r[1]-e[1]-i*s)}function Dn(r){return r.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var ko={language:"en"};function Te(r){return/^(sensor|input_number|number)\./.test(r)}function sr(r){return/^(binary_sensor|input_boolean)\./.test(r)}export{ar as Fp3dEditor};
