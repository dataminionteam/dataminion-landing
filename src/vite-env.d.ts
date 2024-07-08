/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly EMAILJS_API_KEY: string;
  readonly EMAILJS_TEMPLATE: string;
  readonly EMAILJS_SERVICE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
