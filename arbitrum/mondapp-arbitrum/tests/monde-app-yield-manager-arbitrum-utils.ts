import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DepositProcessed,
  WithdrawProcessed
} from "../generated/MondeAppYieldManagerArbitrum/MondeAppYieldManagerArbitrum"

export function createDepositProcessedEvent(
  positionId: Bytes,
  pool: i32,
  user: Address,
  amount: BigInt,
  shares: BigInt
): DepositProcessed {
  let depositProcessedEvent = changetype<DepositProcessed>(newMockEvent())

  depositProcessedEvent.parameters = new Array()

  depositProcessedEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromFixedBytes(positionId)
    )
  )
  depositProcessedEvent.parameters.push(
    new ethereum.EventParam(
      "pool",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(pool))
    )
  )
  depositProcessedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  depositProcessedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositProcessedEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )

  return depositProcessedEvent
}

export function createWithdrawProcessedEvent(
  positionId: Bytes,
  pool: i32,
  user: Address,
  amount: BigInt
): WithdrawProcessed {
  let withdrawProcessedEvent = changetype<WithdrawProcessed>(newMockEvent())

  withdrawProcessedEvent.parameters = new Array()

  withdrawProcessedEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromFixedBytes(positionId)
    )
  )
  withdrawProcessedEvent.parameters.push(
    new ethereum.EventParam(
      "pool",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(pool))
    )
  )
  withdrawProcessedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawProcessedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawProcessedEvent
}
