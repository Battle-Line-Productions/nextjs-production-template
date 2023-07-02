import type { NextPage } from "next";
import { Col, Container, Row } from "react-bootstrap";
import ButtonComponent from "../components/buttonComponent";

const Home: NextPage = () => {
	return (
		<Container>
			<Row>
				<Col>
					<h1>Next React with Bootstrap</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid quia optio odit
						nihil voluptatibus soluta labore earum nostrum doloremque. Sequi laboriosam dicta praesentium,
						sit aspernatur non molestiae voluptates beatae.
					</p>
					<ButtonComponent id="my-test-button" text="My Test" color="blue" tooltip="This is my test button" />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
