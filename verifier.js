export function verifyPass (pass){
  if (pass.length >= 8){
    return true;
  }
  return false;
}