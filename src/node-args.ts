interface Args {
    _ : Array<string>;
    additional: Array<string|number>;
    [others: string]: string|number|boolean|Array<string|number>;
}

function parseValue(val : string) : string|number|boolean {
    let num = +val;

    if (num) return num;
    if (val === 'true') return true;
    if (val === 'false') return false;

    return val;
}

function getArgs(argv : Array<string>) : Args {
    const args : Args = {
        _: argv.slice(0, 2),
        additional: [],
    };

    let i = 2;
    let prev : string[] = [];

    function addValueToPrev(val : string) {
        let k = prev.length;
        while (k--) {
            let name = prev[k];
            args[name] = parseValue(val);
        }
        prev = [];
    }

    function parse(val : string) {
        if (val[0] !== '-') {
            if (prev.length) addValueToPrev(val);
            else args.additional.push(val);

            return;
        }

        if (prev.length) addValueToPrev('true');

        let [names, vals] = val.split('=');
        if (names[names.length - 1] === '-') return;
        
        prev = names.indexOf('--') === 0 ? [names.substr(2)] : names.substr(1).split('');
        if (vals !== undefined) parse(vals);
    }

    for (let i = 2, l = argv.length; i < l; i++) {
        parse(argv[i]);
    }

    return args;
}

export default getArgs;
