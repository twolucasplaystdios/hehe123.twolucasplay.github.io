// var page = 0;
// var pageNames;
// var totalPages;
// var varibl;
// var newPage;
// var isspoilered = false;

// $(document).ready(function(){
//     pageNames = $("div#showcase").find(".firsto");
//     totalPages = pageNames.length - 1 ;
//     $(document).keyup( function(event) {
//         if (event.key === 'Enter' || event.key === 'ArrowRight' || event.key === 'ArrowDown' ) {
//             nextPage();
//         } else if (event.key === 'Backspace' || event.key === 'ArrowLeft' | event.key === 'ArrowUp') {
//             prevPage();
//         } else {
//             /* do nothing */
//         }
//     });
//     $("#abox").keyup(function(event) {
//         if (event.key === 'Enter'){
//             testDetct();
//         }
//     });
//     $('.pakes').hide();
//     $(".p0").fadeIn(5000);
    
//     $("#goto").click(function(){
//         testDetct();
//     });
// })

// function testDetct(){
//     varibl = $("input:text").val();
//     if (varibl != '' && varibl >= 0 && varibl < totalPages){
//         tPage(varibl);
//         $("input:text").val("");
//     } else {
//         alert("太大、太小或著不是一個數字，請重新檢查！");
//         $("input:text").val("");
//     }
// }

// function detectPage(num){
//     if (page == num){
//         $('.pakes').hide();
//         $(".p"+ num).show();
//     }
// }

// function nextPage(){
//     if (page < totalPages){
//         if (page != 1){
//             page = page + 1;
//             $("ul.pakes").hide();
//         } else {
//             page = page + 1;
//         }
//     } else {
//         page = 0;
//     }
//     detectPage(page);
// }

// function prevPage(){
//     if (page > 0){
//         page -= 1;
//     } else {
//         page = totalPages;
//     }
//     detectPage(page);
// }

// function CtPage(n) {
//     if (n < totalPages){
//         $(".pakes").hide();
//         $(".p" + n).show();
//     } else{
//         // console.log("toobig!")
//         $(".pakes").hide();
//         $(".p0").show();
//     }
    
// }

// function spoliurg(){ 
//     if (! $("h1.pakes.o1").is(":hidden")){
//         $("ul.pakes.o1").toggle();
//     }
// }

// function spoliurb(){ 
//     if (! $("h1.pakes.o1").is(":hidden")){
//         $("ul.pakes.o2").toggle();
//     }
// }

// function darkMode(){
//     $("body").css({"background-color": "rgb(48, 68, 97)"})
//     $("body").css({"color":"rgb(105, 108, 102)"})
//     $("#showcase").css({})
// }
// /* Keys
//     Arrow + dir (arrowkeys)
// */







// // function prevPage(){
// //     if (page == 0){
// //         $("#p0").show(); /* 封面頁 */
// //         $("#p1").hide();
// //         $("#p2").hide();
// //         $("#p3").hide();
// //         $("#p4").hide();
// //         page = 4; /* 增加一頁 */
// //     }

// //     if (page >= 1 && page <=4){
// //         if (page == 1){
// //             $("#p0").hide();
// //             $("#p1").show();
// //             $("#p2").hide();
// //             $("#p3").hide();
// //             $("#p4").hide();
// //         } else if (page == 2){
// //             $("#p0").hide();
// //             $("#p1").hide();
// //             $("#p2").show();
// //             $("#p3").hide();
// //             $("#p4").hide();
// //         } else if (page == 3){
// //             $("#p0").hide();
// //             $("#p1").hide();
// //             $("#p2").hide();
// //             $("#p3").show();
// //             $("#p4").hide();
// //         } else if (page == 4){
// //             $("#p0").hide();
// //             $("#p1").hide();
// //             $("#p2").hide();
// //             $("#p3").hide();
// //             $("#p4").show();
// //         }
// //         page -= 1; /* 減少一頁 */
// //     }
// //     $("#p" + page).show(); /* 顯示那一頁 */
// // }