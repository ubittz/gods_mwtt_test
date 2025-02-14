import { useEffect } from 'react';

import { gapi } from 'gapi-script';

const useGoogleSheets = (clientId: string, apiKey: string, spreadsheetId: string) => {
  const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

  useEffect(() => {
    const initializeGapiClient = () => {
      gapi.client.init({
        apiKey: apiKey,
        clientId: clientId,
        scope: SCOPES,
      });
    };

    gapi.load('client:auth2', initializeGapiClient);
  }, [clientId, apiKey]);

  const authenticate = async () => {
    const authInstance = gapi.auth2.getAuthInstance();
    return authInstance.signIn();
  };

  const uploadData = async (data: Array<string | number | Date>) => {
    try {
      const response = await gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: 'Sheet1!A:Z', // 데이터가 추가될 시트와 범위
        valueInputOption: 'RAW',
        resource: {
          values: [data], // 데이터 배열
        },
      });
      return response.result;
    } catch (error) {
      console.error('Error uploading data:', error);
      throw error;
    }
  };

  return { authenticate, uploadData };
};

export default useGoogleSheets;
