const USER = {
  "contractName": "MapleUser",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenContractAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_itemContractAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_treasuryWallet",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "charId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weaponId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "userId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "UserCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "charId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weaponId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "UserDeleated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "charId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weaponId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "UserMatching",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "charId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weaponId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "UserUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "rewardTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_charId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_weaponId",
          "type": "uint256"
        }
      ],
      "name": "signUp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_charId",
          "type": "uint256"
        }
      ],
      "name": "updateChar",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_weaponId",
          "type": "uint256"
        }
      ],
      "name": "updateWeapon",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_rank",
          "type": "uint256"
        }
      ],
      "name": "checkReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "setRankReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_rank",
          "type": "uint256"
        }
      ],
      "name": "requestReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "matchUser",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "charToken",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "weaponToken",
              "type": "tuple"
            },
            {
              "internalType": "address payable",
              "name": "user",
              "type": "address"
            }
          ],
          "internalType": "struct MapleUser.UserInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "fetchUser",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "charToken",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "weaponToken",
              "type": "tuple"
            },
            {
              "internalType": "address payable",
              "name": "user",
              "type": "address"
            }
          ],
          "internalType": "struct MapleUser.UserInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "fetchUsers",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "charToken",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "weaponToken",
              "type": "tuple"
            },
            {
              "internalType": "address payable",
              "name": "user",
              "type": "address"
            }
          ],
          "internalType": "struct MapleUser.UserInfo[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155BatchReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC721Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenContractAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_nftContractAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_itemContractAddress\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"_treasuryWallet\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"charId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"weaponId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"charId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"weaponId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserDeleated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"charId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"weaponId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserMatching\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"charId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"weaponId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"rewardTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_rank\",\"type\":\"uint256\"}],\"name\":\"checkReward\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_user\",\"type\":\"address\"}],\"name\":\"fetchUser\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"charToken\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"weaponToken\",\"type\":\"tuple\"},{\"internalType\":\"address payable\",\"name\":\"user\",\"type\":\"address\"}],\"internalType\":\"struct MapleUser.UserInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fetchUsers\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"charToken\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"weaponToken\",\"type\":\"tuple\"},{\"internalType\":\"address payable\",\"name\":\"user\",\"type\":\"address\"}],\"internalType\":\"struct MapleUser.UserInfo[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_user\",\"type\":\"address\"}],\"name\":\"matchUser\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"charToken\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"weaponToken\",\"type\":\"tuple\"},{\"internalType\":\"address payable\",\"name\":\"user\",\"type\":\"address\"}],\"internalType\":\"struct MapleUser.UserInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC1155BatchReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC1155Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC721Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_rank\",\"type\":\"uint256\"}],\"name\":\"requestReward\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"}],\"name\":\"setRankReward\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_charId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_weaponId\",\"type\":\"uint256\"}],\"name\":\"signUp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_charId\",\"type\":\"uint256\"}],\"name\":\"updateChar\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_weaponId\",\"type\":\"uint256\"}],\"name\":\"updateWeapon\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MapleUser.sol\":\"MapleUser\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a2f8d5814dd0f05f22b740f18ca8321acc21c9bd03a6cb2203ea626e2f3f2\",\"dweb:/ipfs/QmZRQv9iuwU817VuqkA2WweiaibKii69x9QxYBBEfbNEud\"]},\"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\":{\"keccak256\":\"0x447a21c87433c0f11252912313a96f3454629ef88cca7a4eefbb283b3ec409f9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://67d35750fb5ced798b82b8ab085eb5f71529b0d4f72152d182b5bebdc770b20d\",\"dweb:/ipfs/QmUqmyzRZxaLvSXig87HFZgiUxv9ivc2VqfAbxEw7rx32d\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"keccak256\":\"0x6392f2cfe3a5ee802227fe7a2dfd47096d881aec89bddd214b35c5b46d3cd941\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd9c47a375639888e726a99da718890ba16d17d7ad9eacb0ccc892d46d1b3ee0\",\"dweb:/ipfs/Qmb41W5RUjy2sWg49A2rMnxekSeEk6SvGyJL5tyCCSr7un\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0xeb373f1fdc7b755c6a750123a9b9e3a8a02c1470042fd6505d875000a80bde0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0e28648f994abf1d6bc345644a361cc0b7efa544f8bc0c8ec26011fed85a91ec\",\"dweb:/ipfs/QmVVE7AiRjKaQYYji7TkjmTeVzGpNmms5eoxqTCfvvpj6D\"]},\"@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"keccak256\":\"0xa66d18b9a85458d28fc3304717964502ae36f7f8a2ff35bc83f6f85d74b03574\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e46c80ea068989111d6103e5521223f9ef337e93de76deed8b03f75c6f7b2797\",\"dweb:/ipfs/QmNoSE6knNfFncdDDLTb3fGR6oSQty1srG96Vsx3E9wQdw\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x0b606994df12f0ce35f6d2f6dcdde7e55e6899cdef7e00f180980caa81e3844e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c827c981a552d1c76c96060e92f56b52bc20c6f9b4dbf911fe99ddbfb41f2ea\",\"dweb:/ipfs/QmW8xvJdzHrr8Ry34C7viBsgG2b8T1mL4BQWJ5CdfD9JLB\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xed6a749c5373af398105ce6ee3ac4763aa450ea7285d268c85d9eeca809cdb1f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://20a97f891d06f0fe91560ea1a142aaa26fdd22bed1b51606b7d48f670deeb50f\",\"dweb:/ipfs/QmTbCtZKChpaX5H2iRiTDMcSz29GSLCpTCDgJpcMR4wg8x\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xd6153ce99bcdcce22b124f755e72553295be6abcd63804cfdffceb188b8bef10\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://35c47bece3c03caaa07fab37dd2bb3413bfbca20db7bd9895024390e0a469487\",\"dweb:/ipfs/QmPGWT2x3QHcKxqe6gRmAkdakhbaRgx3DLzcakHz5M4eXG\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0x6d46ba35a03980a62eb23b06bc1c9b4c381fb5cec22d24e22ef99187254378c3\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://89f07d0c627d6a08242969b011154e7620ff962753b147e64dc3b0870832db30\",\"dweb:/ipfs/Qmcdew5EtewTCyojfBihLYMB1Lge8Si9PSugNDyiofp1HY\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0x02add59a18b8f9012f2043575b93d04fde563e3b940ccf50b5358e1cbe9e6ebd\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://feb1b5de36d206ec0be059e8e5110936a9a5e13f73b0cb375b3a35e87819ebd0\",\"dweb:/ipfs/QmSX53o3uqjeSaaDofNKswHREGfbf13CXXfnsxye1yHF68\"]},\"project:/contracts/MapleUser.sol\":{\"keccak256\":\"0xab0c1415655be72ba91916a338c19427a5a37b1116d3e1654dbec26848806fb4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://54226c6a1788c9f06f544a593e88cbcf50d810b01084950a7f299b5c1f692a4d\",\"dweb:/ipfs/QmanRAoKpsxef3M5et529X9jtrdmNW1uEzyP9JyJLudT34\"]},\"project:/contracts/VJMToken.sol\":{\"keccak256\":\"0xe2f8a326fd1fbe8e2bf0e7365ad261285fde71804fe77694ce986d47c106f061\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://f6ee599ebeff106e2eb9d3a6b0c01915cfc6f76e0916b4215e9c80c5c992e475\",\"dweb:/ipfs/QmXz1MZL3nGq7C8o1JW57rgYr6Z4iDV4Kba279dw4Smt4M\"]}},\"version\":1}",
  "bytecode": "0x6080604052670de0b6b3a76400006002556000600355600060045560006005553480156200002c57600080fd5b506040516200184a3803806200184a8339810160408190526200004f91620001b9565b6200005a33620000aa565b6200006584620000fa565b50600880546001600160a01b039485166001600160a01b0319918216179091556009805493851693821693909317909255600780549190931691161790555062000221565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620001066200013f565b6001600160a01b0382166200011a57600080fd5b50600680546001600160a01b0383166001600160a01b03199091161790556001919050565b6000546001600160a01b031633146200019e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6001600160a01b0381168114620001b657600080fd5b50565b60008060008060808587031215620001d057600080fd5b8451620001dd81620001a0565b6020860151909450620001f081620001a0565b60408601519093506200020381620001a0565b60608601519092506200021681620001a0565b939692955090935050565b61161980620002316000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063bc197c8111610097578063da56ef3a11610066578063da56ef3a14610258578063e46989911461026b578063f23a6e611461028c578063f2fde38b146102c457600080fd5b8063bc197c81146101d8578063be6f0ea214610210578063bfcad43314610230578063d99380b41461024557600080fd5b806399c6dc05116100d357806399c6dc051461018c578063a3469f741461019f578063aeeda6bf146101b2578063b62d08d4146101c557600080fd5b8063150b7a02146100fa578063715018a6146101675780638da5cb5b14610171575b600080fd5b610131610108366004611178565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b61016f6102d7565b005b6000546040516001600160a01b03909116815260200161015e565b61016f61019a3660046111e4565b6102eb565b61016f6101ad3660046111e4565b610426565b61016f6101c03660046111fd565b6104b2565b61016f6101d33660046111e4565b6107b1565b6101316101e636600461129f565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b61022361021e36600461134d565b6108f1565b60405161015e9190611371565b610238610972565b60405161015e91906113d3565b61016f6102533660046111e4565b610ab8565b61022361026636600461134d565b610d37565b61027e6102793660046111e4565b610eb4565b60405190815260200161015e565b61013161029a366004611475565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b61016f6102d236600461134d565b610ef5565b6102df610f85565b6102e96000610fdf565b565b6008546040516331a9108f60e11b8152600481018390526001600160a01b0390911690636352211e90602401602060405180830381865afa158015610334573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035891906114de565b6001600160a01b0316336001600160a01b0316146103c75760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920636861726163746572206f776e6572732063616e207369676e20756044820152600760fc1b60648201526084015b60405180910390fd5b336000818152600b60209081526040918290206002810185905560040154825185815291820152908101919091527fb4e54a03420cbd5ff517551dc147bf23b4185e3b819d2f217ea0e6c6281d8d83906060015b60405180910390a150565b600a610433826005611511565b61043d919061153e565b6003600082825461044e9190611552565b90915550600a9050610461826003611511565b61046b919061153e565b6004600082825461047c9190611552565b90915550600a905061048f826002611511565b610499919061153e565b600560008282546104aa9190611552565b909155505050565b6008546040516331a9108f60e11b8152600481018490526001600160a01b0390911690636352211e90602401602060405180830381865afa1580156104fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051f91906114de565b6001600160a01b0316336001600160a01b0316146105895760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920636861726163746572206f776e6572732063616e207369676e20756044820152600760fc1b60648201526084016103be565b600954604051627eeac760e11b8152336004820152602481018390526001600160a01b039091169062fdd58e90604401602060405180830381865afa1580156105d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fa9190611565565b6000036106495760405162461bcd60e51b815260206004820152601e60248201527f6f6e6c7920776561706f6e206f776e6572732063616e207369676e207570000060448201526064016103be565b610657600180546001019055565b600061066260015490565b600a805460018082019092557fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80180543373ffffffffffffffffffffffffffffffffffffffff1991821681179092556040805160808082018352868252825180840184526008546001600160a01b03908116825260208083018d905280850192835285518087018752600954831681528082018d905285870190815260608087018a815260008b8152600b855289902097518855945180519b880180548b169c86169c909c17909b559982015160028701555180516003870180548a1691851691909117905581015160048601559151600590940180549096169316929092179093558151898152908101889052908101859052928301919091529192507fb71cf8dd9f35ff09f0b312ae47365f80792968af9383e6cbc7f9c12054d6cc3d91015b60405180910390a1505050565b600954604051627eeac760e11b8152336004820152602481018390526001600160a01b039091169062fdd58e90604401602060405180830381865afa1580156107fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108229190611565565b6000036108975760405162461bcd60e51b815260206004820152602660248201527f6f6e6c7920776561706f6e206f776e6572732063616e2075706461746520757360448201527f6572496e666f000000000000000000000000000000000000000000000000000060648201526084016103be565b336000818152600b602090815260409182902060048101859055600201548251908152908101849052908101919091527fb4e54a03420cbd5ff517551dc147bf23b4185e3b819d2f217ea0e6c6281d8d839060600161041b565b6108f961103c565b506001600160a01b039081166000908152600b60209081526040918290208251608081018452815481528351808501855260018301548616815260028301548185015281840152835180850185526003830154861681526004830154938101939093529283019190915260050154909116606082015290565b6060600061097f60015490565b905060008167ffffffffffffffff81111561099c5761099c6110c1565b6040519080825280602002602001820160405280156109d557816020015b6109c261103c565b8152602001906001900390816109ba5790505b50905060005b82811015610ab1576000600a82815481106109f8576109f861157e565b60009182526020808320909101546001600160a01b03908116808452600b835260409384902084516080810186528154815285518087018752600183015485168152600283015481870152818601528551808701875260038301548516815260048301549581019590955294850193909352600583015490911660608401528551909350909190859085908110610a9157610a9161157e565b602002602001018190525050508080610aa990611594565b9150506109db565b5092915050565b600481108015610ac85750600081115b610b3a5760405162461bcd60e51b815260206004820152602260248201527f796f75206e65656420746f2072616e6b20757020666f7220746865207265776160448201527f726400000000000000000000000000000000000000000000000000000000000060648201526084016103be565b600081600103610b535750600380546000909155610b7d565b81600203610b6a5750600480546000909155610b7d565b81600303610b7d57506005805460009091555b6006546007546040517fd83a2bf30000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015230602482015260448101849052600092919091169063d83a2bf3906064016020604051808303816000875af1158015610bf6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1a91906115ad565b905080610c695760405162461bcd60e51b815260206004820152601560248201527f496e637265617365436f6e7472616374204661696c000000000000000000000060448201526064016103be565b6006546007546040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b039182166004820152336024820152604481018590529116906323b872dd906064016020604051808303816000875af1158015610cdd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0191906115ad565b50604080518381523360208201527ff77e4bb9025e3700758004f467a01764ed3e2b0245b45b918b6107e1770f32bb91016107a4565b610d3f61103c565b600154600103610d915760405162461bcd60e51b815260206004820152601b60248201527f796f752061726520746865206f6e6c79206f6e6520706c61796572000000000060448201526064016103be565b6000610d9c60015490565b905060008142604051602001610db491815260200190565b6040516020818303038152906040528051906020012060001c610dd791906115cf565b90506000600a8281548110610dee57610dee61157e565b60009182526020808320909101546001600160a01b03908116808452600b909252604090922060050154909250811690861614610ea2576001600160a01b039081166000908152600b602090815260409182902082516080810184528154815283518085018552600183015486168152600283015481850152818401528351808501855260038301548616815260048301549381019390935292830191909152600501549091166060820152949350505050565b610eab85610d37565b95945050505050565b6000806001839003610ec95750600354610eef565b82600203610eda5750600454610eef565b82600303610eeb5750600554610eef565b5060005b92915050565b610efd610f85565b6001600160a01b038116610f795760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016103be565b610f8281610fdf565b50565b6000546001600160a01b031633146102e95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103be565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604051806080016040528060008152602001611074604051806040016040528060006001600160a01b03168152602001600081525090565b815260200161109f604051806040016040528060006001600160a01b03168152602001600081525090565b8152600060209091015290565b6001600160a01b0381168114610f8257600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611100576111006110c1565b604052919050565b600082601f83011261111957600080fd5b813567ffffffffffffffff811115611133576111336110c1565b611146601f8201601f19166020016110d7565b81815284602083860101111561115b57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561118e57600080fd5b8435611199816110ac565b935060208501356111a9816110ac565b925060408501359150606085013567ffffffffffffffff8111156111cc57600080fd5b6111d887828801611108565b91505092959194509250565b6000602082840312156111f657600080fd5b5035919050565b6000806040838503121561121057600080fd5b50508035926020909101359150565b600082601f83011261123057600080fd5b8135602067ffffffffffffffff82111561124c5761124c6110c1565b8160051b61125b8282016110d7565b928352848101820192828101908785111561127557600080fd5b83870192505b848310156112945782358252918301919083019061127b565b979650505050505050565b600080600080600060a086880312156112b757600080fd5b85356112c2816110ac565b945060208601356112d2816110ac565b9350604086013567ffffffffffffffff808211156112ef57600080fd5b6112fb89838a0161121f565b9450606088013591508082111561131157600080fd5b61131d89838a0161121f565b9350608088013591508082111561133357600080fd5b5061134088828901611108565b9150509295509295909350565b60006020828403121561135f57600080fd5b813561136a816110ac565b9392505050565b60c08101610eef82848051825260208082015180516001600160a01b03168285015290810151604084015250604081015180516001600160a01b031660608401526020810151608084015250606001516001600160a01b031660a09190910152565b6020808252825182820181905260009190848201906040850190845b81811015611469576114568385518051825260208082015180516001600160a01b03168285015290810151604084015250604081015180516001600160a01b031660608401526020810151608084015250606001516001600160a01b031660a09190910152565b9284019260c092909201916001016113ef565b50909695505050505050565b600080600080600060a0868803121561148d57600080fd5b8535611498816110ac565b945060208601356114a8816110ac565b93506040860135925060608601359150608086013567ffffffffffffffff8111156114d257600080fd5b61134088828901611108565b6000602082840312156114f057600080fd5b815161136a816110ac565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610eef57610eef6114fb565b634e487b7160e01b600052601260045260246000fd5b60008261154d5761154d611528565b500490565b80820180821115610eef57610eef6114fb565b60006020828403121561157757600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b6000600182016115a6576115a66114fb565b5060010190565b6000602082840312156115bf57600080fd5b8151801515811461136a57600080fd5b6000826115de576115de611528565b50069056fea2646970667358221220276b7f2bed5d8946bfa559ba9b1b1cacb4a7075f45c571b6998560dfc0f6352964736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100f55760003560e01c8063bc197c8111610097578063da56ef3a11610066578063da56ef3a14610258578063e46989911461026b578063f23a6e611461028c578063f2fde38b146102c457600080fd5b8063bc197c81146101d8578063be6f0ea214610210578063bfcad43314610230578063d99380b41461024557600080fd5b806399c6dc05116100d357806399c6dc051461018c578063a3469f741461019f578063aeeda6bf146101b2578063b62d08d4146101c557600080fd5b8063150b7a02146100fa578063715018a6146101675780638da5cb5b14610171575b600080fd5b610131610108366004611178565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b61016f6102d7565b005b6000546040516001600160a01b03909116815260200161015e565b61016f61019a3660046111e4565b6102eb565b61016f6101ad3660046111e4565b610426565b61016f6101c03660046111fd565b6104b2565b61016f6101d33660046111e4565b6107b1565b6101316101e636600461129f565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b61022361021e36600461134d565b6108f1565b60405161015e9190611371565b610238610972565b60405161015e91906113d3565b61016f6102533660046111e4565b610ab8565b61022361026636600461134d565b610d37565b61027e6102793660046111e4565b610eb4565b60405190815260200161015e565b61013161029a366004611475565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b61016f6102d236600461134d565b610ef5565b6102df610f85565b6102e96000610fdf565b565b6008546040516331a9108f60e11b8152600481018390526001600160a01b0390911690636352211e90602401602060405180830381865afa158015610334573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035891906114de565b6001600160a01b0316336001600160a01b0316146103c75760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920636861726163746572206f776e6572732063616e207369676e20756044820152600760fc1b60648201526084015b60405180910390fd5b336000818152600b60209081526040918290206002810185905560040154825185815291820152908101919091527fb4e54a03420cbd5ff517551dc147bf23b4185e3b819d2f217ea0e6c6281d8d83906060015b60405180910390a150565b600a610433826005611511565b61043d919061153e565b6003600082825461044e9190611552565b90915550600a9050610461826003611511565b61046b919061153e565b6004600082825461047c9190611552565b90915550600a905061048f826002611511565b610499919061153e565b600560008282546104aa9190611552565b909155505050565b6008546040516331a9108f60e11b8152600481018490526001600160a01b0390911690636352211e90602401602060405180830381865afa1580156104fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051f91906114de565b6001600160a01b0316336001600160a01b0316146105895760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920636861726163746572206f776e6572732063616e207369676e20756044820152600760fc1b60648201526084016103be565b600954604051627eeac760e11b8152336004820152602481018390526001600160a01b039091169062fdd58e90604401602060405180830381865afa1580156105d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fa9190611565565b6000036106495760405162461bcd60e51b815260206004820152601e60248201527f6f6e6c7920776561706f6e206f776e6572732063616e207369676e207570000060448201526064016103be565b610657600180546001019055565b600061066260015490565b600a805460018082019092557fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80180543373ffffffffffffffffffffffffffffffffffffffff1991821681179092556040805160808082018352868252825180840184526008546001600160a01b03908116825260208083018d905280850192835285518087018752600954831681528082018d905285870190815260608087018a815260008b8152600b855289902097518855945180519b880180548b169c86169c909c17909b559982015160028701555180516003870180548a1691851691909117905581015160048601559151600590940180549096169316929092179093558151898152908101889052908101859052928301919091529192507fb71cf8dd9f35ff09f0b312ae47365f80792968af9383e6cbc7f9c12054d6cc3d91015b60405180910390a1505050565b600954604051627eeac760e11b8152336004820152602481018390526001600160a01b039091169062fdd58e90604401602060405180830381865afa1580156107fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108229190611565565b6000036108975760405162461bcd60e51b815260206004820152602660248201527f6f6e6c7920776561706f6e206f776e6572732063616e2075706461746520757360448201527f6572496e666f000000000000000000000000000000000000000000000000000060648201526084016103be565b336000818152600b602090815260409182902060048101859055600201548251908152908101849052908101919091527fb4e54a03420cbd5ff517551dc147bf23b4185e3b819d2f217ea0e6c6281d8d839060600161041b565b6108f961103c565b506001600160a01b039081166000908152600b60209081526040918290208251608081018452815481528351808501855260018301548616815260028301548185015281840152835180850185526003830154861681526004830154938101939093529283019190915260050154909116606082015290565b6060600061097f60015490565b905060008167ffffffffffffffff81111561099c5761099c6110c1565b6040519080825280602002602001820160405280156109d557816020015b6109c261103c565b8152602001906001900390816109ba5790505b50905060005b82811015610ab1576000600a82815481106109f8576109f861157e565b60009182526020808320909101546001600160a01b03908116808452600b835260409384902084516080810186528154815285518087018752600183015485168152600283015481870152818601528551808701875260038301548516815260048301549581019590955294850193909352600583015490911660608401528551909350909190859085908110610a9157610a9161157e565b602002602001018190525050508080610aa990611594565b9150506109db565b5092915050565b600481108015610ac85750600081115b610b3a5760405162461bcd60e51b815260206004820152602260248201527f796f75206e65656420746f2072616e6b20757020666f7220746865207265776160448201527f726400000000000000000000000000000000000000000000000000000000000060648201526084016103be565b600081600103610b535750600380546000909155610b7d565b81600203610b6a5750600480546000909155610b7d565b81600303610b7d57506005805460009091555b6006546007546040517fd83a2bf30000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015230602482015260448101849052600092919091169063d83a2bf3906064016020604051808303816000875af1158015610bf6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1a91906115ad565b905080610c695760405162461bcd60e51b815260206004820152601560248201527f496e637265617365436f6e7472616374204661696c000000000000000000000060448201526064016103be565b6006546007546040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b039182166004820152336024820152604481018590529116906323b872dd906064016020604051808303816000875af1158015610cdd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0191906115ad565b50604080518381523360208201527ff77e4bb9025e3700758004f467a01764ed3e2b0245b45b918b6107e1770f32bb91016107a4565b610d3f61103c565b600154600103610d915760405162461bcd60e51b815260206004820152601b60248201527f796f752061726520746865206f6e6c79206f6e6520706c61796572000000000060448201526064016103be565b6000610d9c60015490565b905060008142604051602001610db491815260200190565b6040516020818303038152906040528051906020012060001c610dd791906115cf565b90506000600a8281548110610dee57610dee61157e565b60009182526020808320909101546001600160a01b03908116808452600b909252604090922060050154909250811690861614610ea2576001600160a01b039081166000908152600b602090815260409182902082516080810184528154815283518085018552600183015486168152600283015481850152818401528351808501855260038301548616815260048301549381019390935292830191909152600501549091166060820152949350505050565b610eab85610d37565b95945050505050565b6000806001839003610ec95750600354610eef565b82600203610eda5750600454610eef565b82600303610eeb5750600554610eef565b5060005b92915050565b610efd610f85565b6001600160a01b038116610f795760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016103be565b610f8281610fdf565b50565b6000546001600160a01b031633146102e95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103be565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604051806080016040528060008152602001611074604051806040016040528060006001600160a01b03168152602001600081525090565b815260200161109f604051806040016040528060006001600160a01b03168152602001600081525090565b8152600060209091015290565b6001600160a01b0381168114610f8257600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611100576111006110c1565b604052919050565b600082601f83011261111957600080fd5b813567ffffffffffffffff811115611133576111336110c1565b611146601f8201601f19166020016110d7565b81815284602083860101111561115b57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561118e57600080fd5b8435611199816110ac565b935060208501356111a9816110ac565b925060408501359150606085013567ffffffffffffffff8111156111cc57600080fd5b6111d887828801611108565b91505092959194509250565b6000602082840312156111f657600080fd5b5035919050565b6000806040838503121561121057600080fd5b50508035926020909101359150565b600082601f83011261123057600080fd5b8135602067ffffffffffffffff82111561124c5761124c6110c1565b8160051b61125b8282016110d7565b928352848101820192828101908785111561127557600080fd5b83870192505b848310156112945782358252918301919083019061127b565b979650505050505050565b600080600080600060a086880312156112b757600080fd5b85356112c2816110ac565b945060208601356112d2816110ac565b9350604086013567ffffffffffffffff808211156112ef57600080fd5b6112fb89838a0161121f565b9450606088013591508082111561131157600080fd5b61131d89838a0161121f565b9350608088013591508082111561133357600080fd5b5061134088828901611108565b9150509295509295909350565b60006020828403121561135f57600080fd5b813561136a816110ac565b9392505050565b60c08101610eef82848051825260208082015180516001600160a01b03168285015290810151604084015250604081015180516001600160a01b031660608401526020810151608084015250606001516001600160a01b031660a09190910152565b6020808252825182820181905260009190848201906040850190845b81811015611469576114568385518051825260208082015180516001600160a01b03168285015290810151604084015250604081015180516001600160a01b031660608401526020810151608084015250606001516001600160a01b031660a09190910152565b9284019260c092909201916001016113ef565b50909695505050505050565b600080600080600060a0868803121561148d57600080fd5b8535611498816110ac565b945060208601356114a8816110ac565b93506040860135925060608601359150608086013567ffffffffffffffff8111156114d257600080fd5b61134088828901611108565b6000602082840312156114f057600080fd5b815161136a816110ac565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610eef57610eef6114fb565b634e487b7160e01b600052601260045260246000fd5b60008261154d5761154d611528565b500490565b80820180821115610eef57610eef6114fb565b60006020828403121561157757600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b6000600182016115a6576115a66114fb565b5060010190565b6000602082840312156115bf57600080fd5b8151801515811461136a57600080fd5b6000826115de576115de611528565b50069056fea2646970667358221220276b7f2bed5d8946bfa559ba9b1b1cacb4a7075f45c571b6998560dfc0f6352964736f6c63430008110033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:1175:38",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:38",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "59:86:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "123:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "132:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "135:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "125:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "125:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "125:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "82:5:38"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "93:5:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "108:3:38",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "113:1:38",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "104:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "104:11:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "117:1:38",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "100:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "100:19:38"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "89:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "89:31:38"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "79:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "79:42:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "72:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "72:50:38"
                  },
                  "nodeType": "YulIf",
                  "src": "69:70:38"
                }
              ]
            },
            "name": "validator_revert_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "48:5:38",
                "type": ""
              }
            ],
            "src": "14:131:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "290:522:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "337:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "346:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "349:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "339:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "339:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "339:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "311:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "320:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "307:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "307:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "332:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "303:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "303:33:38"
                  },
                  "nodeType": "YulIf",
                  "src": "300:53:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "362:29:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "381:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "375:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "375:16:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "366:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "425:5:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "400:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "400:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "400:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "440:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "450:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "440:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "464:40:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "489:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "500:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "485:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "485:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "479:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "479:25:38"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "468:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "538:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "513:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "513:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "513:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "555:17:38",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "565:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "555:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "581:40:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "606:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "617:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "602:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "602:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "596:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "596:25:38"
                  },
                  "variables": [
                    {
                      "name": "value_2",
                      "nodeType": "YulTypedName",
                      "src": "585:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_2",
                        "nodeType": "YulIdentifier",
                        "src": "655:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "630:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "630:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "630:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "672:17:38",
                  "value": {
                    "name": "value_2",
                    "nodeType": "YulIdentifier",
                    "src": "682:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "672:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "698:40:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "723:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "734:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "719:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "719:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "713:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "713:25:38"
                  },
                  "variables": [
                    {
                      "name": "value_3",
                      "nodeType": "YulTypedName",
                      "src": "702:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_3",
                        "nodeType": "YulIdentifier",
                        "src": "772:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "747:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "747:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "747:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "789:17:38",
                  "value": {
                    "name": "value_3",
                    "nodeType": "YulIdentifier",
                    "src": "799:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "789:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_addresst_address_payable_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "232:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "243:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "255:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "263:6:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "271:6:38",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "279:6:38",
                "type": ""
              }
            ],
            "src": "150:662:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "991:182:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1008:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1019:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1001:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1001:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1001:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1042:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1053:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1038:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1038:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1058:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1031:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1031:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1031:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1081:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1092:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1077:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1077:18:38"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1097:34:38",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1070:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1070:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1070:62:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1141:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1153:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1164:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1149:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1149:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1141:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "968:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "982:4:38",
                "type": ""
              }
            ],
            "src": "817:356:38"
          }
        ]
      },
      "contents": "{\n    { }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_addresst_addresst_address_payable_fromMemory(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := mload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        let value_2 := mload(add(headStart, 64))\n        validator_revert_address(value_2)\n        value2 := value_2\n        let value_3 := mload(add(headStart, 96))\n        validator_revert_address(value_3)\n        value3 := value_3\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 38,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:14381:38",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:38",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "59:109:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "146:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "155:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "158:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "148:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "148:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "148:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "82:5:38"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "93:5:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "100:42:38",
                                "type": "",
                                "value": "0xffffffffffffffffffffffffffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "89:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "89:54:38"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "79:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "79:65:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "72:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "72:73:38"
                  },
                  "nodeType": "YulIf",
                  "src": "69:93:38"
                }
              ]
            },
            "name": "validator_revert_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "48:5:38",
                "type": ""
              }
            ],
            "src": "14:154:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "205:152:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "222:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "225:77:38",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "215:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "215:88:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "215:88:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "319:1:38",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "322:4:38",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "312:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "312:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "312:15:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "343:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "346:4:38",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "336:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "336:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "336:15:38"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "173:184:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "407:230:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "417:19:38",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "433:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "427:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "427:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "417:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "445:58:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "467:6:38"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "size",
                                "nodeType": "YulIdentifier",
                                "src": "483:4:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "489:2:38",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "479:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "479:13:38"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "498:2:38",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "494:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "494:7:38"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "475:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "475:27:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "463:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "463:40:38"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "449:10:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "578:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "580:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "580:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "580:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "521:10:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "533:18:38",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "518:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "518:34:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "557:10:38"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "569:6:38"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "554:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "554:22:38"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "515:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "515:62:38"
                  },
                  "nodeType": "YulIf",
                  "src": "512:88:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "616:2:38",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "620:10:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "609:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "609:22:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "609:22:38"
                }
              ]
            },
            "name": "allocate_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "387:4:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "396:6:38",
                "type": ""
              }
            ],
            "src": "362:275:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "694:478:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "743:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "752:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "755:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "745:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "745:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "745:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "722:6:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "730:4:38",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "718:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "718:17:38"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "737:3:38"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "714:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "714:27:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "707:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "707:35:38"
                  },
                  "nodeType": "YulIf",
                  "src": "704:55:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "768:30:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "791:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "778:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "778:20:38"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "772:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "837:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "839:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "839:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "839:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "813:2:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "817:18:38",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "810:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "810:26:38"
                  },
                  "nodeType": "YulIf",
                  "src": "807:52:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "868:70:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "_1",
                                    "nodeType": "YulIdentifier",
                                    "src": "911:2:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "915:4:38",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "907:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "907:13:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "926:2:38",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nodeType": "YulIdentifier",
                                  "src": "922:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "922:7:38"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "903:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "903:27:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "932:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "899:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "899:38:38"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "883:15:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "883:55:38"
                  },
                  "variables": [
                    {
                      "name": "array_1",
                      "nodeType": "YulTypedName",
                      "src": "872:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array_1",
                        "nodeType": "YulIdentifier",
                        "src": "954:7:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "963:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "947:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "947:19:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "947:19:38"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1014:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1023:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1026:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1016:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1016:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1016:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "989:6:38"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "997:2:38"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "985:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "985:15:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1002:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "981:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "981:26:38"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1009:3:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "978:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "978:35:38"
                  },
                  "nodeType": "YulIf",
                  "src": "975:55:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "array_1",
                            "nodeType": "YulIdentifier",
                            "src": "1056:7:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1065:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1052:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1052:18:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1076:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1084:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1072:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1072:17:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "1091:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "1039:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1039:55:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1039:55:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "array_1",
                                "nodeType": "YulIdentifier",
                                "src": "1118:7:38"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "1127:2:38"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1114:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1114:16:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1132:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1110:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1110:27:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1139:1:38",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1103:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1103:38:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1103:38:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1150:16:38",
                  "value": {
                    "name": "array_1",
                    "nodeType": "YulIdentifier",
                    "src": "1159:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "1150:5:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_bytes",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "668:6:38",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "676:3:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "684:5:38",
                "type": ""
              }
            ],
            "src": "642:530:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1307:535:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1354:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1363:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1366:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1356:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1356:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1356:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1328:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1337:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1324:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1324:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1349:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1320:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1320:33:38"
                  },
                  "nodeType": "YulIf",
                  "src": "1317:53:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1379:36:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1405:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1392:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1392:23:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1383:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1449:5:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1424:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1424:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1424:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1464:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1474:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1464:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1488:47:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1520:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1531:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1516:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1516:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1503:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1503:32:38"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "1492:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "1569:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1544:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1544:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1544:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1586:17:38",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "1596:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1586:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1612:42:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1639:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1650:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1635:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1635:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1622:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1622:32:38"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "1612:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1663:46:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1694:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1705:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1690:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1690:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1677:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1677:32:38"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "1667:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1752:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1761:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1764:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1754:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1754:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1754:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1724:6:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1732:18:38",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1721:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1721:30:38"
                  },
                  "nodeType": "YulIf",
                  "src": "1718:50:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1777:59:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1808:9:38"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1819:6:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1804:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1804:22:38"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "1828:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "1787:16:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1787:49:38"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "1777:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1249:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1260:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1272:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1280:6:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "1288:6:38",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "1296:6:38",
                "type": ""
              }
            ],
            "src": "1177:665:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1946:149:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1956:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1968:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1979:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1964:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1964:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1956:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1998:9:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2013:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2021:66:38",
                            "type": "",
                            "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2009:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2009:79:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1991:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1991:98:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1991:98:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1915:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1926:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1937:4:38",
                "type": ""
              }
            ],
            "src": "1847:248:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2201:125:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2211:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2223:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2234:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2219:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2219:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2211:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2253:9:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2268:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2276:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2264:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2264:55:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2246:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2246:74:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2246:74:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2170:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2181:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2192:4:38",
                "type": ""
              }
            ],
            "src": "2100:226:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2401:110:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2447:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2456:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2459:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2449:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2449:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2449:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2422:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2431:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2418:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2418:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2443:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2414:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2414:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "2411:52:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2472:33:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2495:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2482:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2482:23:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2472:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2367:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2378:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2390:6:38",
                "type": ""
              }
            ],
            "src": "2331:180:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2603:161:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2649:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2658:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2661:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2651:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2651:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2651:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2624:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2633:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2620:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2620:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2645:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2616:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2616:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "2613:52:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2674:33:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2697:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2684:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2684:23:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2674:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2716:42:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2743:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2754:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2739:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2739:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2726:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2726:32:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "2716:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2561:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2572:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2584:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2592:6:38",
                "type": ""
              }
            ],
            "src": "2516:248:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2833:648:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2882:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2891:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2894:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2884:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2884:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2884:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2861:6:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2869:4:38",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2857:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2857:17:38"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "2876:3:38"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "2853:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2853:27:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2846:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2846:35:38"
                  },
                  "nodeType": "YulIf",
                  "src": "2843:55:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2907:30:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2930:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2917:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2917:20:38"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "2911:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2946:14:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2956:4:38",
                    "type": "",
                    "value": "0x20"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "2950:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2999:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "3001:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3001:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3001:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2975:2:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2979:18:38",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2972:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2972:26:38"
                  },
                  "nodeType": "YulIf",
                  "src": "2969:52:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3030:20:38",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3044:1:38",
                        "type": "",
                        "value": "5"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "3047:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "shl",
                      "nodeType": "YulIdentifier",
                      "src": "3040:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3040:10:38"
                  },
                  "variables": [
                    {
                      "name": "_3",
                      "nodeType": "YulTypedName",
                      "src": "3034:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3059:39:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "_3",
                            "nodeType": "YulIdentifier",
                            "src": "3090:2:38"
                          },
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "3094:2:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3086:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3086:11:38"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "3070:15:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3070:28:38"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "3063:3:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3107:16:38",
                  "value": {
                    "name": "dst",
                    "nodeType": "YulIdentifier",
                    "src": "3120:3:38"
                  },
                  "variables": [
                    {
                      "name": "dst_1",
                      "nodeType": "YulTypedName",
                      "src": "3111:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "3139:3:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "3144:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3132:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3132:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3132:15:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3156:19:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "3167:3:38"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "3172:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3163:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3163:12:38"
                  },
                  "variableNames": [
                    {
                      "name": "dst",
                      "nodeType": "YulIdentifier",
                      "src": "3156:3:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3184:38:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3206:6:38"
                          },
                          {
                            "name": "_3",
                            "nodeType": "YulIdentifier",
                            "src": "3214:2:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3202:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3202:15:38"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "3219:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3198:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3198:24:38"
                  },
                  "variables": [
                    {
                      "name": "srcEnd",
                      "nodeType": "YulTypedName",
                      "src": "3188:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3250:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3259:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3262:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3252:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3252:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3252:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "srcEnd",
                        "nodeType": "YulIdentifier",
                        "src": "3237:6:38"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3245:3:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3234:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3234:15:38"
                  },
                  "nodeType": "YulIf",
                  "src": "3231:35:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3275:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3290:6:38"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "3298:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3286:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3286:15:38"
                  },
                  "variables": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "3279:3:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3366:86:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "3387:3:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "3405:3:38"
                                }
                              ],
                              "functionName": {
                                "name": "calldataload",
                                "nodeType": "YulIdentifier",
                                "src": "3392:12:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3392:17:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3380:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3380:30:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3380:30:38"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3423:19:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "3434:3:38"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "3439:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3430:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3430:12:38"
                        },
                        "variableNames": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "3423:3:38"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "3321:3:38"
                      },
                      {
                        "name": "srcEnd",
                        "nodeType": "YulIdentifier",
                        "src": "3326:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "3318:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3318:15:38"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "3334:23:38",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3336:19:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "3347:3:38"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "3352:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3343:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3343:12:38"
                        },
                        "variableNames": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "3336:3:38"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "3314:3:38",
                    "statements": []
                  },
                  "src": "3310:142:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3461:14:38",
                  "value": {
                    "name": "dst_1",
                    "nodeType": "YulIdentifier",
                    "src": "3470:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "3461:5:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_array_uint256_dyn",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2807:6:38",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2815:3:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "2823:5:38",
                "type": ""
              }
            ],
            "src": "2769:712:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3683:874:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3730:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3739:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3742:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3732:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3732:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3732:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3704:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3713:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3700:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3700:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3725:3:38",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3696:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3696:33:38"
                  },
                  "nodeType": "YulIf",
                  "src": "3693:53:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3755:36:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3781:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3768:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3768:23:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3759:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3825:5:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "3800:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3800:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3800:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3840:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "3850:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "3840:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3864:47:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3896:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3907:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3892:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3892:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3879:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3879:32:38"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "3868:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "3945:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "3920:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3920:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3920:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3962:17:38",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "3972:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "3962:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3988:46:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4019:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4030:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4015:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4015:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4002:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4002:32:38"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "3992:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4043:28:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "4053:18:38",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "4047:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4098:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4107:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4110:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4100:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4100:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4100:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4086:6:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4094:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4083:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4083:14:38"
                  },
                  "nodeType": "YulIf",
                  "src": "4080:34:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4123:71:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4166:9:38"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "4177:6:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4162:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4162:22:38"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4186:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_array_uint256_dyn",
                      "nodeType": "YulIdentifier",
                      "src": "4133:28:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4133:61:38"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "4123:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4203:48:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4236:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4247:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4232:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4232:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4219:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4219:32:38"
                  },
                  "variables": [
                    {
                      "name": "offset_1",
                      "nodeType": "YulTypedName",
                      "src": "4207:8:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4280:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4289:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4292:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4282:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4282:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4282:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset_1",
                        "nodeType": "YulIdentifier",
                        "src": "4266:8:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4276:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4263:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4263:16:38"
                  },
                  "nodeType": "YulIf",
                  "src": "4260:36:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4305:73:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4348:9:38"
                          },
                          {
                            "name": "offset_1",
                            "nodeType": "YulIdentifier",
                            "src": "4359:8:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4344:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4344:24:38"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4370:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_array_uint256_dyn",
                      "nodeType": "YulIdentifier",
                      "src": "4315:28:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4315:63:38"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "4305:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4387:49:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4420:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4431:3:38",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4416:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4416:19:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4403:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4403:33:38"
                  },
                  "variables": [
                    {
                      "name": "offset_2",
                      "nodeType": "YulTypedName",
                      "src": "4391:8:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4465:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4474:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4477:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4467:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4467:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4467:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset_2",
                        "nodeType": "YulIdentifier",
                        "src": "4451:8:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4461:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4448:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4448:16:38"
                  },
                  "nodeType": "YulIf",
                  "src": "4445:36:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4490:61:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4521:9:38"
                          },
                          {
                            "name": "offset_2",
                            "nodeType": "YulIdentifier",
                            "src": "4532:8:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4517:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4517:24:38"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4543:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "4500:16:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4500:51:38"
                  },
                  "variableNames": [
                    {
                      "name": "value4",
                      "nodeType": "YulIdentifier",
                      "src": "4490:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$dyn_memory_ptrt_array$_t_uint256_$dyn_memory_ptrt_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3617:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3628:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3640:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3648:6:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "3656:6:38",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "3664:6:38",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "3672:6:38",
                "type": ""
              }
            ],
            "src": "3486:1071:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4632:177:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4678:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4687:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4690:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4680:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4680:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4680:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4653:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4662:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4649:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4649:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4674:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4645:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4645:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "4642:52:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4703:36:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4729:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4716:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4716:23:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "4707:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4773:5:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "4748:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4748:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4748:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4788:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "4798:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "4788:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4598:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4609:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4621:6:38",
                "type": ""
              }
            ],
            "src": "4562:247:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4863:146:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4880:3:38"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4895:5:38"
                              }
                            ],
                            "functionName": {
                              "name": "mload",
                              "nodeType": "YulIdentifier",
                              "src": "4889:5:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4889:12:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4903:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "4885:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4885:61:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4873:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4873:74:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4873:74:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "4967:3:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4972:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4963:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4963:14:38"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4989:5:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4996:4:38",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4985:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4985:16:38"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "4979:5:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4979:23:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4956:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4956:47:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4956:47:38"
                }
              ]
            },
            "name": "abi_encode_struct_Token",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4847:5:38",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4854:3:38",
                "type": ""
              }
            ],
            "src": "4814:195:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5066:378:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5083:3:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5094:5:38"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "5088:5:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5088:12:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5076:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5076:25:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5076:25:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5110:43:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5140:5:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5147:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5136:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5136:16:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "5130:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5130:23:38"
                  },
                  "variables": [
                    {
                      "name": "memberValue0",
                      "nodeType": "YulTypedName",
                      "src": "5114:12:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memberValue0",
                        "nodeType": "YulIdentifier",
                        "src": "5186:12:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "5204:3:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5209:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5200:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5200:14:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_struct_Token",
                      "nodeType": "YulIdentifier",
                      "src": "5162:23:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5162:53:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5162:53:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5224:45:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5256:5:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5263:4:38",
                            "type": "",
                            "value": "0x40"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5252:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5252:16:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "5246:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5246:23:38"
                  },
                  "variables": [
                    {
                      "name": "memberValue0_1",
                      "nodeType": "YulTypedName",
                      "src": "5228:14:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memberValue0_1",
                        "nodeType": "YulIdentifier",
                        "src": "5302:14:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "5322:3:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5327:4:38",
                            "type": "",
                            "value": "0x60"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5318:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5318:14:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_struct_Token",
                      "nodeType": "YulIdentifier",
                      "src": "5278:23:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5278:55:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5278:55:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "5353:3:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5358:4:38",
                            "type": "",
                            "value": "0xa0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5349:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5349:14:38"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "5379:5:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "5386:4:38",
                                    "type": "",
                                    "value": "0x60"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "5375:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5375:16:38"
                              }
                            ],
                            "functionName": {
                              "name": "mload",
                              "nodeType": "YulIdentifier",
                              "src": "5369:5:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5369:23:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5394:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "5365:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5365:72:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5342:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5342:96:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5342:96:38"
                }
              ]
            },
            "name": "abi_encode_struct_UserInfo",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5050:5:38",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5057:3:38",
                "type": ""
              }
            ],
            "src": "5014:430:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5604:97:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5614:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5626:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5637:3:38",
                        "type": "",
                        "value": "192"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5622:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5622:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5614:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5677:6:38"
                      },
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5685:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_struct_UserInfo",
                      "nodeType": "YulIdentifier",
                      "src": "5650:26:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5650:45:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5650:45:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_struct$_UserInfo_$10822_memory_ptr__to_t_struct$_UserInfo_$10822_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5573:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5584:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5595:4:38",
                "type": ""
              }
            ],
            "src": "5449:252:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5911:503:38",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5921:12:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "5931:2:38",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "5925:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5942:32:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5960:9:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "5971:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5956:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5956:18:38"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "5946:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5990:9:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "6001:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5983:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5983:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5983:21:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6013:17:38",
                  "value": {
                    "name": "tail_1",
                    "nodeType": "YulIdentifier",
                    "src": "6024:6:38"
                  },
                  "variables": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "6017:3:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6039:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6059:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "6053:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6053:13:38"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "6043:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "6082:6:38"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6090:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6075:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6075:22:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6075:22:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6106:25:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6117:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6128:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6113:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6113:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "6106:3:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6140:29:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6158:6:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "6166:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6154:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6154:15:38"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "6144:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6178:10:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "6187:1:38",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "6182:1:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6246:142:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "srcPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6293:6:38"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "6287:5:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6287:13:38"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "6302:3:38"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_struct_UserInfo",
                            "nodeType": "YulIdentifier",
                            "src": "6260:26:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6260:46:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6260:46:38"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "6319:21:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "6330:3:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6335:4:38",
                              "type": "",
                              "value": "0xc0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6326:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6326:14:38"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "6319:3:38"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "6353:25:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "6367:6:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "6375:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6363:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6363:15:38"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "6353:6:38"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "6208:1:38"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6211:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "6205:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6205:13:38"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "6219:18:38",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "6221:14:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "6230:1:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6233:1:38",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6226:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6226:9:38"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "6221:1:38"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "6201:3:38",
                    "statements": []
                  },
                  "src": "6197:191:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6397:11:38",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "6405:3:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6397:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_struct$_UserInfo_$10822_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_UserInfo_$10822_memory_ptr_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5880:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5891:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5902:4:38",
                "type": ""
              }
            ],
            "src": "5706:708:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6520:76:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6530:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6542:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6553:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6538:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6538:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6530:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6572:9:38"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6583:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6565:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6565:25:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6565:25:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6489:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6500:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6511:4:38",
                "type": ""
              }
            ],
            "src": "6419:177:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6748:587:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6795:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6804:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6807:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6797:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6797:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6797:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6769:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6778:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6765:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6765:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6790:3:38",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6761:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6761:33:38"
                  },
                  "nodeType": "YulIf",
                  "src": "6758:53:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6820:36:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6846:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6833:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6833:23:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "6824:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6890:5:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "6865:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6865:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6865:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6905:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "6915:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "6905:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6929:47:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6961:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6972:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6957:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6957:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6944:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6944:32:38"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "6933:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "7010:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "6985:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6985:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6985:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7027:17:38",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "7037:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "7027:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7053:42:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7080:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7091:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7076:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7076:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "7063:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7063:32:38"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "7053:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7104:42:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7131:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7142:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7127:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7127:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "7114:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7114:32:38"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "7104:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7155:47:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7186:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7197:3:38",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7182:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7182:19:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "7169:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7169:33:38"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "7159:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7245:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7254:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7257:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7247:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7247:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7247:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "7217:6:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7225:18:38",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "7214:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7214:30:38"
                  },
                  "nodeType": "YulIf",
                  "src": "7211:50:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7270:59:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7301:9:38"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "7312:6:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7297:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7297:22:38"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "7321:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "7280:16:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7280:49:38"
                  },
                  "variableNames": [
                    {
                      "name": "value4",
                      "nodeType": "YulIdentifier",
                      "src": "7270:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6682:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6693:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6705:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6713:6:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "6721:6:38",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "6729:6:38",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "6737:6:38",
                "type": ""
              }
            ],
            "src": "6601:734:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7421:170:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7467:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7476:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7479:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7469:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7469:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7469:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "7442:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7451:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7438:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7438:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7463:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "7434:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7434:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "7431:52:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7492:29:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7511:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "7505:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7505:16:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "7496:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "7555:5:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "7530:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7530:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7530:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7570:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "7580:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "7570:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7387:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "7398:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7410:6:38",
                "type": ""
              }
            ],
            "src": "7340:251:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7770:223:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7787:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7798:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7780:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7780:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7780:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7821:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7832:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7817:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7817:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7837:2:38",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7810:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7810:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7810:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7860:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7871:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7856:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7856:18:38"
                      },
                      {
                        "hexValue": "6f6e6c7920636861726163746572206f776e6572732063616e207369676e2075",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7876:34:38",
                        "type": "",
                        "value": "only character owners can sign u"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7849:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7849:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7849:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7931:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7942:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7927:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7927:18:38"
                      },
                      {
                        "hexValue": "70",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7947:3:38",
                        "type": "",
                        "value": "p"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7920:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7920:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7920:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7960:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7972:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7983:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7968:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7968:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7960:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7747:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7761:4:38",
                "type": ""
              }
            ],
            "src": "7596:397:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8155:211:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8165:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8177:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8188:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8173:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8173:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8165:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8207:9:38"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "8218:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8200:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8200:25:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8200:25:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8245:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8256:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8241:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8241:18:38"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "8261:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8234:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8234:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8234:34:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8288:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8299:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8284:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8284:18:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "8308:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8316:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "8304:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8304:55:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8277:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8277:83:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8277:83:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_uint256_t_address__to_t_uint256_t_uint256_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8108:9:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "8119:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "8127:6:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8135:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8146:4:38",
                "type": ""
              }
            ],
            "src": "7998:368:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8403:152:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8420:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8423:77:38",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8413:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8413:88:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8413:88:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8517:1:38",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8520:4:38",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8510:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8510:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8510:15:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8541:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8544:4:38",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "8534:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8534:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8534:15:38"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "8371:184:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8612:116:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8622:20:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "8637:1:38"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "8640:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "8633:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8633:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "8622:7:38"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8700:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "8702:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8702:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8702:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "8671:1:38"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "8664:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8664:9:38"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "8678:1:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "product",
                                    "nodeType": "YulIdentifier",
                                    "src": "8685:7:38"
                                  },
                                  {
                                    "name": "x",
                                    "nodeType": "YulIdentifier",
                                    "src": "8694:1:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "8681:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8681:15:38"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "8675:2:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8675:22:38"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nodeType": "YulIdentifier",
                          "src": "8661:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8661:37:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "8654:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8654:45:38"
                  },
                  "nodeType": "YulIf",
                  "src": "8651:71:38"
                }
              ]
            },
            "name": "checked_mul_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "8591:1:38",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "8594:1:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "8600:7:38",
                "type": ""
              }
            ],
            "src": "8560:168:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8765:152:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8782:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8785:77:38",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8775:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8775:88:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8775:88:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8879:1:38",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8882:4:38",
                        "type": "",
                        "value": "0x12"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8872:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8872:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8872:15:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8903:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8906:4:38",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "8896:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8896:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8896:15:38"
                }
              ]
            },
            "name": "panic_error_0x12",
            "nodeType": "YulFunctionDefinition",
            "src": "8733:184:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8968:74:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8991:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "8993:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8993:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8993:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "8988:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "8981:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8981:9:38"
                  },
                  "nodeType": "YulIf",
                  "src": "8978:35:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9022:14:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9031:1:38"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9034:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "9027:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9027:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "9022:1:38"
                    }
                  ]
                }
              ]
            },
            "name": "checked_div_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "8953:1:38",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "8956:1:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "8962:1:38",
                "type": ""
              }
            ],
            "src": "8922:120:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9095:77:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9105:16:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9116:1:38"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9119:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9112:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9112:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "9105:3:38"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9144:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "9146:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9146:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9146:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9136:1:38"
                      },
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "9139:3:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "9133:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9133:10:38"
                  },
                  "nodeType": "YulIf",
                  "src": "9130:36:38"
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "9078:1:38",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "9081:1:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "9087:3:38",
                "type": ""
              }
            ],
            "src": "9047:125:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9306:168:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9316:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9328:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9339:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9324:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9324:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9316:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9358:9:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "9373:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9381:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "9369:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9369:55:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9351:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9351:74:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9351:74:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9445:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9456:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9441:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9441:18:38"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "9461:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9434:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9434:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9434:34:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9267:9:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "9278:6:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9286:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9297:4:38",
                "type": ""
              }
            ],
            "src": "9177:297:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9560:103:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9606:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9615:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9618:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "9608:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9608:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9608:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "9581:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9590:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9577:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9577:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9602:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "9573:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9573:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "9570:52:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9631:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9647:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "9641:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9641:16:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "9631:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9526:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "9537:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9549:6:38",
                "type": ""
              }
            ],
            "src": "9479:184:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9842:180:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9859:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9870:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9852:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9852:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9852:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9893:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9904:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9889:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9889:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9909:2:38",
                        "type": "",
                        "value": "30"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9882:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9882:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9882:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9932:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9943:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9928:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9928:18:38"
                      },
                      {
                        "hexValue": "6f6e6c7920776561706f6e206f776e6572732063616e207369676e207570",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9948:32:38",
                        "type": "",
                        "value": "only weapon owners can sign up"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9921:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9921:60:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9921:60:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9990:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10002:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10013:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9998:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9998:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9990:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9abfea7a1838e9b21b5acd87e6e61e6c5f51e3820429df0deb6f66d62e149bcf__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9819:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9833:4:38",
                "type": ""
              }
            ],
            "src": "9668:354:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10212:255:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10222:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10234:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10245:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10230:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10230:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10222:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10265:9:38"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "10276:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10258:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10258:25:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10258:25:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10303:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10314:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10299:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10299:18:38"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "10319:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10292:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10292:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10292:34:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10346:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10357:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10342:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10342:18:38"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "10362:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10335:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10335:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10335:34:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10389:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10400:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10385:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10385:18:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value3",
                            "nodeType": "YulIdentifier",
                            "src": "10409:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10417:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "10405:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10405:55:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10378:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10378:83:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10378:83:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_address__to_t_uint256_t_uint256_t_uint256_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10157:9:38",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "10168:6:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "10176:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "10184:6:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10192:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10203:4:38",
                "type": ""
              }
            ],
            "src": "10027:440:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10646:228:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10663:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10674:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10656:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10656:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10656:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10697:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10708:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10693:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10693:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10713:2:38",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10686:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10686:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10686:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10736:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10747:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10732:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10732:18:38"
                      },
                      {
                        "hexValue": "6f6e6c7920776561706f6e206f776e6572732063616e20757064617465207573",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10752:34:38",
                        "type": "",
                        "value": "only weapon owners can update us"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10725:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10725:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10725:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10807:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10818:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10803:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10803:18:38"
                      },
                      {
                        "hexValue": "6572496e666f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10823:8:38",
                        "type": "",
                        "value": "erInfo"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10796:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10796:36:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10796:36:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10841:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10853:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10864:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10849:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10849:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10841:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b0fe3178bf6775920488275d1750f1843a0b30545c0744042557cc3e471381af__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10623:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10637:4:38",
                "type": ""
              }
            ],
            "src": "10472:402:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10911:152:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10928:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10931:77:38",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10921:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10921:88:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10921:88:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11025:1:38",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11028:4:38",
                        "type": "",
                        "value": "0x32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11018:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11018:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11018:15:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11049:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11052:4:38",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "11042:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11042:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11042:15:38"
                }
              ]
            },
            "name": "panic_error_0x32",
            "nodeType": "YulFunctionDefinition",
            "src": "10879:184:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11115:88:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11146:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "11148:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11148:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11148:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "11131:5:38"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11142:1:38",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "11138:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11138:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "11128:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11128:17:38"
                  },
                  "nodeType": "YulIf",
                  "src": "11125:43:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11177:20:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "11188:5:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11195:1:38",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11184:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11184:13:38"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "11177:3:38"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "11097:5:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "11107:3:38",
                "type": ""
              }
            ],
            "src": "11068:135:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11382:224:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11399:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11410:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11392:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11392:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11392:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11433:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11444:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11429:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11429:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11449:2:38",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11422:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11422:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11422:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11472:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11483:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11468:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11468:18:38"
                      },
                      {
                        "hexValue": "796f75206e65656420746f2072616e6b20757020666f72207468652072657761",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11488:34:38",
                        "type": "",
                        "value": "you need to rank up for the rewa"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11461:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11461:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11461:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11543:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11554:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11539:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11539:18:38"
                      },
                      {
                        "hexValue": "7264",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11559:4:38",
                        "type": "",
                        "value": "rd"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11532:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11532:32:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11532:32:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11573:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11585:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11596:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11581:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11581:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11573:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_31a6f823e3ae97fdcda2fc01a3b621cb6a86a2be5567ef06565daa4942f7e905__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11359:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11373:4:38",
                "type": ""
              }
            ],
            "src": "11208:398:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11776:241:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11786:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11798:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11809:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11794:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11794:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11786:4:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "11821:52:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "11831:42:38",
                    "type": "",
                    "value": "0xffffffffffffffffffffffffffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "11825:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11889:9:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "11904:6:38"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "11912:2:38"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "11900:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11900:15:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11882:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11882:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11882:34:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11936:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11947:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11932:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11932:18:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "11956:6:38"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "11964:2:38"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "11952:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11952:15:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11925:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11925:43:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11925:43:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11988:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11999:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11984:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11984:18:38"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "12004:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11977:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11977:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11977:34:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_payable_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11729:9:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "11740:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "11748:6:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "11756:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11767:4:38",
                "type": ""
              }
            ],
            "src": "11611:406:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12100:199:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12146:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12155:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12158:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "12148:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12148:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12148:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "12121:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12130:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "12117:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12117:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12142:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "12113:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12113:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "12110:52:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "12171:29:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12190:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "12184:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12184:16:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "12175:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12253:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12262:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12265:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "12255:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12255:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12255:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "12222:5:38"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "12243:5:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "12236:6:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "12236:13:38"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "12229:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12229:21:38"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "12219:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12219:32:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "12212:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12212:40:38"
                  },
                  "nodeType": "YulIf",
                  "src": "12209:60:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12278:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "12288:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "12278:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bool_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12066:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "12077:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "12089:6:38",
                "type": ""
              }
            ],
            "src": "12022:277:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12478:171:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12495:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12506:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12488:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12488:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12488:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12529:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12540:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12525:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12525:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12545:2:38",
                        "type": "",
                        "value": "21"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12518:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12518:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12518:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12568:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12579:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12564:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12564:18:38"
                      },
                      {
                        "hexValue": "496e637265617365436f6e7472616374204661696c",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12584:23:38",
                        "type": "",
                        "value": "IncreaseContract Fail"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12557:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12557:51:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12557:51:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12617:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12629:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12640:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12625:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12625:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12617:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12455:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12469:4:38",
                "type": ""
              }
            ],
            "src": "12304:345:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12783:168:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12793:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12805:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12816:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12801:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12801:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12793:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12835:9:38"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "12846:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12828:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12828:25:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12828:25:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12873:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12884:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12869:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12869:18:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "12893:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12901:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "12889:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12889:55:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12862:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12862:83:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12862:83:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12744:9:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "12755:6:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "12763:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12774:4:38",
                "type": ""
              }
            ],
            "src": "12654:297:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13130:177:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13147:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13158:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13140:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13140:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13140:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13181:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13192:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13177:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13177:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13197:2:38",
                        "type": "",
                        "value": "27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13170:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13170:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13170:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13220:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13231:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13216:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13216:18:38"
                      },
                      {
                        "hexValue": "796f752061726520746865206f6e6c79206f6e6520706c61796572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13236:29:38",
                        "type": "",
                        "value": "you are the only one player"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13209:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13209:57:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13209:57:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13275:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13287:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13298:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13283:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13283:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13275:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_06c7266a375a0b7849b454e6c13ab1c26263d1dc67aeec645a7b8f63d86a6ddf__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13107:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13121:4:38",
                "type": ""
              }
            ],
            "src": "12956:351:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13431:63:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13448:3:38"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "13453:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13441:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13441:19:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13441:19:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13469:19:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13480:3:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13485:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13476:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13476:12:38"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "13469:3:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_packed_t_uint256__to_t_uint256__nonPadded_inplace_fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "13407:3:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13412:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "13423:3:38",
                "type": ""
              }
            ],
            "src": "13312:182:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13537:74:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13560:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "13562:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13562:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13562:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "13557:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "13550:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13550:9:38"
                  },
                  "nodeType": "YulIf",
                  "src": "13547:35:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13591:14:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "13600:1:38"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "13603:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "mod",
                      "nodeType": "YulIdentifier",
                      "src": "13596:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13596:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "13591:1:38"
                    }
                  ]
                }
              ]
            },
            "name": "mod_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "13522:1:38",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "13525:1:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "13531:1:38",
                "type": ""
              }
            ],
            "src": "13499:112:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13790:228:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13807:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13818:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13800:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13800:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13800:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13841:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13852:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13837:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13837:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13857:2:38",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13830:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13830:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13830:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13880:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13891:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13876:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13876:18:38"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13896:34:38",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13869:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13869:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13869:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13951:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13962:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13947:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13947:18:38"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13967:8:38",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13940:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13940:36:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13940:36:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13985:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13997:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14008:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13993:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13993:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13985:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13767:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13781:4:38",
                "type": ""
              }
            ],
            "src": "13616:402:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14197:182:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14214:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14225:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14207:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14207:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14207:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14248:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14259:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14244:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14244:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14264:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14237:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14237:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14237:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14287:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14298:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14283:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14283:18:38"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14303:34:38",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14276:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14276:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14276:62:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14347:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14359:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14370:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14355:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14355:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14347:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14174:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14188:4:38",
                "type": ""
              }
            ],
            "src": "14023:356:38"
          }
        ]
      },
      "contents": "{\n    { }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function allocate_memory(size) -> memPtr\n    {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(size, 31), not(31)))\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n    function abi_decode_bytes(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := calldataload(offset)\n        if gt(_1, 0xffffffffffffffff) { panic_error_0x41() }\n        let array_1 := allocate_memory(add(and(add(_1, 0x1f), not(31)), 0x20))\n        mstore(array_1, _1)\n        if gt(add(add(offset, _1), 0x20), end) { revert(0, 0) }\n        calldatacopy(add(array_1, 0x20), add(offset, 0x20), _1)\n        mstore(add(add(array_1, _1), 0x20), 0)\n        array := array_1\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n        let offset := calldataload(add(headStart, 96))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        value3 := abi_decode_bytes(add(headStart, offset), dataEnd)\n    }\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffff00000000000000000000000000000000000000000000000000000000))\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_decode_tuple_t_uint256t_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := calldataload(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_decode_array_uint256_dyn(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := calldataload(offset)\n        let _2 := 0x20\n        if gt(_1, 0xffffffffffffffff) { panic_error_0x41() }\n        let _3 := shl(5, _1)\n        let dst := allocate_memory(add(_3, _2))\n        let dst_1 := dst\n        mstore(dst, _1)\n        dst := add(dst, _2)\n        let srcEnd := add(add(offset, _3), _2)\n        if gt(srcEnd, end) { revert(0, 0) }\n        let src := add(offset, _2)\n        for { } lt(src, srcEnd) { src := add(src, _2) }\n        {\n            mstore(dst, calldataload(src))\n            dst := add(dst, _2)\n        }\n        array := dst_1\n    }\n    function abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$dyn_memory_ptrt_array$_t_uint256_$dyn_memory_ptrt_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        let offset := calldataload(add(headStart, 64))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        value2 := abi_decode_array_uint256_dyn(add(headStart, offset), dataEnd)\n        let offset_1 := calldataload(add(headStart, 96))\n        if gt(offset_1, _1) { revert(0, 0) }\n        value3 := abi_decode_array_uint256_dyn(add(headStart, offset_1), dataEnd)\n        let offset_2 := calldataload(add(headStart, 128))\n        if gt(offset_2, _1) { revert(0, 0) }\n        value4 := abi_decode_bytes(add(headStart, offset_2), dataEnd)\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_struct_Token(value, pos)\n    {\n        mstore(pos, and(mload(value), 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(pos, 0x20), mload(add(value, 0x20)))\n    }\n    function abi_encode_struct_UserInfo(value, pos)\n    {\n        mstore(pos, mload(value))\n        let memberValue0 := mload(add(value, 0x20))\n        abi_encode_struct_Token(memberValue0, add(pos, 0x20))\n        let memberValue0_1 := mload(add(value, 0x40))\n        abi_encode_struct_Token(memberValue0_1, add(pos, 0x60))\n        mstore(add(pos, 0xa0), and(mload(add(value, 0x60)), 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_struct$_UserInfo_$10822_memory_ptr__to_t_struct$_UserInfo_$10822_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 192)\n        abi_encode_struct_UserInfo(value0, headStart)\n    }\n    function abi_encode_tuple_t_array$_t_struct$_UserInfo_$10822_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_UserInfo_$10822_memory_ptr_$dyn_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        let tail_1 := add(headStart, _1)\n        mstore(headStart, _1)\n        let pos := tail_1\n        let length := mload(value0)\n        mstore(tail_1, length)\n        pos := add(headStart, 64)\n        let srcPtr := add(value0, _1)\n        let i := 0\n        for { } lt(i, length) { i := add(i, 1) }\n        {\n            abi_encode_struct_UserInfo(mload(srcPtr), pos)\n            pos := add(pos, 0xc0)\n            srcPtr := add(srcPtr, _1)\n        }\n        tail := pos\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n        value3 := calldataload(add(headStart, 96))\n        let offset := calldataload(add(headStart, 128))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        value4 := abi_decode_bytes(add(headStart, offset), dataEnd)\n    }\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"only character owners can sign u\")\n        mstore(add(headStart, 96), \"p\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_uint256_t_uint256_t_address__to_t_uint256_t_uint256_t_address__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), value1)\n        mstore(add(headStart, 64), and(value2, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function panic_error_0x12()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := div(x, y)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := mload(headStart)\n    }\n    function abi_encode_tuple_t_stringliteral_9abfea7a1838e9b21b5acd87e6e61e6c5f51e3820429df0deb6f66d62e149bcf__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 30)\n        mstore(add(headStart, 64), \"only weapon owners can sign up\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_address__to_t_uint256_t_uint256_t_uint256_t_address__fromStack_reversed(headStart, value3, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 128)\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), value1)\n        mstore(add(headStart, 64), value2)\n        mstore(add(headStart, 96), and(value3, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_stringliteral_b0fe3178bf6775920488275d1750f1843a0b30545c0744042557cc3e471381af__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"only weapon owners can update us\")\n        mstore(add(headStart, 96), \"erInfo\")\n        tail := add(headStart, 128)\n    }\n    function panic_error_0x32()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function abi_encode_tuple_t_stringliteral_31a6f823e3ae97fdcda2fc01a3b621cb6a86a2be5567ef06565daa4942f7e905__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"you need to rank up for the rewa\")\n        mstore(add(headStart, 96), \"rd\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_address_payable_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := 0xffffffffffffffffffffffffffffffffffffffff\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 21)\n        mstore(add(headStart, 64), \"IncreaseContract Fail\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), and(value1, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_stringliteral_06c7266a375a0b7849b454e6c13ab1c26263d1dc67aeec645a7b8f63d86a6ddf__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 27)\n        mstore(add(headStart, 64), \"you are the only one player\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_packed_t_uint256__to_t_uint256__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        mstore(pos, value0)\n        end := add(pos, 32)\n    }\n    function mod_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 38,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "375:6745:34:-:0;;;510:6;491:25;;544:1;522:23;;574:1;551:24;;603:1;581:23;;796:367;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;936:32:0;719:10:19;936:18:0;:32::i;:::-;980::34;990:21;980:9;:32::i;:::-;-1:-1:-1;1022:18:34;:40;;-1:-1:-1;;;;;1022:40:34;;;-1:-1:-1;;;;;;1022:40:34;;;;;;;1072:19;:42;;;;;;;;;;;;;;;1124:14;:32;;;;;;;;;;;-1:-1:-1;375:6745:34;;2433:187:0;2506:16;2525:6;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;;;;;2541:17:0;;;;;;2573:40;;2525:6;;;;;;;2573:40;;2506:16;2573:40;2496:124;2433:187;:::o;1952:191:34:-;2021:4;1094:13:0;:11;:13::i;:::-;-1:-1:-1;;;;;2045:29:34;::::1;2037:38;;;::::0;::::1;;-1:-1:-1::0;2085:5:34::1;:30:::0;;-1:-1:-1;;;;;2085:30:34;::::1;-1:-1:-1::0;;;;;;2085:30:34;;::::1;;::::0;;;1952:191;;;:::o;1359:130:0:-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;1019:2:38;1414:68:0;;;1001:21:38;;;1038:18;;;1031:30;1097:34;1077:18;;;1070:62;1149:18;;1414:68:0;;;;;;;;1359:130::o;14:131:38:-;-1:-1:-1;;;;;89:31:38;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:662::-;255:6;263;271;279;332:3;320:9;311:7;307:23;303:33;300:53;;;349:1;346;339:12;300:53;381:9;375:16;400:31;425:5;400:31;:::i;:::-;500:2;485:18;;479:25;450:5;;-1:-1:-1;513:33:38;479:25;513:33;:::i;:::-;617:2;602:18;;596:25;565:7;;-1:-1:-1;630:33:38;596:25;630:33;:::i;:::-;734:2;719:18;;713:25;682:7;;-1:-1:-1;747:33:38;713:25;747:33;:::i;:::-;150:662;;;;-1:-1:-1;150:662:38;;-1:-1:-1;;150:662:38:o;817:356::-;375:6745:34;;;;;;",
  "deployedSourceMap": "375:6745:34:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6965:153;;;;;;:::i;:::-;7081:30;6965:153;;;;;;;;;;2021:66:38;2009:79;;;1991:98;;1979:2;1964:18;6965:153:34;;;;;;;;1831:101:0;;;:::i;:::-;;1201:85;1247:7;1273:6;1201:85;;-1:-1:-1;;;;;1273:6:0;;;2246:74:38;;2234:2;2219:18;1201:85:0;2100:226:38;3098:378:34;;;;;;:::i;:::-;;:::i;4443:155::-;;;;;;:::i;:::-;;:::i;2149:943::-;;;;;;:::i;:::-;;:::i;3482:398::-;;;;;;:::i;:::-;;:::i;6767:192::-;;;;;;:::i;:::-;6916:36;6767:192;;;;;;;;6065:113;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;6184:407::-;;;:::i;:::-;;;;;;;:::i;4604:909::-;;;;;;:::i;:::-;;:::i;5519:540::-;;;;;;:::i;:::-;;:::i;3886:551::-;;;;;;:::i;:::-;;:::i;:::-;;;6565:25:38;;;6553:2;6538:18;3886:551:34;6419:177:38;6597:164:34;;;;;;:::i;:::-;6723:31;6597:164;;;;;;;;2081:198:0;;;;;;:::i;:::-;;:::i;1831:101::-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;3098:378:34:-;3195:18;;3188:43;;-1:-1:-1;;;3188:43:34;;;;;6565:25:38;;;-1:-1:-1;;;;;3195:18:34;;;;3188:34;;6538:18:38;;3188:43:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;3174:57:34;:10;-1:-1:-1;;;;;3174:57:34;;3166:104;;;;-1:-1:-1;;;3166:104:34;;7798:2:38;3166:104:34;;;7780:21:38;7837:2;7817:18;;;7810:30;7876:34;7856:18;;;7849:62;-1:-1:-1;;;7927:18:38;;;7920:31;7968:19;;3166:104:34;;;;;;;;;3292:10;3281:22;;;;:10;:22;;;;;;;;;:40;;;:50;;;3393:42;;;3347:122;;8200:25:38;;;8241:18;;;8234:34;8284:18;;;8277:83;;;;3347:122:34;;8188:2:38;8173:18;3347:122:34;;;;;;;;3098:378;:::o;4443:155::-;4520:2;4511:8;:6;4518:1;4511:8;:::i;:::-;:11;;;;:::i;:::-;4498;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;4555:2:34;;-1:-1:-1;4546:8:34;:6;4553:1;4546:8;:::i;:::-;:11;;;;:::i;:::-;4532:12;;:25;;;;;;;:::i;:::-;;;;-1:-1:-1;4589:2:34;;-1:-1:-1;4580:8:34;:6;4587:1;4580:8;:::i;:::-;:11;;;;:::i;:::-;4567;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;;;4443:155:34:o;2149:943::-;2269:18;;2262:43;;-1:-1:-1;;;2262:43:34;;;;;6565:25:38;;;-1:-1:-1;;;;;2269:18:34;;;;2262:34;;6538:18:38;;2262:43:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;2248:57:34;:10;-1:-1:-1;;;;;2248:57:34;;2240:104;;;;-1:-1:-1;;;2240:104:34;;7798:2:38;2240:104:34;;;7780:21:38;7837:2;7817:18;;;7810:30;7876:34;7856:18;;;7849:62;-1:-1:-1;;;7927:18:38;;;7920:31;7968:19;;2240:104:34;7596:397:38;2240:104:34;2370:19;;2362:61;;-1:-1:-1;;;2362:61:34;;2401:10;2362:61;;;9351:74:38;9441:18;;;9434:34;;;-1:-1:-1;;;;;2370:19:34;;;;2362:38;;9324:18:38;;2362:61:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2425:1;2362:64;2354:108;;;;-1:-1:-1;;;2354:108:34;;9870:2:38;2354:108:34;;;9852:21:38;9909:2;9889:18;;;9882:30;9948:32;9928:18;;;9921:60;9998:18;;2354:108:34;9668:354:38;2354:108:34;2473:20;:8;1032:19:20;;1050:1;1032:19;;;945:123;2473:20:34;2503:14;2520:18;:8;918:14:20;;827:112;2520:18:34;2548:8;:25;;;;;;;;;;;;;2562:10;-1:-1:-1;;2548:25:34;;;;;;;;2608:352;;;;;;;;;;;;2670:105;;;;;;;2708:18;;-1:-1:-1;;;;;2708:18:34;;;2670:105;;2548:25;2670:105;;;;;;2608:352;;;;;;2802:108;;;;;;;2840:19;;;;2802:108;;;;;;;;2608:352;;;;;;;;;;;;;-1:-1:-1;2583:22:34;;;:10;:22;;;;;:377;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2976:109;;10258:25:38;;;10299:18;;;10292:34;;;10342:18;;;10335:34;;;10385:18;;;10378:83;;;;2608:352:34;;-1:-1:-1;2976:109:34;;10230:19:38;2976:109:34;;;;;;;;2230:862;2149:943;;:::o;3482:398::-;3570:19;;3562:61;;-1:-1:-1;;;3562:61:34;;3601:10;3562:61;;;9351:74:38;9441:18;;;9434:34;;;-1:-1:-1;;;;;3570:19:34;;;;3562:38;;9324:18:38;;3562:61:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3625:1;3562:64;3554:116;;;;-1:-1:-1;;;3554:116:34;;10674:2:38;3554:116:34;;;10656:21:38;10713:2;10693:18;;;10686:30;10752:34;10732:18;;;10725:62;10823:8;10803:18;;;10796:36;10849:19;;3554:116:34;10472:402:38;3554:116:34;3692:10;3681:22;;;;:10;:22;;;;;;;;;:42;;;:54;;;3776:40;;;3751:122;;8200:25:38;;;8241:18;;;8234:34;;;8284:18;;;8277:83;;;;3751:122:34;;8188:2:38;8173:18;3751:122:34;7998:368:38;6065:113:34;6120:15;;:::i;:::-;-1:-1:-1;;;;;;6154:17:34;;;;;;;:10;:17;;;;;;;;;6147:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6065:113::o;6184:407::-;6227:17;6256:14;6273:18;:8;918:14:20;;827:112;6273:18:34;6256:35;;6301:23;6343:9;6328:25;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;6301:52;;6369:6;6364:199;6385:9;6381:1;:13;6364:199;;;6415:19;6437:8;6446:1;6437:11;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;;;;;6437:11:34;;;6493:23;;;:10;:23;;;;;;;6530:22;;;;;;;;;;;;;;;;;;6437:11;6530:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:8;;6437:11;;-1:-1:-1;6493:23:34;;6530:22;:5;;6536:1;;6530:8;;;;;;:::i;:::-;;;;;;:22;;;;6401:162;;6396:3;;;;;:::i;:::-;;;;6364:199;;;-1:-1:-1;6579:5:34;6184:407;-1:-1:-1;;6184:407:34:o;4604:909::-;4784:1;4778:5;:7;:16;;;;;4793:1;4787:5;:7;4778:16;4770:64;;;;-1:-1:-1;;;4770:64:34;;11410:2:38;4770:64:34;;;11392:21:38;11449:2;11429:18;;;11422:30;11488:34;11468:18;;;11461:62;11559:4;11539:18;;;11532:32;11581:19;;4770:64:34;11208:398:38;4770:64:34;4853:14;4884:5;4891:1;4884:8;4881:288;;-1:-1:-1;4916:11:34;;;4955:1;4941:15;;;4881:288;;;4984:5;4991:1;4984:8;4981:188;;-1:-1:-1;5016:12:34;;;5057:1;5042:16;;;4981:188;;;5086:5;5093:1;5086:8;5083:86;;-1:-1:-1;5118:11:34;;;5157:1;5143:15;;;5083:86;5194:5;;5239:14;;5194:116;;;;;-1:-1:-1;;;;;5239:14:34;;;5194:116;;;11882:34:38;5275:4:34;11932:18:38;;;11925:43;11984:18;;;11977:34;;;5179:12:34;;5194:5;;;;;:31;;11794:18:38;;5194:116:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5179:131;;5328:7;5320:41;;;;-1:-1:-1;;;5320:41:34;;12506:2:38;5320:41:34;;;12488:21:38;12545:2;12525:18;;;12518:30;12584:23;12564:18;;;12557:51;12625:18;;5320:41:34;12304:345:38;5320:41:34;5371:5;;5390:14;;5371:54;;;;;-1:-1:-1;;;;;5390:14:34;;;5371:54;;;11882:34:38;5406:10:34;11932:18:38;;;11925:43;11984:18;;;11977:34;;;5371:5:34;;;:18;;11794::38;;5371:54:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;5441:64:34;;;12828:25:38;;;5485:10:34;12884:2:38;12869:18;;12862:83;5441:64:34;;12801:18:38;5441:64:34;12654:297:38;5519:540:34;5574:15;;:::i;:::-;5609:8;918:14:20;5629:1:34;5609:21;5601:61;;;;-1:-1:-1;;;5601:61:34;;13158:2:38;5601:61:34;;;13140:21:38;13197:2;13177:18;;;13170:30;13236:29;13216:18;;;13209:57;13283:18;;5601:61:34;12956:351:38;5601:61:34;5672:14;5689:18;:8;918:14:20;;827:112;5689:18:34;5672:35;;5717:9;5786;5764:15;5747:33;;;;;;13441:19:38;;13485:2;13476:12;;13312:182;5747:33:34;;;;;;;;;;;;;5737:44;;;;;;5729:53;;:67;;;;:::i;:::-;5717:79;;5806:21;5830:8;5839:1;5830:11;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;;;;;5830:11:34;;;5854:25;;;:10;:25;;;;;;;:30;;;5830:11;;-1:-1:-1;5854:30:34;;:39;;;;5851:202;;-1:-1:-1;;;;;5936:25:34;;;5908:24;5936:25;;;:10;:25;;;;;;;;;5908:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5519:540;-1:-1:-1;;;;5519:540:34:o;5851:202::-;6026:16;6036:5;6026:9;:16::i;:::-;6019:23;5519:540;-1:-1:-1;;;;;5519:540:34:o;3886:551::-;3957:7;;4179:1;4172:8;;;4169:239;;-1:-1:-1;4204:11:34;;4169:239;;;4243:5;4250:1;4243:8;4240:168;;-1:-1:-1;4275:12:34;;4240:168;;;4315:5;4322:1;4315:8;4312:96;;-1:-1:-1;4347:11:34;;4312:96;;;-1:-1:-1;4396:1:34;4312:96;4424:6;3886:551;-1:-1:-1;;3886:551:34:o;2081:198:0:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2169:22:0;::::1;2161:73;;;::::0;-1:-1:-1;;;2161:73:0;;13818:2:38;2161:73:0::1;::::0;::::1;13800:21:38::0;13857:2;13837:18;;;13830:30;13896:34;13876:18;;;13869:62;13967:8;13947:18;;;13940:36;13993:19;;2161:73:0::1;13616:402:38::0;2161:73:0::1;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;1359:130::-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;14225:2:38;1414:68:0;;;14207:21:38;;;14244:18;;;14237:30;14303:34;14283:18;;;14276:62;14355:18;;1414:68:0;14023:356:38;2433:187:0;2506:16;2525:6;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;2541:17:0;;;;;;2573:40;;2525:6;;;;;;;2573:40;;2506:16;2573:40;2496:124;2433:187;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:154:38:-;-1:-1:-1;;;;;93:5:38;89:54;82:5;79:65;69:93;;158:1;155;148:12;173:184;-1:-1:-1;;;222:1:38;215:88;322:4;319:1;312:15;346:4;343:1;336:15;362:275;433:2;427:9;498:2;479:13;;-1:-1:-1;;475:27:38;463:40;;533:18;518:34;;554:22;;;515:62;512:88;;;580:18;;:::i;:::-;616:2;609:22;362:275;;-1:-1:-1;362:275:38:o;642:530::-;684:5;737:3;730:4;722:6;718:17;714:27;704:55;;755:1;752;745:12;704:55;791:6;778:20;817:18;813:2;810:26;807:52;;;839:18;;:::i;:::-;883:55;926:2;907:13;;-1:-1:-1;;903:27:38;932:4;899:38;883:55;:::i;:::-;963:2;954:7;947:19;1009:3;1002:4;997:2;989:6;985:15;981:26;978:35;975:55;;;1026:1;1023;1016:12;975:55;1091:2;1084:4;1076:6;1072:17;1065:4;1056:7;1052:18;1039:55;1139:1;1114:16;;;1132:4;1110:27;1103:38;;;;1118:7;642:530;-1:-1:-1;;;642:530:38:o;1177:665::-;1272:6;1280;1288;1296;1349:3;1337:9;1328:7;1324:23;1320:33;1317:53;;;1366:1;1363;1356:12;1317:53;1405:9;1392:23;1424:31;1449:5;1424:31;:::i;:::-;1474:5;-1:-1:-1;1531:2:38;1516:18;;1503:32;1544:33;1503:32;1544:33;:::i;:::-;1596:7;-1:-1:-1;1650:2:38;1635:18;;1622:32;;-1:-1:-1;1705:2:38;1690:18;;1677:32;1732:18;1721:30;;1718:50;;;1764:1;1761;1754:12;1718:50;1787:49;1828:7;1819:6;1808:9;1804:22;1787:49;:::i;:::-;1777:59;;;1177:665;;;;;;;:::o;2331:180::-;2390:6;2443:2;2431:9;2422:7;2418:23;2414:32;2411:52;;;2459:1;2456;2449:12;2411:52;-1:-1:-1;2482:23:38;;2331:180;-1:-1:-1;2331:180:38:o;2516:248::-;2584:6;2592;2645:2;2633:9;2624:7;2620:23;2616:32;2613:52;;;2661:1;2658;2651:12;2613:52;-1:-1:-1;;2684:23:38;;;2754:2;2739:18;;;2726:32;;-1:-1:-1;2516:248:38:o;2769:712::-;2823:5;2876:3;2869:4;2861:6;2857:17;2853:27;2843:55;;2894:1;2891;2884:12;2843:55;2930:6;2917:20;2956:4;2979:18;2975:2;2972:26;2969:52;;;3001:18;;:::i;:::-;3047:2;3044:1;3040:10;3070:28;3094:2;3090;3086:11;3070:28;:::i;:::-;3132:15;;;3202;;;3198:24;;;3163:12;;;;3234:15;;;3231:35;;;3262:1;3259;3252:12;3231:35;3298:2;3290:6;3286:15;3275:26;;3310:142;3326:6;3321:3;3318:15;3310:142;;;3392:17;;3380:30;;3343:12;;;;3430;;;;3310:142;;;3470:5;2769:712;-1:-1:-1;;;;;;;2769:712:38:o;3486:1071::-;3640:6;3648;3656;3664;3672;3725:3;3713:9;3704:7;3700:23;3696:33;3693:53;;;3742:1;3739;3732:12;3693:53;3781:9;3768:23;3800:31;3825:5;3800:31;:::i;:::-;3850:5;-1:-1:-1;3907:2:38;3892:18;;3879:32;3920:33;3879:32;3920:33;:::i;:::-;3972:7;-1:-1:-1;4030:2:38;4015:18;;4002:32;4053:18;4083:14;;;4080:34;;;4110:1;4107;4100:12;4080:34;4133:61;4186:7;4177:6;4166:9;4162:22;4133:61;:::i;:::-;4123:71;;4247:2;4236:9;4232:18;4219:32;4203:48;;4276:2;4266:8;4263:16;4260:36;;;4292:1;4289;4282:12;4260:36;4315:63;4370:7;4359:8;4348:9;4344:24;4315:63;:::i;:::-;4305:73;;4431:3;4420:9;4416:19;4403:33;4387:49;;4461:2;4451:8;4448:16;4445:36;;;4477:1;4474;4467:12;4445:36;;4500:51;4543:7;4532:8;4521:9;4517:24;4500:51;:::i;:::-;4490:61;;;3486:1071;;;;;;;;:::o;4562:247::-;4621:6;4674:2;4662:9;4653:7;4649:23;4645:32;4642:52;;;4690:1;4687;4680:12;4642:52;4729:9;4716:23;4748:31;4773:5;4748:31;:::i;:::-;4798:5;4562:247;-1:-1:-1;;;4562:247:38:o;5449:252::-;5637:3;5622:19;;5650:45;5626:9;5677:6;5088:12;;5076:25;;5147:4;5136:16;;;5130:23;4889:12;;-1:-1:-1;;;;;4885:61:38;5200:14;;;4873:74;4985:16;;;4979:23;4963:14;;;4956:47;-1:-1:-1;5263:4:38;5252:16;;5246:23;4889:12;;-1:-1:-1;;;;;4885:61:38;5327:4;5318:14;;4873:74;4996:4;4985:16;;4979:23;4963:14;;;4956:47;-1:-1:-1;5386:4:38;5375:16;5369:23;-1:-1:-1;;;;;5365:72:38;5358:4;5349:14;;;;5342:96;5014:430;5706:708;5931:2;5983:21;;;6053:13;;5956:18;;;6075:22;;;5902:4;;5931:2;6154:15;;;;6128:2;6113:18;;;5902:4;6197:191;6211:6;6208:1;6205:13;6197:191;;;6260:46;6302:3;6293:6;6287:13;5088:12;;5076:25;;5147:4;5136:16;;;5130:23;4889:12;;-1:-1:-1;;;;;4885:61:38;5200:14;;;4873:74;4985:16;;;4979:23;4963:14;;;4956:47;-1:-1:-1;5263:4:38;5252:16;;5246:23;4889:12;;-1:-1:-1;;;;;4885:61:38;5327:4;5318:14;;4873:74;4996:4;4985:16;;4979:23;4963:14;;;4956:47;-1:-1:-1;5386:4:38;5375:16;5369:23;-1:-1:-1;;;;;5365:72:38;5358:4;5349:14;;;;5342:96;5014:430;6260:46;6363:15;;;;6335:4;6326:14;;;;;6233:1;6226:9;6197:191;;;-1:-1:-1;6405:3:38;;5706:708;-1:-1:-1;;;;;;5706:708:38:o;6601:734::-;6705:6;6713;6721;6729;6737;6790:3;6778:9;6769:7;6765:23;6761:33;6758:53;;;6807:1;6804;6797:12;6758:53;6846:9;6833:23;6865:31;6890:5;6865:31;:::i;:::-;6915:5;-1:-1:-1;6972:2:38;6957:18;;6944:32;6985:33;6944:32;6985:33;:::i;:::-;7037:7;-1:-1:-1;7091:2:38;7076:18;;7063:32;;-1:-1:-1;7142:2:38;7127:18;;7114:32;;-1:-1:-1;7197:3:38;7182:19;;7169:33;7225:18;7214:30;;7211:50;;;7257:1;7254;7247:12;7211:50;7280:49;7321:7;7312:6;7301:9;7297:22;7280:49;:::i;7340:251::-;7410:6;7463:2;7451:9;7442:7;7438:23;7434:32;7431:52;;;7479:1;7476;7469:12;7431:52;7511:9;7505:16;7530:31;7555:5;7530:31;:::i;8371:184::-;-1:-1:-1;;;8420:1:38;8413:88;8520:4;8517:1;8510:15;8544:4;8541:1;8534:15;8560:168;8633:9;;;8664;;8681:15;;;8675:22;;8661:37;8651:71;;8702:18;;:::i;8733:184::-;-1:-1:-1;;;8782:1:38;8775:88;8882:4;8879:1;8872:15;8906:4;8903:1;8896:15;8922:120;8962:1;8988;8978:35;;8993:18;;:::i;:::-;-1:-1:-1;9027:9:38;;8922:120::o;9047:125::-;9112:9;;;9133:10;;;9130:36;;;9146:18;;:::i;9479:184::-;9549:6;9602:2;9590:9;9581:7;9577:23;9573:32;9570:52;;;9618:1;9615;9608:12;9570:52;-1:-1:-1;9641:16:38;;9479:184;-1:-1:-1;9479:184:38:o;10879:::-;-1:-1:-1;;;10928:1:38;10921:88;11028:4;11025:1;11018:15;11052:4;11049:1;11042:15;11068:135;11107:3;11128:17;;;11125:43;;11148:18;;:::i;:::-;-1:-1:-1;11195:1:38;11184:13;;11068:135::o;12022:277::-;12089:6;12142:2;12130:9;12121:7;12117:23;12113:32;12110:52;;;12158:1;12155;12148:12;12110:52;12190:9;12184:16;12243:5;12236:13;12229:21;12222:5;12219:32;12209:60;;12265:1;12262;12255:12;13499:112;13531:1;13557;13547:35;;13562:18;;:::i;:::-;-1:-1:-1;13596:9:38;;13499:112::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.7;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\";\nimport \"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\nimport \"./JMToken.sol\";\n\ncontract MapleUser is Ownable {\n    using Counters for Counters.Counter;\n    Counters.Counter private _userIds;\n    uint256 decimals = 10**18;\n    uint256 firstReward = 0;\n    uint256 secondReward = 0;\n    uint256 thirdReward = 0;\n\n    JMToken private token;\n    address payable private treasuryWallet;\n    address private nftContractAddress;\n    address private itemContractAddress;\n    address[] private addrList;\n\n    constructor (\n        address _tokenContractAddress,\n        address _nftContractAddress,\n        address _itemContractAddress,\n        address payable _treasuryWallet\n    ) {\n        _setToken(_tokenContractAddress);\n        nftContractAddress = _nftContractAddress;\n        itemContractAddress = _itemContractAddress;\n        treasuryWallet = _treasuryWallet;\n    }\n\n    mapping(address => UserInfo) idUserInfo;\n\n    struct Token {\n        address contractAddr;\n        uint256 tokenId;\n    }\n\n    struct UserInfo {\n        uint256 userId;\n        Token charToken;\n        Token weaponToken;\n        address payable user;\n    }\n\n    event UserCreated (\n        uint256 charId,\n        uint256 weaponId,\n        uint256 userId,\n        address user\n    );\n\n    event UserUpdated (\n        uint256 charId,\n        uint256 weaponId,\n        address user\n    );\n\n    event UserMatching (\n        uint256 charId,\n        uint256 weaponId,\n        address user\n    );\n\n    event UserDeleated (\n        uint256 charId,\n        uint256 weaponId,\n        address user\n    );\n\n    event rewardTransferred (\n        uint256 reward,\n        address user\n    );\n\n    function _setToken(address _tokenAddress) private onlyOwner returns (bool) {\n        require(_tokenAddress != address(0x0));\n        token = JMToken(_tokenAddress);\n        return true;\n    }\n\n    function signUp(\n        uint256 _charId,\n        uint256 _weaponId\n    ) public {\n        require(msg.sender == ERC721(nftContractAddress).ownerOf(_charId),  \"only character owners can sign up\");\n        require(ERC1155(itemContractAddress).balanceOf(msg.sender, _weaponId)!=0,  \"only weapon owners can sign up\");\n\n        _userIds.increment();\n        uint256 userId = _userIds.current();\n        addrList.push(msg.sender);\n        idUserInfo[msg.sender] = UserInfo({\n            userId: userId,\n            charToken: Token({\n                contractAddr: nftContractAddress,\n                tokenId: _charId\n            }),\n            weaponToken: Token({\n                contractAddr: itemContractAddress,\n                tokenId: _weaponId\n            }),\n            user: payable(msg.sender)\n        });\n\n        emit UserCreated(\n            _charId,\n            _weaponId,\n            userId,\n            msg.sender\n        );\n    }\n\n    function updateChar(\n        uint256 _charId\n    ) public {\n        require(msg.sender == ERC721(nftContractAddress).ownerOf(_charId),  \"only character owners can sign up\");\n\n        idUserInfo[msg.sender].charToken.tokenId = _charId;\n\n        emit UserUpdated(\n            _charId,\n            idUserInfo[msg.sender].weaponToken.tokenId,\n            msg.sender\n        );\n    }\n\n    function updateWeapon(\n        uint256 _weaponId\n    ) public {\n        require(ERC1155(itemContractAddress).balanceOf(msg.sender, _weaponId)!=0,  \"only weapon owners can update userInfo\");\n\n        idUserInfo[msg.sender].weaponToken.tokenId = _weaponId;\n\n        emit UserUpdated(\n            idUserInfo[msg.sender].charToken.tokenId,\n            _weaponId,\n            msg.sender\n        );\n    }\n\n    function checkReward(\n        uint256 _rank\n    ) public view returns (uint256) {\n        //TODO: 보안을 위해 컨트랙트 내에서 랭크를 저장하고 불러와야 함.\n        // require(_rank<4,  \"you need to rank up for the reward\");\n        uint256 reward = 0;\n        if(_rank==1){\n            reward = firstReward;\n        }\n        else if(_rank==2){\n            reward = secondReward;\n        }\n        else if(_rank==3){\n            reward = thirdReward;\n        }else{\n            reward = 0;\n        }\n        return reward;\n    }\n\n    function setRankReward(uint256 reward) public{\n        firstReward+=reward*5/10;\n        secondReward+=reward*3/10;\n        thirdReward+=reward*2/10;\n    }\n\n    function requestReward(\n        uint256 _rank\n    ) public {\n        //TODO: 보안을 위해 컨트랙트 내에서 랭크를 저장하고 불러와야 함.\n        require(_rank<4&&_rank>0,  \"you need to rank up for the reward\");\n        \n        uint256 reward = 0;\n        if(_rank==1){\n            reward = firstReward;\n            firstReward = 0;\n        }\n        else if(_rank==2){\n            reward = secondReward;\n            secondReward = 0;\n        }\n        else if(_rank==3){\n            reward = thirdReward;\n            thirdReward = 0;\n        }\n\n        bool success = token.increaseContractAllowance(\n            treasuryWallet,\n            address(this),\n            reward\n        );\n        require(success, \"IncreaseContract Fail\");\n        token.transferFrom(treasuryWallet, msg.sender, reward);\n\n        emit rewardTransferred (\n        reward,\n        msg.sender\n        );\n\n    }\n\n    function matchUser(address _user) public view returns (UserInfo memory) {\n        require(_userIds.current()!=1, \"you are the only one player\");\n        uint userCount = _userIds.current();\n        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (userCount);\n        address matchUserAddr = addrList[n];\n        if(idUserInfo[matchUserAddr].user != _user){\n            UserInfo memory opponent =  idUserInfo[matchUserAddr];\n            return opponent;\n        }else{\n            return matchUser(_user);\n        }\n    }\n\n    function fetchUser(address _user) public view returns (UserInfo memory) {\n        return idUserInfo[_user];\n    }\n\n    function fetchUsers() public view returns (UserInfo[] memory) {\n        uint userCount = _userIds.current();\n        UserInfo[] memory users =  new UserInfo[](userCount);\n\n        for (uint i = 0; i < userCount; i++) {\n            address currentAddr = addrList[i];\n            UserInfo storage currentUser = idUserInfo[currentAddr];\n            users[i] = currentUser;\n        }\n        return users;\n    }\n\n    function onERC1155Received(address, address, uint256, uint256, bytes memory) public virtual returns (bytes4) {\n        return this.onERC1155Received.selector;\n    }\n\n    function onERC1155BatchReceived(address, address, uint256[] memory, uint256[] memory, bytes memory) public virtual returns (bytes4) {\n        return this.onERC1155BatchReceived.selector;\n    }\n\n    function onERC721Received(address, address, uint256, bytes memory) public virtual returns (bytes4) {\n        return this.onERC721Received.selector;\n    }\n}\n",
  "sourcePath": "/Users/hyenne/workspace/BEB-05-JMT/contract/contracts/MapleUser.sol",
  "ast": {
    "absolutePath": "project:/contracts/MapleUser.sol",
    "exportedSymbols": {
      "Address": [
        4268
      ],
      "Babylonian": [
        5187
      ],
      "Context": [
        4290
      ],
      "Counters": [
        4364
      ],
      "ERC1155": [
        1483
      ],
      "ERC165": [
        4614
      ],
      "ERC20": [
        2473
      ],
      "ERC721": [
        3443
      ],
      "IERC1155": [
        1605
      ],
      "IERC1155MetadataURI": [
        1887
      ],
      "IERC1155Receiver": [
        1646
      ],
      "IERC165": [
        4626
      ],
      "IERC20": [
        2551
      ],
      "IERC20Metadata": [
        2576
      ],
      "IERC721": [
        3559
      ],
      "IERC721Metadata": [
        3973
      ],
      "IERC721Receiver": [
        3577
      ],
      "JMToken": [
        6174
      ],
      "LPT": [
        6227
      ],
      "LiquidityPool": [
        7043
      ],
      "MapleUser": [
        11422
      ],
      "Math": [
        5130
      ],
      "Ownable": [
        112
      ],
      "Pausable": [
        220
      ],
      "ReentrancyGuard": [
        260
      ],
      "Strings": [
        4590
      ],
      "VJMToken": [
        12262
      ]
    },
    "id": 11423,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10732,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:34"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 10733,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11423,
        "sourceUnit": 3444,
        "src": "57:57:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC1155/ERC1155.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/ERC1155.sol",
        "id": 10734,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11423,
        "sourceUnit": 1484,
        "src": "115:59:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
        "id": 10735,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11423,
        "sourceUnit": 1647,
        "src": "175:68:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 10736,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11423,
        "sourceUnit": 113,
        "src": "244:52:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 10737,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11423,
        "sourceUnit": 4365,
        "src": "297:52:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/JMToken.sol",
        "file": "./JMToken.sol",
        "id": 10738,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11423,
        "sourceUnit": 6175,
        "src": "350:23:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 10739,
              "name": "Ownable",
              "nameLocations": [
                "397:7:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "397:7:34"
            },
            "id": 10740,
            "nodeType": "InheritanceSpecifier",
            "src": "397:7:34"
          }
        ],
        "canonicalName": "MapleUser",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 11422,
        "linearizedBaseContracts": [
          11422,
          112,
          4290
        ],
        "name": "MapleUser",
        "nameLocation": "384:9:34",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "global": false,
            "id": 10744,
            "libraryName": {
              "id": 10741,
              "name": "Counters",
              "nameLocations": [
                "417:8:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4364,
              "src": "417:8:34"
            },
            "nodeType": "UsingForDirective",
            "src": "411:36:34",
            "typeName": {
              "id": 10743,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 10742,
                "name": "Counters.Counter",
                "nameLocations": [
                  "430:8:34",
                  "439:7:34"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4296,
                "src": "430:16:34"
              },
              "referencedDeclaration": 4296,
              "src": "430:16:34",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$4296_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 10747,
            "mutability": "mutable",
            "name": "_userIds",
            "nameLocation": "477:8:34",
            "nodeType": "VariableDeclaration",
            "scope": 11422,
            "src": "452:33:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$4296_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "id": 10746,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 10745,
                "name": "Counters.Counter",
                "nameLocations": [
                  "452:8:34",
                  "461:7:34"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4296,
                "src": "452:16:34"
              },
              "referencedDeclaration": 4296,
              "src": "452:16:34",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$4296_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 10752,
            "mutability": "mutable",
            "name": "decimals",
            "nameLocation": "499:8:34",
            "nodeType": "VariableDeclaration",
            "scope": 11422,
            "src": "491:25:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10748,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "491:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "id": 10751,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "3130",
                "id": 10749,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "510:2:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_10_by_1",
                  "typeString": "int_const 10"
                },
                "value": "10"
              },
              "nodeType": "BinaryOperation",
              "operator": "**",
              "rightExpression": {
                "hexValue": "3138",
                "id": 10750,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "514:2:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_18_by_1",
                  "typeString": "int_const 18"
                },
                "value": "18"
              },
              "src": "510:6:34",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10755,
            "mutability": "mutable",
            "name": "firstReward",
            "nameLocation": "530:11:34",
            "nodeType": "VariableDeclaration",
            "scope": 11422,
            "src": "522:23:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10753,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "522:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 10754,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "544:1:34",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10758,
            "mutability": "mutable",
            "name": "secondReward",
            "nameLocation": "559:12:34",
            "nodeType": "VariableDeclaration",
            "scope": 11422,
            "src": "551:24:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10756,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "551:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 10757,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "574:1:34",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10761,
            "mutability": "mutable",
            "name": "thirdReward",
            "nameLocation": "589:11:34",
            "nodeType": "VariableDeclaration",
            "scope": 11422,
            "src": "581:23:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10759,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "581:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 10760,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "603:1:34",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10764,
            "mutability": "mutable",
            "name": "token",
            "nameLocation": "627:5:34",
            "nodeType": "VariableDeclaration",
            "scope": 11422,
            "src": "611:21:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_JMToken_$6174",
              "typeString": "contract JMToken"
            },
            "typeName": {
              "id": 10763,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 10762,
                "name": "JMToken",
                "nameLocations": [
                  "611:7:34"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6174,
                "src": "611:7:34"
              },
              "referencedDeclaration": 6174,
              "src": "611:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_JMToken_$6174",
                "typeString": "contract JMToken"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 10766,
            "mutability": "mutable",
            "name": "treasuryWallet",
            "nameLocation": "662:14:34",
            "nodeType": "VariableDeclaration",
            "scope": 11422,
            "src": "638:38:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 10765,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "638:15:34",
              "stateMutability": "payable",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 10768,
            "mutability": "mutable",
            "name": "nftContractAddress",
            "nameLocation": "698:18:34",
            "nodeType": "VariableDeclaration",
            "scope": 11422,
            "src": "682:34:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 10767,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "682:7:34",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 10770,
            "mutability": "mutable",
            "name": "itemContractAddress",
            "nameLocation": "738:19:34",
            "nodeType": "VariableDeclaration",
            "scope": 11422,
            "src": "722:35:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 10769,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "722:7:34",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 10773,
            "mutability": "mutable",
            "name": "addrList",
            "nameLocation": "781:8:34",
            "nodeType": "VariableDeclaration",
            "scope": 11422,
            "src": "763:26:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 10771,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "763:7:34",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 10772,
              "nodeType": "ArrayTypeName",
              "src": "763:9:34",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 10800,
              "nodeType": "Block",
              "src": "970:193:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 10785,
                        "name": "_tokenContractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10775,
                        "src": "990:21:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 10784,
                      "name": "_setToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10889,
                      "src": "980:9:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                        "typeString": "function (address) returns (bool)"
                      }
                    },
                    "id": 10786,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "980:32:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10787,
                  "nodeType": "ExpressionStatement",
                  "src": "980:32:34"
                },
                {
                  "expression": {
                    "id": 10790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10788,
                      "name": "nftContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10768,
                      "src": "1022:18:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 10789,
                      "name": "_nftContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10777,
                      "src": "1043:19:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1022:40:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 10791,
                  "nodeType": "ExpressionStatement",
                  "src": "1022:40:34"
                },
                {
                  "expression": {
                    "id": 10794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10792,
                      "name": "itemContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10770,
                      "src": "1072:19:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 10793,
                      "name": "_itemContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10779,
                      "src": "1094:20:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1072:42:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 10795,
                  "nodeType": "ExpressionStatement",
                  "src": "1072:42:34"
                },
                {
                  "expression": {
                    "id": 10798,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10796,
                      "name": "treasuryWallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10766,
                      "src": "1124:14:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 10797,
                      "name": "_treasuryWallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10781,
                      "src": "1141:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1124:32:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 10799,
                  "nodeType": "ExpressionStatement",
                  "src": "1124:32:34"
                }
              ]
            },
            "id": 10801,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10782,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10775,
                  "mutability": "mutable",
                  "name": "_tokenContractAddress",
                  "nameLocation": "826:21:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10801,
                  "src": "818:29:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10774,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "818:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10777,
                  "mutability": "mutable",
                  "name": "_nftContractAddress",
                  "nameLocation": "865:19:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10801,
                  "src": "857:27:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10776,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "857:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10779,
                  "mutability": "mutable",
                  "name": "_itemContractAddress",
                  "nameLocation": "902:20:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10801,
                  "src": "894:28:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10778,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "894:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10781,
                  "mutability": "mutable",
                  "name": "_treasuryWallet",
                  "nameLocation": "948:15:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10801,
                  "src": "932:31:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 10780,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "932:15:34",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "808:161:34"
            },
            "returnParameters": {
              "id": 10783,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "970:0:34"
            },
            "scope": 11422,
            "src": "796:367:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10806,
            "mutability": "mutable",
            "name": "idUserInfo",
            "nameLocation": "1198:10:34",
            "nodeType": "VariableDeclaration",
            "scope": 11422,
            "src": "1169:39:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserInfo_$10822_storage_$",
              "typeString": "mapping(address => struct MapleUser.UserInfo)"
            },
            "typeName": {
              "id": 10805,
              "keyType": {
                "id": 10802,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1177:7:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1169:28:34",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserInfo_$10822_storage_$",
                "typeString": "mapping(address => struct MapleUser.UserInfo)"
              },
              "valueType": {
                "id": 10804,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 10803,
                  "name": "UserInfo",
                  "nameLocations": [
                    "1188:8:34"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 10822,
                  "src": "1188:8:34"
                },
                "referencedDeclaration": 10822,
                "src": "1188:8:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_UserInfo_$10822_storage_ptr",
                  "typeString": "struct MapleUser.UserInfo"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "MapleUser.Token",
            "id": 10811,
            "members": [
              {
                "constant": false,
                "id": 10808,
                "mutability": "mutable",
                "name": "contractAddr",
                "nameLocation": "1246:12:34",
                "nodeType": "VariableDeclaration",
                "scope": 10811,
                "src": "1238:20:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 10807,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1238:7:34",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 10810,
                "mutability": "mutable",
                "name": "tokenId",
                "nameLocation": "1276:7:34",
                "nodeType": "VariableDeclaration",
                "scope": 10811,
                "src": "1268:15:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 10809,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1268:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Token",
            "nameLocation": "1222:5:34",
            "nodeType": "StructDefinition",
            "scope": 11422,
            "src": "1215:75:34",
            "visibility": "public"
          },
          {
            "canonicalName": "MapleUser.UserInfo",
            "id": 10822,
            "members": [
              {
                "constant": false,
                "id": 10813,
                "mutability": "mutable",
                "name": "userId",
                "nameLocation": "1330:6:34",
                "nodeType": "VariableDeclaration",
                "scope": 10822,
                "src": "1322:14:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 10812,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1322:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 10816,
                "mutability": "mutable",
                "name": "charToken",
                "nameLocation": "1352:9:34",
                "nodeType": "VariableDeclaration",
                "scope": 10822,
                "src": "1346:15:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Token_$10811_storage_ptr",
                  "typeString": "struct MapleUser.Token"
                },
                "typeName": {
                  "id": 10815,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 10814,
                    "name": "Token",
                    "nameLocations": [
                      "1346:5:34"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 10811,
                    "src": "1346:5:34"
                  },
                  "referencedDeclaration": 10811,
                  "src": "1346:5:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Token_$10811_storage_ptr",
                    "typeString": "struct MapleUser.Token"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 10819,
                "mutability": "mutable",
                "name": "weaponToken",
                "nameLocation": "1377:11:34",
                "nodeType": "VariableDeclaration",
                "scope": 10822,
                "src": "1371:17:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Token_$10811_storage_ptr",
                  "typeString": "struct MapleUser.Token"
                },
                "typeName": {
                  "id": 10818,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 10817,
                    "name": "Token",
                    "nameLocations": [
                      "1371:5:34"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 10811,
                    "src": "1371:5:34"
                  },
                  "referencedDeclaration": 10811,
                  "src": "1371:5:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Token_$10811_storage_ptr",
                    "typeString": "struct MapleUser.Token"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 10821,
                "mutability": "mutable",
                "name": "user",
                "nameLocation": "1414:4:34",
                "nodeType": "VariableDeclaration",
                "scope": 10822,
                "src": "1398:20:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 10820,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1398:15:34",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "UserInfo",
            "nameLocation": "1303:8:34",
            "nodeType": "StructDefinition",
            "scope": 11422,
            "src": "1296:129:34",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "eventSelector": "b71cf8dd9f35ff09f0b312ae47365f80792968af9383e6cbc7f9c12054d6cc3d",
            "id": 10832,
            "name": "UserCreated",
            "nameLocation": "1437:11:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10831,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10824,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "charId",
                  "nameLocation": "1467:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10832,
                  "src": "1459:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10823,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1459:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10826,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "weaponId",
                  "nameLocation": "1491:8:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10832,
                  "src": "1483:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10825,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1483:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10828,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "userId",
                  "nameLocation": "1517:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10832,
                  "src": "1509:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10827,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1509:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10830,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1541:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10832,
                  "src": "1533:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10829,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1533:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1449:102:34"
            },
            "src": "1431:121:34"
          },
          {
            "anonymous": false,
            "eventSelector": "b4e54a03420cbd5ff517551dc147bf23b4185e3b819d2f217ea0e6c6281d8d83",
            "id": 10840,
            "name": "UserUpdated",
            "nameLocation": "1564:11:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10834,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "charId",
                  "nameLocation": "1594:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10840,
                  "src": "1586:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10833,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1586:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10836,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "weaponId",
                  "nameLocation": "1618:8:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10840,
                  "src": "1610:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10835,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1610:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10838,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1644:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10840,
                  "src": "1636:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10837,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1636:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1576:78:34"
            },
            "src": "1558:97:34"
          },
          {
            "anonymous": false,
            "eventSelector": "f122cda2b9d69ae7ef8c661da376db0aeaca653ace97b460ec7b9b44b627f6f7",
            "id": 10848,
            "name": "UserMatching",
            "nameLocation": "1667:12:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10847,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10842,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "charId",
                  "nameLocation": "1698:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10848,
                  "src": "1690:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10841,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1690:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10844,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "weaponId",
                  "nameLocation": "1722:8:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10848,
                  "src": "1714:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1714:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10846,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1748:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10848,
                  "src": "1740:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10845,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1740:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1680:78:34"
            },
            "src": "1661:98:34"
          },
          {
            "anonymous": false,
            "eventSelector": "137de303fadc4646f4a417c71277d5b52840db09ad36edf2a7d0f5fb0b983ff5",
            "id": 10856,
            "name": "UserDeleated",
            "nameLocation": "1771:12:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10850,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "charId",
                  "nameLocation": "1802:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10856,
                  "src": "1794:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10849,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1794:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10852,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "weaponId",
                  "nameLocation": "1826:8:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10856,
                  "src": "1818:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10851,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1818:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10854,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1852:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10856,
                  "src": "1844:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10853,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1844:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1784:78:34"
            },
            "src": "1765:98:34"
          },
          {
            "anonymous": false,
            "eventSelector": "f77e4bb9025e3700758004f467a01764ed3e2b0245b45b918b6107e1770f32bb",
            "id": 10862,
            "name": "rewardTransferred",
            "nameLocation": "1875:17:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10858,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "reward",
                  "nameLocation": "1911:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10862,
                  "src": "1903:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1903:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10860,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1935:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10862,
                  "src": "1927:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10859,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1927:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1893:52:34"
            },
            "src": "1869:77:34"
          },
          {
            "body": {
              "id": 10888,
              "nodeType": "Block",
              "src": "2027:116:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 10877,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10872,
                          "name": "_tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10864,
                          "src": "2045:13:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "307830",
                              "id": 10875,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2070:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 10874,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2062:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 10873,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2062:7:34",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 10876,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2062:12:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2045:29:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 10871,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2037:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10878,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2037:38:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10879,
                  "nodeType": "ExpressionStatement",
                  "src": "2037:38:34"
                },
                {
                  "expression": {
                    "id": 10884,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10880,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10764,
                      "src": "2085:5:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$6174",
                        "typeString": "contract JMToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 10882,
                          "name": "_tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10864,
                          "src": "2101:13:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 10881,
                        "name": "JMToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6174,
                        "src": "2093:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_JMToken_$6174_$",
                          "typeString": "type(contract JMToken)"
                        }
                      },
                      "id": 10883,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2093:22:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$6174",
                        "typeString": "contract JMToken"
                      }
                    },
                    "src": "2085:30:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_JMToken_$6174",
                      "typeString": "contract JMToken"
                    }
                  },
                  "id": 10885,
                  "nodeType": "ExpressionStatement",
                  "src": "2085:30:34"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 10886,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2132:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10870,
                  "id": 10887,
                  "nodeType": "Return",
                  "src": "2125:11:34"
                }
              ]
            },
            "id": 10889,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 10867,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 10866,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "2002:9:34"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "2002:9:34"
                },
                "nodeType": "ModifierInvocation",
                "src": "2002:9:34"
              }
            ],
            "name": "_setToken",
            "nameLocation": "1961:9:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10864,
                  "mutability": "mutable",
                  "name": "_tokenAddress",
                  "nameLocation": "1979:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10889,
                  "src": "1971:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10863,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1971:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1970:23:34"
            },
            "returnParameters": {
              "id": 10870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10869,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10889,
                  "src": "2021:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10868,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2021:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2020:6:34"
            },
            "scope": 11422,
            "src": "1952:191:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 10971,
              "nodeType": "Block",
              "src": "2230:862:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 10905,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 10897,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2248:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10898,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2252:6:34",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2248:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "arguments": [
                            {
                              "id": 10903,
                              "name": "_charId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10891,
                              "src": "2297:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 10900,
                                  "name": "nftContractAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10768,
                                  "src": "2269:18:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 10899,
                                "name": "ERC721",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3443,
                                "src": "2262:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC721_$3443_$",
                                  "typeString": "type(contract ERC721)"
                                }
                              },
                              "id": 10901,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2262:26:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC721_$3443",
                                "typeString": "contract ERC721"
                              }
                            },
                            "id": 10902,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2289:7:34",
                            "memberName": "ownerOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2722,
                            "src": "2262:34:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view external returns (address)"
                            }
                          },
                          "id": 10904,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2262:43:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2248:57:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f6e6c7920636861726163746572206f776e6572732063616e207369676e207570",
                        "id": 10906,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2308:35:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f",
                          "typeString": "literal_string \"only character owners can sign up\""
                        },
                        "value": "only character owners can sign up"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f",
                          "typeString": "literal_string \"only character owners can sign up\""
                        }
                      ],
                      "id": 10896,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2240:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10907,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2240:104:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10908,
                  "nodeType": "ExpressionStatement",
                  "src": "2240:104:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 10919,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 10914,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "2401:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10915,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2405:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "2401:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 10916,
                              "name": "_weaponId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10893,
                              "src": "2413:9:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 10911,
                                  "name": "itemContractAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10770,
                                  "src": "2370:19:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 10910,
                                "name": "ERC1155",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1483,
                                "src": "2362:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC1155_$1483_$",
                                  "typeString": "type(contract ERC1155)"
                                }
                              },
                              "id": 10912,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2362:28:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC1155_$1483",
                                "typeString": "contract ERC1155"
                              }
                            },
                            "id": 10913,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2391:9:34",
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 376,
                            "src": "2362:38:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (address,uint256) view external returns (uint256)"
                            }
                          },
                          "id": 10917,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2362:61:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 10918,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2425:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2362:64:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f6e6c7920776561706f6e206f776e6572732063616e207369676e207570",
                        "id": 10920,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2429:32:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9abfea7a1838e9b21b5acd87e6e61e6c5f51e3820429df0deb6f66d62e149bcf",
                          "typeString": "literal_string \"only weapon owners can sign up\""
                        },
                        "value": "only weapon owners can sign up"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9abfea7a1838e9b21b5acd87e6e61e6c5f51e3820429df0deb6f66d62e149bcf",
                          "typeString": "literal_string \"only weapon owners can sign up\""
                        }
                      ],
                      "id": 10909,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2354:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10921,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2354:108:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10922,
                  "nodeType": "ExpressionStatement",
                  "src": "2354:108:34"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 10923,
                        "name": "_userIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10747,
                        "src": "2473:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$4296_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 10925,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2482:9:34",
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4322,
                      "src": "2473:18:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$4296_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$4296_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 10926,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2473:20:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10927,
                  "nodeType": "ExpressionStatement",
                  "src": "2473:20:34"
                },
                {
                  "assignments": [
                    10929
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10929,
                      "mutability": "mutable",
                      "name": "userId",
                      "nameLocation": "2511:6:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 10971,
                      "src": "2503:14:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10928,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2503:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 10933,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 10930,
                        "name": "_userIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10747,
                        "src": "2520:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$4296_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 10931,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2529:7:34",
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4308,
                      "src": "2520:16:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$4296_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$4296_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 10932,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2520:18:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2503:35:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 10937,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2562:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10938,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2566:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2562:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 10934,
                        "name": "addrList",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10773,
                        "src": "2548:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 10936,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2557:4:34",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "2548:13:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$bound_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 10939,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2548:25:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10940,
                  "nodeType": "ExpressionStatement",
                  "src": "2548:25:34"
                },
                {
                  "expression": {
                    "id": 10961,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 10941,
                        "name": "idUserInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10806,
                        "src": "2583:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserInfo_$10822_storage_$",
                          "typeString": "mapping(address => struct MapleUser.UserInfo storage ref)"
                        }
                      },
                      "id": 10944,
                      "indexExpression": {
                        "expression": {
                          "id": 10942,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2594:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10943,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2598:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2594:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2583:22:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_UserInfo_$10822_storage",
                        "typeString": "struct MapleUser.UserInfo storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 10946,
                          "name": "userId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10929,
                          "src": "2639:6:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 10948,
                              "name": "nftContractAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10768,
                              "src": "2708:18:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 10949,
                              "name": "_charId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10891,
                              "src": "2753:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 10947,
                            "name": "Token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10811,
                            "src": "2670:5:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_Token_$10811_storage_ptr_$",
                              "typeString": "type(struct MapleUser.Token storage pointer)"
                            }
                          },
                          "id": 10950,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "nameLocations": [
                            "2694:12:34",
                            "2744:7:34"
                          ],
                          "names": [
                            "contractAddr",
                            "tokenId"
                          ],
                          "nodeType": "FunctionCall",
                          "src": "2670:105:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Token_$10811_memory_ptr",
                            "typeString": "struct MapleUser.Token memory"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 10952,
                              "name": "itemContractAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10770,
                              "src": "2840:19:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 10953,
                              "name": "_weaponId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10893,
                              "src": "2886:9:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 10951,
                            "name": "Token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10811,
                            "src": "2802:5:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_Token_$10811_storage_ptr_$",
                              "typeString": "type(struct MapleUser.Token storage pointer)"
                            }
                          },
                          "id": 10954,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "nameLocations": [
                            "2826:12:34",
                            "2877:7:34"
                          ],
                          "names": [
                            "contractAddr",
                            "tokenId"
                          ],
                          "nodeType": "FunctionCall",
                          "src": "2802:108:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Token_$10811_memory_ptr",
                            "typeString": "struct MapleUser.Token memory"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 10957,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "2938:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10958,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2942:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "2938:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 10956,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2930:8:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 10955,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2930:8:34",
                              "stateMutability": "payable",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 10959,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2930:19:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_struct$_Token_$10811_memory_ptr",
                            "typeString": "struct MapleUser.Token memory"
                          },
                          {
                            "typeIdentifier": "t_struct$_Token_$10811_memory_ptr",
                            "typeString": "struct MapleUser.Token memory"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "id": 10945,
                        "name": "UserInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10822,
                        "src": "2608:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_UserInfo_$10822_storage_ptr_$",
                          "typeString": "type(struct MapleUser.UserInfo storage pointer)"
                        }
                      },
                      "id": 10960,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "2631:6:34",
                        "2659:9:34",
                        "2789:11:34",
                        "2924:4:34"
                      ],
                      "names": [
                        "userId",
                        "charToken",
                        "weaponToken",
                        "user"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "2608:352:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_UserInfo_$10822_memory_ptr",
                        "typeString": "struct MapleUser.UserInfo memory"
                      }
                    },
                    "src": "2583:377:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UserInfo_$10822_storage",
                      "typeString": "struct MapleUser.UserInfo storage ref"
                    }
                  },
                  "id": 10962,
                  "nodeType": "ExpressionStatement",
                  "src": "2583:377:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 10964,
                        "name": "_charId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10891,
                        "src": "3001:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10965,
                        "name": "_weaponId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10893,
                        "src": "3022:9:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10966,
                        "name": "userId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10929,
                        "src": "3045:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 10967,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3065:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3069:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3065:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 10963,
                      "name": "UserCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10832,
                      "src": "2976:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,address)"
                      }
                    },
                    "id": 10969,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2976:109:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10970,
                  "nodeType": "EmitStatement",
                  "src": "2971:114:34"
                }
              ]
            },
            "functionSelector": "aeeda6bf",
            "id": 10972,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "signUp",
            "nameLocation": "2158:6:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10891,
                  "mutability": "mutable",
                  "name": "_charId",
                  "nameLocation": "2182:7:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10972,
                  "src": "2174:15:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10890,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2174:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10893,
                  "mutability": "mutable",
                  "name": "_weaponId",
                  "nameLocation": "2207:9:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10972,
                  "src": "2199:17:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10892,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2199:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2164:58:34"
            },
            "returnParameters": {
              "id": 10895,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2230:0:34"
            },
            "scope": 11422,
            "src": "2149:943:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11011,
              "nodeType": "Block",
              "src": "3156:320:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 10986,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 10978,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "3174:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10979,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3178:6:34",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "3174:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "arguments": [
                            {
                              "id": 10984,
                              "name": "_charId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10974,
                              "src": "3223:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 10981,
                                  "name": "nftContractAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10768,
                                  "src": "3195:18:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 10980,
                                "name": "ERC721",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3443,
                                "src": "3188:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC721_$3443_$",
                                  "typeString": "type(contract ERC721)"
                                }
                              },
                              "id": 10982,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3188:26:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC721_$3443",
                                "typeString": "contract ERC721"
                              }
                            },
                            "id": 10983,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3215:7:34",
                            "memberName": "ownerOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2722,
                            "src": "3188:34:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view external returns (address)"
                            }
                          },
                          "id": 10985,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3188:43:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3174:57:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f6e6c7920636861726163746572206f776e6572732063616e207369676e207570",
                        "id": 10987,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3234:35:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f",
                          "typeString": "literal_string \"only character owners can sign up\""
                        },
                        "value": "only character owners can sign up"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f",
                          "typeString": "literal_string \"only character owners can sign up\""
                        }
                      ],
                      "id": 10977,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3166:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10988,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3166:104:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10989,
                  "nodeType": "ExpressionStatement",
                  "src": "3166:104:34"
                },
                {
                  "expression": {
                    "id": 10997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 10990,
                            "name": "idUserInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10806,
                            "src": "3281:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserInfo_$10822_storage_$",
                              "typeString": "mapping(address => struct MapleUser.UserInfo storage ref)"
                            }
                          },
                          "id": 10993,
                          "indexExpression": {
                            "expression": {
                              "id": 10991,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "3292:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10992,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3296:6:34",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "3292:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3281:22:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10822_storage",
                            "typeString": "struct MapleUser.UserInfo storage ref"
                          }
                        },
                        "id": 10994,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3304:9:34",
                        "memberName": "charToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10816,
                        "src": "3281:32:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Token_$10811_storage",
                          "typeString": "struct MapleUser.Token storage ref"
                        }
                      },
                      "id": 10995,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3314:7:34",
                      "memberName": "tokenId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10810,
                      "src": "3281:40:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 10996,
                      "name": "_charId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10974,
                      "src": "3324:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3281:50:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10998,
                  "nodeType": "ExpressionStatement",
                  "src": "3281:50:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 11000,
                        "name": "_charId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10974,
                        "src": "3372:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "expression": {
                            "baseExpression": {
                              "id": 11001,
                              "name": "idUserInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10806,
                              "src": "3393:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserInfo_$10822_storage_$",
                                "typeString": "mapping(address => struct MapleUser.UserInfo storage ref)"
                              }
                            },
                            "id": 11004,
                            "indexExpression": {
                              "expression": {
                                "id": 11002,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "3404:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 11003,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3408:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "3404:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3393:22:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10822_storage",
                              "typeString": "struct MapleUser.UserInfo storage ref"
                            }
                          },
                          "id": 11005,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3416:11:34",
                          "memberName": "weaponToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10819,
                          "src": "3393:34:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Token_$10811_storage",
                            "typeString": "struct MapleUser.Token storage ref"
                          }
                        },
                        "id": 11006,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3428:7:34",
                        "memberName": "tokenId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10810,
                        "src": "3393:42:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 11007,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3449:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11008,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3453:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3449:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 10999,
                      "name": "UserUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10840,
                      "src": "3347:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,uint256,address)"
                      }
                    },
                    "id": 11009,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3347:122:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11010,
                  "nodeType": "EmitStatement",
                  "src": "3342:127:34"
                }
              ]
            },
            "functionSelector": "99c6dc05",
            "id": 11012,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateChar",
            "nameLocation": "3107:10:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10974,
                  "mutability": "mutable",
                  "name": "_charId",
                  "nameLocation": "3135:7:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11012,
                  "src": "3127:15:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10973,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3127:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3117:31:34"
            },
            "returnParameters": {
              "id": 10976,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3156:0:34"
            },
            "scope": 11422,
            "src": "3098:378:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11052,
              "nodeType": "Block",
              "src": "3544:336:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11027,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 11022,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "3601:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 11023,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3605:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "3601:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 11024,
                              "name": "_weaponId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11014,
                              "src": "3613:9:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 11019,
                                  "name": "itemContractAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10770,
                                  "src": "3570:19:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 11018,
                                "name": "ERC1155",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1483,
                                "src": "3562:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC1155_$1483_$",
                                  "typeString": "type(contract ERC1155)"
                                }
                              },
                              "id": 11020,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3562:28:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC1155_$1483",
                                "typeString": "contract ERC1155"
                              }
                            },
                            "id": 11021,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3591:9:34",
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 376,
                            "src": "3562:38:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (address,uint256) view external returns (uint256)"
                            }
                          },
                          "id": 11025,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3562:61:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 11026,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3625:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3562:64:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f6e6c7920776561706f6e206f776e6572732063616e207570646174652075736572496e666f",
                        "id": 11028,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3629:40:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b0fe3178bf6775920488275d1750f1843a0b30545c0744042557cc3e471381af",
                          "typeString": "literal_string \"only weapon owners can update userInfo\""
                        },
                        "value": "only weapon owners can update userInfo"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b0fe3178bf6775920488275d1750f1843a0b30545c0744042557cc3e471381af",
                          "typeString": "literal_string \"only weapon owners can update userInfo\""
                        }
                      ],
                      "id": 11017,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3554:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11029,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3554:116:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11030,
                  "nodeType": "ExpressionStatement",
                  "src": "3554:116:34"
                },
                {
                  "expression": {
                    "id": 11038,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 11031,
                            "name": "idUserInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10806,
                            "src": "3681:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserInfo_$10822_storage_$",
                              "typeString": "mapping(address => struct MapleUser.UserInfo storage ref)"
                            }
                          },
                          "id": 11034,
                          "indexExpression": {
                            "expression": {
                              "id": 11032,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "3692:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 11033,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3696:6:34",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "3692:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3681:22:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10822_storage",
                            "typeString": "struct MapleUser.UserInfo storage ref"
                          }
                        },
                        "id": 11035,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3704:11:34",
                        "memberName": "weaponToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10819,
                        "src": "3681:34:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Token_$10811_storage",
                          "typeString": "struct MapleUser.Token storage ref"
                        }
                      },
                      "id": 11036,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3716:7:34",
                      "memberName": "tokenId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10810,
                      "src": "3681:42:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 11037,
                      "name": "_weaponId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11014,
                      "src": "3726:9:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3681:54:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11039,
                  "nodeType": "ExpressionStatement",
                  "src": "3681:54:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "expression": {
                            "baseExpression": {
                              "id": 11041,
                              "name": "idUserInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10806,
                              "src": "3776:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserInfo_$10822_storage_$",
                                "typeString": "mapping(address => struct MapleUser.UserInfo storage ref)"
                              }
                            },
                            "id": 11044,
                            "indexExpression": {
                              "expression": {
                                "id": 11042,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "3787:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 11043,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3791:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "3787:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3776:22:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10822_storage",
                              "typeString": "struct MapleUser.UserInfo storage ref"
                            }
                          },
                          "id": 11045,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3799:9:34",
                          "memberName": "charToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10816,
                          "src": "3776:32:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Token_$10811_storage",
                            "typeString": "struct MapleUser.Token storage ref"
                          }
                        },
                        "id": 11046,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3809:7:34",
                        "memberName": "tokenId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10810,
                        "src": "3776:40:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11047,
                        "name": "_weaponId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11014,
                        "src": "3830:9:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 11048,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3853:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11049,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3857:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3853:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 11040,
                      "name": "UserUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10840,
                      "src": "3751:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,uint256,address)"
                      }
                    },
                    "id": 11050,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3751:122:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11051,
                  "nodeType": "EmitStatement",
                  "src": "3746:127:34"
                }
              ]
            },
            "functionSelector": "b62d08d4",
            "id": 11053,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateWeapon",
            "nameLocation": "3491:12:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11014,
                  "mutability": "mutable",
                  "name": "_weaponId",
                  "nameLocation": "3521:9:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11053,
                  "src": "3513:17:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11013,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3513:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3503:33:34"
            },
            "returnParameters": {
              "id": 11016,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3544:0:34"
            },
            "scope": 11422,
            "src": "3482:398:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11098,
              "nodeType": "Block",
              "src": "3966:471:34",
              "statements": [
                {
                  "assignments": [
                    11061
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11061,
                      "mutability": "mutable",
                      "name": "reward",
                      "nameLocation": "4149:6:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11098,
                      "src": "4141:14:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11060,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4141:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11063,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 11062,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4158:1:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4141:18:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11066,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11064,
                      "name": "_rank",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11055,
                      "src": "4172:5:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 11065,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4179:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "4172:8:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11074,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 11072,
                        "name": "_rank",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11055,
                        "src": "4243:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "32",
                        "id": 11073,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4250:1:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "4243:8:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11082,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11080,
                          "name": "_rank",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11055,
                          "src": "4315:5:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "33",
                          "id": 11081,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4322:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          },
                          "value": "3"
                        },
                        "src": "4315:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "id": 11092,
                        "nodeType": "Block",
                        "src": "4373:35:34",
                        "statements": [
                          {
                            "expression": {
                              "id": 11090,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 11088,
                                "name": "reward",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11061,
                                "src": "4387:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "hexValue": "30",
                                "id": 11089,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4396:1:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "4387:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11091,
                            "nodeType": "ExpressionStatement",
                            "src": "4387:10:34"
                          }
                        ]
                      },
                      "id": 11093,
                      "nodeType": "IfStatement",
                      "src": "4312:96:34",
                      "trueBody": {
                        "id": 11087,
                        "nodeType": "Block",
                        "src": "4324:45:34",
                        "statements": [
                          {
                            "expression": {
                              "id": 11085,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 11083,
                                "name": "reward",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11061,
                                "src": "4338:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "id": 11084,
                                "name": "thirdReward",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10761,
                                "src": "4347:11:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "4338:20:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11086,
                            "nodeType": "ExpressionStatement",
                            "src": "4338:20:34"
                          }
                        ]
                      }
                    },
                    "id": 11094,
                    "nodeType": "IfStatement",
                    "src": "4240:168:34",
                    "trueBody": {
                      "id": 11079,
                      "nodeType": "Block",
                      "src": "4252:46:34",
                      "statements": [
                        {
                          "expression": {
                            "id": 11077,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 11075,
                              "name": "reward",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11061,
                              "src": "4266:6:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "id": 11076,
                              "name": "secondReward",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10758,
                              "src": "4275:12:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4266:21:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11078,
                          "nodeType": "ExpressionStatement",
                          "src": "4266:21:34"
                        }
                      ]
                    }
                  },
                  "id": 11095,
                  "nodeType": "IfStatement",
                  "src": "4169:239:34",
                  "trueBody": {
                    "id": 11071,
                    "nodeType": "Block",
                    "src": "4181:45:34",
                    "statements": [
                      {
                        "expression": {
                          "id": 11069,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11067,
                            "name": "reward",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11061,
                            "src": "4195:6:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 11068,
                            "name": "firstReward",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10755,
                            "src": "4204:11:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4195:20:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11070,
                        "nodeType": "ExpressionStatement",
                        "src": "4195:20:34"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 11096,
                    "name": "reward",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11061,
                    "src": "4424:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11059,
                  "id": 11097,
                  "nodeType": "Return",
                  "src": "4417:13:34"
                }
              ]
            },
            "functionSelector": "e4698991",
            "id": 11099,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checkReward",
            "nameLocation": "3895:11:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11056,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11055,
                  "mutability": "mutable",
                  "name": "_rank",
                  "nameLocation": "3924:5:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11099,
                  "src": "3916:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11054,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3916:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3906:29:34"
            },
            "returnParameters": {
              "id": 11059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11058,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11099,
                  "src": "3957:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11057,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3957:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3956:9:34"
            },
            "scope": 11422,
            "src": "3886:551:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11128,
              "nodeType": "Block",
              "src": "4488:110:34",
              "statements": [
                {
                  "expression": {
                    "id": 11110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11104,
                      "name": "firstReward",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10755,
                      "src": "4498:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11105,
                          "name": "reward",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11101,
                          "src": "4511:6:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "hexValue": "35",
                          "id": 11106,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4518:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_5_by_1",
                            "typeString": "int_const 5"
                          },
                          "value": "5"
                        },
                        "src": "4511:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3130",
                        "id": 11108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4520:2:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "4511:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4498:24:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11111,
                  "nodeType": "ExpressionStatement",
                  "src": "4498:24:34"
                },
                {
                  "expression": {
                    "id": 11118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11112,
                      "name": "secondReward",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10758,
                      "src": "4532:12:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11113,
                          "name": "reward",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11101,
                          "src": "4546:6:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "hexValue": "33",
                          "id": 11114,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4553:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          },
                          "value": "3"
                        },
                        "src": "4546:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3130",
                        "id": 11116,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4555:2:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "4546:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4532:25:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11119,
                  "nodeType": "ExpressionStatement",
                  "src": "4532:25:34"
                },
                {
                  "expression": {
                    "id": 11126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11120,
                      "name": "thirdReward",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10761,
                      "src": "4567:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11121,
                          "name": "reward",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11101,
                          "src": "4580:6:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 11122,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4587:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "4580:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3130",
                        "id": 11124,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4589:2:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "4580:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4567:24:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11127,
                  "nodeType": "ExpressionStatement",
                  "src": "4567:24:34"
                }
              ]
            },
            "functionSelector": "a3469f74",
            "id": 11129,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setRankReward",
            "nameLocation": "4452:13:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11102,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11101,
                  "mutability": "mutable",
                  "name": "reward",
                  "nameLocation": "4474:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11129,
                  "src": "4466:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11100,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4466:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4465:16:34"
            },
            "returnParameters": {
              "id": 11103,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4488:0:34"
            },
            "scope": 11422,
            "src": "4443:155:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11220,
              "nodeType": "Block",
              "src": "4663:850:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 11141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11137,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11135,
                            "name": "_rank",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11131,
                            "src": "4778:5:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "hexValue": "34",
                            "id": 11136,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4784:1:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "4778:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11140,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11138,
                            "name": "_rank",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11131,
                            "src": "4787:5:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 11139,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4793:1:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4787:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "4778:16:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "796f75206e65656420746f2072616e6b20757020666f722074686520726577617264",
                        "id": 11142,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4797:36:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_31a6f823e3ae97fdcda2fc01a3b621cb6a86a2be5567ef06565daa4942f7e905",
                          "typeString": "literal_string \"you need to rank up for the reward\""
                        },
                        "value": "you need to rank up for the reward"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_31a6f823e3ae97fdcda2fc01a3b621cb6a86a2be5567ef06565daa4942f7e905",
                          "typeString": "literal_string \"you need to rank up for the reward\""
                        }
                      ],
                      "id": 11134,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4770:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4770:64:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11144,
                  "nodeType": "ExpressionStatement",
                  "src": "4770:64:34"
                },
                {
                  "assignments": [
                    11146
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11146,
                      "mutability": "mutable",
                      "name": "reward",
                      "nameLocation": "4861:6:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11220,
                      "src": "4853:14:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11145,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4853:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11148,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 11147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4870:1:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4853:18:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11151,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11149,
                      "name": "_rank",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11131,
                      "src": "4884:5:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 11150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4891:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "4884:8:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11163,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 11161,
                        "name": "_rank",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11131,
                        "src": "4984:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "32",
                        "id": 11162,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4991:1:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "4984:8:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11175,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11173,
                          "name": "_rank",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11131,
                          "src": "5086:5:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "33",
                          "id": 11174,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5093:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          },
                          "value": "3"
                        },
                        "src": "5086:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 11185,
                      "nodeType": "IfStatement",
                      "src": "5083:86:34",
                      "trueBody": {
                        "id": 11184,
                        "nodeType": "Block",
                        "src": "5095:74:34",
                        "statements": [
                          {
                            "expression": {
                              "id": 11178,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 11176,
                                "name": "reward",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11146,
                                "src": "5109:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "id": 11177,
                                "name": "thirdReward",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10761,
                                "src": "5118:11:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "5109:20:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11179,
                            "nodeType": "ExpressionStatement",
                            "src": "5109:20:34"
                          },
                          {
                            "expression": {
                              "id": 11182,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 11180,
                                "name": "thirdReward",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10761,
                                "src": "5143:11:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "hexValue": "30",
                                "id": 11181,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5157:1:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "5143:15:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11183,
                            "nodeType": "ExpressionStatement",
                            "src": "5143:15:34"
                          }
                        ]
                      }
                    },
                    "id": 11186,
                    "nodeType": "IfStatement",
                    "src": "4981:188:34",
                    "trueBody": {
                      "id": 11172,
                      "nodeType": "Block",
                      "src": "4993:76:34",
                      "statements": [
                        {
                          "expression": {
                            "id": 11166,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 11164,
                              "name": "reward",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11146,
                              "src": "5007:6:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "id": 11165,
                              "name": "secondReward",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10758,
                              "src": "5016:12:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5007:21:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11167,
                          "nodeType": "ExpressionStatement",
                          "src": "5007:21:34"
                        },
                        {
                          "expression": {
                            "id": 11170,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 11168,
                              "name": "secondReward",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10758,
                              "src": "5042:12:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "hexValue": "30",
                              "id": 11169,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5057:1:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "5042:16:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11171,
                          "nodeType": "ExpressionStatement",
                          "src": "5042:16:34"
                        }
                      ]
                    }
                  },
                  "id": 11187,
                  "nodeType": "IfStatement",
                  "src": "4881:288:34",
                  "trueBody": {
                    "id": 11160,
                    "nodeType": "Block",
                    "src": "4893:74:34",
                    "statements": [
                      {
                        "expression": {
                          "id": 11154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11152,
                            "name": "reward",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11146,
                            "src": "4907:6:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 11153,
                            "name": "firstReward",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10755,
                            "src": "4916:11:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4907:20:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11155,
                        "nodeType": "ExpressionStatement",
                        "src": "4907:20:34"
                      },
                      {
                        "expression": {
                          "id": 11158,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11156,
                            "name": "firstReward",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10755,
                            "src": "4941:11:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "30",
                            "id": 11157,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4955:1:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4941:15:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11159,
                        "nodeType": "ExpressionStatement",
                        "src": "4941:15:34"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    11189
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11189,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "5184:7:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11220,
                      "src": "5179:12:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 11188,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "5179:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11199,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 11192,
                        "name": "treasuryWallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10766,
                        "src": "5239:14:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 11195,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "5275:4:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MapleUser_$11422",
                              "typeString": "contract MapleUser"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MapleUser_$11422",
                              "typeString": "contract MapleUser"
                            }
                          ],
                          "id": 11194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5267:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 11193,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5267:7:34",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 11196,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5267:13:34",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 11197,
                        "name": "reward",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11146,
                        "src": "5294:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 11190,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10764,
                        "src": "5194:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6174",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 11191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5200:25:34",
                      "memberName": "increaseContractAllowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5981,
                      "src": "5194:31:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 11198,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5194:116:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5179:131:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 11201,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11189,
                        "src": "5328:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e637265617365436f6e7472616374204661696c",
                        "id": 11202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5337:23:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4",
                          "typeString": "literal_string \"IncreaseContract Fail\""
                        },
                        "value": "IncreaseContract Fail"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4",
                          "typeString": "literal_string \"IncreaseContract Fail\""
                        }
                      ],
                      "id": 11200,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5320:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11203,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5320:41:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11204,
                  "nodeType": "ExpressionStatement",
                  "src": "5320:41:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 11208,
                        "name": "treasuryWallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10766,
                        "src": "5390:14:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "expression": {
                          "id": 11209,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "5406:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11210,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5410:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5406:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 11211,
                        "name": "reward",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11146,
                        "src": "5418:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 11205,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10764,
                        "src": "5371:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6174",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 11207,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5377:12:34",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2087,
                      "src": "5371:18:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 11212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5371:54:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11213,
                  "nodeType": "ExpressionStatement",
                  "src": "5371:54:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 11215,
                        "name": "reward",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11146,
                        "src": "5469:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 11216,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "5485:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11217,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5489:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5485:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 11214,
                      "name": "rewardTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10862,
                      "src": "5441:17:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 11218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5441:64:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11219,
                  "nodeType": "EmitStatement",
                  "src": "5436:69:34"
                }
              ]
            },
            "functionSelector": "d99380b4",
            "id": 11221,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "requestReward",
            "nameLocation": "4613:13:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11131,
                  "mutability": "mutable",
                  "name": "_rank",
                  "nameLocation": "4644:5:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11221,
                  "src": "4636:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11130,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4636:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4626:29:34"
            },
            "returnParameters": {
              "id": 11133,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4663:0:34"
            },
            "scope": 11422,
            "src": "4604:909:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11288,
              "nodeType": "Block",
              "src": "5591:468:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11234,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 11230,
                              "name": "_userIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10747,
                              "src": "5609:8:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Counter_$4296_storage",
                                "typeString": "struct Counters.Counter storage ref"
                              }
                            },
                            "id": 11231,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5618:7:34",
                            "memberName": "current",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4308,
                            "src": "5609:16:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$4296_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$4296_storage_ptr_$",
                              "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                            }
                          },
                          "id": 11232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5609:18:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 11233,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5629:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5609:21:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "796f752061726520746865206f6e6c79206f6e6520706c61796572",
                        "id": 11235,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5632:29:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_06c7266a375a0b7849b454e6c13ab1c26263d1dc67aeec645a7b8f63d86a6ddf",
                          "typeString": "literal_string \"you are the only one player\""
                        },
                        "value": "you are the only one player"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_06c7266a375a0b7849b454e6c13ab1c26263d1dc67aeec645a7b8f63d86a6ddf",
                          "typeString": "literal_string \"you are the only one player\""
                        }
                      ],
                      "id": 11229,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5601:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11236,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5601:61:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11237,
                  "nodeType": "ExpressionStatement",
                  "src": "5601:61:34"
                },
                {
                  "assignments": [
                    11239
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11239,
                      "mutability": "mutable",
                      "name": "userCount",
                      "nameLocation": "5677:9:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11288,
                      "src": "5672:14:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11238,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "5672:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11243,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 11240,
                        "name": "_userIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10747,
                        "src": "5689:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$4296_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 11241,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5698:7:34",
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4308,
                      "src": "5689:16:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$4296_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$4296_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 11242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5689:18:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5672:35:34"
                },
                {
                  "assignments": [
                    11245
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11245,
                      "mutability": "mutable",
                      "name": "n",
                      "nameLocation": "5725:1:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11288,
                      "src": "5717:9:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11244,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5717:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11259,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11258,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 11251,
                                    "name": "block",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967292,
                                    "src": "5764:5:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_block",
                                      "typeString": "block"
                                    }
                                  },
                                  "id": 11252,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5770:9:34",
                                  "memberName": "timestamp",
                                  "nodeType": "MemberAccess",
                                  "src": "5764:15:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "id": 11249,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967295,
                                  "src": "5747:3:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 11250,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "5751:12:34",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "5747:16:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 11253,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5747:33:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 11248,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967288,
                            "src": "5737:9:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 11254,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5737:44:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 11247,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5729:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 11246,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5729:7:34",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 11255,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5729:53:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "components": [
                        {
                          "id": 11256,
                          "name": "userCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11239,
                          "src": "5786:9:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 11257,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "5785:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5729:67:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5717:79:34"
                },
                {
                  "assignments": [
                    11261
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11261,
                      "mutability": "mutable",
                      "name": "matchUserAddr",
                      "nameLocation": "5814:13:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11288,
                      "src": "5806:21:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 11260,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5806:7:34",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11265,
                  "initialValue": {
                    "baseExpression": {
                      "id": 11262,
                      "name": "addrList",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10773,
                      "src": "5830:8:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "id": 11264,
                    "indexExpression": {
                      "id": 11263,
                      "name": "n",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11245,
                      "src": "5839:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "5830:11:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5806:35:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 11271,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 11266,
                          "name": "idUserInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10806,
                          "src": "5854:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserInfo_$10822_storage_$",
                            "typeString": "mapping(address => struct MapleUser.UserInfo storage ref)"
                          }
                        },
                        "id": 11268,
                        "indexExpression": {
                          "id": 11267,
                          "name": "matchUserAddr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11261,
                          "src": "5865:13:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5854:25:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_UserInfo_$10822_storage",
                          "typeString": "struct MapleUser.UserInfo storage ref"
                        }
                      },
                      "id": 11269,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5880:4:34",
                      "memberName": "user",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10821,
                      "src": "5854:30:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 11270,
                      "name": "_user",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11223,
                      "src": "5888:5:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5854:39:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 11286,
                    "nodeType": "Block",
                    "src": "6005:48:34",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 11283,
                              "name": "_user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11223,
                              "src": "6036:5:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 11282,
                            "name": "matchUser",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11289,
                            "src": "6026:9:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_struct$_UserInfo_$10822_memory_ptr_$",
                              "typeString": "function (address) view returns (struct MapleUser.UserInfo memory)"
                            }
                          },
                          "id": 11284,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6026:16:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10822_memory_ptr",
                            "typeString": "struct MapleUser.UserInfo memory"
                          }
                        },
                        "functionReturnParameters": 11228,
                        "id": 11285,
                        "nodeType": "Return",
                        "src": "6019:23:34"
                      }
                    ]
                  },
                  "id": 11287,
                  "nodeType": "IfStatement",
                  "src": "5851:202:34",
                  "trueBody": {
                    "id": 11281,
                    "nodeType": "Block",
                    "src": "5894:107:34",
                    "statements": [
                      {
                        "assignments": [
                          11274
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 11274,
                            "mutability": "mutable",
                            "name": "opponent",
                            "nameLocation": "5924:8:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 11281,
                            "src": "5908:24:34",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10822_memory_ptr",
                              "typeString": "struct MapleUser.UserInfo"
                            },
                            "typeName": {
                              "id": 11273,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 11272,
                                "name": "UserInfo",
                                "nameLocations": [
                                  "5908:8:34"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 10822,
                                "src": "5908:8:34"
                              },
                              "referencedDeclaration": 10822,
                              "src": "5908:8:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_UserInfo_$10822_storage_ptr",
                                "typeString": "struct MapleUser.UserInfo"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 11278,
                        "initialValue": {
                          "baseExpression": {
                            "id": 11275,
                            "name": "idUserInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10806,
                            "src": "5936:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserInfo_$10822_storage_$",
                              "typeString": "mapping(address => struct MapleUser.UserInfo storage ref)"
                            }
                          },
                          "id": 11277,
                          "indexExpression": {
                            "id": 11276,
                            "name": "matchUserAddr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11261,
                            "src": "5947:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5936:25:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10822_storage",
                            "typeString": "struct MapleUser.UserInfo storage ref"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "5908:53:34"
                      },
                      {
                        "expression": {
                          "id": 11279,
                          "name": "opponent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11274,
                          "src": "5982:8:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10822_memory_ptr",
                            "typeString": "struct MapleUser.UserInfo memory"
                          }
                        },
                        "functionReturnParameters": 11228,
                        "id": 11280,
                        "nodeType": "Return",
                        "src": "5975:15:34"
                      }
                    ]
                  }
                }
              ]
            },
            "functionSelector": "da56ef3a",
            "id": 11289,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "matchUser",
            "nameLocation": "5528:9:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11224,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11223,
                  "mutability": "mutable",
                  "name": "_user",
                  "nameLocation": "5546:5:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11289,
                  "src": "5538:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11222,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5538:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5537:15:34"
            },
            "returnParameters": {
              "id": 11228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11227,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11289,
                  "src": "5574:15:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UserInfo_$10822_memory_ptr",
                    "typeString": "struct MapleUser.UserInfo"
                  },
                  "typeName": {
                    "id": 11226,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 11225,
                      "name": "UserInfo",
                      "nameLocations": [
                        "5574:8:34"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 10822,
                      "src": "5574:8:34"
                    },
                    "referencedDeclaration": 10822,
                    "src": "5574:8:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UserInfo_$10822_storage_ptr",
                      "typeString": "struct MapleUser.UserInfo"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5573:17:34"
            },
            "scope": 11422,
            "src": "5519:540:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11301,
              "nodeType": "Block",
              "src": "6137:41:34",
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 11297,
                      "name": "idUserInfo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10806,
                      "src": "6154:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserInfo_$10822_storage_$",
                        "typeString": "mapping(address => struct MapleUser.UserInfo storage ref)"
                      }
                    },
                    "id": 11299,
                    "indexExpression": {
                      "id": 11298,
                      "name": "_user",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11291,
                      "src": "6165:5:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "6154:17:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UserInfo_$10822_storage",
                      "typeString": "struct MapleUser.UserInfo storage ref"
                    }
                  },
                  "functionReturnParameters": 11296,
                  "id": 11300,
                  "nodeType": "Return",
                  "src": "6147:24:34"
                }
              ]
            },
            "functionSelector": "be6f0ea2",
            "id": 11302,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fetchUser",
            "nameLocation": "6074:9:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11291,
                  "mutability": "mutable",
                  "name": "_user",
                  "nameLocation": "6092:5:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11302,
                  "src": "6084:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11290,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6084:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6083:15:34"
            },
            "returnParameters": {
              "id": 11296,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11295,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11302,
                  "src": "6120:15:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UserInfo_$10822_memory_ptr",
                    "typeString": "struct MapleUser.UserInfo"
                  },
                  "typeName": {
                    "id": 11294,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 11293,
                      "name": "UserInfo",
                      "nameLocations": [
                        "6120:8:34"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 10822,
                      "src": "6120:8:34"
                    },
                    "referencedDeclaration": 10822,
                    "src": "6120:8:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UserInfo_$10822_storage_ptr",
                      "typeString": "struct MapleUser.UserInfo"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6119:17:34"
            },
            "scope": 11422,
            "src": "6065:113:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11360,
              "nodeType": "Block",
              "src": "6246:345:34",
              "statements": [
                {
                  "assignments": [
                    11310
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11310,
                      "mutability": "mutable",
                      "name": "userCount",
                      "nameLocation": "6261:9:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11360,
                      "src": "6256:14:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11309,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6256:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11314,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 11311,
                        "name": "_userIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10747,
                        "src": "6273:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$4296_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 11312,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6282:7:34",
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4308,
                      "src": "6273:16:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$4296_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$4296_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 11313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6273:18:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6256:35:34"
                },
                {
                  "assignments": [
                    11319
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11319,
                      "mutability": "mutable",
                      "name": "users",
                      "nameLocation": "6319:5:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11360,
                      "src": "6301:23:34",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_UserInfo_$10822_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct MapleUser.UserInfo[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 11317,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 11316,
                            "name": "UserInfo",
                            "nameLocations": [
                              "6301:8:34"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 10822,
                            "src": "6301:8:34"
                          },
                          "referencedDeclaration": 10822,
                          "src": "6301:8:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10822_storage_ptr",
                            "typeString": "struct MapleUser.UserInfo"
                          }
                        },
                        "id": 11318,
                        "nodeType": "ArrayTypeName",
                        "src": "6301:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_UserInfo_$10822_storage_$dyn_storage_ptr",
                          "typeString": "struct MapleUser.UserInfo[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11326,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 11324,
                        "name": "userCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11310,
                        "src": "6343:9:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 11323,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "6328:14:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_UserInfo_$10822_memory_ptr_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (struct MapleUser.UserInfo memory[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 11321,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 11320,
                            "name": "UserInfo",
                            "nameLocations": [
                              "6332:8:34"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 10822,
                            "src": "6332:8:34"
                          },
                          "referencedDeclaration": 10822,
                          "src": "6332:8:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10822_storage_ptr",
                            "typeString": "struct MapleUser.UserInfo"
                          }
                        },
                        "id": 11322,
                        "nodeType": "ArrayTypeName",
                        "src": "6332:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_UserInfo_$10822_storage_$dyn_storage_ptr",
                          "typeString": "struct MapleUser.UserInfo[]"
                        }
                      }
                    },
                    "id": 11325,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6328:25:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_UserInfo_$10822_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct MapleUser.UserInfo memory[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6301:52:34"
                },
                {
                  "body": {
                    "id": 11356,
                    "nodeType": "Block",
                    "src": "6401:162:34",
                    "statements": [
                      {
                        "assignments": [
                          11338
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 11338,
                            "mutability": "mutable",
                            "name": "currentAddr",
                            "nameLocation": "6423:11:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 11356,
                            "src": "6415:19:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 11337,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6415:7:34",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 11342,
                        "initialValue": {
                          "baseExpression": {
                            "id": 11339,
                            "name": "addrList",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10773,
                            "src": "6437:8:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage",
                              "typeString": "address[] storage ref"
                            }
                          },
                          "id": 11341,
                          "indexExpression": {
                            "id": 11340,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11328,
                            "src": "6446:1:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6437:11:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6415:33:34"
                      },
                      {
                        "assignments": [
                          11345
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 11345,
                            "mutability": "mutable",
                            "name": "currentUser",
                            "nameLocation": "6479:11:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 11356,
                            "src": "6462:28:34",
                            "stateVariable": false,
                            "storageLocation": "storage",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10822_storage_ptr",
                              "typeString": "struct MapleUser.UserInfo"
                            },
                            "typeName": {
                              "id": 11344,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 11343,
                                "name": "UserInfo",
                                "nameLocations": [
                                  "6462:8:34"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 10822,
                                "src": "6462:8:34"
                              },
                              "referencedDeclaration": 10822,
                              "src": "6462:8:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_UserInfo_$10822_storage_ptr",
                                "typeString": "struct MapleUser.UserInfo"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 11349,
                        "initialValue": {
                          "baseExpression": {
                            "id": 11346,
                            "name": "idUserInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10806,
                            "src": "6493:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserInfo_$10822_storage_$",
                              "typeString": "mapping(address => struct MapleUser.UserInfo storage ref)"
                            }
                          },
                          "id": 11348,
                          "indexExpression": {
                            "id": 11347,
                            "name": "currentAddr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11338,
                            "src": "6504:11:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6493:23:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10822_storage",
                            "typeString": "struct MapleUser.UserInfo storage ref"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6462:54:34"
                      },
                      {
                        "expression": {
                          "id": 11354,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 11350,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11319,
                              "src": "6530:5:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_UserInfo_$10822_memory_ptr_$dyn_memory_ptr",
                                "typeString": "struct MapleUser.UserInfo memory[] memory"
                              }
                            },
                            "id": 11352,
                            "indexExpression": {
                              "id": 11351,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11328,
                              "src": "6536:1:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "6530:8:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10822_memory_ptr",
                              "typeString": "struct MapleUser.UserInfo memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 11353,
                            "name": "currentUser",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11345,
                            "src": "6541:11:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10822_storage_ptr",
                              "typeString": "struct MapleUser.UserInfo storage pointer"
                            }
                          },
                          "src": "6530:22:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10822_memory_ptr",
                            "typeString": "struct MapleUser.UserInfo memory"
                          }
                        },
                        "id": 11355,
                        "nodeType": "ExpressionStatement",
                        "src": "6530:22:34"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11331,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11328,
                      "src": "6381:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 11332,
                      "name": "userCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11310,
                      "src": "6385:9:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6381:13:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11357,
                  "initializationExpression": {
                    "assignments": [
                      11328
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 11328,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6374:1:34",
                        "nodeType": "VariableDeclaration",
                        "scope": 11357,
                        "src": "6369:6:34",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 11327,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "6369:4:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 11330,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 11329,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6378:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6369:10:34"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 11335,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6396:3:34",
                      "subExpression": {
                        "id": 11334,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11328,
                        "src": "6396:1:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 11336,
                    "nodeType": "ExpressionStatement",
                    "src": "6396:3:34"
                  },
                  "nodeType": "ForStatement",
                  "src": "6364:199:34"
                },
                {
                  "expression": {
                    "id": 11358,
                    "name": "users",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11319,
                    "src": "6579:5:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_UserInfo_$10822_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct MapleUser.UserInfo memory[] memory"
                    }
                  },
                  "functionReturnParameters": 11308,
                  "id": 11359,
                  "nodeType": "Return",
                  "src": "6572:12:34"
                }
              ]
            },
            "functionSelector": "bfcad433",
            "id": 11361,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fetchUsers",
            "nameLocation": "6193:10:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11303,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6203:2:34"
            },
            "returnParameters": {
              "id": 11308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11307,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11361,
                  "src": "6227:17:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_UserInfo_$10822_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct MapleUser.UserInfo[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 11305,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 11304,
                        "name": "UserInfo",
                        "nameLocations": [
                          "6227:8:34"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 10822,
                        "src": "6227:8:34"
                      },
                      "referencedDeclaration": 10822,
                      "src": "6227:8:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_UserInfo_$10822_storage_ptr",
                        "typeString": "struct MapleUser.UserInfo"
                      }
                    },
                    "id": 11306,
                    "nodeType": "ArrayTypeName",
                    "src": "6227:10:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_UserInfo_$10822_storage_$dyn_storage_ptr",
                      "typeString": "struct MapleUser.UserInfo[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6226:19:34"
            },
            "scope": 11422,
            "src": "6184:407:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11380,
              "nodeType": "Block",
              "src": "6706:55:34",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 11376,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "6723:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MapleUser_$11422",
                          "typeString": "contract MapleUser"
                        }
                      },
                      "id": 11377,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6728:17:34",
                      "memberName": "onERC1155Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11381,
                      "src": "6723:22:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256,uint256,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 11378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "6746:8:34",
                    "memberName": "selector",
                    "nodeType": "MemberAccess",
                    "src": "6723:31:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 11375,
                  "id": 11379,
                  "nodeType": "Return",
                  "src": "6716:38:34"
                }
              ]
            },
            "functionSelector": "f23a6e61",
            "id": 11381,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155Received",
            "nameLocation": "6606:17:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11363,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11381,
                  "src": "6624:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11362,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6624:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11365,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11381,
                  "src": "6633:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11364,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6633:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11367,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11381,
                  "src": "6642:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11366,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6642:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11369,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11381,
                  "src": "6651:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11368,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6651:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11371,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11381,
                  "src": "6660:12:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 11370,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6660:5:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6623:50:34"
            },
            "returnParameters": {
              "id": 11375,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11374,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11381,
                  "src": "6698:6:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 11373,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "6698:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6697:8:34"
            },
            "scope": 11422,
            "src": "6597:164:34",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11402,
              "nodeType": "Block",
              "src": "6899:60:34",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 11398,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "6916:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MapleUser_$11422",
                          "typeString": "contract MapleUser"
                        }
                      },
                      "id": 11399,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6921:22:34",
                      "memberName": "onERC1155BatchReceived",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11403,
                      "src": "6916:27:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 11400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "6944:8:34",
                    "memberName": "selector",
                    "nodeType": "MemberAccess",
                    "src": "6916:36:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 11397,
                  "id": 11401,
                  "nodeType": "Return",
                  "src": "6909:43:34"
                }
              ]
            },
            "functionSelector": "bc197c81",
            "id": 11403,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155BatchReceived",
            "nameLocation": "6776:22:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11394,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11383,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11403,
                  "src": "6799:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11382,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6799:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11385,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11403,
                  "src": "6808:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11384,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6808:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11388,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11403,
                  "src": "6817:16:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 11386,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6817:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 11387,
                    "nodeType": "ArrayTypeName",
                    "src": "6817:9:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11391,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11403,
                  "src": "6835:16:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 11389,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6835:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 11390,
                    "nodeType": "ArrayTypeName",
                    "src": "6835:9:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11393,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11403,
                  "src": "6853:12:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 11392,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6853:5:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6798:68:34"
            },
            "returnParameters": {
              "id": 11397,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11396,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11403,
                  "src": "6891:6:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 11395,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "6891:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6890:8:34"
            },
            "scope": 11422,
            "src": "6767:192:34",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11420,
              "nodeType": "Block",
              "src": "7064:54:34",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 11416,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "7081:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MapleUser_$11422",
                          "typeString": "contract MapleUser"
                        }
                      },
                      "id": 11417,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7086:16:34",
                      "memberName": "onERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11421,
                      "src": "7081:21:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 11418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "7103:8:34",
                    "memberName": "selector",
                    "nodeType": "MemberAccess",
                    "src": "7081:30:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 11415,
                  "id": 11419,
                  "nodeType": "Return",
                  "src": "7074:37:34"
                }
              ]
            },
            "functionSelector": "150b7a02",
            "id": 11421,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC721Received",
            "nameLocation": "6974:16:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11405,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11421,
                  "src": "6991:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11404,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6991:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11407,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11421,
                  "src": "7000:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11406,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7000:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11409,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11421,
                  "src": "7009:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11408,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7009:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11411,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11421,
                  "src": "7018:12:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 11410,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7018:5:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6990:41:34"
            },
            "returnParameters": {
              "id": 11415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11414,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11421,
                  "src": "7056:6:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 11413,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "7056:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7055:8:34"
            },
            "scope": 11422,
            "src": "6965:153:34",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "scope": 11423,
        "src": "375:6745:34",
        "usedErrors": []
      }
    ],
    "src": "32:7089:34"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        "0xb71cf8dd9f35ff09f0b312ae47365f80792968af9383e6cbc7f9c12054d6cc3d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "charId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "weaponId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "UserCreated",
          "type": "event"
        },
        "0x137de303fadc4646f4a417c71277d5b52840db09ad36edf2a7d0f5fb0b983ff5": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "charId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "weaponId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "UserDeleated",
          "type": "event"
        },
        "0xf122cda2b9d69ae7ef8c661da376db0aeaca653ace97b460ec7b9b44b627f6f7": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "charId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "weaponId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "UserMatching",
          "type": "event"
        },
        "0xb4e54a03420cbd5ff517551dc147bf23b4185e3b819d2f217ea0e6c6281d8d83": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "charId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "weaponId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "UserUpdated",
          "type": "event"
        },
        "0xf77e4bb9025e3700758004f467a01764ed3e2b0245b45b918b6107e1770f32bb": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "reward",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "rewardTransferred",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x981241BaDF31Bf55c5c4f2660A01cecb0cb3F6B2",
      "transactionHash": "0x195682dd22af008462337e44c2c0b79ea2ed978018c7997c949c5dc033bea7a4"
    }
  },
  "schemaVersion": "3.4.9",
  "updatedAt": "2022-09-28T03:01:24.132Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}
module.exports = USER;