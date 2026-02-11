# Mad Monkey Link-in-Bio — Deployment & Domain Setup Guide

## Overview

This app serves as a **link-in-bio portal** for all 22 Mad Monkey properties across Southeast Asia. Each property has its own unique URL that can be used for QR codes, social media bios, and marketing campaigns.

---

## Property URLs

Each property has a dedicated page at `yourdomain.com/{property-id}`:

| Property | URL Path |
|---|---|
| Koh Rong | `/koh-rong` |
| Koh Sdach | `/koh-sdach` |
| Gili Trawangan | `/gili-t` |
| Kuta Lombok | `/kuta-lombok` |
| Uluwatu | `/uluwatu` |
| Nusa Lembongan | `/nusa-lembongan` |
| Nacpan Beach | `/nacpan-beach` |
| Siargao | `/siargao` |
| Panglao | `/panglao` |
| Phuket | `/phuket` |
| Chiang Mai | `/chiang-mai` |
| Pai | `/pai` |
| Hoi An | `/hoi-an` |
| Luang Prabang | `/luang-prabang` |
| Vang Vieng | `/vang-vieng` |
| Siem Reap | `/siem-reap` |
| Siquijor | `/siquijor` |
| Dumaguete | `/dumaguete` |
| Phnom Penh | `/phnom-penh` |
| Hanoi | `/hanoi` |
| Bangkok | `/bangkok` |
| Manila | `/manila` |

The root URL (`/`) shows the full property selector.

---

## Connecting a Custom Domain in Lovable

### Step 1: Publish the App
1. In the Lovable editor, click **Publish** (top-right corner)
2. Click **Update** to deploy the latest version
3. Your app is now live at `yourproject.lovable.app`

### Step 2: Add Your Custom Domain
1. Go to **Project Settings → Domains**
2. Click **Connect Domain**
3. Enter your domain (e.g., `links.madmonkeyhostels.com`)

### Step 3: Configure DNS Records
At your domain registrar (e.g., Cloudflare, GoDaddy, Namecheap), add these DNS records:

#### For a root domain (e.g., `madmonkeylinks.com`):
| Type | Name | Value |
|------|------|-------|
| A | @ | `185.158.133.1` |
| A | www | `185.158.133.1` |
| TXT | _lovable | *(provided by Lovable during setup)* |

#### For a subdomain (e.g., `links.madmonkeyhostels.com`):
| Type | Name | Value |
|------|------|-------|
| A | links | `185.158.133.1` |
| TXT | _lovable | *(provided by Lovable during setup)* |

### Step 4: Wait for Verification
- DNS propagation can take **up to 72 hours** (usually much faster)
- Lovable will automatically provision an SSL certificate once verified
- Check status in **Project Settings → Domains**

### Step 5: Set Primary Domain
- If you added both `yourdomain.com` and `www.yourdomain.com`, set one as **Primary**
- The other will redirect automatically

---

## UTM Tracking

The **Book Direct** and **Loyalty** buttons include UTM parameters automatically:

```
?utm_source=property_qr&utm_medium=linkinbio&utm_campaign={property_name}
```

Example for Koh Rong:
```
https://madmonkeyhostels.com/bookings?utm_source=property_qr&utm_medium=linkinbio&utm_campaign=koh_rong
```

---

## QR Code Usage

Generate a QR code for each property URL and place it at the corresponding hostel:

- **Koh Rong**: `yourdomain.com/koh-rong`
- **Bangkok**: `yourdomain.com/bangkok`
- etc.

Recommended QR generators: [QR Code Generator](https://www.qr-code-generator.com/) or [QR Code Monkey](https://www.qrcode-monkey.com/)

---

## Troubleshooting

- **Domain not verifying?** Check DNS records at [DNSChecker.org](https://dnschecker.org)
- **SSL not working?** Ensure no conflicting A records exist and CAA records allow Let's Encrypt
- **404 on property pages?** This is a single-page app — ensure your hosting serves `index.html` for all routes (Lovable handles this automatically)

---

## Contact

For technical issues with the app, contact the development team.
For domain/DNS issues, contact your domain registrar's support.
