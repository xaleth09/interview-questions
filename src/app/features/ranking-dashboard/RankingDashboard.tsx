'use client';

import React, {useEffect, useState} from 'react'
import {COLORS} from "@/app/design-tokens";
import styled from "styled-components";
import {Row, Spacing} from "@/app/components";
import {steakhouses} from "@/app/features/configurable-form/steakhouses";

const Main = styled.main`
    width: 100%;
    min-height: 100%;
    background-color: ${COLORS.WHITE};
    display: flex;
    padding: 56px 156px;
`;

const RankIncrementButton = styled.button<{ color?: string, disabled?: boolean }>`
    padding: 8px;
    min-width: 36px;
    border-radius: 50%;
    border: 1px solid ${COLORS.GREY};
    cursor: pointer;
    ${({color}) => color ? `color: ${color};` : ''}
    ${({disabled}) => disabled ? `
        cursor: not-allowed;
        background-color: darkgrey;
        color: dimgrey;
    ` : ''}
`

const Link = styled.a`
    text-decoration: none;
    color: black;
`

type SteakHousesWithRanks = { [key: number]: { name: string, link: string } }

export const RankingDashboard = () => {
    const [rankedSteakhouses, setRankedSteakhouses] = useState<SteakHousesWithRanks>({})

    useEffect(() => {
        let steakhousesWithRanks = steakhouses.reduce((steakhousesWithRanksMap, steakhouse, index) => {
            return {
                ...steakhousesWithRanksMap,
                [index + 1]: {
                    ...steakhouse,
                }
            }
        }, {})

        setRankedSteakhouses(steakhousesWithRanks);
    }, []);

    const handlePress = (type: 'uprank' | 'downrank', clickedRank: number) => {
        setRankedSteakhouses((prevState) => {
            const newSteakhouseRankMap = {...prevState}

            let clickedSteakhouse = {...prevState[clickedRank]}

            // if uprank swap clickedRank with a lower value rank which is a higher rank
            // if downrank swap clickedRank with a higher value rank which is a lower rank
            let neighborSteakhouseIndex = type === 'uprank' ? clickedRank - 1 : clickedRank + 1;
            let neighborSteakhouse = {...prevState[neighborSteakhouseIndex]};
            console.log("-------")
            console.log("rawr clickedRank:", clickedRank, `neighborSteakhouseIndex: ${neighborSteakhouseIndex}`)
            console.log("rawr clickedSteakhouse:", clickedSteakhouse, `neighborSteakhouse: ${neighborSteakhouse}`)
            console.log("-------")
            newSteakhouseRankMap[clickedRank] = neighborSteakhouse;
            newSteakhouseRankMap[neighborSteakhouseIndex] = clickedSteakhouse;

            return newSteakhouseRankMap;
        })
    }

    return (
        <Main>
            {/*<LeetCodePlayground/>*/}
            <Row spaceBetween>
                <h1>Name</h1>
                <h1>Rank</h1>
            </Row>
            {Object.entries(rankedSteakhouses)?.map(([rank, {name, link}], index) => {
                const rankAsNumber = parseInt(rank, 10)
                const numSteakhouses = Object.keys(rankedSteakhouses).length;

                return (
                    <React.Fragment key={name}>
                        <Row key={name} spaceBetween flexGrow={1}>
                            <Link href={link} rel="noopener noreferrer" target="_blank">
                                <h2>{name}</h2>
                            </Link>
                            <Row center>
                                <h3>{rank}</h3>
                                <Spacing width={"SM"}/>
                                <RankIncrementButton
                                    color={"green"}
                                    disabled={index === 0}
                                    onClick={() => {
                                        handlePress('uprank', rankAsNumber)
                                    }}>
                                    &#9650;
                                </RankIncrementButton>
                                <Spacing width={"XXS"}/>
                                <RankIncrementButton
                                    color={"red"}
                                    disabled={rankAsNumber === numSteakhouses}
                                    onClick={() => {
                                        handlePress('downrank', rankAsNumber)
                                    }}>
                                    &#9660;
                                </RankIncrementButton>
                            </Row>
                        </Row>
                        {rankAsNumber !== numSteakhouses ? <Spacing height={"XS"}/> : null}
                    </React.Fragment>
                )
            })}
        </Main>
    );
}
