<?php
/**
 * Rename this file to "config.php" and adjust to suit.
 *
 * The General Configuration section applies global settings to the
 * installation.
 *
 * The Row Configuration section defines rows that you want to appear
 * in the web-based UI. Each entry creates a new row, along with the
 * label and IDs to use for "on" and "off" buttons. Each button ID
 * should be unique for this particular installation of the web UI,
 * but don't need to be unique across all installations. The actual
 * button value sent through to the service will be a compound key
 * consisting of the panel ID and the button ID, such as "2-42".
 *
 * The configuration file in the service uses the compound key as the
 * index to define the result of each input event received from the 
 * various UIs, so as long as the compound key is unique it can
 * distinguish different events.
 */

/* ***** General Configuration ***** */
$config = array();
$config['BaseURL']    = "http://192.168.1.111/apad10/";
$config['HeaderLogo'] = "http://192.168.1.111/apad10/images/sha-header.png";
$config['PanelID']    = 2;

/* ***** Per-Widget Configuration ***** */
$widgets = array();
$widgets[] = array ( "Label" => "LED", "onButton" => 42, "offButton" => 43 );
$widgets[] = array ( "Label" => "Kitchen", "onButton" => 1, "offButton" => 2 );
$widgets[] = array ( "Label" => "Lounge", "onButton" => 36, "offButton" => 37 );
$widgets[] = array ( "Label" => "Conservatory", "onButton" => 38, "offButton" => 39 );
