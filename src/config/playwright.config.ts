import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './src/tests', // Directory for your test files
  retries: 1, // Retries on failure
  workers: 0,
  use: {
    trace: 'on-first-retry', // Capture trace on first retry for debugging
    video: 'retain-on-failure', // Retain videos only for failed tests
  },
});

export const config = {
  baseURL: process.env.BASE_URL
}
