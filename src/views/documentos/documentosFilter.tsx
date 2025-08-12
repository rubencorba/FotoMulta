function DocumentosFilter() {
    return (
        <div className="flex justify-between items-start gap-4 w-full flex-wrap">


            {/* Tipos de Documentos */}
            <div className="flex gap-[2px] p-[2px] bg-white border border-neutral-200 rounded-full overflow-hidden w-fit">
                {/* Mis Documentos (Activo) */}
                <button className="px-2.5 py-1 bg-customLavender rounded-full flex items-center gap-1 text-blue-Default font-medium text-[11px] font-montserrat">
                    Mis Documentos
                    <span className="px-1 py-[1px] bg-customMidLavender rounded-2xl text-[9px] font-medium">
                        02
                    </span>
                </button>

                {/* Documentos de Mi Sector */}
                <button className="px-2.5 py-1 rounded-full flex items-center gap-1 text-neutral-900 font-medium text-[11px] font-montserrat opacity-40 hover:opacity-70 transition">
                    Documentos de mi sector
                    <span className="px-1 py-[1px] bg-neutral-100 rounded-2xl text-[9px]">
                        04
                    </span>
                </button>

                {/* Documentos Favoritos */}
                <button className="px-2.5 py-1 rounded-full flex items-center gap-1 text-neutral-900 font-medium text-[11px] font-montserrat opacity-40 hover:opacity-70 transition">
                    Documentos favoritos
                    <span className="px-1 py-[1px] bg-neutral-100 rounded-2xl text-[9px]">
                        04
                    </span>
                </button>
            </div>





            {/* Filtros */}
            <div className="flex flex-wrap gap-1.5 items-center">
                {/* Fecha */}
                <button className="gap-1 px-2.5 py-1.5 bg-white rounded border border-neutral-200 flex items-center justify-between hover:shadow-sm">
                    <span className="text-[11px] font-medium text-stone-900">Fecha:</span>
                    <span className="text-[11px] font-semibold text-neutral-500">sin seleccionar</span>
                    <svg className="w-3 h-3 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Tipo */}
                <button className="px-2.5 py-1.5 bg-white rounded border border-neutral-200 flex items-center gap-1.5 hover:shadow-sm">
                    <span className="text-[11px] font-medium text-stone-900">Tipo:</span>
                    <span className="text-[11px] font-bold text-blue-Default bg-customMidLavender px-1.5  rounded">0</span>
                    <span className="text-[11px] font-semibold text-neutral-500">seleccionados</span>
                    <svg className="w-3 h-3 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Estado */}
                <button className=" px-2.5 py-1.5 bg-white rounded border border-neutral-200 flex items-center gap-1.5 hover:shadow-sm">
                    <span className="text-[11px] font-medium text-stone-900">Estado:</span>
                    <span className="text-[11px] font-bold text-blue-Default bg-customMidLavender px-1.5 rounded">0</span>
                    <span className="text-[11px] font-semibold text-neutral-500">seleccionados</span>
                    <svg className="w-3 h-3 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>



        </div>
    );
}

export default DocumentosFilter;