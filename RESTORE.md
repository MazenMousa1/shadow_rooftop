# Restore the Original Menu

From the project root, replace the maintenance page with the saved original:

```powershell
Copy-Item .\index-menu-backup.html .\index.html -Force
```

Then commit and push `index.html` to the branch used by Cloudflare Pages to restore the menu online.
