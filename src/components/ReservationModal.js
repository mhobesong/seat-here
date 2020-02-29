import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';

const ReservationModal = (props) => {

const {
	buttonLabel,
	className
} = props;

const [modal, setModal] = useState(false);

const toggle = () => {
  setModal(!modal);
}

const redirect = () => {
	console.log("clicked");
	return <Redirect to='/payment'  />
}

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Reservation</ModalHeader>
        <ModalBody>
	  		<div className="container">
				<form>
					<div className="form-group row">
						<label htmlFor="seats" className="col-sm-6 col-form-label">Number of Seats</label>
						<div className="col-sm-6">
						<input type="text" className="form-control" id="seats" />
						</div>
					</div>

					<div className="form-group row">
						<label htmlFor="seatPrice" className="col-sm-2 col-form-label">Price</label>
						<div className="col-sm-10">
							<input type="text" readOnly className="form-control-plaintext" id="seatPrice" value="6000 FCFA" />
						</div>
					</div>

				</form>
	  		</div>
        </ModalBody>
        <ModalFooter>
		  <Link to="/payment" className="btn btn-primary">Pay</Link>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ReservationModal;
