$(function(){
    /*上传照片*/
    document.getElementById("upload").addEventListener("change",function(){
        var files = this.files;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function(e){
            localStorage.setItem("user_add",e.target.result);
            document.getElementById("click").src = this.result;
        };
    });
    /*保存头像*/
    if(localStorage.getItem("user_add")){
        $("#upload-picture img").attr("src",localStorage.getItem("user_add"));
    }
    //收起显示折叠菜单
    var $collapse = $("[data-toggle='collapse']");
    $collapse.prop("show",true);//show为true表示展开，false表示折叠
    $collapse.on("click",function(){
        if($(this).prop("show")){
            $(this).html("显示"+"<span class='glyphicon glyphicon-pushpin'></span>");
        }else{
            $(this).html("收起"+"<span class='caret'></span>");
        }
        $(this).prop("show",!$(this).prop("show"));
    });

    //点击“保存”按钮：
    $("#save").on("click",function(){

    });

    if( localStorage.getItem("span_select") ){
        $(".body-health span:eq("+ parseInt(localStorage.getItem("span_select" ))+")").addClass("selected").siblings().removeClass("selected");
    }
    //身体状况：
    $(".list-group-item span").on("click",function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        localStorage.setItem("span_select",$(this).index());
    });
});
