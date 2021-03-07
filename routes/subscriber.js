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
     res.setHeader('Content-Type', 'application/json');
     const notify = req.body;
     if(notify){
          console.log(notify);
          notification.push(notify);
          res.end(JSON.stringify({ topic: notify.topic, url: notify.body, }));
     }else{
          res.end(JSON.stringify({ error: 500 }));
     }
    
 });




export default router;