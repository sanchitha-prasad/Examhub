<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // database connection

  $conn = new mysqli('localhost', 'root', '','examehub');
  if ($conn->connect_error) {

    die('conection failed :' .$conn->connect_error);
  }
  else {
      die('sssds');
    // $stmt = $conn->prepare("insert into details(Name,email,subject,message)values(?, ?, ?, ?)");
    // $stmt -> bind_param("ssss",$name , $email , $subject , $message);
    // $stmt->execute();
    // // echo("Thank you for sending the email. We will contact you shortly.");
    // $stmt->close();
    // $conn->close();
  }

?>