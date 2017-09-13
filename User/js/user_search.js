$(function(){
    $("#search-group input").on("keyup",function(e){
        if( $(this).val()!= ""){
            $(this).siblings("span").css("display","inline");
        }else{
            $(this).siblings("span").hide();
        };
        if(e.which == 13 ){
            if( $("#search-group input").val() != ""){
                $("#search-group button").trigger("click");
            }else{
                alert("请输入内容！");
            }
        }
    }).on("blur",function(){
        if($(this).val()==$(this)[0].defaultValue){
            $(this).siblings("span").css("display","none");
        };
    });
    $("#search-group span").on("click",function(){
        $("#search-group input").val("").focus();
    });
});