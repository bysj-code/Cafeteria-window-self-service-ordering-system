(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order-confirm/shop-order-confirm"],{"21b3":function(e,r,t){"use strict";var o=t("3d96"),a=t.n(o);a.a},"3d96":function(e,r,t){},5556:function(e,r,t){"use strict";t.r(r);var o=t("6205"),a=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(r,e,(function(){return o[e]}))}(n);r["default"]=a.a},"5a92":function(e,r,t){"use strict";var o;t.d(r,"b",(function(){return a})),t.d(r,"c",(function(){return n})),t.d(r,"a",(function(){return o}));var a=function(){var e=this,r=e.$createElement;e._self._c},n=[]},6205:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function n(e,r,t,o,a,n,s){try{var d=e[n](s),u=d.value}catch(i){return void t(i)}d.done?r(u):Promise.resolve(u).then(o,a)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(o,a){var s=e.apply(r,t);function d(e){n(s,o,a,d,u,"next",e)}function u(e){n(s,o,a,d,u,"throw",e)}d(void 0)}))}}var d={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(r){var t=this;return s(o.default.mark((function a(){var n;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(t.type=r.type,t.seat=r.seat,t.orderGoods=e.getStorageSync("orderGoods"),1!=t.seat)for(n=0;n<t.orderGoods.length;n++)0==t.total?t.total=parseFloat(t.orderGoods[n].price)*t.orderGoods[n].buynumber:t.total=parseFloat(t.total)+parseFloat(t.orderGoods[n].price)*t.orderGoods[n].buynumber;else t.total=parseFloat(t.orderGoods[0].total),t.address=t.orderGoods[0].address;t.total=t.total.toFixed(2);case 5:case"end":return o.stop()}}),a)})))()},onShow:function(){var r=this;return s(o.default.mark((function t(){var a,n,s;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,r.$api.session(a);case 3:if(n=t.sent,r.user=n.data,1==r.seat){t.next=15;break}if(s=e.getStorageSync("address"),!s||r.user.id!=s.userid){t.next=11;break}r.address=e.getStorageSync("address"),t.next=15;break;case 11:return t.next=13,r.$api.defaultAddress(r.user.id);case 13:n=t.sent,r.address=n.data;case 15:case"end":return t.stop()}}),t)})))()},methods:{onSubmitTap:function(){var r=this;return s(o.default.mark((function t(){var a,n;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=r,n=e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否确认支付",success:function(){var r=s(o.default.mark((function r(t){var s,d,u,i,c,l,f;return o.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t.confirm){r.next=59;break}if(s=a.type,d=!0,u="已支付",1!=s){r.next=8;break}a.user.money-a.total<0&&(a.$utils.msg("余额不足，请先充值"),d=!1,u="未支付"),r.next=13;break;case 8:if(2!=s){r.next=13;break}if(!(a.user.jf-a.total<0)){r.next=13;break}return a.$utils.msg("积分不足，兑换商品失败"),d=!1,r.abrupt("return");case 13:i=0;case 14:if(!(i<a.orderGoods.length)){r.next=45;break}if("caipinxinxi"!=a.orderGoods[i].tablename){r.next=34;break}return r.next=18,a.$api.info("caipinxinxi",a.orderGoods[i].goodid);case 18:if(c=r.sent,!(c.data.onelimittimes>0)){r.next=24;break}if(!(a.orderGoods[i].buynumber>c.data.onelimittimes)){r.next=24;break}return a.$utils.msg("".concat(a.orderGoods[i].goodname,"超过可购买数量")),d=!1,r.abrupt("break",45);case 24:if(!(c.data.alllimittimes<a.orderGoods[i].buynumber)){r.next=30;break}return a.$utils.msg("".concat(a.orderGoods[i].goodname,"已售罄")),d=!1,r.abrupt("break",45);case 30:if(1!=a.seat?c.data.alllimittimes=c.data.alllimittimes-a.orderGoods[i].buynumber:c.data.selected=c.data.selected+","+a.orderGoods[i].activeSeat,!d){r.next=34;break}return r.next=34,a.$api.update("caipinxinxi",c.data);case 34:return l={orderid:a.$utils.genTradeNo(),tablename:a.orderGoods[i].tablename,userid:a.user.id,goodid:a.orderGoods[i].goodid,goodname:a.orderGoods[i].goodname,picture:a.orderGoods[i].picture,buynumber:a.orderGoods[i].buynumber,discountprice:a.orderGoods[i].price,price:a.orderGoods[i].price,total:a.orderGoods[i].price*a.orderGoods[i].buynumber,discounttotal:a.orderGoods[i].price*a.orderGoods[i].buynumber,type:s,shangjiazhanghao:a.orderGoods[i].shangjiazhanghao,status:u},1==a.seat&&(l["address"]=a.address,f=a.address.split(",").length,l["buynumber"]=f,l["total"]=a.orderGoods[i].price*f,l["discounttotal"]=a.orderGoods[i].price*f),r.next=38,a.$api.add("orders",l);case 38:if(!a.orderGoods[i].id){r.next=42;break}return r.next=41,a.$api.del("cart",JSON.stringify([a.orderGoods[i].id]));case 41:e.removeStorageSync("cart".concat(a.orderGoods[i].goodid).concat(a.user.id));case 42:i++,r.next=14;break;case 45:if(!d){r.next=59;break}if(1!=s){r.next=54;break}return a.$utils.msgBack("支付成功"),a.user.money=a.user.money-a.total,(a.user.jf||0==a.user.jf)&&(a.user.jf=parseFloat(a.user.jf)+parseFloat(a.total)),r.next=52,a.$api.update(n,a.user);case 52:r.next=59;break;case 54:if(2!=s){r.next=59;break}return a.$utils.msgBack("兑换成功"),a.user.jf=a.user.jf-a.total,r.next=59,a.$api.update(n,a.user);case 59:case"end":return r.stop()}}),r)})));function t(e){return r.apply(this,arguments)}return t}()});case 3:case"end":return t.stop()}}),t)})))()},onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};r.default=d}).call(this,t("543d")["default"])},"7dba":function(e,r,t){"use strict";(function(e){t("f7ee");o(t("66fd"));var r=o(t("cb05"));function o(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,t("543d")["createPage"])},cb05:function(e,r,t){"use strict";t.r(r);var o=t("5a92"),a=t("5556");for(var n in a)"default"!==n&&function(e){t.d(r,e,(function(){return a[e]}))}(n);t("21b3");var s,d=t("f0c5"),u=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);r["default"]=u.exports}},[["7dba","common/runtime","common/vendor"]]]);