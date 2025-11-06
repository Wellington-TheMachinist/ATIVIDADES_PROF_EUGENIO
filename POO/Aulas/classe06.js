class Pessoa{
  //Atributos
  #nomeCompleto = "";
  #telefone = 0;
  #email = "";
  #anoNascimento = 0;
  #sexo = "";
  constructor(nomeCompleto, telefone, email, anoNascimento,sexo){
    this.#nomeCompleto = nomeCompleto;
    this.#telefone = telefone;
    this.#email = email;
    this.#anoNascimento = anoNascimento;
    this.#sexo = sexo;
  }
  // --- Nome Completo ---
  getnomeCompleto() {
    return this.#nomeCompleto;
  }
  set nomeCompleto(novoNome) {
    this.#nomeCompleto = novoNome;
  } 
  
  calcularIdade(){
    return 2025 - this.#anoNascimento;
  }
  obterPessoa(){
    // const str = "{  Nome: " + this.#nomeCompleto + 
    //                 "Telefone: "+ this.#telefone + "}";
    const str = this;
    return str;
  }
}

const godofredo = new Pessoa("teste",12,"teste@",1970,"Masculino");
console.log(godofredo.obterPessoa());
godofredo.nomeCompleto = "Godofredo das Cove";
console.log(godofredo);
console.log("Idade: " + godofredo.calcularIdade());
console.log("Nome Completo: " + godofredo.getnomeCompleto());