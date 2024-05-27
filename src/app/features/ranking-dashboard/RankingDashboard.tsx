'use client';

import React, {useEffect, useState} from 'react'
import {COLORS} from "@/app/design-tokens";
import styled from "styled-components";
import {Column, Row, Spacing} from "@/app/components";
import {steakhouses} from "@/app/features/ranking-dashboard/steakhouses";

const Main = styled.main`
    width: 100%;
    min-height: 100%;
    background-color: ${COLORS.WHITE};
    display: flex;
    padding: 56px 56px;
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

    const handleRankChangePress = (type: 'uprank' | 'downrank', clickedRank: number) => {
        setRankedSteakhouses((prevState) => {
            const newSteakhouseRankMap = {...prevState}

            let clickedSteakhouse = {...prevState[clickedRank]}

            // if uprank swap clickedRank with a lower value rank which is a higher rank
            // if downrank swap clickedRank with a higher value rank which is a lower rank
            let neighborSteakhouseIndex = type === 'uprank' ? clickedRank - 1 : clickedRank + 1;
            let neighborSteakhouse = {...prevState[neighborSteakhouseIndex]};

            // swap
            newSteakhouseRankMap[clickedRank] = neighborSteakhouse;
            newSteakhouseRankMap[neighborSteakhouseIndex] = clickedSteakhouse;

            return newSteakhouseRankMap;
        })
    }

    // TODO: Optimize by splitting entries so that you only have to re-assign items after deleted item
    const handleDeletePress = (clickedRank: number) => {
        setRankedSteakhouses((prevState) => {
            let newRank = 1;
            const newSteakhouseRankMap = Object.entries(prevState).reduce((newMap: SteakHousesWithRanks, [rank, steakhouse], index) => {
                if (Number.parseInt(rank, 10) !== clickedRank) {
                    newMap[newRank++] = steakhouse
                }
                return newMap;
            }, {})

            return newSteakhouseRankMap;
        })
    }

    return (
        <Main>
            {/*<LeetCodePlayground/>*/}
            <Row spaceBetween>
                <h1>Name</h1>
                <Row>
                    <h1>Rank</h1>
                    <Spacing width={'XL'}/>
                    <Spacing width={'XL'}/>
                    <Spacing width={'XL'}/>
                </Row>
            </Row>
            {Object.entries(rankedSteakhouses)?.map(([rank, {name, link}], index) => {
                const rankAsNumber = parseInt(rank, 10)
                const numSteakhouses = Object.keys(rankedSteakhouses).length;

                return (
                    <Column key={name}>
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
                                        handleRankChangePress('uprank', rankAsNumber)
                                    }}>
                                    &#9650;
                                </RankIncrementButton>
                                <Spacing width={"XXS"}/>
                                <RankIncrementButton
                                    color={"red"}
                                    disabled={rankAsNumber === numSteakhouses}
                                    onClick={() => {
                                        handleRankChangePress('downrank', rankAsNumber)
                                    }}>
                                    &#9660;
                                </RankIncrementButton>
                                <Spacing width={"XXS"}/>
                                <button onClick={() => {
                                    handleDeletePress(rankAsNumber);
                                }}>
                                    Delete
                                </button>
                            </Row>
                        </Row>
                        {rankAsNumber !== numSteakhouses ? <Spacing height={"XS"}/> : null}
                    </Column>
                )
            })}
        </Main>
    );
}
