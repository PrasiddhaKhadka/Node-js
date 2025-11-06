const {readFile, writeFile} = require('fs');

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

getText('./content/first.txt').then(result =>{
        console.log(result)  
    }).catch(err =>{
        console.log(err);
    });


const start = async ()=>{
    try
    {   
        const first = await getText('./content/first.txt');
        console.log(first);
    }
    catch (error){
        console.log(first);
    }
}    




// OLD TRADITIONAL WAY

// readFile('./content/first.txt', 'utf8', (err, result)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result)=>{
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const second = result;
//         writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result)=>{
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(result);
//         });
//     });
// }
// );