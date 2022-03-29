enum Status {
  Success = 'Success',
  Failure = 'Failure'
}

interface Data {
  status: Status
  msg?: string
}

export const Test: Partial<Data> = {
  msg: 'Test Msg'
}

export const changeStatus = (data: Data): string => {
  data.status = Status.Success

  return 'Change Success!'
}

export const Test2 = async() => {
  await Promise.resolve()
}
