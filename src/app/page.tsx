'use client';

import {COLORS} from "@/app/design-tokens";
import styled from "styled-components";
import {Padding} from "@/app/components";
import {PoolTable} from "@/app/components/pool-table/PoolTable";

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
                <PoolTable/>
            </Padding>
        </Main>
    );
}
