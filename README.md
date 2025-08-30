# 🏥 Healthcare Management System  

A **modern healthcare system** built for **hospitals and clinics**, designed to simplify how patients book appointments and how admins manage them.  
The system is made with **Next.js, TailwindCSS, shadcn/ui, and Appwrite** to provide a smooth and secure experience.  

---

## 🌟 Overview  

- Patients can **register** with detailed personal information.  
- Patients can **book appointments** with their favorite doctors.  
- Appointments can have three statuses:  
  - 🕒 **Pending** – default after booking  
  - ✅ **Scheduled** – confirmed by the admin  
  - ❌ **Cancelled** – declined or cancelled  
- Patients receive **SMS notifications** whenever their appointment status changes.  
- Admins can securely log in (with OTP / passkey) to a dashboard that shows all appointments and useful statistics.  

---

## ✨ Features  

### 👩‍⚕️ For Patients  
- Easy registration with complete personal profile.  
- Book appointments directly with chosen doctors.  
- Get notified instantly by SMS when an appointment is scheduled or cancelled.  

### 🛠️ For Admins  
- Secure OTP/passkey authentication.  
- Dashboard to view all appointments.  
- Ability to update statuses (Pending → Scheduled / Cancelled).  
- Automatic SMS updates to patients after every change.  
- Overview of statistics:  
  - Total appointments  
  - Pending count  
  - Scheduled count  
  - Cancelled count  

---

## 📊 Statistics Example  

| Status     | Count |
|------------|-------|
| Total      | 152   |
| Pending    | 87    |
| Scheduled  | 49    |
| Cancelled  | 16    |

*(These numbers are dynamically updated in the dashboard.)*  

---

## 🖥️ Tech Stack  

- ⚡ **Next.js** – frontend framework  
- 🎨 **TailwindCSS + shadcn/ui** – styling and components  
- 🗄️ **Appwrite** – backend (database, authentication)  
- 📲 **Twilio / SMS Gateway** – patient notifications  

---

## 📸 Screenshots  

### 📝 Patient Registration  
![Patient Registration](./public/screenshots/patient-form.png)  

### 📅 Appointment Booking  
![Appointment Booking](./public/screenshots/appointment-booking.png)  

### 📊 Admin Dashboard  
![Admin Dashboard](./public/screenshots/admin-dashboard.png)  

### 📈 Statistics  
![Statistics](./public/screenshots/statistics.png)  

---

## 🚀 Future Improvements  

- [ ] Doctor management system (specializations, availability).  
- [ ] Integrated payments for appointments.  
- [ ] Multi-language support for clinics in different regions.  
- [ ] Patient medical history tracking.  

---

## 🤝 Contributing  

Contributions are always welcome!  
- Fork the repo  
- Create your feature branch  
- Commit your changes  
- Submit a pull request 🎉  

---

## 📄 License  

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it.  

---

💡 **Built for healthcare institutions to modernize patient–doctor interactions.**  
