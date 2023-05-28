import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";



export interface IEmployee {
    employeeID:number,
    employeeFName: string,
    employeeMName: string,
    employeeLName: string,
    employeeBDate: string,
    employeeCuAddress: string,
    employeePeAddress: string,
    employeeContactNumber: string,
    employeeGender: string,
    isCashier: boolean,
    isSalesAssociate: boolean,
    isCollector: boolean
}




export const useRest = (): [(collectorID:number) => void, IEmployee | undefined] => {

    const [collector, setCollector] = useState<IEmployee>();

    function getCollectorByID(collectorID:number) {
        const params ={employeeID: collectorID}
         axios.get('http://localhost:3000/employee/getCollector/${employeeID}', {params})
            .then((response) => {
                setCollector(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error creating a new record:', error);
                alert("Error creating a new record. Please try again.");
            }); 
    }




    return [getCollectorByID, collector]
}
