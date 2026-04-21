import React from "react";
import { useState } from "react";
import Students from "./Data";
const Report=()=>{
    const[Studentdata,setStudentData]=useState(Students);
    let StudentsObj={
        name:'',
        marks:''
    }
    function submithandler(e){
        e.preventDefault()
        StudentsObj.name=e.target.name.value
        StudentsObj.marks=e.target.marks.value
        setStudentData((predata)=>(
            [...predata,StudentsObj]
        ));
        e.target.reset();
    }
    return(
      <div className="min-h-screen bg-black text-white p-10">
        <h1 className="text-5xl font-bold mb-10">
          STUDENT <span className="text-red-400">SCOREBOARD</span>
        </h1>
        <div className="border border-white-700 p-5 mb-8">
          <form onSubmit={submithandler} className="flex gap-4">
            <input
              name="name"
              placeholder="Student Name"
              className="bg-black border border-white-600 p-2 w-full"
            />
            <input
              name="marks"
              placeholder="Score(0-100)"
              className="bg-black border border-white-600 p-2 w-full"
            />
            <button className="text-red-400 border border-red-400 px-4">
              + ADD
            </button>
          </form>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-8 border border-white-700 p-5">
          <div>
            <p className="text-white-400">TOTAL</p>
            <h2 className="text-3xl text-red-400">{Studentdata.length}</h2>
          </div>
          <div>
            <p className="text-white-400">PASSED</p>
            <h2 className="text-3xl text-green-400">
              {Studentdata.filter(s=>s.marks>=40).length}
            </h2>
          </div>
          <div>
            <p className="text-white-400">AVG SCORE</p>
            <h2 className="text-3xl text-red-400">
              {Math.floor(
                Studentdata.reduce((a,b)=>a+Number(b.marks),0)/
                Studentdata.length
              )}
            </h2>
          </div>
        </div>
        <div className="border border-white-700">
          <div className="grid grid-cols-4 p-3 border-b border-white-700 text-white-400">
            <p>NAME</p>
            <p>SCORE</p>
            <p>STATUS</p>
            <p>UPDATE</p>
          </div>
          {Studentdata.map((item, index) => {
            const isPass=item.marks>=40;
            return(
              <div
                key={index}
                className="grid grid-cols-4 p-3 border-b border-white-800 items-center"
              >
                <p>{item.name}</p>
                <p className="text-pink-400">{item.marks}</p>
                <p className={isPass?"text-green-400":"text-red-400"}>
                  {isPass?"PASS":"FAIL"}
                </p>
                <input
                  type="number"
                  defaultValue={item.marks}
                  className="bg-black border border-white-600 p-1"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
}
export default Report
     