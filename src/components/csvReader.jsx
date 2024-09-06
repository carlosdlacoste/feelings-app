"use client"
import { useState } from "react"
import Papa from "papaparse"
import UploadLogo from "./uploadLogo";
import FeelingsAnalizer from "./feelingsAnalizer";

const CSVReader = () => {

    const [data, setData] = useState([])

    const handleFile = (e) => {
        const file = e.target.files[0]
        Papa.parse(file, {
            header: true,
            complete: function(results) {
                // console.log(results.data)
                setData(results.data)
            }
        })
    }
    return(
        <>
            <div className="flex justify-center p-4 mt-4">
                <label className="flex flex-row-reverse justify-center items-center px-4 py-6 w-48 h-20 bg-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white text-blue-500 ease-linear transition-all duration-150">
                    <UploadLogo/>
                    <span className="mt-2 text-sm leading-normal mr-2">Upload</span>
                    <input type="file" onChange={handleFile} className="hidden"/>
                </label>
            </div>

            <FeelingsAnalizer data={data}/>
        </>
    )

}

export default CSVReader;