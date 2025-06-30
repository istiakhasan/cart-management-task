import * as yup from "yup";
export const orderSubmissionValidation = yup.object().shape({
  // number: yup.number().required("Number is required"),
  // name: yup.string().required("Name is required"),
  // password: yup.string().min(6).max(32).required(),
  // email: yup.string().email().required("Email is required"),
  // presentAddress: yup.string().required("Present Address is required"),
  // permanentAddress: yup.string().required("Permanent Address is required"),
  // address: yup.string().required("Secondary Address is required"),
  // contactNo: yup.string()
  //     .test('len', 'Contact number must be exactly 11 digits', val => val && val.toString().length === 11)
  //     .required("Contact number is required"),
  // bioData: yup.string().required().max(250, "Bio data should not exceed 250 characters"),
  // about: yup.string().required().max(250, "About should not exceed 250 characters"),
  // file: yup.mixed().required('A file is required')
});
export const addCollectionsSchema = yup.object().shape({
  collectionName_en: yup.string().required("Name is required"),
  collectionName_bn: yup.string().required("Name is required"),
  collectionSlug: yup.string().required("Name is required"),
  image: yup.mixed().required("Image is required"),
});
export const mainCategorySchemaValidation = yup.object().shape({
  name_en: yup.string().required("Name is required"),
  name_bn: yup.string().required("Name is required"),
  image: yup.mixed().required("Image is required"),
});
export const brandSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Name is required"),
});
export const officeSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  location: yup.string().required("Location is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
});
export const hubSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  location: yup.string().required("Location is required"),
});
export const courierSchemaValidation = yup.object().shape({
  courierName: yup.string().required("Courier Name is required"),
  corporateAddress: yup.string().required("Corporate Address is required"),
  officialNumber: yup.number().required("Official Number is required"),
  websiteUrl: yup.string().required("Website Url is required"),
});
export const vendorValidationSchema = yup.object().shape({
  organization_name: yup.string().required(),
  organization_address: yup.string().required(),
  bin_number: yup.string().required(),
  tin_number: yup.string().required(),
  bank_name: yup.string().required(),
  branch_name: yup.string().required(),
  account_name: yup.string().required(),
  bank_account_number: yup.string().required(),
  routing_number: yup.string().required(),
  mobile_banking_type: yup.string().required(),
  mobile_banking_number: yup.string().required(),
  name: yup.string().required(),
  permanent_address: yup.string().required(),
  present_address: yup.string().required(),
  phone_number: yup.string().required(),
  additional_number: yup.string().required(),
  email: yup.string().required(),
});

export const productvalidationSchema = yup.object().shape({
  main_categories_id: yup.object().required("Product Status is required"),
  active_status: yup.object().required("Product Status is required"),
  product_code: yup.string().required("Product code is required"),
  product_title_en: yup.string().required("Product title is required"),
  product_title_bn: yup.string().required("Product title is required"),
  product_slug: yup.string().required("Product slug is required"),
  pack_size: yup.string().required("Pack size is required"),
  vendor: yup.object().required("Vendor is required"),
  brand: yup.object().required("Brand is required"),
  sales_masuring_unit: yup.object().required("Sales Mesuring Unit is required"),
  regular_prices: yup.number().required("Regular  price is required"),
  vat: yup.number().default(0),
  mrp: yup.number().default(0),
  product_weight: yup.number().required("Weight  is required"),
  product_weight_type: yup
    .string()
    .required("Product weight type  is required"),
  product_image: yup.mixed().required("A file is required"),
  product_gallery: yup.mixed().required("A file is required"),
  discount_amount: yup.number().default(0),
});
export const productUpdatevalidationSchema = yup.object().shape({
  active_status: yup.object().required("Product Status is required"),
  product_code: yup.string().required("Product code is required"),
  product_title_en: yup.string().required("Product title is required"),
  product_title_bn: yup.string().required("Product title is required"),
  product_slug: yup.string().required("Product slug is required"),
  sales_masuring_unit: yup.object().required("Sales Mesuring Unit is required"),
  regular_prices: yup.number().required("Regular  price is required"),
  vat: yup.number().default(0),
  mrp: yup.number().default(0),
  product_image: yup.mixed().required("A file is required"),
  // product_gallery: yup.mixed().required("A file is required"),
  product_dec_en: yup.string().required("A file is required"),
  product_dec_bn: yup.string().required("A file is required"),
  discount_amount: yup.number().default(0),
  product_weight: yup.number().required("Field is required"),
  product_weight_type: yup.string().required("Field is required"),
  pack_size: yup.string().required("Pack size is required"),
  vendor: yup.object().required("Vendor is required"),
  brand: yup.object().required("Brand is required"),
});
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("UserId is required"),
  password: yup
    .string()
    .required("Password is required")
});

