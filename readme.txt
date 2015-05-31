
Introduction
This mobile application aims at describind rare oral decises and further educate in oral healt.
The development is done in HTML and JavaScript using the frame works cordova-phonegap and Jquerry mobile. The web-project is combipled to ios and Android applications with the help of phonegap. 
The supportet target plattforms are android and Ios

Prerequesit.
	Phonegap-Cordova
	Eclipse with andorid SDK

For IOS
	Needs a Mac and Xcode


when fullfilled
How to bulid and deploy
	clone repository
	Goto directiory
	Add traget platform to phonegap-cordova
	compile with phonegap-cordova for that platform

Notes
	The project settings is configured using the config.xml in root foolder.
	Platform speciif images are stored in res
	Images for the web project is stored in the www/img folder

	The dynimic content in the application is loaded from a json file called data.js
	The language is set in a langugage file call lang.js
	The main js file is called munhalsan.js
	The page is defined in the index.html.
	The the parsing of the data file to a web-sql data base is done in the datahandler.js
	



Install Cordova-Phonegap from http://phonegap.com/

