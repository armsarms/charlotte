(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc0dd5a2"],{1131:function(t,a,n){},"1f99":function(t,a,n){"use strict";n.r(a);var i,s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"goods"},[n("div",[n("ul",{staticClass:"cl"},[n("li",{staticClass:"menu_select"},[n("router-link",{staticClass:"exact",attrs:{to:"/recommend"}},[t._v("热门推荐")])],1),n("li",[n("router-link",{attrs:{to:"/storage"}},[t._v("存号箱")])],1)])]),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.list,function(t){return n("van-cell",{key:t.dt,attrs:{title:t.tab_name}})}),1)],1)},e=[],l=(n("ac6a"),n("bd86")),o=(n("c194"),n("7744")),c=(n("2994"),n("2bdd")),d=n("bc3a"),r=n.n(d),u={components:(i={},Object(l["a"])(i,c["a"].name,c["a"]),Object(l["a"])(i,o["a"].name,o["a"]),i),data:function(){return{list:[],loading:!1,finished:!1}},methods:{onLoad:function(){var t=this;this.loading=!0,r.a.post("http://10.153.80.18:10003/deploy_auto_war/api/login/sure",{params:this.list.length}).then(function(a){console.log("response",t.list),0==t.list.length?t.list=a.data.data:a.data.data.forEach(function(a,n,i){t.list.push(a)}),t.loading=!1,t.list.length>=40&&(t.finished=!0)}).catch(function(t){console.log(t)})}}},f=u,h=(n("bdcd"),n("2877")),p=Object(h["a"])(f,s,e,!1,null,null,null);a["default"]=p.exports},bdcd:function(t,a,n){"use strict";var i=n("1131"),s=n.n(i);s.a}}]);
//# sourceMappingURL=chunk-cc0dd5a2.1706b5cc.js.map