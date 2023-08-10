"use client";
import { useState } from "react";
import { storage, db } from "@/firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
export default function details() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [about, setAbout] = useState("");
  const [exp, setExp] = useState("");
  const [no, setNo] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageUplaod = async () => {
      if (image == null) {
        alert("image not chossen");
        return;
      }
      const imageRef = ref(storage, `doctor-image/${image.name + v4()}`);
      try {
        const upload = await uploadBytes(imageRef, image);
        alert("image uploaded");
      } catch (error) {
        console.error(error);
      }
    };
    imageUplaod();
    console.log("success");
  };
  return (
    <div className="flex flex-col border justify-center p-8">
      <form onSubmit={handleSubmit}>
        <label>Image</label> <br />
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <br />
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          className=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email">Email address:</label>
        <br />
        <input
          type="text"
          name="email"
          className=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Phone No:</label>
        <br />
        <input
          type="number"
          name="phone"
          className=""
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <br />
        <label>Address:</label>
        <br />
        <input
          type="text"
          name="address"
          className=""
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <br />
        <label>City:</label>
        <br />
        <input
          type="text"
          name="city"
          className=""
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <br />
        <label>State</label>
        <br />
        <input
          type="text"
          name="state"
          className=""
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <br />
        <br />
        <label>Country:</label>
        <br />
        <input
          type="text"
          name="country"
          className=""
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <br />
        <br />
        <label>About:</label>
        <br />
        <input
          type="text"
          name="name"
          className=""
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <br />
        <br />
        <label>Years of Experience</label>
        <br />
        <input
          type="number"
          name="exp"
          className=""
          value={exp}
          onChange={(e) => setExp(e.target.value)}
        />
        <br />
        <br />
        <label className="block font-medium text-gray-700">
          Patients Treated
        </label>
        <br />
        <select
          className="mt-1 block w-full px-4 py-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          value={no}
          onChange={(e) => setNo(e.target.value)}
        >
          <option value="<10">&lt;10</option>
          <option value="<50">&lt;50</option>
          <option value=">50">&gt;50</option>
        </select>
        {/* <label>Patients Consulted</label>
        <br />
        <input
          type="number"
          name="no"
          className=""
          value={no}
          onChange={(e) => setNo(e.target.value)}
        /> */}
        <br />
        <br />
        <button className="">Submit</button>
      </form>
    </div>
  );
}
