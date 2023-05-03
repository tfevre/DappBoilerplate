import React from 'react'
import { Badge, Flex, Text } from '@chakra-ui/react'
import { useBlockNumber, useNetwork } from 'wagmi'
import { LinkComponent } from './LinkComponent'

function GetNetworkColor(chain?: string) {
  if (chain === 'homestead') return 'yellow'
  if (chain === 'polygon') return 'purple'
  if (chain === 'polygonMumbai') return 'violet'
  if (chain === 'sepolia') return 'orange'
  return 'grey'
}
export function NetworkStatus() {
  const block = useBlockNumber({ watch: true })
  const network = useNetwork()
  const explorerUrl = network.chain?.blockExplorers?.default.url

  return (
    <Flex alignItems="center" gap={2}>
      <Badge colorScheme={GetNetworkColor(network.chain?.network)} fontSize="2xs">
        {network.chain?.name ?? ''}
      </Badge>

      {explorerUrl && (
        <LinkComponent href={explorerUrl}>
          <Text fontSize="2xs"># {block.data}</Text>
        </LinkComponent>
      )}
      {!explorerUrl && <Text fontSize="2xs"># {block.data}</Text>}
    </Flex>
  )
}