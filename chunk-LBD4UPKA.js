import{L as a,i as c}from"./chunk-JXEKC2NN.js";var n=(()=>{let t=class t{constructor(){this.selectedItemsSource=new c(this.loadItemsFromLocalStorage()),this.selectedItems$=this.selectedItemsSource.asObservable()}loadItemsFromLocalStorage(){let e=localStorage.getItem("selectedItems");return e?JSON.parse(e):[]}saveItemsToLocalStorage(e){localStorage.setItem("selectedItems",JSON.stringify(e))}addItem(e){let o=this.selectedItemsSource.value;if(!o.some(s=>s.id===e.id)){let s=[...o,e];this.selectedItemsSource.next(s),this.saveItemsToLocalStorage(s)}}removeItem(e){let s=this.selectedItemsSource.value.filter(m=>m.id!==e.id);this.selectedItemsSource.next(s),this.saveItemsToLocalStorage(s)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{n as a};
