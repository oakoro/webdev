<!DOCTYPE HTML>
<html lang="en">
  <head>
  <meta charset="utf-8">
  <meta name="description" content="A page for exploring basic HTML documents">
  <title>Hello World</title>
  </head>
  <body>
  
  
   

      
<?php
$count = 0;
while ($count <= 10 ) {
    if ($count == 5) {
        echo "FIVE, ";
    } else {
         echo $count . ", "; 
    }
    
   
    $count += 1;
}
echo "<br />";
echo "Count: {$count}";

?>

</body>
</html>
