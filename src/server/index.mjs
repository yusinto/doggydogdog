import Express from 'express';

const app = Express();

app.use('/dist', Express.static('dist', {maxAge: '1d'}));

app.use((req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Doggy Dog DOg</title>
      </head>
      <body>
          <div id="reactDiv"></div>
          <script type="application/javascript" src="/dist/bundle.js"></script>
      </body>
    </html>
  `;

  res.end(html);
});

app.listen(3000, () => console.log(`listening at 3000`));
