function DocumentosTable() {


    const documentosMock = [
  {
    ultimaModificacion: "10/06/24 - 2:57 hs",
    ultimoEditor: "Marta López",
    tipo: "IF",
    numero: "IF-2025-125252-MT-DIROBPA",
    referencia: "Designacion de Supervisor Zona 4",
    estado: "En edición"
  },
  {
    ultimaModificacion: "12/06/24 - 14:20 hs",
    ultimoEditor: "Carlos Fernández",
    tipo: "ACT",
    numero: "...",
    referencia: "Acta de constatación - 4025",
    estado: "Esperando firmas"
  },
  {
    ultimaModificacion: "15/06/24 - 10:15 hs",
    ultimoEditor: "Lucía Romero",
    tipo: "CON",
    numero: "CON-2025-125253-MT-DIROBPA",
    referencia: "Nota de prueba - 3027",
    estado: "Firmado"
  },
  {
    ultimaModificacion: "18/06/24 - 9:05 hs",
    ultimoEditor: "Sofía Acuña",
    tipo: "ACTCONS",
    numero: "...",
    referencia: "Informe Técnico - 3764",
    estado: "Firmar ahora"
  },
  {
    ultimaModificacion: "19/06/24 - 17:30 hs",
    ultimoEditor: "Andrés Molina",
    tipo: "ACTADM",
    numero: "...",
    referencia: "Certificado de trabajo - 1325",
    estado: "Esperando firmas"
  },
  {
    ultimaModificacion: "20/06/24 - 13:45 hs",
    ultimoEditor: "Paula Sánchez",
    tipo: "IF",
    numero: "IF-2025-125254-MT-DIROBPA",
    referencia: "Designacion de Supervisor Zona 4",
    estado: "En edición"
  },
  {
    ultimaModificacion: "22/06/24 - 11:10 hs",
    ultimoEditor: "Diego Navarro",
    tipo: "CON",
    numero: "CON-2025-125255-MT-DIROBPA",
    referencia: "Nota de prueba - 3027",
    estado: "Firmado"
  },
  {
    ultimaModificacion: "24/06/24 - 8:40 hs",
    ultimoEditor: "Martina Pereyra",
    tipo: "ACT",
    numero: "...",
    referencia: "Acta de constatación - 4025",
    estado: "Firmar ahora"
  },
  {
    ultimaModificacion: "25/06/24 - 15:00 hs",
    ultimoEditor: "Julián Ibarra",
    tipo: "ACTCONS",
    numero: "...",
    referencia: "Informe Técnico - 3764",
    estado: "En edición"
  },
  {
    ultimaModificacion: "26/06/24 - 16:25 hs",
    ultimoEditor: "Valentina Ruiz",
    tipo: "IF",
    numero: "IF-2025-125256-MT-DIROBPA",
    referencia: "Certificado de trabajo - 1325",
    estado: "Firmado"
  }
];





    return (

        <div className="w-full border border-neutral-200 flex flex-col rounded-md items-center whitespace-nowrap overflow-hidden text-ellipsis">

            {/* Encabezado de la tabla */}
            <div className="w-full py-2 bg-neutral-100 rounded-t items-center font-montserrat text-neutral-600 grid grid-cols-[minmax(8rem,1fr)_minmax(9rem,1fr)_minmax(4rem,1fr)_minmax(13rem,1fr)_minmax(13rem,1fr)_minmax(9rem,1fr)_minmax(5rem,1fr)]">
                {/* Última modificación */}
                <div className="px-3 flex items-center gap-0.5 text-[11px]">
                    <span className="inline-flex whitespace-nowrap overflow-hidden text-ellipsis">Última modificación</span>
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>
                    </div>
                </div>

                {/* Último editor */}
                <div className="px-3 items-center text-[11px]">
                    <span>Último Editor</span>
                </div>

                {/* Tipo */}
                <div className="px-3 flex items-center gap-0.5 text-[11px]">
                    <span>Tipo</span>
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>
                    </div>
                </div>

                <div className="px-3 items-center text-[11px]">
                    <span>Número</span>
                </div>

                <div className="px-3 items-center text-[11px]">
                    <span>Referencia</span>
                </div>

                <div className="px-3 items-center text-[11px]">
                    <span>Estado</span>
                </div>

                <div className="px-3 flex justify-center text-[11px]">

                </div>
            </div>

                {documentosMock.map((doc) => (
            /* Contenido de la tabla */
            <div
             className="w-full py-2 border-neutral-100 items-center text-sm font-montserrat bg-white rounded-b grid grid-cols-[minmax(8rem,1fr)_minmax(9rem,1fr)_minmax(4rem,1fr)_minmax(13rem,1fr)_minmax(13rem,1fr)_minmax(9rem,1fr)_minmax(5rem,1fr)]"
            >

                {/* Última modificación */}
                <div className="px-3 flex items-center text-[11px] text-neutral-600 overflow-hidden text-ellipsis whitespace-nowrap">{doc.ultimaModificacion}</div>

                {/* Último editor */}
                <div className="px-3 text-[11px] flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                    <img src="https://placehold.co/32x32" alt="User" className="w-8 h-8 rounded-full" />
                    <span className="text-neutral-700">{doc.ultimoEditor}</span>
                </div>

                {/* Tipo */}
                <div className="px-3 text-stone-900 text-[11px] flex overflow-hidden text-ellipsis whitespace-nowrap">{doc.tipo}</div>

                {/* Número */}
                <div className="px-3 text-neutral-500 text-[11px] flex overflow-hidden text-ellipsis whitespace-nowrap">{doc.numero}</div>

                {/* Referencia */}
                <div className="px-3 text-black/80 text-[11px] flex overflow-hidden text-ellipsis whitespace-nowrap">
                    {doc.referencia}
                </div>

                {/* Estado */}
                <div className="px-3 text-[11px] flex overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="px-2 py-1 bg-sky-600 text-white rounded-2xl">
                        {doc.estado}
                    </span>
                </div>

                {/* Acciones */}
                <div className="w-28 px-3 flex justify-end gap-2 opacity-40 overflow-hidden text-ellipsis whitespace-nowrap">
                    <div className="w-6 h-6 flex items-center justify-center border border-neutral-600 rounded" />
                    <div className="w-6 h-6 flex items-center justify-center border border-neutral-600 rounded" />
                    <div className="w-6 h-6 flex items-center justify-center border border-neutral-600 rounded" />
                </div>
            </div>
                ))}









        </div>

    );
}

export default DocumentosTable;