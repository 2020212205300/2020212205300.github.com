/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-23 12:32:35
 * @version $Id$
 */

$("body").on('click','.mb',function(){
    $(".m-mobile").show();
    $(".m-pc").hide();
})
$("body").on('click','.pc',function(){
    $(".m-mobile").hide();
    $(".m-pc").show();
})