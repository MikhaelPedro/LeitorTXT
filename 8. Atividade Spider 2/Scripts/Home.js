$(document).ready(function () {
    
});

$("#Btn_Enviar").click(function () {

    var arquivo = new FormData();
    arquivo.append($("#resultado")[0].files[0].name, $("#resultado")[0].files[0])
    SendFile(arquivo);
});