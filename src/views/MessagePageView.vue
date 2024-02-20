<template>
    <div>
        <TemplateView>
            <template #page-title>Messages</template>
            <template #page-contents>
                <h1>Hello from message page</h1>
            </template>
        </TemplateView>
    </div>
</template>
<script>
import TemplateView from './TemplateView.vue';

export default {
    name: "MessagePageView",
    components: { TemplateView }
}
</script>
<style scoped>
    
</style>