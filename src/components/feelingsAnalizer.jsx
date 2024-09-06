"use client"
import { useState, useEffect } from "react"
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@nextui-org/react";

const FeelingsAnalizer = ({data}) => {

    const [modelResult, setModelResult] = useState([])
    const [maxLabel, setMaxLabel] = useState("")

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
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Message</TableColumn>
                    <TableColumn>Sentiment</TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index}>
                        <TableCell>{index}</TableCell>
                        <TableCell>{item.text}</TableCell>
                        <TableCell>N/A</TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default FeelingsAnalizer;