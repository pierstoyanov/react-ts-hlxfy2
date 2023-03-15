/// <reference types="vite/client" />
/// https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript


interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_API_KEY: string,
    readonly VITE_AUTH_DOMAIN: string,
    readonly VITE_DB_URL: string,
    readonly VITE_PROJECT_ID: string,
    readonly VITE_STORAGE_BUCKET: string, 
    readonly VITE_MSG_SENDER_ID: string, 
    readonly VITE_APP_ID: string, 
    readonly VITE_MEASUREMENT_ID: string,
    
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }