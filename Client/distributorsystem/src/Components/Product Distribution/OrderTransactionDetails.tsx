import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TextField, Button } from '@mui/material';

interface TableRowData {
  id: number;
  name: string;
  description: string;
}
export default function DealerTransactionDetails(){

    const [tableData, setTableData] = useState<TableRowData[]>([]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
  
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
    };
  
    const handleAddRow = () => {
      const newRow: TableRowData = {
        id: tableData.length + 1,
        name: name,
        description: description,
      };
  
      setTableData([...tableData, newRow]);
      setName('');
      setDescription('');
    };
  
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TextField label="Name" value={name} onChange={handleNameChange} />
        <TextField label="Description" value={description} onChange={handleDescriptionChange} />
        <Button variant="contained" onClick={handleAddRow}>Add Row</Button>
      </div>
    );


    
    
}