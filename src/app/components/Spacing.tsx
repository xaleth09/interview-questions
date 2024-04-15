import styled from 'styled-components'
import {SizeKeys, SIZES} from "@/app/design-tokens";

const Spacer = styled.div<{size: SizeKeys}>`
    width: ${({size}) => SIZES[size].px};
    height: ${({size}) => SIZES[size].px};
`

const Spacing = ({size}: {size: SizeKeys}) => (
    <Spacer size={size}/>
)
