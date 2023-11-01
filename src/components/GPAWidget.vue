<template>
    <div class="gpa-widget">
        <div class="widget-header">
        <h2>GPA</h2>
        </div>
        <div class="widget-body">
        <p>Current GPA: {{ gpa }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gpa: 3.5
        };
    },
    mounted() {
        
    }
}
</script>

<style scoped>
.gpa-widget {
    border: 1px solid #ccc;
    padding: 1rem;
    width: 300px;
    border-radius: 8px;
    background-color: #f9f9f9;
}
</style>