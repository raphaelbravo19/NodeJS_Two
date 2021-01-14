const validate = (obj, params) => {
    var res = null
    for (var i = 0; i < params.length; i++) {
        var key = params[i];
        if (obj[key] == null || obj[key] == "") {
            throw { code: "400", message: `Request not valid, '${key}' missing found.` }

        }
    }
}

module.exports = { validate }