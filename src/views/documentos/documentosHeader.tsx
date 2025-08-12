import { useState } from "react";
import NewDocumentoPopUp from "../../components/pop-ups/newDocumentoPopUp";

function DocumentosHeader() {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    return (
        <div className="w-full px-6 py-4 bg-white border-b border-neutral-200 flex flex-col gap-4">
            <div className="flex justify-between items-center w-full">
                {/* Título */}
                <h1 className="text-3xl font-bold text-neutral-900 font-montserrat leading-10">
                    Documentos
                </h1>

                {/* Buscador + botón */}
                <div className="flex items-center gap-4">
                    {/* Buscador */}
                    <div className="w-64 px-4 py-2.5 bg-white rounded-lg border border-neutral-200 flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-neutral-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.6 0 7.5 7.5 0 0 0 10.6 0z"
                            />
                        </svg>
                        <span className="text-sm text-neutral-500 font-montserrat">Buscar...</span>
                    </div>

                    {/* Botón Crear */}
                    <button
                        className="h-10 px-4 py-2 bg-blue-Default hover:bg-blue-600 text-white text-sm font-bold font-montserrat rounded-lg flex items-center gap-2"
                        onClick={() => setIsPopUpOpen(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        Crear
                    </button>
                </div>
            </div>

            {/* Pop-up */}
            {isPopUpOpen && <NewDocumentoPopUp onClose={() => setIsPopUpOpen(false)} />}
        </div>
    );
}

export default DocumentosHeader;