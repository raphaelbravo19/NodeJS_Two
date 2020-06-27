const validate = (obj, params) => {
    var res = null
    for (var i = 0; i < params.length; i++) {
        var key = params[i];
        if (obj[key] == null || obj[key] == "") {
            res = `Request not valid, '${key}' missing found.`
            break
        }

    }
    return res
}

module.exports = { validate }