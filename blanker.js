function blank() {
  var win = window.open();
  win.document.open();
  win.document.write(`
<!doctype html>
<html>
  <head>
    <title>Evil Games</title>
    <link rel="icon" href="https://10091120-ctrl.github.io/Mega-Math-Monster/monster.png" />
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      body, html {
        height: 100%;
        width: 100%;
      }
      .frame {
        height: 100%;
        width: 100%;
        display: block;
        border: none;
      }
    </style>
  </head>
  <body>
    <iframe src="https://coolmathgames.com" class="frame"></iframe>
  </body>
</html>
  `);
  win.document.close();
}
