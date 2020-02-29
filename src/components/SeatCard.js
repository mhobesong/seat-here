import React from 'react';
import ReservationModal from '../components/ReservationModal';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
	Col, Row
} from 'reactstrap';

const SeatCard = (props) => {
  return (
    <Row>
		<Col sm="3">
		  <Card>
			<CardImg top width="100%" src={props.image} alt="Card image cap" />
			<CardBody>
			  <CardTitle>Bar Seat</CardTitle>
			  <CardSubtitle>Available places: 20</CardSubtitle>
			  <CardText></CardText>
			<ReservationModal className="reservationModal" buttonLabel="Reserve"/>
			</CardBody>
		  </Card>
		</Col>
	</Row>
  );
};

export default SeatCard;
