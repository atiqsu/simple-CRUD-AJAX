<?php

$loggedin = $_COOKIE['loggedin'];

if ($loggedin != 2332) 
{
	setcookie("loggedin", 0, time() + 60 * 60 * 24 * 7 * 8);
}