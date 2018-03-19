<template>
  <!--图片上传-->
  <div class="box">
    <h2>图片上传</h2>
    <div class="image-title">
      <div class="image-txt">已选图片({{imgList.length}})</div>
    </div>
    <div class='image-list'>
      <div v-for='(item,index) in imgList' class='image-item'>
        <div class="delete" @click="deleteImage(index)">删除</div>
        <img class="preview-img" :src="item.src">
      </div>
      <div class='addImage'>
        <input @change='add_img' type="file" accept="image/*" multiple>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        imgList: [],
      }
    },
    components: {},
    created() {

    },
    methods: {
      //删除图片
      deleteImage(index) {
        this.imgList.splice(index, 1)
      },
      //添加图片按钮点击
      add_img(event) {
        let reader = new FileReader(),
          img = event.target.files[0],
          that = this
        if (img) {
          reader.readAsDataURL(img)

          reader.onloadend = function () {
            // console.log(reader.result)
            let quality,
              compressImgList = [],
              images = {
                src: reader.result
              }
            that.imgList.push(images)
          }
        }
      },
    },
  }

</script>

<style>
  .box {
    width: 80%;
    max-width: 500px;
  }

  .image-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 .5rem;
    margin-bottom: .5rem;
  }

  .image-item {
    margin-right: 10px;
    position: relative;
  }

  .image-item img {
    width: 80px;
    height: 80px;
  }

  .delete {
    position: absolute;
    right: 0;
    top: 0;
    padding: .2em;
    color: #fff;
    background: red;
    font-size: 14px;
  }

  .addImage {
    background: url("../assets/images/add_icon@3x.png");
    position: relative;
    width: 80px;
    height: 80px;
    background-size: 100%;
    border: 1px solid #ddd;
    margin: .2rem;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    opacity: 0;
  }

  .image-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 .5rem;
  }

  .image-txt {
    padding: .7rem 0;
  }
</style>
