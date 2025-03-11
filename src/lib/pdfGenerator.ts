
import { ResumeData } from './resumeTypes';
import html2pdf from 'html2pdf.js';

/**
 * Generates a PDF from the resume data and downloads it
 * @param resumeData The resume data
 * @param elementId The ID of the element to convert to PDF
 */
export const generatePDF = (resumeData: ResumeData, elementId: string): void => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }

  const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
  
  const options = {
    margin: [10, 10, 10, 10],
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      logging: false,
      letterRendering: true 
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf()
    .set(options)
    .from(element)
    .save()
    .then(() => {
      console.log('PDF generated successfully');
    })
    .catch((error) => {
      console.error('Error generating PDF:', error);
    });
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
