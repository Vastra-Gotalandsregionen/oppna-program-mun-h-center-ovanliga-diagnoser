var version = "7"; //Increment with every database update
var db;
// Wait for PhoneGap to load
//document.addEventListener("deviceready", onDeviceReady, false);

var previousPage = undefined;
var previousDiagnosId = undefined;
var language = null;
var player = null;



//Search-filter callback for listview. Filters on first letter.
function searchfilter( text, searchValue ) {
    var text = text.split(', '); //Text to array. Diagnose might contain multiple comma-separated synonyms.

    for(x=0; x < text.length; x++)
        if(text[x].toLowerCase().slice( 0, searchValue.length ) == searchValue)
            return false; //Result found

    return true; //No result found, filter this entry.
}
function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
}

// PhoneGap is ready
function onDeviceReady()
{
    console.log("Device ready");
    var database_initiated = window.localStorage.getItem("database_initiated" + version);
    var swe_favorites = window.localStorage.getItem("swe_favorites");
    var eng_favorites = window.localStorage.getItem("eng_favorites");
    language = window.localStorage.getItem("language");

    var phoneModel = device.model;
    var windowHeight = window.innerHeight;
    console.log(windowHeight);
    console.log(phoneModel);
    // If iphone4 or smaller hides the logo on front page to
    // make space for menu
    if (windowHeight <= 480)
    {
        $(".logoClass").slideUp("slow");
        //$('.logoClass').hide("");
    }
    else
    {
        $(".logoClass").show();
        $('.logoClass').show();
    }
    if(!language)
        setLanguage("swe");
    else
        setLanguage(language);

    //Store favorites in a comma separated id string using HTML5 localStorage
    if(!swe_favorites)
        window.localStorage.setItem("swe_favorites", "");

    if(!eng_favorites)
        window.localStorage.setItem("eng_favorites", "");

    if(!database_initiated)
    {
        $.mobile.loadingMessage = "Laddar...";
        $.mobile.showPageLoadingMsg("a", "Laddar...", false); //show loading

        setTimeout(function() //Bugfix: Timeout needed for loading dialog to show
        {
            var db = getDatabase();
            db.transaction(populateDB, errorCB, successCB); //Store diagnoses and images in a sqlite-database using HTML5 Web Sql

            window.localStorage.setItem("database_initiated" + version, "true");
        }, 100);
    }
}

//*************************************************
//
// EVENT HANDLERS
//
//*************************************************
$(function()
{
    $('#swe_lang').click(function() {
        setLanguage("swe");
        console.log("Svenska");

    });

    $('#eng_lang').click(function() {
        setLanguage("eng");

    });

    //Scrolls to top of content when collapsible is expanded
    $("div[data-role='collapsible']").live('expand', function()
    {
        var top = $(this).position().top;
        $.mobile.silentScroll(top);
    });

    $( '#dialog' ).live( 'pageshow',function(event){
        previousPage = 'dialog';
    });

    $( '#diagnoser' ).live( 'pageshow',function(event)
    {
        db = getDatabase();
        db.transaction(queryDiagnoser, errorCB);

        $('input[data-type="search"]').val(""); //Reset search
        $('input[data-type="search"]').trigger("change");
        $("#diagnoserlistview").listview('option', 'filterCallback', searchfilter); //Search-filter callback
        previousPage = 'diagnoser';
    });

    $( '#diagnos' ).live( 'pageshow',function(event)
    {
        var id = (previousPage == 'dialog') ? previousDiagnosId : $(event.target).attr("data-url").replace(/.*id=/, ""); //Parse hashtag for id. Ex: #diagnos?id=5;

        previousDiagnosId = id;

        var favorites = window.localStorage.getItem(language + "_favorites");
        favorites = favorites.split(","); //String to array

        //Remove id from favorites if it already exists
        for(x=0; x < favorites.length; x++)
            if(favorites[x] == id)
                favorites.splice(x,1);

        favorites.unshift(id); //Insert id at beginning of array
        favorites = favorites.slice(0,10) //Limit to 10 favorites
        favorites = favorites.join(","); //Array to string

        window.localStorage.setItem(language + "_favorites", favorites);

        if(previousPage != 'dialog') //Don't reset the diagnos-page if we're returning from a dialog
        {
            $('#allmant_collapsible').trigger('expand');
            $('#diagnoskod_collapsible').trigger('collapse');
            $('#forekomst_collapsible').trigger('collapse');
            $('#orsak_collapsible').trigger('collapse');
            $('#allmanna_symptom_collapsible').trigger('collapse');
            $('#odontologiska_symptom_collapsible').trigger('collapse');
            $('#behandling_collapsible').trigger('collapse');
            $('#bilder_collapsible').trigger('collapse');
            $('#synonym_collapsible').trigger('collapse');

            $('#diagnoskod_collapsible').show();
            $('#forekomst_collapsible').show();
            $('#orsak_collapsible').show();
            $('#allmanna_symptom_collapsible').show();
            $('#odontologiska_symptom_collapsible').show();
            $('#behandling_collapsible').show();
            $('#bilder_collapsible').show();
            $('#synonym_collapsible').show();
        }

        var db = getDatabase();
        db.transaction(function(transaction){queryDiagnos(transaction, id);}, errorCB);
        previousPage = 'diagnos';
    });

    $( '#favorites' ).live( 'pageshow',function(event)
    {
        var favorites = window.localStorage.getItem(language + "_favorites");
        favorites = favorites.split(",");
        var db = getDatabase();
        db.transaction(function(transaction){queryFavorites(transaction, favorites);}, errorCB);
        previousPage = 'favorites';
    });

    $( '#info' ).live( 'pageshow',function(event)
    {
        show_text_page('info');
    });

    $( '#kallor' ).live( 'pageshow',function(event)
    {
        show_text_page('kallor');
    });

    $( '#kontakt' ).live( 'pageshow',function(event)
    {
        show_text_page('kontakt');
    });

});

function show_text_page(page)
{
    $('#'+page+'_swe').hide();
    $('#'+page+'_eng').hide();

    if(language == 'swe')
        $('#'+page+'_swe').show();
    else if(language == 'eng')
        $('#'+page+'_eng').show();

    previousPage = page;
}

function popImageDialog(img_src, header)
{
    $('#dialog_img').attr('src', ''); //Clear previous image
    $.mobile.changePage("#dialog");
    $('#dialog_img').attr('src', img_src); //Load image
    $('#dialog_header').html(header);
}

function onYouTubeIframeAPIReady()
{
    console.log("onYouTubeIframeAPIReady");
    player = new YT.Player('tubePlayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}



function onPlayerReady(event)
{
    console.log("onPlayerReady");
    player.mute();
}
