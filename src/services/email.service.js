export const sendEmail = async (data) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email sent:", data);
      resolve({ success: true, message: "Message sent successfully!" });
    }, 1000);
  });
};
