const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async(path)=>{
    try{
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise('./content/result-mind-grenade.txt',
             `THIS IS AWESOME : ${first} , ${second}`
            );
        console.log(first, second);
    }
    catch (error){

        console.log(error);
    }


}


start();


// ALTERNATIVE WAY WITHOUT UTIL MODULE
// const {readFile, writeFile} = require('fs').promises;

// const start = async()=>{
//     try{
//         const first = await readFile('./content/first.txt', 'utf8');
//         const second = await readFile('./content/second.txt', 'utf8');
//         await writeFile('./content/result-mind-grenade-2.txt',
//                 `THIS IS AWESOME : ${first} , ${second}`
//             );
//         console.log(first, second);
//     }
//     catch (error){

//         console.log(error);
//     }
// }

// start();