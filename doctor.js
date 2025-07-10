const doctors = [
  {
    id: 1,
    name: " Prof.Dr.Asmad Mubeen",
    degree: "MBBS, from King Edward Madical University, Lahore.",
    specialty: "Cardiologist",
    experience: "10+ years",
    bio: "Expert in heart surgeries and cardiology. Treated over 1,000+ patients.",
    image: "doctor.jpg"
  },
  {
    id: 2,
    name: "Prof.Dr.Abubakar",
    degree: "BCs,MSC,Phd in physiology, from Quaid-e-azam university , Islamabad.",
    specialty: "phyiologist",
    experience: "7 years",
    bio: "Experienced in Conducting diagnostic tests (ECG, EEG, EMG, pulmonary function tests).",
    image: "male.jpg"
  },
  {
    id: 3,
    name: "Prof.Dr.Ayesha",
    degree: "MBBS, from King Edward Madical University, Lahore.",
    specialty: "General Physician",
    experience: "9 years",
    bio: "Experienced in diagnosing and treating a wide range of acute and chronic medical conditions.",
    image: "femail.jpg"
  },
  {
    id: 4,
    name: "Dr.Sheryar",
    degree:"PHARM-D, from Lahore Madical and Dental College, Lahore.",
    specialty: "Pharmist",
    experience: "2 years",
    bio: "Experienced in dispensing medications, reviewing prescriptions for accuracy and drug interactions.",
    image: "male2.jpg"
  },
  {
    id: 5,
    name: "Ass.Prof.Dr.Sara",
    degree: "FCPS in Dermatology, from Fatima Jinnah Medical University (FJMU), Lahore.",
    specialty: "Dermatologist",
    experience: "10 years",
    bio: "Experienced in diagnosing and treating a wide range of skin, hair, and nail conditions.",
    image: "female1.jpg"
  },
  {
    id: 6,
    name: "Ass.Prof.Dr.Atif Ishaq",
    degree: "FCPS,MCPS in radiology, from Dow University of Health Sciences (DUHS).	",
    specialty: "Radiologist",
    experience: "9 years",
    bio: "Experienced in interpreting medical imaging studies including X-rays, CT scans, MRIs, ultrasounds, and mammograms.",
    image: "male1.jpg"
  },
  {
    id: 7,
    name: "Dr.Sana",
    degree:"Bs Dental Surgery, from Lahore Madical and Dental College, Lahore.",
    specialty: "Dentist",
    experience: "3 years",
    bio: "Experienced in diagnosing and treating oral health issues including tooth decay, gum disease, and dental infections..",
    image: "female3.jpg"
  },
  {
    id: 8,
    name: "Ass.Prof.Dr.Daniyal",
    degree: "MBBS, from Aga Khan University , Karachi.",
    specialty: "opd specailist",
    experience: "5 years",
    bio: "Experienced in providing outpatient care services including the diagnosis, treatment, and management of a wide range of general medical conditions. .",
    image: "images.jpeg"
  }
];

const params = new URLSearchParams(window.location.search);
const doctorId = parseInt(params.get("id"));

if (doctorId && document.getElementById("profile-container")) {
  const doctor = doctors.find(d => d.id === doctorId);
  const profileDiv = document.getElementById("profile-container");

  if (doctor) {
    profileDiv.innerHTML = `
      <img src="${doctor.image}" alt="${doctor.name}">
      <h3>${doctor.name}</h3>
            <p>${doctor.degree}</p>

      <p><strong>Specialty:</strong> ${doctor.specialty}</p>
      <p><strong>Experience:</strong> ${doctor.experience}</p>
      <p>${doctor.bio}</p>
      <a href="doctor.html">← Back to Doctors</a>
    `;
  } else {
    profileDiv.innerHTML = "<p>Doctor not found.</p>";
  }
}
