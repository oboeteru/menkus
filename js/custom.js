var app = angular.module('menkus', ['ui.bootstrap']);

app.directive('oferta', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="oferta"></div>',
        link: function(scope) {
			scope.oferta = 'oferta.html';
		}
	};
});
app.directive('inzynieria', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="inzynieria"></div>',
        link: function(scope) {
			scope.inzynieria = 'inzynieria.html';
		}
	};
});
app.directive('onas', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="onas"></div>',
        link: function(scope) {
			scope.onas = 'onas.html';
		}
	};
});

