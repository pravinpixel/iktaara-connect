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
const whenStepIs = (expectedStep: string, schema: yup.StringSchema) => {
	return yup
		.string()
		.when("type", ([type]: string[]) => (type === expectedStep ? schema : yup.string().notRequired()));
};

const artistAboutValidation = yup.object().shape({
  artist_name: whenStepIs("about", yup.string().required("Artist Name is required")), 
  email: whenStepIs("about",yup.string().required("Email is required")),
  mobile: whenStepIs("about",yup.string().required("Mobile Number is Required")),
  artist_type: whenStepIs("about",yup.string().required("Select Artist specialist")),
  artist_description: yup
    .string()
    .max(300, "Description should be less than 300 character")
    .required("Description is required"),
    // perform_languages: whenStepIs("about",yup.array().required("Select Perform Language")),
    // instruments:whenStepIs("about",yup.array().required("Select Instrument Type")),
    // perform_genere: whenStepIs("about",yup.array().required("Select Perform Genere")),
    // prefered_events: whenStepIs("about",yup.array().required("Select Preferred Events")),
    city:whenStepIs("about",yup.string().required("City is Required")),
    location: whenStepIs("about",yup.string().required("Location is Required")),
    pincode: whenStepIs("about",yup.string().required("Pincode is Required")),

    recognitions: whenStepIs(
      "recognition",
      yup.array().of(
        yup.object().shape({
          title: yup.string().required("Title is required"),
          description: yup.string().required("Description is required"),
          date: yup.string().required("Date is required"),
        })
      )
    ),
    
    is_live_online: whenStepIs("contact",yup
    .number()
    .oneOf([1], "Please select the checkbox")
    .required("Please select the checkbox")),
  

    live_online_description: whenStepIs("contact",yup.string().required("Description is required")),
    is_home_pickup:whenStepIs("contact", yup
    .number()
    .oneOf([1], "Please select the checkbox") 
    .required("Please select the checkbox")),

    home_pickup_description: whenStepIs("contact",yup.string().required("Description is required")),
    is_distance_service: whenStepIs("contact",yup
    .number()
    .oneOf([1], "Please select the checkbox") 
    .required("Please select the checkbox")),
    
    distance_service_description: whenStepIs("contact",yup.string().required("Description is required")),
    // documents: whenStepIs(
    //   "media", 
    //     yup.object().shape({
    //       document_url: yup
    //         .string()
    //         .url("Invalid URL format")
    //         .required("Document URL is required"),
    //       name: yup.string().required("Document name is required"),
    //     })
    //   ).min(1, "At least one document is required") 
    
});

export { businessSchema,artistAboutValidation };

