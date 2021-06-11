sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("demoapp.controller.App", {
			onInit: function () {
                  this.oRouter =  this.getOwnerComponent().getRouter();
            },
            onListPress: function(oEvent){
                debugger;
                let oEmpPath = oEvent.getSource().getBindingContext("empdata").getPath();
                console.log(oEmpPath);
                this.oRouter.navTo("DetailPage" , {
				empPath: window.encodeURIComponent(oEmpPath)
            });
            
            }
		});
	});
