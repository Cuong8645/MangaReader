<?php
include 'DBConfig.php';
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName); 

$json = file_get_contents('php://input');
$obj = json_decode($json,true);





if ($conn->connect_error) { 
 die("Connection failed: " . $conn->connect_error);
} 
 $idManGa = 1;
 

$sql = "SELECT * FROM chapter WHERE id_Manga = $idManGa ORDER BY soChapter";

 
$result = $conn->query($sql);
 
if ($result->num_rows >0) { 
 

 
 $tempt = $result->num_rows;
 
 $json = json_encode($tempt);
 

 
} else {
echo $json;
 echo "No Results Found.";
}

 echo $json;
$conn->close();
?>