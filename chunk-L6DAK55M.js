import{a as C}from"./chunk-LBD4UPKA.js";import{$a as y,Ia as g,Ka as f,La as h,Ma as w,Na as t,Oa as i,Pa as c,Qa as F,Ra as b,Sa as S,W as x,Wa as s,Xa as l,Ya as I,ab as _,ca as p,da as u,ta as o,ua as v,xb as E,yb as k}from"./chunk-JXEKC2NN.js";function T(n,e){if(n&1){let r=F();t(0,"div",5)(1,"div",6)(2,"button",7),b("click",function(){let m=p(r).$implicit,d=S();return u(d.removeItemFromFavorites(m))}),c(3,"i",8),i()(),t(4,"div",9)(5,"h3",10),s(6),i(),t(7,"span",11),s(8),i(),c(9,"br"),t(10,"span",11),s(11),i()()()}if(n&2){let r=e.$implicit;o(),g("background-image","url("+r.urlImg+")"),o(5),l(" ",r.title," "),o(2),l(" Tama\xF1o m\xEDnimo: ",r.tamMin," "),o(3),l(" Tama\xF1o m\xE1ximo: ",r.tamMax," ")}}var j=(()=>{let e=class e{constructor(a){this.itemsService=a,this.selectedItems$=this.itemsService.selectedItems$}removeItemFromFavorites(a){this.itemsService.removeItem(a)}};e.\u0275fac=function(m){return new(m||e)(v(C))},e.\u0275cmp=x({type:e,selectors:[["app-page-fav"]],standalone:!0,features:[I],decls:12,vars:2,consts:[[1,"max-w-screen-xl","mx-auto","p-g"],[1,"max-w-3xl","mx-auto","text-center","text-[10px]","sm:text-base"],[1,"text-blue-500"],[1,"text-2xl","sm:text-5xl","mb-5"],[1,"max-w-screen-xl","mx-auto","p-g","grid","lg:grid-cols-3","sm:grid-cols-2","gap-5"],[1,"w-full","sm:max-w-sm","max-w-xs","mx-auto","rounded-md","shadow-md","overflow-hidden"],[1,"flex","items-end","justify-end","h-56","w-full","bg-cover",2,"background-position","center"],[1,"w-9","h-9","rounded-md","bg-green-600","text-white","mx-5","-mb-4","hover:bg-green-500",3,"click"],[1,"fa","fa-heart","fa-lg"],[1,"px-5","py-3","bg-i"],[1,"text-gray-700","dark:text-white","text-md","sm:text-lg","font-semibold","uppercase"],[1,"dark:text-gray-300","text-gray-500","mt-2","text-[10px]","text-sm"]],template:function(m,d){m&1&&(t(0,"section")(1,"div",0)(2,"div",1)(3,"h2",2),s(4,"Fox-Tunning"),i(),t(5,"h1",3),s(6,"Tus Servicios Favoritos"),i()()()(),t(7,"section")(8,"div",4),h(9,T,12,5,"div",5,f),y(11,"async"),i()()),m&2&&(o(9),w(_(11,0,d.selectedItems$)))},dependencies:[k,E]});let n=e;return n})();export{j as default};