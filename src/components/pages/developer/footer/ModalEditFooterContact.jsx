import { InputText } from "@/components/helpers/FormInputs";
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
import { IoMdClose } from "react-icons/io";
import * as Yup from "yup";

const ModalEditFooterContact = ({ isUpdateFooter, close, footerContent }) => {
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
    contact_tel_number: footerContent?.data[0].contact_tel_number,
    contact_phone_number: footerContent?.data[0].contact_phone_number,
    contact_office_hours: footerContent?.data[0].contact_office_hours,
    contact_email: footerContent?.data[0].contact_email,
    contact_address: footerContent?.data[0].contact_address,
  };

  const yupSchema = Yup.object({
    // contact_tel_number: Yup.string().required("Required"),
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
                          label="Telephone Number"
                          type="text"
                          name="contact_tel_number"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Phone Number"
                          type="text"
                          name="contact_phone_number"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Office Hours"
                          type="text"
                          name="contact_office_hours"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Email"
                          type="text"
                          name="contact_email"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <InputText
                          label="Address"
                          type="text"
                          name="contact_address"
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

export default ModalEditFooterContact;
