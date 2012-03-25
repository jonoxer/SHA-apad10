<?php
require_once("config.php");
?>
<html>
<head>
<meta http-equiv="refresh" content="3600">
<link rel="stylesheet" type="text/css" href="<?=$config['BaseURL']?>css/apad10.css" />
<script type="text/javascript" src="<?=$config['BaseURL']?>js/clock.js"></script>
<script type="text/javascript" src="<?=$config['BaseURL']?>js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<?=$config['BaseURL']?>js/sh-panel.js"></script>
</head>
<body onLoad="updateClock();">
<center>
<br />
<a href="<?=$config['BaseURL']?>"><img src="<?=$config['HeaderLogo']?>" border="0" /></a>
<br />
<div id="serviceResponse">&nbsp;</div>
<br />
<table border="0" width="650">
<?php
// "Room name", onPanel, onButton, offPanel, offButton
foreach( $widgets as $widget )
{
	displayLine( $widget['Label'], $config['PanelID'], $widget['onButton'], $widget['offButton']);
}
?>
</table>
<br /><br />
<span id="clock">...</span>
</center>
</body>
</html>
<?php

function displayLine( $Label, $PanelID, $onButton, $offButton )
{
	global $config;
	$onButtonId  = $PanelID ."-".$onButton;
	$offButtonId = $PanelID."-".$offButton;
	echo "<tr>\n";
	echo "<td height=\"82\" width=\"450\"><nobr>$Label:<nobr></td>\n";
	echo "<td width=\"100\"><a href=\"javascript:void(0);\" onclick=\"buttonPress('$onButtonId');\"><img border=0 src=\"".$config['BaseURL']."/images/green-70.png\" id=\"{$onButtonId}\" /></a></td>\n";
	echo "<td width=\"100\"><a href=\"javascript:void(0);\" onclick=\"buttonPress('$offButtonId');\"><img border=0 src=\"".$config['BaseURL']."/images/red-70.png\" id=\"{$offButtonId}\" /></a></td>\n";
	echo "</tr>\n";
}
