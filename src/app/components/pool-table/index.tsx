import {COLORS} from "@/app/design-tokens";
import {Column, Row} from "@/app/components";
import {LeftRail} from "@/app/components/pool-table/components/LeftRail";
import {RightRail} from "@/app/components/pool-table/components/RightRail";
import {BottomRail} from "@/app/components/pool-table/components/BottomRail";
import styled from "styled-components";
import {CORNER_POCKET_RADIUS} from "@/app/components/pool-table/components/CornerPocket";
import {TopRail} from "@/app/components/pool-table/components/TopRail";
import {ReactElement} from "react";

const Table = styled(Column)`
    max-width: 75%;
    border-radius: ${CORNER_POCKET_RADIUS};
    background-color: ${COLORS.PRIMARY_LIGHTER};
`

const MidSection = styled(Row)`
    height: 100%;
    width: 100%;
`
export const PoolTable = ({children}: { children: ReactElement }) => {
    return (
        <Table flexGrow={1} backgroundColor={COLORS.PRIMARY_LIGHTER}>
            <TopRail/>
            <MidSection flexGrow={1} backgroundColor={COLORS.PRIMARY_LIGHTER}>
                <LeftRail/>
                {children}
                <RightRail/>
            </MidSection>
            <BottomRail/>
        </Table>
    );
}
