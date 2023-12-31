export interface AdminModel {
  id: number
  firstName: string
  lastName: string
  imgUrl: string
  userName: string
  email: {
    name: string
    verified: boolean
  }
  phone: {
    number: string
    verified: boolean
  }
  sex: 'male' | 'female'
  birthday: string
  lang: 'en' | 'jp'
  country: string
  city: string
  address1: string
  address2?: string
  zipcode: number
}
