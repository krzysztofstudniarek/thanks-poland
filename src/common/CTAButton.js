import * as React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 190px;
    height: 50px;
    margin-top: 75px;
    border-radius: 5px;
    background-color: #DB3069;
    border: none;
    color: white;

    &:hover {
        color: #DB3069;
        background-color: white
    }
`
const ButtonContainer = styled.div`
    position: absolute;
    right: 0px;
    top:0px;
    width: 190px;
    height: 65px;
`
const ButtonLink = styled.a`
    text-decoration: none;
    font-size: 20px;
    font-weight: 100;
    color: inherit;
`

const CTAButton = () => {
    return (
        <ButtonContainer>
            <Button>
                <ButtonLink 
                    href="#" 
                    rel="nofollow" 
                    target="_blank">
                        Zgłoś Trola!        
                </ButtonLink>
            </Button>
        </ButtonContainer>
    )
}

export default CTAButton