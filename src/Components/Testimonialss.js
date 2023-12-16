import React from "react";
import Card from "./Card";


const Testimonialss= (props) => {
    let reviews=props.reviews;
    return (
        <div>
            <Card review={reviews[0]} />
        </div>
    )
};
export default Testimonialss;