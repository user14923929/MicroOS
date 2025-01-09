<?php
header("HTTP/1.0 404 Not Found");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>One small issues.</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="shortcut icon" href="/assets/images/microbit-404.png" type="image/x-icon">
</head>
<body>
    <center>
        <img src="/assets/images/microbit-404.png" alt="404" width="150">
        <h1>One small issues.</h1>
        <p>This page doesn't exist or it has a different path, please try again later.</p>
        <button onclick="window.location.href = '/';">Go back</button>
    </center>
</body>
</html>