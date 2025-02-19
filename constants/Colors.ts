/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#FFFFFF',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    // Additional colors for more components:
    primary: '#007AFF',     // Main interactive elements (e.g., buttons)
    secondary: '#5AC8FA',   // Secondary actions or highlights
    accent: '#FF9500',      // Accent color for emphasis
    border: '#C7C7CC',      // For borders and dividers
    card: '#F2F2F2',        // Background for cards or panels
    disabled: '#D1D1D6',    // Disabled states for buttons/inputs
    placeholder: '#A9A9A9', // Placeholder text in input fields
    error: '#FF3B30',       // Error messages or indicators
    success: '#34C759',     // Success messages or confirmations
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    // Additional colors for more components:
    primary: '#0A84FF',
    secondary: '#64D2FF',
    accent: '#FF9F0A',
    border: '#3A3A3C',
    card: '#1C1C1E',
    disabled: '#5A5A5C',
    placeholder: '#8E8E93',
    error: '#FF453A',
    success: '#32D74B',
  },
};

