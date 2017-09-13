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
    var $collapseInfo =$("#more");
    $collapse.on("click",function(){
        if($collapseInfo.attr("class")=="collapse"){
            $(this).html("收起");
        }else if($collapseInfo.attr("class")=="collapse in"){
            $(this).html("显示");
        }
    });

    //点击“保存”按钮：
    $("#save").on("click",function(){
        self.location = "user_contact.html";
    });

    //身体状况：
    $(".list-group-item span").on("click",function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    });
});
