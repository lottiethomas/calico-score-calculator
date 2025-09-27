import type {Route} from "./+types/home";
import Cat from "~/components/Cat";
import {Col, Container, Row} from "react-bootstrap";
import Scorable from "~/components/Scorable";

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
                <Col><Scorable display={<Cat name={"Casper"} image={require("~/assets/casper.png")}/>}/></Col>
                <Col><Scorable
                    display={<Cat name={"Casper"} image={require("~/assets/casper.png")} displayName/>}/></Col>
                <Col><Cat name={"Casper"} image={require("~/assets/casper.png")} displayName/></Col>
            </Row>
            <Row>
                <Col><Cat name={"Default Cat"}/></Col>
                <Col><Scorable display={<Cat name={"Holly"}/>}/></Col>
            </Row>
        </Container>
    );
}
