export const namePattern = /^[A-zÀ-ú]+(([',. -][A-zÀ-ú ])?[A-zÀ-ú]*)*$/;
export const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const phonePattern =
  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
export const addressPattern = /^[^_!¡?÷?¿\/\+=@#$%ˆ^&*(){}|~<>;:[\]]{5,}$/;
export const zipCodePattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