export const userCreateSchema = yup.object().shape({
  employee: yup.object().shape({
    employeeId: yup.string().required("Employee Id is required"),
    name: yup.string().required("Employee Name is required"),
    firstName: yup.string().required("FirstName Name is required"),
    lastName: yup.string().required("Last Name is required"),
    role: yup.object().required("Role is required"),
  }).required('employee required'),
  department: yup.object().required("Department is required"),
});
export const createSubscriberSchema = yup.object().shape({
  name: yup.string()
    .required('Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Name should contain only letters'),
  phoneNumber: yup.string().required('Phone number is required')
  .matches(/^[0-9]+$/, 'Phone number must contain only digits')
  .test('len', 'Number must be exactly 11 digits', val => val ? val.length === 11 : false)
  ,
  division: yup.object().required('Division is required'),
  district: yup.object().required('District is required'),
  thana: yup.object().required('Thana is required'),
  profession: yup.object().required('Profession is required'),
  maritalStetus: yup.object().required('Marital Status is required'),
  familyMember: yup.object().required('Family Member is required'),
  buildingAddress: yup.string().required('Building Address is required'),
  shopingCalendar: yup.string().required('Shoping Calendar Is Required'),
  email: yup.string()
    .email('Must be a valid email address')
    .notRequired(),
});

export const subscriberOrderSubmittionSchema = yup.object().shape({
  orderNumber: yup.string().required('Order Number  is required'),
  orderDate: yup.string().required('Order date  is required'),
});
export const passwordChangeSchema = yup.object().shape({
  oldPassword: yup.string().required('Old password is required'),
  newPassword: yup.string().required('New password is required'),
  confirmNewPassword: yup.string()
    .oneOf([yup.ref('newPassword')], 'Passwords must match')
    .required('Please re-enter your password'),
});


