// import { Col, Row } from "@geist-ui/react";
import React from "react";
import Container from "./Container";
import Title from "./Title";

export interface YouTubeVideoProps {
    title?: string;
    src?: string;
    width?: number | string;
    height?: number | string;
}

export function YouTubeVideo({ width = "100%", ...props }: YouTubeVideoProps) {
    return (
        <Container>
            {/* <Row>
                <Col span={4} />
                <Col span={20}> */}
                    {props.title && <Title>{props.title}</Title>}
                    {props.src && (
                        <iframe
                            width={width}
                            height={props.height}
                            src={props.src}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title='YouTube Video'
                        ></iframe>
                    )}
                {/* </Col>
            </Row> */}
        </Container>
    );
}