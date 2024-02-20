<template>
    <div>
        <TemplateView>
            <template #page-title>Contract</template>
            <template #page-contents>
                <div class="flex flex-col md:flex-row p-5">
                    <h1>Hello this is the contracts lists page</h1>
                   
                </div>
            </template>
        </TemplateView>
    </div>
</template>
<script>
import JobDetailCard from '@/components/JobDetailCard.vue';
import TemplateView from './TemplateView.vue';

export default {
    name: "ContractPageView",
    components: { TemplateView, },
}
</script>
<style scoped>
    
</style>