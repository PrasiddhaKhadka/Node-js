// __dirname = Path to current directory
// __filename = File name
// require = Function to import modules
// module = Current module object
// exports = Module exports object
// process = Node.js process object



console.log(__dirname);

setInterval(()=>{
    console.log("Hello World");
},1000)

setTimeout(()=>{
    console.log("Timeout finished");
}
,5000)