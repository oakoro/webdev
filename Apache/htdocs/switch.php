<!DOCTYPE HTML>
<html lang="en">
  <head>
  <meta charset="utf-8">
  <meta name="description" content="A page for exploring basic HTML documents">
  <title>Hello World</title>
  </head>
  <body>
        
<?php
$a = 3;
$b = 3;
$c = 21;
$d = 20;
$e = 1;
if (($a > $b) && ($c > $d)){
    echo "a is larger than b AND ";
    echo "c is larger than d<br />";
}
      else
      {
    echo "a is not larger than b<br />";
      }

switch ($e) {
    case 0:
        echo "e equals 0<br />";
        break;
    case 1:
        echo "e equals 1<br />";
        break;
    case 2:
        echo "e equals 2<br />";
        break;
    case 3:
        echo "e equals 3<br />";
        break;
}
?>
<br />


</body>
</html>
