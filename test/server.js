const { PureServer } = require("../PureServer");

// 默认启动
let pureServer = new PureServer();

// 设置监听端口
pureServer.port = 9876;

const routerName = "/pure_server/";
const dir = process.cwd() + `/test/static/`;

// 设置静态目录
pureServer.setStatic(`${routerName}`, dir);

console.log(`name => ${routerName}\ndir => ${dir}`);