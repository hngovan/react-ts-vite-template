import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { notificationController } from '@/controllers/notificationController'
import { Button, Card, Col, Row, Space, Table } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { useMounted } from '@/hooks/useMounted'
import { useTranslation } from 'react-i18next'
import { getBasicTableData, DataType, PaginationProps, TagProps } from '@/api/product.api'
import { defineColorByPriority } from '@/utils/utils'
import * as S from './ProductPages.styles'
import type { ColumnsType } from 'antd/es/table'

const initialPagination: PaginationProps = {
  current: 1,
  pageSize: 5
}

interface StatusProps {
  color: string
  text: string
}

export const Status: React.FC<StatusProps> = ({ color, text }) => <S.StatusTag color={color}>{text}</S.StatusTag>

const ProductPage: React.FC = () => {
  const { t } = useTranslation()
  const { isMounted } = useMounted()

  const fetch = useCallback(
    (pagination: PaginationProps) => {
      setTableData(tableData => ({ ...tableData, loading: true }))
      getBasicTableData(pagination).then(res => {
        if (isMounted.current) {
          setTableData({ data: res.data, pagination: res.pagination, loading: false })
        }
      })
    },
    [isMounted]
  )

  useEffect(() => {
    fetch(initialPagination)
  }, [fetch])

  const [tableData, setTableData] = useState<{ data: DataType[]; pagination: PaginationProps; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false
  })

  const handleTableChange = (pagination: PaginationProps) => {
    fetch(pagination)
  }

  const handleDeleteRow = (rowId: number) => {
    setTableData({
      ...tableData,
      data: tableData.data.filter(item => item.key !== rowId),
      pagination: {
        ...tableData.pagination,
        total: tableData.pagination.total ? tableData.pagination.total - 1 : tableData.pagination.total
      }
    })
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <span>{text}</span>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: TagProps[]) => (
        <Row gutter={[10, 10]}>
          {tags.map((tag: TagProps) => {
            return (
              <Col key={tag.value}>
                <Status color={defineColorByPriority(tag.priority)} text={tag.value.toUpperCase()} />
              </Col>
            )
          })}
        </Row>
      )
    },
    {
      title: 'Action',
      key: 'action',
      width: '15%',
      render: (_, record: { name: string; key: number }) => (
        <Space size='middle' wrap>
          <Button
            type='primary'
            onClick={() => {
              notificationController.success({
                message: t('tables.inviteMessage', { name: record.name })
              })
            }}
          >
            {t('tables.invite')}
          </Button>
          <Button danger type='primary' onClick={() => handleDeleteRow(record.key)}>
            {t('tables.delete')}
          </Button>
        </Space>
      )
    }
  ]

  return (
    <>
      <PageTitle>{t('common.productPage')}</PageTitle>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title='Basic Table'>
            <Table
              columns={columns}
              dataSource={tableData.data}
              loading={tableData.loading}
              pagination={(tableData.pagination, { position: ['bottomCenter'] })}
              onChange={handleTableChange}
              scroll={{ x: 800 }}
              bordered
              footer={() => 'Footer'}
            />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductPage
