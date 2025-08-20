import fotomultaEjemplo from '../../assets/fotomultaEjemplo.png';


interface Fotomulta {
  id: number;
  fecha: string;
  hora: string;
  interseccion: string;
  foto: string;
}


  interface CardProps {
  data: Fotomulta;
  onClick: (data: Fotomulta) => void;
}

const FotoMultaCard = ({ data, onClick }: CardProps) => {
  return (
    <div className="w-28 h-28  shrink-0 flex flex-col items-center justify-center rounded-lg shadow"
    onClick={() => onClick(data)}>
        <img src={fotomultaEjemplo} alt="Foto multa" className="" />
    </div>
  );
};

export default FotoMultaCard;
