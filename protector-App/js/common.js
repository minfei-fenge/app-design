/**
 * Created by Administrator on 2017/8/30.
 */
$(".pager").on("click",function(){
    history.go(-1);
});
$(".protector-back").on("click",function(){
    $(".pager").trigger("click");
});