<template>
    <div style="margin-top: 100px;" class="stored-pictures-view container">
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr style="text-align: center;" class="text-uppercase">
                    <th scope="col-1">STT</th>
                    <th scope="col">MÃ</th>
                    <th scope="col-3">THƯƠNG HIỆU</th>
                    <th scope="col-3">GIÁ</th>
                    <th scope="col-2">TÊN</th>
                    <th scope="col" colspan="2"></th>
                </tr>
            </thead>

            <tbody v-for="(picture, index) in pictures" :key="index">
                <tr class="text-justify" style="font-size: 15px;">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ picture.ID }}</td>

                    <td>{{ picture.keywordsP }}</td>
                    <td>{{ picture.priceP }}</td>
                    <td>{{ picture.nameP }}</td>
                    <td>
                        <router-link :to="'/admin/picture/' + picture._id + '/edit'" class="btn btn-link">Sửa</router-link>
                        <a href="" class="btn btn-link" @click="getIdPicture(picture)" :data-id="picture._id" data-toggle="modal"
                            data-target="#delete-picture-modal" style="color: crimson;">Xóa</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal -->
        <div class="modal fade" id="delete-picture-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Xóa sách?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        bạn có chắc muốn xóa ảnh này?
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="deletePicture()" class="btn btn-danger">Xóa
                            bỏ</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            pictures: [],
            id: null
        }
    },


    created() {
        axios.get('http://localhost:3000/admin/stored/pictures')
            .then(res => {
                this.pictures = res.data.pictures;
            })
            .catch(err => {
                console.log(err)
            });
    },

    methods: {
        getIdPicture(picture) {
            this.id = picture._id
            // this.$el.getAttribute('data-id');
        },

        deletePicture() {
            axios.delete('http://localhost:3000/picture/' + this.id)
                .then(() => {
                    console.log(this.id);
                    this.$router.push('/admin/stored/pictures');
                    window.alert("Xóa thành công")
                    window.location.reload()
                })
                .catch(err => console.log(err));
        },
    }
}
</script>

<style scoped>
.stored-pictures-view {
    margin: 68px auto;
}

.btn.btn-link {
    text-decoration: none;
}
</style>