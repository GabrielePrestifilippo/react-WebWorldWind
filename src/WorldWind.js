import React from 'react';
var WorldWind = require('./WebWorldWind/src/WorldWind.js');

export default class WorldWindow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_NONE);

        var wwd = new WorldWind.WorldWindow("canvasOne");

        var layers = [
            {layer: new WorldWind.BMNGLayer(), enabled: true},
            {layer: new WorldWind.BMNGLandsatLayer(), enabled: false},
            {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true},
            {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true}
        ];

        for (var l = 0; l < layers.length; l++) {
            layers[l].layer.enabled = layers[l].enabled;
            wwd.addLayer(layers[l].layer);
        }

    }

    render() {
        return (
            <canvas id="canvasOne" width="1024" height="768">
                Your browser does not support HTML5 Canvas.
            </canvas>
        )
    }
}
