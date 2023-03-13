const express = require('express');

const app = express();
const path=require('path')

const myLogger=(req, res, next)=>{
  console.log('Middleware Log 1');
  next()
}

const myLogger2=(req, res, next)=>{
  console.log('Middleware Log 2');
  next()
}

// Middlewares
app.use(express.static('public'));
app.use(myLogger)
app.use(myLogger2)


app.get('/', (req, res)=>{

  // res.sendFile(path.resolve(__dirname, 'temp/index.html'))

    const photo={
        id:1,
        name:"Thumbnail",
        description:"Lorem ipsum dolor sit amet",
        src: "https://picsum.photos/200/300"
    }
    
    res.send(`
      <h2 style="text-align:center;">${photo.name}</h2>
      <p style="text-align:center;">${photo.name}</p>
      <img style="position:relative; left:50%; transform:translateX(-50%);" src=${photo.src}/>
    `)
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server ${port} nömrəli portda çalışır`);
});
