export default {
    editor: {
        label: {
            en: 'Froala editor',
        },
    },
    properties: {
        key: {
            label: {
                en: 'Froala key',
            },
            type: 'Text',
            defaultValue: '',
        },
        placeholderText: {
            label: {
                en: 'Placeholder text',
            },
            type: 'Text',
            defaultValue: '',
        },
        spellcheck: {
            label: {
                en: 'Spellcheck',
            },
            type: 'OnOff',
            defaultValue: true,
        },
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
        videoUploadURL: {
            label: {
                en: 'Video upload URL',
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
        wordCharCounter: {
            type: 'OnOff',
            label: {
                en: 'Show word counter',
            },
            bindable: true,
            defaultValue: false,
        },
        wordCounterMax: {
            label: {
                en: 'Word counter max',
            },
            type: 'Number',
            options: {
                min: 1,
                max: 10000,
                step: 100,
            },
            defaultValue: 5000,
            hidden: content => !content.wordCharCounter,
        },
    },
};
