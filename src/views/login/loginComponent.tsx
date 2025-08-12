import imgTerranova from '../../assets/Terranova.jpg';
import LoginForm from '../../assets/LoginGDI.jpg';
import { useNavigate } from 'react-router-dom';
/* import logoTerranova from '../../assets/LogoTerranova.png'; */



function LoginComponent() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${imgTerranova})` }}
        >
            {/* <div className="flex items-center justify-center h-full w-full">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[20rem]">

                    <img
                        src={logoTerranova}
                        alt="Logo de Terranova"
                        className="mx-auto mb-6"
                    />
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Correo Electrónico</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2">Contraseña</label>
                            <input type="password" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
                            Iniciar Sesión
                        </button>
                    </form>


                </div>
            </div> */}
                        <button onClick={()=>navigate('/documentos')} >

            <img
                        src={LoginForm}
                        alt="Logo de Terranova"
                        className="flex items-center justify-center h-full w-full max-w-[20rem]"
                    />
                    </button>
        </div>
    );
}

export default LoginComponent;

