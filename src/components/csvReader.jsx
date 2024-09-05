"use client"
import { useState } from "react"
import Papa from "papaparse"

const CSVReader = () => {

    // const [data, setData] = useState([])

    const handleFile = (e) => {
        const file = e.target.files[0]
        Papa.parse(file, {
            header: true,
            complete: function(results) {
                console.log(results.data)
                // setData(results.data)
            }
        })
    }
    return(
        <>
            <div className="flex justify-center p-4 mt-4">
                <input type="file" onChange={handleFile} />
            </div>
        </>
    )

}

export default CSVReader;