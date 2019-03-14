$(document).ready(function() {
    $( ".hidden-navbar" ).hide();
    $("#menu").click(function(){
        $("#title").fadeOut();
        $(".hidden-navbar").fadeIn();
        $("#showMenu").animate({marginTop:"-=50px"},300);
    });
    $("#closeMenu").click(function(){
        $(".hidden-navbar").fadeOut();
        $("#title").fadeIn();
    }); 
});