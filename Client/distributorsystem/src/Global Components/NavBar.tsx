import * as React from 'react';
import { AppBar, Typography, Box, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

type navProps = {
    moduleName: string;
}
export default function NavBar(props: navProps) {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: "#156D94" }}>
            <AppBar position="static" sx={{ bgcolor: "#156D94" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontWeight: "bold" }}>
                        {props.moduleName}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}