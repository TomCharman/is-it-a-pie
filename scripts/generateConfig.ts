/* eslint-disable no-console */
const fs = require('fs');

const updateConfig = async () => {
  const files = await fs.promises.readdir('./public/data/rounds');
  console.log('read directories from rounds config', files);

  await fs.promises.writeFile('./public/data/config.json', JSON.stringify({
    numberOfRounds: files.length,
  }), 'utf8');
};

updateConfig();
