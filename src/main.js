import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//Prime vue
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
//Prime vue Components
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import SplitButton from "primevue/splitbutton";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component("pv-toolbar", Toolbar);
app.component("pv-button", Button);
app.component("pv-splitbutton", SplitButton);

app.mount("#app");
