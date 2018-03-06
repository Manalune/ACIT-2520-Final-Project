/*
 * config.js
 *
 * Creates configuration file on location ./config-files/db-config.json
 *
 * @Author: Lucas Silva
 */

console.log('Writting config file');

// IMPORTS
const fs = require('fs');
const yargs = require('yargs');

// setting up yargs for CLI calls
const argv = yargs
  .options({
    d: {
      demand: true,
      alias: 'db',
      describe: 'Database URL',
      string: true
    },
    u: {
      demand: false,
      alias: 'username',
      describe: 'database-user',
      string: true
    },
    p: {
      demand: false,
      alias: 'password',
      describe: 'database password',
      string: true
    }
  })
  .help().argv;

// preps config object
const config = {
  user:argv.username || process.env.USER,
  password:argv.password,
  database:argv.db || process.env.DATABASE_URL
};

// writes config to file
fs.writeFile('./config-files/db-config.json', JSON.stringify(config, null, 4), (err) => {
  if(err){
    console.log(err);
    return false;
  }
})
