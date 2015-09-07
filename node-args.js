module.exports = exports = (function () {
    var param = /^-(.*)$/;
    var full_param = /^--(.*?)(=(.*)|)$/;
    var prev = null;

    function parse(val) { return +val || val; }

    return process.argv.slice(2).reduce(function (obj, e) {
        if (full_param.test(e)) obj[prev = e.replace(full_param, '$1')] = parse(e.replace(full_param, '$3')) || true;
        else if (param.test(e)) {
            if ((e = e.replace(param, '$1')).length > 1) {
                e.split('').map(function (key) { obj[key] = true; });
                prev = null;
            } else obj[prev = e] = true;
        } else if (prev) {
            obj[prev] = parse(e);
            prev = null;
        } else obj.additional.push(parse(e));

        return obj;
    }, {_: process.argv.slice(0, 2), additional: []});
})();