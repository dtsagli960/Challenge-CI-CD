import { defineConfig } from 'cypress';
import viteConfig from './vite.config';
import { GenerateCtrfReport } from "cypress-ctrf-json-reporter";

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      new GenerateCtrfReport({
        on,
      })
    }
  }
});
