<template>
    <div style="background-color:dimgray; margin-top: 100px;" class="home container">
        <div class="sections row">
            <template v-for="picture in pictures">
                <div class="card" style="width: 16.4rem;">
                    <img class="card-img-top w-100 img-fluid" :src="path + picture.addressP" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"><b>Mã:</b> {{ picture.ID }}</h5>
                        <p class="card-text"><b>Tên:</b> {{ picture.nameP }}</p>
                        <p class="card-text"><b>Thương hiệu:</b> {{ picture.keywordsP }}</p>
                        <p class="card-text"><b>Giá:</b> {{ picture.priceP }}</p>
                        
                    </div>
                </div>

            </template>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import staticPath from '../assets/staticPath';


export default {
    data() {
        return {
            pictures: []
        }
    },

    computed: {
        path() {
            return staticPath
        }
    },

    created() {
        axios
            .get("http://localhost:3000/")
            .then(res => {
                this.pictures = res.data.pictures;
                console.log(this.pictures);
            },)
            .catch(err => {
                console.log(err)
            },)
    }
}
</script>
<style>
.container {
    margin-top: 64px;
    margin-bottom: 24px;
    font-size: 13px;
	width: 1114px;
	margin-left: auto;
	margin-right: auto;
}

.card {
    display: inline-block;
    margin: 8px;
    font-size: 15px;
}

.card-img-top {
    border-radius: 5px;
    height: 280px;
}
</style>