import { Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { PokemonBestiary } from '#widgets/PokemonBestiary';

import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack justifyContent="center" alignItems="center">
        <Typography variant="h3">NAG. Тестовое задание Frontend React</Typography>
        <Typography variant="h4">Александров Илья</Typography>
        <PokemonBestiary />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
