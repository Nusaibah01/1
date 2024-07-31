

var fs = require('fs');

fs.writeFile('data.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


fs.writeFile('data.txt', '1,2 ,3 content!', function (err) {
    if (err) throw err;
    console.log('Additional Content!');
  });

// Additional content does not override my previous content

fs.appendFile('data.txt', ' Welcome fellow developers ( ͡° ͜ʖ ͡°).', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

