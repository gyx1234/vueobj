<template>
    <div class="cj">
        <navn></navn>
        <cjcontent></cjcontent>
        <foote></foote>

    </div>

</template>
<script>
    import '../templets/m2013/js/klass.min';

    import foote from './footer.vue';
    import navn from './nav.vue';
    import cjcontent from './cjcontent.vue';
    export default {
        components:{
            foote,navn,cjcontent
        }
    }
</script>