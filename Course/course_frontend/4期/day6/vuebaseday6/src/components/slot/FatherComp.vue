<template>
    <div>
        <ChildComp>
            <p>1.床前明月光</p>
            <template #xiaomayun>
                我这里的钱，继承给小马云，大家别动!!
            </template>
            <p>2.疑似地上霜</p>
        </ChildComp>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import ChildComp from './ChildComp.vue'

export default {
    components:{
        ChildComp,
    },
    setup () {
        const state = reactive({
            count: 200000,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>