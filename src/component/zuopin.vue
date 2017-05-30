<template>
    <div class="zuopin">
        <navn></navn>
        <zpcontent></zpcontent>
        <foote></foote>

    </div>

</template>
<script>
    import '../templets/m2013/js/klass.min';

    import zpcontent from './zpcontent.vue';
    import foote from './footer.vue';
    import navn from './nav.vue';
    export default {
        components:{
            zpcontent,foote,navn
        }
    }
</script>