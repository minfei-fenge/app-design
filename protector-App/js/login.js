/**
 * Created by Administrator on 2017/8/28.
 */
(function(){
    var code;
    window.onload = function() {
        $(".createCode").trigger("click");
    };

    $(".createCode").on("click",function(){
        code = "";
        var codeLength = 5;
        var random = new Array(0,1,2,3,4,5,6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for(var i = 0; i < codeLength; i++) {
            var charIndex = Math.floor(Math.random() * 36);
            code += random[charIndex];
        }
        $(".checkCode")[0].value = code;
    });
    $("#forget-password").on("click",function(){
        $("#login-mask").show();
        $("#po-up").show();
    });
    $("#login-right").on("click",function(){
        var inputCode = $(".input-check")[0].value.toUpperCase();
        if(inputCode.length <= 0) {
            alert("请输入验证码！");
        } else if(inputCode != code) {
            alert("验证失败！");
            $(".createCode").trigger("click");
            $(".input-check").val("").trigger("focus");
        } else {
            $(this).children("a").attr("href","first.html");
        }
     });
    $("#login-mask").on("click",function(){
        $(this).hide();
        $("#po-up").hide();
    });
})();