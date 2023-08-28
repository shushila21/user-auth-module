// vite.config.ts
import dotenv from "file:///home/varun/naxawork/digital-metric-addressing-frontend/node_modules/dotenv/lib/main.js";
import { domToCodePlugin } from "file:///home/varun/naxawork/digital-metric-addressing-frontend/node_modules/dom-to-code/dist/vite.mjs";
import { defineConfig } from "file:///home/varun/naxawork/digital-metric-addressing-frontend/node_modules/vite/dist/node/index.js";
import react from "file:///home/varun/naxawork/digital-metric-addressing-frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///home/varun/naxawork/digital-metric-addressing-frontend/vite.config.ts";
dotenv.config();
var vite_config_default = defineConfig({
  // plugins: [react()],
  plugins: [
    react(),
    process.env.NODE_ENV !== "production" ? domToCodePlugin({
      mode: "react"
    }) : void 0
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": new URL("./src/", __vite_injected_original_import_meta_url).pathname,
      "@Assets": new URL("./src/assets/", __vite_injected_original_import_meta_url).pathname,
      "@Utils": new URL("./src/utils/", __vite_injected_original_import_meta_url).pathname,
      "@Store": new URL("./src/store/", __vite_injected_original_import_meta_url).pathname,
      "@Schemas": new URL("./src/schemas/", __vite_injected_original_import_meta_url).pathname,
      "@Hooks": new URL("./src/hooks/", __vite_injected_original_import_meta_url).pathname,
      "@Api": new URL("./src/api/", __vite_injected_original_import_meta_url).pathname,
      "@Services": new URL("./src/services/", __vite_injected_original_import_meta_url).pathname,
      "@Constants": new URL("./src/constants/", __vite_injected_original_import_meta_url).pathname,
      "@Queries": new URL("./src/api/queries/", __vite_injected_original_import_meta_url).pathname,
      "@Routes": new URL("./src/routes/", __vite_injected_original_import_meta_url).pathname,
      "@Views": new URL("./src/views/", __vite_injected_original_import_meta_url).pathname,
      "@Components": new URL("./src/components/", __vite_injected_original_import_meta_url).pathname
    }
  },
  build: {
    sourcemap: true
  },
  define: {
    "process.env": {
      BASE_URL: process.env.BASE_URL,
      API_URL_V1: process.env.API_URL_V1,
      SITE_NAME: process.env.SITE_NAME,
      FAST_API: process.env.FAST_API
    }
  },
  server: {
    open: true,
    port: 3040,
    proxy: {
      "/api": {
        target: process.env.API_URL_V1,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      },
      "/fastapi": {
        target: process.env.FAST_API,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fastapi/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS92YXJ1bi9uYXhhd29yay9kaWdpdGFsLW1ldHJpYy1hZGRyZXNzaW5nLWZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS92YXJ1bi9uYXhhd29yay9kaWdpdGFsLW1ldHJpYy1hZGRyZXNzaW5nLWZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3ZhcnVuL25heGF3b3JrL2RpZ2l0YWwtbWV0cmljLWFkZHJlc3NpbmctZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgeyBkb21Ub0NvZGVQbHVnaW4gfSBmcm9tICdkb20tdG8tY29kZS92aXRlJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuLy8gaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmRvdGVudi5jb25maWcoKTtcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIC8vIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgICAgPyBkb21Ub0NvZGVQbHVnaW4oe1xuICAgICAgICAgIG1vZGU6ICdyZWFjdCcsXG4gICAgICAgIH0pXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGV4dGVuc2lvbnM6IFsnLmpzJywgJy5qc3gnLCAnLnRzJywgJy50c3gnXSxcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBuZXcgVVJMKCcuL3NyYy8nLCBpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLFxuICAgICAgJ0BBc3NldHMnOiBuZXcgVVJMKCcuL3NyYy9hc3NldHMvJywgaW1wb3J0Lm1ldGEudXJsKS5wYXRobmFtZSxcbiAgICAgICdAVXRpbHMnOiBuZXcgVVJMKCcuL3NyYy91dGlscy8nLCBpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLFxuICAgICAgJ0BTdG9yZSc6IG5ldyBVUkwoJy4vc3JjL3N0b3JlLycsIGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWUsXG4gICAgICAnQFNjaGVtYXMnOiBuZXcgVVJMKCcuL3NyYy9zY2hlbWFzLycsIGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWUsXG4gICAgICAnQEhvb2tzJzogbmV3IFVSTCgnLi9zcmMvaG9va3MvJywgaW1wb3J0Lm1ldGEudXJsKS5wYXRobmFtZSxcbiAgICAgICdAQXBpJzogbmV3IFVSTCgnLi9zcmMvYXBpLycsIGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWUsXG4gICAgICAnQFNlcnZpY2VzJzogbmV3IFVSTCgnLi9zcmMvc2VydmljZXMvJywgaW1wb3J0Lm1ldGEudXJsKS5wYXRobmFtZSxcbiAgICAgICdAQ29uc3RhbnRzJzogbmV3IFVSTCgnLi9zcmMvY29uc3RhbnRzLycsIGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWUsXG4gICAgICAnQFF1ZXJpZXMnOiBuZXcgVVJMKCcuL3NyYy9hcGkvcXVlcmllcy8nLCBpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLFxuICAgICAgJ0BSb3V0ZXMnOiBuZXcgVVJMKCcuL3NyYy9yb3V0ZXMvJywgaW1wb3J0Lm1ldGEudXJsKS5wYXRobmFtZSxcbiAgICAgICdAVmlld3MnOiBuZXcgVVJMKCcuL3NyYy92aWV3cy8nLCBpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLFxuICAgICAgJ0BDb21wb25lbnRzJzogbmV3IFVSTCgnLi9zcmMvY29tcG9uZW50cy8nLCBpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiB0cnVlLFxuICB9LFxuICBkZWZpbmU6IHtcbiAgICAncHJvY2Vzcy5lbnYnOiB7XG4gICAgICBCQVNFX1VSTDogcHJvY2Vzcy5lbnYuQkFTRV9VUkwsXG4gICAgICBBUElfVVJMX1YxOiBwcm9jZXNzLmVudi5BUElfVVJMX1YxLFxuICAgICAgU0lURV9OQU1FOiBwcm9jZXNzLmVudi5TSVRFX05BTUUsXG4gICAgICBGQVNUX0FQSTogcHJvY2Vzcy5lbnYuRkFTVF9BUEksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgb3BlbjogdHJ1ZSxcbiAgICBwb3J0OiAzMDQwLFxuICAgIHByb3h5OiB7XG4gICAgICAnL2FwaSc6IHtcbiAgICAgICAgdGFyZ2V0OiBwcm9jZXNzLmVudi5BUElfVVJMX1YxLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxuICAgICAgfSxcbiAgICAgICcvZmFzdGFwaSc6IHtcbiAgICAgICAgdGFyZ2V0OiBwcm9jZXNzLmVudi5GQVNUX0FQSSxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiBwYXRoID0+IHBhdGgucmVwbGFjZSgvXlxcL2Zhc3RhcGkvLCAnJyksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVYsT0FBTyxZQUFZO0FBQzFXLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsb0JBQW9CO0FBRTdCLE9BQU8sV0FBVztBQUpvTSxJQUFNLDJDQUEyQztBQU12USxPQUFPLE9BQU87QUFDZCxJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBLEVBRTFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVEsSUFBSSxhQUFhLGVBQ3JCLGdCQUFnQjtBQUFBLE1BQ2QsTUFBTTtBQUFBLElBQ1IsQ0FBQyxJQUNEO0FBQUEsRUFDTjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsWUFBWSxDQUFDLE9BQU8sUUFBUSxPQUFPLE1BQU07QUFBQSxJQUN6QyxPQUFPO0FBQUEsTUFDTCxLQUFLLElBQUksSUFBSSxVQUFVLHdDQUFlLEVBQUU7QUFBQSxNQUN4QyxXQUFXLElBQUksSUFBSSxpQkFBaUIsd0NBQWUsRUFBRTtBQUFBLE1BQ3JELFVBQVUsSUFBSSxJQUFJLGdCQUFnQix3Q0FBZSxFQUFFO0FBQUEsTUFDbkQsVUFBVSxJQUFJLElBQUksZ0JBQWdCLHdDQUFlLEVBQUU7QUFBQSxNQUNuRCxZQUFZLElBQUksSUFBSSxrQkFBa0Isd0NBQWUsRUFBRTtBQUFBLE1BQ3ZELFVBQVUsSUFBSSxJQUFJLGdCQUFnQix3Q0FBZSxFQUFFO0FBQUEsTUFDbkQsUUFBUSxJQUFJLElBQUksY0FBYyx3Q0FBZSxFQUFFO0FBQUEsTUFDL0MsYUFBYSxJQUFJLElBQUksbUJBQW1CLHdDQUFlLEVBQUU7QUFBQSxNQUN6RCxjQUFjLElBQUksSUFBSSxvQkFBb0Isd0NBQWUsRUFBRTtBQUFBLE1BQzNELFlBQVksSUFBSSxJQUFJLHNCQUFzQix3Q0FBZSxFQUFFO0FBQUEsTUFDM0QsV0FBVyxJQUFJLElBQUksaUJBQWlCLHdDQUFlLEVBQUU7QUFBQSxNQUNyRCxVQUFVLElBQUksSUFBSSxnQkFBZ0Isd0NBQWUsRUFBRTtBQUFBLE1BQ25ELGVBQWUsSUFBSSxJQUFJLHFCQUFxQix3Q0FBZSxFQUFFO0FBQUEsSUFDL0Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sZUFBZTtBQUFBLE1BQ2IsVUFBVSxRQUFRLElBQUk7QUFBQSxNQUN0QixZQUFZLFFBQVEsSUFBSTtBQUFBLE1BQ3hCLFdBQVcsUUFBUSxJQUFJO0FBQUEsTUFDdkIsVUFBVSxRQUFRLElBQUk7QUFBQSxJQUN4QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVEsUUFBUSxJQUFJO0FBQUEsUUFDcEIsY0FBYztBQUFBLFFBQ2QsU0FBUyxVQUFRLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM1QztBQUFBLE1BQ0EsWUFBWTtBQUFBLFFBQ1YsUUFBUSxRQUFRLElBQUk7QUFBQSxRQUNwQixjQUFjO0FBQUEsUUFDZCxTQUFTLFVBQVEsS0FBSyxRQUFRLGNBQWMsRUFBRTtBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
