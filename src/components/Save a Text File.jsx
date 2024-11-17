
import { saveAs } from 'file-saver';

const SaveTextFile = () => {
  const handleSaveFile = () => {
    const blob = new Blob(["Hello, this is a text file!"], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "example.txt");
  };

  return (
    <div>
      <h2>Save Text File</h2>
      <button onClick={handleSaveFile}>Download Text File</button>
    </div>
  );
};

export default SaveTextFile;
