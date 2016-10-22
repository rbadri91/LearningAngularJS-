'use strict';

angular.module("myDetails").component("myDetails",{
	templateUrl: 'primaryControllerPage.html',
	controller: function PrimaryController(){
	this.values=[
	{
		Name:"Badrinath",
		University:"Stony Brook University",
		Degree:"Masters in Computer Engineering"
	},
	{
		Name:"Anon",
		University:"Some University",
		Degree:"Masters in Some Engineering"
	},
	{
		Name:"Anon 2",
		University:"Some other University",
		Degree:"Masters in Some Other Engineering"
	}
	];
	}
})