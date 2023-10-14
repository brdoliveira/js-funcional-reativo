const readline = require("readline");

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(pergunta, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

// Observer
function namorada() {
  console.log("N: Apagar as luzes...");
  console.log("N: Pedir silêncio...");
  console.log("N: Surpresa!!!!!");
}

// Observer
function sindico(evento) {
  console.log("S: Monitorando o barulho!");
  console.log(`S: Resposta -> ${evento.resp}`);
  console.log(`S: Data -> ${evento.data}`);
}

// Subject
async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta("O namorado chegou? (s/N/q)");
    if (resp.toLoweCase() === "s") {
      // Os observadores são idêntificados!
      (interessados || []).forEach((obs) => obs({ resp, date: Date.now() }));
    } else if (resp.toLoweCase() === "q") {
      break;
    }
  }
}

/*
   Chamada da Função -> Registrei dois observadores!
   Os observadores são: namorada e sindico
   O subject é o porteiro!
*/
porteiro([namorada, sindico]);
