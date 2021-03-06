var express = require('express'); //library used to create web servers
var morgan = require('morgan'); // to output log of severes
var path = require('path');


var app = express();
app.use(morgan('combined'));

var articles=
{
    'article-one' : {
    title : 'Article one Appy',
    heading : 'Article one',
    date : 'September 30 2016',
    content: `
    ' <p>
                    
                    This is the content of my 1st artcile This is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcile
                    
                </p>
                
                <p>
                    
                    This is the content of my 1st artcile This is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcile
                    
                </p>
                
                <p>
                    
                    This is the content of my 1st artcile This is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcile
                    
                </p>'
                `
},
    'article-two' : {
    title : 'Article one Appy',
    heading : 'Article one',
    date : 'September 25 2016',
    content: `
    ' <p>
                    
                    This is the content of my 1st artcile This is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcile
                    
                </p>
                
                <p>
                    
                    This is the content of my 1st artcile This is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcile
                    
                </p>
                
                <p>
                    
                    This is the content of my 1st artcile This is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcile
                    
                </p>'
                `
},
    'article-three' : {
    title : 'Article one Appy',
    heading : 'Article one',
    date : 'September 30 2016',
    content: `
    ' <p>
                    
                    This is the content of my 1st artcile This is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcile
                    
                </p>
                
                <p>
                    
                    This is the content of my 1st artcile This is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcile
                    
                </p>
                
                <p>
                    
                    This is the content of my 1st artcile This is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcileThis is the content of my 1st artcile
                    
                </p>'
                `
},

};

function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    
var htmlTemplate = `


    <html>
    <head>
        <title>
            ${title} 
        </title>
        <meta name ="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class ="container">
            <div>
                <a href = "\">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date} 
            </div>
            <div>
                ${content}
                
            </div>
    </div>
        
    </body>
    
</html>
    
`;

    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0
app.get('/counter', function(req,res){
    
    counter = counter+1
    res.send(counter.toString());
    
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



app.get('/:articleName', function(req, res){

    //articleName = artcile-one
    //articles[articleaname] ==  {} content for artcile one
    
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    
});

app.get('/article-two', function(req, res ){
    
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    
});

app.get('/article-three', function(req, res ){
    
res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));

});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


var names = [];
app.get('/submit-name/:name',function(req, res){
    //Get the the name from request object
    
    var name = req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
    
    
});
