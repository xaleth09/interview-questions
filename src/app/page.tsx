'use client';

import React from 'react'
import styled from "styled-components";
import {COLORS} from "@/app/design-tokens";
import {MyWordle} from "@/app/features/my-wordle";

const Page = styled.main`
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 100%;
    padding: 64px;
    background-color: ${COLORS.WHITE};
`

const Home = () => {
    return (
        <Page>
            <MyWordle/>
        </Page>
    );
}

export default Home
