$(function(){
    $("#search-group input").on("keyup",function(){
            $(this).siblings("span").css("display","inline");
    }).on("blur",function(){
        if($(this).val()==$(this)[0].defaultValue){
            $(this).siblings("span").css("display","none");
        }
    });
});