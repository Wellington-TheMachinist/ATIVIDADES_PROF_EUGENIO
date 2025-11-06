class Pessoa{
   #nomeCompleto;
   #telefone;
   #email;
   #anoNascimento;
   #sexo;
   constructor(nomeCompleto, telefone, email, anoNascimento,sexo){
      this.#nomeCompleto = nomeCompleto;
      this.#telefone = telefone;
      this.#email = email;
      this.#anoNascimento = anoNascimento;
      this.#sexo = sexo;
   }
   calcularIdade(){
      return 2025 - this.#anoNascimento;
   }
}

const godofredo = new Pessoa("teste",12,"teste@",1970,"Masculino");
console.log(godofredo);

console.log(godofredo);
console.log("Idade: " + godofredo.calcularIdade());
//console.log("Nome Completo: " + godofredo.#nomeCompleto);