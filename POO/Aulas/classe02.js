class Pessoa{
   anoNascimento = 0;
   constructor(){
      this.nome = "";
      this.telefone = 0;
      this.email = "";
      this.sexo = "";
   }
   calcularIdade(){
      return 2025 - this.anoNascimento;
   }
}

const godofredo = new Pessoa();
console.log(godofredo);
godofredo.nome = "Godofredo das Cove";
godofredo.telefone = 123456;
godofredo.email = "godo@teste.com.br";
godofredo.anoNascimento = 1970;
godofredo.sexo = "Masculino";
console.log(godofredo);
console.log("Idade: " + godofredo.calcularIdade());