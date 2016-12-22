<?php

	session_start();
	
	if (!isset($_SESSION['zalogowany']))
	{
		header('Location: index.php');
		exit();
	}
	
?>
<!DOCTYPE HTML>
<link href='css/grastyle.css' rel='stylesheet'>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>Re-Spot</title>
</head>

<body>
	 
	  <div class="easy">
        <a href="Htmllatwy.html"><img src="css/images/easy.png"></a>
    </div>
      
    <div class="medium">
        <a href="Htmlsredni.html"><img src="css/images/medium.png"></a>
    </div>
      
    <div class="hard">
        <a href="Htmltrudny.html"><img src="css/images/hard.png"></a>
    </div>
<?php

	echo "<p>Witaj ".$_SESSION['user'].'! [ <a href="logout.php">Wyloguj się!</a> ]</p>';
	
	
	echo "<p><b>E-mail</b>: ".$_SESSION['email'];
	

	
	  
	 
	
?>

</body>
</html>