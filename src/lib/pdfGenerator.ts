
import { ResumeData } from './resumeTypes';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Generates a PDF from the resume data and downloads it
 * @param resumeData The resume data
 * @param elementId The ID of the element to convert to PDF
 */
export const handleDownloadPDF = async (printRef: any) => {
  console.log(printRef);
  try {
    if (printRef.current) {
      console.log(printRef.current);
      const canvas = await html2canvas(printRef.current, {
        scale: 2,
      });
      const imgData = canvas.toDataURL("image/png");

      // Default PDF page width in mm
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Scale height proportionally to the width

      // Create jsPDF instance with default width and dynamic height
      const pdf = new jsPDF({
        orientation: pdfHeight > pdfWidth ? "portrait" : "landscape",
        unit: "mm",
        format: [pdfWidth, pdfHeight], // Fixed width, dynamic height
      });

      // Add the image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight,"",'NONE');

      // Generate a unique file name using timestamp
      const uniqueName = `resume_${new Date().getTime()}.pdf`;
      pdf.save(uniqueName);
    }
  } catch (error) {
    console.error("Error during PDF download:", error);
  }
};

/**
 * Saves the resume data to localStorage
 * @param resumeData The resume data
 */
export const saveResumeData = (resumeData: ResumeData): void => {
  try {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    console.log('Resume data saved successfully');
  } catch (error) {
    console.error('Error saving resume data:', error);
  }
};

/**
 * Loads the resume data from localStorage
 * @returns The resume data or null if no data is found
 */
export const loadResumeData = (): ResumeData | null => {
  try {
    const data = localStorage.getItem('resumeData');
    if (data) {
      return JSON.parse(data) as ResumeData;
    }
    return null;
  } catch (error) {
    console.error('Error loading resume data:', error);
    return null;
  }
};
