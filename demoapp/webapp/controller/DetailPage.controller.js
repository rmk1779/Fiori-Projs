sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, History) {
		"use strict";

		return Controller.extend("demoapp.controller.App", {
			onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.getRoute("DetailPage").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
            console.log(oEvent.getParameter("arguments").empPath);
			this.getView().bindElement({
				path: window.decodeURIComponent(oEvent.getParameter("arguments").empPath),
				model: "empdata"
			});
		},

            onNavPress: function(oEvent){
                var oHistory = History.getInstance();
			    var sPreviousHash = oHistory.getPreviousHash();

                    if (sPreviousHash !== undefined) {
                        window.history.go(-1);
                    } else {
                        this.oRouter.navTo("RouteApp", {}, true);
                    }
            }
		});
	});
