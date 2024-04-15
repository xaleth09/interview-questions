import React from 'react';
import styled from 'styled-components';
import {SizeKeys, SPACING} from '../design-tokens';

type BasePaddingProps = {
    topPadding: SizeKeys;
    rightPadding: SizeKeys;
    bottomPadding: SizeKeys;
    leftPadding: SizeKeys;
    children: React.ReactNode;
};

const InternalBasePadding = styled.div<BasePaddingProps>`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    ${({topPadding, rightPadding, bottomPadding, leftPadding}: BasePaddingProps) => `e
      padding-top: ${SPACING[topPadding].px};
      padding-right: ${SPACING[rightPadding].px};
      padding-bottom: ${SPACING[bottomPadding].px};
      padding-left: ${SPACING[leftPadding].px};
  `}
`;

const BasePadding = ({topPadding, rightPadding, bottomPadding, leftPadding, children}: BasePaddingProps) => (
    <InternalBasePadding
        topPadding={topPadding}
        rightPadding={rightPadding}
        bottomPadding={bottomPadding}
        leftPadding={leftPadding}
    >
        {children}
    </InternalBasePadding>
);

type PaddingProps = {
    topPadding?: SizeKeys;
    rightPadding?: SizeKeys;
    bottomPadding?: SizeKeys;
    leftPadding?: SizeKeys;
    children?: React.ReactNode;
};
