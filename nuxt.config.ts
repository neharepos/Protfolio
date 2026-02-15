import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-12-16',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  

  css: [
    // KaTeX styles (needed to display math correctly)
    'katex/dist/katex.min.css',
    './app/assets/css/main.css'
  ],
  modules: ['@nuxt/content', '@nuxtjs/color-mode'],
  content: {
    database: {
      type: 'sqlite',
      // This forces it to stay within the bundled application code 
      // rather than drifting into Vercel's /tmp directory
      filename: './content.db' 
    },
    build: {

      markdown: {
        // Add remark plugin to parse $...$ and $$...$$ math syntax
        remarkPlugins: {
          'remark-math': {}
        },
        // rehype plugin to render math to HTML using KaTeX
        rehypePlugins: {
          'rehype-katex': {
            // optional options; output: 'html' is common (default)
            output: 'html'
          }
        }
      }
    }
  }
})
function defineNuxtConfig(arg0: {
  compatibilityDate: string; vite: { plugins: any[]; }; css: string[]; modules: string[]; content: {
    database: { type: string; }; build: {
      markdown: {
        // Add remark plugin to parse $...$ and $$...$$ math syntax
        remarkPlugins: { 'remark-math': {}; };
        // rehype plugin to render math to HTML using KaTeX
        rehypePlugins: {
          'rehype-katex': {
            // optional options; output: 'html' is common (default)
            output: string;
          };
        };
      };
    };
  };
}) {
  throw new Error("Function not implemented.");
}

