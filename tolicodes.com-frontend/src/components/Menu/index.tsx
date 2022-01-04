import React from "react";
import Container from "./Container";
import Item from "./Item";
export interface MenuLink {
    /**
     * Display text
     */
    title: string;

    /**
     * Link URL
     */
    url: string;
}

export interface MenuProps {
    /**
     * Array of menu items
     */
    links: ReadonlyArray<MenuLink>;
}

export function Menu(props: MenuProps) {
    return (
        <Container>
            {props.links.map((value) => (
                <Item key={value.url + value.title} href={value.url}>
                    {value.title}
                </Item>
            ))}
        </Container>
    );
}
