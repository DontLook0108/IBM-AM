//Colocar a função do botão
function valida_form()
{
var x=document.forms["email"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
{
alert("Não é um endereço de e-mail válido");
return false;
}
return true;
}
