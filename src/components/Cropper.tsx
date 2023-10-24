'use client'

import React from 'react'
import CropperComponent, { ReactCropperElement } from 'react-cropper'
import 'cropperjs/dist/cropper.css'

interface Props {
  src: string
  refObj: React.RefObject<ReactCropperElement>
  aspectRatio?: number
  minCropBoxWidth?: number
  minCropBoxHeight?: number
}

const Cropper = ({
  src,
  refObj,
  aspectRatio,
  minCropBoxHeight,
  minCropBoxWidth,
}: Props) => {
  return (
    <CropperComponent
      src={src}
      className="h-full w-full dark:bg-zinc-600"
      aspectRatio={aspectRatio}
      ref={refObj}
      minCropBoxWidth={minCropBoxWidth}
      minCropBoxHeight={minCropBoxHeight}
      cropBoxMovable={false}
      cropBoxResizable={false}
      zoomable={false}
      guides={false}
      dragMode="move"
      toggleDragModeOnDblclick={false}
      rotatable={false}
      center={false}
      viewMode={1}
      background={false}
    />
  )
}

export default Cropper
