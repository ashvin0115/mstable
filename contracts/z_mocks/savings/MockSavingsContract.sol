// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { StableMath } from "../../shared/StableMath.sol";

/**
 * @title   MockSavingsContract
 * @author  mStable
 * @notice  Mock of contracts/savings/SavingsContract.sol  // ISavingsContractV3
 *          DATE:    2022-01-12
 */
contract MockSavingsContract is ERC20 {
    using StableMath for uint256;
   
    uint8 dec;
    uint256 private constant startingRate = 1e17;
    uint256 public exchangeRate;

    // Underlying asset is underlying
    IERC20 public immutable underlying;

    event CreditsRedeemed(
        address indexed redeemer,
        uint256 creditsRedeemed,
        uint256 savingsCredited
    );
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        address _initialRecipient,
        uint256 _initialMint,
        address _underlying
    ) ERC20(_name, _symbol) {
        dec = _decimals;
        _mint(_initialRecipient, _initialMint * (10**uint256(_decimals)));
        underlying = IERC20(_underlying);
        exchangeRate = startingRate;
    }

    function decimals() public view override returns (uint8) {
        return dec;
    }

    /**
     * @dev Internally burn the credits and optionally send the underlying to msg.sender
     */
    function _redeem(
        uint256 _amt,
        bool _isCreditAmt,
        bool _transferUnderlying
    ) internal returns (uint256 creditsBurned, uint256 massetReturned) {
        // Centralise credit <> underlying calcs and minimise SLOAD count
        uint256 credits_;
        uint256 underlying_;
        uint256 exchangeRate_;
        // If the input is a credit amt, then calculate underlying payout and cache the exchangeRate
        if (_isCreditAmt) {
            credits_ = _amt;
            (underlying_, exchangeRate_) = _creditsToUnderlying(_amt);
        }
        // If the input is in underlying, then calculate credits needed to burn
        else {
            underlying_ = _amt;
            (credits_, exchangeRate_) = _underlyingToCredits(_amt);
        }

        // Burn required credits from the sender FIRST
        _burn(msg.sender, credits_);

        // Optionally, transfer tokens from here to sender
        if (_transferUnderlying) {
            require(underlying.transfer(msg.sender, underlying_), "Must send tokens");
        }
        // Cache and poke removed

        emit CreditsRedeemed(msg.sender, credits_, underlying_);

        return (credits_, underlying_);
    }

    
       function redeemAndUnwrap(
        uint256 _amount,
        bool _isCreditAmt,
        uint256 _minAmountOut,
        address _output,
        address _beneficiary,
        address _router,
        bool _isBassetOut
    ) external  returns (uint256 creditsBurned, uint256 massetReturned) {
        require(_amount > 0, "Must withdraw something");
        require(_output != address(0), "Output address is zero");
        require(_beneficiary != address(0), "Beneficiary address is zero");
        require(_router != address(0), "Router address is zero");

        // Collect recent interest generated by basket and update exchange rate - removed for simplicity

        // Ensure that the payout was sufficient
        (creditsBurned, massetReturned) = _redeem(_amount, _isCreditAmt, false);
        require(
            _isCreditAmt ? creditsBurned == _amount : massetReturned == _amount,
            "Invalid output"
        );

        // Approve wrapper to spend contract's underlying; just for this tx
        // underlying.approve(unwrapper, massetReturned);
        // Unwrap the underlying into `output` and transfer to `beneficiary`
        // IUnwrapper(unwrapper).unwrapAndSend()
    }
    /**
     * @dev Converts masset amount into credits based on exchange rate
     *               c = (masset / exchangeRate) + 1
     */
    function _underlyingToCredits(uint256 _underlying)
        internal
        view
        returns (uint256 credits, uint256 exchangeRate_)
    {
        // e.g. (1e20 * 1e18) / 1e18 = 1e20
        // e.g. (1e20 * 1e18) / 14e17 = 7.1429e19
        // e.g. 1 * 1e18 / 1e17 + 1 = 11 => 11 * 1e17 / 1e18 = 1.1e18 / 1e18 = 1
        exchangeRate_ = exchangeRate;
        credits = _underlying.divPrecisely(exchangeRate_) + 1;
    }

    /**
     * @dev Converts credit amount into masset based on exchange rate
     *               m = credits * exchangeRate
     */
    function _creditsToUnderlying(uint256 _credits)
        internal
        view
        returns (uint256 underlyingAmount, uint256 exchangeRate_)
    {
        // e.g. (1e20 * 1e18) / 1e18 = 1e20
        // e.g. (1e20 * 14e17) / 1e18 = 1.4e20
        exchangeRate_ = exchangeRate;
        underlyingAmount = _credits.mulTruncate(exchangeRate_);
    }
}
