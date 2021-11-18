import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useCar from "../../../hooks/useCar";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const history = useHistory();
  const { car, isLoadingCar } = useCar();
  const [currentService, setCurrentService] = useState({});
  //console.log('car ', car, serviceId, currentService);
  useEffect(() => {
    setCurrentService(car.find((x) => x.id === serviceId));
  }, [car, serviceId]);

  return isLoadingCar === false ? (
    <div className="mt-5 pt-4">
      <div className="">
        <h2 className="border-bottom text-center fw-bold py-3">
          <span className="">{currentService?.name}</span>{" "}
        </h2>
        <div className="mx-3 mt-3  text-center">
          <img
            src={currentService?.img}
            alt={" image of " + currentService?.name}
            width="50%"
            className="rounded"
          />
        </div>
        <div className="py-2 px-3">
          <h5 className=" fw-bold text-center ">
            <span>{currentService?.description}</span>
          </h5>
        </div>
        <div className="py-2 px-3">
          <h5 className=" fw-bold text-center">
            Price:{" "}
            <span className="text-success">{currentService?.price}$</span>
          </h5>
        </div>
      </div>
      <div className="py-4 text-center ">
        <Button
          variant="primary"
          onClick={() => {
            history.push(`/order/${currentService?.id}`);
          }}
          className="ms-4"
        >
          Purchase
        </Button>
      </div>
    </div>
  ) : (
    <div className="mt-5 pt-5 text-center" style={{ height: "100vh" }}>
      <Spinner animation="grow"></Spinner>
    </div>
  );
};

export default ServiceDetails;
