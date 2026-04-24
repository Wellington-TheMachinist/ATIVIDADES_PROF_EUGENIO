

let port;
let writer;

async function connect(){

    port = await navigator.serial.requestPort();

    await port.open({ baudRate:115200 });

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    writer = port.writable.getWriter();

    const reader = port.readable.getReader();

    while(true){

        const {value, done} = await reader.read();

        if(done) break;

        let text = decoder.decode(value);

        document.getElementById("log").innerText += text ;

    }

}

async function send(){

    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let z = document.getElementById("z").value;

    if(z>-300||z<-500){
        alert("valores incorretos!!!");
    }else{
    let cmd = ` ${x} ${y} ${z}\n`;

    const encoder = new TextEncoder();

    await writer.write(encoder.encode(cmd));

    }


}

