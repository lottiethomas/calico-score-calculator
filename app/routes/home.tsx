import type {Route} from "./+types/home";
import Cat from "~/components/Cat";
import {Col, Container, Row} from "react-bootstrap";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home() {
    return (
        <Container fluid>
            <Row>
                <Col><Cat name={"Casper"} image={require("~/assets/casper.png")}/></Col>
                <Col><Cat name={"Casper"} image={require("~/assets/casper.png")} displayName/></Col>
            </Row>
            <Row>
                <Col><Cat name={"Default Cat"}/></Col>
            </Row>
        </Container>
    );
}
