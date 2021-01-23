<!DOCTYPE html>
<html>
   <head>
   		<link rel="stylesheet" type="text/css" href="style.css">
    	<title><?= $title ?></title> 
   </head>
   <body>
      	<div id="wrapper">
      		<header>
      			header
      		</header>
      		<main>
            <?php if ($info) echo "<p>$info</p>"; ?>
      		<?= $content ?>
      		</main>
      		<footer>
      			footer
      		</footer>
      	</div>
   </body>
</html> 
