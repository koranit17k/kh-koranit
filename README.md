# คู่มือสำหรับนักศึกษาฝึกงาน บริษัทกี่หิ้นการไฟฟ้าภูเก็ต จำกัด 

```bash
pnpm create nuxt@latest kx-intern
cd kx-intern
pnpm add -D docus@latest better-sqlite3
pnpm approve-builds
# pnpm add vue @nuxt/ui
# pnpm add --save-dev tailwindcss
```
## Layer Integration

Docus v4 uses a **Nuxt layer-based approach**, you can extend the Docus layer directly in your `nuxt.config.ts` with `extends: ['docus']`:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  extends: ['docus']
})
```
