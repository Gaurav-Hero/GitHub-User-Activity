import express from 'express';
import dotenv from 'dotenv';


const app = express();

dotenv.config();

app.get('/' , (req , res ) => {
    res.send("Hello world On //Route");
})


app.listen(process.env.PORT , () => {
    console.log(`Server is Running @ http://localhost:${process.env.PORT} `);
})






// import https from 'https'

// const options = {
//     hostname : 'api.github.com',
//     path : '/users/Gaurav-Hero/events',
//     method : 'GET',
//     headers : {
//         'User-Agent' : 'Node.js'
//     }
// }

// let data = '';

// const req = https.request(options ,(res) => {
    
//     res.on('data' , (chunks) => {
//         data += chunks;
//     })

//     res.on('end' , () => {
//         data = JSON.parse(data);
        
//         displayRepos(data)
//         // console.log('data Received Successfully : ', data[0].repo.name)
//     })

// })

// req.on('error' , (err) => {
//     console.error("Some error found -> ", err);
// })

// req.end()


// const displayRepos = (data) => {
//     let commits = 0;
//     data.map((obj, index) => {
//         if(obj.type === 'PushEvent')
//         // console.log(`Repo ${index + 1}: ${obj.type}`);
//         // console.log(`Repo ${index + 1}: ${obj.repo.name}`);
//         // try{
//         //     console.log(`Repo ${index + 1}: ${obj.payload.commits.map((msg) =>  msg.message )}`);
//         // }catch(error){
//         //     console.log('\n');
//         // }
//         // console.log(`------------------------------------------------`);
//     });
// };



// const headers = {
//     'Content-Type' : 'applicatiion/json' ,
//     'Content-Length' : Data.length
// }

// const getUserName = (username) => {

// }
// const username = process.argv[2];

// getUserName(username);