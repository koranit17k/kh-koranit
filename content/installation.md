---
navigation:
  label: "Installation"
  to: "installation"
---

# Software & Installation Guide

คู่มือสำหรับติดตั้งซอฟต์แวร์ที่จำเป็นสำหรับการทำงาน / ฝึกงาน

---

## Linux OS

### OS Installation

- ต้องมีชื่อผู้ใช้ root เสมอ แต่ไม่ตั้งรหัสผ่าน ให้สร้างผู้ใช้ ในชื่อตนเอง รันคำสั่งผ่าน sudo
- ไดเร็คทอรี่ /home/username เป็นที่เก็บข้อมูลส่วนตัวของผู้ใช้
- /etc เป็นที่เก็บข้อมูลติดตั้งระบบ

```bash
  # ดูรายละเอียดของระบบ
  hostnamectl
```

### Software Update

```bash
  #อัพเดทรายการซอฟแวร์ที่มีเวอร์ชั่นใหม่
  sudo apt update
  #ติดตั้งโปรแกรมที่ปรับปรุง
  sudo apt upgrade -y
  #ติดตั้งโปรแกรมพื้นฐาน
  sudo apt install curl git
```

### Linux for developer's PC

- ParrotOS 7.0 (Developer's PC)
  - Minimal footprint, Resource efficient
  - Debian based Linux distribution
  - Clean & clear UI Look&Feel like macOS
  - Security focused
- Debian 13 (Server)
  - Server Environment
  - Minimal footprint, Resource efficient
  - UI: XFCE (customizable and light weight)

---

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

## Google Antigravity

Antigravity Download ติดตั้งบน [deb-based Linux distributions (eg. Debian, Ubuntu)](https://antigravity.google/download/linux)

```bash
  # โหลด key และเพิ่ม repo apt package
  sudo mkdir -p /etc/apt/keyrings
  curl -fsSL https://us-central1-apt.pkg.dev/doc/repo-signing-key.gpg | \
    sudo gpg --dearmor --yes -o /etc/apt/keyrings/antigravity-repo-key.gpg
  echo "deb [signed-by=/etc/apt/keyrings/antigravity-repo-key.gpg] https://us-central1-apt.pkg.dev/projects/antigravity-auto-updater-dev/ antigravity-debian main" | \
    sudo tee /etc/apt/sources.list.d/antigravity.list > /dev/null
  # อัพเดทเวอร์ชั่นล่าสุดและติดตั้ง antigravity
  sudo apt update
  sudo apt install antigravity
```

<div class="flex justify-center">
  <img src="/images/screen-001.png" style="width:auto; height:auto;" alt="Antigravity" />
</div>

---
