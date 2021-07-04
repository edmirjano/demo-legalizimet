var brain = require("brain.js");

const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3],
    activation: 'sigmoid',
    leakyReluAlpha: 0.01,
};

const net = new brain.NeuralNetwork(config);

module.exports = { net };
