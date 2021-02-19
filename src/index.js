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

    const res = await axios.post({
      method: 'post',
      url: url,
      data: data,
      headers: headers
      
    })

    return res
}