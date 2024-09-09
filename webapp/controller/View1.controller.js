sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project3.controller.View1", {
        onInit: function () {
            var c = window.prompt("Enter n:");
            for(var i=2;i<c;i++){
                var d=0;
                for(var j=2;j<i+1;j++){
                    if(i%j==0){
                        d++;
                    }
                }
                if(d==1){
                console.log(i)}
                }
                var z=[1,12,6,5,7,11,4]
                z.sort(function(a,b){
                    return a-b
                })
                console.log(z);
        },
        fact: function (n) {
            if (n<=1) {
                return 1;
            }
            return n * this.fact(n - 1);
        }     
    ,
        factor:function(){
        var z=this.getView().byId("inp").getValue();
        var p=parseInt(z);
        var f=this.fact(p);
        var res=this.getView().byId("val").setText(f);
        console.log(res);
    }
    });
});
