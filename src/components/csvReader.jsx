"use client"
import { useState } from "react"
import Papa from "papaparse"

const CSVReader = () => {

    const [data, setData] = useState([])

    const handleFile = (e) => {
        const file = e.target.files[0]
        Papa.parse(file, {
            header: true,
            complete: function(results) {
                console.log(results.data)  // results.data is an array of objects with the csv data
                setData(results.data)
            }
        })
    }
    return(
        <>
            <input type="file" onChange={handleFile} />
        </>
    )

}

export default CSVReader;