interface Sample {
  value: string
  isCorrect: boolean
}

export const emailValidationSamples: Sample[] = [
  {
    value: 'email@example.com',
    isCorrect: true,
  },
  {
    value: 'firstname.lastname@example.com',
    isCorrect: true,
  },
  {
    value: 'email@subdomain.example.com',
    isCorrect: true,
  },
  {
    value: '1234567890@example.com',
    isCorrect: true,
  },
  {
    value: 'plainaddress',
    isCorrect: false,
  },
  {
    value: '#@%^%#$@#$@#.com',
    isCorrect: false,
  },
  {
    value: '@example.com',
    isCorrect: false,
  },
  {
    value: 'email@example',
    isCorrect: false,
  },
]

export const passwordValidationSamples: Sample[] = [
  {
    value: 'Password1!',
    isCorrect: true,
  },
  {
    value: 'MyP@ssw0rd',
    isCorrect: true,
  },
  {
    value: '5tr0ngP@ss',
    isCorrect: true,
  },
  {
    value: 'P@ssw0rd!',
    isCorrect: true,
  },
  {
    value: '!Secure123',
    isCorrect: true,
  },
  {
    value: 'P@ssw0rd!123',
    isCorrect: true,
  },
  {
    value: 'S0m3P@$$',
    isCorrect: true,
  },
  {
    value: '9L3tterP@',
    isCorrect: true,
  },
  {
    value: 'P@ssw0rd123!',
    isCorrect: true,
  },
  {
    value: 'short',
    isCorrect: false,
  },
  {
    value: '$H0rT',
    isCorrect: false,
  },
  {
    value: 'nospecialchar123',
    isCorrect: false,
  },
  {
    value: 'NoNumber!',
    isCorrect: false,
  },
  {
    value: 'noSpecialAndNumber',
    isCorrect: false,
  },
  {
    value: 'alllowercase',
    isCorrect: false,
  },
  {
    value: 'ALLUPPERCASE',
    isCorrect: false,
  },
  {
    value: 'n0uppercase!',
    isCorrect: false,
  },
  {
    value: 'UPPERCASEWITHOUTNUMBER!',
    isCorrect: false,
  },
  {
    value: 'lowercasewithoutnumber!',
    isCorrect: false,
  },
  {
    value: '1234567890',
    isCorrect: false,
  },
]
