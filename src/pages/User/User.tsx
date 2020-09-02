import React, { useEffect, useState } from 'react'
import { Container, Loading } from './styles'
import { getPosts } from '../../services/apis/post'
import { Card, Spin, Button, Divider } from 'antd'
import { useHistory, useRouteMatch } from 'react-router-dom'

interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

const User: React.FC = () => {
  const [post, setPost] = useState<IPost[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const { goBack } = useHistory()
  const { params } = useRouteMatch()

  useEffect(() => {
    if (params) {
      setLoading(true)
      getPosts('/posts', params)
        .then(res => {
          setLoading(false)
          setPost(res.data)
        })
        .catch(err => {
          console.log('Card:React.FC -> err', err)
        })
    }
  }, [params])

  return (
    <Container>
      {loading && (
        <Loading>
          <Spin size="large" />
        </Loading>
      )}
      {post.map(item => (
        <Card
          key={item.id}
          title={item?.title}
          style={{ border: '1px solid #00A0E4' }}
        >
          <p>{item?.body}</p>
        </Card>
      ))}
      <Divider />
      <Button type="primary" onClick={goBack}>
        {' '}
        Voltar
      </Button>
    </Container>
  )
}

export default User
