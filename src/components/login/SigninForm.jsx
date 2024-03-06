import { useState } from "react";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // handling data
    // building body
    const obj = {
      username: email,
      password: password,
    };
    console.log(obj);

    try {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
    console.log(email, password);
  }

  return (
    <section className=" w-[48%] px-4">
      <h1>Log in to your account</h1>
      <from className="flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Pawword</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
        </div>
        <button
          className=" bg-blue-700 text-white w-fit py-2 px-4 rounded-md "
          type="submit"
          onClick={handleSubmit}
        >
          Sign in
        </button>
      </from>
    </section>
  );
};

export default SigninForm;