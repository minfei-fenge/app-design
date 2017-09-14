//订单状态:1.待支付，2.待受理，3.待评价，4.服务完成
var order = 3;
$(function(){
    //进度条
    for(var i=1; i<=order; i++){
        switch (i){
            case 1:
                $("#wait-pay").addClass("progress-bar progress-bar-success").on("click",function(){
                    self.location = "user_order.html";
                });
                break;
            case 2:$("#wait-accept").addClass("progress-bar progress-bar-info");break;
            case 3:
                $("#wait-comment").addClass("progress-bar progress-bar-warning").on("click",function(){
                    self.location = "user_comment.html";
                });
                break;
            case 4:$("#finish").addClass("progress-bar progress-bar-danger");break;
        }
    }
    //提示
    $(".progress-bar").last().tooltip("show");
});