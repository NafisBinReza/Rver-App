export const convertToBengali = (digits: number | string) => {
  let res = "";
  digits.toString().split("").forEach(digit=> {
    switch(digit){
      case "1":
        res+="১"
        break;
      case "2":
        res+="২"
        break;
      case "3":
        res+="৩"
        break;
      case "4":
        res+="৪"
        break;
      case "5":
        res+="৫"
        break;
      case "6":
        res+="৬"
        break;
      case "7":
        res+="৭"
        break;
      case "8":
        res+="৮"
        break;
      case "9":
        res+="৯"
        break;
      case "0":
        res+="০"
        break;
      default:
        res+=digit
    }
  })
  return res;
}