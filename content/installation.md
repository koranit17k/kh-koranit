---
navigation:
  label: "Installation"
  to: "installation"
---

# Software & Installation Guide

คู่มือสำหรับติดตั้งซอฟต์แวร์ที่จำเป็นสำหรับการทำงาน / ฝึกงาน

---

## Linux (Ubuntu / Debian)

```bash
  #อัพเดทรายการซอฟแวร์ที่มีเวอร์ชั่นใหม่
  sudo apt update
  #ติดตั้งโปรแกรมที่ปรับปรุง
  sudo apt upgrade -y
  #ติดตั้งโปรแกรมพื้นฐาน
  sudo apt install curl git
```

for client use Elementary OS 8

## Node.js

Node24 ติดตั้งบน Linux (Ubuntu / Debian) [https://nodejs.org/en/download]

```bash
  # ดาวน์โหลด Node Install Script
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
  # ติดตั้ง nvm
  \. "$HOME/.nvm/nvm.sh"
  # ติดตั้ง Node.js 24
  nvm install 24
  # ติดตั้ง pnpm
  corepack enable pnpm
```

---

## Antigravity (Linux)

```bash
  # ติดตั้ง Antigravity

```

---
