import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(), VitePWA({
    manifest: {
      name: "Horoscopos",
      short_name: "Horoscopos",
      description: "Consulte su horóscopo diário",
      theme_color: "#333333",
      background_color: "#160312",
      lang:"es_MX",
      icons:[
        {
          "src": "./assets/favicon.svg",
          "sizes": "128x128",         
        },
       
        {
          "src": "assets/android-launchericon-512-512.png",
          "sizes": "512x512"
        },
        {
          "src": "assets/android-launchericon-192-192.png",
          "sizes": "192x192"
        },
       
        {
          "src": "assets/android-launchericon-96-96.png",
          "sizes": "96x96"
        },
        {
          "src": "assets/android-launchericon-72-72.png",
          "sizes": "72x72"
        },
        {
          "src": "assets/android-launchericon-48-48.png",
          "sizes": "48x48"
        }
       

      ]

      
    }
  }) ]
})
