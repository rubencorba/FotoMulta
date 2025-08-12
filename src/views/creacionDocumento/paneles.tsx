import React from "react";
import AsistenteDocumento from "./asistenteDocumento";
import SheetDocumento from "./sheetDocumento";
import SignaturesDocumento from "./signaturesDocumento";

const Paneles: React.FC = () => {
    return (
        <div className="flex w-full h-full">
            <div className="flex-1">
                <AsistenteDocumento />
            </div>
            <div className="flex-1">
                <SheetDocumento />
            </div>
            <div className="flex-1">
                <SignaturesDocumento />
            </div>
        </div>
    );
};

export default Paneles;