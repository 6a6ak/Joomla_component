Create a plugin with your js codes in it
Step 1
Create a folder inside your "plugins\system\" folder. I will call it "custom":

plugins\system\custom

Step 2
Create an XML file with the same name you used for the folder:

plugins\system\custom\custom.xml

and make it contain this code with a name and filenames of your choice:

<?xml version="1.0" encoding="utf-8"?>
<extension version="1.0" type="plugin" group="system">
    <name>Custom Plugin</name>
    <files>
        <filename plugin="custom">custom.php</filename>
        <filename>custom.js</filename>
    </files>
</extension>
Step 3
Create a JS file with the same name you used in the xml file:

plugins\system\custom\custom.js

and it can contain the code you would like to have. As a test, it could be:

window.onload = function() {
	alert('test');
};
Step 4
Create a PHP file with the same name you used in the xml file:

plugins\system\custom\custom.php

and make it contain this code, pointing to your js file:

<?php
$document = JFactory::getDocument();
$document->addScript( JUri::root() . 'plugins/system/custom/custom.js');
Step 5
At your Joomla admin area, go to System -> Discover (under Install):



Step 6
Press Discover extensions to install (or the Discover button on top, if you already have some discovered extensions):



Step 7
Select your plugin and press Install.



Step 8
Go to System -> Extensions (under Manage).



Step 9
Enable your plugin.



That's it, your codes are now running and you can customize the JS file.

System plugins are running on both the frontend and backend of a website, so customize it well!

Tips
Only load JS file into the frontend or backend
You can modify the PHP code to only load the JS file to the frontend or only to the backend of your website:

<?php
$app = JFactory::getApplication();

if ($app->isClient('site')) {
	//frontend	
	$document = JFactory::getDocument();
	$document->addScript( JUri::root() . 'plugins/system/custom/custom.js');
}


if ($app->isClient('administrator')) {
	//backend	
}
Code won't load
If the code won't load, it means your template's code doesn't have a jdoc head tag:

<jdoc:include type="head"/>
This tag is used by Joomla to call in addScript codes. Insert it within the head part of your template:

<head>
<!-- other codes -->
<jdoc:include type="head" />
</head>