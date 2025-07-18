import React, { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
import { enhancedImageAPI } from '../utils/enhanceImageAPI'

const Home = () => {

  const [uploadImage, setUploadImage] =useState(null)
  const [enhancedImage, setEnhancedImage] =useState(null)
  const [loading, setloading] = useState(false)

const UploadImageHandler = async (file)=>
{
  setUploadImage(URL.createObjectURL(file))
  console.log(URL.createObjectURL(file));
  // this way we create a object of our file.
  // this creates a link of the input image to use that link in the API 
  setloading(true);

  try
  {
    const enhancedURL = await enhancedImageAPI(file);
    setEnhancedImage (enhancedURL); 
    setloading(false);
  }
  catch (error) 
  {
    console.log(error)
    alert ("Error while enhancing the image.... Please try again later.")
      
  }
}

  return (
    <>
        <ImageUpload  UploadImageHandler={UploadImageHandler}/>
        <ImagePreview
          loading={loading}
          uploaded={uploadImage}
          enhanced={enhancedImage?.image}
        />
    </>
  )
}

export default Home