import {render} from '@testing-library/react';

import Cat from '~/components/Cat';

describe('<Cat />', () => {
    test('Cat\'s name is rendered', () => {
        const name = 'Casper';
        const {getByTestId} = render(<Cat name={name}/>);
        expect(getByTestId('cat-name')).toHaveTextContent(name);
    });

    test('Default cat image is rendered when no image is provided', () => {
        const expectedImage = require("~/assets/default-cat.png");
        const {getByTestId} = render(<Cat name={"Casper"}/>);
        expect(getByTestId('cat-image').getAttribute('src')).toBe(expectedImage);
    });

    test('Custom cat image is rendered when image is provided', () => {
        const expectedImage = require("~/assets/casper.png");
        const {getByTestId} = render(<Cat name={"Casper"} image={expectedImage}/>);
        expect(getByTestId('cat-image').getAttribute('src')).toBe(expectedImage);
    });

    test('Name is not present when custom image is provided', () => {
        const image = require("~/assets/casper.png");
        const name = 'Casper';
        const {queryByTestId} = render(<Cat name={name} image={image}/>);
        expect(queryByTestId('cat-name')).not.toBeInTheDocument();
    })

    test('Name is present when forced', () => {
        const image = require("~/assets/casper.png");
        const name = 'Casper';
        const {queryByTestId} = render(<Cat name={name} image={image} displayName/>);
        expect(queryByTestId('cat-name')).toBeInTheDocument();
    })
});