<?php

$name = $_POST['user'];
$pass = $_POST['password'];

class store{
	public function dbconnect(){
		$con = mysql_connect("localhost","root","");
		if($con){
			die('Could not connect: '.mysql_error());
		}
		mysql_select_db("dbuserregistration",$con);
	}
	public function insertdb($name,$pass){
		mysql_query("INSERT INTO tblure VALUES('$name','$pass')");
		echo "Your entry successfully stored in the database";
	}
}

$cn = new store;
$cn->dbconnect();
$cn->insertdb($name,$pass);

?>