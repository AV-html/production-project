import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass additional';
        expect(classNames('someClass', {}, ['additional']))
            .toBe(expected);
    });

    test('with additional classes', () => {
        const expected = 'someClass additional another';
        expect(classNames('someClass', {}, ['additional', 'another']))
            .toBe(expected);
    });

    test('with additional classes and mods', () => {
        const expected = 'someClass additional another collapsed hovered';
        expect(classNames('someClass', {
            collapsed: true,
            random: false,
            hovered: true,
        }, ['additional', 'another']))
            .toBe(expected);
    });

    test('with additional classes and mods', () => {
        const expected = 'someClass additional another collapsed';
        expect(classNames('someClass', {
            collapsed: true,
            random: false,
            hovered: undefined,
        }, ['additional', 'another']))
            .toBe(expected);
    });
});
