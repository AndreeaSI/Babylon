<template>
  <div>
    <h3>BabylonExamples</h3>
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
 //import { BasicScene } from '@/BabylonExamples/BasicScene';
 import {Sofa} from '@/BabylonExamples/Sofa';


export default defineComponent({
  name: 'BabylonExamples',
  mounted(){
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const canvas = document.querySelector("canvas")!;
    //new BasicScene(canvas);
    new Sofa(canvas);
  }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
width: 100%;
height: 100%;
}

</style>
