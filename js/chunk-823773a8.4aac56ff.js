(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-823773a8"],{"1f99":function(a,t,s){"use strict";s.r(t);var n,i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"goods"},[s("div",[s("ul",{staticClass:"cl"},[s("li",[s("router-link",{staticClass:"exact",attrs:{to:"/recommend"}},[s("span",[a._v("热门推荐")])])],1),s("li",[s("router-link",{attrs:{to:"/storage"}},[s("span",[a._v("存号箱")])])],1)])]),s("van-list",{staticClass:"van-clearfix",attrs:{finished:a.finished,"finished-text":"没有更多了"},on:{load:a.onLoad},model:{value:a.loading,callback:function(t){a.loading=t},expression:"loading"}},a._l(a.list,function(t){return s("van-cell",{key:t.pagAwardId},[s("router-link",{attrs:{to:"/gameDetail?id="+t.pagAwardId}},[s("img",{staticClass:"img-left",attrs:{src:t.icon}}),s("p",[s("span",[a._v(a._s(t.name))]),s("span",{staticClass:"gift"},[s("span",{staticClass:"count"},[a._v(a._s(t.amount))]),a._v(" 礼包\n          ")])])])],1)}),1)],1)},o=[],e=(s("ac6a"),s("bd86")),l=(s("c194"),s("7744")),c=(s("2994"),s("2bdd")),d=(s("204a"),s("bc3a")),r=s.n(d),u={components:(n={},Object(e["a"])(n,c["a"].name,c["a"]),Object(e["a"])(n,l["a"].name,l["a"]),n),data:function(){return{list:[],loading:!1,finished:!1,page:1}},methods:{onLoad:function(){var a=this;this.loading=!0,r.a.post("http://47.107.125.18/mssp_pps/maap/queryHotRecommendList.do",{activityId:190822080,page:this.page++,rows:5}).then(function(t){console.log("response",a.list),0==a.list.length?a.list=t.data.data.list:t.data.data.list.forEach(function(t,s,n){a.list.push(t)}),a.loading=!1,console.log("12",t.data.data.counts),a.list.length>=t.data.data.counts&&(a.finished=!0)}).catch(function(a){console.log(a)})}}},p=u,f=s("2877"),g=Object(f["a"])(p,i,o,!1,null,null,null);t["default"]=g.exports},"204a":function(a,t,s){}}]);
//# sourceMappingURL=chunk-823773a8.4aac56ff.js.map