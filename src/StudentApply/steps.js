import { date, object, string } from "yup";

import {
  NameInfo,
  EmailInfo,
  PhoneInfo,
  Summary,
  GenderInfo,
  AddressInfo,
  DateInfo,
  MajorInfo,
  PassportInfo,
  VisaInfo,
  EducationInfo,
  StartDateInfo,
  ExamInfo,
  SponsorInfo,
} from "./wizard.js";

const steps = [
  {
    id: "genderInfo",
    component: GenderInfo,
    initialValues: {
      gender: "male",
    },
    validationSchema: object().shape({
      gender: string().required("Gender is required"),
    }),
  },
  {
    id: "nameInfo",
    component: NameInfo,
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: object().shape({
      firstName: string().required("First Name is required"),
      lastName: string().required("Last Name is required"),
    }),
  },
  {
    id: "emailInfo",
    component: EmailInfo,
    initialValues: {
      email: "",
    },
    validationSchema: object().shape({
      email: string()
        .email("Enter a valid email address")
        .required("Enter a valid email address"),
    }),
  },
  {
    id: "phoneInfo",
    component: PhoneInfo,
    initialValues: {
      number: "",
    },
    validationSchema: object().shape({
      number: string().required("Phone number is required"),
    }),
  },

  {
    id: "dateInfo",
    component: DateInfo,
    initialValues: {
      date: new Date(),
    },
    validationSchema: object().shape({
      date: date()
        .required("Date of birth is required")
        .nullable()
        .transform((curr, orig) => (orig === "" ? null : curr)),
    }),
  },
  {
    id: "addressInfo",
    component: AddressInfo,
    initialValues: {
      address: "",
      address2: "",
      city: "",
      country: "",
      zipcode: "",
    },
    validationSchema: object().shape({
      address: string().required("Street address is required"),
      city: string().required("City is required"),
      country: string().required("Country is required"),
      zipcode: string().required("Zipcode is required"),
    }),
  },

  {
    id: "passportInfo",
    component: PassportInfo,
    initialValues: {
      passport: "yes",
    },
    validationSchema: object().shape({
      passport: string().required("Passport is required"),
    }),
  },
  {
    id: "visaInfo",
    component: VisaInfo,
    initialValues: {
      visa: "yes",
    },
    validationSchema: object().shape({
      visa: string().required("Visa is required"),
    }),
  },
  {
    id: "educationInfo",
    component: EducationInfo,
    initialValues: {
      education: "High School",
    },
    validationSchema: object().shape({
      education: string().required("Education is required"),
    }),
  },
  {
    id: "startDateInfo",
    component: StartDateInfo,
    initialValues: {
      startingDate: "August 2021",
    },
    validationSchema: object().shape({
      startingDate: string().required("Starting Date is required"),
    }),
  },

  {
    id: "majorInfo",
    component: MajorInfo,
    initialValues: {
      major: "",
    },
    validationSchema: object().shape({
      major: string().required("Major information is required"),
    }),
  },

  {
    id: "examInfo",
    component: ExamInfo,
    initialValues: {
      exam: "None",
    },
    validationSchema: object().shape({
      exam: string().required("Exam information is required"),
    }),
  },

  {
    id: "sponsorInfo",
    component: SponsorInfo,
    initialValues: {
      sponsor: "myself",
    },
    validationSchema: object().shape({
      sponsor: string().required("Sponsor is required"),
    }),
  },
  {
    id: "summary",
    component: Summary,
  },
];
export default steps;
