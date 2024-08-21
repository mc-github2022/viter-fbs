import { InputText, InputTextArea } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, Form } from "formik";
import React from "react";
import { IoMdClose } from "react-icons/io";
import * as Yup from "yup";

const ModalEditBannerContent = ({ close, theContent }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => close(false);

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/header-content/${theContent?.data[0].header_id}`,
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["headerContent"] });
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
    header_banner_title: theContent?.data[0].header_banner_title,
    header_banner_text: theContent?.data[0].header_banner_text,
    header_banner_btn_text: theContent?.data[0].header_banner_btn_text,
    header_banner_btn_link: theContent?.data[0].header_banner_btn_link,
  };

  const yupSchema = Yup.object({
    header_banner_title: Yup.string().required("Required"),
    header_banner_text: Yup.string().required("Required"),
    header_banner_btn_text: Yup.string().required("Required"),
    header_banner_btn_link: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="bg-dark bg-opacity-30 fixed z-10 left-0 top-0 w-full h-[100dvh]">
        <div className="modal scroll-m-0 absolute top-0 bg-light px-4 w-[350px] right-0 h-full">
          <h2 className="font-semibold py-4">Update Banner Content </h2>
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
              mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="">
                    <div>
                      <div className="inputGroup flex flex-col mb-4">
                        <InputText
                          label="Banner Title"
                          type="text"
                          name="header_banner_title"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup flex flex-col mb-4">
                        <InputTextArea
                          label="Banner Text"
                          name="header_banner_text"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup flex flex-col mb-4">
                        <InputText
                          label="Button Text"
                          type="text"
                          name="header_banner_btn_text"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup flex flex-col">
                        <InputText
                          label="Button Link"
                          type="text"
                          name="header_banner_btn_link"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>
                    <div className="btnUpdate absolute bottom-0 py-4 flex gap-2">
                      <button
                        type="submit"
                        className="btn"
                        disabled={mutation.isPending || !props.dirty}
                      >
                        {mutation.isPending ? <ButtonSpinner /> : "Update"}
                      </button>
                      <button
                        type="reset"
                        value=""
                        className="btn-light"
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

export default ModalEditBannerContent;
