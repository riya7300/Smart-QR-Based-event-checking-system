🎟️ Mobile-First QR Event Check-in System

A full-stack web application designed to streamline campus event entry using secure QR-based attendance. This system eliminates long queues, prevents duplicate entries, and provides administrators with real-time attendance tracking.

Built with modern technologies like **React, Node.js, Express, and MongoDB**, the platform is optimized for speed, security, and scalability.



🚀 Features

✅ Admin authentication using JWT  
✅ Event creation and management  
✅ Bulk participant import via CSV  
✅ Automatic secure QR generation  
✅ Mobile-based QR scanner for fast check-in  
✅ Atomic attendance marking (prevents duplicate entries)  
✅ Indexed MongoDB queries for high performance  
✅ Real-time participant tracking  
✅ Role-protected routes  



🛠️ Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- ZXing QR Scanner

**Backend:**
- Node.js
- Express.js
- MongoDB

---

📂 Project Structure
qr-event-checkin-system
│
├── backend
│ ├── models
│ │ Admin.js
│ │ Event.js
│ │ Participant.js
│ │
│ ├── routes
│ │ authRoutes.js
│ │ eventRoutes.js
│ │ participantRoutes.js
│ │ checkinRoutes.js
│ │
│ ├── middleware
│ │ authMiddleware.js
│ │
│ ├── utils
│ │ generateToken.js
│ │
│ ├── uploads
│ ├── .env
│ └── server.js
│
├── frontend
│ ├── src
│ │ ├── pages
│ │ │ Login.js
│ │ │ Dashboard.js
│ │ │ Scanner.js
│ │ │
│ │ ├── App.js
│ │ └── index.js

.gitignore:
.env
node_modules

MIT License

Copyright (c) 2026 Riya Gupta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files, to deal in the Software
without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies.


