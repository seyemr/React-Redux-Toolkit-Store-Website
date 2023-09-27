import React from "react";
import { Alert } from "@material-tailwind/react";

const Error = () => {
    return (
        <div className="grid grid-cols-1 h-screen items-center justify-center">
            <div className="w-96">
                <Alert color="red" className="text-xl font-inter font-bold">
                Üzgünüz, filtre aramanızla eşleşen ürün yok... Filtreyi temizleyin ve tekrar deneyin 😀.
                </Alert>
            </div>
        </div>
    );
};

export default Error;
