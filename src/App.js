import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import AppLayout from './component/AppLayout';

import Homepage from './page/Homepage';
import RiskCalculator from './page/RiskCalculator';
import AveragePrice from './page/AveragePrice';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: 'risk-calculator',
          element: <RiskCalculator />,
        },
        {
          path: 'average-price',
          element: <AveragePrice />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
