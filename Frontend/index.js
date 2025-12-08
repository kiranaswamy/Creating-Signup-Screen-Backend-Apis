document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    try {
      const res = await axios.post("http://localhost:3000/user/add", {
        name,
        email,
        password,
      });

      alert(res.data.message); 
      form.reset();
      
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong";
      alert(msg);
    }
  });
});
