(function(){
    /*上传照片*/
    function fileUpLoad(){
        var that = this;//that指代input
        var file = this.files[0];
        if(!FileReader){
            $("#myAlert span").html("你的浏览器不支持H5的FileReader");
            $("#myAlert").show();
            $(".upload").attr("disabled","disabled");
            return;
        }
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);//将文件读取为Data URL 读取结果放在result中
        fileReader.onload = function(){
            $(that).parent("a").siblings("img").attr("src",this.result);
            localStorage.setItem("nurse_portrait",this.result);
        }
    }
    $(".upload").on("change",fileUpLoad);
    /*保存头像*/
    if(localStorage.getItem("nurse_portrait")){
        $(".upload-picture img").attr("src",localStorage.getItem("nurse_portrait"));
    }
    /*验证身份证*/
    $("#id-card").on("focusout",function(){
        if(isIdCard($(this).val())){
            alert("输入正确！");
        }else{
            alert("输入错误，请确认后再输入！");
        }
    });
    //身份证号验证：
    /*
     * 若返回true,身份证号正确；
     * 返回false,身份证号错误
     * */
    function isIdCard(cardid) {
        //身份证正则表达式(18位)
        var isIdCard2 = /^[1-9]\d{5}(19\d{2}|[2-9]\d{3})((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])(\d{4}|\d{3}X)$/i;
        var stard = "10X98765432"; //最后一位身份证的号码
        var first = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //1-17系数
        var sum = 0;
        if (!isIdCard2.test(cardid)) {
            return false;
        }
        var year = cardid.substr(6, 4);
        var month = cardid.substr(10, 2);
        var day = cardid.substr(12, 2);
        var birthday = cardid.substr(6, 8);
        if (birthday != dateToString(new Date(year+'/'+month+'/'+day))) {//校验日期是否合法
            return false;
        }
        for (var i = 0; i < cardid.length - 1; i++) {
            sum += cardid[i] * first[i];
        }
        var result = sum % 11;
        var last = stard[result]; //计算出来的最后一位身份证号码
        if(cardid[cardid.length - 1].toUpperCase() == last){
            return true;
        }else{
            return false;
        }
    }
    function dateToString(date) {
        if (date instanceof Date) {
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            month = month < 10 ? '0' + month : month;
            var day = date.getDate();
            day = day < 10 ? '0' + day : day;
            return year + month + day;
        }
    }
})();
