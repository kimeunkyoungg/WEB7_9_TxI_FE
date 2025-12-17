import { z } from 'zod'

export const emailSchema = z
  .string()
  .min(1, '이메일을 입력해주세요.')
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, '올바른 이메일 형식을 입력해주세요.')

export const passwordSchema = z
  .string()
  .min(8, '비밀번호는 8~30자 사이여야 합니다.')
  .max(30, '비밀번호는 8~30자 사이여야 합니다.')
  .regex(/(?=.*[A-Za-z])(?=.*\d)/, '비밀번호는 영어와 숫자를 모두 포함해야 합니다.')

export const nickNameSchema = z
  .string()
  .min(3, '닉네임은 3~10자 사이여야 합니다.')
  .max(10, '닉네임은 3~10자 사이여야 합니다.')

export const fullNameSchema = z.string().min(2, '이름은 최소 2자 이상이어야 합니다.')

export const birthDateSchema = z
  .string()
  .min(1, '생년월일을 입력해주세요.')
  .regex(/^\d{4}-\d{2}-\d{2}$/, '올바른 날짜 형식(YYYY-MM-DD)을 입력해주세요.')

export const loginFormSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
})

export const signupFormSchema = z
  .object({
    fullName: fullNameSchema,
    email: emailSchema,
    nickname: nickNameSchema,
    birthDate: birthDateSchema,
    password: passwordSchema,
    passwordConfirm: z.string().min(1, '비밀번호 확인을 입력해주세요.'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  })

export const updateUserFormSchema = z.object({
  fullName: fullNameSchema,
  nickname: nickNameSchema,
  birthDate: birthDateSchema,
})

export const passwordConfirmFormSchema = z.object({
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
})
