import React from "react";
import { Link } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";

const Sidebar = (props) => {
  const data = [
    {
      section: "master",
      item: [
        {
          name: "Product",
          url: "/asd",
          icon: "/",
        },
        {
          name: "Business Partner",
          url: "/asd",
          icon: <MdPeopleAlt />,
        },
        {
          name: "Uom",
          url: "/asd",
          icon: "/",
        },
        {
          name: "Rekam Medis",
          url: "/asd",
          icon: "/",
          subitem: [
            {
              name: "Pasien",
              url: "/",
            },
            {
              name: "Dokter",
              url: "/",
            },
            {
              name: "Resep",
              url: "/",
            },
          ],
        },
        {
          name: "Inventory",
          url: "/asd",
          icon: "/",
          subitem: [
            {
              name: "Warehouse",
              url: "/",
            },
            {
              name: "Locator",
              url: "/",
            },
          ],
        },
        {
          name: "Toko",
          url: "/asd",
          icon: "/",
          subitem: [
            {
              name: "Tipe Pembayaran",
              url: "/",
            },
            {
              name: "Karyawan",
              url: "/",
            },
            {
              name: "Shift",
              url: "/",
            },
            {
              name: "User",
              url: "/",
            },
            {
              name: "Cabang",
              url: "/",
            },
          ],
        },
      ],
    },
    {
      section: "order",
      item: [
        {
          name: "Kebutuhan Barang",
          url: "/asd",
          icon: "/",
        },
        {
          name: "Pembelian",
          url: "/asd",
          icon: "/",
        },
        {
          name: "Barang Datang",
          url: "/asd",
          icon: "/",
        },
      ],
    },
    {
      section: "report",
      item: [
        {
          name: "report 1",
          url: "/asd",
          icon: "/",
        },
      ],
    },
  ];

  return (
    <div className="h-screen border-r border-slate-200">
      <div className="px-5 py-5">
        <ul>
          {data.map((row, index) => {
            return (
              <>
                <div
                  className="my-1 font-bold text-[#3629B7] first-letter:uppercase"
                  key={index}>
                  {row.section}
                </div>
                {row.item.map((row2, index2) => (
                  <li className="flex my-1 px-2 flex-row gap-2 items-center">
                    <div>{row2.icon}</div>
                    <div>{row2.name}</div>
                  </li>
                ))}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
