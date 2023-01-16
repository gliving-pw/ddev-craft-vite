import { initModules } from './web-component-loader';

document.body.classList.remove("preload");


initModules();

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
    import.meta.hot.accept(() => {
      console.log("HMR");
    });
  }