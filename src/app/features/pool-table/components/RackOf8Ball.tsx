import {Ball} from "@/app/features/pool-table/components/Ball";

export const RackOf8Ball = () => {

    // const balls = useMemo(() => {
    //     const balls = [];
    //     for (let i = 1; i <= 15; i++) {
    //         let top = 0;
    //         let left = 0;
    //         balls.push(<Ball key={i} number={i}/>);
    //     }
    //     return balls;
    // }, []);

    return (
        <Ball position={{top: '0', bottom: '0'}} number={1}/>
    )
}
