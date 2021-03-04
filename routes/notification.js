import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
     console.log('Hello from notification route');
     res.send('<h1>Hello from notification route</h1>')
});




export default router;