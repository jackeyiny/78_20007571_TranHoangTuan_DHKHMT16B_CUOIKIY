$(document).ready(function(){
    var i=1;
    $("#btndk").click(function(){
        $("#Mymodal").modal();
    });
    function KTTen(){
        var kt=/^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#txtName").val()==""){
            $("#tbName").html("Không được để trống");
            return false;
        }
        if(!kt.test($("#txtName").val())){
            $("#tbName").html("chỉ dùng chữ hoa đầu từ ");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#txtName").blur(KTTen);
    function KTAo(){
        var kt=/^\d*$/;
        if($("#txtAo").val()==""){
            $("#tbAo").html("Không được để trống");
            return false;
        }
        if(!kt.test($("#txtAo").val())){
            $("#tbAO").html("số nguyên từ 1 đến 100 ");
            return false;
        }else{
            var soao=$("#txtAo").val();
            if(soao<1 || soao>100){
                $("#tbAo").html("số nguyên từ 1 đến 100")
            }else{
                $("#tbAo").html("*");
                return true; 
            }
        }
    }
    $("#txtAo").blur(KTAo);
    function KTCLB(){
        var kt=/^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})(\s{1}[0-9]+)$/;
        if($("#txtCLB").val()==""){
            $("#tbCLB").html("Không được để trống");
            return false;
        }
        if(!kt.test($("#txtCLB").val())){
            $("#tbCLB").html("Dùng chữ hoa đầu từ và số  ");
            return false;
        }
        $("#tbCLB").html("*");
        return true;
    }
    $("#txtCLB").blur(KTCLB);
    function KTNgay(){
        if($("#txtNgay").val()==""){
            $("#tbNgay").html("Không được để trống");
            return false;
        }
        var today=new Date();
        var ngay= new Date($("#txtNgay").val());
        today=today.setDate(today.getDate()+7);
        if(today>ngay){
            $("#tbNgay").html("Ngày tập trung sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    }
    $("#txtNgay").blur(KTNgay);
    function KTSDT(){
        var kt=/^0\d{3}-\d{3}-\d{3}$/;
        if($("#txtSDT").val()==""){
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if(!kt.test($("#txtSDT").val())){
            $("#tbSDT").html("Nhập đúng:0xxx-xxx-xxx(có dấu gạch nối) ");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(KTSDT);
    $("#save").click(function(){
        if(
            KTTen()==true &&
            KTAo()==true &&
            KTCLB()==true &&
            KTNgay()==true &&
            KTSDT()==true
        ){
            row = "<tr>";
            row +="<th>"+ i++ +"</th>";
            row +="<th>"+ $("#txtName").val() +"</th>";
            row +="<th>"+ $("#txtAo").val() +"</th>";
            row +="<th>"+ $("#txtCLB").val() +"</th>";
            row +="<th>"+ $("#txtNgay").val() +"</th>";
            row +="<th>"+ $("#txtSDT").val() +"</th>";
            row +="<th>"+ $("#txtAnh").val() +"</th>";
            $("#danhsach").append(row);
            $("#Mymodal").modal(hide);
        }
    });
});