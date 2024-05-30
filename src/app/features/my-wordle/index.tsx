import React from 'react'
import {GameBoard} from "@/app/features/my-wordle/game-board";
import {Button, Column, Spacing} from "@/app/components";
import {Keyboard} from "@/app/features/my-wordle/keyboard";

export const MyWordle = () => {
    return (
        <Column centerHorizontally>
            <GameBoard/>
            <Spacing height={'XXL'}/>
            <Button>Useless Submit</Button>
            <Spacing height={'XS'}/>
            <Keyboard/>
        </Column>
    )
}
