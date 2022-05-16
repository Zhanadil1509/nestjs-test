import {useCustom} from "../store/common/useCustom";
import Link from "next/link";

const Main = () => {
    const bears = useCustom(state => state.bears)
    const increasePopulation = useCustom(state => state.increasePopulation)

    return (
        <>
            Test next.js
            <h2>{bears}</h2>
            <button onClick={increasePopulation}>Add bear</button>
            <Link href={{pathname: `/post/${[bears]}`}}>Post</Link>
        </>
    )
}

export default Main