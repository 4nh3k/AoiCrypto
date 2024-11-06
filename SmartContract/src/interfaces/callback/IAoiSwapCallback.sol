//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IAoiSwapCallback {
    /// @notice Called to `msg.sender` after executing a swap via IAoiPool#swap
    /// @dev In the implementation you must pay the pool tokens owed for the swap.
    /// The caller of this method must be checked to be a AoiPool deployed for the AoiFactory
    /// amount0Delta and amount1Delta can both be 0 if no tokens were swapped
    /// @param amount0Delta The amount of token0 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token0 to the pool.
    /// @param amount1Delta The amount of token1 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token0 to the pool.
    /// @param data Any data passed through by the caller via the IAoiPoolActions#swap call
    function aoiSwapCallback(
        int256 amount0Delta,
        int256 amount1Delta,
        bytes calldata data
    ) external;
}
