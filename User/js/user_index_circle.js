$(function(){
    //����
    $(".glyphicon-comment").on("click",function(){
        $("#comment-box").show();
        $("#comment-box button").on("click",function(){
            $("#comment-box").hide();
        });
    });
    /*����¼�����Ļ���¹���ʱ��nav������ɰ�ɫ��������ɫ��ɺ�ɫ��#����#��ӵ�nav�м�(��ʽ��д�ã��޸�html����)*/
    /*����¼�����������л�classΪglyphicon-star����ɫ��ɻ�ɫ��tooltip��ʾ��ʾ����ȡ����*/
});