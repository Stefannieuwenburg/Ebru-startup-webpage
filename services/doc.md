# setup taiwind in vite react:
npm create vite@latest project_name 
npm install


npm install tailwindcss @tailwindcss/vite

at imports this: import tailwindcss from “@tailwindcss/vite”;
at plugins this: tailwindcss()
so that this file looks like:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

In the folder/file “src/index.css” remove all code and paste this:
@import "tailwindcss";

text:
Montserrat

Extra Imports:

npm install aos
React router dom
Suspense, lazy
npm install react-icons

# now run 
npm run dev