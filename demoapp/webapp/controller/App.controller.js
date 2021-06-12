sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, formatter, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("demoapp.controller.App", {
            formatter: formatter,
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
            
            },

            onFilterEmployees : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("idList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
        },
        onLiveChange: function(oEvent){
            // build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("newValue");
			if (sQuery) {
				aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("idList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
        }
		});
	});
