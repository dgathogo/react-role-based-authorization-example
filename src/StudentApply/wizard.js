import React from "react";
import { FastField, useFormikContext, ErrorMessage } from "formik";
import { useFormikWizard } from "formik-wizard";
import DatePicker from "react-date-picker";
import { FormikControl } from "../_components";

function NameInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div className="form-group">
        <label htmlFor="firstName">First name: </label>
        <FastField
          name="firstName"
          id="firstName"
          className={
            "form-control" +
            (errors.firstName && touched.firstName ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="firstName"
          component="div"
          className="invalid-feedback"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last name: </label>
        <FastField
          name="lastName"
          id="lastName"
          className={
            "form-control" +
            (errors.firstName && touched.firstName ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="lastName"
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function EmailInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div className="form-group">
        <label htmlFor="email">Email address: </label>
        <FastField
          name="email"
          id="email"
          className={
            "form-control" +
            (errors.email && touched.email ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="email"
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function PhoneInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="number">Phone number: </label>
        <FastField
          name="number"
          id="number"
          className={
            "form-control" +
            (errors.number && touched.number ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="number"
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function DateInfo() {
  const { errors, touched, values, setFieldValue } = useFormikContext();

  return (
    <div>
      <DatePicker
        tag="FastField"
        id="date"
        name="date"
        required={true}
        onChange={(val) => {
          setFieldValue("date", val);
        }}
        value={values.date}
      />
      <ErrorMessage name="date" component="div" className="invalid-feedback" />
    </div>
  );
}

function GenderInfo() {
  const genderOptions = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];
  return (
    <div className="form-group">
      <FormikControl
        control="radio"
        label="Gender"
        name="gender"
        options={genderOptions}
      ></FormikControl>
    </div>
  );
}

function AddressInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="address">Address: </label>
        <FastField
          name="address"
          id="address"
          className={
            "form-control" +
            (errors.address && touched.address ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="address"
          component="div"
          className="invalid-feedback"
        />
      </div>
      <div>
        <label htmlFor="address2">Address 2: </label>
        <FastField
          name="address2"
          id="address2"
          className={
            "form-control" +
            (errors.address2 && touched.address2 ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="address2"
          component="div"
          className="invalid-feedback"
        />
      </div>
      <div>
        <label htmlFor="city">City: </label>
        <FastField
          name="city"
          id="city"
          className={
            "form-control" + (errors.city && touched.city ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="city"
          component="div"
          className="invalid-feedback"
        />
      </div>
      <div>
        <label htmlFor="country">Country: </label>
        <FastField
          name="country"
          id="country"
          className={
            "form-control" +
            (errors.country && touched.country ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="country"
          component="div"
          className="invalid-feedback"
        />
      </div>
      <div>
        <label htmlFor="zipcode">Zipcode: </label>
        <FastField
          name="zipcode"
          id="zipcode"
          className={
            "form-control" +
            (errors.zipcode && touched.zipcode ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="zipcode"
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function MajorInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="major">What field would you like to study? : </label>
        <FastField
          name="major"
          id="major"
          className={
            "form-control" +
            (errors.major && touched.major ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="major"
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function PassportInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="passport">Do you have a passport?: </label>
        <FastField
          name="passport"
          id="passport"
          as="select"
          className={
            "form-control" +
            (errors.passport && touched.passport ? " is-invalid" : "")
          }
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </FastField>
        <ErrorMessage
          name="passport"
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function VisaInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="visa">Do you have a US visa?: </label>
        <FastField
          name="visa"
          id="visa"
          as="select"
          className={
            "form-control" + (errors.visa && touched.visa ? " is-invalid" : "")
          }
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </FastField>
        <ErrorMessage
          name="visa"
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function EducationInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="education">Educational Status: </label>
        <FastField
          name="education"
          id="education"
          as="select"
          className={
            "form-control" +
            (errors.education && touched.education ? " is-invalid" : "")
          }
        >
          <option value="High School">High School</option>
          <option value="College/University">College/University</option>
        </FastField>
        <ErrorMessage
          name="education"
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function StartDateInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="startingDate">
          When would you like to begin classes?:{" "}
        </label>
        <FastField
          name="startingDate"
          id="startingDate"
          as="select"
          className={
            "form-control" +
            (errors.startingDate && touched.startingDate ? " is-invalid" : "")
          }
        >
          <option value="fall">August 2021</option>
          <option value="spring">January 2022</option>
        </FastField>
        <ErrorMessage
          name="startingDate"
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function ExamInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="exam">Which exams have you taken?: </label>
        <FastField
          name="exam"
          id="exam"
          as="select"
          className={
            "form-control" + (errors.exam && touched.exam ? " is-invalid" : "")
          }
        >
          <option value="SAT">SAT</option>
          <option value="TOEFL">TOEFL</option>
          <option value="IELTS">IELTS</option>
          <option value="Duolingo English Exam">Duolingo English Exam</option>
          <option value="None">None</option>
        </FastField>
        <ErrorMessage
          name="exam"
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function SponsorInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="sponsor">Who will sponsor education?: </label>
        <FastField
          name="sponsor"
          id="sponsor"
          as="select"
          className={
            "form-control" +
            (errors.sponsor && touched.sponsor ? " is-invalid" : "")
          }
        >
          <option value="Myself">Myself</option>
          <option value="Parents">Parents</option>
          <option value="Others">Others</option>
        </FastField>
        <ErrorMessage
          name="sponsor"
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function Summary() {
  const { values } = useFormikWizard();
  return (
    <div>
      <h1>Is this information correct?</h1>
      <p>First name: {values.nameInfo.firstName}</p>
      <p>Last name: {values.nameInfo.lastName}</p>
      <p>Email: {values.emailInfo.email}</p>
      <p>Phone number: {values.phoneInfo.number}</p>
      <p>Gender: {values.genderInfo.gender}</p>
      <p>Date of birth: {values.dateInfo.date.toLocaleDateString("en-US")}</p>
      <p>Address: {values.addressInfo.address}</p>
      <p>Do you have a passport?: {values.passportInfo.passport}</p>
      <p>Do you have a US visa?: {values.visaInfo.visa}</p>
      <p>Educational Status: {values.educationInfo.education}</p>
      <p>
        When would you like to begin classes?:{" "}
        {values.startDateInfo.startingDate}
      </p>
      <p>What field would you like to study?: {values.majorInfo.major}</p>
      <p>Which exams have you taken?: {values.examInfo.exam}</p>
      <p>Who will sponsor education?: {values.sponsorInfo.sponsor}</p>
    </div>
  );
}

export {
  NameInfo,
  EmailInfo,
  PhoneInfo,
  AddressInfo,
  GenderInfo,
  MajorInfo,
  PassportInfo,
  VisaInfo,
  EducationInfo,
  StartDateInfo,
  SponsorInfo,
  ExamInfo,
  DateInfo,
  Summary,
};
