function setLanguage(lang)
{
    console.log("Set language: "+lang);
    language = lang;
    window.localStorage.setItem("language", lang);

    if(language == 'swe')
    {
        $('.lang_diagnoser').html('Diagnoser');
        $('.lang_info').html('Om MHC-appen');
        $('.lang_kallor').html('Informationsk&auml;llor');
        $('.lang_kontakt').html('Kontaktuppgifter');
        $('.lang_favoriter').html('Senaste s&ouml;kningarna');
        $('.lang_hem').html('hem');
        $('.lang_hem_capital').html('Hem');
        $('.lang_tillbaka').html('tillbaka');
        $('.lang_allmant').html('Allm&auml;nt');
        $('.lang_diagnoskod').html('ICD-10 diagnoskod');
        $('.lang_synonym').html('Synonym');
        $('.lang_forekomst').html('Ber&auml;knad f&ouml;rekomst');
        $('.lang_orsak').html('Orsak');
        $('.lang_allmanna_symtom').html('Allm&auml;nna symtom');
        $('.lang_odontologiska_symtom').html('Orala symtom');
        $('.lang_behandling').html('R&aring;d kring uppf&ouml;ljning och behandling');
        $('.lang_bilder').html('Bilder');
        $('.lang_munvard').html('Munv&aring;rd f&ouml;r barn');
        $('.lang_munvard_short').html('Munv&aring;rd');
        $('.lang_inskolning').html('Inskolning i tandv&aring;rden');
        $('.lang_inskolning_short').html('Inskolning');
        $('.lang_tandborstning').html('Tips vid tandborstning');
        $('.lang_tandborstning_short').html('Tandborstning');
        $('.lang_muntorrhet').html('Tips vid muntorrhet');
        $('.lang_muntorrhet_short').html('Muntorrhet');

        $('.lang_tandborstning_text1').html('Munv&aring;rd f&oumlr barn - Tips vid tandborstning.');
        $('.lang_tandborstning_text2').html('Det kan vara sv&aring;rt att borsta t&auml;nderna p&aring; n&aring;gon annan. I det h&auml;r avsnittet vill vi ge praktiska tips p&aring; hur tandborstningen kan underl&auml;ttas och bli s&aring; effektiv som m&ouml;jligt. Fluortandkr&auml;m hj&auml;lper till att st&auml;rka emaljen och minskar d&auml;rmed risken f&ouml;r att f&aring; h&aring;l i t&auml;nderna. Idealet &auml;r att borsta morgon och kv&auml;ll. M&aring;ls&auml;ttningen &auml;r att barnet skall vara friskt i munnen hela livet.');
        $('.lang_tandborstning_text3').html('TIPS P&Aring; OLIKA ARBETSST&Auml;LLNINGAR VID TANDBORSTNING');
        $('.lang_tandborstning_text4').html('St&ouml;d barnets huvud mot din kropp. Det &auml;r viktigt med en arbetsst&auml;llning som k&auml;nns trygg och bra b&aring;de f&ouml;r barnet och f&ouml;r den som borstar.');
        $('.lang_tandborstning_text5').html('St&ouml;d barnets huvud mot ditt kn&auml;.');
        $('.lang_tandborstning_text6').html('Borsta n&auml;r barnet ligger p&aring; sk&ouml;tbord eller i s&auml;ng.');
        $('.lang_tandborstning_text7').html('Borsta sittandes p&aring; golvet.');
        $('.lang_tandborstning_text8').html('TANDBORSTNING');
        $('.lang_tandborstning_text9').html('Skapa god insyn genom att h&aring;lla ut kinder och l&auml;ppar n&auml;r du borstar. Placera borsten i tandk&ouml;ttskanten och gnugga med sm&aring; r&ouml;relser p&aring; alla tandytor.');
        $('.lang_tandborstning_text10').html('Eltandborste kan vara ett bra alternativ &auml;ven f&ouml;r barn. Placera borsten i tandk&ouml;ttskanten och borsta en tand i taget. H&aring;ll borsten stilla p&aring; varje tandyta, lyft till n&auml;sta tand, gnugga inte.');
        $('.lang_tandborstning_text11').html('Dubbeltandborsten Collis curve, borstar tandens insida, utsida och tuggyta samtidigt.');
        $('.lang_tandborstning_text13').html('Enbindelsborste anv&auml;nds p&aring; sv&aring;r&aring;tkomliga ytor, i djupa f&aring;ror samt om barnet har sv&aring;rt att gapa stort.');
        $('.lang_tandborstning_text14').html('Tandtr&aring;den Glideflosspick underl&auml;ttar reng&ouml;ring mellan t&auml;nderna.');
        $('.lang_tandborstning_text15').html('Barn som har k&auml;nslig munslemhinna kan beh&ouml;va en extra mjuk tandborste (TePe Gentle care).');
        $('.lang_tandborstning_text16').html('Bitst&ouml;d kan hj&auml;lpa barnet att h&aring;lla munnen &ouml;ppen vid tandborstning.');
        $('.lang_tandborstning_text17').html('Film som visar anv&auml;ndningen av bitst&ouml;d.');
        $('.lang_tandborstning_text18').html('En Chewy tube kan anv&auml;ndas som bitst&ouml;d.');
        $('.lang_tandborstning_text19').html('Tandborstskaft, med eller utan silikonslang, kan fungera som bitst&ouml;d.');
        $('.lang_tandborstning_text20').html('Timglas eller timer talar om hur l&auml;nge man skall borsta.');
        $('.lang_tandborstning_text21').html('Med hj&auml;lp av en munvinkelh&aring;llare f&aring;r man b&auml;ttre insyn i munh&aring;lan och det kan g&aring; l&auml;ttare att komma &aring;t att borsta t&auml;nderna.');
        $('.lang_tandborstning_text22').html('Film som visar hur man s&auml;tter in en munvinkelh&aring;llare.');
        $('.lang_tandborstning_text23').html('Film som visar hur man anv&auml;nder en munvinkelh&aring;llare vid tandborstning.');
        $('.lang_tandborstning_text24').html('VAL AV TANDKR&Auml;M');
        $('.lang_tandborstning_text25').html('<u>Barn under 2 &aring;r (fr&aring;n f&ouml;rsta tandens frambrott):</u> Borsta t&auml;nderna 2 ggr/dag med tandkr&auml;m inneh&aring;llande 1000 ppm fluor, m&auml;ngd som barnets lillfingernagel. <br> <u>Barn 2-6 &aring;r:</u> Borsta t&auml;nderna 2 ggr/dag med tandkr&auml;m inneh&aring;llande 1000 ppm fluor, m&auml;ngd som en &auml;rtas storlek. <br> <u> Barn &auml;ldre &auml;n 6 &aring;r:</u> Borsta &auml;nderna 2 ggr/dag med tandkr&auml;m inneh&aring;llande 1450 ppm fluor, m&auml;ngd 1-2 cm. Rekommendationer h&auml;mtade fr&aring;n "Fluorguiden", V&auml;stra G&ouml;talandsregionen. ');
        $('.lang_tandborstning_text26').html('Hur verkar fluor?');
        $('.lang_tandborstning_text27').html('Tandkr&auml;m utan konserverings- och skummedel (natriumlaurylsulfat). Den &auml;r skonsam mot slemhinnan och l&ouml;ddrar inte. Tandkr&auml;men finns f&ouml;r vuxna, barn 0-6 &aring;r och baby 0-2 &aring;r (utan smaktillsats).');
        $('.lang_tandborstning_text28').html('Tandkr&auml;m utan smak. <br> Salutem barntandkr&auml;m anv&auml;nds f&ouml;r barn under 6 &aring;r. F&ouml;r barn &ouml;ver 6 &aring;r anv&auml;nds Salutem vuxentandkr&auml;m.');
        $('.lang_tandborstning_text29').html('Specialtandkr&auml;m f&ouml;r personer som st&aring;r p&aring; KETOGEN KOST. Rekommenderas p&aring; individuell indikation och tillhandah&aring;lls via tandv&aring;rden.<br> <br> <u>Barn 0-3 &aring;r:</u> Orbi clean &amp; polish RDA 40, 0,1% fluor. Hanteras som vanlig tandkr&auml;m f&ouml;r &aring;ldersgruppen. Produkten inneh&aring;ller Sackarinnatrium &lt;1%. Alternativ: Borsta med Dentan fluorl&ouml;sning 0,05% NaF (utan smak). 5 ml l&ouml;sning sp&auml;des med 5ml vatten.<br>  <br> <u>Barn fr&aring;n 4 &aring;r:</u> Orbi clean & polish RDA 40, 0,1% fluor. Hanteras som vanlig tandkr&auml;m f&ouml;r &aring;ldersgruppen. Produkten inneh&aring;ller Sackarinnatrium <1%. Alternativ: Borsta med Dentan fluorl&ouml;sning 0,05% NaF (utan smak).');
        $('.lang_tandborstning_text30').html('Om det f&ouml;religger stora sv&aring;righeter med tandborstning &auml;r det extra viktigt att tillf&ouml;ra fluor f&ouml;r att st&auml;rka emaljen. Doppa en muntork i fluorl&ouml;sning - eller tag lite tandkr&auml;m p&aring; fingret - och f&ouml;r runt p&aring; t&auml;nderna.');
        $('.lang_tandborstning_text31').html('Fluorl&ouml;sning 0,05% NaF f&ouml;r barn under 6 – 12 &aring;r och fluorl&ouml;sning 0,2% NaF f&ouml;r barn &ouml;ver &ouml;ver 12 &aring;r samt vuxna. Anv&auml;nds vid behov av f&ouml;rst&auml;rkt f&ouml;rebyggande munv&aring;rd.');
        $('.lang_tandborstning_text32').html('Tandkr&auml;m med extra h&ouml;g fluorhalt. Anv&auml;nds vid f&ouml;rh&ouml;jd kariesrisk. Endast p&aring; tandv&aring;rdens rekommendation.');
        $('.lang_tandborstning_text33').html('Vid tandk&ouml;ttsinflammation och f&ouml;rh&ouml;jd kariesrisk kan tandv&aring;rden rekommendera bakterieh&auml;mmande tandkr&auml;m (fr&aring;n 6 &aring;r).');
        $('.lang_tandborstning_text34').html('Information om munv&aring;rdsprodukter och hj&auml;lpmedel finns ocks&aring; p&aring; f&ouml;ljande hemsidor: <br>    <a href="http://www.mun-h-center.se">www.mun-h-center.se</a> <br>    <a href="http://www.apotea.se" target="_blank">www.apotea.se</a> <br>  <a href="http://www.proxident.se" target="_blank">www.proxident.se</a>   <br>  <a href="http://www.sunstargum.se" target="_blank">www.sunstargum.se</a>');
        $('.lang_tandborstning_text35').html('<li> <a href="http://www.kom-hit.se" target="_blank">www.www.kom-hit.se</a> </li> <br> <li> <a href="http://www.bildstod.se" target="_blank">www.bildstod.se/</a> </li>');
        $('.lang_tandborstning_text36').html('Tandkr&auml;m f&ouml;r personer som st&aring;r p&aring; KETOGEN KOST. Dentosal original. Produkten inneh&aring;ller 0,5% sackarinnatrium. Rekommenderas fr&aring;n 6 &aring;r.');
        $('.lang_tandborstning_text37').html('');

        $('.lang_muntorrhet_text1').html('Munv&aring;rd f&oumlr barn - Tips vid muntorrhet');
        $('.lang_muntorrhet_text2').html('Torra l&auml;ppar och muntorrhet kan orsakas av munandning och vissa mediciner. Muntorrhet inneb&auml;r f&ouml;rh&ouml;jd kariesrisk och p&aring;verkan p&aring; munslemhinnan.');
        $('.lang_muntorrhet_text3').html('Sm&ouml;rj torra l&auml;ppar och munslemhinna med t ex en muntork doppad i rapsolja. B&ouml;rja alltid med att sm&ouml;rja l&auml;ppar och forts&auml;tt in i p&aring; kindens insida, tunga och gom.');
        $('.lang_muntorrhet_text4').html('Instruktionsfilm som visar hur man sm&ouml;rjer munslemhinnor och l&auml;ppar.');
        $('.lang_muntorrhet_text5').html('F&Ouml;RSLAG P&Aring; PRODUKTER VID MUNTORRHET');
        $('.lang_muntorrhet_text6').html('En muntork kan anv&auml;ndas f&ouml;r att sm&ouml;rja eller torka ur munnen. Finns i tv&aring; storlekar. F&ouml;r eng&aring;ngsbruk.');
        $('.lang_muntorrhet_text7').html('SM&OumlRJANDE OCH SALIVSTIMULERANDE PRODUKTER');
        $('.lang_muntorrhet_text8').html('F&ouml;r barn som &auml;r torra i munnen kan det k&auml;nnas sk&ouml;nt med n&aring;got sm&ouml;rjande medel som t ex rapsolja. Ta en teskeds m&auml;ngd och sm&ouml;rj runt inne i munnen med tungan, alternativt med en muntork som man doppat i oljan.');
        $('.lang_muntorrhet_text9').html('Olika geler mot muntorrhet finns att k&ouml;pa. De kan appliceras med t ex en muntork.');
        $('.lang_muntorrhet_text10').html('Zendium Saliva fuktgel baserad p&aring; colostrum (r&aring;mj&ouml;lk). Gelen &auml;r mild i smaken och inneh&aring;ller &auml;ven fluor.');
        $('.lang_muntorrhet_text11').html('Proxident munspray och munfuktgel finns med b&aring;de salivstimulerande och sm&ouml;rjande funktion.');
        $('.lang_muntorrhet_text12').html('Ytterligare information om munv&aring;rdsprodukter och hj&auml;lpmedel finns p&aring; f&ouml;ljande hemsidor: <br> <a href="http://www.mun-h-center.se">www.mun-h-center.se</a> <br>    <a href="http://www.apotea.se" target="_blank">www.apotea.se</a> <br> <a href="http://www.proxident.se">www.proxident.se</a>');
        $('.lang_muntorrhet_text13').html('Mjukg&ouml;rande l&auml;ppbalsam');
        $('.lang_muntorrhet_text14').html('FLUORPREPARAT (p&aring; tandv&aring;rdens rekommendation)');
        $('.lang_muntorrhet_text15').html('Om fluor och dess verkan');
        $('.lang_muntorrhet_text16').html('Proxident tandkr&auml;m f&ouml;r torr mun. Tandkr&auml;m utan smak. Anv&auml;nds fr&aring;n 6 &aring;r.');
        $('.lang_muntorrhet_text17').html('Flux dry mouth rinse. Fluorsk&ouml;lj med smak av jordgubb/mint. Inneh&aring;ller 0,2% NaF. Rekommenderas fr&aring;n 12 &aring;r.');
        $('.lang_muntorrhet_text18').html('Flux fluorsk&ouml;lj barn/vuxen.');
        $('.lang_muntorrhet_text19').html('Duraphattandkr&auml;m. Anv&auml;nds fr&aring;n 16 &aring;r.');

        $('.lang_inskolning_text1').html('1000-inl&auml;rning <br> En metod f&ouml;r inskolning i tandv&aring;rden');
        $('.lang_inskolning_text2').html('<b>1000-INL&Auml;RNING, <i>"de 1000 g&aring;ngernas pedagogik"</i></b><br>');
        $('.lang_inskolning_text3').html('1000-inl&auml;rningsmetoden har ursprungligen utarbetats i ett samarbetsprojekt mellan Barn- och ungdomspsykiatrin vid Skaraborgs sjukhus och Barn- och ungdomstandv&aring;rden vid K&auml;rnsjukhuset i Sk&ouml;vde och har d&auml;refter vidareutvecklats p&aring; Mun-H-Center till sin nuvarande form. Metoden inneb&auml;r att man avs&auml;tter l&auml;ngre behandlingstid under en och samma dag som inneh&aring;ller flera korta tr&auml;ningspass med sm&aring; pauser mellan varje pass. Varje moment tr&auml;nas flera g&aring;nger och tr&auml;ningspassen g&ouml;rs visuella och konkreta genom att anv&auml;nda bildst&ouml;d. Bildst&ouml;det visar momenten och ordningsf&ouml;ljden i bes&ouml;ket. Tr&auml;ningspassen &auml;r individuellt anpassade och m&aring;let &auml;r att f&aring; patienten att k&auml;nna sig delaktig, trygg och lyckad!');
        $('.lang_inskolning_text4').html('Film som sammanfattar inskolningsmetoden "1000-inl&auml;rning".');
        $('.lang_inskolning_text5').html('1000-inl&auml;rning <br> PLANERINGSBES&OumlKET');
        $('.lang_inskolning_text6').html('Vid det f&ouml;rsta bes&ouml;ket tr&auml;ffas behandlare och f&ouml;r&auml;ldrar utan barnet f&ouml;r ett planeringsm&ouml;te p&aring; tandkliniken. Ett fr&aring;geformul&auml;r anv&auml;nds som st&ouml;d f&ouml;r samtalet. M&ouml;tet och formul&auml;ret ger behandlaren v&auml;rdefull information om barnet och f&ouml;r&auml;ldrarna f&aring;r information om inskolningsmetoden och dess uppl&auml;gg. F&ouml;r&auml;ldrarna f&aring;r ocks&aring; k&auml;nnedom om var tandkliniken ligger, hur lokalerna ser ut, var de skall parkera och vem de skall tr&auml;ffa. Detta bidrar till &ouml;kad trygghet, b&aring;de f&ouml;r barn och f&ouml;r&auml;ldrar.');
        $('.lang_inskolning_text7').html('Efter samtalet med f&ouml;r&auml;ldrarna sammanst&auml;lls den indviduella inskolningsplanen och bildst&ouml;det utformas. <br> Bilderna kan s&auml;ttas in i ett fotoalbum eller visas p&aring; en bildplatta eller i en smartphone. F&ouml;r barn som har sv&aring;rt att se eller tolka bilder kan man ist&auml;llet anv&auml;nda f&ouml;rem&aring;l, som t ex en tandborste eller en munspegel, f&ouml;r att signalera en h&auml;ndelse.');
        $('.lang_inskolning_text8').html('1000-inl&auml;rning <br> F&OumlRSTA BES&OumlKET');
        $('.lang_inskolning_text9').html('Avs&auml;tt gott om tid f&ouml;r f&ouml;rsta bes&ouml;ket, ca 1,5-2 timmar. F&ouml;rs&ouml;k ha en s&aring; lugn och avskalad milj&ouml; som m&ouml;jligt i behandlingsrummet. <br>Tr&auml;na i korta pass med pauser mellan passen. G&ouml;r ett l&auml;ngre uppeh&aring;ll efter ungef&auml;r halva tiden. Barnet f&aring;r d&aring; m&ouml;jlighet att vila, &auml;ta ett mellanm&aring;l, leka, lyssna p&aring; musik eller ta en promenad. Var g&auml;rna kvar i behandlingsrummet under de korta pauserna men l&auml;mna rummet under det l&auml;ngre uppeh&aring;llet.');
        $('.lang_inskolning_text10').html('F&ouml;lj den individuella planen. Upprepa tr&auml;ningspassen s&aring; exakt som m&ouml;jligt och l&auml;gg gradvis till ett moment i taget. Ibland kan det vara bra att anv&auml;nda ett tidshj&auml;lpmedel, t ex en timer eller ett timglas, f&ouml;r att f&ouml;rtydliga tr&auml;ningspassens l&auml;ngd. Det &auml;r f&ouml;rst&aring;s viktigt att f&ouml;rs&ouml;ka t&auml;nja och str&auml;cka gr&auml;nserna en aning men ocks&aring; att vara observant p&aring; barnets reaktioner och inte g&aring; f&ouml;r fort fram.');
        $('.lang_inskolning_text11').html('Visa en bild (eller f&ouml;rem&aring;l) f&ouml;r varje moment. Var lyh&ouml;rd f&ouml;r barnets reaktioner och ta en paus INNAN barnet tr&ouml;ttnar och blir oroligt. Det &auml;r v&auml;ldigt viktigt att barnet alltid k&auml;nner sig duktigt och har m&ouml;jlighet att p&aring;verka behandlingen genom att ha egen kontroll.');
        $('.lang_inskolning_text12').html('Behandlare och f&ouml;r&auml;lder bildar det team som st&ouml;ttar barnet genom hela inskolningsprocessen. Genom att ha &ouml;gonkontakt med varandra under behandlingsg&aring;ngen ges m&ouml;jlighet att utbyta signaler om hur behandlingen skall fortskrida. Sm&aring;prata inte, utan var strukturerad. Bel&ouml;na och uppmuntra barnet under hela behandlingen och s&auml;g: <i>bra, duktig, fint!</i>');
        $('.lang_inskolning_text13').html('Ge barnet tid och m&ouml;jlighet att ge uttryck f&ouml;r sin upplevelse av bes&ouml;ket. <br> P&aring; bilden ovan sker kommunikationen med hj&auml;lp av en samtalsmatta. L&auml;s mer om denna metod p&aring; <font size="3"  > <a href="http://www.talkingmats.com" target="_blank">www.talkingmats.com</a> </font>');
        $('.lang_inskolning_text14').html('Avsluta med att visa n&aring;got som g&ouml;r att barnet f&ouml;rst&aring;r att behandlingen &auml;r klar f&ouml;r dagen. Det kan vara att sl&auml;cka lampan eller att visa ett foto p&aring; att man skall &aring;ka hem i familjens bil.');
        $('.lang_inskolning_text15').html('BEL&OumlNA - det skall vara n&aring;got som barnet verkligen uppskattar och blir glad f&ouml;r. M&aring;nga g&aring;nger r&auml;cker det med de sm&aring; leksaker som finns p&aring; tandkliniken men ofta tar f&ouml;r&auml;lder med n&aring;gonting som behandlaren sedan &ouml;verl&auml;mnar.');
        $('.lang_inskolning_text16').html('1000-inl&auml;rning <br> VISUELL KOMMUNIKATION/BILDST&OumlD');
        $('.lang_inskolning_text17').html('Bildst&ouml;det visas p&aring; det s&auml;tt som barnet &auml;r mest vant vid att anv&auml;nda t ex p&aring; en bildplatta, smartphone eller i ett fotoalbum.');
        $('.lang_inskolning_text18').html('Ing&aring;ng till tandkliniken.');
        $('.lang_inskolning_text19').html('V&auml;ntrum');
        $('.lang_inskolning_text20').html('Behandlare');
        $('.lang_inskolning_text21').html('Tandl&auml;karstol');
        $('.lang_inskolning_text22').html('Lampa');
        $('.lang_inskolning_text23').html('Tandkr&auml;m');
        $('.lang_inskolning_text24').html('Tandborste');
        $('.lang_inskolning_text25').html('Munspegel');
        $('.lang_inskolning_text26').html('Puts');
        $('.lang_inskolning_text27').html('Bl&auml;ster - luft/vatten');
        $('.lang_inskolning_text28').html('Sug');
        $('.lang_inskolning_text29').html('Muntork');
        $('.lang_inskolning_text30').html('Fluorlack och pensel');
        $('.lang_inskolning_text31').html('Bel&ouml;ning - klisterm&auml;rke');
        $('.lang_inskolning_text32').html('Slutbild');
        $('.lang_inskolning_text33').html('Exempel p&aring; bildst&ouml;d');
        $('.lang_inskolning_text34').html('P&aring; KomHITs hemsida kan du utforma ditt eget bildst&ouml;d. www.kom-hit.se');
        $('.lang_inskolning_text35').html('Ytterligare information om bildst&ouml;d finns p&aring; f&ouml;ljande hemsidor: <br>  <a href="http://www.kom-hit.se" target="_blank">www.kom-hit.se</a> <br> <a href="http://www.bildstod.se" target="_blank">www.bildstod.se</a>');

        $('.lang_info_text').html('<p><b>V&auml;lkommen till Mun-H-Center!</b></p> <p> MHC-appen ger dig m&ouml;jlighet att snabbt och enkelt f&aring; information om olika s&auml;llsynta/ovanliga diagnoser* och hur dessa tillst&aring;nd kan f&ouml;rv&auml;ntas p&aring;verka munh&auml;lsa, bettutveckling och orofacial funktion. <br> Informationen &auml;r huvudsakligen h&auml;mtad fr&aring;n f&ouml;ljande k&auml;llor: <br> <ul> <li>Socialstyrelsens kunskapsdatabas om ovanliga diagnoser <a href="http://www.socialstyrelsen.se/ovanligadiagnoser" target="_blank"> (www.socialstyrelsen.se/ovanligadiagnoser)</a></li> <li>&Aring;grenskas Dokumentation (<a href="http://www.agrenska.se" target="_blank">www.agrenska.se</a>)</li> <li>Aktuella vetenskapliga artiklar</li> <li> MHC-basen - Mun-H-Centers databas &ouml;ver orofaciala manifestationer vid s&auml;llsynta diagnoser.</li> </ul> MHC-basen inneh&aring;ller i dagsl&auml;get data fr&aring;n drygt 3000 personer med s&auml;llsynta  diagnoser. Data har samlats in via Mun-H-Centers unders&ouml;kningsformul&auml;r. Rapporter fr&aring;n MHC-basen finns publicerade under respektive diagnos p&aring; Mun-H-Centers hemsida (<a href="http://www.mun-h-center.se" target="_blank">www.mun-h-center.se</a>). D&auml;r kan man &auml;ven l&auml;sa mer om Mun-H-Center och om vad vi kan erbjuda n&auml;r det g&auml;ller utbildningar, konsultationer och hj&auml;lpmedelsinformation. <br> I maj 2015 kompletterades MHC-appen med praktiska r&aring;d kring inskolning i tandv&aring;rden och med tips om munv&aring;rd f&ouml;r barn. Observera att r&aring;d och produktinformation ges utifr&aring;n svenska rekommendationer. <br>MHC-appen har utvecklats av Mun-H-Center i samarbete med Innovationsslussen i VGR och Helpit. MHC-appen f&ouml;rvaltas och vidarutvecklas idag av Mun-H-Center i samarbete med HiQ. * Sjukdomar eller skador som finns hos h&ouml;gst 100 personer per miljon inv&aring;nare och som leder till omfattande unktionsneds&auml;ttning (Socialstyrelsen). </p>');
        $('.lang_kallor_text').html('<p><font size="3"  ><b>Informationsk&auml;llor:</b></font></p><p><font size="3"  >Informationen &auml;r huvudsakligen h&auml;mtad fr&aring;n f&ouml;ljande k&auml;llor:</font></p><ul type="DISC"><li><font size="3"  >Socialstyrelsens kunskapsdatabas om ovanliga diagnoser <a href="http://www.socialstyrelsen.se/ovanligadiagnoser" target="_blank">www.socialstyrelsen.se/ovanligadiagnoser</a></font></li><li><font size="3"  >&Aring;grenskas Dokumentation </font><a href="http://www.agrenska.se" target="_blank"><font   size="3"  ><u>www.agrenska.se</u></font></a><font size="3"  ></font></li><li><font size="3"  >Aktuella vetenskapliga artiklar</font></li><li><font size="3"  >MHC-basen - Mun-H-Centers databas &ouml;ver orofaciala manifestationer vid s&auml;llsynta diagnoser <a href="http://www.mun-h-center.se" target="_blank">www.mun-h-center.se</a></font></li></ul>');


        $('.lang_contact_text').html('<p><font size="4"  ><b>Kontaktuppgifter:</b></font></p><font size="3"  ><p><b>Mun-H-Center Odontologen</b><br /><i>Bes&ouml;kadress:</i><br />Medicinaregatan 12 A<br />413 90 G&ouml;teborg<br /><i>Postadress:</i><br />Folktandv&aring;rden V&auml;stra G&ouml;taland<br />Mun-H-Center Odontologen<br />Box 7163<br />SE-402 33 G&ouml;teborg<br /><i>Telefon: </i>+46 (0)10-441 79 80</p></font>');
        //$('#diagnoserlistview').attr("data-filter-placeholder", "S&ouml;kJS..");
        $('[data-type="search"]').attr("placeholder", "Sök..");
        $('#swe_lang').attr('src', 'img/flaggor/Sverige-180.png');
        $('#eng_lang').attr('src', 'img/flaggor/ENG-180-unselected.png');
        $(".hide_if_eng").show();
        $('.hide_if_eng').show();
    }


    else if(language == 'eng')
    {
        $('.lang_diagnoser').html('Diagnoses');
        $('.lang_info').html('About MHC-app');
        $('.lang_kallor').html('Sources of information');
        $('.lang_kontakt').html('Contact');
        $('.lang_favoriter').html('Latest searches');
        $('.lang_hem').html('home');
        $('.lang_hem_capital').html('Home');
        $('.lang_tillbaka').html('back');
        $('.lang_allmant').html('General information');
        $('.lang_diagnoskod').html('ICD-10 diagnosis code');
        $('.lang_synonym').html('Synonym');
        $('.lang_forekomst').html('Estimated occurrence');
        $('.lang_orsak').html('Cause');
        $('.lang_allmanna_symtom').html('General symptoms');
        $('.lang_odontologiska_symtom').html('Oral symptoms');
        $('.lang_behandling').html('Advice on monitoring and treatment');
        $('.lang_bilder').html('Images');
        $('.lang_munvard').html('Oral care for Children');  // Dummy
        $('.lang_inskolning').html('Education in dental care');
        $('.lang_tandborstning').html('Tips for tooth brushing');
        $('.lang_muntorrhet').html('Tips for dry mouth');  // Dummy
        $('.lang_munvard_short').html('back');
        $('.lang_inskolning').html('Familiarisation to dental care');
        $('.lang_inskolning_short').html('Familiarisation to dental care');
        $('.lang_muntorrhet_short').html('Dry mouth');

        $('.lang_tandborstning_short').html('Tooth brushing');

         $('.lang_tandborstning_text1').html('Oral care for children – Tips for tooth brushing.');

        $('.lang_tandborstning_text2').html('It can be difficult to brush somebody else\'s teeth. In this section, we\'d like to give some practical tips on how tooth brushing can be made easier and as effective as possible. Toothpaste with fluoride helps to strengthen the enamel, and thereby reduces the risk of cavities. The ideal is brushing every morning and evening. The goal is for the child to have a healthy mouth all his/her life.');
        $('.lang_tandborstning_text3').html('DIFFERENT WORKING POSITIONS FOR TOOTH BRUSHING');
        $('.lang_tandborstning_text4').html('Support the child\'s head with your body. It\'s important to have a working position that feels safe and good, both for the child and the person brushing.');
        $('.lang_tandborstning_text5').html('Support the child\'s head with your knee.');
        $('.lang_tandborstning_text6').html('Brush when the child is lying on the changing table or in bed.');
        $('.lang_tandborstning_text7').html('Brush sitting on the floor.');
        $('.lang_tandborstning_text8').html('TOOTH BRUSHING');
        $('.lang_tandborstning_text9').html('Create good visibility by holding out cheeks and lips when brushing. Place the brush at the gumline, and rub with small movements.');
        $('.lang_tandborstning_text10').html('An electric toothbrush is an alternative for children as well. Place the brush at the gumline, and brush one tooth at a time. Keep the brush still on each tooth surface, lift it to the next tooth, don\'t rub.');
        $('.lang_tandborstning_text11').html('Double-action toothbrush Collis Curve brushes the inside, outside and biting surface at the same time.');
        $('.lang_tandborstning_text13').html('The monobrush is used for difficult to reach surfaces, deep grooves, and if the child struggles to open wide.');
        $('.lang_tandborstning_text14').html('Dental floss Glideflosspick makes cleaning between the teeth easier.');
        $('.lang_tandborstning_text15').html('Children with sensitive gums may need an extra soft toothbrush.');
        $('.lang_tandborstning_text16').html('An oral bite support may help the child to keep his/her mouth open for brushing.');
        $('.lang_tandborstning_text17').html('Film showing the use of an oral bite support. The film\'s name on YouTube: \"Bitst&ouml;d som hj&auml;lp vid tandborstning\". (Oral bite support facilitating tooth brushing.)');
        $('.lang_tandborstning_text18').html('A Chewy Tube can be used as an oral bite support.');
        $('.lang_tandborstning_text19').html('A toothbrush handle with or without a silicone grip enlargement may work as an oral bite support.');
        $('.lang_tandborstning_text20').html('An hourglass or timer shows how long to brush for.');
        $('.lang_tandborstning_text21').html('With the help of a mouth angle expander, you can get better visibility into the mouth, and it may be easier to reach the teeth.');
        $('.lang_tandborstning_text22').html('Film showing how to insert a mouth angle expander for brushing. The film\'s name on YouTube: \"Ins&auml;ttning av munvinkelh&aring;llare\". (Insertion of mouth angle expander.)');
        $('.lang_tandborstning_text23').html('Film showing how to use a mouth angle expander for tooth brushing. The film\'s name on YouTube: \"Munvinkelh&aring;llare som hj&auml;lp vid tandborstning\". (Mouth angle expander facilitating tooth brushing.)');
        $('.lang_tandborstning_text24').html('CHOICE OF TOOTHPASTE');
        $('.lang_tandborstning_text25').html('<u>Children under the age of 2:</u> Brush teeth twice per day with toothpaste containing 1,000 ppm fluoride, an amount as big as the nail of the child\'s little finger. <br> <u>Children aged 2–6:</u> Brush teeth twice per day with toothpaste containing 1,000 ppm fluoride, an amount as big as a pea. <br> <u> Children over the age of 6:</u>  Brush teeth twice per day with toothpaste containing 1450 ppm fluoride, an amount of 1–2 cm. Recommendations from the "Fluoride Guide", Region V&auml;stra G&ouml;taland.');
        $('.lang_tandborstning_text26').html('How does fluoride work?');
        $('.lang_tandborstning_text27').html('Toothpaste without preservatives and foaming agents (sodium dodecyl sulphate). It is gentle on the mucous membrane, and does not foam. The toothpaste is available for adults, children aged 0–6 and babies aged 0–2 (with no flavourings).');
        $('.lang_tandborstning_text28').html('Toothpaste without taste. Salutem children\'s toothpaste is used for children under the age of 6. For children over the age of 6, Salutem adult toothpaste is used.');
        $('.lang_tandborstning_text29').html('Specialist toothpaste for people who are on a KETOGENIC DIET. Recommended on individual indications, and provided by dental care providers.<br> <br> <u> Children aged 0–3:</u> Orbi Clean & Polish, RDA 40, 0.1 % fluoride. Used as normal toothpaste for the age group. The product contains saccharine sodium <1 %. Alternative: Brush with Dentan fluoride solution 0.05 % (no taste). 5 ml of solution is mixed with 5 ml of water.<br>  <br> <u>Children aged 4 and up:</u> Orbi Clean & Polish RDA 40, 0.1 % fluoride. Used as normal toothpaste for the age group. The product contains saccharine sodium <1 %. Alternative: Brush with Dentan fluoride solution 0.05 % (no taste).');
        $('.lang_tandborstning_text30').html('If there are particular difficulties with tooth brushing, it is even more important to add fluoride to strengthen the enamel. Dip an oral wipe in fluoride solution, or take a little bit of toothpaste on your finger, and move around on the teeth.');
        $('.lang_tandborstning_text31').html('Fluoride solution 0.05 % NaF for children aged 6–12, and fluoride solution 0.2 % NaF for children over the age of 12 and adults. Used if there is extra need for increased preventative oral care.');
        $('.lang_tandborstning_text32').html('Toothpaste with extra high fluoride content. Used if there is increased risk of caries. Only if recommended by dental care providers.');
        $('.lang_tandborstning_text33').html('In cases of gum inflammation and increased risk of caries, dental care providers may recommend antibacterial toothpaste (from age 6 and up).');
        $('.lang_tandborstning_text34').html('');
        $('.lang_tandborstning_text35').html('');
        $('.lang_tandborstning_text36').html('Toothpaste for people on a KETOGENIC DIET. Dentosal original. The product contains 0.5 % saccharine sodium. Recommended from age 6 and up.');
        $('.lang_tandborstning_text37').html('Note that tips and product information is given based on Swedish recommendations.');

        $('.lang_muntorrhet_text1').html('Tips for Children with dry mouth');
        $('.lang_muntorrhet_text2').html('Dry lips and mouth can be caused by mouth breathing and certain medicines.');
        $('.lang_muntorrhet_text3').html('Moisturise dry lips and the mucous membrane in the mouth with an oral wipe dipped in rapeseed oil. Always begin with moisturising the lips; then continue into the mouth with mucous membranes, tongue, teeth and palate.');
        $('.lang_muntorrhet_text4').html('Instructional film showing how to moisturise the mucous membranes in the mouth and the lips. The film\'s name on YouTube is \"Sm&ouml;rjning av munnen med muntork\". (Moisturising the mouth with an oral wipe.)');
        $('.lang_muntorrhet_text5').html('SUGGESTED PRODUCTS FOR DRY MOUTH');
        $('.lang_muntorrhet_text6').html('An oral wipe can be used to moisturise or dry the mouth. There are two sizes. Not reuseable.');
        $('.lang_muntorrhet_text7').html('MOISTURISING AND SALIVA-STIMULATING PRODUCTS');
        $('.lang_muntorrhet_text8').html('For children who have dry mouth, it can feel nice with something moisturising, like rapeseed oil. Take a teaspoon full and moisturise inside the mouth using the tongue, or an oral wipe dipped in the oil.');
        $('.lang_muntorrhet_text9').html('Various gels for dry mouth are available to buy. They can be applied with an oral wipe, for instance.');
        $('.lang_muntorrhet_text10').html('Zendium Saliva moisturising gel, based on colostrum (raw milk). The gel\'s taste is mild, and it contains fluoride.');
        $('.lang_muntorrhet_text11').html('Proxident mouth spray and oral moisturizing gel are available with both saliva-stimulating and lubricating functions.');
        $('.lang_muntorrhet_text12').html('Further information about oral care products and aids can be found on the following websites: <br> <a href="http://www.mun-h-center.se">www.mun-h-center.se</a> <br>    <a href="http://www.apotea.se" target="_blank">www.apotea.se</a> <br> <a href="http://www.proxident.se">www.proxident.se</a>');
        $('.lang_muntorrhet_text13').html('Softening lip balm');
        $('.lang_muntorrhet_text14').html('FLUORIDE PREPARATIONS (on recommendation from dental care)');
        $('.lang_muntorrhet_text15').html('About fluoride and its effects');
        $('.lang_muntorrhet_text16').html('Proxident toothpaste for dry mouth. Flavourless toothpaste. Used from age 6 upwards.');
        $('.lang_muntorrhet_text17').html('Flux dry mouth rinse. Fluoride rinse with strawberry/mint flavour. Contains 0.2 % NaF. Recommended from age 12 upwards.');
        $('.lang_muntorrhet_text18').html('Flux fluoride rinse child/adult.');
        $('.lang_muntorrhet_text19').html('Duraphat toothpaste. Used from age 16 upwards.');

        $('.lang_inskolning_text1').html('1000-learning. A method for getting familiar with dental care.');
        $('.lang_inskolning_text2').html('<b>1000-LEARNING, <i>"The pedagogy of the 1000 times"</i></b><br>');
        $('.lang_inskolning_text3').html('The method involves dedicating more treatment time in the same day, and including several brief practice sessions with little breaks in-between each session. Each procedure is practiced several times, and the practice sessions are made visual and concrete with visual support. The images show the different procedures and the sequence of the visit. The practice session is adapted to fit the individual, and the goal is to make the patient feel part of the process, safe and successful!');
        $('.lang_inskolning_text4').html('Film demonstrating the 1000-learning method');
        $('.lang_inskolning_text5').html('1000-learning. PLANNING VISIT');
        $('.lang_inskolning_text6').html('At the first visit, the treatment-giver and the parents meet without the child for a planning visit at the dental clinic. A questionnaire is used as support for the talk. The meeting and the questionnaire give the treatment-giver valuable information about the child, and the parents get information about the familiarisation method and its set-up. They will also find out where the dental clinic is, what the premises look like, where to park and who they are seeing. This contributes to an increased sense of safety, both for the child and the parents.');
        $('.lang_inskolning_text7').html('Following the talk with the parents, the individual familiarisation plan is created, and visual support is designed. The images can be inserted into a photo album or be shown on a tablet or smartphone. For children who struggle to see or to interpret images, objects, such as a toothbrush or a mouth mirror, can be used instead, to signal an event.');
        $('.lang_inskolning_text8').html('1000-learning. FIRST VISIT');
        $('.lang_inskolning_text9').html('Allocate plenty of time for the first visit, around 1.5–2 hours. Try to have an environment in the treatment room that is as calm and peeled back as possible. Practice in short sessions with breaks in-between. Take a longer break about halfway through. The child can then rest, eat a snack, play, listen to music or take a walk. It\'s fine to stay in the treatment room during the shorter breaks, but do leave the room during the longer break.');
        $('.lang_inskolning_text10').html('Follow the individual plan. Repeat the practice sessions as identically as possible, and add one procedure at a time gradually. Sometimes, it\'s good to use a time aid, e.g. a timer or hourglass, to make the practice sessions\' length clear. It is, of course, important to try and stretch the limits a bit, but also to be aware of the child\'s reactions and not to move too quickly.');
        $('.lang_inskolning_text11').html('Show an image (or an object) for each procedure. Be sensitive to the child\'s reactions, and take a break BEFORE the child gets tired or anxious. It is very important that the child always feels that he/she is doing well and that he/she can influence the treatment by being in control.');
        $('.lang_inskolning_text12').html('The treatment-giver and the parent form the team that supports the child throughout the familiarisation process. Having eye contact with each other during the treatment allows you to exchange signals about how the treatment is to continue. Don\'t chit-chat, be structured. Reward and encourage the child throughout the treatment and say: "Good, well done, great!"');
        $('.lang_inskolning_text13').html('Give the child the time and opportunity to express how he/she experienced the visit. In the above image, communication is facilitated by a talking mat. Read more about this method at <font size="3"  > <a href="http://www.talkingmats.com" target="_blank">www.talkingmats.com</a> </font>');
        $('.lang_inskolning_text14').html('Finish by showing something that makes it clear to the child that the treatment is done for the day. It can be turning the light off or showing a photo of you going home in the family car.');
        $('.lang_inskolning_text15').html('REWARD – this should be something that the child really appreciates and is happy to get. The little toys at the dental clinic are often enough, but parents often bring something that the treatment-giver then presents.');
        $('.lang_inskolning_text16').html('1000-learning. VISUAL COMMUNICATION/VISUAL SUPPORT');
        $('.lang_inskolning_text17').html('Visual support is shown in the way that the child is most used to, e.g. on a tablet, a smartphone or in a photo album.');
        $('.lang_inskolning_text18').html('Dental clinic entrance');
        $('.lang_inskolning_text19').html('Waiting room');
        $('.lang_inskolning_text20').html('Treatment-giver');
        $('.lang_inskolning_text21').html('Dentist\'s chair');
        $('.lang_inskolning_text22').html('Lamp');
        $('.lang_inskolning_text23').html('Toothpaste');
        $('.lang_inskolning_text24').html('Toothbrush');
        $('.lang_inskolning_text25').html('Mouth mirror');
        $('.lang_inskolning_text26').html('Polishing tool');
        $('.lang_inskolning_text27').html('Blaster – air/water');
        $('.lang_inskolning_text28').html('Suction tool');
        $('.lang_inskolning_text29').html('Oral wipe');
        $('.lang_inskolning_text30').html('Fluoride coating and brush');
        $('.lang_inskolning_text31').html('Reward – sticker');
        $('.lang_inskolning_text32').html('End image');
        $('.lang_inskolning_text33').html('Example of KomHIT visual support');
        $('.lang_inskolning_text34').html('On KomHIT\'s website, you can create your own image support. www.kom-hit.se');
        $('.lang_inskolning_text35').html('');
        $(".hide_if_eng").hide();
        $('.hide_if_eng').hide();







        $('.lang_info_text').html('<p><b>Welcome to Mun-H-Center!</b> </p> The MHC-app gives you the opportunity to simply and rapidly find information about rare diseases* and how these conditions might have an impact on oral health and orofacial function. The information has mainly been retrieved from the following sources: The database on Rare Diseases from The Swedish National Board of Health and Welfare <a href="http://www.socialstyrelsen.se/rarediseases" target="_blank"><u>www.socialstyrelsen.se/rarediseases</a></u></li> <li>The &Aring;grenska Documentation  (<a href="http://www.agrenska.se" target="_blank"><u>www.agrenska.se</u>  </a>)</li> <li>Scientific publications</li> <li> The MHC- database on rare diseases.</li> </ul> </p>  <p>At present, the MHC-database contains data from more than 3000 individuals with rare diseases. Data has been collected through the Mun-H-Center assessment forms. Reports from the MHC-database are published on the Mun-H-Center web site (<a href="http://www.mun-h-center.se" target="_blank"><u>www.mun-h-center.se</u>  </a>). On the web site you can also read more about the center and find out what we can offer concerning courses, consultations as well as information regarding orofacial aids and assistive devices. </p><p></p> In May 2015 the MHC app was supplemented with practical advice on how to introduce children to dental care and with some advice on oral care for children. Please observe that any advice or product information given in this application is based on Swedish recommendations and that you will have to check with your dental healthcare advisor what the recommendations are in your country.<p>The MHC app has been developed by Mun-H-Center in cooperation with Innovationsslussen in VGR and Helpit. The MHC app is now maintained and continuously updated by Mun-H-Center in cooperation with HiQ.</p><p> *Diseases or disorders which affect fewer than 100 people per million, and which lead to a marked degree of disability (the Swedish National Board of Health and Welfare).</p>');
        $('.lang_kallor_text').html('<p><font size="3"  ><b>Sources of information:</b></font></p><p><font size="3"  >The information has mainly been retrieved from the following sources:</font></p><ul type="DISC"><li><font size="3"  >The database on Rare Diseases from The Swedish National Board of Health and Welfare <a href="http://www.socialstyrelsen.se/rarediseases" target="_blank"><div class="textLink"> www.socialstyrelsen.se/rarediseases </div></a></font></li><li><font size="3"  >The &Aring;grenska Documentation <a href="http://www.agrenska.se" target="_blank">www.agrenska.se</a></font></li><li><font size="3"  >Scientific publications</font></li><li><font size="3"  >The MHC- database on rare diseases <a href="http://www.mun-h-center.se" target="_blank">www.mun-h-center.se</a></font></li></ul>')
        $('.lang_contact_text').html('<p><font size="4"  ><b>Contact:</b></font></p><p><b>Mun-H-Center Odontologen</b><br /><i>Visiting address:</i><br />Medicinaregatan 12 A<br />413 90 G&ouml;teborg<br /><i>Postal address:</i><br />Folktandv&aring;rden V&auml;stra G&ouml;taland<br />Mun-H-Center Odontologen<br />Box 7163<br />SE-402 33 G&ouml;teborg<br /><i>Phone: </i>+46 (0)10-441 79 80</p></font>');
        $('[data-type="search"]').attr("placeholder", "Search...");
        $('#swe_lang').attr('src','img/flaggor/Sverige-180-unselected.png');
        $('#eng_lang').attr('src', 'img/flaggor/ENG-180.png');



    }
}
