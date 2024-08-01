import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//having error here importing cesium components
import Cesium from '@/components/Cesium/cesium'
import 'cesium/Widgets/widgets.css';

Cesium.Ion.defaultAccessToken = 'YOUR_CESIUM_ION_ACCESS_TOKEN';


const app = createApp(App)

app.use(router)

app.mount('#app')
