import {COLORS} from "@/app/design-tokens";
import {Column, Row} from "@/app/components";
import styled from "styled-components";
import {Diamond} from "@/app/features/pool-table/components/Diamond";
import React from "react";
import {CornerPocket} from "@/app/features/pool-table/components/CornerPocket";

const RailSection = styled(Column)`
    width: 100%;
    height: 152px;
`

const WoodRailing = styled(Row)`
    height: 60px;
    width: 100%;
    background-color: ${COLORS.GREY_DARKER};
`

const Bumper = styled(Row)`
    z-index: 2;
    width: 100%;
    height: 38px;
    clip-path: polygon(0 100%, 10px 0, calc(100% - 10px) 0, 100% 100%);
    border-top: .25px solid ${COLORS.BLACK};
    border-radius: 24px 24px 4px 4px;
`

export const BottomRail = () => (
    <RailSection>
        <Row bottom>
            <CornerPocket position={'bottom-left'}/>
            <Column flexGrow={1}>
                <Bumper backgroundColor={COLORS.PRIMARY_LIGHTEST}/>
                <WoodRailing centerVertically spaceAround spaceEvenly>
                    <Diamond/>
                    <Diamond/>
                    <Diamond/>
                </WoodRailing>
            </Column>
            <CornerPocket position={'bottom-right'}/>
        </Row>
    </RailSection>
)
