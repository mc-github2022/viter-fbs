import { InputText, InputTextArea } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import Toast from "@/components/partials/Toast";
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

const ModalEditAboutContent = ({ close, contentAbout }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => close(false);

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/about-content/${contentAbout?.data[0].about_id}`,
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["aboutContent"] });
      // show error box
      if (data.success) {
        console.log("hahaha");
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
    about_title: contentAbout?.data[0].about_title,
    about_subtitle: contentAbout?.data[0].about_subtitle,
    about_text: contentAbout?.data[0].about_text,
    about_btn_text: contentAbout?.data[0].about_btn_text,
    about_btn_link: contentAbout?.data[0].about_btn_link,
  };

  const yupSchema = Yup.object({
    about_title: Yup.string().required("Required"),
    about_subtitle: Yup.string().required("Required"),
    about_text: Yup.string().required("Required"),
    about_btn_text: Yup.string().required("Required"),
    about_btn_link: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="bg-dark bg-opacity-30 fixed z-10 left-0 top-0 w-full h-[100dvh]">
        <div className="modal scroll-m-0 absolute top-0 bg-light px-4 w-[350px] right-0 h-full">
          <h2 className="font-semibold py-4">Update Header Menu </h2>
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
                      <div className="inputGroup mb-4">
                        <InputText
                          label="About Title"
                          type="text"
                          name="about_title"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="About Subtitle"
                          type="text"
                          name="about_subtitle"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputTextArea
                          label="About Text"
                          name="about_text"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Button Text"
                          type="text"
                          name="about_btn_text"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Button Link"
                          type="text"
                          name="about_btn_link"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>
                    <div className="btnUpdate absolute bottom-0 py-4 flex gap-2">
                      <button
                        type="submit"
                        value=""
                        className="btn"
                        disabled={mutation.isPending || !props.dirty}
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

export default ModalEditAboutContent;
