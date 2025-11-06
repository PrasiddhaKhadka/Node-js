const { result } = require('lodash');
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



console.log('For Async Prograaming (Event Loop)')
const {readFile,writeFile} = require('fs');

console.log('FIRST IS HERE');

readFile('content/first.txt', 'utf8',(err,res)=>{
 if (err) {
        console.log(err);
        return;
    }

    const first = result;
    console.log(result);
    console.log(`The final result is ${result}`)


})

console.log('END IS HERE');