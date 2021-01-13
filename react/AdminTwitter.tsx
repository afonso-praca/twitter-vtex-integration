import React, { FC, useState } from 'react'
import { useMutation, useQuery } from 'react-apollo'
// import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader, Input, Button, Spinner } from 'vtex.styleguide'
import saveTokenGQL from './graphql/saveToken.gql'
import saveConfigGQL from './graphql/saveConfig.gql'
import getTokenGQL from './graphql/getToken.gql'
import getConfigGQL from './graphql/getConfig.gql'

const AdminTwitter: FC = () => {
  const [token, setToken] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setLoading] = useState(true)
  useQuery(getTokenGQL, { onCompleted: ({ token }) => {
    setToken(token)
    setLoading(false)
  }})
  useQuery(getConfigGQL, { onCompleted: ({ config }) => {
    console.log("config", config)
    setSearchTerm(config.searchTerm)
    setLoading(false)
  }})
  const [saveToken] = useMutation(saveTokenGQL, {
    onCompleted: () =>
      setLoading(false)
  })
  const [saveConfig] = useMutation(saveConfigGQL, {
    onCompleted: () =>
      setLoading(false)
  })

  return (
    <Layout
      pageHeader={
        <PageHeader
          title="Twitter Integration Setup"
        />
      }
    >
      <PageBlock variation="full">

        {isLoading &&
          <span className="dib c-muted-1">
            <Spinner /><br /><br />
          </span>
        }

        <h5>Twitter API Token</h5>

        <Input
          placeholder="API Token"
          value={token}
          onChange={(e: any) => setToken(e.target.value)}
        />

        <h5>Twitter Search Term</h5>

        <Input
          placeholder="Search Term"
          value={searchTerm}
          onChange={(e: any) => setSearchTerm(e.target.value)}
        />

        <br />

        <Button
          onClick={() => {
            setLoading(true)
            saveToken({ variables: { token } })
            saveConfig({ variables: { searchTerm } })
          }}
        >
          Save
        </Button>
      </PageBlock>
    </Layout>
  )
}

export default AdminTwitter
