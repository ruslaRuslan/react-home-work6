import React, { useState } from "react"

const Index = ({ }) => {
    const [claculator, setClaculator] = useState('')
    const [claculator2, setClaculator2] = useState('')
    const [result, setResult] = useState('')







    return (
        <>

            <input
                type="text"
                value={claculator}
                onChange={(e) => {
                    setClaculator(e.target.value)
                }}
            /><br />

            <input type="text"
                value={claculator2}
                onChange={(e) => {
                    setClaculator2(e.target.value)
                }}
                style={{ marginTop: "5px" }} />

            <button>click</button>


            <p>{+claculator + +claculator2}</p>

        </>
    )
}

export default Index