// import { error } from 'console';
// import fs, { readFile } from 'fs'
import fs from 'fs/promises'
// //readFile - callback()
// fs.readFile('./test.txt', 'utf8', (err, data) =>{
//     if (err) throw err;
//     console.log(data);
// })

// //readfilesync not for large data
// const data = fs.readFileSync('./test.txt', 'utf8')
// console.log(data)

// // readFile()- then()
// fs.readFile('./test.txt','utf-8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//readfile() - async/await
const readFile = async ()=>{
    try {
        const data = await fs.readFile('./test.txt', 'utf8')
        console.log(data)
    } catch (error) {
       console.log(error) 
    }

}
//writeFile() async/await
const writeFile = async ()=> {
    try {
        await fs.writeFile('./test.txt', 'This was just added')
        console.log('file overridden to.....')
    } catch (error) {
        console.log(error)  
    }
}

//appendFile()- async/await
const appendFile = async ()=>{
    try {
        await fs.appendFile('./test.txt', '.Added to the end!!')
        console.log('file added to.........')
    } catch (error) {
        console.log(error)
        }
}
writeFile();
appendFile();
readFile();

