let os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.type());
console.log(os.cpus().length + " Cores");
console.log(os.totalmem() / 1024 + " In MB");
console.log(os.uptime());
console.log(os.userInfo().homedir);
