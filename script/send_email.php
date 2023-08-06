<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $suggestion = $_POST["suggestion"];

    $to = "avinjoshy@gmail.com";  // Receiver's email address
    $subject = "ijera'23 new contact form submission: $subject";

    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Subject: $subject\n";
    $message .= "Suggestion:\n$suggestion";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Success";  // Return a success message
    } else {
        echo "Error";  // Return an error message
    }
}
?>
