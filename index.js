import express from 'express';
import bodyParser from 'body-parser';

//Import notification router
import userRouter from './routes/notification.js';

const app = express();
app.use(bodyParser.json());

app.use('/notification', userRouter);
app.get('/', (req, res) => {
    //console.log(req);
    res.send('<h1>Hello</h1>')
});
const PORT = 3000;
app.listen(PORT, () => console.log('Server running on ... port ' + PORT));