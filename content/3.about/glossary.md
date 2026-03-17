---
title: glossary
description: Welcome to Docus theme documentation.
navigation:
  icon: i-lucide-book-type
seo:
  title: glossary
  description: Discover how to create, manage, and publish documentation effortlessly with Docus.
---

# 📘 Glossary

รายการศัพท์ที่เรียนรู้จากการฝึกงาน เขียนจากความเข้าใจและลักษณะการใช้งานจริง

---

### **API**

> Application-Programming-Interface ชื่อบริการและรูปแบบข้อมูลที่กำหนด สำหรับเขียนโปรแกรมใช้งาน มักใช้สำหรับการสื่อสารระหว่าง Backend และ Frontend หรือก็คือ เป็นตัวกลางในการส่งและเรียกข้อมูล 

### **Authentication**

> การตรวจสอบตัวตนของผู้ใช้หรือระบบ โดยการเช็คชื่อและรหัสผ่าน

### **Backend**

> โปรแกรมที่ทำงาน ประมวลผล จัดเก็บข้อมูล และรับ/ส่งข้อมูลกับ Frontend

### **CLI**

> Command-Line-Interface คำสั่งที่ใช้สำหรับสื่อสารกับระบบผ่าน Terminal

### **Cache**

> ชั้นเก็บข้อมูลชั่วคราวเพื่อเพิ่มประสิทธิภาพในการเรียกข้อมูลที่ถูกใช้บ่อย

### **Git**

> ที่จดเก็บโค้ด และ Backup โค้ด

### **Fork**

> การคัดลอกสำเนาโปรเจคจาก Github มาเป็นของตัวเอง

---

## 2. query sql command

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
- coalesce การเลือกข้อมูลที่ตรงกับเงื่อนไขในวงเล็บก่อน
- greatest การเลือกข้อมูลที่มากที่สุด
