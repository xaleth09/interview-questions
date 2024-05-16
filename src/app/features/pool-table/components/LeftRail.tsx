import {COLORS} from "@/app/design-tokens";
import {Column, Row} from "@/app/components";
import styled from "styled-components";
import {Diamond} from "@/app/features/pool-table/components/Diamond";
import React from "react";
import {SidePocket} from "@/app/features/pool-table/components/SidePocket";

const RailSection = styled(Column)`
    justify-self: flex-start;
    height: 100%;
    width: 100px;
`
const WoodRailing = styled(Column)`
    width: 64px;
    height: 100%;
    background-color: ${COLORS.GREY_DARKER};
    border-left: 3px solid ${COLORS.GREY_DARK};
`
type BumperProps = {
    position: 'above-pocket' | 'below-pocket'
}

const Bumper = styled(Row)<BumperProps>`
    z-index: 2;
    height: 100%;
    width: 38px;
    box-shadow: 100 100px 10px -10px ${COLORS.BLACK};
    border-right: .25px solid ${COLORS.BLACK};
    border: .25px solid ${COLORS.BLACK};
    ${({position}) => position === 'above-pocket' ? `
    border-radius: 4px 20px 14px 4px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    ` : `
    border-radius: 4px 14px 20px 4px;
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
    `}
`


export const LeftRail = () => (
    <RailSection>
        <Row flexGrow={1}>
            <Column>
                <WoodRailing centerHorizontally spaceAround spaceEvenly>
                    <Diamond orientation={'horizontal'}/>
                    <Diamond orientation={'horizontal'}/>
                    <Diamond orientation={'horizontal'}/>
                </WoodRailing>
                {/*<Spacing size={'XS'}/>*/}
            </Column>
            <Bumper position={'above-pocket'} backgroundColor={COLORS.PRIMARY_LIGHTEST}/>
        </Row>
        <SidePocket position={'center-left'}/>
        <Row flexGrow={1}>
            <Column>
                <WoodRailing centerHorizontally spaceAround spaceEvenly>
                    <Diamond orientation={'horizontal'}/>
                    <Diamond orientation={'horizontal'}/>
                    <Diamond orientation={'horizontal'}/>
                </WoodRailing>
                {/*<Spacing height={'LG'}/>*/}
            </Column>
            <Bumper position={'below-pocket'} backgroundColor={COLORS.PRIMARY_LIGHTEST}/>
        </Row>
    </RailSection>
)
