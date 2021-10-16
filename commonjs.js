let http = require('http');
let https = require('https');

module.exports.fetch =  function(url , options ,proxy, callback) {
    if (url.toLowerCase().startsWith('http://')) {
        if (typeof proxy == 'string') {
            options.host = proxy.split(':')[0]
            options.port = proxy.split(':')[1]
            http.request(url , options , callback)
        } else {
            http.request(url , options , callback)
        }
    } else if (url.toLowerCase().startsWith('https://')) {
        if (typeof proxy == 'string') {
            options.host = proxy.split(':')[0]
            options.port = proxy.split(':')[1]
            https.request(url , options , callback)
        } else {
            https.request(url , options , callback)
        }
    } else {
        throw new Error('Invalid Protocol')
    }
}

module.exports.get = function (url, options , proxy , callback) {
    if (url.toLowerCase().startsWith('http://')) {
        if (typeof proxy == 'string') {
            options.host = proxy.split(':')[0]
            options.port = proxy.split(':')[1]
            options.method = 'GET'
            http.request(url , options , callback)
        } else {
            options.method = 'GET'
            http.request(url , options , callback)
        }
    } else if (url.toLowerCase().startsWith('https://')) {
        if (typeof proxy == 'string') {
            options.host = proxy.split(':')[0]
            options.port = proxy.split(':')[1]
            options.method = 'GET'
            https.request(url , options , callback)
        } else {
            options.method = 'GET'
            https.request(url , options , callback)
        }
    } else {
        throw new Error('Invalid Protocol')
    }
}

module.exports.post = function (url , options , proxy , callback) {
    if (url.toLowerCase().startsWith('http://')) {
        if (typeof proxy == 'string') {
            options.host = proxy.split(':')[0]
            options.port = proxy.split(':')[1]
            options.method = 'POST'
            http.request(url , options , callback)
        } else {
            options.method = 'POST'
            http.request(url , options , callback)
        }
    } else if (url.toLowerCase().startsWith('https://')) {
        if (typeof proxy == 'string') {
            options.host = proxy.split(':')[0]
            options.port = proxy.split(':')[1]
            options.method = 'POST'
            https.request(url , options , callback)
        } else {
            options.method = 'POST'
            https.request(url , options , callback)
        }
    } else {
        throw new Error('Invalid Protocol')
    }
}

module.exports.put = function (url , options , proxy, callback) {
    if (url.toLowerCase().startsWith('http://')) {
        if (typeof proxy == 'string') {
            options.host = proxy.split(':')[0]
            options.port = proxy.split(':')[1]
            options.method = 'PUT'
            http.request(url , options , callback)
        } else {
            options.method = 'PUT'
            http.request(url , options , callback)
        }
    } else if (url.toLowerCase().startsWith('https://')) {
        if (typeof proxy == 'string') {
            options.host = proxy.split(':')[0]
            options.port = proxy.split(':')[1]
            options.method = 'PUT'
            https.request(url , options , callback)
        } else {
            options.method = 'PUT'
            https.request(url , options , callback)
        }
    } else {
        throw new Error('Invalid Protocol')
    }
}

module.exports.del =  function(url , options , proxy , callback) {
    if (url.toLowerCase().startsWith('http://')) {
        if (typeof proxy == 'string') {
            options.host = proxy.split(':')[0]
            options.port = proxy.split(':')[1]
            options.method = 'DELETE'
            http.request(url , options , callback)
        } else {
            options.method = 'DELETE'
            http.request(url , options , callback)
        }
    } else if (url.toLowerCase().startsWith('https://')) {
        if (typeof proxy == 'string') {
            options.host = proxy.split(':')[0]
            options.port = proxy.split(':')[1]
            options.method = 'DELETE'
            https.request(url , options , callback)
        } else {
            options.method = 'DELETE'
            https.request(url , options , callback)
        }
    } else {
        throw new Error('Invalid Protocol')
    }
}