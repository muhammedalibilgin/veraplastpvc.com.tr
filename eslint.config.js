// eslint.config.js
import next from "next";
import nextPlugin from "@next/eslint-plugin-next";
import nextConfig from "eslint-config-next";
import js from "@eslint/js";
import globals from "globals";

// next/core-web-vitals = js.configs.recommended + @next/eslint-plugin-next kuralları
export default [
    ...nextConfig,
    js.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            "@next/next": nextPlugin,
        },
        rules: {
            // next/core-web-vitals kurallarını manuel aktarmak yerine,
            // eslint-config-next’in sağladığı preset’i kullanmak daha kolay:
        },
    },
    // Alternatif: eslint-config-next’un flat config sürümünü doğrudan kullan
];
