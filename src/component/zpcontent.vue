<template>
    <div class="ContentWrapper" id="BlogContentWrapper">
        <ul id="BlogPosts">
            <li v-for="(item,index) in arr" v-html="item.zpc"></li>

            <!--<li>
                <a href="" class="TouchGallery" title="[布拉格之城]天使之翼"><img class="HeadlineImg"
                                                                         src="../uploads/allimg/131122/1-1311221631010-L.jpg"
                                                                         alt="[布拉格之城]天使之翼" title="[布拉格之城]天使之翼"/></a>
                <span class="BigComments"></span>
                <h2><a href="">点击预览正文模板-3v3手机模板</a></h2>
                <p class="BlogInfo">POSTTIME:2013-11-22 <a href="">VIEW:171</a></p>
                <p class="BlogDescriptionLast">【微官网3v3.cc】</p>
                <a class="readMore" href="">MORE+</a>
            </li>
            <li>
                <a href="" class="TouchGallery" title="[若韩时光馆]希腊门扉的神秘诱惑"><img class="HeadlineImg" src="../uploads/allimg/131122/1-1311221602360-L.jpg" alt="[若韩时光馆]希腊门扉的神秘诱惑" title="[若韩时光馆]希腊门扉的神秘诱惑"/></a>
                <span class="BigComments"></span>
                <h2><a href="">[若韩时光馆]希腊门扉的神秘诱惑</a></h2>
                <p class="BlogInfo">POSTTIME:2013-11-22 <a href="">VIEW:67</a></p>
                <p class="BlogDescriptionLast">希腊门扉的神秘诱惑</p>
                <a class="readMore" href="">MORE+</a>
            </li>
            <li>
                <a href="" class="TouchGallery" title="[布拉格之城]尼德斐庄园"><img class="HeadlineImg" src="../uploads/allimg/131122/1-131122155H20-L.jpg" alt="[布拉格之城]尼德斐庄园" title="[布拉格之城]尼德斐庄园"/></a>
                <span class="BigComments"></span>
                <h2><a href="">[布拉格之城]尼德斐庄园</a></h2>
                <p class="BlogInfo">POSTTIME:2013-11-22 <a href="">VIEW:112</a></p>
                <p class="BlogDescriptionLast">[布拉格之城]尼德斐庄园</p>
                <a class="readMore" href="">MORE+</a>
            </li>
            <li>
                <a href="" class="TouchGallery" title="[若韩时光馆]许愿瓶密语"><img class="HeadlineImg" src="../uploads/allimg/131122/1-1311221554090-L.jpg" alt="[若韩时光馆]许愿瓶密语" title="[若韩时光馆]许愿瓶密语"/></a>
                <span class="BigComments"></span>
                <h2><a href="">[若韩时光馆]许愿瓶密语</a></h2>
                <p class="BlogInfo">POSTTIME:2013-11-22 <a href="">VIEW:158</a></p>
                <p class="BlogDescriptionLast">[若韩时光馆]许愿瓶密语</p>
                <a class="readMore" href="">MORE+</a>
            </li>
            <li>
                <a href="" class="TouchGallery" title="[若韩时光馆]苏菲的钢琴日记"><img class="HeadlineImg" src="../uploads/allimg/131122/1-1311221550070-L.jpg" alt="[若韩时光馆]苏菲的钢琴日记" title="[若韩时光馆]苏菲的钢琴日记"/></a>
                <span class="BigComments"></span>
                <h2><a href="">[若韩时光馆]苏菲的钢琴日记</a></h2>
                <p class="BlogInfo">POSTTIME:2013-11-22 <a href="">VIEW:198</a></p>
                <p class="BlogDescriptionLast">[若韩时光馆]苏菲的钢琴日记</p>
                <a class="readMore" href="">MORE+</a>
            </li>-->
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                arr: []
            }
        },
        mounted(){
            this.$store.dispatch('showLoading');
            let url = '/src/data/index.json';
            this.$http.get(url).then((res) => {
                //console.log(eval(res.data));
                // console.log(res.data);
                setTimeout(() => {
                    this.arr = res.data;
                    this.$store.dispatch('hideLoading');
                }, 500)
            }).catch((res) => {
                console.log('请求错误')
            })
        },
    }
</script>
