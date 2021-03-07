import express from 'express';
const router = express.Router();

//tem data as 
const notification = [];

//Publisher Server Endpoint
router.post('/topic1', (req, res) => {
     res.setHeader('Content-Type', 'application/json');
     const notify = req.body;
     if(notify){
          console.log(notify);
          notification.push(notify);
          res.end(JSON.stringify({ topic: notify.topic, url: notify.data.msg, }));
     }else{
          res.end(JSON.stringify({ error: 500 }));
     }
    
 });




export default router;