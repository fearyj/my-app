import React from 'react';

function ImageResult({ resultImage }) {
  return (
    <div>
      <h2>Result</h2>
      {resultImage && <img src={URL.createObjectURL(resultImage)} alt="Result" />}
    </div>
  );
}

export default ImageResult;
