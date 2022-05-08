<template>
    <div ref="bg" class="bg"></div>
</template>

<script>
import { ref, getCurrentInstance,onBeforeUnmount, onMounted } from 'vue'
import CanvasNest from 'canvas-nest.js'

export default {
    setup () {
        const bg = ref()
        const config = {
            //color:线条颜色,默认:'0,0,0'；三个数字分别为(R,G,B)，注意用,分割
            // pointColor:交点颜色,默认:'0,0,0'；三个数字分别为(R,G,B)，注意用,分割
            // opacity:线条透明度（0~1）,默认:0.5
            // count:线条的总数量,默认:150
            //zIndex:背景的z-index属性，css属性用于控制所在层的位置,默认:-1
            color: '18,156,255',
            opacity: 0.7,
            zIndex: -1,
            count: 500
        }
        onMounted(()=>{
            getCurrentInstance().cn = new CanvasNest(bg.value,config)
        })
        onBeforeUnmount(() => {
      getCurrentInstance().cn.destroy()
        })
    
        return {
            bg
        }
    }
}
</script>

<style lang="scss" scoped>
.bg{
    width: 100vm; //view width
    height: 100vh; //view height
}

</style>