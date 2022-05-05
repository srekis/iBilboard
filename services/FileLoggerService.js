const fs = require('fs')
const config = require('../config/app')

module.exports = {

    logRequestData: (body) => {
        let data = JSON.stringify(body);

        let path = config.logFilePath;

        fs.writeFileSync(path, data + "\n", {flag: 'a+'})
    }
};