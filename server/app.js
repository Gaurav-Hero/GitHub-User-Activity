import express from 'express';
import https from 'https'; // For making HTTPS requests
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('GitHub Info App is running!');
});

app.get('/user/:username', (req, res) => {
    const username = req.params.username;

    const options = {
        hostname: 'api.github.com',
        path: `/users/${username}`,
        method: 'GET',
        headers: {
            'User-Agent': 'GitHub-Info-App', // Required by GitHub API
            'Authorization': `token ${process.env.GITHUB_TOKEN}` // Optional: Use token to avoid rate limits
        }
    };

    const request = https.request(options, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            if (response.statusCode === 200) {
                res.json(JSON.parse(data));
            } else {
                res.status(response.statusCode).json({ error: 'User not found' });
            }
        });
    });

    request.on('error', (error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });

    request.end();
});

app.get('/repos/:username' , (req, res) => {
    const username = req.params.username;

    const options = {
        hostname: 'api.github.com',
        path:`/users/${username}/repos`,
        method: 'GET',
        headers: {
            'User-Agent': 'GitHub-Info-App',
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
        }
    }

    const request = https.request(options , (response) => {
        let data = '';
        response.on('data' , (chunk) => {
            data += chunk;
        })

        response.on('end' , () => {
            if(response.statusCode === 200){
                res.json(JSON.parse(data));
            }else{
                res.status(response.statusCode).json({error: 'User not found'})
            }
        })
    })

    request.on('error' , (error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    })
    request.end();
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
