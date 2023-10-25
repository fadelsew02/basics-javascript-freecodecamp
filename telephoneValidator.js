function telephoneCheck(str) {
    // Regular expression to match valid US phone number formats
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  
    return phoneRegex.test(str);
  }
  