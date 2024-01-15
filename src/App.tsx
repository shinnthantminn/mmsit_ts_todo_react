import { useState } from "react";
import ListComponents from "./components/List.components";
import PanelComponent from "./components/Panel.component";

const App = () => {
  const [data, setData] = useState<string[]>([]);

  const handleAddData = (e: string): void => {
    setData([...data, e]);
  };

  const handleRemoveData = (e: number) => {
    const filterData: string[] = data.filter((_, index) => index != e);
    setData(filterData);
  };

  const handleEditData = (e: number) => {
    const newData: string = window.prompt("Change Your Data")!;
    if (newData?.length > 0) {
      const changeData: string[] = data.map((i, index) =>
        index === e ? newData : i
      )!;

      setData(changeData);
    }
  };

  return (
    <div>
      <PanelComponent handleAddData={handleAddData} />
      <ListComponents
        data={data}
        handleRemoveData={handleRemoveData}
        handleEditData={handleEditData}
      />
    </div>
  );
};

export default App;
