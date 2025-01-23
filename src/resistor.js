const COLORS = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Gray', 'White'];
const TOLERANCES = { Gold: 5, Silver: 10 };

function getBandsFromValue(value) {
    if (value < 1 || value > 99_000_000) throw new Error('Value out of range');

    const exponent = Math.floor(Math.log10(value)) - 1;
    const significant = Math.round(value / Math.pow(10, exponent));
    const digits = significant.toString().split('').map(Number);

    return [
        COLORS[digits[0]],
        COLORS[digits[1]],
        COLORS[exponent],
        'Gold',
    ];
}

function getValueFromBands(bands) {
    const significant = COLORS.indexOf(bands[0]) * 10 + COLORS.indexOf(bands[1]);
    const multiplier = Math.pow(10, COLORS.indexOf(bands[2]));
    const tolerance = TOLERANCES[bands[3]] || 0;

    return { value: significant * multiplier, tolerance };
}

module.exports = { getBandsFromValue, getValueFromBands };
