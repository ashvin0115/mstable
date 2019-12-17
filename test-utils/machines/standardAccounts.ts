import { Address } from "../../types/common";

/**
 * @dev Standard accounts
 */
export class StandardAccounts {

  /**
   * @dev Default accounts as per system Migrations
   */
  public all: Address[];
  public default: Address;
  public _: Address;
  public governor: Address;
  public fundManager: Address;
  public other: Address;
  public other2: Address;
  public oraclePriceProvider: Address;

  constructor(accounts: Address[]) {
    this.all = accounts;

    [this.default,
    this.governor,
    this.fundManager,
    this.other,
    this.other2,
    this.oraclePriceProvider,
    ] = accounts;

    this._ = this.default;
  }
}
