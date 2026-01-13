---
navigation:
  label: "kh-intern"
  to: "kh-intern"
---

## โครงการคู่มือการฝึกงาน

เพื่อให้ผู้ฝึกงานได้ บันทึกข้อมูลการฝึกงานของตัวเอง โดยใช้รูปแบบเอกสาร markdown

### 1.การสร้างติดตั้งซอฟต์แวร์

Fork project from
[https://github.com/swasin185/kh-intern]

```bash
    # Clone โปรเจ็คที่ถูก fork
    git clone https://github.com/[YourGitHubID]/kh-intern.git

    # เข้าสู่ directory
    cd kh-intern
    # ติดตั้ง dependency
    pnpm install
    # รัน server
    pnpm run dev
```

ใช้ github extension commit and push

### 2.โครงสร้าง Nuxt.js Framework

### 3. Query SQL Command

- Select เลือกข้อมูลจาก table
- from เลือก table
- where เลือกข้อมูลที่ต้องการใน table
- group by เลือกข้อมูลที่จัดกลุ่ม เพื่อไม่ได้เกิดความนับซ้ำ ของข้อมูล
- order by เลือกข้อมูลที่ต้องการเรียงลำดับ

#### Glossary SQL

- String คำ Text
- Concat การรวมข้อมูล 2 table เข้าด้วยกัน

---
