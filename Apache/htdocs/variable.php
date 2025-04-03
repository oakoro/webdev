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
  $var1 = 10;
  echo $var1 ;
  echo "<br />";
      
  $var1 = 100;   
  echo $var1;
  echo "<br />"  ;  
$var = "Hello Oke?";
      echo $var;
      echo "<br />";
      $greeting = "Hello";
      $target = "World";
      $phrase = $greeting . " " . $target;
      echo $phrase;
      
      
  ?>
 <br />     
<?php
echo "$phrase again <br />"   ;  
echo "{$phrase} Again<br />";
?>
  
   </body>
</html>
