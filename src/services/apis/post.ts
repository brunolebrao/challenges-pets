import { api } from './baseUrl'

interface IParams {
  userId?: number
  id?: number
}

export async function getPosts (
  path: string,
  params: IParams
): Promise<any> {
  try {
    const response = await api.get(path, { params })
    if (response.status === 200) {
      return response
    }
  } catch (error) {
    return error
  }
}

export async function deleteUser (path: string): Promise<any> {
  try {
    const response = await api.delete(path)
    if (response.status === 200) {
      return response
    }
  } catch (error) {
    return error
  }
}
