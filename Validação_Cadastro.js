var erro_nome = document.querySelector(".erro_nome");
var erro_email = document.querySelector(".erro_email"); 
var erro_rm = document.querySelector(".erro_rm"); 
var erro_senha = document.querySelector(".erro_senha"); 
var erros = [];

function validaForm(frm) {
    if (frm.nome.value == "" || frm.nome.value == null || frm.nome.value.lenght < 3) {
        erro_nome.textContent = "Nome necessário"; 
        frm.nome.focus();
        return false;   
    }
    if(frm.rm.value < 5|| frm.rm.value == "" || frm.rm.value == null) {
        erro_rm.textContent = "RM necessário"; 
        frm.rm.focus();
        return false;
    }
    if (frm.senha.value == "" || frm.senha.value == null) {
        erro_senha.textContent = "Senha necessária"; 
        frm.senha.focus(); 
        return false;
    } 
    if (frm.email.value.indexOf("@") == -1 || frm.email.valueOf.indexOf(".") == -1 || frm.email.value == "" || frm.email.value == null) {
        erro_email.textContent = "E-mail necessário";
        frm.email.focus();
        return false;
    } 
}