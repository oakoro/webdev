<!DOCTYPE HTML>
<html lang="en">
  <head>
  <meta charset="utf-8">
  <meta name="description" content="A page for exploring basic HTML documents">
  <title>Hello World</title>
  </head>
  <body>
  <?php echo "Hello World"; ?><br />
  <?php 
$first = "The quick brown fox";
$second = " jumped pover the lazy dog.";
    
$third = $first;
$third .= $second;
echo $third;
      
      
  ?>
 <br />   
Lowercase: <?php echo strtolower($third); ?><br />
Uppercase: <?php echo strtoupper($third); ?><br />
Uppercase first: <?php echo ucfirst($third); ?><br />
Uppercase words: <?php echo ucwords($third); ?><br />
      
<?php

?>
  
   </body>
</html>
