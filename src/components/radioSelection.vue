<template>
    <div class="radio-form">
        <p><b>{{ radioTitle }}</b></p>
        <div class="form-check">
        <input class="form-check-input" type="radio" :name="radioTitle" :id="radioTitle" checked>
        <label class="form-check-label" :for="radioTitle">
            {{ option_1 }}
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" :name="radioTitle" :id="radioTitle + '1'">
        <label class="form-check-label" :for="radioTitle + '1'">
            {{ option_2 }}
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" :name="radioTitle" :id="radioTitle + '2'">
        <label class="form-check-label" :for="radioTitle + '2'">
            {{ option_3 }}
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" :name="radioTitle" :id="radioTitle + '3'">
        <label class="form-check-label" :for="radioTitle + '3'">
            {{ option_4 }}
        </label>
        </div>
    </div>
    
</template>

<script>
    export default {
        props:{
            radioTitle:String,
            option_1:String,
            option_2:String,
            option_3:String,
            option_4:String
        }
    }
</script>

<style scoped>
    .radio-form{
        font-size: 0.9em !important;
        margin-top: 20px !important;
    }
    /* .form-check-label{
        font-size: 0.8em !important;
    } */
</style>