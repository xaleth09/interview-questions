"use client"

import React from 'react'
import styled from "styled-components";
import {COLORS} from "@/app/design-tokens";
import {FormsOnForms} from "@/app/features/forms-on-forms";

const Page = styled.main`
    display: flex;
    width: 100%;
    min-height: 100%;
    padding: 64px;
    background-color: ${COLORS.WHITE};
`

const Home = () => (
    <Page>
        <FormsOnForms/>
    </Page>
)

export default Home
