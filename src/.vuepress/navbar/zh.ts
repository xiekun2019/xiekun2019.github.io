import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { 
    text: "学习笔记", 
    icon: "note",
    children: [
      {
        text: "学习笔记",
        icon: "note",
        link: "/note/",
        activeMatch: "^/kernel/$",
      },
      {
        text: "Linux 内核",
        icon: "linux",
        link: "/kernel/",
        activeMatch: "^/kernel/$",
      },
      {
        text: "C/C++ 笔记",
        icon: "code",
        link: "/cpp/",
        activeMatch: "^/cpp/$",
      },
      {
        text: "嵌入式笔记",
        icon: "bit",
        link: "/embedded/",
        activeMatch: "^/embedded/$",
      }
    ]
  },
  {
    text: "随笔",
    icon: "edit",
    prefix: "/posts/",
    children: [
      { text: "随笔", link: "", icon: "note", activeMatch: "^/posts/$" },
    ],
  },
  {
    text: "软件教程",
    icon: "software",
    prefix: "/software/",
    children: [
      {
        text: "软件教程",
        icon: "software",
        link: "",
        activeMatch: "^/software/$",
      },
      "git/",
    ]
  },
]);
