function FotoMultasFilter() {
  const intersecciones = [
    "Intersección 1",
    "Intersección 2",
    "Intersección 3",
    "Intersección 4",
    "Intersección 5",
  ];

  return (
    <div className="self-stretch inline-flex justify-start items-end gap-3">
      {/* Fecha */}
      <div className="w-[6rem] md:w-[12.5rem] flex flex-col gap-2">
        <span className="text-zinc-700 text-sm font-normal font-inter">Fecha</span>
        <div className="h-12 p-2 rounded-md border border-neutral-500 flex items-center">
        <input type="date" className="w-full"/>
        </div>
      </div>
      {/* Hora */}
      <div className="w-[6rem] md:w-[12.5rem] flex flex-col gap-2">
        <span className="text-zinc-700 text-sm font-normal font-inter">Hora</span>
        <div className="h-12 p-2 rounded-md border border-neutral-500 flex items-center">
          <input type="time" className="w-full"/>
        </div>
      </div>
      {/* Intersección Input */}
      <div className="w-[6rem] md:w-[12.5rem] flex flex-col gap-2">
        <span className="text-zinc-700 text-sm font-normal font-inter">Intersección</span>
        <div className="h-12 p-2 rounded-md border border-neutral-500 flex items-center">
          <select name="" id="" className="w-full">
            {intersecciones.map((item, idx) => (
              <option key={idx} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Filtrar Button */}
      <button data-property-1="primario" data-tamaño="medio" className="h-12 px-4 py-3 bg-sky-700 rounded-lg flex justify-center items-center gap-1 overflow-hidden">
        <span className="text-neutral-100 text-base font-semibold font-inter">Filtrar</span>
      </button>
    </div>
  );
}

export default FotoMultasFilter;

