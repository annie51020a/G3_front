<template>
    <div class="activity-detail">
        <h1>{{ activity.title }}</h1>
        <img :src="activity.pic" alt="活動圖片">
        <p>日期: {{ activity.date }}</p>
        <p>時間: {{ activity.time }}</p>
        <p>地點: {{ activity.loc }}</p>
        <p>價格: {{ activity.price }}</p>
    </div>
</template>

<script>
import activities from '../../public/activities.json';

export default {
    name: 'ActivityDetail',
    data() {
        return {
            activity: null
        };
    },
    created() {
        const activityId = this.$route.params.id;
        this.activity = activities.find(activity => activity.id === parseInt(activityId));
    }
};
</script>

<style lang="scss">
.activity-detail {
    padding: 20px;

    img {
        max-width: 100%;
        height: auto;
    }

    p {
        margin: 10px 0;
    }
}
</style>