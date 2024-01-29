import "@/styles/globals.css";
import Providers from "@/wrappers/Providers";
import type { AppProps } from "next/app";
import React from "react";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <Providers>
            <Component {...pageProps} />
        </Providers>
    );
};

export default App;
