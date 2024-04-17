'use client';

import {COLORS} from "@/app/design-tokens";
import styled from "styled-components";
import {Padding} from "@/app/components";
import {HORIZONTAL_CENTER, PoolTable} from "@/app/features/pool-table";
import {Ball} from "@/app/features/pool-table/components/Ball";

const Main = styled.main`
    width: 100%;
    height: 125%;
    min-height: 100%;
    background-color: ${COLORS.WHITE};
    display: flex;
`;

export default function Home() {
    return (
        <Main>
            <Padding flexGrow={1} size='LG'>
                <PoolTable>
                    <Ball position={{top: '10%', left: HORIZONTAL_CENTER}} number={2}/>
                </PoolTable>
            </Padding>
        </Main>
    );
}
