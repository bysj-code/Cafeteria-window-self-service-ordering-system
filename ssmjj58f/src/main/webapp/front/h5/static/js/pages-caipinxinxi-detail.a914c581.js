(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-caipinxinxi-detail"],{5206:function(t,e,r){"use strict";var i={"mescroll-uni":r("f05e").default,"uni-popup":r("1c89").default},o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption,bottom:100},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"container"},[r("v-uni-swiper",{staticClass:"swiper",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255,255,255,1)",borderRadius:"40rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"},attrs:{"indicator-dots":!0,autoplay:t.autoplaySwiper,circular:!0,"indicator-active-color":"rgba(255, 148, 77, 1)","indicator-color":"rgba(0, 0, 0, .3)",duration:1e3,interval:t.intervalSwiper,vertical:!1}},t._l(t.swiperList,(function(e,i){return r("v-uni-swiper-item",{key:i,style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255,255,255,1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"}},[r("v-uni-image",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255,255,255,1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"},attrs:{mode:"aspectFill",src:t.baseUrl+e}})],1)})),1),r("v-uni-view",{staticClass:"detail-content"},[r("v-uni-view",{staticClass:"price detail-list-item priceFavor",style:{padding:"8rpx 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"text",style:{padding:"20rpx 0 12rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(255, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"70%",lineHeight:"72rpx",fontSize:"72rpx",borderStyle:"solid"}},[r("v-uni-text",{staticStyle:{"line-height":"1"},style:{fontSize:"22rpx"}},[t._v("￥")]),t._v(t._s(Number(t.detail.price).toFixed(2)))],1),r("v-uni-view",{staticClass:"text icon",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(255, 148, 77, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"30%",lineHeight:"72rpx",fontSize:"64rpx",borderStyle:"solid"}},[1==t.storeupFlag?r("v-uni-view",{staticClass:"cuIcon-favorfill",staticStyle:{"line-height":"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shoucang.apply(void 0,arguments)}}}):t._e(),0==t.storeupFlag?r("v-uni-view",{staticClass:"cuIcon-favor",staticStyle:{"line-height":"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shoucang.apply(void 0,arguments)}}}):t._e()],1)],1),r("v-uni-view",{staticClass:"name shop-title",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",color:"#000",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"60rpx",fontSize:"32rpx",borderStyle:"solid"}},[t._v("菜品名称："+t._s(t.detail.caipinmingcheng))]),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"8rpx 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("菜品编号：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.caipinbianhao))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"8rpx 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("店铺信息：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.dianpuxinxi))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"8rpx 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("菜品分类：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.caipinfenlei))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"8rpx 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("口味：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.kouwei))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"8rpx 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("份量：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.fenliang))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"8rpx 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("上架日期：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.shangjiariqi))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"8rpx 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("商家账号：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.shangjiazhanghao))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"8rpx 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("商家姓名：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.shangjiaxingming))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"8rpx 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("库存：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.alllimittimes))])],1)],1),r("v-uni-view",{staticClass:"time-content",staticStyle:{height:"auto !important"},style:{padding:"16rpx 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"header",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",borderRadius:"0",color:"#333",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("菜品介绍")]),r("v-uni-view",{staticClass:"content",style:{padding:"24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"8rpx",color:"#333",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-rich-text",{staticStyle:{"font-size":"33upx","line-height":"50upx","letter-spacing":"5upx"},attrs:{nodes:t.detail.caipinjieshao}})],1)],1),r("v-uni-view",{staticClass:"time-content",style:{padding:"24rpx 0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0 0 20rpx 0",borderColor:"red",backgroundColor:"rgba(252, 252, 252, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"comoment-header",style:{padding:"0 24rpx",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0 0 20rpx",borderColor:"rgba(0,0,0,.2)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"0",color:"#333",borderWidth:"0",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("评论")]),r("v-uni-view",{staticClass:"btn-comment-content",staticStyle:{display:"flex","align-items":"center"},style:{padding:"0 24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"red",backgroundColor:"rgba(255, 148, 77, 1)",color:"rgba(255, 255, 255, 1)",isBtn:!0,borderRadius:"16rpx",borderWidth:"0",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCommentTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"cuIcon-add"}),t._v("添加评论")],1)],1),r("v-uni-view",{staticClass:"cu-list comment",staticStyle:{"margin-top":"20upx"}},t._l(t.commentList,(function(e,i){return r("v-uni-view",{key:i,staticClass:"cu-item comment-item",style:{padding:"16rpx 24rpx",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0 0 20rpx",borderColor:"rgba(0,0,0,.2)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"dashed",height:"auto"}},[r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{staticClass:"text-grey",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(e.nickname))]),r("v-uni-view",{staticClass:"text-gray text-content text-df content",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(164, 164, 164, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"32rpx",fontSize:"24rpx",borderStyle:"solid"}},[t._v(t._s(e.content))]),r("v-uni-view",{staticClass:"margin-top-sm text-gray text-df",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"16rpx 0 0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(164, 164, 164, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"auto",fontSize:"24rpx",borderStyle:"solid"}},[t._v(t._s(e.addtime))]),e.reply?r("v-uni-view",{staticClass:"text-gray text-content text-df content",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(164, 164, 164, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"32rpx",fontSize:"24rpx",borderStyle:"solid"}},[t._v("回复:"+t._s(e.reply))]):t._e()],1)],1)})),1)],1),r("v-uni-view",{staticClass:"bottom-content cu-bar bg-white tabbar border shop",style:{padding:"0px",boxShadow:"rgb(0 0 0 / 0%) 0px 0px 12rpx",margin:"0px",borderColor:"rgb(204, 204, 204)",backgroundColor:"rgb(255, 255, 255)",borderRadius:"0px",borderWidth:"2rpx 0 0 0",width:"100%",borderStyle:"solid",height:"100rpx"}},[r("v-uni-view",{staticStyle:{"text-align":"left",display:"flex"}}),r("v-uni-view",{staticStyle:{"text-align":"right"}},[t.detail.alllimittimes>0?r("v-uni-button",{staticClass:"cu-btn bg-orange round shadow-blur",staticStyle:{"margin-right":"10upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[2],borderColor:t.btnColor[2]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCartTap.apply(void 0,arguments)}}},[t._v("加入购物车")]):t._e(),t.detail.alllimittimes>0?r("v-uni-button",{staticClass:"cu-btn bg-red round shadow-blur",staticStyle:{"margin-right":"10upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[3],borderColor:t.btnColor[3]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onBuyTap.apply(void 0,arguments)}}},[t._v("立即订购")]):t._e()],1)],1)],1),r("uni-popup",{ref:"popup",staticClass:"popup-content",attrs:{type:"center"}},[r("v-uni-form",{staticClass:"popup-form"},[r("v-uni-view",{staticClass:"cu-form-group margin-top"},[r("v-uni-picker",{attrs:{value:t.sfshIndex,range:t.sfshOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sfshChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.detail.sfsh?t.detail.sfsh:"选择审核结果"))])],1)],1),r("v-uni-view",{staticClass:"cu-form-group"},[r("v-uni-textarea",{staticStyle:{width:"200px"},attrs:{placeholder:"审核回复"},model:{value:t.detail.shhf,callback:function(e){t.$set(t.detail,"shhf",e)},expression:"detail.shhf"}})],1),r("v-uni-view",{staticClass:"btn-content"},[r("v-uni-button",{staticClass:"cu-btn bg-cyan",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCloseWinTap.apply(void 0,arguments)}}},[t._v("取消")]),r("v-uni-button",{staticClass:"cu-btn bg-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onFinishTap.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)],1)},a=[];r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return i}))},"69e7":function(t,e,r){"use strict";var i=r("df26"),o=r.n(i);o.a},"7cc8":function(t,e,r){"use strict";r.r(e);var i=r("cf09"),o=r.n(i);for(var a in i)"default"!==a&&function(t){r.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},b692:function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-526de5be]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.swiper[data-v-526de5be]{width:100%;height:%?450?%}.swiper uni-image[data-v-526de5be]{width:100%}.detail-content[data-v-526de5be]{font-size:%?28?%;color:#888;background:#fff;line-height:%?45?%}.detail-content .name[data-v-526de5be]{font-size:%?38?%;font-weight:blod;padding-top:%?20?%}.detail-content .price[data-v-526de5be]{font-size:%?33?%;color:red}.time-content[data-v-526de5be]{background:#fff;padding:%?30?%;font-size:%?30?%;border-radius:%?20?%;margin-top:%?20?%}.time-content .header[data-v-526de5be]{font-size:%?33?%;margin-bottom:%?20?%}.bottom-content[data-v-526de5be]{position:fixed;bottom:0;left:0;width:100%}.bottom-content uni-button[data-v-526de5be]{margin:0 0 0 %?20?%!important;padding:0 %?20?%;box-shadow:0 0 %?12?% transparent}.comoment-header[data-v-526de5be]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?12?%}.comoment-header .btn-comment-content[data-v-526de5be]{color:#dd514c;font-weight:700;padding:0 %?12?%}.comment-item[data-v-526de5be]{margin-bottom:%?10?%;border-bottom:1px solid #eee;padding-bottom:%?20?%}.comment-item .content[data-v-526de5be]{margin-left:%?20?%;margin-top:%?20?%}.icon[data-v-526de5be]{width:%?50?%;height:%?50?%}.popup-content .popup-form[data-v-526de5be]{background:#fff;margin-top:%?20?%}.popup-content .btn-content[data-v-526de5be]{text-align:right;background:#fff}.popup-content .btn-content uni-button[data-v-526de5be]{margin-left:%?20?%;margin-right:%?20?%;margin-bottom:%?20?%}.detail-list-item[data-v-526de5be]{padding:0 %?24?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?68?%;border-bottom:%?2?% solid #efefef;background-color:#fff}.detail-list-item .lable[data-v-526de5be]{font-size:%?28?%;color:#000}.detail-list-item .text[data-v-526de5be]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%;color:#f0f;text-align:left}.detail-list-item.favor .el-icon-star-on[data-v-526de5be]{color:inherit;font-size:inherit}.detail-content .shop-title[data-v-526de5be]{padding:%?20?% %?24?%;box-sizing:border-box;line-height:1.4}',""]),t.exports=e},cf09:function(t,e,r){"use strict";var i=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("a481"),r("28a5"),r("f559"),r("55dd"),r("96cf");var o=i(r("3b8d")),a={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id,e.userid&&(this.userid=e.userid);case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e){var r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),r=uni.getStorageSync("nowTable"),t.next=4,this.$api.session(r);case 4:i=t.sent,this.user=i.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup(),o=uni.getStorageSync("discusscaipinxinxiCleanType"),o&&(uni.removeStorageSync("discusscaipinxinxiCleanType"),this.mescroll.num=1,this.upCallback(this.mescroll));case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","caipinxinxi"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:1,limit:1,refid:this.id,tablename:"caipinxinxi",userid:this.user.id,type:1},t.next=3,this.$api.list("storeup",e);case 3:r=t.sent,this.storeupFlag=r.data.list.length;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),shoucang:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){var e,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,r={page:1,limit:1,refid:e.detail.id,tablename:"caipinxinxi",userid:e.user.id,type:1},t.next=4,e.$api.list("storeup",r);case 4:if(i=t.sent,1!=i.data.list.length){t.next=9;break}return a=i.data.list[0].id,uni.showModal({title:"提示",content:"是否取消",success:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.confirm){t.next=5;break}return t.next=3,e.$api.del("storeup",JSON.stringify([a]));case 3:e.$utils.msg("取消成功"),e.getStoreup();case 5:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()}),t.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否收藏",success:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.confirm){t.next=5;break}return t.next=3,e.$api.add("storeup",{userid:e.user.id,name:e.detail.caipinmingcheng,picture:e.swiperList[0],refid:e.detail.id,tablename:"caipinxinxi",type:1});case 3:e.$utils.msg("收藏成功"),e.getStoreup();case 5:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()});case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onAcrossTap:function(t,e,r,i,o){if(uni.setStorageSync("crossTable","caipinxinxi"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",r),uni.setStorageSync("statusColumnValue",o),uni.setStorageSync("tips",i),""!=r&&!r.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var n in a)if(n==r&&a[n]==o)return void this.$utils.msg(i)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("caipinxinxi",this.id);case 2:e=t.sent,this.detail=e.data,this.swiperList=this.detail.tupian?this.detail.tupian.split(","):[],this.detail.caipinjieshao=this.detail.caipinjieshao.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("discusscaipinxinxi",{page:e.num,limit:10,refid:this.id});case 2:r=t.sent,1==e.num&&(this.commentList=[]),this.commentList=this.commentList.concat(r.data.list),0==r.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onCartTap:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!uni.getStorageSync("cart".concat(this.detail.id).concat(this.user.id))){t.next=3;break}return this.$utils.msg("该商品已添加到购物车"),t.abrupt("return");case 3:return t.next=5,this.$api.add("cart",{tablename:"caipinxinxi",goodid:this.detail.id,goodname:this.detail.caipinmingcheng,shangjiazhanghao:this.detail.shangjiazhanghao,picture:this.swiperList[0],buynumber:1,userid:this.user.id,price:this.detail.price,discountprice:this.detail.vipprice});case 5:uni.setStorageSync("cart".concat(this.detail.id).concat(this.user.id),!0),this.$utils.msg("添加到购物车成功");case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onBuyTap:function(){uni.setStorageSync("orderGoods",[{tablename:"caipinxinxi",goodid:this.detail.id,goodname:this.detail.caipinmingcheng,shangjiazhanghao:this.detail.shangjiazhanghao,picture:this.swiperList[0],buynumber:1,price:this.detail.price,discountprice:this.detail.vipprice}]),this.$utils.jump("../shop-order-confirm/shop-order-confirm?type=1")},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var e=this;t=e.$base.url+t,uni.downloadFile({url:t,success:function(r){200===r.statusCode&&(e.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:1,limit:1,status:"已完成",goodid:this.detail.id},t.next=3,this.$api.page("orders",e);case 3:if(r=t.sent,0!=r.data.list.length){t.next=7;break}return this.$utils.msg("请完成订单后再评论"),t.abrupt("return");case 7:this.$utils.jump("../discusscaipinxinxi/add-or-update?refid=".concat(this.id));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),t.next=10,this.$api.update("caipinxinxi",this.detail);case 10:this.$utils.msg("审核成功"),this.$refs.popup.close();case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=a},dd7a:function(t,e,r){"use strict";r.r(e);var i=r("5206"),o=r("7cc8");for(var a in o)"default"!==a&&function(t){r.d(e,t,(function(){return o[t]}))}(a);r("69e7");var n,d=r("f0c5"),s=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"526de5be",null,!1,i["a"],n);e["default"]=s.exports},df26:function(t,e,r){var i=r("b692");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=r("4f06").default;o("5e155242",i,!0,{sourceMap:!1,shadowMode:!1})}}]);