---
navigation:
  label: "Installation"
  to: "installation"
---

# Software & Installation Guide

> คู่มือสำหรับติดตั้งซอฟต์แวร์ที่จำเป็นสำหรับการทำงาน / ฝึกงาน

- ตรวจเช็คความเร็วคอมพิวเตอร์ [Online Benchmark - Speed Battle](https://speed-battle.com)
  score **1,000-2,500**
- ปรับแต่งระบบ Windows 11 ให้ทำงานเท่าที่จำเป็น [Win11 optimizer](https://github.com/hellzerg/optimizer?tab=readme-ov-file)
- ติดตั้ง RemoveWindowsAI เพื่อปิดการทำงานของ Win11-AI [RemoveWindowsAI](https://github.com/zoicware/RemoveWindowsAI)

---

## 1. Linux OS

### Elementary OS 8

> สามารถติดตั้งแค่ระบบ OS พื้นฐาน สำหรับใช้เป็นเซิร์ฟเวอร์,
> การอัพเดทซอฟแวร์ผ่าน apt ที่ไว้ใจได้ ปลอดภัย,
> เป็นระบบ OS ที่โอเพนซอร์ส 100% Free ครบเครื่องและนิยมใช้สูง

- [Elementary OS 8 ](https://elementary.io/)
- ติดตั้งโดยใช้ Flash Drive
- ใช้คำสั่ง sudo เพื่อใช้สิทธิ์ Administration ในการใช้คำสั่งใน Terminal Consoles
- สำหรับเครื่องผู้ใช้งานทั่วไป เลือกใช้
  - Mint (Windows like)
  - Elementary OS (MacOS like)
  - Ubuntu (Android like)

```bash
  # ติดตั้ง xfonts-thai รองรับรูปแบบอักษรไทยบนอินเตอร์เน็ต
  sudo apt install xfonts-thai
  # ติดตั้ง curl git เพื่อใช้ในการ download
  sudo apt install curl git
  # ดูรายละเอียดของระบบ
  hostnamectl
```

### Software Update

```bash
  #อัพเดทรายการซอฟแวร์ที่มีเวอร์ชั่นใหม่
  sudo apt update
  #ติดตั้งโปรแกรมที่ปรับปรุง
  sudo apt upgrade -y
```

---

## 2. Node.js

> JavaScript Runtime Environment,
> Node24 [https://nodejs.org/en/download]

```bash
  # ดาวน์โหลด Node Install Script
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
  # ติดตั้ง nvm
  \. "$HOME/.nvm/nvm.sh"
  # ติดตั้ง Node.js 24
  nvm install 24
  # ติดตั้ง pnpm
  corepack enable pnpm
  # รัน Local Server
  pnpm run dev
```

---

## 3. Google Antigravity

> (VSCode, VSCodium) + AI + Google API [Antigravity Download](https://antigravity.google/download/linux)

- เข้าใช้ด้วย Google Account

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

## 4. Git Configuration

> ก่อนเริ่มใช้งาน ตั้งค่า Git ให้จดจำรหัสผ่าน (Personal Access Token) เพื่อไม่ต้องกรอกทุกครั้ง

```bash
  # ตั้งค่าชื่อผู้ใช้และอีเมล (เปลี่ยนเป็นของตัวเอง)
  git config --global user.name "Your Name"
  git config --global user.email "your_email@example.com"

  # ตั้งค่าให้จำรหัสผ่านถาวร
  git config --global credential.helper store
```

### การใช้งานครั้งแรก

เมื่อทำการ `git push` หรือ `git pull` ครั้งแรก ระบบจะถาม Username และ Password:

1. **Username**: ใส่ชื่อ GitHub Username ของคุณ
2. **Password**: ใส่รหัสผ่านสำหรับโปรเจ็คส่วนตัว หรือใช้ **Personal Access Token (PAT)** (เช่น `ghp_...`)

## 5. MariaDB-Server

> ระบบจัดการฐานข้อมูล MariaDB เป็นโอเพนซอร์ส 100% Free และใช้งานได้เสมือนกับ MySQL

```bash
  # ติดตั้งMariaDB Server
  sudo apt install mariadb-server
  # ตรวจสอบสถานะ MariaDB Server
  sudo systemctl status mysql
```

- สร้าง User สิทธิการใช้งาน และฐานข้อมูล

```bash
  # เริ่มเข้าใช้งาน MariaDB ผ่าน terminal
  sudo mysql
  ...
  CREATE USER 'username'@'%' IDENTIFIED BY 'password';
  CREATE DATABASE database_name;
  GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'%';
  FLUSH PRIVILEGES;
  ...
```

- ตั้งค่าให้ MariaDB Server รองรับ client จากเครือข่ายโดยตรง

```bash
  sudo nano /etc/mysql/mariadb.conf.d/50-server.cnf
  ...
    # bind-address = 127.0.0.1
  ...
```

## 6. DBeaver

> โปรแกรมเข้าใช้งานดูแลระบบฐานข้อมูล ที่รองรับหลากหลายระบบ และมีเครื่องมือที่ใช้งานครบถ้วน

- [DBeaver Download](https://dbeaver.io/files/dbeaver-ce_latest_amd64.deb)
