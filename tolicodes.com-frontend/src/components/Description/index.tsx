// import { Col, Row } from "@geist-ui/react";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Container from "./Container";

interface DescriptionProps {
  title?: string;
  pictureUrl?: string;
}

const Title = styled.h1`
  font-style: normal;
  line-height: normal;
  color: #ffffff;
  font-family: Montserrat;
  font-size: 68px;
  font-weight: bold;
  letter-spacing: 1.63px;
`;

export function Description(props: PropsWithChildren<DescriptionProps>) {
  return (
    <Container>
      {/* <Row>
        <Col span={9}> */}
          <img src={props.pictureUrl} alt={""} />
        {/* </Col>
        <Col span={15}> */}
          <Title>{props?.title}</Title>
          {props.children}
        {/* </Col>
      </Row> */}
    </Container>
  );
}
