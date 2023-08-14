import { Typography, Modal, Button } from 'antd'
import { useState } from 'react'

const { Title } = Typography

export default function DashboardPages() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Title>h1. Ant Design</Title>
      <Button type='primary' onClick={() => setOpen(true)}>
        Modal
      </Button>
      <Modal title='Add city' open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} />
    </>
  )
}
