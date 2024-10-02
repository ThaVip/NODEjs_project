import {createServer} from 'http'

const PORT = 8000;


const users = [
    {id: 1, name : 'musa'},
    {id: 2, name: 'sheriff'},
    {id: 3, name : 'hanif'}
]

//logger middleware
const logger = (req, res, next) => {
    console.log(`${req.methode} ${req.url}`)
    next();
};

//JSON middleware
const jsonMiddle = (req, res, next) => {
    res.setHeader('Content-type', 'application/json')
    next(); 
};
// User handler
const userHandler = (req, res)=>{
    res.write(JSON.stringify(users));
    res.end();
};

//id handler
const getUserByidHandler = (req, res)=>{
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user){
        res.write(JSON.stringify(user))
    }
    else {
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'user not found'}))
    }
    res.end();
}

// User by ID
const erroHandler = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.statusCode = 404;
    res.end(JSON.stringify({message:'url not found'}))
}

const createHandler = (req, res)=>{
    let body = '';
    //listen for data
    req.on('data', (chunk)=>{
        body += chunk.toString();
    });
    req.on('end', ()=>{
        const newUser = JSON.parse(body)
        users.push(newUser)
        res.statusCode = 201;
        res.write(JSON.stringify(newUser))
        res.end() 
    });
}

const server = createServer((req, res)=>{
    logger(req, res, ()=> {
        jsonMiddle(req, res, ()=>{
            if (req.url === '/api/users' && req.method === 'GET'){
                userHandler(req, res);
            }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUserByidHandler(req, res);
            }else if( req.url==='/api/users' && req.method === 'POST'){
                createHandler(req, res);
            }
            else {
                erroHandler(req,res);
            }
        });
    });  
    
});

server.listen(PORT, ()=>{
    console.log(`server is running on ${ PORT}`)
})



