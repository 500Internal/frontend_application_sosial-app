import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

export default function ReactQueryProvider({
    children
}:{
    children: React.ReactNode
}) {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer />
            {children}
           <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}