import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
     console.log('Hello from subscriber route');
     res.send('<h1>Hello from subscriber route</h1>')
});




export default router;