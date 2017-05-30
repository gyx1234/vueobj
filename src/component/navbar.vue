<template>
    <div class="navbar">
        <!--headlineSection-->
        <div id="BigHeadline">
            <h1><img src="src/templets/m2013/img/logo1.png"></h1>
        </div>
        <!--Main Nav Section-->
        <div id="MainNavHome">
            <div class="flexslider-nav">
                <ul class="slides">
                    <li>
                        <!--<a href="zuopin.html">
                            <p>作品</p>
                            <p class="NavItemInfo">PHOTOS</p>
                        </a>
                        <a href="changjing.html">
                            <p>场景</p>
                            <p class="NavItemInfo">SCENSE</p>
                        </a>
                        <a href="huodong.html">
                            <p>活动</p>
                            <p class="NavItemInfo">EVENTS</p>
                        </a>
                        <a href="yuyue.html">
                            <p>预约</p>
                            <p class="NavItemInfo">SERVICE</p>
                        </a>
                        <a href="pinpai.html">
                            <p>品牌</p>
                            <p class="NavItemInfo">BRAND</p>
                        </a>
                        -->
                        <router-link to="/zuopin" tag="a" onclick="window.history.go(0)">
                            <p>作品</p>
                            <p class="NavItemInfo">PHOTOS</p>
                        </router-link>
                        <router-link to="/changjing" tag="a" onclick="window.history.go(0)">
                            <p>场景</p>
                            <p class="NavItemInfo">SCENSE</p>
                        </router-link>
                        <router-link to="/huodong" tag="a" onclick="window.history.go(0)">
                            <p>活动</p>
                            <p class="NavItemInfo">EVENTS</p>
                        </router-link>
                        <router-link to="/yuyue" tag="a" onclick="window.history.go(0)">
                            <p>预约</p>
                            <p class="NavItemInfo">SERVICE</p>
                        </router-link>
                        <router-link to="/pinpai" tag="a" onclick="window.history.go(0)">
                            <p>品牌</p>
                            <p class="NavItemInfo">BRAND</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

