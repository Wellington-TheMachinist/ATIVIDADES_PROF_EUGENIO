document.getElementById('btnBiometria').addEventListener('click', async () => {
if(window.PublicKeyCredential){
   try{
    const challenge = window.crypto.getRandomValues(new Uint8Array(32));

    const biometrico = await navigator.credentials.create({

        publicKey: {
            challenge: challenge,

            rp: {
                name:"App de login" ,
                id: window.location.hostname
            },

            user:{
 
                id: window.crypto.getRandomValues(new Uint8Array(16)),
                name: "well737ng@gmail.com",
                displayName: "Prof. Wellington Jr."

            },

            pubKeyCredParams: [
                {alg: -7, type: "public-key"},
                {alg: -257, type: "publicKey"}

            ],

            authenticatorSelection:{
                authenticatorAttachment: "platform" ,
                userVerification: "required"
            },
            timeout: 60000
        }
    });

    if(biometrico){
        alert("Digital reconhecida!!");
    }

}catch(err){
    if(err.name == 'NotAllowedError'){
        alert("não autorizado!!");
    }else{
        alert("Erro técnico: "+err.message);
    }
    
}


}
});