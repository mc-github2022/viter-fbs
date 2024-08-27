import { InputText } from "@/components/helpers/FormInputs";
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
import { IoMdClose } from "react-icons/io";
import * as Yup from "yup";

const ModalEditFooterSocial = ({ isUpdateFooter, close, footerContent }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/contact-content/${footerContent?.data[0].contact_id}`,
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["footerContent"] });
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
    isUpdate: isUpdateFooter,
    contact_fb_link: footerContent?.data[0].contact_fb_link,
    contact_twitter_link: footerContent?.data[0].contact_twitter_link,
    contact_youtube_link: footerContent?.data[0].contact_youtube_link,
    contact_tiktok_link: footerContent?.data[0].contact_tiktok_link,
    contact_linkedin_link: footerContent?.data[0].contact_linkedin_link,
    contact_privacy_link: footerContent?.data[0].contact_privacy_link,
    contact_terms_link: footerContent?.data[0].contact_terms_link,
    contact_eula_link: footerContent?.data[0].contact_eula_link,
  };

  const yupSchema = Yup.object({
    contact_fb_link: Yup.string().required("Required"),
  });

  const handleClose = () => close(false);
  return (
    <>
      <div className="bg-dark bg-opacity-30 fixed z-10 left-0 top-0 w-full h-[100dvh]">
        <div className="modal scroll-m-0 absolute top-0 bg-light px-4 w-[350px] right-0 h-full">
          <h2 className="font-semibold py-4">Update Social Links </h2>
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
                          label="Facebok Link"
                          type="text"
                          name="contact_fb_link"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Twitter Link"
                          type="text"
                          name="contact_twitter_link"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Youtube Link"
                          type="text"
                          name="contact_youtube_link"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Tiktok Link"
                          type="text"
                          name="contact_tiktok_link"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Linkedin Link"
                          type="text"
                          name="contact_linkedin_link"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Youtube Link"
                          type="text"
                          name="contact_privacy_link"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Terms"
                          type="text"
                          name="contact_terms_link"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Terms"
                          type="text"
                          name="contact_terms_link"
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

export default ModalEditFooterSocial;
