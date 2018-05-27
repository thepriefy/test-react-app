import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
    color: ${props => props.primary ? 'blue' : 'black' };
`

// class Button extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ButtonCom>click</ButtonCom>
//             </div>
//         )
//     }
// }
//
// export default Button