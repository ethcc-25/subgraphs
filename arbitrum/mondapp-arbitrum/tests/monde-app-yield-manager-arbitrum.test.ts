import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { DepositProcessed } from "../generated/schema"
import { DepositProcessed as DepositProcessedEvent } from "../generated/MondeAppYieldManagerArbitrum/MondeAppYieldManagerArbitrum"
import { handleDepositProcessed } from "../src/monde-app-yield-manager-arbitrum"
import { createDepositProcessedEvent } from "./monde-app-yield-manager-arbitrum-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let positionId = Bytes.fromI32(1234567890)
    let pool = 123
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let amount = BigInt.fromI32(234)
    let shares = BigInt.fromI32(234)
    let newDepositProcessedEvent = createDepositProcessedEvent(
      positionId,
      pool,
      user,
      amount,
      shares
    )
    handleDepositProcessed(newDepositProcessedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("DepositProcessed created and stored", () => {
    assert.entityCount("DepositProcessed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DepositProcessed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "positionId",
      "1234567890"
    )
    assert.fieldEquals(
      "DepositProcessed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "pool",
      "123"
    )
    assert.fieldEquals(
      "DepositProcessed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DepositProcessed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "DepositProcessed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "shares",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
