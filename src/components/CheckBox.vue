<template>
<div class="check-container">
    <div class="checkbox-wrapper-46">
        <input class="inp-cbx" :id="inputId" type="checkbox" v-model="isChecked"/>
        <label class="cbx" :for="inputId">
        <span>
            <svg width="12px" height="10px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg>
        </span>
        <span>{{label}}</span>
        </label>
    </div>
</div>
</template>
<script>
 export default {
      props:{
        label: String,
        dynamicId: String
    },
      data(){
        return{
            isChecked:false}
        },
      computed:{
        inputId(){
            return `checkbox-${this.dynamicId}`
        }
        }
      }
    
</script>

<style scoped>
   
</style>
