
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';

const SavePdfFile = () => {
  const handleSaveFile = () => {
    const pdf = new jsPDF();
    pdf.text("Hello, this is a PDF file!", 10, 10);
    const blob = pdf.output("blob");
    saveAs(blob, "example.pdf");
  };

  return (
    <div>
      <h2>Save PDF File</h2>
      <button onClick={handleSaveFile}>Download PDF</button>
    </div>
  );
};

export default SavePdfFile;
