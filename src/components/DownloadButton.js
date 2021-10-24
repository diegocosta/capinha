import React from 'react';
import styled from 'styled-components';
import domtoimage from 'dom-to-image-more';
import FileSaver from 'file-saver';

import Button from './Button';

const CustomButton = styled(Button)`
  background: #21c549;
  margin: 20px 0;
  color: #fff;
  border: 0px;
  transition: all 0.2s;

  :disabled {
    cursor: default;
    background: gray;
  }

  :enabled {
    :hover {
      background: #21c549;
      transform: scale(1.05);
    }
  }
`;

export default function DownloadBUtton(props) {
  function download() {
    domtoimage.toPng(props.content, { quality: 1, scale: 3 }).then(() => {
      // call this method twice as a temporary fix to iOS Sarafi limitations
      domtoimage.toPng(props.content, { quality: 1, scale: 3 }).then((dataUrl) => {
        FileSaver.saveAs(dataUrl, 'cover.png');
      });
    });
  }

  return (
    <CustomButton disabled={!props.content} onClick={download}>
      Download Image
    </CustomButton>
  );
}
