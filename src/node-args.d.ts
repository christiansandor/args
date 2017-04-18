// Type definitions for node-args v2.1
// Project: https://github.com/christiansandor/
// Definitions by: Sándor Krisztián <https://github.com/christiansandor/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Args {
    _: Array<string>;
    additional: Array<string | number>;
    [others: string]: string | number | boolean | Array<string | number>;
}

declare function getArgs(argv: Array<string>): Args;
export { getArgs as args };
