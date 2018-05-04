<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "student";
// Create connection
 $conn= mysqli_connect($host,$username)or die("Could'nt connect to database");

$name=$_POST['name'];
$years=$_POST['years'];
$location=$_POST['location'];
$date=$_POST['date'];
$skills=$_POST['skills'];
$gender=$_POST['gender'];

	

// Check connection
 mysqli_select_db($conn,$dbname)or die("No database");
 
 mysqli_query($conn,"INSERT INTO student.details(name,years,location,date ,skills,gender) VALUES ('$name','$years','$location','$date' ,'$skills','$gender')")or die(mysqli_error($conn)); 
 echo 'Data added';
?>