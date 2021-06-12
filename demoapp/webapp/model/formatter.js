sap.ui.define([], function () {
	"use strict";
	return {
		salaryStatus: function (sSalary) {
			if(sSalary > 25000){
                return "Higher Salary"
            }else{
                return "Less Salary"
            }
		}
	};
});