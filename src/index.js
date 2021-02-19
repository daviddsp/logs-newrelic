const axios = require('axios')

module.exports.pushLogs = async (url, api_key, message, logtype, service, appId) => {

    const data = {
        "appId": appId,
        "message": message,
        "logtype": logtype,
        "service": service,
    }

    const headers =  { 
        'Content-Type': 'application/json',
        'Api-Key': api_key, 
    }

    return "hola"      
}