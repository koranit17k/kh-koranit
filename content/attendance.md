---
navigation:
  label: "Index"
  to: "/"
  title: "คู่มือการฝึกงาน"
---

| [**หน้าแรก**](/) | [**รับนักศึกษาฝึกงาน**](recruitment) | [**การติดตั้งซอฟแวร์**](installation) | [**โครงการคู่มือฝึกงาน**](kh-intern) | [**โครงการบันทึกเวลางาน**](attendance) | [**อภิธานศัพท์**](glossary) | [**เกี่ยวกับผู้จัดทำ**](about) |
| :--------------- | :----------------------------------- | :------------------------------------ | :----------------------------------- | :------------------------------------- | :-------------------------- | ------------------------------ |

# Project Attendance System

##### โครงการ ระบบบันทึกเวลาเข้า-ออกงาน

### 1.การสร้างติดตั้งซอฟต์แวร์

#### 1.1 MariaDB-Server

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
  # สร้าง User และฐานข้อมูล และให้สิทธิ์การใช้งาน ของ user นี้
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

#### 1.2 DBeaver

> โปรแกรมเข้าใช้งานดูแลระบบฐานข้อมูล ที่รองรับหลากหลายระบบ และมีเครื่องมือที่ใช้งานครบถ้วน

- [DBeaver Download](https://dbeaver.io/files/dbeaver-ce_latest_amd64.deb)

---

### 2. query sql command

- Select เลือกข้อมูลจาก table
- from เลือก table
- where เลือกข้อมูลที่ต้องการใน table
- group by เลือกข้อมูลที่จัดกลุ่ม เพื่อไม่ได้เกิดความนับซ้ำ ของข้อมูล
- order by เลือกข้อมูลที่ต้องการเรียงลำดับ
- Limit เลือกว่าต้องการข้อมูลกี่จำนวน

#### Glossary SQL

- String คำ Text
- Concat การ Merge table 2 table เข้าด้วยกัน

---

## 3.

---
