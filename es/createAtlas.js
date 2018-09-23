import React from 'react';
import { render } from 'react-dom';
import CloudAtlas from './CloudAtlas';

function createAtlas(selector, config) {
    config = config || window.atlasConfig;
    selector = selector || 'atlas';
    render(React.createElement(CloudAtlas, { config: config }), document.querySelector(selector));
}

export default createAtlas;