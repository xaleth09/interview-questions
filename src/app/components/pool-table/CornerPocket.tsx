import styled from "styled-components";
import {COLORS} from "@/app/design-tokens";

export const CORNER_POCKET_RADIUS = `40px`;

type PocketProps = {
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const PocketCover = styled.div<PocketProps>`
    background-position: top, /* Position for the first gradient */ bottom; /* Position for the second gradient */
    background-size: 100% 50%, /* Size for the first gradient */ 100% 50%; /* Size for the second gradient */
    background-repeat: no-repeat;


    ${({position}) => {
        switch (position) {
            case "top-left":
                return `
                    padding-top: 28px;
                    padding-left: 28px;
                    border-top-left-radius: ${CORNER_POCKET_RADIUS};
                    background-image: linear-gradient(to right, ${COLORS.GREY_DARK} 50%, ${COLORS.GREY_DARK} 50%),
                    linear-gradient(to left, ${COLORS.TRANSPARENT} 50%, ${COLORS.GREY_DARK} 50%);
                `
            case "top-right":
                return `
                    padding-top: 28px;
                    padding-right: 28px;
                    border-top-right-radius: ${CORNER_POCKET_RADIUS};
                    background-image: linear-gradient(to right, ${COLORS.GREY_DARK} 50%, ${COLORS.GREY_DARK} 50%),
                    linear-gradient(to right, ${COLORS.TRANSPARENT} 50%, ${COLORS.GREY_DARK} 50%);  
                `
            case "bottom-left":
                return `
                    padding-bottom: 28px;
                    padding-left: 28px;
                    border-bottom-left-radius: ${CORNER_POCKET_RADIUS};
                    background-image: linear-gradient(to right, ${COLORS.GREY_DARK} 50%, ${COLORS.TRANSPARENT} 50%),
                    linear-gradient(to left, ${COLORS.GREY_DARK} 50%, ${COLORS.GREY_DARK} 50%);
                `
            case "bottom-right":
                return `
                    padding-bottom: 28px;
                    padding-right: 28px;
                    border-bottom-right-radius: ${CORNER_POCKET_RADIUS};
                    background-image: linear-gradient(to right, ${COLORS.TRANSPARENT} 50%, ${COLORS.GREY_DARK} 50%),
                    linear-gradient(to right, ${COLORS.GREY_DARK} 50%, ${COLORS.GREY_DARK} 50%);
                `
        }
    }}
`

const PocketPoly = styled.div<PocketProps>`
    width: 110px;
    height: 110px;
    background-color: ${COLORS.BLACK};
    border-radius: 20% 50% 50% 20%;
    border-right: 10px solid ${COLORS.GREY_LIGHTER};
    border-bottom: 10px solid ${COLORS.GREY_LIGHTER};
    border-top: 10px solid ${COLORS.GREY_LIGHTER};
    transform: rotate(${({position}) => {
        let degValue = 0;
        switch (position) {
            case 'top-left':
                degValue = -135;
                break;
            case 'top-right':
                degValue = -45;
                break;
            case 'bottom-left':
                degValue = 135;
                break;
            case 'bottom-right':
                degValue = 45;
                break;

        }
        return `${degValue}deg`
    }});
`

export const CornerPocket = ({position}: PocketProps) => (
    <PocketCover position={position}>
        <PocketPoly position={position}/>
    </PocketCover>
)
