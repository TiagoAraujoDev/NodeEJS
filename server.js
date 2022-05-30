const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  const items = [
    {
      title: `D`,
      message: `evelopers tool`
    },
    {
      title: `E`,
      message: `JS uses Javascript to render HTML`
    },
    {
      title: `M`,
      message: `y dear god, it's so scalable`
    },
    {
      title: `A`,
      message: `mazing Tool`
    },
    {
      title: `I`,
      message: `t's easy`
    },
    {
      title: `S`,
      message: `imple syntax!`
    }
  ];
  const subtitle = `EJS (Embedded JavaScript Templating) is one of the most popular template engines for JavaScript. As the name suggests, it lets us embed JavaScript code in a template language that is then used to generate HTML.`;
  res.render('./pages/index', {
    qualitys: items,
    subtitle
  });
});
app.get('/about', function (req, res) {
  res.render('./pages/about');
});

app.listen(8080);
console.log('Server running...');
