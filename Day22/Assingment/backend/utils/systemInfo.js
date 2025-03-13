const os = require('os');

const logSystemInfo = () => {
  const hostname = os.hostname();
  const osType = os.type();
  const totalMemory = os.totalmem();

  console.log("System Information:");
  console.log(`Hostname: ${hostname}`);
  console.log(`OS Type: ${osType}`);
  console.log(`Total Memory: ${totalMemory} bytes`);
};

module.exports = { logSystemInfo };