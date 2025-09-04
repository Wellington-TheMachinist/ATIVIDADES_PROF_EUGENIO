/* 4. Criar um algoritmo que leia a idade de uma pessoa e que
mostre a sua classe eleitoral:
• Não-eleitor (abaixo de 16 anos);
• Eleitor Obrigatório (entre 18 e 65 anos);
• Eleitor facultativo (entre 16 e 18 anos e maior de 65 anos).
Obs.: Usuário ideal - ele não irá digitar valores incorretos.
*/

let idade = 18;

if(idade<16){
    console.log("Não-eleitor");
}
if(idade>=16&&idade<18 || idade >65){
    console.log("Eleitor facultativo");
}
if(idade>=18 && idade <=65){
    console.log("Eleitor Obrigatório");
}