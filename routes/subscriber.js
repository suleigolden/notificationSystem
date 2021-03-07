import express from 'express';
const router = express.Router();

//tem data as 
const notification = [];

router.get('/', (req, res) => {
     console.log('Hello from subscriber route');
     res.send('<h1>Hello from subscriber route</h1>')
});

//Publisher Server Endpoint
router.post('/', (req, res) => {
     const notify = req.body;
     notification.push(notify);
     res.send(`notification  added successfuly.. ${user.message}`);
 });




export default router;