import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import Layout from '../components/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const AppPage = lazy(() => import('../pages/AppPage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <Suspense fallback={<LoadingSpinner />}>
                    <HomePage />
                </Suspense>
            </Layout>
        ),
    },
    {
        path: '/app',
        element: (
            <Layout>
                <Suspense fallback={<LoadingSpinner />}>
                    <AppPage />
                </Suspense>
            </Layout>
        ),
    },
    {
        path: '*',
        element: <Navigate to="/" replace />,
    },
]);

const AppRoutes: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
