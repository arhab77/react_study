import { useState } from "react";

//fungsi dengan parameter nama
const FunctionalComponen = ({nama}) => {

    //mendefinisikan value menggunakan useState
    const [value, setValue] = useState(0);

    //function untuk menambah angka
    const handlePlus = () => {
        setValue(value+1);
    }

    //function untuk mengurangi angka dengan kondisi wajib diatas angka 0
    const handleMin = () => {
        if(value > 0) {
            setValue(value-1);
        }
    }

    return(
        <div>
            <h1>Hello {nama} versi Functional componen</h1>
            <button onClick={handleMin}>-</button>
            <span>{' '} {value} {' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

//melakukan export
export default FunctionalComponen;