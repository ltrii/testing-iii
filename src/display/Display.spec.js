// Test away
import React from 'react';
import Display from './Display';
import { cleanup, fireEvent, render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('Display', () => {
    test('Prop Response Check', () => {
        const controls = render(<Display locked={true} closed={true} />);
        const lockhold = controls.getByTestId("lockbox");
        expect(lockhold).toHaveTextContent('Locked');
        expect(lockhold).toHaveClass('red-led');
    })
}
)