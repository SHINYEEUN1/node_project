const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const dataset= [
    {"f_name":"귤", "count": 10},
    {"f_name":"사과", "count": 8},
    {"f_name":"복숭아", "count": 5}
];

app.use(cors());

app.get("/api/list", (req, res)=>{
    console.log("요청이 들어옴...");
    res.json(dataset);
});

app.listen(port, () => {
  console.log(port+"번 포트 실행중...");
});