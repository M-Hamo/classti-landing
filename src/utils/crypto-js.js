import CryptoJS from "crypto-js";

const encryptSecretKey = import.meta.env.VITE_ENCRYPT_KEY;

export const encryptData = (data) => {
  try {
    return CryptoJS.AES.encrypt(JSON.stringify(data), encryptSecretKey).toString();
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const decryptData = (data) => {
  try {
    const bytes = CryptoJS.AES.decrypt(data, encryptSecretKey);
    if (bytes.toString()) return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (err) {
    console.error(err);
    return {};
  }
};
