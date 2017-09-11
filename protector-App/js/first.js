/**
 * Created by Administrator on 2017/8/28.
 */
$(function(){
    $("#first-protect").on("click",function(){
       $(this).next().attr("href","screen.html").click();
    });
})