import './App.css';
import SaveCsvFile from './components/Save a CSV File';
import SaveJsonFile from './components/Save a JSON File';
import SavePdfFile from './components/Save a PDF File';
import SaveTextFile from './components/Save a Text File';
import SaveImageFile from './components/Save an Image File';

function App() {
  return (
    <div>
      <SaveTextFile />
      <SaveJsonFile/>
      <SaveImageFile/>
      <SaveCsvFile/>
      <SavePdfFile/>
    </div>
  );
}

export default App;
