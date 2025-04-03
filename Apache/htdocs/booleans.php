<!DOCTYPE HTML>
<html lang="en">
  <head>
  <meta charset="utf-8">
  <meta name="description" content="A page for exploring basic HTML documents">
  <title>Hello World</title>
  </head>
  <body>
  
  
 <br />   

      
<?php
$numbers = array(4,8,15,16,23,42);
echo $numbers[2];



?>
<br />
<?php echo $numbers[0];?><br />
Count:  <?php echo count($numbers); ?><br />
Max value: <?php echo max($numbers); ?><br />
Min value: <?php echo min($numbers); ?><br />
15 in array?: <?php echo in_array(15,$numbers);?><br />

<br />
      
<?php
$boolean = 3.14;
if ( is_float($boolean)) {
    echo "It is a float.";
}
?>
<pre>
Sort:   <?php sort($numbers); print_r($numbers); ?><br />
</pre>
</body>
</html>
