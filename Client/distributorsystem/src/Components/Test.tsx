import React, { useEffect, useState } from 'react';
import { TextField, Typography, Grid, Card, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, Autocomplete } from "@mui/material";
import { useRest } from '../restCalls/orderUseRest';
import axios from 'axios';


export interface IProduct {
    id: number,
    productName: string;
    productUnit: string;
    productPrice: string;
    commissionRate: string;
}


export default function Test() {

    const [newOrder, order] = useRest();

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        getAllProducts();
    }, []); // Empty dependency array to run the effect only once

    function getAllProducts() {
        axios.get<IProduct[]>('http://localhost:3000/products')
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error retrieving products:', error);
                alert("Error retrieving products. Please try again.");
            });
    }

    return (
        <div>
            <TextField
                select>

                {products.map((option) => (
                    <option key={option.productName} value={option.productName}>
                        {option.productName}
                    </option>
                ))}
            </TextField>
        </div >

    );
}
