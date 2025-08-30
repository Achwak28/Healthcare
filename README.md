# 🏥 Healthcare System for Hospitals & Clinics  

A **Next.js-based healthcare management system** dedicated to hospitals and clinics.  
It allows patients to register, fill out a detailed personal form, and book appointments with their favorite doctors.  
Admins can manage all appointments securely through a dashboard with OTP/passkey login, track statistics, and send automatic SMS updates to patients.  

---

## ✨ Features  

### 👩‍⚕️ Patient Portal  
- Patient registration with a long personal form.  
- Appointment booking with preferred doctor selection.  
- SMS notification for appointment updates.  

### 🛠️ Admin Dashboard  
- Secure login (Passkey + OTP).  
- View all appointments in real time.  
- Appointment lifecycle:  
  - **Pending** (default)  
  - **Scheduled** ✅  
  - **Cancelled** ❌  
- Automatic SMS sent to patients after updates.  
- Statistics overview (Pending, Scheduled, Cancelled).  

---

## 🖥️ Tech Stack  
- [Next.js](https://nextjs.org) – React framework  
- [TailwindCSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) – UI & styling  
- [Appwrite](https://appwrite.io) – backend services (auth, DB, storage)  
- [Twilio](https://www.twilio.com) (or other SMS gateway) – SMS notifications  

---

## ⚙️ Getting Started  

Clone the repository:  

```bash
git clone https://github.com/your-username/healthcare-system.git
cd healthcare-system
