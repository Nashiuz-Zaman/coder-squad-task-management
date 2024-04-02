'use client';

// react
import { useEffect, useState } from 'react';

// hooks
import { usePagination, useTaskDatabaseMethods } from '@/hooks';

// redux
import { useSelector } from 'react-redux';

const AllTasks = () => {
   const { profileData } = useSelector(store => store.auth);
   const [curStatus, setCurStatus] = useState(0);
   const taskLimit = 6;
   const { curPage, setCurPage, pageCount, setPageCount, limit, skip } =
      usePagination(taskLimit);
   const { getTasks } = useTaskDatabaseMethods();

   useEffect(() => {
      if (profileData?.email) {
         getTasks(profileData.email, curStatus, limit, skip);
      }
   }, [getTasks, curStatus, limit, skip, profileData]);

   return <div></div>;
};

export default AllTasks;
