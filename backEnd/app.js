const server = require("./server");

function startApp() {
  // Chamar a função listen() no objeto server para iniciar o aplicativo
  server.listen();
}

// Chamar a função startApp dentro de um bloco try-catch para capturar erros
try {
  startApp();
} catch (error) {
  console.log(error);
}
