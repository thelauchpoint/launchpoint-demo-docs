import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run web-angular-ssr:serve:development',
        production: 'nx run web-angular-ssr:serve:production',
      },
      ciWebServerCommand: 'nx run web-angular-ssr:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
