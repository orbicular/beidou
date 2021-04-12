const { response } = require('express');
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
//console.log(process.env);

const app = express();
const port=process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

//一个post的例子，实际没用
app.post('/api', (request, response) => {
    console.log(request.body);
    response.json({
        status: 'successhahaha'
    });
});

app.get('/beidou1', async (request, response) => {
    const apiKey=process.env.APIKey;
    const api_url = `https://api.n2yo.com/rest/v1/satellite/positions/44794/0/0/0/1/&apiKey=${apiKey}`;
    //BEIDOU-3M22 2019.11.23 44794
    //BEIDOU 3M9 2018.7.29 43581
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    //console.log(json);
    response.json(json);
});