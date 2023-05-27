import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";



export interface IOrderedProducts {
    productID: number;
    quantity: number;
}

export interface IOrder {
    orderID: number,
    distributionDate: string;
    orderDate: string;
    penaltyRate: number;
    paymentTerms: string;
    orderAmount:number,
    collectorID: number;
    orderedProducts: IOrderedProducts[];
}


export interface IProduct {
    productID: number;
    commissionRate: number;
    productName: string;
    productPrice: number;
    productUnit: number;
}



export const useRest = (): [(order: IOrder) => void, IOrder | undefined] => {

    const [order, setOrder] = useState<IOrder>();

    function newOrder(order: IOrder) {
        axios.post('http://localhost:3000/orders/', {
            distributionDate: order.distributionDate,
            penaltyRate: order.penaltyRate,
            paymentTerms: order.paymentTerms,
            orderDate: order.orderDate,
            collectorID: order.collectorID,
            orderedProducts: order.orderedProducts
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
