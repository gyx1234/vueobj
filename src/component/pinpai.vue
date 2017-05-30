<template>
    <div class="cj">
        <navn></navn>
        <paicontent></paicontent>
        <foote></foote>
    </div>
</template>
<script>
    import '../templets/m2013/js/klass.min';

    import foote from './footer.vue';
    import navn from './nav.vue';
    import paicontent from './paicontent.vue';
    export default {
        components:{
            foote,navn,paicontent
        }
    }
</script>