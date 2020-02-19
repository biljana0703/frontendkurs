<?php

header("Content-Type: application/json");

$json = file_get_contents('php://input');
$data = (array)json_decode($json);

$prvi = $data['prviBroj'];
$drugi = $data['drugiBroj'];
$operacija = $data['operacija'];


$rezultat = $prvi + $drugi + 10;

$data = array($rezultat);
$data = json_encode($data, true);
echo $data;

?>