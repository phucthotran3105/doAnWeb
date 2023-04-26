<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #330066">
            <router-link to="/" class="navbar-brand" style="color:yellow; font-size: 30px; font-family: 'Times New Roman', Times, serif;">BEAN</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: yellow;font-size: 25px;font-family: 'Times New Roman', Times, serif;">
                            Option
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link to="/admin/photos/add" class="dropdown-item"
                                style="color: black; font-size: 17px;font-family: 'Times New Roman', Times, serif; text-align: center;"><b>Thêm</b>
                            </router-link>

                            <router-link to="/admin/stored/pictures" class="dropdown-item"
                                style="color: black; font-size: 17px;font-family: 'Times New Roman', Times, serif; text-align: center;"><b>Xem kho ảnh</b>
                            </router-link>
                        </div>
                    </li>

                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: white;">
                            Tùy Chọn
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link to="/" class="dropdown-item" style="color: #361D9D; text-align: center;">Wallpaper
                                PC</router-link>
                            <router-link to="/" class="dropdown-item" style="color: #361D9D; text-align: center;">Wallpaper
                                Phone</router-link>
                        </div>
                    </li> -->
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit" style="color: yellow;">Search</button>
                </form>
            </div>
        </nav>
    </div>  
</template>

<style scoped>
.header {
    margin-bottom: 12px;
}
</style>