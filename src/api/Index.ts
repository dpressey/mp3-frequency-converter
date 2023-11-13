import express from "express";
import { Request, Response } from "express";

const app = express();
const PORT = 3000;

const URL = 'https://deezerdevs-deezer.p.rapidapi.com/track/3135556';
const OPTIONS = {
  headers: {
    'X-RapidAPI-Key': '8e1e61b826msh6cdd1443542d711p18ed23jsndd6836d50ea0',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

app.get("/", (req: Request, res: Response) => {
    req.url = URL;
    req.headers = OPTIONS.headers;
    res.send({
        "message": "HTTP GET completed!",
    });
    // console.log("response from API:"+res);
});

app.listen(PORT);