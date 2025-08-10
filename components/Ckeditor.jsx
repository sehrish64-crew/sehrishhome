'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
);
const Ckeditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
    };
    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            wrapperClassName="border border-[#EBEBEB] rounded-md p-2 shadow-sm"
            editorClassName="min-h-[300px] text-lg p-2 bg-white focus:outline-none"
            toolbar={{
                options: ['inline', 'blockType', 'list', 'link', 'image'],
                inline: {
                    inDropdown: false,
                    options: ['bold', 'italic'],
                },
                blockType: {
                    inDropdown: true,
                    options: ['Normal', 'H1', 'H2', 'H3'],
                },
                list: {
                    inDropdown: false,
                    options: ['unordered', 'ordered'],
                },
                link: {
                    inDropdown: false,
                    showOpenOptionOnHover: true,
                    defaultTargetOption: '_blank',
                },
                image: {
                    urlEnabled: true,
                    uploadEnabled: false,
                    alignmentEnabled: true,
                    previewImage: true,
                    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                    alt: { present: true, mandatory: false },
                },
            }}
        />
    );
};
export default Ckeditor;