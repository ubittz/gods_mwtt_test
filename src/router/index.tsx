import { Navigate, Route, Routes } from 'react-router-dom';

import TestResult from '@@pages/TestResult';
import WineTest from '@@pages/WineTest';
import WineTestHome from '@@pages/WineTestHome';

import { PAGES } from './constants';
import { pathGenerator } from './utils';

function Router() {
  return (
    <Routes>
      <Route path={pathGenerator(PAGES.MWTT_HOME)} element={<WineTestHome />} />
      <Route path={pathGenerator(PAGES.MWTT_TEST)} element={<WineTest />} />
      <Route path={pathGenerator(PAGES.MWTT_RESULT)} element={<TestResult />} />
      <Route path='/' element={<Navigate to={pathGenerator(PAGES.MWTT_HOME)} />} />
      {/* <Route path='*' element={<Navigate to={pathGenerator(PAGES.MWTT_HOME)} />} /> */}
    </Routes>
  );
}

export default Router;
