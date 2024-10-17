import * as yup from "yup";


const businessSchema = yup.object().shape({
  business_name: yup.string().required("Business Name is required"),
  business_type: yup.object().required("Select Business Type"),
  established_year: yup.string().required("Established Year"),
  business_specialist: yup.object().required("Select Business specialist"),
  business_description: yup
    .string()
    .max(300, "Description should be less than 300 character")
    .required("Description is required"),
});

export { businessSchema };

