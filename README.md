[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/w8H8oomW)
**<ins>Note</ins>: Students must update this `README.md` file to be an installation manual or a README file for their own CS403 projects.**

**รหัสโครงงาน:** 67-1_01_nth-r1

**ชื่อโครงงาน (ไทย):** การแนะนำการพัฒนาการแสดงผลระบบส่วนหน้า (frontend) ในเว็บไซต์เพื่อการแสดงผลอย่างมีประสิทธิภาพ

**Project Title (Eng):** Introduction to the development of frontend the web for efficiency 

**อาจารย์ที่ปรึกษาโครงงาน:** รศ.ดร.ณัฐธนนท์ หงส์วริทธิ์ธร

**ผู้จัดทำโครงงาน:** 
1. นายพลัฏฐ์  ตัณฑโอภาส  6309681796  palat.tunt@dome.tu.ac.th

   
Manual / Instructions for your projects starts here !
# ระบบ eFanimation (โปรเจกต์รายวิชา CS403)

ระบบนี้แบ่งเป็น 2 ส่วน:  
- **eFanimation** → ส่วนหน้า (Frontend) ใช้ React + Vite + TypeScript  
- **e-fan-backend** → ส่วนหลัง (Backend) ใช้ NestJS

---

## วิธีติดตั้งและใช้งาน

### 1. ติดตั้งโปรแกรมที่จำเป็น

- Node.js (แนะนำเวอร์ชัน 16 ขึ้นไป) → https://nodejs.org/
- VS Code (หรือ editor ที่ชอบ)
- Git (หรือดาวน์โหลด zip มาแตกไฟล์ก็ได้)

---

### 2. รัน Frontend

```bash
cd eFanimation
npm install
npm run start
```
เปิดเว็บที่: http://localhost:5173


### 3. รัน Backend

```bash
cd e-fan-backend
npm install
npm run start
```
Backend จะรันที่: http://localhost:3000

---

**หมายเหตุ**
ต้องเปิดทั้ง frontend และ backend พร้อมกัน

frontend เชื่อมกับ backend ที่ http://localhost:3000

ระบบเชื่อมต่อฐานข้อมูล mongodb ใว้แล้ว
