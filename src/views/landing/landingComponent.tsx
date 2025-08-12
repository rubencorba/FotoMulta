import imgTerranova from '../../assets/Terranova.jpg';
import logoTerranova from '../../assets/LogoTerranova.png';
import { useNavigate } from 'react-router-dom';


function LandingComponent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex">

      <div className="basis-[55%] bg-white px-40  pt-12 pb-6 flex flex-col items-center justify-center">
        <div className='max-w-[40rem] flex flex-col items-center justify-center h-full gap-20'>

          <div className="flex flex-col gap-4">
            <img
              src={logoTerranova}
              alt="Logo de Terranova"
            />

            <hr className="w-full border-t border-gray-400" />
          </div>


          <div className="w-full flex flex-col gap-8">

            <div className="self-stretch text-3xl font-semibold font-['Montserrat']">Acceso</div>

            <div className="self-stretch justify-start text-neutral-900 text-l font-normal font-['Montserrat'] leading-loose">Bienvenido a GDI Terranova</div>

            {/* Botón de acceso */}
            <button onClick={()=>navigate('/login')} className="bg-blue-Default hover:bg-blue-700 text-white text-xl font-bold font-['Montserrat'] rounded-lg px-8 py-2 transition-colors duration-200 my-10">
              Iniciar sesión
            </button>

          </div>


          <div className="w-full flex flex-col gap-2">

            <div className="w-full text-center text-xs leading-tight font-normal font-['Montserrat']">
              <span className="text-gray-500">
                Al usar este servicio, aceptás nuestros{' '}
              </span>
              <span className="text-gray-400 underline">
                términos y condiciones.
              </span>
            </div>


          </div>

        </div>
      </div>




      <div className="basis-[45%] overflow-hidden flex justify-center items-center">
        <img
          src={imgTerranova}
          alt="Imagen de la ciudad"
          className="h-full w-auto object-cover"
        />
      </div>
    </div>
  )
}

export default LandingComponent
