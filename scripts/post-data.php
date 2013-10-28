<?php
session_start();

$type = $_POST['type'];
$name = $_POST['name'];
$cozrating = $_POST['cozrating'] !== "blank" ? $_POST['cozrating'] : 0;
$stinerating = $_POST['stinerating'] !== "blank" ? $_POST['stinerating'] : 0;
$log = $_SESSION['log'];

if ($log == 2332) {
	$query = "INSERT INTO alco(type, name, cozrating, stinerating) VALUES('$type', '$name', '$cozrating', '$stinerating');";

	// $db_server = mysql_connect('localhost', 'mnmemori_coz', 'snipsnap23');
	$db_server = mysql_connect('localhost', 'root');

	if (!$db_server) die("Did not work " . mysql_error());

	// mysql_select_db('mnmemori_alc') or die("didn't work " . mysql_error());
	mysql_select_db('alc') or die("didn't work " . mysql_error());


	mysql_query($query);

	mysql_close($db_server);

	echo "Data posted!";
	
} else {
	echo "Unable to post data without being logged in.";
}
