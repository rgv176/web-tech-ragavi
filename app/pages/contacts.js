import Link from "next/link";
import Layout from "../components/Layout.js";

function Contact() {
  return (
    <>
      <Layout>
        <h1 class="w-full px-20 py-4 text-2xl underline underline-offset-8 ">
          Contacts
        </h1>
        <br></br>
        <p class="px-10 py-2">
          Lorem pisum dolor sit amet, consectetur adpisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscpit laboriosam,
          nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br></br>
        <div class="mb-6 px-10">
          <label>
            <span>Email </span>
            <input
              type="text"
              name="email"
              class="w-1/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
            />
          </label>
        </div>
        <br></br>
        <div class="mb-6 px-10">
          <label>
            <span>First Name </span>
            <input
              type="text"
              name="firstname"
              class="w-1/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
            />
          </label>
        </div>
        <br></br>
        <div class="mb-6 px-10">
          <label>
            <span>Last Name </span>
            <input
              type="text"
              name="lastname"
              class="w-1/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
            />
          </label>
        </div>
        <br></br>
        <div class="mb-6 px-10">
          <label>
            <span>Phone Number </span>
            <input
              type="text"
              name="number"
              class="w-1/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
            />
          </label>
        </div>
        <br></br>
        <div class="mb-6 px-10">
          <span>Problem: </span>
          <textarea
            name="problem"
            class="w-6/12 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            placeholder="Please tell us the problem in a few sentences"
          />
        </div>
        <br></br>
        <div class="mb-6 px-10">
          <button
            type="submit"
            class="w-6/12 px-2 py-4 text-white bg-slate-600 rounded-md  focus:bg-slate-500 focus:outline-none "
          >
            Submit
          </button>
        </div>
      </Layout>
    </>
  );
}

export default Contact;
