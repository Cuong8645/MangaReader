<?php
include 'DBConfig.php';
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName); 

$json = file_get_contents('php://input');
$obj = json_decode($json,true);





if ($conn->connect_error) { 
 die("Connection failed: " . $conn->connect_error);
} 

$idChap = $obj['idChap'];

$sql = "SELECT * FROM imagemanga WHERE id_ChapTer = $idChap ORDER BY trang";

$result = $conn->query($sql);
 
if ($result->num_rows >0) { 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tempt = $row;
 
 $json = json_encode($tempt);
 
 
 }
 
} else {
echo $json;
 echo "No Results Found.";
}

 echo $json;
$conn->close();
?>
