<!DOCTYPE HTML>
<html lang="en">
  <head>
  <meta charset="utf-8">
  <meta name="description" content="A page for exploring basic HTML documents">
  <title>Hello World</title>
  </head>
  <body>
        
<?php
$a = 4;
$b = 3;
$c = 21;
$d = 20;

if (($a > $b) && ($c > $d)){
    echo "a is larger than b AND ";
    echo "c is larger than d";
}
      else
      {
    echo "a is not larger than b";
      }
?>
<br />
<?php
$e = 100;
if (!isset($e)) {
    $e - 200;
}
echo $e;
?>

</body>
</html>
