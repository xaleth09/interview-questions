import styled from "styled-components";
import {COLORS, SPACING} from "@/app/design-tokens";

export const SIDE_POCKET_RADIUS = `30px`;

type PocketProps = {
    position: 'center-left' | 'center-right';
}

const PocketCover = styled.div<PocketProps>`
        // padding-top: ${SPACING.XXS.px};
        // padding-bottom: ${SPACING.XXS.px};

    background-position: top, /* Position for the first gradient */ bottom; /* Position for the second gradient */
    background-repeat: no-repeat;
    ${({position}) => {
        switch (position) {
            case "center-left":
                return `
                    padding-left: 10px;
                    border-top-right-radius: ${SIDE_POCKET_RADIUS};
                    border-bottom-right-radius: ${SIDE_POCKET_RADIUS};
                    background-image: linear-gradient(to right, ${COLORS.GREY_DARK} 65%, ${COLORS.TRANSPARENT} 65%),
                    linear-gradient(to right, ${COLORS.GREY_DARK} 65%, ${COLORS.TRANSPARENT} 65%);
                `
            case "center-right":
                return `
                    padding-right: 28px;
                    background-image: linear-gradient(to right,  ${COLORS.TRANSPARENT} 65%, ${COLORS.GREY_DARK} 65%),
                    linear-gradient(to right,${COLORS.TRANSPARENT} 35%, ${COLORS.GREY_DARK} 65%);
                `
        }
    }}
`


const PocketPoly = styled.div<PocketProps>`
    width: 90px;
    height: 110px;
    background-color: ${COLORS.BLACK};
    border-radius: 20% 50% 50% 20%;
    border-right: 10px solid ${COLORS.GREY_LIGHTER};
    border-bottom: 10px solid ${COLORS.GREY_LIGHTER};
    border-top: 10px solid ${COLORS.GREY_LIGHTER};
    transform: rotate(${({position}) => {
        let degValue = 0;
        switch (position) {
            case 'center-left':
                degValue = 180;
                break;
            case 'center-right':
                degValue = 0;
                break;
        }
        return `${degValue}deg`
    }});
`

export const SidePocket = ({position}: PocketProps) => (
    <PocketCover position={position}>
        <PocketPoly position={position}/>
    </PocketCover>
)
