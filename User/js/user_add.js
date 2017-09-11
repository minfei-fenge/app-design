$(function(){
    /*上传照片*/
    document.getElementById("upload").addEventListener("change",function(e){
        var files = this.files;
        var img = new Image();
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function(e){
            var mb = (e.total/1024)/1024;
            localStorage.setItem("user_add",e.target.result);
            if(mb>= 2){
                alert('文件大小大于2M');
                return;
            }
            img.src = this.result;
            img.style.width = "80%";
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
});
