import { ref } from 'vue'

export function useUser() {
  const user = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  // Variabel untuk menyimpan "Remot Pembatal"
  let abortController = null

  const fetchUser = async (id) => {
    // 1. BATALKAN request sebelumnya jika ada!
    if (abortController) {
      abortController.abort()
      console.log(`❌ Request lama untuk User dibatalkan demi User ${id}`)
    }

    // 2. Buat "Remot Pembatal" baru untuk request ini
    abortController = new AbortController()

    isLoading.value = true
    user.value = null // Reset UI
    error.value = null

    try {
      // 3. Masukkan 'signal' ke dalam fetch
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        signal: abortController.signal, // <--- Ini kuncinya!
      })

      if (!response.ok) throw new Error('Gagal mengambil data')

      const data = await response.json()
      user.value = data
    } catch (err) {
      // 4. Cek apakah errornya karena dibatalkan?
      if (err.name === 'AbortError') {
        console.log('⛔ Fetch dibatalkan (aman, bukan error)')
        // Jangan lakukan apa-apa, biarkan saja
      } else {
        error.value = err.message
        console.error(err)
      }
    } finally {
      // Hanya matikan loading jika request TIDAK dibatalkan
      // (Supaya loading bar gak kedip-kedip aneh)
      if (!abortController.signal.aborted) {
        isLoading.value = false
      }
    }
  }

  return {
    user,
    isLoading,
    error,
    fetchUser,
  }
}
