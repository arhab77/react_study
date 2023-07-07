import React from "react";
import './index.scss'
import Title from "./title";

export default class Sass extends React.Component{
    render() {
        return (
            <div>
                <Title/>
                <h3 className="title">Belajar MERN</h3>
                <button className="btn btn-danger">GO EDUWORK</button>
            </div>
        )
    }
}