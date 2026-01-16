function blank() {
  var win = window.open();
  win.document.open();
  win.document.write(`
<!doctype html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
  `);
  win.document.close();
}
