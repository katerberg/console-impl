'use strict';

import chai, { expect } from 'chai';
import sinon, { stub } from 'sinon';
import ConsoleImpl from './ConsoleImpl';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

describe('Console Impl', () => {
    describe('#constructor()', () => {
        it('has methods of console', () => {
            const testObject = new ConsoleImpl();

            expect(typeof testObject.assert).to.eql('function');
            expect(typeof testObject.clear).to.eql('function');
            expect(typeof testObject.count).to.eql('function');
            expect(typeof testObject.debug).to.eql('function');
            expect(typeof testObject.dir).to.eql('function');
            expect(typeof testObject.dirxml).to.eql('function');
            expect(typeof testObject.error).to.eql('function');
            expect(typeof testObject.exception).to.eql('function');
            expect(typeof testObject.group).to.eql('function');
            expect(typeof testObject.groupCollapsed).to.eql('function');
            expect(typeof testObject.groupEnd).to.eql('function');
            expect(typeof testObject.info).to.eql('function');
            expect(typeof testObject.log).to.eql('function');
            expect(typeof testObject.profile).to.eql('function');
            expect(typeof testObject.profileEnd).to.eql('function');
            expect(typeof testObject.table).to.eql('function');
            expect(typeof testObject.time).to.eql('function');
            expect(typeof testObject.timeEnd).to.eql('function');
            expect(typeof testObject.timeStamp).to.eql('function');
            expect(typeof testObject.trace).to.eql('function');
            expect(typeof testObject.warn).to.eql('function');
        });
    });
});

