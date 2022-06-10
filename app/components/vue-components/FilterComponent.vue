<template>
    <div >
    <input class="c-search__input" type="text" name="filter" v-model="filter" placeholder="Search...">
    <button class="c-button" @click="clearInput()">Clear</button>
  </div>
</template>

<script>
    export default {
        name:'FilterComponent',
        data(){
              return {
                filter:''
              }
        },
        methods: {
            clearInput(){
                this.filter=''
            },
        },
         watch: {
      filter() {
      this.$emit('filter',this.filter);
    }
  },
    }
</script>

<style lang="scss" scoped>

</style>