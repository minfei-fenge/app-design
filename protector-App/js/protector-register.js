/**
 * Created by Administrator on 2017/8/30.
 */
(function(){
    $("#push-photo").change(function(){
        $("input[type='text']").val($(this).val());
        console.log($(this).val());
    });
    $("#id_card").on("focusout",function(){
        if(isIdCard($(this).val())){
            alert("输入正确！");
        }else{
            alert("输入错误，请确认后再输入！");
        }
    });
})();
