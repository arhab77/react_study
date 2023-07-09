// import Effect from "./Pembahasan/effect";
import { useState } from "react";
// import Identify from "./Pembahasan/useCallback";
import { useToogle } from "./Pembahasan/customHook";
// import UseState from "./Pembahasan/usestate";

const Hooks = () => {
    let [label, setLabel] = useState('ON')
    let [lampu, setLampu] = useToogle();

    const style = {
        background: lampu ? 'yellow':'black',
        textAlign: 'center',
        height: '400px'
    }

    const saklar = () => {
        setLampu(!lampu);
        setLabel(e => {
            if(e === 'ON'){
                return 'OFF'
            }
            return 'ON'
        })
    }
    return(
        <div style={style}>
            {/* <Identify /> */}
            <button onClick={saklar} >{label}</button>
        </div>
    )
}

export default Hooks;