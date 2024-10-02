(function(){"use strict";var t={6653:function(t,r,e){var n=e(9242),o=e(3396);const a={class:"page-wrap"};function s(t,r,e,n,s,i){const u=(0,o.up)("NavBar"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u,{user:s.user},null,8,["user"]),(0,o._)("div",a,[(0,o.Wm)(c,{user:s.user},null,8,["user"])])],64)}var i=e(9125);const u={class:"nav-bar"},c={class:"logo-wrap"},d=["src"],l={class:"nav-buttons-wrap"},p=(0,o._)("button",null,"Shopping Cart",-1);function m(t,r,e,n,a,s){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(i,{to:"/products",class:"products-link"},{default:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o._)("img",{src:a.logo},null,8,d)])])),_:1}),(0,o._)("div",l,[e.user?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.signOut&&s.signOut(...t))},"Sign Out")):(0,o.kq)("",!0),(0,o.Wm)(i,{to:"/cart"},{default:(0,o.w5)((()=>[p])),_:1})])])}var g=e.p+"img/logo-hexagon.d2768201.svg",f={name:"NavBar",props:["user"],data(){return{logo:g}},methods:{signOut(){const t=(0,i.v0)();(0,i.w7)(t)}}},h=e(89);const v=(0,h.Z)(f,[["render",m]]);var w=v,y={name:"App",components:{NavBar:w},data(){return{user:null}},created(){const t=(0,i.v0)();(0,i.Aj)(t,(t=>{this.user=t}))}};const b=(0,h.Z)(y,[["render",s]]);var I=b,k=e(2483);const _=(0,o._)("h1",null,"Shopping Cart",-1),C={key:0},S=(0,o._)("button",{class:"checkout-button"},"Proceed to Checkout",-1),D={key:1};function P(t,r,e,n,a,s){const i=(0,o.up)("ShoppingCartList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[_,a.cartItems.length>0?((0,o.wg)(),(0,o.iD)("div",C,[(0,o.Wm)(i,{onRemoveFromCart:r[0]||(r[0]=t=>s.removeFromCart(t)),products:a.cartItems},null,8,["products"]),S])):(0,o.kq)("",!0),0===a.cartItems.length?((0,o.wg)(),(0,o.iD)("div",D," You current have no items in your cart! ")):(0,o.kq)("",!0)],64)}var O=e(1076),Z=e(7139);const $=["src"],F={class:"details-wrap"},j=["onClick"];function z(t,r,e,n,a,s){return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.products,(r=>((0,o.wg)(),(0,o.iD)("div",{class:"product-container",key:r.id},[(0,o._)("img",{class:"product-image",src:r.imageUrl},null,8,$),(0,o._)("div",F,[(0,o._)("h3",null,(0,Z.zw)(r.name),1),(0,o._)("p",null,(0,Z.zw)(r.price),1)]),(0,o._)("button",{onClick:e=>t.$emit("remove-from-cart",r.id),class:"remove-button"},"Remove from Cart",8,j)])))),128)}var W={name:"ShoppingCartList",props:["products"]};const A=(0,h.Z)(W,[["render",z]]);var N=A,T={name:"ShoppingCartPage",props:["user"],components:{ShoppingCartList:N},data(){return{cartItems:[]}},watch:{async user(t){if(t){const r=await O.Z.get(`/api/users/${t.uid}/cart`),e=r.data;this.cartItems=e}}},methods:{async removeFromCart(t){const r=await O.Z["delete"](`/api/users/${this.user.uid}/cart/${t}`),e=r.data;this.cartItems=e}},async created(){if(this.user){const t=await O.Z.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const L=(0,h.Z)(T,[["render",P]]);var q=L;const x=(0,o._)("h1",null,"زيت زيتونة من عند الياس السبوعي جرب تحصل الكريدي لااا لااا لااا",-1);function B(t,r,e,n,a,s){const i=(0,o.up)("ProductsList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[x,(0,o.Wm)(i,{products:a.products},null,8,["products"])],64)}const H={class:"grid-wrap"},Y=["src"],M={class:"product-name"},K={class:"product-price"},R=(0,o._)("button",null,"View Details",-1);function U(t,r,e,n,a,s){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",H,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.products,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"product-item",key:t.id},[(0,o._)("img",{src:t.imageUrl},null,8,Y),(0,o._)("h3",M,(0,Z.zw)(t.name),1),(0,o._)("p",K,(0,Z.zw)(t.price),1),(0,o.Wm)(i,{to:"/products/"+t.id},{default:(0,o.w5)((()=>[R])),_:2},1032,["to"])])))),128))])}var J={name:"ProductsList",props:["products"]};const V=(0,h.Z)(J,[["render",U]]);var E=V,Q={name:"ProductsPage",components:{ProductsList:E},data(){return{products:[]}},async created(){const t=await O.Z.get("/api/products"),r=t.data;this.products=r}};const G=(0,h.Z)(Q,[["render",B]]);var X=G;const tt={key:0},rt={class:"img-wrap"},et=["src"],nt={class:"product-details"},ot={class:"price"},at={key:1,class:"grey-button"},st={key:1};function it(t,r,e,n,a,s){const i=(0,o.up)("NotFoundPage");return a.product?((0,o.wg)(),(0,o.iD)("div",tt,[(0,o._)("div",rt,[(0,o._)("img",{src:a.product.imageUrl},null,8,et)]),(0,o._)("div",nt,[(0,o._)("h1",null,(0,Z.zw)(a.product.name),1),(0,o._)("h3",ot,(0,Z.zw)(a.product.price),1),e.user&&!s.itemIsInCart?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.addToCart&&s.addToCart(...t)),class:"add-to-cart"},"Add to cart")):(0,o.kq)("",!0),e.user&&s.itemIsInCart?((0,o.wg)(),(0,o.iD)("button",at,"Item is already in cart")):(0,o.kq)("",!0),e.user?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:2,class:"sign-in",onClick:r[1]||(r[1]=(...t)=>s.signIn&&s.signIn(...t))},"Sign in to add to cart"))])])):((0,o.wg)(),(0,o.iD)("div",st,[(0,o.Wm)(i)]))}function ut(t,r,e,n,a,s){return(0,o.wg)(),(0,o.iD)("h1",null,"404: Page Not Found")}var ct={name:"NotFoundPage"};const dt=(0,h.Z)(ct,[["render",ut]]);var lt=dt,pt={name:"ProductDetailPage",props:["user"],data(){return{product:{},cartItems:[]}},components:{NotFoundPage:lt},watch:{async user(t){if(t){const r=await O.Z.get(`/api/users/${t.uid}/cart`),e=r.data;this.cartItems=e}}},computed:{itemIsInCart(){return this.cartItems.some((t=>t.id===this.$route.params.productId))}},methods:{async addToCart(){await O.Z.post(`/api/users/${this.user.uid}/cart`,{id:this.$route.params.productId}),alert("Successfully added item to cart!")},async signIn(){const t=prompt("Please enter your email to sign in:"),r=(0,i.v0)(),e={url:`https://oil-shop-deployment.onrender.com/products/${this.$route.params.productId}`,handleCodeInApp:!0};await(0,i.oo)(r,t,e),alert("A login link was sent to the email you provided"),window.localStorage.setItem("emailForSignIn",t)}},async created(){const t=(0,i.v0)();if((0,i.JB)(t,window.location.href)){const r=window.localStorage.getItem("emailForSignIn");await(0,i.P6)(t,r,window.location.href),alert("Successfully signed in!"),window.localStorage.removeItem("emailForSignIn")}const r=await O.Z.get(`/api/products/${this.$route.params.productId}`),e=r.data;if(this.product=e,this.user){const t=await O.Z.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const mt=(0,h.Z)(pt,[["render",it]]);var gt=mt,ft=e(7795);const ht={apiKey:"AIzaSyCFeWM-RkzczaJLh8B520sxSHANKjTAVlQ",authDomain:"vue-full-bf332.firebaseapp.com",projectId:"vue-full-bf332",storageBucket:"vue-full-bf332.appspot.com",messagingSenderId:"32222510034",appId:"1:32222510034:web:5f1681f81cc8ef4ae2660b"};(0,ft.ZF)(ht),(0,n.ri)(I).use(k.p7({history:k.PO("/"),routes:[{path:"/cart",component:q},{path:"/products",component:X},{path:"/products/:productId",component:gt},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)*",component:lt}]})).mount("#app")}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(r,n,o,a){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],a=t[d][2];for(var i=!0,u=0;u<n.length;u++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[u])}))?n.splice(u--,1):(i=!1,a<s&&(s=a));if(i){t.splice(d--,1);var c=o();void 0!==c&&(r=c)}}return r}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,o,a]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,n){var o,a,s=n[0],i=n[1],u=n[2],c=0;if(s.some((function(r){return 0!==t[r]}))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(u)var d=u(e)}for(r&&r(n);c<s.length;c++)a=s[c],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},n=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(6653)}));n=e.O(n)})();
//# sourceMappingURL=app.d14cfd8f.js.map