var smallMedia = window.matchMedia("(max-width: 600px)")
var midMedia = window.matchMedia("(max-width: 810px)")
var bigMedia = window.matchMedia("(max-width: 1024px)")

function setup(){
    if (smallMedia.matches) jQuery(".gallery").hide();
    else jQuery(".gallery").show();
}

function mediaQ(){
    //small size screen
    if (smallMedia.matches){
        $(".gallery").hide();
    }
    //middle size screen
    else if (midMedia.matches){
        $(".gallery").show();
    }
    //big size screen
    else if (bigMedia.matches){
        
    }
    //full size
    else{

    }
}

function go_left(){
    switch ($(".second").attr("id")){
        case "horse":
            $("#horse").removeClass("second");
            $("#horse").addClass("third");
            $("#lion").removeClass("first");
            $("#lion").addClass("second");
            $(".big-image img").attr("src","image/animal/lion-high.jpg")
            break;
        case "butter":
            $("#butter").removeClass("second");
            $("#butter").addClass("third");
            $("#horse").removeClass("first");
            $("#horse").addClass("second");
            $("#lion").addClass("first");
            $("#tiger").removeClass("third");
            $(".big-image img").attr("src","image/animal/horse-high.jpg")
            break;
        case "tiger":
            $("#tiger").removeClass("second");
            $("#tiger").addClass("third");
            $("#butter").removeClass("first");
            $("#butter").addClass("second");
            $("#horse").addClass("first");
            $(".big-image img").attr("src","image/animal/butter-high.jpg")
            break;
    }
}

function go_right(){
    switch ($(".second").attr("id")){
        case "lion":
            $("#lion").removeClass("second");
            $("#lion").addClass("first");
            $("#horse").removeClass("third");
            $("#horse").addClass("second");
            $("#butter").addClass("third");
            $(".big-image img").attr("src","image/animal/horse-high.jpg")
            break;
        case "horse":
            $("#horse").removeClass("second");
            $("#horse").addClass("first");
            $("#butter").removeClass("third");
            $("#butter").addClass("second");
            $("#tiger").addClass("third");
            $(".big-image img").attr("src","image/animal/butter-high.jpg")
            break;
        case "butter":
            $("#butter").removeClass("second");
            $("#butter").addClass("first");
            $("#tiger").removeClass("third");
            $("#tiger").addClass("second");
            $("#horse").removeClass("first");
            $(".big-image img").attr("src","image/animal/tiger-high.jpg")
            break;
        }
}