export const orderUpdateSchema = yup.object().shape({
  orderType: yup.object().required(),
  paymentStatus: yup.object().required(),
  currier: yup.object().required(),
  deliveryType: yup.object().required(),
  // shippingAddressDivision: yup.object().required(),
  // shippingAddressDistrict: yup.object().required(),
  // shippingAddressThana: yup.object().required(),
  paymentMethods: yup.object().required(),
  paidAmount: yup.string().when('paymentStatus', (paymentStatus:any, schema) => {
    if (paymentStatus[0]?.value === 'Partial') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
  transactionId: yup.string().when('paymentStatus', (paymentStatus:any, schema) => {
    if (paymentStatus[0]?.value === 'Partial' || paymentStatus[0]?.value === 'Paid') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
});
export const createCustomerSchema = yup.object().shape({
  customerName: yup.string().required(),
  customerPhoneNumber: yup.string().required('Phone number is required'),
  customerType: yup
    .object()
    .shape({
      label: yup.string().required('Customer type label is required'),
      value: yup.string().required('Customer type value is required'),
    })
    .test('customerType-required', 'Customer type is required', (value) => !!value && !!value.label && !!value.value),
  address: yup.string().when('customerType', (customerType:any, schema) => {
    if (customerType[0]?.value === 'NON_PROBASHI') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
  division: yup.object().when('customerType', (customerType:any, schema) => {
    if (customerType[0]?.value === 'NON_PROBASHI') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
  district: yup.object().when('customerType', (customerType:any, schema) => {
    if (customerType[0]?.value === 'NON_PROBASHI') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
  thana: yup.object().when('customerType', (customerType:any, schema) => {
    if (customerType[0]?.value === 'NON_PROBASHI') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
  country: yup.object().when('customerType', (customerType:any, schema) => {
    if (customerType[0]?.value === 'PROBASHI') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
});

const getStartOfToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to midnight
  return today;
};

export const orderCreateSchema = yup.object().shape({
  orderFrom: yup.object().required('Order source is required'),
  orderType: yup.object().required('Order type is required'),
  deliveryType: yup.object().required('Delivery type is required'),
  currier: yup.object().required('Currier  is required'),
  paymentStatus: yup.object().required('Payment Status  is required'),
  paymentMethods: yup.object().required('Payment method  is required'),
  deliveryCharge: yup.object().required('Payment method  is required'),
  customerName: yup.string().required('Payment method  is required'),
  customerPhoneNumber: yup.string().required('Payment method  is required'),
  address: yup.string().required('Payment method  is required'),
  deliveryDate: yup
  .date()
  .required('Delivery date is required')
  .min(getStartOfToday(), 'Delivery date cannot be in the past'),
  // deliveryDate: yup.string().required('Payment method  is required'),
  preOrderNumber: yup.string().when('orderType', (customerType:any, schema) => {
    if (customerType[0]?.value === 'Exchange') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
  transactionId: yup.string().when('paymentStatus', (customerType:any, schema) => {
    if (customerType[0]?.value === 'Paid') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    if (customerType[0]?.value === 'Partial') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
});
export const receiverFormSchema = yup.object().shape({
  receiverName: yup.string().required('Order source is required'),
  receiverPhoneNumber: yup.string().required('Order type is required'),
  shippingAddressTextArea: yup.string().required('Payment method  is required'),
  shippingAddressDivision: yup.object().required('Payment method  is required'),
  shippingAddressDistrict: yup.object().required('Payment method  is required'),
  shippingAddressThana: yup.object().required('Payment method  is required'),
});

export const operationalSchema = yup.object().shape({
  orderFrom: yup.object().required('Order source is required'),
  orderType: yup.object().required('Order type is required'),
  deliveryType: yup.object().required('Delivery type is required'),
  currier: yup.object().required('Currier  is required'),
  paymentStatus: yup.object().required('Payment Status  is required'),
  paymentMethods: yup.object().required('Payment method  is required'),
  deliveryCharge: yup.object().required('Payment method  is required'),
  deliveryDate: yup
  .date()
  .required('Delivery date is required')
  .min(getStartOfToday(), 'Delivery date cannot be in the past'),
  // deliveryDate: yup.string().required('Payment method  is required'),
  preOrderNumber: yup.string().when('orderType', (customerType:any, schema) => {
    if (customerType[0]?.value === 'Exchange') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
  transactionId: yup.string().when('paymentStatus', (customerType:any, schema) => {
    if (customerType[0]?.value === 'Paid') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    if (customerType[0]?.value === 'Partial') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
  paidAmount: yup.number().when('paymentStatus', (customerType:any, schema) => {
    if (customerType[0]?.value === 'Paid' || customerType[0]?.value === 'Partial') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    if (customerType[0]?.value === 'Partial') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
});
export const operationalSchemaUpdate = yup.object().shape({
  orderFrom: yup.object().required('Order source is required'),
  orderType: yup.object().required('Order type is required'),
  deliveryType: yup.object().required('Delivery type is required'),
  currier: yup.object().required('Currier  is required'),
  deliveryCharge: yup.object().required('Payment method  is required'),
  deliveryDate: yup
  .date()
  .required('Delivery date is required')
  .min(getStartOfToday(), 'Delivery date cannot be in the past'),
  // deliveryDate: yup.string().required('Payment method  is required'),
  preOrderNumber: yup.string().when('orderType', (customerType:any, schema) => {
    if (customerType[0]?.value === 'Exchange') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),

});
export const paymentSchema = yup.object().shape({
  paymentStatus: yup.object().required('Payment Status  is required'),
  paymentMethods: yup.object().required('Payment method  is required'),

  transactionId: yup.string().when('paymentStatus', (customerType:any, schema) => {
    if (customerType[0]?.value === 'Paid') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    if (customerType[0]?.value === 'Partial') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  }),
  paidAmount: yup.string().when('paymentStatus', (paymentStatus:any, schema) => {
    if (paymentStatus[0]?.value === 'Partial') {
      return schema.required('Division is required for NON_PROBASHI customer type');
    }
    return schema;
  })
});



export const OrderSettlementSchema = yup.object().shape({
  discountAmount: yup.number().required('Amount is required'),
  settlementType: yup.object().required(),
  settlementReason: yup.object().required('Reason is required'),
  settlementDetails: yup.string().nullable().optional(),
});




export const addAgentSchema = yup.object().shape({
  shopName: yup.string().required("Shop name is required"),
  shopOwnerName: yup.string().required("Shop owner name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10,15}$/, "Phone number must be between 10-15 digits")
    .required("Phone number is required"),
  nidNumber: yup
    .string()
    // .matches(/^\d{10,17}$/, "NID must be between 10-17 digits")
    .required("NID number is required"),
  // tradeLicenseNo: yup.string().required("Trade license number is required"),
  tradeLicenseExpiryDate: yup.date().required("Trade license expiry date is required"),
  division: yup.object().required("Division is required"),
  district: yup.object().required("District is required"),
  thana: yup.object().required("Thana is required"),
  shopAddress: yup.string().required("Shop address is required"),
  shopImage: yup.mixed().required("Image is required"),
  nidNumberImage: yup.mixed().required("Image is required"),
});
export const updateAgentSchema = yup.object().shape({
  shopName: yup.string().required("Shop name is required"),
  shopOwnerName: yup.string().required("Shop owner name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10,15}$/, "Phone number must be between 10-15 digits")
    .required("Phone number is required"),
  nidNumber: yup
    .string()
    // .matches(/^\d{10,17}$/, "NID must be between 10-17 digits")
    .required("NID number is required"),
  tradeLicenseNo: yup.string().required("Trade license number is required"),
  tradeLicenseExpiryDate: yup.date().required("Trade license expiry date is required"),
  district: yup.object().required("District is required"),
  thana: yup.object().required("Thana is required"),
  shopAddress: yup.string().required("Shop address is required"),
});
export const customerBasedComissionSchema = yup.object().shape({
  customer_type: yup.object().required("Shop name is required"),
  commissionType: yup.object().required("Shop name is required"),
  commissionValue: yup.number().required("Shop name is required"),

});
export const returnCustomerBasedComissionSchema = yup.object().shape({
  customer_type: yup.object().required("Shop name is required"),
  commissionType: yup.object().required("Shop name is required"),
  timeDuration: yup.number().required("Shop name is required"),
  commissionValue: yup.number().required("Shop name is required"),
});
export const locationBasedCategoryComissionSchema = yup.object().shape({
  category: yup.object().required("Shop name is required"),
  division: yup.object().required("Shop name is required"),
  district: yup.object().required("Shop name is required"),
  thana: yup.object().required("Shop name is required"),
  commissionType: yup.object().required("Shop name is required"),
  commissionValue: yup.number().required("Shop name is required"),
});
export const addBannerSchema = yup.object().shape({
  name: yup.string().required("Shop name is required"),
  imgSlug: yup.string().required("Shop name is required"),
  imgLink: yup.string().required("Shop name is required"),
  buttonName: yup.string().required("Shop name is required"),
  url: yup.string().required("Shop name is required"),
  file: yup.mixed().required("Image is required")
});
export const updateBannerSchema = yup.object().shape({
  name: yup.string().required("Shop name is required"),
  imgSlug: yup.string().required("Shop name is required"),
  imgLink: yup.string().required("Shop name is required"),
  buttonName: yup.string().required("Shop name is required"),
  url: yup.string().required("Shop name is required"),
  // file: yup.mixed().required("Image is required")
});
export const addReviewSchema = yup.object().shape({
  customerName: yup.string().required("Shop name is required"),
  review: yup.string().required("Shop name is required"),
  productDetails: yup.object().required("Shop name is required"),
  rating: yup.string().required("Shop name is required"),
  file: yup.mixed().required("Image is required")
});
export const updateReviewSchema = yup.object().shape({
  customerName: yup.string().required("Shop name is required"),
  review: yup.string().required("Shop name is required"),
  productDetails: yup.object().required("Shop name is required"),
  rating: yup.string().required("Shop name is required")
});
export const userSchema = yup.object().shape({
  roles: yup.object().required("Shop name is required"),
  agentName: yup.string().required("Shop name is required"),
  employeeId: yup.string().required("Shop name is required"),
  email: yup.string().required("Shop name is required"),
  phone: yup.string().required("Shop name is required"),
  password: yup.string().required("Shop name is required"),
  agentImage: yup.mixed().required("Shop name is required")
});
export const userUpdateSchema = yup.object().shape({
  roles: yup.object().required("Shop name is required"),
  agentName: yup.string().required("Shop name is required"),
  employeeId: yup.string().required("Shop name is required"),
  email: yup.string().required("Shop name is required"),
  phone: yup.string().required("Shop name is required")
});


