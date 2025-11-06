class Pessoa{
   constructor(nomeCompleto,telefone,email,anoDeNascimento, sexo){
      this.nomeCompleto = nomeCompleto;
      this.telefone = telefone;
      this.email = email;
      this.anoDeNascimento = anoDeNascimento;
      this.sexo = sexo;
   }
   calcularIdade(){
      return 2025 - this.anoDeNascimento;
   }
};
const godofredo = new Pessoa("Godofredo das Cove", 123456, 
                              "godo@teste.com.br",1970,"Masculino");
console.log(godofredo);
console.log("Idade: " + godofredo.calcularIdade());