<!-- src/components/CesiumViewer.vue -->
<template>
  <div id="cesiumContainer" class="cesium-container"></div>
</template>

<script>
import { onMounted } from 'vue';
import Cesium from 'cesium/Cesium';

export default {
  name: 'CesiumViewer',
  setup() {
    onMounted(() => {
      const viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: Cesium.createWorldTerrain()
      });

      // Example: Adding a Cesium Ion asset
      Cesium.IonResource.fromAssetId(3812).then((resource) => {
        viewer.scene.primitives.add(Cesium.createOsmBuildings({ resource }));
      });
    });
  },
};
</script>

<style scoped>
.cesium-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
