// Test away
import React from 'react';
import Controls from './Controls';
import { cleanup, fireEvent, render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('Controls', () => {
    test('Lock Check', () => {
        const button1 = render(<Controls locked={true} closed={true} />).getByTestId("clopenbtn");
        const controls = render(<Controls locked={true} closed={true} />);
        fireEvent.click(button1);
        const lockhold = controls.getByTestId("lockbtn");
        expect(lockhold).toHaveTextContent('Unlock Gate');
    })
}
)