import { FormData } from '@/components/ContactForm';

export function sendEmail(data: FormData) {
  const apiEndpoint = 'http://localhost:3000/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
      console.log(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}