import fileLogger from '../services/FileLoggerService'
import config from '../config/app'
import fs from 'fs'

import {dataWithoutCount, dataWithCount} from './test.data'

beforeEach(() => {
    if (fs.existsSync(config.logFilePath)) {
        fs.unlinkSync(config.logFilePath)
    }
})

afterEach(() => {
    if (fs.existsSync(config.logFilePath)) {
        fs.unlinkSync(config.logFilePath)
    }
})

function fetchDataFromLogFileAsJson()
{
    return JSON.parse(fs.readFileSync(config.logFilePath).toString());
}
/**************************************************************************************/
/* TESTS
/**************************************************************************************/
test('check log request data into file without count', () => {

    fileLogger.logRequestData(dataWithoutCount);

    let jsonData = fetchDataFromLogFileAsJson();

    expect(jsonData.firstName).toBe('firstName');
    expect(jsonData.lastName).toBe('lastName');
    expect(jsonData.count).toBe(undefined);
});

test('check log request data into file with count', () => {

    fileLogger.logRequestData(dataWithCount);

    let jsonData = fetchDataFromLogFileAsJson();

    expect(jsonData.firstName).toBe('firstName');
    expect(jsonData.lastName).toBe('lastName');
    expect(jsonData.count).toBe(dataWithCount.count);
});

