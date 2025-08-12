import React from "react";

const SignaturesDocumento: React.FC = () => {
    return (
        <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-between pb-0 pt-4 px-4 relative size-full">
            <div
                aria-hidden="true"
                className="absolute border-[0px_1px_0px_0px] border-solid border-zinc-200 inset-0 pointer-events-none"
            />
            <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full">
                <div className="bg-zinc-200 box-border content-stretch flex flex-col gap-6 items-center justify-center p-[16px] relative rounded-xl shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                            <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                                <div className="basis-0 font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.9)] text-left">
                                    <p className="block leading-[16px]">Tipo de documento</p>
                                </div>
                            </div>
                            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                                <div className="bg-neutral-50 h-14 relative rounded-lg shrink-0 w-full">
                                    <div className="box-border content-stretch flex flex-row h-14 items-center justify-between overflow-clip p-[16px] relative w-full">
                                        <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                                            <div className="font-regular leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-left text-nowrap">
                                                <p className="leading-[20px] text-[rgba(0,0,0,0.9)] whitespace-pre">
                                                    <span className="font-regular font-normal">(IF) </span>
                                                    <span>Informe</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        aria-hidden="true"
                                        className="absolute border-2 border-solid border-zinc-200 inset-0 pointer-events-none rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-400 box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="basis-0 bg-zinc-300 grow h-px min-h-px min-w-px shrink-0" />
                </div>
            </div>
            <div className="box-border content-stretch flex flex-col-reverse gap-4 items-center justify-center p-[16px] relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-row items-start justify-start order-2 p-0 relative shrink-0 w-full">
                    <div className="basis-0 bg-sky-500 box-border content-stretch flex flex-row gap-2 grow h-[54px] items-center justify-center min-h-px min-w-px px-4 py-2 relative rounded-lg shrink-0">
                        <div className="box-border content-stretch flex flex-row gap-2 h-5 items-center justify-center p-0 relative shrink-0">
                            <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f4f5f5] text-[18px] text-left text-nowrap">
                                <p className="block leading-[28px] whitespace-pre"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignaturesDocumento;
