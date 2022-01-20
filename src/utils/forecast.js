const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d71f3b9e6d50f5ce05f2c22aa27d3fc3&query=' + latitude + ',' + longitude +  '&units=m'
     

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'In ' +  body.location.name + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. ' + 'Here the humidity is ' + body.current.humidity +'%' )
        }
       
    })
}
    
module.exports = forecast