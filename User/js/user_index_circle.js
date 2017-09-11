$(function(){
    //评论
    $(".glyphicon-comment").on("click",function(){
        $("#comment-box").show();
        $("#comment-box button").on("click",function(){
            $("#comment-box").hide();
        });
    });
    /*添加事件：屏幕向下滚动时，nav背景变成白色，字体颜色变成黑色，#话题#添加到nav中间(样式已写好，修改html即可)*/
    /*添加事件：点击星星切换class为glyphicon-star，颜色变成黄色，tooltip显示提示“已取消”*/
});