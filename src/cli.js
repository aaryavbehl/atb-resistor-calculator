const { getBandsFromValue, getValueFromBands } = require('./resistor');
const args = process.argv.slice(2);

if (args[0] === 'value') {
    const value = parseInt(args[1], 10);
    console.log(`Color Bands: ${getBandsFromValue(value).join(', ')}`);
} else if (args[0] === 'bands') {
    const bands = args.slice(1);
    const { value, tolerance } = getValueFromBands(bands);
    console.log(`Resistor Value: ${value} Ω ±${tolerance}%`);
} else {
    console.log('Usage: resistor-calculator [value <resistor_value>] | [bands <color1> <color2> <color3>]');
}
