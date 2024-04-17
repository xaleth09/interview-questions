import {COLORS} from "@/app/design-tokens";
import {Column, Row} from "@/app/components";
import styled from "styled-components";
import {Diamond} from "@/app/components/pool-table/components/Diamond";
import React from "react";
import {CornerPocket} from "@/app/components/pool-table/components/CornerPocket";

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
    //border-radius: 4px 4px 24px 24px;
    clip-path: polygon(0 0, 100% 0, 100% 0, calc(100% - 10px) 100%, 10px 100%);
    border: .25px solid ${COLORS.BLACK};
        //box-shadow: 0 40px 10px 0 ${COLORS.BLACK};
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
        {/*<Row centerHorizontally>*/}
        {/*</Row>*/}
    </RailSection>
)
