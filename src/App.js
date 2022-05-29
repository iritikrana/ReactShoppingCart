import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from "react-router-dom";

import Layout from './Layout';



const queryClient = new QueryClient();
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path='/' element={<Layout />}>

      </Route>
    </Routes>
    </QueryClientProvider>
  </>
  );
}

export default App;
