"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseValue(val) {
    var num = +val;
    if (num)
        return num;
    if (val === 'true')
        return true;
    if (val === 'false')
        return false;
    return val;
}
function getArgs(argv) {
    var args = {
        _: argv.slice(0, 2),
        additional: [],
    };
    var i = 2;
    var prev = [];
    function addValueToPrev(val) {
        var k = prev.length;
        while (k--) {
            var name_1 = prev[k];
            args[name_1] = parseValue(val);
        }
        prev = [];
    }
    function parse(val) {
        if (val[0] !== '-') {
            if (prev.length)
                addValueToPrev(val);
            else
                args.additional.push(val);
            return;
        }
        if (prev.length)
            addValueToPrev('true');
        var _a = val.split('='), names = _a[0], vals = _a[1];
        if (names[names.length - 1] === '-')
            return;
        prev = names.indexOf('--') === 0 ? [names.substr(2)] : names.substr(1).split('');
        if (vals !== undefined)
            parse(vals);
    }
    for (var i_1 = 2, l = argv.length; i_1 < l; i_1++) {
        parse(argv[i_1]);
    }
    if (prev.length)
        addValueToPrev('true');
    return args;
}
exports.args = getArgs;
//# sourceMappingURL=node-args.js.map