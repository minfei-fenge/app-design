
$(function(){
    //取消（返回上一页）
    $(".navbar-brand").eq(0).on("click",function(){
        history.back();
    });
    //发表
    var $publishTitle = $("#publish input");
    var $publishContent = $("#publish textarea");
    var titleDefault = $publishTitle[0].defaultValue;
    var contentDefault = $publishContent[0].defaultValue;
    $(".navbar-brand").eq(1).on("click",function(){
        if($publishTitle.val()!="" && $publishTitle.val()!=titleDefault
            && $publishContent.val()!="" && $publishContent.val()!=contentDefault){
            self.location = "user_index_circle.html";
        }else{
            var settings = {
                content: "请填写完整信息"
            };
            var publishAlert = new Alert(settings);
            publishAlert.init();
            setTimeout(function(){
                publishAlert.close();
            },1000);
        }
    });
    //上传照片
    function fileUpLoad(){
        var file = this.files[0];
        var that = this;//将input按钮保存下来
        if(!FileReader){
            alert("你的浏览器不支持");
            return;
        }
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);//将文件读取为Data URL 读取结果放在result中
        fileReader.onload = function(){
            $(that).siblings("img").attr("src",this.result);
        };
    }
    /*$(".upload").on("change",fileUpLoad);
    $(".upload").on("change",function(){
        //添加dom结构
        var $upload = '<div class="upload-picture">'+
            '<img src="img/publish_upload_img.png" alt="上传照片" />'+
            '<input class="upload" type="file" accept="image/!*" multiple>'+
        '</div>';
        $("#publish").append($upload);
    });*/
    //对于后加入的元素-->事件委托
    

});