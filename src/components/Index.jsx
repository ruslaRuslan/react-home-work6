import React, { useState } from "react"

const Index = ({ }) => {
    const [claculator, setClaculator] = useState('')
    const [claculator2, setClaculator2] = useState('')
    const [result, setResult] = useState('')



    return (
        <>

            <input
                type="text"
                onChange={(e) => {
                    setClaculator(e.target.value)
                }}
            /><br />

            <input type="text"
                onChange={(e) => {
                    setClaculator2(e.target.value)
                }}
                style={{ marginTop: "5px" }} />

            <button>click</button>


            <p>sum: {+claculator + +claculator2}</p>
            <p>minus: {+claculator - +claculator2}</p>
            <p>multiply: {+claculator * +claculator2}</p>
            <p>divide: {+claculator2 === 0 ? 'cannot divide by 0' : (+claculator / +claculator2)}</p>


        </>
    )
}

export default Index