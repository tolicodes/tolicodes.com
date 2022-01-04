import React, { PropsWithChildren } from 'react'
import { Container } from './Container'

export interface HeaderProps extends PropsWithChildren<any> {
    
}

export const Header = (props: HeaderProps) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}
