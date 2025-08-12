import MiniLogoSN from '../../assets/miniLogoSN.svg';
import LogOut from '../../assets/LogOut.svg';


const NavBarComponent = () => {
    return (
        <div
            className="w-full h-20 px-10 bg-[#0477AD] shadow-lg flex justify-between items-center"
        >
            <div className="flex flex-row items-center gap-6">
            <img src={MiniLogoSN} alt="" />
                <div className="border border-left h-10"></div>
            <div
                className="text-gray-100 text-sm font-Inter "
            >
                Juzgado de faltas
            </div>
            </div>





            <div className="flex flex-row items-center gap-6">
            <div
                className="text-center text-gray-100 text-sm font-bold break-words"
            >
                Leandro García
            </div>
            <div className="border border-left h-10"></div>
            <img src={LogOut} alt="" />
        </div>
        </div>
    );
};

export default NavBarComponent;