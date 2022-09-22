import React from 'react';
import { useRoutes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import StakingPage from './pages/StakingPage';
import SwapPage from './pages/SwapPage';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/swap',
          element: <SwapPage />
        },
        {
          path: '/staking',
          element: <StakingPage />
        }
      ]
    }
  ]);
}