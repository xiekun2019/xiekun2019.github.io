---
icon: edit
date: 2022-01-09
category:
  - Linux 内核
tag:
  - Linux
  - busybox
---

# 从源码编译 Linux-4.9 内核并运行一个最小的busybox文件系统
| 原文地址：https://www.bilibili.com/read/cv11271232?spm_id_from=333.999.0.0

## 一、开发环境

开发环境：ubuntu 14.04

linux源码版本：linux-4.9.229

busybox源码版本：busybox-1.30.0

qemu-system-x86_64版本：2.0.0

## 二、下载 linux 内核源码并编译

linux源码下载地址：

[https://mirrors.edge.kernel.org/pub/linux/kernel/](https://mirrors.edge.kernel.org/pub/linux/kernel/)

我选择的版本是：4.9.229

[https://cdn.kernel.org/pub/linux/kernel/v4.x/linux-4.9.229.tar.xz](https://cdn.kernel.org/pub/linux/kernel/v4.x/linux-4.9.229.tar.xz)

下载到本地，解压，然后进入 linux-4.9.229 目录：

1. 指定硬件体系架构。

为了减少安装编译器的过程，我在本例中使用的是 x86，因为我的开发环境就是x86。如果你要编译arm 的内核，则指定 ARCH=arm 且需要安装交叉编译器。

```bash
export ARCH=x86
```

2. 配置 board config，此处配置为 x86_64_defconfig。好了，我们点好菜了，菜单就是x86_64_defconfig