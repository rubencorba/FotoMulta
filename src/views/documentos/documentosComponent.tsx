import DocumentosFilter from "./documentosFilter";
import DocumentosHeader from "./documentosHeader";
import DocumentosTable from "./documentosTable";

function DocumentosComponent() {
  return (
    <div>

      <DocumentosHeader />

      <div className="bg-neutral-50 flex justify-center px-4 py-4">
        <div className="flex flex-col max-w-[100rem] w-full gap-4">
          <DocumentosFilter />
          <DocumentosTable />
        </div>
      </div>
    </div>
  );
}

export default DocumentosComponent;