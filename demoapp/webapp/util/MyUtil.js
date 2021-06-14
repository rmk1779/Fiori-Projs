sap.ui.define([], function() {
   "use strict";

   return {
      myFunc: function(val) {
         // some code
        let oView = this.getView();
        console.log(oView);
         console.log("Hello Util :" + val);
         sap.m.MessageToast.show("Hey Util :" + val);
      }
   };
});