import React from "react";
import { FastField, useFormikContext } from "formik";
import { useFormikWizard } from "formik-wizard";
import DatePicker from "react-date-picker";

function NameInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="firstName">First name: </label>
        <FastField name="firstName" id="firstName" />
      </div>
      <small style={{ color: "red" }}>
        {touched.firstName && errors.firstName}
      </small>
      <div>
        <label htmlFor="lastName">Last name: </label>
        <FastField name="lastName" id="lastName" />
      </div>
      <small style={{ color: "red" }}>
        {touched.lastName && errors.lastName}
      </small>
    </div>
  );
}

function EmailInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="email">Email address: </label>
        <FastField name="email" id="email" />
      </div>
      <small style={{ color: "red" }}>{touched.email && errors.email}</small>
    </div>
  );
}

function PhoneInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="number">Phone number: </label>
        <FastField name="number" id="number" />
      </div>
      <small style={{ color: "red" }}>{touched.number && errors.number}</small>
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
      <small style={{ color: "red" }}>{touched.date && errors.date}</small>
    </div>
  );
}

function GenderInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="gender">Gender: </label>
        <FastField name="gender" id="gender" as="select">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </FastField>
      </div>
      <small style={{ color: "red" }}>{touched.gender && errors.gender}</small>
    </div>
  );
}

function AddressInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="address">Address: </label>
        <FastField name="address" id="address" />
      </div>
      <small style={{ color: "red" }}>
        {touched.address && errors.address}
      </small>
      <div>
        <label htmlFor="address2">Address 2: </label>
        <FastField name="address2" id="address2" />
      </div>
      <small style={{ color: "red" }}>
        {touched.address2 && errors.address2}
      </small>
      <div>
        <label htmlFor="city">City: </label>
        <FastField name="city" id="city" />
      </div>
      <small style={{ color: "red" }}>{touched.city && errors.city}</small>
      <div>
        <label htmlFor="country">Country: </label>
        <FastField name="country" id="country" />
      </div>
      <small style={{ color: "red" }}>
        {touched.country && errors.country}
      </small>
      <div>
        <label htmlFor="zipcode">Zipcode: </label>
        <FastField name="zipcode" id="zipcode" />
      </div>
      <small style={{ color: "red" }}>
        {touched.zipcode && errors.zipcode}
      </small>
    </div>
  );
}

function MajorInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="major">What field would you like to study? : </label>
        <FastField name="major" id="major" />
      </div>
      <small style={{ color: "red" }}>{touched.major && errors.major}</small>
    </div>
  );
}

function PassportInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="passport">Do you have a passport?: </label>
        <FastField name="passport" id="passport" as="select">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </FastField>
      </div>
      <small style={{ color: "red" }}>
        {touched.passport && errors.passport}
      </small>
    </div>
  );
}

function VisaInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="visa">Do you have a US visa?: </label>
        <FastField name="visa" id="visa" as="select">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </FastField>
      </div>
      <small style={{ color: "red" }}>{touched.visa && errors.visa}</small>
    </div>
  );
}

function EducationInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="education">Educational Status: </label>
        <FastField name="education" id="education" as="select">
          <option value="High School">High School</option>
          <option value="College/University">College/University</option>
        </FastField>
      </div>
      <small style={{ color: "red" }}>
        {touched.education && errors.education}
      </small>
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
        <FastField name="startingDate" id="startingDate" as="select">
          <option value="fall">August 2021</option>
          <option value="spring">January 2022</option>
        </FastField>
      </div>
      <small style={{ color: "red" }}>
        {touched.startingDate && errors.startingDate}
      </small>
    </div>
  );
}

function ExamInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="exam">Which exams have you taken?: </label>
        <FastField name="exam" id="exam" as="select">
          <option value="SAT">SAT</option>
          <option value="TOEFL">TOEFL</option>
          <option value="IELTS">IELTS</option>
          <option value="Duolingo English Exam">Duolingo English Exam</option>
          <option value="None">None</option>
        </FastField>
      </div>
      <small style={{ color: "red" }}>{touched.exam && errors.exam}</small>
    </div>
  );
}

function SponsorInfo() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor="sponsor">Who will sponsor education?: </label>
        <FastField name="sponsor" id="sponsor" as="select">
          <option value="Myself">Myself</option>
          <option value="Parents">Parents</option>
          <option value="Others">Others</option>
        </FastField>
      </div>
      <small style={{ color: "red" }}>
        {touched.sponsor && errors.sponsor}
      </small>
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
