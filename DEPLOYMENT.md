# Deployment Guide

## GitHub Pages Setup

### 1. Deploy to GitHub Pages

Your `package.json` is already configured with the correct homepage and deploy scripts. To deploy:

```bash
npm run deploy
```

This will build your app and push it to the `gh-pages` branch.

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/utsavtulsyan/utsavtulsyan.github.io`
2. Go to **Settings** > **Pages**
3. Under **Source**, select the `gh-pages` branch
4. Click **Save**

Your site will be available at: `https://utsavtulsyan.github.io`

---

## Cloudflare Custom Domain Setup

### 1. Add Your Domain to Cloudflare

1. Log in to your Cloudflare dashboard
2. Click **Add a Site**
3. Enter your domain name (e.g., `yourdomain.com`)
4. Follow the instructions to change your nameservers at your domain registrar

### 2. Configure DNS Records

In Cloudflare DNS settings, add these records:

**For root domain (example.com):**
- Type: `A`
- Name: `@`
- IPv4 address: `185.199.108.153`
- Proxy status: Proxied (orange cloud)

**Additional A records (add all 4):**
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Target: `utsavtulsyan.github.io`
- Proxy status: Proxied (orange cloud)

### 3. Add CNAME File to Your Repository

A `CNAME` file has been created in the `public` folder with your domain.

**Edit `public/CNAME`** and replace with your actual domain:
```
yourdomain.com
```

### 4. Configure GitHub Pages Custom Domain

1. Go to your repository **Settings** > **Pages**
2. Under **Custom domain**, enter your domain (e.g., `yourdomain.com`)
3. Check **Enforce HTTPS**
4. Click **Save**

### 5. Cloudflare SSL/TLS Settings

1. In Cloudflare, go to **SSL/TLS** > **Overview**
2. Set encryption mode to **Full** or **Full (strict)**
3. Go to **SSL/TLS** > **Edge Certificates**
4. Enable **Always Use HTTPS**
5. Enable **Automatic HTTPS Rewrites**

### 6. Deploy and Verify

```bash
npm run deploy
```

Wait a few minutes for DNS propagation and GitHub Pages to update. Your site should be accessible at your custom domain with HTTPS!

---

## Development

### Local Development
```bash
npm start
```

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

---

## Troubleshooting

### Issue: 404 Error
- Make sure the `gh-pages` branch exists and is set as the source in GitHub Pages settings
- Verify the `homepage` field in `package.json` matches your repository name

### Issue: Custom Domain Not Working
- DNS changes can take up to 48 hours to propagate (usually much faster)
- Verify your CNAME file contains only your domain name (no http:// or trailing slash)
- Check Cloudflare DNS settings are correct
- Ensure GitHub Pages custom domain is configured

### Issue: SSL Certificate Errors
- Make sure Cloudflare SSL/TLS is set to "Full" mode
- Wait for GitHub to provision the certificate (can take a few minutes)
- Enable "Always Use HTTPS" in Cloudflare

---

## Customization

Edit the content in `src/App.js` to update:
- Your name and title
- About section
- Skills
- Social media links (GitHub, LinkedIn, Email)

Edit `src/App.css` to customize:
- Colors
- Layout
- Typography
- Animations
