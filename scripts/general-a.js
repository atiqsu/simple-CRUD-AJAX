var simpleCRUD = angular.module('simpleCRUD', []);

simpleCRUD.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'NavCtrl',
				templateUrl: '../partials/home.php'
			})
		.when('/submit',
			{
				controller: 'SubmitCtrl',
				templateUrl: '../partials/submit.html'
			})
		.when('/results',
			{
				controller: 'MainController',
				templateUrl: '../partials/results.html'
			})
		.otherwise({ redirectTo: '/'});
});

simpleCRUD.factory('submitOptions', function () {
	var factory = {};
	var options = ['<option value="test1">test1</option>', '<option value="test2">test2</option>', '<option value="test3">test3</option>'];
	factory.getSubmitOptions = function () {
		return options;
	};
	return factory;
});

simpleCRUD.controller('NavCtrl', function ($scope) {

});

simpleCRUD.controller('SubmitCtrl', function ($scope, $http, submitOptions) {
	// $scope.getSubmits = submitOptions.getSubmitOptions();
	
	$http({
		method: 'GET',
		url: '../scripts/get-types.php'
	})
	.success(function (data, status, headers, config) {
		$scope.getSubmits = data;
  	})
  	.error(function (data, status, headers, config) {
  		console.log('ajax error');    
  	});

  	$scope.checkSubmits = function () {
  		console.log('checksubmits fired');
  	};
});



// var startTime, endTime;

