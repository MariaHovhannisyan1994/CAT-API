import React, { Suspense, lazy } from 'react';
import { Routes, Route} from "react-router-dom";
const Posts = lazy(() => import('../components/Posts'));

function Gallery() {
  return (
     <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route exact path="/" element={<Posts/>}/>
          <Route exact path="/:categoryId" element={<Posts/>}/>
      </Routes>
     </Suspense>

  );
}

export default Gallery;
