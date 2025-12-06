export interface EducationItem {
  degree: string
  field: string
  institution: string
  location: string
  date: string
  description?: string
}

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Engineering',
    field: 'Computer Engineering',
    institution: 'Gujarat Technological University',
    location: 'Mehsana, Gujarat',
    date: 'June 2018 - June 2022',
    description: 'CGPA: 8.65 / 10.00'
  }
]
