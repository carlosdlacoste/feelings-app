"use client"
import { useState, useEffect } from "react"
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    Pagination
} from "@nextui-org/react";


const FeelingsAnalizer = ({data}) => {

    const [modelResult, setModelResult] = useState([])
    const [maxLabel, setMaxLabel] = useState("")

    const ITEMS_PER_PAGE = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedData = data.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    

    // useEffect(() => {

    //     const apiRequest = async () => {

    //             try {
    //                 data.forEach(element => {
    //                     fetch("https://api-inference.huggingface.co/models/finiteautomata/beto-sentiment-analysis", {
    //                         method: "POST",
    //                         headers: {
    //                             "Authorization": "Bearer " + "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"
    //                         },
    //                         body: JSON.stringify({
    //                             "text": element.text
    //                         }),
    //                     })
    //                     .then(resp => resp.json())
    //                     .then(result => {
    //                         console.log(result)
    //                         setModelResult(result)
    //                     })
    //                 });
    //                 // return result
    //             } catch (error) {
    //                 console.log(error)
    //             }
    //     }
    //     apiRequest()
    // }, [data]);

    // useEffect(() => {
    //     if(modelResult.length > 0){
    //         const maxObjeto = modelResult.reduce((max, item) => item.score > max.score ? item : max, modelResult[0])
    //         setMaxLabel(maxObjeto.label)
    //     }
    // }, [modelResult])

    return(
        <>
        
            <div className="flex flex-col items-center justify-center space-y-7 mt-4">
                <Pagination
                    total={Math.ceil(data.length / ITEMS_PER_PAGE)}
                    initialPage={1}
                    onChange={handlePageChange}
                />
                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn className="text-center">Message</TableColumn>
                        <TableColumn>Sentiment</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.text}</TableCell>
                                <TableCell>N/A</TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default FeelingsAnalizer;