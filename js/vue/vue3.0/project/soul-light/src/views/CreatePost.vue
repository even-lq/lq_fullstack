<template>
  <div class="create-post-page">
    <h4 class="fw-bold">{{ isEditMode ? '编辑文章' : '新建文章' }}</h4>
    <uploader
      action='/upload'
      class="d-flex align-items-center justify-content-center bg-light text-secondary w-100 my-4"
      :beforeUpload="uploadCheck"
      :uploaded="uploadedData"
      @file-uploaded="onFileUploaded"
    >
      <h2>点击上传头图</h2>
      <template #loading>
        <div class="d-flex align-items-center justify-content-center">
          <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <span class="d-inline-block ms-2 fs-2">正在上传</span>
        </div>
      </template>
      <template #uploaded="dataProps">
        <img :src="dataProps.uploadedData.data.url" width="500" />
      </template>
    </uploader>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <validate-input
          :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入文章标题"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <validate-input
          rows="10"
          tag="textarea"
          placeholder="请输入文章详情"
          :rules="contentRules"
          v-model="contentVal"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">{{ isEditMode ? '更新文章' : '发表文章' }}</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { GlobalDataProps, PostProps, ResponseType, ImageProps } from '../store'
import ValidateInput, { RulesProp } from '../components/validate/ValidateInput.vue'
import ValidateForm from '../components/validate/ValidateForm.vue'
import Uploader from '@/components/uploader/Uploader.vue';
import createMessage from '@/components/message/createMessage';
import { beforeUploadCheck } from '@/helper'

export default defineComponent({
  name: 'CreatePost',
  components: {
    ValidateInput,
    ValidateForm,
    Uploader
  },
  setup() {
    const uploadedData = ref();
    const titleVal = ref('');
    const contentVal = ref('');
    const route = useRoute();
    const router = useRouter();
    const isEditMode = !!route.query.id;
    const store = useStore<GlobalDataProps>();
    let imageId = '';
    const titleRules: RulesProp = [{
      type: 'required',
      message: '文章标题'
    }]
    const contentRules: RulesProp = [{
      type: 'required',
      message: '文章详情'
    }]
    onMounted(() => {
      if (isEditMode) {
        store.dispatch('fetchPost', route.query.id).then((rawData: ResponseType<PostProps>) => {
          const currentPost = rawData.data;
          if (currentPost.image) {
            uploadedData.value = { data: currentPost.image }
          }
          titleVal.value = currentPost.title;
          contentVal.value = currentPost.content || '';
        })
      }
    })
    const onFileUploaded = (rawData: ResponseType<ImageProps>) => {
      if (rawData.data._id) {
        imageId = rawData.data._id;
      }
    }
    const onFormSubmit = (result: boolean) => {
      if (result) {
        const { column, _id } = store.state.user;
        if (column) {
          const newPost: PostProps = {
            title: titleVal.value,
            content: contentVal.value,
            column,
            author: _id
          }
          if (imageId) {
            newPost.image = {
              _id: imageId
            }
          }
          const actionName = isEditMode ? 'updatePost' : 'createPost';
          const sendData = isEditMode ? {
            id: route.query.id,
            payload: newPost
          } : newPost;
          store.dispatch(actionName, sendData).then(() => {
            createMessage('发表成功，2秒后跳转到文章', 'success', 2000)
            setTimeout(() => {
              router.push({ name: 'column', params: { id: column } })
            }, 2000)
          });
        }
      }
    }
    const uploadCheck = (file: File) => {
      const result = beforeUploadCheck(file, {
        format: ['image/jpeg', 'image/png'],
        size: 3
      })
      const { passed, error } = result;
      if (error === 'format') {
        createMessage('上传的图片只能是JPG/PNG格式！', 'error');
      }
      if (error === 'size') {
        createMessage('上传的图片不能超过3MB！', 'error');
      }
      return passed;
    }
    return {
      titleRules,
      titleVal,
      contentVal,
      contentRules,
      onFormSubmit,
      uploadCheck,
      uploadedData,
      onFileUploaded,
      isEditMode
    }
  }
})
</script>
<style>
.create-post-page .file-upload-container {
  height: 200px;
  cursor: pointer;
  overflow: hidden;
}
.create-post-page .file-upload-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.uploaded-area {
  position: relative;
}
.uploaded-area:hover h3 {
  display: block;
}
.uploaded-area h3 {
  display: none;
  position: absolute;
  color: #999;
  text-align: center;
  width: 100%;
  top: 50%;
}
</style>
