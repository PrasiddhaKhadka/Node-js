const os = require('os');

console.log(os.platform(), os.release());

//  User Info
const user = os.userInfo();
console.log(user);

//  Uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

// Current OS info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);