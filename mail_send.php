<?php


function pegaValor($valor) {
    return isset($_POST[$valor]) ? $_POST[$valor] : '';
}

function validaEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function enviaEmail($de, $assunto, $mensagem, $para, $email_servidor) {
    $headers = "From: $email_servidor\r\n" .
               "Reply-To: $de\r\n" .
               "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
  
  mail($para, $assunto, nl2br($mensagem), $headers);
}

$email_servidor = "contato@lorenzetticonstrutora.com.br";
$para = "lorenzetticonstrutora@gmail.com";
$de = pegaValor("email");
$nome = pegaValor("nome");
$telefone = pegaValor("telefone");
$interesse = pegaValor("interesse");
$assunto = pegaValor("assunto");
$mensagem = "Prezado Caetano, você recebeu o seguinte e-mail:<br><strong>Assunto:</strong>".$assunto.".<br> <strong> Nome: </strong> ".$nome.".<br><strong>E-mail: </strong> ".$de.". <br><strong>Telefone:</strong> ".$telefone.".<br><strong>Mensagem</strong>:<br> ";
$mensagem .= $_POST["mensagem"];





if ($nome && validaEmail($de) && $mensagem) {
    enviaEmail($de, $assunto, $mensagem, $para, $email_servidor);
    $pagina = "emailenviado.html";
    echo 'E-mail enviado com sucesso!';
} else {
    $pagina = "emailenviado.html";
    echo 'E-mail não enviado!';

}
header("location:$pagina");


?>