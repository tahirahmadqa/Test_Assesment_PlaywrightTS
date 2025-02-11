import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  // Set the timeout for each test (in ms)
  timeout: 300000,
  testDir: './src/tests',

  workers: 1, 
  retries: 0,
  reporter: [
    ['dot'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['html', { outputFolder: 'html-report' }]
  ],
  outputDir: 'test-results',
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'], 
        headless:false
      },
    },
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // }
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure', 
    actionTimeout: 3000,  
  },
});

export const config = {
  baseURL: process.env.BASE_URL
}