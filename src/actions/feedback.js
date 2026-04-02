export async function submitFeedback(formData) {
  const name = formData.get('name')
  const message = formData.get('message')
  const rating = Number(formData.get('rating'))

  // Validation
  if (!name?.trim()) {
    throw new Error('Name is required')
  }

  if (!message?.trim()) {
    throw new Error('Feedback message is required')
  }

  if (!rating || rating < 1 || rating > 5) {
    throw new Error('Rating must be between 1 and 5')
  }

  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 1200))

  return {
    id: Date.now(),
    name: name.trim(),
    message: message.trim(),
    rating,
    createdAt: new Date().toLocaleString(),
  }
}