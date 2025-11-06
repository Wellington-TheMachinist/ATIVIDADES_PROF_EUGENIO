//Criando a classe Pessoa com atributos publicos
class Pessoa{
   nomeCompleto = "";
   telefone = 0;
   email = "";
   anoNascimento = 0;
   sexo = "";
   calcularIdade(){
      return 2025 - this.anoNascimento;
   }
}

const godofredo = new Pessoa();
console.log(godofredo);
godofredo.nomeCompleto = "Godofredo das Cove";
godofredo.telefone = 123456;
godofredo.email = "godo@teste.com.br";
godofredo.anoNascimento = 1970;
godofredo.sexo = "Masculino";
console.log(godofredo);
console.log("Idade: " + godofredo.calcularIdade());
