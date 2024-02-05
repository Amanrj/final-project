const validateData = (finalData) => {
    if (finalData.oneway) {
      // Validate for one-way trip
      if (!finalData.from.trim() || !finalData.fromCity.trim() || !finalData.fromDate || !finalData.to.trim() || !finalData.toCity.trim()) {
        alert("Incomplete data for one-way trip");
        return false;
      }
    } else {
      // Validate for round trip
      if (!finalData.from.trim() || !finalData.fromCity.trim() || !finalData.fromDate || !finalData.to.trim() || !finalData.toCity.trim() || !finalData.toDate) {
        alert("Incomplete data for round trip");
        return false;
      }
  
      // Check if the return date is after the departure date
      if (new Date(finalData.toDate) <= new Date(finalData.fromDate)) {
        alert("Return date should be after departure date");
        return false;
      }
    }
  
    // Validate the number of persons
    if (finalData.person < 1 || finalData.person > 9) {
      alert("Number of persons should be between 1 and 9");
      return false;
    }
  
    // All validations passed
    return true;
  };
  export default validateData;