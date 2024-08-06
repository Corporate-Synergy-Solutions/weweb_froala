<template>
    <froala v-model:value="content" :config="config"></froala>
</template>

<script>
import { Froala } from './vue-froala/vue-froala.js';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
export default {
    components: { Froala },
    props: {
        content: { type: Object, required: true },
    },
    data() {
        return {
            content: '<span>Hello iqbal</span>',
        };
    },
    computed: {
        config() {
            return {
                key: 'OXC1lD4I3B14A7C8C7D5dNSWXa1c1MDe1CI1PLPFa1F1EESFKVlA6F6D5A4A1D3C11A3A5D4==',
                heightMin: 450,
                // Image upload configuration
                imageUploadParam: 'image',
                imageUploadURL: 'https://xwvz-k0fo-ac9j.g7.xano.io/api:Tmvy3k_t/temp_message_image',
                imageUploadParams: { id: 'froala-upload' },
                imageUploadMethod: 'POST',
                imageMaxSize: 5 * 1024 * 1024,
                imageAllowedTypes: ['jpeg', 'jpg', 'png'],

                // Video upload configuration
                videoUploadParam: 'video',
                videoUploadURL: 'https://xwvz-k0fo-ac9j.g7.xano.io/api:Tmvy3k_t/temp_message_video',
                videoUploadParams: { id: 'froala-upload' },
                videoUploadMethod: 'POST',
                videoMaxSize: 50 * 1024 * 1024,
                videoAllowedTypes: ['webm', 'ogg', 'mp4'],

                // File upload configuration
                fileUploadParam: 'file',
                fileUploadURL: 'https://xwvz-k0fo-ac9j.g7.xano.io/api:Tmvy3k_t/temp_message_file',
                fileUploadParams: { id: 'froala-upload' },
                fileUploadMethod: 'POST',
                fileMaxSize: 20 * 1024 * 1024,
                fileAllowedTypes: [
                    'application/pdf',
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                ],
            };
        },
    },
};
</script>
