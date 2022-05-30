export interface Driver {
  name: string
  picture: string
}

export interface Ride {
  driver: Driver
  origin: string
  destination: string
  time: string
  spaces: number
}
