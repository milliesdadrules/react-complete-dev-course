import React, { useState } from "react";

const PortfolioItemPage = (props) => {
    console.log(props);
    return (
        <div>
            <h1> Item: {props.match.params.id}</h1>
            This is the portfolio page for {props.match.params.id}
        </div>
    )
}
export default PortfolioItemPage