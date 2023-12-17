import React,{useState} from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"


const Testimonialss= (props) => {
    let reviews=props.reviews;
    const[index,setindex]=useState(0);

    function surpiseHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setindex(randomIndex);
    }

    function leftShiftHandler(){
        if(index-1<0){
            setindex(reviews.length-1)
        }
        else{
            setindex(index-1)
        }
    }

    function rightShiftHandler(){
        if(index+1>=reviews.length){
            setindex(0)
        }
        else{
            setindex(index+1)
        }
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10
        p-10 transition-all duration-700 hover:shadow-md rounded-md">
            <Card review={reviews[index]} />

            <div className="flex flex-row justify-center text-3xl text-violet-400 font-bold">
                <button onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500"><FiChevronLeft/></button>
                <button onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-500"><FiChevronRight/></button>
            </div>

            <div className="mt-2">
                <button onClick={surpiseHandler } className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 
                cursor-pointer px-10 rounded-md font-bold text-lg text-white py-2">Surprise Me</button>
            </div>

            
        </div>
    )
};
export default Testimonialss;