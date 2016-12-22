<?php

	session_start();
	
	if ((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==true))
	{
		header('Location: gra.php');
		exit();
	}

?>

<!DOCTYPE HTML>
<link href='css/indexstyle.css' rel='stylesheet'>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>Re-Spot</title>
</head>

<body>
	
	<div class="rejestracja">
	
     <a href="rejestracja.php">Rejestracja - załóż darmowe konto!</a>
	<br /><br />
	</div>
	<form action="zaloguj.php" method="post">
	
		<div class="logowanie">
		Login: <br /> <input type="text" name="login" /> <br />
		Hasło: <br /> <input type="password" name="haslo" /> <br /><br />
		<input type="submit" value="Zaloguj się" />
		</div>
	
	</form>
	
<?php
	if(isset($_SESSION['blad']))	echo $_SESSION['blad'];
?>

</body>
</html>