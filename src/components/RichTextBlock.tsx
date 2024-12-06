import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';

import '../css/RichTextBlock.css';

function RichTextBlock() {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': 1 }, { 'header' : 2 }],
      ['bold', 'italic', 'underline', 'strike'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}]
    ]
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent'
  ]

  return (
    <div className="inspo-block">
      <ReactQuill 
            theme="bubble" 
            placeholder="Write down some ideas!"
            modules={modules}
            formats={formats}
            value={value} 
            onChange={setValue} />
    </div>
  );
}

export default RichTextBlock;