import { getpost } from "./post.js";

const post = getpost()
for (let x in post){
    console.log(x)
}