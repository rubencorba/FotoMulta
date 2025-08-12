import React from "react";

const imgSparkle = "http://localhost:3845/assets/dc8b77e7c0b1b282ccb74f6ba738f5f729eb076e.svg";

const AsistenteDocumento: React.FC = () => {
    return (
        <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[323px] items-center justify-start px-8 py-6 relative size-full">
            <div
                aria-hidden="true"
                className="absolute border-[0px_1px_0px_0px] border-solid border-zinc-200 inset-0 pointer-events-none"
            />
            <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative shrink-0 w-full">
                    <div className="bg-sky-50 relative rounded-[44px] shrink-0 size-[88px]">
                        <div className="overflow-clip relative size-[88px]">
                            <div className="absolute left-1/2 size-8 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                                <img
                                    alt=""
                                    className="block max-w-none size-full"
                                    src={imgSparkle}
                                />
                            </div>
                        </div>
                        <div
                            aria-hidden="true"
                            className="absolute border-2 border-[#111170] border-solid inset-0 pointer-events-none rounded-[44px]"
                        />
                    </div>
                </div>
                <div className="font-bold leading-[28px] text-[#16158c] text-[18px] text-center w-full">
                    <p className="block mb-0">¡Hola! 👋 Soy Terra,</p>
                    <p className="block mb-0">
                        tu asistente para crear documentos oficiales.
                        <br aria-hidden="true" />
                        Vamos a trabajar juntos en tu Informe de Elevación
                    </p>
                    <p className="block">&nbsp;</p>
                </div>
                <div className="font-medium leading-[24px] text-[#000000] text-[16px] text-center w-full">
                    <p className="block">
                        Pronto estaré disponible para asistirte en la creación de documentos...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AsistenteDocumento;
