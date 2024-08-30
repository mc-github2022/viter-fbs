import useUploadPhoto from "@/components/custom-hooks/useUploadPhoto";
import {
  InputPhotoUpload,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import {
  devBaseImgUrl,
  apiVersion,
} from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, Form } from "formik";
import React from "react";
import { FaRegImage, FaUpload } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import * as Yup from "yup";

const ModalEditActivitiesItemA = ({ close, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => close(false);

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/v2/activity-content/${itemEdit.activity_id}`, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["activityContent"] });

      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        close(false);
        dispatch(setMessage("Content Updated."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    activity_title: itemEdit ? itemEdit.activity_title : "",
    activity_text: itemEdit ? itemEdit.activity_text : "",
    activity_btn_text: itemEdit ? itemEdit.activity_btn_text : "",
    activity_btn_link: itemEdit ? itemEdit.activity_btn_link : "",
    activity_img: itemEdit ? itemEdit.activity_img : "",
  };

  const yupSchema = Yup.object({
    activity_title: Yup.string().required("Required"),
    activity_text: Yup.string().required("Required"),
    activity_btn_text: Yup.string().required("Required"),
    activity_btn_link: Yup.string().required("Required"),
  });

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    `${apiVersion}/upload-photo`,
    dispatch
  );

  return (
    <>
      <div className="bg-dark bg-opacity-30 fixed z-10 left-0 top-0 w-full h-[100dvh]">
        <div className="modal scroll-m-0 absolute top-0 bg-light px-4 w-[350px] right-0 h-full">
          <h2 className="font-semibold py-4">Update Activities Item</h2>
          <button
            className="btnClose absolute right-5 top-5"
            onClick={handleClose}
          >
            <IoMdClose />
          </button>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              const data = {
                ...values,
                activity_img: photo?.name || "",
              };

              uploadPhoto();
              mutation.mutate(data);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="">
                    <div>
                      <div className="mb-4">
                        <label htmlFor="" className="">
                          Activity Image
                        </label>
                        <br />
                        <div className="relative group">
                          {itemEdit === null && photo === null ? (
                            <div className="group-hover:opacity-20 bg-customGray mb-4 items-center gap-2 h-[180px] border rounded-md p-2">
                              <div>
                                <IoImageOutline className="text-[30px] text-[gray]" />
                                <h1 className="mb-0 leading-tight grid place-items-center text-[gray] text-[30px] text-center">
                                  Upload Image
                                </h1>
                              </div>
                            </div>
                          ) : (itemEdit?.activity_img === "" &&
                              photo === null) ||
                            photo === "" ? (
                            <div className="group-hover:opacity-20 mb-4 bg-customGray grid place-items-center items-center gap-2  h-[180px]  p-2">
                              <div>
                                <IoImageOutline className="mx-auto text-[30px] text-[gray] " />
                                <h1 className="mb-0 leading-tight text-[gray] text-center">
                                  Upload Image
                                </h1>
                              </div>
                            </div>
                          ) : (
                            <img
                              src={
                                photo
                                  ? URL.createObjectURL(photo) // preview
                                  : devBaseImgUrl + "/" + itemEdit?.activity_img // check db
                              }
                              alt="Company Logo"
                              className="group-hover:opacity-30 duration-200 relative h-[180px]  object-contain object-[50%,50%] m-auto"
                            />
                          )}

                          <div className="btnImgUpload">
                            <button>
                              <MdOutlineFileUpload />
                              <InputPhotoUpload
                                name="photo"
                                type="file"
                                id="myFile"
                                accept="image/*"
                                title="Upload Logo"
                                onChange={(e) =>
                                  handleChangePhoto(e, initVal.activity_img)
                                }
                                className="opacity-0 absolute right-0 top-0 h-full left-0 m-auto cursor-pointer z-[999]"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      {console.log(photo)}
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Activity Title"
                          type="text"
                          name="activity_title"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputTextArea
                          label="Activity Text"
                          name="activity_text"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Button Text"
                          type="text"
                          name="activity_btn_text"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Button Link"
                          type="text"
                          name="activity_btn_link"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>
                    <div className="btnUpdate absolute bottom-0 py-4 flex gap-2">
                      <button
                        type="submit"
                        value=""
                        className="btn"
                        disabled={
                          (mutation.isPending || !props.dirty) &&
                          (photo === null || photo === "")
                          // initVal.company_info_image === photo?.name
                        }
                      >
                        Update
                      </button>
                      <button
                        type="reset"
                        value=""
                        className="btn-light !py-2"
                        onClick={handleClose}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ModalEditActivitiesItemA;
