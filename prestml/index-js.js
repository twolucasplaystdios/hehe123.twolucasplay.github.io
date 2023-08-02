var thum = 0;
var thumbnailName = "";
var thumbnailDelayTick = 0;
$(document).ready(function(){
    $(".new").hide();
    $("h1.thumbnail.new").fadeIn("slow");
    $("hr.bar.new").delay(1000).fadeIn("slow");
    $("footer.new").delay(1000).fadeIn("slow"); 
});



// .delay(1000)

/* 
    $("div.thumbnail.new").fadeIn("slow")
    $("div.thumbnails.new").delay(1000).fadeIn("slow")
    $("div.thumbnails.new").delay(1000 * 2).fadeIn("slow")
    $("div.thumbnails.new").delay(1000 * 3).fadeIn("slow")
    $("div.thumbnails.new").delay(1000 * 4).fadeIn("slow")
    
*/