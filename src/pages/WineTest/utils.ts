export const checkResultType = (value: string) => {
  let resultType = '';

  switch (value) {
    case 'HHH':
      resultType = 'A';
      break;
    case 'HMH':
      resultType = 'B';
      break;
    case 'HLH':
      resultType = 'C';
      break;
    case 'MHH':
      resultType = 'D';
      break;
    case 'MMH':
      resultType = 'E';
      break;
    case 'MLH':
      resultType = 'F';
      break;
    case 'LHH':
      resultType = 'G';
      break;
    case 'LMH':
      resultType = 'H';
      break;
    case 'LLH':
      resultType = 'I';
      break;
    case 'HHM':
      resultType = 'J';
      break;
    case 'HMM':
      resultType = 'K';
      break;
    case 'HLM':
      resultType = 'L';
      break;
    case 'MHM':
      resultType = 'M';
      break;
    case 'MMM':
      resultType = 'N';
      break;
    case 'MLM':
      resultType = 'O';
      break;
    case 'LHM':
      resultType = 'P';
      break;
    case 'LMM':
      resultType = 'Q';
      break;
    case 'LLM':
      resultType = 'R';
      break;
    case 'HHL':
      resultType = 'S';
      break;
    case 'HML':
      resultType = 'T';
      break;
    case 'HLL':
      resultType = 'U';
      break;
    case 'MHL':
      resultType = 'V';
      break;
    case 'MML':
      resultType = 'W';
      break;
    case 'MLL':
      resultType = 'X';
      break;
    case 'LHL':
      resultType = 'Y';
      break;
    case 'LML':
      resultType = 'Z';
      break;
    default:
      resultType = 'Z-Z';
      break;
  }

  return resultType;
};
