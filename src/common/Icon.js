import styled from 'styled-components'


const Icon = styled.div`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    width: 48px;
    height: 48px;
    float: left;
`
export default Icon;