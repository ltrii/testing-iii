// Test away
import React from 'react';
import Dashboard from './Dashboard';
import { cleanup, fireEvent, render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('Dashboard component', () => {
    
    it("Contains necesscary components", () => {
        const component = render(<Dashboard />);
        component.getByText(/open/i);
        component.getByText(/unlocked/i);
      });
    test('Closing Works', () => {
        const button1 = render(<Dashboard />).getByTestId("clopenbtn");
        const dashboard = render(<Dashboard />);
        fireEvent.click(button1);
        const lockhold = dashboard.getByTestId("clopenbox");
        expect(lockhold).toHaveTextContent('Closed');
    })
    test('Locking Works', () => {
        const button1 = render(<Dashboard />).getByTestId("clopenbtn");
        const button2 = render(<Dashboard />).getByTestId("lockbtn");
        const dashboard = render(<Dashboard />);
        fireEvent.click(button1);
        fireEvent.click(button2);
        const lockhold = dashboard.getByTestId("lockbox");
        expect(lockhold).toHaveTextContent('Locked');
    })
    test('Unlocking Works', () => {
        const button1 = render(<Dashboard />).getByTestId("clopenbtn");
        const button2 = render(<Dashboard />).getByTestId("lockbtn");
        const dashboard = render(<Dashboard />);
        fireEvent.click(button1);
        fireEvent.click(button2);
        fireEvent.click(button2);
        fireEvent.click(button1);
        const lockhold = dashboard.getByTestId("lockbox");
        expect(lockhold).toHaveTextContent('Unlocked');
    })
})