jQuery(document).ready(function($) {
	var filter;

// 	$.ajax({
// 		type: 'GET',
// 		dataType: 'json',
// 		url: '../scripts/get-types.php',
// 		success: function (data) {
// 			var types = data,
// 				$typesSelect = $('select.type-select');
// 			for (i = 0; i < types.length; i++) {
// 				$typesSelect.append('<option value="' + types[i] + '">' + types[i] + '</option>');
// 			}
// 		},
// 		error: function (xhr, textStatus, errorThrown) {
// 			console.log(xhr);
// 			console.log(textStatus);
// 			console.log(errorThrown);
// 		}
// 	});
	
	$('body').on('click', '#submit-nav', function(event) {
		event.preventDefault();
		$(this).addClass('nav-active').next().fadeOut(500, function () {
			$('section#submit').fadeIn(500);
		});
	});

	$('body').on('click', 'h2#results-nav', function(event) {
		$(this).addClass('nav-active').prev().fadeOut(500, function () {
			$('section#results').fadeIn(500);
		});
	});

// 	$('div.submit-header > button').on('click', function() {
// 		var $this = $(this);
// 		$('.submit-header > p, select[name="type"], div.submit-header > button').fadeOut(500, function () {
// 			$this.next().fadeIn(500);
// 		});
// 	});

// 	$('.submit-header > select, .submit-header input').on('change', function() {
// 		if (($('select[name="type"]').val() !== "blank" 
// 			|| $('.submit-header:first-child > input').val() !== "") 
// 			&& $('.submit-header:nth-child(2) > input').val() !== "" 
// 			&& ($('.submit-header:nth-child(3) > select').val() !== "blank" 
// 			|| $('.submit-header:nth-child(4) > select').val() !== "blank")) {
// 			$('#submit-button').removeAttr('disabled').addClass('submit-button-active');
// 		} else if ($('#submit-button').hasClass('submit-button-active')) {
// 			$('#submit-button').attr('disabled', true).removeClass('submit-button-active');
// 		}
// 	});

// 	$('#submit-button').on('click', function() {
// 		var postdata = {
// 			type: $('.submit-header:first-child > input').val() || $('select[name="type"]').val(),
// 			name: $('.submit-header:nth-child(2) > input').val(),
// 			cozrating: $('.submit-header:nth-child(3) > select').val() || "blank",
// 			stinerating: $('.submit-header:nth-child(4) > select').val() || "blank",
// 		};
// 		$.ajax({
// 			type: "POST",
// 			url: '../scripts/post-data.php',
// 			data: postdata,
// 			dataType: 'text',
// 			timeout: 8000,
// 			error: function () {
// 				console.log('error in posting');
// 			},
// 			success: function(data) {
// 				$('p#submit-text').html(data).fadeIn(500).delay(2000).fadeOut(500);
// 				$('.submit-header:first-child > input').val('');
// 				$('select[name="type"]').val('blank');
// 				$('.submit-header:nth-child(2) > input').val('');
// 				$('.submit-header:nth-child(3) > select').val('blank');
// 				$('.submit-header:nth-child(4) > select').val('blank');
// 				$('#submit-button').attr('disabled', true).removeClass('submit-button-active');
// 				if ($('.submit-header:first-child > input').val()) {
// 					$('select.type-select').append('<option value="' + $('.submit-header:first-child > input').val() + '">' + $('.submit-header:first-child > input').val() + '</option>')
// 				}
// 			}
// 		});
// 	});

// 	$('#retrieve-button').on('click', function() {
// 		startTime = Date.now();
// 		var filterdata = {
// 			filter: $('#type-filter').val()
// 		};

// 		if ($('table')) {
// 			$('table').remove();
// 		}
// 		$('section#results').append('<table><thead><tr><td>Type:</td><td>Name:</td><td>Chris Rating:</td><td>Stine Rating:</td><td>Average:</td><td>Edit</td></tr></thead></table>');
// 		$.ajax({
// 			url: '../scripts/get-data.php',
// 			type: 'POST',
// 			dataType: 'json',
// 			data: filterdata,
// 			success: function(data) {
// 				populateTable(data);
// 				$('table').fadeIn(500);
// 		 	},
// 			error: function(xhr, textStatus, errorThrown) {
// 				console.log('ajax error');
// 			}
// 		});
// 	});

// 	$('#submit div.returnbutton').on('click', function() {
// 		$(this).parent().fadeOut(500, function () {
// 			$('#submit-nav').removeClass('nav-active');
// 			$('#results-nav').fadeIn(500);
// 		});
// 	});

// 	$('#results div.returnbutton').on('click', function() {
// 		$(this).parent().fadeOut(500, function () {
// 			$('#results-nav').removeClass('nav-active');
// 			$('#submit-nav').fadeIn(500);
// 		});
// 	});

// 	$('#results').on('click', 'thead td', function() {
// 		var types = [],
// 			$rows = $('tr').filter(function (index) {
// 				return index > 0;});

// 		if ((($(this)[0].cellIndex) + 1) === filter) {
// 			$rows.sort(function (a, b) {
// 				var keyA = $(a).find('td:nth-child(' + filter + ')').html();
// 				var keyB = $(b).find('td:nth-child(' + filter + ')').html();
// 				if (keyA > keyB) return 1;
// 				if (keyB < keyA) return -1;
// 				return 0;
// 			});
// 			filter = -1;
// 		} else {
// 			filter = ($(this)[0].cellIndex) + 1;

// 			$rows.sort(function (a, b) {
// 				var keyA = $(a).find('td:nth-child(' + filter + ')').html();
// 				var keyB = $(b).find('td:nth-child(' + filter + ')').html();
// 				if (keyA < keyB) return 1;
// 				if (keyB > keyA) return -1;
// 				return 0;
// 			});
// 		}
// 		$.each($rows, function (index, value) {
// 			$('thead').after(value);
// 		});
// 	});

// 	$('#login').on('click', function(e) {
// 		e.preventDefault();
// 		var userpass = prompt("Whats the secret password?");
// 		var topost = {pass: userpass};
// 		$.ajax({
// 			url: '../scripts/check-cookie.php',
// 			type: 'POST',
// 			data: topost,
// 			success: function(data) {
// 				if (data !== "Wrong password") {
// 					document.cookie = data;
// 					window.location.reload();
// 				}
// 			},
// 			error: function(xhr, textStatus, errorThrown) {
// 		    	console.log('password error');
// 			}
// 		});
// 	});

// 	// Edit button functionality
// 	$('#results').on('change', 'input[type="checkbox"]', function () {
// 		var $this = $(this);
// 		var rowVals = [];
// 		var $row = $this.parent().parent().children();
// 		// console.log($this.prop('checked'));
// 		for (var i = 0; i < ($row.length - 2); i++) {
// 			rowVals.push($row.eq(i).html());
// 			$row.eq(i).html('<input type="text" placeholder="' + rowVals[i] + '" class="edited-field" />');
// 		}
// 	});

// 	$('#results').on('blur', 'input.edited-field', function () {
// 		if ($(this).val()) {
// 			console.log($(this).val());
// 		}
// 	});
});

// function populateTable (json) {
// 	for (i = 0; i < json.length; i++) {
// 		var average;
// 		var cr = parseInt(json[i].cozrating);
// 		var sr = parseInt(json[i].stinerating);
// 		if (cr === 0) {
// 			average = sr.toFixed(1);
// 		} else if (sr === 0) {
// 			average = cr.toFixed(1);
// 		} else {
// 			average = ((cr + sr) / 2).toFixed(1);
// 		}
// 		$('thead').after('<tr><td>' + json[i].type +'</td><td>' + json[i].name + '</td><td>' + (json[i].cozrating === '0' ? '-' : json[i].cozrating) +'</td><td>' + (json[i].stinerating === '0' ? '-' : json[i].stinerating) +'</td><td>' + average + '</td><td class="edit-btn"><input type="checkbox" /></td></tr>');
// 	}
// 	endTime = Date.now();
// 	console.log(endTime - startTime);
// }