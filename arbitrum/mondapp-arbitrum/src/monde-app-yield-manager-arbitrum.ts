import {
  DepositProcessed as DepositProcessedEvent,
  WithdrawProcessed as WithdrawProcessedEvent
} from "../generated/MondeAppYieldManagerArbitrum/MondeAppYieldManagerArbitrum"
import { DepositProcessed, WithdrawProcessed } from "../generated/schema"

export function handleDepositProcessed(event: DepositProcessedEvent): void {
  let entity = new DepositProcessed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.positionId = event.params.positionId
  entity.pool = event.params.pool
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.shares = event.params.shares

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawProcessed(event: WithdrawProcessedEvent): void {
  let entity = new WithdrawProcessed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.positionId = event.params.positionId
  entity.pool = event.params.pool
  entity.user = event.params.user
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
