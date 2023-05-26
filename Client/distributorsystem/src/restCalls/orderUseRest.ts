import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";


export interface IOrder {
    id: number,
    distributionDate: string;
    penaltyRate: string;
    paymentTerms: string;
}


interface IProduct {
    productI: number;
    commissionRate: string;
    productName: string;
    productPrice: string;
    productUnit: string;
}
  


export const useRest = (): [(order: IOrder) => void, IOrder | undefined] => {

    const [order, setOrder] = useState<IOrder>();


    function newOrder(order: IOrder) {
        axios.post('http://localhost:3000/orders/', {
            distributionDate: order.distributionDate,
            penaltyRate: order.penaltyRate,
            paymentTerms: order.paymentTerms
        })
            .then((response) => {
                console.log(response.data);
                alert("success!");
            })
            .catch((error) => {
                console.error('Error creating a new record:', error);
                alert("Error creating a new record. Please try again.");
            });
    }


    return [newOrder, order]
}
