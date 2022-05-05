const logger = require('../services/FileLoggerService')
const config = require('../config/app')
const fs = require('fs');

let requestData = {
    firstName: 'firstName',
    lastName: 'lastName'
}

let requestDataWithCount = {
    firstName: 'firstName',
    lastName: 'lastName',
    count: 10
}

function setUp()
{
    if (fs.existsSync(config.logFilePath)) {
        fs.unlinkSync(config.logFilePath)
    }

    return this;
}

function fetchDataFromLogFileAsJson()
{
    return JSON.parse(fs.readFileSync(config.logFilePath).toString());
}
/**************************************************************************************/
/* TESTS
/**************************************************************************************/
test('check log request data into file without count', () => {

    setUp();

    logger.logRequestData(requestData);

    let jsonData = fetchDataFromLogFileAsJson();

    expect(jsonData.firstName).toBe('firstName');
    expect(jsonData.lastName).toBe('lastName');
    expect(jsonData.count).toBe(undefined);
});

test('check log request data into file with count', () => {

    setUp();

    logger.logRequestData(requestDataWithCount);

    let jsonData = fetchDataFromLogFileAsJson();

    expect(jsonData.firstName).toBe('firstName');
    expect(jsonData.lastName).toBe('lastName');
    expect(jsonData.count).toBe(10);
});

