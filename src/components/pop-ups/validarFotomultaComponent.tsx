import { useState } from 'react';
import fotomultaOriginal from '../../assets/fotomultaOriginal.png';
import FormValidar from '../formValidar/formValidar';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  /* validar: () => void; */
}

function ValidarFotomulta({ isOpen, onClose/* , validar */ }: ModalProps) {
  if (!isOpen) return null;
    const [validar, setValidar] = useState<boolean>(false);


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 flex-col gap-5" onClick={onClose}>
      <div className=" rounded-lg shadow-lg relative w-[35rem]"
        onClick={(e) =>
          e.stopPropagation()
        }>
        <img src={fotomultaOriginal} alt="foto multa" className="w-[35rem]" />



        <div className="inline-flex justify-center items-center gap-8 bg-white w-full h-[5rem] rounded-b-lg">
          <button onClick={onClose} className="w-[12rem] h-12 px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-700 flex justify-center items-center">
            <div className="justify-center text-sky-700 text-base font-semibold font-inter">Descartar</div>
          </button>
          <button onClick={()=>setValidar(true)} className="w-[12rem] h-12 px-4 py-3 bg-sky-700 rounded-lg flex justify-center items-center ">
            <div className="justify-center text-neutral-100 text-base font-semibold font-inter">Validar </div>
          </button>
        </div>
      </div>



      <FormValidar isOpen={!!validar} onClose={() => setValidar(false)} />
    </div>
  );
}

export default ValidarFotomulta;