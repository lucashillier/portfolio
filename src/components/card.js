import React, { Component } from 'react';
import { Link } from "./link.js";
import { Container } from "./layout.js";

const Card = (props) => {
  return (
    <Link href={props.href}>
      <Container>
        {props.children}
      </Container>
    </Link>
  )
}

export { Card };
