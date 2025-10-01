import {fireEvent, render} from "@testing-library/react";
import DesignGoal from "~/components/DesignGoal";

describe('<DesignGoal />', () => {
    test('Renders image of the design goal', () => {
        const expectedImage = require("~/assets/three-pairs-goal.png");
        const {getByTestId} = render(<DesignGoal image={expectedImage} description={'test'}/>)
        expect(getByTestId('goal-image').getAttribute('src')).toBe(
            expectedImage
        )
    })

    test('Image alt text is a description of the goal', () => {
        const expectedAltText = 'Three pairs';
        const {getByTestId} = render(<DesignGoal image={require("~/assets/three-pairs-goal.png")}
                                                 description={expectedAltText}/>)
        expect(getByTestId('goal-image').getAttribute('alt')).toBe(
            expectedAltText
        )
    })

    test('Renders either/or achievement button', () => {
        const {getByTestId} = render(<DesignGoal image={require("~/assets/three-pairs-goal.png")}
                                                 description={"test"}/>)
        const button = getByTestId('either-or-button');
        expect(button).toHaveTextContent("Colour OR Pattern")
    })

    test('Renders both achievement button', () => {
        const {getByTestId} = render(<DesignGoal image={require("~/assets/three-pairs-goal.png")}
                                                 description={"test"}/>)
        const button = getByTestId('both-button');
        expect(button).toHaveTextContent("Colour AND Pattern")
    })

    test('Either/or achievement button can be selected alone', () => {
        const {getByRole} = render(<DesignGoal image={require("~/assets/three-pairs-goal.png")}
                                               description={"test"}/>)
        const eitherButton = getByRole('radio', {name: 'Colour OR Pattern'});
        const bothButton = getByRole('radio', {name: 'Colour AND Pattern'});
        fireEvent.click(eitherButton);
        expect(eitherButton).toBeChecked()
        expect(bothButton).not.toBeChecked()
    })

    test('Both achievement button can be selected alone', () => {
        const {getByRole} = render(<DesignGoal image={require("~/assets/three-pairs-goal.png")}
                                               description={"test"}/>)
        const eitherButton = getByRole('radio', {name: 'Colour OR Pattern'});
        const bothButton = getByRole('radio', {name: 'Colour AND Pattern'});
        fireEvent.click(bothButton);
        expect(bothButton).toBeChecked()
        expect(eitherButton).not.toBeChecked()
    })

    test('Either/or achievement button can be deselected', () => {
        const {getByRole} = render(<DesignGoal image={require("~/assets/three-pairs-goal.png")}
                                               description={"test"}/>)
        const eitherButton = getByRole('radio', {name: 'Colour OR Pattern'});
        const bothButton = getByRole('radio', {name: 'Colour AND Pattern'});
        const clearButton = getByRole('button', {name: 'Clear'});
        fireEvent.click(eitherButton);
        fireEvent.click(clearButton);
        expect(eitherButton).not.toBeChecked()
        expect(bothButton).not.toBeChecked()
    })

    test('Both achievement button can be deselected', () => {
        const {getByRole} = render(<DesignGoal image={require("~/assets/three-pairs-goal.png")}
                                               description={"test"}/>)
        const eitherButton = getByRole('radio', {name: 'Colour OR Pattern'});
        const bothButton = getByRole('radio', {name: 'Colour AND Pattern'});
        const clearButton = getByRole('button', {name: 'Clear'});
        fireEvent.click(bothButton);
        fireEvent.click(clearButton);
        expect(bothButton).not.toBeChecked()
        expect(eitherButton).not.toBeChecked()
    })
});