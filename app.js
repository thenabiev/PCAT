const express = require('express');

const app = express();

app.get('/', (req, res)=>{

    const photo={
        id:1,
        name:"Thumbnail",
        description:"Lorem ipsum dolor sit amet"
    }
    
    res.send(photo)
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server ${port} nömrəli portda çalışır`);
});
