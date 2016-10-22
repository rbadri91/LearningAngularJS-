'use strict';

angular.module("myDetails").component("myDetails",{
	templateUrl: 'controller/primaryControllerPage.html',
	controller: function PrimaryController($http){
		var self= this;
		self.orderProp = 'age';

		$http.get('students/students.json').then(function(response) {
        	self.values = response.data;
      });
	}
});