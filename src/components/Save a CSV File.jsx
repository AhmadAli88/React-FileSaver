
import { saveAs } from 'file-saver';

const SaveCsvFile = () => {
  const handleSaveFile = () => {
    const csvContent = "Name,Age,City\nJohn,30,New York\nJane,25,Los Angeles";
    const blob = new Blob([decodeURIComponent(encodeURI(csvContent))], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "data.csv");
  };

  return (
    <div>
      <h2>Save CSV File</h2>
      <button onClick={handleSaveFile}>Download CSV</button>
    </div>
  );
};

export default SaveCsvFile;
