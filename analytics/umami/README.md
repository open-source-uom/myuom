# Umami Analytics Setup

This repository contains a **self-hosted, privacy-first analytics setup using Umami**.
It allows your organization to track user behavior, analyze traffic, and make informed decisions while maintaining full visitor privacy and data ownership.

---

## Requirements

* Server with **Node.js ≥ 18.17**
* **PostgreSQL ≥ 12.14** (or MySQL ≥ 8.0)
* **Docker & Docker Compose**
* Minimum **1GB RAM** recommended

> ⚠️ This setup should run on a separate server. Your main application server may not meet the Node.js/PostgreSQL requirements.

---

## Setup Instructions

### 1. Copy environment variables

```bash
cp .env.example .env
```

### 2. Edit `.env`

* Update the database credentials (`DATABASE_URL`)
* Set a secure `APP_SECRET`

### 3. Start the services

```bash
docker compose up -d
```

This will start:

* **Umami app**
* **PostgreSQL database**

### 4. Access the dashboard

Open in your browser:

```
http://<server-ip>:3000
```

* Create an **admin account**
* Add your **websites** to start tracking

### 5. Add tracking script to your website

```html
<script async src="http://<server-ip>:3000/script.js" data-website-id="YOUR_WEBSITE_ID"></script>
```

* Replace `<server-ip>` with your server domain or IP
* Replace `YOUR_WEBSITE_ID` with the ID shown in the Umami dashboard

---

## Notes

* This setup runs **independently** of the main application server
* **All visitor data is private** and stored only in your database
* You can **scale or back up the database** as needed
* For production, consider using **HTTPS** and a **custom domain**
* This setup is ready for deployment once a server is available
