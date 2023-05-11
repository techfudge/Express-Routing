const express = require('express');
const app = express();    


app.get('/', (req, res) => {
    res.send('Home page');
  });
  
  app.get('/services', (req, res) => {
    res.send('Our Services');
  });
  
  app.get('/contact', (req, res) => {
    res.send('Contact us');
  });
  

const checkTime = (req, res, next) => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
      res.status(503).send('Our website is only available during working hours (Monday to Friday, from 9 to 17)');
    }
  };
  
  app.use(checkTime);
  