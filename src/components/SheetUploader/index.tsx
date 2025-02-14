import { useEffect } from 'react';

import useGoogleSheets from './hooks';
import { SheetUploaderProps } from './types';

const SheetUploader = ({ clientId, apiKey, spreadsheetId, data }: SheetUploaderProps) => {
  const { authenticate, uploadData } = useGoogleSheets(clientId, apiKey, spreadsheetId);

  const handleUpload = async () => {
    try {
      await authenticate();
      const response = await uploadData(data);
      console.log('Data uploaded successfully:', response);
    } catch (error) {
      console.error('Error during upload:', error);
    }
  };

  useEffect(() => {
    handleUpload();
  }, []);

  return null; // UI를 보여주지 않음
};

export default SheetUploader;
