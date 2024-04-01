'use client';

// axios
import axios from 'axios';

// hooks
import useDataAndToken from './useDataAndToken';

// utils
import { showToast } from '@/utils/toastify';

// data
import { serverUrl } from '@/uiData/serverUrl';

const axiosPublic = axios.create({
   baseURL: serverUrl,
});

const axiosSecure = axios.create({
   baseURL: serverUrl,
});

const useAxios = () => {
   const { removeDataAndToken } = useDataAndToken();

   // request
   axiosSecure.interceptors.request.use(
      config => {
         const token = localStorage.getItem('token');
         if (token) {
            config.headers.authorization = `Bearer ${token}`;
         }
         return config;
      },
      error => {
         return Promise.reject(error);
      }
   );

   // response
   axiosSecure.interceptors.response.use(
      response => {
         return response;
      },
      async error => {
         const statusCode = error.response.status;

         if (statusCode === 401 || statusCode === 403) {
            const logoutRes = await axios.patch(`${serverUrl}/logout`, {
               email: localStorage.getItem('email'),
            });

            if (logoutRes.data.status === 'success') {
               removeDataAndToken();
               showToast('You Were Signed Out, Please Sign In Again', 'error');
            }

            return;
         }

         return Promise.reject(error);
      }
   );

   return { axiosPublic, axiosSecure };
};

export default useAxios;
