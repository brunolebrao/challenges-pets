import React from 'react'
import { List, Avatar, Button } from 'antd'
import { Link } from 'react-router-dom'

interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

interface IProps {
  posts: IPost[] | any[]
  avatar: string
  href: string
  onChange(value: number): any
  defaultCurrent: number
  total: number
  onClick: (value: number) => any
}

const Card: React.FC<IProps> = ({
  posts,
  avatar,
  onChange,
  defaultCurrent,
  total,
  href,
  onClick
}) => {
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={posts}
        size="large"
        pagination={{
          onChange,
          pageSize: 10,
          defaultCurrent,
          total,
          showSizeChanger: false
        }}
        renderItem={post => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={avatar} />}
              title={
                <Link to={`${href}/${post.id}`}>
                  {post?.title}
                </Link>
              }
              description={<p>{post?.body}</p>}
            />
            <Button
              type="dashed"
              htmlType="button"
              onClick={() => onClick(post.id)}
            >
              Deletar
            </Button>
          </List.Item>
        )}
      />
    </>
  )
}

export default Card
