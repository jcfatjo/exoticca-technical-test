import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>{children}</ChakraProvider>
        </QueryClientProvider>
    );
};

export default Providers;
