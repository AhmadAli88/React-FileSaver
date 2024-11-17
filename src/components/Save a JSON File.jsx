
import { saveAs } from 'file-saver';

const SaveJsonFile = () => {
  const handleSaveFile = () => {
    const data = { name: "John", age: 30, city: "New York" };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    saveAs(blob, "data.json");
  };

  return (
    <div>
      <h2>Save JSON File</h2>
      <button onClick={handleSaveFile}>Download JSON File</button>
    </div>
  );
};

export default SaveJsonFile;
