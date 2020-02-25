$(document).ready(function(){
    $("div .col-md-3#portimg").hover(function(){
        $(this).find(".desc").css({"display":"flex"});
       // alert("in");
    },function(){
        $(this).find(".desc").hide();
        //alert("out")
    });
})
$("div#whcont div.row .col-md-3").click(function(){
   // alert("");
    $(this).find(".visible").slideToggle();
    $(this).find(".hidden").slideToggle();
});
