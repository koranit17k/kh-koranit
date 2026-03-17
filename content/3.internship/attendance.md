---
title: attendance
description: Welcome to Docus theme documentation.
navigation:
  icon: i-lucide-calendar-clock
seo:
  title: attendance
  description: Discover how to create, manage, and publish documentation effortlessly with Docus.
---

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

#### Vitest

> Vitest เป็นเครื่องมือสำหรับทดสอบโค้ด ที่มีความเร็วสูง และยืดหยุ่น ถูกนำใช้มาแทน testcase แทน sql

- [Vitest Download](https://vitest.dev/guide/)
- รันเทสด้วยคำสั่ง pnpm test 

---

### 2. query sql command

- Select เลือกข้อมูลจาก table
- from เลือก table
- where เลือกข้อมูลที่ต้องการใน table
- group by เลือกข้อมูลที่จัดกลุ่ม เพื่อไม่ได้เกิดความนับซ้ำ ของข้อมูล
- order by เลือกข้อมูลที่ต้องการเรียงลำดับ
- Limit เลือกว่าต้องการข้อมูลกี่จำนวน
- Union ใช้รวมข้อมูลจาก table 2 table เข้าด้วยกัน ไม่นับข้อมูลซ้ำ
- Union All ใช้รวมข้อมูลจาก table 2 table เข้าด้วยกัน นับข้อมูลซ้ำ
- having ใช้คล้าย where เหมือน filter ข้อมูล
- if ใช้กำหนดเงื่อนไข
- Tmestampdiff ใช้คำนวนเวลาที่ต่างกัน
- group_concat ใช้รวมข้อมูลจาก >= 1 column เข้าด้วยกัน ไม่นับข้อมูลซ้ำ
- Substring index จะเอาข้อมูลกี่ส่วน และนับจากด้านไหน 1 คือ นับจากด้านหน้า ,-1 คือ นับจากด้านหลัง, 2 คือ นับจากด้านหน้า 2 ส่วน
- case when ใช้กำหนดเงื่อนไข คล้ายๆกับ if ถ้าเงื่อนไขตรงให้แสดงตามเงื่อนไข เช่น ถ้าคะแนน 80 ขึ้นไปให้แสดง A หรือ ถ้าคะแนน 60 ขึ้นไปให้แสดง B
- xor จะนำมาใช้คล้ายๆ or แต่เป็นจริง(หยิบมาใช้)เมื่อ “ต่างกัน” เช่น (a IS NULL) XOR (b IS NULL)
  ✔️ a ว่าง แต่ b ไม่ว่าง
  ✔️ b ว่าง แต่ a ไม่ว่าง
  (เอาแค่ต่างกัน ไม่เอาเหมือนกัน)
- procedure ตัวจัดเก็บ query ที่ใช้บ่อยๆ เช่นการ insert และ update ข้อมูลรายวัน
  วิธีใช้ CALL procedure_name();
- truncate ล้างข้อมูลใน table

#### Glossary SQL

- String คำ Text
- Concat การ Merge table 2 table เข้าด้วยกัน
- least การเลือกข้อมูลที่น้อยที่สุด
- coalesceการเลือกข้อมูลที่ตรงกับเงื่อนไขใน วงเล็บก่อน
- greatest การเลือกข้อมูลที่มากที่สุด

---

## Full detail: https://github.com/koranit17k/attendance
### ขั้นตอนการทำงาน
- กำหนดหัวข้อโปรเจค ระบบบันทึกเวลาเข้า-ออกงาน
- กำหนดรายละเอียดเงื่อนไข เวลาเข้า-ออกงาน
- ได้รับ database และสร้าง database  รวมถึง user
- เช็คข้อมูล กำหนดกลุ่มของข้อมูล (เคสที่คิดเวลาทำงานได้(1.เคสเขียว), เคสทำงานครึ่งวัน(2.เคสเหลือง) และ เคสที่ไม่สามารถคิดเวลาได้(3.เคสแดง))
- เช็คความถูกต้องของข้อมูล
- insert พนักงานที่ยังไม่มีใน employee table และ update ข้อมูลพนักงาน เช่น รหัสพนักงาน,timecode 
- update พนักงานที่ไม่ได้มาทำงานแล้ว(ลาออก) ให้ timecode เป็น 0  
- คำนวณเวลางาน รวมถึง สาย และ OT
- จัดทำ test case scenarios เพื่อทดสอบความถูกต้องของข้อมูล ด้วย sql หรือผ่าน Vitest โดยการเขียนโปรแกรม ใช้ vitestเช็ค การคำนวนเวลางาน สาย และ OT ของ view vAttendance
- ทดลอง test case โดยต้องผ่าน 100% หากใช้ (Vitest รันผ่าน pnpm test att)
- สร้าง attendance_clean table เพื่อใช้ในการปรับแก้ข้อมูล
- จัดทำ procedure เพื่อใช้ในการคำนวณเวลางาน
- จัดทำ event เพื่อใช้ในการ insert และ update ข้อมูลใน attendance table โดยใช้ procedure แบบ auto-run (ทำงานด้วยตัวเอง) เพื่อรัน 1 วัน ต่อครั้ง และรันทุกวัน
- จัดทำ report 
- จัดทำระบบการเรียกใช้ report ผ่าน api โดยอ้างอิงจาก

## Database Project Structure

```
./attendance
  ├── README.md                  # README for Dev & Ai
  ├──/fonts                      # Thai fonts used in report
  ├──/docs                       # Content
  │   ├── 1.workflow.md          # Workflow
  │   ├── 2.reportdetails.md     # Report Details
  │   ├── 3.exampledata.md       # Example Data
  │   ├── 4.vitest.md            # how to use test
  │   └── 5.workflowreport.md    # Report workflow
  ├──/report                     # Jasper Report
  │   ├── *.jrxml                # JRXML Source Files
  │   ├── *.jasper               # Jasper Report Files
  │   ├── A01.jrxml              # Check Daily Time
  │   ├── A02.jrxml              # Check summary persoanl
  │   └── A03.jrxml              # Check monthly summary
  ├──/sql                        # SQL Script
  │   ├── /sqltest               # test accuracy by sql
  |   |   ├── 1.seed_test_data.sql   # Create test data
  │   |   ├── 2.check_results.sql    # Check test data
  │   |   └── 3.cleartest.sql        # Clear test data
  │   ├── /storage                           # Storage sql
  │   |   ├── insert_attendance.sql          # insert time data 
  │   |   ├── insert_and_clean_emp.sql  # insert new employee, update all emp to 1, clean who aren't working.
  │   |   ├── myviewtranslate.sql            # calculate view before myview
  │   |   └── update_attendance.sql          # update calculate view to attendance
  │   ├── 1.database.sql         # Create Database & User
  │   ├── 2.table.sql            # Create Table
  │   ├── 3.view.sql             # Create View
  │   ├── 4.myview.sql           # Create view for use calculator
  │   ├── 5.procedure.sql        # Procedure sql before autorun
  │   ├── 6.setup_autorun.sql    # Setup autorun
  │   └── 7.check_autorun.sql    # Check autorun
  ├──/script                     # Script
  │   ├── restore.sh             # Restore Database
  │   ├── runtest.sh             # runtest by sql
  │   ├── backup.sh              # Backup Database
  │   └── copyreport.sh          # copy-paste report.jasper file for use 
  ├──/test                       # accuracy test
  │   ├── sum.js                 # mock-up for test
  │   ├── sum.test.js            # mock-up for test
  │   └── att.tes.js             # attendance test
  ├──.prettierrc                 # Prettier config format
  └──.gitignore                  # don't commit this file
```

## 3. Attendance Rules

## การคำนวณเวลางาน

> การสแกนเวลางานไม่ระบุเข้าหรือออก ใช้ช่วงเวลาสแกนเป็นตัวกำหนด พิจารณาแค่หลักวินาที

- วันทำงาน จันทร์ - เสาร์
- วันหยุด ทุกวันอาทิตย์ หรือวันหยุดประจำปี (13 วัน)
- เวลางานประจำวัน 8:00 - 17:00
- ช่วงเวลาสแกน แยกแยะเข้า/ออกตามช่วงเวลาต่างๆ _ถ้ามีหลายครั้ง ใช้ครั้งสุดท้าย/max_
  - morning เวลาเข้า เช้า 06:00 - 10:00
  - lunch out เวลา พักเที่ยง 11:00 - 13:30 _หลายครั้ง ใช้ครั้งแรก/min_
  - lunch in เวลา กลับเที่ยง 11:30 - 15:00
  - evening เวลาออก เย็น 16:00 - 18:00
  - night เวลาออก ค่ำ 19:00 - 24:00
  - early เวลาออก ข้ามวัน 00:00 - 06:00 ใช้วันที่เมื่อวาน
- หักเวลาพักเที่ยง 1 ชั่วโมง บังคับสแกนเที่ยง ไม่ว่าจะพักหรือไม่
  > มีพักเที่ยง 2 รอบ 11:00 และ 12:00
  - ไม่สแกนเที่ยง - หักเพิ่ม 4 ชั่วโมง
  - สแกนเที่ยงไม่ครบ - หักเพิ่ม 2 ชั่วโมง
  - สแกนออกเข้าเที่ยงเกิน - หักเพิ่มตามนาทีสาย
- เวลา OT คิดเมื่อ เข้าเช้าและมีเวลาออก ข้ามวัน หรือค่ำ
  - หักช่วงพักเลิกงาน 1 ชั่วโมง เริ่มหลัง 18:00
  - เวลา OT ที่คำนวณได้ อาจจะจ่าย OT หรือไม่ขึ้นอยู่กับผู้อนุมัติ

### <span style="color:green">1 กรณีเต็มวัน</span> (มีเวลาเข้างาน และ มีเวลาออกงาน)

> คำนวณเวลางาน เวลาสาย และ OT

- เงื่อนไข มีเวลาเข้าตอนเช้า และ (มีเวลาออกเย็น หรือ ค่ำ หรือ ข้ามวัน)
- (morning is not null and not (evening is null and night is null and early is null))

### <span style="color:yellow">2 กรณีครึ่งวัน</span> (มีแค่เวลาเข้า หรือ มีแค่เวลาออก) และ มีเวลาพักเที่ยง

> ตรวจสอบการลา ครึ่งวัน จากข้อมูลใบลาประเภทต่างๆ

- เงื่อนไข มีการสแกนช่วงเที่ยง และ (มีเวลาเข้าตอนเช้า หรือ-xor (มีเวลาออกเย็น หรือ ค่ำ หรือ ข้ามวัน))
- (lunch_out is not null or lunch_in is not null) and
  (morning is not null xor not (evening is null and night is null and early is null))
- ใช้ xor เพื่อตัดกรณีที่ (ไม่เช้า และ ไม่มีออกงาน)

### <span style="color:red">3 กรณีอื่นๆ</span> (ไม่นับวันเวลาทำงาน)

> ตรวจสอบการลาเต็มวันทุกประเภท หรือไม่ก็นับว่าเป็นการขาดงาน

- เงื่อนไข นอกเหนือจากแบบเต็มวัน หรือ ครึ่งวัน บันทึกสถานะเป็นขาดงาน
- เช็คข้อมูลการลา ถ้ามี บันทึกประเภทการลา

### การแก้ไขปรับปรุง เวลางานจากเจ้าหน้าที่

> เจ้าหน้าที่ สามารถแก้ไขวันเวลาในตาราง `attendance`

- ข้อมูลเวลาสแกนจะถูกย้ายไปยังตาราง `attendance`
- มีการประมวลผลเวลางานจากตาราง `attendance`
- มี event ประจำวันที่ย้ายเวลาและทำการประมวลผลเวลางาน อัตโนมัติทุกวัน
- เมื่อมีการแก้ไขโดยเจ้าหน้าที่ ต้องเรียกประมวลผลเวลางานเฉพาะกิจทุกครั้ง

## รายงานเวลางาน แยกบริษัท

### สรุปเคสการคำนวณเวลาทำงาน (แบ่ง 3 เคสใหญ่)

---

### ✅ เคสเขียว — ทำงานปกติ (08:00–17:00)

- มีการสแกน **เข้า** และ **ออก** ครบถ้วน
- เวลาการทำงานอยู่ในช่วงเวลาที่บริษัทกำหนด
- การพักเที่ยงมีความชัดเจน
  - ไม่สแกนพักเที่ยง → ระบบหักเวลาพัก 1 ชั่วโมงอัตโนมัติ
  - หรือสแกนพักเที่ยง **เป็นคู่** (ออกพักและกลับจากพัก)
- ข้อมูลครบถ้วน ชัดเจน และสามารถคำนวณเวลาทำงานได้โดยตรง

**สรุป:** พนักงานสแกนเข้างานและออกงานครบถ้วน มีข้อมูลพร้อมสำหรับการคำนวณ

<details>
<summary>กดเพื่อดูคำสัง SQL เคสเขียว</summary>

```sql
-- เคสเขียว
select day_case, lunch_case, night_case, count(*) as count
from vAttendance
where dateAt between '2025-01-01' and '2025-12-31' and
      morning is not null and
          (evening is not null || night is not null || early is not null)
group by day_case, lunch_case, night_case;
```

</details>

---

### 🟡 เคสเหลือง — ทำงานครึ่งวัน / ข้อมูลไม่ครบ

- มีการทำงานครึ่งวัน หรือ ข้อมูลไม่ครบถ้วน
  - เช้าอย่างเดียว หรือ บ่ายอย่างเดียว แต่มีการสแกนเที่ยง
- ไม่สามารถยืนยันการทำงานเต็มวันได้

**สรุป:** พนักงานทำงานครึ่งวัน จึงต้องตรวจสอบใบลา หรือสอบถามข้อมูลเพิ่มเติม

<details>
<summary>กดเพื่อดูคำสัง SQL เคสเหลือง</summary>

```sql
-- เคสเหลือง
select day_case, lunch_case, night_case, count(*) as count
from vAttendance
where dateAt between '2025-01-01' and '2025-12-31' and
    (
    (lunch_out is not null or lunch_in is not null)  and
    (morning is null xor  (evening is null and night is null and early is null))
    )
group by day_case, lunch_case, night_case;
```

</details>

---

### 🔴 เคสแดง — คำนวณยาก ต้องแก้ไขข้อมูล

- ข้อมูลการสแกนผิดปกติหรือไม่เป็นรูปแบบ
- มีสแกนเพียงช่วงเวลาเดียว หรือไมได้สแกนในช่วงเวลางาน
- ข้อมูลขาดหายหรือมีความคลุมเครือสูง

**สรุป:** ไม่สามารถนำข้อมูลไปคำนวณได้อย่างถูกต้อง จึงต้องมีการตรวจสอบและแก้ไขข้อมูลก่อนใช้งาน

<details>
<summary>กดเพื่อดูคำสัง SQL เคสแดง</summary>

```sql
-- เคสแดง
select day_case, lunch_case, night_case, count(*) as count
from vAttendance
where dateAt between '2025-01-01' and '2025-12-31' and
(
    lunch_out is null and lunch_in is null and
    (morning is null or  (evening is null and night is null and early is null)) or
    (morning is null && evening is null && night is null && early is null)
)
group by day_case, lunch_case, night_case;
```

</details>

---

### สรุปภาพรวม

- **เคสเขียว:** ทำงานปกติเต็มวัน ข้อมูลครบ คำนวณได้ทันที
- **เคสเหลือง:** ทำงานครึ่งวัน หรือสแกนเที่ยงครั้งเดียว
- **เคสแดง:** ข้อมูลผิดปกติ ต้องแก้ไขก่อนนำไปคำนวณ

---

## ตารางสุปภาพรวม

### 🟢 เคสเขียว — สามารถคำนวณได้เลย

|     NO. | day_case      | lunch_case       | night_case |      count |
| ------: | ------------- | ---------------- | ---------- | ---------: |
|     111 | 1.เช้า-เย็น   | 1.ไม่พักเที่ยง   | 1.ไม่มีค่ำ |     17,679 |
|     113 | 1.เช้า-เย็น   | 1.ไม่พักเที่ยง   | 3.ข้ามวัน  |          1 |
|     121 | 1.เช้า-เย็น   | 2.มีพักเที่ยง    | 1.ไม่มีค่ำ |     31,459 |
|     122 | 1.เช้า-เย็น   | 2.มีพักเที่ยง    | 2.ออกค่ำ   |          3 |
|     131 | 1.เช้า-เย็น   | 3.สแกนครั้งเดียว | 1.ไม่มีค่ำ |      7,147 |
|     132 | 1.เช้า-เย็น   | 3.สแกนครั้งเดียว | 2.ออกค่ำ   |          1 |
|     212 | 2.เช้าขาเดียว | 1.ไม่พักเที่ยง   | 2.ออกค่ำ   |        164 |
|     213 | 2.เช้าขาเดียว | 1.ไม่พักเที่ยง   | 3.ข้ามวัน  |          1 |
|     222 | 2.เช้าขาเดียว | 2.มีพักเที่ยง    | 2.ออกค่ำ   |         51 |
|     232 | 2.เช้าขาเดียว | 3.สแกนครั้งเดียว | 2.ออกค่ำ   |         11 |
| **รวม** |               |                  |            | **56,517** |

---

### 🟡 เคสเหลือง — รอสอบถามเพิ่มเติม / ใบลา

|     NO. | day_case      | lunch_case       | night_case |     count |
| ------: | ------------- | ---------------- | ---------- | --------: |
|     221 | 2.เช้าขาเดียว | 2.มีพักเที่ยง    | 1.ไม่มีค่ำ |       654 |
|     231 | 2.เช้าขาเดียว | 3.สแกนครั้งเดียว | 1.ไม่มีค่ำ |       822 |
|     321 | 3.เย็นขาเดียว | 2.มีพักเที่ยง    | 1.ไม่มีค่ำ |       237 |
|     331 | 3.เย็นขาเดียว | 3.สแกนครั้งเดียว | 1.ไม่มีค่ำ |       312 |
|     422 | 4.ไม่มี       | 2.มีพักเที่ยง    | 2.ออกค่ำ   |         3 |
| **รวม** |               |                  |            | **2,028** |

---

### 🔴 เคสแดง — รอแก้ไขข้อมูล

|     NO. | day_case      | lunch_case       | night_case |     count |
| ------: | ------------- | ---------------- | ---------- | --------: |
|     211 | 2.เช้าขาเดียว | 1.ไม่พักเที่ยง   | 1.ไม่มีค่ำ |     1,461 |
|     311 | 3.เย็นขาเดียว | 1.ไม่พักเที่ยง   | 1.ไม่มีค่ำ |       353 |
|     312 | 3.เย็นขาเดียว | 1.ไม่พักเที่ยง   | 2.ออกค่ำ   |         1 |
|     411 | 4.ไม่มี       | 1.ไม่พักเที่ยง   | 1.ไม่มีค่ำ |         2 |
|     412 | 4.ไม่มี       | 1.ไม่พักเที่ยง   | 2.ออกค่ำ   |         7 |
|     421 | 4.ไม่มี       | 2.มีพักเที่ยง    | 1.ไม่มีค่ำ |        37 |
|     431 | 4.ไม่มี       | 3.สแกนครั้งเดียว | 1.ไม่มีค่ำ |        26 |
| **รวม** |               |                  |            | **1,887** |

---

## 📊 สรุปรวมทั้งหมด

| สถานะ          |      จำนวน |
| -------------- | ---------: | --- |
| เคสเขียว       |     56,517 |
| เคสเหลือง      |      2,028 | ห   |
| เคสแดง         |      1,887 |
| **รวมทั้งหมด** | **60,432** |

---

### Test Case Scenarios

| No. | Scenario                 | Scanned Times                     | morn  | lchOut | lchIn | even  | night | early | Status  | Work(m) | Lunch(m) | OT(m) | Late1 | Late2 |
| :-: | :----------------------- | :-------------------------------- | :---- | :----- | :---- | :---- | :---- | :---- | :------ | :------ | :------- | :---- | :---- | :---- |
|  1  | **Normal 1**             | 07:52, 12:12, 13:12, 17:05        | 07:52 | 12:12  | 13:12 | 17:05 | -     | -     | Full    | 480     | 60       | 0     | 0     | 0     |
|  2  | **Normal 2**             | 07:50, 12:14, 12:45, 17:30        | 07:50 | 12:14  | 12:45 | 17:30 | -     | -     | Full    | 480     | 41       | 0     | 0     | 0     |
|  3  | **Normal 3**             | 07:50, 12:14, 12:45, 16:30        | 07:50 | 12:11  | 12:51 | 16:30 | -     | -     | Full    | 450     | 40       | 0     | 0     | 30    |
|  4  | **OT Night 1**           | 06:54, 12:32, 12:54,17.31, 21:12  | 06:54 | 12:32  | 12:54 | 17.31 | 21:12 | -     | Full+OT | 480     | 22       | 192   | 0     | 0     |
|  5  | **OT Night 2**           | 07:32, 12:10, 12:55, 21:10        | 07:32 | 12:10  | 12:55 | -     | 21:10 | -     | Full+OT | 480     | 55       | 190   | 0     | 0     |
|  6  | **OT Night 3**           | 12:12, 12:55, 21:30               | -     | 12:12  | 12:55 | -     | 21:30 | -     | Half+OT | 240     | 43       | 0     | 0     | 0     |
|  7  | **OT Early**             | 07:35, 12:05, 12:57, 02:02        | 07:35 | 12:05  | 12:57 | -     | -     | 02:02 | Full+OT | 480     | 52       | 482   | 0     | 0     |
|  8  | **Missing Lunch 1**      | 07:38, 17:03                      | 07:38 | -      | -     | 17:03 | -     | -     | Full    | 240     | 0        | 0     | 0     | 240   |
|  9  | **Missing Lunch 2**      | 07:50, 12:34, 17:05               | 07:50 | 12:34  | -     | 17:05 | -     | -     | Full    | 360     | 0        | 0     | 0     | 120   |
| 10  | **Missing Lunch 3**      | 07:12, 14:39, 17:32               | 07:12 | -      | 14:39 | 17:32 | -     | -     | Full    | 360     | 0        | 0     | 0     | 120   |
| 11  | **morning+OT**           | 07:44, 12:01, 12:49, 20:31        | 07:44 | 12:01  | 12:49 | -     | 20:31 | -     | Full    | 480     | 48       | 151   | 0     | 0     |
| 12  | **morning+MLunch+OT 1**  | 07:39, 20:11                      | 07:39 | -      | -     | -     | 20:11 | -     | Full+OT | 240     | 0        | 131   | 0     | 240   |
| 13  | **morning+MLunch+OT 2**  | 07:23, 12:22, 20:58               | 07:23 | 12:22  | -     | -     | 20:58 | -     | Full+OT | 360     | 0        | 178   | 0     | 120   |
| 14  | **morning+MLunch+OT 3**  | 07:23, 14:02, 20:05               | 07:23 | -      | 14:02 | -     | 20:05 | -     | Full+OT | 360     | 0        | 125   | 0     | 120   |
| 15  | **morning+MLunch+early** | 07:21, 02:08                      | 07:21 | -      | -     | -     | -     | 02:08 | Full    | 240     | 0        | 488   | 0     | 240   |
| 16  | **Half Day Morning 1**   | 07:41, 11:45                      | 07:41 | 11:45  | -     | -     | -     | -     | Half    | 225     | 0        | -     | 0     | 15    |
| 17  | **Half Day Morning 2**   | 07:41, 12:23, 12:51               | 07:41 | 12:23  | 12:51 | -     | -     | -     | Half    | 240     | -        | -     | 0     | 0     |
| 18  | **Half Day Afternoon 1** | 13:10, 17:05                      | -     | -      | 13:10 | 17:05 | -     | -     | Half    | 230     | -        | -     | 0     | 10    |
| 19  | **Half Day Afternoon 2** | 12:20, 12:50, 16:50               | -     | 12:20  | 12:50 | 16:50 | -     | -     | Half    | 230     | -        | -     | 0     | 10    |
| 20  | **Late Morning**         | 08:20, 12:10, 13:01, 16:55        | 08:20 | 12:10  | 13:01 | 16:55 | -     | -     | Full    | 455     | 51       | -     | 20    | 5     |
| 21  | **Late Morning Half**    | 08:30, 12:20                      | 08:30 | 12:20  | -     | -     | -     | -     | Half    | 200     | -        | -     | 30    | 10    |
| 22  | **Late Lunch**           | 07:30, 12:01, 13:23, 17:03        | 07:30 | 12:01  | 13:23 | 17:03 | -     | -     | Full    | 458     | 82       | -     | 0     | 22    |
| 23  | **Spam Morning**         | 07:50, 08:02, 08:05, 16:55        | 08:05 | -      | -     | 16:55 | -     | -     | Full    | 230     | 0        | -     | 5     | 245   |
| 24  | **Spam Lunch Out**       | 07:30, 11:54, 12:05, 12:10, 17:09 | 07:30 | 11:54  | 12:10 | 17:09 | -     | -     | Full    | 480     | 16       | -     | -     | -     |
| 25  | **Absent 1**             | 07.31                             | 07.31 | -      | -     | -     | -     | -     | Absent  | -       | -        | -     | -     | -     |
| 26  | **Absent 2**             | 17:30                             | -     | -      | -     | 17:30 | -     | -     | Absent  | -       | -        | -     | -     | -     |
| 27  | **Absent 3**             | 17:30,20:02                       | -     | -      | -     | 17:30 | 20:02 | -     | Absent  | -       | -        | -     | -     | -     |
| 28  | **Absent 4**             | 20:02                             | -     | -      | -     | -     | 20:02 | -     | Absent  | -       | -        | -     | -     | -     |
| 29  | **Absent 5**             | 12:01, 13:01                      | -     | 12:00  | 13:01 | -     | -     | -     | Absent  | -       | -        | -     | -     | -     |
| 30  | **Absent 6**             | 11:15                             | -     | 11:15  | -     | -     | -     | -     | Absent  | -       | -        | -     | -     | -     |


_\* Next Day_
