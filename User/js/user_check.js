//����״̬:1.��֧����2.������3.�����ۣ�4.�������
var order = 3;
$(function(){
    //������
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
    //��ʾ
    $(".progress-bar").last().tooltip("show");
});