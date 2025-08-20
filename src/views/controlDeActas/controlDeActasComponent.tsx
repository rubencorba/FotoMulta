import FotoMultasFilter from "./fotomultasFilter";
import FotoMultasGrid from "./fotomultasGrid";
import FotoMultasHeader from "./fotomultasHeader";
import PaginationComponent from "./paginator";

function ControlDeActasComponent() {
  return (
    <div className="px-6 gap-8 flex flex-col">
      <FotoMultasHeader />
      <FotoMultasFilter />
      <FotoMultasGrid />
      <PaginationComponent/>
    </div>
  );
}

export default ControlDeActasComponent;

