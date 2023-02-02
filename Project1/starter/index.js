
const fs=require('fs')
const http=require('http')

/////files

// const textIn=fs.readFileSync('./txt/input.txt','utf-8')
// console.log(textIn)

// const textOut=`This is what we know about the advocado: ${textIn}.\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',textOut)

// fs.readFile('./txt/start.txt', 'utf-8',(err,data1)=>{
//     fs.readFile(`./txt/${data1}.txt`,'utf-8', (err,data2)=>{
//         console.log(data2)
//         fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{
//             console.log(data3)
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err=>{
//                 console.log("Your file has been writen")
//             })
//         })
//     })
// })

// console.log("Will read file")

//////// Server

const server=http.createServer((req,res)=>{

    const pathName=req.url
    const data=fs.readFileSync(`${__dirname}/dev-data/data.json`)
    const dataObj=JSON.parse(data)

    if(pathName==='/'||pathName==='/overview'){
        res.end("This is the Overview")
    }else if(pathName==='/product'){
        res.end("This is the Product")
    }else if(pathName==="/api"){
           res.writeHead(200,{'Content-type': 'application/json'})
            res.end(data)
        }else{
        res.writeHead(404,{
            'Content-type': 'text/html',
            'my-own-header': 'Hello-world'

        });
        res.end('<h1>page not found</h1>')
    }
    
    
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to request on port 8000')
})