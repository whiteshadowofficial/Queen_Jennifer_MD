let {
    _api,
    _api2_key1,
    _api2_key2,
    _api_url,
    _url,
} = require('../conf')

function api_cret_url (_method, _class, url) {

    const _URL_ = _api_url + _method + '/' + _class + _api + _api2_key1 + _api2_key2 + _url + url

    return _URL_
    
}

module.exports = {
    api_cret_url
}