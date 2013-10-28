<?php
// $db_server = mysql_connect('localhost', 'mnmemori_coz', 'snipsnap23');
$db_server = mysql_connect('localhost', 'root');

if (!$db_server) die("Did not work " . mysql_error());
// mysql_select_db('mnmemori_alc') or die("didn't work " . mysql_error());
mysql_select_db('alc') or die("didn't work " . mysql_error());

$query = "SELECT type FROM alco";
$result = mysql_query($query);
$rows = mysql_num_rows($result);
for ($j = 0; $j < $rows; ++$j) {
	$result2[] = mysql_result($result, $j);
}
$result3 = array_values(array_unique($result2));
echo json_encode($result3);
mysql_close($db_server);
