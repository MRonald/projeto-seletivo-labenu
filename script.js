function alterarLayout() {
    var resWidth = screen.width;
    if (resWidth <= 500) {
        var rodape = document.getElementById("rodape");
        rodape.id = "rodapeMob";
    } else {
        var rodape = document.getElementById("rodapeMob");
        rodape.id = "rodape";
    }
}
window.onload = function () {
    alterarLayout();
}
function envioEmail() {
    var email = document.getElementById("email").value;
    // Validando email
    var isArroba = false;
    var isPontoCom = false;
    for (var i = 0; i < email.length; i++) {
        if (email[i] == "@") {
            isArroba = true;
            i = email.length + 1;
        }
    }
    for (var i = 0; i < email.length; i++) {
        if (email[i] == "." && email[i+1] == "c" && email[i+2] == "o" && email[i+3] == "m") {
            isPontoCom = true;
            i = email.length + 1;
        }
    }
    if (!isArroba || !isPontoCom) {
        alert("Email inválido!");
    } else {
        alert("E-mail enviado com sucesso! Muito obrigado, entraremos em contato!");
        var bemVindo = document.getElementById("msg");
        bemVindo.innerText = "Seja bem-vindo, " + email + "!";
    }
}
setInterval(alterarLayout, 100);