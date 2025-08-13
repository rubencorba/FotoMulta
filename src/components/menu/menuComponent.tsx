import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { setCurrentItemMenu } from '../../redux/actions';
import type { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// ESTE COMPONENTE AUN NO ESTÁ OPTIMIZADO,
// LOS ITEMS PRINCIPALES DEBERIAN DESPLEGAR SUS SUBITEMS
function MenuComponent() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const activeItem = useSelector((state: RootState) => state.currentItemMenu);

    const [isCollapsed, setIsCollapsed] = useState(false);
    
    const items = [
        'CAUSAS',
        'OTROS',
    ];


    const itemsActas = [
        'Control de actas',
        'Actas bromatologia',
        'Actas contralor',
        'Actas policia',
        'Infractores',
        'Libre de multa',
        'Reporte excel',
    ];


    const handleItemClick = (id: string) => {
        dispatch(setCurrentItemMenu(id));
        navigate(`/${id}`);
    };






    return (
        <div className={`bg-[#E7E5E5] border-r border-neutral-200 flex flex-col gap-8 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-44'}`}>

            <div className="flex flex-col items-center gap-1 ">
                {/* Hamburguesa */}
                <div
                    className={`cursor-pointer w-full flex p-4 items-center ${isCollapsed ? 'justify-center' : 'justify-end'}`}
                    onClick={() => setIsCollapsed(prev => !prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <div className={`flex flex-col justify-start gap-1 w-full p-4 bg-[#F2EFEF] ${isCollapsed ? 'hidden' : 'block'}`}>
                    <span  className="font-montserrat text-zinc-700 text-xs font-semibold mb-2">
                        ACTAS
                    </span>
                    {itemsActas.map((label) => {
                        const isActive = label === activeItem;
                        return (
                            <button
                                key={label}
                                onClick={() => handleItemClick(label)}
                                className={`w-full py-1 flex justify-start items-center border-b border-neutral-600 ${isActive
                                    ? ' text-sky-700 font-medium'
                                    : 'opacity-40 text-neutral-600'
                                    }`}
                            >
                                <span>
                                    {label}
                                </span>
                            </button>
                        );
                    })}
                </div>


                <div className="flex flex-col p-4 justify-start gap-4 text-sm w-full">
                    {items.map(( label ) => (
                            <span className={` font-montserrat text-zinc-700 text-xs font-semibold ${isCollapsed ? 'hidden' : 'block'}`}>
                                {label}
                            </span>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default MenuComponent;