import Scorable from "~/components/Scorable";
import {fireEvent, render} from "@testing-library/react";

describe('<Scorable />', () => {
    test('Renders the provided display item', () => {
        const {getByText} = render(<Scorable display={<p>Hello</p>}/>);
        expect(getByText('Hello'));
    })

    test('Renders plus and minus buttons', () => {
        const {getByRole} = render(<Scorable display={<p>Hello</p>}/>)
        expect(getByRole('button', {name: /decrease count/i}))
            .toHaveAttribute('data-testid', 'decrease-button');
        expect(getByRole('button', {name: /increase count/i}))
            .toHaveAttribute('data-testid', 'increase-button');
    })

    test('Count increases when plus button is clicked', () => {
        const {getByTestId} = render(<Scorable display={<p/>}/>);
        const increaseButton = getByTestId('increase-button');
        // Count is initially 0
        expect(getByTestId('count')).toHaveTextContent('0');
        fireEvent.click(increaseButton);
        // Count should now be 1
        expect(getByTestId('count')).toHaveTextContent('1');
    })

    test('Count decreases when minus button is clicked', () => {
        const {getByTestId} = render(<Scorable display={<p/>}/>);
        const increaseButton = getByTestId('increase-button');
        const decreaseButton = getByTestId('decrease-button');
        for (let i = 0; i < 10; i++) {
            fireEvent.click(increaseButton);
        }
        fireEvent.click(decreaseButton);
        // Count should be 9
        expect(getByTestId('count')).toHaveTextContent('9');
    })

    test('Count cannot go below 0', () => {
        const {getByTestId} = render(<Scorable display={<p/>}/>);
        expect(getByTestId('decrease-button')).toBeDisabled()
    })
});