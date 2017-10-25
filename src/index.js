import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import Test from './Test';

renderWithHotReload(Test);

if (module.hot) {
    module.hot.accept('./Test', () => {
        const Test = require('./Test').default;
        renderWithHotReload(Test);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <RootElement />
        </AppContainer>,
        document.getElementById('app')
    )
}