jest.mock('react-dom', () => ({
    render: jest.fn(),
}));

import {createMessage} from './index';

describe('createMessage', () => {
    test('nameが入力されている場合', () => {
        expect(createMessage('Shoichi')).toBe('hello, Shoichi.');
    });
});