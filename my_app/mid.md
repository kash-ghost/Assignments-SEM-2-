import React from "react";
import { useState } from "react";
import Students from "./Data";
const Report=()=>{
    const[Studentdata,setStudentData]=useState(Students);
    let StudentsObj={
        name:'',
        marks:''
    }
    function  submithandler(e) {
        e.preventDefault()
        StudentsObj.name=e.target.name.value
        StudentsObj.marks=e.target.marks.value
        setStudentData((predata)=>(
            [...predata,StudentsObj]
        ));
        e.target.reset();
         
    }
    return(
        <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"></div>
            <h1 className="text-2xl font-bold mb-4 text-center">
              REPORT CARD
            </h1>
            <form onSubmit={submithandler} className="flex gap-2 mb-4">
                <input name="name" placeholder="Name" className="border p-2 rounded w-full"/>
                <input name="marks" placeholder="Marks" className="border p-2 rounded w-full"/>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Add
                </button>
            </form>

            {
            Studentdata.map((item,index)=>{
                const isPass =item.marks>=40;
                return <div key={index} className="border p-3 mb-3 rounded bg-white shadow-sm">
                    <p className="font-semibold">Name: {item.name}</p>
                    <p>Marks: {item.marks}</p>
                    <hr/>
                    <p className={isPass ? "text-green-600" : "text-red-600"}>
                        {isPass ? "Pass" : "Fail"}
                    </p>
                </div>
            })
            }
        </div>
        
    )
}
export default Report