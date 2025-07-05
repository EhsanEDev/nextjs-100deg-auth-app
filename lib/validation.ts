// Validate Iranian mobile number
export function validateMobileNumber(phone: string) {
  return /^(\+98|0)?9\d{9}$/.test(phone);
}