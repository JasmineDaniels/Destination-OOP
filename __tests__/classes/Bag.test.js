const Bag = require('../../classes/Bag.js');
const { describe, it, test, expect } = require('@jest/globals');

describe('requirements for Bag class', () => {
    const myBag = new Bag(30, 1);
    it('if Object created is a Bag', () => {
        expect(myBag instanceof Bag).toBe(true);
    })

    it('test if weight property is correct', () => {
        expect(myBag.weight).toBe(30);
    })

    it('test if id property is correct', () => {
        expect(myBag.id).toBe(1);
    })

    it('test if owner property is null', () => {
        expect(myBag.getOwner()).toBe(null);
    })

    it('test if owner property can be updated', () => {
        //const myPerson = { name: 'Alina', destination: 'Tampa'};
        expect(myBag.assignOwner()).toBe();
    })
})