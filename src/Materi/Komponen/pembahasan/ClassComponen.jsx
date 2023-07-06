//melakukan import
import React from "react";

class ClassComponen extends React.Component{

    //mendefinisikan value dari state
    state = {
        value : 0
    }

    //function untuk menambah angka
    handlePlus = () => {
        this.setState({value: this.state.value + 1});
    }

    //function untuk mengurangi angka dengan kondisi angka diatas 0
    handleMin = () => {
        if(this.state.value > 0){
            this.setState({value: this.state.value - 1});
        }
    }

    render(){
        return(
            <div>
                <h1>Hello {this.props.nama} versi class componen</h1>
                <button onClick={this.handleMin}>-</button>
                <span>{' '} {this.state.value} {' '}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

//melakukan export
export default ClassComponen;