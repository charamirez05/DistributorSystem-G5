import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";


/* export interface IOrder {
    id: number,
    distributionDate: string;
    penaltyRate: string;
    paymentTerms: string;
} */

export interface IOrderedProducts {
    productID: number;
    quantity: number;
  }
  
  interface IOrder {
    distributionDate: string;
    orderDate: string;
    penaltyRate: number;
    paymentTerms: string;
    collectorStatus: string;
    orderedProducts: IOrderedProducts[];
  }


export interface IProduct {
    productID: number;
    commissionRate: string;
    productName: string;
    productPrice: string;
    productUnit: string;
}
  


export const useRest = (): [(order: IOrder) => void, IOrder | undefined] => {

    const [order, setOrder] = useState<IOrder>();

    const [orderedProducts, setOrderedProducts] = useState<IOrderedProducts[]>([]);

    function newOrder(order: IOrder) {
        axios.post('http://localhost:3000/orders/', {
            distributionDate: order.distributionDate,
            penaltyRate: 5,
            paymentTerms: order.paymentTerms,
            orderDate: order.orderDate,
            collectorStatus: order.collectorStatus,
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
