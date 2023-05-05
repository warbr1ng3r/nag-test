import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import usePluginImport from 'vite-plugin-importer';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    usePluginImport({
      libraryName: '@mui/material',
      libraryDirectory: '',
      camel2DashComponentName: false
    }),
    usePluginImport({
      libraryName: '@mui/material/styles',
      libraryDirectory: '',
      camel2DashComponentName: false
    }),
    react(),
    tsconfigPaths()
  ]
});
