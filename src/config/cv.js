// Configure where your CV is hosted.
// Option A (recommended): upload to Google Drive, set the file to "Anyone with the link",
// then paste the FILE_ID below. We will generate the proper direct-download and view URLs.
// Example share link: https://drive.google.com/file/d/FILE_ID/view?usp=sharing

export const CV_DRIVE_FILE_ID = '';

export const CV_DOWNLOAD_URL = CV_DRIVE_FILE_ID
  ? `https://drive.google.com/uc?export=download&id=${CV_DRIVE_FILE_ID}`
  : '/cv/Hashim_Zuraiqi_Resume (2)-2.pdf'; // Fallback to local file in public/cv

export const CV_VIEW_URL = CV_DRIVE_FILE_ID
  ? `https://drive.google.com/file/d/${CV_DRIVE_FILE_ID}/view?usp=sharing`
  : '/cv/Hashim_Zuraiqi_Resume (2)-2.pdf';
