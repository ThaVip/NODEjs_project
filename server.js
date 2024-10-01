import { error } from 'console';
import http from 'http'
const PORT = 8000;

const server = http.createServer((req, res)=>{
    // res.setHeader('content-type', 'text/plain')
    try {
        if (req.method == 'GET'){
            if (req.url == '/'){
                res.writeHead(200, {'x-content-type' : 'appliation/json'})
                res.end(JSON.stringify('at a time no time '));
            }    
            else if(req.url == '/about'){
                res.writeHead(200, {'content-type': 'text/html'})
                res.end('<h1>ABOUT ME</h1>')
            }
            else {
                res.writeHead(404, {'content-type': 'text/plain'})
                res.end('NOT FOUND')
            }
        
        } 
        else if (req.method == 'POST'){
            throw new Error('method not allowed');   

        }
        
    } catch (error) {
        res.writeHead(500, {'content-type': 'text/html'})
        res.end('sever not found')
        
    }
   
    
});

server.listen(PORT, ()=>{
    console.log(`your server is running on ${PORT}`)
})
