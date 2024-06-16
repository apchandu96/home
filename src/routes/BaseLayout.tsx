import { FC, Suspense } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import {
    Outlet,
} from 'react-router-dom'
import './BaseLayoutStyles.css'

// loading component for suspense fallback
const Loader = () => (
    <div>
        <div>Loading...</div>
    </div>
);

const BaseLayout: FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Suspense>
    );
}

export default BaseLayout
