const name = require('./3-names');
console.log(name.john);

const sayHi = require('./4-utils');
console.log(sayHi);


const data = require('./5-alternate_exp_modules');
console.log(data);


sayHi(name.john);

console.log('*********** Mind Grenade ***********')
require('./6-mind_grenade');
console.log('It will run though we have not assinged to any variable because it has been invoked inside the module itself')

