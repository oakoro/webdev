<!DOCTYPE HTML>
<html lang="en">
  <head>
  <meta charset="utf-8">
  <meta name="description" content="A page for exploring basic HTML documents">
  <title>Hello World</title>
  </head>
  <body>
  
  
   

      
<?php

      function add($val1, $val2) {
          $sum = $val1 + $val2;
          return $sum;
      }
      $result1 = add(3,4);
      $result = add(3,$result1);
      echo $result;
      
?>
      


</body>
</html>
