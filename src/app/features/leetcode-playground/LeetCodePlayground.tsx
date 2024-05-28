import React from 'react'
import styled from "styled-components";
import {SPACING} from "@/app/design-tokens";
import {problemSetMap} from "@/app/features/leetcode-playground/problem-sets";
import {ProblemSet} from "@/app/features/leetcode-playground/ProblemSet";

const PSetGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${SPACING.XL.px} ${SPACING.MD.px};
`;

export const LeetCodePlayground = ({}) => {
    return (
        <PSetGrid>
            {problemSetMap.map((pSet) => (
                <ProblemSet key={pSet.name} problemSet={pSet}/>
            ))}
        </PSetGrid>
    )
}
