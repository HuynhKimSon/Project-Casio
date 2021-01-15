import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import './styles.css'

function DefaultLayout({ component: Component, ...props }) {
    return (
        <Route
            {...props}
            render={(routerProps) => (
                <>
                    <Header
                        // {...routerProps} Kế thừa all các props của router
                        currentPath={routerProps.match.path}
                    />
                    <main className="main">
                        <Component {...routerProps} />
                    </main>
                    <Footer />
                </>
            )
            }
        />
    );
}

export default DefaultLayout;