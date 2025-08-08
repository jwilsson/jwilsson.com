import { FlatCompat } from '@eslint/eslintrc';
import jwilsson from '@jwilsson/eslint-config';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [...jwilsson.default, ...jwilsson.typescript, ...compat.extends('next')];

export default eslintConfig;
