<?

$conn = mysqli_connect('localhost', 'anay1', 'Home1998', 'myDb');
if(!$conn) {
    die("failed to connect!" . mysqli_error());
}
/*
echo $n1=$_POST['firstName'];
echo $n2=$_POST['middleName'];
echo $n3=$_POST['lastName'];
echo $date=$_POST['date'];
echo $gender=$_POST['radio'];
echo $email=$_POST['email'];
echo $mob= $_POST['mobile'];
echo $land= $_POST['landline'];
echo $ad1=$_POST['address1'];
echo $ad2= $_POST['address2'];
echo $c=$_POST['city'];
echo $nat=$_POST['nationality'];
echo $st=$_POST['_state'];
echo $zip=$_POST['zip'];
*/

$sql = "INSERT INTO customer_info(firstName, middleName, lastName, DOB, gender, email, mobile, landline, address1, address2, city, nationality, _state, zip) 
VALUES('$n1','$n2','$n3','$date','$gender','$email','$mob','$land','$ad1','$ad2','$c','$nat','$st', '$zip')";

if(!mysqli_query($conn, $sql)) {
    die('Error: '. mysqli_error($conn));
}
else{
    echo "1 record added";
}


mysqli_close($conn);

?>
