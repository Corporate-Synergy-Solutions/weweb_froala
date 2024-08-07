<template>
    <froala v-model:value="data" :config="config"></froala>
</template>

<script setup>
import { Froala } from './vue-froala/vue-froala.js';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import { ref, defineProps, computed } from 'vue';

const props = defineProps({
    content: { type: Object, required: true },
});
const data = ref('');

const fileAllowedTypes = computed(() => {
    let arr = ['application/pdf'];
    if (props.content.customAllowTypes) {
        if (props.content.allowPpt)
            arr.push(
                'application/vnd.ms-powerpoint',
                'application/vnd.openxmlformats-officedocument.presentationml.presentation'
            );
        if (props.content.allowDoc)
            arr.push('application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword');
        if (props.content.allowExcel)
            arr.push('application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    } else {
        arr = [
            'application/pdf',
            'application/msword',
            'application/vnd.ms-excel',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];
    }
    return arr;
});
const config = computed(() => {
    return {
        key: 'OXC1lD4I3B14A7C8C7D5dNSWXa1c1MDe1CI1PLPFa1F1EESFKVlA6F6D5A4A1D3C11A3A5D4==',
        heightMin: 450,
        // Image upload configuration
        imageUploadParam: 'image',
        imageUploadURL: props.content.imageUploadURL,
        imageUploadParams: { id: 'froala-image-upload' },
        imageUploadMethod: 'POST',
        imageMaxSize: 5 * 1024 * 1024,
        imageAllowedTypes: ['jpeg', 'jpg', 'png'],

        // Video upload configuration
        videoUploadParam: 'video',
        videoUploadURL: props.content.videoUploadURL,
        videoUploadParams: { id: 'froala-video-upload' },
        videoUploadMethod: 'POST',
        videoMaxSize: 50 * 1024 * 1024,
        videoAllowedTypes: ['webm', 'ogg', 'mp4'],

        // File upload configuration
        fileUploadParam: 'file',
        fileUploadURL: props.content.fileUploadURL,
        fileUploadParams: { id: 'froala-file-upload' },
        fileUploadMethod: 'POST',
        fileMaxSize: 20 * 1024 * 1024,
        fileAllowedTypes: fileAllowedTypes.value,
        htmlExecuteScripts: false,
        attribution: false,
        events: {
            contentChanged: function () {
                const currentContent = this.html.get();
                wwLib.wwVariable.updateValue(props.content.idComponentBind, currentContent);
            },
        },
    };
});
</script>
