import { ref, watchEffect } from 'vue'
// const { ref, watchEffect } = Vue

function useFetch(getUrl) {
    const data = ref(null)
    const error = ref(null)
    const isPending = ref(true)
  
    watchEffect(() => {
      isPending.value = false
      data.value = null
      error.value = null

      fetch(getUrl())
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not OK');
          }
          return response.json();
        })
        .then(_data => {
            data.value = _data
            isPending.value = false
        })
        .catch((err) => {
          error.value = err
          isPending.value = false
        });
    })
  
    return {
    data,
    error,
    isPending
    }
}

export { useFetch }