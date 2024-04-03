'use client';

// react
import { useState } from 'react';

const usePagination = documentLimit => {
   const [curPage, setCurPage] = useState(1);
   const limit = documentLimit;
   const skip = (curPage - 1) * limit;
   const [pageCount, setPageCount] = useState(0);

   return { curPage, setCurPage, pageCount, setPageCount, limit, skip };
};

export default usePagination;
