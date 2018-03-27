twitterApp.controller('twitterAppController', function ($scope, $location,$http,$window) {


$scope.showSearch = true;
$scope.showResults = false;


$scope.find = function(){

$scope.showSearch = false;
$scope.showResults = true;
$(".contenedor").css("background","white");
$(".contenedor").css("height","auto");


$scope.filtro = $scope.word.toLowerCase(); 



$location.path("/twitterResults"); 

$location.search({s: $scope.filtro});
	
};

});



twitterApp.controller('resultsController', function ($scope, $location,$http,$window) {

$(".contenedor").css("background","white")
$scope.url = window.location.toString();

$scope.index = $scope.url.indexOf("=");

$scope.cut = $scope.url.substring($scope.index + 1) ;





$scope.twitters= [

{
	name: "Carlos",
	user: "@Carlos435",
	date:"22 mar",
	icon: "img/vader.jpg",
	text:"Hello everyone, watch the new Star Wars movie",
	photo:"",


},

{
	name: "Natalia",
	user: "@Natalia1993",	
	fecha:"22 mar",
	icon: "img/rolling.jpg",
	text:"The best band of all time",
	photo:"img/stones.jpg",


},



{
	name: "Pablo",
	user:"@Pablo22",
	date:"22 mar",
	icon: "img/yoda.jpg",
	text:"The new Star Wars movie SUCKS!!!",
	photo:"",
},
{
	name: "Luciana",
	user: "@Luciana14",
	date:"22 mar",
	icon: "img/guitar.jpg",
	text: "Hello everyone, what a nice day",
	photo:"",
},
{
	name: "Marcos",
	user: "@Marcos1984",
	date:"22 mar",
	icon: "img/chewie.jpg",
	text:"I love the new Star Wars movie!",
	photo:"",
},

{
	name: "Camila",
	user: "@Camila98",
	date:"22 mar",
	icon: "img/patricio.jpg",
	text:"Eating a delicious hamburguer",
	photo:"img/hamburguer.jpg",

},
{
	name: "Paula",
	user: "@Paula21",
	date:"22 mar",
	icon: "img/ojo.jpg",
	text: "I'm going to watch a movie and go to sleep",
	photo:"",
},




];


$scope.data = $scope.twitters.filter(function(item){


	$scope.min = item["text"].toLowerCase()

		if ($scope.min.includes($scope.cut) === true){

				return true;
			}
			
			else{
				return false;
			}
		})



var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.info('Accion:', e.action);
    console.info('Texto:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Accion:', e.action);
    console.error('Trigger:', e.trigger);
});

$scope.copy = function(){

	alert("The url was copied to the clipboard");
}


$scope.goBack = function(){

	$location.path("/");
}


});

