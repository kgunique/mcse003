import React from 'react'
import {QuesAns} from '../data/QuesAns'


function Main() {
    const QandA = QuesAns
    return (
        <div className= "m-5 p-10">
            {
                QandA.map(({id,ques,ans})=>{
                    return(
                        <div  className ="border-b mb-3" key={id}>
                            {/* <span className= "h-5 w-5 p-1 bg-blue-300 rounded-2xl">{id}</span> */}
                            <h1 className="text-xl font-semibold mb-2 text-justify">{id}.{ques}</h1>
                            <p className ="mb-1 text-justify text-lg">✔  {ans}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main
