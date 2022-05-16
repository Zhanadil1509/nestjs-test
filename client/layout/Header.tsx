import Link from "next/link";
import {useState} from "react";
import {useCart} from "../store/common/useCart";


const Header = () => {

    const total = useCart(state => state.total)
    const totalqty = useCart(state => state.totalqty)
    const clearCart = useCart(state => state.clearCart)

    const [myTotal, setTotal] = useState()
    const [myTotalqty, setTotalqty] = useState()

    return (
    <div className="w-full bg-slate-200 py-4 ">
        <div className="container mx-auto flex justify-between">
            <div>
                <Link href="/">
                <a className="font-extrabold">MY-COOL-SHOP</a>
                    </Link>
                    </div>
                    <div className="font-light uppercase">
                    <Link href="/about">
                        <a>About</a>
                        </Link>
                        &nbsp; |&nbsp;
                    <Link href="/cart">
                <a>Cart</a>
                </Link>
                : ${myTotal} / {myTotalqty}
            </div>
        </div>
    </div>
)
};

export default Header;