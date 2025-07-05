import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DepositProcessed,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
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

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
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
