import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";



export interface IDealer {
    dealerID:number,
    dealerFName: string,
    dealerMName: string,
    dealerLName: string,
    dealerBDate: string,
    dealerGender: string,
    dealerCuAddress: string,
    dealerPeAddress: string,
    dealerContactNo: string,
    dealerHasBusiness: boolean,
    dealerBusinessName: string,
    dealerBusinessPhone: string,
    dealerBusinessAddress: string,
    dealerBusinessTIN: string,
    dealerCreditLimit: number,
    dealerSubmissionDate: string,
    attachments: string,
}

export const useRest = (): [(dealerID:number) => void, IDealer | undefined] => {

    const [dealer, setDealer] = useState<IDealer>();

    function getDealerByID(dealerID:number) {
        const params ={dealerID}
         axios.get('http://localhost:3000//dealer/getDealer/${dealerID}', {params})
            .then((response) => {
                setDealer(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error creating a new record:', error);
                alert("Error creating a new record. Please try again.");
            }); 
    }




    return [getDealerByID, dealer]
}
