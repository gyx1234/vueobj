<template>
    <div id="indexWrapper">
        <div id="IndexBGSlider" class="flexslider-bgslider">
            <ul class="slides">
                <!--<li v-for="(item,index) in arr" v-html="item.content"></li>-->
                <li>
                    <a href="#" title="客照">
                        <img src="../uploads/allimg/131206/1-1312061A3330-L.jpg" alt="客照" title="客照" border="0"/>
                    </a>
                </li>
                <li>
                    <a href="#" title="内景">
                        <img src="../uploads/allimg/131206/1-1312061A3150-L.jpg" alt="内景" title="内景" border="0"/>
                    </a>
                </li>
                <li>
                    <a href="#" title="外景">
                        <img src="../uploads/allimg/131206/1-1312061A2550-L.jpg" alt="外景" title="外景" border="0"/>
                    </a>
                </li>
                <li>
                    <a href="#" title="品牌">
                        <img src="../uploads/allimg/131206/1-1312061A1270-L.jpg" alt="品牌" title="品牌" border="0"/>
                    </a>
                </li>
            </ul>
        </div>
        <navbar></navbar>
        <footbar></footbar>
    </div>
</template>

<script>
    import navbar from './navbar.vue';
    import footbar from './footbar.vue';
    export default {
        data(){
            return {
                arr:[]
            }
        },
        /*mounted(){
            this.$store.dispatch('showLoading');
            let url='/src/data/index.json';
            this.$http.get(url).then((res)=>{
                console.log(eval(res.data));
                setTimeout(()=>{
                    this.arr=eval(res.data);
                    this.$store.dispatch('hideLoading');

                },500)

            }).catch((res)=>{
                console.log('错误')
            })

        },*/
        components: {
            navbar, footbar
        },
    }
</script>