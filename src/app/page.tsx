'use client';

import React from 'react'
import {LeetCodePlayground} from "@/app/features/leetcode-playground/LeetCodePlayground";
import styled from "styled-components";
import {COLORS} from "@/app/design-tokens";

const Page = styled.main`
    width: 100%;
    min-height: 100%;
    background-color: ${COLORS.WHITE};
    display: flex;
    padding: 64px;
`

const Home = () => {
    return (
        <Page>
            <LeetCodePlayground/>
        </Page>
    );
}

export default Home
