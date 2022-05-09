import fs from 'fs'
import config from '../config/app.js'

const  logRequestData = (body) => {

    const data = JSON.stringify(body);

    const path = config.logFilePath;

    fs.writeFileSync(path, data + "\n", {flag: 'a+'})
}

export default {
    logRequestData
}