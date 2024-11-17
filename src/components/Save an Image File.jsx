
import { saveAs } from 'file-saver';

const SaveImageFile = () => {
  const handleSaveFile = () => {
    saveAs("../src/assets/pic.jpeg", "example-image.png");
  };

  return (
    <div>
      <h2>Save Image File</h2>
      <button onClick={handleSaveFile}>Download Image</button>
    </div>
  );
};

export default SaveImageFile;
