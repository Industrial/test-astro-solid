import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import prefetch from '@astrojs/prefetch';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import webManifest from 'astro-webmanifest';
import { defineConfig } from 'astro/config';
import critters from "astro-critters";
import compress from "astro-compress";

const webManifestConfig = webManifest({
  name: 'Your App name',
  icon: 'src/images/your-icon.svg',
  short_name: 'App',
  description: 'Here is your app description',
  start_url: '/',
  theme_color: '#3367D6',
  background_color: '#3367D6',
  display: 'standalone'
});

export default defineConfig({
  output: 'server',
  integrations: [solidJs(), webManifestConfig, sitemap(), image(), mdx(), partytown(), prefetch(), tailwind(), robotsTxt(), critters(), compress()]
});