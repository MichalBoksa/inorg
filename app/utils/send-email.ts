import { FormDataContact } from '@/components/ContactForm';
import { FormDataImprove } from '@/components/GOZForms/ImproveForm';
import { FormDataSolution } from '@/components/GOZForms/SolutionForm';

export function sendEmail(data: FormDataContact) {
  //PROD
  const apiEndpoint = 'https://inorg.pl/api/email';
  //TEST
  // const apiEndpoint = 'http://localhost:3000/api/email';

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

export function sendEmailSolution(data: FormDataSolution) {
  //PROD
  const apiEndpoint = 'https://inorg.pl/api/solutionEmail';
  //TEST
  // const apiEndpoint = 'http://localhost:3000/api/solutionEmail';

  const formData = new FormData();

  formData.append('companyName', data.companyName);
  formData.append('solutionDesc', data.solutionDesc);
  formData.append('website', data.website);
  formData.append('address', data.address);
  formData.append('email', data.email);

  if (data.image && data.image.length > 0) {
    formData.append('image', data.image[0]); // Dodaj plik do FormData
  }

  fetch(apiEndpoint, {
    method: 'POST',
    body: formData, // Wysyłanie jako FormData
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


export function sendEmailImprove(data: FormDataImprove) {
  //PROD
  // const apiEndpoint = 'https://inorg.pl/api/email';
  //TEST
  const apiEndpoint = 'http://localhost:3000/api/improveEmail';

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