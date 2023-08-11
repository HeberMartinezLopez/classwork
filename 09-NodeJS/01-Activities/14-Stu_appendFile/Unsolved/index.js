// TODO: What are we importing?
// Requiring fs library

const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// uses enter key as newline char

fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // 

  err ? console.error(err) : console.log('Commit logged!')
);
