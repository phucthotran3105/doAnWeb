<template>
    <div style="margin-top: 100px;font-family: 'Times New Roman', Times, serif;" class="add-note container">
        <h3 class="text-uppercase">Thêm Ảnh Mới</h3>

        <form style="font-size: 20px;" method="POST" @submit.prevent="addNewPhoto">
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="id-photo">ID Ảnh</label>
                    <input type="text" class="form-control" id="id-photo" v-model="pictures.ID">
                </div>
                <div class="form-group col-md-3">
                    <label for="keywords">Thương Hiệu</label>
                    <input type="text" class="form-control" id="keywords" v-model="pictures.keywordsP">
                </div>

            </div>
            <div class="form-row">
                <div class="form-group mb-4 mt-4 col-md-3">
                    <label for="prices">Giá</label>
                    <input type="text" class="form-control" id="prices" v-model="pictures.priceP">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group mb-4 mt-4 col-md-3">
                    <label for="names">Tên</label>
                    <input type="text" class="form-control" id="names" v-model="pictures.nameP">
                </div>
            </div>

            <div class="form-group mb-4 mt-4">
                <label class="form-label" for="pathURL">Chọn hình ảnh</label><br>
                <input type="file" id="pathURL">
            </div>

            <button type="submit" class="btn btn-primary text-uppercase"  @click="getNameFileImg">Thêm ảnh</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            pictures: {
                ID: null,
                keywordsP: null,
                priceP: null,
                addressP: null,
                nameP:null,
            }
        }
    },
    methods: {
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.pictures.addressP = fake_path.split("\\").pop();
        },

        addNewPhoto() {
            axios.post('http://localhost:3000/admin/photos/store', this.pictures)
                .then(res => {
                    if(res.data.status === 200) {
                        window.alert("Thêm ảnh mới thành công")
                        this.pictures.ID = "";
                        this.pictures.keywordsP = "";
                        this.pictures.addressP = "";
                        this.pictures.priceP = "";
                        this.pictures.nameP = ""; 

                        document.getElementById('pathURL').value = "";
                    }
                    if (res.data.status === 500) {
                        window.alert("Thêm ảnh mới thất bại")
                    }
                })
                .catch(err => console.log(err))
        }
    }

}
</script>
<style scoped>
</style>