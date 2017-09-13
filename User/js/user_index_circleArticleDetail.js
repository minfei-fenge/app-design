$(function(){

    //载入cookie
    if( !$.cookie("thumbs") ){
        $.cookie("thumbs","100",{expires: 100});
    };
    if( !$.cookie("comments") ){
        $.cookie("comments","100",{expires: 100});
    };
    if($.cookie("$bClick") == ""){
        $.cookie("$bClick","true",{expires: 100});
    };
    ($(".number-click").next())[0].innerHTML = $.cookie("thumbs");
    ($(".last-click").next())[0].innerHTML =  $.cookie("comments");

    //评论
    var $input = $("#comment-box .form-group input");
    var $lastClick = $(".last-click");
    $lastClick.on("click",function(){
        $("#comment-box").toggle();
        $(this).removeClass("btn-default").css("color","#337ab7");
    });
    $("#comment-box .form-group button").on("click",function(){
        if( $input.val() == "" ){
            $(".alert-danger").show();
            $input[0].focus();
        }else{
            $input.val("");
            $(".alert-danger").hide();
            $("#comment-box").hide();
            ($lastClick.next())[0].innerHTML = parseInt(($lastClick.next())[0].innerHTML)+1;
        };
        $.cookie("comments",($lastClick.next())[0].innerHTML,{expires: 100});
    });
    $input.on("keyup",function(){
        if( $(this).val()!= "" ){
            $(".alert-danger").hide();
        }
    });


    //点赞
    $(".number-click").on("click",function(){
        if( $.cookie("$bClick") == "false" ){
            $(this).addClass("btn-default").css("color","#000");
            ($(this).next())[0].innerHTML = parseInt($.cookie("thumbs"))-1;
            $.cookie("$bClick","true" ,{expires: 100});
        }else{
            $(this).removeClass("btn-default").css("color","#337ab7");
            ($(this).next())[0].innerHTML = parseInt($.cookie("thumbs"))+1;
            $.cookie("$bClick","false" ,{expires: 100});
        };
        $.cookie("thumbs",($(this).next())[0].innerHTML,{expires: 100});
    });

});
