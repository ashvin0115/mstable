import { shouldFail } from "openzeppelin-test-helpers";
import { ADDRESS_1, MASSET_FACTORY_BYTES } from "@utils/constants";
import {
  ERC20MockContract,
  GovernancePortalMockContract,
  ManagerMockContract,
  MassetContract,
  OracleHubMockContract,
} from "@utils/contracts";
import envSetup from "@utils/env_setup";
import { BassetMachine, MassetMachine, StandardAccounts, SystemMachine } from "@utils/machines";
import { percentToWeight, simpleToExactRelativePrice } from "@utils/math";
import { aToH, chai, BigNumber } from "@utils/tools";
import { Basset, BassetStatus } from "@utils/mstable-objects";
import { expectEvent, expectNoEvent } from "@utils/helpers";

envSetup.configure();
const { expect, assert } = chai;

/**
 * @notice Unit and integration tests to detect consequences of Basset deviating from peg
 * Masset created, prices injected into OracleHub and then peg detection initiated. If a
 * basset deviates beyond threshold, it is isolated and a governance proposal generated
 */
contract("Manager", async (accounts) => {
  const sa = new StandardAccounts(accounts);

  let systemMachine: SystemMachine;
  const massetMachine = new MassetMachine(sa.all, sa.other);
  const bassetMachine = new BassetMachine(sa._, sa.other);

  // let governancePortal: GovernancePortalMockContract;
  let manager: ManagerMockContract;
  let oracleHub: OracleHubMockContract;
  let governancePortal: GovernancePortalMockContract;

  before("Init contracts", async () => {
    /** Get fresh SystemMachine */
    systemMachine = new SystemMachine(accounts, sa.other);

    /** Create a basic mock representation of the deployed system */
    await systemMachine.initialiseMocks();

    manager = systemMachine.manager;
    oracleHub = systemMachine.oracleHub;
    governancePortal = systemMachine.governancePortal;
  });

  describe("Detect peg loss for Bassets on a Masset", () => {
    it("should revert if the Masset doesn't exist", async () => {
      await shouldFail.reverting.withMessage(
        manager.detectPegDeviation.sendTransactionAsync(
          ADDRESS_1,
        ), "Masset must exist",
      );
    });

    it("should do nothing if we have no pricing information", async () => {
      await systemMachine.createMassetViaManager();

      const massets = await manager.getMassets.callAsync();
      const masset = massets[0][0];

      // todo: check no events are emitted
      const res = await manager.detectPegDeviation.awaitTransactionSuccessAsync(masset);
      await expectNoEvent.inTransactionReceipt(
        res,
        "BassetBrokenPeg",
      );
    });

    it("should do nothing if the Basset has already been auctioned");
    it("should do nothing if the failed Basset has already been proposed");
    it("should create multiple proposals if multiple Bassets fail");

    it("should emit event, isolate Basset and trigger a proposal for a new upwards peg loss", async () => {

      // Set up the masset and get generated keys
      const massets = await manager.getMassets.callAsync();
      const masset = massets[0][0];
      const bassets = await massetMachine.getBassetsInMasset(masset);

      // Fresh basset should have normal status
      expect(bassets[0].status).to.equal(BassetStatus.Normal);

      // Inject arbitrary prices into mock oracle data
      await oracleHub.addMockPrices.sendTransactionAsync(
        [simpleToExactRelativePrice(1.2), simpleToExactRelativePrice(0.99827)],
        [bassets[0].key, bassets[1].key],
      );

      // Detect peg for the Masset we created
      const txReceipt = await manager.detectPegDeviation.awaitTransactionSuccessAsync(masset);

      // It should emit an event
      await expectEvent.inTransactionReceipt(
        txReceipt,
        "BassetBrokenPeg",
        { underPeg: false },
      );

      // It should isolate the basset
      const bassetsPostTrigger = await massetMachine.getBassetsInMasset(masset);
      assert(bassetsPostTrigger[0].status === BassetStatus.BrokenAbovePeg, "Should have set to broken peg");

      // It should create a new re-collateralisation proposal
      await expectEvent.inBlockByContract(
        governancePortal,
        txReceipt.blockNumber,
        "NewVoteProposed",
        { masset, basset: bassetsPostTrigger[0].addr },
      );

    });
    it("should emit broken downwards peg when basset deviates to 1.2x");
    it("should emit no events if there are no fresh prices");
    it("should emit no events if there are no price deviations breaking the threshold");
  });

  describe("Subsequent action triggered by peg loss", () => {
    it("Should set stuff up in the Masset", async () => {
      return Promise.resolve(true);
    });
  });
});
