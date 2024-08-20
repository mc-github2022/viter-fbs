import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import React from "react";
import { IoMdClose } from "react-icons/io";

const ModalEditBannerContent = ({ close, theContent }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => close(false);

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(itemEdit`/v2/header-content`, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["parents"] });
      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Record successfully added."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    header_banner_title: itemEdit ? itemEdit.header_banner_title : "",
    parents_lname: itemEdit ? itemEdit.parents_lname : "",
    parents_email: itemEdit ? itemEdit.parents_email : "",
    parents_email_old: itemEdit ? itemEdit.parents_email : "",
  };

  const yupSchema = Yup.object({
    parents_fname: Yup.string().required("Required"),
    parents_lname: Yup.string().required("Required"),
    parents_email: Yup.string().required("Required").email("Invalid email"),
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
                      <div className="inputGroup mb-4">
                        <label htmlFor="">Banner Title</label> <br />
                        <input
                          type="text"
                          className="border-customGray border w-full h-[36px]"
                        />
                      </div>
                      <div className="inputGroup mb-4">
                        <label htmlFor="">Banner Desc</label> <br />
                        <textarea
                          name=""
                          id=""
                          className="border-customGray border w-full h-[150px]"
                        ></textarea>
                      </div>
                      <div className="inputGroup mb-4">
                        <label htmlFor="">Button Text</label> <br />
                        <input
                          type="text"
                          className="border-customGray border w-full h-[36px]"
                        />
                      </div>
                      <div className="inputGroup">
                        <label htmlFor="">Button Link</label> <br />
                        <input
                          type="text"
                          className="border-customGray border w-full h-[36px]"
                        />
                      </div>
                    </div>
                    <div className="btnUpdate absolute bottom-0 py-4 flex gap-2">
                      <button type="submit" value="" className="btn">
                        Update
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
