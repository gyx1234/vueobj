<template>
    <div class="cj">
        <navn></navn>
        <yecontent></yecontent>
        <foote></foote>

    </div>

</template>
<script>
    import '../templets/m2013/js/klass.min';

    import foote from './footer.vue';
    import navn from './nav.vue';
    import yecontent from './yecontent.vue';
    export default {
        components:{
            foote,navn,yecontent
        }
    }
</script>