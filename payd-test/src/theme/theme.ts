import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import '@fontsource/lato';
import '@fontsource/merriweather';
import { color } from 'framer-motion';

// Color mode
const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

// Define custom colors
const colors = {
  brand: {
    darkGreen: '#22543D', // Dark Green
    amber: '#E09132', // Amber
    white: '#FFFFFF', // White
    black: '#000000', //Black
  },
};

// Create the theme with custom colors and settings
const customTheme = extendTheme({
    colors,
    config,
    styles: {
        global: (props: any) => ({
        'html, body': {
            bg: props.colorMode === 'dark' ? 'gray.800' : 'brand.white',
            color: props.colorMode === 'dark' ? 'brand.white' : 'brand.darkGreen',
        },
        }),
    },
    fonts: {
        heading: `'Lato', sans-serif`,
        body: `'Merriweather', sans-serif`,
    },
    components: {
        Input: {
            baseStyle: {
                focusBorderColor: 'brand.amber',
                color: 'brand.black',
                placeholder: 'gray.500',
            },
            // borders in darktheme
            variants: {
                outline: {
                    field: {
                        borderColor: 'gray.300',
                        _hover: {
                            borderColor: 'brand.amber',
                        },
                    },
                },
            },
        },
        Button: {
            baseStyle: {
                padding: '1px',
            },
            variants: {
                solid: {
                    bg: 'brand.darkGreen',
                    color: 'brand.white',
                    _hover: {
                        bg: 'brand.amber',
                    },
                },
            },
        },
        // Text darktheme color and hover color
        p: {
            baseStyle: (props: any) => ({
                color: props.colorMode === 'dark' ? 'brand.black' : 'brand.black',
                _hover: {
                    color: 'brand.white',
                },
            }),
        },
    }
});

export default customTheme;
