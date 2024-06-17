import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

function TextEditor({ initialValue, onChange, placeholder }) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (content, delta, source, editor) => {
        setValue(content);
        if (onChange) {
            onChange(content);
        }
    };

    return (
        <ReactQuill
            value={value}
            onChange={handleChange}
            modules={TextEditor.modules}
            formats={TextEditor.formats}
            placeholder={placeholder}
            theme="snow"
        />
    );
}

TextEditor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
};

TextEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
];

export default TextEditor;
