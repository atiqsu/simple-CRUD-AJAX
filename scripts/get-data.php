<?php
// $db_server = mysql_connect('localhost', 'mnmemori_coz', 'snipsnap23');
$db_server = mysql_connect('localhost', 'root');
	if (!$db_server) die("Did not work " . mysql_error());

// mysql_select_db('mnmemori_alc') or die("didn't work " . mysql_error());
mysql_select_db('alc') or die("didn't work " . mysql_error());
$post = $_POST['filter'];
$querystring = $post == "All" ? "SELECT * FROM alco;" : "SELECT * FROM alco WHERE type='$post';";

$result = mysql_query($querystring);
$rows = mysql_num_rows($result);
$data = array();

for ($i = 0; $i < $rows ; $i++) {
	$data[$i] = mysql_fetch_assoc($result);
}
echo json_encode($data);
mysql_close($db_server);