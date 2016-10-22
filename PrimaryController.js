var app = angular.module("myFirstApp",[]);
app.controller("PrimaryController",function($scope){
	$scope.values=[
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
});