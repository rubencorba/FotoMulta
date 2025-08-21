
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function FormValidar({ isOpen, onClose/* , children */ }: ModalProps) {
  if (!isOpen) return null;

  return (
    /* <div className="fixed inset-0  flex justify-center z-50 " onClick={onClose}> */
      <div className=" rounded-lg shadow-lg relative w-[35rem]"
        onClick={(e) =>
          e.stopPropagation()
        }>


        <div className="inline-flex justify-center items-center gap-8 bg-white w-full h-[5rem] rounded-lg">
        
        




        <div className="w-[541px] p-6 bg-white rounded-xl shadow-md flex flex-col gap-4">
  {/* Título */}
  <h2 className="text-sky-700 text-2xl font-bold">Validar multa</h2>

  {/* Input patente */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-zinc-700 text-sm">Patente</label>
    <div className="h-12 p-2 rounded-md border border-neutral-500 flex items-center text-slate-400 text-sm">
      000000000
    </div>
  </div>

  {/* Dropdown intersección */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-zinc-700 text-sm">Intersección</label>
    <div className="h-12 p-2 rounded-md border border-neutral-500 flex justify-between items-center">
      <span className="text-zinc-700 text-sm font-semibold">Seleccionar</span>
      <span className="w-4 h-4 border-b-2 border-r-2 border-neutral-500 rotate-45" />
    </div>
  </div>

  {/* Fecha y hora */}
  <div className="flex gap-4 w-full">
    <div className="flex flex-col gap-2 flex-1">
      <label className="text-zinc-700 text-sm">Fecha</label>
      <div className="h-12 p-2 rounded-md border border-neutral-500 flex justify-between items-center text-slate-400 text-sm">
        00/00/0000
        <span className="w-4 h-4 border border-zinc-700 rounded-sm" />
      </div>
    </div>
    <div className="flex flex-col gap-2 flex-1">
      <label className="text-zinc-700 text-sm">Hora</label>
      <div className="h-12 p-2 rounded-md border border-neutral-500 flex items-center text-slate-400 text-sm">
        0000
      </div>
    </div>
  </div>

  {/* Dropdown inspector */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-zinc-700 text-sm">Inspector</label>
    <div className="h-12 p-2 rounded-md border border-neutral-500 flex justify-between items-center">
      <span className="text-zinc-700 text-sm font-semibold">Buscar</span>
      <span className="w-4 h-4 border-b-2 border-r-2 border-neutral-500 rotate-45" />
    </div>
  </div>

  {/* Dropdown infracción */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-zinc-700 text-sm">Infracción</label>
    <div className="h-12 p-2 rounded-md border border-neutral-500 flex justify-between items-center">
      <span className="text-zinc-700 text-sm font-semibold">Seleccionar</span>
      <span className="w-4 h-4 border-b-2 border-r-2 border-neutral-500 rotate-45" />
    </div>
  </div>

  {/* Botones */}
  <div className="flex gap-4 w-full max-w-[480px]">
    <button className="flex-1 h-12 px-4 bg-white rounded-lg border border-sky-700 text-sky-700 font-semibold">
      Cancelar
    </button>
    <button className="flex-1 h-12 px-4 bg-sky-700 rounded-lg text-white font-semibold">
      Pasar a juzgado
    </button>
  </div>
</div>


      </div>
    </div>
  );
}

export default FormValidar;