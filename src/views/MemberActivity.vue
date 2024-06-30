<template>
    <section class="mem-activity">
        <div class="mem-title">
            <h1>報名紀錄</h1>
            
        </div>
        <hr />

        <div class="mem-box">
            <MemberManageList class="mem-list" />
            <section class="section-activity">
                <div class="activity-card" v-for="(activity, index) in activities.slice(0, 3)" :key="index"
                    @click="goToActivityDetail(activity.id)">
                    <div class="card-pic">
                        <img :src="parseImg(activity.pic)" alt="活動圖片">
                    </div>
                    <div class="card-title">
                        <h5>{{ activity.title }}</h5>
                    </div>
                    <div class="card-date">{{ activity.date }}</div>
                    <div class="card-time1">{{ activity.time1 }}</div>
                    <div class="card-time2">{{ activity.time2 }}</div>
                    <div class="card-loc"><img src="@/assets/pic/activity/map.png" alt="">{{ activity.loc }}</div>
                    <div class="card-price">{{ activity.price }}</div>
                </div>
            </section>
          
        </div>
    </section>
</template>

<script>
import MemberManageList from '../components/layout/MemberManageList.vue'

export default {
    components: {
        MemberManageList
    },
    data() {
        return {
            activities: [],
            responseData: [],
        }
    },
    mounted() {
        fetch(`${import.meta.env.BASE_URL}activities.json`)
            .then(response => response.json())
            .then(data => {
                this.activities = data;
                this.responseData = data;

            })
            .catch(error => console.error('Error fetching activities:', error));
    },
    methods: {
        parseImg(file) {
      // 指到src || ..的意思是“回到上一層”
      return new URL(`../assets/pic/activity/${file}`, import.meta.url).href;
    },
    goToActivityDetail(id) {
      this.$router.push({ name: 'activitydetail', params: { id } });
    },
}
}


</script>

<style lang="scss" scoped>
@import "@/assets/sass/style";

.mem-activity {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;

    .mem-title {
        >h1 {
            margin-top: 50px;
            color: #564a41;
            @media screen and (max-width:576px) {
                margin-top: 180px;
            }
            @media screen and (min-width:577px) and (max-width:996px){
                margin-top: 150px;
            }
        }
    }

    hr {
        width: 100%;
        color: #564a41;
        margin: 2% auto;
    }

    .mem-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2% 0 15% 0;
        width: 100%;
        .mem-list {
        @media screen and (max-width:576px) {
            position: absolute;
            top: 0%;
            left: 0%;
            height: 50%;
        }

        @media screen and (min-width:577px) and (max-width:996px) {
            position: absolute;
            top: 0%;
            left: 0%;
        }
    }
        @media screen and (max-width:576px) {
            justify-content: space-around;
        }
        @media screen and (min-width:577px) and (max-width:996px){
            justify-content: space-around;
            .mem-list{
                margin: 0 auto;
            }

        }

    }

   
}

.section-activity {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
    gap: 5%;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 10px;

    @media (max-width: $lg) {
        justify-content:space-between;
          }

          @media (max-width: $sm) {
            justify-content:center;
          }

    .activity-card {
        width: 30%;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        margin-bottom: 30px;

        @media (max-width: $lg) {
            width: 40%;
          }

          @media (max-width: $sm) {
            width: 70%;
          }
        .card-pic {
            aspect-ratio: 4/3;
            border-radius: 10px;
            overflow: hidden;

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        .card-title,
        .card-date,
        .card-time1,
        .card-time2,
        .card-loc,
        .card-price {
            font-size: 16px;
            padding-top: 15px;
            text-align: left;

            @media (max-width: $md) {
                padding-top: 10px;
              }
        }

        .card-loc{

            >img{
            width: 25px;
            height: 25px;
            padding-right: 5px;
            }
        }
    }
}
</style>
