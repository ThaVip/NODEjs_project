import {createServer} from 'http'

const PORT = 8000;


const users = [
    {id: 1, name : 'musa'},
    {id: 2, name: 'sheriff'},
    {id: 3, name : 'hanif'}
]


const server = createServer((req, res)=>{
    if (req.url === '/api/users' && req.method === 'GET'){
        res.write(JSON.stringify(users));
    } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id));
        res.setHeader('Content-Type', 'application/json');
        if (user){
            res.write(JSON.stringify(user))
        }
        else {
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'user not found'}))
        }
        res.end();
    }
 
    else {
        res.statusCode = 404;
        res.end('url not found')

     }
});

server.listen(PORT, ()=>{
    console.log(`server is running on ${ PORT}`)
})