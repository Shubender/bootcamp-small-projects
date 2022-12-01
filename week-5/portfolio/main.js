const cluster = require("cluster");
const os = require("os");

cluster.setupMaster({
    exec: __dirname + "/server.js", // this will be our children/workers
});

const nrOfCores = os.cpus().length;

for (let i = 0; i < nrOfCores; i++) {
    cluster.fork();
}

cluster.on("exit", (worker) => {
    console.log("worker process died with id: ", worker.process.pid);
});
