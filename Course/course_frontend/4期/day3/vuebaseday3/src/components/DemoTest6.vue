<template>
  <div>
    <p>{{ address }}</p>
    <h1>1.click点击事件2</h1>
    <p>
      <button v-on:click="checkMe($event)">Add+1</button>
    </p>

    <h1>2.input事件</h1>
    <p>
      <input type="text" v-on:input="doInput" />
    </p>
    <p>
      <input type="text" v-bind:value="address" v-on:input="address = $event.target.value" />
    </p>
    <p>
      <input type="text" v-model="address" />
    </p>
    <p>
      <input type="text" v-on:keyup.enter="doSearch" />
      <button v-on="doSearch">百度搜索</button>
    </p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      address: '杭州市'
    })
    const checkMe = (e) => {
      console.log(e)
      state.count++
    }

    const doInput = () => {
      state.count++
    }

    const ifSearch = (e) => {
      if (e.keyCode === 13) {
        doSearch()
      }
    }

    const doSearch = () => {
      console.log('百度搜索')
    }
    // toRefs()方法用于把响应式对象（state），转换成“普通对象”，
    //不普通在它的每一个属性（属性），都是响应式的。虽然对象不是响应式的了。
    return {
      ...toRefs(state),
      checkMe,
      doInput,
      doSearch,
      ifSearch
    }
  }
}
</script>

<style lang="scss" scoped>
</style>