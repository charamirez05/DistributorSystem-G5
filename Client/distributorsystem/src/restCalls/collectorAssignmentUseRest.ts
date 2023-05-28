import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";



export const useRest = (): [(orderID: number, collectorID: number)=> void, (orderID: number) => void, String | undefined,  String | undefined] => {

    const [assignedStatus, setAssignedStatus] = useState<String>("");
    const [removeStatus, setRemoveStatus] = useState<String>("");

    function assignCollector(orderID: number, collectorID: number) {
        axios.put('http://localhost:3000/collectorAssignment/assign', {
            orderID: orderID,
            collectorID: collectorID
        })
            .then((response) => {
                setAssignedStatus("Collector Assigned Successfully")
                console.log(response.data)
                alert("success!");
            })
            .catch((error) => {
                console.error('Error assigning collector:', error);
                alert("Error assigning collector. Please try again.");
            });
    }

    function removeCollector(orderID: number) {
        axios.put('http://localhost:3000/collectorAssignment/unassign', {
            orderID: orderID,
        })
            .then((response) => {
                setRemoveStatus("Collector Unassigned Successfully")
                console.log(response.data)
                alert("success!");
            })
            .catch((error) => {
                console.error('Error removing collector:', error);
                alert("Error removing collector. Please try again.");
            });
    }

    return [assignCollector, removeCollector, assignedStatus, removeStatus]
}
