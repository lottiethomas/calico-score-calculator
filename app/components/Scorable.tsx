import {ReactElement, useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

type ScorableProps = {
    display: ReactElement,
}

const decreaseStyle = {
    textAlign: 'end' as const,
    verticalAlign: 'middle' as const,
}

const increaseStyle = {
    textAlign: 'start' as const,
    verticalAlign: 'middle' as const,
}

const countStyle = {
    textAlign: 'center' as const,
    verticalAlign: 'middle' as const,
    fontSize: 26,
}

const scorableRowStyle = {
    justifyContent: 'center' as const,
    marginTop: 10,
}

export default function Scorable(props: ScorableProps) {
    const [count, setCount] = useState(0);

    return (
        <>
            <Container fluid>
                <Row style={scorableRowStyle}>
                    <Col>
                        {props.display}
                    </Col>
                </Row>
                <Row style={scorableRowStyle}>
                    <Col style={decreaseStyle}>
                        <Button aria-label={'decrease count'}
                                data-testid={'decrease-button'}
                                disabled={count <= 0}
                                onClick={() => setCount(count - 1)}>
                            <i className="bi bi-dash-lg"></i>
                        </Button>
                    </Col>
                    <Col style={countStyle}>
                        <span data-testid={'count'}>{count}</span>
                    </Col>
                    <Col style={increaseStyle}>
                        <Button aria-label={'increase count'}
                                data-testid={'increase-button'}
                                onClick={() => setCount(count + 1)}>
                            <i className="bi bi-plus-lg"></i>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}