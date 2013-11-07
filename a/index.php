<?php 
	include "../scripts/mobile-redirect.php";
	include "../scripts/set-cookie.php";
	$loggedin = $_COOKIE['loggedin'];
	session_start();
	if ($loggedin == 2332) {
		$log = $_SESSION['log'] = 2332;
	} else {
		$log = $_SESSION['log'] = 0;
	}
?>
<!doctype html>
<html lang="en" ng-app="simpleCRUD">
<head>
	<title>C and C Reviews</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href='http://fonts.googleapis.com/css?family=Oswald|Raleway:500|Open+Sans' rel='stylesheet' type='text/css'>
	<link rel="shortcut icon" href="../images/favicon.png">
	<link rel="apple-touch-icon" href="../images/apple-touch-icon.png">
	<link rel="stylesheet" type="text/css" href="../styles/global-a.css">
	<script type="text/javascript" src="../scripts/angular.js"></script>
</head>
<body ng-controller="MainController">
	<ng-view></ng-view>
	<script src="//code.jquery.com/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="../scripts/general-a.js"></script>
</body>
</html>