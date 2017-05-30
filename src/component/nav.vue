<template>
    <div class="nav1">
        <div id="Headline">
            <h1><img src="../templets/m2013/img/logo2.png"></h1>
        </div>
        <div id="MainNav">
            <div class="flexslider-nav">
                <ul class="slides">
                    <li>
                        <router-link to="/zuopin" onclick="window.history.go(0)">
                            <p>作品</p>
                            <p class="NavItemInfo">PHOTOS</p>
                        </router-link>
                        <router-link to="/changjing" onclick="window.history.go(0)">
                            <p>场景</p>
                            <p class="NavItemInfo">SCENSE</p>
                        </router-link>
                        <router-link to="/huodong" onclick="window.history.go(0)">
                            <p>活动</p>
                            <p class="NavItemInfo">EVENTS</p>
                        </router-link>
                        <router-link to="/yuyue" onclick="window.history.go(0)">
                            <p>预约</p>
                            <p class="NavItemInfo">SERVICE</p>
                        </router-link>
                        <router-link to="/pinpai" onclick="window.history.go(0)">
                            <p>品牌</p>
                            <p class="NavItemInfo">BRAND</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <ul id="ShowingRibbons">
            <li id="RBNShowMenu"><img src="../templets/m2013/img/RED/dropdown_show.png" alt="Show Menu"/></li>
            <li>
                <!--<a href="../index.html"><img src="../templets/m2013/img/RED/dropdown_index.png" alt="Back to homepage"/></a>-->
                <router-link to="/home"  onclick="window.history.go(0)">
                    <img src="../templets/m2013/img/RED/dropdown_index.png" alt="Back to homepage"/>
                </router-link>
            </li>
        </ul>
    </div>
</template>
