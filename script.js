window.addEventListener("load" , function (){ 

    //クローズエリアがクリックされた時、サイドバーのチェックボックスのチェックを外す。
    $("#sidebar_closer").on("click",function() { $("#sidebar_chk").prop("checked",false); });

});






