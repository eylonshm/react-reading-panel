// vite.config.ts
import react from "file:///home/nitzano/work/react-reading-panel/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "node:path";
import { defineConfig } from "file:///home/nitzano/work/react-reading-panel/node_modules/vite/dist/node/index.js";
import dts from "file:///home/nitzano/work/react-reading-panel/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var peerDependencies = {
  react: "^18.0",
  "react-dom": "^18.0"
};

// vite.config.ts
var __vite_injected_original_dirname = "/home/nitzano/work/react-reading-panel";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "ReactReadingPanel",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled"
        }
      }
    }
  },
  optimizeDeps: {
    exclude: Object.keys(peerDependencies)
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvbml0emFuby93b3JrL3JlYWN0LXJlYWRpbmctcGFuZWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL25pdHphbm8vd29yay9yZWFjdC1yZWFkaW5nLXBhbmVsL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL25pdHphbm8vd29yay9yZWFjdC1yZWFkaW5nLXBhbmVsL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCAqIGFzIHBhY2thZ2VKc29uIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgcmVhY3QoKSxcbiAgICAgICAgZHRzKHtcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgbGliOiB7XG4gICAgICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgICAgICAgbmFtZTogJ1JlYWN0UmVhZGluZ1BhbmVsJyxcbiAgICAgICAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgICAgIH0sXG5cbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3N0eWxlZC1jb21wb25lbnRzJ10sXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlZC1jb21wb25lbnRzJzogJ3N0eWxlZCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgICAgZXhjbHVkZTogT2JqZWN0LmtleXMocGFja2FnZUpzb24ucGVlckRlcGVuZGVuY2llcyksXG4gICAgICB9LFxufSk7IiwgIntcbiAgXCJuYW1lXCI6IFwicmVhY3QtcmVhZGluZy1wYW5lbFwiLFxuICBcInBhY2thZ2VNYW5hZ2VyXCI6IFwieWFybkAzLjYuMFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMC1kZXZlbG9wbWVudFwiLFxuICBcInR5cGluZ3NcIjogXCIuL2Rpc3QvaW5kZXguZXMuZC50c1wiLFxuICBcImF1dGhvclwiOiBcIk5pdHphbiBPaGFuYSA8MTY2ODkzNTQrbml0emFub0B1c2Vycy5ub3JlcGx5LmdpdGh1Yi5jb20+XCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL25pdHphbm8vcmVhY3QtcmVhZGluZy1wYW5lbC5naXRcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uaXR6YW5vL3JlYWN0LXJlYWRpbmctcGFuZWwvaXNzdWVzXCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJyZWFjdFwiLFxuICAgIFwicmVhZFwiLFxuICAgIFwicmVhZGluZ1wiLFxuICAgIFwiYWNjZXNzaWJpbGl0eSBcIlxuICBdLFxuICBcImZpbGVzXCI6IFtcbiAgICBcImRpc3RcIixcbiAgICBcIlJFQURNRS5tZFwiXG4gIF0sXG4gIFwibWFpblwiOiBcIi4vZGlzdC9pbmRleC51bWQuanNcIixcbiAgXCJtb2R1bGVcIjogXCIuL2Rpc3QvaW5kZXguZXMuanNcIixcbiAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9pbmRleC5kLnRzXCIsXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luZGV4LmVzLmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXgudW1kLmpzXCJcbiAgICB9XG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJyZWFjdFwiOiBcIl4xOC4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJidWlsZDp3YXRjaFwiOiBcInlhcm4gYnVpbGQgLS13YXRjaFwiLFxuICAgIFwiYnVpbGRcIjogXCJ0c2MgJiYgdml0ZSBidWlsZFwiLFxuICAgIFwibGludFwiOiBcImVzbGludCBzcmMgLS1leHQgdHMsdHN4IC0tcmVwb3J0LXVudXNlZC1kaXNhYmxlLWRpcmVjdGl2ZXMgLS1tYXgtd2FybmluZ3MgMFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiLFxuICAgIFwic3Rvcnlib29rXCI6IFwic3Rvcnlib29rIGRldiAtcCA2MDA2XCIsXG4gICAgXCJidWlsZC1zdG9yeWJvb2tcIjogXCJzdG9yeWJvb2sgYnVpbGRcIixcbiAgICBcImZvcm1hdFwiOiBcInByZXR0aWVyIC0td3JpdGUgc3JjXCIsXG4gICAgXCJob29rczppbnN0YWxsXCI6IFwiaHVza3kgaW5zdGFsbFwiLFxuICAgIFwicmVsZWFzZVwiOiBcInNlbWFudGljLXJlbGVhc2VcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWljb25zXCI6IFwiXjQuOS4wXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1lc3NlbnRpYWxzXCI6IFwiXjcuMC4yMFwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1pbnRlcmFjdGlvbnNcIjogXCJeNy4wLjIwXCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWxpbmtzXCI6IFwiXjcuMC4yMFwiLFxuICAgIFwiQHN0b3J5Ym9vay9ibG9ja3NcIjogXCJeNy4wLjIwXCIsXG4gICAgXCJAc3Rvcnlib29rL3JlYWN0XCI6IFwiXjcuMC4yMFwiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdC12aXRlXCI6IFwiXjcuMC4yMFwiLFxuICAgIFwiQHN0b3J5Ym9vay90ZXN0aW5nLWxpYnJhcnlcIjogXCJeMC4wLjE0LW5leHQuMlwiLFxuICAgIFwiQHR5cGVzL3ByZXR0aWVyXCI6IFwiXjJcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4wLjM3XCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjAuMTFcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjUuNTkuMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl41LjU5LjBcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiXjQuMC4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC4zOC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LWhvb2tzXCI6IFwiXjQuNi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LXJlZnJlc2hcIjogXCJeMC4zLjRcIixcbiAgICBcImVzbGludC1wbHVnaW4tc3Rvcnlib29rXCI6IFwiXjAuNi4xMlwiLFxuICAgIFwiaHVza3lcIjogXCJeOC4wLjNcIixcbiAgICBcImxpbnQtc3RhZ2VkXCI6IFwiXjEzLjIuMlwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMi44LjhcIixcbiAgICBcInByb3AtdHlwZXNcIjogXCJeMTUuOC4xXCIsXG4gICAgXCJzZW1hbnRpYy1yZWxlYXNlXCI6IFwiXjIxLjAuNVwiLFxuICAgIFwic3Rvcnlib29rXCI6IFwiXjcuMC4yMFwiLFxuICAgIFwic3R5bGVkLWNvbXBvbmVudHNcIjogXCJeNi4wLjAtcmMuM1wiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjAuMlwiLFxuICAgIFwidml0ZVwiOiBcIl40LjMuOVwiLFxuICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiXjIuMy4wXCJcbiAgfSxcbiAgXCJsaW50LXN0YWdlZFwiOiB7XG4gICAgXCIqLnRzW3hdXCI6IFtcbiAgICAgIFwiZXNsaW50IC0tZml4XCIsXG4gICAgICBcInByZXR0aWVyIC0td3JpdGVcIlxuICAgIF1cbiAgfSxcbiAgXCJyZWxlYXNlXCI6IHtcbiAgICBcImJyYW5jaGVzXCI6IFtcbiAgICAgIFwiKyhbMC05XSk/KC57KyhbMC05XSkseH0pLnhcIixcbiAgICAgIFwibWFzdGVyXCIsXG4gICAgICBcIm5leHRcIixcbiAgICAgIFwibWFpblwiLFxuICAgICAgXCJuZXh0LW1ham9yXCIsXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcImJldGFcIixcbiAgICAgICAgXCJwcmVyZWxlYXNlXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcImFscGhhXCIsXG4gICAgICAgIFwicHJlcmVsZWFzZVwiOiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9TLE9BQU8sV0FBVztBQUN0VCxPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTOzs7QUM0QmQsdUJBQW9CO0FBQUEsRUFDbEIsT0FBUztBQUFBLEVBQ1QsYUFBYTtBQUNmOzs7QURsQ0YsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0Esa0JBQWtCO0FBQUEsSUFDdEIsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILEtBQUs7QUFBQSxNQUNELE9BQU8sS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUM3QyxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFdBQVcsU0FBUztBQUFBLElBQ25DO0FBQUEsSUFFQSxlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsU0FBUyxhQUFhLG1CQUFtQjtBQUFBLE1BQ3BELFFBQVE7QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLHFCQUFxQjtBQUFBLFFBQ3pCO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDVixTQUFTLE9BQU8sS0FBaUIsZ0JBQWdCO0FBQUEsRUFDbkQ7QUFDTixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
