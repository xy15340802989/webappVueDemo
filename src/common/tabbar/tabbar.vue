<template>
    <div id="footer">
        <ul>
            
            <routerLink 
            tag="li"
            v-for="(item,index) in nav" :key="index"
            :to="item.path">
                <i class="icon iconfont" v-html="item.icon"></i>
                <span>{{item.text}}</span>
            </routerLink>
             <!-- <li>
                <i class="icon iconfont" v-html="nav[1].icon"></i>
                <span>电影</span>
            </li>
             <li>
                <i class="icon iconfont" v-html="nav[1].icon"></i>
                <span>电影</span>
            </li> -->
        </ul>
    </div>
</template>

<script>
    export default {
        name:"tabbar",
        data() {
            return {
                nav:[
                    {
                        icon:"&#xe69c;",
                        text:"电影",
                        path:"/movie"
                    },
                     {
                        icon:"&#xe8c0;",
                        text:"影院",
                        path:"/cinema"
                    },
                     {
                        icon:"&#xe607;",
                        text:"我的",
                        path:"/mine"
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    #footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        background: #fff;
        ul{
             width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                i{
                    font-size: 20px;
                }
                span{

                }
            }
        }
    }

    .router-link-active{
        color:#c33;
        i{
            color: aqua;
        }
    }

    
</style>