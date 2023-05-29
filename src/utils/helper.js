import React from "react";
import { toast } from "react-hot-toast";

const isValidImage = (img) => {
  const fileSize = img.size / 1024 / 1024;

  const fileType = img.type;

  if (fileSize <= 10) {
    if (
      fileType === "image/jpeg" ||
      fileType === "image/jpg" ||
      fileType === "image/png"
    )
      return true;
  }
  return false;
};

const isValidImageList = (images) => {
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const fileSize = img.size / 1024 / 1024;
    const fileType = img.type;

    if (fileSize > 10) {
      return false;
    }

    if (
      fileType !== "image/jpeg" &&
      fileType !== "image/jpg" &&
      fileType !== "image/png"
    ) {
      return false;
    }
  }

  return true;
};

const validateUsername = (value) => {
  const userNameRegex = /^[a-zA-Z0-9_]{1,10}$/;
  if (!userNameRegex.test(value)) {
    toast.error("Username only accepted from 1 to 10 in length");
  }
  return "";
};

const validatePasswordLogin = (value) => {
  const passwordRegex = /^.{6,}$/;
  if (!passwordRegex.test(value)) {
    toast.error("Password required at least 6 in length");
  }
  return "";
};

const validateRegisterEmail = (value) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(value)) {
    toast.error("Your email is not valid");
  }
  return "";
};

const validateRegisterUsername = (value) => {
  const userNameRegex = /^[a-zA-Z0-9_]{1,10}$/;
  if (!userNameRegex.test(value)) {
    toast.error("Username only accepted from 1 to 10 in length");
  }

  return "";
};

const validAge = (value) => {
  const ageRegex = /^(1[0-9]|[2-8][0-9]|90)$/;
  if (!ageRegex.test(value)) {
    toast.error("Your age must between 10 to 90");
  }
  return "";
};

const validPhoneNumber = (value) => {
  const phoneRegex = /^[0-9]{10,}$/;
  if (!phoneRegex.test(value)) {
    toast.error("Your phone number is not valid");
  }
  return "";
};

const validFullName = (value) => {
  const fullNameRegex = /^[a-zA-Z\s]+$/;
  if (!fullNameRegex.test(value)) {
    toast.error("Your full name only contain space and no number in it");
  }
  return "";
};

export {
  isValidImage,
  isValidImageList,
  validateUsername,
  validatePasswordLogin,
  validAge,
  validPhoneNumber,
  validateRegisterEmail,
  validFullName,
  validateRegisterUsername,
};
