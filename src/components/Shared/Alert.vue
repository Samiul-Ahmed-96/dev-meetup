<template>
  <div>
    <v-alert
      v-model="alert"
      type="error"
      dismissible
      @input="onClose"
      :value="true"
    >
    {{text}}
    </v-alert>
  </div>
</template>

<script>
    export default {
        name:'Alert-component',
        props:['text'],
        methods:{
            onClose(){
                this.$emit('dismissed')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>