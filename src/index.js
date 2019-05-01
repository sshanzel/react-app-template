import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';

const RootContainer = () => <Router><App /></Router>;
const Container = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
};

Container(RootContainer);

if (module.hot) {
    module.hot.accept('./components/App', () => { Container(RootContainer); });
}
