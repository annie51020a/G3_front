<template>
    <div class="modal" v-if="visible">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 300px;
    text-align: center;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>