import { error } from 'console';
import http from 'http'
import fs from 'fs/promises';
import url, { fileURLToPath } from 'url';
import path, { dirname }  from 'path';

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = 8000;

const server = http.createServer(async(req, res)=>{
    // res.setHeader('content-type', 'text/plain')
    try {
        if (req.method === 'GET'){
            let filepath;
            if (req.url == '/'){
                filepath = path.join(__dirname, 'public', 'home.html')
            }    
            else if(req.url =='/about'){
                filepath = path.join(__dirname, 'public', 'about.html')
            }
            else {
                new Error('NOT FOUND')
            }
            const data = await fs.readFile(filepath)
            res.setHeader('content-type', 'text/html')
            res.write(data)
            res.end();


        
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
