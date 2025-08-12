import React from "react";

const SheetDocumento: React.FC = () => {
    return (
        <div className="bg-slate-50 box-border content-stretch flex flex-col gap-2 items-center justify-center pb-0 pt-4 px-3 relative size-full">
            <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-lg shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col items-start justify-between overflow-clip p-0 relative size-full">
                    <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px px-2 py-0 relative shrink-0 w-full">
                        <div className="basis-0 grow min-h-px min-w-px shrink-0 w-full" />
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_4px_8px_-2px_rgba(23,23,23,0.1),0px_2px_4px_-2px_rgba(23,23,23,0.06)]"
                />
            </div>
        </div>
    );
};

export default SheetDocumento;
