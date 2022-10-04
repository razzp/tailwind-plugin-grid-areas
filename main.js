module.exports = ({ addUtilities, matchUtilities }) => {
    addUtilities({
        '.area-1': {
            'grid-area': '1 / 1',
        },
        // Helpers for each letter of the alphabet.
        ...'abcdefghijklmnopqrstuvwxyz'.split('').reduce(
            (obj, char) =>
                Object.defineProperty(obj, `.area-${char}`, {
                    enumerable: true,
                    value: {
                        'grid-area': char,
                    },
                }),
            {}
        ),
    });

    matchUtilities({
        area: (gridArea) => ({ gridArea }),
    });
};
