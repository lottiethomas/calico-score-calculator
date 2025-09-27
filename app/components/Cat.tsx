import {Image} from "react-bootstrap";

type CatProps = {
    name: string,
    image?: any,
    displayName?: boolean
}

const catNameStyle = {
    textAlign: 'center' as const,
    fontSize: 30,
}

const catImageStyle = {
    display: 'block',
    margin: 'auto',
    width: '100%',
    maxWidth: '600px'
}

export default function Cat(props: CatProps) {
    const defaultImage = require('~/assets/default-cat.png');
    const image = props.image ?? defaultImage;
    return (
        <>
            <Image src={image} alt={props.name} data-testid={'cat-image'} style={catImageStyle} fluid/>
            {(!props.image || props.displayName) &&
                <p data-testid={'cat-name'} style={catNameStyle}>{props.name}</p>}
        </>
    )
}