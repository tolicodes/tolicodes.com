import React, { PropsWithChildren, ReactNode } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

export interface HeaderProps extends PropsWithChildren<any> {
  logo?: ReactNode;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Logo>{props.logo}</Logo>
      <Menu>{props.children}</Menu>
    </Container>
  );
}
