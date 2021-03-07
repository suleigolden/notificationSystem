import express from 'express';
import bodyParser from 'body-parser';

//Import subscriber router
import userRouter from './routes/subscriber.js';

const app = express();
app.use(bodyParser.json());

app.use('/subscribe', userRouter);
app.get('/', (req, res) => {
    //console.log(req);
    res.send('<h1>Hello</h1>')
});
const PORT = 3000;
app.listen(PORT, () => console.log('Server running on ... port ' + PORT));