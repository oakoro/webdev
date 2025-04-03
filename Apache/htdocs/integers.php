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
$var1 = 3;
$var2 = 4;
?>
Basic Math: <?php echo ((1 + 2 + $var1) * $var2 / 2); ?><br />
Absolute value: <?php echo abs(0 - 300); ?><br /> 
Exponential: <?php echo pow(2,8);?><br />
Square root: <?php echo sqrt(100);?><br />
Module: <?php echo fmod(20,7); ?><br />
Randon: <?php echo rand();?><br />
Random (min,max): <?php echo rand(1,10);?><br />
   </body>
</html>
