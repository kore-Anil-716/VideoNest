import React from 'react';
import Layout from './Pages/Layout';
import { useContext,createContext,useState } from 'react';
function App() {
 

  return (
    <div>
      <Layout  />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Layout />} >
    //       {/* <Route index element={<Home />} /> */}
    //       {/* <Route path='nopagefound' element={<Nopagefound />} /> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
