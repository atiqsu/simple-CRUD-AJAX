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
<html lang="en">
<head>
	<title>C and C Reviews</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href='http://fonts.googleapis.com/css?family=Oswald|Raleway:500|Open+Sans' rel='stylesheet' type='text/css'>
	<link rel="shortcut icon" href="../images/favicon.png">
	<link rel="apple-touch-icon" href="../images/apple-touch-icon.png">
	<link rel="stylesheet" type="text/css" href="../styles/global-a.css">
</head>
<body>
	<section id="home">
		<h2 id="submit-nav">SUBMIT</h2>
		<h2 id="results-nav">RESULTS</h2>
		<?php
			if ($loggedin != 2332) {
				echo "<a id=\"login\" href=#>Log in</a>";
			}
		?>
	</section>
	<section id="submit">
		<div id="submit-container">
			<div class="submit-header">
				<h3>Type</h3>
				<select name="type" class="type-select">
					<option value="blank"></option>
				</select>
				<p>or</p>
				<button name="new-type">New Type</button>
				<input type="text" name="new-type-input" id="new-type-input" />
			</div>
			<div class="submit-header">
				<h3>Name</h3>
				<input type="text" name="text-1" id="input-name" value="" />
			</div>
			<div class="submit-header">
				<h3>Chris Rating</h3>
				<select id="chris-rating" name="chris-rating" class='rating'>
					<option value="blank"></option>
					<option value=".5">1/2</option>
					<option value="1">*</option>
					<option value="1.5">* 1/2</option>
					<option value="2">**</option>
					<option value="2.5">** 1/2</option>
					<option value="3">***</option>
					<option value="3.5">*** 1/2</option>
					<option value="4">****</option>
					<option value="4.5">**** 1/2</option>
					<option value="5">*****</option>
				</select>
			</div>
			<div class="submit-header"><h3>Stine Rating</h3>
				<select id="stine-rating" name="stine-rating" class='rating'>
					<option value="blank"></option>
					<option value=".5">1/2</option>
					<option value="1">*</option>
					<option value="1.5">* 1/2</option>
					<option value="2">**</option>
					<option value="2.5">** 1/2</option>
					<option value="3">***</option>
					<option value="3.5">*** 1/2</option>
					<option value="4">****</option>
					<option value="4.5">**** 1/2</option>
					<option value="5">*****</option>
				</select>
			</div>
		</div>
		<button name="submit" id="submit-button" type="submit" disabled="disabled">SUBMIT</button>
		<p id="submit-text"></p>
		<div id="submit-return" class="returnbutton">
			<div class="returnbutton-shadow returnbutton-inner"></div>
			<div class="returnbutton-outside returnbutton-inner"></div>
		</div>
	</section>
	<section id="results">
		<div id="results-header">
			<h3>Filter:</h3>
			<select id="type-filter" class="type-select">
				<option value="All">All</option>
			</select>
			<button name="retrieve" id="retrieve-button">RETRIEVE</button>
		</div>
		<div id="results-return" class="returnbutton">
			<div class="returnbutton-shadow returnbutton-inner"></div>
			<div class="returnbutton-outside returnbutton-inner"></div>
		</div>
	</section>
	<script src="//code.jquery.com/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="../scripts/general-a.js"></script>
</body>
</html>