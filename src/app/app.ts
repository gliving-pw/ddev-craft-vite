import { initModules } from './web-component-loader';

document.body.classList.remove("preload");


initModules();

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
    import.meta.hot.accept((initModules) => {
      console.log("HMR");
      if(initModules) {
        console.log('updated: count is now', initModules.count);
      } 
    });
  }