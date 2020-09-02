import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

import { Container, Loading } from './styles'
import { getPosts, deleteUser } from '../../services/apis/post'
import { Spin, Divider, Alert, Button } from 'antd'
import { useHistory } from 'react-router-dom'

interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPost[] | any[]>([])
  const [param, setParam] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [status, setStatus] = useState<number>(0)
  const { goBack } = useHistory()

  useEffect(() => {
    setLoading(true)
    getPosts('/posts', { userId: param })
      .then(res => {
        setLoading(false)
        setPosts(res.data)
      })
      .catch(err => {
        console.log('Card:React.FC -> err', err)
      })
  }, [param])

  const handleDelete = async (value: number) => {
    await deleteUser(`/posts/${value}`).then(res => {
      const deletePost = posts.filter(post => post.id !== value)
      setStatus(res.status)
      setPosts(deletePost)
      setTimeout(() => {
        handleClose()
      }, 1000)
    })
  }

  const handleClose = () => {
    setStatus(0)
  }

  return (
    <Container>
      {loading && (
        <Loading>
          <Spin size="large" />
        </Loading>
      )}
      <Divider>Posts</Divider>
      {status === 200 && (
        <Alert
          message="Mensagem apagada"
          type="success"
          showIcon
          closable
          onClose={handleClose}
        />
      )}
      <Card
        posts={posts}
        avatar="https://www.petz.com.br/novaLoja/images/icon.png"
        href="/user"
        onChange={value => setParam(value)}
        defaultCurrent={1}
        total={100}
        onClick={handleDelete}
      />
      <Divider />
      <Button type="primary" onClick={goBack}>
        {' '}
        Voltar
      </Button>
    </Container>
  )
}

export default Posts
