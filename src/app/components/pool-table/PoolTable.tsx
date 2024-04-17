import {COLORS} from "@/app/design-tokens";
import {Column, Row, TopRail} from "@/app/components";
import {LeftRail} from "@/app/components/pool-table/LeftRail";
import {RightRail} from "@/app/components/pool-table/RightRail";
import {BottomRail} from "@/app/components/pool-table/BottomRail";
import styled from "styled-components";
import {CORNER_POCKET_RADIUS} from "@/app/components/pool-table/CornerPocket";

const Table = styled(Column)`
    max-width: 75%;
    border-radius: ${CORNER_POCKET_RADIUS};
    background-color: mediumslateblue;
`

const MidSection = styled(Row)`
    height: 100%;
`
export const PoolTable = () => {
    return (
        <Table flexGrow={1} backgroundColor={COLORS.PRIMARY_LIGHTEST}>
            <TopRail/>
            <MidSection flexGrow={1} spaceBetween>
                <LeftRail/>
                <RightRail/>
            </MidSection>
            <BottomRail/>
        </Table>
    );
}
