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
  const userNameRegex = /^[a-zA-Z\s]+$/;
  return userNameRegex.test(value);
};

const validateRegisterPassword = (value) => {
  const passwordRegex = /^.{6,}$/;
  return passwordRegex.test(value);
};

const validateRegisterEmail = (value) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(value);
};

const validateRegisterUsername = (value) => {
  const userNameRegex = /^[a-zA-Z0-9_]{1,20}$/;
  return userNameRegex.test(value);
};

const validAge = (value) => {
  const ageRegex = /^(1[0-9]|[2-8][0-9]|90)$/;
  return ageRegex.test(value);
};

const validPhoneNumber = (value) => {
  const phoneRegex = /^[0-9]{10,}$/;
  return phoneRegex.test(value);
};

const validFullName = (value) => {
  const fullNameRegex = /^[\p{L}\s]{1,40}$/u;
  return fullNameRegex.test(value);
};

export {
  isValidImage,
  isValidImageList,
  validateUsername,
  validateRegisterPassword,
  validAge,
  validPhoneNumber,
  validateRegisterEmail,
  validFullName,
  validateRegisterUsername,
};
