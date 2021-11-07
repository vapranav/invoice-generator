import React from "react";

const Invoice = (props) => {
  let items = props.tableitems.items;
  return (
    <div class='font-montserrat bg-jager-gray h-full '>
      <div class='flex justify-between'>
        <div class='pl-4 text-6xl text-white font-extrabold bg-gradient-to-r from-jager-black to-jager-blue'>
          INVOICE &nbsp;{" "}
        </div>
        <div class='mr-4'>
          <div class='text-black text-sm font-bold'>CONTACT</div>
          <div class='text-jager-blue text-base font-extrabold'>
            Mohammed Jafer
          </div>
          <div class='text-jager-blue text-base font-bold'>9849379739</div>
        </div>
      </div>
      <div class='flex justify-between mt-4'>
        <div>
          <div class='pl-4 text-normal text-black font-medium'>BILLING TO</div>
          <div class='pl-4 text-2xl text-normal text-black font-bold'>
            {props.companyName}
          </div>
        </div>
        <div class='mr-4'>
          <div class='text-black text-sm font-medium'>Date: {props.date}</div>
          <div class='text-jager-gray text-base font-bold'>Mohammed Jafer</div>
          <div class='text-jager-gray text-base font-medium'>9849379739</div>
        </div>
      </div>
      <div class='flex justify-between'>
        <div class='pl-4 text-normal text-black w-1/2 font-sm'>
          {props.address}
        </div>
      </div>
      <table class='table-fixed m-auto'>
        <thead>
          <tr>
            <th
              class='px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider'
            >
              Item
            </th>
            <th
              class='px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider'
            >
              Price
            </th>
            <th
              class='px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider'
            >
              QTY
            </th>
            <th
              class='px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider'
            >
              Revisions
            </th>
            <th
              class='px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider'
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td class='px-6 pt-4 whitespace-nowrap'>{item.itemname}</td>
              <td class='px-6 pt-4 whitespace-nowrap'>{item.itemprice}</td>
              <td class='px-6 pt-4 whitespace-nowrap'>{item.itemqty}</td>
              <td class='px-6 pt-4 whitespace-nowrap'>{item.itemrevisions}</td>
              <td class='px-6 pt-4 whitespace-nowrap'>{item.itemtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class='relative h-screen bg-jager-gray'></div>
    </div>
  );
};

export default Invoice;
