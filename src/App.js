import React from "react";
import Pdf from "react-to-pdf";
import "./index.css";
import Invoice from "./invoice";
import { useState } from "react";
import { FaLinkedinIn, FaBehance, FaInstagram } from "react-icons/fa";
const ref = React.createRef();

const App = () => {
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [table, setItem] = useState({
    item: {
      itemname: "",
      itemprice: "",
      itemqty: "",
      itemrevisions: "",
      itemtotal: "",
    },
    items: [],
    company: "",
    date: " ",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      item: { ...prevState.item, [name]: value },
      items: [...prevState.items],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setItem((prevState) => ({
      items: [...prevState.items, prevState.item],
      item: {
        itemname: "",
        itemprice: "",
        itemqty: "",
        itemrevisions: "",
        itemtotal: "",
      },
    }));
  };
  return (
    <div class='flex flex-row justify-center ml-4'>
      <div>
        <h1 class='my-4 text-2xl font-medium text-jager-blue text-center'>
          Jager Invoice Generator
        </h1>
        <input
          class='m-2 shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Company name'
          onChange={(e) => {
            const val = e.target.value;
            setCompany((prev) => val);
          }}
          required
        />
        <input
          class='m-2 shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Date'
          onChange={(e) => {
            const val = e.target.value;
            setDate((prev) => val);
          }}
          required
        />
        <input
          class='m-2 shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Address'
          onChange={(e) => {
            const val = e.target.value;
            setAddress((prev) => val);
          }}
          required
        />
        <div class='m-2 text-white'>
          {" "}
          Fill the below boxes and click "Add" to add a row in the table.{" "}
        </div>
        <form action='' method=''>
          <input
            required
            type='text'
            class='shadow appearance-none border rounded w-1/4 py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='itemname'
            placeholder='Item Name'
            onChange={handleChange}
            value={table.item.itemname}
          />
          <input
            type='text'
            class='shadow appearance-none border rounded w-1/4 m-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='itemprice'
            placeholder='Item Price'
            onChange={handleChange}
            value={table.item.itemprice}
            required
          />
          <input
            type='text'
            name='itemqty'
            class='shadow appearance-none border rounded w-1/4 m-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Item Qty'
            onChange={handleChange}
            value={table.item.itemqty}
            required
          />
          <input
            type='text'
            name='itemrevisions'
            class='shadow appearance-none border rounded w-1/4 m-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Revision'
            onChange={handleChange}
            value={table.item.itemrevisions}
            required
          />
          <input
            type='text'
            name='itemtotal'
            class='shadow appearance-none border rounded w-1/4 m-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Total'
            onChange={handleChange}
            value={table.item.itemtotal}
            required
          />
          <button
            type='submit'
            class='mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={handleSubmit}
          >
            Add
          </button>
        </form>
        <Pdf targetRef={ref} filename='invoice.pdf'>
          {({ toPdf }) => (
            <div class='flex flex-col items-center justify-center'>
              <button
                class='my-4 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                onClick={toPdf}
              >
                Generate PDF
              </button>
              <div class='text-white font-medium'>
                ??? Check out preview on the side ????
              </div>
            </div>
          )}
        </Pdf>
      </div>
      <div
        style={{ height: 1200, width: 1650 }}
        class='bg-jager-gray relative border-1 border-black'
        ref={ref}
      >
        <div class='relative text-jager-gray bg-jager-gray'>Hello</div>
        <Invoice
          companyName={company}
          date={date}
          address={address}
          tableitems={table}
        />
        <div class='absolute bottom-40 right-0 w-5/6 h-20 bg-gradient-to-r from-jager-black to-jager-blue flex flex-row items-center'>
          <div class='mx-4 rounded-full h-14 w-14 bg-jager-gray flex justify-center items-center'>
            <FaBehance class='text-xl text-jager-blue' />
          </div>
          <div class='mx-4 rounded-full h-14 w-14 bg-jager-gray flex justify-center items-center'>
            <FaLinkedinIn class='text-xl text-jager-blue' />
          </div>

          <div class='mx-4 rounded-full h-14 w-14 bg-jager-gray flex justify-center items-center'>
            <FaInstagram class='text-jager-blue text-xl' />
          </div>
          <div class='text-2xl font-normal text-white tracking-widest'>
            /HOWLDRAWS{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
