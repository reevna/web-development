//<?php
//$sentence = $_GET["text"];
//$trimmedSentence = trim($sentence);
//$twoSpaces = "  ";
//$innerStr = strpos($trimmedSentence, $twoSpaces);
//if ($innerStr !== false){
//$lessSpaces = str_replace("  ", " ", $trimmedSentence);
//echo $trimmedSentence;
//}



//<?php
//$sentence = $_GET["text"];
//$trimmedSentence = trim($sentence);
//$lessSpaces = preg_replace('/(\s+)/', ' ', trim($_GET["text"]));
//echo $lessSpaces;




<?php
echo preg_replace('/(\s+)/', ' ', trim($_GET["text"]));;