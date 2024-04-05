import React, { useState } from "react"
import "./index.css"
const Index = ({ }) => {
    const [claculator, setClaculator] = useState('')
    const [claculator2, setClaculator2] = useState('')
    return (
        <>
            <div>
                <input type="text" onChange={(e) => { setClaculator(e.target.value) }} /><br />
                <input className="input" type="text" onChange={(e) => { setClaculator2(e.target.value) }}/>
                <br />
                <button>click</button>
                <p>sum: {+claculator + +claculator2}</p>
                <p>minus: {+claculator - +claculator2}</p>
                <p>multiply: {+claculator * +claculator2}</p>
                <p>divide: {+claculator2 === 0 ? 'cannot divide by 0' : (+claculator / +claculator2)}</p>
            </div>
        </>

    )
}

export default Index