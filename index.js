const express = require ('express');
const app = express();

const authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet ", "Othello", " Romeo and Juliet ", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`le port ${PORT} est fonctionnelle`);
})

app.get('/', (req,res)=>{
    res.send('Authors API')
})

app.get('/authors/:ID', (req,res)=>{
    
     let nameAuthors = req.params.ID
    res.send(` ${authors[nameAuthors].name},  ${authors[nameAuthors].nationality}`)
    console.log(`${authors[nameAuthors].name}, ${authors[nameAuthors].nationality}`);
})

app.get('/authors/:ID/books', (req,res)=>{
    let nameAuthors = req.params.ID
   res.send(` ${authors[nameAuthors].books}`);
   console.log(` ${authors[nameAuthors].books}`);
})


app.get('/json/authors/:id',(req,res )=>{
    const   authorsName= authors[req.params.id].name ;
    const   country=authors[req.params.id].nationality;
    res.json({
      authors: authorsName,
      countries: country
  });
  })

  app.get('/json/authors/:id/books',(req,res )=>{
    const   books= authors[req.params.id].books 
    res.json({
      books: books
  });
  })