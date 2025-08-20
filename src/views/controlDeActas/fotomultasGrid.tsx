import { useState } from 'react';
import fotomultasData from '../../assets/fotomultas.json';
import FotoMultaCard from './fotoMultaCard';
import ValidarFotomulta from '../../components/pop-ups/validarFotomultaComponent';


interface Fotomulta {
  id: number;
  fecha: string;
  hora: string;
  interseccion: string;
  foto: string;
}

function FotoMultasGrid() {
    const [selectedCard, setSelectedCard] = useState<Fotomulta | null>(null);
  const fotomultas: Fotomulta[] = fotomultasData;
  return (
    <div>
    <div className="flex flex-wrap gap-4">
      {fotomultas.map((item: Fotomulta) => (
        <FotoMultaCard key={item.id}  data={item} onClick={setSelectedCard}/>
      ))}
    </div>
    <ValidarFotomulta
        isOpen={!!selectedCard}
        onClose={() => setSelectedCard(null)}
      >
        {selectedCard && (
          <div>
            <h2 className="text-xl font-bold">{selectedCard.fecha}</h2>
            <p className="mt-2">{selectedCard.interseccion}</p>
          </div>
        )}
      </ValidarFotomulta>
    </div>
  );
}

export default FotoMultasGrid;