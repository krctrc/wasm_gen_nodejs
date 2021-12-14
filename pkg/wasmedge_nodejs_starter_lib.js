let vm;

/**
* @param {string} s
* @returns {string}
*/
module.exports.say = function(s) {
    if (typeof s === 'object') s = JSON.stringify(s);
    return vm.RunString('say', s);
};

const path = require('path').join(__dirname, 'wasmedge_nodejs_starter_lib_bg.wasm');
const wasmedge = require('wasmedge-core');
vm = new wasmedge.VM(path, { args:process.argv, env:process.env, preopens:{'/': __dirname} });

