var smallMedia = window.matchMedia("(max-width: 650px)")
var midMedia = window.matchMedia("(max-width: 810px)")
var bigMedia = window.matchMedia("(max-width: 1024px)")

function setup(){
    if (midMedia.matches) jQuery(".instruction").hide();
    else jQuery(".instruction").show();
}

function mediaQ(){
    //small size screen
    if (smallMedia.matches){
        
    }
    //middle size screen
    else if (midMedia.matches){
        $(".instruction").hide();
        $(".describe .big-image").hide();
    }
    //big size screen
    else if (bigMedia.matches){
        $(".instruction").show();
    }
    //full size
    else{

    }
}

function showBig(){
    if (!(midMedia.matches)) $(".describe .big-image").show();
}

function hideBig(){
    $(".describe .big-image").hide();
}