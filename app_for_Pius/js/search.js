$(function(){
    //叉叉显示&隐藏
    $("#search-group input").on("keyup",function(){
        $(this).siblings("span").css("display","inline");
    }).on("blur",function(){
        if($(this).val()==$(this)[0].defaultValue){
            $(this).siblings("span").css("display","none");
        }
    });
    //点击叉叉事件
    $(".glyphicon-remove-circle").on("click",function(){
        $(this).siblings("input").val("").trigger("blur");
    });
});