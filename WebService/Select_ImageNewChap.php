<?php
include 'DBConfig.php';
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName); 

$json = file_get_contents('php://input');
$obj = json_decode($json,true);





if ($conn->connect_error) { 
 die("Connection failed: " . $conn->connect_error);
} 

$numChap = $obj['numChap'];
$idManga = $obj['idManga'];
$sql = "SELECT id FROM chapter WHERE id_Manga = $idManga AND soChapTer = $numChap";

$result = $conn->query($sql);
 
if ($result->num_rows >0) { 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tempt = $row;
 
 $json = json_encode($tempt);
 
 
 }
 
}

$idChap = $json;
echo $idChap;

?>
