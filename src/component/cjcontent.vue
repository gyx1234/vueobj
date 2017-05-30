<template>
    <div class="ContentWrapper" id="GalleryContentWrapper">
        <!--            gallery Posts content-->
        <ul id="GalleryPosts">
            <li v-for="(item,index) in arr" v-html="item.cjc"></li>

            <!--<li>
                <div class="OneTapeLeft">
                    <img src="../templets/m2013/img/tapeHorizontal.png" alt="Horizontal Tape"/>
                </div>
                <a href="" class="TouchGallery" title="天鹅湖城堡">
                    <img class="MainGalleryImage" src="../uploads/allimg/131129/1-1311291I6350-L.jpg" alt="天鹅湖城堡"
                         title="天鹅湖城堡"/>
                </a>
                <h2><a href="">天鹅湖城堡</a></h2>
                <h3>PARIS CLSDDIC AREA</h3>
                <p>天鹅扑棱着翅膀打破了镜子似的湖面，像被施了魔法似的水纹如梦如幻地扩散。你在城堡面前的花园里起舞，微笑漾开了心扉，我突然记起...</p>
                <a class="readMore" href="">MORE+</a>
            </li>
            <li>
                <div class="OneTapeLeft">
                    <img src="../templets/m2013/img/tapeHorizontal.png" alt="Horizontal Tape"/>
                </div>
                <a href="" class="TouchGallery" title="威廉美岸">
                    <img class="MainGalleryImage" src="../uploads/allimg/131129/1-1311291I3180-L.jpg" alt="威廉美岸"
                         title="威廉美岸"/>
                </a>
                <h2><a href="">威廉美岸</a></h2>
                <h3>PARIS CLSDDIC AREA</h3>
                <p>清晨的原野，晴空浩湛，鸟鸣婉转，绿色的波浪从远方层层翻涌到身前，你白色的裙裾飞扬，像一只展翅欲飞的蝶。远处的风车“呼哧呼哧...</p>
                <a class="readMore" href="">MORE+</a>
            </li>
            <li>
                <div class="OneTapeLeft"><img src="../templets/m2013/img/tapeHorizontal.png" alt="Horizontal Tape"/></div>
                <a href="" class="TouchGallery" title="威尼斯水城">
                    <img class="MainGalleryImage" src="../uploads/allimg/131129/1-1311291HS80-L.jpg" alt="威尼斯水城"
                         title="威尼斯水城"/>
                </a>
                <h2><a href="">威尼斯水城</a></h2>
                <h3>PARIS CLSDDIC AREA</h3>
                <p>贝多芬的月光曲静静地响起，你着绝美霓裳站在缓缓行进的船头，眼睛里倒映出波光粼粼的蓝色水面，言笑自若，光华流转，那一瞬，我只...</p>
                <a class="readMore" href="">MORE+</a>
            </li>
            <li>
                <div class="OneTapeLeft">
                    <img src="../templets/m2013/img/tapeHorizontal.png" alt="Horizontal Tape"/>
                </div>
                <a href="" class="TouchGallery" title="万国花园">
                    <img class="MainGalleryImage" src="../uploads/allimg/131123/1-1311231039450-L.jpg" alt="万国花园"
                         title="万国花园"/>
                </a>
                <h2><a href="">万国花园</a></h2>
                <h3>PARIS CLSDDIC AREA</h3>
                <p>花神的嫁礼，浪漫花季，让你尽享杭州旅游婚纱摄影之花海婚纱照。佳丽摄影2013私家花园，火力全开！杭州佳丽摄影万国花园外景婚纱摄影...</p>
                <a class="readMore" href="">MORE+</a>
            </li>
            <li>
                <div class="OneTapeLeft">
                    <img src="../templets/m2013/img/tapeHorizontal.png" alt="Horizontal Tape"/>
                </div>
                <a href="" class="TouchGallery" title="世外桃源">
                    <img class="MainGalleryImage" src="../uploads/allimg/131123/1-131123103A70-L.jpg" alt="世外桃源"
                         title="世外桃源"/>
                </a>
                <h2><a href="">世外桃源</a></h2>
                <h3>PARIS CLSDDIC AREA</h3>
                <p>青黛色的小路弯曲缠绵，微光乍现，恍然间似乎是别开了一个世外人间。花瓣从发间飘落散发馥郁香气，我只愿与你，共这一片三生三世，...</p>
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