(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cc7f90e"],{"24e2":function(t,n,a){"use strict";var e=a("399d"),o=a.n(e);o.a},"2fcb":function(t,n,a){},"399d":function(t,n,a){},"66b9":function(t,n,a){"use strict";a("68ef"),a("09fe")},"985e":function(t,n,a){"use strict";a.r(n);var e,o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"game-detail"},[a("div",{staticClass:"main-box"},[a("img",{attrs:{src:t.wardList.icon,alt:""}}),a("div",[a("p",[t._v(t._s(t.wardList.pagName))]),a("p",[a("span",{staticClass:"size"},[t._v(t._s(t.wardList.pagRemark))])])])]),a("h3",[t._v("礼包类型")]),a("van-list",{staticClass:"van-clearfix",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.wardList.awardList,function(n){return a("van-cell",{key:n.awardId},[a("div",{staticClass:"left-box"},[a("h4",[t._v(t._s(n.awardName))]),a("p",{staticClass:"fold",on:{click:function(n){return t.foldText(n)}}},[t._v(t._s(n.remark))]),n.awardStatus?a("div",{staticClass:"code-box"},[a("span",[t._v("激活码")]),a("span",{staticClass:"code"},[t._v(t._s(n.awardCode))])]):t._e()]),n.awardStatus?a("van-button",{staticClass:"copyOne",attrs:{round:"",color:"#f1f0f6"},on:{click:function(a){return t.copyOne(n)}}},[t._v("复制")]):a("van-button",{attrs:{round:"",color:"#f1f0f6"},on:{click:function(a){return t.getGift(n.awardId)}}},[t._v("领取")])],1)}),1)],1)},i=[],s=(a("e7e5"),a("d399")),c=(a("68ef"),a("4d75"),a("09fe"),a("2fcb"),a("c31d")),r=a("2b0e"),l=a("d282"),d=a("ea8e"),u=a("b1d2"),f=a("6605"),h=a("1325"),p=a("5fbe"),g=r["a"].extend({mixins:[Object(p["a"])(function(t,n){this.handlePopstate(n&&this.closeOnPopstate)})],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var n=t?h["b"]:h["a"];n(window,"popstate",this.close)}}}}),b=a("b650"),m=Object(l["a"])("dialog"),v=m[0],w=m[1],C=m[2],y=v({mixins:[f["a"],g],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var n=this;this.$emit(t),this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(a){!1!==a&&n.loading[t]&&n.onClose(t),n.loading.confirm=!1,n.loading.cancel=!1})):this.onClose(t)},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")}},render:function(){var t,n,a=this,e=arguments[0];if(this.shouldRender){var o=this.message,i=this.messageAlign,s=this.slots(),c=this.slots("title")||this.title,r=c&&e("div",{class:w("header",{isolated:!o&&!s})},[c]),l=(s||o)&&e("div",{class:w("content")},[s||e("div",{domProps:{innerHTML:o},class:w("message",(t={"has-title":c},t[i]=i,t))})]),f=this.showCancelButton&&this.showConfirmButton,h=e("div",{class:[u["d"],w("footer",{buttons:f})]},[this.showCancelButton&&e(b["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||C("cancel")},class:w("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){a.handleAction("cancel")}}}),this.showConfirmButton&&e(b["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||C("confirm")},class:[w("confirm"),(n={},n[u["b"]]=f,n)],style:{color:this.confirmButtonColor},on:{click:function(){a.handleAction("confirm")}}})]);return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||o},class:[w(),this.className],style:{width:Object(d["a"])(this.width)}},[r,l,h])])}}}),O=a("a142");function B(t){return document.body.contains(t)}function x(){e&&e.$destroy(),e=new(r["a"].extend(y))({el:document.createElement("div"),propsData:{lazyRender:!1}}),e.$on("input",function(t){e.value=t})}function S(t){return O["d"]?Promise.resolve():new Promise(function(n,a){e&&B(e.$el)||x(),Object(c["a"])(e,S.currentOptions,t,{resolve:n,reject:a})})}S.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){e["confirm"===t?"resolve":"reject"](t)}},S.alert=S,S.confirm=function(t){return S(Object(c["a"])({showCancelButton:!0},t))},S.close=function(){e&&(e.value=!1)},S.setDefaultOptions=function(t){Object(c["a"])(S.currentOptions,t)},S.resetDefaultOptions=function(){S.currentOptions=Object(c["a"])({},S.defaultOptions)},S.resetDefaultOptions(),S.install=function(){r["a"].use(y)},S.Component=y,r["a"].prototype.$dialog=S;var k,j=S,_=(a("ac6a"),a("bd86")),L=(a("c194"),a("7744")),P=(a("66b9"),a("2994"),a("2bdd")),T=(a("204a"),a("add7"),a("bc3a")),A=a.n(T),I=a("704d"),$={components:(k={},Object(_["a"])(k,P["a"].name,P["a"]),Object(_["a"])(k,b["a"].name,b["a"]),Object(_["a"])(k,L["a"].name,L["a"]),k),data:function(){return{list:[],loading:!1,finished:!1,fold:!0,wardList:{icon:"",pagRemark:"",pagName:""}}},methods:{onLoad:function(){var t=this;this.loading=!0,A.a.all([A.a.post(this.VUE_APP_API+"packageAwardList.do",{activityId:190822080,pagAwardId:this.$route.query.id}),A.a.post(this.VUE_APP_API+"queryCaseNumList.do",{activityId:190822080,account:Object(I["a"])("phone"),page:0,rows:0})]).then(function(n){n[0].data.data.awardList;n[0].data.data.awardList.forEach(function(t,a,e){n[1].data.data.list.forEach(function(n,a,e){t.awardId==n.awardId&&(t.awardStatus=!0,t.awardCode=n.awardCode,console.log(n.awardCode))})}),t.wardList=n[0].data.data,console.log(t.wardList),t.loading=!1,t.finished=!0}).catch(function(t){console.log(t)})},foldText:function(t){var n=t.currentTarget;n.classList.contains("fold")?(n.classList.remove("fold"),n.classList.toggle("unfold")):(n.classList.toggle("fold"),n.classList.remove("unfold"))},getGift:function(t){var n=this;Object(I["a"])("phone")?A.a.post(this.VUE_APP_API+"/getAward.do",{phone:Object(I["a"])("phone"),activityId:190822080,awardId:t}).then(function(t){0==t.data.resultCode?j.confirm({title:"领取成功",message:'<P>你已经成功领取"'.concat(t.data.data.awardName,'"</P>\n                      <div class="code-box"><span>激活码</span><span class="code">').concat(t.data.data.awardCode,"</span></div>\n            "),cancelButtonText:"关闭",confirmButtonText:"复制"}).then(function(){n.copy(t.data.data)}).catch(function(){}):Object(s["a"])({message:t.data.msg,position:"center",duration:1e3})}).catch(function(t){console.log(t)}):window.location.href="http://h5.mmarket.com/pps_webh5/getphone1/dist/index.html?pid=1001"},copyOne:function(t){var n=new this.Clipboard(".copyOne",{text:function(){return t.awardCode}});n.on("success",function(t){Object(s["a"])({message:"激活码已复制",position:"center",duration:1e3}),n.destroy()}),n.on("error",function(t){Object(s["a"])({message:"复制失败,请手动复制",position:"center",duration:1e3}),n.destroy()})}},copy:function(t){var n=new this.Clipboard(".van-dialog__confirm",{text:function(){return t.awardCode}});n.on("success",function(t){Object(s["a"])({message:"激活码已复制",position:"center",duration:1e3}),n.destroy()}),n.on("error",function(t){Object(s["a"])({message:"复制失败,请手动复制",position:"center",duration:1e3}),n.destroy()})}},z=$,N=(a("24e2"),a("2877")),E=Object(N["a"])(z,o,i,!1,null,null,null);n["default"]=E.exports},add7:function(t,n,a){},b1d2:function(t,n,a){"use strict";a.d(n,"f",function(){return e}),a.d(n,"a",function(){return o}),a.d(n,"d",function(){return i}),a.d(n,"b",function(){return s}),a.d(n,"c",function(){return c}),a.d(n,"e",function(){return r});var e="#fff",o="van-hairline",i=o+"--top",s=o+"--left",c=o+"--surround",r=o+"--top-bottom"},b650:function(t,n,a){"use strict";var e=a("c31d"),o=a("2638"),i=a.n(o),s=a("d282"),c=a("ba31"),r=a("b1d2"),l=a("48f4"),d=a("ad06"),u=a("543e"),f=Object(s["a"])("button"),h=f[0],p=f[1];function g(t,n,a,e){var o,s=n.tag,f=n.icon,h=n.type,g=n.color,b=n.plain,m=n.disabled,v=n.loading,w=n.hairline,C=n.loadingText,y={};function O(t){v||m||(Object(c["a"])(e,"click",t),Object(l["a"])(e))}function B(t){Object(c["a"])(e,"touchstart",t)}g&&(y.color=b?g:r["f"],b||(y.background=g),-1!==g.indexOf("gradient")?y.border=0:y.borderColor=g);var x=[p([h,n.size,{plain:b,disabled:m,hairline:w,block:n.block,round:n.round,square:n.square}]),(o={},o[r["c"]]=w,o)];function S(){var e,o=[];return v?o.push(t(u["a"],{class:p("loading"),attrs:{size:n.loadingSize,type:n.loadingType,color:"currentColor"}})):f&&o.push(t(d["a"],{attrs:{name:f},class:p("icon")})),e=v?C:a.default?a.default():n.text,e&&o.push(t("span",{class:p("text")},[e])),o}return t(s,i()([{style:y,class:x,attrs:{type:n.nativeType,disabled:m},on:{click:O,touchstart:B}},Object(c["b"])(e)]),[S()])}g.props=Object(e["a"])({},l["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),n["a"]=h(g)}}]);
//# sourceMappingURL=chunk-3cc7f90e.0713dda4.js.map