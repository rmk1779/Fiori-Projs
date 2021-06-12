sap.ui.define([
	"demoapp/model/formatter"
], function (formatter) {
    "use strict";
    

	QUnit.module("Salary State");

	function salaryStateTestCase(oOptions) {
		// Act
		var sState = formatter.salaryStatus(oOptions.salary);

		// Assert
		oOptions.assert.strictEqual(sState, oOptions.expected, "The Salary State Format correct");
	}

	QUnit.test("Should format the Employees Salary Status", function (assert) {
        
        salaryStateTestCase.call(this, {assert: assert, salary: 20000, expected: "Less Salary"});
        salaryStateTestCase.call(this, {assert: assert, salary: 30000, expected: "Higher Salary"});
    
	});

	// QUnit.test("Should format the Employees with a salary higher than 25000 to Higher Salary", function (assert) {
        
    //     salaryStateTestCase.call(this, {assert: assert, salary: 30000, expected: "Higher Salary"});
	// });

});