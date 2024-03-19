import { Content, SideMenu } from "../components";
import { useState } from "react";

export default function Home() {
  const [cont, setCont] = useState("");
  let sideMenus = [
    {
      title: "",
      buttonText: "",
      content: [
        {
          title: "",
          text: "",
          isVerified: false,
        },
        {
          title: "",
          text: "",
          isVerified: false,
        },
        {
          title: "",
          text: "",
          isVerified: false,
        },
      ],
    },
    {
      title: "",
      buttonText: "",
      content: [
        {
          title: "",
          text: "",
          isVerified: false,
        },
        {
          title: "",
          text: "",
          isVerified: false,
        },
        {
          title: "",
          text: "",
          isVerified: false,
        },
      ],
    },
    {
      title: "",
      buttonText: "",
      content: [
        {
          title: "",
          text: "",
          isVerified: false,
        },
        {
          title: "",
          text: "",
          isVerified: false,
        },
        {
          title: "",
          text: "",
          isVerified: false,
        },
      ],
    },
  ];
  return (
    <main>
      {sideMenus.map((menu) => (
        <div>
          <div>
            <SideMenu menu={menu} setCont={setCont} />
          </div>
          <div></div>
        </div>
      ))}
    </main>
  );
}
