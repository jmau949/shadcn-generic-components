# Project Setup

This project requires installing **Tailwind CSS** and **ShadCN**. Follow the instructions below to set up your environment.

---

## Create Project

Start by creating a new React project using Vite. Select the React + TypeScript template:

```sh
npm create vite@latest
```

---

## Add Tailwind CSS

Install Tailwind CSS and its Vite plugin:

```sh
npm install tailwindcss @tailwindcss/vite
```

Replace everything in `src/index.css` with the following:

```css
@import "tailwindcss";
```

---

## Edit `tsconfig.json`

Vite splits TypeScript configuration into three files. Modify `tsconfig.json` to add `baseUrl` and `paths`:

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## Edit `tsconfig.app.json`

Modify `tsconfig.app.json` to resolve paths:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  }
}
```

---

## Update `vite.config.ts`

Install necessary types:

```sh
npm install -D @types/node
```

Modify `vite.config.ts`:

```ts
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

---

## Run the CLI for ShadCN

Initialize ShadCN in your project:

```sh
npx shadcn@latest init
```

You will be prompted to configure `components.json`. When asked:

- **Which color would you like to use as base color?** › Neutral

---

# Tailwind CSS Setup

This project also supports other frameworks such as **SvelteKit, React Router, Nuxt, and SolidJS**.

### 1. Install Tailwind CSS

```sh
npm install tailwindcss @tailwindcss/vite
```

### 2. Configure the Vite Plugin

Modify `vite.config.ts`:

```ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

### 3. Import Tailwind CSS

Add the following to your CSS file:

```css
@import "tailwindcss";
```

### 4. Start the Build Process

Run:

```sh
npm run dev
```

### 5. Start Using Tailwind CSS in HTML

Ensure your compiled CSS is included in the `<head>`:

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

---

# Updating and Publishing to npm

## 1. Update Your Package Version

Before publishing, update the package version in `package.json`:

```sh
npm version patch   # For a small fix
npm version minor   # For backward-compatible new features
npm version major   # For breaking changes
```

Alternatively, you can manually edit the `version` field in `package.json`.

---

## 2. Build the Package

Ensure your package is ready for distribution by running:

```sh
npm run build
```

If using TypeScript, make sure the `dist` folder is generated correctly.

---

## 3. Authenticate with npm

Log in to your npm account if you haven't already:

```sh
npm login
```

Enter your **username**, **password**, and **email** when prompted.

---

## 4. Publish the Package

To publish the package, run:

```sh
npm publish --access public
```

For scoped packages (e.g., `@your-org/your-package`), ensure you're using:

```sh
npm publish --access public
```

If publishing a private package, omit `--access public`.

---

## 5. Verify the Package

Once published, verify by installing it in another project:

```sh
npm install your-package-name
```

If you need to unpublish a version (use with caution):

```sh
npm unpublish your-package-name@version
```

For more details, check your package listing on [npmjs.com](https://www.npmjs.com/).

---

This completes the setup and deployment instructions for this project. 🚀
