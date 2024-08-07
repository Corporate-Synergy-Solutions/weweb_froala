export default {
    editor: {
        label: {
            en: 'Froala editor',
        },
    },
    properties: {
        idComponentBind: {
            label: {
                en: 'Id component bind',
            },
            type: 'Text',
            defaultValue: '',
        },
        imageUploadURL: {
            label: {
                en: 'Image upload URL',
            },
            type: 'Text',
            defaultValue: '',
        },
        imageUploadURL: {
            label: {
                en: 'Image upload URL',
            },
            type: 'Text',
            defaultValue: '',
        },
        fileUploadURL: {
            label: {
                en: 'File upload URL',
            },
            type: 'Text',
            defaultValue: '',
        },
        customAllowTypes: {
            label: {
                en: 'Allow custom types',
            },
            type: 'OnOff',
            bindable: true,
            defaultValue: false,
        },
        allowDoc: {
            type: 'OnOff',
            label: {
                en: 'Allow .doc & .docx file',
            },
            hidden: content => !content.customAllowTypes,
            defaultValue: true,
        },
        allowPpt: {
            type: 'OnOff',
            label: {
                en: 'Allow .ppt & .pptx file',
            },
            hidden: content => !content.customAllowTypes,
            defaultValue: true,
        },
        allowExcel: {
            type: 'OnOff',
            label: {
                en: 'Allow .xls & .xlsx file',
            },
            hidden: content => !content.customAllowTypes,
            defaultValue: true,
        },
    },
};
