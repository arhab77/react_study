import React from "react";
import ClassComponen from "./pembahasan/ClassComponen";
import FunctionalComponen from "./pembahasan/FunctionalComponen";

class Komponen extends React.Component{
    render(){
        return(
            <div>
                <ClassComponen nama="Fadhil Arhab" />
                <FunctionalComponen nama="Fadhil Arhab" />
            </div>
        )
    }
}

export default Komponen;