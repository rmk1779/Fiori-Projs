sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "demoapp/controller/BaseController",
    "../util/MyUtil",
    "../model/formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, BaseController, MyUtil, formatter, Filter, FilterOperator) {
		"use strict";

		return BaseController.extend("demoapp.controller.App", {
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
        },
        employeeListFactory: function(sId, oContext){
            let oUIControl;

            if(oContext.getProperty("name") === "Bob"){

               oUIControl = this.byId("idStandardList").clone(sId);
            }else{
                oUIControl = this.byId("idObjectList").clone(sId);
            }

            return oUIControl;

        },
        onBtnPress: function(oEvent){
            sap.m.MessageToast.show("clicked man!!!!");
            oEvent.getSource().setText("Ohh Clicked");
            let sBtnText = oEvent.getSource().getText();
            MyUtil.myFunc.call(this, sBtnText);
        }
		});
	});
