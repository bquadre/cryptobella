<?php
header('Content-Type: application/json');
 $name = $_POST["name"];
 $email = $_POST["email"];
 $phone = $_POST["phone"];
 $subject = $_POST["subject"];
 $message = $_POST["message"];
 
 //var_dump($_POST);
 //exit;
/**
 * This example shows making an SMTP connection with authentication.
 */
//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');
require 'phpmailer/PHPMailerAutoload.php';
//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = "mail.cryptobella.com";
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 8889;
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = "webmaster@cryptobella.com";
//Password to use for SMTP authentication
$mail->Password = "Opolo@2324";
//Set who the message is to be sent from
$mail->setFrom($email, $name);
//Set an alternative reply-to address
$mail->addReplyTo($email, $name);
//Set who the message is to be sent to
$mail->addAddress('webmaster@cryptobella.com', 'Cryptobella Messager');
//Set the subject line
$mail->Subject = $subject;
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
//Replace the plain text body with one created manually
$mail->AltBody = $message;
//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');
//send the message, check for errors
if (!$mail->send()) {
return json_encode(true);
} else {
    return json_encode(false);
}