/// <reference types="vite/client" />

declare const __APP_VERSION__: string

interface ImportMetaEnv {
    VITE_SERVER_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}