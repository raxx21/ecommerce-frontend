import styles from "./page.module.css";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
          Hello World!!!
      </main>
    </ThemeProvider>
  );
}
