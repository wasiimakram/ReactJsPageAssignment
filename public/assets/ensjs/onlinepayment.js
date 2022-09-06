
//$(document).ready(function () {
//});  

function test1()
{
    alert("hellloooo");
}

function ValidateStudent(sender, args)
{
    args.IsValid = false;
       alert("ok")
    }
    //$("#ennextOnlinePay").click(function () {

    //    var EIDFlag = 1;
    //    var SIDFlag = 1;
    //    var EIDmsg = "";
    //    var SIDmsg = "";
       
    //    if ($("#txtstudentId").val() == "" && SIDFlag == 1) {
    //        SIDmsg = "Please provide Student id.";
    //        SIDFlag = 0;
    //    }
    //    if ($("#txtemiratesId").val() == "" && EIDFlag == 1) {
    //        EIDmsg = "Please provide Emirates id.";
    //        EIDFlag = 0;
    //    }
    //    if ($.trim($("#txtemiratesId").val()).length != 15) {           
    //        EIDmsg = 'Please provide a valid Emirates Id';
    //        EIDFlag = 0;
    //    }
    //    if ($.isNumeric($("#txtemiratesId").val()) == false && EIDFlag == 1) {
    //        EIDmsg = 'Please provide a valid 15 Emirates Id';
    //        EIDFlag = 0;
    //    }

    //    if (EIDFlag == 1 && SIDFlag==1) {
    //        $("#lblemiratesIdmsg").text("");
    //        $("#lblstudentIdmsg").text("");
    //        getStudentBalance();
    //        return false;
    //    }
    //    else {
    //        $("#lblemiratesIdmsg").text(EIDmsg);
    //        $("#lblstudentIdmsg").text(SIDmsg);
    //        return false;
    //    }
        
    //});


    //$("#arnextOnlinePay").click(function () {

    //    var EIDFlag = 1;
    //    var SIDFlag = 1;
    //    var EIDmsg = "";
    //    var SIDmsg = "";

    //    if ($("#txtstudentId").val() == "" && SIDFlag == 1) {
    //        SIDmsg = "يرجى تقديم معرف الطالب";
    //        SIDFlag = 0;
    //    }
    //    if ($("#txtemiratesId").val() == "" && EIDFlag == 1) {
    //        EIDmsg = "يرجى تقديم هوية الإمارات";
    //        EIDFlag = 0;
    //    }
    //    if ($.trim($("#txtemiratesId").val()).length != 15) {
    //        EIDmsg = 'يرجى تقديم هوية إماراتية صالحة';
    //        EIDFlag = 0;
    //    }
    //    if ($.isNumeric($("#txtemiratesId").val()) == false && EIDFlag == 1) {
    //        EIDmsg = 'يرجى تقديم 15 هوية شخصية من الإمارات';
    //        EIDFlag = 0;
    //    }

    //    if (EIDFlag == 1 && SIDFlag == 1) {
    //        $("#lblemiratesIdmsg").text("");
    //        $("#lblstudentIdmsg").text("");
    //        $("form").attr("action", "/home/ar/");
    //        return true;
    //    }
    //    else {
    //        $("#lblemiratesIdmsg").text(EIDmsg);
    //        $("#lblstudentIdmsg").text(SIDmsg);
    //        return false;
    //    }

    //});



    //function getStudentBalance()
    //{
    //    //alert("hello1");
    //    $.ajax({
    //        type: "GET",
    //        url: "/Payment/en/studentbalance",
    //        contentType: "application/json; charset=utf-8",
    //        data: { StudentID: $("#txtstudentId").val(), EmiratesId: $("#txtemiratesId").val() },
    //        dataType: "json",
    //        success: function (res) {
    //            $('#txtstudentbal').val(res.result);
    //            $("#txtstudentId").hide();
    //            $("#txtemiratesId").hide();
    //        },
    //        error: function () { alert('A error'); }
    //    });
       
//}











