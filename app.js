const { spawn } = require('child_process');

const minecraftServer = spawn('java', ['-jar', 'server.jar', 'nogui']);

minecraftServer.stdout.on('data', (data) => {
  console.log(`Salida del servidor de Minecraft: ${data}`);
});

minecraftServer.stderr.on('data', (data) => {
  console.error(`Error del servidor de Minecraft: ${data}`);
});

minecraftServer.on('close', (code) => {
  console.log(`Proceso del servidor de Minecraft finalizado con código ${code}`);
});
