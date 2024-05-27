'use client';

import React from 'react'
import {COLORS} from "@/app/design-tokens";
import styled from "styled-components";
import {LeetCodePlayground} from "@/app/features/leetcode-playground/LeetCodePlayground";

const Main = styled.main`
    width: 100%;
    min-height: 100%;
    background-color: ${COLORS.WHITE};
    display: flex;
    padding: 64px;
`;

const Home = () => {
    return (
        <Main>
            <LeetCodePlayground/>
        </Main>
    );
}

export default Home
