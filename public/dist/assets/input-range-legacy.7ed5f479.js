!function(){function e(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}System.register([],(function(t){"use strict";return{execute:function(){class s extends HTMLElement{constructor(){super(),e(this,"_slider",void 0),e(this,"_rangeMarker",void 0),e(this,"_activeClass","is-active"),e(this,"handleRangeInput",(()=>{this._rangeMarker.classList.add(this._activeClass);const[e,t,s]=this.getRangeValues();this.updateRangeMarker(e,t,s)})),e(this,"handleRangeChange",(()=>{this._rangeMarker.classList.remove(this._activeClass)})),this._slider=this.querySelector('input[type="range"]'),this._rangeMarker=this.querySelector("#range-marker")}connectedCallback(){const[e,t,s]=this.getRangeValues();this.updateRangeMarker(e,t,s),this._slider.addEventListener("input",this.handleRangeInput),this._slider.addEventListener("change",this.handleRangeChange)}updateRangeMarker(e,t,s){this.querySelector("#value").innerHTML=this._slider.value;const a=Number(100*(e-t)/(s-t)),r=10-.2*a;this._rangeMarker.style.left=`calc(${a}% + (${r}px))`}getRangeValues(){return[parseInt(this._slider.value),parseInt(this._slider.min),parseInt(this._slider.max)]}}t("default",s)}}}))}();