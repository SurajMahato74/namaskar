import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/namaskar/', // ✅ Make sure this line exists and matches your repo name
})
