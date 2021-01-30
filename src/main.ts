import { createApp } from 'vue';
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue';
import router from './router';
import { store, key } from './store';

createApp(App).use(router).use(store, key).mount('#app');
