import { useCallback } from 'react';

import useGoogleSheets from '../../components/SheetUploader/hooks';

export const useSheetUpload = () => {
  const { authenticate, uploadData } = useGoogleSheets(
    process.env.REACT_APP_GOOGLE_CLIENT_ID || '',
    process.env.REACT_APP_GOOGLE_API_KEY || '',
    process.env.REACT_APP_SPREADSHEET_ID || ''
  );

  const uploadToSheet = useCallback(
    async (
      data: {
        name: string;
        id: string;
        phoneNumber: string;
        testResult: string;
      }[]
    ) => {
      try {
        await authenticate();
        const formattedData = data.map((row) => [row.name, row.id, `'${row.phoneNumber}`, row.testResult]).flat();
        await uploadData(formattedData);
      } catch (error) {
        console.error('시트 업로드 중 오류:', error);
      }
    },
    [authenticate, uploadData]
  );

  return { uploadToSheet };
};
