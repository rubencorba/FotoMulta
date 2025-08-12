import React from "react";
import { useNavigate } from "react-router-dom";

const CreacionDocumentoHeader: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white border-b border-neutral-200 flex flex-col px-6 py-4 w-full">
            <div className="items-center w-full">
                <button
                    onClick={() => navigate("/documentos")}
                    className="flex flex-row gap-1 items-center hover:underline hover:text-[#16158c]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#16158c"
                        className="w-3 h-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>
                    <span className="text-[#16158c] text-[12px] font-normal">
                        Documentos
                    </span>
                </button>
                <h1 className="text-neutral-900 text-[26px] font-bold">
                    Crear Documento
                </h1>
            </div>
        </div>
    );
};

export default CreacionDocumentoHeader;