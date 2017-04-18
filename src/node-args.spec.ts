import {expect} from 'chai';
import {args} from './node-args';

describe('Node Args module', function () {
    it('Should get default values', function () {
        const argv = ['a', 'b'];
        const obj = args(argv);

        expect(obj).to.have.property('_').that.deep.equals(argv);
        expect(obj).to.have.property('additional').that.deep.equals([]);
    });

    it('Should get additional values', function () {
        const argv = ['a', 'b', 'c', 'd'];
        const obj = args(argv);

        expect(obj.additional).to.be.deep.equal(['c', 'd']);
    });

    it('Should get shorthand values', function () {
        const argv = ['a', 'b', 'c', '-ab', '-cd=2', '-e', 'false', '-f', 'something'];
        const obj = args(argv);

        expect(obj).to.have.deep.property('a', true);
        expect(obj).to.have.deep.property('b', true);
        expect(obj).to.have.deep.property('c', 2);
        expect(obj).to.have.deep.property('d', 2);
        expect(obj).to.have.deep.property('e', false);
        expect(obj).to.have.deep.property('f', 'something');
    });

    it('Should get named values', function () {
        const argv = ['a', 'b', 'c', '--abc', '--def=2', '--g', 'false', '--h', 'something'];
        const obj = args(argv);

        expect(obj).to.have.deep.property('abc', true);
        expect(obj).to.have.deep.property('def', 2);
        expect(obj).to.have.deep.property('g', false);
        expect(obj).to.have.deep.property('h', 'something');
    });

    it('Should handle wrong values', function () {
        const argv = ['a', 'b', '-', 'c', '--', '-', 'd', '-g', '--'];
        const obj = args(argv);

        expect(obj).to.exist;
        expect(Object.keys(obj)).to.be.deep.equal(['_', 'additional', 'g']);
        expect(obj).to.have.deep.property('additional').that.deep.equals(['c', 'd']);
        expect(obj).to.have.deep.property('g', true);
    });
});
