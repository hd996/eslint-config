import Module from './module'

enum Status {
  Success = 'Success',
  Failure = 'Failure'
}

interface Data {
  status: Status
  msg?: string
}

export const changeStatus = (data: Data) => {
  data.status = Status.Success
}

export const changeMoudleName = () => {
  Module.name = 'New Moudle'
}
