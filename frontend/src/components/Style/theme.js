import { createTheme } from '@mui/material/styles';
import { colors, sizes } from '@/components/Style/variables';

const theme = createTheme({
  palette: {
    background: {
      default: colors.background,
    },
    primary: {
      main: colors.primary,
      light: colors.light,
      dark: colors.dark,
    },
    text: {
      primary: colors.text,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'system-ui',
      'Segoe UI',
      'Hiragino Kaku Gothic ProN',
      'Hiragino Sans',
      'ヒラギノ角ゴ ProN W3',
      'Arial',
      'メイリオ',
      'Meiryo',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {},
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {},
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiRadio: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiButton: {
      defaultProps: {
        color: 'primary',
        variant: 'contained',
      },
    },
  },
});

export default theme;
