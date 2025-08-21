import { FlatCompat } from '@eslint/eslintrc';
import jwilsson from '@jwilsson/eslint-config';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals", "next/typescript"), {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}, ...jwilsson.default, ...jwilsson.typescript, ...compat.extends('next')];

export default eslintConfig;
