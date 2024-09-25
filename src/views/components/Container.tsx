import * as React from "react";
import { Container } from "@mui/material";
type LayoutsTypes = {
    children: React.ReactNode;
};

export default function CustomContainer({ children }: LayoutsTypes) {
    return (
        <Container maxWidth={"lg"} sx={{ maxWidth: { xl: "95%", lg: "95%" } }}>
            {children}
        </Container>
    );
}
