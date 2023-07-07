import React from "react";
import styled from "styled-components";
import Counter from "../Counter";

const imgProduct = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9WR_cH-UFgmicIgw8doStBnEHFkV95Z1HA&usqp=CAU';

const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width : 300px;
    margin : auto;
    text-align : center;
    font-family : arial;
`;

const Image = styled.img`
    width : 100%;
`;

const Heading = styled.h1`
    font-size : 18px;
`;

const Price = styled.p`
    color : grey;
    font-size : 22px;
`;

const Description = styled.p`
    font-size : small;
`;

export default class Product extends React.Component{
    handleValue = (value) => {
        //mengirim value ke reusable
        this.props.receiveValue(value);
    }
    
    render(){
        return(
            <div>
                <CardContainer>
                    <Image src={imgProduct} alt="img" />
                    <Heading>Title Card</Heading>
                    <Price>$19.99</Price>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,</Description>
                    <Counter receiveValue={this.handleValue}/>
                </CardContainer>
            </div>
        )
    }
}