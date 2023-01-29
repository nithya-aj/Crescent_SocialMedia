import * as UploadApi from "../api/uploadRequest";

export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("Image upload Action starts")
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error,'this is error from uploadAction.js');
  }
};

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost =await UploadApi.uploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};