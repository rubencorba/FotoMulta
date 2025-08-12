import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const documentTypes = [
    { value: "IF", label: "(IF) informe" },
    { value: "ACT", label: "(ACT) acta" },
    { value: "CON", label: "(CON) convenio" },
    { value: "ACTCONS", label: "(ACTCONS) acta de constatacion" },
    { value: "ACTADMS", label: "(ACTADMS) acto administrativo" },
];

const Button = ({ children, onClick, disabled, className }: { children: React.ReactNode; onClick: () => void; disabled?: boolean; className?: string }) => (
    <button
        className={`px-4 py-2 rounded-lg ${className}`}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
);

const NewDocumentoPopUp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [selectedType, setSelectedType] = useState("");
    const [reference, setReference] = useState("");
    const navigate = useNavigate();

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
    };

    const handleCreate = () => {
        navigate("/creacionDocumento");
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            
                <div className="bg-zinc-100 flex flex-col gap-6 items-center p-[40px] rounded-xl  min-w-[50rem]">
                    <div className="flex flex-col items-center w-full">
                        <h2 className="font-bold text-2xl text-center text-neutral-900 font-montserrat">Crear documento</h2>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="font-medium text-sm text-neutral-900">
                            Tipo de Documento <span className="text-red-500">*</span>
                        </label>
                        <select
                            className="bg-white border border-neutral-200 rounded-lg px-3 py-2 w-full text-neutral-900"
                            value={selectedType}
                            onChange={handleTypeChange}
                        >
                            <option value="" disabled>
                                Selecciona una opción de la lista
                            </option>
                            {documentTypes.map((type) => (
                                <option key={type.value} value={type.value}>
                                    {type.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 w-full relative">
                        <label className="font-medium text-sm text-neutral-900">Referencia</label>
                        <textarea
                            className="bg-white border border-neutral-200 rounded-lg px-3 py-2 w-full text-neutral-900 resize-none"
                            rows={4}
                            placeholder="Añade un motivo de creación del expediente"
                            value={reference}
                            onChange={(event) => {
                                if (event.target.value.length <= 254) {
                                    setReference(event.target.value);
                                }
                            }}
                        ></textarea>
                        <span className="absolute right-3 text-sm text-neutral-500">{`${reference.length}/254`}</span>
                    </div>
                    <div className="flex justify-between w-full gap-2">
                        <Button
                            onClick={onClose}
                            className="bg-neutral-50 border-neutral-600 border-[1.5px] text-neutral-900 w-full font-bold font-montserrat"
                        >
                            Cancelar
                        </Button>
                        <Button
                            onClick={handleCreate}
                            disabled={!selectedType}
                            className={`text-white w-full font-bold font-montserrat${
                                selectedType
                                    ? " hover:bg-blue-600 bg-blue-Default"
                                    : " cursor-not-allowed bg-zinc-300"
                            }`}
                        >
                            Crear
                        </Button>
                    </div>
                </div>
            
        </div>
    );
};

export default NewDocumentoPopUp;