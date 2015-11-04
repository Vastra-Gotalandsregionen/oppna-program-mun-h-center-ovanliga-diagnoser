
#The MHC-Mobile Application
Available at [App Store for iOS](https://itunes.apple.com/us/app/mhc-appen/id534148146?mt=8) and [Google Play for Android](https://play.google.com/store/apps/details?id=se.vgr.munhalsan&hl=sv)
### Screenshots from the app
![Image of MainView](https://github.com/Vastra-Gotalandsregionen/oppna-program-mun-h-center-ovanliga-diagnoser/blob/master/GitImages/main.jpeg?raw=true)   |  ![Image of acclimatization](https://github.com/Vastra-Gotalandsregionen/oppna-program-mun-h-center-ovanliga-diagnoser/blob/master/GitImages/acclimatization.jpeg?raw=true) | ![Image of diagnosisView](https://github.com/Vastra-Gotalandsregionen/oppna-program-mun-h-center-ovanliga-diagnoser/blob/master/GitImages/brushing.jpeg?raw=true)   | ![Image of Yaktocat](https://github.com/Vastra-Gotalandsregionen/oppna-program-mun-h-center-ovanliga-diagnoser/blob/master/GitImages/diagnosis.jpeg?raw=true)
----  | ---- | ---- | ----

##Description
The MHC-Mobile app gives you the opportunity to simply and rapidly find information about rare diseases and how these conditions might have an impact on oral health and orofacial function. The information has been retrieved mainly from the following sources:

* The Swedish National Board of Health and Welfare (www.socialstyrelsen/rarediseases)
* The Ågrenska Newsletter (www.agrenska.se),
and finally specific contents from Scientific publications

At present, the MHC-database contains data from more than 3000 individuals with rare diseases. Data has been collected through the Mun-H-Center assessment forms. Reports from the MHC- database are published on the Mun-H-Center web site (www.mun-h-center.se). On the web site you also can read more about the skill-center and find out what we can offer concerning courses, consultations as well as information regarding orofacial aids and assistive devices.
Diseases or disorders which affect fewer than 100 people per million, and which lead to a marked degree of disability (the Swedish National Board of Health and Welfare).

## Usability and Functional description
When, how and where to use the app?
* In preparation for patient visits
* When you want to get suggestions on what to consider before treatment planning
* When you want to know more about a diagnosis
*On the bus, commuter train, etc
*When issues arise in different situations call / on meetings
*When you want to receive information on rare diseases in a quick and easy way

##System overview

The purpose of MHC-app system is that patients, relatives, doctors, etc. quickly and easily find information about rare diseases. 


###Technical description and Overview
The app is developed according to the reference architecture at Region Västra Götaland using the following techniques: HTML5, JQuery, JQuery Mobile, Phonegap, SQLite. The project was moved from googlecode.com to github.com since googlecode is closing in the summer of 2015.

###Getting started with the projects:
* Install Phonegap ( http://phonegap.com/install/)
* Clone the git repo
* Build for targeted platform (http://docs.phonegap.com/en/edge/guide_platforms_index.md.html)
* Deploy to device
###Project structure: 
The most important parts of the project is described below.
* The "platforms" folder contains the compiled codes for the Android and IOS applications. No changes to the applications should be done in these folders, they should be generated via the "build" command. 
* The "www" folder contains the current web project and the resources for the project. It is also in this folder moste changes to the project should be done,
* The "plugins" folder contains plugins that extends the functionality of the application, for example the "device" plugin lets the application get information about the device it is running on.  More on plugins on at https://build.phonegap.com/plugins. 
* The "res" folder contains the icons and splash screens, platform specific resources.
* The "config.xml" file is a global configuration file. For example the application name, version number, icons and more is specified in the config.xml. 

#####File structure
* platforms
  * Android
  * IOS
* plugins
* res
* www
  * css
  * framework
  * img
  * js
  * index.html
* config.xml

###Database


The application uses a local database that is populated using a json string. In order to update the database follow the these steps described below.
1. Open.mdb-file in Access,we obtain from VGR Mun-H Center
2. Export the file to a sorted json string.
3. Replace the current json string in the "data.js" file.
4. Increment the variable "version" in "the munhalsan.js" file.
5. Rebuild application for targeted platforms and update via App Store or Google Play.
Example of Json data  can be found in Appendix A.
###Language
The current application supports swedish and english. The texts are defined in the "lang.js" file and in the "data.js" file. 
###Videos
The videos used in this application is embedded using iframe from the Mun-H-Centers own youtube channel. 



###Revision control
The application will be revision controlled on github.






###Appendix A
```json
{
   "Syndrom": "22q11-deletionssyndromet",
   "Lang": "swe",
   "Allm_icd_10": "Q92.8",
   "Allm_synonymer": "Di George syndrom, Velokardiofacialt syndrom, CATCH 22",
   "Allm_orsak": "Kromosomfel d\u00e4r en liten bit p\u00e5 den l\u00e5nga armen (q) av kromosom 22 saknas. Dominant \u00e4rftlighetsg\u00e5ng. I de flesta fall orsakas 22q11-deletionssyndrom av nymutation.",
   "Allm_forekomst": "25:100 000 levande f\u00f6dda.",
   "Allm_allm_symtom": "<STRONG>&nbsp; C<\/STRONG> Cardiac defect; medf\u00f6tt hj\u00e4rtfel av olika slag<BR><STRONG>&nbsp; A<\/STRONG> Abnormal facies; annorlunda ansiktsdrag<BR><STRONG>&nbsp; T<\/STRONG> Thymic hypoplasia\/aplasia; avsaknad av eller mycket liten br\u00e4ss; \u00f6kad infektionsrisk<BR><STRONG>&nbsp; C<\/STRONG> Cleft palate; gomspalt; vanligast med dold (submuk\u00f6s) spalt<BR><STRONG>&nbsp; H<\/STRONG> Hypokalcemi; kalkbrist pga d\u00e5lig funktion i eller avsaknad av bisk\u00f6ldk\u00f6rtlar<BR><STRONG>&nbsp; 22<\/STRONG> kromosommaterial saknas p\u00e5 kromosom 22<BR>\u00c4ven andra missbildningar t ex av njurar, klumpfot, h\u00f6rsel- och synproblem samt beteendeavvikelser och inl\u00e4rningsproblem kan f\u00f6rekomma. Olika kombinationer av symtom f\u00f6rekommer och sv\u00e5righetsgraden varierar mycket mellan olika personer.",
   "Orala_symtom": "Vissa ansiktsdrag \u00e4r karakt\u00e4ristiska f\u00f6r diagnosen. Talproblem i form av \u00f6ppen nasalering \u00e4r mycket vanligt. \u00c4tsv\u00e5righeter f\u00f6rekommer. Avvikelser i t\u00e4ndernas mineralisering i form av fl\u00e4ckar eller gropar i tandemaljen \u00e4r vanligt. \u00c4ven avvikelser i t\u00e4ndernas form, s\u00e5 kallad tapptand och avsaknad av tandanlag till enstaka t\u00e4nder \u00e4r vanligare \u00e4n annars. Ofta finner man f\u00f6rsenad tandutveckling. En \u00f6kad f\u00f6rekomst av geografisk tunga (lingua geografica) samt l\u00e4ttbl\u00f6dande munslemhinnor har rapporterats liksom d\u00e5lig munh\u00e4lsa med mycket karies och gingivit (tandk\u00f6ttsinflammation).",
   "Rekommendationer": "<UL> <LI>Det \u00e4r viktigt att personer med 22q11-deletionssyndromet tidigt f\u00e5r kontakt med tandv\u00e5rden f\u00f6r f\u00f6rst\u00e4rkt f\u00f6rebyggande v\u00e5rd och munh\u00e4lsoinformation. Frekventa infektioner med s\u00e4mre kosth\u00e5ll i kombination med d\u00e5ligt mineraliserad emalj \u00f6kar risken f\u00f6r karies. <\/LI> <LI>Tand- och bettutveckling ska f\u00f6ljas. Vid avvikelser ska ortodontist konsulteras p\u00e5 tidigt stadium f\u00f6r planering av eventuell bettkorrigerande behandling.<\/LI> <LI>Vid gomdefekt ansvarar ett specialistteam f\u00f6r uppf\u00f6ljning och behandling. <\/LI> <LI>L\u00e4karkontakt rekommenderas f\u00f6re tandbehandling vid medicinska tillst\u00e5nd, som t.ex. hj\u00e4rtfel. <\/LI> <LI>\u00c4t- och sv\u00e4ljsv\u00e5righeter utreds och behandlas av specialistteam p\u00e5 sjukhus (nutritionsteam eller dysfagiteam) eller habilitering.<\/LI><\/UL>",
   "Bild": "22q11-flicka.jpg; 22q11-pojke.jpg",
   "Bildtext": "Karakt\u00e4ristiskt utseende vid 22q11-deletionssyndromet: <br>Bred n\u00e4sbrygga. Rund n\u00e4stipp. Tunna l\u00e4ppar. Fylliga \u00f6gonlock. Kupade ytter\u00f6ron."


}
```

